package cursor_tool_modules

import (
	"crypto/sha512"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"time"
)

// ResetMachineID 重置 Cursor 的机器ID
func ResetMachineID() error {
	// 获取配置文件路径
	configPath := getMachineConfigPath()
	
	// 创建备份目录
	backupDir := filepath.Join(filepath.Dir(configPath), "backups")
	err := os.MkdirAll(backupDir, 0755)
	if err != nil {
		return fmt.Errorf("创建备份目录失败: %v", err)
	}
	
	// 生成带时间戳的备份文件名
	timeStamp := time.Now().Format("20060102_150405")
	backupPath := filepath.Join(backupDir, timeStamp)
	
	// 读取原始配置文件
	content, err := os.ReadFile(configPath)
	if err != nil {
		if !os.IsNotExist(err) {
			return fmt.Errorf("读取配置失败: %v", err)
		}
		// 如果文件不存在，创建一个新的配置
	} else {
		// 创建备份
		err = os.WriteFile(backupPath, content, 0644)
		if err != nil {
			return fmt.Errorf("创建备份失败: %v", err)
		}
	}
	
	// 解析配置
	var config map[string]interface{}
	if len(content) > 0 {
		err = json.Unmarshal(content, &config)
		if err != nil {
			return fmt.Errorf("解析配置失败: %v", err)
		}
	} else {
		config = make(map[string]interface{})
	}
	
	// 重置机器ID相关的配置
	// 重新生成设备ID
	config["telemetry.devDeviceId"] = generateUUID()
	
	// 重置机器ID
	config["telemetry.machineId"] = generateMachineID()
	
	// 重置Mac专用机器ID
	hasher := sha512.New()
	config["telemetry.macMachineId"] = generateHash(hasher, 64)
	
	// 重置SQM ID
	config["telemetry.sqmId"] = fmt.Sprintf("{%s}", generateUUID())
	
	// 将修改后的配置写回文件
	newContent, err := json.MarshalIndent(config, "", "    ")
	if err != nil {
		return fmt.Errorf("生成新配置失败: %v", err)
	}
	
	// 写入配置文件
	err = os.WriteFile(configPath, newContent, 0644)
	if err != nil {
		return fmt.Errorf("写入配置失败: %v", err)
	}
	
	// 设置文件为只读权限
	err = os.Chmod(configPath, 0292) // 0292 = 0444 (只读)
	if err != nil {
		return fmt.Errorf("设置只读权限失败: %v", err)
	}
	
	return nil
} 