package cursor_tool_modules

import (
	"crypto/rand"
	"crypto/sha512"
	"encoding/hex"
	"fmt"
	"hash"
)

// generateUUID 生成随机的UUID字符串
func generateUUID() string {
	// 生成16字节的随机数
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		// 如果随机数生成失败，返回一个固定的UUID
		return "00000000-0000-0000-0000-000000000000"
	}
	
	// 设置UUID版本和变体
	b[6] = (b[6] & 0x0F) | 0x40 // 版本4
	b[8] = (b[8] & 0x3F) | 0x80 // 变体1
	
	// 转换为十六进制字符串
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:])
}

// generateMachineID 生成机器ID
func generateMachineID() string {
	// 生成一个固定的机器ID前缀
	return "cursor-" + generateUUID()
}

// generateHash 使用提供的哈希函数生成哈希值
func generateHash(h hash.Hash, size int) string {
	// 生成一个固定的输入数据
	input := []byte("cursor-machine-id")
	
	// 重置哈希函数
	h.Reset()
	
	// 写入数据
	h.Write(input)
	
	// 计算哈希值
	hashBytes := h.Sum(nil)
	
	// 转换为十六进制字符串
	return hex.EncodeToString(hashBytes[:size/2])
} 