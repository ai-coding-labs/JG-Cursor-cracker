/**
 * 设置模块导出属性
 * 将当前模块标记为 ES 模块
 */
Object.defineProperty(exports, "__esModule", { value: !0 });

/**
 * 引入 Electron 模块
 * 用于在渲染进程和主进程之间进行通信
 */
var e = require("electron");

/**
 * 通过上下文桥接器向渲染进程暴露 API
 * 使网页内的 JavaScript 可以安全地访问 Electron 的功能
 */
e.contextBridge.exposeInMainWorld("electronAPI", {
    /**
     * 获取设备唯一标识符
     * @returns {Promise<string>} 设备 ID
     */
    getDeviceId: function () {
        return e.ipcRenderer.invoke("get-device-id")
    },
    
    /**
     * 发送 HTTP 请求
     * @param {Object} n - 请求配置对象，包含 URL、方法、请求头等
     * @returns {Promise<string>} 请求响应内容
     */
    httpRequest: function (n) {
        return e.ipcRenderer.invoke("http-request", n)
    },
    
    /**
     * 更新 Cursor 配置
     * @param {Object} n - 配置参数对象
     * @returns {Promise<Object>} 更新结果
     */
    updateCursorConfig: function (n) {
        return e.ipcRenderer.invoke("update-cursor-config", n).catch(function (e) {
            throw e.message || e
        })
    },
    
    /**
     * 刷新 Cursor 应用
     * @param {Object} n - 刷新参数
     * @returns {Promise<any>} 刷新结果
     */
    refreshCursor: function (n) {
        return e.ipcRenderer.invoke("refresh-cursor", n).catch(function (e) {
            throw e.message || e
        })
    },
    
    /**
     * 禁止 Cursor 升级
     * 阻止应用自动更新到新版本
     * @returns {Promise<any>} 操作结果
     */
    banCursorUpgrade: function () {
        return e.ipcRenderer.invoke("ban-cursor-upgrade").catch(function (e) {
            throw e.message || e
        })
    },
    
    /**
     * 修补 Cursor 应用
     * 应用自定义补丁或修复
     * @returns {Promise<any>} 修补结果
     */
    patchCursor: function () {
        return e.ipcRenderer.invoke("patch-cursor").catch(function (e) {
            throw e.message || e
        })
    },
    
    /**
     * 检查是否处于开发模式
     * @returns {Promise<boolean>} 是否为开发环境
     */
    isDev: function () {
        return e.ipcRenderer.invoke("is-dev")
    },
    
    /**
     * 获取 Cursor 应用版本号
     * @returns {Promise<string>} Cursor 版本号
     */
    getCursorVersion: function () {
        return e.ipcRenderer.invoke("get-cursor-version")
    },
    
    /**
     * 获取当前应用版本号
     * @returns {Promise<string>} 应用版本号
     */
    getAppVersion: function () {
        return e.ipcRenderer.invoke("get-app-version")
    },
    
    /**
     * 在默认浏览器中打开网站
     * @param {string} n - 要打开的 URL
     * @returns {Promise<void>} 操作结果
     */
    openWebsite: function (n) {
        return e.ipcRenderer.invoke("open-website", n)
    },
    
    /**
     * 获取当前操作系统平台信息
     * @returns {Promise<string>} 平台标识符（如 'win32', 'darwin', 'linux'）
     */
    getPlatform: function () {
        return e.ipcRenderer.invoke("get-platform")
    },
    
    /**
     * 更新窗口设置
     * @param {Object} n - 窗口设置参数
     * @returns {Promise<any>} 更新结果
     */
    updateWindowSettings: function (n) {
        return e.ipcRenderer.invoke("update-window-settings", n)
    },
    
    /**
     * 打开扩展窗口
     * @param {string} n - 扩展页面 URL
     * @param {string} r - 窗口标题
     * @returns {Promise<any>} 操作结果
     */
    openExtensionWindow: function (n, r) {
        return e.ipcRenderer.invoke("open-extension-window", { url: n, title: r })
    },
    
    /**
     * 打开终端
     * 启动系统默认终端或集成终端
     * @returns {Promise<any>} 操作结果
     */
    openTerminal: function () {
        return e.ipcRenderer.invoke("open-terminal")
    }
});