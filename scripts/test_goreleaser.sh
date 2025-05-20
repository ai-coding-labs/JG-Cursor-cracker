#!/bin/bash
set -e

# 确保所需的目录存在
mkdir -p dist

# 测试goreleaser配置
echo "测试 GoReleaser 配置..."
go run github.com/goreleaser/goreleaser@latest check

# 如果测试成功，则创建快照版本
if [ $? -eq 0 ]; then
    echo "配置检查通过，正在生成测试版本..."
    go run github.com/goreleaser/goreleaser@latest release --snapshot --clean
else
    echo "配置检查失败，请修复上述问题"
    exit 1
fi

echo "测试完成！你可以在dist目录中找到生成的二进制文件" 