// utility.go 包含一系列实用工具函数
// 这些函数提供了对程序操作的底层支持，包括文件路径处理、进程管理和加密相关功能
package modules

import (
	"crypto/rand"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"time"
)

// getAuthDBPath 获取认证数据库路径
//
// 功能：
// 根据当前操作系统获取Cursor编辑器认证数据库的完整路径
//
// 返回值：
// - string: 认证数据库的完整路径，如：
//   * macOS: ~/Library/Application Support/Cursor/auth.db
//   * Windows: C:/Users/username/AppData/Roaming/Cursor/auth.db
//   * Linux: ~/.config/Cursor/auth.db
//
// 实现逻辑：
// 1. 使用os.UserHomeDir()获取用户主目录
// 2. 根据runtime.GOOS判断当前操作系统类型
// 3. 根据不同操作系统，拼接对应的认证数据库路径
// 4. 如果获取主目录失败，返回默认路径"auth.db"
//
// 错误处理：
// - 获取用户主目录失败时，不会返回错误，而是使用默认路径
func getAuthDBPath() string {
	// 获取用户主目录路径
	// 这是跨平台获取用户目录的标准方法
	home, err := os.UserHomeDir()
	if err != nil {
		return "auth.db" // 获取主目录失败时的默认路径
	}
	
	// 基于操作系统确定数据库路径
	// 不同操作系统的应用数据存储位置不同
	if runtime.GOOS == "darwin" {
		// macOS系统下，应用数据通常存储在Library/Application Support目录下
		return filepath.Join(home, "Library", "Application Support", "Cursor", "auth.db")
	} else if runtime.GOOS == "windows" {
		// Windows系统下，应用数据通常存储在AppData/Roaming目录下
		return filepath.Join(home, "AppData", "Roaming", "Cursor", "auth.db")
	} else {
		// Linux和其他UNIX系统下，应用数据通常存储在.config目录下
		return filepath.Join(home, ".config", "Cursor", "auth.db")
	}
}

// getMachineConfigPath 获取机器配置文件路径
//
// 功能：
// 获取Cursor编辑器机器配置文件的完整路径，该文件存储设备特定的配置
//
// 返回值：
// - string: 机器配置文件的完整路径，如：
//   * macOS: ~/Library/Application Support/Cursor/storage.json
//   * Windows: C:/Users/username/AppData/Roaming/Cursor/storage.json
//   * Linux: ~/.config/Cursor/storage.json
//
// 实现逻辑：
// 1. 使用os.UserHomeDir()获取用户主目录
// 2. 根据runtime.GOOS判断当前操作系统类型
// 3. 根据不同操作系统，拼接对应的配置文件路径
// 4. 如果获取主目录失败，返回默认路径"config.json"
//
// 错误处理：
// - 获取用户主目录失败时，不会返回错误，而是使用默认路径
func getMachineConfigPath() string {
	// 获取用户主目录
	home, err := os.UserHomeDir()
	if err != nil {
		return "config.json" // 获取主目录失败时的默认路径
	}
	
	// 基于操作系统确定配置文件路径
	// 配置文件通常与数据库在同一目录下，但文件名不同
	if runtime.GOOS == "darwin" {
		// macOS系统
		return filepath.Join(home, "Library", "Application Support", "Cursor", "storage.json")
	} else if runtime.GOOS == "windows" {
		// Windows系统
		return filepath.Join(home, "AppData", "Roaming", "Cursor", "storage.json")
	} else {
		// Linux和其他UNIX系统
		return filepath.Join(home, ".config", "Cursor", "storage.json")
	}
}

