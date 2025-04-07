/**
 * 处理生成器/迭代器的步进执行
 * 这个函数是 async/await 语法糖编译后的核心辅助函数
 * @param {Object} e - 迭代器对象
 * @param {Function} r - 成功回调函数，用于 Promise resolve
 * @param {Function} n - 失败回调函数，用于 Promise reject
 * @param {Function} t - 处理下一步的函数
 * @param {Function} s - 处理错误的函数
 * @param {String} o - 操作类型，通常是 "next" 或 "throw"
 * @param {*} a - 传递给迭代器的值
 */
function e(e, r, n, t, s, o, a) {
    try {
        var i = e[o](a), c = i.value
    } catch (e) {
        n(e);
        return
    }
    i.done ? r(c) : Promise.resolve(c).then(t, s)
}


/**
 * 将普通函数转换为异步函数的包装器
 * 这个函数是 async/await 语法糖编译后的辅助函数
 * @param {Function} r - 需要被包装的生成器函数
 * @returns {Function} 返回一个包装后的异步函数，该函数返回 Promise
 */
function r(r) {
    return function () {
        var n = this, t = arguments;
        return new Promise(function (s, o) {
            // 调用原始生成器函数，保持原有的 this 上下文和参数
            var a = r.apply(n, t);

            // 处理生成器的 "next" 操作，推进生成器执行
            function i(r) {
                e(a, s, o, i, c, "next", r)
            }

            // 处理生成器的 "throw" 操作，向生成器传递异常
            function c(r) {
                e(a, s, o, i, c, "throw", r)
            }

            // 开始执行生成器，初始值为 undefined
            i(void 0)
        })
    }
}


/**
 * 检查对象是否为指定类型的实例
 * 这个函数是 instanceof 操作符的增强版，支持 Symbol.hasInstance 自定义类型检查
 * @param {*} e - 要检查的对象
 * @param {Function} r - 类型构造函数
 * @returns {boolean} 如果对象是指定类型的实例则返回 true，否则返回 false
 */
function n(e, r) {
    return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : e instanceof r
}


/**
 * 生成器状态机的核心实现函数
 * 这个函数处理异步生成器的状态转换和执行流程
 * @param {Object} e - 生成器上下文
 * @param {Function} r - 调用函数，用于处理生成器的结果
 * @returns {Object} 返回一个包含状态机控制方法的对象
 */
function t(e, r) {
    var n, t, s, o, a = {
        label: 0, sent: function () {
            if (1 & s[0]) throw s[1];
            return s[1]
        }, trys: [], ops: []
    };
    return o = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this
    }), o;

    function i(o) {
        return function (i) {
            return function (o) {
                // 如果生成器正在执行，抛出错误
                if (n) throw TypeError("Generator is already executing.");
                for (; a;) try {
                    // 状态机控制流程
                    if (n = 1, t && (s = 2 & o[0] ? t.return : o[0] ? t.throw || ((s = t.return) && s.call(t), 0) : t.next) && !(s = s.call(t, o[1])).done) return s;
                    switch (t = 0, s && (o = [2 & o[0], s.value]), o[0]) {
                        case 0:
                        case 1:
                            // 处理 next 和 throw 操作
                            s = o;
                            break;
                        case 4:
                            // 增加标签值并返回未完成状态，表示生成器产生了一个值
                            return a.label++, {value: o[1], done: !1};
                        case 5:
                            // 增加标签值并设置新的 try 目标，准备进入新的 try 块
                            a.label++, t = o[1], o = [0];
                            continue;
                        case 7:
                            // 弹出操作和 try 状态，表示完成了一个 try-catch 块
                            o = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            // 处理其他情况，包括 yield 和异常处理
                            if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                // 重置状态，准备结束或返回
                                a = 0;
                                continue
                            }
                            if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                // 跳转到特定标签，处理 break 语句
                                a.label = o[1];
                                break
                            }
                            if (6 === o[0] && a.label < s[1]) {
                                // 设置新标签并跳转，处理 continue 语句
                                a.label = s[1], s = o;
                                break
                            }
                            if (s && a.label < s[2]) {
                                // 设置新标签并添加操作，处理 yield 语句
                                a.label = s[2], a.ops.push(o);
                                break
                            }
                            // 弹出操作并继续，处理完成的 yield 操作
                            s[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    // 调用生成器函数的下一步，推进状态机
                    o = r.call(e, a)
                } catch (e) {
                    // 捕获错误并设置为抛出状态，准备在状态机中处理
                    o = [6, e], t = 0
                } finally {
                    // 重置状态变量，确保下一次调用时状态正确
                    n = s = 0
                }
                // 如果是抛出状态，则抛出错误
                if (5 & o[0]) throw o[1];
                // 返回当前值和完成状态，这是生成器函数的最终输出
                return {value: o[0] ? o[1] : void 0, done: !0}
            }([o, i])
        }
    }
}


