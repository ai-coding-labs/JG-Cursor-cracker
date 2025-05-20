# 发布新版本指南

本项目使用GoReleaser自动化发布流程，可以生成跨平台的二进制文件并创建GitHub发布。

## 环境准备

- 确保已经安装了Go 1.18或更高版本
- 确保已经安装了Node.js和npm（用于asar工具）
- 安装asar工具: `npm install -g asar`

## 手动发布步骤

1. 确保所有更改已提交并推送到GitHub
2. 确保测试通过：`go test -v ./pkg/cracker/...`
3. 为新版本打标签：
   ```bash
   git tag -a v1.0.0 -m "第一个正式版本"
   git push origin v1.0.0
   ```
4. GitHub Actions将自动触发发布工作流程，您可以在GitHub仓库的Actions标签页中查看进度

## 本地测试发布

如果想在本地测试发布流程，可以使用以下命令：

```bash
# 安装GoReleaser（如果尚未安装）
go install github.com/goreleaser/goreleaser@latest

# 运行测试版本构建（不会创建实际的GitHub发布）
goreleaser release --snapshot --clean
```

生成的二进制文件将位于`dist`目录中。

## 发布内容

每个发布包括：

- 针对多个操作系统和架构的二进制文件（Windows, macOS, Linux）
- 自动生成的变更日志
- 源代码打包
- 签名和校验和

## 自动化发布过程中可能出现的问题

### GitHub令牌权限

确保GitHub Actions的`GITHUB_TOKEN`具有足够的权限来创建发布。

### 依赖问题

在某些情况下，可能需要更新依赖以解决构建问题：

```bash
go mod tidy
go mod verify
```

### 修改GoReleaser配置

如果需要修改构建配置，编辑项目根目录中的`.goreleaser.yml`文件。

## 版本号约定

本项目使用语义化版本控制（[SemVer](https://semver.org/)）：

- 主版本号：不兼容的API更改
- 次版本号：向后兼容的功能性新增
- 修订号：向后兼容的问题修复

例如：v1.0.0、v1.1.0、v1.1.1 