// getUpdaterPath 获取更新程序路径
//
// 功能：
// 获取Cursor编辑器更新程序的完整路径，该程序负责Cursor的自动更新
//
// 返回值：
// - string: 更新程序的完整路径，如：
//   * macOS: /path/to/CursorUpdate
//   * Windows: C:/path/to/CursorUpdate.exe
//   * Linux: /path/to/CursorUpdate
//
// 实现逻辑：
// 1. 使用os.Executable()获取当前程序的路径
// 2. 提取程序所在目录
// 3. 根据不同操作系统，拼接更新程序的路径
// 4. 如果获取当前程序路径失败，返回默认路径"updater"
//
// 错误处理：
// - 获取当前程序路径失败时，不会返回错误，而是使用默认路径
func getUpdaterPath() string {
	// 获取当前可执行文件的路径
	// 更新程序通常与主程序在同一目录
	execPath, err := os.Executable()
	if err != nil {
		return "updater" // 获取当前程序路径失败时的默认路径
	}
	
	// 获取可执行文件所在的目录
	execDir := filepath.Dir(execPath)
	
	// 基于操作系统确定更新程序路径
	// 不同系统的可执行文件扩展名不同
	if runtime.GOOS == "darwin" {
		// macOS系统下无扩展名
		return filepath.Join(execDir, "CursorUpdate")
	} else if runtime.GOOS == "windows" {
		// Windows系统下有.exe扩展名
		return filepath.Join(execDir, "CursorUpdate.exe")
	} else {
		// Linux和其他UNIX系统下无扩展名
		return filepath.Join(execDir, "CursorUpdate")
	}
}

// killCursor 停止Cursor进程
//
// 功能：
// 尝试终止当前正在运行的Cursor编辑器进程
//
// 返回值：
// - error: 如果停止进程失败，返回错误；成功则返回nil
//
// 实现逻辑：
// 1. 检查Cursor进程是否正在运行
// 2. 如果进程不在运行，直接返回成功
// 3. 如果进程在运行，尝试优雅地结束进程
// 4. 如果优雅结束失败，尝试强制终止进程
// 5. 等待进程完全退出，最多尝试MaxRetries次
//
// 错误处理：
// - 如果在多次尝试后仍无法终止进程，返回错误
// - 进程已经不在运行时，直接返回nil（视为成功）
func killCursor() error {
	// 首先检查Cursor进程是否在运行
	// 如果进程已经不在运行，直接返回成功
	if !isProcessRunning(CursorProcessName) {
		return nil // 进程不在运行，直接返回成功
	}
	
	// 尝试优雅地关闭进程
	// 根据不同操作系统，使用不同的命令
	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		// Windows下使用taskkill命令
		cmd = exec.Command("taskkill", "/F", "/IM", CursorProcessName+".exe")
	} else {
		// Unix/Linux/macOS下使用killall命令
		cmd = exec.Command("killall", CursorProcessName)
	}
	
	// 执行终止命令
	err := cmd.Run()
	if err != nil {
		// 如果优雅关闭失败，尝试强制终止
		var forceCmd *exec.Cmd
		if runtime.GOOS == "windows" {
			// Windows下的强制终止命令
			forceCmd = exec.Command("taskkill", "/F", "/IM", CursorProcessName+".exe")
		} else {
			// Unix/Linux/macOS下的强制终止命令，-9 信号表示强制终止
			forceCmd = exec.Command("killall", "-9", CursorProcessName)
		}
		err = forceCmd.Run()
		if err != nil {
			// 强制终止也失败，返回错误
			return fmt.Errorf("无法终止 %s 进程: %v", CursorProcessName, err)
		}
	}
	
	// 等待进程完全退出
	// 有时进程需要一点时间才能完全退出
	for i := 0; i < MaxRetries; i++ {
		// 检查进程是否已经退出
		if !isProcessRunning(CursorProcessName) {
			return nil // 进程已退出，返回成功
		}
		// 等待一段时间后再次检查
		time.Sleep(RetryInterval)
	}
	
	// 经过多次尝试后仍无法关闭进程，返回错误
	return fmt.Errorf("在 %d 次尝试后仍无法关闭 %s 进程", MaxRetries, CursorProcessName)
}