var s, o, a, i, c, u, l, p = this && this.__createBinding || (Object.create ? function (e, r, n, t) {
    // 定义参数t的默认值为n
    void 0 === t && (t = n);
    // 获取属性描述符
    var s = Object.getOwnPropertyDescriptor(r, n);
    // 如果属性描述符不存在，或者属性是getter/setter，或者属性可写/可配置，则创建新的属性描述符
    (!s || ("get" in s ? !r.__esModule : s.writable || s.configurable)) && (s = {
        enumerable: !0, get: function () {
            // 创建一个getter函数，返回r[n]的值
            return r[n]
        }
    }), 
    // 使用属性描述符定义新属性
    Object.defineProperty(e, t, s)
} : function (e, r, n, t) {
    // 兼容不支持Object.create的环境，直接赋值
    void 0 === t && (t = n), e[t] = r[n]
}), f = this && this.__setModuleDefault || (Object.create ? function (e, r) {
    // 为对象e定义default属性，值为r
    Object.defineProperty(e, "default", {enumerable: !0, value: r})
} : function (e, r) {
    // 兼容不支持Object.create的环境，直接赋值
    e.default = r
}), d = this && this.__importStar || (s = function (e) {
    // 获取对象的所有属性名
    return (s = Object.getOwnPropertyNames || function (e) {
        // 兼容不支持Object.getOwnPropertyNames的环境，手动获取所有属性
        var r = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[r.length] = n);
        return r
    })(e)
}, function (e) {
    // 如果模块已经是ES模块，直接返回
    if (e && e.__esModule) return e;
    // 创建一个新对象作为返回值
    var r = {};
    // 如果e不为空，遍历其所有属性（除了default）
    if (null != e) for (var n = s(e), t = 0; t < n.length; t++) "default" !== n[t] && p(r, e, n[t]);
    // 设置default属性
    return f(r, e), r
}), h = this && this.__importDefault || function (e) {
    // 处理默认导入，如果是ES模块则返回模块本身，否则将其包装在一个带default属性的对象中
    return e && e.__esModule ? e : {default: e}
};
// 将exports对象标记为ES模块
Object.defineProperty(exports, "__esModule", {value: !0});
// 导入所需的模块
var w = require("electron"), // Electron主模块
    m = d(require("path")), // 路径处理模块，使用__importStar导入所有导出
    g = h(require("electron-is-dev")), // 检查是否为开发环境的模块，使用__importDefault导入
    v = require("child_process"), // 子进程模块，用于执行系统命令
    b = h(require("crypto")), // 加密模块，用于生成哈希等
    y = h(require("https")), // HTTPS请求模块
    _ = h(require("http")), // HTTP请求模块
    S = require("util"), // 实用工具模块
    x = d(require("fs")), // 文件系统模块，导入所有导出
    E = require("uuid"), // UUID生成模块
    M = new (h(require("electron-store"))).default; // 创建electron-store实例，用于持久化存储

    
function P() {
    return (P = r(function () {
        var e, n, s, o, a, i;
        return t(this, function (c) {
            switch (c.label) {
                case 0:
                    var u;
                    // 检查是否已存在设备ID，如果存在则直接返回
                    if (e = M.get("deviceId")) return [2, e];
                    // 定义获取MAC地址的函数
                    u = r(function () {
                        return t(this, function (e) {
                            return [2, new Promise(function (e, r) {
                                var n = "";
                                // 根据不同平台选择不同的命令获取MAC地址
                                switch (process.platform) {
                                    case"win32":
                                        n = "getmac";
                                        break;
                                    case"darwin":
                                        n = "ifconfig";
                                        break;
                                    case"linux":
                                        n = "ip link";
                                        break;
                                    default:
                                        r(Error("Unsupported platform"));
                                        return
                                }
                                // 执行命令获取MAC地址
                                (0, v.exec)(n, function (n, t) {
                                    if (n) {
                                        r(n);
                                        return
                                    }
                                    var s, o = "";
                                    // 根据不同平台解析命令输出获取MAC地址
                                    if ("win32" === process.platform) o = (null === (s = t.split("\n")[3]) || void 0 === s ? void 0 : s.split(" ")[0]) || ""; else if ("darwin" === process.platform) {
                                        var a = t.match(/ether\s+([0-9a-fA-F:]+)/);
                                        o = (null == a ? void 0 : a[1]) || ""
                                    } else if ("linux" === process.platform) {
                                        var i = t.match(/link\/ether\s+([0-9a-fA-F:]+)/);
                                        o = (null == i ? void 0 : i[1]) || ""
                                    }
                                    // 如果没有找到MAC地址则返回错误
                                    if (!o) {
                                        r(Error("No MAC address found"));
                                        return
                                    }
                                    e(o)
                                })
                            })]
                        })
                    }), n = function () {
                        return u.apply(this, arguments)
                    }, c.label = 1;
                case 1:
                    return c.trys.push([1, 3, , 4]), [4, n()];
                case 2:
                    // 获取MAC地址并使用SHA256哈希生成设备ID
                    return s = c.sent(), o = "".concat(s).concat("your-secret-salt"), a = b.default.createHash("sha256").update(o).digest().toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "").slice(0, 16), M.set("deviceId", a), [2, a];
                case 3:
                    // 如果获取MAC地址失败，则使用UUID生成设备ID
                    return c.sent(), i = (0, E.v4)().slice(0, 16), M.set("deviceId", i), [2, i];
                case 4:
                    return [2]
            }
        })
    })).apply(this, arguments)
}

