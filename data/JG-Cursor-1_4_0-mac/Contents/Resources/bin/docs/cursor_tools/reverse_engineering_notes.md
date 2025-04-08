# Cursor Tools 逆向工程分析笔记

## 分析工具
- radare2 (`r2`)
- objdump
- Ghidra (参考用)

## 分析方法

### 1. 初步检查

我们首先使用radare2对二进制文件进行初步信息收集：

```bash
r2 -qc "iI;q" bin/cursor_tools
```

从输出可以了解到：
- 架构：x86_64
- 操作系统：macOS
- 二进制类型：Mach-O 64位
- 编译器：clang
- 语言：Go
- 二进制大小：8.2MB

### 2. 函数识别

我们搜索关键函数如`simpleDecrypt`：

```bash
r2 -qc "is~simpleDecrypt;q" bin/cursor_tools
```

然后遍历其他功能性函数，通过命名和引用关系识别了以下关键函数：
- `_main.simpleDecrypt`：用于解密账号信息
- `_main.main`：入口函数
- `_modules.UpdateAuth`：更新认证信息
- `_modules.ResetMachineID`：重置机器ID
- `_modules.DisableUpdate`：禁用更新功能

### 3. 深入反汇编

对每个关键函数进行深入分析：

```bash
r2 -qc "aaa; s sym._main.simpleDecrypt; pdf;q" bin/cursor_tools
```

### 4. 数据流分析

通过追踪寄存器和内存访问，我们重建了以下数据流：

#### simpleDecrypt函数
1. 接收base64编码的字符串
2. 解码后使用固定密钥`your_encrypt_key_456`进行XOR解密
3. 将解密后的JSON解析为认证信息结构体

#### UpdateAuth函数
1. 接收邮箱、令牌和其他认证参数
2. 关闭正在运行的Cursor进程
3. 打开SQLite数据库
4. 更新多个键值对
5. 重新启动Cursor

## 关键发现

### 1. 加密方式

`simpleDecrypt`函数使用简单的XOR加密：

```go
// 从汇编分析的XOR解密逻辑
for i := 0; i < len(data); i++ {
    keyIndex := i % len(key)
    decrypted[i] = data[i] ^ key[keyIndex]
}
```

### 2. 数据库结构

Cursor使用SQLite数据库存储配置和认证信息，主要表结构是键值对形式：

```sql
CREATE TABLE IF NOT EXISTS kvstore (key TEXT PRIMARY KEY, value TEXT)
```

关键的键名包括：
- `cursorAuth/cachedEmail`
- `cursorAuth/token`
- `cursorAuth/refreshToken`
- `cursorAuth/access`
- `machineId`

### 3. 文件路径

根据操作系统不同，Cursor的配置文件和数据库存储在不同位置：

- macOS:
  - 数据库: `~/Library/Application Support/Cursor/User/auth.db`
  - 配置: `~/Library/Application Support/Cursor/User/config.json`
  
- Windows:
  - 数据库: `%APPDATA%\Cursor\User\auth.db`
  - 配置: `%APPDATA%\Cursor\User\config.json`
  
- Linux:
  - 数据库: `~/.config/Cursor/User/auth.db`
  - 配置: `~/.config/Cursor/User/config.json`

### 4. 更新机制

Cursor使用名为`updater`的可执行文件处理更新，`DisableUpdate`函数通过以下方式禁用更新：

1. 备份原始updater
2. 创建空的不可写入的updater文件替代原文件
3. 创建`.noupdates`标记文件

## 挑战与难点

1. **Go二进制特性**：Go语言编译的二进制文件中包含大量的运行时符号和内联函数，增加了分析难度
2. **符号重定位**：反汇编过程中出现了大量的重定位警告
3. **跨平台代码**：需要分析不同操作系统的路径处理逻辑
4. **误导性代码**：存在一些未使用的代码路径或错误处理逻辑

## 总结

通过反汇编和分析，我们成功重建了Cursor Tools的主要功能，揭示了其使用的加密方法、数据存储结构和更新机制。这些发现对于理解此类工具的工作原理和安全性具有重要的教育意义。

*注：所有分析均基于公开二进制文件，仅用于教育和研究目的。* 