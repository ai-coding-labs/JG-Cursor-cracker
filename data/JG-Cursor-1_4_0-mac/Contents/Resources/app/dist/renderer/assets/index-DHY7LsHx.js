import {
    a as t,
    b as o,
    B as n,
    C as a,
    c as s,
    d as c,
    D as d,
    e as l,
    f as u,
    g as h,
    h as _,
    i as y,
    M as f,
    r as e,
    R as i,
    s as r,
    S as m,
    T as p
} from "./antd-Dagto8wq.js";
import {a as w, b as x, c as v, d as k, R as g} from "./icons-BvoZdVrc.js";

(() => {
    // 获取link元素的relList属性，用于检测浏览器是否支持modulepreload
    const e = document.createElement("link").relList;
    // 检查浏览器是否支持modulepreload特性
    if (!(e && e.supports && e.supports("modulepreload"))) {
        // 如果不支持modulepreload，则手动处理所有已存在的modulepreload链接
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        // 创建一个MutationObserver来监视DOM变化
        new MutationObserver((e => {
            // 遍历所有变化记录
            for (const r of e) 
                // 检查变化类型是否为childList（子节点变化）
                if ("childList" === r.type) 
                    // 遍历所有新增的节点
                    for (const e of r.addedNodes) 
                        // 如果新增节点是LINK标签且rel属性为modulepreload，则处理该节点
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {childList: !0, subtree: !0}) // 监视整个文档的子节点变化，包括子树
    }

    // 处理modulepreload链接的函数
    function t(e) {
        // 如果链接已经被处理过（标记为ep=true），则直接返回
        if (e.ep) return;
        // 标记该链接已被处理
        e.ep = !0;
        // 创建fetch请求的选项对象
        const t = (e => {
            const t = {};
            // 如果链接有integrity属性，则添加到选项中
            return e.integrity && (t.integrity = e.integrity), 
                // 如果链接有referrerPolicy属性，则添加到选项中
                e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), 
                // 根据crossOrigin属性设置credentials选项
                "use-credentials" === e.crossOrigin ? t.credentials = "include" : 
                "anonymous" === e.crossOrigin ? t.credentials = "omit" : 
                t.credentials = "same-origin", 
                t
        })(e);
        // 使用fetch预加载模块
        fetch(e.href, t)
    }
})();

var S = {exports: {}}, j = {}, E = e, C = Symbol.for("react.element"), b = Symbol.for("react.fragment"),
    I = Object.prototype.hasOwnProperty, P = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    R = {key: !0, ref: !0, __self: !0, __source: !0};


function A(e, t, r) {
    var a, o = {}, s = null, n = null;
    for (a in void 0 !== r && (s = "" + r), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (n = t.ref), t) I.call(t, a) && !R.hasOwnProperty(a) && (o[a] = t[a]);
    if (e && e.defaultProps) for (a in t = e.defaultProps) void 0 === o[a] && (o[a] = t[a]);
    return {$$typeof: C, type: e, key: s, ref: n, props: o, _owner: P.current}
}


j.Fragment = b, j.jsx = A, j.jsxs = A, S.exports = j;
var O = S.exports, L = {}, q = t;
L.createRoot = q.createRoot, L.hydrateRoot = q.hydrateRoot;
const N = {
        async getId() {
            try {
                return await window.electronAPI.getDeviceId()
            } catch (e) {
                throw e instanceof Error ? e : "string" == typeof e ? new Error(e) : new Error((null == e ? void 0 : e.message) || "获取设备 ID 失败")
            }
        }
    }, T = {
        async updateConfig(e) {
            try {
                await window.electronAPI.updateCursorConfig(e)
            } catch (t) {
                throw t instanceof Error ? t : "string" == typeof t ? new Error(t) : new Error((null == t ? void 0 : t.message) || "更新 Cursor 配置失败")
            }
        }, async refresh(e) {
            try {
                await window.electronAPI.refreshCursor(e)
            } catch (t) {
                throw t instanceof Error ? t : "string" == typeof t ? new Error(t) : new Error((null == t ? void 0 : t.message) || "刷新 Cursor 授权失败")
            }
        }, async banUpgrade() {
            try {
                await window.electronAPI.banCursorUpgrade()
            } catch (e) {
                throw e instanceof Error ? e : "string" == typeof e ? new Error(e) : new Error((null == e ? void 0 : e.message) || "禁用 Cursor 更新失败")
            }
        }, async patch() {
            try {
                await window.electronAPI.patchCursor()
            } catch (e) {
                throw e instanceof Error ? e : "string" == typeof e ? new Error(e) : new Error((null == e ? void 0 : e.message) || "补丁失败")
            }
        }
    }, D = {
        getCursorVersion: async () => await window.electronAPI.getCursorVersion(),
        getAppVersion: async () => await window.electronAPI.getAppVersion()
    }, V = {
        getPlatform: async () => await window.electronAPI.getPlatform(), async updateWindowSettings(e) {
            await window.electronAPI.updateWindowSettings(e)
        }, async openExtensionWindow(e, t) {
            await window.electronAPI.openExtensionWindow(e, t)
        }
    }, Q = {apiPrefix: "https://refresh.freecursor.fun", backupApiPrefix: "http://110.42.232.79:8080", DEBUG_ERROR: !1},
    W = {apiPrefix: "https://refresh.freecursor.fun", backupApiPrefix: "http://110.42.232.79:8080", DEBUG_ERROR: !1},
    B = Q, U = async e => {
        const t = await (async () => await window.electronAPI.isDev() ? Q : W)();
        let r;
        try {
            const r = e.url.startsWith("http") ? e.url : `${t.apiPrefix}${e.url}`;
            return await $(r, e)
        } catch (a) {
            if (r = a, !J(a)) throw r;
            try {
                const r = e.url.startsWith("http") ? G(e.url, t.backupApiPrefix) : `${t.backupApiPrefix}${e.url}`;
                return await $(r, e)
            } catch (o) {
                throw o
            }
        }
    }, G = (e, t) => {
        try {
            const r = new URL(e);
            if (t.startsWith("http")) {
                const a = new URL(t);
                return e.replace(r.origin, a.origin)
            }
            return e.replace(r.origin, `${r.protocol}//${t}`)
        } catch (r) {
            return e
        }
    }, $ = async (e, t) => {
        const r = await window.electronAPI.httpRequest({
            url: e,
            method: t.method,
            headers: {"Content-Type": "application/json", ...t.headers || {}},
            body: t.body
        }), a = JSON.parse(r);
        if (!e.includes("www.cursor.com") && 0 !== a.code) throw new Error(a.msg || "请求失败");
        return a
    }, J = e => {
        var t, r;
        return (e instanceof Error ? null == (t = null == e ? void 0 : e.message) ? void 0 : t.toLowerCase() : null == (r = String(e)) ? void 0 : r.toLowerCase()).includes("http-request")
    }, M = e => e.startsWith("JGDL") ? "/quota/api/activate-refresh" : "/api/account/activate-refresh", z = {
        activate: (e, t, r, a, o, s) => U({
            url: M(e),
            method: "POST",
            body: {key_code: e, device_id: t, platform: r, cursor_version: a, jg_version: o, used_mail: s}
        }),
        refresh: (e, t, r, a, o, s, n) => U({
            url: M(e),
            method: "POST",
            body: {key_code: e, device_id: t, used_mail: r, platform: a, cursor_version: o, jg_version: s, error_id: n}
        }),
        async getQuota(e, t) {
            const r = await U({url: "/quota/api/key-usage", method: "POST", body: {quota_key: e, device_id: t}}), {
                info: a,
                quota_key_max_quota: o,
                quota_key_used_quota: s,
                activated_at: n,
                expired_at: i
            } = r.data, c = atob(a), l = await U({
                url: "https://www.cursor.com/api/usage",
                method: "GET",
                headers: {
                    Cookie: c,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
                }
            });
            let d = 0;
            for (const u in l) l[u] && l[u].numRequestsTotal && (d += l[u].numRequestsTotal);
            return {
                totalQuota: o,
                usedQuota: (s || 0) + d,
                remainingQuota: o - ((s || 0) + d),
                activatedAt: new Date(n).toLocaleString(),
                expiresAt: new Date(i).toLocaleString()
            }
        }
    }, F = {upload: e => U({url: "/api/client_err_logs/upload", method: "POST", body: e})},
    K = {getLatest: () => U({url: "https://update.freecursor.fun/updates/notice.json", method: "GET"})},
    H = {getReasons: () => U({url: "/api/client_err_logs/account_err_list", method: "GET"})},
    Y = "cursor_helper_activation_code", X = "cursor_helper_member_info", Z = "cursor_helper_app_info";


function ee() {
    const [t, y] = e.useState(""), [S, j] = e.useState((() => localStorage.getItem(Y) || "")), [E, C] = e.useState((() => localStorage.getItem(Y) || "")), [b, I] = e.useState((() => {
        const e = localStorage.getItem(X);
        if (e) try {
            return JSON.parse(e)
        } catch (t) {
        }
        return {
            status: "inactive",
            account: null,
            activatedAt: null,
            expiresAt: null,
            totalQuota: 0,
            usedQuota: 0,
            remainingQuota: 0
        }
    })), [P, R] = e.useState((() => {
        const e = localStorage.getItem(Z);
        if (e) try {
            const t = JSON.parse(e);
            return V.updateWindowSettings({title: t.appName}), t
        } catch (t) {
        }
        return {appName: "Cursor 激活器", appIcon: "", appLinks: []}
    })), [A, L] = e.useState({
        appVersion: "",
        cursorVersion: ""
    }), [q, Q] = e.useState((() => localStorage.getItem("last_notification_hash") || "")), [W, U] = e.useState([]), [G, $] = e.useState(""), [J, M] = e.useState(!1), [ee, te] = e.useState(!1);
    e.useEffect((() => {
        b.account && localStorage.setItem(X, JSON.stringify(b))
    }), [b]), e.useEffect((() => {
        P.appName && localStorage.setItem(Z, JSON.stringify(P))
    }), [P]), e.useEffect((() => {
        V.getPlatform().then($)
    }), []);
    const re = e.useMemo((() => E.startsWith("JGDL")), [E]),
        ae = e.useMemo((() => b.remainingQuota && b.remainingQuota < 0), [b.remainingQuota]);
    e.useEffect((() => {
        S && t && W.length && (async () => {
            for (const r of W) try {
                await F.upload(await r(t, S))
            } catch (e) {
            }
            U([])
        })()
    }), [S, t, W]), e.useEffect((() => {
        (async () => {
            try {
                const e = await D.getAppVersion(), a = await D.getCursorVersion().catch((async a => {
                    r.error(B.DEBUG_ERROR ? a instanceof Error ? a.message : String(a) : "获取 Cursor 版本号失败"), (async e => {
                        if (S && t) try {
                            await F.upload(await e(t, S))
                        } catch (a) {
                        } else U((t => [...t, e]))
                    })((async (t, r) => ({
                        device_id: t,
                        key_code: r,
                        data: {
                            error_type: "get_cursor_version_failed",
                            error_message: a instanceof Error ? a.message : String(a),
                            error_stack: a instanceof Error ? a.stack : "",
                            cursor_version: "-",
                            app_version: e,
                            platform: G,
                            timestamp: (new Date).toLocaleString()
                        }
                    })))
                }));
                L({appVersion: e || "-", cursorVersion: a || "-"})
            } catch (e) {
                r.error(e instanceof Error ? e.message : "获取版本信息失败，请重试"), L({
                    appVersion: "-",
                    cursorVersion: "-"
                })
            }
        })()
    }), []), e.useEffect((() => {
        N.getId().then(y).catch((e => {
            r.error(e instanceof Error ? e.message : "获取设备信息失败，请重试")
        }))
    }), []);
    const oe = async () => {
        try {
            const t = (await K.getLatest()).data;
            if ((null == t ? void 0 : t.title) && (null == t ? void 0 : t.content)) {
                const r = (e => {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t |= 0;
                    return Math.abs(t).toString(16)
                })(`${(e = t).title}:${e.content}`);
                r !== q && (localStorage.setItem("last_notification_hash", r), Q(r), l.info({
                    message: t.title,
                    description: O.jsx("div", {style: {whiteSpace: "pre-wrap"}, children: t.content}),
                    duration: null,
                    placement: "topRight"
                }))
            }
        } catch (r) {
            F.upload({
                device_id: t,
                key_code: S,
                data: {
                    error_type: "fetch_notification_failed",
                    error_message: r instanceof Error ? r.message : String(r),
                    error_stack: r instanceof Error ? r.stack : "",
                    cursor_version: A.cursorVersion,
                    app_version: A.appVersion,
                    platform: G,
                    timestamp: (new Date).toLocaleString()
                }
            })
        }
        var e
    };
    e.useEffect((() => {
        oe();
        const e = setInterval(oe, 9e5);
        return () => clearInterval(e)
    }), [q]);
    return O.jsx(a, {
        className: "main-card", children: O.jsxs(o, {
            direction: "vertical",
            size: "large",
            style: {width: "100%"},
            children: [O.jsxs("div", {
                children: [O.jsx("div", {
                    className: "section-title",
                    children: "设备记录号"
                }), O.jsxs(o.Compact, {
                    style: {width: "100%"},
                    children: [O.jsx(s, {
                        value: t,
                        readOnly: !0,
                        style: {backgroundColor: "#f5f5f5"}
                    }), O.jsx(n, {
                        icon: O.jsx(i, {}), async onClick() {
                            try {
                                await navigator.clipboard.writeText(t), r.success("设备记录号已复制到剪贴板")
                            } catch (e) {
                                r.error("复制失败，请手动复制")
                            }
                        }, children: "复制"
                    })]
                })]
            }), O.jsxs("div", {
                children: [O.jsx("div", {className: "section-title", children: "会员信息"}), O.jsxs(d, {
                    bordered: !0,
                    size: "small",
                    children: [O.jsxs(d.Item, {
                        label: "版本信息",
                        span: 3,
                        children: [P.appName, " ", `${A.appVersion} / Cursor ${A.cursorVersion}`]
                    }), O.jsx(d.Item, {
                        label: "状态", span: 3, children: (e => {
                            const t = {
                                active: {color: "success", text: "已激活"},
                                inactive: {color: "default", text: "未激活"},
                                expired: {color: "error", text: "已过期"}
                            }[e];
                            return O.jsx(_, {color: t.color, children: t.text})
                        })(b.status)
                    }), O.jsx(d.Item, {
                        label: "会员账号",
                        span: 3,
                        children: b.account || "-"
                    }), O.jsxs(d.Item, {
                        label: "授权有效期",
                        span: 3,
                        children: [b.activatedAt || "-", " - ", b.expiresAt || "-"]
                    }), re ? O.jsx(d.Item, {
                        label: "额度详情",
                        span: 3,
                        children: O.jsxs(o, {
                            children: [O.jsxs("span", {children: ["总额度: ", b.totalQuota || 0]}), O.jsx(u, {type: "vertical"}), O.jsxs("span", {children: ["已用: ", b.usedQuota || 0]}), O.jsx(u, {type: "vertical"}), O.jsxs("span", {
                                children: [ae ? "赠送" : "剩余", ": ", ae ? O.jsxs("span", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center"
                                    },
                                    children: [O.jsx("span", {children: Math.abs(b.remainingQuota || 0)}), O.jsx(v, {
                                        style: {
                                            color: "#FFD700",
                                            marginLeft: 4
                                        }
                                    })]
                                }) : b.remainingQuota || 0]
                            }), O.jsx(u, {type: "vertical"}), O.jsx(p, {
                                title: "刷新额度",
                                children: O.jsx(n, {
                                    type: "link",
                                    className: "quota-refresh-btn",
                                    icon: O.jsx(k, {spin: ee}),
                                    async onClick() {
                                        if (!ee) {
                                            te(!0);
                                            try {
                                                const e = await z.getQuota(S, t);
                                                I((t => ({...t, ...e}))), r.success("额度信息已更新")
                                            } catch (e) {
                                                r.error("刷新额度信息失败")
                                            } finally {
                                                te(!1)
                                            }
                                        }
                                    },
                                    size: "small"
                                })
                            })]
                        })
                    }) : null]
                })]
            }), O.jsxs("div", {
                children: [O.jsx("div", {className: "section-title", children: "激活码"}), O.jsx(o, {
                    direction: "vertical", style: {width: "100%"}, children: O.jsxs(o.Compact, {
                        style: {width: "100%"},
                        children: [O.jsx(s, {
                            placeholder: "请输入激活码",
                            value: S,
                            onChange: e => j(e.target.value)
                        }), O.jsx(n, {
                            type: "primary", icon: O.jsx(g, {}), async onClick() {
                                if (!S.trim()) return;
                                const e = f.confirm({
                                    title: "确认激活",
                                    content: "激活过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？",
                                    okText: "确定",
                                    cancelText: "取消",
                                    async onOk() {
                                        e.update({cancelButtonProps: {disabled: !0}});
                                        try {
                                            const e = await z.activate(S, t, G, A.cursorVersion, A.appVersion, b.account),
                                                a = 1 === e.data.key_info.key_status ? "active" : 2 === e.data.key_info.key_status ? "expired" : "inactive";
                                            localStorage.setItem(Y, S), C(S), I({
                                                status: a,
                                                account: e.data.mail,
                                                activatedAt: new Date(e.data.key_info.activated_at).toLocaleString(),
                                                expiresAt: new Date(e.data.key_info.expired_at).toLocaleString(),
                                                totalQuota: e.data.key_info.quota_key_max_quota,
                                                usedQuota: e.data.key_info.quota_key_used_quota || 0,
                                                remainingQuota: e.data.key_info.quota_key_max_quota - (e.data.key_info.quota_key_used_quota || 0)
                                            });
                                            const {app_name: o, app_icon: s, app_links: n} = e.data.oem_info || {};
                                            R({
                                                appName: o, appIcon: s, appLinks: (() => {
                                                    try {
                                                        return JSON.parse(n)
                                                    } catch (e) {
                                                        return []
                                                    }
                                                })()
                                            }), await V.updateWindowSettings({title: o, icon: s});
                                            const i = r.loading("正在更新 Cursor 配置...", 0);
                                            T.refresh({account: e.data.account}).then((() => {
                                                i(), f.success({
                                                    title: "激活成功",
                                                    content: "Cursor 授权配置已完成！您现在可以直接使用 Cursor 编辑器，祝您使用愉快！",
                                                    okText: "我知道了"
                                                })
                                            })).catch((async e => {
                                                i(), r.error(B.DEBUG_ERROR ? e instanceof Error ? e.message : String(e) : "激活失败，请重试"), F.upload({
                                                    device_id: t,
                                                    key_code: S,
                                                    data: {
                                                        error_type: "activation_failed",
                                                        error_message: e instanceof Error ? e.message : String(e),
                                                        error_stack: e instanceof Error ? e.stack : "",
                                                        cursor_version: A.cursorVersion,
                                                        app_version: A.appVersion,
                                                        platform: G,
                                                        timestamp: (new Date).toLocaleString()
                                                    }
                                                })
                                            }))
                                        } catch (a) {
                                            r.error(a instanceof Error ? a.message : String(a))
                                        }
                                    }
                                })
                            }, disabled: (() => {
                                const e = S.trim();
                                return !e || e === E
                            })(), children: "激活"
                        })]
                    })
                })]
            }), O.jsx("div", {
                children: O.jsx(o, {
                    direction: "vertical", style: {width: "100%"}, children: O.jsx(n, {
                        icon: O.jsx(c, {}), async onClick() {
                            if (!S.trim() && b) return;
                            M(!0);
                            let e = "";
                            try {
                                const a = await H.getReasons();
                                M(!1);
                                const s = a.data, n = f.confirm({
                                    title: "确认刷新",
                                    icon: O.jsx(h, {}),
                                    content: O.jsxs("div", {
                                        children: [O.jsx("p", {children: "刷新过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？"}), O.jsxs(o, {
                                            direction: "vertical",
                                            style: {width: "100%"},
                                            children: [O.jsx("span", {children: "请选择刷新原因："}), O.jsx(m, {
                                                style: {width: "100%"},
                                                placeholder: "请选择刷新原因",
                                                onChange(t) {
                                                    e = t
                                                },
                                                options: s.map((e => ({
                                                    value: e.id,
                                                    label: O.jsxs("div", {
                                                        style: {
                                                            whiteSpace: "normal",
                                                            wordBreak: "break-word"
                                                        },
                                                        children: [O.jsx("div", {children: e.name}), O.jsx("div", {
                                                            style: {
                                                                fontSize: "12px",
                                                                color: "#999",
                                                                marginTop: "4px"
                                                            }, children: e.text
                                                        })]
                                                    })
                                                })))
                                            })]
                                        })]
                                    }),
                                    okText: "确认",
                                    cancelText: "取消",
                                    async onOk() {
                                        if (!e) return r.error("请选择刷新原因"), Promise.reject("请选择刷新原因");
                                        n.update({cancelButtonProps: {disabled: !0}});
                                        try {
                                            const a = await z.refresh(S, t, b.account, G, A.cursorVersion, A.appVersion, e),
                                                o = 1 === a.data.key_info.key_status ? "active" : 2 === a.data.key_info.key_status ? "expired" : "inactive";
                                            I({
                                                status: o,
                                                account: a.data.mail,
                                                activatedAt: new Date(a.data.key_info.activated_at).toLocaleString(),
                                                expiresAt: new Date(a.data.key_info.expired_at).toLocaleString(),
                                                totalQuota: a.data.key_info.quota_key_max_quota,
                                                usedQuota: a.data.key_info.quota_key_used_quota || 0,
                                                remainingQuota: a.data.key_info.quota_key_max_quota - (a.data.key_info.quota_key_used_quota || 0)
                                            });
                                            const {app_name: s, app_icon: n, app_links: i} = a.data.oem_info || {};
                                            R({
                                                appName: s, appIcon: n, appLinks: (() => {
                                                    try {
                                                        return JSON.parse(i)
                                                    } catch (e) {
                                                        return []
                                                    }
                                                })()
                                            }), await V.updateWindowSettings({title: s, icon: n});
                                            const c = r.loading("正在更新 Cursor 配置...", 0);
                                            T.refresh({account: a.data.account}).then((() => {
                                                c(), r.success("刷新成功")
                                            })).catch((async e => {
                                                c(), r.error(B.DEBUG_ERROR ? e instanceof Error ? e.message : String(e) : "刷新失败，请重试"), F.upload({
                                                    device_id: t,
                                                    key_code: S,
                                                    data: {
                                                        error_type: "refresh_failed",
                                                        error_message: e instanceof Error ? e.message : String(e),
                                                        error_stack: e instanceof Error ? e.stack : "",
                                                        cursor_version: A.cursorVersion,
                                                        app_version: A.appVersion,
                                                        platform: G,
                                                        timestamp: (new Date).toLocaleString()
                                                    }
                                                })
                                            }))
                                        } catch (a) {
                                            r.error(a instanceof Error ? a.message : String(a))
                                        }
                                    }
                                })
                            } catch (a) {
                                M(!1), r.error("获取刷新原因失败，请重试")
                            }
                        }, disabled: !S.trim(), loading: J, block: !0, children: "Cursor 不可用时点击刷新授权"
                    })
                })
            }), 
            
            O.jsx("div", {
                children: O.jsx(o, {
                    direction: "vertical", style: {width: "100%"}, children: O.jsxs(o.Compact, {
                        block: !0, children: [O.jsx(n, {
                            danger: !0, icon: O.jsx(w, {}), async onClick() {
                                const e = f.confirm({
                                    title: "确认禁用",
                                    content: "禁用过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？",
                                    okText: "确定",
                                    cancelText: "取消",
                                    async onOk() {
                                        e.update({cancelButtonProps: {disabled: !0}});
                                        try {
                                            let e;
                                            "timeout" === await Promise.race([new Promise((e => setTimeout((() => e("timeout")), 1e3))), T.banUpgrade().then((() => {
                                                e && e(), r.success("已禁用 Cursor 更新")
                                            })).catch((async a => {
                                                const o = a instanceof Error ? a.message : String(a);
                                                e && e(), o.includes("operation not permitted") ? r.success("已禁用 Cursor 更新") : (r.error(B.DEBUG_ERROR ? o : "禁用更新失败，请重试"), F.upload({
                                                    device_id: t,
                                                    key_code: S,
                                                    data: {
                                                        error_type: "disable_update_failed",
                                                        error_message: a instanceof Error ? a.message : String(a),
                                                        error_stack: a instanceof Error ? a.stack : "",
                                                        cursor_version: A.cursorVersion,
                                                        app_version: A.appVersion,
                                                        platform: G,
                                                        timestamp: (new Date).toLocaleString()
                                                    }
                                                }))
                                            }))]) && (e = r.loading("正在更新 Cursor 配置...", 0))
                                        } catch (a) {
                                            r.error(a instanceof Error ? a.message : String(a))
                                        }
                                    }
                                })
                            }, style: {width: "60%", marginRight: "8px"}, children: "首次使用或安装Cursor时点击禁止更新"
                        }), 
                        
                        O.jsx(n, {
                            icon: O.jsx(x, {}), // 使用x图标组件作为按钮图标
                            async onClick() {
                                // 点击按钮时创建一个确认对话框
                                const e = f.confirm({
                                    title: "确认补丁", // 对话框标题
                                    content: "补丁过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？", // 对话框内容
                                    okText: "确定", // 确认按钮文本
                                    cancelText: "取消", // 取消按钮文本
                                    async onOk() {
                                        // 用户点击确定后执行的函数
                                        e.update({cancelButtonProps: {disabled: !0}}); // 禁用取消按钮，防止用户中断操作
                                        try {
                                            let e; // 声明一个变量用于存储加载提示
                                            // 使用Promise.race竞争执行，设置1秒超时
                                            "timeout" === await Promise.race([
                                                // 创建一个1秒后返回"timeout"的Promise
                                                new Promise((e => setTimeout((() => e("timeout")), 1e3))),
                                                // 执行补丁操作
                                                T.patch().then((() => {
                                                    // 补丁成功执行后
                                                    e && e(), // 如果存在加载提示，则关闭它
                                                    r.success('补丁执行成功，请点击"刷新授权"按钮', 10) // 显示成功消息，持续10秒
                                                })).catch((async a => {
                                                    // 捕获补丁执行过程中的错误
                                                    const o = a instanceof Error ? a.message : String(a); // 获取错误消息
                                                    e && e(), // 如果存在加载提示，则关闭它
                                                    // 如果错误消息包含"operation not permitted"，仍然视为成功
                                                    o.includes("operation not permitted") ? 
                                                        r.success('补丁执行成功，请点击"刷新授权"按钮') : 
                                                        (
                                                            // 否则显示错误消息
                                                            r.error(B.DEBUG_ERROR ? o : "补丁失败，请重试"), 
                                                            // 上传错误日志
                                                            F.upload({
                                                                device_id: t, // 设备ID
                                                                key_code: S, // 激活码
                                                                data: {
                                                                    error_type: "patch_failed", // 错误类型
                                                                    error_message: a instanceof Error ? a.message : String(a), // 错误消息
                                                                    error_stack: a instanceof Error ? a.stack : "", // 错误堆栈
                                                                    cursor_version: A.cursorVersion, // Cursor版本
                                                                    app_version: A.appVersion, // 应用版本
                                                                    platform: G, // 平台信息
                                                                    timestamp: (new Date).toLocaleString() // 时间戳
                                                                }
                                                            })
                                                        )
                                                }))
                                            ]) && (e = r.loading("正在更新 Cursor 配置...", 0)) // 如果是超时，显示加载提示
                                        } catch (a) {
                                            // 捕获整个过程中的其他错误
                                            r.error(a instanceof Error ? a.message : String(a)) // 显示错误消息
                                        }
                                    }
                                })
                            }, 
                            style: {width: "40%", borderColor: "#d9d9d9"}, // 设置按钮样式：宽度40%，边框颜色为浅灰色
                            children: "多次刷新无效点击这里" // 按钮文本内容
                        })
                    ]
                    })
                })
            }), 
            
            O.jsxs("div", {
                // 创建一个flex容器，使内容水平垂直居中对齐
                style: {display: "flex", alignItems: "center", justifyContent: "center"},
                children: [
                    // 条件渲染：如果存在应用图标(P.appIcon)，则渲染图标容器和图片
                    P.appIcon ? O.jsx("div", {
                        className: "logo-container", // 应用logo的容器样式类
                        children: O.jsx("img", {
                            src: P.appIcon, // 图片源地址
                            alt: "App Logo", // 图片替代文本
                            className: "app-logo" // 应用logo的样式类
                        })
                    }) : null, 
                    
                    // 条件渲染：如果存在应用链接数组(P.appLinks)且长度大于0，则渲染链接按钮
                    P.appLinks.length ? O.jsx("div", {
                        className: "button-container", // 按钮容器的样式类
                        children: P.appLinks.map((
                            // 遍历应用链接数组，为每个链接创建一个按钮
                            ({link: e, text: t, type: r = "Out_link"}) => O.jsx(n, { // n是Button组件
                                type: "link", // 按钮类型为链接样式
                                onClick: () => ((e, t) => {
                                    // 根据链接类型决定打开方式：
                                    // "Out_link"：使用electronAPI打开外部网站
                                    // "In_link"：使用V.openExtensionWindow打开内部窗口
                                    "Out_link" === e ? window.electronAPI.openWebsite(t) : "In_link" === e && V.openExtensionWindow(t, P.appName)
                                })(r, e), // 传入链接类型和链接地址
                                children: t // 按钮文本内容
                            }, e) // 使用链接地址作为React key
                        ))
                    }) : null
                ]
            })]
        })
    })
}

L.createRoot(document.getElementById("root")).render(O.jsx(y.StrictMode, {children: O.jsx(ee, {})}));