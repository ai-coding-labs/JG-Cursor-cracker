// 解密Cursor工具使用的账户数据的工具
package main

import (
	"encoding/base64"
	"encoding/json"
	"flag"
	"fmt"
	"os"
)

// 定义认证信息的结构体
type AuthInfo struct {
	Email       string `json:"email,omitempty"`
	Token       string `json:"token,omitempty"`
	CachedEmail string `json:"cachedEmail,omitempty"`
	Access      string `json:"access,omitempty"`
}

// 解密账户数据
func decryptAccount(encryptedData string) (*AuthInfo, error) {
	// Base64解码
	data, err := base64.StdEncoding.DecodeString(encryptedData)
	if err != nil {
		return nil, fmt.Errorf("base64解码失败: %v", err)
	}
	
	// 使用XOR和固定密钥解密
	key := []byte("your_encrypt_key_456")
	decrypted := make([]byte, len(data))
	
	for i := 0; i < len(data); i++ {
		keyIndex := i % len(key)
		decrypted[i] = data[i] ^ key[keyIndex]
	}
	
	// 解析JSON
	var authInfo AuthInfo
	err = json.Unmarshal(decrypted, &authInfo)
	if err != nil {
		return nil, fmt.Errorf("JSON解析失败: %v", err)
	}
	
	return &authInfo, nil
}

// 加密账户数据
func encryptAccount(info *AuthInfo) (string, error) {
	// 将结构体转为JSON
	data, err := json.Marshal(info)
	if err != nil {
		return "", fmt.Errorf("JSON编码失败: %v", err)
	}
	
	// 使用XOR和固定密钥加密
	key := []byte("your_encrypt_key_456")
	encrypted := make([]byte, len(data))
	
	for i := 0; i < len(data); i++ {
		keyIndex := i % len(key)
		encrypted[i] = data[i] ^ key[keyIndex]
	}
	
	// Base64编码
	result := base64.StdEncoding.EncodeToString(encrypted)
	return result, nil
}

func main() {
	// 定义命令行参数
	encryptedPtr := flag.String("decrypt", "", "要解密的Base64编码数据")
	emailPtr := flag.String("email", "", "用于创建新账户数据的邮箱")
	tokenPtr := flag.String("token", "", "用于创建新账户数据的token")
	
	// 解析命令行参数
	flag.Parse()
	
	// 解密模式
	if *encryptedPtr != "" {
		info, err := decryptAccount(*encryptedPtr)
		if err != nil {
			fmt.Fprintf(os.Stderr, "解密失败: %v\n", err)
			os.Exit(1)
		}
		
		// 打印解密结果
		fmt.Println("解密成功，账户信息:")
		fmt.Printf("- Email: %s\n", info.Email)
		fmt.Printf("- Token: %s\n", info.Token)
		fmt.Printf("- CachedEmail: %s\n", info.CachedEmail)
		fmt.Printf("- Access: %s\n", info.Access)
		return
	}
	
	// 加密模式
	if *emailPtr != "" && *tokenPtr != "" {
		info := &AuthInfo{
			Email:       *emailPtr,
			Token:       *tokenPtr,
			CachedEmail: *emailPtr,
		}
		
		encrypted, err := encryptAccount(info)
		if err != nil {
			fmt.Fprintf(os.Stderr, "加密失败: %v\n", err)
			os.Exit(1)
		}
		
		// 打印加密结果
		fmt.Println("加密成功，可用于cursor_tools -mode auth -account 参数:")
		fmt.Println(encrypted)
		return
	}
	
	// 如果没有提供有效参数，打印使用说明
	fmt.Println("使用方法:")
	fmt.Println("  解密模式: decrypt_account -decrypt <加密的Base64字符串>")
	fmt.Println("  加密模式: decrypt_account -email <邮箱> -token <认证令牌>")
} 