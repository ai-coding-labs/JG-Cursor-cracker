package utils

import (
	"fmt"
	"strings"
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

// 给文本添加颜色
func ColoredText(color string, text string) string {
	return color + text + Reset
}

// 给文本添加颜色和粗体
func BoldColoredText(color string, text string) string {
	return Bold + color + text + Reset
}

// 常用颜色函数
func RedText(text string) string {
	return ColoredText(Red, text)
}

func GreenText(text string) string {
	return ColoredText(Green, text)
}

func YellowText(text string) string {
	return ColoredText(Yellow, text)
}

func BlueText(text string) string {
	return ColoredText(Blue, text)
}

func MagentaText(text string) string {
	return ColoredText(Magenta, text)
}

func CyanText(text string) string {
	return ColoredText(Cyan, text)
}

func WhiteText(text string) string {
	return ColoredText(White, text)
}

// 粗体颜色函数
func BoldRedText(text string) string {
	return BoldColoredText(Red, text)
}

func BoldGreenText(text string) string {
	return BoldColoredText(Green, text)
}

func BoldYellowText(text string) string {
	return BoldColoredText(Yellow, text)
}

func BoldBlueText(text string) string {
	return BoldColoredText(Blue, text)
}

func BoldMagentaText(text string) string {
	return BoldColoredText(Magenta, text)
}

func BoldCyanText(text string) string {
	return BoldColoredText(Cyan, text)
}

func BoldWhiteText(text string) string {
	return BoldColoredText(White, text)
}

// 命令行帮助格式化函数
func FormatCmd(name string, desc string) string {
	return fmt.Sprintf("  %s%s%s", BoldCyanText(name), strings.Repeat(" ", 15-len(name)), WhiteText(desc))
}

func FormatFlag(flag string, desc string) string {
	return fmt.Sprintf("  %s%s%s", BoldYellowText(flag), strings.Repeat(" ", 20-len(flag)), WhiteText(desc))
}

func FormatTitle(title string) string {
	return BoldMagentaText(title + ":")
}

func FormatUsage(usage string) string {
	return BoldGreenText(usage)
}

func FormatExample(example string) string {
	return BoldBlueText(example)
}
