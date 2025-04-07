package cracker

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type Finder struct {
	SearchEntireDisk bool
	console          *Console
}

func NewFinder() *Finder {
	return &Finder{
		SearchEntireDisk: true,
		console:          NewConsole(),
	}
}

func (f *Finder) Find() ([]string, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return nil, fmt.Errorf("failed to get user home directory: %v", err)
	}

	f.console.Info("开始在常见位置搜索JG-Cursor.app...")

	// 预定义的搜索路径列表
	fixedPaths := []string{
		"/Applications/JG-Cursor.app",
		filepath.Join(homeDir, "Applications", "JG-Cursor.app"),
		filepath.Join(homeDir, "Downloads", "JG-Cursor.app"),
		filepath.Join(homeDir, "Downloads", "JG-Cursor-1.4.0-mac.app"),
	}

	// Homebrew可能安装路径模式
	globPatterns := []string{
		"/opt/homebrew/Cellar/jg-cursor/*/JG-Cursor.app",
		"/usr/local/Cellar/jg-cursor/*/JG-Cursor.app",
		filepath.Join(homeDir, "Downloads", "JG-Cursor-*.app"),
	}

	var globPaths []string
	for _, pattern := range globPatterns {
		matches, err := filepath.Glob(pattern)
		if err == nil {
			globPaths = append(globPaths, matches...)
		}
	}

	// 合并所有候选路径并去重
	pathMap := make(map[string]bool)
	var candidates []string

	// 添加固定路径
	for _, path := range fixedPaths {
		if !pathMap[path] {
			pathMap[path] = true
			candidates = append(candidates, path)
		}
	}

	// 添加glob匹配的路径
	for _, path := range globPaths {
		if !pathMap[path] {
			pathMap[path] = true
			candidates = append(candidates, path)
		}
	}

	f.console.Debug("搜索路径: %v", candidates)

	var results []string
	for _, candidate := range candidates {
		if valid, err := isValidInstallation(candidate); err == nil && valid {
			f.console.Success("找到有效安装: %s", candidate)
			results = append(results, candidate)
		}
	}

	// 如果没有在预定义位置找到，且允许全盘搜索，则执行全盘搜索
	if len(results) == 0 && f.SearchEntireDisk {
		f.console.Warning("未在常见位置找到JG-Cursor.app，开始全盘搜索...")
		diskResults, err := f.searchEntireDisk()
		if err != nil {
			return results, fmt.Errorf("全盘搜索时发生错误: %v", err)
		}
		results = append(results, diskResults...)
	}

	if len(results) == 0 {
		f.console.Error("未找到任何JG-Cursor安装")
	} else {
		f.console.Success("共找到 %d 个JG-Cursor安装", len(results))
	}

	return results, nil
}

// 在整个硬盘上搜索JG-Cursor.app
func (f *Finder) searchEntireDisk() ([]string, error) {
	var results []string
	startTime := time.Now()

	// 排除一些系统目录以加快搜索速度
	excludeDirs := map[string]bool{
		"/System":  true,
		"/private": true,
		"/dev":     true,
		"/Volumes": true, // 排除外部卷，可根据需要删除此排除项
	}

	stopSpinner := f.console.StartSpinner("正在搜索整个硬盘...")

	err := filepath.Walk("/", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return filepath.SkipDir // 跳过无法访问的目录
		}

		// 跳过排除的目录
		for excludeDir := range excludeDirs {
			if strings.HasPrefix(path, excludeDir) {
				return filepath.SkipDir
			}
		}

		// 如果是目录且名称为JG-Cursor.app
		if info.IsDir() && filepath.Base(path) == "JG-Cursor.app" {
			if valid, _ := isValidInstallation(path); valid {
				results = append(results, path)
				f.console.Success("找到JG-Cursor.app: %s", path)
			}
		}

		return nil
	})

	duration := time.Since(startTime)
	stopSpinner()

	f.console.Info("全盘搜索完成，耗时：%v", duration)
	return results, err
}

// 验证是否为有效安装路径
func isValidInstallation(path string) (bool, error) {
	appInfo, err := os.Stat(path)
	if err != nil || !appInfo.IsDir() {
		return false, nil
	}

	binDir := filepath.Join(path, "Contents", "Resources", "bin")
	if _, err := os.Stat(binDir); os.IsNotExist(err) {
		return false, nil
	}

	requiredFiles := []string{"cursor_patch", "cursor_tools"}
	for _, file := range requiredFiles {
		if !isRegularFile(filepath.Join(binDir, file)) {
			return false, nil
		}
	}

	return true, nil
}

// 检查是否为普通文件
func isRegularFile(path string) bool {
	info, err := os.Stat(path)
	if err != nil {
		return false
	}
	return info.Mode().IsRegular()
}
