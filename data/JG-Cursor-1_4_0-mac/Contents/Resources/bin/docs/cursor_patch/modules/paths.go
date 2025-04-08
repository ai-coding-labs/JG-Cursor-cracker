package cursor_tool_modules

import (
	"os"
	"path/filepath"
)

// 配置文件路径
func getMachineConfigPath() string {
	// 此函数应返回 Cursor 配置文件的路径，例如在 macOS 上是在 Library/Application Support/Cursor/ 目录
	return filepath.Join(os.Getenv("HOME"), "Library", "Application Support", "Cursor", "storage.json")
}

// 获取更新器路径
func getUpdaterPath() string {
	// 返回 Cursor 自动更新器的路径
	return filepath.Join(os.Getenv("HOME"), "Library", "Application Support", "cursor-updater")
} 