// openCursor 启动Cursor程序
//
// 功能：
// 尝试启动Cursor编辑器应用程序
//
// 返回值：
// - error: 如果启动失败，返回错误；成功则返回nil
//
// 实现逻辑：
// 1. 根据不同操作系统，列出可能的Cursor程序路径
// 2. 检查每个路径，找到第一个存在的可执行文件
// 3. 以分离模式启动Cursor程序（不阻塞当前进程）
// 4. 如果找不到可执行文件或启动失败，返回错误
//
// 错误处理：
// - 如果在所有可能的路径中都找不到Cursor可执行文件，返回错误
// - 如果启动过程中发生错误，返回详细的错误信息
//
// 示例：
// 在macOS上，会尝试启动以下路径中的第一个存在的文件：
// - /Applications/Cursor.app/Contents/MacOS/Cursor
// - ~/Applications/Cursor.app/Contents/MacOS/Cursor
func openCursor() error {
	// 获取可能的Cursor程序路径
	// 不同操作系统下，应用程序的安装位置不同
	paths := []string{}
	
	// 根据操作系统添加可能的路径
	if runtime.GOOS == "darwin" {
		// macOS 可能的路径
		// Cursor可能安装在系统应用目录或用户应用目录
		paths = append(paths, "/Applications/Cursor.app/Contents/MacOS/Cursor")
		paths = append(paths, "~/Applications/Cursor.app/Contents/MacOS/Cursor")
	} else if runtime.GOOS == "windows" {
		// Windows 可能的路径
		// Cursor可能安装在Program Files或Program Files(x86)目录
		programFiles := os.Getenv("ProgramFiles")
		programFilesX86 := os.Getenv("ProgramFiles(x86)")
		paths = append(paths, filepath.Join(programFiles, "Cursor", "Cursor.exe"))
		if programFilesX86 != "" {
			paths = append(paths, filepath.Join(programFilesX86, "Cursor", "Cursor.exe"))
		}
	} else {
		// Linux 可能的路径
		// Linux下应用程序通常安装在/usr/bin或/usr/local/bin目录
		paths = append(paths, "/usr/bin/cursor")
		paths = append(paths, "/usr/local/bin/cursor")
		paths = append(paths, "/opt/cursor/cursor")
	}
	
	// 尝试每个可能的路径，找到第一个存在的可执行文件
	var cursorPath string
	for _, path := range paths {
		// 展开环境变量
		expandedPath := os.ExpandEnv(path)
		// 处理波浪号（~）开头的路径
		expandedPath = strings.Replace(expandedPath, "~", os.Getenv("HOME"), 1)
		// 检查文件是否存在
		if _, err := os.Stat(expandedPath); err == nil {
			cursorPath = expandedPath
			break
		}
	}
	
	// 如果找不到Cursor可执行文件，返回错误
	if cursorPath == "" {
		return fmt.Errorf("无法找到 Cursor 程序")
	}
	
	// 启动 Cursor
	// 创建命令对象，不设置标准输入输出，以便程序在后台运行
	cmd := exec.Command(cursorPath)
	cmd.Stdin = nil
	cmd.Stdout = nil
	cmd.Stderr = nil
	
	// 以分离模式运行进程
	// 不同操作系统的分离模式设置不同
	if runtime.GOOS == "windows" {
		// Windows下使用DETACHED_PROCESS标志
		cmd.SysProcAttr = &syscall.SysProcAttr{
			CreationFlags: 0x08000000, // DETACHED_PROCESS
		}
	} else {
		// Unix/Linux/macOS下使用setsid创建新会话
		cmd.SysProcAttr = &syscall.SysProcAttr{
			Setsid: true,
		}
	}
	
	// 启动程序但不等待它完成
	err := cmd.Start()
	if err != nil {
		return fmt.Errorf("无法启动 Cursor: %v", err)
	}
	
	// 成功启动，返回nil
	return nil
}

// isProcessRunning 检查进程是否在运行
//
// 功能：
// 检查指定名称的进程是否正在系统中运行
//
// 参数：
// - processName: 要检查的进程名称，不含扩展名
//
// 返回值：
// - bool: 如果进程正在运行，返回true；否则返回false
//
// 实现逻辑：
// 1. 根据操作系统，选择不同的命令来检查进程
// 2. 执行命令并检查输出
// 3. Windows下，通过tasklist命令检查进程名
// 4. Unix/Linux/macOS下，通过pgrep命令检查进程名
//
// 错误处理：
// - 如果命令执行失败，认为进程不在运行，返回false
//
// 示例：
// isProcessRunning("Cursor") 将返回Cursor编辑器是否正在运行
func isProcessRunning(processName string) bool {
	// 根据操作系统选择不同的进程检查命令
	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		// Windows下使用tasklist命令过滤指定进程名
		cmd = exec.Command("tasklist", "/FI", fmt.Sprintf("IMAGENAME eq %s.exe", processName))
	} else {
		// Unix/Linux/macOS下使用pgrep命令查找进程
		cmd = exec.Command("pgrep", processName)
	}
	
	// 执行命令并获取输出
	output, err := cmd.Output()
	if err != nil {
		// 命令执行失败，认为进程不在运行
		return false
	}
	
	// 处理输出，确定进程是否在运行
	if runtime.GOOS == "windows" {
		// Windows下，tasklist命令的输出需要检查是否包含进程名
		return strings.Contains(string(output), processName+".exe")
	}
	
	// Unix/Linux/macOS下，pgrep命令如果有输出则表示进程在运行
	return len(output) > 0
}

