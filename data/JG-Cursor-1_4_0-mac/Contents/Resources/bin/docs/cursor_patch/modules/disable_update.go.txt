package cursor_tool_modules

import (
	"fmt"
	"os"
)

// DisableUpdate 禁用 Cursor 的自动更新功能
func DisableUpdate() error {
	// 获取更新器目录路径
	updaterPath := getUpdaterPath()
	
	// 如果更新器目录不存在，返回错误
	if updaterPath == "" {
		return fmt.Errorf("不支持的操作系统")
	}
	
	// 检查更新器目录是否存在
	fileInfo, err := os.Stat(updaterPath)
	if err == nil && fileInfo.IsDir() {
		// 如果目录存在，尝试删除它
		err = os.RemoveAll(updaterPath)
		if err != nil {
			return fmt.Errorf("删除更新器目录失败: %v", err)
		}
	}
	
	// 创建一个空文件来代替更新器目录，这样 Cursor 就无法创建自动更新器目录
	file, err := os.OpenFile(updaterPath, os.O_CREATE|os.O_RDWR, 0292) // 0292 = 0444 (只读)
	if err != nil {
		return fmt.Errorf("创建阻止文件失败: %v", err)
	}
	
	// 关闭文件
	if file != nil {
		file.Close()
	}
	
	// 设置文件为只读权限
	err = os.Chmod(updaterPath, 0292) // 0292 = 0444 (只读)
	if err != nil {
		return fmt.Errorf("设置文件只读失败: %v", err)
	}
	
	return nil
} 