function I() {
    return j.apply(this, arguments)
}

function j() {
    return (j = r(function () {
        var e, r, n, s, o, a, i, c, u, p, f, d, h, m, v;
        return t(this, function (t) {
            switch (t.label) {
                case 0:
                    if (g.default) return [2];
                    t.label = 1;
                case 1:
                    return t.trys.push([1, 14, , 15]), [4, function () {
                        return C.apply(this, arguments)
                    }()];
                case 2:
                    if (r = t.sent(), n = w.app.getVersion(), s = "darwin" === process.platform ? "darwin" : "win32", !(o = null === (e = r.platforms[s]) || void 0 === e ? void 0 : e[process.arch])) return [2];
                    if (!function (e, r) {
                        for (var n = e.split(".").map(Number), t = r.version.split(".").map(Number), s = r.minVersion.split(".").map(Number), o = 0; o < 3; o++) {
                            if (n[o] < s[o]) return !0;
                            if (n[o] > s[o]) break
                        }
                        for (var a = 0; a < 3; a++) {
                            if (n[a] < t[a]) return r.forceUpdate;
                            if (n[a] > t[a]) break
                        }
                        return !1
                    }(n, r)) return [3, 5];
                    return [4, w.dialog.showMessageBox({
                        type: "info",
                        title: "发现新版本",
                        message: "发现新版本 ".concat(r.version),
                        detail: "更新内容：\n".concat(r.changelog, "\n\n这是一个必须更新的版本"),
                        buttons: ["立即更新"],
                        defaultId: 0
                    })];
                case 3:
                    return t.sent(), [4, w.shell.openExternal(o)];
                case 4:
                    return t.sent(), w.app.quit(), [2];
                case 5:
                    if (a = N(), c = (i = r.platforms[s]).minCursorVersion, u = i.maxCursorVersion, p = i.stableCursorVersion, !(a && c && u && p) || (f = k(a, c) >= 0, d = 0 >= k(a, u), !(!f || !d))) return [3, 13];
                    return h = "当前本地 Cursor 编辑器版本 (".concat(a, ") 不在推荐范围内。\n\n") + "推荐使用 ".concat(c, " 到 ").concat(u, " 版本。\n\n") + "为了确保最佳使用体验，请考虑卸载当前版本。\n\n请放心，版本变更不会影响您的历史记录。", [4, w.dialog.showMessageBox({
                        type: "warning",
                        title: "版本不兼容",
                        message: h,
                        buttons: ["去卸载", "取消"],
                        defaultId: 0
                    })];
                case 6:
                    if (1 !== t.sent().response) return [3, 8];
                    return [4, w.dialog.showMessageBox({
                        type: "warning",
                        title: "注意",
                        message: "如果您选择取消，可能会影响 ".concat(null == l ? void 0 : l.getTitle(), " 的正常使用。"),
                        buttons: ["去卸载", "坚持取消"],
                        defaultId: 0
                    })];
                case 7:
                    if (1 === t.sent().response) return [2];
                    t.label = 8;
                case 8:
                    if ("win32" !== process.platform) return [3, 10];
                    return [4, O(q("cursor_tools"), ["--mode", "windows-uninstall"])];
                case 9:
                    t.sent(), t.label = 10;
                case 10:
                    return m = p, v = "卸载完成后，请点击前往下载，我们推荐使用版本：".concat(m, "。\n\n") + "请放心，版本变更不会影响您的历史记录。", [4, w.dialog.showMessageBox({
                        type: "info",
                        title: "卸载完成",
                        message: v,
                        buttons: ["前往下载"],
                        defaultId: 0
                    })];
                case 11:
                    return t.sent(), [4, w.shell.openExternal("https://downloader-cursor.deno.dev/")];
                case 12:
                    return t.sent(), [2];
                case 13:
                    return [3, 15];
                case 14:
                    return t.sent(), [3, 15];
                case 15:
                    return [2]
            }
        })
    })).apply(this, arguments)
}

