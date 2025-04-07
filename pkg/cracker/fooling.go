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

	// 修改main.js文件
	mainJsPath := filepath.Join(tempDir, "dist", "main", "main.js")
	f.console.Info("正在修改main.js文件...")
	if err := f.modifyMainJs(mainJsPath); err != nil {
		f.console.Error("修改main.js文件失败: %v", err)
		return fmt.Errorf("修改main.js文件失败: %v", err)
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

// 修改main.js文件
func (f *Fooling) modifyMainJs(filePath string) error {
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return err
	}

	originalContent := string(content)
	modifiedContent := originalContent

	// 替换设备ID设置
	deviceIdSetPattern := regexp.MustCompile(`M\.set\("deviceId",[^)]+\)`)
	matches := deviceIdSetPattern.FindStringSubmatch(originalContent)
	if len(matches) > 0 {
		f.console.Debug("找到deviceId设置模式，原值为: %s", matches[0])
		modifiedContent = deviceIdSetPattern.ReplaceAllString(modifiedContent,
			fmt.Sprintf(`M.set("deviceId","%s")`, f.deviceId))
	} else {
		f.console.Warning("未找到deviceId设置模式")
	}

	// 替换设备ID获取
	deviceIdGetPattern := regexp.MustCompile(`e=M\.get\("deviceId"\)\)return\[2,[^]]+\]`)
	matches = deviceIdGetPattern.FindStringSubmatch(originalContent)
	if len(matches) > 0 {
		f.console.Debug("找到deviceId获取模式，原值为: %s", matches[0])
		modifiedContent = deviceIdGetPattern.ReplaceAllString(modifiedContent,
			fmt.Sprintf(`e=M.get("deviceId"))return[2,"%s"]`, f.deviceId))
	} else {
		f.console.Warning("未找到deviceId获取模式")
	}

	// 替换初始deviceId返回
	initialDeviceIdPattern := regexp.MustCompile(`if\s*\(e=M\.get\("deviceId"\)\)return\s*\[2,\s*[^]]+\]`)
	matches = initialDeviceIdPattern.FindStringSubmatch(originalContent)
	if len(matches) > 0 {
		f.console.Debug("找到初始deviceId返回模式，原值为: %s", matches[0])
		modifiedContent = initialDeviceIdPattern.ReplaceAllString(modifiedContent,
			fmt.Sprintf(`if(e=M.get("deviceId"))return[2,"%s"]`, f.deviceId))
	} else {
		f.console.Warning("未找到初始deviceId返回模式")
	}

	// 替换MAC地址生成的deviceId
	macPattern := regexp.MustCompile(`M\.set\("deviceId",[^)]+\),\[2,[^]]+\]`)
	matches = macPattern.FindStringSubmatch(originalContent)
	if len(matches) > 0 {
		f.console.Debug("找到MAC地址生成deviceId模式，原值为: %s", matches[0])
		modifiedContent = macPattern.ReplaceAllString(modifiedContent,
			fmt.Sprintf(`M.set("deviceId","%s"),[2,"%s"]`, f.deviceId, f.deviceId))
	} else {
		f.console.Warning("未找到MAC地址生成deviceId模式")
	}

	// 替换UUID生成的deviceId
	uuidPattern := regexp.MustCompile(`i=\(0,E\.v4\(\)\)\.slice\(0,16\),M\.set\("deviceId",[^)]+\),\[2,[^]]+\]`)
	matches = uuidPattern.FindStringSubmatch(originalContent)
	if len(matches) > 0 {
		f.console.Debug("找到UUID生成deviceId模式，原值为: %s", matches[0])
		modifiedContent = uuidPattern.ReplaceAllString(modifiedContent,
			fmt.Sprintf(`i="%s",M.set("deviceId","%s"),[2,"%s"]`, f.deviceId, f.deviceId, f.deviceId))
	} else {
		f.console.Warning("未找到UUID生成deviceId模式")
	}

	// 检查是否有修改
	if modifiedContent == originalContent {
		f.console.Warning("未对文件进行任何修改，可能模式已变化")
	} else {
		f.console.Success("文件修改成功")
	}

	// 写回文件
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
