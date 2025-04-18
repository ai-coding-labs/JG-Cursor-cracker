# 极光Cursor激活工具破解尝试

## 一、缘起

Cursor的续杯需要很多邮箱不断地注册，自己维护邮箱又有点麻烦，朋友从淘宝上买了个无线续杯的工具，好处是商家做了个客户端，把切换邮箱账号的逻辑都封装在里面了不用自己操心了，商家的售后也很好，综合来看还是很划算的，他把买的激活码分享给了我，我也先试用一下，然后试用的时候就发现一个小小的问题，就是这个工具是用激活码的方式激活的，但是激活码是跟机器绑定的：

![image-20250419032830941](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419032830941.png)

像上面一样，激活码是跟机器码绑定的，如果激活码跟已经绑定的机器码对不上的话，则无法使用，刷新请求的时候就会报错提示机器码不对之类的，然后我就抓耳挠腮，寻思着既然这是一个客户端，那我应该是可以手动修改它计算出来的机器码，只要我把机器码修改为跟我朋友的机器码是一致的，那么我应该也能使用他的激活码了。

## 二、解包逆向

这个客户端看起来就是一股浓浓的Electron风格，我是Mac系统，所以接下来就是介绍Mac下如何逆向Electron程序。

客户端从这里下载：https://bwcxynefwek.feishu.cn/docx/XgtZdePyEoarjXxp9eLciNZFnkd

项目根目录下的data文件夹下，有逆向出来的全部的客户端的代码，也可以去查阅那里了解。

在Mac下，在可执行文件的图标上右键，选择“显示包内容”：

![image-20250419033559093](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419033559093.png)

会打开这个Electron文件的包的目录：

![image-20250419033810077](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419033810077.png)

然后打开一个Terminal，把上面这个Contents文件夹拖动到Terminal，就能看到这个文件夹的绝对路径，然后进入这个目录：

```bash
(base) ➜  Contents cd /Users/cc11001100/Downloads/JG-Cursor-1.4.0-mac.app/Contents 
(base) ➜  Contents pwd
/Users/cc11001100/Downloads/JG-Cursor-1.4.0-mac.app/Contents
(base) ➜  Contents 
```

看下这个目录下都有哪些文件：

```bash
(base) ➜  Contents ls -l 
total 16
drwxr-xr-x@ 10 cc11001100  staff   320  3 10 22:41 Frameworks
-rw-r--r--@  1 cc11001100  staff  2947  3 10 22:41 Info.plist
drwxr-xr-x@  3 cc11001100  staff    96  3 10 22:41 MacOS
-rw-r--r--@  1 cc11001100  staff     8  3 10 22:41 PkgInfo
drwxr-xr-x@ 86 cc11001100  staff  2752  4 19 01:09 Resources
```

这个`Resources`就是存放Electron的应用自己的代码逻辑的地方，其它的几个都是框架本身的代码，在这个例子中用不到我们先忽略，进入`Resources`，看下都有哪些文件：

```bash
(base) ➜  Contents cd Resources
(base) ➜  Resources ls -l 
total 162960
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 af.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 am.lproj
-rw-r--r--@ 1 cc11001100  staff  3203416  4 19 01:09 app.asar
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ar.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 bg.lproj
drwxr-xr-x@ 4 cc11001100  staff      128  3 10 22:41 bin
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 bn.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ca.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 cs.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 da.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 de.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 el.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 en.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 en_GB.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 es.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 es_419.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 et.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 fa.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 fi.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 fil.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 fr.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 gu.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 he.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 hi.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 hr.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 hu.lproj
-rw-r--r--@ 1 cc11001100  staff    45448  3 10 22:41 icon.icns
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 id.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 it.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ja.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 kn.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ko.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 lt.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 lv.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ml.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 mr.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ms.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 nb.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 nl.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 pl.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 pt_BR.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 pt_PT.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ro.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ru.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 sk.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 sl.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 sr.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 sv.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 sw.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ta.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 te.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 th.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 tr.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 uk.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 ur.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 vi.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 zh_CN.lproj
drwxr-xr-x@ 2 cc11001100  staff       64  3 10 22:41 zh_TW.lproj
```

