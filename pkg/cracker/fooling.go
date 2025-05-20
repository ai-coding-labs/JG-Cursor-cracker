package cracker

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"regexp"
	"time"
)

type Fooling struct {
	asarManager *AsarManager
	deviceId    string
	console     *Console
}

func NewFooling() *Fooling {
	console := NewConsole()
	console.EnableRainbowMode(true)

	return &Fooling{
		asarManager: NewAsarManager(),
		deviceId:    "JG-Cursor-" + fmt.Sprintf("%d", time.Now().Unix()),
		console:     console,
	}
}

// SetDeviceId 设置自定义设备ID
func (f *Fooling) SetDeviceId(deviceId string) {
	f.deviceId = deviceId
	f.console.Info("设备ID已设置为: %s", deviceId)
}

func (f *Fooling) Fool(jgCursorHomeDirectory string) error {
	f.console.Highlight("开始破解JG-Cursor...")

	// 确保asar命令可用
	if err := f.asarManager.EnsureAsarInstalled(); err != nil {
		f.console.Error("安装asar失败: %v", err)
		return fmt.Errorf("安装asar失败: %v", err)
	}

	// 构建asar文件路径
	asarFilePath := filepath.Join(jgCursorHomeDirectory, "Contents", "Resources", "app.asar")
	if _, err := os.Stat(asarFilePath); err != nil {
		f.console.Error("app.asar文件不存在: %v", err)
		return fmt.Errorf("app.asar文件不存在: %v", err)
	}

	// 创建临时目录用于解包
	tempDir, err := os.MkdirTemp("", "jg-cursor-crack-*")
	if err != nil {
		f.console.Error("创建临时目录失败: %v", err)
		return fmt.Errorf("创建临时目录失败: %v", err)
	}
	defer os.RemoveAll(tempDir) // 完成后清理

	f.console.Debug("临时解包目录: %s", tempDir)

	// 解包asar文件到临时目录
	if err := f.asarManager.ExtractAsarArchive(asarFilePath, tempDir); err != nil {
		f.console.Error("解包asar文件失败: %v", err)
		return fmt.Errorf("解包asar文件失败: %v", err)
	}

	// 修改preload.js文件
	preloadJsPath := filepath.Join(tempDir, "dist", "preload", "preload.js")
	f.console.Info("正在修改preload.js文件...")
	if err := f.modifyPreloadJs(preloadJsPath); err != nil {
		f.console.Error("修改preload.js文件失败: %v", err)
		return fmt.Errorf("修改preload.js文件失败: %v", err)
	}

	// 备份原始asar文件
	backupPath := asarFilePath + ".bak-" + time.Now().Format("20060102-150405")
	f.console.Info("正在备份原始asar文件...")
	if err := copyFile(asarFilePath, backupPath); err != nil {
		f.console.Error("备份原始asar文件失败: %v", err)
		return fmt.Errorf("备份原始asar文件失败: %v", err)
	}
	f.console.Success("原始文件已备份到: %s", backupPath)

	// 重新打包asar文件
	tempAsarPath := filepath.Join(os.TempDir(), "app.asar")
	if err := f.asarManager.PackAsarArchive(tempDir, tempAsarPath); err != nil {
		f.console.Error("重新打包asar文件失败: %v", err)
		return fmt.Errorf("重新打包asar文件失败: %v", err)
	}

	// 替换原始asar文件
	f.console.Info("正在替换原始asar文件...")
	if err := copyFile(tempAsarPath, asarFilePath); err != nil {
		f.console.Error("替换原始asar文件失败: %v", err)
		return fmt.Errorf("替换原始asar文件失败: %v", err)
	}
	os.Remove(tempAsarPath) // 删除临时asar文件

	f.console.Highlight("破解成功！Cursor已激活！")
	f.console.Success("设备ID已设置为: %s", f.deviceId)
	f.console.Info("请重启JG-Cursor应用以使修改生效")
	return nil
}

// 修改preload.js文件
func (f *Fooling) modifyPreloadJs(filePath string) error {
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return err
	}

	originalContent := string(content)
	modifiedContent := originalContent

	// 使用更精确的正则表达式匹配getDeviceId函数
	// 匹配形式: getDeviceId:function(){return e.ipcRenderer.invoke("get-device-id")}
	getDeviceIdPattern := regexp.MustCompile(`getDeviceId:function\(\)\{[^}]*\}`)
	matches := getDeviceIdPattern.FindStringSubmatch(originalContent)
	if len(matches) > 0 {
		f.console.Debug("找到getDeviceId方法，原值为: %s", matches[0])

		// 用新的getDeviceId方法替换原来的方法，直接返回自定义设备ID
		newGetDeviceId := fmt.Sprintf(`getDeviceId:function(){return"%s"}`, f.deviceId)
		modifiedContent = getDeviceIdPattern.ReplaceAllString(modifiedContent, newGetDeviceId)
		f.console.Success("getDeviceId方法已替换")
	} else {
		// 如果没有找到，尝试使用更宽松的匹配模式
		loosePattern := regexp.MustCompile(`getDeviceId:[^,}]+`)
		matches = loosePattern.FindStringSubmatch(originalContent)
		if len(matches) > 0 {
			f.console.Debug("使用宽松模式找到getDeviceId方法，原值为: %s", matches[0])

			// 用新的getDeviceId方法替换原来的方法
			newGetDeviceId := fmt.Sprintf(`getDeviceId:function(){return"%s"}`, f.deviceId)
			modifiedContent = loosePattern.ReplaceAllString(modifiedContent, newGetDeviceId)
			f.console.Success("getDeviceId方法已替换（宽松模式）")
		} else {
			f.console.Warning("未找到getDeviceId方法，尝试添加新方法")

			// 如果找不到getDeviceId方法，尝试在合适的位置添加
			// 查找electronAPI对象的起始位置
			apiPattern := regexp.MustCompile(`exposeInMainWorld\s*\(\s*["']electronAPI["']\s*,\s*\{`)
			apiMatches := apiPattern.FindStringSubmatch(originalContent)
			if len(apiMatches) > 0 {
				// 在electronAPI对象的开始位置添加getDeviceId方法
				newContent := apiPattern.ReplaceAllString(originalContent,
					fmt.Sprintf(`exposeInMainWorld("electronAPI",{getDeviceId:function(){return"%s"},`, f.deviceId))
				modifiedContent = newContent
				f.console.Success("已添加getDeviceId方法到electronAPI对象")
			} else {
				f.console.Error("无法找到适合添加getDeviceId方法的位置")
				return fmt.Errorf("无法找到适合添加getDeviceId方法的位置")
			}
		}
	}

	// 检查是否有修改
	if modifiedContent == originalContent {
		f.console.Warning("未对文件进行任何修改，破解可能失败")
		return fmt.Errorf("未对preload.js文件进行任何修改")
	}

	// 写回文件
	f.console.Success("preload.js文件修改成功")
	return ioutil.WriteFile(filePath, []byte(modifiedContent), 0644)
}

// 复制文件辅助函数
func copyFile(src, dst string) error {
	input, err := ioutil.ReadFile(src)
	if err != nil {
		return err
	}
	return ioutil.WriteFile(dst, input, 0644)
}