function C() {
    return (C = r(function () {
        var e, r, s;
        return t(this, function (t) {
            switch (t.label) {
                case 0:
                    e = function (e) {
                        return new Promise(function (r, n) {
                            y.default.get(e, {
                                headers: {
                                    "Cache-Control": "no-cache, no-store, must-revalidate",
                                    Pragma: "no-cache",
                                    Expires: "0"
                                }
                            }, function (e) {
                                var t = "";
                                e.on("data", function (e) {
                                    return t += e
                                }), e.on("end", function () {
                                    try {
                                        r(JSON.parse(t))
                                    } catch (e) {
                                        n(e)
                                    }
                                })
                            }).on("error", n)
                        })
                    }, r = function (e) {
                        var r, t;
                        return (n(e, Error) ? null == e ? void 0 : null === (r = e.message) || void 0 === r ? void 0 : r.toLowerCase() : null === (t = String(e)) || void 0 === t ? void 0 : t.toLowerCase()).includes("http-request")
                    }, t.label = 1;
                case 1:
                    return t.trys.push([1, 3, , 10]), [4, e("https://update.freecursor.fun/updates/latest.json")];
                case 2:
                    return [2, t.sent()];
                case 3:
                    if (s = t.sent(), !r(s)) return [3, 8];
                    t.label = 4;
                case 4:
                    return t.trys.push([4, 6, , 7]), [4, e("http://110.42.232.79:8080/updates/latest.json")];
                case 5:
                    return [2, t.sent()];
                case 6:
                    throw t.sent();
                case 7:
                    return [3, 9];
                case 8:
                    throw s;
                case 9:
                    return [3, 10];
                case 10:
                    return [2]
            }
        })
    })).apply(this, arguments)
}

/**
 * 创建并配置激活器窗口
 * 该函数创建一个新的浏览器窗口，用于显示Cursor激活器界面
 * @returns {BrowserWindow} 配置好的浏览器窗口实例
 */
function $() {
    // 创建一个新的浏览器窗口，设置窗口属性
    var e = new w.BrowserWindow({
        width: 600,                  // 窗口宽度
        height: 670,                 // 窗口高度
        resizable: !1,               // 禁止调整窗口大小
        title: "Cursοr 激活器",      // 窗口标题
        // 根据不同平台选择适当的图标文件
        icon: m.join(__dirname, "../../resources/icons/", "win32" === process.platform ? "icon.ico" : "darwin" === process.platform ? "icon.icns" : "icon.png"),
        webPreferences: {
            nodeIntegration: !1,     // 禁用Node集成，提高安全性
            contextIsolation: !0,    // 启用上下文隔离，提高安全性
            preload: m.join(__dirname, "../preload/preload.js") // 预加载脚本路径
        }
    });
    
    // 根据环境加载不同的内容
    // 如果是开发环境(g.default为true)，加载开发服务器URL并打开开发者工具
    // 否则加载打包后的HTML文件
    return g.default ? (e.loadURL("http://localhost:5173"), e.webContents.openDevTools()) : e.loadFile(m.join(__dirname, "../renderer/index.html")), e
}


function q(e) {
    // 获取补丁工具或其他工具的路径
    // e参数是工具名称，例如"cursor_patch"或"cursor_tools"
    // 函数根据当前运行环境(开发环境或生产环境)和操作系统平台
    // 返回对应工具的完整路径
    var r = process.platform;
    // 如果是开发环境(g.default为true)，则从相对路径查找工具
    // 如果是生产环境，则从应用程序资源目录查找工具
    // 对于Windows平台，添加.exe后缀
    return m.join(g.default ? __dirname : process.resourcesPath, g.default ? "../resources/bin" : "bin", "win32" === r ? "".concat(e, ".exe") : e)
}

/**
 * 执行补丁工具的函数
 * 这个函数是对U函数的封装，用于执行补丁工具或其他命令行工具
 * 当调用patch-cursor或refresh-cursor等IPC处理程序时，会通过这个函数
 * 执行对应的补丁工具，修改Cursor编辑器的授权文件或配置
 * @param {string} e - 工具的完整路径，通过q函数获取
 * @param {string[]} r - 传递给工具的命令行参数
 * @returns {Promise} 返回执行结果的Promise
 */
function O(e, r) {
    return U.apply(this, arguments)
}


/**
 * 执行外部命令的函数
 * 该函数负责以管理员权限执行外部可执行文件，支持Windows和其他平台
 * 在Windows上，会尝试使用PowerShell以管理员权限运行，如果失败则回退到cmd
 * 函数会检查可执行文件是否存在，不存在时会显示警告对话框
 * @param {string} e - 可执行文件的完整路径
 * @param {string[]} r - 传递给可执行文件的命令行参数数组
 * @returns {Promise<{stdout: string, stderr: string}>} 执行结果，包含标准输出和错误输出
 */
