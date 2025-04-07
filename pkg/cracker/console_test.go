package cracker

import (
	"bytes"
	"io"
	"os"
	"strings"
	"testing"
	"time"
)

// 捕获标准输出的辅助函数
func captureOutput(f func()) string {
	old := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	outC := make(chan string)
	// 在后台复制输出
	go func() {
		var buf bytes.Buffer
		io.Copy(&buf, r)
		outC <- buf.String()
	}()

	f() // 执行测试函数

	// 回滚stdout并获取输出
	w.Close()
	os.Stdout = old
	return <-outC
}

func TestConsole_New(t *testing.T) {
	console := NewConsole()
	if console == nil {
		t.Error("NewConsole() returned nil")
	}
	if !console.showTimestamp {
		t.Error("NewConsole() should enable timestamp by default")
	}
	if console.rainbowMode {
		t.Error("NewConsole() should disable rainbow mode by default")
	}
}

func TestConsole_EnableTimestamp(t *testing.T) {
	console := NewConsole()

	console.EnableTimestamp(false)
	if console.showTimestamp {
		t.Error("EnableTimestamp(false) should disable timestamp")
	}

	console.EnableTimestamp(true)
	if !console.showTimestamp {
		t.Error("EnableTimestamp(true) should enable timestamp")
	}
}

func TestConsole_EnableRainbowMode(t *testing.T) {
	console := NewConsole()

	console.EnableRainbowMode(true)
	if !console.rainbowMode {
		t.Error("EnableRainbowMode(true) should enable rainbow mode")
	}

	console.EnableRainbowMode(false)
	if console.rainbowMode {
		t.Error("EnableRainbowMode(false) should disable rainbow mode")
	}
}

func TestConsole_InfoOutput(t *testing.T) {
	console := NewConsole()
	console.EnableTimestamp(false) // 禁用时间戳以便于测试

	output := captureOutput(func() {
		console.Info("Test message")
	})

	if !strings.Contains(output, "INFO") {
		t.Error("Info output should contain 'INFO'")
	}

	if !strings.Contains(output, "Test message") {
		t.Error("Info output should contain the message")
	}

	if !strings.Contains(output, Blue) {
		t.Error("Info output should use blue color")
	}
}

func TestConsole_SuccessOutput(t *testing.T) {
	console := NewConsole()
	console.EnableTimestamp(false)

	output := captureOutput(func() {
		console.Success("Success message")
	})

	if !strings.Contains(output, "SUCCESS") {
		t.Error("Success output should contain 'SUCCESS'")
	}

	if !strings.Contains(output, Green) {
		t.Error("Success output should use green color")
	}
}

func TestConsole_ErrorOutput(t *testing.T) {
	console := NewConsole()
	console.EnableTimestamp(false)

	output := captureOutput(func() {
		console.Error("Error message")
	})

	if !strings.Contains(output, "ERROR") {
		t.Error("Error output should contain 'ERROR'")
	}

	if !strings.Contains(output, Red) {
		t.Error("Error output should use red color")
	}
}

func TestConsole_RainbowText(t *testing.T) {
	console := NewConsole()

	// 禁用彩虹模式时
	plainText := console.Rainbow("test")
	if plainText != "test" {
		t.Error("Rainbow() with rainbow mode disabled should return the original text")
	}

	// 启用彩虹模式时
	console.EnableRainbowMode(true)
	coloredText := console.Rainbow("test")

	if coloredText == "test" {
		t.Error("Rainbow() with rainbow mode enabled should return colored text")
	}

	if !strings.Contains(coloredText, Reset) {
		t.Error("Rainbow text should contain reset codes")
	}
}

func TestConsole_ProgressBar(t *testing.T) {
	console := NewConsole()

	output := captureOutput(func() {
		console.ProgressBar(5, 10, "Loading: ")
	})

	if !strings.Contains(output, "5/10") {
		t.Error("ProgressBar should show current/total values")
	}

	if !strings.Contains(output, "50%") {
		t.Error("ProgressBar should show percentage")
	}

	// 测试100%完成情况
	completeOutput := captureOutput(func() {
		console.ProgressBar(10, 10, "Complete: ")
	})

	if !strings.Contains(completeOutput, "10/10") {
		t.Error("ProgressBar at 100% should show correct values")
	}

	if !strings.Contains(completeOutput, "100%") {
		t.Error("ProgressBar at 100% should show 100%")
	}
}

func TestConsole_Spinner(t *testing.T) {
	console := NewConsole()

	// 测试spinner启动和停止
	// 注意：由于spinner在goroutine中运行，测试需要小心处理
	stopCalled := false

	startAndStop := func() {
		stop := console.StartSpinner("Testing spinner")
		time.Sleep(300 * time.Millisecond) // 让spinner旋转几次
		stop()
		stopCalled = true
	}

	output := captureOutput(startAndStop)

	if !stopCalled {
		t.Error("Spinner stop function should be callable")
	}

	if !strings.Contains(output, "Testing spinner") {
		t.Error("Spinner output should contain the message")
	}

	if !strings.Contains(output, "✓") {
		t.Error("Spinner stop should display a checkmark")
	}
}

func TestConsole_WithTimestamp(t *testing.T) {
	console := NewConsole()
	console.EnableTimestamp(true)

	output := captureOutput(func() {
		console.Info("With timestamp")
	})

	// 检查输出是否包含时间格式 (HH:MM:SS)
	if matched := strings.ContainsAny(output, "0123456789:"); !matched {
		t.Errorf("Output with timestamp should contain time digits and colons: %s", output)
	}
}
