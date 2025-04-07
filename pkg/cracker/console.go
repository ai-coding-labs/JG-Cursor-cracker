package cracker

import (
	"fmt"
	"strings"
	"time"
)

// ANSI颜色代码
const (
	Reset     = "\033[0m"
	Bold      = "\033[1m"
	Red       = "\033[31m"
	Green     = "\033[32m"
	Yellow    = "\033[33m"
	Blue      = "\033[34m"
	Magenta   = "\033[35m"
	Cyan      = "\033[36m"
	White     = "\033[37m"
	BgRed     = "\033[41m"
	BgGreen   = "\033[42m"
	BgYellow  = "\033[43m"
	BgBlue    = "\033[44m"
	BgMagenta = "\033[45m"
	BgCyan    = "\033[46m"
	BgWhite   = "\033[47m"
)

// Console 控制台打印模块
type Console struct {
	showTimestamp bool
	rainbowMode   bool
	verbose       bool
}

// NewConsole 创建一个新的控制台实例
func NewConsole() *Console {
	return &Console{
		showTimestamp: true,
		rainbowMode:   false,
		verbose:       false,
	}
}

// EnableTimestamp 启用/禁用时间戳
func (c *Console) EnableTimestamp(enable bool) {
	c.showTimestamp = enable
}

// EnableRainbowMode 启用/禁用彩虹模式
func (c *Console) EnableRainbowMode(enable bool) {
	c.rainbowMode = enable
}

// SetVerbose 设置详细输出模式
func (c *Console) SetVerbose(verbose bool) {
	c.verbose = verbose
}

// Info 打印信息
func (c *Console) Info(format string, args ...interface{}) {
	c.print(Blue, "INFO", format, args...)
}

// Success 打印成功信息
func (c *Console) Success(format string, args ...interface{}) {
	c.print(Green, "SUCCESS", format, args...)
}

// Warning 打印警告信息
func (c *Console) Warning(format string, args ...interface{}) {
	c.print(Yellow, "WARNING", format, args...)
}

// Error 打印错误信息
func (c *Console) Error(format string, args ...interface{}) {
	c.print(Red, "ERROR", format, args...)
}

// Debug 打印调试信息
func (c *Console) Debug(format string, args ...interface{}) {
	if c.verbose {
		c.print(Magenta, "DEBUG", format, args...)
	}
}

// Highlight 高亮打印
func (c *Console) Highlight(format string, args ...interface{}) {
	c.print(Bold+Cyan, ">>>", format, args...)
}

// CustomPrompt 打印自定义提示并等待用户输入
func (c *Console) CustomPrompt(format string, args ...interface{}) {
	message := fmt.Sprintf(format, args...)
	fmt.Printf("%s%s%s%s", Bold, Yellow, message, Reset)
}

// 彩虹文字
func (c *Console) Rainbow(text string) string {
	if !c.rainbowMode {
		return text
	}

	colors := []string{Red, Yellow, Green, Cyan, Blue, Magenta}
	var result strings.Builder

	for i, char := range text {
		if char == ' ' {
			result.WriteString(" ")
			continue
		}

		colorIndex := i % len(colors)
		result.WriteString(colors[colorIndex] + string(char) + Reset)
	}

	return result.String()
}

// 内部打印方法
func (c *Console) print(color, level, format string, args ...interface{}) {
	message := fmt.Sprintf(format, args...)
	timestamp := ""

	if c.showTimestamp {
		timestamp = time.Now().Format("15:04:05") + " "
	}

	if c.rainbowMode && level != "ERROR" {
		fmt.Printf("%s%s[%s%s%s] %s\n",
			Bold, color, level, Reset, Bold,
			timestamp+c.Rainbow(message))
	} else {
		fmt.Printf("%s%s[%s]%s %s%s\n",
			Bold, color, level, Reset,
			timestamp, message)
	}
}

// 进度条
func (c *Console) ProgressBar(current, total int, prefix string) {
	width := 30
	percent := float64(current) / float64(total)
	if percent < 0 {
		percent = 0
	}
	if percent > 1 {
		percent = 1
	}

	barWidth := int(percent * float64(width))
	if barWidth < 0 {
		barWidth = 0
	}

	bar := strings.Repeat("█", barWidth)
	space := strings.Repeat(" ", width-barWidth)

	fmt.Printf("\r%s%s[%s%s%s] %d/%d %d%%",
		prefix, Cyan, bar, space, Reset,
		current, total, int(percent*100))

	if current >= total {
		fmt.Println()
	}
}

// 动画加载
func (c *Console) StartSpinner(message string) func() {
	spinner := []string{"⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"}
	stop := false

	go func() {
		i := 0
		for !stop {
			fmt.Printf("\r%s %s%s%s ",
				spinner[i%len(spinner)], Cyan, message, Reset)
			i++
			time.Sleep(100 * time.Millisecond)
		}
	}()

	return func() {
		stop = true
		fmt.Print("\r")
		fmt.Printf("%s✓%s %s\n", Green, Reset, message)
	}
}