下面有很多文件，我们需要关注的就是`app.asar`，这个文件可以理解为是一个压缩包，它里面就是Electron应用自己的逻辑的打包，只不过它压缩的时候是使用了自定义的压缩格式，所以需要先安装它的打包工具来解压：

```bash
npm install -g asar
```

如果已经安装了`cnpm`的话可以使用`cnpm`来安装：

```bash
npm install -g asar
```

安装完之后验证一下是否安装成功：

```bash
(base) ➜  Resources asar --version
v3.3.1
```

关于asar的打包格式不在此处赘述，可以类比理解为zip类似的格式，这里只需要理解asar命令可以解包、重打包就可以了，我们使用asar来对app.asar文件进行解包：

```bash
asar extract app.asar app-extract
```

现在进入app-extract目录，查看解包出来的文件都有哪些：

```bash
(base) ➜  app-extract ls -l 
total 8
drwxr-xr-x   5 cc11001100  staff  160  4 19 03:49 dist
drwxr-xr-x  26 cc11001100  staff  832  4 19 03:49 node_modules
-rw-r--r--   1 cc11001100  staff  388  4 19 03:49 package.json
```

上面这个文件的布局看起来就很熟悉了，这看上去就是一个前端项目的布局，`package.json`是项目的一些原信息和依赖声明之类的，我们看一下内容：

```json
{
  "name": "free-cursor",
  "version": "1.4.0",
  "description": "A helper tool for Cursor",
  "author": "Dreamease",
  "main": "dist/main/main.js",
  "dependencies": {
    "electron-is-dev": "^2.0.0",
    "electron-store": "8.1.0",
    "uuid": "^9.0.1"
  },
  "config": {
    "electron_mirror": "https://npmmirror.com/mirrors/electron/",
    "electron_custom_dir": "{{ version }}"
  }
}
```

`node_modules`文件夹下就是具体的依赖，因为这是一个黑洞，所以我们不再展示其内容。

![image-20250419035316110](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419035316110.png)

而dist目录看上去就让人有一种亲切的感觉，因为这个目录下就是Electron的应用代码打包后的样子，让我们进入查看一下：

```bash
(base) ➜  app-extract cd dist 
(base) ➜  dist ls -l 
total 0
drwxr-xr-x  3 cc11001100  staff   96  4 19 03:49 main
drwxr-xr-x  3 cc11001100  staff   96  4 19 03:49 preload
drwxr-xr-x  4 cc11001100  staff  128  4 19 03:49 renderer
```

进入到dist目录下，这就是一个典型的Electron应用的文件布局了：

- renderer目录下是前端界面的一些文件
- preload是桥接前后端的
- main是后端逻辑

我们要修改的是机器码，机器码肯定是后端采集生成，传递给前端展示的，所以我们重点关注main文件下的逻辑，进入这个文件夹：

```bash
(base) ➜  dist cd main 
(base) ➜  main ls -l 
total 32
-rw-r--r--  1 cc11001100  staff  15345  4 19 03:49 main.js
```

很简单就一个单独的js，注意这个js的大小：

```bash
(base) ➜  main ls -lh main.js 
-rw-r--r--  1 cc11001100  staff    15K  4 19 03:49 main.js
```

这一个文件就有15KB大，里面有一堆逻辑，现在科技水平好了，不用再茹毛饮血了，我直接借助Cursor对这个大文件里的逻辑格式化并且加注释，找到了跟生成设备码相关的函数：

```js
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
```

被AI惯坏了，已经没有耐心读代码了，直接让Deepseek总结了一下：

### **设备码生成规则**

1. **优先读取缓存**：如果已存在 `deviceId`，直接返回。
2. **生成方式**：
   - **主方案（MAC地址）**：
     - 通过系统命令获取MAC地址（Windows: `getmac`，macOS: `ifconfig`，Linux: `ip link`）。
     - 拼接固定盐值（`"your-secret-salt"`），用SHA256哈希 + Base64编码 + 字符替换（`+→-` `/→_` 去掉`=`），截取前16位。
   - **备用方案（UUID）**：若获取MAC失败，生成随机UUID并截取前16位。
3. **存储结果**：生成的 `deviceId` 会缓存，避免重复生成。

