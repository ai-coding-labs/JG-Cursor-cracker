package cracker

import (
	"errors"
	"os"
	"os/exec"
	"path/filepath"
	"testing"
)

// 模拟exec.Command的行为
type mockCommand struct {
	command string
	args    []string
	output  []byte
	err     error
}

// 模拟的exec工具
type mockExecHelper struct {
	lookPathResults map[string]string
	lookPathErrors  map[string]error
	commands        map[string]mockCommand
	lastCommand     string
	lastArgs        []string
}

// 替换exec.LookPath
func (m *mockExecHelper) lookPath(file string) (string, error) {
	if path, ok := m.lookPathResults[file]; ok {
		return path, m.lookPathErrors[file]
	}
	return "", errors.New("command not found: " + file)
}

// 替换exec.Command
func (m *mockExecHelper) command(name string, args ...string) *exec.Cmd {
	m.lastCommand = name
	m.lastArgs = args

	// 创建一个临时脚本，使其返回我们预定的输出
	tempScript := filepath.Join(os.TempDir(), "mock_command_"+filepath.Base(name))

	// 这里我们不实际创建脚本，仅返回虚拟的cmd对象
	// 在真实情况下，这里会更复杂
	return &exec.Cmd{
		Path: tempScript,
		Args: append([]string{name}, args...),
	}
}

// 保存命令的输出配置
func (m *mockExecHelper) addCommandResult(cmd string, args []string, output []byte, err error) {
	key := cmd
	for _, arg := range args {
		key += " " + arg
	}
	m.commands[key] = mockCommand{
		command: cmd,
		args:    args,
		output:  output,
		err:     err,
	}
}

// 测试AsarManager的创建
func TestNewAsarManager(t *testing.T) {
	manager := NewAsarManager()
	if manager == nil {
		t.Fatal("NewAsarManager() returned nil")
	}
	if manager.console == nil {
		t.Error("AsarManager应该包含Console实例")
	}
}

// 测试asar命令已安装的情况
func TestAsarManager_EnsureAsarInstalled_AlreadyInstalled(t *testing.T) {
	mockExec := &mockExecHelper{
		lookPathResults: map[string]string{
			"asar": "/usr/local/bin/asar",
		},
		lookPathErrors: map[string]error{
			"asar": nil,
		},
	}

	manager := &AsarManager{
		console: NewConsole(),
	}

	// 替换LookPath函数
	origLookPath := lookPathFunc
	defer func() { lookPathFunc = origLookPath }()
	lookPathFunc = mockExec.lookPath

	err := manager.EnsureAsarInstalled()
	if err != nil {
		t.Errorf("EnsureAsarInstalled() = %v, 希望无错误", err)
	}

	if manager.asarPath != "/usr/local/bin/asar" {
		t.Errorf("asarPath = %s, 希望是 /usr/local/bin/asar", manager.asarPath)
	}
}

// 测试asar未安装但能自动安装的情况
func TestAsarManager_EnsureAsarInstalled_AutoInstall(t *testing.T) {
	mockExec := &mockExecHelper{
		lookPathResults: map[string]string{
			"asar": "",
			"npm":  "/usr/local/bin/npm",
		},
		lookPathErrors: map[string]error{
			"asar": errors.New("command not found"),
			"npm":  nil,
		},
		commands: make(map[string]mockCommand),
	}

	// 第二次检查asar时应该可以找到
	secondCheckCalled := false
	origLookPath := lookPathFunc
	lookPathFunc = func(file string) (string, error) {
		if file == "asar" && secondCheckCalled {
			return "/usr/local/bin/asar", nil
		}
		if file == "asar" {
			secondCheckCalled = true
		}
		return mockExec.lookPath(file)
	}

	// 模拟命令执行
	origCommand := commandFunc
	commandFunc = mockExec.command
	origCommandRun := commandRunFunc
	commandRunFunc = func(cmd *exec.Cmd) error {
		return nil // 假装命令执行成功
	}

	defer func() {
		lookPathFunc = origLookPath
		commandFunc = origCommand
		commandRunFunc = origCommandRun
	}()

	manager := &AsarManager{
		console: NewConsole(),
	}

	err := manager.EnsureAsarInstalled()
	if err != nil {
		t.Errorf("EnsureAsarInstalled() = %v, 希望无错误", err)
	}

	if !secondCheckCalled {
		t.Error("应该二次检查asar命令")
	}

	if manager.asarPath != "/usr/local/bin/asar" {
		t.Errorf("asarPath = %s, 希望是 /usr/local/bin/asar", manager.asarPath)
	}

	if mockExec.lastCommand != "/usr/local/bin/npm" {
		t.Errorf("应该使用npm安装asar，但使用了 %s", mockExec.lastCommand)
	}
}

