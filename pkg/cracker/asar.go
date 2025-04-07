package cracker

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

// 包装exec函数，便于测试时mock
var lookPathFunc = exec.LookPath
var commandFunc = exec.Command
var commandRunFunc = func(cmd *exec.Cmd) error {
	return cmd.Run()
}
var commandOutputFunc = func(cmd *exec.Cmd) ([]byte, error) {
	return cmd.CombinedOutput()
}

// AsarManager 负责确保asar命令可用并执行asar相关操作
type AsarManager struct {
	asarPath string
	console  *Console
}

// NewAsarManager 创建新的AsarManager实例
func NewAsarManager() *AsarManager {
	return &AsarManager{
		console: NewConsole(),
	}
}

// EnsureAsarInstalled 确保asar命令已安装，如果未安装则尝试安装
func (a *AsarManager) EnsureAsarInstalled() error {
	// 先检查asar是否已安装
	path, err := lookPathFunc("asar")
	if err == nil {
		a.asarPath = path
		a.console.Info("asar已安装: %s", path)
		return nil
	}

	a.console.Warning("asar未安装，尝试自动安装...")

	// 检查npm和cnpm是否可用
	cnpmPath, _ := lookPathFunc("cnpm")
	npmPath, npmErr := lookPathFunc("npm")

	// 如果cnpm和npm都不可用，返回错误
	if cnpmPath == "" && npmErr != nil {
		return fmt.Errorf("无法安装asar: npm和cnpm均未找到，请先安装Node.js")
	}

	var cmd *exec.Cmd
	stopSpinner := a.console.StartSpinner("正在安装asar...")

	if cnpmPath != "" {
		// 优先使用cnpm
		a.console.Info("使用cnpm安装asar...")
		cmd = commandFunc(cnpmPath, "install", "-g", "asar")
	} else {
		// 使用npm
		a.console.Info("使用npm安装asar...")
		cmd = commandFunc(npmPath, "install", "-g", "asar")
	}

	// 设置命令输出到标准输出和标准错误
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// 执行安装命令
	if err := commandRunFunc(cmd); err != nil {
		stopSpinner()
		return fmt.Errorf("安装asar失败: %v", err)
	}

	// 重新检查asar是否已安装
	path, err = lookPathFunc("asar")
	stopSpinner()

	if err != nil {
		return fmt.Errorf("asar安装后仍无法找到: %v", err)
	}

	a.asarPath = path
	a.console.Success("asar安装成功: %s", path)
	return nil
}

// ExtractAsarArchive 解压asar文件到指定目录
func (a *AsarManager) ExtractAsarArchive(asarFilePath, outputDir string) error {
	if a.asarPath == "" {
		if err := a.EnsureAsarInstalled(); err != nil {
			return err
		}
	}

	// 创建输出目录（如果不存在）
	if err := os.MkdirAll(outputDir, 0755); err != nil {
		return fmt.Errorf("创建输出目录失败: %v", err)
	}

	// 执行asar extract命令
	a.console.Info("开始解压 %s...", filepath.Base(asarFilePath))
	stopSpinner := a.console.StartSpinner("正在解压asar文件...")

	cmd := commandFunc(a.asarPath, "extract", asarFilePath, outputDir)
	output, err := commandOutputFunc(cmd)
	stopSpinner()

	if err != nil {
		a.console.Error("解压失败: %v", err)
		a.console.Debug("命令输出: %s", string(output))
		return fmt.Errorf("解压asar文件失败: %v", err)
	}

	a.console.Success("已成功解压 %s 到 %s", filepath.Base(asarFilePath), outputDir)
	return nil
}

// PackAsarArchive 将目录打包为asar文件
func (a *AsarManager) PackAsarArchive(inputDir, outputAsarFile string) error {
	if a.asarPath == "" {
		if err := a.EnsureAsarInstalled(); err != nil {
			return err
		}
	}

	// 确保输出目录存在
	outputDir := filepath.Dir(outputAsarFile)
	if err := os.MkdirAll(outputDir, 0755); err != nil {
		return fmt.Errorf("创建输出目录失败: %v", err)
	}

	// 执行asar pack命令
	a.console.Info("开始打包 %s...", filepath.Base(inputDir))
	stopSpinner := a.console.StartSpinner("正在打包为asar文件...")

	cmd := commandFunc(a.asarPath, "pack", inputDir, outputAsarFile)
	output, err := commandOutputFunc(cmd)
	stopSpinner()

	if err != nil {
		a.console.Error("打包失败: %v", err)
		a.console.Debug("命令输出: %s", string(output))
		return fmt.Errorf("打包asar文件失败: %v", err)
	}

	a.console.Success("已成功将 %s 打包为 %s", filepath.Base(inputDir), filepath.Base(outputAsarFile))
	return nil
}
