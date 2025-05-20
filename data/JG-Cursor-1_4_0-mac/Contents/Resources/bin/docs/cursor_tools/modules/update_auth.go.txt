// update_auth.go 实现了更新Cursor编辑器认证信息的功能
// 该文件负责将解密后的认证数据存储到SQLite数据库中
package modules

import (
	"database/sql"
	"fmt"
	"os"
	_ "github.com/mattn/go-sqlite3" // 导入SQLite驱动，只使用其初始化函数
)

// UpdateAuth 更新Cursor编辑器的认证信息
//
// 功能：
// 将解密后的账户认证信息存储到SQLite数据库中，实现用户认证数据的持久化存储。
// 该函数会先停止运行中的Cursor进程，更新完成后再重新启动Cursor。
//
// 参数：
// - email: 用户的邮箱地址，用于标识账户
// - token: 认证令牌，用于验证用户身份
// - cachedEmail: 缓存的邮箱地址，通常与email相同
// - access: 访问权限控制字符串，如"read-write"
//
// 返回值：
// - error: 操作过程中的错误；如果成功则返回nil
//
// 数据流程：
// 1. 停止运行中的Cursor进程（避免数据库锁定）
// 2. 获取并打开SQLite数据库
// 3. 创建要更新的键值对列表
// 4. 开始数据库事务
// 5. 遍历键值对，检查是否存在并执行插入或更新
// 6. 提交事务
// 7. 读取并显示更新后的键值
// 8. 重启Cursor进程
//
// 示例调用：
// err := UpdateAuth("user@example.com", "token123", "user@example.com", "read-write")
//
// 错误处理：
// - 如果关闭Cursor进程失败，返回错误
// - 如果无法打开数据库，返回错误
// - 如果SQL查询、插入或更新失败，回滚事务并返回错误
// - 如果无法提交事务，返回错误
func UpdateAuth(email, token, cachedEmail, access string) error {
	// 1. 尝试关闭正在运行的Cursor进程
	// 这是必要的，因为Cursor可能正在使用数据库，导致锁定
	if err := killCursor(); err != nil {
		return fmt.Errorf("关闭Cursor失败: %v", err) // 返回包装的错误信息
	}

	// 2. 获取认证数据库路径
	// 该路径根据操作系统不同而不同，由getAuthDBPath函数确定
	dbPath := getAuthDBPath()

	// 3. 打开SQLite数据库
	// 使用github.com/mattn/go-sqlite3驱动连接SQLite数据库
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return fmt.Errorf("无法打开数据库: %v", err) // 返回数据库连接错误
	}
	defer db.Close() // 确保函数返回前关闭数据库连接

	// 4. 打印操作信息
	// 向用户提供反馈，表明正在进行的操作
	fmt.Println("更新认证信息")

	// 5. 准备要更新的键值对
	// 这些键值对将被存储到数据库中
	items := []struct {
		key   string // 数据库中的键名
		value string // 要存储的值
	}{
		{AccountEmailKey, cachedEmail},     // 缓存的邮箱地址
		{AccountTokenKey, token},           // 认证令牌
		{AccountAccessKey, access},         // 访问权限
		{AccountRefreshToken, ""}, // 刷新令牌，这里设为空值（从汇编分析可能无法确定具体值）
	}

	// 6. 开始数据库事务
	// 使用事务确保所有更新要么全部成功，要么全部失败
	tx, err := db.BeginTx(context.Background(), nil)
	if err != nil {
		return fmt.Errorf("无法开始事务: %v", err) // 返回事务错误
	}
	
	// 7. 遍历所有键值对，执行更新或插入
	for _, item := range items {
		// 跳过空值，避免覆盖可能存在的有效数据
		// 从汇编中看出有条件跳转处理空值
		if item.value == "" {
			continue // 值为空时跳过此项
		}

		// 8. 查询项目是否存在
		// 根据结果决定是插入新记录还是更新现有记录
		var count int
		row := tx.QueryRow(CountItemSQL, item.key) // 使用SQL查询计数
		err := row.Scan(&count)                   // 读取查询结果
		if err != nil {
			tx.Rollback() // 查询出错，回滚事务
			return fmt.Errorf("查询错误: %v", err)
		}

		// 9. 根据项目是否存在选择插入或更新
		if count == 0 {
			// 记录不存在，执行插入
			_, err = tx.ExecContext(context.Background(), InsertItemSQL, item.key, item.value)
		} else {
			// 记录存在，执行更新
			_, err = tx.ExecContext(context.Background(), UpdateItemSQL, item.value, item.key)
		}
		
		if err != nil {
			tx.Rollback() // 插入或更新出错，回滚事务
			return fmt.Errorf("更新失败: %v", err)
		}
	}

	// 10. 提交事务
	// 所有操作都成功，将更改永久保存到数据库
	if err := tx.Commit(); err != nil {
		return fmt.Errorf("提交事务失败: %v", err) // 提交事务失败
	}

	// 11. 输出最终状态
	// 成功提交后，显示操作成功信息
	fmt.Println("认证信息已更新")

	// 12. 读取结果并打印
	// 验证更新是否成功，并向用户显示最新值
	for _, item := range items {
		row := db.QueryRow(SelectItemSQL, item.key) // 查询更新后的值
		var value string
		err := row.Scan(&value) // 读取值
		if err == sql.ErrNoRows {
			// 记录不存在（理论上不应该发生，因为我们刚刚更新过）
			fmt.Printf("- %s: <未设置>\n", item.key)
		} else if err != nil {
			// 读取过程中发生错误
			fmt.Printf("- %s: <读取失败: %v>\n", item.key, err)
		} else {
			// 成功读取，显示键值
			fmt.Printf("- %s: %s\n", item.key, value)
		}
	}

	// 13. 尝试重新打开Cursor
	// 更新完成后，重新启动Cursor程序
	if err := openCursor(); err != nil {
		return fmt.Errorf("无法重新启动Cursor: %v", err) // 启动Cursor失败
	}

	// 14. 全部操作成功
	return nil // 返回nil表示成功
} 