// 测试asar未安装且安装失败的情况
func TestAsarManager_EnsureAsarInstalled_InstallFails(t *testing.T) {
	mockExec := &mockExecHelper{
		lookPathResults: map[string]string{
			"asar": "",
			"npm":  "/usr/local/bin/npm",
		},
		lookPathErrors: map[string]error{
			"asar": errors.New("command not found"),
			"npm":  nil,
		},
		commands: make(map[string]mockCommand),
	}

	origLookPath := lookPathFunc
	lookPathFunc = mockExec.lookPath

	// 模拟命令执行失败
	origCommand := commandFunc
	commandFunc = mockExec.command
	origCommandRun := commandRunFunc
	commandRunFunc = func(cmd *exec.Cmd) error {
		return errors.New("installation failed")
	}

	defer func() {
		lookPathFunc = origLookPath
		commandFunc = origCommand
		commandRunFunc = origCommandRun
	}()

	manager := &AsarManager{
		console: NewConsole(),
	}

	err := manager.EnsureAsarInstalled()
	if err == nil {
		t.Error("EnsureAsarInstalled() 应该返回错误，但没有")
	}
}

// 测试ExtractAsarArchive正常情况
func TestAsarManager_ExtractAsarArchive(t *testing.T) {
	// 使用临时目录
	tmpDir, err := os.MkdirTemp("", "asar_test_*")
	if err != nil {
		t.Fatalf("创建临时目录失败: %v", err)
	}
	defer os.RemoveAll(tmpDir)

	asarPath := "/usr/local/bin/asar"
	asarFilePath := filepath.Join(tmpDir, "test.asar")
	outputDir := filepath.Join(tmpDir, "output")

	// 创建mock
	origCommand := commandFunc
	commandFunc = func(name string, args ...string) *exec.Cmd {
		return exec.Command("echo", "mock output") // 使用echo作为替代
	}

	origCommandOutput := commandOutputFunc
	commandOutputFunc = func(cmd *exec.Cmd) ([]byte, error) {
		return []byte("extracted successfully"), nil
	}

	defer func() {
		commandFunc = origCommand
		commandOutputFunc = origCommandOutput
	}()

	manager := &AsarManager{
		asarPath: asarPath,
		console:  NewConsole(),
	}

	err = manager.ExtractAsarArchive(asarFilePath, outputDir)
	if err != nil {
		t.Errorf("ExtractAsarArchive() = %v, 希望无错误", err)
	}

	// 检查输出目录是否创建
	if _, err := os.Stat(outputDir); os.IsNotExist(err) {
		t.Error("输出目录应该已被创建")
	}
}

// 测试PackAsarArchive正常情况
func TestAsarManager_PackAsarArchive(t *testing.T) {
	// 使用临时目录
	tmpDir, err := os.MkdirTemp("", "asar_test_*")
	if err != nil {
		t.Fatalf("创建临时目录失败: %v", err)
	}
	defer os.RemoveAll(tmpDir)

	asarPath := "/usr/local/bin/asar"
	inputDir := filepath.Join(tmpDir, "input")
	outputAsarFile := filepath.Join(tmpDir, "output.asar")

	// 创建输入目录
	if err := os.MkdirAll(inputDir, 0755); err != nil {
		t.Fatalf("创建输入目录失败: %v", err)
	}

	// 创建mock
	origCommand := commandFunc
	commandFunc = func(name string, args ...string) *exec.Cmd {
		return exec.Command("echo", "mock output") // 使用echo作为替代
	}

	origCommandOutput := commandOutputFunc
	commandOutputFunc = func(cmd *exec.Cmd) ([]byte, error) {
		return []byte("packed successfully"), nil
	}

	defer func() {
		commandFunc = origCommand
		commandOutputFunc = origCommandOutput
	}()

	manager := &AsarManager{
		asarPath: asarPath,
		console:  NewConsole(),
	}

	err = manager.PackAsarArchive(inputDir, outputAsarFile)
	if err != nil {
		t.Errorf("PackAsarArchive() = %v, 希望无错误", err)
	}

	// 检查输出目录是否创建
	outputDir := filepath.Dir(outputAsarFile)
	if _, err := os.Stat(outputDir); os.IsNotExist(err) {
		t.Error("输出目录应该已被创建")
	}
}