**特点**：跨平台、硬件绑定优先、唯一性保障。

噢，所以我们只需要把判断是否已存在deviceId的地方给修改掉，让它一直为true，然后返回我们给定的机器码就可以了，为了尽量不影响到其它的代码逻辑，所以我们也不格式化，就使用deviceId作为关键字，把它附近的代码逻辑都给修改替换，这需要提前根据格式化好的代码提前规划好。否则就很容易出错：

![image-20250419041646717](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419041646717.png)

替换完之后，我们需要把修改后的代码重新打包，替换掉原来的app.asar文件才能生效，我们先把原来的app.asar文件备份，以防出现问题的时候无法恢复：

```bash
cp app.asar app.asar.bak
```

然后把app.asar文件删除：

```bash
rm app.asar
```

然后使用我们刚才修改过的目录，重新打包出来一个app.asar文件：

```bash
asar pack app-extract app.asar
```

然后重新启动这个Cursor续杯的客户端，发现机器码已经被识别为了我们刚才设置的：

![image-20250419042202018](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419042202018.png)

至此实现了购买一个激活码，能够在多台机器上使用，只需要解包把机器码修改为最初绑定的那个机器码就可以了，于是接下来的几周我就愉快的白嫖我朋友买的那个激活码，直到Cursor开始加强风控。

## 三、柳暗花明又一村

可能是薅羊毛薅得太厉害了，Cursor官网开始加强风控，突然有一天，无限续杯没续上，然后我加入了商家的客服群，在客服群很多人截图反馈问题，有些人反馈问题的时候截图里带上了自己的激活码和机器码：

![image-20250419042657749](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419042657749.png)

emm。。。？

![image-20250419042735101](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419042735101.png)

可能有这句话的原因吧，后续很多人反馈问题的时候就一点也不打码放心的往群里发了。

虽然我这个时候已经购买了新的激活码，这些激活码对我意义不大，但是作为有收集癖的宅男，看到有用的东西怎么能忍得住不去收集一下呢，然后我就像收菜一样，收了一堆机器码和激活码，不过验证之后有一些是废弃的：

- 估计有些人是反馈完问题直接退费了，所以激活码就被废弃了
- 有些激活码里有iL1之类的字符，OCR识别很难区分，我组合穷举了几次就放弃了，实在试不出来到底是1还是l

我的朋友分享给了我一个激活码，投桃报李，我回馈回了一堆激活码，借花献佛哈哈哈：

![image-20250419043101816](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419043101816.png)

当然这些我们并没有真的使用，只是拿来收藏一下，期间因为我验证的时候频繁的涉及到Electron的解包和替换，所以为了解放双手自动化，我还专门写了个工具来辅助我替换机器码：

```text
https://github.com/cursor-home/JG-Cursor-cracker
```

![image-20250419043545766](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419043545766.png)

修改Cursor激活器的机器码：

![image-20250419043653276](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419043653276.png)

通过这个工具作为辅助，验证登录了几个机器码+激活码的组合：

![image-20250419011143493](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419011143493.png)

还有的是买的这种按额度付费的，看来这个商家的生意还挺大，啥样的SKU都有：

![image-20250419010243765](./%E6%9E%81%E5%85%89Cursor%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7%E7%A0%B4%E8%A7%A3%E5%B0%9D%E8%AF%95.assets/image-20250419010243765.png)

## 四、happy end

经过了一段时间的白嫖使用，我感觉Cursor很好用，来回切换账号也很麻烦，于是决定付费了。

## 五、bad end

然后付费Cursor使用一段时间之后，发现这个产品有个很神奇的商业逻辑。

就是它的运行是需要依赖大模型算力的，而算力有限的情况下，它对用户的请求做了一些优先级去响应，不同的用户的请求具有不同的响应优先级。

就是它的资源限制大概是：

```
付费用户fast request > 白嫖用户 >= 付费用户slow request > 付费用户slow request到达某个阈值
```

也就是说，如果你是付费用户，当你使用一段时间后，你的使用体验将非常糟糕，远远不如白嫖的方式资源分配优先级更高，第一次遇到把付费用户当日本人整的，我已经决定继续白嫖了。。。



































































