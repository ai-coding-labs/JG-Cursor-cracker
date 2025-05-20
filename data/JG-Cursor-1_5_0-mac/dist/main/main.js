"use strict";

function e(e, r, t, n, s, o, a) {
  try {
    var i = e[o](a),
        c = i.value;
  } catch (e) {
    t(e);return;
  }i.done ? r(c) : Promise.resolve(c).then(n, s);
}function r(r) {
  return function () {
    var t = this,
        n = arguments;return new Promise(function (s, o) {
      var a = r.apply(t, n);function i(r) {
        e(a, s, o, i, c, "next", r);
      }function c(r) {
        e(a, s, o, i, c, "throw", r);
      }i(void 0);
    });
  };
}function t(e, r) {
  return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : e instanceof r;
}function n(e, r) {
  var t,
      n,
      s,
      o,
      a = { label: 0, sent: function sent() {
      if (1 & s[0]) throw s[1];return s[1];
    }, trys: [], ops: [] };return o = { next: i(0), "throw": i(1), "return": i(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
    return this;
  }), o;function i(o) {
    return function (i) {
      return (function (o) {
        if (t) throw TypeError("Generator is already executing.");for (; a;) try {
          if ((t = 1, n && (s = 2 & o[0] ? n["return"] : o[0] ? n["throw"] || ((s = n["return"]) && s.call(n), 0) : n.next) && !(s = s.call(n, o[1])).done)) return s;switch ((n = 0, s && (o = [2 & o[0], s.value]), o[0])) {case 0:case 1:
              s = o;break;case 4:
              return a.label++, { value: o[1], done: !1 };case 5:
              a.label++, n = o[1], o = [0];continue;case 7:
              o = a.ops.pop(), a.trys.pop();continue;default:
              if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                a = 0;continue;
              }if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                a.label = o[1];break;
              }if (6 === o[0] && a.label < s[1]) {
                a.label = s[1], s = o;break;
              }if (s && a.label < s[2]) {
                a.label = s[2], a.ops.push(o);break;
              }s[2] && a.ops.pop(), a.trys.pop();continue;}o = r.call(e, a);
        } catch (e) {
          o = [6, e], n = 0;
        } finally {
          t = s = 0;
        }if (5 & o[0]) throw o[1];return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, i]);
    };
  }
}var s,
    o,
    a,
    i,
    c,
    u,
    l,
    // __createBinding: 创建模块绑定
    p = undefined && undefined.__createBinding || (Object.create ? function (e, r, t, n) {
  void 0 === n && (n = t);var s = Object.getOwnPropertyDescriptor(r, t);(!s || ("get" in s ? !r.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function get() {
      return r[t];
    } }), Object.defineProperty(e, n, s);
} : function (e, r, t, n) {
  void 0 === n && (n = t), e[n] = r[t];
}),
    // __setModuleDefault: 设置模块默认导出
    f = undefined && undefined.__setModuleDefault || (Object.create ? function (e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function (e, r) {
  e["default"] = r;
}),
    // __importStar: 实现 import * as ...
    d = undefined && undefined.__importStar || (s = function (e) {
  return (s = Object.getOwnPropertyNames || function (e) {
    var r = [];for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[r.length] = t);return r;
  })(e);
}, function (e) {
  if (e && e.__esModule) return e;var r = {};if (null != e) for (var t = s(e), n = 0; n < t.length; n++) "default" !== t[n] && p(r, e, t[n]);return f(r, e), r;
}),
    // __importDefault: 实现 import default ...
    h = undefined && undefined.__importDefault || function (e) {
  return e && e.__esModule ? e : { "default": e };
};Object.defineProperty(exports, "__esModule", { value: !0 });var w = require("electron"),
    m = d(require("path")),
    y = h(require("electron-is-dev")),
    g = require("child_process"),
    v = h(require("crypto")),
    b = h(require("https")),
    S = h(require("http")),
    E = require("util"),
    x = d(require("fs")),
    _ = require("uuid"),
    C = new (h(require("electron-store"))["default"])();function P() {
  return (P = r(function () {
    var e, t, s, o, a, i;return n(this, function (c) {
      switch (c.label) {case 0:
          var u;
          // 尝试从 electron-store 获取已存储的 deviceId
          if (e = C.get("deviceId")) return [2, "CC11001100"]; // 如果存在，直接返回硬编码的 "CC11001100"
          // 定义一个异步函数 u，用于获取 MAC 地址
          u = r(function () {
            return n(this, function (e) {
              return [2, new Promise(function (e, r) {
                var t = "";switch (process.platform) {case "win32":
                    t = "getmac";break;case "darwin":
                    t = "ifconfig";break;case "linux":
                    t = "ip link";break;default:
                    r(Error("Unsupported platform"));return;}(0, g.exec)(t, function (t, n) {
                  if (t) {
                    r(t);return;
                  }var s,
                      o = "";if ("win32" === process.platform) o = (null === (s = n.split("\n")[3]) || void 0 === s ? void 0 : s.split(" ")[0]) || "";else if ("darwin" === process.platform) {
                    var a = n.match(/ether\s+([0-9a-fA-F:]+)/);o = (null == a ? void 0 : a[1]) || "";
                  } else if ("linux" === process.platform) {
                    var i = n.match(/link\/ether\s+([0-9a-fA-F:]+)/);o = (null == i ? void 0 : i[1]) || "";
                  }if (!o) {
                    r(Error("No MAC address found"));return;
                  }e(o);
                });
              })];
            });
          }), t = function () {
            return u.apply(this, arguments);
          }, c.label = 1;case 1:
          return c.trys.push([1, 3,, 4]), [4, t()];case 2:
          return s = c.sent(), // s 为获取到的 MAC 地址
                 o = "".concat(s).concat("your-secret-salt"), // MAC 地址拼接盐值
                 // 使用 sha256 哈希处理，并进行 base64 编码和字符替换，截取前16位作为 deviceId
                 a = v["default"].createHash("sha256").update(o).digest().toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "").slice(0, 16), 
                 C.set("deviceId", "CC11001100"), // 将硬编码的 "CC11001100" 存入 electron-store
                 [2, "CC11001100"]; // 返回固定 deviceId
          case 3: // 异常处理：如果获取 MAC 地址失败
          return c.sent(), 
                 i = (0, _.v4)().slice(0, 16), // 生成一个 UUID v4 作为 deviceId，截取前16位
                 C.set("deviceId", "CC11001100"), // 同样将硬编码的 "CC11001100" 存入 electron-store
                 [2, i]; // 返回生成的 UUID
          case 4:
          return [2];}
    });
  })).apply(this, arguments);
}function j() {
  return A.apply(this, arguments);
}function A() {
  return (A = r(function () {
    var e, r, t, s, o, a, i, c, u, p, f, d, h, m, g;return n(this, function (n) {
      switch (n.label) {case 0:
          // 如果是开发环境，则不执行更新检查
          if (y["default"]) return [2];
          n.label = 1;
        case 1:
          // 尝试从主更新源和备用更新源获取最新版本信息
          return n.trys.push([1, 15,, 16]), [4, I("https://update.freecursor.fun/updates/latest.json", "https://49.234.197.219:8090/updates/latest.json")];
        case 2:
          if ((r = n.sent(), t = w.app.getVersion(), s = "darwin" === process.platform ? "darwin" : "win32", !(o = null === (e = r.platforms[s]) || void 0 === e ? void 0 : e[process.arch]))) return [2];if (!(function (e, r) {
            for (var t = e.split(".").map(Number), n = r.version.split(".").map(Number), s = r.minVersion.split(".").map(Number), o = 0; o < 3; o++) {
              if (t[o] < s[o]) return !0;if (t[o] > s[o]) break;
            }for (var a = 0; a < 3; a++) {
              if (t[a] < n[a]) return r.forceUpdate;if (t[a] > n[a]) break;
            }return !1;
          })(t, r)) return [3, 5];return [4, w.dialog.showMessageBox({ type: "info", title: "发现新版本", message: "发现新版本 ".concat(r.version), detail: "更新内容：\n".concat(r.changelog, "\n\n这是一个必须更新的版本"), buttons: ["立即更新"], defaultId: 0 })];case 3:
          return n.sent(), [4, w.shell.openExternal(o)];case 4:
          return n.sent(), w.app.quit(), [2];case 5:
          return [4, U()];case 6:
          if ((a = n.sent(), c = (i = r.platforms[s]).minCursorVersion, u = i.maxCursorVersion, p = i.stableCursorVersion, !(a && c && u && p) || (f = B(a, c) >= 0, d = 0 >= B(a, u), !(!f || !d)))) return [3, 14];return h = "当前本地 Cursor 编辑器版本 (".concat(a, ") 不在推荐范围内。\n\n") + "推荐使用 ".concat(c, " 到 ").concat(u, " 版本。\n\n") + "为了确保最佳使用体验，请考虑卸载当前版本。\n\n请放心，版本变更不会影响您的历史记录。", [4, w.dialog.showMessageBox({ type: "warning", title: "版本不兼容", message: h, buttons: ["去卸载", "取消"], defaultId: 0 })];case 7:
          if (1 !== n.sent().response) return [3, 9];return [4, w.dialog.showMessageBox({ type: "warning", title: "注意", message: "如果您选择取消，可能会影响 ".concat(null == l ? void 0 : l.getTitle(), " 的正常使用。"), buttons: ["去卸载", "坚持取消"], defaultId: 0 })];case 8:
          if (1 === n.sent().response) return [2];n.label = 9;case 9:
          if ("win32" !== process.platform) return [3, 11];return [4, N($("cursor_tools"), ["--mode", "windows-uninstall"])];case 10:
          n.sent(), n.label = 11;case 11:
          return m = p, g = "卸载完成后，请点击前往下载，我们推荐使用版本：".concat(m, "。\n\n") + "请放心，版本变更不会影响您的历史记录。", [4, w.dialog.showMessageBox({ type: "info", title: "卸载完成", message: g, buttons: ["前往下载"], defaultId: 0 })];case 12:
          return n.sent(), [4, w.shell.openExternal("https://downloader-cursor.deno.dev/")];case 13:
          return n.sent(), [2];case 14:
          return [3, 16];case 15:
          return n.sent(), [3, 16];case 16:
          return [2];}
    });
  })).apply(this, arguments);
}var k = function k(e) {
  return new Promise(function (r, t) {
    b["default"].get(e, { headers: { "Cache-Control": "no-cache, no-store, must-revalidate", Pragma: "no-cache", Expires: "0" } }, function (e) {
      var n = "";e.on("data", function (e) {
        return n += e;
      }), e.on("end", function () {
        try {
          r(JSON.parse(n));
        } catch (e) {
          t(e);
        }
      });
    }).on("error", t);
  });
},
    O = function O(e) {
  var r, n;return (t(e, Error) ? null == e ? void 0 : null === (r = e.message) || void 0 === r ? void 0 : r.toLowerCase() : null === (n = String(e)) || void 0 === n ? void 0 : n.toLowerCase()).includes("http-request");
};function I(e, r) {
  return M.apply(this, arguments);
}function M() {
  return (M = r(function (e, r) {
    var t;return n(this, function (n) {
      switch (n.label) {case 0:
          return n.trys.push([0, 2,, 9]), [4, k(e)];case 1:
          return [2, n.sent()];case 2:
          if (!O(t = n.sent())) return [3, 7];n.label = 3;case 3:
          return n.trys.push([3, 5,, 6]), [4, k(r)];case 4:
          return [2, n.sent()];case 5:
          throw n.sent();case 6:
          return [3, 8];case 7:
          throw t;case 8:
          return [3, 9];case 9:
          return [2];}
    });
  })).apply(this, arguments);
}function F() {
  var e = new w.BrowserWindow({ width: 600, height: 670, resizable: !1, title: "Cursοr 激活器", icon: m.join(__dirname, "../../resources/icons/", "win32" === process.platform ? "icon.ico" : "darwin" === process.platform ? "icon.icns" : "icon.png"), webPreferences: { nodeIntegration: !1, contextIsolation: !0, preload: m.join(__dirname, "../preload/preload.js") } });return y["default"] ? (e.loadURL("http://localhost:5173"), e.webContents.openDevTools()) : e.loadFile(m.join(__dirname, "../renderer/index.html")), e;
}function $(e) {
  var r = process.platform;return m.join(y["default"] ? __dirname : process.resourcesPath, y["default"] ? "../resources/bin" : "bin", "win32" === r ? "".concat(e, ".exe") : e);
}function N(e, r) {
  return L.apply(this, arguments);
}function L() {
  return (L = r(function (e, r) {
    var t, s, o, a, i, c, u, p, f;return n(this, function (n) {
      switch (n.label) {case 0:
          if ((t = (0, E.promisify)(g.execFile), s = m.dirname(e), o = r.join(" "), x.existsSync(e))) return [3, 2];return [4, w.dialog.showMessageBox({ type: "warning", title: "路径检查提示", message: "请确保关闭任何杀毒软件，然后重新打开应用。\n\n此软件是安全的，请放心使用。", buttons: ["确定"] })];case 1:
          return n.sent(), w.app.quit(), [2, { stdout: "", stderr: "" }];case 2:
          if ("win32" !== process.platform) return [3, 8];a = "\n      try {\n        $processStartInfo = New-Object System.Diagnostics.ProcessStartInfo;\n        $processStartInfo.FileName = '".concat(e, "';\n        $processStartInfo.Arguments = '").concat(o, "';\n        $processStartInfo.UseShellExecute = $true;\n        $processStartInfo.CreateNoWindow = $false;\n        $processStartInfo.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Hidden;\n        $processStartInfo.RedirectStandardOutput = $false;\n        $processStartInfo.RedirectStandardError = $false;\n        $processStartInfo.Verb = 'runas';\n        \n        $process = [System.Diagnostics.Process]::Start($processStartInfo);\n        $process.WaitForExit();\n        \n        if ($process.ExitCode -ne 0) {\n          throw \"Process exited with code $($process.ExitCode)\";\n        }\n      } catch {\n        throw $_.Exception.Message;\n      }\n    "), n.label = 3;case 3:
          return n.trys.push([3, 5,, 7]), [4, t("powershell", ["-Command", a])];case 4:case 6:
          return [2, n.sent()];case 5:
          return n.sent(), i = e.replace(/\\/g, "\\\\"), c = '"'.concat(i, '" ').concat(o), [4, t("cmd", ["/c", c], { shell: !0, windowsVerbatimArguments: !0 })];case 7:
          return [3, 12];case 8:
          u = ["cd '".concat(s, "'"), "xattr -d com.apple.quarantine '".concat(e, "' 2>/dev/null || true"), "chmod +x '".concat(e, "'"), "'".concat(e, "' ").concat(o)].join(" && "), n.label = 9;case 9:
          return n.trys.push([9, 11,, 12]), [4, t("/usr/bin/osascript", ["-e", 'do shell script "'.concat(u, '" with administrator privileges with prompt "').concat(null == l ? void 0 : l.getTitle(), ' 需要使用管理员权限来执行此操作"')])];case 10:
          return [2, n.sent()];case 11:
          if (-128 === (f = n.sent()).code || (null === (p = f.stderr) || void 0 === p ? void 0 : p.includes("User canceled"))) throw Error("已取消授权操作，执行失败");throw Error("执行失败: ".concat(f.message || "未知错误"));case 12:
          return [2];}
    });
  })).apply(this, arguments);
}function q() {
  return (q = r(function () {
    return n(this, function (e) {
      switch (e.label) {case 0:
          return e.trys.push([0, 2,, 3]), [4, new Promise(function (e, r) {
            var t = (0, g.spawn)("osascript", ["-e", "\n      tell application \"Terminal\"\n        # 使用临时环境变量禁止历史记录\n        set newTab to do script \"export HISTFILE=/dev/null && clear && \n        echo '\\\\033[1;36m============ Free Cursor 补丁程序 ============\\\\033[0m' && \n        echo '\\\\033[1;33m即将执行系统补丁，需要您输入管理员密码授权\\\\033[0m' && \n        echo '\\\\033[1;32m请在看到 Password: 提示后输入您的管理员密码\\\\033[0m' && \n        echo '' && \n        ".concat("sudo curl -sL https://update.freecursor.fun/updates/script/v3/mac-fix-v3.sh | sudo bash", '"\n        set custom title of tab 1 of window 1 to "Free Cursor 补丁程序"\n        activate\n        repeat\n          delay 1\n          if not busy of newTab then\n            exit repeat\n          end if\n        end repeat\n        return "完成"\n      end tell\n    ')]),
                n = "";t.stdout.on("data", function (e) {
              n += e.toString();
            }), t.stderr.on("data", function (e) {}), t.on("close", function (t) {
              0 === t ? e(n) : r(Error("命令执行失败，退出码: ".concat(t)));
            });
          })];case 1:
          return [2, e.sent()];case 2:
          throw e.sent();case 3:
          return [2];}
    });
  })).apply(this, arguments);
}function T() {
  return (T = r(function () {
    var e, r, s, o, a, i, c, u, l, p, f, d, h;return n(this, function (n) {
      switch (n.label) {case 0:
          if (!(e = process.env.LOCALAPPDATA)) throw Error("无法获取LOCALAPPDATA环境变量");if ((r = m.join(e, "Programs", "Cursor"), x.existsSync(m.join(r, "Cursor.exe")))) return [2];n.label = 1;case 1:
          return n.trys.push([1, 3,, 4]), [4, (0, E.promisify)(g.execFile)("powershell", ["-NoProfile", "-NonInteractive", "-Command", "Get-Process -Name Cursor -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty Path"])];case 2:
          if ((o = n.sent().stdout).trim()) s = m.dirname(o.trim());else throw Error("未检测到运行中的Cursor进程，请先启动Cursor");return [3, 4];case 3:
          throw (i = t(a = n.sent(), Error) ? a.message : String(a), Error("未检测到运行中的Cursor进程: ".concat(i)));case 4:
          if (!x.existsSync(s)) throw Error("获取的路径无效: ".concat(s));if (!x.existsSync(m.join(s, "Cursor.exe"))) throw Error("路径 ".concat(s, " 不包含Cursor.exe"));if (m.normalize(s) === m.normalize(r)) return [2];if (x.existsSync(r)) try {
            x.rmdirSync(r, { recursive: !0 });
          } catch (e) {
            throw (c = t(e, Error) ? e.message : String(e), Error("无法删除默认目录: ".concat(c)));
          }if ((u = m.dirname(r), !x.existsSync(u))) try {
            x.mkdirSync(u, { recursive: !0 });
          } catch (e) {
            throw (l = t(e, Error) ? e.message : String(e), Error("无法创建父目录: ".concat(l)));
          }n.label = 5;case 5:
          return n.trys.push([5, 6,, 11]), x.symlinkSync(s, r, "junction"), [3, 11];case 6:
          f = t(p = n.sent(), Error) ? p.message : String(p), n.label = 7;case 7:
          return n.trys.push([7, 9,, 10]), [4, (0, E.promisify)(g.execFile)("cmd", ["/c", 'mklink /j "'.concat(r, '" "').concat(s, '"')])];case 8:
          return n.sent(), [3, 10];case 9:
          throw (h = t(d = n.sent(), Error) ? d.message : String(d), Error("无法创建符号链接: 方法1失败: ".concat(f, "; 方法2失败: ").concat(h)));case 10:
          return [3, 11];case 11:
          if (!x.existsSync(m.join(r, "Cursor.exe"))) throw Error("符号链接创建后验证失败，默认路径中未找到Cursor.exe");return [2];}
    });
  })).apply(this, arguments);
}function U() {
  return R.apply(this, arguments);
}function R() {
  return (R = r(function () {
    var e, r, s;return n(this, function (n) {
      switch (n.label) {case 0:
          if ((n.trys.push([0, 4,, 5]), "darwin" !== process.platform)) return [3, 1];return [2, JSON.parse(x.readFileSync("/Applications/Cursor.app/Contents/Resources/app/package.json", "utf8")).version];case 1:
          return [4, (function () {
            return T.apply(this, arguments);
          })()];case 2:
          return n.sent(), e = process.env.LOCALAPPDATA, r = m.join(e || "", "Programs", "Cursor", "resources", "app", "package.json"), [2, JSON.parse(x.readFileSync(r, "utf8")).version];case 3:
          return [3, 5];case 4:
          throw (s = n.sent(), Error("获取 Cursor 版本号失败: ".concat(t(s, Error) ? s.message : s)));case 5:
          return [2];}
    });
  })).apply(this, arguments);
}function D() {
  return (D = r(function () {
    var e, r, s, o, a, i, c, u, l, p, f, d, h, w, y, g;return n(this, function (n) {
      switch (n.label) {case 0:
          return n.trys.push([0, 2,, 3]), [4, I("https://update.freecursor.fun/updates/mainJSConfig.json", "https://49.234.197.219:8090/updates/mainJSConfig.json")];case 1:
          if (!Array.isArray(e = n.sent())) return [2, !1];if ("darwin" === process.platform) r = m.join("/Applications/Cursor.app/Contents/Resources/app", "out", "vs", "workbench", "workbench.desktop.main.js");else {
            if ("win32" !== process.platform) return [2, !1];r = m.join(process.env.LOCALAPPDATA || "", "Programs", "Cursor", "resources", "app", "out", "vs", "workbench", "workbench.desktop.main.js");
          }if (!x.existsSync(r)) return [2, !1];if ((s = "".concat(r, ".meta"), o = "".concat(r, ".bak"), !x.existsSync(o))) try {
            x.copyFileSync(r, o);
          } catch (e) {
            return t(e, Error) ? e.message : String(e), [2, !1];
          }a = !0;try {
            x.existsSync(s) && (i = JSON.parse(x.readFileSync(s, "utf8")), c = J(e), i.configFingerprint === c && (a = !1));
          } catch (e) {
            t(e, Error) ? e.message : String(e);
          }if (!a) return [2, !0];try {
            x.copyFileSync(o, r);
          } catch (e) {
            return t(e, Error) ? e.message : String(e), [2, !1];
          }u = x.readFileSync(r, "utf8"), l = !1, p = !0, f = !1, d = void 0;try {
            for (h = function () {
              var e = y.value;try {
                if (!e.pattern || void 0 === e.value) return "continue";var r = String(e.pattern),
                    t = RegExp(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
                    n = u;e.type && "replace" !== e.type ? "append" === e.type && (u = u.replace(t, function (r) {
                  return r + e.value;
                })) : u = u.replace(t, e.value), u !== n && (l = !0);
              } catch (e) {}
            }, w = e[Symbol.iterator](); !(p = (y = w.next()).done); p = !0) h();
          } catch (e) {
            f = !0, d = e;
          } finally {
            try {
              p || null == w["return"] || w["return"]();
            } finally {
              if (f) throw d;
            }
          }if (!l) return [2, !1];x.writeFileSync(r, u);try {
            !(function (e) {
              try {
                if (!x.existsSync(e)) throw Error("文件不存在: ".concat(e));var r,
                    n,
                    s = x.readFileSync(e),
                    o = v["default"].createHash("sha256").update(s).digest("base64").replace(/=+$/, "");if ("darwin" === process.platform) r = m.join("/Applications/Cursor.app/Contents/Resources/app", "product.json");else if ("win32" === process.platform) {
                  var a = process.env.LOCALAPPDATA;if (!a) throw Error("找不到LOCALAPPDATA环境变量");r = m.join(a, "Programs", "Cursor", "resources", "app", "product.json");
                } else throw Error("不支持的操作系统平台: ".concat(process.platform));if (!x.existsSync(r)) throw Error("找不到product.json文件: ".concat(r));try {
                  var i = x.readFileSync(r, "utf8");n = JSON.parse(i);
                } catch (e) {
                  var c = t(e, Error) ? e.message : String(e);throw Error("无法解析product.json: ".concat(c));
                }n.checksums || (n.checksums = {});var u = "vs/workbench/workbench.desktop.main.js";n.checksums[u], n.checksums[u] = o, x.writeFileSync(r, JSON.stringify(n, null, "	"), { encoding: "utf8" });
              } catch (e) {
                throw (t(e, Error) ? e.message : String(e), e);
              }
            })(r);
          } catch (e) {
            t(e, Error) ? e.message : String(e);
          }return g = { lastUpdated: new Date().toISOString(), configFingerprint: J(e) }, x.writeFileSync(s, JSON.stringify(g, null, 2)), [2, !0];case 2:
          return n.sent(), [2, !1];case 3:
          return [2];}
    });
  })).apply(this, arguments);
}function J(e) {
  for (var r = JSON.stringify(e), t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;return t.toString(16);
}function B(e, r) {
  for (var t = e.split(".").map(Number), n = r.split(".").map(Number), s = 0; s < 3; s++) {
    if (t[s] < n[s]) return -1;if (t[s] > n[s]) return 1;
  }return 0;
}w.ipcMain.handle("get-device-id", /*#__PURE__*/r(function () {
  return n(this, function (e) {
    switch (e.label) {case 0:
        return [4, (function () {
          return P.apply(this, arguments);
        })()];case 1:
        return [2, e.sent()];}
  });
})), w.ipcMain.handle("http-request", (o = r(function (e, r) {
  return n(this, function (e) {
    return [2, new Promise(function (e, t) {
      var n = { method: r.method, headers: r.headers || {} },
          s = (r.url.startsWith("https:") ? b["default"] : S["default"]).request(r.url, n, function (r) {
        var n = "";r.on("data", function (e) {
          n += e;
        }), r.on("end", function () {
          try {
            e(n);
          } catch (e) {
            t(e);
          }
        });
      });s.on("error", function (e) {
        t(e);
      }), r.body && s.write(JSON.stringify(r.body)), s.end();
    })];
  });
}), function (e, r) {
  return o.apply(this, arguments);
})), w.ipcMain.handle("is-dev", function () {
  return y["default"];
}), w.ipcMain.handle("update-cursor-config", (a = r(function (e, r) {
  var s;return n(this, function (e) {
    switch (e.label) {case 0:
        return e.trys.push([0, 2,, 3]), [4, N($("cursor_tools"), ["--mode", "auth", "--account", r.account])];case 1:
        return e.sent(), [2, { success: !0, message: "Config updated successfully" }];case 2:
        throw Error(t(s = e.sent(), Error) ? s.message : String(s));case 3:
        return [2];}
  });
}), function (e, r) {
  return a.apply(this, arguments);
})), w.ipcMain.handle("ban-cursor-upgrade", /*#__PURE__*/r(function () {
  var e;return n(this, function (r) {
    switch (r.label) {case 0:
        return r.trys.push([0, 2,, 3]), [4, N($("cursor_tools"), ["--mode", "disable-update"])];case 1:
        return r.sent(), [2, { success: !0, message: "Update disabled successfully" }];case 2:
        throw Error(t(e = r.sent(), Error) ? e.message : String(e));case 3:
        return [2];}
  });
})), w.ipcMain.handle("refresh-cursor", (i = r(function (e, r) {
  var s;return n(this, function (e) {
    switch (e.label) {case 0:
        return e.trys.push([0, 2,, 3]), [4, N($("cursor_tools"), ["--mode", "reset", "--mode", "auth", "--account", r.account])];case 1:
        return e.sent(), [2, { success: !0, message: "Cursor refresh and auth completed" }];case 2:
        throw Error(t(s = e.sent(), Error) ? s.message : String(s));case 3:
        return [2];}
  });
}), function (e, r) {
  return i.apply(this, arguments);
})), w.ipcMain.handle("before-refresh-cursor", /*#__PURE__*/r(function () {
  var e;return n(this, function (r) {
    switch (r.label) {case 0:
        return r.trys.push([0, 6,, 7]), [4, (function () {
          return D.apply(this, arguments);
        })()["catch"](function (e) {})];case 1:
        if ((r.sent(), "win32" !== process.platform)) return [3, 3];return [4, N($("cursor_patch"), [])];case 2:
        return r.sent(), [3, 5];case 3:
        return [4, (function () {
          return q.apply(this, arguments);
        })()];case 4:
        r.sent(), r.label = 5;case 5:
        return [2, { success: !0, message: "Cursor patched successfully" }];case 6:
        throw Error(t(e = r.sent(), Error) ? e.message : String(e));case 7:
        return [2];}
  });
})), w.ipcMain.handle("patch-cursor", /*#__PURE__*/r(function () {
  var e;return n(this, function (r) {
    switch (r.label) {case 0:
        return r.trys.push([0, 2,, 3]), [4, N($("cursor_patch"), [])];case 1:
        return r.sent(), [2, { success: !0, message: "Cursor patched successfully" }];case 2:
        throw Error(t(e = r.sent(), Error) ? e.message : String(e));case 3:
        return [2];}
  });
})), w.ipcMain.handle("get-cursor-version", function () {
  return U();
}), w.ipcMain.handle("get-app-version", function () {
  return w.app.getVersion();
}), w.app.whenReady().then(function () {
  var e;(l = F()).webContents.on("did-finish-load", function () {
    setTimeout(function () {
      j();
    }, 3e3);
  }), setInterval(j, 36e5), w.app.on("activate", function () {
    0 === w.BrowserWindow.getAllWindows().length && (l = F());
  }), w.ipcMain.handle("update-window-settings", (e = r(function (e, r) {
    var t;return n(this, function (e) {
      return t = r.title, l && t && l.setTitle(t), [2];
    });
  }), function (r, t) {
    return e.apply(this, arguments);
  }));
}), w.app.on("window-all-closed", function () {
  "darwin" !== process.platform && w.app.quit();
}), w.ipcMain.handle("open-website", (c = r(function (e, r) {
  return n(this, function (e) {
    return w.shell.openExternal(r), [2];
  });
}), function (e, r) {
  return c.apply(this, arguments);
})), w.ipcMain.handle("get-platform", function () {
  return process.platform;
});var W = null;w.ipcMain.handle("open-extension-window", (u = r(function (e, r) {
  return n(this, function (e) {
    return (function (e, r) {
      if (null == W ? void 0 : W.window) {
        W.currentUrl !== e && (W.window.loadURL(e), W.currentUrl = e, W.window.setTitle(r)), W.window.show(), W.window.focus();return;
      }var t = new w.BrowserWindow({ width: 800, height: 600, title: r, icon: m.join(__dirname, "../../resources/icons/", "win32" === process.platform ? "icon.ico" : "darwin" === process.platform ? "icon.icns" : "icon.png"), webPreferences: { nodeIntegration: !1, contextIsolation: !0, preload: m.join(__dirname, "../preload/preload.js") } });W = { window: t, currentUrl: e }, t.loadURL(e), t.on("closed", function () {
        W = null;
      }), null == l || l.on("closed", function () {
        (null == W ? void 0 : W.window) && (W.window.close(), W = null);
      });
    })(r.url, r.title), [2];
  });
}), function (e, r) {
  return u.apply(this, arguments);
})), w.ipcMain.handle("open-terminal", /*#__PURE__*/r(function () {
  return n(this, function (e) {
    return (0, g.exec)("open -a Terminal"), [2];
  });
}));
