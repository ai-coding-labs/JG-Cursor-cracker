package cracker

import (
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestFooling_modifyPreloadJs(t *testing.T) {
	// 创建临时测试目录
	tempDir, err := ioutil.TempDir("", "fooling_test")
	if err != nil {
		t.Fatalf("创建临时目录失败: %v", err)
	}
	defer os.RemoveAll(tempDir)

	// 测试用例
	testCases := []struct {
		name       string
		content    string
		deviceId   string
		shouldFail bool
	}{
		{
			name: "标准格式",
			content: `Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("electron");e.contextBridge.exposeInMainWorld("electronAPI", {
  getDeviceId: function() {
    return "TEST-ID";
  },
  httpRequest: function(r) {
    return e.ipcRenderer.invoke("http-request", r);
  },
});`,
			deviceId:   "MY-CUSTOM-ID",
			shouldFail: false,
		},
		{
			name:       "压缩格式",
			content:    `Object.defineProperty(exports,"__esModule",{value:!0});var e=require("electron");e.contextBridge.exposeInMainWorld("electronAPI",{getDeviceId:function(){return"TEST-ID"},httpRequest:function(r){return e.ipcRenderer.invoke("http-request",r)}});`,
			deviceId:   "MY-CUSTOM-ID",
			shouldFail: false,
		},
		{
			name:       "没有getDeviceId方法",
			content:    `Object.defineProperty(exports,"__esModule",{value:!0});var e=require("electron");e.contextBridge.exposeInMainWorld("electronAPI",{httpRequest:function(r){return e.ipcRenderer.invoke("http-request",r)}});`,
			deviceId:   "MY-CUSTOM-ID",
			shouldFail: false, // 不应该失败，因为我们会添加getDeviceId方法
		},
		{
			name:       "无法识别的格式",
			content:    `非标准JavaScript代码，没有electronAPI对象`,
			deviceId:   "MY-CUSTOM-ID",
			shouldFail: true,
		},
		// 新增测试用例 - JG-Cursor 1.5.7 格式
		{
			name:       "JG-Cursor 1.5.7 格式",
			content:    `Object.defineProperty(exports,"__esModule",{value:!0});var e=require("electron");e.contextBridge.exposeInMainWorld("electronAPI",{getDeviceId:function(){return e.ipcRenderer.invoke("get-device-id")},httpRequest:function(r){return e.ipcRenderer.invoke("http-request",r)},updateCursorConfig:function(r){return e.ipcRenderer.invoke("update-cursor-config",r).catch(function(e){throw e.message||e})},refreshCursor:function(r){return e.ipcRenderer.invoke("refresh-cursor",r).catch(function(e){throw e.message||e})},banCursorUpgrade:function(){return e.ipcRenderer.invoke("ban-cursor-upgrade").catch(function(e){throw e.message||e})},patchCursor:function(){return e.ipcRenderer.invoke("patch-cursor").catch(function(e){throw e.message||e})},beforeRefreshCursor:function(){return e.ipcRenderer.invoke("before-refresh-cursor").catch(function(e){throw e.message||e})},isDev:function(){return e.ipcRenderer.invoke("is-dev")},getCursorVersion:function(){return e.ipcRenderer.invoke("get-cursor-version")},getAppVersion:function(){return e.ipcRenderer.invoke("get-app-version")},openWebsite:function(r){return e.ipcRenderer.invoke("open-website",r)},getPlatform:function(){return e.ipcRenderer.invoke("get-platform")},updateWindowSettings:function(r){return e.ipcRenderer.invoke("update-window-settings",r)},openExtensionWindow:function(r,n){return e.ipcRenderer.invoke("open-extension-window",{url:r,title:n})},openTerminal:function(){return e.ipcRenderer.invoke("open-terminal")}});`,
			deviceId:   "JG-Cursor-Test-123456",
			shouldFail: false,
		},
		// 其他可能的格式变体
		{
			name:       "带空格和换行的格式",
			content:    `Object.defineProperty(exports,"__esModule",{value:!0});var e=require("electron");e.contextBridge.exposeInMainWorld("electronAPI",{getDeviceId: function() { return e.ipcRenderer.invoke("get-device-id") },httpRequest:function(r){return e.ipcRenderer.invoke("http-request",r)}});`,
			deviceId:   "SPACE-TEST-ID",
			shouldFail: false,
		},
		{
			name: "非标准缩进格式",
			content: `Object.defineProperty(exports,"__esModule",{value:!0});var e=require("electron");e.contextBridge.exposeInMainWorld("electronAPI",{
                getDeviceId:function(){ 
                    return e.ipcRenderer.invoke("get-device-id") 
                },
                httpRequest:function(r){return e.ipcRenderer.invoke("http-request",r)}
            });`,
			deviceId:   "INDENT-TEST-ID",
			shouldFail: false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			// 创建测试文件
			testFile := filepath.Join(tempDir, "preload.js")
			if err := ioutil.WriteFile(testFile, []byte(tc.content), 0644); err != nil {
				t.Fatalf("创建测试文件失败: %v", err)
			}

			// 创建Fooling实例
			fooling := NewFooling()
			fooling.SetDeviceId(tc.deviceId)

			// 执行修改
			err := fooling.modifyPreloadJs(testFile)

			// 检查结果
			if tc.shouldFail {
				if err == nil {
					t.Errorf("应该失败但成功了")
				}
				return
			}

			if err != nil {
				t.Fatalf("修改失败: %v", err)
			}

			// 读取修改后的文件
			modified, err := ioutil.ReadFile(testFile)
			if err != nil {
				t.Fatalf("读取修改后文件失败: %v", err)
			}

			// 验证修改是否成功
			content := string(modified)
			expectedReturnValue := `return"` + tc.deviceId + `"`
			if !contains(content, expectedReturnValue) {
				t.Errorf("修改后的文件不包含期望的返回值 %s\n修改后的内容:\n%s", expectedReturnValue, content)
			}

			// 验证getDeviceId方法存在
			if !contains(content, "getDeviceId:") {
				t.Errorf("修改后的文件不包含getDeviceId方法\n修改后的内容:\n%s", content)
			}

			// 验证修改后的格式是否正确
			expectedFunction := `getDeviceId:function(){return"` + tc.deviceId + `"}`
			if !contains(content, expectedFunction) {
				t.Errorf("修改后的文件不包含正确格式的getDeviceId函数\n期望: %s\n实际内容:\n%s", expectedFunction, content)
			}
		})
	}
}

// 辅助函数:检查字符串是否包含子串
func contains(s, substr string) bool {
	return strings.Contains(s, substr)
}

func TestFooling_Fool(t *testing.T) {
	// 此测试需要模拟整个文件系统和asar操作
	// 由于mock的复杂性，暂时跳过
	t.Skip("需要复杂的mock，暂时跳过")
}
