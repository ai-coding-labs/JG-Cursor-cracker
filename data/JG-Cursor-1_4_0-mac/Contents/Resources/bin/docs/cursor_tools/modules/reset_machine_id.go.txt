// reset_machine_id.go 实现了重置Cursor编辑器机器ID的功能
// 该文件负责生成新的机器标识并将其存储到SQLite数据库中
// 重置机器ID可以解除设备绑定限制，在遇到许可问题时非常有用
package modules

import (
	"database/sql"
	"fmt"
	"os"
	"time"
)

// ResetMachineID 重置Cursor编辑器的机器ID
//
// 功能：
// 生成新的机器唯一标识符(UUID)并更新到数据库中，同时备份原始配置文件。
// 此操作可以解除Cursor的设备绑定限制，常用于解决许可证或设备限制问题。
//
// 返回值：
// - error: 操作过程中的错误；如果成功则返回nil
//
// 数据流程：
// 1. 停止运行中的Cursor进程
// 2. 获取并打开SQLite数据库
// 3. 获取配置文件路径并备份原配置
// 4. 生成新的UUID作为机器ID
// 5. 开始数据库事务
// 6. 检查是否存在机器ID记录，并执行插入或更新
// 7. 提交事务，显示操作结果
// 8. 重启Cursor进程
//
// 示例调用：
// err := ResetMachineID()
//
// 错误处理：
// - 如果关闭Cursor进程失败，返回错误
// - 如果无法打开数据库，返回错误
// - 如果SQL查询、插入或更新失败，回滚事务并返回错误
// - 如果无法提交事务，返回错误
// - 配置文件备份失败仅输出警告，不中断流程
// - 重启Cursor失败仅输出警告，不影响机器ID重置结果
func ResetMachineID() error {
	// 1. 尝试关闭运行中的Cursor进程
	// 这是必要的，因为Cursor可能正在使用数据库，会导致锁定问题
	if err := killCursor(); err != nil {
		// 如果无法关闭Cursor，返回错误
		return fmt.Errorf("关闭Cursor失败: %v", err)
	}

	// 2. 获取认证数据库路径并打开数据库
	// 数据库路径根据操作系统不同而不同
	dbPath := getAuthDBPath()

	// 打开SQLite数据库连接
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		// 如果无法打开数据库，返回错误
		return fmt.Errorf("无法打开数据库: %v", err)
	}
	defer db.Close() // 确保函数返回前关闭数据库连接

	// 3. 获取配置文件路径
	// 配置文件存储了Cursor的设置，包括机器ID
	configPath := getMachineConfigPath()
	
	// 4. 备份原始配置文件
	// 使用时间戳创建唯一的备份文件名
	timestamp := time.Now().Format("20060102150405") // 格式：年月日时分秒
	backupPath := fmt.Sprintf(ConfigBackupFmt, timestamp)
	
	// 读取原始配置内容
	data, err := os.ReadFile(configPath)
	if err != nil {
		// 忽略错误，可能是文件不存在的情况
		// 创建一个空的JSON对象作为默认配置
		data = []byte("{}")
	}
	
	// 将数据写入备份文件
	if err := os.WriteFile(backupPath, data, 0644); err != nil {
		// 备份失败仅输出警告，不中断重置流程
		fmt.Printf("备份配置文件失败: %v\n", err)
	} else {
		// 显示备份成功信息
		fmt.Printf("配置已备份到: %s\n", backupPath)
	}

	// 5. 生成新的UUID作为机器ID
	// 使用随机生成的UUID作为新的机器标识符
	newMachineID := generateUUID()
	
	// 6. 开始数据库事务
	// 使用事务确保所有更新要么全部成功，要么全部失败
	tx, err := db.BeginTx(context.Background(), nil)
	if err != nil {
		// 无法开始事务，返回错误
		return fmt.Errorf("无法开始事务: %v", err)
	}

	// 7. 查询机器ID是否已存在
	// 检查是否需要插入新记录或更新现有记录
	var count int
	row := tx.QueryRow(CountItemSQL, MachineIDKey)
	err = row.Scan(&count)
	if err != nil {
		// 查询出错，回滚事务
		tx.Rollback()
		return fmt.Errorf("查询错误: %v", err)
	}

	// 8. 根据结果执行插入或更新操作
	if count == 0 {
		// 机器ID记录不存在，执行插入
		_, err = tx.ExecContext(context.Background(), InsertItemSQL, MachineIDKey, newMachineID)
	} else {
		// 机器ID记录已存在，执行更新
		_, err = tx.ExecContext(context.Background(), UpdateItemSQL, newMachineID, MachineIDKey)
	}
	
	// 检查SQL操作是否成功
	if err != nil {
		// SQL操作失败，回滚事务
		tx.Rollback()
		return fmt.Errorf("更新失败: %v", err)
	}

	// 9. 提交事务
	// 所有操作都成功，将更改永久保存到数据库
	if err := tx.Commit(); err != nil {
		// 提交事务失败，返回错误
		return fmt.Errorf("提交事务失败: %v", err)
	}

	// 10. 显示操作成功信息
	fmt.Println("机器ID已重置")
	// 显示新生成的机器ID
	fmt.Printf("- 新机器ID: %s\n", newMachineID)
	
	// 11. 尝试重新打开Cursor
	// 重启Cursor应用，使新设置生效
	if err := openCursor(); err != nil {
		// 重启失败仅输出警告，不影响主要功能
		// 此处没有返回错误，因为机器ID已经成功重置
		fmt.Printf("警告: 无法重新启动Cursor: %v\n", err)
	}

	// 12. 重置操作成功完成
	return nil
} 