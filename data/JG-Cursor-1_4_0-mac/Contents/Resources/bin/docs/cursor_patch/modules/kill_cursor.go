package cursor_tool_modules

import (
	"fmt"
	"os/exec"
	"runtime"
)

// KillCursor 关闭所有正在运行的 Cursor 进程
func KillCursor() error {
	var cmd *exec.Cmd
	
	switch runtime.GOOS {
	case "darwin":
		// macOS: 使用 pkill 命令关闭所有 Cursor 进程
		cmd = exec.Command("pkill", "-f", "Cursor")
	case "windows":
		// Windows: 使用 taskkill 命令关闭所有 Cursor 进程
		cmd = exec.Command("taskkill", "/F", "/IM", "Cursor.exe")
	case "linux":
		// Linux: 使用 pkill 命令关闭所有 Cursor 进程
		cmd = exec.Command("pkill", "-f", "Cursor")
	default:
		return fmt.Errorf("不支持的操作系统: %s", runtime.GOOS)
	}
	
	// 执行命令
	if err := cmd.Run(); err != nil {
		// 如果进程不存在，不返回错误
		if cmd.ProcessState.ExitCode() == 1 {
			return nil
		}
		return fmt.Errorf("关闭Cursor进程失败: %v", err)
	}
	
	return nil
} 