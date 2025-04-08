# Cursor Tools逆向分析报告

## 基本信息

- **文件路径**: bin/cursor_tools
- **文件类型**: Mach-O 64位可执行文件（macOS系统）
- **文件大小**: 8,641,448 字节 (约8.2MB)
- **权限**: 可执行 (-rwxr-xr-x)
- **依赖库**:
  - /usr/lib/libresolv.9.dylib
  - /usr/lib/libSystem.B.dylib

## 分析方法

本次逆向分析主要使用了以下方法和工具：

1. **基本文件信息分析**：使用`file`命令确定文件类型
2. **依赖库分析**：使用`otool -L`查看依赖的系统库
3. **符号表分析**：使用`nm`命令查看导出和引用的符号
4. **字符串提取**：使用`strings`命令提取二进制中的可读字符串
5. **汇编代码分析**：使用`otool -tv`查看反汇编代码
6. **功能测试**：直接运行程序检查其行为和参数

## 功能概述

`cursor_tools`是Cursor编辑器的一个命令行工具，主要用于账户管理和验证。通过命令行参数，可以进行以下操作：

```
Usage of bin/cursor_tools:
  -account string
        加密的账号数据
  -mode string
        操作模式: reset|auth|disable-update
```

工具支持三种主要操作模式：
- **auth**: 验证账户身份信息
- **reset**: 重置账户设置
- **disable-update**: 禁用自动更新

## 关键组件和函数

通过逆向分析，我们发现了以下关键组件：

1. **主函数**：`main.main`是程序入口点
2. **解密函数**：`main.simpleDecrypt`负责解密账户信息
3. **加密算法**：使用AES加密标准库，包含多个相关函数
   - crypto/internal/fips140/aes.(*CBCDecrypter).CryptBlocks
   - crypto/internal/fips140/aes.decryptBlock
   - crypto/internal/fips140/aes.decryptBlockAsm.abi0
   - crypto/internal/fips140/aes.decryptBlockGeneric

## 工作原理

1. **命令行参数解析**：
   - 程序首先解析`-mode`和`-account`参数
   - 如果参数不正确，将显示帮助信息或错误提示

2. **账户数据处理**：
   - 账户数据需要是JSON格式，并经过加密
   - 程序使用内置密钥对账户数据进行解密
   - 解密后的数据将以JSON格式处理

3. **认证流程**：
   - 在`auth`模式下，程序会验证账户的身份信息
   - 如果验证失败，将返回相应的错误信息

4. **数据存储**：
   - Cursor的账户数据可能存储在`~/Library/Application Support/Cursor/User/globalStorage/`目录下
   - 该工具可能被主应用程序调用以处理敏感的账户操作

## 测试结果

我们对工具进行了简单测试：

```bash
$ bin/cursor_tools -mode auth -account "test"
解密失败: JSON解析失败: invalid character 'Ì' looking for beginning of value
```

结果表明：
- 该工具期望接收格式正确的加密JSON数据
- 提供纯文本"test"会导致解密错误
- 提示信息显示解密过程可能会将字符串转换为JSON格式后再处理

## 功能用途推测

基于所有分析，我们推测该工具主要用于：

1. **账户验证**：验证Cursor用户的身份信息和授权状态
2. **账户管理**：可能用于重置或修改账户设置
3. **更新控制**：控制应用程序的更新行为
4. **安全机制**：为主应用程序提供一种处理敏感账户数据的安全方式

## 结论

`bin/cursor_tools`是一个专用命令行工具，主要用于Cursor编辑器的账户管理和验证。它实现了基本的加密解密功能，处理账户信息，并可能被主应用程序调用以执行特定的账户相关操作。工具使用安全的加密标准，确保敏感账户数据在处理过程中得到保护。

该工具的存在表明Cursor编辑器对用户账户安全采取了一定的保护措施，通过命令行接口和加密机制来管理和验证账户信息。

## 编程语言识别

通过多方面分析，我们确定该工具是使用Go语言编写的。主要识别特征包括：

1. **符号命名格式**：Go典型的`_packageName.functionName`命名模式
2. **Go运行时符号**：存在大量Go运行时系统组件引用
3. **Go标准库引用**：明确的Go标准库包路径引用
4. **错误信息格式**：Go语言特有的错误消息模式
5. **内存管理术语**：Go垃圾回收器特有的组件名称
6. **二进制大小**：包含Go运行时的完整二进制文件通常较大
7. **少量外部依赖**：Go程序通常静态链接，减少外部库依赖

这一发现对后续逆向分析非常重要，因为它指明了我们应该使用专门针对Go语言的工具和技术。

## 进一步分析建议

### 深入分析加密算法

为了深入理解加密机制，我们建议：

1. **使用LLDB进行动态分析**：
   ```bash
   # 启动调试器
   lldb bin/cursor_tools
   
   # 设置断点
   breakpoint set --name main.simpleDecrypt
   breakpoint set --name "crypto/internal/fips140/aes.*CryptBlocks"
   
   # 运行程序
   process launch -- -mode auth -account "测试数据"
   ```

2. **寻找密钥和初始化向量**：
   - 观察`simpleDecrypt`函数的内存操作
   - 识别可能的16/24/32字节密钥块
   - 对于CBC模式，识别16字节IV

3. **确定AES具体模式**：
   - 观察函数名和调用模式
   - 分析内存访问特征
   - 基于CBC/ECB/GCM/CTR模式的特点进行比对

### 反编译技术

由于程序是Go语言编写的，建议使用以下工具进行反编译：

1. **Ghidra + Go语言分析插件**：
   - 下载并安装[Ghidra](https://ghidra-sre.org/)
   - 安装[GolangAnalyzerExtension](https://github.com/mooncat-greenpy/Ghidra_GolangAnalyzerExtension)
   - 导入二进制并应用Go语言分析器

2. **专用Go反编译工具**：
   - [go-decompiler](https://github.com/milabs/godbg)等专门针对Go的工具
   - [Delve](https://github.com/go-delve/delve)调试器

3. **函数重建**：
   - 重点关注`main.main`和`main.simpleDecrypt`
   - 识别Go标准库中AES相关函数的调用模式
   - 尝试重建加密/解密逻辑

通过这些进一步的分析，我们可以更全面地了解该工具的内部工作机制，特别是其加密实现和安全措施。 