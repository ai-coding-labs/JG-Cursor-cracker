// disable_update.go 实现了禁用Cursor编辑器自动更新功能
// 该文件通过替换更新程序和创建特殊标记，阻止Cursor自动更新到新版本
// 适用于需要固定使用特定版本Cursor的场景
package modules

import (
	"fmt"
	"os"
	"path/filepath"
)

// DisableUpdate 禁用Cursor编辑器的自动更新功能
//
// 功能：
// 通过替换更新程序或修改文件权限，永久禁止Cursor编辑器的自动更新功能。
// 该操作可以锁定特定版本的Cursor编辑器，防止意外升级导致的兼容性问题。
//
// 返回值：
// - error: 操作过程中的错误；如果成功则返回nil
//
// 执行逻辑：
// 1. 获取Cursor更新程序的路径
// 2. 检查更新程序是否存在
// 3. 如果更新程序存在，备份它
// 4. 创建一个空的只读文件替代原更新程序
// 5. 创建额外的标记文件防止更新
//
// 示例调用：
// err := DisableUpdate()
//
// 错误处理：
// - 如果无法检查更新程序存在状态，返回错误
// - 如果备份原更新程序失败，返回错误
// - 如果创建新的只读文件失败，返回错误
// - 如果设置文件权限失败，返回错误
// - 创建更新禁用标记失败仅输出警告，不中断流程
func DisableUpdate() error {
	// 1. 获取更新程序路径
	// 获取Cursor编辑器更新程序的完整路径
	updaterPath := getUpdaterPath()
	
	// 2. 检查文件是否存在
	// 使用os.Stat检查文件状态
	_, err := os.Stat(updaterPath)
	if os.IsNotExist(err) {
		// 2.1 文件不存在的情况
		// 更新程序不存在，只需创建空文件即可
		fmt.Printf("更新程序不存在，将创建空文件: %s\n", updaterPath)
	} else if err != nil {
		// 2.2 检查过程出错
		// 文件系统错误或权限问题，返回错误
		return fmt.Errorf("无法检查更新程序: %v", err)
	} else {
		// 2.3 文件存在，需要备份
		// 定义备份文件路径，添加.bak扩展名
		backupPath := updaterPath + ".bak"
		
		// 3. 先删除可能存在的旧备份文件
		// 使用os.Remove尝试删除，忽略可能的错误
		_ = os.Remove(backupPath)
		
		// 4. 重命名当前更新程序文件为备份
		// 使用os.Rename移动文件
		if err := os.Rename(updaterPath, backupPath); err != nil {
			// 备份失败，返回详细错误
			return fmt.Errorf("无法备份更新程序: %v", err)
		}
		
		// 备份成功，输出确认信息
		fmt.Printf("已备份原更新程序到: %s\n", backupPath)
	}
	
	// 5. 创建一个空的同名文件
	// 使用只写模式打开文件，创建不存在的文件
	// 设置初始权限为只读(0400)
	f, err := os.OpenFile(updaterPath, os.O_CREATE|os.O_WRONLY, 0400)
	if err != nil {
		// 创建文件失败，返回错误
		return fmt.Errorf("无法创建替代文件: %v", err)
	}
	// 关闭文件，后续操作不需要文件句柄
	f.Close()
	
	// 6. 确保文件是只读的
	// 使用os.Chmod明确设置文件权限为只读
	// 这样确保即使系统默认umask导致创建权限不同，也能强制设为只读
	if err := os.Chmod(updaterPath, 0400); err != nil {
		// 设置权限失败，返回错误
		return fmt.Errorf("无法设置文件权限: %v", err)
	}
	
	// 7. 创建防止更新的目录标记
	// 通过分析发现这个函数还会创建一个.noupdates文件或目录
	// 这是Cursor检测是否应该禁用更新的另一个标志
	noUpdatePath := filepath.Join(filepath.Dir(updaterPath), ".noupdates")
	// 写入禁用标记内容
	if err := os.WriteFile(noUpdatePath, []byte("disabled"), 0644); err != nil {
		// 创建标记失败只输出警告，不影响主要功能
		fmt.Printf("警告: 无法创建更新禁用标记: %v\n", err)
	}
	
	// 8. 输出操作成功信息
	fmt.Println("更新功能已禁用")
	fmt.Printf("- 更新程序路径: %s\n", updaterPath)
	fmt.Println("- 文件权限: 只读")
	
	// 9. 操作成功完成
	return nil
} 