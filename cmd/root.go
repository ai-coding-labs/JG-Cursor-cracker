package cmd

import (
	"fmt"
	"os"
	"strings"

	"github.com/JSREP/JG-Cursor-cracker/cmd/utils"
	"github.com/spf13/cobra"
)

var (
	verbose    bool
	deviceId   string
	searchDisk bool
)

// 自定义帮助模板
var usageTemplate = `{{with or .Long .Short }}{{. | trimTrailingWhitespaces}}{{end}}

` + utils.BoldMagentaText("Usage:") + `{{if .Runnable}}
  {{.UseLine}}{{end}}{{if .HasAvailableSubCommands}}
  {{.CommandPath}} [command]{{end}}{{if gt (len .Aliases) 0}}

` + utils.BoldMagentaText("Aliases:") + `
  {{.NameAndAliases}}{{end}}{{if .HasExample}}

` + utils.BoldMagentaText("Examples:") + `
{{.Example}}{{end}}{{if .HasAvailableSubCommands}}

` + utils.BoldMagentaText("Available Commands:") + `{{range .Commands}}{{if (or .IsAvailableCommand (eq .Name "help"))}}
  {{formatCommand .Name .Short}}{{end}}{{end}}{{end}}{{if .HasAvailableLocalFlags}}

` + utils.BoldMagentaText("Flags:") + `
{{range .LocalFlags.FlagUsages | split "\n"}}{{if . }}  {{formatFlag .}}{{end}}
{{end}}{{end}}{{if .HasAvailableInheritedFlags}}

` + utils.BoldMagentaText("Global Flags:") + `
{{range .InheritedFlags.FlagUsages | split "\n"}}{{if . }}  {{formatFlag .}}{{end}}
{{end}}{{end}}{{if .HasHelpSubCommands}}

Additional help topics:{{range .Commands}}{{if .IsAdditionalHelpTopicCommand}}
  {{rpad .CommandPath .CommandPathPadding}} {{.Short}}{{end}}{{end}}{{end}}{{if .HasAvailableSubCommands}}

Use "{{.CommandPath}} [command] --help" for more information about a command.{{end}}
`

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "jg-cursor-cracker",
	Short: "JG-Cursor破解工具",
	Long: utils.BoldCyanText("JG-Cursor-cracker") + "是一个用于破解和激活JG-Cursor应用的工具。\n\n" +
		"支持扫描系统查找JG-Cursor安装位置，并自动进行破解激活。\n" +
		"可以指定自定义的机器码替换当前的机器码。",
}

// Execute adds all child commands to the root command and sets flags appropriately.
func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		fmt.Println(utils.RedText(err.Error()))
		os.Exit(1)
	}
}

// 辅助函数：分割字符串
func split(s string) []string {
	return strings.Split(s, "\n")
}

// 辅助函数：重复字符串
func repeat(n int) string {
	if n < 0 {
		n = 0
	}
	return strings.Repeat(" ", n)
}

// 辅助函数：减法
func sub(a, b int) int {
	return a - b
}

// 辅助函数：格式化命令
func formatCommand(name, desc string) string {
	return fmt.Sprintf("  %s%s%s", utils.BoldCyanText(name), repeat(sub(28, len(name))), utils.CyanText(desc))
}

// 辅助函数：格式化标志
func formatFlag(flag string) string {
	parts := strings.SplitN(flag, "  ", 2)
	if len(parts) != 2 {
		return utils.YellowText(flag)
	}
	flagPart := strings.TrimSpace(parts[0])
	desc := strings.TrimSpace(parts[1])
	return fmt.Sprintf("  %s%s%s",
		utils.BoldYellowText(flagPart),
		repeat(sub(35, len(flagPart))),
		utils.YellowText(desc))
}

func init() {
	// 注册模板函数
	cobra.AddTemplateFunc("cyan", utils.BoldCyanText)
	cobra.AddTemplateFunc("yellow", utils.BoldYellowText)
	cobra.AddTemplateFunc("magenta", utils.BoldMagentaText)
	cobra.AddTemplateFunc("white", utils.CyanText)
	cobra.AddTemplateFunc("split", split)
	cobra.AddTemplateFunc("repeat", repeat)
	cobra.AddTemplateFunc("sub", sub)
	cobra.AddTemplateFunc("formatCommand", formatCommand)
	cobra.AddTemplateFunc("formatFlag", formatFlag)

	// 设置自定义帮助模板
	rootCmd.SetUsageTemplate(`{{magenta "Usage:"}}{{if .Runnable}}
  {{.UseLine}}{{end}}{{if .HasAvailableSubCommands}}
  {{.CommandPath}} [command]{{end}}{{if gt (len .Aliases) 0}}

{{magenta "Aliases:"}}
  {{.NameAndAliases}}{{end}}{{if .HasExample}}

{{magenta "Examples:"}}
{{.Example}}{{end}}{{if .HasAvailableSubCommands}}

{{magenta "Available Commands:"}}{{range .Commands}}{{if (or .IsAvailableCommand (eq .Name "help"))}}
{{formatCommand .Name .Short}}{{end}}{{end}}{{end}}{{if .HasAvailableLocalFlags}}

{{magenta "Flags:"}}{{range .LocalFlags.FlagUsages | split}}
{{formatFlag .}}{{end}}{{end}}{{if .HasAvailableInheritedFlags}}

{{magenta "Global Flags:"}}{{range .InheritedFlags.FlagUsages | split}}
{{formatFlag .}}{{end}}{{end}}{{if .HasHelpSubCommands}}

Additional help topics:{{range .Commands}}{{if .IsAdditionalHelpTopicCommand}}
  {{rpad .CommandPath .CommandPathPadding}} {{.Short}}{{end}}{{end}}{{end}}{{if .HasAvailableSubCommands}}

Use "{{.CommandPath}} [command] --help" for more information about a command.{{end}}
`)

	// 全局标志
	rootCmd.PersistentFlags().BoolVarP(&verbose, "verbose", "v", false, "启用详细日志输出")
	rootCmd.PersistentFlags().BoolVarP(&searchDisk, "search-disk", "s", false, "搜索整个硬盘查找JG-Cursor安装")
	rootCmd.PersistentFlags().StringVarP(&deviceId, "device-id", "d", "", "自定义机器码")

	// 设置标志的使用说明格式
	rootCmd.Flags().SetOutput(os.Stdout)

	// 设置标志的使用说明格式
	rootCmd.SetHelpCommand(&cobra.Command{
		Use:   "help [command]",
		Short: "Help about any command",
		Long: `Help provides help for any command in the application.
Simply type ` + utils.BoldCyanText("jg-cursor-cracker") + ` help [path to command] for full details.`,
		Run: func(c *cobra.Command, args []string) {
			cmd, _, e := c.Root().Find(args)
			if cmd == nil || e != nil {
				c.Root().Printf("Unknown help topic %#q\n", args)
				c.Root().Usage()
			} else {
				cmd.InitDefaultHelpFlag() // make possible 'help' flag to be shown
				cmd.Help()
			}
		},
	})

	// 设置标志的使用说明格式
	rootCmd.SetFlagErrorFunc(func(cmd *cobra.Command, err error) error {
		if err == nil {
			return nil
		}
		return fmt.Errorf("%s\n\n%s", utils.RedText(err.Error()), cmd.UsageString())
	})
}