// generateUUID 生成UUID
//
// 功能：
// 生成一个标准格式的UUID(通用唯一标识符)，用作机器ID
//
// 返回值：
// - string: 生成的UUID字符串，格式为:
//   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (8-4-4-4-12字符)
//
// 实现逻辑：
// 1. 创建16字节的切片
// 2. 尝试使用加密安全的随机数填充切片
// 3. 如果随机数生成失败，使用当前时间戳作为备选
// 4. 设置UUID版本(版本4)和变体位，符合RFC4122规范
// 5. 格式化UUID为标准字符串格式
//
// 错误处理：
// - 如果加密安全的随机数生成失败，自动降级为使用时间戳
// - 函数不会返回错误，总会生成一个UUID
//
// 生成的UUID示例：
// "f47ac10b-58cc-4372-a567-0e02b2c3d479"
func generateUUID() string {
	// 创建16字节的切片，用于存储UUID数据
	uuid := make([]byte, 16)
	
	// 尝试使用加密安全的随机数填充UUID
	_, err := rand.Read(uuid)
	if err != nil {
		// 如果随机数生成失败，使用时间戳作为备选
		// 这提供了一个降级方案，确保总能生成一个值
		ts := time.Now().UnixNano()
		for i := 0; i < 16; i++ {
			// 从时间戳中提取字节填充UUID
			uuid[i] = byte((ts >> (i * 8)) & 0xff)
		}
	}
	
	// 设置 UUID 版本 (4) 和变体位
	// 符合RFC4122规范的UUID格式
	uuid[6] = (uuid[6] & 0x0f) | 0x40 // 版本 4 (随机数生成)
	uuid[8] = (uuid[8] & 0x3f) | 0x80 // 变体 RFC4122
	
	// 格式化UUID为标准字符串格式
	// 8-4-4-4-12格式的十六进制字符串
	return fmt.Sprintf("%x-%x-%x-%x-%x",
		uuid[0:4], uuid[4:6], uuid[6:8], uuid[8:10], uuid[10:16])
}

// generateHash 生成哈希值
//
// 功能：
// 为输入的字节数组生成一个简单的哈希值
//
// 参数：
// - data: 要计算哈希的字节数组
//
// 返回值：
// - string: 生成的哈希值，以十六进制字符串表示
//
// 实现逻辑：
// 1. 检查输入数据是否为空，如果为空返回空字符串
// 2. 使用一个简单的哈希算法处理输入数据
//    - 该算法是DJB2哈希算法的变种
//    - 循环处理每个字节，使用公式: hash = ((hash << 5) + hash) + byte
// 3. 将最终的哈希值转换为十六进制字符串
//
// 错误处理：
// - 如果输入数据为空，直接返回空字符串
//
// 注意：
// - 这是一个简单的哈希算法，不适用于安全性要求高的场景
// - 从汇编代码复原的算法可能与原始实现有细微差别
func generateHash(data []byte) string {
	// 检查输入数据是否为空
	if len(data) == 0 {
		return ""
	}
	
	// 初始化哈希值
	hash := uint32(0)
	
	// 循环处理每个字节，使用DJB2算法的变种
	// hash = ((hash << 5) + hash) + byte = hash * 33 + byte
	for _, b := range data {
		hash = ((hash << 5) + hash) + uint32(b)
	}
	
	// 将哈希值转换为十六进制字符串
	return fmt.Sprintf("%x", hash)
} 