function U() {
    return (U = r(function (e, r) {
        var n, s, o, a, i, c, u, p, f;
        return t(this, function (t) {
            switch (t.label) {
                case 0:
                    // 将execFile函数转换为Promise形式，以便使用async/await语法
                    n = (0, S.promisify)(v.execFile), 
                    // 获取可执行文件所在的目录路径
                    s = m.dirname(e), 
                    // 将参数数组转换为空格分隔的命令行参数字符串
                    o = r.join(" "), 
                    // 检查可执行文件是否存在
                    x.existsSync(e) ? [3, 2] : [4, w.dialog.showMessageBox({
                        type: "warning",
                        title: "路径检查提示",
                        message: "请确保关闭任何杀毒软件，然后重新打开应用。\n\n此软件是安全的，请放心使用。",
                        buttons: ["确定"]
                    })];
                case 1:
                    // 如果文件不存在，显示警告对话框，然后退出应用
                    return t.sent(), w.app.quit(), [2, {stdout: "", stderr: ""}];
                case 2:
                    // 根据平台选择不同的执行方式
                    // 如果是Windows平台
                    if ("win32" !== process.platform) return [3, 8];
                    // 创建PowerShell脚本，以管理员权限运行命令
                    a = "\n      try {\n        $processStartInfo = New-Object System.Diagnostics.ProcessStartInfo;\n        $processStartInfo.FileName = '".concat(e, "';\n        $processStartInfo.Arguments = '").concat(o, "';\n        $processStartInfo.UseShellExecute = $true;\n        $processStartInfo.CreateNoWindow = $false;\n        $processStartInfo.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Hidden;\n        $processStartInfo.RedirectStandardOutput = $false;\n        $processStartInfo.RedirectStandardError = $false;\n        $processStartInfo.Verb = 'runas';\n        \n        $process = [System.Diagnostics.Process]::Start($processStartInfo);\n        $process.WaitForExit();\n        \n        if ($process.ExitCode -ne 0) {\n          throw \"Process exited with code $($process.ExitCode)\";\n        }\n      } catch {\n        throw $_.Exception.Message;\n      }\n    "), t.label = 3;
                case 3:
                    // 尝试使用PowerShell以管理员权限执行命令
                    return t.trys.push([3, 5, , 7]), [4, n("powershell", ["-Command", a])];
                case 4:
                    // 返回PowerShell执行结果
                    return [2, t.sent()];
                case 5:
                    // 如果PowerShell执行失败，尝试使用cmd命令行执行
                    t.sent(), 
                    // 处理路径中的反斜杠，确保在cmd中正确解析
                    i = e.replace(/\\/g, "\\\\"), 
                    // 构建cmd命令行
                    c = '"'.concat(i, '" ').concat(o), 
                    // 使用cmd执行命令
                    [4, n("cmd", ["/c", c], {
                        shell: !0,
                        windowsVerbatimArguments: !0
                    })];
                case 6:
                    // 返回cmd执行结果
                    return [2, t.sent()];
                case 7:
                    // 跳转到结束
                    return [3, 12];
                case 8:
                    // 如果是macOS或Linux平台
                    // 构建shell命令，包括设置工作目录、移除quarantine属性、设置执行权限和执行命令
                    u = ["cd '".concat(s, "'"), "xattr -d com.apple.quarantine '".concat(e, "' 2>/dev/null || true"), "chmod +x '".concat(e, "'"), "'".concat(e, "' ").concat(o)].join(" && "), t.label = 9;
                case 9:
                    // 尝试使用osascript以管理员权限执行shell命令
                    // 尝试使用osascript执行shell命令，请求管理员权限
                    // 将错误处理范围设置为9-11区块，添加错误处理函数
                    // 执行osascript命令，传入shell脚本，并显示权限请求提示
                    return t.trys.push([9, 11, , 12]), [4, n("/usr/bin/osascript", ["-e", 'do shell script "'.concat(u, '" with administrator privileges with prompt "').concat(null == l ? void 0 : l.getTitle(), ' 需要使用管理员权限来执行此操作"')])];
                case 10:
                    // 返回osascript执行结果
                    return [2, t.sent()];
                case 11:
                    // 处理osascript执行失败的情况
                    // 检查是否是用户取消了授权操作
                    if (-128 === (f = t.sent()).code || (null === (p = f.stderr) || void 0 === p ? void 0 : p.includes("User canceled"))) throw Error("已取消授权操作，执行失败");
                    // 其他错误情况
                    throw Error("执行失败: ".concat(f.message || "未知错误"));
                case 12:
                    // 函数执行完成
                    return [2]
            }
        })
    })).apply(this, arguments)
}

/**
 * 获取 Cursor 应用的版本号
 * 根据不同操作系统从对应路径读取 package.json 文件
 * 解析并返回版本号信息
 * @returns {string} Cursor 应用的版本号
 * @throws {Error} 当无法获取版本号时抛出错误
 */
