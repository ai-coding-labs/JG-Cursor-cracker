package cmd

import (
	"fmt"

	"github.com/cursor-home/JG-Cursor-cracker/cmd/utils"
	"github.com/spf13/cobra"
)

var (
	// 版本信息 - 这些变量将由GoReleaser在构建时注入
	Version = "dev"
	Commit  = "unknown"
	Date    = "unknown"
	repoURL = "https://github.com/cursor-home/JG-Cursor-cracker"
)

// versionCmd represents the version command
var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "显示版本信息",
	Long:  `显示JG-Cursor-cracker工具的版本信息、构建信息等。`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println(utils.BoldCyanText("JG-Cursor-cracker 版本信息"))
		fmt.Println(utils.BoldCyanText("-------------------------"))
		fmt.Printf("%s: %s\n", utils.BoldGreenText("版本"), utils.WhiteText(Version))
		fmt.Printf("%s: %s\n", utils.BoldYellowText("提交"), utils.WhiteText(Commit))
		fmt.Printf("%s: %s\n", utils.BoldMagentaText("构建时间"), utils.WhiteText(Date))
		fmt.Printf("%s: %s\n", utils.BoldBlueText("项目地址"), utils.WhiteText(repoURL))
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)
}
