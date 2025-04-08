# cursor_tools 函数列表分析

通过对 `bin/cursor_tools` 二进制文件的分析，我们发现了以下主要功能模块和函数。这些函数共同构成了 cursor_tools 的功能体系。

## 主程序函数

| 函数地址 | 函数名 | 功能描述 |
|---------|-------|---------|
| 0x1001507e0 | main.simpleDecrypt | 解密账户数据，使用 Base64 解码和 XOR 解密 |
| 0x100150a60 | main.main | 主函数，处理命令行参数并分发任务 |
| 0x100150e40 | type:.eq.main.AccountInfo | 账户信息结构体的类型比较函数 |

## cursor-tool/modules 模块函数

这个模块包含了 cursor_tools 的主要业务逻辑：

| 函数地址 | 函数名 | 功能描述 |
|---------|-------|---------|
| 0x10014d360 | cursor-tool/modules.UpdateAuth | 更新认证信息，存储解密后的账户数据 |
| 0x10014e480 | cursor-tool/modules.DisableUpdate | 禁用 Cursor 编辑器的自动更新功能 |
| 0x10014f2a0 | cursor-tool/modules.ResetMachineID | 重置机器 ID，可能用于解除设备绑定 |
| 0x10014eca0 | cursor-tool/modules.getAuthDBPath | 获取认证数据库路径 |
| 0x10014ede0 | cursor-tool/modules.getMachineConfigPath | 获取机器配置文件路径 |
| 0x10014ef20 | cursor-tool/modules.getUpdaterPath | 获取更新程序路径 |
| 0x10014efc0 | cursor-tool/modules.killCursor | 终止运行中的 Cursor 进程 |
| 0x10014f1c0 | cursor-tool/modules.openCursor | 打开 Cursor 编辑器 |
| 0x10014f220 | cursor-tool/modules.isProcessRunning | 检查指定进程是否正在运行 |
| 0x1001504e0 | cursor-tool/modules.generateUUID | 生成 UUID，可能用于创建唯一标识符 |
| 0x100150680 | cursor-tool/modules.generateHash | 生成哈希值，可能用于数据校验 |

## 工具函数分析

我们已经从汇编代码还原了两个主要函数的 Go 代码：

1. **main.simpleDecrypt**: 
   - 解密 Cursor 账户数据的核心函数
   - 使用 Base64 解码输入的加密数据
   - 使用固定密钥 "your_encrypt_key_456" 进行 XOR 解密
   - 将解密后的数据解析为 JSON 格式的账户信息

2. **main.main**:
   - 处理命令行参数，支持三种操作模式：auth、reset、disable-update
   - 根据不同模式调用相应的功能函数
   - 处理错误并提供中文错误信息

## 完整功能图

基于函数列表分析，cursor_tools 的功能结构如下：

```
cursor_tools
├── 账户管理
│   ├── 账户数据解密 (simpleDecrypt)
│   └── 更新认证信息 (UpdateAuth)
├── 机器管理
│   ├── 重置机器ID (ResetMachineID)
│   └── 生成UUID
├── 应用管理
│   ├── 禁用更新 (DisableUpdate)
│   ├── 终止Cursor进程 (killCursor)
│   └── 打开Cursor (openCursor)
└── 工具函数
    ├── 生成哈希 (generateHash)
    └── 检查进程状态 (isProcessRunning)
```

## 技术细节

1. 账户数据使用简单的 XOR 加密，密钥为 "your_encrypt_key_456"
2. 支持中文错误消息，表明目标用户群体包括中文用户
3. 使用 SQLite 进行本地数据存储
4. 包含机器 ID 管理，可能与设备绑定和许可证验证有关
5. 集成了进程管理功能，可以控制 Cursor 编辑器的启动和终止 