function N() {
    try {
        // 检查当前操作系统是否为 macOS
        if ("darwin" === process.platform) {
            // 如果是 macOS，从固定路径读取 Cursor 应用的 package.json 文件
            // 解析 JSON 并返回版本号
            return JSON.parse(x.readFileSync("/Applications/Cursor.app/Contents/Resources/app/package.json", "utf8")).version;
        }
        // 如果不是 macOS（主要是 Windows），获取本地应用数据目录
        var e = process.env.LOCALAPPDATA, 
            // 使用路径模块拼接 Cursor 应用的 package.json 文件路径
            // 如果 LOCALAPPDATA 环境变量不存在，则使用空字符串
            r = m.join(e || "", "Programs", "Cursor", "resources", "app", "package.json");
        // 读取并解析 package.json 文件，返回版本号
        return JSON.parse(x.readFileSync(r, "utf8")).version
    } catch (e) {
        // 捕获所有可能的错误，包括文件不存在、JSON 解析错误等
        // 使用 n 函数检查错误是否为 Error 类型实例
        // 如果是 Error 实例，则使用其 message 属性；否则直接使用错误对象
        throw Error("获取 Cursor 版本号失败: ".concat(n(e, Error) ? e.message : e))
    }
}

/**
 * 比较两个版本号的大小
 * 将版本号按点分割并转换为数字数组，然后逐位比较
 * @param {string} e - 第一个版本号，如 "1.2.3"
 * @param {string} r - 第二个版本号，如 "1.3.0"
 * @returns {number} 比较结果：
 *   -1: 第一个版本号小于第二个版本号
 *    0: 两个版本号相等
 *    1: 第一个版本号大于第二个版本号
 */
function k(e, r) {
    // 将版本号字符串分割为数组并转换为数字类型
    // 例如："1.2.3" => [1, 2, 3]
    for (var n = e.split(".").map(Number), t = r.split(".").map(Number), s = 0; s < 3; s++) {
        // 逐位比较版本号的每个部分（主版本号、次版本号、修订号）
        if (n[s] < t[s]) return -1;  // 如果第一个版本的当前位小于第二个版本，返回 -1
        if (n[s] > t[s]) return 1    // 如果第一个版本的当前位大于第二个版本，返回 1
    }
    // 所有位都相等，两个版本号完全相同
    return 0
}

// 注册 IPC 处理程序，用于获取设备 ID
// 当渲染进程请求设备 ID 时，调用此处理程序
w.ipcMain.handle("get-device-id",/*#__PURE__*/r(function () {
    return t(this, function (e) {
        switch (e.label) {
            case 0:
                // 调用 P 函数获取设备 ID
                // 这里使用了异步操作，[4, ...] 表示等待 Promise 完成
                return [4, function () {
                    // 使用 apply 方法调用 P 函数，保持原有的 this 上下文和参数
                    return P.apply(this, arguments)
                }()];
            case 1:
                // [2, ...] 表示返回结果
                // e.sent() 获取上一步异步操作的结果（设备 ID）
                return [2, e.sent()]
        }
    })
})), 

// 注册 IPC 处理程序，用于处理 HTTP 请求
// 当渲染进程需要发送 HTTP 请求时，调用此处理程序
// o 变量存储了实际的处理函数，使用了 r 函数包装以支持异步操作
w.ipcMain.handle("http-request", (o = r(function (e, r) {
    return t(this, function (e) {
        // 返回一个新的 Promise 对象，用于异步处理 HTTP 请求
        return [2, new Promise(function (e, n) {
            // 创建请求配置对象，包含方法和请求头
            var t = {method: r.method, headers: r.headers || {}},
                // 根据 URL 协议选择 https 或 http 模块发起请求
                // y.default 是 https 模块，_.default 是 http 模块
                s = (r.url.startsWith("https:") ? y.default : _.default).request(r.url, t, function (r) {
                    // 初始化一个空字符串，用于存储响应数据
                    var t = "";
                    // 监听数据事件，将接收到的数据片段追加到 t 变量
                    r.on("data", function (e) {
                        t += e
                    }), 
                    // 监听结束事件，表示所有数据已接收完毕
                    r.on("end", function () {
                        try {
                            // 成功接收完数据后，通过 resolve 返回响应内容
                            e(t)
                        } catch (e) {
                            // 如果处理响应时出错，通过 reject 返回错误
                            n(e)
                        }
                    })
                });
            // 监听请求错误事件，如网络问题等
            s.on("error", function (e) {
                // 发生错误时，通过 reject 返回错误对象
                n(e)
            }), 
            // 如果请求包含 body，将其转换为 JSON 字符串并写入请求
            r.body && s.write(JSON.stringify(r.body)), 
            // 结束请求，表示所有数据已发送完毕
            s.end()
        })]
    })
}), function (e, r) {
    // 这是一个包装函数，确保调用 o 函数时保持正确的 this 上下文和参数
    return o.apply(this, arguments)
})), 



w.ipcMain.handle("is-dev", function () {
    return g.default
}), 


