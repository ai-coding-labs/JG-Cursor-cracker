// 从汇编代码重建的 cursor_tools 模块
// 该模块包含了所有与Cursor编辑器账户管理、配置管理相关的功能和结构体定义
// 负责处理认证信息、机器ID、数据库操作等核心功能
package modules

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"time"
)

// AuthInfo 存储认证信息
// 从汇编代码分析出的Cursor编辑器认证信息结构
//
// 该结构体用途:
// - 存储从加密数据解析出的用户认证信息
// - 作为更新认证信息函数的输入参数
// - 结构对应JSON格式的认证数据
//
// 字段说明:
// - Email: 用户登录邮箱，用于标识用户账户
// - Token: 认证令牌，用于验证用户身份
// - CachedEmail: 缓存的邮箱地址，可能与Email相同
// - Access: 访问权限控制，如"read-write"或"read-only"
// - RefreshToken: 用于刷新Token的令牌，避免频繁登录
// - CachedSignUpType: 用户注册类型，如"email"、"github"等
type AuthInfo struct {
	Email       string `json:"email,omitempty"`       // 用户邮箱地址
	Token       string `json:"token,omitempty"`       // 主认证令牌
	CachedEmail string `json:"cachedEmail,omitempty"` // 缓存的邮箱地址
	Access      string `json:"access,omitempty"`      // 权限控制字符串
	// 从反汇编可以看出还有以下可能的字段
	RefreshToken     string `json:"refreshToken,omitempty"`     // 用于获取新Token的刷新令牌
	CachedSignUpType string `json:"cachedSignUpType,omitempty"` // 用户注册类型标识
}

// 数据库表名
// Cursor使用SQLite数据库存储配置和认证信息
const (
	TableName = "itemTable" // 键值对存储表名，从汇编分析得知
)

// 数据库查询语句
// 包含所有与SQLite数据库交互所需的SQL语句
// 主要用于操作键值对存储表
const (
	SelectItemSQL  = "SELECT value FROM itemTable WHERE key = ?" // 查询指定键的值
	CountItemSQL   = "SELECT COUNT(*) FROM itemTable WHERE key = ?" // 检查键是否存在
	UpdateItemSQL  = "UPDATE itemTable SET value = ? WHERE key = ?" // 更新已存在的键值
	InsertItemSQL  = "INSERT INTO itemTable (key, value) VALUES (?, ?)" // 插入新的键值对
)

// 密钥常量
// 用于加密和解密敏感数据的密钥
const (
	EncryptKey = "your_encrypt_key_456" // 从汇编代码中提取的XOR加密密钥
)

// 错误信息
// 定义了模块中可能遇到的各类错误，便于统一错误处理
//
// 错误类型说明:
// - ErrCloseCursor: 尝试终止Cursor进程时失败
// - ErrOpenCursor: 尝试启动Cursor应用时失败
// - ErrOpenDatabase: 打开SQLite数据库失败
// - ErrQueryDatabase: 执行SQL查询时出错
// - ErrUpdateDatabase: 更新数据库记录失败
// - ErrCommitTx: 提交数据库事务失败
// - ErrResetMachineID: 重置机器ID的过程中出错
var (
	ErrCloseCursor    = errors.New("关闭Cursor失败")        // 终止Cursor进程时的错误
	ErrOpenCursor     = errors.New("打开Cursor失败")        // 启动Cursor进程时的错误
	ErrOpenDatabase   = errors.New("无法打开数据库")          // 数据库连接错误
	ErrQueryDatabase  = errors.New("查询错误")             // SQL查询执行错误
	ErrUpdateDatabase = errors.New("更新失败")             // 数据库更新操作错误
	ErrCommitTx       = errors.New("提交事务失败")           // 事务提交失败
	ErrResetMachineID = errors.New("重置机器ID失败")         // 机器ID重置过程错误
)

// 账户相关键名
// 定义了存储在数据库中的账户相关键名
// 这些键用于在SQLite数据库中存储和检索认证信息
//
// 键名说明:
// - AccountEmailKey: 存储用户邮箱的键
// - AccountAccessKey: 存储访问权限的键
// - AccountTokenKey: 存储认证令牌的键
// - AccountRefreshToken: 存储刷新令牌的键
// - SignUpTypeKey: 存储注册类型的键
const (
	AccountEmailKey     = "cursorAuth/cachedEmail"    // 缓存邮箱地址的键名
	AccountAccessKey    = "cursorAuth/access"         // 访问权限的键名
	AccountTokenKey     = "cursorAuth/token"          // 认证令牌的键名
	AccountRefreshToken = "cursorAuth/refreshToken"   // 刷新令牌的键名
	SignUpTypeKey       = "cursorAuth/cachedSignUpType" // 注册类型的键名
)

// 其他常量
// 定义了机器ID和配置备份相关的常量
//
// 常量说明:
// - MachineIDKey: 存储机器唯一标识符的键名
// - ConfigBackupFmt: 配置文件备份的文件名格式
const (
	MachineIDKey      = "telemetry.macMachineId"  // 机器ID的键名，用于设备唯一标识
	ConfigBackupFmt   = "storage.json.backup_%s"  // 配置备份文件名格式字符串，%s会被替换为时间戳
)

// 命令相关常量
// 定义了进程管理相关的常量
//
// 常量说明:
// - CursorProcessName: Cursor进程的名称，用于查找和管理进程
// - MaxRetries: 操作重试的最大次数
// - RetryInterval: 重试操作之间的等待时间
const (
	CursorProcessName = "Cursor"                 // Cursor进程的可执行文件名
	MaxRetries        = 5                        // 操作失败后的最大重试次数
	RetryInterval     = 500 * time.Millisecond   // 每次重试之间的等待间隔
) 