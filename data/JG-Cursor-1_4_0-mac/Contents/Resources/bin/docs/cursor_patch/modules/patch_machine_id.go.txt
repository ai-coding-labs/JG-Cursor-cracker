package cursor_tool_modules

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
)

// PatchMachineID 修改 Cursor 的机器ID相关代码，使其始终返回相同的ID
func PatchMachineID() error {
	// 寻找 main.js 文件的路径
	mainJSPath := filepath.Join("/Applications", "Cursor.app", "Contents", "Resources", "app", "out", "main.js")
	
	// 检查文件是否存在
	_, err := os.Stat(mainJSPath)
	if os.IsNotExist(err) {
		return fmt.Errorf("找不到 main.js, 请重新安装Cursor: %s", mainJSPath)
	}
	
	// 读取 main.js 文件内容
	content, err := os.ReadFile(mainJSPath)
	if err != nil {
		return fmt.Errorf("读取 main.js 失败(可能已打过补丁，请刷新后测试是否使用): %v", err)
	}
	
	// 创建备份文件
	backupPath := mainJSPath + ".backup"
	err = os.WriteFile(backupPath, content, 0644)
	if err != nil {
		return fmt.Errorf("备份 main.js 失败: %v", err)
	}
	
	// 定义正则表达式用于查找和替换机器ID相关的代码段
	regexPatterns := map[string]string{
		// 替换获取机器ID的函数实现
		`async getMachineId\(\)\{return [^??]+\?\?([^}]+)\}`: `async getMachineId(){return $1}`,
		
		// 替换Mac专用的机器ID获取函数
		`async getMacMachineId\(\)\{return [^??]+\?\?([^}]+)\}`: `async getMacMachineId(){return $1}`,
	}
	
	// 应用所有正则表达式替换
	contentStr := string(content)
	for pattern, replacement := range regexPatterns {
		// 编译正则表达式
		re, err := regexp.Compile(pattern)
		if err != nil {
			return fmt.Errorf("编译正则表达式失败: %v", err)
		}
		
		// 应用替换
		contentStr = re.ReplaceAllString(contentStr, replacement)
	}
	
	// 设置文件为可写权限
	err = os.Chmod(mainJSPath, 0644)
	if err != nil {
		return fmt.Errorf("修改文件权限失败: %v", err)
	}
	
	// 写入修改后的内容
	err = os.WriteFile(mainJSPath, []byte(contentStr), 0644)
	if err != nil {
		return fmt.Errorf("写入修改后的 main.js 失败: %v", err)
	}
	
	// 恢复文件为只读权限
	err = os.Chmod(mainJSPath, 0292)
	if err != nil {
		return fmt.Errorf("设置文件只读失败: %v", err)
	}
	
	return nil
} 