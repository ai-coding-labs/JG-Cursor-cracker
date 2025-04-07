package cmd

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/JSREP/JG-Cursor-cracker/cmd/utils"
	"github.com/JSREP/JG-Cursor-cracker/pkg/cracker"
	"github.com/spf13/cobra"
)

// infoCmd represents the info command
var infoCmd = &cobra.Command{
	Use:   "info",
	Short: "显示JG-Cursor安装信息",
	Long:  `查找系统中的JG-Cursor安装并显示详细信息。`,
	RunE: func(cmd *cobra.Command, args []string) error {
		console := cracker.NewConsole()
		console.EnableRainbowMode(true)
		console.SetVerbose(verbose)

		// 初始化查找器
		finder := cracker.NewFinder()
		finder.SearchEntireDisk = searchDisk

		var installPaths []string
		var err error

		if targetPath != "" {
			// 验证指定路径是否为有效安装
			valid, _ := isValidInstallation(targetPath)
			if !valid {
				return fmt.Errorf(utils.RedText("指定的路径不是有效的JG-Cursor安装: %s"), targetPath)
			}
			installPaths = []string{targetPath}
		} else {
			// 自动搜索安装路径
			fmt.Println(utils.BlueText("正在搜索系统中的JG-Cursor安装..."))
			installPaths, err = finder.Find()
			if err != nil {
				return fmt.Errorf(utils.RedText("搜索JG-Cursor安装时出错: %v"), err)
			}
		}

		if len(installPaths) == 0 {
			fmt.Println(utils.YellowText("未找到任何JG-Cursor安装"))
			return nil
		}

		// 显示找到的安装信息
		fmt.Println(utils.BoldGreenText(fmt.Sprintf("找到 %d 个JG-Cursor安装:", len(installPaths))))

		for i, path := range installPaths {
			fmt.Println()
			fmt.Println(utils.BoldCyanText(fmt.Sprintf("安装 #%d:", i+1)))
			fmt.Printf("%s: %s\n", utils.BoldBlueText("安装路径"), utils.WhiteText(path))

			// 读取app.asar信息
			asarPath := filepath.Join(path, "Contents", "Resources", "app.asar")
			asarInfo, err := os.Stat(asarPath)
			if err == nil {
				fmt.Printf("%s: %.2f MB\n",
					utils.BoldYellowText("app.asar 大小"),
					float64(asarInfo.Size())/1024/1024)
				fmt.Printf("%s: %s\n",
					utils.BoldMagentaText("app.asar 修改时间"),
					utils.WhiteText(asarInfo.ModTime().Format("2006-01-02 15:04:05")))
			}

			// 如果开启了详细模式，尝试检测当前的机器码
			if verbose {
				// 这里只是演示，实际上需要实现从app.asar中提取机器码的功能
				fmt.Println(utils.MagentaText("需要实现从app.asar中提取当前机器码的功能"))
			}
		}

		return nil
	},
}

func init() {
	rootCmd.AddCommand(infoCmd)

	// 添加命令特有的标志
	infoCmd.Flags().StringVarP(&targetPath, "path", "p", "", "JG-Cursor安装路径")
}
