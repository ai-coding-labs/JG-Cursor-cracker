# JG-Cursor-cracker

[![Go Tests](https://github.com/JSREP/JG-Cursor-cracker/actions/workflows/go-test.yml/badge.svg)](https://github.com/JSREP/JG-Cursor-cracker/actions/workflows/go-test.yml)

JG-Cursor-cracker 是一个用于破解和激活 JG-Cursor 应用的工具。

## 功能

- 自动搜索硬盘上的 JG-Cursor.app 安装
- 自动安装 asar 工具（优先使用 cnpm）
- 解包和修改 app.asar 文件
- 炫酷的彩色控制台输出

## 构建和测试

### 构建

```bash
go build -o jg-cursor-cracker main.go
```

### 运行测试

```bash
go test -v ./pkg/cracker/...
```

## 持续集成

项目使用 GitHub Actions 进行持续集成，每次代码提交都会自动运行测试。

## 贡献代码

欢迎提交 Pull Request 或 Issue。在提交代码前，请确保所有测试能够通过。 