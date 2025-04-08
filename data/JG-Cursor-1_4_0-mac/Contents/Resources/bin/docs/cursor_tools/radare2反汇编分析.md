# Radare2 反汇编分析

## 概述

使用 Radare2 工具对 `bin/cursor_tools` 进行了反汇编分析，进一步证实了该工具是用 Go 语言编写的，并且主要用于账户身份验证和管理。本文档总结了反汇编分析的主要发现。

## 安装与使用的工具

首先，我们通过 Homebrew 安装了 Radare2：

```bash
brew install radare2
```

然后使用以下命令进行基本分析：

```bash
# 获取二进制文件基本信息
r2 -qc "iI;q" bin/cursor_tools

# 分析二进制并查看符号表
r2 -qc "aaa; is~simpleDecrypt;q" bin/cursor_tools

# 反汇编主要函数
r2 -qc "aaa; s sym._main.simpleDecrypt; pdf;q" bin/cursor_tools
r2 -qc "aaa; s sym._main.main; pdf;q" bin/cursor_tools

# 搜索可能的加密密钥
r2 -qc "izz~key|encrypt" bin/cursor_tools
```

## 主要发现

### 1. 二进制文件基本信息

通过 `iI` 命令获取的信息显示：

- 架构：x86_64
- 基址：0x100000000
- 大小：8,625,064 字节
- 类型：Mach-O 64位
- 编译器：clang
- 操作系统：macOS

### 2. 关键函数分析

#### simpleDecrypt 函数 (0x1001507e0)

反汇编 `simpleDecrypt` 函数后，我们发现：

- 函数使用 base64 解码输入数据
  ```assembly
  call sym._encoding_base64._Encoding_.DecodeString
  ```

- 包含明显的加密解密逻辑
  ```assembly
  lea r8, [0x1002bd1ef]      ; "your_encrypt_key_456JSON"
  movzx r9d, byte [r8 + rax]
  xor edx, r9d
  ```

- 使用 XOR 运算进行解密
- 解密后会进行 JSON 解析
  ```assembly
  call sym._encoding_json.Unmarshal
  ```

- 包含错误处理逻辑，显示错误信息如 "JSON解析失败"

#### main.main 函数 (0x100150a60)

- 解析命令行参数 `-mode` 和 `-account`
- 根据模式执行不同的操作：
  - `auth`: 调用 `simpleDecrypt` 函数处理加密账户数据
  - `reset`: 调用 `ResetMachineID` 重置机器ID
  - `disable-update`: 调用 `DisableUpdate` 禁用更新

- 提供友好的中文错误信息

### 3. 加密密钥发现

通过搜索字符串，我们发现了一个可能的加密密钥：

```
your_encrypt_key_456
```

这个字符串在 `simpleDecrypt` 函数中被用于 XOR 解密操作。

### 4. 数据库操作

反汇编结果显示程序包含 SQLite 数据库操作：

- `SELECT COUNT(*) FROM itemTable WHERE key = ?`
- `UPDATE itemTable SET value = ? WHERE key = ?`
- `INSERT INTO itemTable (key, value) VALUES (?, ?)`

这表明程序可能在本地存储账户信息或配置数据。

### 5. AES 加密相关函数

发现了多个 AES 相关函数调用和常量，证实程序使用 AES 加密：

```
_expand_key_128
_expand_key_192a
_expand_key_192b
_expand_key_256a
_expand_key_256b
```

以及 CBC 模式特有的函数：
```
crypto/internal/fips140/aes.(*CBCDecrypter).CryptBlocks
```

## 解密算法分析

根据反汇编结果，我们可以推断 `cursor_tools` 的解密算法如下：

1. 使用 Base64 解码输入的加密账号数据
2. 使用固定密钥 "your_encrypt_key_456" 进行 XOR 解密
3. 将解密后的数据解析为 JSON 格式
4. 验证 JSON 中的账户信息

这是一个相对简单的加密方案，主要依赖于 XOR 操作和预共享密钥。

## 结论

Radare2 反汇编分析进一步证实了我们之前的发现，并提供了更多技术细节：

- `cursor_tools` 是用 Go 语言编写的工具
- 主要用于账户验证和管理
- 使用简单的 XOR 加密方案，配合固定密钥
- 支持多种操作模式：auth、reset、disable-update
- 包含友好的中文错误信息，针对中国用户

这些发现对于理解 Cursor 编辑器的账户验证机制和安全模型非常有价值。 