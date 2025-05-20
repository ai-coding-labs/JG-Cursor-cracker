// 从汇编代码重建的 cursor_tools 主程序
// 该程序是Cursor编辑器的命令行工具，用于管理账户认证、机器ID和更新功能
package main

import (
	"encoding/base64"
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"syscall"

	"../modules" // 这只是用于示例，实际项目中会使用完整的导入路径
)

// simpleDecrypt 函数用于解密账户信息
// 
// 输入参数:
//   - encryptedData: Base64编码的加密数据，形如 "YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo="
//
// 返回值:
//   - *modules.AuthInfo: 解密并解析后的认证信息结构
//   - error: 解密过程中的错误，如Base64解码失败或JSON解析错误
//
// 数据样例:
//   输入: "SGVsbG8gQ3Vyc29yIQ=="
//   解密后的JSON: {"email":"user@example.com","token":"abc123","cachedEmail":"user@example.com","access":"read-write"}
//
// 执行逻辑:
// 1. 使用标准Base64解码器解码输入字符串
// 2. 使用固定密钥"your_encrypt_key_456"进行简单的XOR解密
// 3. 尝试将解密后的数据解析为JSON格式的AuthInfo结构
//
// 设计原因:
// - 使用Base64编码便于加密数据在命令行和网络中传输
// - 使用XOR加密提供基本的数据混淆，不是为了高安全性而设计
// - 固定密钥嵌入程序中，表明这是一个内部工具，针对特定应用场景
func simpleDecrypt(encryptedData string) (*modules.AuthInfo, error) {
	// Base64解码
	data, err := base64.StdEncoding.DecodeString(encryptedData)
	if err != nil {
		return nil, fmt.Errorf("base64解码失败: %v", err)
	}
	
	// 使用XOR和固定密钥解密
	// 密钥在modules包中定义为常量："your_encrypt_key_456"
	key := []byte(modules.EncryptKey)
	decrypted := make([]byte, len(data))
	
	for i := 0; i < len(data); i++ {
		// 在汇编中这是通过XOR指令实现的
		// 循环使用密钥中的字符与加密数据进行异或运算
		keyIndex := i % len(key)
		decrypted[i] = data[i] ^ key[keyIndex]
	}
	
	// 解析JSON
	// 解密后的数据应该是包含认证信息的JSON字符串
	var authInfo modules.AuthInfo
	err = json.Unmarshal(decrypted, &authInfo)
	if err != nil {
		return nil, fmt.Errorf("JSON解析失败: %v", err)
	}
	
	return &authInfo, nil
}

// main 函数是程序入口
//
// 命令行参数:
//   -mode: 操作模式，可以是 "auth"、"reset" 或 "disable-update"
//   -account: 加密的账号数据，仅在 auth 模式下需要
//
// 示例命令:
//   cursor_tools -mode auth -account "SGVsbG8gQ3Vyc29yIQ=="   // 更新认证信息
//   cursor_tools -mode reset                                  // 重置机器ID
//   cursor_tools -mode disable-update                         // 禁用自动更新
//
// 执行流程:
// 1. 解析命令行参数，确定操作模式和必要数据
// 2. 根据模式执行相应的功能函数:
//    - auth: 解密账户数据并更新认证信息
//    - reset: 重置设备的机器ID
//    - disable-update: 禁用Cursor的自动更新功能
// 3. 处理执行过程中的错误并提供反馈
//
// 设计原因:
// - 统一的命令行工具管理多个相关但独立的功能
// - 模式参数简化了用户界面，避免过多的命令行选项
// - 工具执行的操作可能需要管理员权限，因此提供详细的错误信息
// - 主要功能分离到不同模块，保持主程序简洁
func main() {
	// 定义命令行参数
	// mode: 操作模式，必须提供
	// account: 加密的账户数据，仅在auth模式下需要
	modePtr := flag.String("mode", "", "操作模式: reset|auth|disable-update")
	accountPtr := flag.String("account", "", "加密的账号数据")
	
	// 解析命令行参数
	flag.Parse()
	
	// 检查模式参数
	// 如果没有提供mode参数，显示错误并退出
	if *modePtr == "" {
		fmt.Println("请指定操作模式")
		os.Exit(1)  // 非零退出码表示错误
	}
	
	var err error
	
	// 根据模式执行不同的操作
	switch *modePtr {
	case "auth":
		// 验证模式 - 需要提供账户数据
		// 这个模式用于更新Cursor的认证信息
		if *accountPtr == "" {
			fmt.Println("请提供账户数据")
			os.Exit(1)
		}
		
		// 解密账户信息
		// 从加密字符串中提取email、token等认证信息
		authInfo, err := simpleDecrypt(*accountPtr)
		if err != nil {
			fmt.Fprintf(os.Stderr, "解密失败: %v\n", err)
			os.Exit(1)
		}
		
		// 更新认证信息
		// 将解密后的认证信息保存到数据库
		err = modules.UpdateAuth(authInfo.Email, authInfo.Token, authInfo.CachedEmail, authInfo.Access)
		
	case "reset":
		// 重置机器ID
		// 这个功能用于解决设备限制或许可证问题
		// 会生成新的UUID并更新数据库中的机器ID记录
		err = modules.ResetMachineID()
		
	case "disable-update":
		// 禁用更新功能
		// 通过替换更新程序或修改权限阻止自动更新
		// 用于锁定特定版本的Cursor
		err = modules.DisableUpdate()
		
	default:
		// 未知的操作模式
		// 提供错误信息并退出
		fmt.Fprintf(os.Stderr, "未知的操作模式: %s\n", *modePtr)
		os.Exit(1)
	}
	
	// 检查执行结果
	// 如果有错误，显示错误信息并退出
	if err != nil {
		fmt.Fprintf(os.Stderr, "执行失败: %v\n", err)
		os.Exit(1)
	}
	
	// 执行成功，程序正常退出
	// 返回零退出码表示成功
} 