w.ipcMain.handle("update-cursor-config", (a = r(function (e, r) {
    var s;
    return t(this, function (e) {
        switch (e.label) {
            case 0:
                return e.trys.push([0, 2, , 3]), [4, O(q("cursor_tools"), ["--mode", "auth", "--account", r.account])];
            case 1:
                return e.sent(), [2, {success: !0, message: "Config updated successfully"}];
            case 2:
                throw Error(n(s = e.sent(), Error) ? s.message : String(s));
            case 3:
                return [2]
        }
    })
}), function (e, r) {
    return a.apply(this, arguments)
})), 


w.ipcMain.handle("ban-cursor-upgrade",/*#__PURE__*/r(function () {
    var e;
    return t(this, function (r) {
        switch (r.label) {
            case 0:
                return r.trys.push([0, 2, , 3]), [4, O(q("cursor_tools"), ["--mode", "disable-update"])];
            case 1:
                return r.sent(), [2, {success: !0, message: "Update disabled successfully"}];
            case 2:
                throw Error(n(e = r.sent(), Error) ? e.message : String(e));
            case 3:
                return [2]
        }
    })
})), 


w.ipcMain.handle("refresh-cursor", (i = r(function (e, r) {
    var s;
    return t(this, function (e) {
        switch (e.label) {
            case 0:
                // 尝试执行刷新操作，首先重置Cursor状态，然后使用账户信息重新认证
                // 这行代码设置了错误处理范围并准备执行两个操作:
                // 1. 首先重置Cursor状态(--mode reset)
                // 2. 然后使用用户账户信息进行认证(--mode auth)
                // e.trys.push([0,2,,3])设置try/catch块的范围
                // [4, O(...)]表示执行异步操作并等待结果
                return e.trys.push([0, 2, , 3]), [4, O(q("cursor_tools"), ["--mode", "reset", "--mode", "auth", "--account", r.account])];
            case 1:
                // 操作成功完成，返回成功消息
                return e.sent(), [2, {success: !0, message: "Cursor refresh and auth completed"}];
            case 2:
                // 捕获并处理错误，转换为标准错误格式
                throw Error(n(s = e.sent(), Error) ? s.message : String(s));
            case 3:
                // 完成函数执行
                return [2]
        }
    })
}), function (e, r) {
    return i.apply(this, arguments)
})), 


w.ipcMain.handle("patch-cursor",/*#__PURE__*/r(function () {
    var e;
    return t(this, function (r) {
        switch (r.label) {
            case 0:
                // 这里处理"patch-cursor"请求，用于修补Cursor编辑器
                // 首先设置try-catch错误处理块
                // 然后调用q("cursor_patch")获取补丁工具的路径
                // O函数执行该工具，相当于在系统中运行这个可执行文件
                // 补丁工具会修改Cursor的授权文件或配置，绕过授权限制
                return r.trys.push([0, 2, , 3]), [4, O(q("cursor_patch"), [])];
            case 1:
                // 补丁工具执行完成后，返回成功状态
                // 这将通知前端补丁已成功应用
                return r.sent(), [2, {success: !0, message: "Cursor patched successfully"}];
            case 2:
                // 如果补丁过程失败，捕获错误
                // 这里的错误可能是文件权限问题或Cursor版本不兼容等
                // 将错误转换为标准格式并向上抛出，由前端处理
                throw Error(n(e = r.sent(), Error) ? e.message : String(e));
            case 3:
                // 函数执行完毕，返回结果
                return [2]
        }
    })
})), 


w.ipcMain.handle("get-cursor-version", function () {
    // 处理获取Cursor版本的IPC请求
    // 返回当前Cursor的版本信息
    return N()
}), 


w.ipcMain.handle("get-app-version", function () {
    // 处理获取应用程序版本的IPC请求
    // 返回Electron应用程序的当前版本号
    return w.app.getVersion()
}), 


// 当Electron应用程序准备就绪时执行
w.app.whenReady().then(function () {
    var e;
    // 创建主窗口并存储在全局变量l中
    (l = $()).webContents.on("did-finish-load", function () {
        // 页面加载完成后延迟3秒执行I函数
        setTimeout(function () {
            // 执行I函数，可能用于检查更新或执行定期维护任务
            // 该函数在页面加载完成后延迟3秒执行，并且每小时执行一次
            // 这段代码位于Electron应用程序的主进程中，在主窗口加载完成后延迟3秒执行
            // 它位于一个setTimeout回调函数内，在执行I函数之前
            // I函数可能是一个定期维护任务，如检查更新，因为它在初始化后每小时执行一次
            // 这个位置适合放置需要在应用程序启动后但在第一次维护任务前执行的初始化代码
            // 例如：初始化应用程序状态、设置初始配置、执行一次性的启动检查等
            I()
        }, 3e3)
    }), 
    // 每小时(3600000毫秒)执行一次I函数
    setInterval(I, 36e5), 
    // 处理应用程序激活事件(macOS特性)
    w.app.on("activate", function () {
        // 如果没有窗口打开，则创建一个新窗口
        0 === w.BrowserWindow.getAllWindows().length && (l = $())
    }), 
    // 处理更新窗口设置的IPC请求
    w.ipcMain.handle("update-window-settings", (e = r(function (e, r) {
        var n;
        return t(this, function (e) {
            // 从请求参数中获取标题
            return n = r.title, 
                   // 如果主窗口存在且标题有效，则设置窗口标题
                   l && n && l.setTitle(n), [2]
        })
    }), function (r, n) {
        // 包装函数，确保正确的this上下文
        return e.apply(this, arguments)
    }))
}), 


