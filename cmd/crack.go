package cmd

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/cursor-home/JG-Cursor-cracker/cmd/utils"
	"github.com/cursor-home/JG-Cursor-cracker/pkg/cracker"
	"github.com/spf13/cobra"
)

var targetPath string

// crackCmd represents the crack command
var crackCmd = &cobra.Command{
	Use:   "crack",
	Short: "破解JG-Cursor应用",
	Long: `破解JG-Cursor应用并替换机器码。
如果不指定目标路径，将自动搜索系统中的JG-Cursor安装。
如果提供--device-id参数，将使用指定的机器码替换当前机器码。`,
	RunE: func(cmd *cobra.Command, args []string) error {
		console := cracker.NewConsole()
		console.EnableRainbowMode(true)
		console.SetVerbose(verbose)

		// 初始化查找器和破解器
		finder := cracker.NewFinder()
		finder.SearchEntireDisk = searchDisk

		fooling := cracker.NewFooling()

		// 如果指定了机器码，则设置
		if deviceId != "" {
			fooling.SetDeviceId(deviceId)
			fmt.Println(utils.GreenText(fmt.Sprintf("设备ID已设置为: %s", deviceId)))
		} else {
			fmt.Println(utils.YellowText("未指定机器码，将使用默认生成的随机机器码"))
		}

		// 寻找安装路径
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
			return errors.New(utils.RedText("未找到任何JG-Cursor安装，请指定安装路径或使用--search-disk扫描整个硬盘"))
		}

		// 如果找到多个安装，让用户选择
		var selectedPath string
		if len(installPaths) == 1 {
			selectedPath = installPaths[0]
		} else {
			fmt.Println(utils.BlueText("找到多个JG-Cursor安装:"))
			for i, path := range installPaths {
				fmt.Printf("[%s] %s\n", utils.BoldCyanText(fmt.Sprintf("%d", i+1)), utils.WhiteText(path))
			}

			var selection int
			fmt.Print(utils.BoldYellowText(fmt.Sprintf("请选择要破解的安装 (1-%d): ", len(installPaths))))
			fmt.Scanf("%d", &selection)

			if selection < 1 || selection > len(installPaths) {
				return fmt.Errorf(utils.RedText("无效的选择: %d"), selection)
			}

			selectedPath = installPaths[selection-1]
		}

		fmt.Println(utils.BoldCyanText(fmt.Sprintf("将对以下安装进行破解: %s", selectedPath)))
		if deviceId != "" {
			fmt.Println(utils.BlueText(fmt.Sprintf("破解即将开始，将使用机器码: %s", deviceId)))
		}

		// 确认操作
		if !cmd.Flags().Changed("yes") {
			fmt.Println(utils.BoldYellowText("该操作将修改应用文件并可能影响其功能！"))
			fmt.Print(utils.BoldYellowText("是否继续？ (y/N): "))

			var confirm string
			fmt.Scanf("%s", &confirm)
			if confirm != "y" && confirm != "Y" {
				fmt.Println(utils.BlueText("操作已取消"))
				return nil
			}
		}

		// 执行破解
		startTime := time.Now()
		err = fooling.Fool(selectedPath)
		if err != nil {
			return fmt.Errorf(utils.RedText("破解失败: %v"), err)
		}

		fmt.Println(utils.BoldGreenText(fmt.Sprintf("破解完成！耗时: %v", time.Since(startTime))))
		fmt.Println(utils.BoldCyanText("请重启JG-Cursor应用以使修改生效"))

		return nil
	},
}

// 验证是否为有效安装路径
func isValidInstallation(path string) (bool, error) {
	appInfo, err := os.Stat(path)
	if err != nil || !appInfo.IsDir() {
		return false, nil
	}

	// 检查app.asar文件是否存在
	asarPath := filepath.Join(path, "Contents", "Resources", "app.asar")
	if _, err := os.Stat(asarPath); os.IsNotExist(err) {
		return false, nil
	}

	return true, nil
}

func init() {
	rootCmd.AddCommand(crackCmd)

	// 添加命令特有的标志
	crackCmd.Flags().StringVarP(&targetPath, "path", "p", "", "JG-Cursor安装路径")
	crackCmd.Flags().BoolP("yes", "y", false, "自动确认所有提示")
}