// 处理所有窗口关闭事件
// 当所有应用窗口都被关闭时触发此事件
// 在macOS(darwin)上，应用程序通常在所有窗口关闭后仍保持活动状态
// 在其他平台上，当所有窗口关闭时，应用程序将退出
w.app.on("window-all-closed", function () {
    "darwin" !== process.platform && w.app.quit()
}), 


w.ipcMain.handle("open-website", (c = r(function (e, r) {
    return t(this, function (e) {
        // 处理打开外部网站的IPC请求
        // 当渲染进程需要打开外部网站时，通过此处理器执行w.shell.openExternal(r)
        // 这将使用默认浏览器打开指定的URL
        // 例如，当渲染进程发送'open-website'请求时，主进程会执行此函数
        // 参数r是要打开的URL地址
        // w.shell.openExternal是Electron提供的API，用于在用户默认浏览器中打开URL
        // [2]表示Promise解析完成并返回undefined
        // 执行成功后，浏览器将打开指定的URL
        // 注意：此操作会将用户引导至应用程序外部，应确保URL安全可靠
        return w.shell.openExternal(r), [2]
    })
}), function (e, r) {
    // 这是一个包装函数，用于保持正确的this上下文
    // c.apply确保函数调用时的上下文(this)和参数(arguments)正确传递
    return c.apply(this, arguments)
})), 


// 处理获取平台信息的IPC请求
// 当渲染进程需要获取当前操作系统平台信息时，通过此处理器返回process.platform值
// process.platform可能的值包括：'win32'、'darwin'(macOS)、'linux'等
w.ipcMain.handle("get-platform", function () {
    return process.platform
});


// 存储扩展窗口的全局变量，初始为null
var A = null;
// 处理打开扩展窗口的IPC请求
w.ipcMain.handle("open-extension-window", (u = r(function (e, r) {
    return t(this, function (e) {
        return function (e, r) {
            // 检查扩展窗口是否已经存在
            if (null == A ? void 0 : A.window) {
                // 如果窗口已存在但URL不同，则更新URL和标题
                A.currentUrl !== e && (A.window.loadURL(e), A.currentUrl = e, A.window.setTitle(r)), 
                // 显示并聚焦窗口
                A.window.show(), A.window.focus();
                return
            }
            // 如果窗口不存在，创建一个新的浏览器窗口
            var n = new w.BrowserWindow({
                width: 800,
                height: 600,
                title: r,
                // 根据不同平台设置窗口图标
                icon: m.join(__dirname, "../../resources/icons/", "win32" === process.platform ? "icon.ico" : "darwin" === process.platform ? "icon.icns" : "icon.png"),
                webPreferences: {
                    // 禁用节点集成，提高安全性
                    nodeIntegration: !1,
                    // 启用上下文隔离，提高安全性
                    contextIsolation: !0,
                    // 设置预加载脚本路径
                    preload: m.join(__dirname, "../preload/preload.js")
                }
            });
            // 保存窗口引用和当前URL
            A = {window: n, currentUrl: e}, 
            // 加载指定URL
            n.loadURL(e), 
            // 监听窗口关闭事件，清理引用
            n.on("closed", function () {
                A = null
            }), 
            // 监听主窗口关闭事件，同时关闭扩展窗口
            null == l || l.on("closed", function () {
                (null == A ? void 0 : A.window) && (A.window.close(), A = null)
            })
        }(r.url, r.title), [2]
    })
}), function (e, r) {
    return u.apply(this, arguments)
})), 


// 处理来自渲染进程的"open-terminal"请求
// 该处理程序会在macOS系统上打开终端应用
// 注意：此功能仅在macOS上有效
w.ipcMain.handle("open-terminal",/*#__PURE__*/r(function () {
    return t(this, function (e) {
        // 处理打开终端的IPC请求
        // 这个函数使用child_process的exec方法来执行shell命令
        // 'open -a Terminal'是macOS系统上打开终端应用的命令
        // 注意：这个命令只在macOS系统上有效，在Windows或Linux上会失败
        // 当渲染进程发送'open-terminal'请求时，主进程会执行此命令
        // 执行成功后，系统默认的终端应用将被打开
        (0, v.exec)("open -a Terminal"), 
        // 返回[2]表示异步生成器函数的完成状态
        // 在这个上下文中，它表示操作已完成并且没有返回值
        [2]
    })
}));
