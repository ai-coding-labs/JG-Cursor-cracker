function e(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if ("string" != typeof r && !Array.isArray(r)) for (const t in r) if ("default" !== t && !(t in e)) {
            const n = Object.getOwnPropertyDescriptor(r, t);
            n && Object.defineProperty(e, t, n.get ? n : {enumerable: !0, get: () => r[t]})
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
}

function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var n = {exports: {}}, r = {}, o = Symbol.for("react.element"), a = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.iterator,
    h = {
        isMounted: () => !1, enqueueForceUpdate() {
        }, enqueueReplaceState() {
        }, enqueueSetState() {
        }
    }, v = Object.assign, b = {};

function y(e, t, n) {
    this.props = e, this.context = t, this.refs = b, this.updater = n || h
}

function w() {
}

function x(e, t, n) {
    this.props = e, this.context = t, this.refs = b, this.updater = n || h
}

y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}, y.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}, w.prototype = y.prototype;
var C = x.prototype = new w;
C.constructor = x, v(C, y.prototype), C.isPureReactComponent = !0;
var S = Array.isArray, E = Object.prototype.hasOwnProperty, k = {current: null},
    $ = {key: !0, ref: !0, __self: !0, __source: !0};

function O(e, t, n) {
    var r, a = {}, i = null, l = null;
    if (null != t) for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) E.call(t, r) && !$.hasOwnProperty(r) && (a[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) a.children = n; else if (1 < s) {
        for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
        a.children = c
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps) void 0 === a[r] && (a[r] = s[r]);
    return {$$typeof: o, type: e, key: i, ref: l, props: a, _owner: k.current}
}

function P(e) {
    return "object" == typeof e && null !== e && e.$$typeof === o
}

var N = /\/+/g;

function M(e, t) {
    return "object" == typeof e && null !== e && null != e.key ? (e => {
        var t = {"=": "=0", ":": "=2"};
        return "$" + e.replace(/[=:]/g, (e => t[e]))
    })("" + e.key) : t.toString(36)
}

function R(e, t, n, r, i) {
    var l = typeof e;
    "undefined" !== l && "boolean" !== l || (e = null);
    var s = !1;
    if (null === e) s = !0; else switch (l) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case o:
                case a:
                    s = !0
            }
    }
    if (s) return i = i(s = e), e = "" === r ? "." + M(s, 0) : r, S(i) ? (n = "", null != e && (n = e.replace(N, "$&/") + "/"), R(i, t, n, "", (e => e))) : null != i && (P(i) && (i = ((e, t) => ({
        $$typeof: o,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }))(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(N, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = "" === r ? "." : r + ":", S(e)) for (var c = 0; c < e.length; c++) {
        var u = r + M(l = e[c], c);
        s += R(l, t, n, u, i)
    } else if (u = (e => null === e || "object" != typeof e ? null : "function" == typeof (e = g && e[g] || e["@@iterator"]) ? e : null)(e), "function" == typeof u) for (e = u.call(e), c = 0; !(l = e.next()).done;) s += R(l = l.value, t, n, u = r + M(l, c++), i); else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function I(e, t, n) {
    if (null == e) return e;
    var r = [], o = 0;
    return R(e, r, "", "", (e => t.call(n, e, o++))), r
}

function j(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then((t => {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
        }), (t => {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
        })), -1 === e._status && (e._status = 0, e._result = t)
    }
    if (1 === e._status) return e._result.default;
    throw e._result
}

var z = {current: null}, T = {transition: null},
    _ = {ReactCurrentDispatcher: z, ReactCurrentBatchConfig: T, ReactCurrentOwner: k};

function L() {
    throw Error("act(...) is not supported in production builds of React.")
}

r.Children = {
    map: I, forEach(e, t, n) {
        I(e, (function () {
            t.apply(this, arguments)
        }), n)
    }, count(e) {
        var t = 0;
        return I(e, (() => {
            t++
        })), t
    }, toArray: e => I(e, (e => e)) || [], only(e) {
        if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
}, r.Component = y, r.Fragment = i, r.Profiler = s, r.PureComponent = x, r.StrictMode = l, r.Suspense = f, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _, r.act = L, r.cloneElement = function (e, t, n) {
    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = v({}, e.props), a = e.key, i = e.ref, l = e._owner;
    if (null != t) {
        if (void 0 !== t.ref && (i = t.ref, l = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (c in t) E.call(t, c) && !$.hasOwnProperty(c) && (r[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
    }
    var c = arguments.length - 2;
    if (1 === c) r.children = n; else if (1 < c) {
        s = Array(c);
        for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return {$$typeof: o, type: e.type, key: a, ref: i, props: r, _owner: l}
}, r.createContext = e => ((e = {
    $$typeof: u,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
}).Provider = {$$typeof: c, _context: e}, e.Consumer = e), r.createElement = O, r.createFactory = e => {
    var t = O.bind(null, e);
    return t.type = e, t
}, r.createRef = () => ({current: null}), r.forwardRef = e => ({
    $$typeof: d,
    render: e
}), r.isValidElement = P, r.lazy = e => ({
    $$typeof: m,
    _payload: {_status: -1, _result: e},
    _init: j
}), r.memo = (e, t) => ({$$typeof: p, type: e, compare: void 0 === t ? null : t}), r.startTransition = e => {
    var t = T.transition;
    T.transition = {};
    try {
        e()
    } finally {
        T.transition = t
    }
}, r.unstable_act = L, r.useCallback = (e, t) => z.current.useCallback(e, t), r.useContext = e => z.current.useContext(e), r.useDebugValue = () => {
}, r.useDeferredValue = e => z.current.useDeferredValue(e), r.useEffect = (e, t) => z.current.useEffect(e, t), r.useId = () => z.current.useId(), r.useImperativeHandle = (e, t, n) => z.current.useImperativeHandle(e, t, n), r.useInsertionEffect = (e, t) => z.current.useInsertionEffect(e, t), r.useLayoutEffect = (e, t) => z.current.useLayoutEffect(e, t), r.useMemo = (e, t) => z.current.useMemo(e, t), r.useReducer = (e, t, n) => z.current.useReducer(e, t, n), r.useRef = e => z.current.useRef(e), r.useState = e => z.current.useState(e), r.useSyncExternalStore = (e, t, n) => z.current.useSyncExternalStore(e, t, n), r.useTransition = () => z.current.useTransition(), r.version = "18.3.1", n.exports = r;
var F = n.exports;
const A = t(F), H = e({__proto__: null, default: A}, [F]);
var D = {exports: {}}, B = {}, W = {exports: {}}, V = {};
!function (e) {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        e:for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < o(a, t))) break e;
            e[r] = t, e[n] = a, n = r
        }
    }

    function n(e) {
        return 0 === e.length ? null : e[0]
    }

    function r(e) {
        if (0 === e.length) return null;
        var t = e[0], n = e.pop();
        if (n !== t) {
            e[0] = n;
            e:for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                var l = 2 * (r + 1) - 1, s = e[l], c = l + 1, u = e[c];
                if (0 > o(s, n)) c < a && 0 > o(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[l] = n, r = l); else {
                    if (!(c < a && 0 > o(u, n))) break e;
                    e[r] = u, e[c] = n, r = c
                }
            }
        }
        return t
    }

    function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }

    if ("object" == typeof performance && "function" == typeof performance.now) {
        var a = performance;
        e.unstable_now = () => a.now()
    } else {
        var i = Date, l = i.now();
        e.unstable_now = () => i.now() - l
    }
    var s = [], c = [], u = 1, d = null, f = 3, p = !1, m = !1, g = !1,
        h = "function" == typeof setTimeout ? setTimeout : null,
        v = "function" == typeof clearTimeout ? clearTimeout : null,
        b = "undefined" != typeof setImmediate ? setImmediate : null;

    function y(e) {
        for (var o = n(c); null !== o;) {
            if (null === o.callback) r(c); else {
                if (!(o.startTime <= e)) break;
                r(c), o.sortIndex = o.expirationTime, t(s, o)
            }
            o = n(c)
        }
    }

    function w(e) {
        if (g = !1, y(e), !m) if (null !== n(s)) m = !0, I(x); else {
            var t = n(c);
            null !== t && j(w, t.startTime - e)
        }
    }

    function x(t, o) {
        m = !1, g && (g = !1, v(k), k = -1), p = !0;
        var a = f;
        try {
            for (y(o), d = n(s); null !== d && (!(d.expirationTime > o) || t && !P());) {
                var i = d.callback;
                if ("function" == typeof i) {
                    d.callback = null, f = d.priorityLevel;
                    var l = i(d.expirationTime <= o);
                    o = e.unstable_now(), "function" == typeof l ? d.callback = l : d === n(s) && r(s), y(o)
                } else r(s);
                d = n(s)
            }
            if (null !== d) var u = !0; else {
                var h = n(c);
                null !== h && j(w, h.startTime - o), u = !1
            }
            return u
        } finally {
            d = null, f = a, p = !1
        }
    }

    "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var C, S = !1, E = null, k = -1, $ = 5, O = -1;

    function P() {
        return !(e.unstable_now() - O < $)
    }

    function N() {
        if (null !== E) {
            var t = e.unstable_now();
            O = t;
            var n = !0;
            try {
                n = E(!0, t)
            } finally {
                n ? C() : (S = !1, E = null)
            }
        } else S = !1
    }

    if ("function" == typeof b) C = () => {
        b(N)
    }; else if ("undefined" != typeof MessageChannel) {
        var M = new MessageChannel, R = M.port2;
        M.port1.onmessage = N, C = () => {
            R.postMessage(null)
        }
    } else C = () => {
        h(N, 0)
    };

    function I(e) {
        E = e, S || (S = !0, C())
    }

    function j(t, n) {
        k = h((() => {
            t(e.unstable_now())
        }), n)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = e => {
        e.callback = null
    }, e.unstable_continueExecution = () => {
        m || p || (m = !0, I(x))
    }, e.unstable_forceFrameRate = e => {
        0 > e || 125 < e || ($ = 0 < e ? Math.floor(1e3 / e) : 5)
    }, e.unstable_getCurrentPriorityLevel = () => f, e.unstable_getFirstCallbackNode = () => n(s), e.unstable_next = e => {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = f
        }
        var n = f;
        f = t;
        try {
            return e()
        } finally {
            f = n
        }
    }, e.unstable_pauseExecution = () => {
    }, e.unstable_requestPaint = () => {
    }, e.unstable_runWithPriority = (e, t) => {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = f;
        f = e;
        try {
            return t()
        } finally {
            f = n
        }
    }, e.unstable_scheduleCallback = (r, o, a) => {
        var i = e.unstable_now();
        switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i, r) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default:
                l = 5e3
        }
        return r = {
            id: u++,
            callback: o,
            priorityLevel: r,
            startTime: a,
            expirationTime: l = a + l,
            sortIndex: -1
        }, a > i ? (r.sortIndex = a, t(c, r), null === n(s) && r === n(c) && (g ? (v(k), k = -1) : g = !0, j(w, a - i))) : (r.sortIndex = l, t(s, r), m || p || (m = !0, I(x))), r
    }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
            var n = f;
            f = t;
            try {
                return e.apply(this, arguments)
            } finally {
                f = n
            }
        }
    }
}(V), W.exports = V;
var K = W.exports, U = F, G = K;

function X(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var q = new Set, Y = {};

function Q(e, t) {
    Z(e, t), Z(e + "Capture", t)
}

function Z(e, t) {
    for (Y[e] = t, e = 0; e < t.length; e++) q.add(t[e])
}

var J = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    ee = Object.prototype.hasOwnProperty,
    te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ne = {}, re = {};

function oe(e, t, n, r, o, a, i) {
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
}

var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((e => {
    ae[e] = new oe(e, 0, !1, e, null, !1, !1)
})), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((e => {
    var t = e[0];
    ae[t] = new oe(t, 1, !1, e[1], null, !1, !1)
})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((e => {
    ae[e] = new oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((e => {
    ae[e] = new oe(e, 2, !1, e, null, !1, !1)
})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((e => {
    ae[e] = new oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
})), ["checked", "multiple", "muted", "selected"].forEach((e => {
    ae[e] = new oe(e, 3, !0, e, null, !1, !1)
})), ["capture", "download"].forEach((e => {
    ae[e] = new oe(e, 4, !1, e, null, !1, !1)
})), ["cols", "rows", "size", "span"].forEach((e => {
    ae[e] = new oe(e, 6, !1, e, null, !1, !1)
})), ["rowSpan", "start"].forEach((e => {
    ae[e] = new oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
}));
var ie = /[\-:]([a-z])/g;

function le(e) {
    return e[1].toUpperCase()
}

function se(e, t, n, r) {
    var o = ae.hasOwnProperty(t) ? ae[t] : null;
    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (((e, t, n, r) => {
        if (null == t || ((e, t, n, r) => {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
                case"function":
                case"symbol":
                    return !0;
                case"boolean":
                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                    return !1
            }
        })(e, t, n, r)) return !0;
        if (r) return !1;
        if (null !== n) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return !1 === t;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    })(t, n, o, r) && (n = null), r || null === o ? (e => !!ee.call(re, e) || !ee.call(ne, e) && (te.test(e) ? re[e] = !0 : (ne[e] = !0, !1)))(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((e => {
    var t = e.replace(ie, le);
    ae[t] = new oe(t, 1, !1, e, null, !1, !1)
})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((e => {
    var t = e.replace(ie, le);
    ae[t] = new oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
})), ["xml:base", "xml:lang", "xml:space"].forEach((e => {
    var t = e.replace(ie, le);
    ae[t] = new oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})), ["tabIndex", "crossOrigin"].forEach((e => {
    ae[e] = new oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})), ae.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((e => {
    ae[e] = new oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
}));
var ce = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"),
    de = Symbol.for("react.portal"), fe = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"),
    me = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), he = Symbol.for("react.context"),
    ve = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"),
    we = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"),
    Se = Symbol.iterator;

function Ee(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof (e = Se && e[Se] || e["@@iterator"]) ? e : null
}

var ke, $e = Object.assign;

function Oe(e) {
    if (void 0 === ke) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ke = t && t[1] || ""
    }
    return "\n" + ke + e
}

var Pe = !1;

function Ne(e, t) {
    if (!e || Pe) return "";
    Pe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = () => {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set() {
                throw Error()
            }
        }), "object" == typeof Reflect && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (c) {
                var r = c
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (c) {
                r = c
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && "string" == typeof c.stack) {
            for (var o = c.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
            for (; 1 <= i && 0 <= l; i--, l--) if (o[i] !== a[l]) {
                if (1 !== i || 1 !== l) do {
                    if (i--, 0 > --l || o[i] !== a[l]) {
                        var s = "\n" + o[i].replace(" at new ", " at ");
                        return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                    }
                } while (1 <= i && 0 <= l);
                break
            }
        }
    } finally {
        Pe = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Oe(e) : ""
}

function Me(e) {
    switch (e.tag) {
        case 5:
            return Oe(e.type);
        case 16:
            return Oe("Lazy");
        case 13:
            return Oe("Suspense");
        case 19:
            return Oe("SuspenseList");
        case 0:
        case 2:
        case 15:
            return Ne(e.type, !1);
        case 11:
            return Ne(e.type.render, !1);
        case 1:
            return Ne(e.type, !0);
        default:
            return ""
    }
}

function Re(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case fe:
            return "Fragment";
        case de:
            return "Portal";
        case me:
            return "Profiler";
        case pe:
            return "StrictMode";
        case be:
            return "Suspense";
        case ye:
            return "SuspenseList"
    }
    if ("object" == typeof e) switch (e.$$typeof) {
        case he:
            return (e.displayName || "Context") + ".Consumer";
        case ge:
            return (e._context.displayName || "Context") + ".Provider";
        case ve:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case we:
            return null !== (t = e.displayName || null) ? t : Re(e.type) || "Memo";
        case xe:
            t = e._payload, e = e._init;
            try {
                return Re(e(t))
            } catch (n) {
            }
    }
    return null
}

function Ie(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Re(t);
        case 8:
            return t === pe ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" == typeof t) return t.displayName || t.name || null;
            if ("string" == typeof t) return t
    }
    return null
}

function je(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
        case"object":
            return e;
        default:
            return ""
    }
}

function ze(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
}

function Te(e) {
    e._valueTracker || (e._valueTracker = function (e) {
        var t = ze(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var o = n.get, a = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0, get() {
                    return o.call(this)
                }, set(e) {
                    r = "" + e, a.call(this, e)
                }
            }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                getValue() {
                    return r
                }, setValue(e) {
                    r = "" + e
                }, stopTracking() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }(e))
}

function _e(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ze(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
}

function Le(e) {
    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body
    } catch (t) {
        return e.body
    }
}

function Fe(e, t) {
    var n = t.checked;
    return $e({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
    })
}

function Ae(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked;
    n = je(null != t.value ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
    }
}

function He(e, t) {
    null != (t = t.checked) && se(e, "checked", t, !1)
}

function De(e, t) {
    He(e, t);
    var n = je(t.value), r = t.type;
    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? We(e, t.type, n) : t.hasOwnProperty("defaultValue") && We(e, t.type, je(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
}

function Be(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
}

function We(e, t, n) {
    "number" === t && Le(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var Ve = Array.isArray;

function Ke(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + je(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
            null !== t || e[o].disabled || (t = e[o])
        }
        null !== t && (t.selected = !0)
    }
}

function Ue(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(X(91));
    return $e({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function Ge(e, t) {
    var n = t.value;
    if (null == n) {
        if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(X(92));
            if (Ve(n)) {
                if (1 < n.length) throw Error(X(93));
                n = n[0]
            }
            t = n
        }
        null == t && (t = ""), n = t
    }
    e._wrapperState = {initialValue: je(n)}
}

function Xe(e, t) {
    var n = je(t.value), r = je(t.defaultValue);
    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
}

function qe(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
}

function Ye(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Qe(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e ? Ye(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
}

var Ze, Je, et = (Je = (e, t) => {
    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
        for ((Ze = Ze || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ze.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? (e, t, n, r) => {
    MSApp.execUnsafeLocalFunction((() => Je(e, t)))
} : Je);

function tt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
    }
    e.textContent = t
}

var nt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, rt = ["Webkit", "ms", "Moz", "O"];

function ot(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || nt.hasOwnProperty(e) && nt[e] ? ("" + t).trim() : t + "px"
}

function at(e, t) {
    for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"), o = ot(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}

Object.keys(nt).forEach((e => {
    rt.forEach((t => {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), nt[t] = nt[e]
    }))
}));
var it = $e({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function lt(e, t) {
    if (t) {
        if (it[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(X(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(X(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(X(61))
        }
        if (null != t.style && "object" != typeof t.style) throw Error(X(62))
    }
}

function st(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var ct = null;

function ut(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
}

var dt = null, ft = null, pt = null;

function mt(e) {
    if (e = ca(e)) {
        if ("function" != typeof dt) throw Error(X(280));
        var t = e.stateNode;
        t && (t = da(t), dt(e.stateNode, e.type, t))
    }
}

function gt(e) {
    ft ? pt ? pt.push(e) : pt = [e] : ft = e
}

function ht() {
    if (ft) {
        var e = ft, t = pt;
        if (pt = ft = null, mt(e), t) for (e = 0; e < t.length; e++) mt(t[e])
    }
}

function vt(e, t) {
    return e(t)
}

function bt() {
}

var yt = !1;

function wt(e, t, n) {
    if (yt) return e(t, n);
    yt = !0;
    try {
        return vt(e, t, n)
    } finally {
        yt = !1, (null !== ft || null !== pt) && (bt(), ht())
    }
}

function xt(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = da(n);
    if (null === r) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(X(231, t, typeof n));
    return n
}

var Ct = !1;
if (J) try {
    var St = {};
    Object.defineProperty(St, "passive", {
        get() {
            Ct = !0
        }
    }), window.addEventListener("test", St, St), window.removeEventListener("test", St, St)
} catch (Je) {
    Ct = !1
}

function Et(e, t, n, r, o, a, i, l, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}

var kt = !1, $t = null, Ot = !1, Pt = null, Nt = {
    onError(e) {
        kt = !0, $t = e
    }
};

function Mt(e, t, n, r, o, a, i, l, s) {
    kt = !1, $t = null, Et.apply(Nt, arguments)
}

function Rt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do {
            !!(4098 & (t = e).flags) && (n = t.return), e = t.return
        } while (e)
    }
    return 3 === t.tag ? n : null
}

function It(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
    }
    return null
}

function jt(e) {
    if (Rt(e) !== e) throw Error(X(188))
}

function zt(e) {
    return null !== (e = (e => {
        var t = e.alternate;
        if (!t) {
            if (null === (t = Rt(e))) throw Error(X(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t; ;) {
            var o = n.return;
            if (null === o) break;
            var a = o.alternate;
            if (null === a) {
                if (null !== (r = o.return)) {
                    n = r;
                    continue
                }
                break
            }
            if (o.child === a.child) {
                for (a = o.child; a;) {
                    if (a === n) return jt(o), e;
                    if (a === r) return jt(o), t;
                    a = a.sibling
                }
                throw Error(X(188))
            }
            if (n.return !== r.return) n = o, r = a; else {
                for (var i = !1, l = o.child; l;) {
                    if (l === n) {
                        i = !0, n = o, r = a;
                        break
                    }
                    if (l === r) {
                        i = !0, r = o, n = a;
                        break
                    }
                    l = l.sibling
                }
                if (!i) {
                    for (l = a.child; l;) {
                        if (l === n) {
                            i = !0, n = a, r = o;
                            break
                        }
                        if (l === r) {
                            i = !0, r = a, n = o;
                            break
                        }
                        l = l.sibling
                    }
                    if (!i) throw Error(X(189))
                }
            }
            if (n.alternate !== r) throw Error(X(190))
        }
        if (3 !== n.tag) throw Error(X(188));
        return n.stateNode.current === n ? e : t
    })(e)) ? Tt(e) : null
}

function Tt(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e;) {
        var t = Tt(e);
        if (null !== t) return t;
        e = e.sibling
    }
    return null
}

var _t = G.unstable_scheduleCallback, Lt = G.unstable_cancelCallback, Ft = G.unstable_shouldYield,
    At = G.unstable_requestPaint, Ht = G.unstable_now, Dt = G.unstable_getCurrentPriorityLevel,
    Bt = G.unstable_ImmediatePriority, Wt = G.unstable_UserBlockingPriority, Vt = G.unstable_NormalPriority,
    Kt = G.unstable_LowPriority, Ut = G.unstable_IdlePriority, Gt = null, Xt = null,
    qt = Math.clz32 ? Math.clz32 : e => 0 === (e >>>= 0) ? 32 : 31 - (Yt(e) / Qt | 0) | 0, Yt = Math.log, Qt = Math.LN2,
    Zt = 64, Jt = 4194304;

function en(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function tn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0, o = e.suspendedLanes, a = e.pingedLanes, i = 268435455 & n;
    if (0 !== i) {
        var l = i & ~o;
        0 !== l ? r = en(l) : 0 != (a &= i) && (r = en(a))
    } else 0 != (i = n & ~o) ? r = en(i) : 0 !== a && (r = en(a));
    if (0 === r) return 0;
    if (0 !== t && t !== r && !(t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 4194240 & a)) return t;
    if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - qt(t)), r |= e[n], t &= ~o;
    return r
}

function nn(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        default:
            return -1
    }
}

function rn(e) {
    return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
}

function on() {
    var e = Zt;
    return !(4194240 & (Zt <<= 1)) && (Zt = 64), e
}

function an(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ln(e, t, n) {
    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - qt(t)] = n
}

function sn(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - qt(n), o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}

var cn = 0;

function un(e) {
    return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
}

var dn, fn, pn, mn, gn, hn = !1, vn = [], bn = null, yn = null, wn = null, xn = new Map, Cn = new Map, Sn = [],
    En = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function kn(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            bn = null;
            break;
        case"dragenter":
        case"dragleave":
            yn = null;
            break;
        case"mouseover":
        case"mouseout":
            wn = null;
            break;
        case"pointerover":
        case"pointerout":
            xn.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Cn.delete(t.pointerId)
    }
}

function $n(e, t, n, r, o, a) {
    return null === e || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o]
    }, null !== t && null !== (t = ca(t)) && fn(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
}

function On(e) {
    var t = sa(e.target);
    if (null !== t) {
        var n = Rt(t);
        if (null !== n) if (13 === (t = n.tag)) {
            if (null !== (t = It(n))) return e.blockedOn = t, void gn(e.priority, (() => {
                pn(n)
            }))
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
    }
    e.blockedOn = null
}

function Pn(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = An(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = ca(n)) && fn(t), e.blockedOn = n, !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ct = r, n.target.dispatchEvent(r), ct = null, t.shift()
    }
    return !0
}

function Nn(e, t, n) {
    Pn(e) && n.delete(t)
}

function Mn() {
    hn = !1, null !== bn && Pn(bn) && (bn = null), null !== yn && Pn(yn) && (yn = null), null !== wn && Pn(wn) && (wn = null), xn.forEach(Nn), Cn.forEach(Nn)
}

function Rn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hn || (hn = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, Mn)))
}

function In(e) {
    function t(t) {
        return Rn(t, e)
    }

    if (0 < vn.length) {
        Rn(vn[0], e);
        for (var n = 1; n < vn.length; n++) {
            var r = vn[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (null !== bn && Rn(bn, e), null !== yn && Rn(yn, e), null !== wn && Rn(wn, e), xn.forEach(t), Cn.forEach(t), n = 0; n < Sn.length; n++) (r = Sn[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Sn.length && null === (n = Sn[0]).blockedOn;) On(n), null === n.blockedOn && Sn.shift()
}

var jn = ce.ReactCurrentBatchConfig, zn = !0;

function Tn(e, t, n, r) {
    var o = cn, a = jn.transition;
    jn.transition = null;
    try {
        cn = 1, Ln(e, t, n, r)
    } finally {
        cn = o, jn.transition = a
    }
}

function _n(e, t, n, r) {
    var o = cn, a = jn.transition;
    jn.transition = null;
    try {
        cn = 4, Ln(e, t, n, r)
    } finally {
        cn = o, jn.transition = a
    }
}

function Ln(e, t, n, r) {
    if (zn) {
        var o = An(e, t, n, r);
        if (null === o) zo(e, t, r, Fn, n), kn(e, r); else if (((e, t, n, r, o) => {
            switch (t) {
                case"focusin":
                    return bn = $n(bn, e, t, n, r, o), !0;
                case"dragenter":
                    return yn = $n(yn, e, t, n, r, o), !0;
                case"mouseover":
                    return wn = $n(wn, e, t, n, r, o), !0;
                case"pointerover":
                    var a = o.pointerId;
                    return xn.set(a, $n(xn.get(a) || null, e, t, n, r, o)), !0;
                case"gotpointercapture":
                    return a = o.pointerId, Cn.set(a, $n(Cn.get(a) || null, e, t, n, r, o)), !0
            }
            return !1
        })(o, e, t, n, r)) r.stopPropagation(); else if (kn(e, r), 4 & t && -1 < En.indexOf(e)) {
            for (; null !== o;) {
                var a = ca(o);
                if (null !== a && dn(a), null === (a = An(e, t, n, r)) && zo(e, t, r, Fn, n), a === o) break;
                o = a
            }
            null !== o && r.stopPropagation()
        } else zo(e, t, r, null, n)
    }
}

var Fn = null;

function An(e, t, n, r) {
    if (Fn = null, null !== (e = sa(e = ut(r)))) if (null === (t = Rt(e))) e = null; else if (13 === (n = t.tag)) {
        if (null !== (e = It(t))) return e;
        e = null
    } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Fn = e, null
}

function Hn(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (Dt()) {
                case Bt:
                    return 1;
                case Wt:
                    return 4;
                case Vt:
                case Kt:
                    return 16;
                case Ut:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var Dn = null, Bn = null, Wn = null;

function Vn() {
    if (Wn) return Wn;
    var e, t, n = Bn, r = n.length, o = "value" in Dn ? Dn.value : Dn.textContent, a = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++) ;
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
    return Wn = o.slice(e, 1 < t ? 1 - t : void 0)
}

function Kn(e) {
    var t = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
}

function Un() {
    return !0
}

function Gn() {
    return !1
}

function Xn(e) {
    function t(t, n, r, o, a) {
        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? Un : Gn, this.isPropagationStopped = Gn, this
    }

    return $e(t.prototype, {
        preventDefault() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Un)
        }, stopPropagation() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Un)
        }, persist() {
        }, isPersistent: Un
    }), t
}

var qn, Yn, Qn, Zn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: e => e.timeStamp || Date.now(),
        defaultPrevented: 0,
        isTrusted: 0
    }, Jn = Xn(Zn), er = $e({}, Zn, {view: 0, detail: 0}), tr = Xn(er), nr = $e({}, er, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: mr,
        button: 0,
        buttons: 0,
        relatedTarget: e => void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget,
        movementX: e => "movementX" in e ? e.movementX : (e !== Qn && (Qn && "mousemove" === e.type ? (qn = e.screenX - Qn.screenX, Yn = e.screenY - Qn.screenY) : Yn = qn = 0, Qn = e), qn),
        movementY: e => "movementY" in e ? e.movementY : Yn
    }), rr = Xn(nr), or = Xn($e({}, nr, {dataTransfer: 0})), ar = Xn($e({}, er, {relatedTarget: 0})),
    ir = Xn($e({}, Zn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})),
    lr = $e({}, Zn, {clipboardData: e => "clipboardData" in e ? e.clipboardData : window.clipboardData}), sr = Xn(lr),
    cr = Xn($e({}, Zn, {data: 0})), ur = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, dr = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, fr = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function pr(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = fr[e]) && !!t[e]
}

function mr() {
    return pr
}

var gr = $e({}, er, {
    key(e) {
        if (e.key) {
            var t = ur[e.key] || e.key;
            if ("Unidentified" !== t) return t
        }
        return "keypress" === e.type ? 13 === (e = Kn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? dr[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mr,
    charCode: e => "keypress" === e.type ? Kn(e) : 0,
    keyCode: e => "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0,
    which: e => "keypress" === e.type ? Kn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
}), hr = Xn(gr), vr = Xn($e({}, nr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})), br = Xn($e({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mr
})), yr = Xn($e({}, Zn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), wr = $e({}, nr, {
    deltaX: e => "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0,
    deltaY: e => "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0,
    deltaZ: 0,
    deltaMode: 0
}), xr = Xn(wr), Cr = [9, 13, 27, 32], Sr = J && "CompositionEvent" in window, Er = null;
J && "documentMode" in document && (Er = document.documentMode);
var kr = J && "TextEvent" in window && !Er, $r = J && (!Sr || Er && 8 < Er && 11 >= Er), Or = String.fromCharCode(32),
    Pr = !1;

function Nr(e, t) {
    switch (e) {
        case"keyup":
            return -1 !== Cr.indexOf(t.keyCode);
        case"keydown":
            return 229 !== t.keyCode;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function Mr(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
}

var Rr = !1, Ir = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function jr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Ir[e.type] : "textarea" === t
}

function zr(e, t, n, r) {
    gt(r), 0 < (t = _o(t, "onChange")).length && (n = new Jn("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Tr = null, _r = null;

function Lr(e) {
    Po(e, 0)
}

function Fr(e) {
    if (_e(ua(e))) return e
}

function Ar(e, t) {
    if ("change" === e) return t
}

var Hr = !1;
if (J) {
    var Dr;
    if (J) {
        var Br = "oninput" in document;
        if (!Br) {
            var Wr = document.createElement("div");
            Wr.setAttribute("oninput", "return;"), Br = "function" == typeof Wr.oninput
        }
        Dr = Br
    } else Dr = !1;
    Hr = Dr && (!document.documentMode || 9 < document.documentMode)
}

function Vr() {
    Tr && (Tr.detachEvent("onpropertychange", Kr), _r = Tr = null)
}

function Kr(e) {
    if ("value" === e.propertyName && Fr(_r)) {
        var t = [];
        zr(t, _r, e, ut(e)), wt(Lr, t)
    }
}

function Ur(e, t, n) {
    "focusin" === e ? (Vr(), _r = n, (Tr = t).attachEvent("onpropertychange", Kr)) : "focusout" === e && Vr()
}

function Gr(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Fr(_r)
}

function Xr(e, t) {
    if ("click" === e) return Fr(t)
}

function qr(e, t) {
    if ("input" === e || "change" === e) return Fr(t)
}

var Yr = "function" == typeof Object.is ? Object.is : (e, t) => e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;

function Qr(e, t) {
    if (Yr(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ee.call(t, o) || !Yr(e[o], t[o])) return !1
    }
    return !0
}

function Zr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Jr(e, t) {
    var n, r = Zr(e);
    for (e = 0; r;) {
        if (3 === r.nodeType) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
            e = n
        }
        e:{
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Zr(r)
    }
}

function eo(e, t) {
    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? eo(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}

function to() {
    for (var e = window, t = Le(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = "string" == typeof t.contentWindow.location.href
        } catch (r) {
            n = !1
        }
        if (!n) break;
        t = Le((e = t.contentWindow).document)
    }
    return t
}

function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
}

function ro(e) {
    var t = to(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && eo(n.ownerDocument.documentElement, n)) {
        if (null !== r && no(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, a = Math.min(r.start, o);
            r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = Jr(n, a);
            var i = Jr(n, r);
            o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
        }
        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var oo = J && "documentMode" in document && 11 >= document.documentMode, ao = null, io = null, lo = null, so = !1;

function co(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    so || null == ao || ao !== Le(r) || (r = "selectionStart" in (r = ao) && no(r) ? {
        start: r.selectionStart,
        end: r.selectionEnd
    } : {
        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }, lo && Qr(lo, r) || (lo = r, 0 < (r = _o(io, "onSelect")).length && (t = new Jn("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = ao)))
}

function uo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var fo = {
    animationend: uo("Animation", "AnimationEnd"),
    animationiteration: uo("Animation", "AnimationIteration"),
    animationstart: uo("Animation", "AnimationStart"),
    transitionend: uo("Transition", "TransitionEnd")
}, po = {}, mo = {};

function go(e) {
    if (po[e]) return po[e];
    if (!fo[e]) return e;
    var t, n = fo[e];
    for (t in n) if (n.hasOwnProperty(t) && t in mo) return po[e] = n[t];
    return e
}

J && (mo = document.createElement("div").style, "AnimationEvent" in window || (delete fo.animationend.animation, delete fo.animationiteration.animation, delete fo.animationstart.animation), "TransitionEvent" in window || delete fo.transitionend.transition);
var ho = go("animationend"), vo = go("animationiteration"), bo = go("animationstart"), yo = go("transitionend"),
    wo = new Map,
    xo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Co(e, t) {
    wo.set(e, t), Q(t, [e])
}

for (var So = 0; So < xo.length; So++) {
    var Eo = xo[So];
    Co(Eo.toLowerCase(), "on" + (Eo[0].toUpperCase() + Eo.slice(1)))
}
Co(ho, "onAnimationEnd"), Co(vo, "onAnimationIteration"), Co(bo, "onAnimationStart"), Co("dblclick", "onDoubleClick"), Co("focusin", "onFocus"), Co("focusout", "onBlur"), Co(yo, "onTransitionEnd"), Z("onMouseEnter", ["mouseout", "mouseover"]), Z("onMouseLeave", ["mouseout", "mouseover"]), Z("onPointerEnter", ["pointerout", "pointerover"]), Z("onPointerLeave", ["pointerout", "pointerover"]), Q("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Q("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Q("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Q("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    $o = new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));

function Oo(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, function (e, t, n, r, o, a, i, l, s) {
        if (Mt.apply(this, arguments), kt) {
            if (!kt) throw Error(X(198));
            var c = $t;
            kt = !1, $t = null, Ot || (Ot = !0, Pt = c)
        }
    }(r, t, void 0, e), e.currentTarget = null
}

function Po(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n], o = r.event;
        r = r.listeners;
        e:{
            var a = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i], s = l.instance, c = l.currentTarget;
                if (l = l.listener, s !== a && o.isPropagationStopped()) break e;
                Oo(o, l, c), a = s
            } else for (i = 0; i < r.length; i++) {
                if (s = (l = r[i]).instance, c = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped()) break e;
                Oo(o, l, c), a = s
            }
        }
    }
    if (Ot) throw e = Pt, Ot = !1, Pt = null, e
}

function No(e, t) {
    var n = t[aa];
    void 0 === n && (n = t[aa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (jo(t, e, 2, !1), n.add(r))
}

function Mo(e, t, n) {
    var r = 0;
    t && (r |= 4), jo(n, e, r, t)
}

var Ro = "_reactListening" + Math.random().toString(36).slice(2);

function Io(e) {
    if (!e[Ro]) {
        e[Ro] = !0, q.forEach((t => {
            "selectionchange" !== t && ($o.has(t) || Mo(t, !1, e), Mo(t, !0, e))
        }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Ro] || (t[Ro] = !0, Mo("selectionchange", !1, t))
    }
}

function jo(e, t, n, r) {
    switch (Hn(t)) {
        case 1:
            var o = Tn;
            break;
        case 4:
            o = _n;
            break;
        default:
            o = Ln
    }
    n = o.bind(null, t, n, e), o = void 0, !Ct || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
}

function zo(e, t, n, r, o) {
    var a = r;
    if (!(1 & t || 2 & t || null === r)) e:for (; ;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
            var l = r.stateNode.containerInfo;
            if (l === o || 8 === l.nodeType && l.parentNode === o) break;
            if (4 === i) for (i = r.return; null !== i;) {
                var s = i.tag;
                if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o)) return;
                i = i.return
            }
            for (; null !== l;) {
                if (null === (i = sa(l))) return;
                if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    wt((() => {
        var r = a, o = ut(n), i = [];
        e:{
            var l = wo.get(e);
            if (void 0 !== l) {
                var s = Jn, c = e;
                switch (e) {
                    case"keypress":
                        if (0 === Kn(n)) break e;
                    case"keydown":
                    case"keyup":
                        s = hr;
                        break;
                    case"focusin":
                        c = "focus", s = ar;
                        break;
                    case"focusout":
                        c = "blur", s = ar;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        s = ar;
                        break;
                    case"click":
                        if (2 === n.button) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        s = rr;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        s = or;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        s = br;
                        break;
                    case ho:
                    case vo:
                    case bo:
                        s = ir;
                        break;
                    case yo:
                        s = yr;
                        break;
                    case"scroll":
                        s = tr;
                        break;
                    case"wheel":
                        s = xr;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        s = sr;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        s = vr
                }
                var u = !!(4 & t), d = !u && "scroll" === e, f = u ? null !== l ? l + "Capture" : null : l;
                u = [];
                for (var p, m = r; null !== m;) {
                    var g = (p = m).stateNode;
                    if (5 === p.tag && null !== g && (p = g, null !== f && null != (g = xt(m, f)) && u.push(To(m, g, p))), d) break;
                    m = m.return
                }
                0 < u.length && (l = new s(l, c, null, n, o), i.push({event: l, listeners: u}))
            }
        }
        if (!(7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === ct || !(c = n.relatedTarget || n.fromElement) || !sa(c) && !c[oa]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? sa(c) : null) && (c !== (d = Rt(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (s = null, c = r), s !== c)) {
                if (u = rr, g = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (u = vr, g = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == s ? l : ua(s), p = null == c ? l : ua(c), (l = new u(g, m + "leave", s, n, o)).target = d, l.relatedTarget = p, g = null, sa(o) === r && ((u = new u(f, m + "enter", c, n, o)).target = p, u.relatedTarget = d, g = u), d = g, s && c) e:{
                    for (f = c, m = 0, p = u = s; p; p = Lo(p)) m++;
                    for (p = 0, g = f; g; g = Lo(g)) p++;
                    for (; 0 < m - p;) u = Lo(u), m--;
                    for (; 0 < p - m;) f = Lo(f), p--;
                    for (; m--;) {
                        if (u === f || null !== f && u === f.alternate) break e;
                        u = Lo(u), f = Lo(f)
                    }
                    u = null
                } else u = null;
                null !== s && Fo(i, l, s, u, !1), null !== c && null !== d && Fo(i, d, c, u, !0)
            }
            if ("select" === (s = (l = r ? ua(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var h = Ar; else if (jr(l)) if (Hr) h = qr; else {
                h = Gr;
                var v = Ur
            } else (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (h = Xr);
            switch (h && (h = h(e, r)) ? zr(i, h, n, o) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && We(l, "number", l.value)), v = r ? ua(r) : window, e) {
                case"focusin":
                    (jr(v) || "true" === v.contentEditable) && (ao = v, io = r, lo = null);
                    break;
                case"focusout":
                    lo = io = ao = null;
                    break;
                case"mousedown":
                    so = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    so = !1, co(i, n, o);
                    break;
                case"selectionchange":
                    if (oo) break;
                case"keydown":
                case"keyup":
                    co(i, n, o)
            }
            var b;
            if (Sr) e:{
                switch (e) {
                    case"compositionstart":
                        var y = "onCompositionStart";
                        break e;
                    case"compositionend":
                        y = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        y = "onCompositionUpdate";
                        break e
                }
                y = void 0
            } else Rr ? Nr(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
            y && ($r && "ko" !== n.locale && (Rr || "onCompositionStart" !== y ? "onCompositionEnd" === y && Rr && (b = Vn()) : (Bn = "value" in (Dn = o) ? Dn.value : Dn.textContent, Rr = !0)), 0 < (v = _o(r, y)).length && (y = new cr(y, e, null, n, o), i.push({
                event: y,
                listeners: v
            }), (b || null !== (b = Mr(n))) && (y.data = b))), (b = kr ? ((e, t) => {
                switch (e) {
                    case"compositionend":
                        return Mr(t);
                    case"keypress":
                        return 32 !== t.which ? null : (Pr = !0, Or);
                    case"textInput":
                        return (e = t.data) === Or && Pr ? null : e;
                    default:
                        return null
                }
            })(e, n) : ((e, t) => {
                if (Rr) return "compositionend" === e || !Sr && Nr(e, t) ? (e = Vn(), Wn = Bn = Dn = null, Rr = !1, e) : null;
                switch (e) {
                    case"paste":
                    default:
                        return null;
                    case"keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case"compositionend":
                        return $r && "ko" !== t.locale ? null : t.data
                }
            })(e, n)) && 0 < (r = _o(r, "onBeforeInput")).length && (o = new cr("onBeforeInput", "beforeinput", null, n, o), i.push({
                event: o,
                listeners: r
            }), o.data = b)
        }
        Po(i, t)
    }))
}

function To(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function _o(e, t) {
    for (var n = t + "Capture", r = []; null !== e;) {
        var o = e, a = o.stateNode;
        5 === o.tag && null !== a && (o = a, null != (a = xt(e, n)) && r.unshift(To(e, a, o)), null != (a = xt(e, t)) && r.push(To(e, a, o))), e = e.return
    }
    return r
}

function Lo(e) {
    if (null === e) return null;
    do {
        e = e.return
    } while (e && 5 !== e.tag);
    return e || null
}

function Fo(e, t, n, r, o) {
    for (var a = t._reactName, i = []; null !== n && n !== r;) {
        var l = n, s = l.alternate, c = l.stateNode;
        if (null !== s && s === r) break;
        5 === l.tag && null !== c && (l = c, o ? null != (s = xt(n, a)) && i.unshift(To(n, s, l)) : o || null != (s = xt(n, a)) && i.push(To(n, s, l))), n = n.return
    }
    0 !== i.length && e.push({event: t, listeners: i})
}

var Ao = /\r\n?/g, Ho = /\u0000|\uFFFD/g;

function Do(e) {
    return ("string" == typeof e ? e : "" + e).replace(Ao, "\n").replace(Ho, "")
}

function Bo(e, t, n) {
    if (t = Do(t), Do(e) !== t && n) throw Error(X(425))
}

function Wo() {
}

var Vo = null, Ko = null;

function Uo(e, t) {
    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
}

var Go = "function" == typeof setTimeout ? setTimeout : void 0,
    Xo = "function" == typeof clearTimeout ? clearTimeout : void 0,
    qo = "function" == typeof Promise ? Promise : void 0,
    Yo = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== qo ? e => qo.resolve(null).then(e).catch(Qo) : Go;

function Qo(e) {
    setTimeout((() => {
        throw e
    }))
}

function Zo(e, t) {
    var n = t, r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
            if (0 === r) return e.removeChild(o), void In(t);
            r--
        } else "$" !== n && "$?" !== n && "$!" !== n || r++;
        n = o
    } while (n);
    In(t)
}

function Jo(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null
        }
    }
    return e
}

function ea(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--
            } else "/$" === n && t++
        }
        e = e.previousSibling
    }
    return null
}

var ta = Math.random().toString(36).slice(2), na = "__reactFiber$" + ta, ra = "__reactProps$" + ta,
    oa = "__reactContainer$" + ta, aa = "__reactEvents$" + ta, ia = "__reactListeners$" + ta,
    la = "__reactHandles$" + ta;

function sa(e) {
    var t = e[na];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[oa] || n[na]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = ea(e); null !== e;) {
                if (n = e[na]) return n;
                e = ea(e)
            }
            return t
        }
        n = (e = n).parentNode
    }
    return null
}

function ca(e) {
    return !(e = e[na] || e[oa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
}

function ua(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(X(33))
}

function da(e) {
    return e[ra] || null
}

var fa = [], pa = -1;

function ma(e) {
    return {current: e}
}

function ga(e) {
    0 > pa || (e.current = fa[pa], fa[pa] = null, pa--)
}

function ha(e, t) {
    pa++, fa[pa] = e.current, e.current = t
}

var va = {}, ba = ma(va), ya = ma(!1), wa = va;

function xa(e, t) {
    var n = e.type.contextTypes;
    if (!n) return va;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o, a = {};
    for (o in n) a[o] = t[o];
    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
}

function Ca(e) {
    return null != e.childContextTypes
}

function Sa() {
    ga(ya), ga(ba)
}

function Ea(e, t, n) {
    if (ba.current !== va) throw Error(X(168));
    ha(ba, t), ha(ya, n)
}

function ka(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
    for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(X(108, Ie(e) || "Unknown", o));
    return $e({}, n, r)
}

function $a(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || va, wa = ba.current, ha(ba, e), ha(ya, ya.current), !0
}

function Oa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(X(169));
    n ? (e = ka(e, t, wa), r.__reactInternalMemoizedMergedChildContext = e, ga(ya), ga(ba), ha(ba, e)) : ga(ya), ha(ya, n)
}

var Pa = null, Na = !1, Ma = !1;

function Ra(e) {
    null === Pa ? Pa = [e] : Pa.push(e)
}

function Ia() {
    if (!Ma && null !== Pa) {
        Ma = !0;
        var e = 0, t = cn;
        try {
            var n = Pa;
            for (cn = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0)
                } while (null !== r)
            }
            Pa = null, Na = !1
        } catch (o) {
            throw null !== Pa && (Pa = Pa.slice(e + 1)), _t(Bt, Ia), o
        } finally {
            cn = t, Ma = !1
        }
    }
    return null
}

var ja = [], za = 0, Ta = null, _a = 0, La = [], Fa = 0, Aa = null, Ha = 1, Da = "";

function Ba(e, t) {
    ja[za++] = _a, ja[za++] = Ta, Ta = e, _a = t
}

function Wa(e, t, n) {
    La[Fa++] = Ha, La[Fa++] = Da, La[Fa++] = Aa, Aa = e;
    var r = Ha;
    e = Da;
    var o = 32 - qt(r) - 1;
    r &= ~(1 << o), n += 1;
    var a = 32 - qt(t) + o;
    if (30 < a) {
        var i = o - o % 5;
        a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Ha = 1 << 32 - qt(t) + o | n << o | r, Da = a + e
    } else Ha = 1 << a | n << o | r, Da = e
}

function Va(e) {
    null !== e.return && (Ba(e, 1), Wa(e, 1, 0))
}

function Ka(e) {
    for (; e === Ta;) Ta = ja[--za], ja[za] = null, _a = ja[--za], ja[za] = null;
    for (; e === Aa;) Aa = La[--Fa], La[Fa] = null, Da = La[--Fa], La[Fa] = null, Ha = La[--Fa], La[Fa] = null
}

var Ua = null, Ga = null, Xa = !1, qa = null;

function Ya(e, t) {
    var n = yu(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Qa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, Ua = e, Ga = Jo(t.firstChild), !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, Ua = e, Ga = null, !0);
        case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Aa ? {
                id: Ha,
                overflow: Da
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, (n = yu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, Ua = e, Ga = null, !0);
        default:
            return !1
    }
}

function Za(e) {
    return !(!(1 & e.mode) || 128 & e.flags)
}

function Ja(e) {
    if (Xa) {
        var t = Ga;
        if (t) {
            var n = t;
            if (!Qa(e, t)) {
                if (Za(e)) throw Error(X(418));
                t = Jo(n.nextSibling);
                var r = Ua;
                t && Qa(e, t) ? Ya(r, n) : (e.flags = -4097 & e.flags | 2, Xa = !1, Ua = e)
            }
        } else {
            if (Za(e)) throw Error(X(418));
            e.flags = -4097 & e.flags | 2, Xa = !1, Ua = e
        }
    }
}

function ei(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
    Ua = e
}

function ti(e) {
    if (e !== Ua) return !1;
    if (!Xa) return ei(e), Xa = !0, !1;
    var t;
    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !Uo(e.type, e.memoizedProps)), t && (t = Ga)) {
        if (Za(e)) throw ni(), Error(X(418));
        for (; t;) Ya(e, t), t = Jo(t.nextSibling)
    }
    if (ei(e), 13 === e.tag) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(X(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("/$" === n) {
                        if (0 === t) {
                            Ga = Jo(e.nextSibling);
                            break e
                        }
                        t--
                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                }
                e = e.nextSibling
            }
            Ga = null
        }
    } else Ga = Ua ? Jo(e.stateNode.nextSibling) : null;
    return !0
}

function ni() {
    for (var e = Ga; e;) e = Jo(e.nextSibling)
}

function ri() {
    Ga = Ua = null, Xa = !1
}

function oi(e) {
    null === qa ? qa = [e] : qa.push(e)
}

var ai = ce.ReactCurrentBatchConfig;

function ii(e, t, n) {
    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
            if (n = n._owner) {
                if (1 !== n.tag) throw Error(X(309));
                var r = n.stateNode
            }
            if (!r) throw Error(X(147, e));
            var o = r, a = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = e => {
                var t = o.refs;
                null === e ? delete t[a] : t[a] = e
            })._stringRef = a, t)
        }
        if ("string" != typeof e) throw Error(X(284));
        if (!n._owner) throw Error(X(290, e))
    }
    return e
}

function li(e, t) {
    throw e = Object.prototype.toString.call(t), Error(X(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function si(e) {
    return (0, e._init)(e._payload)
}

function ci(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
        }
    }

    function n(n, r) {
        if (!e) return null;
        for (; null !== r;) t(n, r), r = r.sibling;
        return null
    }

    function r(e, t) {
        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
        return e
    }

    function o(e, t) {
        return (e = xu(e, t)).index = 0, e.sibling = null, e
    }

    function a(t, n, r) {
        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
    }

    function i(t) {
        return e && null === t.alternate && (t.flags |= 2), t
    }

    function l(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = ku(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
    }

    function s(e, t, n, r) {
        var a = n.type;
        return a === fe ? u(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === xe && si(a) === t.type) ? ((r = o(t, n.props)).ref = ii(e, t, n), r.return = e, r) : ((r = Cu(n.type, n.key, n.props, null, e.mode, r)).ref = ii(e, t, n), r.return = e, r)
    }

    function c(e, t, n, r) {
        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = $u(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
    }

    function u(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? ((t = Su(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
    }

    function d(e, t, n) {
        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = ku("" + t, e.mode, n)).return = e, t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case ue:
                    return (n = Cu(t.type, t.key, t.props, null, e.mode, n)).ref = ii(e, null, t), n.return = e, n;
                case de:
                    return (t = $u(t, e.mode, n)).return = e, t;
                case xe:
                    return d(e, (0, t._init)(t._payload), n)
            }
            if (Ve(t) || Ee(t)) return (t = Su(t, e.mode, n, null)).return = e, t;
            li(e, t)
        }
        return null
    }

    function f(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : l(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case ue:
                    return n.key === o ? s(e, t, n, r) : null;
                case de:
                    return n.key === o ? c(e, t, n, r) : null;
                case xe:
                    return f(e, t, (o = n._init)(n._payload), r)
            }
            if (Ve(n) || Ee(n)) return null !== o ? null : u(e, t, n, r, null);
            li(e, n)
        }
        return null
    }

    function p(e, t, n, r, o) {
        if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, o);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case ue:
                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case de:
                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case xe:
                    return p(e, t, n, (0, r._init)(r._payload), o)
            }
            if (Ve(r) || Ee(r)) return u(t, e = e.get(n) || null, r, o, null);
            li(t, r)
        }
        return null
    }

    return function l(s, c, u, m) {
        if ("object" == typeof u && null !== u && u.type === fe && null === u.key && (u = u.props.children), "object" == typeof u && null !== u) {
            switch (u.$$typeof) {
                case ue:
                    e:{
                        for (var g = u.key, h = c; null !== h;) {
                            if (h.key === g) {
                                if ((g = u.type) === fe) {
                                    if (7 === h.tag) {
                                        n(s, h.sibling), (c = o(h, u.props.children)).return = s, s = c;
                                        break e
                                    }
                                } else if (h.elementType === g || "object" == typeof g && null !== g && g.$$typeof === xe && si(g) === h.type) {
                                    n(s, h.sibling), (c = o(h, u.props)).ref = ii(s, h, u), c.return = s, s = c;
                                    break e
                                }
                                n(s, h);
                                break
                            }
                            t(s, h), h = h.sibling
                        }
                        u.type === fe ? ((c = Su(u.props.children, s.mode, m, u.key)).return = s, s = c) : ((m = Cu(u.type, u.key, u.props, null, s.mode, m)).ref = ii(s, c, u), m.return = s, s = m)
                    }
                    return i(s);
                case de:
                    e:{
                        for (h = u.key; null !== c;) {
                            if (c.key === h) {
                                if (4 === c.tag && c.stateNode.containerInfo === u.containerInfo && c.stateNode.implementation === u.implementation) {
                                    n(s, c.sibling), (c = o(c, u.children || [])).return = s, s = c;
                                    break e
                                }
                                n(s, c);
                                break
                            }
                            t(s, c), c = c.sibling
                        }
                        (c = $u(u, s.mode, m)).return = s, s = c
                    }
                    return i(s);
                case xe:
                    return l(s, c, (h = u._init)(u._payload), m)
            }
            if (Ve(u)) return ((o, i, l, s) => {
                for (var c = null, u = null, m = i, g = i = 0, h = null; null !== m && g < l.length; g++) {
                    m.index > g ? (h = m, m = null) : h = m.sibling;
                    var v = f(o, m, l[g], s);
                    if (null === v) {
                        null === m && (m = h);
                        break
                    }
                    e && m && null === v.alternate && t(o, m), i = a(v, i, g), null === u ? c = v : u.sibling = v, u = v, m = h
                }
                if (g === l.length) return n(o, m), Xa && Ba(o, g), c;
                if (null === m) {
                    for (; g < l.length; g++) null !== (m = d(o, l[g], s)) && (i = a(m, i, g), null === u ? c = m : u.sibling = m, u = m);
                    return Xa && Ba(o, g), c
                }
                for (m = r(o, m); g < l.length; g++) null !== (h = p(m, o, g, l[g], s)) && (e && null !== h.alternate && m.delete(null === h.key ? g : h.key), i = a(h, i, g), null === u ? c = h : u.sibling = h, u = h);
                return e && m.forEach((e => t(o, e))), Xa && Ba(o, g), c
            })(s, c, u, m);
            if (Ee(u)) return ((o, i, l, s) => {
                var c = Ee(l);
                if ("function" != typeof c) throw Error(X(150));
                if (null == (l = c.call(l))) throw Error(X(151));
                for (var u = c = null, m = i, g = i = 0, h = null, v = l.next(); null !== m && !v.done; g++, v = l.next()) {
                    m.index > g ? (h = m, m = null) : h = m.sibling;
                    var b = f(o, m, v.value, s);
                    if (null === b) {
                        null === m && (m = h);
                        break
                    }
                    e && m && null === b.alternate && t(o, m), i = a(b, i, g), null === u ? c = b : u.sibling = b, u = b, m = h
                }
                if (v.done) return n(o, m), Xa && Ba(o, g), c;
                if (null === m) {
                    for (; !v.done; g++, v = l.next()) null !== (v = d(o, v.value, s)) && (i = a(v, i, g), null === u ? c = v : u.sibling = v, u = v);
                    return Xa && Ba(o, g), c
                }
                for (m = r(o, m); !v.done; g++, v = l.next()) null !== (v = p(m, o, g, v.value, s)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), i = a(v, i, g), null === u ? c = v : u.sibling = v, u = v);
                return e && m.forEach((e => t(o, e))), Xa && Ba(o, g), c
            })(s, c, u, m);
            li(s, u)
        }
        return "string" == typeof u && "" !== u || "number" == typeof u ? (u = "" + u, null !== c && 6 === c.tag ? (n(s, c.sibling), (c = o(c, u)).return = s, s = c) : (n(s, c), (c = ku(u, s.mode, m)).return = s, s = c), i(s)) : n(s, c)
    }
}

var ui = ci(!0), di = ci(!1), fi = ma(null), pi = null, mi = null, gi = null;

function hi() {
    gi = mi = pi = null
}

function vi(e) {
    var t = fi.current;
    ga(fi), e._currentValue = t
}

function bi(e, t, n) {
    for (; null !== e;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function yi(e, t) {
    pi = e, gi = mi = null, null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & t) && (ls = !0), e.firstContext = null)
}

function wi(e) {
    var t = e._currentValue;
    if (gi !== e) if (e = {context: e, memoizedValue: t, next: null}, null === mi) {
        if (null === pi) throw Error(X(308));
        mi = e, pi.dependencies = {lanes: 0, firstContext: e}
    } else mi = mi.next = e;
    return t
}

var xi = null;

function Ci(e) {
    null === xi ? xi = [e] : xi.push(e)
}

function Si(e, t, n, r) {
    var o = t.interleaved;
    return null === o ? (n.next = n, Ci(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ei(e, r)
}

function Ei(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
    return 3 === n.tag ? n.stateNode : null
}

var ki = !1;

function $i(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function Oi(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Pi(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function Ni(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (r = r.shared, 2 & hc) {
        var o = r.pending;
        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ei(e, n)
    }
    return null === (o = r.interleaved) ? (t.next = t, Ci(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ei(e, n)
}

function Mi(e, t, n) {
    if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, sn(e, n)
    }
}

function Ri(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var o = null, a = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                null === a ? o = a = i : a = a.next = i, n = n.next
            } while (null !== n);
            null === a ? o = a = t : a = a.next = t
        } else o = a = t;
        return n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        }, void (e.updateQueue = n)
    }
    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ii(e, t, n, r) {
    var o = e.updateQueue;
    ki = !1;
    var a = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
    if (null !== l) {
        o.shared.pending = null;
        var s = l, c = s.next;
        s.next = null, null === i ? a = c : i.next = c, i = s;
        var u = e.alternate;
        null !== u && (l = (u = u.updateQueue).lastBaseUpdate) !== i && (null === l ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = s)
    }
    if (null !== a) {
        var d = o.baseState;
        for (i = 0, u = c = s = null, l = a; ;) {
            var f = l.lane, p = l.eventTime;
            if ((r & f) === f) {
                null !== u && (u = u.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e:{
                    var m = e, g = l;
                    switch (f = t, p = n, g.tag) {
                        case 1:
                            if ("function" == typeof (m = g.payload)) {
                                d = m.call(p, d, f);
                                break e
                            }
                            d = m;
                            break e;
                        case 3:
                            m.flags = -65537 & m.flags | 128;
                        case 0:
                            if (null == (f = "function" == typeof (m = g.payload) ? m.call(p, d, f) : m)) break e;
                            d = $e({}, d, f);
                            break e;
                        case 2:
                            ki = !0
                    }
                }
                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [l] : f.push(l))
            } else p = {
                eventTime: p,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, null === u ? (c = u = p, s = d) : u = u.next = p, i |= f;
            if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                l = (f = l).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
        }
        if (null === u && (s = d), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = u, null !== (t = o.shared.interleaved)) {
            o = t;
            do {
                i |= o.lane, o = o.next
            } while (o !== t)
        } else null === a && (o.shared.lanes = 0);
        Ec |= i, e.lanes = i, e.memoizedState = d
    }
}

function ji(e, t, n) {
    if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (null !== o) {
            if (r.callback = null, r = n, "function" != typeof o) throw Error(X(191, o));
            o.call(r)
        }
    }
}

var zi = {}, Ti = ma(zi), _i = ma(zi), Li = ma(zi);

function Fi(e) {
    if (e === zi) throw Error(X(174));
    return e
}

function Ai(e, t) {
    switch (ha(Li, t), ha(_i, e), ha(Ti, zi), e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qe(null, "");
            break;
        default:
            t = Qe(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
    }
    ga(Ti), ha(Ti, t)
}

function Hi() {
    ga(Ti), ga(_i), ga(Li)
}

function Di(e) {
    Fi(Li.current);
    var t = Fi(Ti.current), n = Qe(t, e.type);
    t !== n && (ha(_i, e), ha(Ti, n))
}

function Bi(e) {
    _i.current === e && (ga(Ti), ga(_i))
}

var Wi = ma(0);

function Vi(e) {
    for (var t = e; null !== t;) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (128 & t.flags) return t
        } else if (null !== t.child) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var Ki = [];

function Ui() {
    for (var e = 0; e < Ki.length; e++) Ki[e]._workInProgressVersionPrimary = null;
    Ki.length = 0
}

var Gi = ce.ReactCurrentDispatcher, Xi = ce.ReactCurrentBatchConfig, qi = 0, Yi = null, Qi = null, Zi = null, Ji = !1,
    el = !1, tl = 0, nl = 0;

function rl() {
    throw Error(X(321))
}

function ol(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Yr(e[n], t[n])) return !1;
    return !0
}

function al(e, t, n, r, o, a) {
    if (qi = a, Yi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gi.current = null === e || null === e.memoizedState ? Bl : Wl, e = n(r, o), el) {
        a = 0;
        do {
            if (el = !1, tl = 0, 25 <= a) throw Error(X(301));
            a += 1, Zi = Qi = null, t.updateQueue = null, Gi.current = Vl, e = n(r, o)
        } while (el)
    }
    if (Gi.current = Dl, t = null !== Qi && null !== Qi.next, qi = 0, Zi = Qi = Yi = null, Ji = !1, t) throw Error(X(300));
    return e
}

function il() {
    var e = 0 !== tl;
    return tl = 0, e
}

function ll() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return null === Zi ? Yi.memoizedState = Zi = e : Zi = Zi.next = e, Zi
}

function sl() {
    if (null === Qi) {
        var e = Yi.alternate;
        e = null !== e ? e.memoizedState : null
    } else e = Qi.next;
    var t = null === Zi ? Yi.memoizedState : Zi.next;
    if (null !== t) Zi = t, Qi = e; else {
        if (null === e) throw Error(X(310));
        e = {
            memoizedState: (Qi = e).memoizedState,
            baseState: Qi.baseState,
            baseQueue: Qi.baseQueue,
            queue: Qi.queue,
            next: null
        }, null === Zi ? Yi.memoizedState = Zi = e : Zi = Zi.next = e
    }
    return Zi
}

function cl(e, t) {
    return "function" == typeof t ? t(e) : t
}

function ul(e) {
    var t = sl(), n = t.queue;
    if (null === n) throw Error(X(311));
    n.lastRenderedReducer = e;
    var r = Qi, o = r.baseQueue, a = n.pending;
    if (null !== a) {
        if (null !== o) {
            var i = o.next;
            o.next = a.next, a.next = i
        }
        r.baseQueue = o = a, n.pending = null
    }
    if (null !== o) {
        a = o.next, r = r.baseState;
        var l = i = null, s = null, c = a;
        do {
            var u = c.lane;
            if ((qi & u) === u) null !== s && (s = s.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                null === s ? (l = s = d, i = r) : s = s.next = d, Yi.lanes |= u, Ec |= u
            }
            c = c.next
        } while (null !== c && c !== a);
        null === s ? i = r : s.next = l, Yr(r, t.memoizedState) || (ls = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (null !== (e = n.interleaved)) {
        o = e;
        do {
            a = o.lane, Yi.lanes |= a, Ec |= a, o = o.next
        } while (o !== e)
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function dl(e) {
    var t = sl(), n = t.queue;
    if (null === n) throw Error(X(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, a = t.memoizedState;
    if (null !== o) {
        n.pending = null;
        var i = o = o.next;
        do {
            a = e(a, i.action), i = i.next
        } while (i !== o);
        Yr(a, t.memoizedState) || (ls = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
    }
    return [a, r]
}

function fl() {
}

function pl(e, t) {
    var n = Yi, r = sl(), o = t(), a = !Yr(r.memoizedState, o);
    if (a && (r.memoizedState = o, ls = !0), r = r.queue, kl(hl.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== Zi && 1 & Zi.memoizedState.tag) {
        if (n.flags |= 2048, wl(9, gl.bind(null, n, r, o, t), void 0, null), null === vc) throw Error(X(349));
        30 & qi || ml(n, t, o)
    }
    return o
}

function ml(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, null === (t = Yi.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, Yi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
}

function gl(e, t, n, r) {
    t.value = n, t.getSnapshot = r, vl(t) && bl(e)
}

function hl(e, t, n) {
    return n((() => {
        vl(t) && bl(e)
    }))
}

function vl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Yr(e, n)
    } catch (r) {
        return !0
    }
}

function bl(e) {
    var t = Ei(e, 1);
    null !== t && Vc(t, e, 1, -1)
}

function yl(e) {
    var t = ll();
    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cl,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ll.bind(null, Yi, e), [t.memoizedState, e]
}

function wl(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, null === (t = Yi.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, Yi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
}

function xl() {
    return sl().memoizedState
}

function Cl(e, t, n, r) {
    var o = ll();
    Yi.flags |= e, o.memoizedState = wl(1 | t, n, void 0, void 0 === r ? null : r)
}

function Sl(e, t, n, r) {
    var o = sl();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== Qi) {
        var i = Qi.memoizedState;
        if (a = i.destroy, null !== r && ol(r, i.deps)) return void (o.memoizedState = wl(t, n, a, r))
    }
    Yi.flags |= e, o.memoizedState = wl(1 | t, n, a, r)
}

function El(e, t) {
    return Cl(8390656, 8, e, t)
}

function kl(e, t) {
    return Sl(2048, 8, e, t)
}

function $l(e, t) {
    return Sl(4, 2, e, t)
}

function Ol(e, t) {
    return Sl(4, 4, e, t)
}

function Pl(e, t) {
    return "function" == typeof t ? (e = e(), t(e), () => {
        t(null)
    }) : null != t ? (e = e(), t.current = e, () => {
        t.current = null
    }) : void 0
}

function Nl(e, t, n) {
    return n = null != n ? n.concat([e]) : null, Sl(4, 4, Pl.bind(null, t, e), n)
}

function Ml() {
}

function Rl(e, t) {
    var n = sl();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && ol(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Il(e, t) {
    var n = sl();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && ol(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function jl(e, t, n) {
    return 21 & qi ? (Yr(n, t) || (n = on(), Yi.lanes |= n, Ec |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ls = !0), e.memoizedState = n)
}

function zl(e, t) {
    var n = cn;
    cn = 0 !== n && 4 > n ? n : 4, e(!0);
    var r = Xi.transition;
    Xi.transition = {};
    try {
        e(!1), t()
    } finally {
        cn = n, Xi.transition = r
    }
}

function Tl() {
    return sl().memoizedState
}

function _l(e, t, n) {
    var r = Wc(e);
    n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, Fl(e) ? Al(t, n) : null !== (n = Si(e, t, n, r)) && (Vc(n, e, r, Bc()), Hl(n, t, r))
}

function Ll(e, t, n) {
    var r = Wc(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (Fl(e)) Al(t, o); else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
            var i = t.lastRenderedState, l = a(i, n);
            if (o.hasEagerState = !0, o.eagerState = l, Yr(l, i)) {
                var s = t.interleaved;
                return null === s ? (o.next = o, Ci(t)) : (o.next = s.next, s.next = o), void (t.interleaved = o)
            }
        } catch (c) {
        }
        null !== (n = Si(e, t, o, r)) && (Vc(n, e, r, o = Bc()), Hl(n, t, r))
    }
}

function Fl(e) {
    var t = e.alternate;
    return e === Yi || null !== t && t === Yi
}

function Al(e, t) {
    el = Ji = !0;
    var n = e.pending;
    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Hl(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, sn(e, n)
    }
}

var Dl = {
    readContext: wi,
    useCallback: rl,
    useContext: rl,
    useEffect: rl,
    useImperativeHandle: rl,
    useInsertionEffect: rl,
    useLayoutEffect: rl,
    useMemo: rl,
    useReducer: rl,
    useRef: rl,
    useState: rl,
    useDebugValue: rl,
    useDeferredValue: rl,
    useTransition: rl,
    useMutableSource: rl,
    useSyncExternalStore: rl,
    useId: rl,
    unstable_isNewReconciler: !1
}, Bl = {
    readContext: wi,
    useCallback: (e, t) => (ll().memoizedState = [e, void 0 === t ? null : t], e),
    useContext: wi,
    useEffect: El,
    useImperativeHandle: (e, t, n) => (n = null != n ? n.concat([e]) : null, Cl(4194308, 4, Pl.bind(null, t, e), n)),
    useLayoutEffect: (e, t) => Cl(4194308, 4, e, t),
    useInsertionEffect: (e, t) => Cl(4, 2, e, t),
    useMemo(e, t) {
        var n = ll();
        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer(e, t, n) {
        var r = ll();
        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = _l.bind(null, Yi, e), [r.memoizedState, e]
    },
    useRef: e => (e = {current: e}, ll().memoizedState = e),
    useState: yl,
    useDebugValue: Ml,
    useDeferredValue: e => ll().memoizedState = e,
    useTransition() {
        var e = yl(!1), t = e[0];
        return e = zl.bind(null, e[1]), ll().memoizedState = e, [t, e]
    },
    useMutableSource() {
    },
    useSyncExternalStore(e, t, n) {
        var r = Yi, o = ll();
        if (Xa) {
            if (void 0 === n) throw Error(X(407));
            n = n()
        } else {
            if (n = t(), null === vc) throw Error(X(349));
            30 & qi || ml(r, t, n)
        }
        o.memoizedState = n;
        var a = {value: n, getSnapshot: t};
        return o.queue = a, El(hl.bind(null, r, a, e), [e]), r.flags |= 2048, wl(9, gl.bind(null, r, a, n, t), void 0, null), n
    },
    useId() {
        var e = ll(), t = vc.identifierPrefix;
        if (Xa) {
            var n = Da;
            t = ":" + t + "R" + (n = (Ha & ~(1 << 32 - qt(Ha) - 1)).toString(32) + n), 0 < (n = tl++) && (t += "H" + n.toString(32)), t += ":"
        } else t = ":" + t + "r" + (n = nl++).toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}, Wl = {
    readContext: wi,
    useCallback: Rl,
    useContext: wi,
    useEffect: kl,
    useImperativeHandle: Nl,
    useInsertionEffect: $l,
    useLayoutEffect: Ol,
    useMemo: Il,
    useReducer: ul,
    useRef: xl,
    useState: () => ul(cl),
    useDebugValue: Ml,
    useDeferredValue: e => jl(sl(), Qi.memoizedState, e),
    useTransition: () => [ul(cl)[0], sl().memoizedState],
    useMutableSource: fl,
    useSyncExternalStore: pl,
    useId: Tl,
    unstable_isNewReconciler: !1
}, Vl = {
    readContext: wi,
    useCallback: Rl,
    useContext: wi,
    useEffect: kl,
    useImperativeHandle: Nl,
    useInsertionEffect: $l,
    useLayoutEffect: Ol,
    useMemo: Il,
    useReducer: dl,
    useRef: xl,
    useState: () => dl(cl),
    useDebugValue: Ml,
    useDeferredValue(e) {
        var t = sl();
        return null === Qi ? t.memoizedState = e : jl(t, Qi.memoizedState, e)
    },
    useTransition: () => [dl(cl)[0], sl().memoizedState],
    useMutableSource: fl,
    useSyncExternalStore: pl,
    useId: Tl,
    unstable_isNewReconciler: !1
};

function Kl(e, t) {
    if (e && e.defaultProps) {
        for (var n in t = $e({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    return t
}

function Ul(e, t, n, r) {
    n = null == (n = n(r, t = e.memoizedState)) ? t : $e({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
}

var Gl = {
    isMounted: e => !!(e = e._reactInternals) && Rt(e) === e, enqueueSetState(e, t, n) {
        e = e._reactInternals;
        var r = Bc(), o = Wc(e), a = Pi(r, o);
        a.payload = t, null != n && (a.callback = n), null !== (t = Ni(e, a, o)) && (Vc(t, e, o, r), Mi(t, e, o))
    }, enqueueReplaceState(e, t, n) {
        e = e._reactInternals;
        var r = Bc(), o = Wc(e), a = Pi(r, o);
        a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Ni(e, a, o)) && (Vc(t, e, o, r), Mi(t, e, o))
    }, enqueueForceUpdate(e, t) {
        e = e._reactInternals;
        var n = Bc(), r = Wc(e), o = Pi(n, r);
        o.tag = 2, null != t && (o.callback = t), null !== (t = Ni(e, o, r)) && (Vc(t, e, r, n), Mi(t, e, r))
    }
};

function Xl(e, t, n, r, o, a, i) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !(t.prototype && t.prototype.isPureReactComponent && Qr(n, r) && Qr(o, a))
}

function ql(e, t, n) {
    var r = !1, o = va, a = t.contextType;
    return "object" == typeof a && null !== a ? a = wi(a) : (o = Ca(t) ? wa : ba.current, a = (r = null != (r = t.contextTypes)) ? xa(e, o) : va), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Gl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function Yl(e, t, n, r) {
    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Gl.enqueueReplaceState(t, t.state, null)
}

function Ql(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, $i(e);
    var a = t.contextType;
    "object" == typeof a && null !== a ? o.context = wi(a) : (a = Ca(t) ? wa : ba.current, o.context = xa(e, a)), o.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (Ul(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Gl.enqueueReplaceState(o, o.state, null), Ii(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
}

function Zl(e, t) {
    try {
        var n = "", r = t;
        do {
            n += Me(r), r = r.return
        } while (r);
        var o = n
    } catch (a) {
        o = "\nError generating stack: " + a.message + "\n" + a.stack
    }
    return {value: e, source: t, stack: o, digest: null}
}

function Jl(e, t, n) {
    return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null}
}

var es = "function" == typeof WeakMap ? WeakMap : Map;

function ts(e, t, n) {
    (n = Pi(-1, n)).tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = () => {
        Ic || (Ic = !0, jc = r)
    }, n
}

function ns(e, t, n) {
    (n = Pi(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
        var o = t.value;
        n.payload = () => r(o), n.callback = () => {
        }
    }
    var a = e.stateNode;
    return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
        "function" != typeof r && (null === zc ? zc = new Set([this]) : zc.add(this));
        var e = t.stack;
        this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
    }), n
}

function rs(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new es;
        var o = new Set;
        r.set(t, o)
    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = pu.bind(null, e, t, n), t.then(e, e))
}

function os(e) {
    do {
        var t;
        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
        e = e.return
    } while (null !== e);
    return null
}

function as(e, t, n, r, o) {
    return 1 & e.mode ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Pi(-1, 1)).tag = 2, Ni(n, t, 1))), n.lanes |= 1), e)
}

var is = ce.ReactCurrentOwner, ls = !1;

function ss(e, t, n, r) {
    t.child = null === e ? di(t, null, n, r) : ui(t, e.child, n, r)
}

function cs(e, t, n, r, o) {
    n = n.render;
    var a = t.ref;
    return yi(t, o), r = al(e, t, n, r, a, o), n = il(), null === e || ls ? (Xa && n && Va(t), t.flags |= 1, ss(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Is(e, t, o))
}

function us(e, t, n, r, o) {
    if (null === e) {
        var a = n.type;
        return "function" != typeof a || wu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Cu(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, ds(e, t, a, r, o))
    }
    if (a = e.child, !(e.lanes & o)) {
        var i = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Qr)(i, r) && e.ref === t.ref) return Is(e, t, o)
    }
    return t.flags |= 1, (e = xu(a, r)).ref = t.ref, e.return = t, t.child = e
}

function ds(e, t, n, r, o) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (Qr(a, r) && e.ref === t.ref) {
            if (ls = !1, t.pendingProps = r = a, !(e.lanes & o)) return t.lanes = e.lanes, Is(e, t, o);
            131072 & e.flags && (ls = !0)
        }
    }
    return ms(e, t, n, r, o)
}

function fs(e, t, n) {
    var r = t.pendingProps, o = r.children, a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode) if (1 & t.mode) {
        if (!(1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, ha(xc, wc), wc |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = null !== a ? a.baseLanes : n, ha(xc, wc), wc |= r
    } else t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, ha(xc, wc), wc |= n; else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ha(xc, wc), wc |= r;
    return ss(e, t, o, n), t.child
}

function ps(e, t) {
    var n = t.ref;
    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ms(e, t, n, r, o) {
    var a = Ca(n) ? wa : ba.current;
    return a = xa(t, a), yi(t, o), n = al(e, t, n, r, a, o), r = il(), null === e || ls ? (Xa && r && Va(t), t.flags |= 1, ss(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Is(e, t, o))
}

function gs(e, t, n, r, o) {
    if (Ca(n)) {
        var a = !0;
        $a(t)
    } else a = !1;
    if (yi(t, o), null === t.stateNode) Rs(e, t), ql(t, n, r), Ql(t, n, r, o), r = !0; else if (null === e) {
        var i = t.stateNode, l = t.memoizedProps;
        i.props = l;
        var s = i.context, c = n.contextType;
        c = "object" == typeof c && null !== c ? wi(c) : xa(t, c = Ca(n) ? wa : ba.current);
        var u = n.getDerivedStateFromProps,
            d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
        d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== c) && Yl(t, i, r, c), ki = !1;
        var f = t.memoizedState;
        i.state = f, Ii(t, r, i, o), s = t.memoizedState, l !== r || f !== s || ya.current || ki ? ("function" == typeof u && (Ul(t, n, u, r), s = t.memoizedState), (l = ki || Xl(t, n, l, r, f, s, c)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Oi(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Kl(t.type, l), i.props = c, d = t.pendingProps, f = i.context, s = "object" == typeof (s = n.contextType) && null !== s ? wi(s) : xa(t, s = Ca(n) ? wa : ba.current);
        var p = n.getDerivedStateFromProps;
        (u = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== d || f !== s) && Yl(t, i, r, s), ki = !1, f = t.memoizedState, i.state = f, Ii(t, r, i, o);
        var m = t.memoizedState;
        l !== d || f !== m || ya.current || ki ? ("function" == typeof p && (Ul(t, n, p, r), m = t.memoizedState), (c = ki || Xl(t, n, c, r, f, m, s) || !1) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, m, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = s, r = c) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return hs(e, t, n, r, a, o)
}

function hs(e, t, n, r, o, a) {
    ps(e, t);
    var i = !!(128 & t.flags);
    if (!r && !i) return o && Oa(t, n, !1), Is(e, t, a);
    r = t.stateNode, is.current = t;
    var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return t.flags |= 1, null !== e && i ? (t.child = ui(t, e.child, null, a), t.child = ui(t, null, l, a)) : ss(e, t, l, a), t.memoizedState = r.state, o && Oa(t, n, !0), t.child
}

function vs(e) {
    var t = e.stateNode;
    t.pendingContext ? Ea(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ea(0, t.context, !1), Ai(e, t.containerInfo)
}

function bs(e, t, n, r, o) {
    return ri(), oi(o), t.flags |= 256, ss(e, t, n, r), t.child
}

var ys, ws, xs, Cs, Ss = {dehydrated: null, treeContext: null, retryLane: 0};

function Es(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function ks(e, t, n) {
    var r, o = t.pendingProps, a = Wi.current, i = !1, l = !!(128 & t.flags);
    if ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & a)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), ha(Wi, 1 & a), null === e) return Ja(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = o.children, e = o.fallback, i ? (o = t.mode, i = t.child, l = {
        mode: "hidden",
        children: l
    }, 1 & o || null === i ? i = Eu(l, o, 0, null) : (i.childLanes = 0, i.pendingProps = l), e = Su(e, o, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Es(n), t.memoizedState = Ss, e) : $s(t, l));
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return ((e, t, n, r, o, a, i) => {
        if (n) return 256 & t.flags ? (t.flags &= -257, Os(e, t, i, r = Jl(Error(X(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, o = t.mode, r = Eu({
            mode: "visible",
            children: r.children
        }, o, 0, null), (a = Su(a, o, i, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 1 & t.mode && ui(t, e.child, null, i), t.child.memoizedState = Es(i), t.memoizedState = Ss, a);
        if (!(1 & t.mode)) return Os(e, t, i, null);
        if ("$!" === o.data) {
            if (r = o.nextSibling && o.nextSibling.dataset) var l = r.dgst;
            return r = l, Os(e, t, i, r = Jl(a = Error(X(419)), r, void 0))
        }
        if (l = !!(i & e.childLanes), ls || l) {
            if (null !== (r = vc)) {
                switch (i & -i) {
                    case 4:
                        o = 2;
                        break;
                    case 16:
                        o = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        o = 32;
                        break;
                    case 536870912:
                        o = 268435456;
                        break;
                    default:
                        o = 0
                }
                0 !== (o = o & (r.suspendedLanes | i) ? 0 : o) && o !== a.retryLane && (a.retryLane = o, Ei(e, o), Vc(r, e, o, -1))
            }
            return ru(), Os(e, t, i, r = Jl(Error(X(421))))
        }
        return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = gu.bind(null, e), o._reactRetry = t, null) : (e = a.treeContext, Ga = Jo(o.nextSibling), Ua = t, Xa = !0, qa = null, null !== e && (La[Fa++] = Ha, La[Fa++] = Da, La[Fa++] = Aa, Ha = e.id, Da = e.overflow, Aa = t), (t = $s(t, r.children)).flags |= 4096, t)
    })(e, t, l, o, r, a, n);
    if (i) {
        i = o.fallback, l = t.mode, r = (a = e.child).sibling;
        var s = {mode: "hidden", children: o.children};
        return 1 & l || t.child === a ? (o = xu(a, s)).subtreeFlags = 14680064 & a.subtreeFlags : ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null), null !== r ? i = xu(r, i) : (i = Su(i, l, n, null)).flags |= 2, i.return = t, o.return = t, o.sibling = i, t.child = o, o = i, i = t.child, l = null === (l = e.child.memoizedState) ? Es(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ss, o
    }
    return e = (i = e.child).sibling, o = xu(i, {
        mode: "visible",
        children: o.children
    }), !(1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
}

function $s(e, t) {
    return (t = Eu({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
}

function Os(e, t, n, r) {
    return null !== r && oi(r), ui(t, e.child, null, n), (e = $s(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
}

function Ps(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), bi(e.return, t, n)
}

function Ns(e, t, n, r, o) {
    var a = e.memoizedState;
    null === a ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
}

function Ms(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, a = r.tail;
    if (ss(e, t, r.children, n), 2 & (r = Wi.current)) r = 1 & r | 2, t.flags |= 128; else {
        if (null !== e && 128 & e.flags) e:for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Ps(e, n, t); else if (19 === e.tag) Ps(e, n, t); else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ha(Wi, r), 1 & t.mode) switch (o) {
        case"forwards":
            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === Vi(e) && (o = n), n = n.sibling;
            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ns(t, !1, o, n, a);
            break;
        case"backwards":
            for (n = null, o = t.child, t.child = null; null !== o;) {
                if (null !== (e = o.alternate) && null === Vi(e)) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Ns(t, !0, n, null, a);
            break;
        case"together":
            Ns(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    } else t.memoizedState = null;
    return t.child
}

function Rs(e, t) {
    !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Is(e, t, n) {
    if (null !== e && (t.dependencies = e.dependencies), Ec |= t.lanes, !(n & t.childLanes)) return null;
    if (null !== e && t.child !== e.child) throw Error(X(153));
    if (null !== t.child) {
        for (n = xu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = xu(e, e.pendingProps)).return = t;
        n.sibling = null
    }
    return t.child
}

function js(e, t) {
    if (!Xa) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function zs(e) {
    var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling; else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ts(e, t, n) {
    var r = t.pendingProps;
    switch (Ka(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return zs(t), null;
        case 1:
        case 17:
            return Ca(t.type) && Sa(), zs(t), null;
        case 3:
            return r = t.stateNode, Hi(), ga(ya), ga(ba), Ui(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (ti(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== qa && (Xc(qa), qa = null))), ws(e, t), zs(t), null;
        case 5:
            Bi(t);
            var o = Fi(Li.current);
            if (n = t.type, null !== e && null != t.stateNode) xs(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (null === t.stateNode) throw Error(X(166));
                    return zs(t), null
                }
                if (e = Fi(Ti.current), ti(t)) {
                    r = t.stateNode, n = t.type;
                    var a = t.memoizedProps;
                    switch (r[na] = t, r[ra] = a, e = !!(1 & t.mode), n) {
                        case"dialog":
                            No("cancel", r), No("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            No("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (o = 0; o < ko.length; o++) No(ko[o], r);
                            break;
                        case"source":
                            No("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            No("error", r), No("load", r);
                            break;
                        case"details":
                            No("toggle", r);
                            break;
                        case"input":
                            Ae(r, a), No("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!a.multiple}, No("invalid", r);
                            break;
                        case"textarea":
                            Ge(r, a), No("invalid", r)
                    }
                    for (var i in lt(n, a), o = null, a) if (a.hasOwnProperty(i)) {
                        var l = a[i];
                        "children" === i ? "string" == typeof l ? r.textContent !== l && (!0 !== a.suppressHydrationWarning && Bo(r.textContent, l, e), o = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (!0 !== a.suppressHydrationWarning && Bo(r.textContent, l, e), o = ["children", "" + l]) : Y.hasOwnProperty(i) && null != l && "onScroll" === i && No("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            Te(r), Be(r, a, !0);
                            break;
                        case"textarea":
                            Te(r), qe(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            "function" == typeof a.onClick && (r.onclick = Wo)
                    }
                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                } else {
                    i = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = Ye(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = i.createElement(n, {is: r.is}) : (e = i.createElement(n), "select" === n && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[na] = t, e[ra] = r, ys(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (i = st(n, r), n) {
                            case"dialog":
                                No("cancel", e), No("close", e), o = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                No("load", e), o = r;
                                break;
                            case"video":
                            case"audio":
                                for (o = 0; o < ko.length; o++) No(ko[o], e);
                                o = r;
                                break;
                            case"source":
                                No("error", e), o = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                No("error", e), No("load", e), o = r;
                                break;
                            case"details":
                                No("toggle", e), o = r;
                                break;
                            case"input":
                                Ae(e, r), o = Fe(e, r), No("invalid", e);
                                break;
                            case"option":
                            default:
                                o = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, o = $e({}, r, {value: void 0}), No("invalid", e);
                                break;
                            case"textarea":
                                Ge(e, r), o = Ue(e, r), No("invalid", e)
                        }
                        for (a in lt(n, o), l = o) if (l.hasOwnProperty(a)) {
                            var s = l[a];
                            "style" === a ? at(e, s) : "dangerouslySetInnerHTML" === a ? null != (s = s ? s.__html : void 0) && et(e, s) : "children" === a ? "string" == typeof s ? ("textarea" !== n || "" !== s) && tt(e, s) : "number" == typeof s && tt(e, "" + s) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (Y.hasOwnProperty(a) ? null != s && "onScroll" === a && No("scroll", e) : null != s && se(e, a, s, i))
                        }
                        switch (n) {
                            case"input":
                                Te(e), Be(e, r, !1);
                                break;
                            case"textarea":
                                Te(e), qe(e);
                                break;
                            case"option":
                                null != r.value && e.setAttribute("value", "" + je(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, null != (a = r.value) ? Ke(e, !!r.multiple, a, !1) : null != r.defaultValue && Ke(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof o.onClick && (e.onclick = Wo)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
            }
            return zs(t), null;
        case 6:
            if (e && null != t.stateNode) Cs(e, t, e.memoizedProps, r); else {
                if ("string" != typeof r && null === t.stateNode) throw Error(X(166));
                if (n = Fi(Li.current), Fi(Ti.current), ti(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[na] = t, (a = r.nodeValue !== n) && null !== (e = Ua)) switch (e.tag) {
                        case 3:
                            Bo(r.nodeValue, n, !!(1 & e.mode));
                            break;
                        case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning && Bo(r.nodeValue, n, !!(1 & e.mode))
                    }
                    a && (t.flags |= 4)
                } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[na] = t, t.stateNode = r
            }
            return zs(t), null;
        case 13:
            if (ga(Wi), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                if (Xa && null !== Ga && 1 & t.mode && !(128 & t.flags)) ni(), ri(), t.flags |= 98560, a = !1; else if (a = ti(t), null !== r && null !== r.dehydrated) {
                    if (null === e) {
                        if (!a) throw Error(X(318));
                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(X(317));
                        a[na] = t
                    } else ri(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    zs(t), a = !1
                } else null !== qa && (Xc(qa), qa = null), a = !0;
                if (!a) return 65536 & t.flags ? t : null
            }
            return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & Wi.current ? 0 === Cc && (Cc = 3) : ru())), null !== t.updateQueue && (t.flags |= 4), zs(t), null);
        case 4:
            return Hi(), ws(e, t), null === e && Io(t.stateNode.containerInfo), zs(t), null;
        case 10:
            return vi(t.type._context), zs(t), null;
        case 19:
            if (ga(Wi), null === (a = t.memoizedState)) return zs(t), null;
            if (r = !!(128 & t.flags), null === (i = a.rendering)) if (r) js(a, !1); else {
                if (0 !== Cc || null !== e && 128 & e.flags) for (e = t.child; null !== e;) {
                    if (null !== (i = Vi(e))) {
                        for (t.flags |= 128, js(a, !1), null !== (r = i.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (i = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = null === e ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return ha(Wi, 1 & Wi.current | 2), t.child
                    }
                    e = e.sibling
                }
                null !== a.tail && Ht() > Mc && (t.flags |= 128, r = !0, js(a, !1), t.lanes = 4194304)
            } else {
                if (!r) if (null !== (e = Vi(i))) {
                    if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), js(a, !0), null === a.tail && "hidden" === a.tailMode && !i.alternate && !Xa) return zs(t), null
                } else 2 * Ht() - a.renderingStartTime > Mc && 1073741824 !== n && (t.flags |= 128, r = !0, js(a, !1), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (n = a.last) ? n.sibling = i : t.child = i, a.last = i)
            }
            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ht(), t.sibling = null, n = Wi.current, ha(Wi, r ? 1 & n | 2 : 1 & n), t) : (zs(t), null);
        case 22:
        case 23:
            return Jc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? !!(1073741824 & wc) && (zs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : zs(t), null;
        case 24:
        case 25:
            return null
    }
    throw Error(X(156, t.tag))
}

function _s(e, t) {
    switch (Ka(t), t.tag) {
        case 1:
            return Ca(t.type) && Sa(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return Hi(), ga(ya), ga(ba), Ui(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return Bi(t), null;
        case 13:
            if (ga(Wi), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                if (null === t.alternate) throw Error(X(340));
                ri()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return ga(Wi), null;
        case 4:
            return Hi(), null;
        case 10:
            return vi(t.type._context), null;
        case 22:
        case 23:
            return Jc(), null;
        default:
            return null
    }
}

ys = (e, t) => {
    for (var n = t.child; null !== n;) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
}, ws = () => {
}, xs = (e, t, n, r) => {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Fi(Ti.current);
        var a, i = null;
        switch (n) {
            case"input":
                o = Fe(e, o), r = Fe(e, r), i = [];
                break;
            case"select":
                o = $e({}, o, {value: void 0}), r = $e({}, r, {value: void 0}), i = [];
                break;
            case"textarea":
                o = Ue(e, o), r = Ue(e, r), i = [];
                break;
            default:
                "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Wo)
        }
        for (c in lt(n, r), n = null, o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c]) if ("style" === c) {
            var l = o[c];
            for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
        } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (Y.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (l = null != o ? o[c] : void 0, r.hasOwnProperty(c) && s !== l && (null != s || null != l)) if ("style" === c) if (l) {
                for (a in l) !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a])
            } else n || (i || (i = []), i.push(c, n)), n = s; else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, null != s && l !== s && (i = i || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (Y.hasOwnProperty(c) ? (null != s && "onScroll" === c && No("scroll", e), i || l === s || (i = [])) : (i = i || []).push(c, s))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}, Cs = (e, t, n, r) => {
    n !== r && (t.flags |= 4)
};
var Ls = !1, Fs = !1, As = "function" == typeof WeakSet ? WeakSet : Set, Hs = null;

function Ds(e, t) {
    var n = e.ref;
    if (null !== n) if ("function" == typeof n) try {
        n(null)
    } catch (r) {
        fu(e, t, r)
    } else n.current = null
}

function Bs(e, t, n) {
    try {
        n()
    } catch (r) {
        fu(e, t, r)
    }
}

var Ws = !1;

function Vs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var a = o.destroy;
                o.destroy = void 0, void 0 !== a && Bs(t, n, a)
            }
            o = o.next
        } while (o !== r)
    }
}

function Ks(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Us(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
    }
}

function Gs(e) {
    var t = e.alternate;
    null !== t && (e.alternate = null, Gs(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[na], delete t[ra], delete t[aa], delete t[ia], delete t[la]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Xs(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag
}

function qs(e) {
    e:for (; ;) {
        for (; null === e.sibling;) {
            if (null === e.return || Xs(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function Ys(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Wo)); else if (4 !== r && null !== (e = e.child)) for (Ys(e, t, n), e = e.sibling; null !== e;) Ys(e, t, n), e = e.sibling
}

function Qs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (Qs(e, t, n), e = e.sibling; null !== e;) Qs(e, t, n), e = e.sibling
}

var Zs = null, Js = !1;

function ec(e, t, n) {
    for (n = n.child; null !== n;) tc(e, t, n), n = n.sibling
}

function tc(e, t, n) {
    if (Xt && "function" == typeof Xt.onCommitFiberUnmount) try {
        Xt.onCommitFiberUnmount(Gt, n)
    } catch (l) {
    }
    switch (n.tag) {
        case 5:
            Fs || Ds(n, t);
        case 6:
            var r = Zs, o = Js;
            Zs = null, ec(e, t, n), Js = o, null !== (Zs = r) && (Js ? (e = Zs, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : Zs.removeChild(n.stateNode));
            break;
        case 18:
            null !== Zs && (Js ? (e = Zs, n = n.stateNode, 8 === e.nodeType ? Zo(e.parentNode, n) : 1 === e.nodeType && Zo(e, n), In(e)) : Zo(Zs, n.stateNode));
            break;
        case 4:
            r = Zs, o = Js, Zs = n.stateNode.containerInfo, Js = !0, ec(e, t, n), Zs = r, Js = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Fs && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                    var a = o, i = a.destroy;
                    a = a.tag, void 0 !== i && (2 & a || 4 & a) && Bs(n, t, i), o = o.next
                } while (o !== r)
            }
            ec(e, t, n);
            break;
        case 1:
            if (!Fs && (Ds(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                fu(n, t, l)
            }
            ec(e, t, n);
            break;
        case 21:
            ec(e, t, n);
            break;
        case 22:
            1 & n.mode ? (Fs = (r = Fs) || null !== n.memoizedState, ec(e, t, n), Fs = r) : ec(e, t, n);
            break;
        default:
            ec(e, t, n)
    }
}

function nc(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new As), t.forEach((t => {
            var r = hu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
        }))
    }
}

function rc(e, t) {
    var n = t.deletions;
    if (null !== n) for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var a = e, i = t, l = i;
            e:for (; null !== l;) {
                switch (l.tag) {
                    case 5:
                        Zs = l.stateNode, Js = !1;
                        break e;
                    case 3:
                    case 4:
                        Zs = l.stateNode.containerInfo, Js = !0;
                        break e
                }
                l = l.return
            }
            if (null === Zs) throw Error(X(160));
            tc(a, i, o), Zs = null, Js = !1;
            var s = o.alternate;
            null !== s && (s.return = null), o.return = null
        } catch (c) {
            fu(o, t, c)
        }
    }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) oc(t, e), t = t.sibling
}

function oc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (rc(t, e), ac(e), 4 & r) {
                try {
                    Vs(3, e, e.return), Ks(3, e)
                } catch (g) {
                    fu(e, e.return, g)
                }
                try {
                    Vs(5, e, e.return)
                } catch (g) {
                    fu(e, e.return, g)
                }
            }
            break;
        case 1:
            rc(t, e), ac(e), 512 & r && null !== n && Ds(n, n.return);
            break;
        case 5:
            if (rc(t, e), ac(e), 512 & r && null !== n && Ds(n, n.return), 32 & e.flags) {
                var o = e.stateNode;
                try {
                    tt(o, "")
                } catch (g) {
                    fu(e, e.return, g)
                }
            }
            if (4 & r && null != (o = e.stateNode)) {
                var a = e.memoizedProps, i = null !== n ? n.memoizedProps : a, l = e.type, s = e.updateQueue;
                if (e.updateQueue = null, null !== s) try {
                    "input" === l && "radio" === a.type && null != a.name && He(o, a), st(l, i);
                    var c = st(l, a);
                    for (i = 0; i < s.length; i += 2) {
                        var u = s[i], d = s[i + 1];
                        "style" === u ? at(o, d) : "dangerouslySetInnerHTML" === u ? et(o, d) : "children" === u ? tt(o, d) : se(o, u, d, c)
                    }
                    switch (l) {
                        case"input":
                            De(o, a);
                            break;
                        case"textarea":
                            Xe(o, a);
                            break;
                        case"select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!a.multiple;
                            var p = a.value;
                            null != p ? Ke(o, !!a.multiple, p, !1) : f !== !!a.multiple && (null != a.defaultValue ? Ke(o, !!a.multiple, a.defaultValue, !0) : Ke(o, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    o[ra] = a
                } catch (g) {
                    fu(e, e.return, g)
                }
            }
            break;
        case 6:
            if (rc(t, e), ac(e), 4 & r) {
                if (null === e.stateNode) throw Error(X(162));
                o = e.stateNode, a = e.memoizedProps;
                try {
                    o.nodeValue = a
                } catch (g) {
                    fu(e, e.return, g)
                }
            }
            break;
        case 3:
            if (rc(t, e), ac(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                In(t.containerInfo)
            } catch (g) {
                fu(e, e.return, g)
            }
            break;
        case 4:
        default:
            rc(t, e), ac(e);
            break;
        case 13:
            rc(t, e), ac(e), 8192 & (o = e.child).flags && (a = null !== o.memoizedState, o.stateNode.isHidden = a, !a || null !== o.alternate && null !== o.alternate.memoizedState || (Nc = Ht())), 4 & r && nc(e);
            break;
        case 22:
            if (u = null !== n && null !== n.memoizedState, 1 & e.mode ? (Fs = (c = Fs) || u, rc(t, e), Fs = c) : rc(t, e), ac(e), 8192 & r) {
                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !u && 1 & e.mode) for (Hs = e, u = e.child; null !== u;) {
                    for (d = Hs = u; null !== Hs;) {
                        switch (p = (f = Hs).child, f.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Vs(4, f, f.return);
                                break;
                            case 1:
                                Ds(f, f.return);
                                var m = f.stateNode;
                                if ("function" == typeof m.componentWillUnmount) {
                                    r = f, n = f.return;
                                    try {
                                        t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                    } catch (g) {
                                        fu(r, n, g)
                                    }
                                }
                                break;
                            case 5:
                                Ds(f, f.return);
                                break;
                            case 22:
                                if (null !== f.memoizedState) {
                                    cc(d);
                                    continue
                                }
                        }
                        null !== p ? (p.return = f, Hs = p) : cc(d)
                    }
                    u = u.sibling
                }
                e:for (u = null, d = e; ;) {
                    if (5 === d.tag) {
                        if (null === u) {
                            u = d;
                            try {
                                o = d.stateNode, c ? "function" == typeof (a = o.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (l = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, l.style.display = ot("display", i))
                            } catch (g) {
                                fu(e, e.return, g)
                            }
                        }
                    } else if (6 === d.tag) {
                        if (null === u) try {
                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                        } catch (g) {
                            fu(e, e.return, g)
                        }
                    } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; null === d.sibling;) {
                        if (null === d.return || d.return === e) break e;
                        u === d && (u = null), d = d.return
                    }
                    u === d && (u = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            rc(t, e), ac(e), 4 & r && nc(e);
        case 21:
    }
}

function ac(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e:{
                for (var n = e.return; null !== n;) {
                    if (Xs(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(X(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    32 & r.flags && (tt(o, ""), r.flags &= -33), Qs(e, qs(e), o);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo;
                    Ys(e, qs(e), a);
                    break;
                default:
                    throw Error(X(161))
            }
        } catch (i) {
            fu(e, e.return, i)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function ic(e, t, n) {
    Hs = e, lc(e)
}

function lc(e, t, n) {
    for (var r = !!(1 & e.mode); null !== Hs;) {
        var o = Hs, a = o.child;
        if (22 === o.tag && r) {
            var i = null !== o.memoizedState || Ls;
            if (!i) {
                var l = o.alternate, s = null !== l && null !== l.memoizedState || Fs;
                l = Ls;
                var c = Fs;
                if (Ls = i, (Fs = s) && !c) for (Hs = o; null !== Hs;) s = (i = Hs).child, 22 === i.tag && null !== i.memoizedState ? uc(o) : null !== s ? (s.return = i, Hs = s) : uc(o);
                for (; null !== a;) Hs = a, lc(a), a = a.sibling;
                Hs = o, Ls = l, Fs = c
            }
            sc(e)
        } else 8772 & o.subtreeFlags && null !== a ? (a.return = o, Hs = a) : sc(e)
    }
}

function sc(e) {
    for (; null !== Hs;) {
        var t = Hs;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fs || Ks(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !Fs) if (null === n) r.componentDidMount(); else {
                            var o = t.elementType === t.type ? n.memoizedProps : Kl(t.type, n.memoizedProps);
                            r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var a = t.updateQueue;
                        null !== a && ji(t, a, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (null !== i) {
                            if (n = null, null !== t.child) switch (t.child.tag) {
                                case 5:
                                case 1:
                                    n = t.child.stateNode
                            }
                            ji(t, i, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (null === n && 4 & t.flags) {
                            n = l;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case"img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    case 13:
                        if (null === t.memoizedState) {
                            var c = t.alternate;
                            if (null !== c) {
                                var u = c.memoizedState;
                                if (null !== u) {
                                    var d = u.dehydrated;
                                    null !== d && In(d)
                                }
                            }
                        }
                        break;
                    default:
                        throw Error(X(163))
                }
                Fs || 512 & t.flags && Us(t)
            } catch (f) {
                fu(t, t.return, f)
            }
        }
        if (t === e) {
            Hs = null;
            break
        }
        if (null !== (n = t.sibling)) {
            n.return = t.return, Hs = n;
            break
        }
        Hs = t.return
    }
}

function cc(e) {
    for (; null !== Hs;) {
        var t = Hs;
        if (t === e) {
            Hs = null;
            break
        }
        var n = t.sibling;
        if (null !== n) {
            n.return = t.return, Hs = n;
            break
        }
        Hs = t.return
    }
}

function uc(e) {
    for (; null !== Hs;) {
        var t = Hs;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ks(4, t)
                    } catch (s) {
                        fu(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ("function" == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            fu(t, o, s)
                        }
                    }
                    var a = t.return;
                    try {
                        Us(t)
                    } catch (s) {
                        fu(t, a, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Us(t)
                    } catch (s) {
                        fu(t, i, s)
                    }
            }
        } catch (s) {
            fu(t, t.return, s)
        }
        if (t === e) {
            Hs = null;
            break
        }
        var l = t.sibling;
        if (null !== l) {
            l.return = t.return, Hs = l;
            break
        }
        Hs = t.return
    }
}

var dc, fc = Math.ceil, pc = ce.ReactCurrentDispatcher, mc = ce.ReactCurrentOwner, gc = ce.ReactCurrentBatchConfig,
    hc = 0, vc = null, bc = null, yc = 0, wc = 0, xc = ma(0), Cc = 0, Sc = null, Ec = 0, kc = 0, $c = 0, Oc = null,
    Pc = null, Nc = 0, Mc = 1 / 0, Rc = null, Ic = !1, jc = null, zc = null, Tc = !1, _c = null, Lc = 0, Fc = 0,
    Ac = null, Hc = -1, Dc = 0;

function Bc() {
    return 6 & hc ? Ht() : -1 !== Hc ? Hc : Hc = Ht()
}

function Wc(e) {
    return 1 & e.mode ? 2 & hc && 0 !== yc ? yc & -yc : null !== ai.transition ? (0 === Dc && (Dc = on()), Dc) : 0 !== (e = cn) ? e : e = void 0 === (e = window.event) ? 16 : Hn(e.type) : 1
}

function Vc(e, t, n, r) {
    if (50 < Fc) throw Fc = 0, Ac = null, Error(X(185));
    ln(e, n, r), 2 & hc && e === vc || (e === vc && (!(2 & hc) && (kc |= n), 4 === Cc && qc(e, yc)), Kc(e, r), 1 === n && 0 === hc && !(1 & t.mode) && (Mc = Ht() + 500, Na && Ia()))
}

function Kc(e, t) {
    var n = e.callbackNode;
    ((e, t) => {
        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
            var i = 31 - qt(a), l = 1 << i, s = o[i];
            -1 === s ? l & n && !(l & r) || (o[i] = nn(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
        }
    })(e, t);
    var r = tn(e, e === vc ? yc : 0);
    if (0 === r) null !== n && Lt(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (null != n && Lt(n), 1 === t) 0 === e.tag ? (e => {
            Na = !0, Ra(e)
        })(Yc.bind(null, e)) : Ra(Yc.bind(null, e)), Yo((() => {
            !(6 & hc) && Ia()
        })), n = null; else {
            switch (un(r)) {
                case 1:
                    n = Bt;
                    break;
                case 4:
                    n = Wt;
                    break;
                case 16:
                default:
                    n = Vt;
                    break;
                case 536870912:
                    n = Ut
            }
            n = vu(n, Uc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Uc(e, t) {
    if (Hc = -1, Dc = 0, 6 & hc) throw Error(X(327));
    var n = e.callbackNode;
    if (uu() && e.callbackNode !== n) return null;
    var r = tn(e, e === vc ? yc : 0);
    if (0 === r) return null;
    if (30 & r || r & e.expiredLanes || t) t = ou(e, r); else {
        t = r;
        var o = hc;
        hc |= 2;
        var a = nu();
        for (vc === e && yc === t || (Rc = null, Mc = Ht() + 500, eu(e, t)); ;) try {
            iu();
            break
        } catch (l) {
            tu(e, l)
        }
        hi(), pc.current = a, hc = o, null !== bc ? t = 0 : (vc = null, yc = 0, t = Cc)
    }
    if (0 !== t) {
        if (2 === t && 0 !== (o = rn(e)) && (r = o, t = Gc(e, o)), 1 === t) throw n = Sc, eu(e, 0), qc(e, r), Kc(e, Ht()), n;
        if (6 === t) qc(e, r); else {
            if (o = e.current.alternate, !(30 & r || (e => {
                for (var t = e; ;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                            var o = n[r], a = o.getSnapshot;
                            o = o.value;
                            try {
                                if (!Yr(a(), o)) return !1
                            } catch (i) {
                                return !1
                            }
                        }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return !0;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return !0
            })(o) || (t = ou(e, r), 2 === t && (a = rn(e), 0 !== a && (r = a, t = Gc(e, a))), 1 !== t))) throw n = Sc, eu(e, 0), qc(e, r), Kc(e, Ht()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(X(345));
                case 2:
                case 5:
                    cu(e, Pc, Rc);
                    break;
                case 3:
                    if (qc(e, r), (130023424 & r) === r && 10 < (t = Nc + 500 - Ht())) {
                        if (0 !== tn(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                            Bc(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Go(cu.bind(null, e, Pc, Rc), t);
                        break
                    }
                    cu(e, Pc, Rc);
                    break;
                case 4:
                    if (qc(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - qt(r);
                        a = 1 << i, (i = t[i]) > o && (o = i), r &= ~a
                    }
                    if (r = o, 10 < (r = (120 > (r = Ht() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fc(r / 1960)) - r)) {
                        e.timeoutHandle = Go(cu.bind(null, e, Pc, Rc), r);
                        break
                    }
                    cu(e, Pc, Rc);
                    break;
                default:
                    throw Error(X(329))
            }
        }
    }
    return Kc(e, Ht()), e.callbackNode === n ? Uc.bind(null, e) : null
}

function Gc(e, t) {
    var n = Oc;
    return e.current.memoizedState.isDehydrated && (eu(e, t).flags |= 256), 2 !== (e = ou(e, t)) && (t = Pc, Pc = n, null !== t && Xc(t)), e
}

function Xc(e) {
    null === Pc ? Pc = e : Pc.push.apply(Pc, e)
}

function qc(e, t) {
    for (t &= ~$c, t &= ~kc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - qt(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Yc(e) {
    if (6 & hc) throw Error(X(327));
    uu();
    var t = tn(e, 0);
    if (!(1 & t)) return Kc(e, Ht()), null;
    var n = ou(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = rn(e);
        0 !== r && (t = r, n = Gc(e, r))
    }
    if (1 === n) throw n = Sc, eu(e, 0), qc(e, t), Kc(e, Ht()), n;
    if (6 === n) throw Error(X(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, cu(e, Pc, Rc), Kc(e, Ht()), null
}

function Qc(e, t) {
    var n = hc;
    hc |= 1;
    try {
        return e(t)
    } finally {
        0 === (hc = n) && (Mc = Ht() + 500, Na && Ia())
    }
}

function Zc(e) {
    null !== _c && 0 === _c.tag && !(6 & hc) && uu();
    var t = hc;
    hc |= 1;
    var n = gc.transition, r = cn;
    try {
        if (gc.transition = null, cn = 1, e) return e()
    } finally {
        cn = r, gc.transition = n, !(6 & (hc = t)) && Ia()
    }
}

function Jc() {
    wc = xc.current, ga(xc)
}

function eu(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (-1 !== n && (e.timeoutHandle = -1, Xo(n)), null !== bc) for (n = bc.return; null !== n;) {
        var r = n;
        switch (Ka(r), r.tag) {
            case 1:
                null != (r = r.type.childContextTypes) && Sa();
                break;
            case 3:
                Hi(), ga(ya), ga(ba), Ui();
                break;
            case 5:
                Bi(r);
                break;
            case 4:
                Hi();
                break;
            case 13:
            case 19:
                ga(Wi);
                break;
            case 10:
                vi(r.type._context);
                break;
            case 22:
            case 23:
                Jc()
        }
        n = n.return
    }
    if (vc = e, bc = e = xu(e.current, null), yc = wc = t, Cc = 0, Sc = null, $c = kc = Ec = 0, Pc = Oc = null, null !== xi) {
        for (t = 0; t < xi.length; t++) if (null !== (r = (n = xi[t]).interleaved)) {
            n.interleaved = null;
            var o = r.next, a = n.pending;
            if (null !== a) {
                var i = a.next;
                a.next = o, r.next = i
            }
            n.pending = r
        }
        xi = null
    }
    return e
}

function tu(e, t) {
    for (; ;) {
        var n = bc;
        try {
            if (hi(), Gi.current = Dl, Ji) {
                for (var r = Yi.memoizedState; null !== r;) {
                    var o = r.queue;
                    null !== o && (o.pending = null), r = r.next
                }
                Ji = !1
            }
            if (qi = 0, Zi = Qi = Yi = null, el = !1, tl = 0, mc.current = null, null === n || null === n.return) {
                Cc = 1, Sc = t, bc = null;
                break
            }
            e:{
                var a = e, i = n.return, l = n, s = t;
                if (t = yc, l.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                    var c = s, u = l, d = u.tag;
                    if (!(1 & u.mode || 0 !== d && 11 !== d && 15 !== d)) {
                        var f = u.alternate;
                        f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null)
                    }
                    var p = os(i);
                    if (null !== p) {
                        p.flags &= -257, as(p, i, l, 0, t), 1 & p.mode && rs(a, c, t), s = c;
                        var m = (t = p).updateQueue;
                        if (null === m) {
                            var g = new Set;
                            g.add(s), t.updateQueue = g
                        } else m.add(s);
                        break e
                    }
                    if (!(1 & t)) {
                        rs(a, c, t), ru();
                        break e
                    }
                    s = Error(X(426))
                } else if (Xa && 1 & l.mode) {
                    var h = os(i);
                    if (null !== h) {
                        !(65536 & h.flags) && (h.flags |= 256), as(h, i, l, 0, t), oi(Zl(s, l));
                        break e
                    }
                }
                a = s = Zl(s, l), 4 !== Cc && (Cc = 2), null === Oc ? Oc = [a] : Oc.push(a), a = i;
                do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, t &= -t, a.lanes |= t, Ri(a, ts(0, s, t));
                            break e;
                        case 1:
                            l = s;
                            var v = a.type, b = a.stateNode;
                            if (!(128 & a.flags || "function" != typeof v.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== zc && zc.has(b)))) {
                                a.flags |= 65536, t &= -t, a.lanes |= t, Ri(a, ns(a, l, t));
                                break e
                            }
                    }
                    a = a.return
                } while (null !== a)
            }
            su(n)
        } catch (y) {
            t = y, bc === n && null !== n && (bc = n = n.return);
            continue
        }
        break
    }
}

function nu() {
    var e = pc.current;
    return pc.current = Dl, null === e ? Dl : e
}

function ru() {
    0 !== Cc && 3 !== Cc && 2 !== Cc || (Cc = 4), null === vc || !(268435455 & Ec) && !(268435455 & kc) || qc(vc, yc)
}

function ou(e, t) {
    var n = hc;
    hc |= 2;
    var r = nu();
    for (vc === e && yc === t || (Rc = null, eu(e, t)); ;) try {
        au();
        break
    } catch (o) {
        tu(e, o)
    }
    if (hi(), hc = n, pc.current = r, null !== bc) throw Error(X(261));
    return vc = null, yc = 0, Cc
}

function au() {
    for (; null !== bc;) lu(bc)
}

function iu() {
    for (; null !== bc && !Ft();) lu(bc)
}

function lu(e) {
    var t = dc(e.alternate, e, wc);
    e.memoizedProps = e.pendingProps, null === t ? su(e) : bc = t, mc.current = null
}

function su(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, 32768 & t.flags) {
            if (null !== (n = _s(n, t))) return n.flags &= 32767, void (bc = n);
            if (null === e) return Cc = 6, void (bc = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
        } else if (null !== (n = Ts(n, t, wc))) return void (bc = n);
        if (null !== (t = t.sibling)) return void (bc = t);
        bc = t = e
    } while (null !== t);
    0 === Cc && (Cc = 5)
}

function cu(e, t, n) {
    var r = cn, o = gc.transition;
    try {
        gc.transition = null, cn = 1, ((e, t, n, r) => {
            do {
                uu()
            } while (null !== _c);
            if (6 & hc) throw Error(X(327));
            n = e.finishedWork;
            var o = e.finishedLanes;
            if (null === n) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(X(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var a = n.lanes | n.childLanes;
            if (((e, t) => {
                var n = e.pendingLanes & ~t;
                e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                var r = e.eventTimes;
                for (e = e.expirationTimes; 0 < n;) {
                    var o = 31 - qt(n), a = 1 << o;
                    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
                }
            })(e, a), e === vc && (bc = vc = null, yc = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Tc || (Tc = !0, vu(Vt, (() => (uu(), null)))), a = !!(15990 & n.flags), 15990 & n.subtreeFlags || a) {
                a = gc.transition, gc.transition = null;
                var i = cn;
                cn = 1;
                var l = hc;
                hc |= 4, mc.current = null, ((e, t) => {
                    if (Vo = zn, no(e = to())) {
                        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var o = r.anchorOffset, a = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, a.nodeType
                                } catch (w) {
                                    n = null;
                                    break e
                                }
                                var i = 0, l = -1, s = -1, c = 0, u = 0, d = e, f = null;
                                t:for (; ;) {
                                    for (var p; d !== n || 0 !== o && 3 !== d.nodeType || (l = i + o), d !== a || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (p = d.firstChild);) f = d, d = p;
                                    for (; ;) {
                                        if (d === e) break t;
                                        if (f === n && ++c === o && (l = i), f === a && ++u === r && (s = i), null !== (p = d.nextSibling)) break;
                                        f = (d = f).parentNode
                                    }
                                    d = p
                                }
                                n = -1 === l || -1 === s ? null : {start: l, end: s}
                            } else n = null
                        }
                        n = n || {start: 0, end: 0}
                    } else n = null;
                    for (Ko = {
                        focusedElem: e,
                        selectionRange: n
                    }, zn = !1, Hs = t; null !== Hs;) if (e = (t = Hs).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Hs = e; else for (; null !== Hs;) {
                        t = Hs;
                        try {
                            var m = t.alternate;
                            if (1024 & t.flags) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                case 1:
                                    if (null !== m) {
                                        var g = m.memoizedProps, h = m.memoizedState, v = t.stateNode,
                                            b = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Kl(t.type, g), h);
                                        v.__reactInternalSnapshotBeforeUpdate = b
                                    }
                                    break;
                                case 3:
                                    var y = t.stateNode.containerInfo;
                                    1 === y.nodeType ? y.textContent = "" : 9 === y.nodeType && y.documentElement && y.removeChild(y.documentElement);
                                    break;
                                default:
                                    throw Error(X(163))
                            }
                        } catch (w) {
                            fu(t, t.return, w)
                        }
                        if (null !== (e = t.sibling)) {
                            e.return = t.return, Hs = e;
                            break
                        }
                        Hs = t.return
                    }
                    m = Ws, Ws = !1
                })(e, n), oc(n, e), ro(Ko), zn = !!Vo, Ko = Vo = null, e.current = n, ic(n), At(), hc = l, cn = i, gc.transition = a
            } else e.current = n;
            if (Tc && (Tc = !1, _c = e, Lc = o), 0 === (a = e.pendingLanes) && (zc = null), (e => {
                if (Xt && "function" == typeof Xt.onCommitFiberRoot) try {
                    Xt.onCommitFiberRoot(Gt, e, void 0, !(128 & ~e.current.flags))
                } catch (t) {
                }
            })(n.stateNode), Kc(e, Ht()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
                componentStack: o.stack,
                digest: o.digest
            });
            if (Ic) throw Ic = !1, e = jc, jc = null, e;
            !!(1 & Lc) && 0 !== e.tag && uu(), 1 & (a = e.pendingLanes) ? e === Ac ? Fc++ : (Fc = 0, Ac = e) : Fc = 0, Ia()
        })(e, t, n, r)
    } finally {
        gc.transition = o, cn = r
    }
    return null
}

function uu() {
    if (null !== _c) {
        var e = un(Lc), t = gc.transition, n = cn;
        try {
            if (gc.transition = null, cn = 16 > e ? 16 : e, null === _c) var r = !1; else {
                if (e = _c, _c = null, Lc = 0, 6 & hc) throw Error(X(331));
                var o = hc;
                for (hc |= 4, Hs = e.current; null !== Hs;) {
                    var a = Hs, i = a.child;
                    if (16 & Hs.flags) {
                        var l = a.deletions;
                        if (null !== l) {
                            for (var s = 0; s < l.length; s++) {
                                var c = l[s];
                                for (Hs = c; null !== Hs;) {
                                    var u = Hs;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vs(8, u, a)
                                    }
                                    var d = u.child;
                                    if (null !== d) d.return = u, Hs = d; else for (; null !== Hs;) {
                                        var f = (u = Hs).sibling, p = u.return;
                                        if (Gs(u), u === c) {
                                            Hs = null;
                                            break
                                        }
                                        if (null !== f) {
                                            f.return = p, Hs = f;
                                            break
                                        }
                                        Hs = p
                                    }
                                }
                            }
                            var m = a.alternate;
                            if (null !== m) {
                                var g = m.child;
                                if (null !== g) {
                                    m.child = null;
                                    do {
                                        var h = g.sibling;
                                        g.sibling = null, g = h
                                    } while (null !== g)
                                }
                            }
                            Hs = a
                        }
                    }
                    if (2064 & a.subtreeFlags && null !== i) i.return = a, Hs = i; else e:for (; null !== Hs;) {
                        if (2048 & (a = Hs).flags) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Vs(9, a, a.return)
                        }
                        var v = a.sibling;
                        if (null !== v) {
                            v.return = a.return, Hs = v;
                            break e
                        }
                        Hs = a.return
                    }
                }
                var b = e.current;
                for (Hs = b; null !== Hs;) {
                    var y = (i = Hs).child;
                    if (2064 & i.subtreeFlags && null !== y) y.return = i, Hs = y; else e:for (i = b; null !== Hs;) {
                        if (2048 & (l = Hs).flags) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ks(9, l)
                            }
                        } catch (x) {
                            fu(l, l.return, x)
                        }
                        if (l === i) {
                            Hs = null;
                            break e
                        }
                        var w = l.sibling;
                        if (null !== w) {
                            w.return = l.return, Hs = w;
                            break e
                        }
                        Hs = l.return
                    }
                }
                if (hc = o, Ia(), Xt && "function" == typeof Xt.onPostCommitFiberRoot) try {
                    Xt.onPostCommitFiberRoot(Gt, e)
                } catch (x) {
                }
                r = !0
            }
            return r
        } finally {
            cn = n, gc.transition = t
        }
    }
    return !1
}

function du(e, t, n) {
    e = Ni(e, t = ts(0, t = Zl(n, t), 1), 1), t = Bc(), null !== e && (ln(e, 1, t), Kc(e, t))
}

function fu(e, t, n) {
    if (3 === e.tag) du(e, e, n); else for (; null !== t;) {
        if (3 === t.tag) {
            du(t, e, n);
            break
        }
        if (1 === t.tag) {
            var r = t.stateNode;
            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === zc || !zc.has(r))) {
                t = Ni(t, e = ns(t, e = Zl(n, e), 1), 1), e = Bc(), null !== t && (ln(t, 1, e), Kc(t, e));
                break
            }
        }
        t = t.return
    }
}

function pu(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t), t = Bc(), e.pingedLanes |= e.suspendedLanes & n, vc === e && (yc & n) === n && (4 === Cc || 3 === Cc && (130023424 & yc) === yc && 500 > Ht() - Nc ? eu(e, 0) : $c |= n), Kc(e, t)
}

function mu(e, t) {
    0 === t && (1 & e.mode ? (t = Jt, !(130023424 & (Jt <<= 1)) && (Jt = 4194304)) : t = 1);
    var n = Bc();
    null !== (e = Ei(e, t)) && (ln(e, t, n), Kc(e, n))
}

function gu(e) {
    var t = e.memoizedState, n = 0;
    null !== t && (n = t.retryLane), mu(e, n)
}

function hu(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, o = e.memoizedState;
            null !== o && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(X(314))
    }
    null !== r && r.delete(t), mu(e, n)
}

function vu(e, t) {
    return _t(e, t)
}

function bu(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function yu(e, t, n, r) {
    return new bu(e, t, n, r)
}

function wu(e) {
    return !(!(e = e.prototype) || !e.isReactComponent)
}

function xu(e, t) {
    var n = e.alternate;
    return null === n ? ((n = yu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Cu(e, t, n, r, o, a) {
    var i = 2;
    if (r = e, "function" == typeof e) wu(e) && (i = 1); else if ("string" == typeof e) i = 5; else e:switch (e) {
        case fe:
            return Su(n.children, o, a, t);
        case pe:
            i = 8, o |= 8;
            break;
        case me:
            return (e = yu(12, n, t, 2 | o)).elementType = me, e.lanes = a, e;
        case be:
            return (e = yu(13, n, t, o)).elementType = be, e.lanes = a, e;
        case ye:
            return (e = yu(19, n, t, o)).elementType = ye, e.lanes = a, e;
        case Ce:
            return Eu(n, o, a, t);
        default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                case ge:
                    i = 10;
                    break e;
                case he:
                    i = 9;
                    break e;
                case ve:
                    i = 11;
                    break e;
                case we:
                    i = 14;
                    break e;
                case xe:
                    i = 16, r = null;
                    break e
            }
            throw Error(X(130, null == e ? e : typeof e, ""))
    }
    return (t = yu(i, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
}

function Su(e, t, n, r) {
    return (e = yu(7, e, r, t)).lanes = n, e
}

function Eu(e, t, n, r) {
    return (e = yu(22, e, r, t)).elementType = Ce, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function ku(e, t, n) {
    return (e = yu(6, e, null, t)).lanes = n, e
}

function $u(e, t, n) {
    return (t = yu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ou(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = an(0), this.expirationTimes = an(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = an(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Pu(e, t, n, r, o, a, i, l, s) {
    return e = new Ou(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = yu(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, $i(a), e
}

function Nu(e) {
    if (!e) return va;
    e:{
        if (Rt(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(X(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ca(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (null !== t);
        throw Error(X(171))
    }
    if (1 === e.tag) {
        var n = e.type;
        if (Ca(n)) return ka(e, n, t)
    }
    return t
}

function Mu(e, t, n, r, o, a, i, l, s) {
    return (e = Pu(n, r, !0, e, 0, a, 0, l, s)).context = Nu(null), n = e.current, (a = Pi(r = Bc(), o = Wc(n))).callback = null != t ? t : null, Ni(n, a, o), e.current.lanes = o, ln(e, o, r), Kc(e, r), e
}

function Ru(e, t, n, r) {
    var o = t.current, a = Bc(), i = Wc(o);
    return n = Nu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Pi(a, i)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ni(o, t, i)) && (Vc(e, o, i, a), Mi(e, o, i)), i
}

function Iu(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
}

function ju(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t
    }
}

function zu(e, t) {
    ju(e, t), (e = e.alternate) && ju(e, t)
}

dc = (e, t, n) => {
    if (null !== e) if (e.memoizedProps !== t.pendingProps || ya.current) ls = !0; else {
        if (!(e.lanes & n || 128 & t.flags)) return ls = !1, ((e, t, n) => {
            switch (t.tag) {
                case 3:
                    vs(t), ri();
                    break;
                case 5:
                    Di(t);
                    break;
                case 1:
                    Ca(t.type) && $a(t);
                    break;
                case 4:
                    Ai(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var r = t.type._context, o = t.memoizedProps.value;
                    ha(fi, r._currentValue), r._currentValue = o;
                    break;
                case 13:
                    if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (ha(Wi, 1 & Wi.current), t.flags |= 128, null) : n & t.child.childLanes ? ks(e, t, n) : (ha(Wi, 1 & Wi.current), null !== (e = Is(e, t, n)) ? e.sibling : null);
                    ha(Wi, 1 & Wi.current);
                    break;
                case 19:
                    if (r = !!(n & t.childLanes), 128 & e.flags) {
                        if (r) return Ms(e, t, n);
                        t.flags |= 128
                    }
                    if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), ha(Wi, Wi.current), r) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, fs(e, t, n)
            }
            return Is(e, t, n)
        })(e, t, n);
        ls = !!(131072 & e.flags)
    } else ls = !1, Xa && 1048576 & t.flags && Wa(t, _a, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Rs(e, t), e = t.pendingProps;
            var o = xa(t, ba.current);
            yi(t, n), o = al(null, t, r, e, o, n);
            var a = il();
            return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ca(r) ? (a = !0, $a(t)) : a = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, $i(t), o.updater = Gl, t.stateNode = o, o._reactInternals = t, Ql(t, r, e, n), t = hs(null, t, r, !0, a, n)) : (t.tag = 0, Xa && a && Va(t), ss(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (Rs(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = (e => {
                    if ("function" == typeof e) return wu(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === ve) return 11;
                        if (e === we) return 14
                    }
                    return 2
                })(r), e = Kl(r, e), o) {
                    case 0:
                        t = ms(null, t, r, e, n);
                        break e;
                    case 1:
                        t = gs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = cs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = us(null, t, r, Kl(r.type, e), n);
                        break e
                }
                throw Error(X(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, ms(e, t, r, o = t.elementType === r ? o : Kl(r, o), n);
        case 1:
            return r = t.type, o = t.pendingProps, gs(e, t, r, o = t.elementType === r ? o : Kl(r, o), n);
        case 3:
            e:{
                if (vs(t), null === e) throw Error(X(387));
                r = t.pendingProps, o = (a = t.memoizedState).element, Oi(e, t), Ii(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, a.isDehydrated) {
                    if (a = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                        t = bs(e, t, r, n, o = Zl(Error(X(423)), t));
                        break e
                    }
                    if (r !== o) {
                        t = bs(e, t, r, n, o = Zl(Error(X(424)), t));
                        break e
                    }
                    for (Ga = Jo(t.stateNode.containerInfo.firstChild), Ua = t, Xa = !0, qa = null, n = di(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                } else {
                    if (ri(), r === o) {
                        t = Is(e, t, n);
                        break e
                    }
                    ss(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Di(t), null === e && Ja(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, i = o.children, Uo(r, o) ? i = null : null !== a && Uo(r, a) && (t.flags |= 32), ps(e, t), ss(e, t, i, n), t.child;
        case 6:
            return null === e && Ja(t), null;
        case 13:
            return ks(e, t, n);
        case 4:
            return Ai(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = ui(t, null, r, n) : ss(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, cs(e, t, r, o = t.elementType === r ? o : Kl(r, o), n);
        case 7:
            return ss(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return ss(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, o = t.pendingProps, a = t.memoizedProps, i = o.value, ha(fi, r._currentValue), r._currentValue = i, null !== a) if (Yr(a.value, i)) {
                    if (a.children === o.children && !ya.current) {
                        t = Is(e, t, n);
                        break e
                    }
                } else for (null !== (a = t.child) && (a.return = t); null !== a;) {
                    var l = a.dependencies;
                    if (null !== l) {
                        i = a.child;
                        for (var s = l.firstContext; null !== s;) {
                            if (s.context === r) {
                                if (1 === a.tag) {
                                    (s = Pi(-1, n & -n)).tag = 2;
                                    var c = a.updateQueue;
                                    if (null !== c) {
                                        var u = (c = c.shared).pending;
                                        null === u ? s.next = s : (s.next = u.next, u.next = s), c.pending = s
                                    }
                                }
                                a.lanes |= n, null !== (s = a.alternate) && (s.lanes |= n), bi(a.return, n, t), l.lanes |= n;
                                break
                            }
                            s = s.next
                        }
                    } else if (10 === a.tag) i = a.type === t.type ? null : a.child; else if (18 === a.tag) {
                        if (null === (i = a.return)) throw Error(X(341));
                        i.lanes |= n, null !== (l = i.alternate) && (l.lanes |= n), bi(i, n, t), i = a.sibling
                    } else i = a.child;
                    if (null !== i) i.return = a; else for (i = a; null !== i;) {
                        if (i === t) {
                            i = null;
                            break
                        }
                        if (null !== (a = i.sibling)) {
                            a.return = i.return, i = a;
                            break
                        }
                        i = i.return
                    }
                    a = i
                }
                ss(e, t, o.children, n), t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, yi(t, n), r = r(o = wi(o)), t.flags |= 1, ss(e, t, r, n), t.child;
        case 14:
            return o = Kl(r = t.type, t.pendingProps), us(e, t, r, o = Kl(r.type, o), n);
        case 15:
            return ds(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kl(r, o), Rs(e, t), t.tag = 1, Ca(r) ? (e = !0, $a(t)) : e = !1, yi(t, n), ql(t, r, o), Ql(t, r, o, n), hs(null, t, r, !0, e, n);
        case 19:
            return Ms(e, t, n);
        case 22:
            return fs(e, t, n)
    }
    throw Error(X(156, t.tag))
};
var Tu = "function" == typeof reportError ? reportError : e => {
};

function _u(e) {
    this._internalRoot = e
}

function Lu(e) {
    this._internalRoot = e
}

function Fu(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
}

function Au(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
}

function Hu() {
}

function Du(e, t, n, r, o) {
    var a = n._reactRootContainer;
    if (a) {
        var i = a;
        if ("function" == typeof o) {
            var l = o;
            o = () => {
                var e = Iu(i);
                l.call(e)
            }
        }
        Ru(t, i, e, o)
    } else i = ((e, t, n, r, o) => {
        if (o) {
            if ("function" == typeof r) {
                var a = r;
                r = () => {
                    var e = Iu(i);
                    a.call(e)
                }
            }
            var i = Mu(t, r, e, 0, null, !1, 0, "", Hu);
            return e._reactRootContainer = i, e[oa] = i.current, Io(8 === e.nodeType ? e.parentNode : e), Zc(), i
        }
        for (; o = e.lastChild;) e.removeChild(o);
        if ("function" == typeof r) {
            var l = r;
            r = () => {
                var e = Iu(s);
                l.call(e)
            }
        }
        var s = Pu(e, 0, !1, null, 0, !1, 0, "", Hu);
        return e._reactRootContainer = s, e[oa] = s.current, Io(8 === e.nodeType ? e.parentNode : e), Zc((() => {
            Ru(t, s, n, r)
        })), s
    })(n, t, e, o, r);
    return Iu(i)
}

Lu.prototype.render = _u.prototype.render = function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(X(409));
    Ru(e, t, null, null)
}, Lu.prototype.unmount = _u.prototype.unmount = function () {
    var e = this._internalRoot;
    if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zc((() => {
            Ru(null, e, null, null)
        })), t[oa] = null
    }
}, Lu.prototype.unstable_scheduleHydration = e => {
    if (e) {
        var t = mn();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Sn.length && 0 !== t && t < Sn[n].priority; n++) ;
        Sn.splice(n, 0, e), 0 === n && On(e)
    }
}, dn = e => {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = en(t.pendingLanes);
                0 !== n && (sn(t, 1 | n), Kc(t, Ht()), !(6 & hc) && (Mc = Ht() + 500, Ia()))
            }
            break;
        case 13:
            Zc((() => {
                var t = Ei(e, 1);
                if (null !== t) {
                    var n = Bc();
                    Vc(t, e, 1, n)
                }
            })), zu(e, 1)
    }
}, fn = e => {
    if (13 === e.tag) {
        var t = Ei(e, 134217728);
        null !== t && Vc(t, e, 134217728, Bc()), zu(e, 134217728)
    }
}, pn = e => {
    if (13 === e.tag) {
        var t = Wc(e), n = Ei(e, t);
        null !== n && Vc(n, e, t, Bc()), zu(e, t)
    }
}, mn = () => cn, gn = (e, t) => {
    var n = cn;
    try {
        return cn = e, t()
    } finally {
        cn = n
    }
}, dt = (e, t, n) => {
    switch (t) {
        case"input":
            if (De(e, n), t = n.name, "radio" === n.type && null != t) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = da(r);
                        if (!o) throw Error(X(90));
                        _e(r), De(r, o)
                    }
                }
            }
            break;
        case"textarea":
            Xe(e, n);
            break;
        case"select":
            null != (t = n.value) && Ke(e, !!n.multiple, t, !1)
    }
}, vt = Qc, bt = Zc;
var Bu = {usingClientEntryPoint: !1, Events: [ca, ua, da, gt, ht, Qc]},
    Wu = {findFiberByHostInstance: sa, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom"}, Vu = {
        bundleType: Wu.bundleType,
        version: Wu.version,
        rendererPackageName: Wu.rendererPackageName,
        rendererConfig: Wu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ce.ReactCurrentDispatcher,
        findHostInstanceByFiber: e => null === (e = zt(e)) ? null : e.stateNode,
        findFiberByHostInstance: Wu.findFiberByHostInstance || (() => null),
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ku.isDisabled && Ku.supportsFiber) try {
        Gt = Ku.inject(Vu), Xt = Ku
    } catch (Je) {
    }
}
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bu, B.createPortal = function (e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Fu(t)) throw Error(X(200));
    return function (e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {$$typeof: de, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
    }(e, t, null, n)
}, B.createRoot = (e, t) => {
    if (!Fu(e)) throw Error(X(299));
    var n = !1, r = "", o = Tu;
    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Pu(e, 1, !1, null, 0, n, 0, r, o), e[oa] = t.current, Io(8 === e.nodeType ? e.parentNode : e), new _u(t)
}, B.findDOMNode = e => {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(X(188));
        throw e = Object.keys(e).join(","), Error(X(268, e))
    }
    return null === (e = zt(t)) ? null : e.stateNode
}, B.flushSync = e => Zc(e), B.hydrate = (e, t, n) => {
    if (!Au(t)) throw Error(X(200));
    return Du(null, e, t, !0, n)
}, B.hydrateRoot = (e, t, n) => {
    if (!Fu(e)) throw Error(X(405));
    var r = null != n && n.hydratedSources || null, o = !1, a = "", i = Tu;
    if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Mu(t, null, e, 1, null != n ? n : null, o, 0, a, i), e[oa] = t.current, Io(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Lu(t)
}, B.render = (e, t, n) => {
    if (!Au(t)) throw Error(X(200));
    return Du(null, e, t, !1, n)
}, B.unmountComponentAtNode = e => {
    if (!Au(e)) throw Error(X(40));
    return !!e._reactRootContainer && (Zc((() => {
        Du(null, null, e, !1, (() => {
            e._reactRootContainer = null, e[oa] = null
        }))
    })), !0)
}, B.unstable_batchedUpdates = Qc, B.unstable_renderSubtreeIntoContainer = (e, t, n, r) => {
    if (!Au(n)) throw Error(X(200));
    if (null == e || void 0 === e._reactInternals) throw Error(X(38));
    return Du(e, t, n, !1, r)
}, B.version = "18.3.1-next-f1338f8080-20240426", function e() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
    } catch (t) {
    }
}(), D.exports = B;
var Uu = D.exports;
const Gu = t(Uu), Xu = e({__proto__: null, default: Gu}, [Uu]);

function qu(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Yu(e) {
    return (Yu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e => typeof e : e => e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e)(e)
}

function Qu(e) {
    var t = ((e, t) => {
        if ("object" != Yu(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != Yu(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    })(e, "string");
    return "symbol" == Yu(t) ? t : t + ""
}

function Zu(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Qu(r.key), r)
    }
}

function Ju(e, t, n) {
    return t && Zu(e.prototype, t), n && Zu(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
}

function ed(e, t) {
    return (ed = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : (e, t) => (e.__proto__ = t, e))(e, t)
}

function td(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {writable: !1}), t && ed(e, t)
}

function nd(e) {
    return (nd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : e => e.__proto__ || Object.getPrototypeOf(e))(e)
}

function rd() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {
        })))
    } catch (t) {
    }
    return (rd = () => !!e)()
}

function od(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function ad(e) {
    var t = rd();
    return function () {
        var n, r = nd(e);
        if (t) {
            var o = nd(this).constructor;
            n = Reflect.construct(r, arguments, o)
        } else n = r.apply(this, arguments);
        return ((e, t) => {
            if (t && ("object" == Yu(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return od(e)
        })(this, n)
    }
}

var id, ld = {exports: {}};
id = ld, (() => {
    var e = {}.hasOwnProperty;

    function t() {
        for (var e = "", t = 0; t < arguments.length; t++) {
            var o = arguments[t];
            o && (e = r(e, n(o)))
        }
        return e
    }

    function n(n) {
        if ("string" == typeof n || "number" == typeof n) return n;
        if ("object" != typeof n) return "";
        if (Array.isArray(n)) return t.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) return n.toString();
        var o = "";
        for (var a in n) e.call(n, a) && n[a] && (o = r(o, a));
        return o
    }

    function r(e, t) {
        return t ? e ? e + " " + t : e + t : e
    }

    id.exports ? (t.default = t, id.exports = t) : window.classNames = t
})();
const sd = t(ld.exports);

function cd() {
    return cd = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, cd.apply(null, arguments)
}

var ud = Symbol.for("react.element"), dd = Symbol.for("react.transitional.element"), fd = Symbol.for("react.fragment");

function pd(e) {
    return e && "object" === Yu(e) && (e.$$typeof === ud || e.$$typeof === dd) && e.type === fd
}

function md(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [];
    return A.Children.forEach(e, (e => {
        (null != e || t.keepEmpty) && (Array.isArray(e) ? n = n.concat(md(e)) : pd(e) && e.props ? n = n.concat(md(e.props.children, t)) : n.push(e))
    })), n
}

var gd = {};

function hd(e, t) {
}

function vd(e, t) {
}

function bd(e, t, n) {
    t || gd[n] || (e(!1, n), gd[n] = !0)
}

function yd(e, t) {
    bd(hd, e, t)
}

function wd(e, t, n) {
    return (t = Qu(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function xd(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((t => Object.getOwnPropertyDescriptor(e, t).enumerable))), n.push.apply(n, r)
    }
    return n
}

function Cd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? xd(Object(n), !0).forEach((t => {
            wd(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xd(Object(n)).forEach((t => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function Sd(e) {
    return e instanceof HTMLElement || e instanceof SVGElement
}

function Ed(e) {
    var t, n = (e => e && "object" === Yu(e) && Sd(e.nativeElement) ? e.nativeElement : Sd(e) ? e : null)(e);
    return n || (e instanceof A.Component ? null === (t = Gu.findDOMNode) || void 0 === t ? void 0 : t.call(Gu, e) : null)
}

yd.preMessage = e => {
}, yd.resetWarned = () => {
    gd = {}
}, yd.noteOnce = (e, t) => {
    bd(vd, e, t)
};
var kd, $d = {exports: {}}, Od = {}, Pd = Symbol.for("react.element"), Nd = Symbol.for("react.portal"),
    Md = Symbol.for("react.fragment"), Rd = Symbol.for("react.strict_mode"), Id = Symbol.for("react.profiler"),
    jd = Symbol.for("react.provider"), zd = Symbol.for("react.context"), Td = Symbol.for("react.server_context"),
    _d = Symbol.for("react.forward_ref"), Ld = Symbol.for("react.suspense"), Fd = Symbol.for("react.suspense_list"),
    Ad = Symbol.for("react.memo"), Hd = Symbol.for("react.lazy"), Dd = Symbol.for("react.offscreen");

function Bd(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case Pd:
                switch (e = e.type) {
                    case Md:
                    case Id:
                    case Rd:
                    case Ld:
                    case Fd:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case Td:
                            case zd:
                            case _d:
                            case Hd:
                            case Ad:
                            case jd:
                                return e;
                            default:
                                return t
                        }
                }
            case Nd:
                return t
        }
    }
}

kd = Symbol.for("react.module.reference"), Od.ContextConsumer = zd, Od.ContextProvider = jd, Od.Element = Pd, Od.ForwardRef = _d, Od.Fragment = Md, Od.Lazy = Hd, Od.Memo = Ad, Od.Portal = Nd, Od.Profiler = Id, Od.StrictMode = Rd, Od.Suspense = Ld, Od.SuspenseList = Fd, Od.isAsyncMode = () => !1, Od.isConcurrentMode = () => !1, Od.isContextConsumer = e => Bd(e) === zd, Od.isContextProvider = e => Bd(e) === jd, Od.isElement = e => "object" == typeof e && null !== e && e.$$typeof === Pd, Od.isForwardRef = e => Bd(e) === _d, Od.isFragment = e => Bd(e) === Md, Od.isLazy = e => Bd(e) === Hd, Od.isMemo = e => Bd(e) === Ad, Od.isPortal = e => Bd(e) === Nd, Od.isProfiler = e => Bd(e) === Id, Od.isStrictMode = e => Bd(e) === Rd, Od.isSuspense = e => Bd(e) === Ld, Od.isSuspenseList = e => Bd(e) === Fd, Od.isValidElementType = e => "string" == typeof e || "function" == typeof e || e === Md || e === Id || e === Rd || e === Ld || e === Fd || e === Dd || "object" == typeof e && null !== e && (e.$$typeof === Hd || e.$$typeof === Ad || e.$$typeof === jd || e.$$typeof === zd || e.$$typeof === _d || e.$$typeof === kd || void 0 !== e.getModuleId), Od.typeOf = Bd, $d.exports = Od;
var Wd = $d.exports;

function Vd(e, t, n) {
    var r = F.useRef({});
    return "value" in r.current && !n(r.current.condition, t) || (r.current.value = e(), r.current.condition = t), r.current.value
}

var Kd = Number(F.version.split(".")[0]), Ud = (e, t) => {
    "function" == typeof e ? e(t) : "object" === Yu(e) && e && "current" in e && (e.current = t)
}, Gd = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t.filter(Boolean);
    return r.length <= 1 ? r[0] : e => {
        t.forEach((t => {
            Ud(t, e)
        }))
    }
}, Xd = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Vd((() => Gd.apply(void 0, t)), t, ((e, t) => e.length !== t.length || e.every(((e, n) => e !== t[n]))))
}, qd = e => {
    var t, n;
    if (!e) return !1;
    if (Yd(e) && Kd >= 19) return !0;
    var r = Wd.isMemo(e) ? e.type.type : e.type;
    return !!("function" != typeof r || null !== (t = r.prototype) && void 0 !== t && t.render || r.$$typeof === Wd.ForwardRef) && !!("function" != typeof e || null !== (n = e.prototype) && void 0 !== n && n.render || e.$$typeof === Wd.ForwardRef)
};

function Yd(e) {
    return F.isValidElement(e) && !pd(e)
}

var Qd = e => {
        if (e && Yd(e)) {
            var t = e;
            return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref
        }
        return null
    }, Zd = F.createContext(null), Jd = function () {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some(((e, r) => e[0] === t && (n = r, !0))), n
        }

        return function () {
            function t() {
                this.__entries__ = []
            }

            return Object.defineProperty(t.prototype, "size", {
                get() {
                    return this.__entries__.length
                }, enumerable: !0, configurable: !0
            }), t.prototype.get = function (t) {
                var n = e(this.__entries__, t), r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function (t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function (t) {
                var n = this.__entries__, r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function (t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function () {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    e.call(t, o[1], o[0])
                }
            }, t
        }()
    }(), ef = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    tf = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    nf = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(tf) : e => setTimeout((() => e(Date.now())), 1e3 / 60),
    rf = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    of = "undefined" != typeof MutationObserver, af = function () {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = (e => {
                var t = !1, n = !1, r = 0;

                function o() {
                    t && (t = !1, e()), n && i()
                }

                function a() {
                    nf(o)
                }

                function i() {
                    var e = Date.now();
                    if (t) {
                        if (e - r < 2) return;
                        n = !0
                    } else t = !0, n = !1, setTimeout(a, 20);
                    r = e
                }

                return i
            })(this.refresh.bind(this))
        }

        return e.prototype.addObserver = function (e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function (e) {
            var t = this.observers_, n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function () {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function () {
            var e = this.observers_.filter((e => (e.gatherActive(), e.hasActive())));
            return e.forEach((e => e.broadcastActive())), e.length > 0
        }, e.prototype.connect_ = function () {
            ef && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), of ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function () {
            ef && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function (e) {
            var t = e.propertyName, n = void 0 === t ? "" : t;
            rf.some((e => !!~n.indexOf(e))) && this.refresh()
        }, e.getInstance = function () {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(), lf = (e, t) => {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {value: t[o], enumerable: !1, writable: !1, configurable: !0})
        }
        return e
    }, sf = e => e && e.ownerDocument && e.ownerDocument.defaultView || tf, cf = mf(0, 0, 0, 0);

function uf(e) {
    return parseFloat(e) || 0
}

function df(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(((t, n) => t + uf(e["border-" + n + "-width"])), 0)
}

var ff = "undefined" != typeof SVGGraphicsElement ? e => e instanceof sf(e).SVGGraphicsElement : e => e instanceof sf(e).SVGElement && "function" == typeof e.getBBox;

function pf(e) {
    return ef ? ff(e) ? (e => {
        var t = e.getBBox();
        return mf(0, 0, t.width, t.height)
    })(e) : function (e) {
        var t = e.clientWidth, n = e.clientHeight;
        if (!t && !n) return cf;
        var r = sf(e).getComputedStyle(e), o = (e => {
            for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                var o = r[n], a = e["padding-" + o];
                t[o] = uf(a)
            }
            return t
        })(r), a = o.left + o.right, i = o.top + o.bottom, l = uf(r.width), s = uf(r.height);
        if ("border-box" === r.boxSizing && (Math.round(l + a) !== t && (l -= df(r, "left", "right") + a), Math.round(s + i) !== n && (s -= df(r, "top", "bottom") + i)), !(e => e === sf(e).document.documentElement)(e)) {
            var c = Math.round(l + a) - t, u = Math.round(s + i) - n;
            1 !== Math.abs(c) && (l -= c), 1 !== Math.abs(u) && (s -= u)
        }
        return mf(o.left, o.top, l, s)
    }(e) : cf
}

function mf(e, t, n, r) {
    return {x: e, y: t, width: n, height: r}
}

var gf = function () {
    function e(e) {
        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = mf(0, 0, 0, 0), this.target = e
    }

    return e.prototype.isActive = function () {
        var e = pf(this.target);
        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
    }, e.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
    }, e
}(), hf = function () {
    return function (e, t) {
        var n, r, o, a, i, l, s,
            c = (r = (n = t).x, o = n.y, a = n.width, i = n.height, l = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, s = Object.create(l.prototype), lf(s, {
                x: r,
                y: o,
                width: a,
                height: i,
                top: o,
                right: r + a,
                bottom: i + o,
                left: r
            }), s);
        lf(this, {target: e, contentRect: c})
    }
}(), vf = function () {
    function e(e, t, n) {
        if (this.activeObservations_ = [], this.observations_ = new Jd, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
    }

    return e.prototype.observe = function (e) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(e instanceof sf(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) || (t.set(e, new gf(e)), this.controller_.addObserver(this), this.controller_.refresh())
        }
    }, e.prototype.unobserve = function (e) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(e instanceof sf(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
        }
    }, e.prototype.disconnect = function () {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
    }, e.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(), this.observations_.forEach((t => {
            t.isActive() && e.activeObservations_.push(t)
        }))
    }, e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
            var e = this.callbackCtx_, t = this.activeObservations_.map((e => new hf(e.target, e.broadcastRect())));
            this.callback_.call(e, t, e), this.clearActive()
        }
    }, e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
    }, e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
    }, e
}(), bf = "undefined" != typeof WeakMap ? new WeakMap : new Jd, yf = function () {
    return function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = af.getInstance(), r = new vf(t, n, this);
        bf.set(this, r)
    }
}();
["observe", "unobserve", "disconnect"].forEach((function (e) {
    yf.prototype[e] = function () {
        var t;
        return (t = bf.get(this))[e].apply(t, arguments)
    }
}));
var wf = void 0 !== tf.ResizeObserver ? tf.ResizeObserver : yf, xf = new Map, Cf = new wf((e => {
    e.forEach((e => {
        var t, n = e.target;
        null === (t = xf.get(n)) || void 0 === t || t.forEach((e => e(n)))
    }))
})), Sf = function () {
    td(t, F.Component);
    var e = ad(t);

    function t() {
        return qu(this, t), e.apply(this, arguments)
    }

    return Ju(t, [{
        key: "render", value() {
            return this.props.children
        }
    }]), t
}();

function Ef(e, t) {
    var n = e.children, r = e.disabled, o = F.useRef(null), a = F.useRef(null), i = F.useContext(Zd),
        l = "function" == typeof n, s = l ? n(o) : n,
        c = F.useRef({width: -1, height: -1, offsetWidth: -1, offsetHeight: -1}),
        u = !l && F.isValidElement(s) && qd(s), d = u ? Qd(s) : null, f = Xd(d, o), p = () => {
            var e;
            return Ed(o.current) || (o.current && "object" === Yu(o.current) ? Ed(null === (e = o.current) || void 0 === e ? void 0 : e.nativeElement) : null) || Ed(a.current)
        };
    F.useImperativeHandle(t, (() => p()));
    var m = F.useRef(e);
    m.current = e;
    var g = F.useCallback((e => {
        var t = m.current, n = t.onResize, r = t.data, o = e.getBoundingClientRect(), a = o.width, l = o.height,
            s = e.offsetWidth, u = e.offsetHeight, d = Math.floor(a), f = Math.floor(l);
        if (c.current.width !== d || c.current.height !== f || c.current.offsetWidth !== s || c.current.offsetHeight !== u) {
            var p = {width: d, height: f, offsetWidth: s, offsetHeight: u};
            c.current = p;
            var g = s === Math.round(a) ? a : s, h = u === Math.round(l) ? l : u,
                v = Cd(Cd({}, p), {}, {offsetWidth: g, offsetHeight: h});
            null == i || i(v, e, r), n && Promise.resolve().then((() => {
                n(v, e)
            }))
        }
    }), []);
    return F.useEffect((() => {
        var e, t, n = p();
        return n && !r && (e = n, t = g, xf.has(e) || (xf.set(e, new Set), Cf.observe(e)), xf.get(e).add(t)), () => ((e, t) => {
            xf.has(e) && (xf.get(e).delete(t), xf.get(e).size || (Cf.unobserve(e), xf.delete(e)))
        })(n, g)
    }), [o.current, r]), F.createElement(Sf, {ref: a}, u ? F.cloneElement(s, {ref: f}) : s)
}

var kf = F.forwardRef(Ef);

function $f(e, t) {
    var n = e.children;
    return ("function" == typeof n ? [n] : md(n)).map(((n, r) => {
        var o = (null == n ? void 0 : n.key) || "".concat("rc-observer-key", "-").concat(r);
        return F.createElement(kf, cd({}, e, {key: o, ref: 0 === r ? t : void 0}), n)
    }))
}

var Of = F.forwardRef($f);

function Pf(e, t) {
    var n = Object.assign({}, e);
    return Array.isArray(t) && t.forEach((e => {
        delete n[e]
    })), n
}

function Nf(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function Mf(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function Rf(e, t) {
    if (e) {
        if ("string" == typeof e) return Nf(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nf(e, t) : void 0
    }
}

function If(e) {
    return (e => {
        if (Array.isArray(e)) return Nf(e)
    })(e) || Mf(e) || Rf(e) || (() => {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    })()
}

Of.Collection = e => {
    var t = e.children, n = e.onBatchResize, r = F.useRef(0), o = F.useRef([]), a = F.useContext(Zd),
        i = F.useCallback(((e, t, i) => {
            r.current += 1;
            var l = r.current;
            o.current.push({size: e, element: t, data: i}), Promise.resolve().then((() => {
                l === r.current && (null == n || n(o.current), o.current = [])
            })), null == a || a(e, t, i)
        }), [n, a]);
    return F.createElement(Zd.Provider, {value: i}, t)
};
var jf = e => +setTimeout(e, 16), zf = e => clearTimeout(e);
"undefined" != typeof window && "requestAnimationFrame" in window && (jf = e => window.requestAnimationFrame(e), zf = e => window.cancelAnimationFrame(e));
var Tf = 0, _f = new Map;

function Lf(e) {
    _f.delete(e)
}

var Ff = function (e) {
    var t = Tf += 1;
    return function n(r) {
        if (0 === r) Lf(t), e(); else {
            var o = jf((() => {
                n(r - 1)
            }));
            _f.set(t, o)
        }
    }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), t
};

function Af(e) {
    if (Array.isArray(e)) return e
}

function Hf() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function Df(e, t) {
    return Af(e) || ((e, t) => {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, a, i, l = [], s = !0, c = !1;
            try {
                if (a = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    s = !1
                } else for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
            } catch (u) {
                c = !0, o = u
            } finally {
                try {
                    if (!s && null != n.return && (i = n.return(), Object(i) !== i)) return
                } finally {
                    if (c) throw o
                }
            }
            return l
        }
    })(e, t) || Rf(e, t) || Hf()
}

function Bf(e) {
    for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
    switch (o) {
        case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
        case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
        case 1:
            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
    }
    return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
}

function Wf() {
    return !("undefined" == typeof window || !window.document || !window.document.createElement)
}

function Vf(e, t) {
    if (!e) return !1;
    if (e.contains) return e.contains(t);
    for (var n = t; n;) {
        if (n === e) return !0;
        n = n.parentNode
    }
    return !1
}

Ff.cancel = e => {
    var t = _f.get(e);
    return Lf(e), zf(t)
};
var Kf = "data-rc-order", Uf = "data-rc-priority", Gf = new Map;

function Xf() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mark;
    return e ? e.startsWith("data-") ? e : "data-".concat(e) : "rc-util-key"
}

function qf(e) {
    return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
}

function Yf(e) {
    return Array.from((Gf.get(e) || e).children).filter((e => "STYLE" === e.tagName))
}

function Qf(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!Wf()) return null;
    var n = t.csp, r = t.prepend, o = t.priority, a = void 0 === o ? 0 : o,
        i = (e => "queue" === e ? "prependQueue" : e ? "prepend" : "append")(r), l = "prependQueue" === i,
        s = document.createElement("style");
    s.setAttribute(Kf, i), l && a && s.setAttribute(Uf, "".concat(a)), null != n && n.nonce && (s.nonce = null == n ? void 0 : n.nonce), s.innerHTML = e;
    var c = qf(t), u = c.firstChild;
    if (r) {
        if (l) {
            var d = (t.styles || Yf(c)).filter((e => {
                if (!["prepend", "prependQueue"].includes(e.getAttribute(Kf))) return !1;
                var t = Number(e.getAttribute(Uf) || 0);
                return a >= t
            }));
            if (d.length) return c.insertBefore(s, d[d.length - 1].nextSibling), s
        }
        c.insertBefore(s, u)
    } else c.appendChild(s);
    return s
}

function Zf(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = qf(t);
    return (t.styles || Yf(n)).find((n => n.getAttribute(Xf(t)) === e))
}

function Jf(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = Zf(e, t);
    n && qf(t).removeChild(n)
}

function ep(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = qf(n), o = Yf(r),
        a = Cd(Cd({}, n), {}, {styles: o});
    ((e, t) => {
        var n = Gf.get(e);
        if (!n || !Vf(document, n)) {
            var r = Qf("", t), o = r.parentNode;
            Gf.set(e, o), e.removeChild(r)
        }
    })(r, a);
    var i, l, s, c = Zf(t, a);
    if (c) return null !== (i = a.csp) && void 0 !== i && i.nonce && c.nonce !== (null === (l = a.csp) || void 0 === l ? void 0 : l.nonce) && (c.nonce = null === (s = a.csp) || void 0 === s ? void 0 : s.nonce), c.innerHTML !== e && (c.innerHTML = e), c;
    var u = Qf(e, a);
    return u.setAttribute(Xf(a), t), u
}

function tp(e, t) {
    if (null == e) return {};
    var n, r, o = ((e, t) => {
        if (null == e) return {};
        var n = {};
        for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r]
        }
        return n
    })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}

function np(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = new Set;
    return function e(t, o) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, i = r.has(t);
        if (yd(!i, "Warning: There may be circular references"), i) return !1;
        if (t === o) return !0;
        if (n && a > 1) return !1;
        r.add(t);
        var l = a + 1;
        if (Array.isArray(t)) {
            if (!Array.isArray(o) || t.length !== o.length) return !1;
            for (var s = 0; s < t.length; s++) if (!e(t[s], o[s], l)) return !1;
            return !0
        }
        if (t && o && "object" === Yu(t) && "object" === Yu(o)) {
            var c = Object.keys(t);
            return c.length === Object.keys(o).length && c.every((n => e(t[n], o[n], l)))
        }
        return !1
    }(e, t)
}

function rp(e) {
    return e.join("%")
}

var op = function () {
    function e(t) {
        qu(this, e), wd(this, "instanceId", void 0), wd(this, "cache", new Map), this.instanceId = t
    }

    return Ju(e, [{
        key: "get", value(e) {
            return this.opGet(rp(e))
        }
    }, {
        key: "opGet", value(e) {
            return this.cache.get(e) || null
        }
    }, {
        key: "update", value(e, t) {
            return this.opUpdate(rp(e), t)
        }
    }, {
        key: "opUpdate", value(e, t) {
            var n = t(this.cache.get(e));
            null === n ? this.cache.delete(e) : this.cache.set(e, n)
        }
    }]), e
}(), ap = "data-token-hash", ip = "data-css-hash", lp = "__cssinjs_instance__", sp = F.createContext({
    hashPriority: "low", cache: (() => {
        var e = Math.random().toString(12).slice(2);
        if ("undefined" != typeof document && document.head && document.body) {
            var t = document.body.querySelectorAll("style[".concat(ip, "]")) || [], n = document.head.firstChild;
            Array.from(t).forEach((t => {
                t[lp] = t[lp] || e, t[lp] === e && document.head.insertBefore(t, n)
            }));
            var r = {};
            Array.from(document.querySelectorAll("style[".concat(ip, "]"))).forEach((t => {
                var n, o = t.getAttribute(ip);
                r[o] ? t[lp] === e && (null === (n = t.parentNode) || void 0 === n || n.removeChild(t)) : r[o] = !0
            }))
        }
        return new op(e)
    })(), defaultCache: !0
}), cp = function () {
    function e() {
        qu(this, e), wd(this, "cache", void 0), wd(this, "keys", void 0), wd(this, "cacheCallTimes", void 0), this.cache = new Map, this.keys = [], this.cacheCallTimes = 0
    }

    return Ju(e, [{
        key: "size", value() {
            return this.keys.length
        }
    }, {
        key: "internalGet", value(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = {map: this.cache};
            return e.forEach((e => {
                var t;
                o = o ? null === (t = o) || void 0 === t || null === (t = t.map) || void 0 === t ? void 0 : t.get(e) : void 0
            })), null !== (t = o) && void 0 !== t && t.value && r && (o.value[1] = this.cacheCallTimes++), null === (n = o) || void 0 === n ? void 0 : n.value
        }
    }, {
        key: "get", value(e) {
            var t;
            return null === (t = this.internalGet(e, !0)) || void 0 === t ? void 0 : t[0]
        }
    }, {
        key: "has", value(e) {
            return !!this.internalGet(e)
        }
    }, {
        key: "set", value(t, n) {
            var r = this;
            if (!this.has(t)) {
                if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                    var o = this.keys.reduce(((e, t) => {
                        var n = Df(e, 2)[1];
                        return r.internalGet(t)[1] < n ? [t, r.internalGet(t)[1]] : e
                    }), [this.keys[0], this.cacheCallTimes]), a = Df(o, 1)[0];
                    this.delete(a)
                }
                this.keys.push(t)
            }
            var i = this.cache;
            t.forEach(((e, o) => {
                if (o === t.length - 1) i.set(e, {value: [n, r.cacheCallTimes++]}); else {
                    var a = i.get(e);
                    a ? a.map || (a.map = new Map) : i.set(e, {map: new Map}), i = i.get(e).map
                }
            }))
        }
    }, {
        key: "deleteByPath", value(e, t) {
            var n, r = e.get(t[0]);
            if (1 === t.length) return r.map ? e.set(t[0], {map: r.map}) : e.delete(t[0]), null === (n = r.value) || void 0 === n ? void 0 : n[0];
            var o = this.deleteByPath(r.map, t.slice(1));
            return r.map && 0 !== r.map.size || r.value || e.delete(t[0]), o
        }
    }, {
        key: "delete", value(e) {
            if (this.has(e)) return this.keys = this.keys.filter((t => !((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0
            })(t, e))), this.deleteByPath(this.cache, e)
        }
    }]), e
}();
wd(cp, "MAX_CACHE_SIZE", 20), wd(cp, "MAX_CACHE_OFFSET", 5);
var up = 0, dp = function () {
    function e(t) {
        qu(this, e), wd(this, "derivatives", void 0), wd(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = up, 0 === t.length && t.length, up += 1
    }

    return Ju(e, [{
        key: "getDerivativeToken", value(e) {
            return this.derivatives.reduce(((t, n) => n(e, t)), void 0)
        }
    }]), e
}(), fp = new cp;

function pp(e) {
    var t = Array.isArray(e) ? e : [e];
    return fp.has(t) || fp.set(t, new dp(t)), fp.get(t)
}

var mp = new WeakMap, gp = {}, hp = new WeakMap;

function vp(e) {
    var t = hp.get(e) || "";
    return t || (Object.keys(e).forEach((n => {
        var r = e[n];
        t += n, r instanceof dp ? t += r.id : r && "object" === Yu(r) ? t += vp(r) : t += r
    })), t = Bf(t), hp.set(e, t)), t
}

function bp(e, t) {
    return Bf("".concat(t, "_").concat(vp(e)))
}

var yp = Wf();

function wp(e, t, n) {
    var r;
    if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) return e;
    var o = Cd(Cd({}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}), {}, (wd(r = {}, ap, t), wd(r, ip, n), r)),
        a = Object.keys(o).map((e => {
            var t = o[e];
            return t ? "".concat(e, '="').concat(t, '"') : null
        })).filter((e => e)).join(" ");
    return "<style ".concat(a, ">").concat(e, "</style>")
}

var xp = (e, t, n) => Object.keys(e).length ? ".".concat(t).concat(null != n && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(e).map((e => {
    var t = Df(e, 2), n = t[0], r = t[1];
    return "".concat(n, ":").concat(r, ";")
})).join(""), "}") : "", Cp = Wf() ? F.useLayoutEffect : F.useEffect, Sp = (e, t) => {
    var n = F.useRef(!0);
    Cp((() => e(n.current)), t), Cp((() => (n.current = !1, () => {
        n.current = !0
    })), [])
}, Ep = (e, t) => {
    Sp((t => {
        if (!t) return e()
    }), t)
}, kp = Cd({}, H).useInsertionEffect, $p = kp ? (e, t, n) => kp((() => (e(), t())), n) : (e, t, n) => {
    F.useMemo(e, n), Sp((() => t(!0)), n)
}, Op = void 0 !== Cd({}, H).useInsertionEffect ? e => {
    var t = [], n = !1;
    return F.useEffect((() => (n = !1, () => {
        n = !0, t.length && t.forEach((e => e()))
    })), e), e => {
        n || t.push(e)
    }
} : () => e => {
    e()
};

function Pp(e, t, n, r, o) {
    var a = F.useContext(sp).cache, i = rp([e].concat(If(t))), l = Op([i]), s = e => {
        a.opUpdate(i, (t => {
            var r = Df(t || [void 0, void 0], 2), o = r[0], a = [void 0 === o ? 0 : o, r[1] || n()];
            return e ? e(a) : a
        }))
    };
    F.useMemo((() => {
        s()
    }), [i]);
    var c = a.opGet(i)[1];
    return $p((() => {
        null == o || o(c)
    }), (e => (s((t => {
        var n = Df(t, 2), r = n[0], a = n[1];
        return e && 0 === r && (null == o || o(c)), [r + 1, a]
    })), () => {
        a.opUpdate(i, (t => {
            var n = Df(t || [], 2), o = n[0], s = void 0 === o ? 0 : o, c = n[1];
            return 0 == s - 1 ? (l((() => {
                !e && a.opGet(i) || null == r || r(c, !1)
            })), null) : [s - 1, c]
        }))
    })), [i]), c
}

var Np = {}, Mp = new Map;
var Rp = "token";

function Ip(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = F.useContext(sp),
        o = r.cache.instanceId, a = r.container, i = n.salt, l = void 0 === i ? "" : i, s = n.override,
        c = void 0 === s ? Np : s, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, p = ((e, n) => {
            for (var r = mp, o = 0; o < n.length; o += 1) {
                var a = n[o];
                r.has(a) || r.set(a, new WeakMap), r = r.get(a)
            }
            return r.has(gp) || r.set(gp, Object.assign.apply(Object, [{}].concat(If(t)))), r.get(gp)
        })(0, t), m = vp(p), g = vp(c), h = f ? vp(f) : "", v = Pp(Rp, [l, e.id, m, g, h], (() => {
            var t, n = d ? d(p, c, e) : ((e, t, n, r) => {
                var o = Cd(Cd({}, n.getDerivativeToken(e)), t);
                return r && (o = r(o)), o
            })(p, c, e, u), r = Cd({}, n), o = "";
            if (f) {
                var a = ((e, t, n) => {
                        var r = {}, o = {};
                        return Object.entries(e).forEach((e => {
                            var t, a, i = Df(e, 2), l = i[0], s = i[1];
                            if (null != n && null !== (t = n.preserve) && void 0 !== t && t[l]) o[l] = s; else if (!("string" != typeof s && "number" != typeof s || null != n && null !== (a = n.ignore) && void 0 !== a && a[l])) {
                                var c, u = function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                    return "--".concat(t ? "".concat(t, "-") : "").concat(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase()
                                }(l, null == n ? void 0 : n.prefix);
                                r[u] = "number" != typeof s || null != n && null !== (c = n.unitless) && void 0 !== c && c[l] ? String(s) : "".concat(s, "px"), o[l] = "var(".concat(u, ")")
                            }
                        })), [o, xp(r, t, {scope: null == n ? void 0 : n.scope})]
                    })(n, f.key, {prefix: f.prefix, ignore: f.ignore, unitless: f.unitless, preserve: f.preserve}),
                    i = Df(a, 2);
                n = i[0], o = i[1]
            }
            var s = bp(n, l);
            n._tokenKey = s, r._tokenKey = bp(r, l);
            var m = null !== (t = null == f ? void 0 : f.key) && void 0 !== t ? t : s;
            n._themeKey = m, (e => {
                Mp.set(e, (Mp.get(e) || 0) + 1)
            })(m);
            var g = "".concat("css", "-").concat(Bf(s));
            return n._hashId = g, [n, g, r, o, (null == f ? void 0 : f.key) || ""]
        }), (e => {
            !function (e, t) {
                Mp.set(e, (Mp.get(e) || 0) - 1);
                var n = Array.from(Mp.keys()), r = n.filter((e => (Mp.get(e) || 0) <= 0));
                n.length - r.length > 0 && r.forEach((e => {
                    ((e, t) => {
                        "undefined" != typeof document && document.querySelectorAll("style[".concat(ap, '="').concat(e, '"]')).forEach((e => {
                            var n;
                            e[lp] === t && (null === (n = e.parentNode) || void 0 === n || n.removeChild(e))
                        }))
                    })(e, t), Mp.delete(e)
                }))
            }(e[0]._themeKey, o)
        }), (e => {
            var t = Df(e, 4), n = t[0], r = t[3];
            if (f && r) {
                var i = ep(r, Bf("css-variables-".concat(n._themeKey)), {
                    mark: ip,
                    prepend: "queue",
                    attachTo: a,
                    priority: -999
                });
                i[lp] = o, i.setAttribute(ap, n._themeKey)
            }
        }));
    return v
}

var jp = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}, zp = "comm", Tp = "rule", _p = "decl", Lp = Math.abs, Fp = String.fromCharCode;

function Ap(e) {
    return e.trim()
}

function Hp(e, t, n) {
    return e.replace(t, n)
}

function Dp(e, t, n) {
    return e.indexOf(t, n)
}

function Bp(e, t) {
    return 0 | e.charCodeAt(t)
}

function Wp(e, t, n) {
    return e.slice(t, n)
}

function Vp(e) {
    return e.length
}

function Kp(e, t) {
    return t.push(e), e
}

var Up = 1, Gp = 1, Xp = 0, qp = 0, Yp = 0, Qp = "";

function Zp(e, t, n, r, o, a, i, l) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: a,
        line: Up,
        column: Gp,
        length: i,
        return: "",
        siblings: l
    }
}

function Jp() {
    return Yp = qp < Xp ? Bp(Qp, qp++) : 0, Gp++, 10 === Yp && (Gp = 1, Up++), Yp
}

function em() {
    return Bp(Qp, qp)
}

function tm() {
    return qp
}

function nm(e, t) {
    return Wp(Qp, e, t)
}

function rm(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function om(e) {
    return Ap(nm(qp - 1, lm(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
}

function am(e) {
    for (; (Yp = em()) && Yp < 33;) Jp();
    return rm(e) > 2 || rm(Yp) > 3 ? "" : " "
}

function im(e, t) {
    for (; --t && Jp() && !(Yp < 48 || Yp > 102 || Yp > 57 && Yp < 65 || Yp > 70 && Yp < 97);) ;
    return nm(e, tm() + (t < 6 && 32 == em() && 32 == Jp()))
}

function lm(e) {
    for (; Jp();) switch (Yp) {
        case e:
            return qp;
        case 34:
        case 39:
            34 !== e && 39 !== e && lm(Yp);
            break;
        case 40:
            41 === e && lm(e);
            break;
        case 92:
            Jp()
    }
    return qp
}

function sm(e, t) {
    for (; Jp() && e + Yp !== 57 && (e + Yp !== 84 || 47 !== em());) ;
    return "/*" + nm(t, qp - 1) + "*" + Fp(47 === e ? e : Jp())
}

function cm(e) {
    for (; !rm(em());) Jp();
    return nm(e, qp)
}

function um(e) {
    return (e => (Qp = "", e))(dm("", null, null, null, [""], e = (e => (Up = Gp = 1, Xp = Vp(Qp = e), qp = 0, []))(e), 0, [0], e))
}

function dm(e, t, n, r, o, a, i, l, s) {
    for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, g = 1, h = 1, v = 1, b = 0, y = "", w = o, x = a, C = r, S = y; h;) switch (m = b, b = Jp()) {
        case 40:
            if (108 != m && 58 == Bp(S, d - 1)) {
                -1 != Dp(S += Hp(om(b), "&", "&\f"), "&\f", Lp(c ? l[c - 1] : 0)) && (v = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            S += om(b);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            S += am(m);
            break;
        case 92:
            S += im(tm() - 1, 7);
            continue;
        case 47:
            switch (em()) {
                case 42:
                case 47:
                    Kp(pm(sm(Jp(), tm()), t, n, s), s), 5 != rm(m || 1) && 5 != rm(em() || 1) || !Vp(S) || " " === Wp(S, -1, void 0) || (S += " ");
                    break;
                default:
                    S += "/"
            }
            break;
        case 123 * g:
            l[c++] = Vp(S) * v;
        case 125 * g:
        case 59:
        case 0:
            switch (b) {
                case 0:
                case 125:
                    h = 0;
                case 59 + u:
                    -1 == v && (S = Hp(S, /\f/g, "")), p > 0 && (Vp(S) - d || 0 === g && 47 === m) && Kp(p > 32 ? mm(S + ";", r, n, d - 1, s) : mm(Hp(S, " ", "") + ";", r, n, d - 2, s), s);
                    break;
                case 59:
                    S += ";";
                default:
                    if (Kp(C = fm(S, t, n, c, u, o, l, y, w = [], x = [], d, a), a), 123 === b) if (0 === u) dm(S, t, C, C, w, a, d, l, x); else {
                        switch (f) {
                            case 99:
                                if (110 === Bp(S, 3)) break;
                            case 108:
                                if (97 === Bp(S, 2)) break;
                            default:
                                u = 0;
                            case 100:
                            case 109:
                            case 115:
                        }
                        u ? dm(e, C, C, r && Kp(fm(e, C, C, 0, 0, o, l, y, o, w = [], d, x), x), o, x, d, l, r ? w : x) : dm(S, C, C, C, [""], x, 0, l, x)
                    }
            }
            c = u = p = 0, g = v = 1, y = S = "", d = i;
            break;
        case 58:
            d = 1 + Vp(S), p = m;
        default:
            if (g < 1) if (123 == b) --g; else if (125 == b && 0 == g++ && 125 == (Yp = qp > 0 ? Bp(Qp, --qp) : 0, Gp--, 10 === Yp && (Gp = 1, Up--), Yp)) continue;
            switch (S += Fp(b), b * g) {
                case 38:
                    v = u > 0 ? 1 : (S += "\f", -1);
                    break;
                case 44:
                    l[c++] = (Vp(S) - 1) * v, v = 1;
                    break;
                case 64:
                    45 === em() && (S += om(Jp())), f = em(), u = d = Vp(y = S += cm(tm())), b++;
                    break;
                case 45:
                    45 === m && 2 == Vp(S) && (g = 0)
            }
    }
    return a
}

function fm(e, t, n, r, o, a, i, l, s, c, u, d) {
    for (var f = o - 1, p = 0 === o ? a : [""], m = (e => e.length)(p), g = 0, h = 0, v = 0; g < r; ++g) for (var b = 0, y = Wp(e, f + 1, f = Lp(h = i[g])), w = e; b < m; ++b) (w = Ap(h > 0 ? p[b] + " " + y : Hp(y, /&\f/g, p[b]))) && (s[v++] = w);
    return Zp(e, t, n, 0 === o ? Tp : l, s, c, u, d)
}

function pm(e, t, n, r) {
    return Zp(e, t, n, zp, Fp(Yp), Wp(e, 2, -2), 0, r)
}

function mm(e, t, n, r, o) {
    return Zp(e, t, n, _p, Wp(e, 0, r), Wp(e, r + 1, -1), r, o)
}

function gm(e, t) {
    for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
    return n
}

function hm(e, t, n, r) {
    switch (e.type) {
        case"@layer":
            if (e.children.length) break;
        case"@import":
        case"@namespace":
        case _p:
            return e.return = e.return || e.value;
        case zp:
            return "";
        case"@keyframes":
            return e.return = e.value + "{" + gm(e.children, r) + "}";
        case Tp:
            if (!Vp(e.value = e.props.join(","))) return ""
    }
    return Vp(n = gm(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

var vm, bm = "data-ant-cssinjs-cache-path", ym = "_FILE_STYLE__", wm = !0;
var xm = "_multi_value_";

function Cm(e) {
    return gm(um(e), hm).replace(/\{%%%\:[^;];}/g, ";")
}

var Sm = function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {root: !0, parentSelectors: []},
        o = r.root, a = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer;
    n.path;
    var c = n.hashPriority, u = n.transformers, d = void 0 === u ? [] : u;
    n.linters;
    var f = "", p = {};

    function m(t) {
        var r = t.getName(l);
        if (!p[r]) {
            var o = Df(e(t.style, n, {root: !1, parentSelectors: i}), 1)[0];
            p[r] = "@keyframes ".concat(t.getName(l)).concat(o)
        }
    }

    var g = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return t.forEach((t => {
            Array.isArray(t) ? e(t, n) : t && n.push(t)
        })), n
    }(Array.isArray(t) ? t : [t]);
    return g.forEach((t => {
        var r = "string" != typeof t || o ? t : {};
        if ("string" == typeof r) f += "".concat(r, "\n"); else if (r._keyframe) m(r); else {
            var s = d.reduce(((e, t) => {
                var n;
                return (null == t || null === (n = t.visit) || void 0 === n ? void 0 : n.call(t, e)) || e
            }), r);
            Object.keys(s).forEach((t => {
                var r = s[t];
                if ("object" !== Yu(r) || !r || "animationName" === t && r._keyframe || (e => "object" === Yu(e) && e && ("_skip_check_" in e || xm in e))(r)) {
                    let e = (e, t) => {
                        var n = e.replace(/[A-Z]/g, (e => "-".concat(e.toLowerCase()))), r = t;
                        jp[e] || "number" != typeof r || 0 === r || (r = "".concat(r, "px")), "animationName" === e && null != t && t._keyframe && (m(t), r = t.getName(l)), f += "".concat(n, ":").concat(r, ";")
                    };
                    var u, d = null !== (u = null == r ? void 0 : r.value) && void 0 !== u ? u : r;
                    "object" === Yu(r) && null != r && r[xm] && Array.isArray(d) ? d.forEach((n => {
                        e(t, n)
                    })) : e(t, d)
                } else {
                    var g = !1, h = t.trim(), v = !1;
                    (o || a) && l ? h.startsWith("@") ? g = !0 : h = function (e, t, n) {
                        if (!t) return e;
                        var r = ".".concat(t), o = "low" === n ? ":where(".concat(r, ")") : r;
                        return e.split(",").map((e => {
                            var t, n = e.trim().split(/\s+/), r = n[0] || "",
                                a = (null === (t = r.match(/^\w+/)) || void 0 === t ? void 0 : t[0]) || "";
                            return [r = "".concat(a).concat(o).concat(r.slice(a.length))].concat(If(n.slice(1))).join(" ")
                        })).join(",")
                    }("&" === h ? "" : t, l, c) : !o || l || "&" !== h && "" !== h || (h = "", v = !0);
                    var b = Df(e(r, n, {root: v, injectHash: g, parentSelectors: [].concat(If(i), [h])}), 2), y = b[0],
                        w = b[1];
                    p = Cd(Cd({}, p), w), f += "".concat(h).concat(y)
                }
            }))
        }
    })), o ? s && (f && (f = "@layer ".concat(s.name, " {").concat(f, "}")), s.dependencies && (p["@layer ".concat(s.name)] = s.dependencies.map((e => "@layer ".concat(e, ", ").concat(s.name, ";"))).join("\n"))) : f = "{".concat(f, "}"), [f, p]
};

function Em() {
    return null
}

var km, $m = "style";

function Om(e, t) {
    var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, l = e.clientOnly, s = e.order,
        c = void 0 === s ? 0 : s, u = F.useContext(sp), d = u.autoClear;
    u.mock;
    var f = u.defaultCache, p = u.hashPriority, m = u.container, g = u.ssrInline, h = u.transformers, v = u.linters,
        b = u.cache, y = u.layer, w = n._tokenKey, x = [w];
    y && x.push("layer"), x.push.apply(x, If(r));
    var C = yp, S = Pp($m, x, (() => {
        var e = x.join("|");
        if (function (e) {
            return (() => {
                if (!vm && (vm = {}, Wf())) {
                    var e = document.createElement("div");
                    e.className = bm, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
                    var t = getComputedStyle(e).content || "";
                    (t = t.replace(/^"/, "").replace(/"$/, "")).split(";").forEach((e => {
                        var t = Df(e.split(":"), 2), n = t[0], r = t[1];
                        vm[n] = r
                    }));
                    var n, r = document.querySelector("style[".concat(bm, "]"));
                    r && (wm = !1, null === (n = r.parentNode) || void 0 === n || n.removeChild(r)), document.body.removeChild(e)
                }
            })(), !!vm[e]
        }(e)) {
            var n = (e => {
                var t = vm[e], n = null;
                if (t && Wf()) if (wm) n = ym; else {
                    var r = document.querySelector("style[".concat(ip, '="').concat(vm[e], '"]'));
                    r ? n = r.innerHTML : delete vm[e]
                }
                return [n, t]
            })(e), i = Df(n, 2), s = i[0], u = i[1];
            if (s) return [s, w, u, {}, l, c]
        }
        var d = t(), f = Df(Sm(d, {
            hashId: o,
            hashPriority: p,
            layer: y ? a : void 0,
            path: r.join("-"),
            transformers: h,
            linters: v
        }), 2), m = f[0], g = f[1], b = Cm(m), C = ((e, t) => Bf("".concat(e.join("%")).concat(t)))(x, b);
        return [b, w, C, g, l, c]
    }), ((e, t) => {
        var n = Df(e, 3)[2];
        (t || d) && yp && Jf(n, {mark: ip})
    }), (e => {
        var t = Df(e, 4), n = t[0];
        t[1];
        var r = t[2], o = t[3];
        if (C && n !== ym) {
            var a = {mark: ip, prepend: !y && "queue", attachTo: m, priority: c}, l = "function" == typeof i ? i() : i;
            l && (a.csp = {nonce: l});
            var s = [], u = [];
            Object.keys(o).forEach((e => {
                e.startsWith("@layer") ? s.push(e) : u.push(e)
            })), s.forEach((e => {
                ep(Cm(o[e]), "_layer-".concat(e), Cd(Cd({}, a), {}, {prepend: !0}))
            }));
            var d = ep(n, r, a);
            d[lp] = b.instanceId, d.setAttribute(ap, w), u.forEach((e => {
                ep(Cm(o[e]), "_effect-".concat(e), a)
            }))
        }
    })), E = Df(S, 3), k = E[0], $ = E[1], O = E[2];
    return e => {
        var t, n;
        return t = g && !C && f ? F.createElement("style", cd({}, (wd(n = {}, ap, $), wd(n, ip, O), n), {dangerouslySetInnerHTML: {__html: k}})) : F.createElement(Em, null), F.createElement(F.Fragment, null, t, e)
    }
}

wd(km = {}, $m, ((e, t, n) => {
    var r = Df(e, 6), o = r[0], a = r[1], i = r[2], l = r[3], s = r[4], c = r[5], u = (n || {}).plain;
    if (s) return null;
    var d = o, f = {"data-rc-order": "prependQueue", "data-rc-priority": "".concat(c)};
    return d = wp(o, a, i, f, u), l && Object.keys(l).forEach((e => {
        if (!t[e]) {
            t[e] = !0;
            var n = wp(Cm(l[e]), a, "_effect-".concat(e), f, u);
            e.startsWith("@layer") ? d = n + d : d += n
        }
    })), [c, i, d]
})), wd(km, Rp, ((e, t, n) => {
    var r = Df(e, 5), o = r[2], a = r[3], i = r[4], l = (n || {}).plain;
    if (!a) return null;
    var s = o._tokenKey;
    return [-999, s, wp(a, i, s, {"data-rc-order": "prependQueue", "data-rc-priority": "".concat(-999)}, l)]
})), wd(km, "cssVar", ((e, t, n) => {
    var r = Df(e, 4), o = r[1], a = r[2], i = r[3], l = (n || {}).plain;
    return o ? [-999, a, wp(o, i, a, {"data-rc-order": "prependQueue", "data-rc-priority": "".concat(-999)}, l)] : null
}));
var Pm = function () {
    function e(t, n) {
        qu(this, e), wd(this, "name", void 0), wd(this, "style", void 0), wd(this, "_keyframe", !0), this.name = t, this.style = n
    }

    return Ju(e, [{
        key: "getName", value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e ? "".concat(e, "-").concat(this.name) : this.name
        }
    }]), e
}();

function Nm(e) {
    return e.notSplit = !0, e
}

Nm(["borderTop", "borderBottom"]), Nm(["borderTop"]), Nm(["borderBottom"]), Nm(["borderLeft", "borderRight"]), Nm(["borderLeft"]), Nm(["borderRight"]);
var Mm = F.createContext({});

function Rm(e) {
    return Af(e) || Mf(e) || Rf(e) || Hf()
}

function Im(e, t) {
    for (var n = e, r = 0; r < t.length; r += 1) {
        if (null == n) return;
        n = n[t[r]]
    }
    return n
}

function jm(e, t, n, r) {
    if (!t.length) return n;
    var o, a = Rm(t), i = a[0], l = a.slice(1);
    return o = e || "number" != typeof i ? Array.isArray(e) ? If(e) : Cd({}, e) : [], r && void 0 === n && 1 === l.length ? delete o[i][l[0]] : o[i] = jm(o[i], l, n, r), o
}

function zm(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t.length && r && void 0 === n && !Im(e, t.slice(0, -1)) ? e : jm(e, t, n, r)
}

function Tm(e) {
    return Array.isArray(e) ? [] : {}
}

var _m = "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;

function Lm() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = Tm(t[0]);
    return t.forEach((e => {
        !function t(n, o) {
            var a, i = new Set(o), l = Im(e, n), s = Array.isArray(l);
            if (s || "object" === Yu(a = l) && null !== a && Object.getPrototypeOf(a) === Object.prototype) {
                if (!i.has(l)) {
                    i.add(l);
                    var c = Im(r, n);
                    s ? r = zm(r, n, []) : c && "object" === Yu(c) || (r = zm(r, n, Tm(l))), _m(l).forEach((e => {
                        t([].concat(If(n), [e]), i)
                    }))
                }
            } else r = zm(r, n, l)
        }([])
    })), r
}

const Fm = F.createContext(void 0), Am = {placeholder: "Select time", rangePlaceholder: ["Start time", "End time"]},
    Hm = {
        lang: Object.assign({
            placeholder: "Select date",
            yearPlaceholder: "Select year",
            quarterPlaceholder: "Select quarter",
            monthPlaceholder: "Select month",
            weekPlaceholder: "Select week",
            rangePlaceholder: ["Start date", "End date"],
            rangeYearPlaceholder: ["Start year", "End year"],
            rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
            rangeMonthPlaceholder: ["Start month", "End month"],
            rangeWeekPlaceholder: ["Start week", "End week"]
        }, {
            locale: "en_US",
            today: "Today",
            now: "Now",
            backToToday: "Back to today",
            ok: "OK",
            clear: "Clear",
            month: "Month",
            year: "Year",
            timeSelect: "select time",
            dateSelect: "select date",
            weekSelect: "Choose a week",
            monthSelect: "Choose a month",
            yearSelect: "Choose a year",
            decadeSelect: "Choose a decade",
            yearFormat: "YYYY",
            dateFormat: "M/D/YYYY",
            dayFormat: "D",
            dateTimeFormat: "M/D/YYYY HH:mm:ss",
            monthBeforeYear: !0,
            previousMonth: "Previous month (PageUp)",
            nextMonth: "Next month (PageDown)",
            previousYear: "Last year (Control + left)",
            nextYear: "Next year (Control + right)",
            previousDecade: "Last decade",
            nextDecade: "Next decade",
            previousCentury: "Last century",
            nextCentury: "Next century"
        }), timePickerLocale: Object.assign({}, Am)
    }, Dm = "${label} is not a valid ${type}", Bm = {
        locale: "en",
        Pagination: {
            items_per_page: "/ page",
            jump_to: "Go to",
            jump_to_confirm: "confirm",
            page: "Page",
            prev_page: "Previous Page",
            next_page: "Next Page",
            prev_5: "Previous 5 Pages",
            next_5: "Next 5 Pages",
            prev_3: "Previous 3 Pages",
            next_3: "Next 3 Pages",
            page_size: "Page Size"
        },
        DatePicker: Hm,
        TimePicker: Am,
        Calendar: Hm,
        global: {placeholder: "Please select"},
        Table: {
            filterTitle: "Filter menu",
            filterConfirm: "OK",
            filterReset: "Reset",
            filterEmptyText: "No filters",
            filterCheckall: "Select all items",
            filterSearchPlaceholder: "Search in filters",
            emptyText: "No data",
            selectAll: "Select current page",
            selectInvert: "Invert current page",
            selectNone: "Clear all data",
            selectionAll: "Select all data",
            sortTitle: "Sort",
            expand: "Expand row",
            collapse: "Collapse row",
            triggerDesc: "Click to sort descending",
            triggerAsc: "Click to sort ascending",
            cancelSort: "Click to cancel sorting"
        },
        Tour: {Next: "Next", Previous: "Previous", Finish: "Finish"},
        Modal: {okText: "OK", cancelText: "Cancel", justOkText: "OK"},
        Popconfirm: {okText: "OK", cancelText: "Cancel"},
        Transfer: {
            titles: ["", ""],
            searchPlaceholder: "Search here",
            itemUnit: "item",
            itemsUnit: "items",
            remove: "Remove",
            selectCurrent: "Select current page",
            removeCurrent: "Remove current page",
            selectAll: "Select all data",
            removeAll: "Remove all data",
            selectInvert: "Invert current page"
        },
        Upload: {
            uploading: "Uploading...",
            removeFile: "Remove file",
            uploadError: "Upload error",
            previewFile: "Preview file",
            downloadFile: "Download file"
        },
        Empty: {description: "No data"},
        Icon: {icon: "icon"},
        Text: {edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand"},
        PageHeader: {back: "Back"},
        Form: {
            optional: "(optional)", defaultValidateMessages: {
                default: "Field validation error for ${label}",
                required: "Please enter ${label}",
                enum: "${label} must be one of [${enum}]",
                whitespace: "${label} cannot be a blank character",
                date: {
                    format: "${label} date format is invalid",
                    parse: "${label} cannot be converted to a date",
                    invalid: "${label} is an invalid date"
                },
                types: {
                    string: Dm,
                    method: Dm,
                    array: Dm,
                    object: Dm,
                    number: Dm,
                    date: Dm,
                    boolean: Dm,
                    integer: Dm,
                    float: Dm,
                    regexp: Dm,
                    email: Dm,
                    url: Dm,
                    hex: Dm
                },
                string: {
                    len: "${label} must be ${len} characters",
                    min: "${label} must be at least ${min} characters",
                    max: "${label} must be up to ${max} characters",
                    range: "${label} must be between ${min}-${max} characters"
                },
                number: {
                    len: "${label} must be equal to ${len}",
                    min: "${label} must be minimum ${min}",
                    max: "${label} must be maximum ${max}",
                    range: "${label} must be between ${min}-${max}"
                },
                array: {
                    len: "Must be ${len} ${label}",
                    min: "At least ${min} ${label}",
                    max: "At most ${max} ${label}",
                    range: "The amount of ${label} must be between ${min}-${max}"
                },
                pattern: {mismatch: "${label} does not match the pattern ${pattern}"}
            }
        },
        Image: {preview: "Preview"},
        QRCode: {expired: "QR code expired", refresh: "Refresh"},
        ColorPicker: {presetEmpty: "Empty"}
    };
let Wm = Object.assign({}, Bm.Modal), Vm = [];
const Km = () => Vm.reduce(((e, t) => Object.assign(Object.assign({}, e), t)), Bm.Modal);

function Um() {
    return Wm
}

const Gm = F.createContext(void 0), Xm = (e, t) => {
        const n = F.useContext(Gm);
        return [F.useMemo((() => {
            var r;
            const o = t || Bm[e], a = null !== (r = null == n ? void 0 : n[e]) && void 0 !== r ? r : {};
            return Object.assign(Object.assign({}, "function" == typeof o ? o() : o), a || {})
        }), [e, t, n]), F.useMemo((() => {
            const e = null == n ? void 0 : n.locale;
            return (null == n ? void 0 : n.exist) && !e ? Bm.locale : e
        }), [n])]
    }, qm = e => {
        const {locale: t = {}, children: n, _ANT_MARK__: r} = e;
        F.useEffect((() => {
            const e = (e => {
                if (e) {
                    const t = Object.assign({}, e);
                    return Vm.push(t), Wm = Km(), () => {
                        Vm = Vm.filter((e => e !== t)), Wm = Km()
                    }
                }
                Wm = Object.assign({}, Bm.Modal)
            })(t && t.Modal);
            return e
        }), [t]);
        const o = F.useMemo((() => Object.assign(Object.assign({}, t), {exist: !0})), [t]);
        return F.createElement(Gm.Provider, {value: o}, n)
    },
    Ym = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"],
    Qm = Math.round;

function Zm(e, t) {
    const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [],
        r = n.map((e => parseFloat(e)));
    for (let o = 0; o < 3; o += 1) r[o] = t(r[o] || 0, n[o] || "", o);
    return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r
}

const Jm = (e, t, n) => 0 === n ? e : e / 100;

function eg(e, t) {
    const n = t || 255;
    return e > n ? n : e < 0 ? 0 : e
}

class tg {
    constructor(e) {
        function t(t) {
            return t[0] in e && t[1] in e && t[2] in e
        }

        if (wd(this, "isValid", !0), wd(this, "r", 0), wd(this, "g", 0), wd(this, "b", 0), wd(this, "a", 1), wd(this, "_h", void 0), wd(this, "_s", void 0), wd(this, "_l", void 0), wd(this, "_v", void 0), wd(this, "_max", void 0), wd(this, "_min", void 0), wd(this, "_brightness", void 0), e) if ("string" == typeof e) {
            let t = e => n.startsWith(e);
            const n = e.trim();
            /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : t("rgb") ? this.fromRgbString(n) : t("hsl") ? this.fromHslString(n) : (t("hsv") || t("hsb")) && this.fromHsvString(n)
        } else if (e instanceof tg) this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v; else if (t("rgb")) this.r = eg(e.r), this.g = eg(e.g), this.b = eg(e.b), this.a = "number" == typeof e.a ? eg(e.a, 1) : 1; else if (t("hsl")) this.fromHsl(e); else {
            if (!t("hsv")) throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(e));
            this.fromHsv(e)
        }
    }

    setR(e) {
        return this._sc("r", e)
    }

    setG(e) {
        return this._sc("g", e)
    }

    setB(e) {
        return this._sc("b", e)
    }

    setA(e) {
        return this._sc("a", e, 1)
    }

    setHue(e) {
        const t = this.toHsv();
        return t.h = e, this._c(t)
    }

    getLuminance() {
        function e(e) {
            const t = e / 255;
            return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        return .2126 * e(this.r) + .7152 * e(this.g) + .0722 * e(this.b)
    }

    getHue() {
        if (void 0 === this._h) {
            const e = this.getMax() - this.getMin();
            this._h = 0 === e ? 0 : Qm(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4))
        }
        return this._h
    }

    getSaturation() {
        if (void 0 === this._s) {
            const e = this.getMax() - this.getMin();
            this._s = 0 === e ? 0 : e / this.getMax()
        }
        return this._s
    }

    getLightness() {
        return void 0 === this._l && (this._l = (this.getMax() + this.getMin()) / 510), this._l
    }

    getValue() {
        return void 0 === this._v && (this._v = this.getMax() / 255), this._v
    }

    getBrightness() {
        return void 0 === this._brightness && (this._brightness = (299 * this.r + 587 * this.g + 114 * this.b) / 1e3), this._brightness
    }

    darken(e = 10) {
        const t = this.getHue(), n = this.getSaturation();
        let r = this.getLightness() - e / 100;
        return r < 0 && (r = 0), this._c({h: t, s: n, l: r, a: this.a})
    }

    lighten(e = 10) {
        const t = this.getHue(), n = this.getSaturation();
        let r = this.getLightness() + e / 100;
        return r > 1 && (r = 1), this._c({h: t, s: n, l: r, a: this.a})
    }

    mix(e, t = 50) {
        const n = this._c(e), r = t / 100, o = e => (n[e] - this[e]) * r + this[e],
            a = {r: Qm(o("r")), g: Qm(o("g")), b: Qm(o("b")), a: Qm(100 * o("a")) / 100};
        return this._c(a)
    }

    tint(e = 10) {
        return this.mix({r: 255, g: 255, b: 255, a: 1}, e)
    }

    shade(e = 10) {
        return this.mix({r: 0, g: 0, b: 0, a: 1}, e)
    }

    onBackground(e) {
        const t = this._c(e), n = this.a + t.a * (1 - this.a),
            r = e => Qm((this[e] * this.a + t[e] * t.a * (1 - this.a)) / n);
        return this._c({r: r("r"), g: r("g"), b: r("b"), a: n})
    }

    isDark() {
        return this.getBrightness() < 128
    }

    isLight() {
        return this.getBrightness() >= 128
    }

    equals(e) {
        return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a
    }

    clone() {
        return this._c(this)
    }

    toHexString() {
        let e = "#";
        const t = (this.r || 0).toString(16);
        e += 2 === t.length ? t : "0" + t;
        const n = (this.g || 0).toString(16);
        e += 2 === n.length ? n : "0" + n;
        const r = (this.b || 0).toString(16);
        if (e += 2 === r.length ? r : "0" + r, "number" == typeof this.a && this.a >= 0 && this.a < 1) {
            const t = Qm(255 * this.a).toString(16);
            e += 2 === t.length ? t : "0" + t
        }
        return e
    }

    toHsl() {
        return {h: this.getHue(), s: this.getSaturation(), l: this.getLightness(), a: this.a}
    }

    toHslString() {
        const e = this.getHue(), t = Qm(100 * this.getSaturation()), n = Qm(100 * this.getLightness());
        return 1 !== this.a ? `hsla(${e},${t}%,${n}%,${this.a})` : `hsl(${e},${t}%,${n}%)`
    }

    toHsv() {
        return {h: this.getHue(), s: this.getSaturation(), v: this.getValue(), a: this.a}
    }

    toRgb() {
        return {r: this.r, g: this.g, b: this.b, a: this.a}
    }

    toRgbString() {
        return 1 !== this.a ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`
    }

    toString() {
        return this.toRgbString()
    }

    _sc(e, t, n) {
        const r = this.clone();
        return r[e] = eg(t, n), r
    }

    _c(e) {
        return new this.constructor(e)
    }

    getMax() {
        return void 0 === this._max && (this._max = Math.max(this.r, this.g, this.b)), this._max
    }

    getMin() {
        return void 0 === this._min && (this._min = Math.min(this.r, this.g, this.b)), this._min
    }

    fromHexString(e) {
        const t = e.replace("#", "");

        function n(e, n) {
            return parseInt(t[e] + t[n || e], 16)
        }

        t.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = t[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = t[6] ? n(6, 7) / 255 : 1)
    }

    fromHsl({h: e, s: t, l: n, a: r}) {
        if (this._h = e % 360, this._s = t, this._l = n, this.a = "number" == typeof r ? r : 1, t <= 0) {
            const e = Qm(255 * n);
            this.r = e, this.g = e, this.b = e
        }
        let o = 0, a = 0, i = 0;
        const l = e / 60, s = (1 - Math.abs(2 * n - 1)) * t, c = s * (1 - Math.abs(l % 2 - 1));
        l >= 0 && l < 1 ? (o = s, a = c) : l >= 1 && l < 2 ? (o = c, a = s) : l >= 2 && l < 3 ? (a = s, i = c) : l >= 3 && l < 4 ? (a = c, i = s) : l >= 4 && l < 5 ? (o = c, i = s) : l >= 5 && l < 6 && (o = s, i = c);
        const u = n - s / 2;
        this.r = Qm(255 * (o + u)), this.g = Qm(255 * (a + u)), this.b = Qm(255 * (i + u))
    }

    fromHsv({h: e, s: t, v: n, a: r}) {
        this._h = e % 360, this._s = t, this._v = n, this.a = "number" == typeof r ? r : 1;
        const o = Qm(255 * n);
        if (this.r = o, this.g = o, this.b = o, t <= 0) return;
        const a = e / 60, i = Math.floor(a), l = a - i, s = Qm(n * (1 - t) * 255), c = Qm(n * (1 - t * l) * 255),
            u = Qm(n * (1 - t * (1 - l)) * 255);
        switch (i) {
            case 0:
                this.g = u, this.b = s;
                break;
            case 1:
                this.r = c, this.b = s;
                break;
            case 2:
                this.r = s, this.b = u;
                break;
            case 3:
                this.r = s, this.g = c;
                break;
            case 4:
                this.r = u, this.g = s;
                break;
            default:
                this.g = s, this.b = c
        }
    }

    fromHsvString(e) {
        const t = Zm(e, Jm);
        this.fromHsv({h: t[0], s: t[1], v: t[2], a: t[3]})
    }

    fromHslString(e) {
        const t = Zm(e, Jm);
        this.fromHsl({h: t[0], s: t[1], l: t[2], a: t[3]})
    }

    fromRgbString(e) {
        const t = Zm(e, ((e, t) => t.includes("%") ? Qm(e / 100 * 255) : e));
        this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3]
    }
}

var ng = [{index: 7, amount: 15}, {index: 6, amount: 25}, {index: 5, amount: 30}, {index: 5, amount: 45}, {
    index: 5,
    amount: 65
}, {index: 5, amount: 85}, {index: 4, amount: 90}, {index: 3, amount: 95}, {index: 2, amount: 97}, {
    index: 1,
    amount: 98
}];

function rg(e, t, n) {
    var r;
    return (r = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t : n ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0 ? r += 360 : r >= 360 && (r -= 360), r
}

function og(e, t, n) {
    return 0 === e.h && 0 === e.s ? e.s : ((r = n ? e.s - .16 * t : 4 === t ? e.s + .16 : e.s + .05 * t) > 1 && (r = 1), n && 5 === t && r > .1 && (r = .1), r < .06 && (r = .06), Math.round(100 * r) / 100);
    var r
}

function ag(e, t, n) {
    var r;
    return r = n ? e.v + .05 * t : e.v - .15 * t, r = Math.max(0, Math.min(1, r)), Math.round(100 * r) / 100
}

function ig(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], r = new tg(e), o = r.toHsv(), a = 5; a > 0; a -= 1) {
        var i = new tg({h: rg(o, a, !0), s: og(o, a, !0), v: ag(o, a, !0)});
        n.push(i)
    }
    n.push(r);
    for (var l = 1; l <= 4; l += 1) {
        var s = new tg({h: rg(o, l), s: og(o, l), v: ag(o, l)});
        n.push(s)
    }
    return "dark" === t.theme ? ng.map((e => {
        var r = e.index, o = e.amount;
        return new tg(t.backgroundColor || "#141414").mix(n[r], o).toHexString()
    })) : n.map((e => e.toHexString()))
}

var lg = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
lg.primary = lg[5];
const sg = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
}, cg = Object.assign(Object.assign({}, sg), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: .1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0
});

function ug(e, t) {
    (e => "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e))(e) && (e = "100%");
    var n = (e => "string" == typeof e && -1 !== e.indexOf("%"))(e);
    return e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t))
}

function dg(e) {
    return Math.min(1, Math.max(0, e))
}

function fg(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}

function pg(e) {
    return e <= 1 ? "".concat(100 * Number(e), "%") : e
}

function mg(e) {
    return 1 === e.length ? "0" + e : String(e)
}

function gg(e, t, n) {
    e = ug(e, 255), t = ug(t, 255), n = ug(n, 255);
    var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, l = (r + o) / 2;
    if (r === o) i = 0, a = 0; else {
        var s = r - o;
        switch (i = l > .5 ? s / (2 - r - o) : s / (r + o), r) {
            case e:
                a = (t - n) / s + (t < n ? 6 : 0);
                break;
            case t:
                a = (n - e) / s + 2;
                break;
            case n:
                a = (e - t) / s + 4
        }
        a /= 6
    }
    return {h: a, s: i, l}
}

function hg(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * n * (t - e) : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function vg(e, t, n) {
    e = ug(e, 255), t = ug(t, 255), n = ug(n, 255);
    var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, l = r - o, s = 0 === r ? 0 : l / r;
    if (r === o) a = 0; else {
        switch (r) {
            case e:
                a = (t - n) / l + (t < n ? 6 : 0);
                break;
            case t:
                a = (n - e) / l + 2;
                break;
            case n:
                a = (e - t) / l + 4
        }
        a /= 6
    }
    return {h: a, s, v: i}
}

function bg(e, t, n, r) {
    var o = [mg(Math.round(e).toString(16)), mg(Math.round(t).toString(16)), mg(Math.round(n).toString(16))];
    return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
}

function yg(e) {
    return wg(e) / 255
}

function wg(e) {
    return parseInt(e, 16)
}

var xg = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
var Cg = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")"),
    Sg = "[\\s|\\(]+(".concat(Cg, ")[,|\\s]+(").concat(Cg, ")[,|\\s]+(").concat(Cg, ")\\s*\\)?"),
    Eg = "[\\s|\\(]+(".concat(Cg, ")[,|\\s]+(").concat(Cg, ")[,|\\s]+(").concat(Cg, ")[,|\\s]+(").concat(Cg, ")\\s*\\)?"),
    kg = {
        CSS_UNIT: new RegExp(Cg),
        rgb: new RegExp("rgb" + Sg),
        rgba: new RegExp("rgba" + Eg),
        hsl: new RegExp("hsl" + Sg),
        hsla: new RegExp("hsla" + Eg),
        hsv: new RegExp("hsv" + Sg),
        hsva: new RegExp("hsva" + Eg),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };

function $g(e) {
    return Boolean(kg.CSS_UNIT.exec(String(e)))
}

var Og = function () {
    function e(t, n) {
        var r;
        if (void 0 === t && (t = ""), void 0 === n && (n = {}), t instanceof e) return t;
        "number" == typeof t && (t = (e => ({r: e >> 16, g: (65280 & e) >> 8, b: 255 & e}))(t)), this.originalInput = t;
        var o = function (e) {
            var t, n, r, o = {r: 0, g: 0, b: 0}, a = 1, i = null, l = null, s = null, c = !1, u = !1;
            return "string" == typeof e && (e = (e => {
                if (0 === (e = e.trim().toLowerCase()).length) return !1;
                var t = !1;
                if (xg[e]) e = xg[e], t = !0; else if ("transparent" === e) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                var n = kg.rgb.exec(e);
                return n ? {r: n[1], g: n[2], b: n[3]} : (n = kg.rgba.exec(e)) ? {
                    r: n[1],
                    g: n[2],
                    b: n[3],
                    a: n[4]
                } : (n = kg.hsl.exec(e)) ? {h: n[1], s: n[2], l: n[3]} : (n = kg.hsla.exec(e)) ? {
                    h: n[1],
                    s: n[2],
                    l: n[3],
                    a: n[4]
                } : (n = kg.hsv.exec(e)) ? {h: n[1], s: n[2], v: n[3]} : (n = kg.hsva.exec(e)) ? {
                    h: n[1],
                    s: n[2],
                    v: n[3],
                    a: n[4]
                } : (n = kg.hex8.exec(e)) ? {
                    r: wg(n[1]),
                    g: wg(n[2]),
                    b: wg(n[3]),
                    a: yg(n[4]),
                    format: t ? "name" : "hex8"
                } : (n = kg.hex6.exec(e)) ? {
                    r: wg(n[1]),
                    g: wg(n[2]),
                    b: wg(n[3]),
                    format: t ? "name" : "hex"
                } : (n = kg.hex4.exec(e)) ? {
                    r: wg(n[1] + n[1]),
                    g: wg(n[2] + n[2]),
                    b: wg(n[3] + n[3]),
                    a: yg(n[4] + n[4]),
                    format: t ? "name" : "hex8"
                } : !!(n = kg.hex3.exec(e)) && {
                    r: wg(n[1] + n[1]),
                    g: wg(n[2] + n[2]),
                    b: wg(n[3] + n[3]),
                    format: t ? "name" : "hex"
                }
            })(e)), "object" == typeof e && ($g(e.r) && $g(e.g) && $g(e.b) ? (t = e.r, n = e.g, r = e.b, o = {
                r: 255 * ug(t, 255),
                g: 255 * ug(n, 255),
                b: 255 * ug(r, 255)
            }, c = !0, u = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : $g(e.h) && $g(e.s) && $g(e.v) ? (i = pg(e.s), l = pg(e.v), o = ((e, t, n) => {
                e = 6 * ug(e, 360), t = ug(t, 100), n = ug(n, 100);
                var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), l = n * (1 - (1 - o) * t),
                    s = r % 6;
                return {r: 255 * [n, i, a, a, l, n][s], g: 255 * [l, n, n, i, a, a][s], b: 255 * [a, a, l, n, n, i][s]}
            })(e.h, i, l), c = !0, u = "hsv") : $g(e.h) && $g(e.s) && $g(e.l) && (i = pg(e.s), s = pg(e.l), o = ((e, t, n) => {
                var r, o, a;
                if (e = ug(e, 360), t = ug(t, 100), n = ug(n, 100), 0 === t) o = n, a = n, r = n; else {
                    var i = n < .5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
                    r = hg(l, i, e + 1 / 3), o = hg(l, i, e), a = hg(l, i, e - 1 / 3)
                }
                return {r: 255 * r, g: 255 * o, b: 255 * a}
            })(e.h, i, s), c = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)), a = fg(a), {
                ok: c,
                format: e.format || u,
                r: Math.min(255, Math.max(o.r, 0)),
                g: Math.min(255, Math.max(o.g, 0)),
                b: Math.min(255, Math.max(o.b, 0)),
                a
            }
        }(t);
        this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = null !== (r = n.format) && void 0 !== r ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok
    }

    return e.prototype.isDark = function () {
        return this.getBrightness() < 128
    }, e.prototype.isLight = function () {
        return !this.isDark()
    }, e.prototype.getBrightness = function () {
        var e = this.toRgb();
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
    }, e.prototype.getLuminance = function () {
        var e = this.toRgb(), t = e.r / 255, n = e.g / 255, r = e.b / 255;
        return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
    }, e.prototype.getAlpha = function () {
        return this.a
    }, e.prototype.setAlpha = function (e) {
        return this.a = fg(e), this.roundA = Math.round(100 * this.a) / 100, this
    }, e.prototype.isMonochrome = function () {
        return 0 === this.toHsl().s
    }, e.prototype.toHsv = function () {
        var e = vg(this.r, this.g, this.b);
        return {h: 360 * e.h, s: e.s, v: e.v, a: this.a}
    }, e.prototype.toHsvString = function () {
        var e = vg(this.r, this.g, this.b), t = Math.round(360 * e.h), n = Math.round(100 * e.s),
            r = Math.round(100 * e.v);
        return 1 === this.a ? "hsv(".concat(t, ", ").concat(n, "%, ").concat(r, "%)") : "hsva(".concat(t, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHsl = function () {
        var e = gg(this.r, this.g, this.b);
        return {h: 360 * e.h, s: e.s, l: e.l, a: this.a}
    }, e.prototype.toHslString = function () {
        var e = gg(this.r, this.g, this.b), t = Math.round(360 * e.h), n = Math.round(100 * e.s),
            r = Math.round(100 * e.l);
        return 1 === this.a ? "hsl(".concat(t, ", ").concat(n, "%, ").concat(r, "%)") : "hsla(".concat(t, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHex = function (e) {
        return void 0 === e && (e = !1), bg(this.r, this.g, this.b, e)
    }, e.prototype.toHexString = function (e) {
        return void 0 === e && (e = !1), "#" + this.toHex(e)
    }, e.prototype.toHex8 = function (e) {
        return void 0 === e && (e = !1), ((e, t, n, r, o) => {
            var a,
                i = [mg(Math.round(e).toString(16)), mg(Math.round(t).toString(16)), mg(Math.round(n).toString(16)), mg((a = r, Math.round(255 * parseFloat(a)).toString(16)))];
            return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
        })(this.r, this.g, this.b, this.a, e)
    }, e.prototype.toHex8String = function (e) {
        return void 0 === e && (e = !1), "#" + this.toHex8(e)
    }, e.prototype.toHexShortString = function (e) {
        return void 0 === e && (e = !1), 1 === this.a ? this.toHexString(e) : this.toHex8String(e)
    }, e.prototype.toRgb = function () {
        return {r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a}
    }, e.prototype.toRgbString = function () {
        var e = Math.round(this.r), t = Math.round(this.g), n = Math.round(this.b);
        return 1 === this.a ? "rgb(".concat(e, ", ").concat(t, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(this.roundA, ")")
    }, e.prototype.toPercentageRgb = function () {
        var e = e => "".concat(Math.round(100 * ug(e, 255)), "%");
        return {r: e(this.r), g: e(this.g), b: e(this.b), a: this.a}
    }, e.prototype.toPercentageRgbString = function () {
        var e = e => Math.round(100 * ug(e, 255));
        return 1 === this.a ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")")
    }, e.prototype.toName = function () {
        if (0 === this.a) return "transparent";
        if (this.a < 1) return !1;
        for (var e = "#" + bg(this.r, this.g, this.b, !1), t = 0, n = Object.entries(xg); t < n.length; t++) {
            var r = n[t], o = r[0];
            if (e === r[1]) return o
        }
        return !1
    }, e.prototype.toString = function (e) {
        var t = Boolean(e);
        e = null != e ? e : this.format;
        var n = !1, r = this.a < 1 && this.a >= 0;
        return t || !r || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString()
    }, e.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }, e.prototype.clone = function () {
        return new e(this.toString())
    }, e.prototype.lighten = function (t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100, n.l = dg(n.l), new e(n)
    }, e.prototype.brighten = function (t) {
        void 0 === t && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(-t / 100 * 255))), n.g = Math.max(0, Math.min(255, n.g - Math.round(-t / 100 * 255))), n.b = Math.max(0, Math.min(255, n.b - Math.round(-t / 100 * 255))), new e(n)
    }, e.prototype.darken = function (t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100, n.l = dg(n.l), new e(n)
    }, e.prototype.tint = function (e) {
        return void 0 === e && (e = 10), this.mix("white", e)
    }, e.prototype.shade = function (e) {
        return void 0 === e && (e = 10), this.mix("black", e)
    }, e.prototype.desaturate = function (t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100, n.s = dg(n.s), new e(n)
    }, e.prototype.saturate = function (t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100, n.s = dg(n.s), new e(n)
    }, e.prototype.greyscale = function () {
        return this.desaturate(100)
    }, e.prototype.spin = function (t) {
        var n = this.toHsl(), r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, new e(n)
    }, e.prototype.mix = function (t, n) {
        void 0 === n && (n = 50);
        var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100;
        return new e({
            r: (o.r - r.r) * a + r.r,
            g: (o.g - r.g) * a + r.g,
            b: (o.b - r.b) * a + r.b,
            a: (o.a - r.a) * a + r.a
        })
    }, e.prototype.analogous = function (t, n) {
        void 0 === t && (t = 6), void 0 === n && (n = 30);
        var r = this.toHsl(), o = 360 / n, a = [this];
        for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t;) r.h = (r.h + o) % 360, a.push(new e(r));
        return a
    }, e.prototype.complement = function () {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360, new e(t)
    }, e.prototype.monochromatic = function (t) {
        void 0 === t && (t = 6);
        for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--;) i.push(new e({
            h: r,
            s: o,
            v: a
        })), a = (a + l) % 1;
        return i
    }, e.prototype.splitcomplement = function () {
        var t = this.toHsl(), n = t.h;
        return [this, new e({h: (n + 72) % 360, s: t.s, l: t.l}), new e({h: (n + 216) % 360, s: t.s, l: t.l})]
    }, e.prototype.onBackground = function (t) {
        var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
        return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
            a: o
        })
    }, e.prototype.triad = function () {
        return this.polyad(3)
    }, e.prototype.tetrad = function () {
        return this.polyad(4)
    }, e.prototype.polyad = function (t) {
        for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++) o.push(new e({
            h: (r + i * a) % 360,
            s: n.s,
            l: n.l
        }));
        return o
    }, e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString()
    }, e
}();
const Pg = (e, t) => new Og(e).setAlpha(t).toRgbString(), Ng = (e, t) => new Og(e).darken(t).toHexString(), Mg = e => {
    const t = ig(e);
    return {1: t[0], 2: t[1], 3: t[2], 4: t[3], 5: t[4], 6: t[5], 7: t[6], 8: t[4], 9: t[5], 10: t[6]}
}, Rg = (e, t) => {
    const n = e || "#fff", r = t || "#000";
    return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: Pg(r, .88),
        colorTextSecondary: Pg(r, .65),
        colorTextTertiary: Pg(r, .45),
        colorTextQuaternary: Pg(r, .25),
        colorFill: Pg(r, .15),
        colorFillSecondary: Pg(r, .06),
        colorFillTertiary: Pg(r, .04),
        colorFillQuaternary: Pg(r, .02),
        colorBgLayout: Ng(n, 4),
        colorBgContainer: Ng(n, 0),
        colorBgElevated: Ng(n, 0),
        colorBgSpotlight: Pg(r, .85),
        colorBorder: Ng(n, 15),
        colorBorderSecondary: Ng(n, 6)
    }
}, Ig = pp((e => {
    const t = Object.keys(sg).map((t => {
        const n = ig(e[t]);
        return new Array(10).fill(1).reduce(((e, r, o) => (e[`${t}-${o + 1}`] = n[o], e[`${t}${o + 1}`] = n[o], e)), {})
    })).reduce(((e, t) => Object.assign(Object.assign({}, e), t)), {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), ((e, t) => {
        let {generateColorPalettes: n, generateNeutralColorPalettes: r} = t;
        const {
            colorSuccess: o,
            colorWarning: a,
            colorError: i,
            colorInfo: l,
            colorPrimary: s,
            colorBgBase: c,
            colorTextBase: u
        } = e, d = n(s), f = n(o), p = n(a), m = n(i), g = n(l), h = r(c, u), v = n(e.colorLink || e.colorInfo);
        return Object.assign(Object.assign({}, h), {
            colorPrimaryBg: d[1],
            colorPrimaryBgHover: d[2],
            colorPrimaryBorder: d[3],
            colorPrimaryBorderHover: d[4],
            colorPrimaryHover: d[5],
            colorPrimary: d[6],
            colorPrimaryActive: d[7],
            colorPrimaryTextHover: d[8],
            colorPrimaryText: d[9],
            colorPrimaryTextActive: d[10],
            colorSuccessBg: f[1],
            colorSuccessBgHover: f[2],
            colorSuccessBorder: f[3],
            colorSuccessBorderHover: f[4],
            colorSuccessHover: f[4],
            colorSuccess: f[6],
            colorSuccessActive: f[7],
            colorSuccessTextHover: f[8],
            colorSuccessText: f[9],
            colorSuccessTextActive: f[10],
            colorErrorBg: m[1],
            colorErrorBgHover: m[2],
            colorErrorBorder: m[3],
            colorErrorBorderHover: m[4],
            colorErrorHover: m[5],
            colorError: m[6],
            colorErrorActive: m[7],
            colorErrorTextHover: m[8],
            colorErrorText: m[9],
            colorErrorTextActive: m[10],
            colorWarningBg: p[1],
            colorWarningBgHover: p[2],
            colorWarningBorder: p[3],
            colorWarningBorderHover: p[4],
            colorWarningHover: p[4],
            colorWarning: p[6],
            colorWarningActive: p[7],
            colorWarningTextHover: p[8],
            colorWarningText: p[9],
            colorWarningTextActive: p[10],
            colorInfoBg: g[1],
            colorInfoBgHover: g[2],
            colorInfoBorder: g[3],
            colorInfoBorderHover: g[4],
            colorInfoHover: g[4],
            colorInfo: g[6],
            colorInfoActive: g[7],
            colorInfoTextHover: g[8],
            colorInfoText: g[9],
            colorInfoTextActive: g[10],
            colorLinkHover: v[4],
            colorLink: v[6],
            colorLinkActive: v[7],
            colorBgMask: new Og("#000").setAlpha(.45).toRgbString(),
            colorWhite: "#fff"
        })
    })(e, {generateColorPalettes: Mg, generateNeutralColorPalettes: Rg})), (e => {
        const t = (e => {
            const t = new Array(10).fill(null).map(((t, n) => {
                const r = n - 1, o = e * Math.pow(2.71828, r / 5), a = n > 1 ? Math.floor(o) : Math.ceil(o);
                return 2 * Math.floor(a / 2)
            }));
            return t[1] = e, t.map((e => ({size: e, lineHeight: (e + 8) / e})))
        })(e), n = t.map((e => e.size)), r = t.map((e => e.lineHeight));
        return {
            fontSizeSM: n[0],
            fontSize: n[1],
            fontSizeLG: n[2],
            fontSizeXL: n[3],
            fontSizeHeading1: n[6],
            fontSizeHeading2: n[5],
            fontSizeHeading3: n[4],
            fontSizeHeading4: n[3],
            fontSizeHeading5: n[2],
            lineHeight: r[1],
            lineHeightLG: r[2],
            lineHeightSM: r[0],
            lineHeightHeading1: r[6],
            lineHeightHeading2: r[5],
            lineHeightHeading3: r[4],
            lineHeightHeading4: r[3],
            lineHeightHeading5: r[2]
        }
    })(e.fontSize)), (e => {
        const {sizeUnit: t, sizeStep: n} = e;
        return {
            sizeXXL: t * (n + 8),
            sizeXL: t * (n + 4),
            sizeLG: t * (n + 2),
            sizeMD: t * (n + 1),
            sizeMS: t * n,
            size: t * n,
            sizeSM: t * (n - 1),
            sizeXS: t * (n - 2),
            sizeXXS: t * (n - 3)
        }
    })(e)), (e => {
        const {controlHeight: t} = e;
        return {controlHeightSM: .75 * t, controlHeightXS: .5 * t, controlHeightLG: 1.25 * t}
    })(e)), (e => {
        const {motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o} = e;
        return Object.assign({
            motionDurationFast: `${(n + t).toFixed(1)}s`,
            motionDurationMid: `${(n + 2 * t).toFixed(1)}s`,
            motionDurationSlow: `${(n + 3 * t).toFixed(1)}s`,
            lineWidthBold: o + 1
        }, (e => {
            let t = e, n = e, r = e, o = e;
            return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
                borderRadius: e > 16 ? 16 : e,
                borderRadiusXS: r,
                borderRadiusSM: n,
                borderRadiusLG: t,
                borderRadiusOuter: o
            }
        })(r))
    })(e))
})), jg = {token: cg, hashed: !0}, zg = A.createContext(jg);

function Tg(e) {
    return e >= 0 && e <= 255
}

function _g(e, t) {
    const {r: n, g: r, b: o, a} = new Og(e).toRgb();
    if (a < 1) return e;
    const {r: i, g: l, b: s} = new Og(t).toRgb();
    for (let c = .01; c <= 1; c += .01) {
        const e = Math.round((n - i * (1 - c)) / c), t = Math.round((r - l * (1 - c)) / c),
            a = Math.round((o - s * (1 - c)) / c);
        if (Tg(e) && Tg(t) && Tg(a)) return new Og({r: e, g: t, b: a, a: Math.round(100 * c) / 100}).toRgbString()
    }
    return new Og({r: n, g: r, b: o, a: 1}).toRgbString()
}

function Lg(e) {
    const {override: t} = e, n = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["override"]), r = Object.assign({}, t);
    Object.keys(cg).forEach((e => {
        delete r[e]
    }));
    const o = Object.assign(Object.assign({}, n), r);
    if (!1 === o.motion) {
        const e = "0s";
        o.motionDurationFast = e, o.motionDurationMid = e, o.motionDurationSlow = e
    }
    return Object.assign(Object.assign(Object.assign({}, o), {
        colorFillContent: o.colorFillSecondary,
        colorFillContentHover: o.colorFill,
        colorFillAlter: o.colorFillQuaternary,
        colorBgContainerDisabled: o.colorFillTertiary,
        colorBorderBg: o.colorBgContainer,
        colorSplit: _g(o.colorBorderSecondary, o.colorBgContainer),
        colorTextPlaceholder: o.colorTextQuaternary,
        colorTextDisabled: o.colorTextQuaternary,
        colorTextHeading: o.colorText,
        colorTextLabel: o.colorTextSecondary,
        colorTextDescription: o.colorTextTertiary,
        colorTextLightSolid: o.colorWhite,
        colorHighlight: o.colorError,
        colorBgTextHover: o.colorFillSecondary,
        colorBgTextActive: o.colorFill,
        colorIcon: o.colorTextTertiary,
        colorIconHover: o.colorText,
        colorErrorOutline: _g(o.colorErrorBg, o.colorBgContainer),
        colorWarningOutline: _g(o.colorWarningBg, o.colorBgContainer),
        fontSizeIcon: o.fontSizeSM,
        lineWidthFocus: 4 * o.lineWidth,
        lineWidth: o.lineWidth,
        controlOutlineWidth: 2 * o.lineWidth,
        controlInteractiveSize: o.controlHeight / 2,
        controlItemBgHover: o.colorFillTertiary,
        controlItemBgActive: o.colorPrimaryBg,
        controlItemBgActiveHover: o.colorPrimaryBgHover,
        controlItemBgActiveDisabled: o.colorFill,
        controlTmpOutline: o.colorFillQuaternary,
        controlOutline: _g(o.colorPrimaryBg, o.colorBgContainer),
        lineType: o.lineType,
        borderRadius: o.borderRadius,
        borderRadiusXS: o.borderRadiusXS,
        borderRadiusSM: o.borderRadiusSM,
        borderRadiusLG: o.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: .65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: o.sizeXXS,
        paddingXS: o.sizeXS,
        paddingSM: o.sizeSM,
        padding: o.size,
        paddingMD: o.sizeMD,
        paddingLG: o.sizeLG,
        paddingXL: o.sizeXL,
        paddingContentHorizontalLG: o.sizeLG,
        paddingContentVerticalLG: o.sizeMS,
        paddingContentHorizontal: o.sizeMS,
        paddingContentVertical: o.sizeSM,
        paddingContentHorizontalSM: o.size,
        paddingContentVerticalSM: o.sizeXS,
        marginXXS: o.sizeXXS,
        marginXS: o.sizeXS,
        marginSM: o.sizeSM,
        margin: o.size,
        marginMD: o.sizeMD,
        marginLG: o.sizeLG,
        marginXL: o.sizeXL,
        marginXXL: o.sizeXXL,
        boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
        screenXS: 480,
        screenXSMin: 480,
        screenXSMax: 575,
        screenSM: 576,
        screenSMMin: 576,
        screenSMMax: 767,
        screenMD: 768,
        screenMDMin: 768,
        screenMDMax: 991,
        screenLG: 992,
        screenLGMin: 992,
        screenLGMax: 1199,
        screenXL: 1200,
        screenXLMin: 1200,
        screenXLMax: 1599,
        screenXXL: 1600,
        screenXXLMin: 1600,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `\n      0 1px 2px -2px ${new Og("rgba(0, 0, 0, 0.16)").toRgbString()},\n      0 3px 6px 0 ${new Og("rgba(0, 0, 0, 0.12)").toRgbString()},\n      0 5px 12px 4px ${new Og("rgba(0, 0, 0, 0.09)").toRgbString()}\n    `,
        boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), r)
}

var Fg = (e, t) => {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
    }
    return n
};
const Ag = (e, t, n) => {
    const r = n.getDerivativeToken(e), {override: o} = t, a = Fg(t, ["override"]);
    let i = Object.assign(Object.assign({}, r), {override: o});
    return i = Lg(i), a && Object.entries(a).forEach((e => {
        let [t, n] = e;
        const {theme: r} = n, o = Fg(n, ["theme"]);
        let a = o;
        r && (a = Ag(Object.assign(Object.assign({}, i), o), {override: o}, r)), i[t] = a
    })), i
};

function Hg() {
    const {token: e, hashed: t, theme: n, components: r} = A.useContext(zg), o = `5.8.6-${t || ""}`,
        a = n || Ig, [i, l] = Ip(a, [cg, e], {
            salt: o,
            override: Object.assign({override: e}, r),
            getComputedToken: Ag,
            formatToken: Lg
        });
    return [a, i, t ? l : ""]
}

function Dg(e) {
    var t = F.useRef();
    t.current = e;
    var n = F.useCallback((function () {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r))
    }), []);
    return n
}

function Bg(e) {
    var t = F.useRef(!1), n = Df(F.useState(e), 2), r = n[0], o = n[1];
    return F.useEffect((() => (t.current = !1, () => {
        t.current = !0
    })), []), [r, (e, n) => {
        n && t.current || o(e)
    }]
}

function Wg(e) {
    return void 0 !== e
}

function Vg(e, t) {
    var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState,
        l = Df(Bg((() => Wg(o) ? o : Wg(r) ? "function" == typeof r ? r() : r : "function" == typeof e ? e() : e)), 2),
        s = l[0], c = l[1], u = void 0 !== o ? o : s, d = i ? i(u) : u, f = Dg(a), p = Df(Bg([u]), 2), m = p[0],
        g = p[1];
    return Ep((() => {
        var e = m[0];
        s !== e && f(s, e)
    }), [m]), Ep((() => {
        Wg(o) || c(o)
    }), [o]), [d, Dg(((e, t) => {
        c(e, t), g([u], t)
    }))]
}

const Kg = "anticon", Ug = F.createContext({
    getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
    iconPrefixCls: Kg
}), {Consumer: Gg} = Ug, Xg = (e, t, n, r, o) => {
    const a = e / 2, i = a, l = 1 * n / Math.sqrt(2), s = a - n * (1 - 1 / Math.sqrt(2)),
        c = a - t * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), d = 2 * a - c, f = u,
        p = 2 * a - l, m = s, g = 2 * a - 0, h = i, v = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
        b = n * (Math.sqrt(2) - 1);
    return {
        pointerEvents: "none",
        width: e,
        height: e,
        overflow: "hidden",
        "&::before": {
            position: "absolute",
            bottom: 0,
            insetInlineStart: 0,
            width: e,
            height: e / 2,
            background: r,
            clipPath: {
                _multi_value_: !0,
                value: [`polygon(${b}px 100%, 50% ${b}px, ${2 * a - b}px 100%, ${b}px 100%)`, `path('M 0 ${i} A ${n} ${n} 0 0 0 ${l} ${s} L ${c} ${u} A ${t} ${t} 0 0 1 ${d} ${f} L ${p} ${m} A ${n} ${n} 0 0 0 ${g} ${h} Z')`]
            },
            content: '""'
        },
        "&::after": {
            content: '""',
            position: "absolute",
            width: v,
            height: v,
            bottom: 0,
            insetInline: 0,
            margin: "auto",
            borderRadius: {_skip_check_: !0, value: `0 0 ${t}px 0`},
            transform: "translateY(50%) rotate(-135deg)",
            boxShadow: o,
            zIndex: 0,
            background: "transparent"
        }
    }
}, qg = {overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}, Yg = e => ({
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: "none",
    fontFamily: e.fontFamily
}), Qg = e => ({
    a: {
        color: e.colorLink,
        textDecoration: e.linkDecoration,
        backgroundColor: "transparent",
        outline: "none",
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "-webkit-text-decoration-skip": "objects",
        "&:hover": {color: e.colorLinkHover},
        "&:active": {color: e.colorLinkActive},
        "&:active,\n  &:hover": {textDecoration: e.linkHoverDecoration, outline: 0},
        "&:focus": {textDecoration: e.linkFocusDecoration, outline: 0},
        "&[disabled]": {color: e.colorTextDisabled, cursor: "not-allowed"}
    }
}), Zg = (e, t) => {
    const {fontFamily: n, fontSize: r} = e, o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
        [o]: {
            fontFamily: n,
            fontSize: r,
            boxSizing: "border-box",
            "&::before, &::after": {boxSizing: "border-box"},
            [o]: {boxSizing: "border-box", "&::before, &::after": {boxSizing: "border-box"}}
        }
    }
}, Jg = e => ({
    outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
}), eh = e => ({"&:focus-visible": Object.assign({}, Jg(e))}), th = "undefined" != typeof CSSINJS_STATISTIC;
let nh = !0;

function rh() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    if (!th) return Object.assign.apply(Object, [{}].concat(t));
    nh = !1;
    const r = {};
    return t.forEach((e => {
        Object.keys(e).forEach((t => {
            Object.defineProperty(r, t, {configurable: !0, enumerable: !0, get: () => e[t]})
        }))
    })), nh = !0, r
}

const oh = {};

function ah() {
}

const ih = (e, t) => {
    const [n, r] = Hg();
    return Om({
        token: r,
        hashId: "",
        path: ["ant-design-icons", e],
        nonce: () => null == t ? void 0 : t.nonce
    }, (() => [{
        [`.${e}`]: Object.assign(Object.assign({}, {
            display: "inline-flex",
            alignItems: "center",
            color: "inherit",
            fontStyle: "normal",
            lineHeight: 0,
            textAlign: "center",
            textTransform: "none",
            verticalAlign: "-0.125em",
            textRendering: "optimizeLegibility",
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            "> *": {lineHeight: 1},
            svg: {display: "inline-block"}
        }), {[`.${e} .${e}-icon`]: {display: "block"}})
    }]))
};

function lh(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const o = Array.isArray(e) ? e : [e, e], [a] = o, i = o.join("-");
    return e => {
        const [o, l, s] = Hg(), {getPrefixCls: c, iconPrefixCls: u, csp: d} = F.useContext(Ug), f = c(), p = {
            theme: o,
            token: l,
            hashId: s,
            nonce: () => null == d ? void 0 : d.nonce,
            clientOnly: r.clientOnly,
            order: r.order || -999
        };
        return Om(Object.assign(Object.assign({}, p), {
            clientOnly: !1,
            path: ["Shared", f]
        }), (() => [{"&": Qg(l)}])), ih(u), [Om(Object.assign(Object.assign({}, p), {path: [i, e, u]}), (() => {
            const {token: o, flush: i} = (e => {
                let t, n = e, r = ah;
                return th && (t = new Set, n = new Proxy(e, {get: (e, n) => (nh && t.add(n), e[n])}), r = (e, n) => {
                    var r;
                    oh[e] = {
                        global: Array.from(t),
                        component: Object.assign(Object.assign({}, null === (r = oh[e]) || void 0 === r ? void 0 : r.component), n)
                    }
                }), {token: n, keys: t, flush: r}
            })(l), c = Object.assign({}, l[a]);
            if (r.deprecatedTokens) {
                const {deprecatedTokens: e} = r;
                e.forEach((e => {
                    let [t, n] = e;
                    var r;
                    ((null == c ? void 0 : c[t]) || (null == c ? void 0 : c[n])) && (null !== (r = c[n]) && void 0 !== r || (c[n] = null == c ? void 0 : c[t]))
                }))
            }
            const d = "function" == typeof n ? n(rh(o, null != c ? c : {})) : n,
                p = Object.assign(Object.assign({}, d), c),
                m = rh(o, {componentCls: `.${e}`, prefixCls: e, iconCls: `.${u}`, antCls: `.${f}`}, p),
                g = t(m, {hashId: s, prefixCls: e, rootPrefixCls: f, iconPrefixCls: u, overrideComponentToken: c});
            return i(a, p), [!1 === r.resetStyle ? null : Zg(l, e), g]
        })), s]
    }
}

const sh = (e, t, n, r) => {
    const o = lh(e, t, n, Object.assign({resetStyle: !1, order: -998}, r));
    return e => {
        let {prefixCls: t} = e;
        return o(t), null
    }
};

function ch(e, t) {
    return Ym.reduce(((n, r) => {
        const o = e[`${r}1`], a = e[`${r}3`], i = e[`${r}6`], l = e[`${r}7`];
        return Object.assign(Object.assign({}, n), t(r, {
            lightColor: o,
            lightBorderColor: a,
            darkColor: i,
            textColor: l
        }))
    }), {})
}

const uh = `-ant-${Date.now()}-${Math.random()}`;
const dh = F.createContext(!1), fh = e => {
    let {children: t, disabled: n} = e;
    const r = F.useContext(dh);
    return F.createElement(dh.Provider, {value: null != n ? n : r}, t)
}, ph = F.createContext(void 0), mh = e => {
    let {children: t, size: n} = e;
    const r = F.useContext(ph);
    return F.createElement(ph.Provider, {value: n || r}, t)
};
var gh = ["children"], hh = F.createContext({});

function vh(e) {
    var t = e.children, n = tp(e, gh);
    return F.createElement(hh.Provider, {value: n}, t)
}

var bh = function () {
        td(t, F.Component);
        var e = ad(t);

        function t() {
            return qu(this, t), e.apply(this, arguments)
        }

        return Ju(t, [{
            key: "render", value() {
                return this.props.children
            }
        }]), t
    }(), yh = "none", wh = "appear", xh = "enter", Ch = "leave", Sh = "none", Eh = "prepare", kh = "start", $h = "active",
    Oh = "end", Ph = "prepared";

function Nh(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n
}

var Mh, Rh, Ih, jh = (Mh = Wf(), Rh = "undefined" != typeof window ? window : {}, Ih = {
        animationend: Nh("Animation", "AnimationEnd"),
        transitionend: Nh("Transition", "TransitionEnd")
    }, Mh && ("AnimationEvent" in Rh || delete Ih.animationend.animation, "TransitionEvent" in Rh || delete Ih.transitionend.transition), Ih),
    zh = {};
if (Wf()) {
    var Th = document.createElement("div");
    zh = Th.style
}
var _h = {};

function Lh(e) {
    if (_h[e]) return _h[e];
    var t = jh[e];
    if (t) for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
        var a = n[o];
        if (Object.prototype.hasOwnProperty.call(t, a) && a in zh) return _h[e] = t[a], _h[e]
    }
    return ""
}

var Fh = Lh("animationend"), Ah = Lh("transitionend"), Hh = !(!Fh || !Ah), Dh = Fh || "animationend",
    Bh = Ah || "transitionend";

function Wh(e, t) {
    return e ? "object" === Yu(e) ? e[t.replace(/-\w/g, (e => e[1].toUpperCase()))] : "".concat(e, "-").concat(t) : null
}

var Vh = Wf() ? F.useLayoutEffect : F.useEffect, Kh = [Eh, kh, $h, Oh], Uh = [Eh, Ph], Gh = !1;

function Xh(e) {
    return e === $h || e === Oh
}

const qh = (e => {
    var t = e;
    "object" === Yu(e) && (t = e.transitionSupport);
    var n = F.forwardRef(((e, n) => {
        var r = e.visible, o = void 0 === r || r, a = e.removeOnLeave, i = void 0 === a || a, l = e.forceRender,
            s = e.children, c = e.motionName, u = e.leavedClassName, d = e.eventProps,
            f = ((e, n) => !(!e.motionName || !t || !1 === n))(e, F.useContext(hh).motion), p = F.useRef(),
            m = F.useRef(), g = Df(function (e, t, n, r) {
                var o, a, i, l = r.motionEnter, s = void 0 === l || l, c = r.motionAppear, u = void 0 === c || c,
                    d = r.motionLeave, f = void 0 === d || d, p = r.motionDeadline, m = r.motionLeaveImmediately,
                    g = r.onAppearPrepare, h = r.onEnterPrepare, v = r.onLeavePrepare, b = r.onAppearStart,
                    y = r.onEnterStart, w = r.onLeaveStart, x = r.onAppearActive, C = r.onEnterActive, S = r.onLeaveActive,
                    E = r.onAppearEnd, k = r.onEnterEnd, $ = r.onLeaveEnd, O = r.onVisibleChanged, P = Df(Bg(), 2),
                    N = P[0], M = P[1],
                    R = (o = yh, a = Df(F.useReducer((e => e + 1), 0), 2)[1], i = F.useRef(o), [Dg((() => i.current)), Dg((e => {
                        i.current = "function" == typeof e ? e(i.current) : e, a()
                    }))]), I = Df(R, 2), j = I[0], z = I[1], T = Df(Bg(null), 2), _ = T[0], L = T[1], A = j(),
                    H = F.useRef(!1), D = F.useRef(null);

                function B() {
                    return n()
                }

                var W = F.useRef(!1);

                function V() {
                    z(yh), L(null, !0)
                }

                var K = Dg((e => {
                    var t = j();
                    if (t !== yh) {
                        var n = B();
                        if (!e || e.deadline || e.target === n) {
                            var r, o = W.current;
                            t === wh && o ? r = null == E ? void 0 : E(n, e) : t === xh && o ? r = null == k ? void 0 : k(n, e) : t === Ch && o && (r = null == $ ? void 0 : $(n, e)), o && !1 !== r && V()
                        }
                    }
                })), U = Df((e => {
                    var t = F.useRef();

                    function n(t) {
                        t && (t.removeEventListener(Bh, e), t.removeEventListener(Dh, e))
                    }

                    return F.useEffect((() => () => {
                        n(t.current)
                    }), []), [r => {
                        t.current && t.current !== r && n(t.current), r && r !== t.current && (r.addEventListener(Bh, e), r.addEventListener(Dh, e), t.current = r)
                    }, n]
                })(K), 1)[0], G = e => {
                    switch (e) {
                        case wh:
                            return wd(wd(wd({}, Eh, g), kh, b), $h, x);
                        case xh:
                            return wd(wd(wd({}, Eh, h), kh, y), $h, C);
                        case Ch:
                            return wd(wd(wd({}, Eh, v), kh, w), $h, S);
                        default:
                            return {}
                    }
                }, X = F.useMemo((() => G(A)), [A]), q = ((e, t, n) => {
                    var r = Df(Bg(Sh), 2), o = r[0], a = r[1], i = (() => {
                        var e = F.useRef(null);

                        function t() {
                            Ff.cancel(e.current)
                        }

                        return F.useEffect((() => () => {
                            t()
                        }), []), [function n(r) {
                            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            t();
                            var a = Ff((() => {
                                o <= 1 ? r({
                                    isCanceled() {
                                        return a !== e.current
                                    }
                                }) : n(r, o - 1)
                            }));
                            e.current = a
                        }, t]
                    })(), l = Df(i, 2), s = l[0], c = l[1], u = t ? Uh : Kh;
                    return Vh((() => {
                        if (o !== Sh && o !== Oh) {
                            var e = u.indexOf(o), t = u[e + 1], r = n(o);
                            r === Gh ? a(t, !0) : t && s((e => {
                                function n() {
                                    e.isCanceled() || a(t, !0)
                                }

                                !0 === r ? n() : Promise.resolve(r).then(n)
                            }))
                        }
                    }), [e, o]), F.useEffect((() => () => {
                        c()
                    }), []), [() => {
                        a(Eh, !0)
                    }, o]
                })(A, !e, (e => {
                    if (e === Eh) {
                        var t = X[Eh];
                        return t ? t(B()) : Gh
                    }
                    var n;
                    return Z in X && L((null === (n = X[Z]) || void 0 === n ? void 0 : n.call(X, B(), null)) || null), Z === $h && A !== yh && (U(B()), p > 0 && (clearTimeout(D.current), D.current = setTimeout((() => {
                        K({deadline: !0})
                    }), p))), Z === Ph && V(), !0
                })), Y = Df(q, 2), Q = Y[0], Z = Y[1], J = Xh(Z);
                W.current = J;
                var ee = F.useRef(null);
                Vh((() => {
                    if (!H.current || ee.current !== t) {
                        M(t);
                        var n, r = H.current;
                        H.current = !0, !r && t && u && (n = wh), r && t && s && (n = xh), (r && !t && f || !r && m && !t && f) && (n = Ch);
                        var o = G(n);
                        n && (e || o[Eh]) ? (z(n), Q()) : z(yh), ee.current = t
                    }
                }), [t]), F.useEffect((() => {
                    (A === wh && !u || A === xh && !s || A === Ch && !f) && z(yh)
                }), [u, s, f]), F.useEffect((() => () => {
                    H.current = !1, clearTimeout(D.current)
                }), []);
                var te = F.useRef(!1);
                F.useEffect((() => {
                    N && (te.current = !0), void 0 !== N && A === yh && ((te.current || N) && (null == O || O(N)), te.current = !0)
                }), [N, A]);
                var ne = _;
                return X[Eh] && Z === kh && (ne = Cd({transition: "none"}, ne)), [A, Z, ne, null != N ? N : t]
            }(f, o, (() => {
                try {
                    return p.current instanceof HTMLElement ? p.current : Ed(m.current)
                } catch (e) {
                    return null
                }
            }), e), 4), h = g[0], v = g[1], b = g[2], y = g[3], w = F.useRef(y);
        y && (w.current = !0);
        var x, C = F.useCallback((e => {
            p.current = e, Ud(n, e)
        }), [n]), S = Cd(Cd({}, d), {}, {visible: o});
        if (s) if (h === yh) x = y ? s(Cd({}, S), C) : !i && w.current && u ? s(Cd(Cd({}, S), {}, {className: u}), C) : l || !i && !u ? s(Cd(Cd({}, S), {}, {style: {display: "none"}}), C) : null; else {
            var E;
            v === Eh ? E = "prepare" : Xh(v) ? E = "active" : v === kh && (E = "start");
            var k = Wh(c, "".concat(h, "-").concat(E));
            x = s(Cd(Cd({}, S), {}, {
                className: sd(Wh(c, h), wd(wd({}, k, k && E), c, "string" == typeof c)),
                style: b
            }), C)
        } else x = null;
        return F.isValidElement(x) && qd(x) && (Qd(x) || (x = F.cloneElement(x, {ref: C}))), F.createElement(bh, {ref: m}, x)
    }));
    return n.displayName = "CSSMotion", n
})(Hh);
var Yh = "add", Qh = "keep", Zh = "remove", Jh = "removed";

function ev(e) {
    var t;
    return Cd(Cd({}, t = e && "object" === Yu(e) && "key" in e ? e : {key: e}), {}, {key: String(t.key)})
}

function tv() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(ev)
}

var nv = ["component", "children", "onVisibleChanged", "onAllRemoved"], rv = ["status"],
    ov = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
const av = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qh, n = function () {
        td(n, F.Component);
        var e = ad(n);

        function n() {
            var t;
            qu(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
            return wd(od(t = e.call.apply(e, [this].concat(o))), "state", {keyEntities: []}), wd(od(t), "removeKey", (e => {
                t.setState((t => ({keyEntities: t.keyEntities.map((t => t.key !== e ? t : Cd(Cd({}, t), {}, {status: Jh})))})), (() => {
                    0 === t.state.keyEntities.filter((e => e.status !== Jh)).length && t.props.onAllRemoved && t.props.onAllRemoved()
                }))
            })), t
        }

        return Ju(n, [{
            key: "render", value() {
                var e = this, n = this.state.keyEntities, r = this.props, o = r.component, a = r.children,
                    i = r.onVisibleChanged;
                r.onAllRemoved;
                var l = tp(r, nv), s = o || F.Fragment, c = {};
                return ov.forEach((e => {
                    c[e] = l[e], delete l[e]
                })), delete l.keys, F.createElement(s, l, n.map(((n, r) => {
                    var o = n.status, l = tp(n, rv), s = o === Yh || o === Qh;
                    return F.createElement(t, cd({}, c, {
                        key: l.key, visible: s, eventProps: l, onVisibleChanged(t) {
                            null == i || i(t, {key: l.key}), t || e.removeKey(l.key)
                        }
                    }), ((e, t) => a(Cd(Cd({}, e), {}, {index: r}), t)))
                })))
            }
        }], [{
            key: "getDerivedStateFromProps", value(e, t) {
                var n = e.keys, r = t.keyEntities, o = tv(n), a = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = [], r = 0,
                        o = t.length, a = tv(e), i = tv(t);
                    a.forEach((e => {
                        for (var t = !1, a = r; a < o; a += 1) {
                            var l = i[a];
                            if (l.key === e.key) {
                                r < a && (n = n.concat(i.slice(r, a).map((e => Cd(Cd({}, e), {}, {status: Yh})))), r = a), n.push(Cd(Cd({}, l), {}, {status: Qh})), r += 1, t = !0;
                                break
                            }
                        }
                        t || n.push(Cd(Cd({}, e), {}, {status: Zh}))
                    })), r < o && (n = n.concat(i.slice(r).map((e => Cd(Cd({}, e), {}, {status: Yh})))));
                    var l = {};
                    return n.forEach((e => {
                        var t = e.key;
                        l[t] = (l[t] || 0) + 1
                    })), Object.keys(l).filter((e => l[e] > 1)).forEach((e => {
                        (n = n.filter((t => {
                            var n = t.key, r = t.status;
                            return n !== e || r !== Zh
                        }))).forEach((t => {
                            t.key === e && (t.status = Qh)
                        }))
                    })), n
                }(r, o);
                return {
                    keyEntities: a.filter((e => {
                        var t = r.find((t => {
                            var n = t.key;
                            return e.key === n
                        }));
                        return !t || t.status !== Jh || e.status !== Zh
                    }))
                }
            }
        }]), n
    }();
    return wd(n, "defaultProps", {component: "div"}), n
}(Hh);

function iv(e) {
    const {children: t} = e, [, n] = Hg(), {motion: r} = n, o = F.useRef(!1);
    return o.current = o.current || !1 === r, o.current ? F.createElement(vh, {motion: r}, t) : t
}

const lv = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"];
let sv, cv, uv;

function dv() {
    return sv || "ant"
}

function fv() {
    return cv || Kg
}

const pv = () => ({
    getPrefixCls: (e, t) => t || (e ? `${dv()}-${e}` : dv()),
    getIconPrefixCls: fv,
    getRootPrefixCls: () => sv || dv(),
    getTheme: () => uv
}), mv = e => {
    const {
            children: t,
            csp: n,
            autoInsertSpaceInButton: r,
            alert: o,
            anchor: a,
            form: i,
            locale: l,
            componentSize: s,
            direction: c,
            space: u,
            virtual: d,
            dropdownMatchSelectWidth: f,
            popupMatchSelectWidth: p,
            popupOverflow: m,
            legacyLocale: g,
            parentContext: h,
            iconPrefixCls: v,
            theme: b,
            componentDisabled: y,
            segmented: w,
            statistic: x,
            spin: C,
            calendar: S,
            carousel: E,
            cascader: k,
            collapse: $,
            typography: O,
            checkbox: P,
            descriptions: N,
            divider: M,
            drawer: R,
            skeleton: I,
            steps: j,
            image: z,
            layout: T,
            list: _,
            mentions: L,
            modal: A,
            progress: H,
            result: D,
            slider: B,
            breadcrumb: W,
            menu: V,
            pagination: K,
            input: U,
            empty: G,
            badge: X,
            radio: q,
            rate: Y,
            switch: Q,
            transfer: Z,
            avatar: J,
            message: ee,
            tag: te,
            table: ne,
            card: re,
            tabs: oe,
            timeline: ae,
            timePicker: ie,
            upload: le,
            notification: se,
            tree: ce,
            colorPicker: ue,
            datePicker: de,
            wave: fe
        } = e, pe = F.useCallback(((t, n) => {
            const {prefixCls: r} = e;
            if (n) return n;
            const o = r || h.getPrefixCls("");
            return t ? `${o}-${t}` : o
        }), [h.getPrefixCls, e.prefixCls]), me = v || h.iconPrefixCls || Kg, ge = me !== h.iconPrefixCls, he = n || h.csp,
        ve = ih(me, he), be = ((e, t) => {
            const n = e || {}, r = !1 !== n.inherit && t ? t : jg;
            return Vd((() => {
                if (!e) return t;
                const o = Object.assign({}, r.components);
                return Object.keys(e.components || {}).forEach((t => {
                    o[t] = Object.assign(Object.assign({}, o[t]), e.components[t])
                })), Object.assign(Object.assign(Object.assign({}, r), n), {
                    token: Object.assign(Object.assign({}, r.token), n.token),
                    components: o
                })
            }), [n, r], ((e, t) => e.some(((e, n) => !np(e, t[n], !0)))))
        })(b, h.theme), ye = {
            csp: he,
            autoInsertSpaceInButton: r,
            alert: o,
            anchor: a,
            locale: l || g,
            direction: c,
            space: u,
            virtual: d,
            popupMatchSelectWidth: null != p ? p : f,
            popupOverflow: m,
            getPrefixCls: pe,
            iconPrefixCls: me,
            theme: be,
            segmented: w,
            statistic: x,
            spin: C,
            calendar: S,
            carousel: E,
            cascader: k,
            collapse: $,
            typography: O,
            checkbox: P,
            descriptions: N,
            divider: M,
            drawer: R,
            skeleton: I,
            steps: j,
            image: z,
            input: U,
            layout: T,
            list: _,
            mentions: L,
            modal: A,
            progress: H,
            result: D,
            slider: B,
            breadcrumb: W,
            menu: V,
            pagination: K,
            empty: G,
            badge: X,
            radio: q,
            rate: Y,
            switch: Q,
            transfer: Z,
            avatar: J,
            message: ee,
            tag: te,
            table: ne,
            card: re,
            tabs: oe,
            timeline: ae,
            timePicker: ie,
            upload: le,
            notification: se,
            tree: ce,
            colorPicker: ue,
            datePicker: de,
            wave: fe
        }, we = Object.assign({}, h);
    Object.keys(ye).forEach((e => {
        void 0 !== ye[e] && (we[e] = ye[e])
    })), lv.forEach((t => {
        const n = e[t];
        n && (we[t] = n)
    }));
    const xe = Vd((() => we), we, ((e, t) => {
        const n = Object.keys(e), r = Object.keys(t);
        return n.length !== r.length || n.some((n => e[n] !== t[n]))
    })), Ce = F.useMemo((() => ({prefixCls: me, csp: he})), [me, he]);
    let Se = ge ? ve(t) : t;
    const Ee = F.useMemo((() => {
        var e, t, n, r;
        return Lm((null === (e = Bm.Form) || void 0 === e ? void 0 : e.defaultValidateMessages) || {}, (null === (n = null === (t = xe.locale) || void 0 === t ? void 0 : t.Form) || void 0 === n ? void 0 : n.defaultValidateMessages) || {}, (null === (r = xe.form) || void 0 === r ? void 0 : r.validateMessages) || {}, (null == i ? void 0 : i.validateMessages) || {})
    }), [xe, null == i ? void 0 : i.validateMessages]);
    Object.keys(Ee).length > 0 && (Se = F.createElement(Fm.Provider, {value: Ee}, t)), l && (Se = F.createElement(qm, {
        locale: l,
        _ANT_MARK__: "internalMark"
    }, Se)), Se = F.createElement(Mm.Provider, {value: Ce}, Se), s && (Se = F.createElement(mh, {size: s}, Se)), Se = F.createElement(iv, null, Se);
    const ke = F.useMemo((() => {
        const e = be || {}, {algorithm: t, token: n, components: r} = e, o = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["algorithm", "token", "components"]), a = t && (!Array.isArray(t) || t.length > 0) ? pp(t) : Ig, i = {};
        return Object.entries(r || {}).forEach((e => {
            let [t, n] = e;
            const r = Object.assign({}, n);
            "algorithm" in r && (!0 === r.algorithm ? r.theme = a : (Array.isArray(r.algorithm) || "function" == typeof r.algorithm) && (r.theme = pp(r.algorithm)), delete r.algorithm), i[t] = r
        })), Object.assign(Object.assign({}, o), {
            theme: a,
            token: Object.assign(Object.assign({}, cg), n),
            components: i
        })
    }), [be]);
    return b && (Se = F.createElement(zg.Provider, {value: ke}, Se)), void 0 !== y && (Se = F.createElement(fh, {disabled: y}, Se)), F.createElement(Ug.Provider, {value: xe}, Se)
}, gv = e => {
    const t = F.useContext(Ug), n = F.useContext(Gm);
    return F.createElement(mv, Object.assign({parentContext: t, legacyLocale: n}, e))
};
gv.ConfigContext = Ug, gv.SizeContext = ph, gv.config = e => {
    let {prefixCls: t, iconPrefixCls: n, theme: r} = e;
    void 0 !== t && (sv = t), void 0 !== n && (cv = n), r && ((e => Object.keys(e).some((e => e.endsWith("Color"))))(r) ? function (e, t) {
        const n = ((e, t) => {
            const n = {}, r = (e, t) => {
                let n = e.clone();
                return n = (null == t ? void 0 : t(n)) || n, n.toRgbString()
            }, o = (e, t) => {
                const o = new Og(e), a = ig(o.toRgbString());
                n[`${t}-color`] = r(o), n[`${t}-color-disabled`] = a[1], n[`${t}-color-hover`] = a[4], n[`${t}-color-active`] = a[6], n[`${t}-color-outline`] = o.clone().setAlpha(.2).toRgbString(), n[`${t}-color-deprecated-bg`] = a[0], n[`${t}-color-deprecated-border`] = a[2]
            };
            if (t.primaryColor) {
                o(t.primaryColor, "primary");
                const e = new Og(t.primaryColor), a = ig(e.toRgbString());
                a.forEach(((e, t) => {
                    n[`primary-${t + 1}`] = e
                })), n["primary-color-deprecated-l-35"] = r(e, (e => e.lighten(35))), n["primary-color-deprecated-l-20"] = r(e, (e => e.lighten(20))), n["primary-color-deprecated-t-20"] = r(e, (e => e.tint(20))), n["primary-color-deprecated-t-50"] = r(e, (e => e.tint(50))), n["primary-color-deprecated-f-12"] = r(e, (e => e.setAlpha(.12 * e.getAlpha())));
                const i = new Og(a[0]);
                n["primary-color-active-deprecated-f-30"] = r(i, (e => e.setAlpha(.3 * e.getAlpha()))), n["primary-color-active-deprecated-d-02"] = r(i, (e => e.darken(2)))
            }
            return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `\n  :root {\n    ${Object.keys(n).map((t => `--${e}-${t}: ${n[t]};`)).join("\n")}\n  }\n  `.trim()
        })(e, t);
        Wf() && ep(n, `${uh}-dynamic-theme`)
    }(dv(), r) : uv = r)
}, gv.useConfig = () => ({
    componentDisabled: F.useContext(dh),
    componentSize: F.useContext(ph)
}), Object.defineProperty(gv, "SizeContext", {get: () => ph});
var hv = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}
        }]
    }, name: "check-circle", theme: "filled"
};

function vv(e) {
    var t;
    return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
}

function bv(e) {
    return (e => vv(e) instanceof ShadowRoot)(e) ? vv(e) : null
}

function yv(e) {
    return "object" === Yu(e) && "string" == typeof e.name && "string" == typeof e.theme && ("object" === Yu(e.icon) || "function" == typeof e.icon)
}

function wv() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Object.keys(e).reduce(((t, n) => {
        var r, o = e[n];
        return "class" === n ? (t.className = o, delete t.class) : (delete t[n], t[(r = n, r.replace(/-(.)/g, ((e, t) => t.toUpperCase())))] = o), t
    }), {})
}

function xv(e, t, n) {
    return n ? A.createElement(e.tag, Cd(Cd({key: t}, wv(e.attrs)), n), (e.children || []).map(((n, r) => xv(n, "".concat(t, "-").concat(e.tag, "-").concat(r))))) : A.createElement(e.tag, Cd({key: t}, wv(e.attrs)), (e.children || []).map(((n, r) => xv(n, "".concat(t, "-").concat(e.tag, "-").concat(r)))))
}

function Cv(e) {
    return ig(e)[0]
}

function Sv(e) {
    return e ? Array.isArray(e) ? e : [e] : []
}

var Ev = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
    kv = {primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1}, $v = e => {
        var t, n, r, o, a, i, l, s, c = e.icon, u = e.className, d = e.onClick, f = e.style, p = e.primaryColor,
            m = e.secondaryColor, g = tp(e, Ev), h = F.useRef(), v = kv;
        if (p && (v = {
            primaryColor: p,
            secondaryColor: m || Cv(p)
        }), t = h, n = F.useContext(Mm), r = n.csp, o = n.prefixCls, a = n.layer, i = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, " {\n").concat(i, "\n}")), F.useEffect((() => {
            var e = bv(t.current);
            ep(i, "@ant-design-icons", {prepend: !a, csp: r, attachTo: e})
        }), []), l = yv(c), s = "icon should be icon definiton, but got ".concat(c), yd(l, "[@ant-design/icons] ".concat(s)), !yv(c)) return null;
        var b = c;
        return b && "function" == typeof b.icon && (b = Cd(Cd({}, b), {}, {icon: b.icon(v.primaryColor, v.secondaryColor)})), xv(b.icon, "svg-".concat(b.name), Cd(Cd({
            className: u,
            onClick: d,
            style: f,
            "data-icon": b.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true"
        }, g), {}, {ref: h}))
    };

function Ov(e) {
    var t = Df(Sv(e), 2), n = t[0], r = t[1];
    return $v.setTwoToneColors({primaryColor: n, secondaryColor: r})
}

$v.displayName = "IconReact", $v.getTwoToneColors = () => Cd({}, kv), $v.setTwoToneColors = e => {
    var t = e.primaryColor, n = e.secondaryColor;
    kv.primaryColor = t, kv.secondaryColor = n || Cv(t), kv.calculated = !!n
};
var Pv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Ov(lg.primary);
var Nv = F.forwardRef(((e, t) => {
    var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor,
        c = tp(e, Pv), u = F.useContext(Mm), d = u.prefixCls, f = void 0 === d ? "anticon" : d, p = u.rootClassName,
        m = sd(p, f, wd(wd({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || "loading" === r.name), n),
        g = i;
    void 0 === g && l && (g = -1);
    var h = a ? {msTransform: "rotate(".concat(a, "deg)"), transform: "rotate(".concat(a, "deg)")} : void 0,
        v = Df(Sv(s), 2), b = v[0], y = v[1];
    return F.createElement("span", cd({role: "img", "aria-label": r.name}, c, {
        ref: t,
        tabIndex: g,
        onClick: l,
        className: m
    }), F.createElement($v, {icon: r, primaryColor: b, secondaryColor: y, style: h}))
}));
Nv.displayName = "AntdIcon", Nv.getTwoToneColor = () => {
    var e = $v.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}, Nv.setTwoToneColor = Ov;
var Mv = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: hv})), Rv = F.forwardRef(Mv), Iv = {
        icon: {
            tag: "svg",
            attrs: {"fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false"},
            children: [{
                tag: "path",
                attrs: {d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}
            }]
        }, name: "close-circle", theme: "filled"
    }, jv = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: Iv})), zv = F.forwardRef(jv), Tv = {
        icon: {
            tag: "svg",
            attrs: {"fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false"},
            children: [{
                tag: "path",
                attrs: {d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}
            }]
        }, name: "close", theme: "outlined"
    }, _v = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: Tv})), Lv = F.forwardRef(_v), Fv = {
        icon: {
            tag: "svg",
            attrs: {viewBox: "64 64 896 896", focusable: "false"},
            children: [{
                tag: "path",
                attrs: {d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}
            }]
        }, name: "exclamation-circle", theme: "filled"
    }, Av = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: Fv})), Hv = F.forwardRef(Av), Dv = {
        icon: {
            tag: "svg",
            attrs: {viewBox: "64 64 896 896", focusable: "false"},
            children: [{
                tag: "path",
                attrs: {d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}
            }]
        }, name: "info-circle", theme: "filled"
    }, Bv = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: Dv})), Wv = F.forwardRef(Bv),
    Vv = "".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap", " ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);

function Kv(e, t) {
    return 0 === e.indexOf(t)
}

function Uv(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    t = !1 === n ? {aria: !0, data: !0, attr: !0} : !0 === n ? {aria: !0} : Cd({}, n);
    var r = {};
    return Object.keys(e).forEach((n => {
        (t.aria && ("role" === n || Kv(n, "aria-")) || t.data && Kv(n, "data-") || t.attr && Vv.includes(n)) && (r[n] = e[n])
    })), r
}

const {isValidElement: Gv} = H;

function Xv(e) {
    return e && Gv(e) && e.type === F.Fragment
}

function qv(e, t) {
    return ((e, t, n) => Gv(e) ? F.cloneElement(e, "function" == typeof n ? n(e.props || {}) : n) : t)(e, e, t)
}

var Yv = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        N: 78,
        P: 80,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SEMICOLON: 186,
        EQUALS: 187,
        WIN_KEY: 224
    }, Qv = F.forwardRef(((e, t) => {
        var n = e.prefixCls, r = e.style, o = e.className, a = e.duration, i = void 0 === a ? 4.5 : a, l = e.eventKey,
            s = e.content, c = e.closable, u = e.closeIcon, d = void 0 === u ? "x" : u, f = e.props, p = e.onClick,
            m = e.onNoticeClose, g = e.times, h = Df(F.useState(!1), 2), v = h[0], b = h[1], y = () => {
                m(l)
            };
        F.useEffect((() => {
            if (!v && i > 0) {
                var e = setTimeout((() => {
                    y()
                }), 1e3 * i);
                return () => {
                    clearTimeout(e)
                }
            }
        }), [i, v, g]);
        var w = "".concat(n, "-notice");
        return F.createElement("div", cd({}, f, {
            ref: t,
            className: sd(w, o, wd({}, "".concat(w, "-closable"), c)),
            style: r,
            onMouseEnter() {
                b(!0)
            },
            onMouseLeave() {
                b(!1)
            },
            onClick: p
        }), F.createElement("div", {className: "".concat(w, "-content")}, s), c && F.createElement("a", {
            tabIndex: 0,
            className: "".concat(w, "-close"),
            onKeyDown(e) {
                "Enter" !== e.key && "Enter" !== e.code && e.keyCode !== Yv.ENTER || y()
            },
            onClick(e) {
                e.preventDefault(), e.stopPropagation(), y()
            }
        }, d))
    })), Zv = A.createContext({}), Jv = e => {
        var t = e.children, n = e.classNames;
        return A.createElement(Zv.Provider, {value: {classNames: n}}, t)
    }, eb = e => {
        var t = e.configList, n = e.placement, r = e.prefixCls, o = e.className, a = e.style, i = e.motion,
            l = e.onAllNoticeRemoved, s = e.onNoticeClose, c = F.useContext(Zv).classNames,
            u = t.map((e => ({config: e, key: e.key}))), d = "function" == typeof i ? i(n) : i;
        return A.createElement(av, cd({
            key: n,
            className: sd(r, "".concat(r, "-").concat(n), null == c ? void 0 : c.list, o),
            style: a,
            keys: u,
            motionAppear: !0
        }, d, {
            onAllRemoved() {
                l(n)
            }
        }), ((e, t) => {
            var n = e.config, o = e.className, a = e.style, i = n, l = i.key, u = i.times, d = n, f = d.className,
                p = d.style;
            return A.createElement(Qv, cd({}, n, {
                ref: t,
                prefixCls: r,
                className: sd(o, f, null == c ? void 0 : c.notice),
                style: Cd(Cd({}, a), p),
                times: u,
                key: l,
                eventKey: l,
                onNoticeClose: s
            }))
        }))
    }, tb = F.forwardRef(((e, t) => {
        var n = e.prefixCls, r = void 0 === n ? "rc-notification" : n, o = e.container, a = e.motion, i = e.maxCount,
            l = e.className, s = e.style, c = e.onAllRemoved, u = e.renderNotifications, d = Df(F.useState([]), 2),
            f = d[0], p = d[1], m = e => {
                var t, n = f.find((t => t.key === e));
                null == n || null === (t = n.onClose) || void 0 === t || t.call(n), p((t => t.filter((t => t.key !== e))))
            };
        F.useImperativeHandle(t, (() => ({
            open(e) {
                p((t => {
                    var n, r = If(t), o = r.findIndex((t => t.key === e.key)), a = Cd({}, e);
                    return o >= 0 ? (a.times = ((null === (n = t[o]) || void 0 === n ? void 0 : n.times) || 0) + 1, r[o] = a) : (a.times = 0, r.push(a)), i > 0 && r.length > i && (r = r.slice(-i)), r
                }))
            }, close(e) {
                m(e)
            }, destroy() {
                p([])
            }
        })));
        var g = Df(F.useState({}), 2), h = g[0], v = g[1];
        F.useEffect((() => {
            var e = {};
            f.forEach((t => {
                var n = t.placement, r = void 0 === n ? "topRight" : n;
                r && (e[r] = e[r] || [], e[r].push(t))
            })), Object.keys(h).forEach((t => {
                e[t] = e[t] || []
            })), v(e)
        }), [f]);
        var b = e => {
            v((t => {
                var n = Cd({}, t);
                return (n[e] || []).length || delete n[e], n
            }))
        }, y = F.useRef(!1);
        if (F.useEffect((() => {
            Object.keys(h).length > 0 ? y.current = !0 : y.current && (null == c || c(), y.current = !1)
        }), [h]), !o) return null;
        var w = Object.keys(h);
        return Uu.createPortal(F.createElement(F.Fragment, null, w.map((e => {
            var t = h[e], n = F.createElement(eb, {
                key: e,
                configList: t,
                placement: e,
                prefixCls: r,
                className: null == l ? void 0 : l(e),
                style: null == s ? void 0 : s(e),
                motion: a,
                onNoticeClose: m,
                onAllNoticeRemoved: b
            });
            return u ? u(n, {prefixCls: r, key: e}) : n
        }))), o)
    })),
    nb = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "renderNotifications"],
    rb = () => document.body, ob = 0;

function ab() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.getContainer,
        n = void 0 === t ? rb : t, r = e.motion, o = e.prefixCls, a = e.maxCount, i = e.className, l = e.style,
        s = e.onAllRemoved, c = e.renderNotifications, u = tp(e, nb), d = Df(F.useState(), 2), f = d[0], p = d[1],
        m = F.useRef(), g = F.createElement(tb, {
            container: f,
            ref: m,
            prefixCls: o,
            motion: r,
            maxCount: a,
            className: i,
            style: l,
            onAllRemoved: s,
            renderNotifications: c
        }), h = Df(F.useState([]), 2), v = h[0], b = h[1], y = F.useMemo((() => ({
            open(e) {
                var t = function () {
                    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return n.forEach((t => {
                        t && Object.keys(t).forEach((n => {
                            var r = t[n];
                            void 0 !== r && (e[n] = r)
                        }))
                    })), e
                }(u, e);
                null !== t.key && void 0 !== t.key || (t.key = "rc-notification-".concat(ob), ob += 1), b((e => [].concat(If(e), [{
                    type: "open",
                    config: t
                }])))
            }, close(e) {
                b((t => [].concat(If(t), [{type: "close", key: e}])))
            }, destroy() {
                b((e => [].concat(If(e), [{type: "destroy"}])))
            }
        })), []);
    return F.useEffect((() => {
        p(n())
    })), F.useEffect((() => {
        m.current && v.length && (v.forEach((e => {
            switch (e.type) {
                case"open":
                    m.current.open(e.config);
                    break;
                case"close":
                    m.current.close(e.key);
                    break;
                case"destroy":
                    m.current.destroy()
            }
        })), b((e => e.filter((e => !v.includes(e))))))
    }), [v]), [y, g]
}

var ib = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "0 0 1024 1024", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}
        }]
    }, name: "loading", theme: "outlined"
}, lb = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: ib})), sb = F.forwardRef(lb);
const cb = e => {
    const {
        componentCls: t,
        iconCls: n,
        boxShadow: r,
        colorText: o,
        colorSuccess: a,
        colorError: i,
        colorWarning: l,
        colorInfo: s,
        fontSizeLG: c,
        motionEaseInOutCirc: u,
        motionDurationSlow: d,
        marginXS: f,
        paddingXS: p,
        borderRadiusLG: m,
        zIndexPopup: g,
        contentPadding: h,
        contentBg: v
    } = e, b = `${t}-notice`, y = new Pm("MessageMoveIn", {
        "0%": {padding: 0, transform: "translateY(-100%)", opacity: 0},
        "100%": {padding: p, transform: "translateY(0)", opacity: 1}
    }), w = new Pm("MessageMoveOut", {
        "0%": {maxHeight: e.height, padding: p, opacity: 1},
        "100%": {maxHeight: 0, padding: 0, opacity: 0}
    }), x = {
        padding: p,
        textAlign: "center",
        [`${t}-custom-content > ${n}`]: {verticalAlign: "text-bottom", marginInlineEnd: f, fontSize: c},
        [`${b}-content`]: {
            display: "inline-block",
            padding: h,
            background: v,
            borderRadius: m,
            boxShadow: r,
            pointerEvents: "all"
        },
        [`${t}-success > ${n}`]: {color: a},
        [`${t}-error > ${n}`]: {color: i},
        [`${t}-warning > ${n}`]: {color: l},
        [`${t}-info > ${n},\n      ${t}-loading > ${n}`]: {color: s}
    };
    return [{
        [t]: Object.assign(Object.assign({}, Yg(e)), {
            color: o,
            position: "fixed",
            top: f,
            width: "100%",
            pointerEvents: "none",
            zIndex: g,
            [`${t}-move-up`]: {animationFillMode: "forwards"},
            [`\n        ${t}-move-up-appear,\n        ${t}-move-up-enter\n      `]: {
                animationName: y,
                animationDuration: d,
                animationPlayState: "paused",
                animationTimingFunction: u
            },
            [`\n        ${t}-move-up-appear${t}-move-up-appear-active,\n        ${t}-move-up-enter${t}-move-up-enter-active\n      `]: {animationPlayState: "running"},
            [`${t}-move-up-leave`]: {
                animationName: w,
                animationDuration: d,
                animationPlayState: "paused",
                animationTimingFunction: u
            },
            [`${t}-move-up-leave${t}-move-up-leave-active`]: {animationPlayState: "running"},
            "&-rtl": {direction: "rtl", span: {direction: "rtl"}}
        })
    }, {[t]: {[b]: Object.assign({}, x)}}, {
        [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, x), {
            padding: 0,
            textAlign: "start"
        })
    }]
}, ub = lh("Message", (e => {
    const t = rh(e, {height: 150});
    return [cb(t)]
}), (e => ({
    zIndexPopup: e.zIndexPopupBase + 10,
    contentBg: e.colorBgElevated,
    contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}))), db = {
    info: F.createElement(Wv, null),
    success: F.createElement(Rv, null),
    error: F.createElement(zv, null),
    warning: F.createElement(Hv, null),
    loading: F.createElement(sb, null)
}, fb = e => {
    let {prefixCls: t, type: n, icon: r, children: o} = e;
    return F.createElement("div", {className: sd(`${t}-custom-content`, `${t}-${n}`)}, r || db[n], F.createElement("span", null, o))
};

function pb(e) {
    let t;
    const n = new Promise((n => {
        t = e((() => {
            n(!0)
        }))
    })), r = () => {
        null == t || t()
    };
    return r.then = (e, t) => n.then(e, t), r.promise = n, r
}

const mb = 3, gb = e => {
    let {children: t, prefixCls: n} = e;
    const [, r] = ub(n);
    return F.createElement(Jv, {classNames: {list: r, notice: r}}, t)
}, hb = (e, t) => {
    let {prefixCls: n, key: r} = t;
    return F.createElement(gb, {prefixCls: n, key: r}, e)
}, vb = F.forwardRef(((e, t) => {
    const {
            top: n,
            prefixCls: r,
            getContainer: o,
            maxCount: a,
            duration: i = mb,
            rtl: l,
            transitionName: s,
            onAllRemoved: c
        } = e, {getPrefixCls: u, getPopupContainer: d, message: f} = F.useContext(Ug), p = r || u("message"),
        m = F.createElement("span", {className: `${p}-close-x`}, F.createElement(Lv, {className: `${p}-close-icon`})), [g, h] = ab({
            prefixCls: p,
            style: () => ({left: "50%", transform: "translateX(-50%)", top: null != n ? n : 8}),
            className: () => sd({[`${p}-rtl`]: l}),
            motion: () => ((e, t) => ({motionName: null != t ? t : `${e}-move-up`}))(p, s),
            closable: !1,
            closeIcon: m,
            duration: i,
            getContainer: () => (null == o ? void 0 : o()) || (null == d ? void 0 : d()) || document.body,
            maxCount: a,
            onAllRemoved: c,
            renderNotifications: hb
        });
    return F.useImperativeHandle(t, (() => Object.assign(Object.assign({}, g), {prefixCls: p, message: f}))), h
}));
let bb = 0;

function yb(e) {
    const t = F.useRef(null);
    return [F.useMemo((() => {
        const e = e => {
            var n;
            null === (n = t.current) || void 0 === n || n.close(e)
        }, n = n => {
            if (!t.current) {
                const e = () => {
                };
                return e.then = () => {
                }, e
            }
            const {open: r, prefixCls: o, message: a} = t.current, i = `${o}-notice`, {
                content: l,
                icon: s,
                type: c,
                key: u,
                className: d,
                style: f,
                onClose: p
            } = n, m = ((e, t) => {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            })(n, ["content", "icon", "type", "key", "className", "style", "onClose"]);
            let g = u;
            return null == g && (bb += 1, g = `antd-message-${bb}`), pb((t => (r(Object.assign(Object.assign({}, m), {
                key: g,
                content: F.createElement(fb, {prefixCls: o, type: c, icon: s}, l),
                placement: "top",
                className: sd(c && `${i}-${c}`, d, null == a ? void 0 : a.className),
                style: Object.assign(Object.assign({}, null == a ? void 0 : a.style), f),
                onClose() {
                    null == p || p(), t()
                }
            })), () => {
                e(g)
            })))
        }, r = {
            open: n, destroy(n) {
                var r;
                void 0 !== n ? e(n) : null === (r = t.current) || void 0 === r || r.destroy()
            }
        };
        return ["info", "success", "warning", "error", "loading"].forEach((e => {
            r[e] = (t, r, o) => {
                let a, i, l;
                a = t && "object" == typeof t && "content" in t ? t : {content: t}, "function" == typeof r ? l = r : (i = r, l = o);
                const s = Object.assign(Object.assign({onClose: l, duration: i}, a), {type: e});
                return n(s)
            }
        })), r
    }), []), F.createElement(vb, Object.assign({key: "message-holder"}, e, {ref: t}))]
}

function wb() {
    wb = () => t;
    var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || ((e, t, n) => {
            e[t] = n.value
        }), a = "function" == typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator",
        l = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";

    function c(e, t, n) {
        return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
    }

    try {
        c({}, "")
    } catch (I) {
        c = (e, t, n) => e[t] = n
    }

    function u(e, t, n, r) {
        var a = t && t.prototype instanceof v ? t : v, i = Object.create(a.prototype), l = new M(r || []);
        return o(i, "_invoke", {value: $(e, n, l)}), i
    }

    function d(e, t, n) {
        try {
            return {type: "normal", arg: e.call(t, n)}
        } catch (r) {
            return {type: "throw", arg: r}
        }
    }

    t.wrap = u;
    var f = "suspendedStart", p = "suspendedYield", m = "executing", g = "completed", h = {};

    function v() {
    }

    function b() {
    }

    function y() {
    }

    var w = {};
    c(w, i, (function () {
        return this
    }));
    var x = Object.getPrototypeOf, C = x && x(x(R([])));
    C && C !== n && r.call(C, i) && (w = C);
    var S = y.prototype = v.prototype = Object.create(w);

    function E(e) {
        ["next", "throw", "return"].forEach((function (t) {
            c(e, t, (function (e) {
                return this._invoke(t, e)
            }))
        }))
    }

    function k(e, t) {
        function n(o, a, i, l) {
            var s = d(e[o], e, a);
            if ("throw" !== s.type) {
                var c = s.arg, u = c.value;
                return u && "object" == Yu(u) && r.call(u, "__await") ? t.resolve(u.__await).then((e => {
                    n("next", e, i, l)
                }), (e => {
                    n("throw", e, i, l)
                })) : t.resolve(u).then((e => {
                    c.value = e, i(c)
                }), (e => n("throw", e, i, l)))
            }
            l(s.arg)
        }

        var a;
        o(this, "_invoke", {
            value(e, r) {
                function o() {
                    return new t(((t, o) => {
                        n(e, r, t, o)
                    }))
                }

                return a = a ? a.then(o, o) : o()
            }
        })
    }

    function $(t, n, r) {
        var o = f;
        return (a, i) => {
            if (o === m) throw Error("Generator is already running");
            if (o === g) {
                if ("throw" === a) throw i;
                return {value: e, done: !0}
            }
            for (r.method = a, r.arg = i; ;) {
                var l = r.delegate;
                if (l) {
                    var s = O(l, r);
                    if (s) {
                        if (s === h) continue;
                        return s
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                    if (o === f) throw o = g, r.arg;
                    r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = m;
                var c = d(t, n, r);
                if ("normal" === c.type) {
                    if (o = r.done ? g : p, c.arg === h) continue;
                    return {value: c.arg, done: r.done}
                }
                "throw" === c.type && (o = g, r.method = "throw", r.arg = c.arg)
            }
        }
    }

    function O(t, n) {
        var r = n.method, o = t.iterator[r];
        if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h;
        var a = d(o, t.iterator, n.arg);
        if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, h;
        var i = a.arg;
        return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, h) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h)
    }

    function P(e) {
        var t = {tryLoc: e[0]};
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function N(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function M(e) {
        this.tryEntries = [{tryLoc: "root"}], e.forEach(P, this), this.reset(!0)
    }

    function R(t) {
        if (t || "" === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var o = -1, a = function n() {
                    for (; ++o < t.length;) if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                    return n.value = e, n.done = !0, n
                };
                return a.next = a
            }
        }
        throw new TypeError(Yu(t) + " is not iterable")
    }

    return b.prototype = y, o(S, "constructor", {value: y, configurable: !0}), o(y, "constructor", {
        value: b,
        configurable: !0
    }), b.displayName = c(y, s, "GeneratorFunction"), t.isGeneratorFunction = e => {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
    }, t.mark = e => (Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, c(e, s, "GeneratorFunction")), e.prototype = Object.create(S), e), t.awrap = e => ({__await: e}), E(k.prototype), c(k.prototype, l, (function () {
        return this
    })), t.AsyncIterator = k, t.async = (e, n, r, o, a) => {
        void 0 === a && (a = Promise);
        var i = new k(u(e, n, r, o), a);
        return t.isGeneratorFunction(n) ? i : i.next().then((e => e.done ? e.value : i.next()))
    }, E(S), c(S, s, "Generator"), c(S, i, (function () {
        return this
    })), c(S, "toString", (() => "[object Generator]")), t.keys = e => {
        var t = Object(e), n = [];
        for (var r in t) n.push(r);
        return n.reverse(), function e() {
            for (; n.length;) {
                var r = n.pop();
                if (r in t) return e.value = r, e.done = !1, e
            }
            return e.done = !0, e
        }
    }, t.values = R, M.prototype = {
        constructor: M, reset(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
        }, stop() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
        }, dispatchException(t) {
            if (this.done) throw t;
            var n = this;

            function o(r, o) {
                return l.type = "throw", l.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
            }

            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a], l = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                    var s = r.call(i, "catchLoc"), c = r.call(i, "finallyLoc");
                    if (s && c) {
                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                    } else if (s) {
                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                    } else {
                        if (!c) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                    }
                }
            }
        }, abrupt(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var a = o;
                    break
                }
            }
            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
            var i = a ? a.completion : {};
            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(i)
        }, complete(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
        }, finish(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h
            }
        }, catch(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var o = r.arg;
                        N(n)
                    }
                    return o
                }
            }
            throw Error("illegal catch attempt")
        }, delegateYield(t, n, r) {
            return this.delegate = {
                iterator: R(t),
                resultName: n,
                nextLoc: r
            }, "next" === this.method && (this.arg = e), h
        }
    }, t
}

function xb(e, t, n, r, o, a, i) {
    try {
        var l = e[a](i), s = l.value
    } catch (c) {
        return void n(c)
    }
    l.done ? t(s) : Promise.resolve(s).then(r, o)
}

function Cb(e) {
    return function () {
        var t = this, n = arguments;
        return new Promise(((r, o) => {
            var a = e.apply(t, n);

            function i(e) {
                xb(a, r, o, i, l, "next", e)
            }

            function l(e) {
                xb(a, r, o, i, l, "throw", e)
            }

            i(void 0)
        }))
    }
}

var Sb, Eb = Cd({}, Xu), kb = Eb.version, $b = Eb.render, Ob = Eb.unmountComponentAtNode;
try {
    Number((kb || "").split(".")[0]) >= 18 && (Sb = Eb.createRoot)
} catch (CM) {
}

function Pb(e) {
    var t = Eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && "object" === Yu(t) && (t.usingClientEntryPoint = e)
}

var Nb = "__rc_react_root__";

function Mb(e, t) {
    Sb ? ((e, t) => {
        Pb(!0);
        var n = t[Nb] || Sb(t);
        Pb(!1), n.render(e), t[Nb] = n
    })(e, t) : ((e, t) => {
        null == $b || $b(e, t)
    })(e, t)
}

function Rb(e) {
    return Ib.apply(this, arguments)
}

function Ib() {
    return (Ib = Cb(wb().mark((function e(t) {
        return wb().wrap((e => {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.abrupt("return", Promise.resolve().then((() => {
                        var e;
                        null === (e = t[Nb]) || void 0 === e || e.unmount(), delete t[Nb]
                    })));
                case 1:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

function jb(e) {
    Ob(e)
}

function zb(e) {
    return Tb.apply(this, arguments)
}

function Tb() {
    return (Tb = Cb(wb().mark((function e(t) {
        return wb().wrap((e => {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    if (void 0 === Sb) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return", Rb(t));
                case 2:
                    jb(t);
                case 3:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

const _b = e => {
    if (!e) return !1;
    if (e instanceof Element) {
        if (e.offsetParent) return !0;
        if (e.getBBox) {
            var t = e.getBBox(), n = t.width, r = t.height;
            if (n || r) return !0
        }
        if (e.getBoundingClientRect) {
            var o = e.getBoundingClientRect(), a = o.width, i = o.height;
            if (a || i) return !0
        }
    }
    return !1
}, Lb = e => {
    const {componentCls: t, colorPrimary: n} = e;
    return {
        [t]: {
            position: "absolute",
            background: "transparent",
            pointerEvents: "none",
            boxSizing: "border-box",
            color: `var(--wave-color, ${n})`,
            boxShadow: "0 0 0 0 currentcolor",
            opacity: .2,
            "&.wave-motion-appear": {
                transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
                "&-active": {boxShadow: "0 0 0 6px currentcolor", opacity: 0},
                "&.wave-quick": {transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")}
            }
        }
    }
}, Fb = lh("Wave", (e => [Lb(e)]));

function Ab(e) {
    return e && "#fff" !== e && "#ffffff" !== e && "rgb(255, 255, 255)" !== e && "rgba(255, 255, 255, 1)" !== e && (e => {
        const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        return !(t && t[1] && t[2] && t[3] && t[1] === t[2] && t[2] === t[3])
    })(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && "transparent" !== e
}

const Hb = "ant-wave-target";

function Db(e) {
    return Number.isNaN(e) ? 0 : e
}

const Bb = e => {
    const {className: t, target: n, component: r} = e,
        o = F.useRef(null), [a, i] = F.useState(null), [l, s] = F.useState([]), [c, u] = F.useState(0), [d, f] = F.useState(0), [p, m] = F.useState(0), [g, h] = F.useState(0), [v, b] = F.useState(!1),
        y = {left: c, top: d, width: p, height: g, borderRadius: l.map((e => `${e}px`)).join(" ")};

    function w() {
        const e = getComputedStyle(n);
        i((e => {
            const {borderTopColor: t, borderColor: n, backgroundColor: r} = getComputedStyle(e);
            return Ab(t) ? t : Ab(n) ? n : Ab(r) ? r : null
        })(n));
        const t = "static" === e.position, {borderLeftWidth: r, borderTopWidth: o} = e;
        u(t ? n.offsetLeft : Db(-parseFloat(r))), f(t ? n.offsetTop : Db(-parseFloat(o))), m(n.offsetWidth), h(n.offsetHeight);
        const {
            borderTopLeftRadius: a,
            borderTopRightRadius: l,
            borderBottomLeftRadius: c,
            borderBottomRightRadius: d
        } = e;
        s([a, l, d, c].map((e => Db(parseFloat(e)))))
    }

    if (a && (y["--wave-color"] = a), F.useEffect((() => {
        if (n) {
            const e = Ff((() => {
                w(), b(!0)
            }));
            let t;
            return "undefined" != typeof ResizeObserver && (t = new ResizeObserver(w), t.observe(n)), () => {
                Ff.cancel(e), null == t || t.disconnect()
            }
        }
    }), []), !v) return null;
    const x = ("Checkbox" === r || "Radio" === r) && (null == n ? void 0 : n.classList.contains(Hb));
    return F.createElement(qh, {
        visible: !0,
        motionAppear: !0,
        motionName: "wave-motion",
        motionDeadline: 5e3,
        onAppearEnd(e, t) {
            var n;
            if (t.deadline || "opacity" === t.propertyName) {
                const e = null === (n = o.current) || void 0 === n ? void 0 : n.parentElement;
                zb(e).then((() => {
                    null == e || e.remove()
                }))
            }
            return !1
        }
    }, (e => {
        let {className: n} = e;
        return F.createElement("div", {ref: o, className: sd(t, {"wave-quick": x}, n), style: y})
    }))
}, Wb = (e, t) => {
    var n;
    const {component: r} = t;
    if ("Checkbox" === r && !(null === (n = e.querySelector("input")) || void 0 === n ? void 0 : n.checked)) return;
    const o = document.createElement("div");
    o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", null == e || e.insertBefore(o, null == e ? void 0 : e.firstChild), Mb(F.createElement(Bb, Object.assign({}, t, {target: e})), o)
};

function Vb(e, t, n) {
    const {wave: r} = F.useContext(Ug), [, o, a] = Hg(), i = Dg((i => {
        const l = e.current;
        if ((null == r ? void 0 : r.disabled) || !l) return;
        const s = l.querySelector(`.${Hb}`) || l, {showEffect: c} = r || {};
        (c || Wb)(s, {className: t, token: o, component: n, event: i, hashId: a})
    })), l = F.useRef();
    return e => {
        Ff.cancel(l.current), l.current = Ff((() => {
            i(e)
        }))
    }
}

const Kb = e => {
    const {children: t, disabled: n, component: r} = e, {getPrefixCls: o} = F.useContext(Ug), a = F.useRef(null),
        i = o("wave"), [, l] = Fb(i), s = Vb(a, sd(i, l), r);
    return A.useEffect((() => {
        const e = a.current;
        if (!e || 1 !== e.nodeType || n) return;
        const t = t => {
            !_b(t.target) || !e.getAttribute || e.getAttribute("disabled") || e.disabled || e.className.includes("disabled") || e.className.includes("-leave") || s(t)
        };
        return e.addEventListener("click", t, !0), () => {
            e.removeEventListener("click", t, !0)
        }
    }), [n]), A.isValidElement(t) ? qv(t, {ref: qd(t) ? Gd(t.ref, a) : a}) : null != t ? t : null
}, Ub = e => {
    const t = A.useContext(ph);
    return A.useMemo((() => e ? "string" == typeof e ? null != e ? e : t : e instanceof Function ? e(t) : t : t), [e, t])
}, Gb = e => {
    const {componentCls: t} = e;
    return {[t]: {"&-block": {display: "flex", width: "100%"}, "&-vertical": {flexDirection: "column"}}}
}, Xb = e => {
    const {componentCls: t} = e;
    return {
        [t]: {
            display: "inline-flex",
            "&-rtl": {direction: "rtl"},
            "&-vertical": {flexDirection: "column"},
            "&-align": {
                flexDirection: "column",
                "&-center": {alignItems: "center"},
                "&-start": {alignItems: "flex-start"},
                "&-end": {alignItems: "flex-end"},
                "&-baseline": {alignItems: "baseline"}
            },
            [`${t}-item:empty`]: {display: "none"}
        }
    }
}, qb = lh("Space", (e => [Xb(e), Gb(e)]), (() => ({})), {resetStyle: !1});
var Yb = (e, t) => {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
    }
    return n
};
const Qb = F.createContext(null), Zb = (e, t) => {
    const n = F.useContext(Qb), r = F.useMemo((() => {
        if (!n) return "";
        const {compactDirection: r, isFirstItem: o, isLastItem: a} = n, i = "vertical" === r ? "-vertical-" : "-";
        return sd(`${e}-compact${i}item`, {
            [`${e}-compact${i}first-item`]: o,
            [`${e}-compact${i}last-item`]: a,
            [`${e}-compact${i}item-rtl`]: "rtl" === t
        })
    }), [e, t, n]);
    return {
        compactSize: null == n ? void 0 : n.compactSize,
        compactDirection: null == n ? void 0 : n.compactDirection,
        compactItemClassnames: r
    }
}, Jb = e => {
    let {children: t} = e;
    return F.createElement(Qb.Provider, {value: null}, t)
}, ey = e => {
    var {children: t} = e, n = Yb(e, ["children"]);
    return F.createElement(Qb.Provider, {value: n}, t)
}, ty = F.createContext(void 0), ny = /^[\u4e00-\u9fa5]{2}$/, ry = ny.test.bind(ny);

function oy(e) {
    return "string" == typeof e
}

function ay(e) {
    return "text" === e || "link" === e
}

const iy = F.forwardRef(((e, t) => {
        const {className: n, style: r, children: o, prefixCls: a} = e, i = sd(`${a}-icon`, n);
        return A.createElement("span", {ref: t, className: i, style: r}, o)
    })), ly = F.forwardRef(((e, t) => {
        let {prefixCls: n, className: r, style: o, iconClassName: a} = e;
        const i = sd(`${n}-loading-icon`, r);
        return A.createElement(iy, {prefixCls: n, className: i, style: o, ref: t}, A.createElement(sb, {className: a}))
    })), sy = () => ({width: 0, opacity: 0, transform: "scale(0)"}),
    cy = e => ({width: e.scrollWidth, opacity: 1, transform: "scale(1)"}), uy = e => {
        const {prefixCls: t, loading: n, existIcon: r, className: o, style: a} = e, i = !!n;
        return r ? A.createElement(ly, {prefixCls: t, className: o, style: a}) : A.createElement(qh, {
            visible: i,
            motionName: `${t}-loading-icon-motion`,
            removeOnLeave: !0,
            onAppearStart: sy,
            onAppearActive: cy,
            onEnterStart: sy,
            onEnterActive: cy,
            onLeaveStart: cy,
            onLeaveActive: sy
        }, ((e, n) => {
            let {className: r, style: i} = e;
            return A.createElement(ly, {
                prefixCls: t,
                className: o,
                style: Object.assign(Object.assign({}, a), i),
                ref: n,
                iconClassName: r
            })
        }))
    }, dy = (e, t) => ({
        [`> span, > ${e}`]: {
            "&:not(:last-child)": {[`&, & > ${e}`]: {"&:not(:disabled)": {borderInlineEndColor: t}}},
            "&:not(:first-child)": {[`&, & > ${e}`]: {"&:not(:disabled)": {borderInlineStartColor: t}}}
        }
    }), fy = e => {
        const {componentCls: t, fontSize: n, lineWidth: r, colorPrimaryHover: o, colorErrorHover: a} = e;
        return {
            [`${t}-group`]: [{
                position: "relative",
                display: "inline-flex",
                [`> span, > ${t}`]: {
                    "&:not(:last-child)": {
                        [`&, & > ${t}`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    "&:not(:first-child)": {
                        marginInlineStart: -r,
                        [`&, & > ${t}`]: {borderStartStartRadius: 0, borderEndStartRadius: 0}
                    }
                },
                [t]: {
                    position: "relative",
                    zIndex: 1,
                    "&:hover,\n          &:focus,\n          &:active": {zIndex: 2},
                    "&[disabled]": {zIndex: 0}
                },
                [`${t}-icon-only`]: {fontSize: n}
            }, dy(`${t}-primary`, o), dy(`${t}-danger`, a)]
        }
    }, py = e => {
        const {componentCls: t, iconCls: n, buttonFontWeight: r} = e;
        return {
            [t]: {
                outline: "none",
                position: "relative",
                display: "inline-block",
                fontWeight: r,
                whiteSpace: "nowrap",
                textAlign: "center",
                backgroundImage: "none",
                backgroundColor: "transparent",
                border: `${e.lineWidth}px ${e.lineType} transparent`,
                cursor: "pointer",
                transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
                userSelect: "none",
                touchAction: "manipulation",
                lineHeight: e.lineHeight,
                color: e.colorText,
                "&:disabled > *": {pointerEvents: "none"},
                "> span": {display: "inline-block"},
                [`${t}-icon`]: {lineHeight: 0},
                [`> ${n} + span, > span + ${n}`]: {marginInlineStart: e.marginXS},
                [`&:not(${t}-icon-only) > ${t}-icon`]: {[`&${t}-loading-icon, &:not(:last-child)`]: {marginInlineEnd: e.marginXS}},
                "> a": {color: "currentColor"},
                "&:not(:disabled)": Object.assign({}, eh(e)),
                [`&-icon-only${t}-compact-item`]: {flex: "none"},
                [`&-compact-item${t}-primary`]: {
                    [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
                        position: "relative",
                        "&:before": {
                            position: "absolute",
                            top: -e.lineWidth,
                            insetInlineStart: -e.lineWidth,
                            display: "inline-block",
                            width: e.lineWidth,
                            height: `calc(100% + ${2 * e.lineWidth}px)`,
                            backgroundColor: e.colorPrimaryHover,
                            content: '""'
                        }
                    }
                },
                "&-compact-vertical-item": {
                    [`&${t}-primary`]: {
                        [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
                            position: "relative",
                            "&:before": {
                                position: "absolute",
                                top: -e.lineWidth,
                                insetInlineStart: -e.lineWidth,
                                display: "inline-block",
                                width: `calc(100% + ${2 * e.lineWidth}px)`,
                                height: e.lineWidth,
                                backgroundColor: e.colorPrimaryHover,
                                content: '""'
                            }
                        }
                    }
                }
            }
        }
    }, my = (e, t, n) => ({[`&:not(:disabled):not(${e}-disabled)`]: {"&:hover": t, "&:active": n}}),
    gy = e => ({minWidth: e.controlHeight, paddingInlineStart: 0, paddingInlineEnd: 0, borderRadius: "50%"}),
    hy = e => ({
        borderRadius: e.controlHeight,
        paddingInlineStart: e.controlHeight / 2,
        paddingInlineEnd: e.controlHeight / 2
    }), vy = e => ({
        cursor: "not-allowed",
        borderColor: e.colorBorder,
        color: e.colorTextDisabled,
        backgroundColor: e.colorBgContainerDisabled,
        boxShadow: "none"
    }), by = (e, t, n, r, o, a, i) => ({
        [`&${e}-background-ghost`]: Object.assign(Object.assign({
            color: t || void 0,
            backgroundColor: "transparent",
            borderColor: n || void 0,
            boxShadow: "none"
        }, my(e, Object.assign({backgroundColor: "transparent"}, a), Object.assign({backgroundColor: "transparent"}, i))), {
            "&:disabled": {
                cursor: "not-allowed",
                color: r || void 0,
                borderColor: o || void 0
            }
        })
    }), yy = e => ({[`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, vy(e))}),
    wy = e => Object.assign({}, yy(e)),
    xy = e => ({[`&:disabled, &${e.componentCls}-disabled`]: {cursor: "not-allowed", color: e.colorTextDisabled}}),
    Cy = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wy(e)), {
        backgroundColor: e.colorBgContainer,
        borderColor: e.colorBorder,
        boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
    }), my(e.componentCls, {color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover}, {
        color: e.colorPrimaryActive,
        borderColor: e.colorPrimaryActive
    })), by(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
        [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
            color: e.colorError,
            borderColor: e.colorError
        }, my(e.componentCls, {
            color: e.colorErrorHover,
            borderColor: e.colorErrorBorderHover
        }, {
            color: e.colorErrorActive,
            borderColor: e.colorErrorActive
        })), by(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), yy(e))
    }), Sy = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wy(e)), {
        color: e.colorTextLightSolid,
        backgroundColor: e.colorPrimary,
        boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
    }), my(e.componentCls, {
        color: e.colorTextLightSolid,
        backgroundColor: e.colorPrimaryHover
    }, {
        color: e.colorTextLightSolid,
        backgroundColor: e.colorPrimaryActive
    })), by(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
        color: e.colorPrimaryHover,
        borderColor: e.colorPrimaryHover
    }, {
        color: e.colorPrimaryActive,
        borderColor: e.colorPrimaryActive
    })), {
        [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
            backgroundColor: e.colorError,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
        }, my(e.componentCls, {backgroundColor: e.colorErrorHover}, {backgroundColor: e.colorErrorActive})), by(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
            color: e.colorErrorHover,
            borderColor: e.colorErrorHover
        }, {color: e.colorErrorActive, borderColor: e.colorErrorActive})), yy(e))
    }), Ey = e => Object.assign(Object.assign({}, Cy(e)), {borderStyle: "dashed"}),
    ky = e => Object.assign(Object.assign(Object.assign({color: e.colorLink}, my(e.componentCls, {color: e.colorLinkHover}, {color: e.colorLinkActive})), xy(e)), {[`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({color: e.colorError}, my(e.componentCls, {color: e.colorErrorHover}, {color: e.colorErrorActive})), xy(e))}),
    $y = e => Object.assign(Object.assign(Object.assign({}, my(e.componentCls, {
        color: e.colorText,
        backgroundColor: e.colorBgTextHover
    }, {
        color: e.colorText,
        backgroundColor: e.colorBgTextActive
    })), xy(e)), {
        [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({color: e.colorError}, xy(e)), my(e.componentCls, {
            color: e.colorErrorHover,
            backgroundColor: e.colorErrorBg
        }, {color: e.colorErrorHover, backgroundColor: e.colorErrorBg}))
    }), Oy = e => {
        const {componentCls: t} = e;
        return {
            [`${t}-default`]: Cy(e),
            [`${t}-primary`]: Sy(e),
            [`${t}-dashed`]: Ey(e),
            [`${t}-link`]: ky(e),
            [`${t}-text`]: $y(e),
            [`${t}-ghost`]: by(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
        }
    }, Py = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const {
            componentCls: n,
            controlHeight: r,
            fontSize: o,
            lineHeight: a,
            lineWidth: i,
            borderRadius: l,
            buttonPaddingHorizontal: s,
            iconCls: c
        } = e, u = Math.max(0, (r - o * a) / 2 - i), d = s - i, f = `${n}-icon-only`;
        return [{
            [`${n}${t}`]: {
                fontSize: o,
                height: r,
                padding: `${u}px ${d}px`,
                borderRadius: l,
                [`&${f}`]: {
                    width: r,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0,
                    [`&${n}-round`]: {width: "auto"},
                    [c]: {fontSize: e.buttonIconOnlyFontSize}
                },
                [`&${n}-loading`]: {opacity: e.opacityLoading, cursor: "default"},
                [`${n}-loading-icon`]: {transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`}
            }
        }, {[`${n}${n}-circle${t}`]: gy(e)}, {[`${n}${n}-round${t}`]: hy(e)}]
    }, Ny = e => Py(e), My = e => {
        const t = rh(e, {
            controlHeight: e.controlHeightSM,
            padding: e.paddingXS,
            buttonPaddingHorizontal: 8,
            borderRadius: e.borderRadiusSM,
            buttonIconOnlyFontSize: e.fontSizeLG - 2
        });
        return Py(t, `${e.componentCls}-sm`)
    }, Ry = e => {
        const t = rh(e, {
            controlHeight: e.controlHeightLG,
            fontSize: e.fontSizeLG,
            borderRadius: e.borderRadiusLG,
            buttonIconOnlyFontSize: e.fontSizeLG + 2
        });
        return Py(t, `${e.componentCls}-lg`)
    }, Iy = e => {
        const {componentCls: t} = e;
        return {[t]: {[`&${t}-block`]: {width: "100%"}}}
    }, jy = e => {
        const {controlTmpOutline: t, paddingContentHorizontal: n} = e;
        return rh(e, {
            colorOutlineDefault: t,
            buttonPaddingHorizontal: n,
            buttonIconOnlyFontSize: e.fontSizeLG,
            buttonFontWeight: 400
        })
    }, zy = lh("Button", (e => {
        const t = jy(e);
        return [py(t), My(t), Ny(t), Ry(t), Iy(t), Oy(t), fy(t)]
    }));

function Ty(e, t, n) {
    const {focusElCls: r, focus: o, borderElCls: a} = n, i = a ? "> *" : "",
        l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((e => `&:${e} ${i}`)).join(",");
    return {
        [`&-item:not(${t}-last-item)`]: {marginInlineEnd: -e.lineWidth},
        "&-item": Object.assign(Object.assign({[l]: {zIndex: 2}}, r ? {[`&${r}`]: {zIndex: 2}} : {}), {[`&[disabled] ${i}`]: {zIndex: 0}})
    }
}

function _y(e, t, n) {
    const {borderElCls: r} = n, o = r ? `> ${r}` : "";
    return {
        [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {borderRadius: 0},
        [`&-item:not(${t}-last-item)${t}-first-item`]: {
            [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        [`&-item:not(${t}-first-item)${t}-last-item`]: {
            [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        }
    }
}

function Ly(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {focus: !0};
    const {componentCls: n} = e, r = `${n}-compact`;
    return {[r]: Object.assign(Object.assign({}, Ty(e, r, t)), _y(n, r, t))}
}

function Fy(e, t) {
    return {
        [`&-item:not(${t}-last-item)`]: {marginBottom: -e.lineWidth},
        "&-item": {"&:hover,&:focus,&:active": {zIndex: 2}, "&[disabled]": {zIndex: 0}}
    }
}

function Ay(e) {
    const t = `${e.componentCls}-compact-vertical`;
    return {
        [t]: Object.assign(Object.assign({}, Fy(e, t)), (n = e.componentCls, r = t, {
            [`&-item:not(${r}-first-item):not(${r}-last-item)`]: {borderRadius: 0},
            [`&-item${r}-first-item:not(${r}-last-item)`]: {
                [`&, &${n}-sm, &${n}-lg`]: {
                    borderEndEndRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&-item${r}-last-item:not(${r}-first-item)`]: {
                [`&, &${n}-sm, &${n}-lg`]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0
                }
            }
        }))
    };
    var n, r
}

const Hy = sh(["Button", "compact"], (e => {
    const t = jy(e);
    return [Ly(t), Ay(t)]
}));

function Dy(e) {
    return "danger" === e ? {danger: !0} : {type: e}
}

const By = (e, t) => {
    var n, r;
    const {
            loading: o = !1,
            prefixCls: a,
            type: i = "default",
            danger: l,
            shape: s = "default",
            size: c,
            styles: u,
            disabled: d,
            className: f,
            rootClassName: p,
            children: m,
            icon: g,
            ghost: h = !1,
            block: v = !1,
            htmlType: b = "button",
            classNames: y,
            style: w = {}
        } = e, x = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
            getPrefixCls: C,
            autoInsertSpaceInButton: S,
            direction: E,
            button: k
        } = F.useContext(Ug), $ = C("btn", a), [O, P] = zy($), N = F.useContext(dh), M = null != d ? d : N,
        R = F.useContext(ty), I = F.useMemo((() => (e => {
            if ("object" == typeof e && e) {
                const t = null == e ? void 0 : e.delay;
                return {loading: !1, delay: Number.isNaN(t) || "number" != typeof t ? 0 : t}
            }
            return {loading: !!e, delay: 0}
        })(o)), [o]), [j, z] = F.useState(I.loading), [T, _] = F.useState(!1), L = Gd(t, F.createRef()),
        H = 1 === F.Children.count(m) && !g && !ay(i);
    F.useEffect((() => {
        let e = null;
        return I.delay > 0 ? e = setTimeout((() => {
            e = null, z(!0)
        }), I.delay) : z(I.loading), () => {
            e && (clearTimeout(e), e = null)
        }
    }), [I]), F.useEffect((() => {
        if (!L || !L.current || !1 === S) return;
        const e = L.current.textContent;
        H && ry(e) ? T || _(!0) : T && _(!1)
    }), [L]);
    const D = t => {
            const {onClick: n} = e;
            j || M ? t.preventDefault() : null == n || n(t)
        }, B = !1 !== S, {compactSize: W, compactItemClassnames: V} = Zb($, E), K = Ub((e => {
            var t, n;
            return null !== (n = null !== (t = null != c ? c : W) && void 0 !== t ? t : R) && void 0 !== n ? n : e
        })), U = K && {large: "lg", small: "sm", middle: void 0}[K] || "", G = j ? "loading" : g, X = Pf(x, ["navigate"]),
        q = sd($, P, {
            [`${$}-${s}`]: "default" !== s && s,
            [`${$}-${i}`]: i,
            [`${$}-${U}`]: U,
            [`${$}-icon-only`]: !m && 0 !== m && !!G,
            [`${$}-background-ghost`]: h && !ay(i),
            [`${$}-loading`]: j,
            [`${$}-two-chinese-chars`]: T && B && !j,
            [`${$}-block`]: v,
            [`${$}-dangerous`]: !!l,
            [`${$}-rtl`]: "rtl" === E
        }, V, f, p, null == k ? void 0 : k.className),
        Y = Object.assign(Object.assign({}, null == k ? void 0 : k.style), w),
        Q = sd(null == y ? void 0 : y.icon, null === (n = null == k ? void 0 : k.classNames) || void 0 === n ? void 0 : n.icon),
        Z = Object.assign(Object.assign({}, (null == u ? void 0 : u.icon) || {}), (null === (r = null == k ? void 0 : k.styles) || void 0 === r ? void 0 : r.icon) || {}),
        J = g && !j ? A.createElement(iy, {
            prefixCls: $,
            className: Q,
            style: Z
        }, g) : A.createElement(uy, {existIcon: !!g, prefixCls: $, loading: !!j}), ee = m || 0 === m ? function (e, t) {
            let n = !1;
            const r = [];
            return A.Children.forEach(e, (e => {
                const t = typeof e, o = "string" === t || "number" === t;
                if (n && o) {
                    const t = r.length - 1, n = r[t];
                    r[t] = `${n}${e}`
                } else r.push(e);
                n = o
            })), A.Children.map(r, (e => ((e, t) => {
                if (null == e) return;
                const n = t ? " " : "";
                return "string" != typeof e && "number" != typeof e && oy(e.type) && ry(e.props.children) ? qv(e, {children: e.props.children.split("").join(n)}) : oy(e) ? ry(e) ? A.createElement("span", null, e.split("").join(n)) : A.createElement("span", null, e) : Xv(e) ? A.createElement("span", null, e) : e
            })(e, t)))
        }(m, H && B) : null;
    if (void 0 !== X.href) return O(A.createElement("a", Object.assign({}, X, {
        className: sd(q, {[`${$}-disabled`]: M}),
        style: Y,
        onClick: D,
        ref: L
    }), J, ee));
    let te = A.createElement("button", Object.assign({}, x, {
        type: b,
        className: q,
        style: Y,
        onClick: D,
        disabled: M,
        ref: L
    }), J, ee, V && A.createElement(Hy, {key: "compact", prefixCls: $}));
    return ay(i) || (te = A.createElement(Kb, {component: "Button", disabled: !!j}, te)), O(te)
}, Wy = F.forwardRef(By);

function Vy(e) {
    return !(!e || !e.then)
}

Wy.Group = e => {
    const {getPrefixCls: t, direction: n} = F.useContext(Ug), {prefixCls: r, size: o, className: a} = e,
        i = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , s] = Hg();
    let c = "";
    switch (o) {
        case"large":
            c = "lg";
            break;
        case"small":
            c = "sm"
    }
    const u = sd(l, {[`${l}-${c}`]: c, [`${l}-rtl`]: "rtl" === n}, a, s);
    return F.createElement(ty.Provider, {value: o}, F.createElement("div", Object.assign({}, i, {className: u})))
}, Wy.__ANT_BUTTON = !0;
const Ky = e => {
    const {
        type: t,
        children: n,
        prefixCls: r,
        buttonProps: o,
        close: a,
        autoFocus: i,
        emitEvent: l,
        isSilent: s,
        quitOnNullishReturnValue: c,
        actionFn: u
    } = e, d = F.useRef(!1), f = F.useRef(null), [p, m] = Bg(!1), g = function () {
        null == a || a.apply(void 0, arguments)
    };
    return F.useEffect((() => {
        let e = null;
        return i && (e = setTimeout((() => {
            var e;
            null === (e = f.current) || void 0 === e || e.focus()
        }))), () => {
            e && clearTimeout(e)
        }
    }), []), F.createElement(Wy, Object.assign({}, Dy(t), {
        onClick(e) {
            if (d.current) return;
            if (d.current = !0, !u) return void g();
            let t;
            if (l) {
                if (t = u(e), c && !Vy(t)) return d.current = !1, void g(e)
            } else if (u.length) t = u(a), d.current = !1; else if (t = u(), !t) return void g();
            (e => {
                Vy(e) && (m(!0), e.then((function () {
                    m(!1, !0), g.apply(void 0, arguments), d.current = !1
                }), (e => {
                    if (m(!1, !0), d.current = !1, !(null == s ? void 0 : s())) return Promise.reject(e)
                })))
            })(t)
        }, loading: p, prefixCls: r
    }, o, {ref: f}), n)
}, Uy = (e, t, n) => void 0 !== n ? n : `${e}-${t}`;
var Gy = F.createContext(null), Xy = [];
var qy = "rc-util-locker-".concat(Date.now()), Yy = 0;

function Qy(e) {
    var t = !!e, n = Df(F.useState((() => (Yy += 1, "".concat(qy, "_").concat(Yy)))), 1)[0];
    Sp((() => {
        if (t) {
            var e = (o = document.body, "undefined" != typeof document && o && o instanceof Element ? (e => {
                    var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),
                        n = document.createElement("div");
                    n.id = t;
                    var r, o, a = n.style;
                    if (a.position = "absolute", a.left = "0", a.top = "0", a.width = "100px", a.height = "100px", a.overflow = "scroll", e) {
                        var i = getComputedStyle(e);
                        a.scrollbarColor = i.scrollbarColor, a.scrollbarWidth = i.scrollbarWidth;
                        var l = getComputedStyle(e, "::-webkit-scrollbar"), s = parseInt(l.width, 10),
                            c = parseInt(l.height, 10);
                        try {
                            var u = s ? "width: ".concat(l.width, ";") : "", d = c ? "height: ".concat(l.height, ";") : "";
                            ep("\n#".concat(t, "::-webkit-scrollbar {\n").concat(u, "\n").concat(d, "\n}"), t)
                        } catch (CM) {
                            r = s, o = c
                        }
                    }
                    document.body.appendChild(n);
                    var f = e && r && !isNaN(r) ? r : n.offsetWidth - n.clientWidth,
                        p = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
                    return document.body.removeChild(n), Jf(t), {width: f, height: p}
                })(o) : {width: 0, height: 0}).width,
                r = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
            ep("\nhtml body {\n  overflow-y: hidden;\n  ".concat(r ? "width: calc(100% - ".concat(e, "px);") : "", "\n}"), n)
        } else Jf(n);
        var o;
        return () => {
            Jf(n)
        }
    }), [t, n])
}

var Zy = e => !1 !== e && (Wf() && e ? "string" == typeof e ? document.querySelector(e) : "function" == typeof e ? e() : e : null),
    Jy = F.forwardRef(((e, t) => {
        var n = e.open, r = e.autoLock, o = e.getContainer;
        e.debug;
        var a = e.autoDestroy, i = void 0 === a || a, l = e.children, s = Df(F.useState(n), 2), c = s[0], u = s[1],
            d = c || n;
        F.useEffect((() => {
            (i || n) && u(n)
        }), [n, i]);
        var f = Df(F.useState((() => Zy(o))), 2), p = f[0], m = f[1];
        F.useEffect((() => {
            var e = Zy(o);
            m(null != e ? e : null)
        }));
        var g = (e => {
            var t = Df(F.useState((() => Wf() ? document.createElement("div") : null)), 1)[0], n = F.useRef(!1),
                r = F.useContext(Gy), o = Df(F.useState(Xy), 2), a = o[0], i = o[1],
                l = r || (n.current ? void 0 : e => {
                    i((t => [e].concat(If(t))))
                });

            function s() {
                t.parentElement || document.body.appendChild(t), n.current = !0
            }

            function c() {
                var e;
                null === (e = t.parentElement) || void 0 === e || e.removeChild(t), n.current = !1
            }

            return Sp((() => (e ? r ? r(s) : s() : c(), c)), [e]), Sp((() => {
                a.length && (a.forEach((e => e())), i(Xy))
            }), [a]), [t, l]
        })(d && !p), h = Df(g, 2), v = h[0], b = h[1], y = null != p ? p : v;
        Qy(r && n && Wf() && (y === v || y === document.body));
        var w = null;
        l && qd(l) && t && (w = l.ref);
        var x = Xd(w, t);
        if (!d || !Wf() || void 0 === p) return null;
        var C = !1 === y || !1, S = l;
        return t && (S = F.cloneElement(l, {ref: x})), F.createElement(Gy.Provider, {value: b}, C ? S : Uu.createPortal(S, y))
    })), ew = 0, tw = Cd({}, H).useId;
const nw = tw ? e => {
    var t = tw();
    return e || t
} : e => {
    var t = Df(F.useState("ssr-id"), 2), n = t[0], r = t[1];
    return F.useEffect((() => {
        var e = ew;
        ew += 1, r("rc_unique_".concat(e))
    }), []), e || n
};

function rw(e, t, n) {
    var r = t;
    return !r && n && (r = "".concat(e, "-").concat(n)), r
}

function ow(e, t) {
    var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
    if ("number" != typeof n) {
        var o = e.document;
        "number" != typeof (n = o.documentElement[r]) && (n = o.body[r])
    }
    return n
}

const aw = F.memo((e => e.children), ((e, t) => !t.shouldUpdate));
var iw = {width: 0, height: 0, overflow: "hidden", outline: "none"}, lw = A.forwardRef(((e, t) => {
    var n = e.prefixCls, r = e.className, o = e.style, a = e.title, i = e.ariaId, l = e.footer, s = e.closable,
        c = e.closeIcon, u = e.onClose, d = e.children, f = e.bodyStyle, p = e.bodyProps, m = e.modalRender,
        g = e.onMouseDown, h = e.onMouseUp, v = e.holderRef, b = e.visible, y = e.forceRender, w = e.width,
        x = e.height, C = F.useRef(), S = F.useRef();
    A.useImperativeHandle(t, (() => ({
        focus() {
            var e;
            null === (e = C.current) || void 0 === e || e.focus()
        }, changeActive(e) {
            var t = document.activeElement;
            e && t === S.current ? C.current.focus() : e || t !== C.current || S.current.focus()
        }
    })));
    var E, k, $, O = {};
    void 0 !== w && (O.width = w), void 0 !== x && (O.height = x), l && (E = A.createElement("div", {className: "".concat(n, "-footer")}, l)), a && (k = A.createElement("div", {className: "".concat(n, "-header")}, A.createElement("div", {
        className: "".concat(n, "-title"),
        id: i
    }, a))), s && ($ = A.createElement("button", {
        type: "button",
        onClick: u,
        "aria-label": "Close",
        className: "".concat(n, "-close")
    }, c || A.createElement("span", {className: "".concat(n, "-close-x")})));
    var P = A.createElement("div", {className: "".concat(n, "-content")}, $, k, A.createElement("div", cd({
        className: "".concat(n, "-body"),
        style: f
    }, p), d), E);
    return A.createElement("div", {
        key: "dialog-element",
        role: "dialog",
        "aria-labelledby": a ? i : null,
        "aria-modal": "true",
        ref: v,
        style: Cd(Cd({}, o), O),
        className: sd(n, r),
        onMouseDown: g,
        onMouseUp: h
    }, A.createElement("div", {
        tabIndex: 0,
        ref: C,
        style: iw,
        "aria-hidden": "true"
    }), A.createElement(aw, {shouldUpdate: b || y}, m ? m(P) : P), A.createElement("div", {
        tabIndex: 0,
        ref: S,
        style: iw,
        "aria-hidden": "true"
    }))
})), sw = F.forwardRef(((e, t) => {
    var n = e.prefixCls, r = e.title, o = e.style, a = e.className, i = e.visible, l = e.forceRender,
        s = e.destroyOnClose, c = e.motionName, u = e.ariaId, d = e.onVisibleChanged, f = e.mousePosition,
        p = F.useRef(), m = Df(F.useState(), 2), g = m[0], h = m[1], v = {};

    function b() {
        var e, t, n, r, o, a = (n = {
            left: (t = (e = p.current).getBoundingClientRect()).left,
            top: t.top
        }, o = (r = e.ownerDocument).defaultView || r.parentWindow, n.left += ow(o), n.top += ow(o, !0), n);
        h(f ? "".concat(f.x - a.left, "px ").concat(f.y - a.top, "px") : "")
    }

    return g && (v.transformOrigin = g), F.createElement(qh, {
        visible: i,
        onVisibleChanged: d,
        onAppearPrepare: b,
        onEnterPrepare: b,
        forceRender: l,
        motionName: c,
        removeOnLeave: s,
        ref: p
    }, ((i, l) => {
        var s = i.className, c = i.style;
        return F.createElement(lw, cd({}, e, {
            ref: t,
            title: r,
            ariaId: u,
            prefixCls: n,
            holderRef: l,
            style: Cd(Cd(Cd({}, c), o), v),
            className: sd(a, s)
        }))
    }))
}));

function cw(e) {
    var t = e.prefixCls, n = e.style, r = e.visible, o = e.maskProps, a = e.motionName;
    return F.createElement(qh, {
        key: "mask",
        visible: r,
        motionName: a,
        leavedClassName: "".concat(t, "-mask-hidden")
    }, ((e, r) => {
        var a = e.className, i = e.style;
        return F.createElement("div", cd({ref: r, style: Cd(Cd({}, i), n), className: sd("".concat(t, "-mask"), a)}, o))
    }))
}

function uw(e) {
    var t = e.prefixCls, n = void 0 === t ? "rc-dialog" : t, r = e.zIndex, o = e.visible, a = void 0 !== o && o,
        i = e.keyboard, l = void 0 === i || i, s = e.focusTriggerAfterClose, c = void 0 === s || s, u = e.wrapStyle,
        d = e.wrapClassName, f = e.wrapProps, p = e.onClose, m = e.afterOpenChange, g = e.afterClose,
        h = e.transitionName, v = e.animation, b = e.closable, y = void 0 === b || b, w = e.mask, x = void 0 === w || w,
        C = e.maskTransitionName, S = e.maskAnimation, E = e.maskClosable, k = void 0 === E || E, $ = e.maskStyle,
        O = e.maskProps, P = e.rootClassName, N = F.useRef(), M = F.useRef(), R = F.useRef(), I = Df(F.useState(a), 2),
        j = I[0], z = I[1], T = nw();

    function _(e) {
        null == p || p(e)
    }

    var L = F.useRef(!1), A = F.useRef(), H = null;
    return k && (H = e => {
        L.current ? L.current = !1 : M.current === e.target && _(e)
    }), F.useEffect((() => {
        a && (z(!0), Vf(M.current, document.activeElement) || (N.current = document.activeElement))
    }), [a]), F.useEffect((() => () => {
        clearTimeout(A.current)
    }), []), F.createElement("div", cd({className: sd("".concat(n, "-root"), P)}, Uv(e, {data: !0})), F.createElement(cw, {
        prefixCls: n,
        visible: x && a,
        motionName: rw(n, C, S),
        style: Cd({zIndex: r}, $),
        maskProps: O
    }), F.createElement("div", cd({
        tabIndex: -1,
        onKeyDown(e) {
            if (l && e.keyCode === Yv.ESC) return e.stopPropagation(), void _(e);
            a && e.keyCode === Yv.TAB && R.current.changeActive(!e.shiftKey)
        },
        className: sd("".concat(n, "-wrap"), d),
        ref: M,
        onClick: H,
        style: Cd(Cd({zIndex: r}, u), {}, {display: j ? null : "none"})
    }, f), F.createElement(sw, cd({}, e, {
        onMouseDown() {
            clearTimeout(A.current), L.current = !0
        }, onMouseUp() {
            A.current = setTimeout((() => {
                L.current = !1
            }))
        }, ref: R, closable: y, ariaId: T, prefixCls: n, visible: a && j, onClose: _, onVisibleChanged(e) {
            if (e) Vf(M.current, document.activeElement) || null === (t = R.current) || void 0 === t || t.focus(); else {
                if (z(!1), x && N.current && c) {
                    try {
                        N.current.focus({preventScroll: !0})
                    } catch (CM) {
                    }
                    N.current = null
                }
                j && (null == g || g())
            }
            var t;
            null == m || m(e)
        }, motionName: rw(n, h, v)
    }))))
}

sw.displayName = "Content";
var dw = e => {
    var t = e.visible, n = e.getContainer, r = e.forceRender, o = e.destroyOnClose, a = void 0 !== o && o,
        i = e.afterClose, l = Df(F.useState(t), 2), s = l[0], c = l[1];
    return F.useEffect((() => {
        t && c(!0)
    }), [t]), r || !a || s ? F.createElement(Jy, {
        open: t || r || s,
        autoDestroy: !1,
        getContainer: n,
        autoLock: t || s
    }, F.createElement(uw, cd({}, e, {
        destroyOnClose: a, afterClose() {
            null == i || i(), c(!1)
        }
    }))) : null
};

function fw(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.createElement(Lv, null);
    const o = ((e, t, n) => "boolean" == typeof e ? e : void 0 === t ? !!n : !1 !== t && null !== t)(e, t, arguments.length > 4 && void 0 !== arguments[4] && arguments[4]);
    if (!o) return [!1, null];
    const a = "boolean" == typeof t || null == t ? r : t;
    return [!0, n ? n(a) : a]
}

dw.displayName = "Dialog";
const pw = () => Wf() && window.document.documentElement;
let mw;
var gw = "RC_FORM_INTERNAL_HOOKS", hw = () => {
    yd(!1, "Can not find FormContext. Please make sure you wrap Field under Form.")
}, vw = F.createContext({
    getFieldValue: hw,
    getFieldsValue: hw,
    getFieldError: hw,
    getFieldWarning: hw,
    getFieldsError: hw,
    isFieldsTouched: hw,
    isFieldTouched: hw,
    isFieldValidating: hw,
    isFieldsValidating: hw,
    resetFields: hw,
    setFields: hw,
    setFieldValue: hw,
    setFieldsValue: hw,
    validateFields: hw,
    submit: hw,
    getInternalHooks: () => (hw(), {
        dispatch: hw,
        initEntityValue: hw,
        registerField: hw,
        useSubscribe: hw,
        setInitialValues: hw,
        destroyForm: hw,
        setCallbacks: hw,
        registerWatch: hw,
        getFields: hw,
        setValidateMessages: hw,
        setPreserve: hw,
        getInitialValue: hw
    })
}), bw = F.createContext(null);

function yw(e) {
    return null == e ? [] : Array.isArray(e) ? e : [e]
}

function ww() {
    return ww = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ww.apply(this, arguments)
}

function xw(e) {
    return (xw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : e => e.__proto__ || Object.getPrototypeOf(e))(e)
}

function Cw(e, t) {
    return (Cw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : (e, t) => (e.__proto__ = t, e))(e, t)
}

function Sw(e, t, n) {
    return Sw = (() => {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {
            }))), !0
        } catch (CM) {
            return !1
        }
    })() ? Reflect.construct.bind() : (e, t, n) => {
        var r = [null];
        r.push.apply(r, t);
        var o = new (Function.bind.apply(e, r));
        return n && Cw(o, n.prototype), o
    }, Sw.apply(null, arguments)
}

function Ew(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return Ew = function (e) {
        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
        var n;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r)
        }

        function r() {
            return Sw(e, arguments, xw(this).constructor)
        }

        return r.prototype = Object.create(e.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Cw(r, e)
    }, Ew(e)
}

var kw = /%[sdj%]/g;

function $w(e) {
    if (!e || !e.length) return null;
    var t = {};
    return e.forEach((e => {
        var n = e.field;
        t[n] = t[n] || [], t[n].push(e)
    })), t
}

function Ow(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var o = 0, a = n.length;
    return "function" == typeof e ? e.apply(null, n) : "string" == typeof e ? e.replace(kw, (e => {
        if ("%%" === e) return "%";
        if (o >= a) return e;
        switch (e) {
            case"%s":
                return String(n[o++]);
            case"%d":
                return Number(n[o++]);
            case"%j":
                try {
                    return JSON.stringify(n[o++])
                } catch (t) {
                    return "[Circular]"
                }
                break;
            default:
                return e
        }
    })) : e
}

function Pw(e, t) {
    return null == e || !("array" !== t || !Array.isArray(e) || e.length) || !(!(e => "string" === e || "url" === e || "hex" === e || "email" === e || "date" === e || "pattern" === e)(t) || "string" != typeof e || e)
}

function Nw(e, t, n) {
    var r = 0, o = e.length;
    !function a(i) {
        if (i && i.length) n(i); else {
            var l = r;
            r += 1, l < o ? t(e[l], a) : n([])
        }
    }([])
}

var Mw = function (e) {
    var t, n;

    function r(t, n) {
        var r;
        return (r = e.call(this, "Async Validation Error") || this).errors = t, r.fields = n, r
    }

    return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, Cw(t, n), r
}(Ew(Error));

function Rw(e, t) {
    return n => {
        var r, o;
        return r = e.fullFields ? ((e, t) => {
            for (var n = e, r = 0; r < t.length; r++) {
                if (null == n) return n;
                n = n[t[r]]
            }
            return n
        })(t, e.fullFields) : t[n.field || e.fullField], (o = n) && void 0 !== o.message ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
            message: "function" == typeof n ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField
        }
    }
}

function Iw(e, t) {
    if (t) for (var n in t) if (t.hasOwnProperty(n)) {
        var r = t[n];
        "object" == typeof r && "object" == typeof e[n] ? e[n] = ww({}, e[n], r) : e[n] = r
    }
    return e
}

var jw, zw = (e, t, n, r, o, a) => {
        !e.required || n.hasOwnProperty(e.field) && !Pw(t, a || e.type) || r.push(Ow(o.messages.required, e.fullField))
    },
    Tw = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    _w = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i, Lw = {
        integer: e => Lw.number(e) && parseInt(e, 10) === e,
        float: e => Lw.number(e) && !Lw.integer(e),
        array: e => Array.isArray(e),
        regexp(e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e)
            } catch (CM) {
                return !1
            }
        },
        date: e => "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear && !isNaN(e.getTime()),
        number: e => !isNaN(e) && "number" == typeof e,
        object: e => "object" == typeof e && !Lw.array(e),
        method: e => "function" == typeof e,
        email: e => "string" == typeof e && e.length <= 320 && !!e.match(Tw),
        url: e => "string" == typeof e && e.length <= 2048 && !!e.match((() => {
            if (jw) return jw;
            var e = "[a-fA-F\\d:]",
                t = t => t && t.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "",
                n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                r = "[a-fA-F\\d]{1,4}",
                o = ("\n(?:\n(?:" + r + ":){7}(?:" + r + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + r + ":){6}(?:" + n + "|:" + r + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + r + ":){5}(?::" + n + "|(?::" + r + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + r + "){0,5}:" + n + "|(?::" + r + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
                a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), i = new RegExp("^" + n + "$"),
                l = new RegExp("^" + o + "$"),
                s = e => e && e.exact ? a : new RegExp("(?:" + t(e) + n + t(e) + ")|(?:" + t(e) + o + t(e) + ")", "g");
            s.v4 = e => e && e.exact ? i : new RegExp("" + t(e) + n + t(e), "g"), s.v6 = e => e && e.exact ? l : new RegExp("" + t(e) + o + t(e), "g");
            var c = s.v4().source, u = s.v6().source;
            return jw = new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|" + c + "|" + u + '|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i")
        })()),
        hex: e => "string" == typeof e && !!e.match(_w)
    }, Fw = "enum", Aw = {
        required: zw, whitespace(e, t, n, r, o) {
            (/^\s+$/.test(t) || "" === t) && r.push(Ow(o.messages.whitespace, e.fullField))
        }, type(e, t, n, r, o) {
            if (e.required && void 0 === t) zw(e, t, n, r, o); else {
                var a = e.type;
                ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(a) > -1 ? Lw[a](t) || r.push(Ow(o.messages.types[a], e.fullField, e.type)) : a && typeof t !== e.type && r.push(Ow(o.messages.types[a], e.fullField, e.type))
            }
        }, range(e, t, n, r, o) {
            var a = "number" == typeof e.len, i = "number" == typeof e.min, l = "number" == typeof e.max, s = t, c = null,
                u = "number" == typeof t, d = "string" == typeof t, f = Array.isArray(t);
            if (u ? c = "number" : d ? c = "string" : f && (c = "array"), !c) return !1;
            f && (s = t.length), d && (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), a ? s !== e.len && r.push(Ow(o.messages[c].len, e.fullField, e.len)) : i && !l && s < e.min ? r.push(Ow(o.messages[c].min, e.fullField, e.min)) : l && !i && s > e.max ? r.push(Ow(o.messages[c].max, e.fullField, e.max)) : i && l && (s < e.min || s > e.max) && r.push(Ow(o.messages[c].range, e.fullField, e.min, e.max))
        }, enum(e, t, n, r, o) {
            e[Fw] = Array.isArray(e[Fw]) ? e[Fw] : [], -1 === e[Fw].indexOf(t) && r.push(Ow(o.messages[Fw], e.fullField, e[Fw].join(", ")))
        }, pattern(e, t, n, r, o) {
            e.pattern && (e.pattern instanceof RegExp ? (e.pattern.lastIndex = 0, e.pattern.test(t) || r.push(Ow(o.messages.pattern.mismatch, e.fullField, t, e.pattern))) : "string" == typeof e.pattern && (new RegExp(e.pattern).test(t) || r.push(Ow(o.messages.pattern.mismatch, e.fullField, t, e.pattern))))
        }
    }, Hw = (e, t, n, r, o) => {
        var a = e.type, i = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (Pw(t, a) && !e.required) return n();
            Aw.required(e, t, r, i, o, a), Pw(t, a) || Aw.type(e, t, r, i, o)
        }
        n(i)
    }, Dw = {
        string(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t, "string") && !e.required) return n();
                Aw.required(e, t, r, a, o, "string"), Pw(t, "string") || (Aw.type(e, t, r, a, o), Aw.range(e, t, r, a, o), Aw.pattern(e, t, r, a, o), !0 === e.whitespace && Aw.whitespace(e, t, r, a, o))
            }
            n(a)
        }, method(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && Aw.type(e, t, r, a, o)
            }
            n(a)
        }, number(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if ("" === t && (t = void 0), Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && (Aw.type(e, t, r, a, o), Aw.range(e, t, r, a, o))
            }
            n(a)
        }, boolean(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && Aw.type(e, t, r, a, o)
            }
            n(a)
        }, regexp(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), Pw(t) || Aw.type(e, t, r, a, o)
            }
            n(a)
        }, integer(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && (Aw.type(e, t, r, a, o), Aw.range(e, t, r, a, o))
            }
            n(a)
        }, float(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && (Aw.type(e, t, r, a, o), Aw.range(e, t, r, a, o))
            }
            n(a)
        }, array(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (null == t && !e.required) return n();
                Aw.required(e, t, r, a, o, "array"), null != t && (Aw.type(e, t, r, a, o), Aw.range(e, t, r, a, o))
            }
            n(a)
        }, object(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && Aw.type(e, t, r, a, o)
            }
            n(a)
        }, enum(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o), void 0 !== t && Aw.enum(e, t, r, a, o)
            }
            n(a)
        }, pattern(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t, "string") && !e.required) return n();
                Aw.required(e, t, r, a, o), Pw(t, "string") || Aw.pattern(e, t, r, a, o)
            }
            n(a)
        }, date(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t, "date") && !e.required) return n();
                var i;
                Aw.required(e, t, r, a, o), Pw(t, "date") || (i = t instanceof Date ? t : new Date(t), Aw.type(e, i, r, a, o), i && Aw.range(e, i.getTime(), r, a, o))
            }
            n(a)
        }, url: Hw, hex: Hw, email: Hw, required(e, t, n, r, o) {
            var a = [], i = Array.isArray(t) ? "array" : typeof t;
            Aw.required(e, t, r, a, o, i), n(a)
        }, any(e, t, n, r, o) {
            var a = [];
            if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                if (Pw(t) && !e.required) return n();
                Aw.required(e, t, r, a, o)
            }
            n(a)
        }
    };

function Bw() {
    return {
        default: "Validation error on field %s",
        required: "%s is required",
        enum: "%s must be one of %s",
        whitespace: "%s cannot be empty",
        date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
        },
        types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            boolean: "%s is not a %s",
            integer: "%s is not an %s",
            float: "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
        },
        string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
        },
        number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
        },
        array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
        },
        pattern: {mismatch: "%s value %s does not match pattern %s"},
        clone() {
            var e = JSON.parse(JSON.stringify(this));
            return e.clone = this.clone, e
        }
    }
}

var Ww = Bw(), Vw = function () {
    function e(e) {
        this.rules = null, this._messages = Ww, this.define(e)
    }

    var t = e.prototype;
    return t.define = function (e) {
        var t = this;
        if (!e) throw new Error("Cannot configure a schema with no rules");
        if ("object" != typeof e || Array.isArray(e)) throw new Error("Rules must be an object");
        this.rules = {}, Object.keys(e).forEach((n => {
            var r = e[n];
            t.rules[n] = Array.isArray(r) ? r : [r]
        }))
    }, t.messages = function (e) {
        return e && (this._messages = Iw(Bw(), e)), this._messages
    }, t.validate = function (t, n, r) {
        var o = this;
        void 0 === n && (n = {}), void 0 === r && (r = () => {
        });
        var a = t, i = n, l = r;
        if ("function" == typeof i && (l = i, i = {}), !this.rules || 0 === Object.keys(this.rules).length) return l && l(null, a), Promise.resolve(a);
        if (i.messages) {
            var s = this.messages();
            s === Ww && (s = Bw()), Iw(s, i.messages), i.messages = s
        } else i.messages = this.messages();
        var c = {};
        (i.keys || Object.keys(this.rules)).forEach((e => {
            var n = o.rules[e], r = a[e];
            n.forEach((n => {
                var i = n;
                "function" == typeof i.transform && (a === t && (a = ww({}, a)), r = a[e] = i.transform(r)), (i = "function" == typeof i ? {validator: i} : ww({}, i)).validator = o.getValidationMethod(i), i.validator && (i.field = e, i.fullField = i.fullField || e, i.type = o.getType(i), c[e] = c[e] || [], c[e].push({
                    rule: i,
                    value: r,
                    source: a,
                    field: e
                }))
            }))
        }));
        var u = {};
        return function (e, t, n, r, o) {
            if (t.first) {
                var a = new Promise(((t, a) => {
                    var i = (e => {
                        var t = [];
                        return Object.keys(e).forEach((n => {
                            t.push.apply(t, e[n] || [])
                        })), t
                    })(e);
                    Nw(i, n, (e => (r(e), e.length ? a(new Mw(e, $w(e))) : t(o))))
                }));
                return a.catch((e => e)), a
            }
            var i = !0 === t.firstFields ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length,
                c = 0, u = [], d = new Promise(((t, a) => {
                    var d = e => {
                        if (u.push.apply(u, e), ++c === s) return r(u), u.length ? a(new Mw(u, $w(u))) : t(o)
                    };
                    l.length || (r(u), t(o)), l.forEach((t => {
                        var r = e[t];
                        -1 !== i.indexOf(t) ? Nw(r, n, d) : ((e, t, n) => {
                            var r = [], o = 0, a = e.length;

                            function i(e) {
                                r.push.apply(r, e || []), ++o === a && n(r)
                            }

                            e.forEach((e => {
                                t(e, i)
                            }))
                        })(r, n, d)
                    }))
                }));
            return d.catch((e => e)), d
        }(c, i, ((t, n) => {
            var r, o = t.rule,
                l = !("object" !== o.type && "array" !== o.type || "object" != typeof o.fields && "object" != typeof o.defaultField);

            function s(e, t) {
                return ww({}, t, {
                    fullField: o.fullField + "." + e,
                    fullFields: o.fullFields ? [].concat(o.fullFields, [e]) : [e]
                })
            }

            function c(r) {
                void 0 === r && (r = []);
                var c = Array.isArray(r) ? r : [r];
                !i.suppressWarning && c.length && e.warning("async-validator:", c), c.length && void 0 !== o.message && (c = [].concat(o.message));
                var d = c.map(Rw(o, a));
                if (i.first && d.length) return u[o.field] = 1, n(d);
                if (l) {
                    if (o.required && !t.value) return void 0 !== o.message ? d = [].concat(o.message).map(Rw(o, a)) : i.error && (d = [i.error(o, Ow(i.messages.required, o.field))]), n(d);
                    var f = {};
                    o.defaultField && Object.keys(t.value).map((e => {
                        f[e] = o.defaultField
                    })), f = ww({}, f, t.rule.fields);
                    var p = {};
                    Object.keys(f).forEach((e => {
                        var t = f[e], n = Array.isArray(t) ? t : [t];
                        p[e] = n.map(s.bind(null, e))
                    }));
                    var m = new e(p);
                    m.messages(i.messages), t.rule.options && (t.rule.options.messages = i.messages, t.rule.options.error = i.error), m.validate(t.value, t.rule.options || i, (e => {
                        var t = [];
                        d && d.length && t.push.apply(t, d), e && e.length && t.push.apply(t, e), n(t.length ? t : null)
                    }))
                } else n(d)
            }

            if (l = l && (o.required || !o.required && t.value), o.field = t.field, o.asyncValidator) r = o.asyncValidator(o, t.value, c, t.source, i); else if (o.validator) {
                try {
                    r = o.validator(o, t.value, c, t.source, i)
                } catch (d) {
                    console.error, i.suppressValidatorError || setTimeout((() => {
                        throw d
                    }), 0), c(d.message)
                }
                !0 === r ? c() : !1 === r ? c("function" == typeof o.message ? o.message(o.fullField || o.field) : o.message || (o.fullField || o.field) + " fails") : r instanceof Array ? c(r) : r instanceof Error && c(r.message)
            }
            r && r.then && r.then((() => c()), (e => c(e)))
        }), (e => {
            (e => {
                for (var t, n, r = [], o = {}, i = 0; i < e.length; i++) t = e[i], n = void 0, Array.isArray(t) ? r = (n = r).concat.apply(n, t) : r.push(t);
                r.length ? (o = $w(r), l(r, o)) : l(null, a)
            })(e)
        }), a)
    }, t.getType = e => {
        if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !Dw.hasOwnProperty(e.type)) throw new Error(Ow("Unknown rule type %s", e.type));
        return e.type || "string"
    }, t.getValidationMethod = function (e) {
        if ("function" == typeof e.validator) return e.validator;
        var t = Object.keys(e), n = t.indexOf("message");
        return -1 !== n && t.splice(n, 1), 1 === t.length && "required" === t[0] ? Dw.required : Dw[this.getType(e)] || void 0
    }, e
}();
Vw.register = (e, t) => {
    if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
    Dw[e] = t
}, Vw.warning = () => {
}, Vw.messages = Ww, Vw.validators = Dw;
var Kw = "'${name}' is not a valid ${type}", Uw = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
        format: "'${name}' is invalid for format date",
        parse: "'${name}' could not be parsed as date",
        invalid: "'${name}' is invalid date"
    },
    types: {
        string: Kw,
        method: Kw,
        array: Kw,
        object: Kw,
        number: Kw,
        date: Kw,
        boolean: Kw,
        integer: Kw,
        float: Kw,
        regexp: Kw,
        email: Kw,
        url: Kw,
        hex: Kw
    },
    string: {
        len: "'${name}' must be exactly ${len} characters",
        min: "'${name}' must be at least ${min} characters",
        max: "'${name}' cannot be longer than ${max} characters",
        range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
        len: "'${name}' must equal ${len}",
        min: "'${name}' cannot be less than ${min}",
        max: "'${name}' cannot be greater than ${max}",
        range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
        len: "'${name}' must be exactly ${len} in length",
        min: "'${name}' cannot be less than ${min} in length",
        max: "'${name}' cannot be greater than ${max} in length",
        range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {mismatch: "'${name}' does not match pattern ${pattern}"}
}, Gw = Vw;

function Xw(e, t) {
    return e.replace(/\$\{\w+\}/g, (e => {
        var n = e.slice(2, -1);
        return t[n]
    }))
}

var qw = "CODE_LOGIC_ERROR";

function Yw(e, t, n, r, o) {
    return Qw.apply(this, arguments)
}

function Qw() {
    return Qw = Cb(wb().mark((function e(t, n, r, o, a) {
        var i, l, s, c, u, d, f, p, m;
        return wb().wrap((e => {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return delete (i = Cd({}, r)).ruleIndex, Gw.warning = () => {
                    }, i.validator && (l = i.validator, i.validator = function () {
                        try {
                            return l.apply(void 0, arguments)
                        } catch (e) {
                            return Promise.reject(qw)
                        }
                    }), s = null, i && "array" === i.type && i.defaultField && (s = i.defaultField, delete i.defaultField), c = new Gw(wd({}, t, [i])), u = Lm(Uw, o.validateMessages), c.messages(u), d = [], e.prev = 10, e.next = 13, Promise.resolve(c.validate(wd({}, t, n), Cd({}, o)));
                case 13:
                    e.next = 18;
                    break;
                case 15:
                    e.prev = 15, e.t0 = e.catch(10), e.t0.errors && (d = e.t0.errors.map(((e, t) => {
                        var n = e.message, r = n === qw ? u.default : n;
                        return F.isValidElement(r) ? F.cloneElement(r, {key: "error_".concat(t)}) : r
                    })));
                case 18:
                    if (d.length || !s) {
                        e.next = 23;
                        break
                    }
                    return e.next = 21, Promise.all(n.map(((e, n) => Yw("".concat(t, ".").concat(n), e, s, o, a))));
                case 21:
                    return f = e.sent, e.abrupt("return", f.reduce(((e, t) => [].concat(If(e), If(t))), []));
                case 23:
                    return p = Cd(Cd({}, r), {}, {
                        name: t,
                        enum: (r.enum || []).join(", ")
                    }, a), m = d.map((e => "string" == typeof e ? Xw(e, p) : e)), e.abrupt("return", m);
                case 26:
                case"end":
                    return e.stop()
            }
        }), e, null, [[10, 15]])
    }))), Qw.apply(this, arguments)
}

function Zw() {
    return (Zw = Cb(wb().mark((function e(t) {
        return wb().wrap((e => {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.abrupt("return", Promise.all(t).then((e => {
                        var t;
                        return (t = []).concat.apply(t, If(e))
                    })));
                case 1:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

function Jw() {
    return (Jw = Cb(wb().mark((function e(t) {
        var n;
        return wb().wrap((e => {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return n = 0, e.abrupt("return", new Promise((e => {
                        t.forEach((r => {
                            r.then((r => {
                                r.errors.length && e([r]), (n += 1) === t.length && e([])
                            }))
                        }))
                    })));
                case 2:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

function ex(e) {
    return yw(e)
}

function tx(e, t) {
    var n = {};
    return t.forEach((t => {
        var r = Im(e, t);
        n = zm(n, t, r)
    })), n
}

function nx(e, t) {
    return e && e.some((e => rx(e, t)))
}

function rx(e, t) {
    return !(!e || !t || e.length !== t.length) && e.every(((e, n) => t[n] === e))
}

function ox(e) {
    var t = arguments.length <= 1 ? void 0 : arguments[1];
    return t && t.target && "object" === Yu(t.target) && e in t.target ? t.target[e] : t
}

function ax(e, t, n) {
    var r = e.length;
    if (t < 0 || t >= r || n < 0 || n >= r) return e;
    var o = e[t], a = t - n;
    return a > 0 ? [].concat(If(e.slice(0, n)), [o], If(e.slice(n, t)), If(e.slice(t + 1, r))) : a < 0 ? [].concat(If(e.slice(0, t)), If(e.slice(t + 1, n + 1)), [o], If(e.slice(n + 1, r))) : e
}

var ix = ["name"], lx = [];

function sx(e, t, n, r, o, a) {
    return "function" == typeof e ? e(t, n, "source" in a ? {source: a.source} : {}) : r !== o
}

var cx = function () {
    td(t, F.Component);
    var e = ad(t);

    function t(n) {
        var r;
        return qu(this, t), (r = e.call(this, n)).state = {resetCount: 0}, r.cancelRegisterFunc = null, r.mounted = !1, r.touched = !1, r.dirty = !1, r.validatePromise = void 0, r.prevValidating = void 0, r.errors = lx, r.warnings = lx, r.cancelRegister = () => {
            var e = r.props, t = e.preserve, n = e.isListField, o = e.name;
            r.cancelRegisterFunc && r.cancelRegisterFunc(n, t, ex(o)), r.cancelRegisterFunc = null
        }, r.getNamePath = () => {
            var e = r.props, t = e.name, n = e.fieldContext.prefixName;
            return void 0 !== t ? [].concat(If(void 0 === n ? [] : n), If(t)) : []
        }, r.getRules = () => {
            var e = r.props, t = e.rules, n = void 0 === t ? [] : t, o = e.fieldContext;
            return n.map((e => "function" == typeof e ? e(o) : e))
        }, r.refresh = () => {
            r.mounted && r.setState((e => ({resetCount: e.resetCount + 1})))
        }, r.metaCache = null, r.triggerMetaEvent = e => {
            var t = r.props.onMetaChange;
            if (t) {
                var n = Cd(Cd({}, r.getMeta()), {}, {destroy: e});
                np(r.metaCache, n) || t(n), r.metaCache = n
            } else r.metaCache = null
        }, r.onStoreChange = (e, t, n) => {
            var o = r.props, a = o.shouldUpdate, i = o.dependencies, l = void 0 === i ? [] : i, s = o.onReset,
                c = n.store, u = r.getNamePath(), d = r.getValue(e), f = r.getValue(c), p = t && nx(t, u);
            switch ("valueUpdate" === n.type && "external" === n.source && d !== f && (r.touched = !0, r.dirty = !0, r.validatePromise = null, r.errors = lx, r.warnings = lx, r.triggerMetaEvent()), n.type) {
                case"reset":
                    if (!t || p) return r.touched = !1, r.dirty = !1, r.validatePromise = void 0, r.errors = lx, r.warnings = lx, r.triggerMetaEvent(), null == s || s(), void r.refresh();
                    break;
                case"remove":
                    if (a) return void r.reRender();
                    break;
                case"setField":
                    if (p) {
                        var m = n.data;
                        return "touched" in m && (r.touched = m.touched), "validating" in m && !("originRCField" in m) && (r.validatePromise = m.validating ? Promise.resolve([]) : null), "errors" in m && (r.errors = m.errors || lx), "warnings" in m && (r.warnings = m.warnings || lx), r.dirty = !0, r.triggerMetaEvent(), void r.reRender()
                    }
                    if (a && !u.length && sx(a, e, c, d, f, n)) return void r.reRender();
                    break;
                case"dependenciesUpdate":
                    if (l.map(ex).some((e => nx(n.relatedFields, e)))) return void r.reRender();
                    break;
                default:
                    if (p || (!l.length || u.length || a) && sx(a, e, c, d, f, n)) return void r.reRender()
            }
            !0 === a && r.reRender()
        }, r.validateRules = e => {
            var t = r.getNamePath(), n = r.getValue(), o = e || {}, a = o.triggerName, i = o.validateOnly,
                l = void 0 !== i && i, s = Promise.resolve().then((() => {
                    if (!r.mounted) return [];
                    var o = r.props, i = o.validateFirst, l = void 0 !== i && i, c = o.messageVariables, u = r.getRules();
                    a && (u = u.filter((e => e)).filter((e => {
                        var t = e.validateTrigger;
                        return !t || yw(t).includes(a)
                    })));
                    var d = function (e, t, n, r, o, a) {
                        var i, l = e.join("."), s = n.map(((e, t) => {
                            var n = e.validator, r = Cd(Cd({}, e), {}, {ruleIndex: t});
                            return n && (r.validator = (e, t, r) => {
                                var o = !1, a = n(e, t, (function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    Promise.resolve().then((() => {
                                        yd(!o, "Your validator function has already return a promise. `callback` will be ignored."), o || r.apply(void 0, t)
                                    }))
                                }));
                                yd(o = a && "function" == typeof a.then && "function" == typeof a.catch, "`callback` is deprecated. Please return a promise instead."), o && a.then((() => {
                                    r()
                                })).catch((e => {
                                    r(e || " ")
                                }))
                            }), r
                        })).sort(((e, t) => {
                            var n = e.warningOnly, r = e.ruleIndex, o = t.warningOnly, a = t.ruleIndex;
                            return !!n == !!o ? r - a : n ? 1 : -1
                        }));
                        if (!0 === o) i = new Promise(function () {
                            var e = Cb(wb().mark((function e(n, o) {
                                var i, c, u;
                                return wb().wrap((e => {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            i = 0;
                                        case 1:
                                            if (!(i < s.length)) {
                                                e.next = 12;
                                                break
                                            }
                                            return c = s[i], e.next = 5, Yw(l, t, c, r, a);
                                        case 5:
                                            if (!(u = e.sent).length) {
                                                e.next = 9;
                                                break
                                            }
                                            return o([{errors: u, rule: c}]), e.abrupt("return");
                                        case 9:
                                            i += 1, e.next = 1;
                                            break;
                                        case 12:
                                            n([]);
                                        case 13:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t, n) {
                                return e.apply(this, arguments)
                            }
                        }()); else {
                            var c = s.map((e => Yw(l, t, e, r, a).then((t => ({errors: t, rule: e})))));
                            i = (o ? function (e) {
                                return Jw.apply(this, arguments)
                            }(c) : function (e) {
                                return Zw.apply(this, arguments)
                            }(c)).then((e => Promise.reject(e)))
                        }
                        return i.catch((e => e)), i
                    }(t, n, u, e, l, c);
                    return d.catch((e => e)).then((function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lx;
                        if (r.validatePromise === s) {
                            var t;
                            r.validatePromise = null;
                            var n = [], o = [];
                            null === (t = e.forEach) || void 0 === t || t.call(e, (e => {
                                var t = e.rule.warningOnly, r = e.errors, a = void 0 === r ? lx : r;
                                t ? o.push.apply(o, If(a)) : n.push.apply(n, If(a))
                            })), r.errors = n, r.warnings = o, r.triggerMetaEvent(), r.reRender()
                        }
                    })), d
                }));
            return l || (r.validatePromise = s, r.dirty = !0, r.errors = lx, r.warnings = lx, r.triggerMetaEvent(), r.reRender()), s
        }, r.isFieldValidating = () => !!r.validatePromise, r.isFieldTouched = () => r.touched, r.isFieldDirty = () => !(!r.dirty && void 0 === r.props.initialValue) || void 0 !== (0, r.props.fieldContext.getInternalHooks(gw).getInitialValue)(r.getNamePath()), r.getErrors = () => r.errors, r.getWarnings = () => r.warnings, r.isListField = () => r.props.isListField, r.isList = () => r.props.isList, r.isPreserve = () => r.props.preserve, r.getMeta = () => (r.prevValidating = r.isFieldValidating(), {
            touched: r.isFieldTouched(),
            validating: r.prevValidating,
            errors: r.errors,
            warnings: r.warnings,
            name: r.getNamePath(),
            validated: null === r.validatePromise
        }), r.getOnlyChild = e => {
            if ("function" == typeof e) {
                var t = r.getMeta();
                return Cd(Cd({}, r.getOnlyChild(e(r.getControlled(), t, r.props.fieldContext))), {}, {isFunction: !0})
            }
            var n = md(e);
            return 1 === n.length && F.isValidElement(n[0]) ? {child: n[0], isFunction: !1} : {child: n, isFunction: !1}
        }, r.getValue = e => {
            var t = r.props.fieldContext.getFieldsValue, n = r.getNamePath();
            return Im(e || t(!0), n)
        }, r.getControlled = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r.props, n = t.trigger,
                o = t.validateTrigger, a = t.getValueFromEvent, i = t.normalize, l = t.valuePropName,
                s = t.getValueProps, c = t.fieldContext, u = void 0 !== o ? o : c.validateTrigger, d = r.getNamePath(),
                f = c.getInternalHooks, p = c.getFieldsValue, m = f(gw).dispatch, g = r.getValue(),
                h = s || (e => wd({}, l, e)), v = e[n], b = Cd(Cd({}, e), h(g));
            return b[n] = function () {
                var e;
                r.touched = !0, r.dirty = !0, r.triggerMetaEvent();
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                e = a ? a.apply(void 0, n) : ox.apply(void 0, [l].concat(n)), i && (e = i(e, g, p(!0))), m({
                    type: "updateValue",
                    namePath: d,
                    value: e
                }), v && v.apply(void 0, n)
            }, yw(u || []).forEach((e => {
                var t = b[e];
                b[e] = function () {
                    t && t.apply(void 0, arguments);
                    var n = r.props.rules;
                    n && n.length && m({type: "validateField", namePath: d, triggerName: e})
                }
            })), b
        }, n.fieldContext && (0, (0, n.fieldContext.getInternalHooks)(gw).initEntityValue)(od(r)), r
    }

    return Ju(t, [{
        key: "componentDidMount", value() {
            var e = this.props, t = e.shouldUpdate, n = e.fieldContext;
            if (this.mounted = !0, n) {
                var r = (0, n.getInternalHooks)(gw).registerField;
                this.cancelRegisterFunc = r(this)
            }
            !0 === t && this.reRender()
        }
    }, {
        key: "componentWillUnmount", value() {
            this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1
        }
    }, {
        key: "reRender", value() {
            this.mounted && this.forceUpdate()
        }
    }, {
        key: "render", value() {
            var e, t = this.state.resetCount, n = this.props.children, r = this.getOnlyChild(n), o = r.child;
            return r.isFunction ? e = o : F.isValidElement(o) ? e = F.cloneElement(o, this.getControlled(o.props)) : (yd(!o, "`children` of Field is not validate ReactElement."), e = o), F.createElement(F.Fragment, {key: t}, e)
        }
    }]), t
}();

function ux(e) {
    var t = e.name, n = tp(e, ix), r = F.useContext(vw), o = F.useContext(bw), a = void 0 !== t ? ex(t) : void 0,
        i = "keep";
    return n.isListField || (i = "_".concat((a || []).join("_"))), F.createElement(cx, cd({
        key: i,
        name: a,
        isListField: !!o
    }, n, {fieldContext: r}))
}

cx.contextType = vw, cx.defaultProps = {trigger: "onChange", valuePropName: "value"};
var dx = "__@field_split__";

function fx(e) {
    return e.map((e => "".concat(Yu(e), ":").concat(e))).join(dx)
}

var px = function () {
    function e() {
        qu(this, e), this.kvs = new Map
    }

    return Ju(e, [{
        key: "set", value(e, t) {
            this.kvs.set(fx(e), t)
        }
    }, {
        key: "get", value(e) {
            return this.kvs.get(fx(e))
        }
    }, {
        key: "update", value(e, t) {
            var n = t(this.get(e));
            n ? this.set(e, n) : this.delete(e)
        }
    }, {
        key: "delete", value(e) {
            this.kvs.delete(fx(e))
        }
    }, {
        key: "map", value(e) {
            return If(this.kvs.entries()).map((t => {
                var n = Df(t, 2), r = n[0], o = n[1], a = r.split(dx);
                return e({
                    key: a.map((e => {
                        var t = Df(e.match(/^([^:]*):(.*)$/), 3), n = t[1], r = t[2];
                        return "number" === n ? Number(r) : r
                    })), value: o
                })
            }))
        }
    }, {
        key: "toJSON", value() {
            var e = {};
            return this.map((t => {
                var n = t.key, r = t.value;
                return e[n.join(".")] = r, null
            })), e
        }
    }]), e
}(), mx = ["name"], gx = Ju((function e(t) {
    var n = this;
    qu(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = () => ({
        getFieldValue: n.getFieldValue,
        getFieldsValue: n.getFieldsValue,
        getFieldError: n.getFieldError,
        getFieldWarning: n.getFieldWarning,
        getFieldsError: n.getFieldsError,
        isFieldsTouched: n.isFieldsTouched,
        isFieldTouched: n.isFieldTouched,
        isFieldValidating: n.isFieldValidating,
        isFieldsValidating: n.isFieldsValidating,
        resetFields: n.resetFields,
        setFields: n.setFields,
        setFieldValue: n.setFieldValue,
        setFieldsValue: n.setFieldsValue,
        validateFields: n.validateFields,
        submit: n.submit,
        _init: !0,
        getInternalHooks: n.getInternalHooks
    }), this.getInternalHooks = e => e === gw ? (n.formHooked = !0, {
        dispatch: n.dispatch,
        initEntityValue: n.initEntityValue,
        registerField: n.registerField,
        useSubscribe: n.useSubscribe,
        setInitialValues: n.setInitialValues,
        destroyForm: n.destroyForm,
        setCallbacks: n.setCallbacks,
        setValidateMessages: n.setValidateMessages,
        getFields: n.getFields,
        setPreserve: n.setPreserve,
        getInitialValue: n.getInitialValue,
        registerWatch: n.registerWatch
    }) : (yd(!1, "`getInternalHooks` is internal usage. Should not call directly."), null), this.useSubscribe = e => {
        n.subscribable = e
    }, this.prevWithoutPreserves = null, this.setInitialValues = (e, t) => {
        if (n.initialValues = e || {}, t) {
            var r, o = Lm(e, n.store);
            null === (r = n.prevWithoutPreserves) || void 0 === r || r.map((t => {
                var n = t.key;
                o = zm(o, n, Im(e, n))
            })), n.prevWithoutPreserves = null, n.updateStore(o)
        }
    }, this.destroyForm = () => {
        var e = new px;
        n.getFieldEntities(!0).forEach((t => {
            n.isMergedPreserve(t.isPreserve()) || e.set(t.getNamePath(), !0)
        })), n.prevWithoutPreserves = e
    }, this.getInitialValue = e => {
        var t = Im(n.initialValues, e);
        return e.length ? Lm(t) : t
    }, this.setCallbacks = e => {
        n.callbacks = e
    }, this.setValidateMessages = e => {
        n.validateMessages = e
    }, this.setPreserve = e => {
        n.preserve = e
    }, this.watchList = [], this.registerWatch = e => (n.watchList.push(e), () => {
        n.watchList = n.watchList.filter((t => t !== e))
    }), this.notifyWatch = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (n.watchList.length) {
            var t = n.getFieldsValue(), r = n.getFieldsValue(!0);
            n.watchList.forEach((n => {
                n(t, r, e)
            }))
        }
    }, this.timeoutId = null, this.warningUnhooked = () => {
    }, this.updateStore = e => {
        n.store = e
    }, this.getFieldEntities = function () {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? n.fieldEntities.filter((e => e.getNamePath().length)) : n.fieldEntities
    }, this.getFieldsMap = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = new px;
        return n.getFieldEntities(e).forEach((e => {
            var n = e.getNamePath();
            t.set(n, e)
        })), t
    }, this.getFieldEntitiesForNamePathList = e => {
        if (!e) return n.getFieldEntities(!0);
        var t = n.getFieldsMap(!0);
        return e.map((e => {
            var n = ex(e);
            return t.get(n) || {INVALIDATE_NAME_PATH: ex(e)}
        }))
    }, this.getFieldsValue = (e, t) => {
        var r, o, a;
        if (n.warningUnhooked(), !0 === e || Array.isArray(e) ? (r = e, o = t) : e && "object" === Yu(e) && (a = e.strict, o = e.filter), !0 === r && !o) return n.store;
        var i = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null), l = [];
        return i.forEach((e => {
            var t, n, i = "INVALIDATE_NAME_PATH" in e ? e.INVALIDATE_NAME_PATH : e.getNamePath();
            if (a) {
                if (null === (n = e.isList) || void 0 === n ? void 0 : n.call(e)) return
            } else if (!r && (null === (t = e.isListField) || void 0 === t ? void 0 : t.call(e))) return;
            if (o) {
                var s = "getMeta" in e ? e.getMeta() : null;
                o(s) && l.push(i)
            } else l.push(i)
        })), tx(n.store, l.map(ex))
    }, this.getFieldValue = e => {
        n.warningUnhooked();
        var t = ex(e);
        return Im(n.store, t)
    }, this.getFieldsError = e => (n.warningUnhooked(), n.getFieldEntitiesForNamePathList(e).map(((t, n) => t && !("INVALIDATE_NAME_PATH" in t) ? {
        name: t.getNamePath(),
        errors: t.getErrors(),
        warnings: t.getWarnings()
    } : {name: ex(e[n]), errors: [], warnings: []}))), this.getFieldError = e => {
        n.warningUnhooked();
        var t = ex(e);
        return n.getFieldsError([t])[0].errors
    }, this.getFieldWarning = e => {
        n.warningUnhooked();
        var t = ex(e);
        return n.getFieldsError([t])[0].warnings
    }, this.isFieldsTouched = function () {
        n.warningUnhooked();
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var o, a = t[0], i = t[1], l = !1;
        0 === t.length ? o = null : 1 === t.length ? Array.isArray(a) ? (o = a.map(ex), l = !1) : (o = null, l = a) : (o = a.map(ex), l = i);
        var s = n.getFieldEntities(!0), c = e => e.isFieldTouched();
        if (!o) return l ? s.every(c) : s.some(c);
        var u = new px;
        o.forEach((e => {
            u.set(e, [])
        })), s.forEach((e => {
            var t = e.getNamePath();
            o.forEach((n => {
                n.every(((e, n) => t[n] === e)) && u.update(n, (t => [].concat(If(t), [e])))
            }))
        }));
        var d = e => e.some(c), f = u.map((e => e.value));
        return l ? f.every(d) : f.some(d)
    }, this.isFieldTouched = e => (n.warningUnhooked(), n.isFieldsTouched([e])), this.isFieldsValidating = e => {
        n.warningUnhooked();
        var t = n.getFieldEntities();
        if (!e) return t.some((e => e.isFieldValidating()));
        var r = e.map(ex);
        return t.some((e => {
            var t = e.getNamePath();
            return nx(r, t) && e.isFieldValidating()
        }))
    }, this.isFieldValidating = e => (n.warningUnhooked(), n.isFieldsValidating([e])), this.resetWithFieldInitialValue = function () {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = new px,
            o = n.getFieldEntities(!0);
        o.forEach((e => {
            var t = e.props.initialValue, n = e.getNamePath();
            if (void 0 !== t) {
                var o = r.get(n) || new Set;
                o.add({entity: e, value: t}), r.set(n, o)
            }
        })), t.entities ? e = t.entities : t.namePathList ? (e = [], t.namePathList.forEach((t => {
            var n, o = r.get(t);
            o && (n = e).push.apply(n, If(If(o).map((e => e.entity))))
        }))) : e = o, e.forEach((e => {
            if (void 0 !== e.props.initialValue) {
                var o = e.getNamePath();
                if (void 0 !== n.getInitialValue(o)) yd(!1, "Form already set 'initialValues' with path '".concat(o.join("."), "'. Field can not overwrite it.")); else {
                    var a = r.get(o);
                    if (a && a.size > 1) yd(!1, "Multiple Field with path '".concat(o.join("."), "' set 'initialValue'. Can not decide which one to pick.")); else if (a) {
                        var i = n.getFieldValue(o);
                        t.skipExist && void 0 !== i || n.updateStore(zm(n.store, o, If(a)[0].value))
                    }
                }
            }
        }))
    }, this.resetFields = e => {
        n.warningUnhooked();
        var t = n.store;
        if (!e) return n.updateStore(Lm(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(t, null, {type: "reset"}), void n.notifyWatch();
        var r = e.map(ex);
        r.forEach((e => {
            var t = n.getInitialValue(e);
            n.updateStore(zm(n.store, e, t))
        })), n.resetWithFieldInitialValue({namePathList: r}), n.notifyObservers(t, r, {type: "reset"}), n.notifyWatch(r)
    }, this.setFields = e => {
        n.warningUnhooked();
        var t = n.store, r = [];
        e.forEach((e => {
            var o = e.name, a = tp(e, mx), i = ex(o);
            r.push(i), "value" in a && n.updateStore(zm(n.store, i, a.value)), n.notifyObservers(t, [i], {
                type: "setField",
                data: e
            })
        })), n.notifyWatch(r)
    }, this.getFields = () => n.getFieldEntities(!0).map((e => {
        var t = e.getNamePath(), r = Cd(Cd({}, e.getMeta()), {}, {name: t, value: n.getFieldValue(t)});
        return Object.defineProperty(r, "originRCField", {value: !0}), r
    })), this.initEntityValue = e => {
        var t = e.props.initialValue;
        if (void 0 !== t) {
            var r = e.getNamePath();
            void 0 === Im(n.store, r) && n.updateStore(zm(n.store, r, t))
        }
    }, this.isMergedPreserve = e => {
        var t = void 0 !== e ? e : n.preserve;
        return null == t || t
    }, this.registerField = e => {
        n.fieldEntities.push(e);
        var t = e.getNamePath();
        if (n.notifyWatch([t]), void 0 !== e.props.initialValue) {
            var r = n.store;
            n.resetWithFieldInitialValue({
                entities: [e],
                skipExist: !0
            }), n.notifyObservers(r, [e.getNamePath()], {type: "valueUpdate", source: "internal"})
        }
        return function (r, o) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            if (n.fieldEntities = n.fieldEntities.filter((t => t !== e)), !n.isMergedPreserve(o) && (!r || a.length > 1)) {
                var i = r ? void 0 : n.getInitialValue(t);
                if (t.length && n.getFieldValue(t) !== i && n.fieldEntities.every((e => !rx(e.getNamePath(), t)))) {
                    var l = n.store;
                    n.updateStore(zm(l, t, i, !0)), n.notifyObservers(l, [t], {type: "remove"}), n.triggerDependenciesUpdate(l, t)
                }
            }
            n.notifyWatch([t])
        }
    }, this.dispatch = e => {
        switch (e.type) {
            case"updateValue":
                var t = e.namePath, r = e.value;
                n.updateValue(t, r);
                break;
            case"validateField":
                var o = e.namePath, a = e.triggerName;
                n.validateFields([o], {triggerName: a})
        }
    }, this.notifyObservers = (e, t, r) => {
        if (n.subscribable) {
            var o = Cd(Cd({}, r), {}, {store: n.getFieldsValue(!0)});
            n.getFieldEntities().forEach((n => {
                (0, n.onStoreChange)(e, t, o)
            }))
        } else n.forceRootUpdate()
    }, this.triggerDependenciesUpdate = (e, t) => {
        var r = n.getDependencyChildrenFields(t);
        return r.length && n.validateFields(r), n.notifyObservers(e, r, {
            type: "dependenciesUpdate",
            relatedFields: [t].concat(If(r))
        }), r
    }, this.updateValue = (e, t) => {
        var r = ex(e), o = n.store;
        n.updateStore(zm(n.store, r, t)), n.notifyObservers(o, [r], {
            type: "valueUpdate",
            source: "internal"
        }), n.notifyWatch([r]);
        var a = n.triggerDependenciesUpdate(o, r), i = n.callbacks.onValuesChange;
        i && i(tx(n.store, [r]), n.getFieldsValue()), n.triggerOnFieldsChange([r].concat(If(a)))
    }, this.setFieldsValue = e => {
        n.warningUnhooked();
        var t = n.store;
        if (e) {
            var r = Lm(n.store, e);
            n.updateStore(r)
        }
        n.notifyObservers(t, null, {type: "valueUpdate", source: "external"}), n.notifyWatch()
    }, this.setFieldValue = (e, t) => {
        n.setFields([{name: e, value: t}])
    }, this.getDependencyChildrenFields = e => {
        var t = new Set, r = [], o = new px;
        return n.getFieldEntities().forEach((e => {
            (e.props.dependencies || []).forEach((t => {
                var n = ex(t);
                o.update(n, (function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set;
                    return t.add(e), t
                }))
            }))
        })), function e(n) {
            (o.get(n) || new Set).forEach((n => {
                if (!t.has(n)) {
                    t.add(n);
                    var o = n.getNamePath();
                    n.isFieldDirty() && o.length && (r.push(o), e(o))
                }
            }))
        }(e), r
    }, this.triggerOnFieldsChange = (e, t) => {
        var r = n.callbacks.onFieldsChange;
        if (r) {
            var o = n.getFields();
            if (t) {
                var a = new px;
                t.forEach((e => {
                    var t = e.name, n = e.errors;
                    a.set(t, n)
                })), o.forEach((e => {
                    e.errors = a.get(e.name) || e.errors
                }))
            }
            var i = o.filter((t => {
                var n = t.name;
                return nx(e, n)
            }));
            i.length && r(i, o)
        }
    }, this.validateFields = (e, t) => {
        var r, o;
        n.warningUnhooked(), Array.isArray(e) || "string" == typeof e || "string" == typeof t ? (r = e, o = t) : o = e;
        var a = !!r, i = a ? r.map(ex) : [], l = [], s = String(Date.now()), c = new Set;
        n.getFieldEntities(!0).forEach((e => {
            var t;
            if (a || i.push(e.getNamePath()), (null === (t = o) || void 0 === t ? void 0 : t.recursive) && a) {
                var u = e.getNamePath();
                u.every(((e, t) => r[t] === e || void 0 === r[t])) && i.push(u)
            }
            if (e.props.rules && e.props.rules.length) {
                var d = e.getNamePath();
                if (c.add(d.join(s)), !a || nx(i, d)) {
                    var f = e.validateRules(Cd({validateMessages: Cd(Cd({}, Uw), n.validateMessages)}, o));
                    l.push(f.then((() => ({name: d, errors: [], warnings: []}))).catch((e => {
                        var t, n = [], r = [];
                        return null === (t = e.forEach) || void 0 === t || t.call(e, (e => {
                            var t = e.rule.warningOnly, o = e.errors;
                            t ? r.push.apply(r, If(o)) : n.push.apply(n, If(o))
                        })), n.length ? Promise.reject({name: d, errors: n, warnings: r}) : {
                            name: d,
                            errors: n,
                            warnings: r
                        }
                    })))
                }
            }
        }));
        var u = (e => {
            var t = !1, n = e.length, r = [];
            return e.length ? new Promise(((o, a) => {
                e.forEach(((e, i) => {
                    e.catch((e => (t = !0, e))).then((e => {
                        n -= 1, r[i] = e, n > 0 || (t && a(r), o(r))
                    }))
                }))
            })) : Promise.resolve([])
        })(l);
        n.lastValidatePromise = u, u.catch((e => e)).then((e => {
            var t = e.map((e => e.name));
            n.notifyObservers(n.store, t, {type: "validateFinish"}), n.triggerOnFieldsChange(t, e)
        }));
        var d = u.then((() => n.lastValidatePromise === u ? Promise.resolve(n.getFieldsValue(i)) : Promise.reject([]))).catch((e => {
            var t = e.filter((e => e && e.errors.length));
            return Promise.reject({values: n.getFieldsValue(i), errorFields: t, outOfDate: n.lastValidatePromise !== u})
        }));
        d.catch((e => e));
        var f = i.filter((e => c.has(e.join(s))));
        return n.triggerOnFieldsChange(f), d
    }, this.submit = () => {
        n.warningUnhooked(), n.validateFields().then((e => {
            var t = n.callbacks.onFinish;
            if (t) try {
                t(e)
            } catch (r) {
            }
        })).catch((e => {
            var t = n.callbacks.onFinishFailed;
            t && t(e)
        }))
    }, this.forceRootUpdate = t
}));

function hx(e) {
    var t = F.useRef(), n = Df(F.useState({}), 2)[1];
    if (!t.current) if (e) t.current = e; else {
        var r = new gx((() => {
            n({})
        }));
        t.current = r.getForm()
    }
    return [t.current]
}

var vx = F.createContext({
        triggerFormChange() {
        }, triggerFormFinish() {
        }, registerForm() {
        }, unregisterForm() {
        }
    }),
    bx = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"],
    yx = (e, t) => {
        var n = e.name, r = e.initialValues, o = e.fields, a = e.form, i = e.preserve, l = e.children, s = e.component,
            c = void 0 === s ? "form" : s, u = e.validateMessages, d = e.validateTrigger,
            f = void 0 === d ? "onChange" : d, p = e.onValuesChange, m = e.onFieldsChange, g = e.onFinish,
            h = e.onFinishFailed, v = tp(e, bx), b = F.useContext(vx), y = Df(hx(a), 1)[0], w = y.getInternalHooks(gw),
            x = w.useSubscribe, C = w.setInitialValues, S = w.setCallbacks, E = w.setValidateMessages,
            k = w.setPreserve, $ = w.destroyForm;
        F.useImperativeHandle(t, (() => y)), F.useEffect((() => (b.registerForm(n, y), () => {
            b.unregisterForm(n)
        })), [b, y, n]), E(Cd(Cd({}, b.validateMessages), u)), S({
            onValuesChange: p, onFieldsChange(e) {
                if (b.triggerFormChange(n, e), m) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    m.apply(void 0, [e].concat(r))
                }
            }, onFinish(e) {
                b.triggerFormFinish(n, e), g && g(e)
            }, onFinishFailed: h
        }), k(i);
        var O, P = F.useRef(null);
        C(r, !P.current), P.current || (P.current = !0), F.useEffect((() => $), []);
        var N = "function" == typeof l;
        O = N ? l(y.getFieldsValue(!0), y) : l, x(!N);
        var M = F.useRef();
        F.useEffect((() => {
            ((e, t) => {
                if (e === t) return !0;
                if (!e && t || e && !t) return !1;
                if (!e || !t || "object" !== Yu(e) || "object" !== Yu(t)) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                return If(new Set([].concat(n, r))).every((n => {
                    var r = e[n], o = t[n];
                    return "function" == typeof r && "function" == typeof o || r === o
                }))
            })(M.current || [], o || []) || y.setFields(o || []), M.current = o
        }), [o, y]);
        var R = F.useMemo((() => Cd(Cd({}, y), {}, {validateTrigger: f})), [y, f]),
            I = F.createElement(bw.Provider, {value: null}, F.createElement(vw.Provider, {value: R}, O));
        return !1 === c ? I : F.createElement(c, cd({}, v, {
            onSubmit(e) {
                e.preventDefault(), e.stopPropagation(), y.submit()
            }, onReset(e) {
                var t;
                e.preventDefault(), y.resetFields(), null === (t = v.onReset) || void 0 === t || t.call(v, e)
            }
        }), I)
    };

function wx(e) {
    try {
        return JSON.stringify(e)
    } catch (t) {
        return Math.random()
    }
}

var xx = F.forwardRef(yx);
xx.FormProvider = e => {
    var t = e.validateMessages, n = e.onFormChange, r = e.onFormFinish, o = e.children, a = F.useContext(vx),
        i = F.useRef({});
    return F.createElement(vx.Provider, {
        value: Cd(Cd({}, a), {}, {
            validateMessages: Cd(Cd({}, a.validateMessages), t),
            triggerFormChange(e, t) {
                n && n(e, {changedFields: t, forms: i.current}), a.triggerFormChange(e, t)
            },
            triggerFormFinish(e, t) {
                r && r(e, {values: t, forms: i.current}), a.triggerFormFinish(e, t)
            },
            registerForm(e, t) {
                e && (i.current = Cd(Cd({}, i.current), {}, wd({}, e, t))), a.registerForm(e, t)
            },
            unregisterForm(e) {
                var t = Cd({}, i.current);
                delete t[e], i.current = t, a.unregisterForm(e)
            }
        })
    }, o)
}, xx.Field = ux, xx.List = e => {
    var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField,
        l = F.useContext(vw), s = F.useContext(bw), c = F.useRef({keys: [], id: 0}).current, u = F.useMemo((() => {
            var e = ex(l.prefixName) || [];
            return [].concat(If(e), If(ex(t)))
        }), [l.prefixName, t]), d = F.useMemo((() => Cd(Cd({}, l), {}, {prefixName: u})), [l, u]), f = F.useMemo((() => ({
            getKey(e) {
                var t = u.length, n = e[t];
                return [c.keys[n], e.slice(t + 1)]
            }
        })), [u]);
    return "function" != typeof r ? (yd(!1, "Form.List only accepts function as children."), null) : F.createElement(bw.Provider, {value: f}, F.createElement(vw.Provider, {value: d}, F.createElement(ux, {
        name: [],
        shouldUpdate: (e, t, n) => "internal" !== n.source && e !== t,
        rules: o,
        validateTrigger: a,
        initialValue: n,
        isList: !0,
        isListField: null != i ? i : !!s
    }, ((e, t) => {
        var n = e.value, o = void 0 === n ? [] : n, a = e.onChange, i = l.getFieldValue, s = () => i(u || []) || [],
            d = {
                add(e, t) {
                    var n = s();
                    t >= 0 && t <= n.length ? (c.keys = [].concat(If(c.keys.slice(0, t)), [c.id], If(c.keys.slice(t))), a([].concat(If(n.slice(0, t)), [e], If(n.slice(t))))) : (c.keys = [].concat(If(c.keys), [c.id]), a([].concat(If(n), [e]))), c.id += 1
                }, remove(e) {
                    var t = s(), n = new Set(Array.isArray(e) ? e : [e]);
                    n.size <= 0 || (c.keys = c.keys.filter(((e, t) => !n.has(t))), a(t.filter(((e, t) => !n.has(t)))))
                }, move(e, t) {
                    if (e !== t) {
                        var n = s();
                        e < 0 || e >= n.length || t < 0 || t >= n.length || (c.keys = ax(c.keys, e, t), a(ax(n, e, t)))
                    }
                }
            }, f = o || [];
        return Array.isArray(f) || (f = []), r(f.map(((e, t) => {
            var n = c.keys[t];
            return void 0 === n && (c.keys[t] = c.id, n = c.keys[t], c.id += 1), {name: t, key: n, isListField: !0}
        })), d, t)
    }))))
}, xx.useForm = hx, xx.useWatch = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = t[0], o = void 0 === r ? [] : r, a = t[1], i = void 0 === a ? {} : a,
        l = (e => e && !!e._init)(i) ? {form: i} : i, s = l.form, c = Df(F.useState(), 2), u = c[0], d = c[1],
        f = F.useMemo((() => wx(u)), [u]), p = F.useRef(f);
    p.current = f;
    var m = F.useContext(vw), g = s || m, h = g && g._init, v = ex(o), b = F.useRef(v);
    return b.current = v, F.useEffect((() => {
        if (h) {
            var e = g.getFieldsValue, t = (0, (0, g.getInternalHooks)(gw).registerWatch)(((e, t) => {
                var n = Im(l.preserve ? t : e, b.current), r = wx(n);
                p.current !== r && (p.current = r, d(n))
            })), n = Im(l.preserve ? e(!0) : e(), b.current);
            return d(n), t
        }
    }), [h]), u
};
const Cx = F.createContext({}), Sx = e => {
    let {children: t, status: n, override: r} = e;
    const o = F.useContext(Cx), a = F.useMemo((() => {
        const e = Object.assign({}, o);
        return r && delete e.isFormItemInput, n && (delete e.status, delete e.hasFeedback, delete e.feedbackIcon), e
    }), [n, r, o]);
    return F.createElement(Cx.Provider, {value: a}, t)
};

function Ex(e, t) {
    return A.createElement("span", {className: `${e}-close-x`}, t || A.createElement(Lv, {className: `${e}-close-icon`}))
}

const kx = e => {
        const {
            okText: t,
            okType: n = "primary",
            cancelText: r,
            confirmLoading: o,
            onOk: a,
            onCancel: i,
            okButtonProps: l,
            cancelButtonProps: s
        } = e, [c] = Xm("Modal", Um());
        return A.createElement(fh, {disabled: !1}, A.createElement(Wy, Object.assign({onClick: i}, s), r || (null == c ? void 0 : c.cancelText)), A.createElement(Wy, Object.assign({}, Dy(n), {
            loading: o,
            onClick: a
        }, l), t || (null == c ? void 0 : c.okText)))
    }, $x = e => ({animationDuration: e, animationFillMode: "both"}),
    Ox = e => ({animationDuration: e, animationFillMode: "both"}), Px = function (e, t, n, r) {
        const o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4] ? "&" : "";
        return {
            [`\n      ${o}${e}-enter,\n      ${o}${e}-appear\n    `]: Object.assign(Object.assign({}, $x(r)), {animationPlayState: "paused"}),
            [`${o}${e}-leave`]: Object.assign(Object.assign({}, Ox(r)), {animationPlayState: "paused"}),
            [`\n      ${o}${e}-enter${e}-enter-active,\n      ${o}${e}-appear${e}-appear-active\n    `]: {
                animationName: t,
                animationPlayState: "running"
            },
            [`${o}${e}-leave${e}-leave-active`]: {animationName: n, animationPlayState: "running", pointerEvents: "none"}
        }
    }, Nx = new Pm("antFadeIn", {"0%": {opacity: 0}, "100%": {opacity: 1}}),
    Mx = new Pm("antFadeOut", {"0%": {opacity: 1}, "100%": {opacity: 0}}), Rx = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const {antCls: n} = e, r = `${n}-fade`, o = t ? "&" : "";
        return [Px(r, Nx, Mx, e.motionDurationMid, t), {
            [`\n        ${o}${r}-enter,\n        ${o}${r}-appear\n      `]: {
                opacity: 0,
                animationTimingFunction: "linear"
            }, [`${o}${r}-leave`]: {animationTimingFunction: "linear"}
        }]
    }, Ix = new Pm("antMoveDownIn", {
        "0%": {transform: "translate3d(0, 100%, 0)", transformOrigin: "0 0", opacity: 0},
        "100%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1}
    }), jx = new Pm("antMoveDownOut", {
        "0%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1},
        "100%": {transform: "translate3d(0, 100%, 0)", transformOrigin: "0 0", opacity: 0}
    }), zx = new Pm("antMoveLeftIn", {
        "0%": {transform: "translate3d(-100%, 0, 0)", transformOrigin: "0 0", opacity: 0},
        "100%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1}
    }), Tx = new Pm("antMoveLeftOut", {
        "0%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1},
        "100%": {transform: "translate3d(-100%, 0, 0)", transformOrigin: "0 0", opacity: 0}
    }), _x = new Pm("antMoveRightIn", {
        "0%": {transform: "translate3d(100%, 0, 0)", transformOrigin: "0 0", opacity: 0},
        "100%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1}
    }), Lx = new Pm("antMoveRightOut", {
        "0%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1},
        "100%": {transform: "translate3d(100%, 0, 0)", transformOrigin: "0 0", opacity: 0}
    }), Fx = {
        "move-up": {
            inKeyframes: new Pm("antMoveUpIn", {
                "0%": {
                    transform: "translate3d(0, -100%, 0)",
                    transformOrigin: "0 0",
                    opacity: 0
                }, "100%": {transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1}
            }),
            outKeyframes: new Pm("antMoveUpOut", {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                    transformOrigin: "0 0",
                    opacity: 1
                }, "100%": {transform: "translate3d(0, -100%, 0)", transformOrigin: "0 0", opacity: 0}
            })
        },
        "move-down": {inKeyframes: Ix, outKeyframes: jx},
        "move-left": {inKeyframes: zx, outKeyframes: Tx},
        "move-right": {inKeyframes: _x, outKeyframes: Lx}
    }, Ax = (e, t) => {
        const {antCls: n} = e, r = `${n}-${t}`, {inKeyframes: o, outKeyframes: a} = Fx[t];
        return [Px(r, o, a, e.motionDurationMid), {
            [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                opacity: 0,
                animationTimingFunction: e.motionEaseOutCirc
            }, [`${r}-leave`]: {animationTimingFunction: e.motionEaseInOutCirc}
        }]
    }, Hx = new Pm("antSlideUpIn", {
        "0%": {transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0},
        "100%": {transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1}
    }), Dx = new Pm("antSlideUpOut", {
        "0%": {transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1},
        "100%": {transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0}
    }), Bx = new Pm("antSlideDownIn", {
        "0%": {transform: "scaleY(0.8)", transformOrigin: "100% 100%", opacity: 0},
        "100%": {transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1}
    }), Wx = new Pm("antSlideDownOut", {
        "0%": {transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1},
        "100%": {transform: "scaleY(0.8)", transformOrigin: "100% 100%", opacity: 0}
    }), Vx = new Pm("antSlideLeftIn", {
        "0%": {transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0},
        "100%": {transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1}
    }), Kx = new Pm("antSlideLeftOut", {
        "0%": {transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1},
        "100%": {transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0}
    }), Ux = new Pm("antSlideRightIn", {
        "0%": {transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0},
        "100%": {transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1}
    }), Gx = new Pm("antSlideRightOut", {
        "0%": {transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1},
        "100%": {transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0}
    }), Xx = {
        "slide-up": {inKeyframes: Hx, outKeyframes: Dx},
        "slide-down": {inKeyframes: Bx, outKeyframes: Wx},
        "slide-left": {inKeyframes: Vx, outKeyframes: Kx},
        "slide-right": {inKeyframes: Ux, outKeyframes: Gx}
    }, qx = (e, t) => {
        const {antCls: n} = e, r = `${n}-${t}`, {inKeyframes: o, outKeyframes: a} = Xx[t];
        return [Px(r, o, a, e.motionDurationMid), {
            [`\n      ${r}-enter,\n      ${r}-appear\n    `]: {
                transform: "scale(0)",
                transformOrigin: "0% 0%",
                opacity: 0,
                animationTimingFunction: e.motionEaseOutQuint,
                "&-prepare": {transform: "scale(1)"}
            }, [`${r}-leave`]: {animationTimingFunction: e.motionEaseInQuint}
        }]
    }, Yx = new Pm("antZoomIn", {"0%": {transform: "scale(0.2)", opacity: 0}, "100%": {transform: "scale(1)", opacity: 1}}),
    Qx = new Pm("antZoomOut", {"0%": {transform: "scale(1)"}, "100%": {transform: "scale(0.2)", opacity: 0}}),
    Zx = new Pm("antZoomBigIn", {
        "0%": {transform: "scale(0.8)", opacity: 0},
        "100%": {transform: "scale(1)", opacity: 1}
    }), Jx = new Pm("antZoomBigOut", {"0%": {transform: "scale(1)"}, "100%": {transform: "scale(0.8)", opacity: 0}}),
    eC = new Pm("antZoomUpIn", {
        "0%": {transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0},
        "100%": {transform: "scale(1)", transformOrigin: "50% 0%"}
    }), tC = new Pm("antZoomUpOut", {
        "0%": {transform: "scale(1)", transformOrigin: "50% 0%"},
        "100%": {transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0}
    }), nC = {
        zoom: {inKeyframes: Yx, outKeyframes: Qx},
        "zoom-big": {inKeyframes: Zx, outKeyframes: Jx},
        "zoom-big-fast": {inKeyframes: Zx, outKeyframes: Jx},
        "zoom-left": {
            inKeyframes: new Pm("antZoomLeftIn", {
                "0%": {
                    transform: "scale(0.8)",
                    transformOrigin: "0% 50%",
                    opacity: 0
                }, "100%": {transform: "scale(1)", transformOrigin: "0% 50%"}
            }),
            outKeyframes: new Pm("antZoomLeftOut", {
                "0%": {transform: "scale(1)", transformOrigin: "0% 50%"},
                "100%": {transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0}
            })
        },
        "zoom-right": {
            inKeyframes: new Pm("antZoomRightIn", {
                "0%": {
                    transform: "scale(0.8)",
                    transformOrigin: "100% 50%",
                    opacity: 0
                }, "100%": {transform: "scale(1)", transformOrigin: "100% 50%"}
            }),
            outKeyframes: new Pm("antZoomRightOut", {
                "0%": {transform: "scale(1)", transformOrigin: "100% 50%"},
                "100%": {transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0}
            })
        },
        "zoom-up": {inKeyframes: eC, outKeyframes: tC},
        "zoom-down": {
            inKeyframes: new Pm("antZoomDownIn", {
                "0%": {
                    transform: "scale(0.8)",
                    transformOrigin: "50% 100%",
                    opacity: 0
                }, "100%": {transform: "scale(1)", transformOrigin: "50% 100%"}
            }),
            outKeyframes: new Pm("antZoomDownOut", {
                "0%": {transform: "scale(1)", transformOrigin: "50% 100%"},
                "100%": {transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0}
            })
        }
    }, rC = (e, t) => {
        const {antCls: n} = e, r = `${n}-${t}`, {inKeyframes: o, outKeyframes: a} = nC[t];
        return [Px(r, o, a, "zoom-big-fast" === t ? e.motionDurationFast : e.motionDurationMid), {
            [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                transform: "scale(0)",
                opacity: 0,
                animationTimingFunction: e.motionEaseOutCirc,
                "&-prepare": {transform: "none"}
            }, [`${r}-leave`]: {animationTimingFunction: e.motionEaseInOutCirc}
        }]
    };

function oC(e) {
    return {position: e, inset: 0}
}

const aC = e => {
    const {componentCls: t, antCls: n} = e;
    return [{
        [`${t}-root`]: {
            [`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
                transform: "none",
                opacity: 0,
                animationDuration: e.motionDurationSlow,
                userSelect: "none"
            },
            [`${t}${n}-zoom-leave ${t}-content`]: {pointerEvents: "none"},
            [`${t}-mask`]: Object.assign(Object.assign({}, oC("fixed")), {
                zIndex: e.zIndexPopupBase,
                height: "100%",
                backgroundColor: e.colorBgMask,
                pointerEvents: "none",
                [`${t}-hidden`]: {display: "none"}
            }),
            [`${t}-wrap`]: Object.assign(Object.assign({}, oC("fixed")), {
                zIndex: e.zIndexPopupBase,
                overflow: "auto",
                outline: 0,
                WebkitOverflowScrolling: "touch",
                [`&:has(${t}${n}-zoom-enter), &:has(${t}${n}-zoom-appear)`]: {pointerEvents: "none"}
            })
        }
    }, {[`${t}-root`]: Rx(e)}]
}, iC = e => {
    const {componentCls: t} = e;
    return [{
        [`${t}-root`]: {
            [`${t}-wrap-rtl`]: {direction: "rtl"},
            [`${t}-centered`]: {
                textAlign: "center",
                "&::before": {
                    display: "inline-block",
                    width: 0,
                    height: "100%",
                    verticalAlign: "middle",
                    content: '""'
                },
                [t]: {top: 0, display: "inline-block", paddingBottom: 0, textAlign: "start", verticalAlign: "middle"}
            },
            [`@media (max-width: ${e.screenSMMax})`]: {
                [t]: {
                    maxWidth: "calc(100vw - 16px)",
                    margin: `${e.marginXS} auto`
                }, [`${t}-centered`]: {[t]: {flex: 1}}
            }
        }
    }, {
        [t]: Object.assign(Object.assign({}, Yg(e)), {
            pointerEvents: "none",
            position: "relative",
            top: 100,
            width: "auto",
            maxWidth: `calc(100vw - ${2 * e.margin}px)`,
            margin: "0 auto",
            paddingBottom: e.paddingLG,
            [`${t}-title`]: {
                margin: 0,
                color: e.titleColor,
                fontWeight: e.fontWeightStrong,
                fontSize: e.titleFontSize,
                lineHeight: e.titleLineHeight,
                wordWrap: "break-word"
            },
            [`${t}-content`]: {
                position: "relative",
                backgroundColor: e.contentBg,
                backgroundClip: "padding-box",
                border: 0,
                borderRadius: e.borderRadiusLG,
                boxShadow: e.boxShadow,
                pointerEvents: "auto",
                padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
            },
            [`${t}-close`]: Object.assign({
                position: "absolute",
                top: (e.modalHeaderHeight - e.modalCloseBtnSize) / 2,
                insetInlineEnd: (e.modalHeaderHeight - e.modalCloseBtnSize) / 2,
                zIndex: e.zIndexPopupBase + 10,
                padding: 0,
                color: e.modalCloseIconColor,
                fontWeight: e.fontWeightStrong,
                lineHeight: 1,
                textDecoration: "none",
                background: "transparent",
                borderRadius: e.borderRadiusSM,
                width: e.modalCloseBtnSize,
                height: e.modalCloseBtnSize,
                border: 0,
                outline: 0,
                cursor: "pointer",
                transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
                "&-x": {
                    display: "flex",
                    fontSize: e.fontSizeLG,
                    fontStyle: "normal",
                    lineHeight: `${e.modalCloseBtnSize}px`,
                    justifyContent: "center",
                    textTransform: "none",
                    textRendering: "auto"
                },
                "&:hover": {
                    color: e.modalIconHoverColor,
                    backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
                    textDecoration: "none"
                },
                "&:active": {backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover}
            }, eh(e)),
            [`${t}-header`]: {
                color: e.colorText,
                background: e.headerBg,
                borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                marginBottom: e.marginXS
            },
            [`${t}-body`]: {fontSize: e.fontSize, lineHeight: e.lineHeight, wordWrap: "break-word"},
            [`${t}-footer`]: {
                textAlign: "end",
                background: e.footerBg,
                marginTop: e.marginSM,
                [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
                    marginBottom: 0,
                    marginInlineStart: e.marginXS
                }
            },
            [`${t}-open`]: {overflow: "hidden"}
        })
    }, {
        [`${t}-pure-panel`]: {
            top: "auto",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            [`${t}-content,\n          ${t}-body,\n          ${t}-confirm-body-wrapper`]: {
                display: "flex",
                flexDirection: "column",
                flex: "auto"
            },
            [`${t}-confirm-body`]: {marginBottom: "auto"}
        }
    }]
}, lC = e => {
    const {componentCls: t} = e, n = `${t}-confirm`;
    return {
        [n]: {
            "&-rtl": {direction: "rtl"},
            [`${e.antCls}-modal-header`]: {display: "none"},
            [`${n}-body-wrapper`]: Object.assign({}, {
                "&::before": {display: "table", content: '""'},
                "&::after": {display: "table", clear: "both", content: '""'}
            }),
            [`${n}-body`]: {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                [`${n}-title`]: {
                    flex: "0 0 100%",
                    display: "block",
                    overflow: "hidden",
                    color: e.colorTextHeading,
                    fontWeight: e.fontWeightStrong,
                    fontSize: e.titleFontSize,
                    lineHeight: e.titleLineHeight,
                    [`+ ${n}-content`]: {
                        marginBlockStart: e.marginXS,
                        flexBasis: "100%",
                        maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
                    }
                },
                [`${n}-content`]: {color: e.colorText, fontSize: e.fontSize},
                [`> ${e.iconCls}`]: {
                    flex: "none",
                    marginInlineEnd: e.marginSM,
                    fontSize: e.modalConfirmIconSize,
                    [`+ ${n}-title`]: {flex: 1},
                    [`+ ${n}-title + ${n}-content`]: {marginInlineStart: e.modalConfirmIconSize + e.marginSM}
                }
            },
            [`${n}-btns`]: {
                textAlign: "end",
                marginTop: e.marginSM,
                [`${e.antCls}-btn + ${e.antCls}-btn`]: {marginBottom: 0, marginInlineStart: e.marginXS}
            }
        },
        [`${n}-error ${n}-body > ${e.iconCls}`]: {color: e.colorError},
        [`${n}-warning ${n}-body > ${e.iconCls},\n        ${n}-confirm ${n}-body > ${e.iconCls}`]: {color: e.colorWarning},
        [`${n}-info ${n}-body > ${e.iconCls}`]: {color: e.colorInfo},
        [`${n}-success ${n}-body > ${e.iconCls}`]: {color: e.colorSuccess}
    }
}, sC = e => {
    const {componentCls: t} = e;
    return {[`${t}-root`]: {[`${t}-wrap-rtl`]: {direction: "rtl", [`${t}-confirm-body`]: {direction: "rtl"}}}}
}, cC = e => {
    const {componentCls: t, antCls: n} = e, r = `${t}-confirm`;
    return {
        [t]: {
            [`${t}-content`]: {padding: 0},
            [`${t}-header`]: {
                padding: e.modalHeaderPadding,
                borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
                marginBottom: 0
            },
            [`${t}-body`]: {padding: e.modalBodyPadding},
            [`${t}-footer`]: {
                padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
                borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
                borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
                marginTop: 0
            }
        },
        [r]: {
            [`${n}-modal-body`]: {padding: `${2 * e.padding}px ${2 * e.padding}px ${e.paddingLG}px`},
            [`${r}-body`]: {
                [`> ${e.iconCls}`]: {
                    marginInlineEnd: e.margin,
                    [`+ ${r}-title + ${r}-content`]: {marginInlineStart: e.modalConfirmIconSize + e.margin}
                }
            },
            [`${r}-btns`]: {marginTop: e.marginLG}
        }
    }
}, uC = lh("Modal", (e => {
    const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5, o = rh(e, {
        modalBodyPadding: e.paddingLG,
        modalHeaderPadding: `${t}px ${e.paddingLG}px`,
        modalHeaderBorderWidth: e.lineWidth,
        modalHeaderBorderStyle: e.lineType,
        modalHeaderBorderColorSplit: e.colorSplit,
        modalHeaderHeight: r * n + 2 * t,
        modalFooterBorderColorSplit: e.colorSplit,
        modalFooterBorderStyle: e.lineType,
        modalFooterPaddingVertical: e.paddingXS,
        modalFooterPaddingHorizontal: e.padding,
        modalFooterBorderWidth: e.lineWidth,
        modalIconHoverColor: e.colorIconHover,
        modalCloseIconColor: e.colorIcon,
        modalCloseBtnSize: e.fontSize * e.lineHeight,
        modalConfirmIconSize: e.fontSize * e.lineHeight
    });
    return [iC(o), lC(o), sC(o), aC(o), e.wireframe && cC(o), rC(o, "zoom")]
}), (e => ({
    footerBg: "transparent",
    headerBg: e.colorBgElevated,
    titleLineHeight: e.lineHeightHeading5,
    titleFontSize: e.fontSizeHeading5,
    contentBg: e.colorBgElevated,
    titleColor: e.colorTextHeading
})));
let dC;
pw() && document.documentElement.addEventListener("click", (e => {
    dC = {x: e.pageX, y: e.pageY}, setTimeout((() => {
        dC = null
    }), 100)
}), !0);
const fC = e => {
    var t;
    const {getPopupContainer: n, getPrefixCls: r, direction: o, modal: a} = F.useContext(Ug), i = t => {
            const {onCancel: n} = e;
            null == n || n(t)
        }, {
            prefixCls: l,
            className: s,
            rootClassName: c,
            open: u,
            wrapClassName: d,
            centered: f,
            getContainer: p,
            closeIcon: m,
            closable: g,
            focusTriggerAfterClose: h = !0,
            style: v,
            visible: b,
            width: y = 520,
            footer: w
        } = e, x = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "closable", "focusTriggerAfterClose", "style", "visible", "width", "footer"]),
        C = r("modal", l), S = r(), [E, k] = uC(C), $ = sd(d, {[`${C}-centered`]: !!f, [`${C}-wrap-rtl`]: "rtl" === o}),
        O = void 0 === w ? F.createElement(kx, Object.assign({}, e, {
            onOk(t) {
                const {onOk: n} = e;
                null == n || n(t)
            }, onCancel: i
        })) : w, [P, N] = fw(g, m, (e => Ex(C, e)), F.createElement(Lv, {className: `${C}-close-icon`}), !0);
    return E(F.createElement(Jb, null, F.createElement(Sx, {
        status: !0,
        override: !0
    }, F.createElement(dw, Object.assign({width: y}, x, {
        getContainer: void 0 === p ? n : p,
        prefixCls: C,
        rootClassName: sd(k, c),
        wrapClassName: $,
        footer: O,
        visible: null != u ? u : b,
        mousePosition: null !== (t = x.mousePosition) && void 0 !== t ? t : dC,
        onClose: i,
        closable: P,
        closeIcon: N,
        focusTriggerAfterClose: h,
        transitionName: Uy(S, "zoom", e.transitionName),
        maskTransitionName: Uy(S, "fade", e.maskTransitionName),
        className: sd(k, s, null == a ? void 0 : a.className),
        style: Object.assign(Object.assign({}, null == a ? void 0 : a.style), v)
    })))))
};

function pC(e) {
    const {
        icon: t,
        onCancel: n,
        onOk: r,
        close: o,
        onConfirm: a,
        isSilent: i,
        okText: l,
        okButtonProps: s,
        cancelText: c,
        cancelButtonProps: u,
        confirmPrefixCls: d,
        rootPrefixCls: f,
        type: p,
        okCancel: m,
        footer: g,
        locale: h
    } = e;
    let v = t;
    if (!t && null !== t) switch (p) {
        case"info":
            v = F.createElement(Wv, null);
            break;
        case"success":
            v = F.createElement(Rv, null);
            break;
        case"error":
            v = F.createElement(zv, null);
            break;
        default:
            v = F.createElement(Hv, null)
    }
    const b = e.okType || "primary", y = null != m ? m : "confirm" === p,
        w = null !== e.autoFocusButton && (e.autoFocusButton || "ok"), [x] = Xm("Modal"), C = h || x,
        S = y && F.createElement(Ky, {
            isSilent: i, actionFn: n, close() {
                null == o || o.apply(void 0, arguments), null == a || a(!1)
            }, autoFocus: "cancel" === w, buttonProps: u, prefixCls: `${f}-btn`
        }, c || (null == C ? void 0 : C.cancelText));
    return F.createElement("div", {className: `${d}-body-wrapper`}, F.createElement("div", {className: `${d}-body`}, v, void 0 === e.title ? null : F.createElement("span", {className: `${d}-title`}, e.title), F.createElement("div", {className: `${d}-content`}, e.content)), void 0 === g ? F.createElement("div", {className: `${d}-btns`}, S, F.createElement(Ky, {
        isSilent: i,
        type: b,
        actionFn: r,
        close() {
            null == o || o.apply(void 0, arguments), null == a || a(!0)
        },
        autoFocus: "ok" === w,
        buttonProps: s,
        prefixCls: `${f}-btn`
    }, l || (y ? null == C ? void 0 : C.okText : null == C ? void 0 : C.justOkText))) : g)
}

const mC = e => {
    const {
            close: t,
            zIndex: n,
            afterClose: r,
            visible: o,
            open: a,
            keyboard: i,
            centered: l,
            getContainer: s,
            maskStyle: c,
            direction: u,
            prefixCls: d,
            wrapClassName: f,
            rootPrefixCls: p,
            iconPrefixCls: m,
            theme: g,
            bodyStyle: h,
            closable: v = !1,
            closeIcon: b,
            modalRender: y,
            focusTriggerAfterClose: w
        } = e, x = `${d}-confirm`, C = e.width || 416, S = e.style || {}, E = void 0 === e.mask || e.mask,
        k = void 0 !== e.maskClosable && e.maskClosable,
        $ = sd(x, `${x}-${e.type}`, {[`${x}-rtl`]: "rtl" === u}, e.className);
    return F.createElement(gv, {
        prefixCls: p,
        iconPrefixCls: m,
        direction: u,
        theme: g
    }, F.createElement(fC, {
        prefixCls: d,
        className: $,
        wrapClassName: sd({[`${x}-centered`]: !!e.centered}, f),
        onCancel: () => null == t ? void 0 : t({triggerCancel: !0}),
        open: a,
        title: "",
        footer: null,
        transitionName: Uy(p, "zoom", e.transitionName),
        maskTransitionName: Uy(p, "fade", e.maskTransitionName),
        mask: E,
        maskClosable: k,
        maskStyle: c,
        style: S,
        bodyStyle: h,
        width: C,
        zIndex: n,
        afterClose: r,
        keyboard: i,
        centered: l,
        getContainer: s,
        closable: v,
        closeIcon: b,
        modalRender: y,
        focusTriggerAfterClose: w
    }, F.createElement(pC, Object.assign({}, e, {confirmPrefixCls: x}))))
}, gC = [];
let hC = "";

function vC(e) {
    const t = document.createDocumentFragment();
    let n, r = Object.assign(Object.assign({}, e), {close: i, open: !0});

    function o() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        const a = r.some((e => e && e.triggerCancel));
        e.onCancel && a && e.onCancel.apply(e, [() => {
        }].concat(If(r.slice(1))));
        for (let e = 0; e < gC.length; e++) if (gC[e] === i) {
            gC.splice(e, 1);
            break
        }
        zb(t)
    }

    function a(e) {
        var {okText: r, cancelText: o, prefixCls: a, getContainer: i} = e, l = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["okText", "cancelText", "prefixCls", "getContainer"]);
        clearTimeout(n), n = setTimeout((() => {
            const e = Um(), {getPrefixCls: n, getIconPrefixCls: s, getTheme: c} = pv(), u = n(void 0, hC),
                d = a || `${u}-modal`, f = s(), p = c();
            let m = i;
            !1 === m && (m = void 0), Mb(F.createElement(mC, Object.assign({}, l, {
                getContainer: m,
                prefixCls: d,
                rootPrefixCls: u,
                iconPrefixCls: f,
                okText: r,
                locale: e,
                theme: p,
                cancelText: o || e.cancelText
            })), t)
        }))
    }

    function i() {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        r = Object.assign(Object.assign({}, r), {
            open: !1, afterClose: () => {
                "function" == typeof e.afterClose && e.afterClose(), o.apply(this, n)
            }
        }), r.visible && delete r.visible, a(r)
    }

    return a(r), gC.push(i), {
        destroy: i, update(e) {
            r = "function" == typeof e ? e(r) : Object.assign(Object.assign({}, r), e), a(r)
        }
    }
}

function bC(e) {
    return Object.assign(Object.assign({}, e), {type: "warning"})
}

function yC(e) {
    return Object.assign(Object.assign({}, e), {type: "info"})
}

function wC(e) {
    return Object.assign(Object.assign({}, e), {type: "success"})
}

function xC(e) {
    return Object.assign(Object.assign({}, e), {type: "error"})
}

function CC(e) {
    return Object.assign(Object.assign({}, e), {type: "confirm"})
}

const SC = (e, t) => {
    var n, {afterClose: r, config: o} = e, a = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["afterClose", "config"]);
    const [i, l] = F.useState(!0), [s, c] = F.useState(o), {direction: u, getPrefixCls: d} = F.useContext(Ug),
        f = d("modal"), p = d(), m = function () {
            l(!1);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            const r = t.some((e => e && e.triggerCancel));
            s.onCancel && r && s.onCancel.apply(s, [() => {
            }].concat(If(t.slice(1))))
        };
    F.useImperativeHandle(t, (() => ({
        destroy: m, update(e) {
            c((t => Object.assign(Object.assign({}, t), e)))
        }
    })));
    const g = null !== (n = s.okCancel) && void 0 !== n ? n : "confirm" === s.type, [h] = Xm("Modal", Bm.Modal);
    return F.createElement(mC, Object.assign({prefixCls: f, rootPrefixCls: p}, s, {
        close: m,
        open: i,
        afterClose() {
            var e;
            r(), null === (e = s.afterClose) || void 0 === e || e.call(s)
        },
        okText: s.okText || (g ? null == h ? void 0 : h.okText : null == h ? void 0 : h.justOkText),
        direction: s.direction || u,
        cancelText: s.cancelText || (null == h ? void 0 : h.cancelText)
    }, a))
}, EC = F.forwardRef(SC);
let kC = 0;
const $C = F.memo(F.forwardRef(((e, t) => {
    const [n, r] = (() => {
        const [e, t] = F.useState([]);
        return [e, F.useCallback((e => (t((t => [].concat(If(t), [e]))), () => {
            t((t => t.filter((t => t !== e))))
        })), [])]
    })();
    return F.useImperativeHandle(t, (() => ({patchElement: r})), []), F.createElement(F.Fragment, null, n)
}))), OC = e => {
    const {componentCls: t, width: n, notificationMarginEdge: r} = e, o = new Pm("antNotificationTopFadeIn", {
        "0%": {marginTop: "-100%", opacity: 0},
        "100%": {marginTop: 0, opacity: 1}
    }), a = new Pm("antNotificationBottomFadeIn", {
        "0%": {marginBottom: "-100%", opacity: 0},
        "100%": {marginBottom: 0, opacity: 1}
    }), i = new Pm("antNotificationLeftFadeIn", {
        "0%": {right: {_skip_check_: !0, value: n}, opacity: 0},
        "100%": {right: {_skip_check_: !0, value: 0}, opacity: 1}
    });
    return {
        [`&${t}-top, &${t}-bottom`]: {marginInline: 0},
        [`&${t}-top`]: {[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {animationName: o}},
        [`&${t}-bottom`]: {[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {animationName: a}},
        [`&${t}-topLeft, &${t}-bottomLeft`]: {
            marginInlineEnd: 0,
            marginInlineStart: r,
            [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {animationName: i}
        }
    }
}, PC = e => {
    const {
        iconCls: t,
        componentCls: n,
        boxShadow: r,
        fontSizeLG: o,
        notificationMarginBottom: a,
        borderRadiusLG: i,
        colorSuccess: l,
        colorInfo: s,
        colorWarning: c,
        colorError: u,
        colorTextHeading: d,
        notificationBg: f,
        notificationPadding: p,
        notificationMarginEdge: m,
        motionDurationMid: g,
        motionEaseInOut: h,
        fontSize: v,
        lineHeight: b,
        width: y,
        notificationIconSize: w,
        colorText: x
    } = e, C = `${n}-notice`, S = new Pm("antNotificationFadeIn", {
        "0%": {left: {_skip_check_: !0, value: y}, opacity: 0},
        "100%": {left: {_skip_check_: !0, value: 0}, opacity: 1}
    }), E = new Pm("antNotificationFadeOut", {
        "0%": {maxHeight: e.animationMaxHeight, marginBottom: a, opacity: 1},
        "100%": {maxHeight: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, opacity: 0}
    }), k = {
        position: "relative",
        width: y,
        maxWidth: `calc(100vw - ${2 * m}px)`,
        marginBottom: a,
        marginInlineStart: "auto",
        padding: p,
        overflow: "hidden",
        lineHeight: b,
        wordWrap: "break-word",
        background: f,
        borderRadius: i,
        boxShadow: r,
        [`${n}-close-icon`]: {fontSize: v, cursor: "pointer"},
        [`${C}-message`]: {marginBottom: e.marginXS, color: d, fontSize: o, lineHeight: e.lineHeightLG},
        [`${C}-description`]: {fontSize: v, color: x},
        [`&${C}-closable ${C}-message`]: {paddingInlineEnd: e.paddingLG},
        [`${C}-with-icon ${C}-message`]: {marginBottom: e.marginXS, marginInlineStart: e.marginSM + w, fontSize: o},
        [`${C}-with-icon ${C}-description`]: {marginInlineStart: e.marginSM + w, fontSize: v},
        [`${C}-icon`]: {
            position: "absolute",
            fontSize: w,
            lineHeight: 0,
            [`&-success${t}`]: {color: l},
            [`&-info${t}`]: {color: s},
            [`&-warning${t}`]: {color: c},
            [`&-error${t}`]: {color: u}
        },
        [`${C}-close`]: {
            position: "absolute",
            top: e.notificationPaddingVertical,
            insetInlineEnd: e.notificationPaddingHorizontal,
            color: e.colorIcon,
            outline: "none",
            width: e.notificationCloseButtonSize,
            height: e.notificationCloseButtonSize,
            borderRadius: e.borderRadiusSM,
            transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {color: e.colorIconHover, backgroundColor: e.wireframe ? "transparent" : e.colorFillContent}
        },
        [`${C}-btn`]: {float: "right", marginTop: e.marginSM}
    };
    return [{
        [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yg(e)), {
            position: "fixed",
            zIndex: e.zIndexPopup,
            marginInlineEnd: m,
            [`${n}-hook-holder`]: {position: "relative"},
            [`&${n}-top, &${n}-bottom`]: {[C]: {marginInline: "auto auto"}},
            [`&${n}-topLeft, &${n}-bottomLeft`]: {[C]: {marginInlineEnd: "auto", marginInlineStart: 0}},
            [`${n}-fade-enter, ${n}-fade-appear`]: {
                animationDuration: e.motionDurationMid,
                animationTimingFunction: h,
                animationFillMode: "both",
                opacity: 0,
                animationPlayState: "paused"
            },
            [`${n}-fade-leave`]: {
                animationTimingFunction: h,
                animationFillMode: "both",
                animationDuration: g,
                animationPlayState: "paused"
            },
            [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
                animationName: S,
                animationPlayState: "running"
            },
            [`${n}-fade-leave${n}-fade-leave-active`]: {animationName: E, animationPlayState: "running"}
        }), OC(e)), {"&-rtl": {direction: "rtl", [`${C}-btn`]: {float: "left"}}})
    }, {[n]: {[C]: Object.assign({}, k)}}, {[`${C}-pure-panel`]: Object.assign(Object.assign({}, k), {margin: 0})}]
}, NC = lh("Notification", (e => {
    const t = e.paddingMD, n = e.paddingLG, r = rh(e, {
        notificationBg: e.colorBgElevated,
        notificationPaddingVertical: t,
        notificationPaddingHorizontal: n,
        notificationIconSize: e.fontSizeLG * e.lineHeightLG,
        notificationCloseButtonSize: .55 * e.controlHeightLG,
        notificationMarginBottom: e.margin,
        notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
        notificationMarginEdge: e.marginLG,
        animationMaxHeight: 150
    });
    return [PC(r)]
}), (e => ({zIndexPopup: e.zIndexPopupBase + 50, width: 384})));

function MC(e, t) {
    return null === t || !1 === t ? null : t || F.createElement("span", {className: `${e}-close-x`}, F.createElement(Lv, {className: `${e}-close-icon`}))
}

const RC = {success: Rv, info: Wv, error: zv, warning: Hv}, IC = e => {
    const {prefixCls: t, icon: n, type: r, message: o, description: a, btn: i, role: l = "alert"} = e;
    let s = null;
    return n ? s = F.createElement("span", {className: `${t}-icon`}, n) : r && (s = F.createElement(RC[r] || null, {className: sd(`${t}-icon`, `${t}-icon-${r}`)})), F.createElement("div", {
        className: sd({[`${t}-with-icon`]: s}),
        role: l
    }, s, F.createElement("div", {className: `${t}-message`}, o), F.createElement("div", {className: `${t}-description`}, a), i && F.createElement("div", {className: `${t}-btn`}, i))
}, jC = e => {
    let {children: t, prefixCls: n} = e;
    const [, r] = NC(n);
    return F.createElement(Jv, {classNames: {list: r, notice: r}}, t)
}, zC = (e, t) => {
    let {prefixCls: n, key: r} = t;
    return F.createElement(jC, {prefixCls: n, key: r}, e)
}, TC = F.forwardRef(((e, t) => {
    const {
            top: n,
            bottom: r,
            prefixCls: o,
            getContainer: a,
            maxCount: i,
            rtl: l,
            onAllRemoved: s
        } = e, {getPrefixCls: c, getPopupContainer: u, notification: d} = F.useContext(Ug),
        f = o || c("notification"), [p, m] = ab({
            prefixCls: f,
            style: e => ((e, t, n) => {
                let r;
                switch (e) {
                    case"top":
                        r = {left: "50%", transform: "translateX(-50%)", right: "auto", top: t, bottom: "auto"};
                        break;
                    case"topLeft":
                        r = {left: 0, top: t, bottom: "auto"};
                        break;
                    case"topRight":
                        r = {right: 0, top: t, bottom: "auto"};
                        break;
                    case"bottom":
                        r = {left: "50%", transform: "translateX(-50%)", right: "auto", top: "auto", bottom: n};
                        break;
                    case"bottomLeft":
                        r = {left: 0, top: "auto", bottom: n};
                        break;
                    default:
                        r = {right: 0, top: "auto", bottom: n}
                }
                return r
            })(e, null != n ? n : 24, null != r ? r : 24),
            className: () => sd({[`${f}-rtl`]: l}),
            motion: () => (e => ({motionName: `${e}-fade`}))(f),
            closable: !0,
            closeIcon: MC(f),
            duration: 4.5,
            getContainer: () => (null == a ? void 0 : a()) || (null == u ? void 0 : u()) || document.body,
            maxCount: i,
            onAllRemoved: s,
            renderNotifications: zC
        });
    return F.useImperativeHandle(t, (() => Object.assign(Object.assign({}, p), {prefixCls: f, notification: d}))), m
}));

function _C(e) {
    const t = F.useRef(null);
    return [F.useMemo((() => {
        const n = n => {
            var r;
            if (!t.current) return;
            const {open: o, prefixCls: a, notification: i} = t.current, l = `${a}-notice`, {
                    message: s,
                    description: c,
                    icon: u,
                    type: d,
                    btn: f,
                    className: p,
                    style: m,
                    role: g = "alert",
                    closeIcon: h
                } = n, v = ((e, t) => {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                })(n, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon"]),
                b = MC(l, h);
            return o(Object.assign(Object.assign({placement: null !== (r = null == e ? void 0 : e.placement) && void 0 !== r ? r : "topRight"}, v), {
                content: F.createElement(IC, {
                    prefixCls: l,
                    icon: u,
                    type: d,
                    message: s,
                    description: c,
                    btn: f,
                    role: g
                }),
                className: sd(d && `${l}-${d}`, p, null == i ? void 0 : i.className),
                style: Object.assign(Object.assign({}, null == i ? void 0 : i.style), m),
                closeIcon: b,
                closable: !!b
            }))
        }, r = {
            open: n, destroy(e) {
                var n, r;
                void 0 !== e ? null === (n = t.current) || void 0 === n || n.close(e) : null === (r = t.current) || void 0 === r || r.destroy()
            }
        };
        return ["success", "info", "warning", "error"].forEach((e => {
            r[e] = t => n(Object.assign(Object.assign({}, t), {type: e}))
        })), r
    }), []), F.createElement(TC, Object.assign({key: "notification-holder"}, e, {ref: t}))]
}

function LC(e) {
    return t => F.createElement(gv, {
        theme: {
            token: {
                motion: !1,
                zIndexPopupBase: 0
            }
        }
    }, F.createElement(e, Object.assign({}, t)))
}

const FC = () => {
    if ("undefined" == typeof navigator || "undefined" == typeof window) return !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null == e ? void 0 : e.substr(0, 4))
};
var AC = F.createContext(null);

function HC() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250, t = F.useRef(null),
        n = F.useRef(null);
    return F.useEffect((() => () => {
        window.clearTimeout(n.current)
    }), []), [() => t.current, r => {
        (r || null === t.current) && (t.current = r), window.clearTimeout(n.current), n.current = window.setTimeout((() => {
            t.current = null
        }), e)
    }]
}

var DC = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"],
    BC = void 0;

function WC(e, t) {
    var n = e.prefixCls, r = e.invalidate, o = e.item, a = e.renderItem, i = e.responsive, l = e.responsiveDisabled,
        s = e.registerSize, c = e.itemKey, u = e.className, d = e.style, f = e.children, p = e.display, m = e.order,
        g = e.component, h = void 0 === g ? "div" : g, v = tp(e, DC), b = i && !p;

    function y(e) {
        s(c, e)
    }

    F.useEffect((() => () => {
        y(null)
    }), []);
    var w, x = a && o !== BC ? a(o, {index: m}) : f;
    r || (w = {
        opacity: b ? 0 : 1,
        height: b ? 0 : BC,
        overflowY: b ? "hidden" : BC,
        order: i ? m : BC,
        pointerEvents: b ? "none" : BC,
        position: b ? "absolute" : BC
    });
    var C = {};
    b && (C["aria-hidden"] = !0);
    var S = F.createElement(h, cd({className: sd(!r && n, u), style: Cd(Cd({}, w), d)}, C, v, {ref: t}), x);
    return i && (S = F.createElement(Of, {
        onResize(e) {
            y(e.offsetWidth)
        }, disabled: l
    }, S)), S
}

var VC = F.forwardRef(WC);

function KC(e, t) {
    var n = Df(F.useState(t), 2), r = n[0], o = n[1];
    return [r, Dg((t => {
        e((() => {
            o(t)
        }))
    }))]
}

VC.displayName = "Item";
var UC = A.createContext(null), GC = ["component"], XC = ["className"], qC = ["className"], YC = (e, t) => {
    var n = F.useContext(UC);
    if (!n) {
        var r = e.component, o = void 0 === r ? "div" : r, a = tp(e, GC);
        return F.createElement(o, cd({}, a, {ref: t}))
    }
    var i = n.className, l = tp(n, XC), s = e.className, c = tp(e, qC);
    return F.createElement(UC.Provider, {value: null}, F.createElement(VC, cd({ref: t, className: sd(i, s)}, l, c)))
}, QC = F.forwardRef(YC);
QC.displayName = "RawItem";
var ZC = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"],
    JC = "responsive", eS = "invalidate";

function tS(e) {
    return "+ ".concat(e.length, " ...")
}

function nS(e, t) {
    var n, r = e.prefixCls, o = void 0 === r ? "rc-overflow" : r, a = e.data, i = void 0 === a ? [] : a,
        l = e.renderItem, s = e.renderRawItem, c = e.itemKey, u = e.itemWidth, d = void 0 === u ? 10 : u, f = e.ssr,
        p = e.style, m = e.className, g = e.maxCount, h = e.renderRest, v = e.renderRawRest, b = e.suffix,
        y = e.component, w = void 0 === y ? "div" : y, x = e.itemComponent, C = e.onVisibleChange, S = tp(e, ZC),
        E = "full" === f, k = (n = F.useRef(null), e => {
            n.current || (n.current = [], (e => {
                if ("undefined" == typeof MessageChannel) Ff(e); else {
                    var t = new MessageChannel;
                    t.port1.onmessage = () => e(), t.port2.postMessage(void 0)
                }
            })((() => {
                Uu.unstable_batchedUpdates((() => {
                    n.current.forEach((e => {
                        e()
                    })), n.current = null
                }))
            }))), n.current.push(e)
        }), $ = Df(KC(k, null), 2), O = $[0], P = $[1], N = O || 0, M = Df(KC(k, new Map), 2), R = M[0], I = M[1],
        j = Df(KC(k, 0), 2), z = j[0], T = j[1], _ = Df(KC(k, 0), 2), L = _[0], A = _[1], H = Df(KC(k, 0), 2), D = H[0],
        B = H[1], W = Df(F.useState(null), 2), V = W[0], K = W[1], U = Df(F.useState(null), 2), G = U[0], X = U[1],
        q = F.useMemo((() => null === G && E ? Number.MAX_SAFE_INTEGER : G || 0), [G, O]), Y = Df(F.useState(!1), 2),
        Q = Y[0], Z = Y[1], J = "".concat(o, "-item"), ee = Math.max(z, L), te = g === JC, ne = i.length && te,
        re = g === eS, oe = ne || "number" == typeof g && i.length > g, ae = F.useMemo((() => {
            var e = i;
            return ne ? e = null === O && E ? i : i.slice(0, Math.min(i.length, N / d)) : "number" == typeof g && (e = i.slice(0, g)), e
        }), [i, d, O, g, ne]), ie = F.useMemo((() => ne ? i.slice(q + 1) : i.slice(ae.length)), [i, ae, ne, q]),
        le = F.useCallback(((e, t) => {
            var n;
            return "function" == typeof c ? c(e) : null !== (n = c && (null == e ? void 0 : e[c])) && void 0 !== n ? n : t
        }), [c]), se = F.useCallback(l || (e => e), [l]);

    function ce(e, t, n) {
        (G !== e || void 0 !== t && t !== V) && (X(e), n || (Z(e < i.length - 1), null == C || C(e)), void 0 !== t && K(t))
    }

    function ue(e, t) {
        I((n => {
            var r = new Map(n);
            return null === t ? r.delete(e) : r.set(e, t), r
        }))
    }

    function de(e) {
        return R.get(le(ae[e], e))
    }

    Sp((() => {
        if (N && "number" == typeof ee && ae) {
            var e = D, t = ae.length, n = t - 1;
            if (!t) return void ce(0, null);
            for (var r = 0; r < t; r += 1) {
                var o = de(r);
                if (E && (o = o || 0), void 0 === o) {
                    ce(r - 1, void 0, !0);
                    break
                }
                if (e += o, 0 === n && e <= N || r === n - 1 && e + de(n) <= N) {
                    ce(n, null);
                    break
                }
                if (e + ee > N) {
                    ce(r - 1, e - o - D + L);
                    break
                }
            }
            b && de(0) + D > N && K(null)
        }
    }), [N, R, L, D, le, ae]);
    var fe = Q && !!ie.length, pe = {};
    null !== V && ne && (pe = {position: "absolute", left: V, top: 0});
    var me = {prefixCls: J, responsive: ne, component: x, invalidate: re}, ge = s ? (e, t) => {
            var n = le(e, t);
            return F.createElement(UC.Provider, {
                key: n,
                value: Cd(Cd({}, me), {}, {order: t, item: e, itemKey: n, registerSize: ue, display: t <= q})
            }, s(e, t))
        } : (e, t) => {
            var n = le(e, t);
            return F.createElement(VC, cd({}, me, {
                order: t,
                key: n,
                item: e,
                renderItem: se,
                itemKey: n,
                registerSize: ue,
                display: t <= q
            }))
        }, he = {
            order: fe ? q : Number.MAX_SAFE_INTEGER, className: "".concat(J, "-rest"), registerSize(e, t) {
                A(t), T(L)
            }, display: fe
        }, ve = h || tS,
        be = v ? F.createElement(UC.Provider, {value: Cd(Cd({}, me), he)}, v(ie)) : F.createElement(VC, cd({}, me, he), "function" == typeof ve ? ve(ie) : ve),
        ye = F.createElement(w, cd({
            className: sd(!re && o, m),
            style: p,
            ref: t
        }, S), ae.map(ge), oe ? be : null, b && F.createElement(VC, cd({}, me, {
            responsive: te,
            responsiveDisabled: !ne,
            order: q,
            className: "".concat(J, "-suffix"),
            registerSize(e, t) {
                B(t)
            },
            display: !0,
            style: pe
        }), b));
    return te ? F.createElement(Of, {
        onResize(e, t) {
            P(t.clientWidth)
        }, disabled: !ne
    }, ye) : ye
}

var rS = F.forwardRef(nS);
rS.displayName = "Overflow", rS.Item = QC, rS.RESPONSIVE = JC, rS.INVALIDATE = eS;
var oS = e => {
    var t, n = e.className, r = e.customizeIcon, o = e.customizeIconProps, a = e.onMouseDown, i = e.onClick,
        l = e.children;
    return t = "function" == typeof r ? r(o) : r, F.createElement("span", {
        className: n, onMouseDown(e) {
            e.preventDefault(), a && a(e)
        }, style: {userSelect: "none", WebkitUserSelect: "none"}, unselectable: "on", onClick: i, "aria-hidden": !0
    }, void 0 !== t ? t : F.createElement("span", {className: sd(n.split(/\s+/).map((e => "".concat(e, "-icon"))))}, l))
}, aS = (e, t) => {
    var n, r, o = e.prefixCls, a = e.id, i = e.inputElement, l = e.disabled, s = e.tabIndex, c = e.autoFocus,
        u = e.autoComplete, d = e.editable, f = e.activeDescendantId, p = e.value, m = e.maxLength, g = e.onKeyDown,
        h = e.onMouseDown, v = e.onChange, b = e.onPaste, y = e.onCompositionStart, w = e.onCompositionEnd, x = e.open,
        C = e.attrs, S = i || F.createElement("input", null), E = S, k = E.ref, $ = E.props, O = $.onKeyDown,
        P = $.onChange, N = $.onMouseDown, M = $.onCompositionStart, R = $.onCompositionEnd, I = $.style;
    return S.props, F.cloneElement(S, Cd(Cd(Cd({type: "search"}, $), {}, {
        id: a,
        ref: Gd(t, k),
        disabled: l,
        tabIndex: s,
        autoComplete: u || "off",
        autoFocus: c,
        className: sd("".concat(o, "-selection-search-input"), null === (n = S) || void 0 === n || null === (r = n.props) || void 0 === r ? void 0 : r.className),
        role: "combobox",
        "aria-label": "Search",
        "aria-expanded": x,
        "aria-haspopup": "listbox",
        "aria-owns": "".concat(a, "_list"),
        "aria-autocomplete": "list",
        "aria-controls": "".concat(a, "_list"),
        "aria-activedescendant": x ? f : void 0
    }, C), {}, {
        value: d ? p : "",
        maxLength: m,
        readOnly: !d,
        unselectable: d ? null : "on",
        style: Cd(Cd({}, I), {}, {opacity: d ? null : 0}),
        onKeyDown(e) {
            g(e), O && O(e)
        },
        onMouseDown(e) {
            h(e), N && N(e)
        },
        onChange(e) {
            v(e), P && P(e)
        },
        onCompositionStart(e) {
            y(e), M && M(e)
        },
        onCompositionEnd(e) {
            w(e), R && R(e)
        },
        onPaste: b
    }))
}, iS = F.forwardRef(aS);

function lS(e) {
    return Array.isArray(e) ? e : void 0 !== e ? [e] : []
}

iS.displayName = "Input";
var sS = "undefined" != typeof window && window.document && window.document.documentElement;

function cS(e) {
    return ["string", "number"].includes(Yu(e))
}

function uS(e) {
    var t = void 0;
    return e && (cS(e.title) ? t = e.title.toString() : cS(e.label) && (t = e.label.toString())), t
}

function dS(e) {
    var t;
    return null !== (t = e.key) && void 0 !== t ? t : e.value
}

var fS = e => {
    e.preventDefault(), e.stopPropagation()
}, pS = e => {
    var t, n, r = e.id, o = e.prefixCls, a = e.values, i = e.open, l = e.searchValue, s = e.autoClearSearchValue,
        c = e.inputRef, u = e.placeholder, d = e.disabled, f = e.mode, p = e.showSearch, m = e.autoFocus,
        g = e.autoComplete, h = e.activeDescendantId, v = e.tabIndex, b = e.removeIcon, y = e.maxTagCount,
        w = e.maxTagTextLength, x = e.maxTagPlaceholder, C = void 0 === x ? e => "+ ".concat(e.length, " ...") : x,
        S = e.tagRender, E = e.onToggleOpen, k = e.onRemove, $ = e.onInputChange, O = e.onInputPaste,
        P = e.onInputKeyDown, N = e.onInputMouseDown, M = e.onInputCompositionStart, R = e.onInputCompositionEnd,
        I = F.useRef(null), j = Df(F.useState(0), 2), z = j[0], T = j[1], _ = Df(F.useState(!1), 2), L = _[0], A = _[1],
        H = "".concat(o, "-selection"), D = i || "multiple" === f && !1 === s || "tags" === f ? l : "",
        B = "tags" === f || "multiple" === f && !1 === s || p && (i || L);

    function W(e, t, n, r, o) {
        return F.createElement("span", {
            className: sd("".concat(H, "-item"), wd({}, "".concat(H, "-item-disabled"), n)),
            title: uS(e)
        }, F.createElement("span", {className: "".concat(H, "-item-content")}, t), r && F.createElement(oS, {
            className: "".concat(H, "-item-remove"),
            onMouseDown: fS,
            onClick: o,
            customizeIcon: b
        }, "×"))
    }

    t = () => {
        T(I.current.scrollWidth)
    }, n = [D], sS ? F.useLayoutEffect(t, n) : F.useEffect(t, n);
    var V = F.createElement("div", {
            className: "".concat(H, "-search"), style: {width: z}, onFocus() {
                A(!0)
            }, onBlur() {
                A(!1)
            }
        }, F.createElement(iS, {
            ref: c,
            open: i,
            prefixCls: o,
            id: r,
            inputElement: null,
            disabled: d,
            autoFocus: m,
            autoComplete: g,
            editable: B,
            activeDescendantId: h,
            value: D,
            onKeyDown: P,
            onMouseDown: N,
            onChange: $,
            onPaste: O,
            onCompositionStart: M,
            onCompositionEnd: R,
            tabIndex: v,
            attrs: Uv(e, !0)
        }), F.createElement("span", {ref: I, className: "".concat(H, "-search-mirror"), "aria-hidden": !0}, D, " ")),
        K = F.createElement(rS, {
            prefixCls: "".concat(H, "-overflow"), data: a, renderItem(e) {
                var t = e.disabled, n = e.label, r = e.value, o = !d && !t, a = n;
                if ("number" == typeof w && ("string" == typeof n || "number" == typeof n)) {
                    var l = String(a);
                    l.length > w && (a = "".concat(l.slice(0, w), "..."))
                }
                var s = t => {
                    t && t.stopPropagation(), k(e)
                };
                return "function" == typeof S ? ((e, t, n, r, o) => F.createElement("span", {
                    onMouseDown(e) {
                        fS(e), E(!i)
                    }
                }, S({label: t, value: e, disabled: n, closable: r, onClose: o})))(r, a, t, o, s) : W(e, a, t, o, s)
            }, renderRest(e) {
                var t = "function" == typeof C ? C(e) : C;
                return W({title: t}, t, !1)
            }, suffix: V, itemKey: dS, maxCount: y
        });
    return F.createElement(F.Fragment, null, K, !a.length && !D && F.createElement("span", {className: "".concat(H, "-placeholder")}, u))
}, mS = e => {
    var t = e.inputElement, n = e.prefixCls, r = e.id, o = e.inputRef, a = e.disabled, i = e.autoFocus,
        l = e.autoComplete, s = e.activeDescendantId, c = e.mode, u = e.open, d = e.values, f = e.placeholder,
        p = e.tabIndex, m = e.showSearch, g = e.searchValue, h = e.activeValue, v = e.maxLength, b = e.onInputKeyDown,
        y = e.onInputMouseDown, w = e.onInputChange, x = e.onInputPaste, C = e.onInputCompositionStart,
        S = e.onInputCompositionEnd, E = e.title, k = Df(F.useState(!1), 2), $ = k[0], O = k[1], P = "combobox" === c,
        N = P || m, M = d[0], R = g || "";
    P && h && !$ && (R = h), F.useEffect((() => {
        P && O(!1)
    }), [P, h]);
    var I = !("combobox" !== c && !u && !m || !R), j = void 0 === E ? uS(M) : E;
    return F.createElement(F.Fragment, null, F.createElement("span", {className: "".concat(n, "-selection-search")}, F.createElement(iS, {
        ref: o,
        prefixCls: n,
        id: r,
        open: u,
        inputElement: t,
        disabled: a,
        autoFocus: i,
        autoComplete: l,
        editable: N,
        activeDescendantId: s,
        value: R,
        onKeyDown: b,
        onMouseDown: y,
        onChange(e) {
            O(!0), w(e)
        },
        onPaste: x,
        onCompositionStart: C,
        onCompositionEnd: S,
        tabIndex: p,
        attrs: Uv(e, !0),
        maxLength: P ? v : void 0
    })), !P && M ? F.createElement("span", {
        className: "".concat(n, "-selection-item"),
        title: j,
        style: I ? {visibility: "hidden"} : void 0
    }, M.label) : null, (() => {
        if (M) return null;
        var e = I ? {visibility: "hidden"} : void 0;
        return F.createElement("span", {className: "".concat(n, "-selection-placeholder"), style: e}, f)
    })())
}, gS = (e, t) => {
    var n = F.useRef(null), r = F.useRef(!1), o = e.prefixCls, a = e.open, i = e.mode, l = e.showSearch,
        s = e.tokenWithEnter, c = e.autoClearSearchValue, u = e.onSearch, d = e.onSearchSubmit, f = e.onToggleOpen,
        p = e.onInputKeyDown, m = e.domRef;
    F.useImperativeHandle(t, (() => ({
        focus() {
            n.current.focus()
        }, blur() {
            n.current.blur()
        }
    })));
    var g = Df(HC(0), 2), h = g[0], v = g[1], b = F.useRef(null), y = e => {
        !1 !== u(e, !0, r.current) && f(!0)
    }, w = {
        inputRef: n, onInputKeyDown(e) {
            var t, n = e.which;
            n !== Yv.UP && n !== Yv.DOWN || e.preventDefault(), p && p(e), n !== Yv.ENTER || "tags" !== i || r.current || a || null == d || d(e.target.value), t = n, [Yv.ESC, Yv.SHIFT, Yv.BACKSPACE, Yv.TAB, Yv.WIN_KEY, Yv.ALT, Yv.META, Yv.WIN_KEY_RIGHT, Yv.CTRL, Yv.SEMICOLON, Yv.EQUALS, Yv.CAPS_LOCK, Yv.CONTEXT_MENU, Yv.F1, Yv.F2, Yv.F3, Yv.F4, Yv.F5, Yv.F6, Yv.F7, Yv.F8, Yv.F9, Yv.F10, Yv.F11, Yv.F12].includes(t) || f(!0)
        }, onInputMouseDown() {
            v(!0)
        }, onInputChange(e) {
            var t = e.target.value;
            if (s && b.current && /[\r\n]/.test(b.current)) {
                var n = b.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
                t = t.replace(n, b.current)
            }
            b.current = null, y(t)
        }, onInputPaste(e) {
            var t = e.clipboardData.getData("text");
            b.current = t
        }, onInputCompositionStart() {
            r.current = !0
        }, onInputCompositionEnd(e) {
            r.current = !1, "combobox" !== i && y(e.target.value)
        }
    }, x = "multiple" === i || "tags" === i ? F.createElement(pS, cd({}, e, w)) : F.createElement(mS, cd({}, e, w));
    return F.createElement("div", {
        ref: m, className: "".concat(o, "-selector"), onClick(e) {
            e.target !== n.current && (void 0 !== document.body.style.msTouchAction ? setTimeout((() => {
                n.current.focus()
            })) : n.current.focus())
        }, onMouseDown(e) {
            var t = h();
            e.target === n.current || t || "combobox" === i || e.preventDefault(), ("combobox" === i || l && t) && a || (a && !1 !== c && u("", !0, !1), f())
        }
    }, x)
}, hS = F.forwardRef(gS);

function vS(e) {
    var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, a = r || {}, i = a.className, l = a.content, s = o.x,
        c = void 0 === s ? 0 : s, u = o.y, d = void 0 === u ? 0 : u, f = F.useRef();
    if (!n || !n.points) return null;
    var p = {position: "absolute"};
    if (!1 !== n.autoArrow) {
        var m = n.points[0], g = n.points[1], h = m[0], v = m[1], b = g[0], y = g[1];
        h !== b && ["t", "b"].includes(h) ? "t" === h ? p.top = 0 : p.bottom = 0 : p.top = d, v !== y && ["l", "r"].includes(v) ? "l" === v ? p.left = 0 : p.right = 0 : p.left = c
    }
    return F.createElement("div", {ref: f, className: sd("".concat(t, "-arrow"), i), style: p}, l)
}

function bS(e) {
    var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, a = e.motion;
    return o ? F.createElement(qh, cd({}, a, {motionAppear: !0, visible: n, removeOnLeave: !0}), (e => {
        var n = e.className;
        return F.createElement("div", {style: {zIndex: r}, className: sd("".concat(t, "-mask"), n)})
    })) : null
}

hS.displayName = "Selector";
var yS = F.memo((e => e.children), ((e, t) => t.cache)), wS = F.forwardRef(((e, t) => {
    var n = e.popup, r = e.className, o = e.prefixCls, a = e.style, i = e.target, l = e.onVisibleChanged, s = e.open,
        c = e.keepDom, u = e.fresh, d = e.onClick, f = e.mask, p = e.arrow, m = e.arrowPos, g = e.align, h = e.motion,
        v = e.maskMotion, b = e.forceRender, y = e.getPopupContainer, w = e.autoDestroy, x = e.portal, C = e.zIndex,
        S = e.onMouseEnter, E = e.onMouseLeave, k = e.onPointerEnter, $ = e.ready, O = e.offsetX, P = e.offsetY,
        N = e.offsetR, M = e.offsetB, R = e.onAlign, I = e.onPrepare, j = e.stretch, z = e.targetWidth,
        T = e.targetHeight, _ = "function" == typeof n ? n() : n, L = s || c, A = (null == y ? void 0 : y.length) > 0,
        H = Df(F.useState(!y || !A), 2), D = H[0], B = H[1];
    if (Sp((() => {
        !D && A && i && B(!0)
    }), [D, A, i]), !D) return null;
    var W = "auto", V = {left: "-1000vw", top: "-1000vh", right: W, bottom: W};
    if ($ || !s) {
        var K, U = g.points,
            G = g.dynamicInset || (null === (K = g._experimental) || void 0 === K ? void 0 : K.dynamicInset),
            X = G && "r" === U[0][1], q = G && "b" === U[0][0];
        X ? (V.right = N, V.left = W) : (V.left = O, V.right = W), q ? (V.bottom = M, V.top = W) : (V.top = P, V.bottom = W)
    }
    var Y = {};
    return j && (j.includes("height") && T ? Y.height = T : j.includes("minHeight") && T && (Y.minHeight = T), j.includes("width") && z ? Y.width = z : j.includes("minWidth") && z && (Y.minWidth = z)), s || (Y.pointerEvents = "none"), F.createElement(x, {
        open: b || L,
        getContainer: y && (() => y(i)),
        autoDestroy: w
    }, F.createElement(bS, {prefixCls: o, open: s, zIndex: C, mask: f, motion: v}), F.createElement(Of, {
        onResize: R,
        disabled: !s
    }, (e => F.createElement(qh, cd({
        motionAppear: !0,
        motionEnter: !0,
        motionLeave: !0,
        removeOnLeave: !1,
        forceRender: b,
        leavedClassName: "".concat(o, "-hidden")
    }, h, {
        onAppearPrepare: I, onEnterPrepare: I, visible: s, onVisibleChanged(e) {
            var t;
            null == h || null === (t = h.onVisibleChanged) || void 0 === t || t.call(h, e), l(e)
        }
    }), ((n, i) => {
        var l = n.className, c = n.style, f = sd(o, l, r);
        return F.createElement("div", {
            ref: Gd(e, t, i),
            className: f,
            style: Cd(Cd(Cd(Cd({
                "--arrow-x": "".concat(m.x || 0, "px"),
                "--arrow-y": "".concat(m.y || 0, "px")
            }, V), Y), c), {}, {boxSizing: "border-box", zIndex: C}, a),
            onMouseEnter: S,
            onMouseLeave: E,
            onPointerEnter: k,
            onClick: d
        }, p && F.createElement(vS, {
            prefixCls: o,
            arrow: p,
            arrowPos: m,
            align: g
        }), F.createElement(yS, {cache: !s && !u}, _))
    })))))
})), xS = F.forwardRef(((e, t) => {
    var n = e.children, r = e.getTriggerDOMNode, o = qd(n), a = F.useCallback((e => {
        Ud(t, r ? r(e) : e)
    }), [r]), i = Xd(a, n.ref);
    return o ? F.cloneElement(n, {ref: i}) : n
})), CS = F.createContext(null);

function SS(e) {
    return e ? Array.isArray(e) ? e : [e] : []
}

function ES() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (arguments.length > 2 ? arguments[2] : void 0) ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}

function kS(e, t, n, r) {
    return t || (n ? {motionName: "".concat(e, "-").concat(n)} : r ? {motionName: r} : null)
}

function $S(e) {
    return e.ownerDocument.defaultView
}

function OS(e) {
    for (var t = [], n = null == e ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n;) {
        var o = $S(n).getComputedStyle(n);
        [o.overflowX, o.overflowY, o.overflow].some((e => r.includes(e))) && t.push(n), n = n.parentElement
    }
    return t
}

function PS(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return Number.isNaN(e) ? t : e
}

function NS(e) {
    return PS(parseFloat(e), 0)
}

function MS(e, t) {
    var n = Cd({}, e);
    return (t || []).forEach((e => {
        if (!(e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement)) {
            var t = $S(e).getComputedStyle(e), r = t.overflow, o = t.overflowClipMargin, a = t.borderTopWidth,
                i = t.borderBottomWidth, l = t.borderLeftWidth, s = t.borderRightWidth, c = e.getBoundingClientRect(),
                u = e.offsetHeight, d = e.clientHeight, f = e.offsetWidth, p = e.clientWidth, m = NS(a), g = NS(i),
                h = NS(l), v = NS(s), b = PS(Math.round(c.width / f * 1e3) / 1e3),
                y = PS(Math.round(c.height / u * 1e3) / 1e3), w = (f - p - h - v) * b, x = (u - d - m - g) * y,
                C = m * y, S = g * y, E = h * b, k = v * b, $ = 0, O = 0;
            if ("clip" === r) {
                var P = NS(o);
                $ = P * b, O = P * y
            }
            var N = c.x + E - $, M = c.y + C - O, R = N + c.width + 2 * $ - E - k - w,
                I = M + c.height + 2 * O - C - S - x;
            n.left = Math.max(n.left, N), n.top = Math.max(n.top, M), n.right = Math.min(n.right, R), n.bottom = Math.min(n.bottom, I)
        }
    })), n
}

function RS(e) {
    var t = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0), n = t.match(/^(.*)\%$/);
    return n ? e * (parseFloat(n[1]) / 100) : parseFloat(t)
}

function IS(e, t) {
    var n = Df(t || [], 2), r = n[0], o = n[1];
    return [RS(e.width, r), RS(e.height, o)]
}

function jS() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return [e[0], e[1]]
}

function zS(e, t) {
    var n, r = t[0], o = t[1];
    return n = "t" === r ? e.y : "b" === r ? e.y + e.height : e.y + e.height / 2, {
        x: "l" === o ? e.x : "r" === o ? e.x + e.width : e.x + e.width / 2,
        y: n
    }
}

function TS(e, t) {
    var n = {t: "b", b: "t", l: "r", r: "l"};
    return e.map(((e, r) => r === t ? n[e] || "c" : e)).join("")
}

var _S = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
const LS = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jy, t = F.forwardRef(((t, n) => {
        var r = t.prefixCls, o = void 0 === r ? "rc-trigger-popup" : r, a = t.children, i = t.action,
            l = void 0 === i ? "hover" : i, s = t.showAction, c = t.hideAction, u = t.popupVisible,
            d = t.defaultPopupVisible, f = t.onPopupVisibleChange, p = t.afterPopupVisibleChange, m = t.mouseEnterDelay,
            g = t.mouseLeaveDelay, h = void 0 === g ? .1 : g, v = t.focusDelay, b = t.blurDelay, y = t.mask,
            w = t.maskClosable, x = void 0 === w || w, C = t.getPopupContainer, S = t.forceRender, E = t.autoDestroy,
            k = t.destroyPopupOnHide, $ = t.popup, O = t.popupClassName, P = t.popupStyle, N = t.popupPlacement,
            M = t.builtinPlacements, R = void 0 === M ? {} : M, I = t.popupAlign, j = t.zIndex, z = t.stretch,
            T = t.getPopupClassNameFromAlign, _ = t.fresh, L = t.alignPoint, A = t.onPopupClick, H = t.onPopupAlign,
            D = t.arrow, B = t.popupMotion, W = t.maskMotion, V = t.popupTransitionName, K = t.popupAnimation,
            U = t.maskTransitionName, G = t.maskAnimation, X = t.className, q = t.getTriggerDOMNode, Y = tp(t, _S),
            Q = E || k || !1, Z = Df(F.useState(!1), 2), J = Z[0], ee = Z[1];
        Sp((() => {
            ee(FC())
        }), []);
        var te = F.useRef({}), ne = F.useContext(CS), re = F.useMemo((() => ({
                registerSubPopup(e, t) {
                    te.current[e] = t, null == ne || ne.registerSubPopup(e, t)
                }
            })), [ne]), oe = nw(), ae = Df(F.useState(null), 2), ie = ae[0], le = ae[1], se = Dg((e => {
                Sd(e) && ie !== e && le(e), null == ne || ne.registerSubPopup(oe, e)
            })), ce = Df(F.useState(null), 2), ue = ce[0], de = ce[1], fe = F.useRef(null), pe = Dg((e => {
                Sd(e) && ue !== e && (de(e), fe.current = e)
            })), me = F.Children.only(a), ge = (null == me ? void 0 : me.props) || {}, he = {}, ve = Dg((e => {
                var t, n, r = ue;
                return (null == r ? void 0 : r.contains(e)) || (null === (t = bv(r)) || void 0 === t ? void 0 : t.host) === e || e === r || (null == ie ? void 0 : ie.contains(e)) || (null === (n = bv(ie)) || void 0 === n ? void 0 : n.host) === e || e === ie || Object.values(te.current).some((t => (null == t ? void 0 : t.contains(e)) || e === t))
            })), be = kS(o, B, K, V), ye = kS(o, W, G, U), we = Df(F.useState(d || !1), 2), xe = we[0], Ce = we[1],
            Se = null != u ? u : xe, Ee = Dg((e => {
                void 0 === u && Ce(e)
            }));
        Sp((() => {
            Ce(u || !1)
        }), [u]);
        var ke = F.useRef(Se);
        ke.current = Se;
        var $e = F.useRef([]);
        $e.current = [];
        var Oe = Dg((e => {
            var t;
            Ee(e), (null !== (t = $e.current[$e.current.length - 1]) && void 0 !== t ? t : Se) !== e && ($e.current.push(e), null == f || f(e))
        })), Pe = F.useRef(), Ne = () => {
            clearTimeout(Pe.current)
        }, Me = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            Ne(), 0 === t ? Oe(e) : Pe.current = setTimeout((() => {
                Oe(e)
            }), 1e3 * t)
        };
        F.useEffect((() => Ne), []);
        var Re = Df(F.useState(!1), 2), Ie = Re[0], je = Re[1];
        Sp((e => {
            e && !Se || je(!0)
        }), [Se]);
        var ze = Df(F.useState(null), 2), Te = ze[0], _e = ze[1], Le = Df(F.useState([0, 0]), 2), Fe = Le[0],
            Ae = Le[1], He = e => {
                Ae([e.clientX, e.clientY])
            }, De = ((e, t, n, r, o, a, i) => {
                var l = Df(F.useState({
                    ready: !1,
                    offsetX: 0,
                    offsetY: 0,
                    offsetR: 0,
                    offsetB: 0,
                    arrowX: 0,
                    arrowY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    align: o[r] || {}
                }), 2), s = l[0], c = l[1], u = F.useRef(0), d = F.useMemo((() => t ? OS(t) : []), [t]), f = F.useRef({});
                e || (f.current = {});
                var p = Dg((() => {
                    if (t && n && e) {
                        let e = function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G, r = O.x + e,
                                o = O.y + t, a = r + _, i = o + T, l = Math.max(r, n.left), s = Math.max(o, n.top),
                                c = Math.min(a, n.right), u = Math.min(i, n.bottom);
                            return Math.max(0, (c - l) * (u - s))
                        }, lt = () => {
                            ie = O.y + be, le = ie + T, se = O.x + ve, ce = se + _
                        };
                        var l, s, u, p = t, m = p.ownerDocument, g = $S(p).getComputedStyle(p), h = g.width, v = g.height,
                            b = g.position, y = p.style.left, w = p.style.top, x = p.style.right, C = p.style.bottom,
                            S = p.style.overflow, E = Cd(Cd({}, o[r]), a), k = m.createElement("div");
                        if (null === (l = p.parentElement) || void 0 === l || l.appendChild(k), k.style.left = "".concat(p.offsetLeft, "px"), k.style.top = "".concat(p.offsetTop, "px"), k.style.position = b, k.style.height = "".concat(p.offsetHeight, "px"), k.style.width = "".concat(p.offsetWidth, "px"), p.style.left = "0", p.style.top = "0", p.style.right = "auto", p.style.bottom = "auto", p.style.overflow = "hidden", Array.isArray(n)) u = {
                            x: n[0],
                            y: n[1],
                            width: 0,
                            height: 0
                        }; else {
                            var $ = n.getBoundingClientRect();
                            u = {x: $.x, y: $.y, width: $.width, height: $.height}
                        }
                        var O = p.getBoundingClientRect(), P = m.documentElement, N = P.clientWidth, M = P.clientHeight,
                            R = P.scrollWidth, I = P.scrollHeight, j = P.scrollTop, z = P.scrollLeft, T = O.height,
                            _ = O.width, L = u.height, F = u.width, A = {left: 0, top: 0, right: N, bottom: M},
                            H = {left: -z, top: -j, right: R - z, bottom: I - j}, D = E.htmlRegion, B = "visible",
                            W = "visibleFirst";
                        "scroll" !== D && D !== W && (D = B);
                        var V = D === W, K = MS(H, d), U = MS(A, d), G = D === B ? U : K, X = V ? U : G;
                        p.style.left = "auto", p.style.top = "auto", p.style.right = "0", p.style.bottom = "0";
                        var q = p.getBoundingClientRect();
                        p.style.left = y, p.style.top = w, p.style.right = x, p.style.bottom = C, p.style.overflow = S, null === (s = p.parentElement) || void 0 === s || s.removeChild(k);
                        var Y = PS(Math.round(_ / parseFloat(h) * 1e3) / 1e3),
                            Q = PS(Math.round(T / parseFloat(v) * 1e3) / 1e3);
                        if (0 === Y || 0 === Q || Sd(n) && !_b(n)) return;
                        var Z = E.offset, J = E.targetOffset, ee = Df(IS(O, Z), 2), te = ee[0], ne = ee[1],
                            re = Df(IS(u, J), 2), oe = re[0], ae = re[1];
                        u.x -= oe, u.y -= ae;
                        var ie, le, se, ce, ue = Df(E.points || [], 2), de = ue[0], fe = jS(ue[1]), pe = jS(de),
                            me = zS(u, fe), ge = zS(O, pe), he = Cd({}, E), ve = me.x - ge.x + te, be = me.y - ge.y + ne,
                            ye = e(ve, be), we = e(ve, be, U), xe = zS(u, ["t", "l"]), Ce = zS(O, ["t", "l"]),
                            Se = zS(u, ["b", "r"]), Ee = zS(O, ["b", "r"]), ke = E.overflow || {}, $e = ke.adjustX,
                            Oe = ke.adjustY, Pe = ke.shiftX, Ne = ke.shiftY, Me = e => "boolean" == typeof e ? e : e >= 0;
                        lt();
                        var Re = Me(Oe), Ie = pe[0] === fe[0];
                        if (Re && "t" === pe[0] && (le > X.bottom || f.current.bt)) {
                            var je = be;
                            Ie ? je -= T - L : je = xe.y - Ee.y - ne;
                            var ze = e(ve, je), Te = e(ve, je, U);
                            ze > ye || ze === ye && (!V || Te >= we) ? (f.current.bt = !0, be = je, ne = -ne, he.points = [TS(pe, 0), TS(fe, 0)]) : f.current.bt = !1
                        }
                        if (Re && "b" === pe[0] && (ie < X.top || f.current.tb)) {
                            var _e = be;
                            Ie ? _e += T - L : _e = Se.y - Ce.y - ne;
                            var Le = e(ve, _e), Fe = e(ve, _e, U);
                            Le > ye || Le === ye && (!V || Fe >= we) ? (f.current.tb = !0, be = _e, ne = -ne, he.points = [TS(pe, 0), TS(fe, 0)]) : f.current.tb = !1
                        }
                        var Ae = Me($e), He = pe[1] === fe[1];
                        if (Ae && "l" === pe[1] && (ce > X.right || f.current.rl)) {
                            var De = ve;
                            He ? De -= _ - F : De = xe.x - Ee.x - te;
                            var Be = e(De, be), We = e(De, be, U);
                            Be > ye || Be === ye && (!V || We >= we) ? (f.current.rl = !0, ve = De, te = -te, he.points = [TS(pe, 1), TS(fe, 1)]) : f.current.rl = !1
                        }
                        if (Ae && "r" === pe[1] && (se < X.left || f.current.lr)) {
                            var Ve = ve;
                            He ? Ve += _ - F : Ve = Se.x - Ce.x - te;
                            var Ke = e(Ve, be), Ue = e(Ve, be, U);
                            Ke > ye || Ke === ye && (!V || Ue >= we) ? (f.current.lr = !0, ve = Ve, te = -te, he.points = [TS(pe, 1), TS(fe, 1)]) : f.current.lr = !1
                        }
                        lt();
                        var Ge = !0 === Pe ? 0 : Pe;
                        "number" == typeof Ge && (se < U.left && (ve -= se - U.left - te, u.x + F < U.left + Ge && (ve += u.x - U.left + F - Ge)), ce > U.right && (ve -= ce - U.right - te, u.x > U.right - Ge && (ve += u.x - U.right + Ge)));
                        var Xe = !0 === Ne ? 0 : Ne;
                        "number" == typeof Xe && (ie < U.top && (be -= ie - U.top - ne, u.y + L < U.top + Xe && (be += u.y - U.top + L - Xe)), le > U.bottom && (be -= le - U.bottom - ne, u.y > U.bottom - Xe && (be += u.y - U.bottom + Xe)));
                        var qe = O.x + ve, Ye = qe + _, Qe = O.y + be, Ze = Qe + T, Je = u.x, et = Je + F, tt = u.y,
                            nt = tt + L, rt = (Math.max(qe, Je) + Math.min(Ye, et)) / 2 - qe,
                            ot = (Math.max(Qe, tt) + Math.min(Ze, nt)) / 2 - Qe;
                        null == i || i(t, he);
                        var at = q.right - O.x - (ve + O.width), it = q.bottom - O.y - (be + O.height);
                        c({
                            ready: !0,
                            offsetX: ve / Y,
                            offsetY: be / Q,
                            offsetR: at / Y,
                            offsetB: it / Q,
                            arrowX: rt / Y,
                            arrowY: ot / Q,
                            scaleX: Y,
                            scaleY: Q,
                            align: he
                        })
                    }
                })), m = () => {
                    c((e => Cd(Cd({}, e), {}, {ready: !1})))
                };
                return Sp(m, [r]), Sp((() => {
                    e || m()
                }), [e]), [s.ready, s.offsetX, s.offsetY, s.offsetR, s.offsetB, s.arrowX, s.arrowY, s.scaleX, s.scaleY, s.align, () => {
                    u.current += 1;
                    var e = u.current;
                    Promise.resolve().then((() => {
                        u.current === e && p()
                    }))
                }]
            })(Se, ie, L ? Fe : ue, N, R, I, H), Be = Df(De, 11), We = Be[0], Ve = Be[1], Ke = Be[2], Ue = Be[3],
            Ge = Be[4], Xe = Be[5], qe = Be[6], Ye = Be[7], Qe = Be[8], Ze = Be[9], Je = Be[10],
            et = ((e, t, n, r) => F.useMemo((() => {
                var o = SS(null != n ? n : t), a = SS(null != r ? r : t), i = new Set(o), l = new Set(a);
                return e && (i.has("hover") && (i.delete("hover"), i.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [i, l]
            }), [e, t, n, r]))(J, l, s, c), tt = Df(et, 2), nt = tt[0], rt = tt[1], ot = nt.has("click"),
            at = rt.has("click") || rt.has("contextMenu"), it = Dg((() => {
                Ie || Je()
            }));
        ((e, t, n, r) => {
            Sp((() => {
                if (e && t && n) {
                    let e = () => {
                        r(), ke.current && L && at && Me(!1)
                    };
                    var o = n, a = OS(t), i = OS(o), l = $S(o), s = new Set([l].concat(If(a), If(i)));
                    return s.forEach((t => {
                        t.addEventListener("scroll", e, {passive: !0})
                    })), l.addEventListener("resize", e, {passive: !0}), r(), () => {
                        s.forEach((t => {
                            t.removeEventListener("scroll", e), l.removeEventListener("resize", e)
                        }))
                    }
                }
            }), [e, t, n])
        })(Se, ue, ie, it), Sp((() => {
            it()
        }), [Fe, N]), Sp((() => {
            !Se || null != R && R[N] || it()
        }), [JSON.stringify(I)]);
        var lt = F.useMemo((() => {
            var e = ((e, t, n, r) => {
                for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
                    var l, s = a[i];
                    if (ES(null === (l = e[s]) || void 0 === l ? void 0 : l.points, o, r)) return "".concat(t, "-placement-").concat(s)
                }
                return ""
            })(R, o, Ze, L);
            return sd(e, null == T ? void 0 : T(Ze))
        }), [Ze, T, R, o, L]);
        F.useImperativeHandle(n, (() => ({nativeElement: fe.current, forceAlign: it})));
        var st = Df(F.useState(0), 2), ct = st[0], ut = st[1], dt = Df(F.useState(0), 2), ft = dt[0], pt = dt[1],
            mt = () => {
                if (z && ue) {
                    var e = ue.getBoundingClientRect();
                    ut(e.width), pt(e.height)
                }
            };

        function gt(e, t, n, r) {
            he[e] = function (o) {
                var a;
                null == r || r(o), Me(t, n);
                for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) l[s - 1] = arguments[s];
                null === (a = ge[e]) || void 0 === a || a.call.apply(a, [ge, o].concat(l))
            }
        }

        Sp((() => {
            Te && (Je(), Te(), _e(null))
        }), [Te]), (ot || at) && (he.onClick = function (e) {
            var t;
            ke.current && at ? Me(!1) : !ke.current && ot && (He(e), Me(!0));
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            null === (t = ge.onClick) || void 0 === t || t.call.apply(t, [ge, e].concat(r))
        }), ((e, t, n, r, o, a, i, l) => {
            var s = F.useRef(e), c = F.useRef(!1);
            s.current !== e && (c.current = !0, s.current = e), F.useEffect((() => {
                var e = Ff((() => {
                    c.current = !1
                }));
                return () => {
                    Ff.cancel(e)
                }
            }), [e]), F.useEffect((() => {
                if (t && r && (!o || a)) {
                    var e = () => {
                        var e = !1;
                        return [t => {
                            var n = t.target;
                            e = i(n)
                        }, t => {
                            var n = t.target;
                            c.current || !s.current || e || i(n) || l(!1)
                        }]
                    }, u = Df(e(), 2), d = u[0], f = u[1], p = Df(e(), 2), m = p[0], g = p[1], h = $S(r);
                    h.addEventListener("mousedown", d, !0), h.addEventListener("click", f, !0), h.addEventListener("contextmenu", f, !0);
                    var v = bv(n);
                    return v && (v.addEventListener("mousedown", m, !0), v.addEventListener("click", g, !0), v.addEventListener("contextmenu", g, !0)), () => {
                        h.removeEventListener("mousedown", d, !0), h.removeEventListener("click", f, !0), h.removeEventListener("contextmenu", f, !0), v && (v.removeEventListener("mousedown", m, !0), v.removeEventListener("click", g, !0), v.removeEventListener("contextmenu", g, !0))
                    }
                }
            }), [t, n, r, o, a])
        })(Se, at, ue, ie, y, x, ve, Me);
        var ht, vt, bt = nt.has("hover"), yt = rt.has("hover");
        bt && (gt("onMouseEnter", !0, m, (e => {
            He(e)
        })), gt("onPointerEnter", !0, m, (e => {
            He(e)
        })), ht = e => {
            (Se || Ie) && null != ie && ie.contains(e.target) && Me(!0, m)
        }, L && (he.onMouseMove = e => {
            var t;
            null === (t = ge.onMouseMove) || void 0 === t || t.call(ge, e)
        })), yt && (gt("onMouseLeave", !1, h), gt("onPointerLeave", !1, h), vt = () => {
            Me(!1, h)
        }), nt.has("focus") && gt("onFocus", !0, v), rt.has("focus") && gt("onBlur", !1, b), nt.has("contextMenu") && (he.onContextMenu = function (e) {
            var t;
            ke.current && rt.has("contextMenu") ? Me(!1) : (He(e), Me(!0)), e.preventDefault();
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            null === (t = ge.onContextMenu) || void 0 === t || t.call.apply(t, [ge, e].concat(r))
        }), X && (he.className = sd(ge.className, X));
        var wt = Cd(Cd({}, ge), he), xt = {};
        ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"].forEach((e => {
            Y[e] && (xt[e] = function () {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                null === (t = wt[e]) || void 0 === t || t.call.apply(t, [wt].concat(r)), Y[e].apply(Y, r)
            })
        }));
        var Ct = F.cloneElement(me, Cd(Cd({}, wt), xt)), St = {x: Xe, y: qe}, Et = D ? Cd({}, !0 !== D ? D : {}) : null;
        return F.createElement(F.Fragment, null, F.createElement(Of, {
            disabled: !Se, ref: pe, onResize() {
                mt(), it()
            }
        }, F.createElement(xS, {getTriggerDOMNode: q}, Ct)), F.createElement(CS.Provider, {value: re}, F.createElement(wS, {
            portal: e,
            ref: se,
            prefixCls: o,
            popup: $,
            className: sd(O, lt),
            style: P,
            target: ue,
            onMouseEnter: ht,
            onMouseLeave: vt,
            onPointerEnter: ht,
            zIndex: j,
            open: Se,
            keepDom: Ie,
            fresh: _,
            onClick: A,
            mask: y,
            motion: be,
            maskMotion: ye,
            onVisibleChanged(e) {
                je(!1), Je(), null == p || p(e)
            },
            onPrepare: () => new Promise((e => {
                mt(), _e((() => e))
            })),
            forceRender: S,
            autoDestroy: Q,
            getPopupContainer: C,
            align: Ze,
            arrow: Et,
            arrowPos: St,
            ready: We,
            offsetX: Ve,
            offsetY: Ke,
            offsetR: Ue,
            offsetB: Ge,
            onAlign: it,
            stretch: z,
            targetWidth: ct / Ye,
            targetHeight: ft / Qe
        })))
    }));
    return t
}(Jy);
var FS = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"],
    AS = (e, t) => {
        var n = e.prefixCls;
        e.disabled;
        var r = e.visible, o = e.children, a = e.popupElement, i = e.containerWidth, l = e.animation,
            s = e.transitionName, c = e.dropdownStyle, u = e.dropdownClassName, d = e.direction,
            f = void 0 === d ? "ltr" : d, p = e.placement, m = e.builtinPlacements, g = e.dropdownMatchSelectWidth,
            h = e.dropdownRender, v = e.dropdownAlign, b = e.getPopupContainer, y = e.empty, w = e.getTriggerDOMNode,
            x = e.onPopupVisibleChange, C = e.onPopupMouseEnter, S = tp(e, FS), E = "".concat(n, "-dropdown"), k = a;
        h && (k = h(a));
        var $ = F.useMemo((() => m || (e => {
            var t = !0 === e ? 0 : 1;
            return {
                bottomLeft: {
                    points: ["tl", "bl"],
                    offset: [0, 4],
                    overflow: {adjustX: t, adjustY: 1},
                    htmlRegion: "scroll"
                },
                bottomRight: {
                    points: ["tr", "br"],
                    offset: [0, 4],
                    overflow: {adjustX: t, adjustY: 1},
                    htmlRegion: "scroll"
                },
                topLeft: {
                    points: ["bl", "tl"],
                    offset: [0, -4],
                    overflow: {adjustX: t, adjustY: 1},
                    htmlRegion: "scroll"
                },
                topRight: {
                    points: ["br", "tr"],
                    offset: [0, -4],
                    overflow: {adjustX: t, adjustY: 1},
                    htmlRegion: "scroll"
                }
            }
        })(g)), [m, g]), O = l ? "".concat(E, "-").concat(l) : s, P = F.useRef(null);
        F.useImperativeHandle(t, (() => ({getPopupElement: () => P.current})));
        var N = Cd({minWidth: i}, c);
        return "number" == typeof g ? N.width = g : g && (N.width = i), F.createElement(LS, cd({}, S, {
            showAction: x ? ["click"] : [],
            hideAction: x ? ["click"] : [],
            popupPlacement: p || ("rtl" === f ? "bottomRight" : "bottomLeft"),
            builtinPlacements: $,
            prefixCls: E,
            popupTransitionName: O,
            popup: F.createElement("div", {ref: P, onMouseEnter: C}, k),
            popupAlign: v,
            popupVisible: r,
            getPopupContainer: b,
            popupClassName: sd(u, wd({}, "".concat(E, "-empty"), y)),
            popupStyle: N,
            getTriggerDOMNode: w,
            onPopupVisibleChange: x
        }), o)
    }, HS = F.forwardRef(AS);

function DS(e, t) {
    var n, r = e.key;
    return "value" in e && (n = e.value), null != r ? r : void 0 !== n ? n : "rc-index-key-".concat(t)
}

function BS(e, t) {
    var n = e || {}, r = n.label || (t ? "children" : "label");
    return {label: r, value: n.value || "value", options: n.options || "options", groupLabel: n.groupLabel || r}
}

function WS(e) {
    var t = Cd({}, e);
    return "props" in t || Object.defineProperty(t, "props", {get: () => (yd(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t)}), t
}

HS.displayName = "SelectTrigger";
var VS = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"],
    KS = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];

function US(e) {
    return "tags" === e || "multiple" === e
}

var GS = F.forwardRef(((e, t) => {
    var n, r, o = e.id, a = e.prefixCls, i = e.className, l = e.showSearch, s = e.tagRender, c = e.direction,
        u = e.omitDomProps, d = e.displayValues, f = e.onDisplayValuesChange, p = e.emptyOptions, m = e.notFoundContent,
        g = void 0 === m ? "Not Found" : m, h = e.onClear, v = e.mode, b = e.disabled, y = e.loading,
        w = e.getInputElement, x = e.getRawInputElement, C = e.open, S = e.defaultOpen, E = e.onDropdownVisibleChange,
        k = e.activeValue, $ = e.onActiveValueChange, O = e.activeDescendantId, P = e.searchValue,
        N = e.autoClearSearchValue, M = e.onSearch, R = e.onSearchSplit, I = e.tokenSeparators, j = e.allowClear,
        z = e.suffixIcon, T = e.clearIcon, _ = e.OptionList, L = e.animation, H = e.transitionName, D = e.dropdownStyle,
        B = e.dropdownClassName, W = e.dropdownMatchSelectWidth, V = e.dropdownRender, K = e.dropdownAlign,
        U = e.placement, G = e.builtinPlacements, X = e.getPopupContainer, q = e.showAction, Y = void 0 === q ? [] : q,
        Q = e.onFocus, Z = e.onBlur, J = e.onKeyUp, ee = e.onKeyDown, te = e.onMouseDown, ne = tp(e, VS), re = US(v),
        oe = (void 0 !== l ? l : re) || "combobox" === v, ae = Cd({}, ne);
    KS.forEach((e => {
        delete ae[e]
    })), null == u || u.forEach((e => {
        delete ae[e]
    }));
    var ie = Df(F.useState(!1), 2), le = ie[0], se = ie[1];
    F.useEffect((() => {
        se(FC())
    }), []);
    var ce = F.useRef(null), ue = F.useRef(null), de = F.useRef(null), fe = F.useRef(null), pe = F.useRef(null),
        me = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10, t = Df(F.useState(!1), 2),
                n = t[0], r = t[1], o = F.useRef(null), a = () => {
                    window.clearTimeout(o.current)
                };
            return F.useEffect((() => a), []), [n, (t, n) => {
                a(), o.current = window.setTimeout((() => {
                    r(t), n && n()
                }), e)
            }, a]
        }(), ge = Df(me, 3), he = ge[0], ve = ge[1], be = ge[2];
    F.useImperativeHandle(t, (() => {
        var e, t;
        return {
            focus: null === (e = fe.current) || void 0 === e ? void 0 : e.focus,
            blur: null === (t = fe.current) || void 0 === t ? void 0 : t.blur,
            scrollTo(e) {
                var t;
                return null === (t = pe.current) || void 0 === t ? void 0 : t.scrollTo(e)
            }
        }
    }));
    var ye = F.useMemo((() => {
            var e;
            if ("combobox" !== v) return P;
            var t = null === (e = d[0]) || void 0 === e ? void 0 : e.value;
            return "string" == typeof t || "number" == typeof t ? String(t) : ""
        }), [P, v, d]), we = "combobox" === v && "function" == typeof w && w() || null, xe = "function" == typeof x && x(),
        Ce = Xd(ue, null == xe || null === (n = xe.props) || void 0 === n ? void 0 : n.ref), Se = Df(F.useState(!1), 2),
        Ee = Se[0], ke = Se[1];
    Sp((() => {
        ke(!0)
    }), []);
    var $e = Df(Vg(!1, {defaultValue: S, value: C}), 2), Oe = $e[0], Pe = $e[1], Ne = !!Ee && Oe, Me = !g && p;
    (b || Me && Ne && "combobox" === v) && (Ne = !1);
    var Re = !Me && Ne, Ie = F.useCallback((e => {
            var t = void 0 !== e ? e : !Ne;
            b || (Pe(t), Ne !== t && (null == E || E(t)))
        }), [b, Ne, Pe, E]), je = F.useMemo((() => (I || []).some((e => ["\n", "\r\n"].includes(e)))), [I]),
        ze = (e, t, n) => {
            var r = !0, o = e;
            null == $ || $(null);
            var a = n ? null : ((e, t) => {
                if (!t || !t.length) return null;
                var n = !1, r = function e(t, r) {
                    var o = Rm(r), a = o[0], i = o.slice(1);
                    if (!a) return [t];
                    var l = t.split(a);
                    return n = n || l.length > 1, l.reduce(((t, n) => [].concat(If(t), If(e(n, i)))), []).filter((e => e))
                }(e, t);
                return n ? r : null
            })(e, I);
            return "combobox" !== v && a && (o = "", null == R || R(a), Ie(!1), r = !1), M && ye !== o && M(o, {source: t ? "typing" : "effect"}), r
        };
    F.useEffect((() => {
        Ne || re || "combobox" === v || ze("", !1, !1)
    }), [Ne]), F.useEffect((() => {
        Oe && b && Pe(!1), b && ve(!1)
    }), [b]);
    var Te = Df(HC(), 2), _e = Te[0], Le = Te[1], Fe = F.useRef(!1), Ae = [];
    F.useEffect((() => () => {
        Ae.forEach((e => clearTimeout(e))), Ae.splice(0, Ae.length)
    }), []);
    var He, De = Df(F.useState(null), 2), Be = De[0], We = De[1], Ve = Df(F.useState({}), 2)[1];
    Sp((() => {
        if (Re) {
            var e, t = Math.ceil(null === (e = ce.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width);
            Be === t || Number.isNaN(t) || We(t)
        }
    }), [Re]), xe && (He = e => {
        Ie(e)
    }), ((e, t, n, r) => {
        var o = F.useRef(null);
        o.current = {open: t, triggerOpen: n, customizedTrigger: r}, F.useEffect((() => {
            function e(e) {
                var t, n;
                if (null === (t = o.current) || void 0 === t || !t.customizedTrigger) {
                    var r = e.target;
                    r.shadowRoot && e.composed && (r = e.composedPath()[0] || r), o.current.open && [ce.current, null === (n = de.current) || void 0 === n ? void 0 : n.getPopupElement()].filter((e => e)).every((e => !e.contains(r) && e !== r)) && o.current.triggerOpen(!1)
                }
            }

            return window.addEventListener("mousedown", e), () => window.removeEventListener("mousedown", e)
        }), [])
    })(0, Re, Ie, !!xe);
    var Ke, Ue = F.useMemo((() => Cd(Cd({}, e), {}, {
        notFoundContent: g,
        open: Ne,
        triggerOpen: Re,
        id: o,
        showSearch: oe,
        multiple: re,
        toggleOpen: Ie
    })), [e, g, Re, Ne, o, oe, re, Ie]), Ge = !!z || y;
    Ge && (Ke = F.createElement(oS, {
        className: sd("".concat(a, "-arrow"), wd({}, "".concat(a, "-arrow-loading"), y)),
        customizeIcon: z,
        customizeIconProps: {loading: y, searchValue: ye, open: Ne, focused: he, showSearch: oe}
    }));
    var Xe, qe = function (e, t, n, r, o) {
            var a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                i = arguments.length > 6 ? arguments[6] : void 0, l = arguments.length > 7 ? arguments[7] : void 0,
                s = A.useMemo((() => "object" === Yu(r) ? r.clearIcon : o || void 0), [r, o]);
            return {
                allowClear: A.useMemo((() => !(a || !r || !n.length && !i || "combobox" === l && "" === i)), [r, a, n.length, i, l]),
                clearIcon: A.createElement(oS, {className: "".concat(e, "-clear"), onMouseDown: t, customizeIcon: s}, "×")
            }
        }(a, (() => {
            var e;
            null == h || h(), null === (e = fe.current) || void 0 === e || e.focus(), f([], {
                type: "clear",
                values: d
            }), ze("", !1, !1)
        }), d, j, T, b, ye, v), Ye = qe.allowClear, Qe = qe.clearIcon, Ze = F.createElement(_, {ref: pe}),
        Je = sd(a, i, (wd(r = {}, "".concat(a, "-focused"), he), wd(r, "".concat(a, "-multiple"), re), wd(r, "".concat(a, "-single"), !re), wd(r, "".concat(a, "-allow-clear"), j), wd(r, "".concat(a, "-show-arrow"), Ge), wd(r, "".concat(a, "-disabled"), b), wd(r, "".concat(a, "-loading"), y), wd(r, "".concat(a, "-open"), Ne), wd(r, "".concat(a, "-customize-input"), we), wd(r, "".concat(a, "-show-search"), oe), r)),
        et = F.createElement(HS, {
            ref: de,
            disabled: b,
            prefixCls: a,
            visible: Re,
            popupElement: Ze,
            containerWidth: Be,
            animation: L,
            transitionName: H,
            dropdownStyle: D,
            dropdownClassName: B,
            direction: c,
            dropdownMatchSelectWidth: W,
            dropdownRender: V,
            dropdownAlign: K,
            placement: U,
            builtinPlacements: G,
            getPopupContainer: X,
            empty: p,
            getTriggerDOMNode: () => ue.current,
            onPopupVisibleChange: He,
            onPopupMouseEnter() {
                Ve({})
            }
        }, xe ? F.cloneElement(xe, {ref: Ce}) : F.createElement(hS, cd({}, e, {
            domRef: ue,
            prefixCls: a,
            inputElement: we,
            ref: fe,
            id: o,
            showSearch: oe,
            autoClearSearchValue: N,
            mode: v,
            activeDescendantId: O,
            tagRender: s,
            values: d,
            open: Ne,
            onToggleOpen: Ie,
            activeValue: k,
            searchValue: ye,
            onSearch: ze,
            onSearchSubmit(e) {
                e && e.trim() && M(e, {source: "submit"})
            },
            onRemove(e) {
                var t = d.filter((t => t !== e));
                f(t, {type: "remove", values: [e]})
            },
            tokenWithEnter: je
        })));
    return Xe = xe ? et : F.createElement("div", cd({className: Je}, ae, {
        ref: ce, onMouseDown(e) {
            var t, n = e.target, r = null === (t = de.current) || void 0 === t ? void 0 : t.getPopupElement();
            if (r && r.contains(n)) {
                var o = setTimeout((() => {
                    var e, t = Ae.indexOf(o);
                    -1 !== t && Ae.splice(t, 1), be(), le || r.contains(document.activeElement) || null === (e = fe.current) || void 0 === e || e.focus()
                }));
                Ae.push(o)
            }
            for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) i[l - 1] = arguments[l];
            null == te || te.apply(void 0, [e].concat(i))
        }, onKeyDown(e) {
            var t, n = _e(), r = e.which;
            if (r === Yv.ENTER && ("combobox" !== v && e.preventDefault(), Ne || Ie(!0)), Le(!!ye), r === Yv.BACKSPACE && !n && re && !ye && d.length) {
                for (var o = If(d), a = null, i = o.length - 1; i >= 0; i -= 1) {
                    var l = o[i];
                    if (!l.disabled) {
                        o.splice(i, 1), a = l;
                        break
                    }
                }
                a && f(o, {type: "remove", values: [a]})
            }
            for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
            Ne && pe.current && (t = pe.current).onKeyDown.apply(t, [e].concat(c)), null == ee || ee.apply(void 0, [e].concat(c))
        }, onKeyUp(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var o;
            Ne && pe.current && (o = pe.current).onKeyUp.apply(o, [e].concat(n)), null == J || J.apply(void 0, [e].concat(n))
        }, onFocus() {
            ve(!0), b || (Q && !Fe.current && Q.apply(void 0, arguments), Y.includes("focus") && Ie(!0)), Fe.current = !0
        }, onBlur() {
            ve(!1, (() => {
                Fe.current = !1, Ie(!1)
            })), b || (ye && ("tags" === v ? M(ye, {source: "submit"}) : "multiple" === v && M("", {source: "blur"})), Z && Z.apply(void 0, arguments))
        }
    }), he && !Ne && F.createElement("span", {
        style: {
            width: 0,
            height: 0,
            position: "absolute",
            overflow: "hidden",
            opacity: 0
        }, "aria-live": "polite"
    }, "".concat(d.map((e => {
        var t = e.label, n = e.value;
        return ["number", "string"].includes(Yu(t)) ? t : n
    })).join(", "))), et, Ke, Ye && Qe), F.createElement(AC.Provider, {value: Ue}, Xe)
}));

function XS(e, t) {
    return lS(e).join("").toUpperCase().includes(t)
}

var qS = 0, YS = Wf();
var QS = ["children", "value"], ZS = ["children"];

function JS(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return md(e).map(((e, n) => {
        if (!F.isValidElement(e) || !e.type) return null;
        var r = e, o = r.type.isSelectOptGroup, a = r.key, i = r.props, l = i.children, s = tp(i, ZS);
        return t || !o ? (e => {
            var t = e, n = t.key, r = t.props, o = r.children, a = r.value;
            return Cd({key: n, value: void 0 !== a ? a : n, children: o}, tp(r, QS))
        })(e) : Cd(Cd({key: "__RC_SELECT_GRP__".concat(null === a ? n : a, "__"), label: a}, s), {}, {options: JS(l)})
    })).filter((e => e))
}

function eE(e) {
    var t = F.useRef();
    t.current = e;
    var n = F.useCallback((function () {
        return t.current.apply(t, arguments)
    }), []);
    return n
}

var tE = () => null;
tE.isSelectOptGroup = !0;
var nE = () => null;
nE.isSelectOption = !0;
var rE = F.forwardRef(((e, t) => {
    var n = e.height, r = e.offsetY, o = e.offsetX, a = e.children, i = e.prefixCls, l = e.onInnerResize,
        s = e.innerProps, c = e.rtl, u = e.extra, d = {}, f = {display: "flex", flexDirection: "column"};
    return void 0 !== r && (d = {
        height: n,
        position: "relative",
        overflow: "hidden"
    }, f = Cd(Cd({}, f), {}, wd(wd(wd(wd(wd({transform: "translateY(".concat(r, "px)")}, c ? "marginRight" : "marginLeft", -o), "position", "absolute"), "left", 0), "right", 0), "top", 0))), F.createElement("div", {style: d}, F.createElement(Of, {
        onResize(e) {
            e.offsetHeight && l && l()
        }
    }, F.createElement("div", cd({
        style: f,
        className: sd(wd({}, "".concat(i, "-holder-inner"), i)),
        ref: t
    }, s), a, u)))
}));

function oE(e) {
    var t = e.children, n = e.setRef, r = F.useCallback((e => {
        n(e)
    }), []);
    return F.cloneElement(t, {ref: r})
}

rE.displayName = "Filler";
var aE = "object" === ("undefined" == typeof navigator ? "undefined" : Yu(navigator)) && /Firefox/i.test(navigator.userAgent);
const iE = (e, t, n, r) => {
    var o = F.useRef(!1), a = F.useRef(null), i = F.useRef({top: e, bottom: t, left: n, right: r});
    return i.current.top = e, i.current.bottom = t, i.current.left = n, i.current.right = r, function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e ? t < 0 && i.current.left || t > 0 && i.current.right : t < 0 && i.current.top || t > 0 && i.current.bottom;
        return n && r ? (clearTimeout(a.current), o.current = !1) : r && !o.current || (clearTimeout(a.current), o.current = !0, a.current = setTimeout((() => {
            o.current = !1
        }), 50)), !o.current && r
    }
};
var lE = function () {
    function e() {
        qu(this, e), wd(this, "maps", void 0), wd(this, "id", 0), wd(this, "diffKeys", new Set), this.maps = Object.create(null)
    }

    return Ju(e, [{
        key: "set", value(e, t) {
            this.maps[e] = t, this.id += 1, this.diffKeys.add(e)
        }
    }, {
        key: "get", value(e) {
            return this.maps[e]
        }
    }, {
        key: "resetRecord", value() {
            this.diffKeys.clear()
        }
    }, {
        key: "getRecord", value() {
            return this.diffKeys
        }
    }]), e
}();

function sE(e) {
    var t = parseFloat(e);
    return isNaN(t) ? 0 : t
}

var cE = 14 / 15;

function uE(e) {
    return Math.floor(Math.pow(e, .5))
}

function dE(e, t) {
    return ("touches" in e ? e.touches[0] : e)[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"]
}

var fE = F.forwardRef(((e, t) => {
    var n = e.prefixCls, r = e.rtl, o = e.scrollOffset, a = e.scrollRange, i = e.onStartMove, l = e.onStopMove,
        s = e.onScroll, c = e.horizontal, u = e.spinSize, d = e.containerSize, f = e.style, p = e.thumbStyle,
        m = e.showScrollBar, g = Df(F.useState(!1), 2), h = g[0], v = g[1], b = Df(F.useState(null), 2), y = b[0],
        w = b[1], x = Df(F.useState(null), 2), C = x[0], S = x[1], E = !r, k = F.useRef(), $ = F.useRef(),
        O = Df(F.useState(m), 2), P = O[0], N = O[1], M = F.useRef(), R = () => {
            !0 !== m && !1 !== m && (clearTimeout(M.current), N(!0), M.current = setTimeout((() => {
                N(!1)
            }), 3e3))
        }, I = a - d || 0, j = d - u || 0, z = F.useMemo((() => 0 === o || 0 === I ? 0 : o / I * j), [o, I, j]),
        T = F.useRef({top: z, dragging: h, pageY: y, startTop: C});
    T.current = {top: z, dragging: h, pageY: y, startTop: C};
    var _ = e => {
        v(!0), w(dE(e, c)), S(T.current.top), i(), e.stopPropagation(), e.preventDefault()
    };
    F.useEffect((() => {
        var e = e => {
            e.preventDefault()
        }, t = k.current, n = $.current;
        return t.addEventListener("touchstart", e, {passive: !1}), n.addEventListener("touchstart", _, {passive: !1}), () => {
            t.removeEventListener("touchstart", e), n.removeEventListener("touchstart", _)
        }
    }), []);
    var L = F.useRef();
    L.current = I;
    var A = F.useRef();
    A.current = j, F.useEffect((() => {
        if (h) {
            var e, t = t => {
                var n = T.current, r = n.dragging, o = n.pageY, a = n.startTop;
                Ff.cancel(e);
                var i = k.current.getBoundingClientRect(), l = d / (c ? i.width : i.height);
                if (r) {
                    var u = (dE(t, c) - o) * l, f = a;
                    !E && c ? f -= u : f += u;
                    var p = L.current, m = A.current, g = m ? f / m : 0, h = Math.ceil(g * p);
                    h = Math.max(h, 0), h = Math.min(h, p), e = Ff((() => {
                        s(h, c)
                    }))
                }
            }, n = () => {
                v(!1), l()
            };
            return window.addEventListener("mousemove", t, {passive: !0}), window.addEventListener("touchmove", t, {passive: !0}), window.addEventListener("mouseup", n, {passive: !0}), window.addEventListener("touchend", n, {passive: !0}), () => {
                window.removeEventListener("mousemove", t), window.removeEventListener("touchmove", t), window.removeEventListener("mouseup", n), window.removeEventListener("touchend", n), Ff.cancel(e)
            }
        }
    }), [h]), F.useEffect((() => (R(), () => {
        clearTimeout(M.current)
    })), [o]), F.useImperativeHandle(t, (() => ({delayHidden: R})));
    var H = "".concat(n, "-scrollbar"), D = {position: "absolute", visibility: P ? null : "hidden"}, B = {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: 99,
        cursor: "pointer",
        userSelect: "none"
    };
    return c ? (D.height = 8, D.left = 0, D.right = 0, D.bottom = 0, B.height = "100%", B.width = u, E ? B.left = z : B.right = z) : (D.width = 8, D.top = 0, D.bottom = 0, E ? D.right = 0 : D.left = 0, B.width = "100%", B.height = u, B.top = z), F.createElement("div", {
        ref: k,
        className: sd(H, wd(wd(wd({}, "".concat(H, "-horizontal"), c), "".concat(H, "-vertical"), !c), "".concat(H, "-visible"), P)),
        style: Cd(Cd({}, D), f),
        onMouseDown(e) {
            e.stopPropagation(), e.preventDefault()
        },
        onMouseMove: R
    }, F.createElement("div", {
        ref: $,
        className: sd("".concat(H, "-thumb"), wd({}, "".concat(H, "-thumb-moving"), h)),
        style: Cd(Cd({}, B), p),
        onMouseDown: _
    }))
}));

function pE() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = e / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) * e;
    return isNaN(t) && (t = 0), t = Math.max(t, 20), Math.floor(t)
}

var mE = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"],
    gE = [], hE = {overflowY: "auto", overflowAnchor: "none"};

function vE(e, t) {
    var n = e.prefixCls, r = void 0 === n ? "rc-virtual-list" : n, o = e.className, a = e.height, i = e.itemHeight,
        l = e.fullHeight, s = void 0 === l || l, c = e.style, u = e.data, d = e.children, f = e.itemKey, p = e.virtual,
        m = e.direction, g = e.scrollWidth, h = e.component, v = void 0 === h ? "div" : h, b = e.onScroll,
        y = e.onVirtualScroll, w = e.onVisibleChange, x = e.innerProps, C = e.extraRender, S = e.styles,
        E = e.showScrollBar, k = void 0 === E ? "optional" : E, $ = tp(e, mE),
        O = F.useCallback((e => "function" == typeof f ? f(e) : null == e ? void 0 : e[f]), [f]), P = (e => {
            var t = Df(F.useState(0), 2), n = t[0], r = t[1], o = F.useRef(new Map), a = F.useRef(new lE), i = F.useRef(0);

            function l() {
                i.current += 1
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                l();
                var t = () => {
                    var e = !1;
                    o.current.forEach(((t, n) => {
                        if (t && t.offsetParent) {
                            var r = Ed(t), o = r.offsetHeight, i = getComputedStyle(r), l = i.marginTop, s = i.marginBottom,
                                c = o + sE(l) + sE(s);
                            a.current.get(n) !== c && (a.current.set(n, c), e = !0)
                        }
                    })), e && r((e => e + 1))
                };
                if (e) t(); else {
                    i.current += 1;
                    var n = i.current;
                    Promise.resolve().then((() => {
                        n === i.current && t()
                    }))
                }
            }

            return F.useEffect((() => l), []), [(t, n) => {
                var r = e(t);
                o.current.get(r), n ? (o.current.set(r, n), s()) : o.current.delete(r)
            }, s, a.current, n]
        })(O), N = Df(P, 4), M = N[0], R = N[1], I = N[2], j = N[3], z = !(!1 === p || !a || !i),
        T = F.useMemo((() => Object.values(I.maps).reduce(((e, t) => e + t), 0)), [I.id, I.maps]),
        _ = z && u && (Math.max(i * u.length, T) > a || !!g), L = "rtl" === m,
        A = sd(r, wd({}, "".concat(r, "-rtl"), L), o), H = u || gE, D = F.useRef(), B = F.useRef(), W = F.useRef(),
        V = Df(F.useState(0), 2), K = V[0], U = V[1], G = Df(F.useState(0), 2), X = G[0], q = G[1],
        Y = Df(F.useState(!1), 2), Q = Y[0], Z = Y[1], J = () => {
            Z(!0)
        }, ee = () => {
            Z(!1)
        }, te = {getKey: O};

    function ne(e) {
        U((t => {
            var n = (e => {
                var t = e;
                return Number.isNaN(ye.current) || (t = Math.min(t, ye.current)), t = Math.max(t, 0)
            })("function" == typeof e ? e(t) : e);
            return D.current.scrollTop = n, n
        }))
    }

    var re = F.useRef({start: 0, end: H.length}), oe = F.useRef(), ae = Df(function (e, t) {
        var n = Df(F.useState(e), 2), r = n[0], o = n[1], a = Df(F.useState(null), 2), i = a[0], l = a[1];
        return F.useEffect((() => {
            var n = ((e, t, n) => {
                var r, o, a = e.length, i = t.length;
                if (0 === a && 0 === i) return null;
                a < i ? (r = e, o = t) : (r = t, o = e);
                var l = {__EMPTY_ITEM__: !0};

                function s(e) {
                    return void 0 !== e ? n(e) : l
                }

                for (var c = null, u = 1 !== Math.abs(a - i), d = 0; d < o.length; d += 1) {
                    var f = s(r[d]);
                    if (f !== s(o[d])) {
                        c = d, u = u || f !== s(o[d + 1]);
                        break
                    }
                }
                return null === c ? null : {index: c, multiple: u}
            })(r || [], e || [], t);
            void 0 !== (null == n ? void 0 : n.index) && l(e[n.index]), o(e)
        }), [e]), [i]
    }(H, O), 1)[0];
    oe.current = ae;
    var ie = F.useMemo((() => {
        if (!z) return {scrollHeight: void 0, start: 0, end: H.length - 1, offset: void 0};
        var e;
        if (!_) return {
            scrollHeight: (null === (e = B.current) || void 0 === e ? void 0 : e.offsetHeight) || 0,
            start: 0,
            end: H.length - 1,
            offset: void 0
        };
        for (var t, n, r, o = 0, l = H.length, s = 0; s < l; s += 1) {
            var c = H[s], u = O(c), d = I.get(u), f = o + (void 0 === d ? i : d);
            f >= K && void 0 === t && (t = s, n = o), f > K + a && void 0 === r && (r = s), o = f
        }
        return void 0 === t && (t = 0, n = 0, r = Math.ceil(a / i)), void 0 === r && (r = H.length - 1), {
            scrollHeight: o,
            start: t,
            end: r = Math.min(r + 1, H.length - 1),
            offset: n
        }
    }), [_, z, K, H, j, a]), le = ie.scrollHeight, se = ie.start, ce = ie.end, ue = ie.offset;
    re.current.start = se, re.current.end = ce, F.useLayoutEffect((() => {
        var e = I.getRecord();
        if (1 === e.size) {
            var t = Array.from(e)[0], n = H[se];
            if (n && O(n) === t) {
                var r = I.get(t) - i;
                ne((e => e + r))
            }
        }
        I.resetRecord()
    }), [le]);
    var de = Df(F.useState({width: 0, height: a}), 2), fe = de[0], pe = de[1], me = F.useRef(), ge = F.useRef(),
        he = F.useMemo((() => pE(fe.width, g)), [fe.width, g]),
        ve = F.useMemo((() => pE(fe.height, le)), [fe.height, le]), be = le - a, ye = F.useRef(be);
    ye.current = be;
    var we = K <= 0, xe = K >= be, Ce = X <= 0, Se = X >= g, Ee = iE(we, xe, Ce, Se),
        ke = () => ({x: L ? -X : X, y: K}), $e = F.useRef(ke()), Oe = Dg((e => {
            if (y) {
                var t = Cd(Cd({}, ke()), e);
                $e.current.x === t.x && $e.current.y === t.y || (y(t), $e.current = t)
            }
        }));

    function Pe(e, t) {
        var n = e;
        t ? (Uu.flushSync((() => {
            q(n)
        })), Oe()) : ne(n)
    }

    var Ne = e => {
        var t = e, n = g ? g - fe.width : 0;
        return t = Math.max(t, 0), Math.min(t, n)
    }, Me = Dg(((e, t) => {
        t ? (Uu.flushSync((() => {
            q((t => Ne(t + (L ? -e : e))))
        })), Oe()) : ne((t => t + e))
    })), Re = Df(function (e, t, n, r, o, a, i) {
        var l = F.useRef(0), s = F.useRef(null), c = F.useRef(null), u = F.useRef(!1), d = iE(t, n, r, o),
            f = F.useRef(null), p = F.useRef(null);
        return [t => {
            if (e) {
                Ff.cancel(p.current), p.current = Ff((() => {
                    f.current = null
                }), 2);
                var n = t.deltaX, r = t.deltaY, o = t.shiftKey, m = n, g = r;
                ("sx" === f.current || !f.current && o && r && !n) && (m = r, g = 0, f.current = "sx");
                var h = Math.abs(m), v = Math.abs(g);
                null === f.current && (f.current = a && h > v ? "x" : "y"), "y" === f.current ? ((e, t) => {
                    if (Ff.cancel(s.current), !d(!1, t)) {
                        var n = e;
                        n._virtualHandled || (n._virtualHandled = !0, l.current += t, c.current = t, aE || n.preventDefault(), s.current = Ff((() => {
                            var e = u.current ? 10 : 1;
                            i(l.current * e, !1), l.current = 0
                        })))
                    }
                })(t, g) : ((e, t) => {
                    i(t, !0), aE || e.preventDefault()
                })(t, m)
            }
        }, t => {
            e && (u.current = t.detail === c.current)
        }]
    }(z, we, xe, Ce, Se, !!g, Me), 2), Ie = Re[0], je = Re[1];
    ((e, t, n) => {
        var r, o = F.useRef(!1), a = F.useRef(0), i = F.useRef(0), l = F.useRef(null), s = F.useRef(null), c = e => {
            if (o.current) {
                var t = Math.ceil(e.touches[0].pageX), r = Math.ceil(e.touches[0].pageY), l = a.current - t,
                    c = i.current - r, u = Math.abs(l) > Math.abs(c);
                u ? a.current = t : i.current = r;
                var d = n(u, u ? l : c, !1, e);
                d && e.preventDefault(), clearInterval(s.current), d && (s.current = setInterval((() => {
                    u ? l *= cE : c *= cE;
                    var e = Math.floor(u ? l : c);
                    (!n(u, e, !0) || Math.abs(e) <= .1) && clearInterval(s.current)
                }), 16))
            }
        }, u = () => {
            o.current = !1, r()
        }, d = e => {
            r(), 1 !== e.touches.length || o.current || (o.current = !0, a.current = Math.ceil(e.touches[0].pageX), i.current = Math.ceil(e.touches[0].pageY), l.current = e.target, l.current.addEventListener("touchmove", c, {passive: !1}), l.current.addEventListener("touchend", u, {passive: !0}))
        };
        r = () => {
            l.current && (l.current.removeEventListener("touchmove", c), l.current.removeEventListener("touchend", u))
        }, Sp((() => (e && t.current.addEventListener("touchstart", d, {passive: !0}), () => {
            var e;
            null === (e = t.current) || void 0 === e || e.removeEventListener("touchstart", d), r(), clearInterval(s.current)
        })), [e])
    })(z, D, ((e, t, n, r) => {
        var o = r;
        return !(Ee(e, t, n) || o && o._virtualHandled || (o && (o._virtualHandled = !0), Ie({
            preventDefault() {
            }, deltaX: e ? t : 0, deltaY: e ? 0 : t
        }), 0))
    })), ((e, t) => {
        F.useEffect((() => {
            var n = t.current;
            if (e && n) {
                var r, o, a = !1, i = () => {
                    Ff.cancel(r)
                }, l = function e() {
                    i(), r = Ff((() => {
                        var t;
                        t = o, ne((e => e + t)), e()
                    }))
                }, s = e => {
                    if (!e.target.draggable) {
                        var t = e;
                        t._virtualHandled || (t._virtualHandled = !0, a = !0)
                    }
                }, c = () => {
                    a = !1, i()
                }, u = e => {
                    if (a) {
                        var t = dE(e, !1), r = n.getBoundingClientRect(), s = r.top, c = r.bottom;
                        t <= s ? (o = -uE(s - t), l()) : t >= c ? (o = uE(t - c), l()) : i()
                    }
                };
                return n.addEventListener("mousedown", s), n.ownerDocument.addEventListener("mouseup", c), n.ownerDocument.addEventListener("mousemove", u), () => {
                    n.removeEventListener("mousedown", s), n.ownerDocument.removeEventListener("mouseup", c), n.ownerDocument.removeEventListener("mousemove", u), i()
                }
            }
        }), [e])
    })(_, D), Sp((() => {
        function e(e) {
            var t = we && e.detail < 0, n = xe && e.detail > 0;
            !z || t || n || e.preventDefault()
        }

        var t = D.current;
        return t.addEventListener("wheel", Ie, {passive: !1}), t.addEventListener("DOMMouseScroll", je, {passive: !0}), t.addEventListener("MozMousePixelScroll", e, {passive: !1}), () => {
            t.removeEventListener("wheel", Ie), t.removeEventListener("DOMMouseScroll", je), t.removeEventListener("MozMousePixelScroll", e)
        }
    }), [z, we, xe]), Sp((() => {
        if (g) {
            var e = Ne(X);
            q(e), Oe({x: e})
        }
    }), [fe.width, g]);
    var ze = () => {
        var e, t;
        null === (e = me.current) || void 0 === e || e.delayHidden(), null === (t = ge.current) || void 0 === t || t.delayHidden()
    }, Te = ((e, t, n, r, o, a, i, l) => {
        var s = F.useRef(), c = Df(F.useState(null), 2), u = c[0], d = c[1];
        return Sp((() => {
            if (u && u.times < 10) {
                if (!e.current) return void d((e => Cd({}, e)));
                a();
                var l = u.targetAlign, s = u.originAlign, c = u.index, f = u.offset, p = e.current.clientHeight, m = !1,
                    g = l, h = null;
                if (p) {
                    for (var v = l || s, b = 0, y = 0, w = 0, x = Math.min(t.length - 1, c), C = 0; C <= x; C += 1) {
                        var S = o(t[C]);
                        y = b;
                        var E = n.get(S);
                        b = w = y + (void 0 === E ? r : E)
                    }
                    for (var k = "top" === v ? f : p - f, $ = x; $ >= 0; $ -= 1) {
                        var O = o(t[$]), P = n.get(O);
                        if (void 0 === P) {
                            m = !0;
                            break
                        }
                        if ((k -= P) <= 0) break
                    }
                    switch (v) {
                        case"top":
                            h = y - f;
                            break;
                        case"bottom":
                            h = w - p + f;
                            break;
                        default:
                            var N = e.current.scrollTop;
                            y < N ? g = "top" : w > N + p && (g = "bottom")
                    }
                    null !== h && i(h), h !== u.lastTop && (m = !0)
                }
                m && d(Cd(Cd({}, u), {}, {times: u.times + 1, targetAlign: g, lastTop: h}))
            }
        }), [u, e.current]), e => {
            if (null != e) {
                if (Ff.cancel(s.current), "number" == typeof e) i(e); else if (e && "object" === Yu(e)) {
                    var n, r = e.align;
                    n = "index" in e ? e.index : t.findIndex((t => o(t) === e.key));
                    var a = e.offset;
                    d({times: 0, index: n, offset: void 0 === a ? 0 : a, originAlign: r})
                }
            } else l()
        }
    })(D, H, I, i, O, (() => R(!0)), ne, ze);
    F.useImperativeHandle(t, (() => ({
        nativeElement: W.current, getScrollInfo: ke, scrollTo(e) {
            var t;
            (t = e) && "object" === Yu(t) && ("left" in t || "top" in t) ? (void 0 !== e.left && q(Ne(e.left)), Te(e.top)) : Te(e)
        }
    }))), Sp((() => {
        if (w) {
            var e = H.slice(se, ce + 1);
            w(e, H)
        }
    }), [se, ce, H]);
    var _e = ((e, t, n, r) => {
            var o = Df(F.useMemo((() => [new Map, []]), [e, n.id, r]), 2), a = o[0], i = o[1];
            return function (o) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o, s = a.get(o), c = a.get(l);
                if (void 0 === s || void 0 === c) for (var u = e.length, d = i.length; d < u; d += 1) {
                    var f, p = e[d], m = t(p);
                    a.set(m, d);
                    var g = null !== (f = n.get(m)) && void 0 !== f ? f : r;
                    if (i[d] = (i[d - 1] || 0) + g, m === o && (s = d), m === l && (c = d), void 0 !== s && void 0 !== c) break
                }
                return {top: i[s - 1] || 0, bottom: i[c]}
            }
        })(H, O, I, i),
        Le = null == C ? void 0 : C({start: se, end: ce, virtual: _, offsetX: X, offsetY: ue, rtl: L, getSize: _e}),
        Fe = ((e, t, n, r, o, a, i, l) => {
            var s = l.getKey;
            return e.slice(t, n + 1).map(((e, n) => {
                var l = i(e, t + n, {style: {width: r}, offsetX: o}), c = s(e);
                return F.createElement(oE, {
                    key: c, setRef(t) {
                        return a(e, t)
                    }
                }, l)
            }))
        })(H, se, ce, g, X, M, d, te), Ae = null;
    a && (Ae = Cd(wd({}, s ? "height" : "maxHeight", a), hE), z && (Ae.overflowY = "hidden", g && (Ae.overflowX = "hidden"), Q && (Ae.pointerEvents = "none")));
    var He = {};
    return L && (He.dir = "rtl"), F.createElement("div", cd({
        ref: W,
        style: Cd(Cd({}, c), {}, {position: "relative"}),
        className: A
    }, He, $), F.createElement(Of, {
        onResize(e) {
            pe({width: e.offsetWidth, height: e.offsetHeight})
        }
    }, F.createElement(v, {
        className: "".concat(r, "-holder"), style: Ae, ref: D, onScroll(e) {
            var t = e.currentTarget.scrollTop;
            t !== K && ne(t), null == b || b(e), Oe()
        }, onMouseEnter: ze
    }, F.createElement(rE, {
        prefixCls: r,
        height: le,
        offsetX: X,
        offsetY: ue,
        scrollWidth: g,
        onInnerResize: R,
        ref: B,
        innerProps: x,
        rtl: L,
        extra: Le
    }, Fe))), _ && le > a && F.createElement(fE, {
        ref: me,
        prefixCls: r,
        scrollOffset: K,
        scrollRange: le,
        rtl: L,
        onScroll: Pe,
        onStartMove: J,
        onStopMove: ee,
        spinSize: ve,
        containerSize: fe.height,
        style: null == S ? void 0 : S.verticalScrollBar,
        thumbStyle: null == S ? void 0 : S.verticalScrollBarThumb,
        showScrollBar: k
    }), _ && g > fe.width && F.createElement(fE, {
        ref: ge,
        prefixCls: r,
        scrollOffset: X,
        scrollRange: g,
        rtl: L,
        onScroll: Pe,
        onStartMove: J,
        onStopMove: ee,
        spinSize: he,
        containerSize: fe.width,
        horizontal: !0,
        style: null == S ? void 0 : S.horizontalScrollBar,
        thumbStyle: null == S ? void 0 : S.horizontalScrollBarThumb,
        showScrollBar: k
    }))
}

var bE = F.forwardRef(vE);
bE.displayName = "List";
var yE = F.createContext(null), wE = ["disabled", "title", "children", "style", "className"];

function xE(e) {
    return "string" == typeof e || "number" == typeof e
}

var CE = (e, t) => {
    var n = F.useContext(AC), r = n.prefixCls, o = n.id, a = n.open, i = n.multiple, l = n.mode, s = n.searchValue,
        c = n.toggleOpen, u = n.notFoundContent, d = n.onPopupScroll, f = F.useContext(yE), p = f.flattenOptions,
        m = f.onActiveValue, g = f.defaultActiveFirstOption, h = f.onSelect, v = f.menuItemSelectedIcon,
        b = f.rawValues, y = f.fieldNames, w = f.virtual, x = f.direction, C = f.listHeight, S = f.listItemHeight,
        E = "".concat(r, "-item"), k = Vd((() => p), [a, p], ((e, t) => t[0] && e[1] !== t[1])), $ = F.useRef(null),
        O = e => {
            e.preventDefault()
        }, P = e => {
            $.current && $.current.scrollTo("number" == typeof e ? {index: e} : e)
        }, N = function (e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = k.length, r = 0; r < n; r += 1) {
                var o = (e + r * t + n) % n, a = k[o], i = a.group, l = a.data;
                if (!i && !l.disabled) return o
            }
            return -1
        }, M = Df(F.useState((() => N(0))), 2), R = M[0], I = M[1], j = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            I(e);
            var n = {source: t ? "keyboard" : "mouse"}, r = k[e];
            r ? m(r.value, e, n) : m(null, -1, n)
        };
    F.useEffect((() => {
        j(!1 !== g ? N(0) : -1)
    }), [k.length, s]);
    var z = F.useCallback((e => b.has(e) && "combobox" !== l), [l, If(b).toString(), b.size]);
    F.useEffect((() => {
        var e, t = setTimeout((() => {
            if (!i && a && 1 === b.size) {
                var e = Array.from(b)[0], t = k.findIndex((t => t.data.value === e));
                -1 !== t && (j(t), P(t))
            }
        }));
        return a && (null === (e = $.current) || void 0 === e || e.scrollTo(void 0)), () => clearTimeout(t)
    }), [a, s, p.length]);
    var T = e => {
        void 0 !== e && h(e, {selected: !b.has(e)}), i || c(!1)
    };
    if (F.useImperativeHandle(t, (() => ({
        onKeyDown(e) {
            var t = e.which, n = e.ctrlKey;
            switch (t) {
                case Yv.N:
                case Yv.P:
                case Yv.UP:
                case Yv.DOWN:
                    var r = 0;
                    if (t === Yv.UP ? r = -1 : t === Yv.DOWN ? r = 1 : /(mac\sos|macintosh)/i.test(navigator.appVersion) && n && (t === Yv.N ? r = 1 : t === Yv.P && (r = -1)), 0 !== r) {
                        var o = N(R + r, r);
                        P(o), j(o, !0)
                    }
                    break;
                case Yv.ENTER:
                    var i = k[R];
                    i && !i.data.disabled ? T(i.value) : T(void 0), a && e.preventDefault();
                    break;
                case Yv.ESC:
                    c(!1), a && e.stopPropagation()
            }
        }, onKeyUp() {
        }, scrollTo(e) {
            P(e)
        }
    }))), 0 === k.length) return F.createElement("div", {
        role: "listbox",
        id: "".concat(o, "_list"),
        className: "".concat(E, "-empty"),
        onMouseDown: O
    }, u);
    var _ = Object.keys(y).map((e => y[e])), L = e => e.label;

    function A(e, t) {
        return {role: e.group ? "presentation" : "option", id: "".concat(o, "_list_").concat(t)}
    }

    var H = e => {
        var t = k[e];
        if (!t) return null;
        var n = t.data || {}, r = n.value, o = t.group, a = Uv(n, !0), i = L(t);
        return t ? F.createElement("div", cd({"aria-label": "string" != typeof i || o ? null : i}, a, {key: e}, A(t, e), {"aria-selected": z(r)}), r) : null
    }, D = {role: "listbox", id: "".concat(o, "_list")};
    return F.createElement(F.Fragment, null, w && F.createElement("div", cd({}, D, {
        style: {
            height: 0,
            width: 0,
            overflow: "hidden"
        }
    }), H(R - 1), H(R), H(R + 1)), F.createElement(bE, {
        itemKey: "key",
        ref: $,
        data: k,
        height: C,
        itemHeight: S,
        fullHeight: !1,
        onMouseDown: O,
        onScroll: d,
        virtual: w,
        direction: x,
        innerProps: w ? null : D
    }, ((e, t) => {
        var n, r = e.group, o = e.groupOption, a = e.data, i = e.label, l = e.value, s = a.key;
        if (r) {
            var c, u = null !== (c = a.title) && void 0 !== c ? c : xE(i) ? i.toString() : void 0;
            return F.createElement("div", {className: sd(E, "".concat(E, "-group")), title: u}, void 0 !== i ? i : s)
        }
        var d = a.disabled, f = a.title;
        a.children;
        var p = a.style, m = a.className, g = Pf(tp(a, wE), _), h = z(l), b = "".concat(E, "-option"),
            y = sd(E, b, m, (wd(n = {}, "".concat(b, "-grouped"), o), wd(n, "".concat(b, "-active"), R === t && !d), wd(n, "".concat(b, "-disabled"), d), wd(n, "".concat(b, "-selected"), h), n)),
            x = L(e), C = !v || "function" == typeof v || h, S = "number" == typeof x ? x : x || l,
            k = xE(S) ? S.toString() : void 0;
        return void 0 !== f && (k = f), F.createElement("div", cd({}, Uv(g), w ? {} : A(e, t), {
            "aria-selected": h,
            className: y,
            title: k,
            onMouseMove() {
                R === t || d || j(t)
            },
            onClick() {
                d || T(l)
            },
            style: p
        }), F.createElement("div", {className: "".concat(b, "-content")}, S), F.isValidElement(v) || h, C && F.createElement(oS, {
            className: "".concat(E, "-option-state"),
            customizeIcon: v,
            customizeIconProps: {isSelected: h}
        }, h ? "✓" : null))
    })))
}, SE = F.forwardRef(CE);
SE.displayName = "OptionList";
var EE = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"],
    kE = ["inputValue"], $E = F.forwardRef(((e, t) => {
        var n = e.id, r = e.mode, o = e.prefixCls, a = void 0 === o ? "rc-select" : o, i = e.backfill, l = e.fieldNames,
            s = e.inputValue, c = e.searchValue, u = e.onSearch, d = e.autoClearSearchValue, f = void 0 === d || d,
            p = e.onSelect, m = e.onDeselect, g = e.dropdownMatchSelectWidth, h = void 0 === g || g, v = e.filterOption,
            b = e.filterSort, y = e.optionFilterProp, w = e.optionLabelProp, x = e.options, C = e.children,
            S = e.defaultActiveFirstOption, E = e.menuItemSelectedIcon, k = e.virtual, $ = e.direction, O = e.listHeight,
            P = void 0 === O ? 200 : O, N = e.listItemHeight, M = void 0 === N ? 20 : N, R = e.value, I = e.defaultValue,
            j = e.labelInValue, z = e.onChange, T = tp(e, EE), _ = function (e) {
                var t = Df(F.useState(), 2), n = t[0], r = t[1];
                return F.useEffect((() => {
                    var e;
                    r("rc_select_".concat((YS ? (e = qS, qS += 1) : e = "TEST_OR_SSR", e)))
                }), []), e || n
            }(n), L = US(r), A = !(x || !C), H = F.useMemo((() => (void 0 !== v || "combobox" !== r) && v), [v, r]),
            D = F.useMemo((() => BS(l, A)), [JSON.stringify(l), A]),
            B = Df(Vg("", {value: void 0 !== c ? c : s, postState: e => e || ""}), 2), W = B[0], V = B[1],
            K = ((e, t, n, r, o) => F.useMemo((() => {
                var a = e;
                !e && (a = JS(t));
                var i = new Map, l = new Map, s = (e, t, n) => {
                    n && "string" == typeof n && e.set(t[n], t)
                };
                return function e(t) {
                    for (var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], c = 0; c < t.length; c += 1) {
                        var u = t[c];
                        !u[n.options] || a ? (i.set(u[n.value], u), s(l, u, n.label), s(l, u, r), s(l, u, o)) : e(u[n.options], !0)
                    }
                }(a), {options: a, valueOptions: i, labelOptions: l}
            }), [e, t, n, r, o]))(x, C, D, y, w), U = K.valueOptions, G = K.labelOptions, X = K.options,
            q = F.useCallback((e => lS(e).map((e => {
                var t, n, r, o, a, i;
                (e => !e || "object" !== Yu(e))(e) ? t = e : (r = e.key, n = e.label, t = null !== (i = e.value) && void 0 !== i ? i : r);
                var l, s = U.get(t);
                return s && (void 0 === n && (n = null == s ? void 0 : s[w || D.label]), void 0 === r && (r = null !== (l = null == s ? void 0 : s.key) && void 0 !== l ? l : t), o = null == s ? void 0 : s.disabled, a = null == s ? void 0 : s.title), {
                    label: n,
                    value: t,
                    key: r,
                    disabled: o,
                    title: a
                }
            }))), [D, w, U]), Y = Df(Vg(I, {value: R}), 2), Q = Y[0], Z = Y[1], J = F.useMemo((() => {
                var e, t = q(Q);
                return "combobox" === r && (e => !e && 0 !== e)(null === (e = t[0]) || void 0 === e ? void 0 : e.value) ? [] : t
            }), [Q, q, r]), ee = ((e, t) => {
                var n = F.useRef({values: new Map, options: new Map});
                return [F.useMemo((() => {
                    var r = n.current, o = r.values, a = r.options, i = e.map((e => {
                        var t;
                        return void 0 === e.label ? Cd(Cd({}, e), {}, {label: null === (t = o.get(e.value)) || void 0 === t ? void 0 : t.label}) : e
                    })), l = new Map, s = new Map;
                    return i.forEach((e => {
                        l.set(e.value, e), s.set(e.value, t.get(e.value) || a.get(e.value))
                    })), n.current.values = l, n.current.options = s, i
                }), [e, t]), F.useCallback((e => t.get(e) || n.current.options.get(e)), [t])]
            })(J, U), te = Df(ee, 2), ne = te[0], re = te[1], oe = F.useMemo((() => {
                if (!r && 1 === ne.length) {
                    var e = ne[0];
                    if (null === e.value && (null === e.label || void 0 === e.label)) return []
                }
                return ne.map((e => {
                    var t;
                    return Cd(Cd({}, e), {}, {label: null !== (t = e.label) && void 0 !== t ? t : e.value})
                }))
            }), [r, ne]), ae = F.useMemo((() => new Set(ne.map((e => e.value)))), [ne]);
        F.useEffect((() => {
            if ("combobox" === r) {
                var e, t = null === (e = ne[0]) || void 0 === e ? void 0 : e.value;
                V((e => null != e)(t) ? String(t) : "")
            }
        }), [ne]);
        var ie = eE(((e, t) => {
                var n, r = null != t ? t : e;
                return wd(n = {}, D.value, e), wd(n, D.label, r), n
            })), le = F.useMemo((() => {
                if ("tags" !== r) return X;
                var e = If(X);
                return If(ne).sort(((e, t) => e.value < t.value ? -1 : 1)).forEach((t => {
                    var n = t.value;
                    (e => U.has(e))(n) || e.push(ie(n, t.label))
                })), e
            }), [ie, X, U, ne, r]), se = ((e, t, n, r, o) => F.useMemo((() => {
                if (!n || !1 === r) return e;
                var a = t.options, i = t.label, l = t.value, s = [], c = "function" == typeof r, u = n.toUpperCase(),
                    d = c ? r : (e, t) => o ? XS(t[o], u) : t[a] ? XS(t["children" !== i ? i : "label"], u) : XS(t[l], u),
                    f = c ? e => WS(e) : e => e;
                return e.forEach((e => {
                    if (e[a]) if (d(n, f(e))) s.push(e); else {
                        var t = e[a].filter((e => d(n, f(e))));
                        t.length && s.push(Cd(Cd({}, e), {}, wd({}, a, t)))
                    } else d(n, f(e)) && s.push(e)
                })), s
            }), [e, r, o, n, t]))(le, D, W, H, y),
            ce = F.useMemo((() => "tags" !== r || !W || se.some((e => e[y || "value"] === W)) || se.some((e => e[D.value] === W)) ? se : [ie(W)].concat(If(se))), [ie, y, r, se, W, D]),
            ue = F.useMemo((() => b ? If(ce).sort(((e, t) => b(e, t))) : ce), [ce, b]), de = F.useMemo((() => function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.fieldNames,
                    r = t.childrenAsData, o = [], a = BS(n, !1), i = a.label, l = a.value, s = a.options, c = a.groupLabel;
                return function e(t, n) {
                    t.forEach((t => {
                        if (n || !(s in t)) {
                            var a = t[l];
                            o.push({key: DS(t, o.length), groupOption: n, data: t, label: t[i], value: a})
                        } else {
                            var u = t[c];
                            void 0 === u && r && (u = t.label), o.push({
                                key: DS(t, o.length),
                                group: !0,
                                data: t,
                                label: u
                            }), e(t[s], !0)
                        }
                    }))
                }(e, !1), o
            }(ue, {fieldNames: D, childrenAsData: A})), [ue, D, A]), fe = e => {
                var t = q(e);
                if (Z(t), z && (t.length !== ne.length || t.some(((e, t) => {
                    var n;
                    return (null === (n = ne[t]) || void 0 === n ? void 0 : n.value) !== (null == e ? void 0 : e.value)
                })))) {
                    var n = j ? t : t.map((e => e.value)), r = t.map((e => WS(re(e.value))));
                    z(L ? n : n[0], L ? r : r[0])
                }
            }, pe = Df(F.useState(null), 2), me = pe[0], ge = pe[1], he = Df(F.useState(0), 2), ve = he[0], be = he[1],
            ye = void 0 !== S ? S : "combobox" !== r, we = F.useCallback((function (e, t) {
                var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).source,
                    o = void 0 === n ? "keyboard" : n;
                be(t), i && "combobox" === r && null !== e && "keyboard" === o && ge(String(e))
            }), [i, r]), xe = (e, t, n) => {
                var r = () => {
                    var t, n = re(e);
                    return [j ? {
                        label: null == n ? void 0 : n[D.label],
                        value: e,
                        key: null !== (t = null == n ? void 0 : n.key) && void 0 !== t ? t : e
                    } : e, WS(n)]
                };
                if (t && p) {
                    var o = Df(r(), 2), a = o[0], i = o[1];
                    p(a, i)
                } else if (!t && m && "clear" !== n) {
                    var l = Df(r(), 2), s = l[0], c = l[1];
                    m(s, c)
                }
            }, Ce = eE(((e, t) => {
                var n, o = !L || t.selected;
                n = o ? L ? [].concat(If(ne), [e]) : [e] : ne.filter((t => t.value !== e)), fe(n), xe(e, o), "combobox" === r ? ge("") : US && !f || (V(""), ge(""))
            })), Se = F.useMemo((() => {
                var e = !1 !== k && !1 !== h;
                return Cd(Cd({}, K), {}, {
                    flattenOptions: de,
                    onActiveValue: we,
                    defaultActiveFirstOption: ye,
                    onSelect: Ce,
                    menuItemSelectedIcon: E,
                    rawValues: ae,
                    fieldNames: D,
                    virtual: e,
                    direction: $,
                    listHeight: P,
                    listItemHeight: M,
                    childrenAsData: A
                })
            }), [K, de, we, ye, Ce, E, ae, D, k, h, P, M, A]);
        return F.createElement(yE.Provider, {value: Se}, F.createElement(GS, cd({}, T, {
            id: _,
            prefixCls: a,
            ref: t,
            omitDomProps: kE,
            mode: r,
            displayValues: oe,
            onDisplayValuesChange(e, t) {
                fe(e);
                var n = t.type, r = t.values;
                "remove" !== n && "clear" !== n || r.forEach((e => {
                    xe(e.value, !1, n)
                }))
            },
            direction: $,
            searchValue: W,
            onSearch(e, t) {
                if (V(e), ge(null), "submit" !== t.source) "blur" !== t.source && ("combobox" === r && fe(e), null == u || u(e)); else {
                    var n = (e || "").trim();
                    if (n) {
                        var o = Array.from(new Set([].concat(If(ae), [n])));
                        fe(o), xe(n, !0), V("")
                    }
                }
            },
            autoClearSearchValue: f,
            onSearchSplit(e) {
                var t = e;
                "tags" !== r && (t = e.map((e => {
                    var t = G.get(e);
                    return null == t ? void 0 : t.value
                })).filter((e => void 0 !== e)));
                var n = Array.from(new Set([].concat(If(ae), If(t))));
                fe(n), n.forEach((e => {
                    xe(e, !0)
                }))
            },
            dropdownMatchSelectWidth: h,
            OptionList: SE,
            emptyOptions: !de.length,
            activeValue: me,
            activeDescendantId: "".concat(_, "_list_").concat(ve)
        })))
    })), OE = $E;

function PE(e, t, n) {
    return sd({
        [`${e}-status-success`]: "success" === t,
        [`${e}-status-warning`]: "warning" === t,
        [`${e}-status-error`]: "error" === t,
        [`${e}-status-validating`]: "validating" === t,
        [`${e}-has-feedback`]: n
    })
}

OE.Option = nE, OE.OptGroup = tE;
const NE = (e, t) => t || e, ME = () => {
    const [, e] = Hg(), t = new Og(e.colorBgBase).toHsl().l < .5 ? {opacity: .65} : {};
    return F.createElement("svg", {
        style: t,
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg"
    }, F.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, F.createElement("g", {transform: "translate(24 31.67)"}, F.createElement("ellipse", {
        fillOpacity: ".8",
        fill: "#F5F5F7",
        cx: "67.797",
        cy: "106.89",
        rx: "67.797",
        ry: "12.668"
    }), F.createElement("path", {
        d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
        fill: "#AEB8C2"
    }), F.createElement("path", {
        d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
        fill: "url(#linearGradient-1)",
        transform: "translate(13.56)"
    }), F.createElement("path", {
        d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
        fill: "#F5F5F7"
    }), F.createElement("path", {
        d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
        fill: "#DCE0E6"
    })), F.createElement("path", {
        d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
        fill: "#DCE0E6"
    }), F.createElement("g", {
        transform: "translate(149.65 15.383)",
        fill: "#FFF"
    }, F.createElement("ellipse", {
        cx: "20.654",
        cy: "3.167",
        rx: "2.849",
        ry: "2.815"
    }), F.createElement("path", {d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))
}, RE = () => {
    const [, e] = Hg(), {
        colorFill: t,
        colorFillTertiary: n,
        colorFillQuaternary: r,
        colorBgContainer: o
    } = e, {
        borderColor: a,
        shadowColor: i,
        contentColor: l
    } = F.useMemo((() => ({
        borderColor: new Og(t).onBackground(o).toHexShortString(),
        shadowColor: new Og(n).onBackground(o).toHexShortString(),
        contentColor: new Og(r).onBackground(o).toHexShortString()
    })), [t, n, r, o]);
    return F.createElement("svg", {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg"
    }, F.createElement("g", {
        transform: "translate(0 1)",
        fill: "none",
        fillRule: "evenodd"
    }, F.createElement("ellipse", {
        fill: i,
        cx: "32",
        cy: "33",
        rx: "32",
        ry: "7"
    }), F.createElement("g", {
        fillRule: "nonzero",
        stroke: a
    }, F.createElement("path", {d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}), F.createElement("path", {
        d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
        fill: l
    }))))
}, IE = e => {
    const {componentCls: t, margin: n, marginXS: r, marginXL: o, fontSize: a, lineHeight: i} = e;
    return {
        [t]: {
            marginInline: r,
            fontSize: a,
            lineHeight: i,
            textAlign: "center",
            [`${t}-image`]: {
                height: e.emptyImgHeight,
                marginBottom: r,
                opacity: e.opacityImage,
                img: {height: "100%"},
                svg: {maxWidth: "100%", height: "100%", margin: "auto"}
            },
            [`${t}-description`]: {color: e.colorText},
            [`${t}-footer`]: {marginTop: n},
            "&-normal": {
                marginBlock: o,
                color: e.colorTextDisabled,
                [`${t}-description`]: {color: e.colorTextDisabled},
                [`${t}-image`]: {height: e.emptyImgHeightMD}
            },
            "&-small": {marginBlock: r, color: e.colorTextDisabled, [`${t}-image`]: {height: e.emptyImgHeightSM}}
        }
    }
}, jE = lh("Empty", (e => {
    const {componentCls: t, controlHeightLG: n} = e,
        r = rh(e, {emptyImgCls: `${t}-img`, emptyImgHeight: 2.5 * n, emptyImgHeightMD: n, emptyImgHeightSM: .875 * n});
    return [IE(r)]
})), zE = F.createElement(ME, null), TE = F.createElement(RE, null), _E = e => {
    var {
        className: t,
        rootClassName: n,
        prefixCls: r,
        image: o = zE,
        description: a,
        children: i,
        imageStyle: l,
        style: s
    } = e, c = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
    const {getPrefixCls: u, direction: d, empty: f} = F.useContext(Ug),
        p = u("empty", r), [m, g] = jE(p), [h] = Xm("Empty"), v = void 0 !== a ? a : null == h ? void 0 : h.description,
        b = "string" == typeof v ? v : "empty";
    let y = null;
    return y = "string" == typeof o ? F.createElement("img", {
        alt: b,
        src: o
    }) : o, m(F.createElement("div", Object.assign({
        className: sd(g, p, null == f ? void 0 : f.className, {
            [`${p}-normal`]: o === TE,
            [`${p}-rtl`]: "rtl" === d
        }, t, n), style: Object.assign(Object.assign({}, null == f ? void 0 : f.style), s)
    }, c), F.createElement("div", {
        className: `${p}-image`,
        style: l
    }, y), v && F.createElement("div", {className: `${p}-description`}, v), i && F.createElement("div", {className: `${p}-footer`}, i)))
};
_E.PRESENTED_IMAGE_DEFAULT = zE, _E.PRESENTED_IMAGE_SIMPLE = TE;
const LE = e => {
    const {componentName: t} = e, {getPrefixCls: n} = F.useContext(Ug), r = n("empty");
    switch (t) {
        case"Table":
        case"List":
            return A.createElement(_E, {image: _E.PRESENTED_IMAGE_SIMPLE});
        case"Select":
        case"TreeSelect":
        case"Cascader":
        case"Transfer":
        case"Mentions":
            return A.createElement(_E, {image: _E.PRESENTED_IMAGE_SIMPLE, className: `${r}-small`});
        default:
            return A.createElement(_E, null)
    }
}, FE = e => {
    const {controlPaddingHorizontal: t, controlHeight: n, fontSize: r, lineHeight: o} = e;
    return {
        position: "relative",
        display: "block",
        minHeight: n,
        padding: `${(n - r * o) / 2}px ${t}px`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: r,
        lineHeight: o,
        boxSizing: "border-box"
    }
}, AE = e => {
    const {antCls: t, componentCls: n} = e, r = `${n}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`,
        a = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`,
        l = `${n}-dropdown-placement-`;
    return [{
        [`${n}-dropdown`]: Object.assign(Object.assign({}, Yg(e)), {
            position: "absolute",
            top: -9999,
            zIndex: e.zIndexPopup,
            boxSizing: "border-box",
            padding: e.paddingXXS,
            overflow: "hidden",
            fontSize: e.fontSize,
            fontVariant: "initial",
            backgroundColor: e.colorBgElevated,
            borderRadius: e.borderRadiusLG,
            outline: "none",
            boxShadow: e.boxShadowSecondary,
            [`\n          ${o}${l}bottomLeft,\n          ${a}${l}bottomLeft\n        `]: {animationName: Hx},
            [`\n          ${o}${l}topLeft,\n          ${a}${l}topLeft,\n          ${o}${l}topRight,\n          ${a}${l}topRight\n        `]: {animationName: Bx},
            [`${i}${l}bottomLeft`]: {animationName: Dx},
            [`\n          ${i}${l}topLeft,\n          ${i}${l}topRight\n        `]: {animationName: Wx},
            "&-hidden": {display: "none"},
            [`${r}`]: Object.assign(Object.assign({}, FE(e)), {
                cursor: "pointer",
                transition: `background ${e.motionDurationSlow} ease`,
                borderRadius: e.borderRadiusSM,
                "&-group": {color: e.colorTextDescription, fontSize: e.fontSizeSM, cursor: "default"},
                "&-option": {
                    display: "flex",
                    "&-content": Object.assign({flex: "auto"}, qg),
                    "&-state": {flex: "none", display: "flex", alignItems: "center"},
                    [`&-active:not(${r}-option-disabled)`]: {backgroundColor: e.controlItemBgHover},
                    [`&-selected:not(${r}-option-disabled)`]: {
                        color: e.colorText,
                        fontWeight: e.fontWeightStrong,
                        backgroundColor: e.controlItemBgActive,
                        [`${r}-option-state`]: {color: e.colorPrimary}
                    },
                    "&-disabled": {
                        [`&${r}-option-selected`]: {backgroundColor: e.colorBgContainerDisabled},
                        color: e.colorTextDisabled,
                        cursor: "not-allowed"
                    },
                    "&-grouped": {paddingInlineStart: 2 * e.controlPaddingHorizontal}
                }
            }),
            "&-rtl": {direction: "rtl"}
        })
    }, qx(e, "slide-up"), qx(e, "slide-down"), Ax(e, "move-up"), Ax(e, "move-down")]
}, HE = e => {
    let {controlHeightSM: t, controlHeight: n, lineWidth: r} = e;
    const o = (n - t) / 2 - r;
    return [o, Math.ceil(o / 2)]
};

function DE(e, t) {
    const {componentCls: n, iconCls: r} = e, o = `${n}-selection-overflow`, a = e.controlHeightSM, [i] = HE(e),
        l = t ? `${n}-${t}` : "";
    return {
        [`${n}-multiple${l}`]: {
            fontSize: e.fontSize,
            [o]: {
                position: "relative",
                display: "flex",
                flex: "auto",
                flexWrap: "wrap",
                maxWidth: "100%",
                "&-item": {flex: "none", alignSelf: "center", maxWidth: "100%", display: "inline-flex"}
            },
            [`${n}-selector`]: {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: i - 2 + "px 4px",
                borderRadius: e.borderRadius,
                [`${n}-show-search&`]: {cursor: "text"},
                [`${n}-disabled&`]: {background: e.colorBgContainerDisabled, cursor: "not-allowed"},
                "&:after": {
                    display: "inline-block",
                    width: 0,
                    margin: "2px 0",
                    lineHeight: `${a}px`,
                    visibility: "hidden",
                    content: '"\\a0"'
                }
            },
            [`\n        &${n}-show-arrow ${n}-selector,\n        &${n}-allow-clear ${n}-selector\n      `]: {paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal},
            [`${n}-selection-item`]: {
                position: "relative",
                display: "flex",
                flex: "none",
                boxSizing: "border-box",
                maxWidth: "100%",
                height: a,
                marginTop: 2,
                marginBottom: 2,
                lineHeight: a - 2 * e.lineWidth + "px",
                background: e.colorFillSecondary,
                borderRadius: e.borderRadiusSM,
                cursor: "default",
                transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
                userSelect: "none",
                marginInlineEnd: 4,
                paddingInlineStart: e.paddingXS,
                paddingInlineEnd: e.paddingXS / 2,
                [`${n}-disabled&`]: {color: e.colorTextDisabled, cursor: "not-allowed"},
                "&-content": {
                    display: "inline-block",
                    marginInlineEnd: e.paddingXS / 2,
                    overflow: "hidden",
                    whiteSpace: "pre",
                    textOverflow: "ellipsis"
                },
                "&-remove": Object.assign(Object.assign({}, {
                    display: "inline-flex",
                    alignItems: "center",
                    color: "inherit",
                    fontStyle: "normal",
                    lineHeight: 0,
                    textAlign: "center",
                    textTransform: "none",
                    verticalAlign: "-0.125em",
                    textRendering: "optimizeLegibility",
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    "> *": {lineHeight: 1},
                    svg: {display: "inline-block"}
                }), {
                    display: "inline-flex",
                    alignItems: "center",
                    color: e.colorIcon,
                    fontWeight: "bold",
                    fontSize: 10,
                    lineHeight: "inherit",
                    cursor: "pointer",
                    [`> ${r}`]: {verticalAlign: "-0.2em"},
                    "&:hover": {color: e.colorIconHover}
                })
            },
            [`${o}-item + ${o}-item`]: {[`${n}-selection-search`]: {marginInlineStart: 0}},
            [`${n}-selection-search`]: {
                display: "inline-flex",
                position: "relative",
                maxWidth: "100%",
                marginInlineStart: e.inputPaddingHorizontalBase - i,
                "\n          &-input,\n          &-mirror\n        ": {
                    height: a,
                    fontFamily: e.fontFamily,
                    lineHeight: `${a}px`,
                    transition: `all ${e.motionDurationSlow}`
                },
                "&-input": {width: "100%", minWidth: 4.1},
                "&-mirror": {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: "auto",
                    zIndex: 999,
                    whiteSpace: "pre",
                    visibility: "hidden"
                }
            },
            [`${n}-selection-placeholder `]: {
                position: "absolute",
                top: "50%",
                insetInlineStart: e.inputPaddingHorizontalBase,
                insetInlineEnd: e.inputPaddingHorizontalBase,
                transform: "translateY(-50%)",
                transition: `all ${e.motionDurationSlow}`
            }
        }
    }
}

const BE = e => {
    const {componentCls: t} = e, n = rh(e, {
        controlHeight: e.controlHeightSM,
        controlHeightSM: e.controlHeightXS,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS
    }), r = rh(e, {
        fontSize: e.fontSizeLG,
        controlHeight: e.controlHeightLG,
        controlHeightSM: e.controlHeight,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius
    }), [, o] = HE(e);
    return [DE(e), DE(n, "sm"), {
        [`${t}-multiple${t}-sm`]: {
            [`${t}-selection-placeholder`]: {insetInline: e.controlPaddingHorizontalSM - e.lineWidth},
            [`${t}-selection-search`]: {marginInlineStart: o}
        }
    }, DE(r, "lg")]
};

function WE(e, t) {
    const {componentCls: n, inputPaddingHorizontalBase: r, borderRadius: o} = e, a = e.controlHeight - 2 * e.lineWidth,
        i = Math.ceil(1.25 * e.fontSize), l = t ? `${n}-${t}` : "";
    return {
        [`${n}-single${l}`]: {
            fontSize: e.fontSize,
            [`${n}-selector`]: Object.assign(Object.assign({}, Yg(e)), {
                display: "flex",
                borderRadius: o,
                [`${n}-selection-search`]: {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: r,
                    insetInlineEnd: r,
                    bottom: 0,
                    "&-input": {width: "100%"}
                },
                [`\n          ${n}-selection-item,\n          ${n}-selection-placeholder\n        `]: {
                    padding: 0,
                    lineHeight: `${a}px`,
                    transition: `all ${e.motionDurationSlow}, visibility 0s`,
                    "@supports (-moz-appearance: meterbar)": {lineHeight: `${a}px`}
                },
                [`${n}-selection-item`]: {position: "relative", userSelect: "none"},
                [`${n}-selection-placeholder`]: {transition: "none", pointerEvents: "none"},
                [["&:after", `${n}-selection-item:after`, `${n}-selection-placeholder:after`].join(",")]: {
                    display: "inline-block",
                    width: 0,
                    visibility: "hidden",
                    content: '"\\a0"'
                }
            }),
            [`\n        &${n}-show-arrow ${n}-selection-item,\n        &${n}-show-arrow ${n}-selection-placeholder\n      `]: {paddingInlineEnd: i},
            [`&${n}-open ${n}-selection-item`]: {color: e.colorTextPlaceholder},
            [`&:not(${n}-customize-input)`]: {
                [`${n}-selector`]: {
                    width: "100%",
                    height: e.controlHeight,
                    padding: `0 ${r}px`,
                    [`${n}-selection-search-input`]: {height: a},
                    "&:after": {lineHeight: `${a}px`}
                }
            },
            [`&${n}-customize-input`]: {
                [`${n}-selector`]: {
                    "&:after": {display: "none"},
                    [`${n}-selection-search`]: {position: "static", width: "100%"},
                    [`${n}-selection-placeholder`]: {
                        position: "absolute",
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        padding: `0 ${r}px`,
                        "&:after": {display: "none"}
                    }
                }
            }
        }
    }
}

function VE(e) {
    const {componentCls: t} = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
    return [WE(e), WE(rh(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM
    }), "sm"), {
        [`${t}-single${t}-sm`]: {
            [`&:not(${t}-customize-input)`]: {
                [`${t}-selection-search`]: {
                    insetInlineStart: n,
                    insetInlineEnd: n
                },
                [`${t}-selector`]: {padding: `0 ${n}px`},
                [`&${t}-show-arrow ${t}-selection-search`]: {insetInlineEnd: n + 1.5 * e.fontSize},
                [`\n            &${t}-show-arrow ${t}-selection-item,\n            &${t}-show-arrow ${t}-selection-placeholder\n          `]: {paddingInlineEnd: 1.5 * e.fontSize}
            }
        }
    }, WE(rh(e, {controlHeight: e.controlHeightLG, fontSize: e.fontSizeLG, borderRadius: e.borderRadiusLG}), "lg")]
}

const KE = e => {
    const {componentCls: t} = e;
    return {
        position: "relative",
        backgroundColor: e.colorBgContainer,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        input: {cursor: "pointer"},
        [`${t}-show-search&`]: {cursor: "text", input: {cursor: "auto", color: "inherit"}},
        [`${t}-disabled&`]: {
            color: e.colorTextDisabled,
            background: e.colorBgContainerDisabled,
            cursor: "not-allowed",
            [`${t}-multiple&`]: {background: e.colorBgContainerDisabled},
            input: {cursor: "not-allowed"}
        }
    }
}, UE = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const {componentCls: r, borderHoverColor: o, outlineColor: a, antCls: i} = t,
        l = n ? {[`${r}-selector`]: {borderColor: o}} : {};
    return {
        [e]: {
            [`&:not(${r}-disabled):not(${r}-customize-input):not(${i}-pagination-size-changer)`]: Object.assign(Object.assign({}, l), {
                [`${r}-focused& ${r}-selector`]: {
                    borderColor: o,
                    boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${a}`,
                    outline: 0
                }, [`&:hover ${r}-selector`]: {borderColor: o}
            })
        }
    }
}, GE = e => {
    const {componentCls: t} = e;
    return {
        [`${t}-selection-search-input`]: {
            margin: 0,
            padding: 0,
            background: "transparent",
            border: "none",
            outline: "none",
            appearance: "none",
            "&::-webkit-search-cancel-button": {display: "none", "-webkit-appearance": "none"}
        }
    }
}, XE = e => {
    const {componentCls: t, inputPaddingHorizontalBase: n, iconCls: r} = e;
    return {
        [t]: Object.assign(Object.assign({}, Yg(e)), {
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, KE(e)), GE(e)),
            [`${t}-selection-item`]: Object.assign({flex: 1, fontWeight: "normal"}, qg),
            [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, qg), {
                flex: 1,
                color: e.colorTextPlaceholder,
                pointerEvents: "none"
            }),
            [`${t}-arrow`]: Object.assign(Object.assign({}, {
                display: "inline-flex",
                alignItems: "center",
                color: "inherit",
                fontStyle: "normal",
                lineHeight: 0,
                textAlign: "center",
                textTransform: "none",
                verticalAlign: "-0.125em",
                textRendering: "optimizeLegibility",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
                "> *": {lineHeight: 1},
                svg: {display: "inline-block"}
            }), {
                position: "absolute",
                top: "50%",
                insetInlineStart: "auto",
                insetInlineEnd: n,
                height: e.fontSizeIcon,
                marginTop: -e.fontSizeIcon / 2,
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                lineHeight: 1,
                textAlign: "center",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                [r]: {
                    verticalAlign: "top",
                    transition: `transform ${e.motionDurationSlow}`,
                    "> svg": {verticalAlign: "top"},
                    [`&:not(${t}-suffix)`]: {pointerEvents: "auto"}
                },
                [`${t}-disabled &`]: {cursor: "not-allowed"},
                "> *:not(:last-child)": {marginInlineEnd: 8}
            }),
            [`${t}-clear`]: {
                position: "absolute",
                top: "50%",
                insetInlineStart: "auto",
                insetInlineEnd: n,
                zIndex: 1,
                display: "inline-block",
                width: e.fontSizeIcon,
                height: e.fontSizeIcon,
                marginTop: -e.fontSizeIcon / 2,
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                fontStyle: "normal",
                lineHeight: 1,
                textAlign: "center",
                textTransform: "none",
                background: e.colorBgContainer,
                cursor: "pointer",
                opacity: 0,
                transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
                textRendering: "auto",
                "&:before": {display: "block"},
                "&:hover": {color: e.colorTextTertiary}
            },
            "&:hover": {[`${t}-clear`]: {opacity: 1}}
        }), [`${t}-has-feedback`]: {[`${t}-clear`]: {insetInlineEnd: n + e.fontSize + e.paddingXS}}
    }
}, qE = e => {
    const {componentCls: t} = e;
    return [{
        [t]: {
            [`&-borderless ${t}-selector`]: {
                backgroundColor: "transparent !important",
                borderColor: "transparent !important",
                boxShadow: "none !important"
            }, [`&${t}-in-form-item`]: {width: "100%"}
        }
    }, XE(e), VE(e), BE(e), AE(e), {[`${t}-rtl`]: {direction: "rtl"}}, UE(t, rh(e, {
        borderHoverColor: e.colorPrimaryHover,
        outlineColor: e.controlOutline
    })), UE(`${t}-status-error`, rh(e, {
        borderHoverColor: e.colorErrorHover,
        outlineColor: e.colorErrorOutline
    }), !0), UE(`${t}-status-warning`, rh(e, {
        borderHoverColor: e.colorWarningHover,
        outlineColor: e.colorWarningOutline
    }), !0), Ly(e, {borderElCls: `${t}-selector`, focusElCls: `${t}-focused`})]
}, YE = lh("Select", ((e, t) => {
    let {rootPrefixCls: n} = t;
    const r = rh(e, {rootPrefixCls: n, inputPaddingHorizontalBase: e.paddingSM - 1});
    return [qE(r)]
}), (e => ({zIndexPopup: e.zIndexPopupBase + 50})));
var QE = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}
        }]
    }, name: "check", theme: "outlined"
}, ZE = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: QE})), JE = F.forwardRef(ZE), ek = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}
        }]
    }, name: "down", theme: "outlined"
}, tk = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: ek})), nk = F.forwardRef(tk), rk = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}
        }]
    }, name: "search", theme: "outlined"
}, ok = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: rk})), ak = F.forwardRef(ok);
const ik = "SECRET_COMBOBOX_MODE_DO_NOT_USE", lk = (e, t) => {
    var n, {
        prefixCls: r,
        bordered: o = !0,
        className: a,
        rootClassName: i,
        getPopupContainer: l,
        popupClassName: s,
        dropdownClassName: c,
        listHeight: u = 256,
        placement: d,
        listItemHeight: f = 24,
        size: p,
        disabled: m,
        notFoundContent: g,
        status: h,
        builtinPlacements: v,
        dropdownMatchSelectWidth: b,
        popupMatchSelectWidth: y,
        direction: w,
        style: x,
        allowClear: C
    } = e, S = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear"]);
    const {
            getPopupContainer: E,
            getPrefixCls: k,
            renderEmpty: $,
            direction: O,
            virtual: P,
            popupMatchSelectWidth: N,
            popupOverflow: M,
            select: R
        } = F.useContext(Ug), I = k("select", r), j = k(), z = null != w ? w : O, {
            compactSize: T,
            compactItemClassnames: _
        } = Zb(I, z), [L, A] = YE(I), H = F.useMemo((() => {
            const {mode: e} = S;
            if ("combobox" !== e) return e === ik ? "combobox" : e
        }), [S.mode]), D = "multiple" === H || "tags" === H,
        B = ((e, t) => void 0 !== t ? t : null !== e)(S.suffixIcon, S.showArrow),
        W = null !== (n = null != y ? y : b) && void 0 !== n ? n : N, {
            status: V,
            hasFeedback: K,
            isFormItemInput: U,
            feedbackIcon: G
        } = F.useContext(Cx), X = NE(V, h);
    let q;
    q = void 0 !== g ? g : "combobox" === H ? null : (null == $ ? void 0 : $("Select")) || F.createElement(LE, {componentName: "Select"});
    const {suffixIcon: Y, itemIcon: Q, removeIcon: Z, clearIcon: J} = (e => {
            let {
                suffixIcon: t,
                clearIcon: n,
                menuItemSelectedIcon: r,
                removeIcon: o,
                loading: a,
                multiple: i,
                hasFeedback: l,
                prefixCls: s,
                showSuffixIcon: c,
                feedbackIcon: u,
                showArrow: d,
                componentName: f
            } = e;
            const p = null != n ? n : F.createElement(zv, null),
                m = e => null !== t || l || d ? F.createElement(F.Fragment, null, !1 !== c && e, l && u) : null;
            let g = null;
            if (void 0 !== t) g = m(t); else if (a) g = m(F.createElement(sb, {spin: !0})); else {
                const e = `${s}-suffix`;
                g = t => {
                    let {open: n, showSearch: r} = t;
                    return m(n && r ? F.createElement(ak, {className: e}) : F.createElement(nk, {className: e}))
                }
            }
            let h = null;
            h = void 0 !== r ? r : i ? F.createElement(JE, null) : null;
            let v = null;
            return v = void 0 !== o ? o : F.createElement(Lv, null), {
                clearIcon: p,
                suffixIcon: g,
                itemIcon: h,
                removeIcon: v
            }
        })(Object.assign(Object.assign({}, S), {
            multiple: D,
            hasFeedback: K,
            feedbackIcon: G,
            showSuffixIcon: B,
            prefixCls: I,
            showArrow: S.showArrow,
            componentName: "Select"
        })), ee = !0 === C ? {clearIcon: J} : C, te = Pf(S, ["suffixIcon", "itemIcon"]),
        ne = sd(s || c, {[`${I}-dropdown-${z}`]: "rtl" === z}, i, A), re = Ub((e => {
            var t;
            return null !== (t = null != p ? p : T) && void 0 !== t ? t : e
        })), oe = F.useContext(dh), ae = null != m ? m : oe, ie = sd({
            [`${I}-lg`]: "large" === re,
            [`${I}-sm`]: "small" === re,
            [`${I}-rtl`]: "rtl" === z,
            [`${I}-borderless`]: !o,
            [`${I}-in-form-item`]: U
        }, PE(I, X, K), _, null == R ? void 0 : R.className, a, i, A),
        le = F.useMemo((() => void 0 !== d ? d : "rtl" === z ? "bottomRight" : "bottomLeft"), [d, z]),
        se = function (e, t) {
            return e || (e => {
                const t = {
                    overflow: {adjustX: !0, adjustY: !0, shiftY: !0},
                    htmlRegion: "scroll" === e ? "scroll" : "visible",
                    _experimental: {dynamicInset: !0}
                };
                return {
                    bottomLeft: Object.assign(Object.assign({}, t), {points: ["tl", "bl"], offset: [0, 4]}),
                    bottomRight: Object.assign(Object.assign({}, t), {points: ["tr", "br"], offset: [0, 4]}),
                    topLeft: Object.assign(Object.assign({}, t), {points: ["bl", "tl"], offset: [0, -4]}),
                    topRight: Object.assign(Object.assign({}, t), {points: ["br", "tr"], offset: [0, -4]})
                }
            })(t)
        }(v, M);
    return L(F.createElement(OE, Object.assign({
        ref: t,
        virtual: P,
        showSearch: null == R ? void 0 : R.showSearch
    }, te, {
        style: Object.assign(Object.assign({}, null == R ? void 0 : R.style), x),
        dropdownMatchSelectWidth: W,
        builtinPlacements: se,
        transitionName: Uy(j, "slide-up", S.transitionName),
        listHeight: u,
        listItemHeight: f,
        mode: H,
        prefixCls: I,
        placement: le,
        direction: z,
        suffixIcon: Y,
        menuItemSelectedIcon: Q,
        removeIcon: Z,
        allowClear: ee,
        notFoundContent: q,
        className: ie,
        getPopupContainer: l || E,
        dropdownClassName: ne,
        disabled: ae
    })))
}, sk = F.forwardRef(lk), ck = (uk = sk, LC((e => {
    const {prefixCls: t, style: n} = e,
        r = F.useRef(null), [o, a] = F.useState(0), [i, l] = F.useState(0), [s, c] = Vg(!1, {value: e.open}), {getPrefixCls: u} = F.useContext(Ug),
        d = u("select", t);
    F.useEffect((() => {
        if (c(!0), "undefined" != typeof ResizeObserver) {
            const e = new ResizeObserver((e => {
                const t = e[0].target;
                a(t.offsetHeight + 8), l(t.offsetWidth)
            })), t = setInterval((() => {
                var n;
                const o = `.${d}-dropdown`, a = null === (n = r.current) || void 0 === n ? void 0 : n.querySelector(o);
                a && (clearInterval(t), e.observe(a))
            }), 10);
            return () => {
                clearInterval(t), e.disconnect()
            }
        }
    }), []);
    let f = Object.assign(Object.assign({}, e), {
        style: Object.assign(Object.assign({}, n), {margin: 0}),
        open: s,
        visible: s,
        getPopupContainer() {
            return r.current
        }
    });
    return F.createElement("div", {
        ref: r,
        style: {paddingBottom: o, position: "relative", minWidth: i}
    }, F.createElement(uk, Object.assign({}, f)))
})));
var uk;
sk.SECRET_COMBOBOX_MODE_DO_NOT_USE = ik, sk.Option = nE, sk.OptGroup = tE, sk._InternalPanelDoNotUseOrYouWillBeFired = ck;
const dk = ["xxl", "xl", "lg", "md", "sm", "xs"];
var fk = {shiftX: 64, adjustY: 1}, pk = {adjustX: 1, shiftY: !0}, mk = [0, 0], gk = {
    left: {points: ["cr", "cl"], overflow: pk, offset: [-4, 0], targetOffset: mk},
    right: {points: ["cl", "cr"], overflow: pk, offset: [4, 0], targetOffset: mk},
    top: {points: ["bc", "tc"], overflow: fk, offset: [0, -4], targetOffset: mk},
    bottom: {points: ["tc", "bc"], overflow: fk, offset: [0, 4], targetOffset: mk},
    topLeft: {points: ["bl", "tl"], overflow: fk, offset: [0, -4], targetOffset: mk},
    leftTop: {points: ["tr", "tl"], overflow: pk, offset: [-4, 0], targetOffset: mk},
    topRight: {points: ["br", "tr"], overflow: fk, offset: [0, -4], targetOffset: mk},
    rightTop: {points: ["tl", "tr"], overflow: pk, offset: [4, 0], targetOffset: mk},
    bottomRight: {points: ["tr", "br"], overflow: fk, offset: [0, 4], targetOffset: mk},
    rightBottom: {points: ["bl", "br"], overflow: pk, offset: [4, 0], targetOffset: mk},
    bottomLeft: {points: ["tl", "bl"], overflow: fk, offset: [0, 4], targetOffset: mk},
    leftBottom: {points: ["br", "bl"], overflow: pk, offset: [-4, 0], targetOffset: mk}
};

function hk(e) {
    var t = e.children, n = e.prefixCls, r = e.id, o = e.overlayInnerStyle, a = e.className, i = e.style;
    return F.createElement("div", {
        className: sd("".concat(n, "-content"), a),
        style: i
    }, F.createElement("div", {
        className: "".concat(n, "-inner"),
        id: r,
        role: "tooltip",
        style: o
    }, "function" == typeof t ? t() : t))
}

var vk = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"],
    bk = (e, t) => {
        var n = e.overlayClassName, r = e.trigger, o = void 0 === r ? ["hover"] : r, a = e.mouseEnterDelay,
            i = void 0 === a ? 0 : a, l = e.mouseLeaveDelay, s = void 0 === l ? .1 : l, c = e.overlayStyle,
            u = e.prefixCls, d = void 0 === u ? "rc-tooltip" : u, f = e.children, p = e.onVisibleChange,
            m = e.afterVisibleChange, g = e.transitionName, h = e.animation, v = e.motion, b = e.placement,
            y = void 0 === b ? "right" : b, w = e.align, x = void 0 === w ? {} : w, C = e.destroyTooltipOnHide,
            S = void 0 !== C && C, E = e.defaultVisible, k = e.getTooltipContainer, $ = e.overlayInnerStyle;
        e.arrowContent;
        var O = e.overlay, P = e.id, N = e.showArrow, M = void 0 === N || N, R = tp(e, vk), I = F.useRef(null);
        F.useImperativeHandle(t, (() => I.current));
        var j = Cd({}, R);
        return "visible" in e && (j.popupVisible = e.visible), F.createElement(LS, cd({
            popupClassName: n,
            prefixCls: d,
            popup: () => F.createElement(hk, {key: "content", prefixCls: d, id: P, overlayInnerStyle: $}, O),
            action: o,
            builtinPlacements: gk,
            popupPlacement: y,
            ref: I,
            popupAlign: x,
            getPopupContainer: k,
            onPopupVisibleChange: p,
            afterPopupVisibleChange: m,
            popupTransitionName: g,
            popupAnimation: h,
            popupMotion: v,
            defaultPopupVisible: E,
            autoDestroy: S,
            mouseLeaveDelay: s,
            popupStyle: c,
            mouseEnterDelay: i,
            arrow: M
        }, j), f)
    };
const yk = F.forwardRef(bk);

function wk(e) {
    const {contentRadius: t, limitVerticalRadius: n} = e, r = t > 12 ? t + 2 : 12;
    return {dropdownArrowOffset: r, dropdownArrowOffsetVertical: n ? 8 : r}
}

function xk(e, t) {
    return e ? t : {}
}

function Ck(e, t) {
    const {
        componentCls: n,
        sizePopupArrow: r,
        borderRadiusXS: o,
        borderRadiusOuter: a,
        boxShadowPopoverArrow: i
    } = e, {
        colorBg: l,
        contentRadius: s = e.borderRadiusLG,
        limitVerticalRadius: c,
        arrowDistance: u = 0,
        arrowPlacement: d = {left: !0, right: !0, top: !0, bottom: !0}
    } = t, {dropdownArrowOffsetVertical: f, dropdownArrowOffset: p} = wk({contentRadius: s, limitVerticalRadius: c});
    return {
        [n]: Object.assign(Object.assign(Object.assign(Object.assign({
            [`${n}-arrow`]: [Object.assign(Object.assign({
                position: "absolute",
                zIndex: 1,
                display: "block"
            }, Xg(r, o, a, l, i)), {"&:before": {background: l}})]
        }, xk(!!d.top, {
            [[`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(",")]: {
                bottom: u,
                transform: "translateY(100%) rotate(180deg)"
            },
            [`&-placement-top ${n}-arrow`]: {
                left: {_skip_check_: !0, value: "50%"},
                transform: "translateX(-50%) translateY(100%) rotate(180deg)"
            },
            [`&-placement-topLeft ${n}-arrow`]: {left: {_skip_check_: !0, value: p}},
            [`&-placement-topRight ${n}-arrow`]: {right: {_skip_check_: !0, value: p}}
        })), xk(!!d.bottom, {
            [[`&-placement-bottom ${n}-arrow`, `&-placement-bottomLeft ${n}-arrow`, `&-placement-bottomRight ${n}-arrow`].join(",")]: {
                top: u,
                transform: "translateY(-100%)"
            },
            [`&-placement-bottom ${n}-arrow`]: {
                left: {_skip_check_: !0, value: "50%"},
                transform: "translateX(-50%) translateY(-100%)"
            },
            [`&-placement-bottomLeft ${n}-arrow`]: {left: {_skip_check_: !0, value: p}},
            [`&-placement-bottomRight ${n}-arrow`]: {right: {_skip_check_: !0, value: p}}
        })), xk(!!d.left, {
            [[`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(",")]: {
                right: {
                    _skip_check_: !0,
                    value: u
                }, transform: "translateX(100%) rotate(90deg)"
            },
            [`&-placement-left ${n}-arrow`]: {
                top: {_skip_check_: !0, value: "50%"},
                transform: "translateY(-50%) translateX(100%) rotate(90deg)"
            },
            [`&-placement-leftTop ${n}-arrow`]: {top: f},
            [`&-placement-leftBottom ${n}-arrow`]: {bottom: f}
        })), xk(!!d.right, {
            [[`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(",")]: {
                left: {
                    _skip_check_: !0,
                    value: u
                }, transform: "translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-right ${n}-arrow`]: {
                top: {_skip_check_: !0, value: "50%"},
                transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-rightTop ${n}-arrow`]: {top: f},
            [`&-placement-rightBottom ${n}-arrow`]: {bottom: f}
        }))
    }
}

const Sk = {
        left: {points: ["cr", "cl"]},
        right: {points: ["cl", "cr"]},
        top: {points: ["bc", "tc"]},
        bottom: {points: ["tc", "bc"]},
        topLeft: {points: ["bl", "tl"]},
        leftTop: {points: ["tr", "tl"]},
        topRight: {points: ["br", "tr"]},
        rightTop: {points: ["tl", "tr"]},
        bottomRight: {points: ["tr", "br"]},
        rightBottom: {points: ["bl", "br"]},
        bottomLeft: {points: ["tl", "bl"]},
        leftBottom: {points: ["br", "bl"]}
    }, Ek = {
        topLeft: {points: ["bl", "tc"]},
        leftTop: {points: ["tr", "cl"]},
        topRight: {points: ["br", "tc"]},
        rightTop: {points: ["tl", "cr"]},
        bottomRight: {points: ["tr", "bc"]},
        rightBottom: {points: ["bl", "cr"]},
        bottomLeft: {points: ["tl", "bc"]},
        leftBottom: {points: ["br", "cl"]}
    },
    kk = new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
const $k = {
        defaultSeed: jg.token, useToken() {
            const [e, t, n] = Hg();
            return {theme: e, token: t, hashId: n}
        }
    }, Ok = e => {
        const {
            componentCls: t,
            tooltipMaxWidth: n,
            tooltipColor: r,
            tooltipBg: o,
            tooltipBorderRadius: a,
            zIndexPopup: i,
            controlHeight: l,
            boxShadowSecondary: s,
            paddingSM: c,
            paddingXS: u,
            tooltipRadiusOuter: d
        } = e;
        return [{
            [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yg(e)), {
                position: "absolute",
                zIndex: i,
                display: "block",
                width: "max-content",
                maxWidth: n,
                visibility: "visible",
                transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
                "&-hidden": {display: "none"},
                "--antd-arrow-background-color": o,
                [`${t}-inner`]: {
                    minWidth: l,
                    minHeight: l,
                    padding: `${c / 2}px ${u}px`,
                    color: r,
                    textAlign: "start",
                    textDecoration: "none",
                    wordWrap: "break-word",
                    backgroundColor: o,
                    borderRadius: a,
                    boxShadow: s,
                    boxSizing: "border-box"
                },
                [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {[`${t}-inner`]: {borderRadius: Math.min(a, 8)}},
                [`${t}-content`]: {position: "relative"}
            }), ch(e, ((e, n) => {
                let {darkColor: r} = n;
                return {
                    [`&${t}-${e}`]: {
                        [`${t}-inner`]: {backgroundColor: r},
                        [`${t}-arrow`]: {"--antd-arrow-background-color": r}
                    }
                }
            }))), {"&-rtl": {direction: "rtl"}})
        }, Ck(rh(e, {borderRadiusOuter: d}), {
            colorBg: "var(--antd-arrow-background-color)",
            contentRadius: a,
            limitVerticalRadius: !0
        }), {[`${t}-pure`]: {position: "relative", maxWidth: "none", margin: e.sizePopupArrow}}]
    }, Pk = (e, t) => lh("Tooltip", (e => {
        if (!1 === t) return [];
        const {borderRadius: n, colorTextLightSolid: r, colorBgDefault: o, borderRadiusOuter: a} = e, i = rh(e, {
            tooltipMaxWidth: 250,
            tooltipColor: r,
            tooltipBorderRadius: n,
            tooltipBg: o,
            tooltipRadiusOuter: a > 4 ? 4 : a
        });
        return [Ok(i), rC(e, "zoom-big-fast")]
    }), (e => {
        let {zIndexPopupBase: t, colorBgSpotlight: n} = e;
        return {zIndexPopup: t + 70, colorBgDefault: n}
    }), {resetStyle: !1})(e), Nk = Ym.map((e => `${e}-inverse`)),
    Mk = ["success", "processing", "error", "default", "warning"];

function Rk(e) {
    return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? Ym.includes(e) : [].concat(If(Nk), If(Ym)).includes(e)
}

function Ik(e, t) {
    const n = Rk(t), r = sd({[`${e}-${t}`]: t && n}), o = {}, a = {};
    return t && !n && (o.background = t, a["--antd-arrow-background-color"] = t), {
        className: r,
        overlayStyle: o,
        arrowStyle: a
    }
}

const {useToken: jk} = $k;
const zk = F.forwardRef(((e, t) => {
    var n, r;
    const {
            prefixCls: o,
            openClassName: a,
            getTooltipContainer: i,
            overlayClassName: l,
            color: s,
            overlayInnerStyle: c,
            children: u,
            afterOpenChange: d,
            afterVisibleChange: f,
            destroyTooltipOnHide: p,
            arrow: m = !0,
            title: g,
            overlay: h,
            builtinPlacements: v,
            arrowPointAtCenter: b = !1,
            autoAdjustOverflow: y = !0
        } = e, w = !!m, {token: x} = jk(), {getPopupContainer: C, getPrefixCls: S, direction: E} = F.useContext(Ug),
        k = F.useRef(null), $ = () => {
            var e;
            null === (e = k.current) || void 0 === e || e.forceAlign()
        };
    F.useImperativeHandle(t, (() => ({
        forceAlign: $, forcePopupAlign() {
            $()
        }
    })));
    const [O, P] = Vg(!1, {
            value: null !== (n = e.open) && void 0 !== n ? n : e.visible,
            defaultValue: null !== (r = e.defaultOpen) && void 0 !== r ? r : e.defaultVisible
        }), N = !g && !h && 0 !== g, M = F.useMemo((() => {
            var e, t;
            let n = b;
            return "object" == typeof m && (n = null !== (t = null !== (e = m.pointAtCenter) && void 0 !== e ? e : m.arrowPointAtCenter) && void 0 !== t ? t : b), v || function (e) {
                const {arrowWidth: t, autoAdjustOverflow: n, arrowPointAtCenter: r, offset: o, borderRadius: a} = e,
                    i = t / 2, l = {};
                return Object.keys(Sk).forEach((e => {
                    const s = r && Ek[e] || Sk[e], c = Object.assign(Object.assign({}, s), {offset: [0, 0]});
                    switch (l[e] = c, kk.has(e) && (c.autoArrow = !1), e) {
                        case"top":
                        case"topLeft":
                        case"topRight":
                            c.offset[1] = -i - o;
                            break;
                        case"bottom":
                        case"bottomLeft":
                        case"bottomRight":
                            c.offset[1] = i + o;
                            break;
                        case"left":
                        case"leftTop":
                        case"leftBottom":
                            c.offset[0] = -i - o;
                            break;
                        case"right":
                        case"rightTop":
                        case"rightBottom":
                            c.offset[0] = i + o
                    }
                    const u = wk({contentRadius: a, limitVerticalRadius: !0});
                    if (r) switch (e) {
                        case"topLeft":
                        case"bottomLeft":
                            c.offset[0] = -u.dropdownArrowOffset - i;
                            break;
                        case"topRight":
                        case"bottomRight":
                            c.offset[0] = u.dropdownArrowOffset + i;
                            break;
                        case"leftTop":
                        case"rightTop":
                            c.offset[1] = -u.dropdownArrowOffset - i;
                            break;
                        case"leftBottom":
                        case"rightBottom":
                            c.offset[1] = u.dropdownArrowOffset + i
                    }
                    c.overflow = ((e, t, n, r) => {
                        if (!1 === r) return {adjustX: !1, adjustY: !1};
                        const o = r && "object" == typeof r ? r : {}, a = {};
                        switch (e) {
                            case"top":
                            case"bottom":
                                a.shiftX = 2 * t.dropdownArrowOffset + n;
                                break;
                            case"left":
                            case"right":
                                a.shiftY = 2 * t.dropdownArrowOffsetVertical + n
                        }
                        const i = Object.assign(Object.assign({}, a), o);
                        return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i
                    })(e, u, t, n), c.htmlRegion = "visibleFirst"
                })), l
            }({
                arrowPointAtCenter: n,
                autoAdjustOverflow: y,
                arrowWidth: w ? x.sizePopupArrow : 0,
                borderRadius: x.borderRadius,
                offset: x.marginXXS
            })
        }), [b, m, v, x]), R = F.useMemo((() => 0 === g ? g : h || g || ""), [h, g]),
        I = F.createElement(Jb, null, "function" == typeof R ? R() : R), {
            getPopupContainer: j,
            placement: z = "top",
            mouseEnterDelay: T = .1,
            mouseLeaveDelay: _ = .1,
            overlayStyle: L,
            rootClassName: A
        } = e, H = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]),
        D = S("tooltip", o), B = S(), W = e["data-popover-inject"];
    let V = O;
    "open" in e || "visible" in e || !N || (V = !1);
    const K = function (e, t) {
            const n = e.type;
            if ((!0 === n.__ANT_BUTTON || "button" === e.type) && e.props.disabled || !0 === n.__ANT_SWITCH && (e.props.disabled || e.props.loading) || !0 === n.__ANT_RADIO && e.props.disabled) {
                const {picked: n, omitted: r} = (e => {
                    const t = {}, n = Object.assign({}, e);
                    return ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"].forEach((r => {
                        e && r in e && (t[r] = e[r], delete n[r])
                    })), {picked: t, omitted: n}
                })(e.props.style), o = Object.assign(Object.assign({display: "inline-block"}, n), {
                    cursor: "not-allowed",
                    width: e.props.block ? "100%" : void 0
                }), a = qv(e, {style: Object.assign(Object.assign({}, r), {pointerEvents: "none"}), className: null});
                return F.createElement("span", {
                    style: o,
                    className: sd(e.props.className, `${t}-disabled-compatible-wrapper`)
                }, a)
            }
            return e
        }(Gv(u) && !Xv(u) ? u : F.createElement("span", null, u), D), U = K.props,
        G = U.className && "string" != typeof U.className ? U.className : sd(U.className, a || `${D}-open`), [X, q] = Pk(D, !W),
        Y = Ik(D, s), Q = Y.arrowStyle, Z = Object.assign(Object.assign({}, c), Y.overlayStyle),
        J = sd(l, {[`${D}-rtl`]: "rtl" === E}, Y.className, A, q);
    return X(F.createElement(yk, Object.assign({}, H, {
        showArrow: w,
        placement: z,
        mouseEnterDelay: T,
        mouseLeaveDelay: _,
        prefixCls: D,
        overlayClassName: J,
        overlayStyle: Object.assign(Object.assign({}, Q), L),
        getTooltipContainer: j || i || C,
        ref: k,
        builtinPlacements: M,
        overlay: I,
        visible: V,
        onVisibleChange(t) {
            var n, r;
            P(!N && t), N || (null === (n = e.onOpenChange) || void 0 === n || n.call(e, t), null === (r = e.onVisibleChange) || void 0 === r || r.call(e, t))
        },
        afterVisibleChange: null != d ? d : f,
        overlayInnerStyle: Z,
        arrowContent: F.createElement("span", {className: `${D}-arrow-content`}),
        motion: {motionName: Uy(B, "zoom-big-fast", e.transitionName), motionDeadline: 1e3},
        destroyTooltipOnHide: !!p
    }), V ? qv(K, {className: G}) : K))
}));
zk._InternalPanelDoNotUseOrYouWillBeFired = e => {
    const {
            prefixCls: t,
            className: n,
            placement: r = "top",
            title: o,
            color: a,
            overlayInnerStyle: i
        } = e, {getPrefixCls: l} = F.useContext(Ug), s = l("tooltip", t), [c, u] = Pk(s, !0), d = Ik(s, a),
        f = d.arrowStyle, p = Object.assign(Object.assign({}, i), d.overlayStyle),
        m = sd(u, s, `${s}-pure`, `${s}-placement-${r}`, n, d.className);
    return c(F.createElement("div", {
        className: m,
        style: f
    }, F.createElement("div", {className: `${s}-arrow`}), F.createElement(hk, Object.assign({}, e, {
        className: u,
        prefixCls: s,
        overlayInnerStyle: p
    }), o)))
};
var Tk = Yv.ESC, _k = Yv.TAB, Lk = F.forwardRef(((e, t) => {
        var n = e.overlay, r = e.arrow, o = e.prefixCls, a = F.useMemo((() => "function" == typeof n ? n() : n), [n]),
            i = Gd(t, null == a ? void 0 : a.ref);
        return A.createElement(A.Fragment, null, r && A.createElement("div", {className: "".concat(o, "-arrow")}), A.cloneElement(a, {ref: qd(a) ? i : void 0}))
    })), Fk = {adjustX: 1, adjustY: 1}, Ak = [0, 0], Hk = {
        topLeft: {points: ["bl", "tl"], overflow: Fk, offset: [0, -4], targetOffset: Ak},
        top: {points: ["bc", "tc"], overflow: Fk, offset: [0, -4], targetOffset: Ak},
        topRight: {points: ["br", "tr"], overflow: Fk, offset: [0, -4], targetOffset: Ak},
        bottomLeft: {points: ["tl", "bl"], overflow: Fk, offset: [0, 4], targetOffset: Ak},
        bottom: {points: ["tc", "bc"], overflow: Fk, offset: [0, 4], targetOffset: Ak},
        bottomRight: {points: ["tr", "br"], overflow: Fk, offset: [0, 4], targetOffset: Ak}
    },
    Dk = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];

function Bk(e, t) {
    var n, r = e.arrow, o = void 0 !== r && r, a = e.prefixCls, i = void 0 === a ? "rc-dropdown" : a,
        l = e.transitionName, s = e.animation, c = e.align, u = e.placement, d = void 0 === u ? "bottomLeft" : u,
        f = e.placements, p = void 0 === f ? Hk : f, m = e.getPopupContainer, g = e.showAction, h = e.hideAction,
        v = e.overlayClassName, b = e.overlayStyle, y = e.visible, w = e.trigger, x = void 0 === w ? ["hover"] : w,
        C = e.autoFocus, S = e.overlay, E = e.children, k = e.onVisibleChange, $ = tp(e, Dk), O = Df(A.useState(), 2),
        P = O[0], N = O[1], M = "visible" in e ? y : P, R = A.useRef(null), I = A.useRef(null), j = A.useRef(null);
    A.useImperativeHandle(t, (() => R.current));
    var z = e => {
        N(e), null == k || k(e)
    };
    (e => {
        var t = e.visible, n = e.triggerRef, r = e.onVisibleChange, o = e.autoFocus, a = e.overlayRef, i = F.useRef(!1),
            l = () => {
                var e, o;
                t && (null === (e = n.current) || void 0 === e || null === (o = e.focus) || void 0 === o || o.call(e), null == r || r(!1))
            }, s = () => {
                var e;
                return !(null === (e = a.current) || void 0 === e || !e.focus || (a.current.focus(), i.current = !0, 0))
            }, c = e => {
                switch (e.keyCode) {
                    case Tk:
                        l();
                        break;
                    case _k:
                        var t = !1;
                        i.current || (t = s()), t ? e.preventDefault() : l()
                }
            };
        F.useEffect((() => t ? (window.addEventListener("keydown", c), o && Ff(s, 3), () => {
            window.removeEventListener("keydown", c), i.current = !1
        }) : () => {
            i.current = !1
        }), [t])
    })({visible: M, triggerRef: j, onVisibleChange: z, autoFocus: C, overlayRef: I});
    var T, _, L, H = () => A.createElement(Lk, {ref: I, overlay: S, prefixCls: i, arrow: o}), D = A.cloneElement(E, {
        className: sd(null === (n = E.props) || void 0 === n ? void 0 : n.className, M && (T = e.openClassName, void 0 !== T ? T : "".concat(i, "-open"))),
        ref: qd(E) ? Gd(j, E.ref) : void 0
    }), B = h;
    return B || -1 === x.indexOf("contextMenu") || (B = ["click"]), A.createElement(LS, cd({builtinPlacements: p}, $, {
        prefixCls: i,
        ref: R,
        popupClassName: sd(v, wd({}, "".concat(i, "-show-arrow"), o)),
        popupStyle: b,
        action: x,
        showAction: g,
        hideAction: B,
        popupPlacement: d,
        popupAlign: c,
        popupTransitionName: l,
        popupAnimation: s,
        popupVisible: M,
        stretch: (_ = e.minOverlayWidthMatchTrigger, L = e.alignPoint, ("minOverlayWidthMatchTrigger" in e ? _ : !L) ? "minWidth" : ""),
        popup: "function" == typeof S ? H : H(),
        onPopupVisibleChange: z,
        onPopupClick(t) {
            var n = e.onOverlayClick;
            N(!1), n && n(t)
        },
        getPopupContainer: m
    }), D)
}

const Wk = A.forwardRef(Bk);
var Vk = F.createContext(null);

function Kk(e, t) {
    return void 0 === e ? null : "".concat(e, "-").concat(t)
}

function Uk(e) {
    return Kk(F.useContext(Vk), e)
}

var Gk = ["children", "locked"], Xk = F.createContext(null);

function qk(e) {
    var t = e.children, n = e.locked, r = tp(e, Gk), o = F.useContext(Xk), a = Vd((() => {
        return e = r, t = Cd({}, o), Object.keys(e).forEach((n => {
            var r = e[n];
            void 0 !== r && (t[n] = r)
        })), t;
        var e, t
    }), [o, r], ((e, t) => !(n || e[0] === t[0] && np(e[1], t[1], !0))));
    return F.createElement(Xk.Provider, {value: a}, t)
}

var Yk = [], Qk = F.createContext(null);

function Zk() {
    return F.useContext(Qk)
}

var Jk = F.createContext(Yk);

function e$(e) {
    var t = F.useContext(Jk);
    return F.useMemo((() => void 0 !== e ? [].concat(If(t), [e]) : t), [t, e])
}

var t$ = F.createContext(null), n$ = F.createContext({});

function r$(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (_b(e)) {
        var n = e.nodeName.toLowerCase(),
            r = ["input", "select", "textarea", "button"].includes(n) || e.isContentEditable || "a" === n && !!e.getAttribute("href"),
            o = e.getAttribute("tabindex"), a = Number(o), i = null;
        return o && !Number.isNaN(a) ? i = a : r && null === i && (i = 0), r && e.disabled && (i = null), null !== i && (i >= 0 || t && i < 0)
    }
    return !1
}

var o$ = Yv.LEFT, a$ = Yv.RIGHT, i$ = Yv.UP, l$ = Yv.DOWN, s$ = Yv.ENTER, c$ = Yv.ESC, u$ = Yv.HOME, d$ = Yv.END,
    f$ = [i$, l$, o$, a$];

function p$(e, t) {
    var n = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = If(e.querySelectorAll("*")).filter((e => r$(e, t)));
        return r$(e, t) && n.unshift(e), n
    }(e, !0);
    return n.filter((e => t.has(e)))
}

function m$(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    if (!e) return null;
    var o = p$(e, t), a = o.length, i = o.findIndex((e => n === e));
    return r < 0 ? -1 === i ? i = a - 1 : i -= 1 : r > 0 && (i += 1), o[i = (i + a) % a]
}

var g$ = "__RC_UTIL_PATH_SPLIT__", h$ = e => e.join(g$), v$ = "rc-menu-more";

function b$(e) {
    var t = F.useRef(e);
    t.current = e;
    var n = F.useCallback((function () {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r))
    }), []);
    return e ? n : void 0
}

var y$ = Math.random().toFixed(5).toString().slice(2), w$ = 0;

function x$(e, t, n, r) {
    var o = F.useContext(Xk), a = o.activeKey, i = o.onActive, l = o.onInactive, s = {active: a === e};
    return t || (s.onMouseEnter = t => {
        null == n || n({key: e, domEvent: t}), i(e)
    }, s.onMouseLeave = t => {
        null == r || r({key: e, domEvent: t}), l(e)
    }), s
}

function C$(e) {
    var t = F.useContext(Xk), n = t.mode, r = t.rtl, o = t.inlineIndent;
    return "inline" !== n ? null : r ? {paddingRight: e * o} : {paddingLeft: e * o}
}

function S$(e) {
    var t = e.icon, n = e.props, r = e.children;
    return ("function" == typeof t ? F.createElement(t, Cd({}, n)) : t) || r || null
}

var E$ = ["item"];

function k$(e) {
    var t = e.item, n = tp(e, E$);
    return Object.defineProperty(n, "item", {get: () => (yd(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t)}), n
}

var $$ = ["title", "attribute", "elementRef"],
    O$ = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"],
    P$ = ["active"], N$ = function () {
        td(t, F.Component);
        var e = ad(t);

        function t() {
            return qu(this, t), e.apply(this, arguments)
        }

        return Ju(t, [{
            key: "render", value() {
                var e = this.props, t = e.title, n = e.attribute, r = e.elementRef,
                    o = Pf(tp(e, $$), ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
                return yd(!n, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), F.createElement(rS.Item, cd({}, n, {title: "string" == typeof t ? t : void 0}, o, {ref: r}))
            }
        }]), t
    }(), M$ = F.forwardRef(((e, t) => {
        var n, r = e.style, o = e.className, a = e.eventKey;
        e.warnKey;
        var i = e.disabled, l = e.itemIcon, s = e.children, c = e.role, u = e.onMouseEnter, d = e.onMouseLeave,
            f = e.onClick, p = e.onKeyDown, m = e.onFocus, g = tp(e, O$), h = Uk(a), v = F.useContext(Xk), b = v.prefixCls,
            y = v.onItemClick, w = v.disabled, x = v.overflowDisabled, C = v.itemIcon, S = v.selectedKeys, E = v.onActive,
            k = F.useContext(n$)._internalRenderMenuItem, $ = "".concat(b, "-item"), O = F.useRef(), P = F.useRef(),
            N = w || i, M = Xd(t, P), R = e$(a),
            I = e => ({key: a, keyPath: If(R).reverse(), item: O.current, domEvent: e}), j = l || C, z = x$(a, N, u, d),
            T = z.active, _ = tp(z, P$), L = S.includes(a), A = C$(R.length), H = {};
        "option" === e.role && (H["aria-selected"] = L);
        var D = F.createElement(N$, cd({
            ref: O,
            elementRef: M,
            role: null === c ? "none" : c || "menuitem",
            tabIndex: i ? null : -1,
            "data-menu-id": x && h ? null : h
        }, g, _, H, {
            component: "li",
            "aria-disabled": i,
            style: Cd(Cd({}, A), r),
            className: sd($, (n = {}, wd(n, "".concat($, "-active"), T), wd(n, "".concat($, "-selected"), L), wd(n, "".concat($, "-disabled"), N), n), o),
            onClick(e) {
                if (!N) {
                    var t = I(e);
                    null == f || f(k$(t)), y(t)
                }
            },
            onKeyDown(e) {
                if (null == p || p(e), e.which === Yv.ENTER) {
                    var t = I(e);
                    null == f || f(k$(t)), y(t)
                }
            },
            onFocus(e) {
                E(a), null == m || m(e)
            }
        }), s, F.createElement(S$, {props: Cd(Cd({}, e), {}, {isSelected: L}), icon: j}));
        return k && (D = k(D, e, {selected: L})), D
    }));

function R$(e, t) {
    var n = e.eventKey, r = Zk(), o = e$(n);
    return F.useEffect((() => {
        if (r) return r.registerPath(n, o), () => {
            r.unregisterPath(n, o)
        }
    }), [o]), r ? null : F.createElement(M$, cd({}, e, {ref: t}))
}

const I$ = F.forwardRef(R$);
var j$ = ["className", "children"], z$ = (e, t) => {
    var n = e.className, r = e.children, o = tp(e, j$), a = F.useContext(Xk), i = a.prefixCls, l = a.mode, s = a.rtl;
    return F.createElement("ul", cd({
        className: sd(i, s && "".concat(i, "-rtl"), "".concat(i, "-sub"), "".concat(i, "-").concat("inline" === l ? "inline" : "vertical"), n),
        role: "menu"
    }, o, {"data-menu-list": !0, ref: t}), r)
}, T$ = F.forwardRef(z$);

function _$(e, t) {
    return md(e).map(((e, n) => {
        if (F.isValidElement(e)) {
            var r, o, a = e.key,
                i = null !== (r = null === (o = e.props) || void 0 === o ? void 0 : o.eventKey) && void 0 !== r ? r : a;
            null == i && (i = "tmp_key-".concat([].concat(If(t), [n]).join("-")));
            var l = {key: i, eventKey: i};
            return F.cloneElement(e, l)
        }
        return e
    }))
}

T$.displayName = "SubMenuList";
var L$ = {adjustX: 1, adjustY: 1}, F$ = {
    topLeft: {points: ["bl", "tl"], overflow: L$},
    topRight: {points: ["br", "tr"], overflow: L$},
    bottomLeft: {points: ["tl", "bl"], overflow: L$},
    bottomRight: {points: ["tr", "br"], overflow: L$},
    leftTop: {points: ["tr", "tl"], overflow: L$},
    leftBottom: {points: ["br", "bl"], overflow: L$},
    rightTop: {points: ["tl", "tr"], overflow: L$},
    rightBottom: {points: ["bl", "br"], overflow: L$}
}, A$ = {
    topLeft: {points: ["bl", "tl"], overflow: L$},
    topRight: {points: ["br", "tr"], overflow: L$},
    bottomLeft: {points: ["tl", "bl"], overflow: L$},
    bottomRight: {points: ["tr", "br"], overflow: L$},
    rightTop: {points: ["tr", "tl"], overflow: L$},
    rightBottom: {points: ["br", "bl"], overflow: L$},
    leftTop: {points: ["tl", "tr"], overflow: L$},
    leftBottom: {points: ["bl", "br"], overflow: L$}
};

function H$(e, t, n) {
    return t || (n ? n[e] || n.other : void 0)
}

var D$ = {horizontal: "bottomLeft", vertical: "rightTop", "vertical-left": "rightTop", "vertical-right": "leftTop"};

function B$(e) {
    var t = e.prefixCls, n = e.visible, r = e.children, o = e.popup, a = e.popupClassName, i = e.popupOffset,
        l = e.disabled, s = e.mode, c = e.onVisibleChange, u = F.useContext(Xk), d = u.getPopupContainer, f = u.rtl,
        p = u.subMenuOpenDelay, m = u.subMenuCloseDelay, g = u.builtinPlacements, h = u.triggerSubMenuAction,
        v = u.forceSubMenuRender, b = u.rootClassName, y = u.motion, w = u.defaultMotions, x = Df(F.useState(!1), 2),
        C = x[0], S = x[1], E = Cd(Cd({}, f ? A$ : F$), g), k = D$[s], $ = H$(s, y, w), O = F.useRef($);
    "inline" !== s && (O.current = $);
    var P = Cd(Cd({}, O.current), {}, {leavedClassName: "".concat(t, "-hidden"), removeOnLeave: !1, motionAppear: !0}),
        N = F.useRef();
    return F.useEffect((() => (N.current = Ff((() => {
        S(n)
    })), () => {
        Ff.cancel(N.current)
    })), [n]), F.createElement(LS, {
        prefixCls: t,
        popupClassName: sd("".concat(t, "-popup"), wd({}, "".concat(t, "-rtl"), f), a, b),
        stretch: "horizontal" === s ? "minWidth" : null,
        getPopupContainer: d,
        builtinPlacements: E,
        popupPlacement: k,
        popupVisible: C,
        popup: o,
        popupAlign: i && {offset: i},
        action: l ? [] : [h],
        mouseEnterDelay: p,
        mouseLeaveDelay: m,
        onPopupVisibleChange: c,
        forceRender: v,
        popupMotion: P
    }, r)
}

function W$(e) {
    var t = e.id, n = e.open, r = e.keyPath, o = e.children, a = "inline", i = F.useContext(Xk), l = i.prefixCls,
        s = i.forceSubMenuRender, c = i.motion, u = i.defaultMotions, d = i.mode, f = F.useRef(!1);
    f.current = d === a;
    var p = Df(F.useState(!f.current), 2), m = p[0], g = p[1], h = !!f.current && n;
    F.useEffect((() => {
        f.current && g(!1)
    }), [d]);
    var v = Cd({}, H$(a, c, u));
    r.length > 1 && (v.motionAppear = !1);
    var b = v.onVisibleChanged;
    return v.onVisibleChanged = e => (f.current || e || g(!0), null == b ? void 0 : b(e)), m ? null : F.createElement(qk, {
        mode: a,
        locked: !f.current
    }, F.createElement(qh, cd({visible: h}, v, {
        forceRender: s,
        removeOnLeave: !1,
        leavedClassName: "".concat(l, "-hidden")
    }), (e => {
        var n = e.className, r = e.style;
        return F.createElement(T$, {id: t, className: n, style: r}, o)
    })))
}

var V$ = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"],
    K$ = ["active"], U$ = e => {
        var t, n = e.style, r = e.className, o = e.title, a = e.eventKey;
        e.warnKey;
        var i = e.disabled, l = e.internalPopupClose, s = e.children, c = e.itemIcon, u = e.expandIcon,
            d = e.popupClassName, f = e.popupOffset, p = e.onClick, m = e.onMouseEnter, g = e.onMouseLeave,
            h = e.onTitleClick, v = e.onTitleMouseEnter, b = e.onTitleMouseLeave, y = tp(e, V$), w = Uk(a),
            x = F.useContext(Xk), C = x.prefixCls, S = x.mode, E = x.openKeys, k = x.disabled, $ = x.overflowDisabled,
            O = x.activeKey, P = x.selectedKeys, N = x.itemIcon, M = x.expandIcon, R = x.onItemClick, I = x.onOpenChange,
            j = x.onActive, z = F.useContext(n$)._internalRenderSubMenuItem, T = F.useContext(t$).isSubPathKey, _ = e$(),
            L = "".concat(C, "-submenu"), A = k || i, H = F.useRef(), D = F.useRef(), B = c || N, W = u || M,
            V = E.includes(a), K = !$ && V, U = T(P, a), G = x$(a, A, v, b), X = G.active, q = tp(G, K$),
            Y = Df(F.useState(!1), 2), Q = Y[0], Z = Y[1], J = e => {
                A || Z(e)
            }, ee = F.useMemo((() => X || "inline" !== S && (Q || T([O], a))), [S, X, O, Q, a, T]), te = C$(_.length),
            ne = b$((e => {
                null == p || p(k$(e)), R(e)
            })), re = w && "".concat(w, "-popup"), oe = F.createElement("div", cd({
                role: "menuitem",
                style: te,
                className: "".concat(L, "-title"),
                tabIndex: A ? null : -1,
                ref: H,
                title: "string" == typeof o ? o : null,
                "data-menu-id": $ && w ? null : w,
                "aria-expanded": K,
                "aria-haspopup": !0,
                "aria-controls": re,
                "aria-disabled": A,
                onClick(e) {
                    A || (null == h || h({key: a, domEvent: e}), "inline" === S && I(a, !V))
                },
                onFocus() {
                    j(a)
                }
            }, q), o, F.createElement(S$, {
                icon: "horizontal" !== S ? W : null,
                props: Cd(Cd({}, e), {}, {isOpen: K, isSubMenu: !0})
            }, F.createElement("i", {className: "".concat(L, "-arrow")}))), ae = F.useRef(S);
        if ("inline" !== S && _.length > 1 ? ae.current = "vertical" : ae.current = S, !$) {
            var ie = ae.current;
            oe = F.createElement(B$, {
                mode: ie,
                prefixCls: L,
                visible: !l && K && "inline" !== S,
                popupClassName: d,
                popupOffset: f,
                popup: F.createElement(qk, {mode: "horizontal" === ie ? "vertical" : ie}, F.createElement(T$, {
                    id: re,
                    ref: D
                }, s)),
                disabled: A,
                onVisibleChange(e) {
                    "inline" !== S && I(a, e)
                }
            }, oe)
        }
        var le = F.createElement(rS.Item, cd({role: "none"}, y, {
            component: "li",
            style: n,
            className: sd(L, "".concat(L, "-").concat(S), r, (t = {}, wd(t, "".concat(L, "-open"), K), wd(t, "".concat(L, "-active"), ee), wd(t, "".concat(L, "-selected"), U), wd(t, "".concat(L, "-disabled"), A), t)),
            onMouseEnter(e) {
                J(!0), null == m || m({key: a, domEvent: e})
            },
            onMouseLeave(e) {
                J(!1), null == g || g({key: a, domEvent: e})
            }
        }), oe, !$ && F.createElement(W$, {id: re, open: K, keyPath: _}, s));
        return z && (le = z(le, e, {selected: U, active: ee, open: K, disabled: A})), F.createElement(qk, {
            onItemClick: ne,
            mode: "horizontal" === S ? "vertical" : S,
            itemIcon: B,
            expandIcon: W
        }, le)
    };

function G$(e) {
    var t, n = e.eventKey, r = e.children, o = e$(n), a = _$(r, o), i = Zk();
    return F.useEffect((() => {
        if (i) return i.registerPath(n, o), () => {
            i.unregisterPath(n, o)
        }
    }), [o]), t = i ? a : F.createElement(U$, e, a), F.createElement(Jk.Provider, {value: o}, t)
}

var X$ = ["className", "title", "eventKey", "children"], q$ = ["children"], Y$ = e => {
    var t = e.className, n = e.title;
    e.eventKey;
    var r = e.children, o = tp(e, X$), a = F.useContext(Xk).prefixCls, i = "".concat(a, "-item-group");
    return F.createElement("li", cd({role: "presentation"}, o, {
        onClick: e => e.stopPropagation(),
        className: sd(i, t)
    }), F.createElement("div", {
        role: "presentation",
        className: "".concat(i, "-title"),
        title: "string" == typeof n ? n : void 0
    }, n), F.createElement("ul", {role: "group", className: "".concat(i, "-list")}, r))
};

function Q$(e) {
    var t = e.children, n = tp(e, q$), r = _$(t, e$(n.eventKey));
    return Zk() ? r : F.createElement(Y$, Pf(n, ["warnKey"]), r)
}

function Z$(e) {
    var t = e.className, n = e.style, r = F.useContext(Xk).prefixCls;
    return Zk() ? null : F.createElement("li", {className: sd("".concat(r, "-item-divider"), t), style: n})
}

var J$ = ["label", "children", "key", "type"];

function eO(e) {
    return (e || []).map(((e, t) => {
        if (e && "object" === Yu(e)) {
            var n = e, r = n.label, o = n.children, a = n.key, i = n.type, l = tp(n, J$),
                s = null != a ? a : "tmp-".concat(t);
            return o || "group" === i ? "group" === i ? F.createElement(Q$, cd({key: s}, l, {title: r}), eO(o)) : F.createElement(G$, cd({key: s}, l, {title: r}), eO(o)) : "divider" === i ? F.createElement(Z$, cd({key: s}, l)) : F.createElement(I$, cd({key: s}, l), r)
        }
        return null
    })).filter((e => e))
}

function tO(e, t, n) {
    var r = e;
    return t && (r = eO(t)), _$(r, n)
}

var nO = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"],
    rO = [], oO = F.forwardRef(((e, t) => {
        var n, r, o = e, a = o.prefixCls, i = void 0 === a ? "rc-menu" : a, l = o.rootClassName, s = o.style,
            c = o.className, u = o.tabIndex, d = void 0 === u ? 0 : u, f = o.items, p = o.children, m = o.direction,
            g = o.id, h = o.mode, v = void 0 === h ? "vertical" : h, b = o.inlineCollapsed, y = o.disabled,
            w = o.disabledOverflow, x = o.subMenuOpenDelay, C = void 0 === x ? .1 : x, S = o.subMenuCloseDelay,
            E = void 0 === S ? .1 : S, k = o.forceSubMenuRender, $ = o.defaultOpenKeys, O = o.openKeys, P = o.activeKey,
            N = o.defaultActiveFirst, M = o.selectable, R = void 0 === M || M, I = o.multiple, j = void 0 !== I && I,
            z = o.defaultSelectedKeys, T = o.selectedKeys, _ = o.onSelect, L = o.onDeselect, A = o.inlineIndent,
            H = void 0 === A ? 24 : A, D = o.motion, B = o.defaultMotions, W = o.triggerSubMenuAction,
            V = void 0 === W ? "hover" : W, K = o.builtinPlacements, U = o.itemIcon, G = o.expandIcon,
            X = o.overflowedIndicator, q = void 0 === X ? "..." : X, Y = o.overflowedIndicatorPopupClassName,
            Q = o.getPopupContainer, Z = o.onClick, J = o.onOpenChange, ee = o.onKeyDown;
        o.openAnimation, o.openTransitionName;
        var te = o._internalRenderMenuItem, ne = o._internalRenderSubMenuItem, re = tp(o, nO),
            oe = F.useMemo((() => tO(p, f, rO)), [p, f]), ae = Df(F.useState(!1), 2), ie = ae[0], le = ae[1],
            se = F.useRef(), ce = (e => {
                var t = Df(Vg(e, {value: e}), 2), n = t[0], r = t[1];
                return F.useEffect((() => {
                    w$ += 1;
                    var e = "".concat(y$, "-").concat(w$);
                    r("rc-menu-uuid-".concat(e))
                }), []), n
            })(g), ue = "rtl" === m, de = Df(Vg($, {value: O, postState: e => e || rO}), 2), fe = de[0], pe = de[1],
            me = function (e) {
                function t() {
                    pe(e), null == J || J(e)
                }

                arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? Uu.flushSync(t) : t()
            }, ge = Df(F.useState(fe), 2), he = ge[0], ve = ge[1], be = F.useRef(!1),
            ye = Df(F.useMemo((() => "inline" !== v && "vertical" !== v || !b ? [v, !1] : ["vertical", b]), [v, b]), 2),
            we = ye[0], xe = ye[1], Ce = "inline" === we, Se = Df(F.useState(we), 2), Ee = Se[0], ke = Se[1],
            $e = Df(F.useState(xe), 2), Oe = $e[0], Pe = $e[1];
        F.useEffect((() => {
            ke(we), Pe(xe), be.current && (Ce ? pe(he) : me(rO))
        }), [we, xe]);
        var Ne = Df(F.useState(0), 2), Me = Ne[0], Re = Ne[1], Ie = Me >= oe.length - 1 || "horizontal" !== Ee || w;
        F.useEffect((() => {
            Ce && ve(fe)
        }), [fe]), F.useEffect((() => (be.current = !0, () => {
            be.current = !1
        })), []);
        var je = function () {
                var e = Df(F.useState({}), 2)[1], t = F.useRef(new Map), n = F.useRef(new Map), r = Df(F.useState([]), 2),
                    o = r[0], a = r[1], i = F.useRef(0), l = F.useRef(!1), s = F.useCallback(((r, o) => {
                        var a = h$(o);
                        n.current.set(a, r), t.current.set(r, a), i.current += 1;
                        var s, c = i.current;
                        s = () => {
                            c === i.current && (l.current || e({}))
                        }, Promise.resolve().then(s)
                    }), []), c = F.useCallback(((e, r) => {
                        var o = h$(r);
                        n.current.delete(o), t.current.delete(e)
                    }), []), u = F.useCallback((e => {
                        a(e)
                    }), []), d = F.useCallback(((e, n) => {
                        var r = (t.current.get(e) || "").split(g$);
                        return n && o.includes(r[0]) && r.unshift(v$), r
                    }), [o]), f = F.useCallback(((e, t) => e.some((e => d(e, !0).includes(t)))), [d]), p = F.useCallback((e => {
                        var r = "".concat(t.current.get(e)).concat(g$), o = new Set;
                        return If(n.current.keys()).forEach((e => {
                            e.startsWith(r) && o.add(n.current.get(e))
                        })), o
                    }), []);
                return F.useEffect((() => () => {
                    l.current = !0
                }), []), {
                    registerPath: s,
                    unregisterPath: c,
                    refreshOverflowKeys: u,
                    isSubPathKey: f,
                    getKeyPath: d,
                    getKeys() {
                        var e = If(t.current.keys());
                        return o.length && e.push(v$), e
                    },
                    getSubPathKeys: p
                }
            }(), ze = je.registerPath, Te = je.unregisterPath, _e = je.refreshOverflowKeys, Le = je.isSubPathKey,
            Fe = je.getKeyPath, Ae = je.getKeys, He = je.getSubPathKeys,
            De = F.useMemo((() => ({registerPath: ze, unregisterPath: Te})), [ze, Te]),
            Be = F.useMemo((() => ({isSubPathKey: Le})), [Le]);
        F.useEffect((() => {
            _e(Ie ? rO : oe.slice(Me + 1).map((e => e.key)))
        }), [Me, Ie]);
        var We = Df(Vg(P || N && (null === (n = oe[0]) || void 0 === n ? void 0 : n.key), {value: P}), 2), Ve = We[0],
            Ke = We[1], Ue = b$((e => {
                Ke(e)
            })), Ge = b$((() => {
                Ke(void 0)
            }));
        F.useImperativeHandle(t, (() => ({
            list: se.current, focus(e) {
                var t, n, r, o,
                    a = null != Ve ? Ve : null === (t = oe.find((e => !e.props.disabled))) || void 0 === t ? void 0 : t.key;
                a && (null === (n = se.current) || void 0 === n || null === (r = n.querySelector("li[data-menu-id='".concat(Kk(ce, a), "']"))) || void 0 === r || null === (o = r.focus) || void 0 === o || o.call(r, e))
            }
        })));
        var Xe = Df(Vg(z || [], {value: T, postState: e => Array.isArray(e) ? e : null == e ? rO : [e]}), 2), qe = Xe[0],
            Ye = Xe[1], Qe = b$((e => {
                null == Z || Z(k$(e)), (e => {
                    if (R) {
                        var t, n = e.key, r = qe.includes(n);
                        t = j ? r ? qe.filter((e => e !== n)) : [].concat(If(qe), [n]) : [n], Ye(t);
                        var o = Cd(Cd({}, e), {}, {selectedKeys: t});
                        r ? null == L || L(o) : null == _ || _(o)
                    }
                    !j && fe.length && "inline" !== Ee && me(rO)
                })(e)
            })), Ze = b$(((e, t) => {
                var n = fe.filter((t => t !== e));
                if (t) n.push(e); else if ("inline" !== Ee) {
                    var r = He(e);
                    n = n.filter((e => !r.has(e)))
                }
                np(fe, n, !0) || me(n, !0)
            })), Je = function (e, t, n, r, o, a, i, l, s, c) {
                var u = F.useRef(), d = F.useRef();
                d.current = t;
                var f = () => {
                    Ff.cancel(u.current)
                };
                return F.useEffect((() => () => {
                    f()
                }), []), p => {
                    var m = p.which;
                    if ([].concat(f$, [s$, c$, u$, d$]).includes(m)) {
                        var g, h, v, b = () => (g = new Set, h = new Map, v = new Map, a().forEach((e => {
                            var t = document.querySelector("[data-menu-id='".concat(Kk(r, e), "']"));
                            t && (g.add(t), v.set(t, e), h.set(e, t))
                        })), g);
                        b();
                        var y = ((e, t) => {
                            for (var n = e || document.activeElement; n;) {
                                if (t.has(n)) return n;
                                n = n.parentElement
                            }
                            return null
                        })(h.get(t), g), w = v.get(y), x = ((e, t, n, r) => {
                            var o, a, i, l, s = "prev", c = "next", u = "children", d = "parent";
                            if ("inline" === e && r === s$) return {inlineTrigger: !0};
                            var f = (wd(o = {}, i$, s), wd(o, l$, c), o),
                                p = (wd(a = {}, o$, n ? c : s), wd(a, a$, n ? s : c), wd(a, l$, u), wd(a, s$, u), a),
                                m = (wd(i = {}, i$, s), wd(i, l$, c), wd(i, s$, u), wd(i, c$, d), wd(i, o$, n ? u : d), wd(i, a$, n ? d : u), i);
                            switch (null === (l = {
                                inline: f,
                                horizontal: p,
                                vertical: m,
                                inlineSub: f,
                                horizontalSub: m,
                                verticalSub: m
                            }["".concat(e).concat(t ? "" : "Sub")]) || void 0 === l ? void 0 : l[r]) {
                                case s:
                                    return {offset: -1, sibling: !0};
                                case c:
                                    return {offset: 1, sibling: !0};
                                case d:
                                    return {offset: -1, sibling: !1};
                                case u:
                                    return {offset: 1, sibling: !1};
                                default:
                                    return null
                            }
                        })(e, 1 === i(w, !0).length, n, m);
                        if (!x && m !== u$ && m !== d$) return;
                        (f$.includes(m) || [u$, d$].includes(m)) && p.preventDefault();
                        var C = e => {
                            if (e) {
                                var t = e, n = e.querySelector("a");
                                null != n && n.getAttribute("href") && (t = n);
                                var r = v.get(e);
                                l(r), f(), u.current = Ff((() => {
                                    d.current === r && t.focus()
                                }))
                            }
                        };
                        if ([u$, d$].includes(m) || x.sibling || !y) {
                            var S, E, k = p$(S = y && "inline" !== e ? (e => {
                                for (var t = e; t;) {
                                    if (t.getAttribute("data-menu-list")) return t;
                                    t = t.parentElement
                                }
                                return null
                            })(y) : o.current, g);
                            E = m === u$ ? k[0] : m === d$ ? k[k.length - 1] : m$(S, g, y, x.offset), C(E)
                        } else if (x.inlineTrigger) s(w); else if (x.offset > 0) s(w, !0), f(), u.current = Ff((() => {
                            b();
                            var e = y.getAttribute("aria-controls"), t = m$(document.getElementById(e), g);
                            C(t)
                        }), 5); else if (x.offset < 0) {
                            var $ = i(w, !0), O = $[$.length - 2], P = h.get(O);
                            s(O, !1), C(P)
                        }
                    }
                    null == c || c(p)
                }
            }(Ee, Ve, ue, ce, se, Ae, Fe, Ke, ((e, t) => {
                var n = null != t ? t : !fe.includes(e);
                Ze(e, n)
            }), ee);
        F.useEffect((() => {
            le(!0)
        }), []);
        var et = F.useMemo((() => ({_internalRenderMenuItem: te, _internalRenderSubMenuItem: ne})), [te, ne]),
            tt = "horizontal" !== Ee || w ? oe : oe.map(((e, t) => F.createElement(qk, {
                key: e.key,
                overflowDisabled: t > Me
            }, e))), nt = F.createElement(rS, cd({
                id: g,
                ref: se,
                prefixCls: "".concat(i, "-overflow"),
                component: "ul",
                itemComponent: I$,
                className: sd(i, "".concat(i, "-root"), "".concat(i, "-").concat(Ee), c, (r = {}, wd(r, "".concat(i, "-inline-collapsed"), Oe), wd(r, "".concat(i, "-rtl"), ue), r), l),
                dir: m,
                style: s,
                role: "menu",
                tabIndex: d,
                data: tt,
                renderRawItem: e => e,
                renderRawRest(e) {
                    var t = e.length, n = t ? oe.slice(-t) : null;
                    return F.createElement(G$, {
                        eventKey: v$,
                        title: q,
                        disabled: Ie,
                        internalPopupClose: 0 === t,
                        popupClassName: Y
                    }, n)
                },
                maxCount: "horizontal" !== Ee || w ? rS.INVALIDATE : rS.RESPONSIVE,
                ssr: "full",
                "data-menu-list": !0,
                onVisibleChange(e) {
                    Re(e)
                },
                onKeyDown: Je
            }, re));
        return F.createElement(n$.Provider, {value: et}, F.createElement(Vk.Provider, {value: ce}, F.createElement(qk, {
            prefixCls: i,
            rootClassName: l,
            mode: Ee,
            openKeys: fe,
            rtl: ue,
            disabled: y,
            motion: ie ? D : null,
            defaultMotions: ie ? B : null,
            activeKey: Ve,
            onActive: Ue,
            onInactive: Ge,
            selectedKeys: qe,
            inlineIndent: H,
            subMenuOpenDelay: C,
            subMenuCloseDelay: E,
            forceSubMenuRender: k,
            builtinPlacements: K,
            triggerSubMenuAction: V,
            getPopupContainer: Q,
            itemIcon: U,
            expandIcon: G,
            onItemClick: Qe,
            onOpenChange: Ze
        }, F.createElement(t$.Provider, {value: Be}, nt), F.createElement("div", {
            style: {display: "none"},
            "aria-hidden": !0
        }, F.createElement(Qk.Provider, {value: De}, oe)))))
    }));
oO.Item = I$, oO.SubMenu = G$, oO.ItemGroup = Q$, oO.Divider = Z$;
var aO = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}
        }]
    }, name: "ellipsis", theme: "outlined"
}, iO = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: aO})), lO = F.forwardRef(iO);
const sO = e => ({borderColor: e.inputBorderHoverColor, borderInlineEndWidth: e.lineWidth}), cO = e => ({
        borderColor: e.inputBorderHoverColor,
        boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
        borderInlineEndWidth: e.lineWidth,
        outline: 0
    }), uO = e => ({
        color: e.colorTextDisabled,
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 1,
        "&:hover": Object.assign({}, sO(rh(e, {inputBorderHoverColor: e.colorBorder})))
    }), dO = e => {
        const {
            inputPaddingVerticalLG: t,
            fontSizeLG: n,
            lineHeightLG: r,
            borderRadiusLG: o,
            inputPaddingHorizontalLG: a
        } = e;
        return {padding: `${t}px ${a}px`, fontSize: n, lineHeight: r, borderRadius: o}
    }, fO = e => ({
        padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
        borderRadius: e.borderRadiusSM
    }), pO = (e, t) => {
        const {
            componentCls: n,
            colorError: r,
            colorWarning: o,
            colorErrorOutline: a,
            colorWarningOutline: i,
            colorErrorBorderHover: l,
            colorWarningBorderHover: s
        } = e;
        return {
            [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
                borderColor: r,
                "&:hover": {borderColor: l},
                "&:focus, &-focused": Object.assign({}, cO(rh(e, {
                    inputBorderActiveColor: r,
                    inputBorderHoverColor: r,
                    controlOutline: a
                }))),
                [`${n}-prefix, ${n}-suffix`]: {color: r}
            },
            [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
                borderColor: o,
                "&:hover": {borderColor: s},
                "&:focus, &-focused": Object.assign({}, cO(rh(e, {
                    inputBorderActiveColor: o,
                    inputBorderHoverColor: o,
                    controlOutline: i
                }))),
                [`${n}-prefix, ${n}-suffix`]: {color: o}
            }
        }
    }, mO = e => Object.assign(Object.assign({
        position: "relative",
        display: "inline-block",
        width: "100%",
        minWidth: 0,
        padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
        color: e.colorText,
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        backgroundColor: e.colorBgContainer,
        backgroundImage: "none",
        borderWidth: e.lineWidth,
        borderStyle: e.lineType,
        borderColor: e.colorBorder,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationMid}`
    }, {
        "&::-moz-placeholder": {opacity: 1},
        "&::placeholder": {color: e.colorTextPlaceholder, userSelect: "none"},
        "&:placeholder-shown": {textOverflow: "ellipsis"}
    }), {
        "&:hover": Object.assign({}, sO(e)),
        "&:focus, &-focused": Object.assign({}, cO(e)),
        "&-disabled, &[disabled]": Object.assign({}, uO(e)),
        "&-borderless": {
            "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
            }
        },
        "textarea&": {
            maxWidth: "100%",
            height: "auto",
            minHeight: e.controlHeight,
            lineHeight: e.lineHeight,
            verticalAlign: "bottom",
            transition: `all ${e.motionDurationSlow}, height 0s`,
            resize: "vertical"
        },
        "&-lg": Object.assign({}, dO(e)),
        "&-sm": Object.assign({}, fO(e)),
        "&-rtl": {direction: "rtl"},
        "&-textarea-rtl": {direction: "rtl"}
    }), gO = e => {
        const {componentCls: t, antCls: n} = e;
        return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {paddingInlineEnd: e.paddingXS, "&:last-child": {paddingInlineEnd: 0}},
            [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, dO(e)),
            [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, fO(e)),
            [`&-lg ${n}-select-single ${n}-select-selector`]: {height: e.controlHeightLG},
            [`&-sm ${n}-select-single ${n}-select-selector`]: {height: e.controlHeightSM},
            [`> ${t}`]: {display: "table-cell", "&:not(:first-child):not(:last-child)": {borderRadius: 0}},
            [`${t}-group`]: {
                "&-addon, &-wrap": {
                    display: "table-cell",
                    width: 1,
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                    "&:not(:first-child):not(:last-child)": {borderRadius: 0}
                },
                "&-wrap > *": {display: "block !important"},
                "&-addon": {
                    position: "relative",
                    padding: `0 ${e.inputPaddingHorizontal}px`,
                    color: e.colorText,
                    fontWeight: "normal",
                    fontSize: e.fontSize,
                    textAlign: "center",
                    backgroundColor: e.colorFillAlter,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadius,
                    transition: `all ${e.motionDurationSlow}`,
                    lineHeight: 1,
                    [`${n}-select`]: {
                        margin: `-${e.inputPaddingVertical + 1}px -${e.inputPaddingHorizontal}px`,
                        [`&${n}-select-single:not(${n}-select-customize-input)`]: {
                            [`${n}-select-selector`]: {
                                backgroundColor: "inherit",
                                border: `${e.lineWidth}px ${e.lineType} transparent`,
                                boxShadow: "none"
                            }
                        },
                        "&-open, &-focused": {[`${n}-select-selector`]: {color: e.colorPrimary}}
                    },
                    [`${n}-cascader-picker`]: {
                        margin: `-9px -${e.inputPaddingHorizontal}px`,
                        backgroundColor: "transparent",
                        [`${n}-cascader-input`]: {textAlign: "start", border: 0, boxShadow: "none"}
                    }
                },
                "&-addon:first-child": {borderInlineEnd: 0},
                "&-addon:last-child": {borderInlineStart: 0}
            },
            [`${t}`]: {
                width: "100%",
                marginBottom: 0,
                textAlign: "inherit",
                "&:focus": {zIndex: 1, borderInlineEndWidth: 1},
                "&:hover": {zIndex: 1, borderInlineEndWidth: 1, [`${t}-search-with-button &`]: {zIndex: 0}}
            },
            [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                [`${n}-select ${n}-select-selector`]: {borderStartEndRadius: 0, borderEndEndRadius: 0}
            },
            [`> ${t}-affix-wrapper`]: {
                [`&:not(:first-child) ${t}`]: {borderStartStartRadius: 0, borderEndStartRadius: 0},
                [`&:not(:last-child) ${t}`]: {borderStartEndRadius: 0, borderEndEndRadius: 0}
            },
            [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
                [`${n}-select ${n}-select-selector`]: {borderStartStartRadius: 0, borderEndStartRadius: 0}
            },
            [`${t}-affix-wrapper`]: {
                "&:not(:last-child)": {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                    [`${t}-search &`]: {borderStartStartRadius: e.borderRadius, borderEndStartRadius: e.borderRadius}
                },
                [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&${t}-group-compact`]: Object.assign(Object.assign({display: "block"}, {
                "&::before": {
                    display: "table",
                    content: '""'
                }, "&::after": {display: "table", clear: "both", content: '""'}
            }), {
                [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
                    "&:not(:first-child):not(:last-child)": {
                        borderInlineEndWidth: e.lineWidth,
                        "&:hover": {zIndex: 1},
                        "&:focus": {zIndex: 1}
                    }
                },
                "& > *": {display: "inline-block", float: "none", verticalAlign: "top", borderRadius: 0},
                [`\n        & > ${t}-affix-wrapper,\n        & > ${t}-number-affix-wrapper,\n        & > ${n}-picker-range\n      `]: {display: "inline-flex"},
                "& > *:not(:last-child)": {marginInlineEnd: -e.lineWidth, borderInlineEndWidth: e.lineWidth},
                [`${t}`]: {float: "none"},
                [`& > ${n}-select > ${n}-select-selector,\n      & > ${n}-select-auto-complete ${t},\n      & > ${n}-cascader-picker ${t},\n      & > ${t}-group-wrapper ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderRadius: 0,
                    "&:hover": {zIndex: 1},
                    "&:focus": {zIndex: 1}
                },
                [`& > ${n}-select-focused`]: {zIndex: 1},
                [`& > ${n}-select > ${n}-select-arrow`]: {zIndex: 1},
                [`& > *:first-child,\n      & > ${n}-select:first-child > ${n}-select-selector,\n      & > ${n}-select-auto-complete:first-child ${t},\n      & > ${n}-cascader-picker:first-child ${t}`]: {
                    borderStartStartRadius: e.borderRadius,
                    borderEndStartRadius: e.borderRadius
                },
                [`& > *:last-child,\n      & > ${n}-select:last-child > ${n}-select-selector,\n      & > ${n}-cascader-picker:last-child ${t},\n      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderStartEndRadius: e.borderRadius,
                    borderEndEndRadius: e.borderRadius
                },
                [`& > ${n}-select-auto-complete ${t}`]: {verticalAlign: "top"},
                [`${t}-group-wrapper + ${t}-group-wrapper`]: {
                    marginInlineStart: -e.lineWidth,
                    [`${t}-affix-wrapper`]: {borderRadius: 0}
                },
                [`${t}-group-wrapper:not(:last-child)`]: {
                    [`&${t}-search > ${t}-group`]: {
                        [`& > ${t}-group-addon > ${t}-search-button`]: {borderRadius: 0},
                        [`& > ${t}`]: {
                            borderStartStartRadius: e.borderRadius,
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0,
                            borderEndStartRadius: e.borderRadius
                        }
                    }
                }
            })
        }
    }, hO = e => {
        const {componentCls: t, controlHeightSM: n, lineWidth: r} = e, o = (n - 2 * r - 16) / 2;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yg(e)), mO(e)), pO(e, t)), {
                '&[type="color"]': {
                    height: e.controlHeight,
                    [`&${t}-lg`]: {height: e.controlHeightLG},
                    [`&${t}-sm`]: {height: n, paddingTop: o, paddingBottom: o}
                },
                '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {"-webkit-appearance": "none"}
            })
        }
    }, vO = e => {
        const {componentCls: t} = e;
        return {
            [`${t}-clear-icon`]: {
                margin: 0,
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                verticalAlign: -1,
                cursor: "pointer",
                transition: `color ${e.motionDurationSlow}`,
                "&:hover": {color: e.colorTextTertiary},
                "&:active": {color: e.colorText},
                "&-hidden": {visibility: "hidden"},
                "&-has-suffix": {margin: `0 ${e.inputAffixPadding}px`}
            }
        }
    }, bO = e => {
        const {
            componentCls: t,
            inputAffixPadding: n,
            colorTextDescription: r,
            motionDurationSlow: o,
            colorIcon: a,
            colorIconHover: i,
            iconCls: l
        } = e;
        return {
            [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mO(e)), {
                display: "inline-flex",
                [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, sO(e)), {
                    zIndex: 1,
                    [`${t}-search-with-button &`]: {zIndex: 0}
                }),
                "&-focused, &:focus": {zIndex: 1},
                "&-disabled": {[`${t}[disabled]`]: {background: "transparent"}},
                [`> input${t}`]: {
                    padding: 0,
                    fontSize: "inherit",
                    border: "none",
                    borderRadius: 0,
                    outline: "none",
                    "&::-ms-reveal": {display: "none"},
                    "&:focus": {boxShadow: "none !important"}
                },
                "&::before": {display: "inline-block", width: 0, visibility: "hidden", content: '"\\a0"'},
                [`${t}`]: {
                    "&-prefix, &-suffix": {
                        display: "flex",
                        flex: "none",
                        alignItems: "center",
                        "> *:not(:last-child)": {marginInlineEnd: e.paddingXS}
                    },
                    "&-show-count-suffix": {color: r},
                    "&-show-count-has-suffix": {marginInlineEnd: e.paddingXXS},
                    "&-prefix": {marginInlineEnd: n},
                    "&-suffix": {marginInlineStart: n}
                }
            }), vO(e)), {
                [`${l}${t}-password-icon`]: {
                    color: a,
                    cursor: "pointer",
                    transition: `all ${o}`,
                    "&:hover": {color: i}
                }
            }), pO(e, `${t}-affix-wrapper`))
        }
    }, yO = e => {
        const {componentCls: t, colorError: n, colorWarning: r, borderRadiusLG: o, borderRadiusSM: a} = e;
        return {
            [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Yg(e)), gO(e)), {
                "&-rtl": {direction: "rtl"},
                "&-wrapper": {
                    display: "inline-block",
                    width: "100%",
                    textAlign: "start",
                    verticalAlign: "top",
                    "&-rtl": {direction: "rtl"},
                    "&-lg": {[`${t}-group-addon`]: {borderRadius: o, fontSize: e.fontSizeLG}},
                    "&-sm": {[`${t}-group-addon`]: {borderRadius: a}},
                    "&-status-error": {[`${t}-group-addon`]: {color: n, borderColor: n}},
                    "&-status-warning": {[`${t}-group-addon`]: {color: r, borderColor: r}},
                    "&-disabled": {[`${t}-group-addon`]: Object.assign({}, uO(e))},
                    [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {[`${t}, ${t}-group-addon`]: {borderRadius: 0}},
                    [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                        [`${t}, ${t}-group-addon`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                        [`${t}, ${t}-group-addon`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                }
            })
        }
    }, wO = e => {
        const {componentCls: t, antCls: n} = e, r = `${t}-search`;
        return {
            [r]: {
                [`${t}`]: {
                    "&:hover, &:focus": {
                        borderColor: e.colorPrimaryHover,
                        [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {borderInlineStartColor: e.colorPrimaryHover}
                    }
                },
                [`${t}-affix-wrapper`]: {borderRadius: 0},
                [`${t}-lg`]: {lineHeight: e.lineHeightLG - 2e-4},
                [`> ${t}-group`]: {
                    [`> ${t}-group-addon:last-child`]: {
                        insetInlineStart: -1,
                        padding: 0,
                        border: 0,
                        [`${r}-button`]: {
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderStartStartRadius: 0,
                            borderStartEndRadius: e.borderRadius,
                            borderEndEndRadius: e.borderRadius,
                            borderEndStartRadius: 0
                        },
                        [`${r}-button:not(${n}-btn-primary)`]: {
                            color: e.colorTextDescription,
                            "&:hover": {color: e.colorPrimaryHover},
                            "&:active": {color: e.colorPrimaryActive},
                            [`&${n}-btn-loading::before`]: {
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                insetBlockStart: 0,
                                insetBlockEnd: 0
                            }
                        }
                    }
                },
                [`${r}-button`]: {height: e.controlHeight, "&:hover, &:focus": {zIndex: 1}},
                [`&-large ${r}-button`]: {height: e.controlHeightLG},
                [`&-small ${r}-button`]: {height: e.controlHeightSM},
                "&-rtl": {direction: "rtl"},
                [`&${t}-compact-item`]: {
                    [`&:not(${t}-compact-last-item)`]: {
                        [`${t}-group-addon`]: {
                            [`${t}-search-button`]: {
                                marginInlineEnd: -e.lineWidth,
                                borderRadius: 0
                            }
                        }
                    },
                    [`&:not(${t}-compact-first-item)`]: {[`${t},${t}-affix-wrapper`]: {borderRadius: 0}},
                    [`> ${t}-group-addon ${t}-search-button,\n        > ${t},\n        ${t}-affix-wrapper`]: {"&:hover,&:focus,&:active": {zIndex: 2}},
                    [`> ${t}-affix-wrapper-focused`]: {zIndex: 2}
                }
            }
        }
    }, xO = e => {
        const {componentCls: t, paddingLG: n} = e, r = `${t}-textarea`;
        return {
            [r]: {
                position: "relative",
                "&-show-count": {
                    [`> ${t}`]: {height: "100%"},
                    [`${t}-data-count`]: {
                        position: "absolute",
                        bottom: -e.fontSize * e.lineHeight,
                        insetInlineEnd: 0,
                        color: e.colorTextDescription,
                        whiteSpace: "nowrap",
                        pointerEvents: "none"
                    }
                },
                "&-allow-clear": {[`> ${t}`]: {paddingInlineEnd: n}},
                [`&-affix-wrapper${r}-has-feedback`]: {[`${t}`]: {paddingInlineEnd: n}},
                [`&-affix-wrapper${t}-affix-wrapper`]: {
                    padding: 0,
                    [`> textarea${t}`]: {
                        fontSize: "inherit",
                        border: "none",
                        outline: "none",
                        "&:focus": {boxShadow: "none !important"}
                    },
                    [`${t}-suffix`]: {
                        margin: 0,
                        "> *:not(:last-child)": {marginInline: 0},
                        [`${t}-clear-icon`]: {
                            position: "absolute",
                            insetInlineEnd: e.paddingXS,
                            insetBlockStart: e.paddingXS
                        },
                        [`${r}-suffix`]: {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: e.inputPaddingHorizontal,
                            bottom: 0,
                            zIndex: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "auto",
                            pointerEvents: "none"
                        }
                    }
                }
            }
        }
    }, CO = lh("Input", (e => {
        const t = (e => rh(e, {
            inputAffixPadding: e.paddingXXS,
            inputPaddingVertical: Math.max(Math.round((e.controlHeight - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 3),
            inputPaddingVerticalLG: Math.ceil((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2 * 10) / 10 - e.lineWidth,
            inputPaddingVerticalSM: Math.max(Math.round((e.controlHeightSM - e.fontSize * e.lineHeight) / 2 * 10) / 10 - e.lineWidth, 0),
            inputPaddingHorizontal: e.paddingSM - e.lineWidth,
            inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
            inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
            inputBorderHoverColor: e.colorPrimaryHover,
            inputBorderActiveColor: e.colorPrimaryHover
        }))(e);
        return [hO(t), xO(t), bO(t), yO(t), wO(t), Ly(t)]
    })), SO = e => {
        const {prefixCls: t, className: n, style: r, size: o, shape: a} = e,
            i = sd({[`${t}-lg`]: "large" === o, [`${t}-sm`]: "small" === o}),
            l = sd({[`${t}-circle`]: "circle" === a, [`${t}-square`]: "square" === a, [`${t}-round`]: "round" === a}),
            s = F.useMemo((() => "number" == typeof o ? {width: o, height: o, lineHeight: `${o}px`} : {}), [o]);
        return F.createElement("span", {className: sd(t, i, l, n), style: Object.assign(Object.assign({}, s), r)})
    }, EO = new Pm("ant-skeleton-loading", {"0%": {backgroundPosition: "100% 50%"}, "100%": {backgroundPosition: "0 50%"}}),
    kO = e => ({height: e, lineHeight: `${e}px`}), $O = e => Object.assign({width: e}, kO(e)), OO = e => ({
        background: e.skeletonLoadingBackground,
        backgroundSize: "400% 100%",
        animationName: EO,
        animationDuration: e.skeletonLoadingMotionDuration,
        animationTimingFunction: "ease",
        animationIterationCount: "infinite"
    }), PO = e => Object.assign({width: 5 * e, minWidth: 5 * e}, kO(e)), NO = e => {
        const {skeletonAvatarCls: t, gradientFromColor: n, controlHeight: r, controlHeightLG: o, controlHeightSM: a} = e;
        return {
            [`${t}`]: Object.assign({display: "inline-block", verticalAlign: "top", background: n}, $O(r)),
            [`${t}${t}-circle`]: {borderRadius: "50%"},
            [`${t}${t}-lg`]: Object.assign({}, $O(o)),
            [`${t}${t}-sm`]: Object.assign({}, $O(a))
        }
    }, MO = e => {
        const {
            controlHeight: t,
            borderRadiusSM: n,
            skeletonInputCls: r,
            controlHeightLG: o,
            controlHeightSM: a,
            gradientFromColor: i
        } = e;
        return {
            [`${r}`]: Object.assign({
                display: "inline-block",
                verticalAlign: "top",
                background: i,
                borderRadius: n
            }, PO(t)), [`${r}-lg`]: Object.assign({}, PO(o)), [`${r}-sm`]: Object.assign({}, PO(a))
        }
    }, RO = e => Object.assign({width: e}, kO(e)), IO = e => {
        const {skeletonImageCls: t, imageSizeBase: n, gradientFromColor: r, borderRadiusSM: o} = e;
        return {
            [`${t}`]: Object.assign(Object.assign({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                verticalAlign: "top",
                background: r,
                borderRadius: o
            }, RO(2 * n)), {
                [`${t}-path`]: {fill: "#bfbfbf"},
                [`${t}-svg`]: Object.assign(Object.assign({}, RO(n)), {maxWidth: 4 * n, maxHeight: 4 * n}),
                [`${t}-svg${t}-svg-circle`]: {borderRadius: "50%"}
            }), [`${t}${t}-circle`]: {borderRadius: "50%"}
        }
    }, jO = (e, t, n) => {
        const {skeletonButtonCls: r} = e;
        return {[`${n}${r}-circle`]: {width: t, minWidth: t, borderRadius: "50%"}, [`${n}${r}-round`]: {borderRadius: t}}
    }, zO = e => Object.assign({width: 2 * e, minWidth: 2 * e}, kO(e)), TO = e => {
        const {
            borderRadiusSM: t,
            skeletonButtonCls: n,
            controlHeight: r,
            controlHeightLG: o,
            controlHeightSM: a,
            gradientFromColor: i
        } = e;
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
            [`${n}`]: Object.assign({
                display: "inline-block",
                verticalAlign: "top",
                background: i,
                borderRadius: t,
                width: 2 * r,
                minWidth: 2 * r
            }, zO(r))
        }, jO(e, r, n)), {[`${n}-lg`]: Object.assign({}, zO(o))}), jO(e, o, `${n}-lg`)), {[`${n}-sm`]: Object.assign({}, zO(a))}), jO(e, a, `${n}-sm`))
    }, _O = e => {
        const {
            componentCls: t,
            skeletonAvatarCls: n,
            skeletonTitleCls: r,
            skeletonParagraphCls: o,
            skeletonButtonCls: a,
            skeletonInputCls: i,
            skeletonImageCls: l,
            controlHeight: s,
            controlHeightLG: c,
            controlHeightSM: u,
            gradientFromColor: d,
            padding: f,
            marginSM: p,
            borderRadius: m,
            titleHeight: g,
            blockRadius: h,
            paragraphLiHeight: v,
            controlHeightXS: b,
            paragraphMarginTop: y
        } = e;
        return {
            [`${t}`]: {
                display: "table",
                width: "100%",
                [`${t}-header`]: {
                    display: "table-cell",
                    paddingInlineEnd: f,
                    verticalAlign: "top",
                    [`${n}`]: Object.assign({display: "inline-block", verticalAlign: "top", background: d}, $O(s)),
                    [`${n}-circle`]: {borderRadius: "50%"},
                    [`${n}-lg`]: Object.assign({}, $O(c)),
                    [`${n}-sm`]: Object.assign({}, $O(u))
                },
                [`${t}-content`]: {
                    display: "table-cell",
                    width: "100%",
                    verticalAlign: "top",
                    [`${r}`]: {width: "100%", height: g, background: d, borderRadius: h, [`+ ${o}`]: {marginBlockStart: u}},
                    [`${o}`]: {
                        padding: 0,
                        "> li": {
                            width: "100%",
                            height: v,
                            listStyle: "none",
                            background: d,
                            borderRadius: h,
                            "+ li": {marginBlockStart: b}
                        }
                    },
                    [`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {width: "61%"}
                },
                [`&-round ${t}-content`]: {[`${r}, ${o} > li`]: {borderRadius: m}}
            },
            [`${t}-with-avatar ${t}-content`]: {[`${r}`]: {marginBlockStart: p, [`+ ${o}`]: {marginBlockStart: y}}},
            [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
                display: "inline-block",
                width: "auto"
            }, TO(e)), NO(e)), MO(e)), IO(e)),
            [`${t}${t}-block`]: {width: "100%", [`${a}`]: {width: "100%"}, [`${i}`]: {width: "100%"}},
            [`${t}${t}-active`]: {[`\n        ${r},\n        ${o} > li,\n        ${n},\n        ${a},\n        ${i},\n        ${l}\n      `]: Object.assign({}, OO(e))}
        }
    }, LO = lh("Skeleton", (e => {
        const {componentCls: t} = e, n = rh(e, {
            skeletonAvatarCls: `${t}-avatar`,
            skeletonTitleCls: `${t}-title`,
            skeletonParagraphCls: `${t}-paragraph`,
            skeletonButtonCls: `${t}-button`,
            skeletonInputCls: `${t}-input`,
            skeletonImageCls: `${t}-image`,
            imageSizeBase: 1.5 * e.controlHeight,
            borderRadius: 100,
            skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
            skeletonLoadingMotionDuration: "1.4s"
        });
        return [_O(n)]
    }), (e => {
        const {colorFillContent: t, colorFill: n} = e;
        return {
            color: t,
            colorGradientEnd: n,
            gradientFromColor: t,
            gradientToColor: n,
            titleHeight: e.controlHeight / 2,
            blockRadius: e.borderRadiusSM,
            paragraphMarginTop: e.marginLG + e.marginXXS,
            paragraphLiHeight: e.controlHeight / 2
        }
    }), {deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]});
var FO = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}
        }]
    }, name: "dot-chart", theme: "outlined"
}, AO = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: FO})), HO = F.forwardRef(AO);
const DO = e => {
    const t = t => {
            const {width: n, rows: r = 2} = e;
            return Array.isArray(n) ? n[t] : r - 1 === t ? n : void 0
        }, {prefixCls: n, className: r, style: o, rows: a} = e,
        i = If(Array(a)).map(((e, n) => F.createElement("li", {key: n, style: {width: t(n)}})));
    return F.createElement("ul", {className: sd(n, r), style: o}, i)
}, BO = e => {
    let {prefixCls: t, className: n, width: r, style: o} = e;
    return F.createElement("h3", {className: sd(t, n), style: Object.assign({width: r}, o)})
};

function WO(e) {
    return e && "object" == typeof e ? e : {}
}

const VO = e => {
    const {
        prefixCls: t,
        loading: n,
        className: r,
        rootClassName: o,
        style: a,
        children: i,
        avatar: l = !1,
        title: s = !0,
        paragraph: c = !0,
        active: u,
        round: d
    } = e, {getPrefixCls: f, direction: p, skeleton: m} = F.useContext(Ug), g = f("skeleton", t), [h, v] = LO(g);
    if (n || !("loading" in e)) {
        const e = !!l, t = !!s, n = !!c;
        let i, f;
        if (e) {
            const e = Object.assign(Object.assign({prefixCls: `${g}-avatar`}, ((e, t) => e && !t ? {
                size: "large",
                shape: "square"
            } : {size: "large", shape: "circle"})(t, n)), WO(l));
            i = F.createElement("div", {className: `${g}-header`}, F.createElement(SO, Object.assign({}, e)))
        }
        if (t || n) {
            let r, o;
            if (t) {
                const t = Object.assign(Object.assign({prefixCls: `${g}-title`}, ((e, t) => !e && t ? {width: "38%"} : e && t ? {width: "50%"} : {})(e, n)), WO(s));
                r = F.createElement(BO, Object.assign({}, t))
            }
            if (n) {
                const n = Object.assign(Object.assign({prefixCls: `${g}-paragraph`}, ((e, t) => {
                    const n = {};
                    return e && t || (n.width = "61%"), n.rows = !e && t ? 3 : 2, n
                })(e, t)), WO(c));
                o = F.createElement(DO, Object.assign({}, n))
            }
            f = F.createElement("div", {className: `${g}-content`}, r, o)
        }
        const b = sd(g, {
            [`${g}-with-avatar`]: e,
            [`${g}-active`]: u,
            [`${g}-rtl`]: "rtl" === p,
            [`${g}-round`]: d
        }, null == m ? void 0 : m.className, r, o, v);
        return h(F.createElement("div", {
            className: b,
            style: Object.assign(Object.assign({}, null == m ? void 0 : m.style), a)
        }, i, f))
    }
    return void 0 !== i ? i : null
};
VO.Button = e => {
    const {
            prefixCls: t,
            className: n,
            rootClassName: r,
            active: o,
            block: a = !1,
            size: i = "default"
        } = e, {getPrefixCls: l} = F.useContext(Ug), s = l("skeleton", t), [c, u] = LO(s), d = Pf(e, ["prefixCls"]),
        f = sd(s, `${s}-element`, {[`${s}-active`]: o, [`${s}-block`]: a}, n, r, u);
    return c(F.createElement("div", {className: f}, F.createElement(SO, Object.assign({
        prefixCls: `${s}-button`,
        size: i
    }, d))))
}, VO.Avatar = e => {
    const {
            prefixCls: t,
            className: n,
            rootClassName: r,
            active: o,
            shape: a = "circle",
            size: i = "default"
        } = e, {getPrefixCls: l} = F.useContext(Ug), s = l("skeleton", t), [c, u] = LO(s),
        d = Pf(e, ["prefixCls", "className"]), f = sd(s, `${s}-element`, {[`${s}-active`]: o}, n, r, u);
    return c(F.createElement("div", {className: f}, F.createElement(SO, Object.assign({
        prefixCls: `${s}-avatar`,
        shape: a,
        size: i
    }, d))))
}, VO.Input = e => {
    const {
            prefixCls: t,
            className: n,
            rootClassName: r,
            active: o,
            block: a,
            size: i = "default"
        } = e, {getPrefixCls: l} = F.useContext(Ug), s = l("skeleton", t), [c, u] = LO(s), d = Pf(e, ["prefixCls"]),
        f = sd(s, `${s}-element`, {[`${s}-active`]: o, [`${s}-block`]: a}, n, r, u);
    return c(F.createElement("div", {className: f}, F.createElement(SO, Object.assign({
        prefixCls: `${s}-input`,
        size: i
    }, d))))
}, VO.Image = e => {
    const {prefixCls: t, className: n, rootClassName: r, style: o, active: a} = e, {getPrefixCls: i} = F.useContext(Ug),
        l = i("skeleton", t), [s, c] = LO(l), u = sd(l, `${l}-element`, {[`${l}-active`]: a}, n, r, c);
    return s(F.createElement("div", {className: u}, F.createElement("div", {
        className: sd(`${l}-image`, n),
        style: o
    }, F.createElement("svg", {
        viewBox: "0 0 1098 1024",
        xmlns: "http://www.w3.org/2000/svg",
        className: `${l}-image-svg`
    }, F.createElement("path", {
        d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
        className: `${l}-image-path`
    })))))
}, VO.Node = e => {
    const {
            prefixCls: t,
            className: n,
            rootClassName: r,
            style: o,
            active: a,
            children: i
        } = e, {getPrefixCls: l} = F.useContext(Ug), s = l("skeleton", t), [c, u] = LO(s),
        d = sd(s, `${s}-element`, {[`${s}-active`]: a}, u, n, r), f = null != i ? i : F.createElement(HO, null);
    return c(F.createElement("div", {className: d}, F.createElement("div", {
        className: sd(`${s}-image`, n),
        style: o
    }, f)))
};
var KO = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{tag: "path", attrs: {d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}}, {
            tag: "path",
            attrs: {d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}
        }]
    }, name: "plus", theme: "outlined"
}, UO = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: KO})), GO = F.forwardRef(UO);
const XO = F.createContext(null);
var qO = F.forwardRef(((e, t) => {
    var n = e.prefixCls, r = e.className, o = e.style, a = e.id, i = e.active, l = e.tabKey, s = e.children;
    return F.createElement("div", {
        id: a && "".concat(a, "-panel-").concat(l),
        role: "tabpanel",
        tabIndex: i ? 0 : -1,
        "aria-labelledby": a && "".concat(a, "-tab-").concat(l),
        "aria-hidden": !i,
        style: o,
        className: sd(n, i && "".concat(n, "-active"), r),
        ref: t
    }, s)
})), YO = ["key", "forceRender", "style", "className"];

function QO(e) {
    var t = e.id, n = e.activeKey, r = e.animated, o = e.tabPosition, a = e.destroyInactiveTabPane,
        i = F.useContext(XO), l = i.prefixCls, s = i.tabs, c = r.tabPane, u = "".concat(l, "-tabpane");
    return F.createElement("div", {className: sd("".concat(l, "-content-holder"))}, F.createElement("div", {className: sd("".concat(l, "-content"), "".concat(l, "-content-").concat(o), wd({}, "".concat(l, "-content-animated"), c))}, s.map((e => {
        var o = e.key, i = e.forceRender, l = e.style, s = e.className, d = tp(e, YO), f = o === n;
        return F.createElement(qh, cd({
            key: o,
            visible: f,
            forceRender: i,
            removeOnLeave: !!a,
            leavedClassName: "".concat(u, "-hidden")
        }, r.tabPaneMotion), ((e, n) => {
            var r = e.style, a = e.className;
            return F.createElement(qO, cd({}, d, {
                prefixCls: u,
                id: t,
                tabKey: o,
                animated: c,
                active: f,
                style: Cd(Cd({}, l), r),
                className: sd(s, a),
                ref: n
            }))
        }))
    }))))
}

var ZO = {width: 0, height: 0, left: 0, top: 0};

function JO(e, t) {
    var n = F.useRef(e), r = Df(F.useState({}), 2)[1];
    return [n.current, e => {
        var o = "function" == typeof e ? e(n.current) : e;
        o !== n.current && t(o, n.current), n.current = o, r({})
    }]
}

var eP = Math.pow(.995, 20);

function tP(e) {
    var t = Df(F.useState(0), 2), n = t[0], r = t[1], o = F.useRef(0), a = F.useRef();
    return a.current = e, Ep((() => {
        var e;
        null === (e = a.current) || void 0 === e || e.call(a)
    }), [n]), () => {
        o.current === n && (o.current += 1, r(o.current))
    }
}

var nP = {width: 0, height: 0, left: 0, top: 0, right: 0};

function rP(e) {
    var t;
    return e instanceof Map ? (t = {}, e.forEach(((e, n) => {
        t[n] = e
    }))) : t = e, JSON.stringify(t)
}

function oP(e) {
    return String(e).replace(/"/g, "TABS_DQ")
}

function aP(e, t, n, r) {
    return !(!n || r || !1 === e || void 0 === e && (!1 === t || null === t))
}

function iP(e, t) {
    var n = e.prefixCls, r = e.editable, o = e.locale, a = e.style;
    return r && !1 !== r.showAdd ? F.createElement("button", {
        ref: t,
        type: "button",
        className: "".concat(n, "-nav-add"),
        style: a,
        "aria-label": (null == o ? void 0 : o.addAriaLabel) || "Add tab",
        onClick(e) {
            r.onEdit("add", {event: e})
        }
    }, r.addIcon || "+") : null
}

const lP = F.forwardRef(iP);
var sP = F.forwardRef(((e, t) => {
    var n, r = e.position, o = e.prefixCls, a = e.extra;
    if (!a) return null;
    var i = {};
    return "object" !== Yu(a) || F.isValidElement(a) ? i.right = a : i = a, "right" === r && (n = i.right), "left" === r && (n = i.left), n ? F.createElement("div", {
        className: "".concat(o, "-extra-content"),
        ref: t
    }, n) : null
}));

function cP(e, t) {
    var n = e.prefixCls, r = e.id, o = e.tabs, a = e.locale, i = e.mobile, l = e.moreIcon,
        s = void 0 === l ? "More" : l, c = e.moreTransitionName, u = e.style, d = e.className, f = e.editable,
        p = e.tabBarGutter, m = e.rtl, g = e.removeAriaLabel, h = e.onTabClick, v = e.getPopupContainer,
        b = e.popupClassName, y = Df(F.useState(!1), 2), w = y[0], x = y[1], C = Df(F.useState(null), 2), S = C[0],
        E = C[1], k = "".concat(r, "-more-popup"), $ = "".concat(n, "-dropdown"),
        O = null !== S ? "".concat(k, "-").concat(S) : null, P = null == a ? void 0 : a.dropdownAriaLabel,
        N = F.createElement(oO, {
            onClick(e) {
                var t = e.key, n = e.domEvent;
                h(t, n), x(!1)
            },
            prefixCls: "".concat($, "-menu"),
            id: k,
            tabIndex: -1,
            role: "listbox",
            "aria-activedescendant": O,
            selectedKeys: [S],
            "aria-label": void 0 !== P ? P : "expanded dropdown"
        }, o.map((e => {
            var t = e.closable, n = e.disabled, o = e.closeIcon, a = e.key, i = e.label, l = aP(t, o, f, n);
            return F.createElement(I$, {
                key: a,
                id: "".concat(k, "-").concat(a),
                role: "option",
                "aria-controls": r && "".concat(r, "-panel-").concat(a),
                disabled: n
            }, F.createElement("span", null, i), l && F.createElement("button", {
                type: "button",
                "aria-label": g || "remove",
                tabIndex: 0,
                className: "".concat($, "-menu-item-remove"),
                onClick(e) {
                    e.stopPropagation(), ((e, t) => {
                        e.preventDefault(), e.stopPropagation(), f.onEdit("remove", {key: t, event: e})
                    })(e, a)
                }
            }, o || f.removeIcon || "×"))
        })));

    function M(e) {
        for (var t = o.filter((e => !e.disabled)), n = t.findIndex((e => e.key === S)) || 0, r = t.length, a = 0; a < r; a += 1) {
            var i = t[n = (n + e + r) % r];
            if (!i.disabled) return void E(i.key)
        }
    }

    F.useEffect((() => {
        var e = document.getElementById(O);
        e && e.scrollIntoView && e.scrollIntoView(!1)
    }), [S]), F.useEffect((() => {
        w || E(null)
    }), [w]);
    var R = wd({}, m ? "marginRight" : "marginLeft", p);
    o.length || (R.visibility = "hidden", R.order = 1);
    var I = sd(wd({}, "".concat($, "-rtl"), m)), j = i ? null : F.createElement(Wk, {
        prefixCls: $,
        overlay: N,
        trigger: ["hover"],
        visible: !!o.length && w,
        transitionName: c,
        onVisibleChange: x,
        overlayClassName: sd(I, b),
        mouseEnterDelay: .1,
        mouseLeaveDelay: .1,
        getPopupContainer: v
    }, F.createElement("button", {
        type: "button",
        className: "".concat(n, "-nav-more"),
        style: R,
        tabIndex: -1,
        "aria-hidden": "true",
        "aria-haspopup": "listbox",
        "aria-controls": k,
        id: "".concat(r, "-more"),
        "aria-expanded": w,
        onKeyDown(e) {
            var t = e.which;
            if (w) switch (t) {
                case Yv.UP:
                    M(-1), e.preventDefault();
                    break;
                case Yv.DOWN:
                    M(1), e.preventDefault();
                    break;
                case Yv.ESC:
                    x(!1);
                    break;
                case Yv.SPACE:
                case Yv.ENTER:
                    null !== S && h(S, e)
            } else [Yv.DOWN, Yv.SPACE, Yv.ENTER].includes(t) && (x(!0), e.preventDefault())
        }
    }, s));
    return F.createElement("div", {
        className: sd("".concat(n, "-nav-operations"), d),
        style: u,
        ref: t
    }, j, F.createElement(lP, {prefixCls: n, locale: a, editable: f}))
}

const uP = F.memo(F.forwardRef(cP), ((e, t) => t.tabMoving));

function dP(e) {
    var t, n = e.prefixCls, r = e.id, o = e.active, a = e.tab, i = a.key, l = a.label, s = a.disabled, c = a.closeIcon,
        u = e.closable, d = e.renderWrapper, f = e.removeAriaLabel, p = e.editable, m = e.onClick, g = e.onFocus,
        h = e.style, v = "".concat(n, "-tab"), b = aP(u, c, p, s);

    function y(e) {
        s || m(e)
    }

    var w = F.createElement("div", {
        key: i,
        "data-node-key": oP(i),
        className: sd(v, (t = {}, wd(t, "".concat(v, "-with-remove"), b), wd(t, "".concat(v, "-active"), o), wd(t, "".concat(v, "-disabled"), s), t)),
        style: h,
        onClick: y
    }, F.createElement("div", {
        role: "tab",
        "aria-selected": o,
        id: r && "".concat(r, "-tab-").concat(i),
        className: "".concat(v, "-btn"),
        "aria-controls": r && "".concat(r, "-panel-").concat(i),
        "aria-disabled": s,
        tabIndex: s ? null : 0,
        onClick(e) {
            e.stopPropagation(), y(e)
        },
        onKeyDown(e) {
            [Yv.SPACE, Yv.ENTER].includes(e.which) && (e.preventDefault(), y(e))
        },
        onFocus: g
    }, l), b && F.createElement("button", {
        type: "button",
        "aria-label": f || "remove",
        tabIndex: 0,
        className: "".concat(v, "-remove"),
        onClick(e) {
            var t;
            e.stopPropagation(), (t = e).preventDefault(), t.stopPropagation(), p.onEdit("remove", {key: i, event: t})
        }
    }, c || p.removeIcon || "×"));
    return d ? d(w) : w
}

var fP = e => {
    var t = e.current || {}, n = t.offsetWidth, r = void 0 === n ? 0 : n, o = t.offsetHeight;
    return [r, void 0 === o ? 0 : o]
}, pP = (e, t) => e[t ? 0 : 1];

function mP(e, t) {
    var n, r, o, a, i, l, s = F.useContext(XO), c = s.prefixCls, u = s.tabs, d = e.className, f = e.style, p = e.id,
        m = e.animated, g = e.activeKey, h = e.rtl, v = e.extra, b = e.editable, y = e.locale, w = e.tabPosition,
        x = e.tabBarGutter, C = e.children, S = e.onTabClick, E = e.onTabScroll, k = F.useRef(), $ = F.useRef(),
        O = F.useRef(), P = F.useRef(), N = F.useRef(), M = F.useRef(), R = F.useRef(),
        I = "top" === w || "bottom" === w, j = Df(JO(0, ((e, t) => {
            I && E && E({direction: e > t ? "left" : "right"})
        })), 2), z = j[0], T = j[1], _ = Df(JO(0, ((e, t) => {
            !I && E && E({direction: e > t ? "top" : "bottom"})
        })), 2), L = _[0], A = _[1], H = Df(F.useState([0, 0]), 2), D = H[0], B = H[1], W = Df(F.useState([0, 0]), 2),
        V = W[0], K = W[1], U = Df(F.useState([0, 0]), 2), G = U[0], X = U[1], q = Df(F.useState([0, 0]), 2), Y = q[0],
        Q = q[1],
        Z = (r = new Map, o = F.useRef([]), a = Df(F.useState({}), 2)[1], i = F.useRef("function" == typeof r ? r() : r), l = tP((() => {
            var e = i.current;
            o.current.forEach((t => {
                e = t(e)
            })), o.current = [], i.current = e, a({})
        })), [i.current, e => {
            o.current.push(e), l()
        }]), J = Df(Z, 2), ee = J[0], te = J[1], ne = ((e, t, n) => F.useMemo((() => {
            for (var n, r = new Map, o = t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) || ZO, a = o.left + o.width, i = 0; i < e.length; i += 1) {
                var l, s = e[i].key, c = t.get(s);
                c || (c = t.get(null === (l = e[i - 1]) || void 0 === l ? void 0 : l.key) || ZO);
                var u = r.get(s) || Cd({}, c);
                u.right = a - u.left - u.width, r.set(s, u)
            }
            return r
        }), [e.map((e => e.key)).join("_"), t, n]))(u, ee, V[0]), re = pP(D, I), oe = pP(V, I), ae = pP(G, I),
        ie = pP(Y, I), le = re < oe + ae, se = le ? re - ie : re - ae, ce = "".concat(c, "-nav-operations-hidden"),
        ue = 0, de = 0;

    function fe(e) {
        return e < ue ? ue : e > de ? de : e
    }

    I && h ? (ue = 0, de = Math.max(0, oe - se)) : (ue = Math.min(0, se - oe), de = 0);
    var pe = F.useRef(), me = Df(F.useState(), 2), ge = me[0], he = me[1];

    function ve() {
        he(Date.now())
    }

    function be() {
        window.clearTimeout(pe.current)
    }

    ((e, t) => {
        var n = Df(F.useState(), 2), r = n[0], o = n[1], a = Df(F.useState(0), 2), i = a[0], l = a[1],
            s = Df(F.useState(0), 2), c = s[0], u = s[1], d = Df(F.useState(), 2), f = d[0], p = d[1], m = F.useRef(),
            g = F.useRef(), h = F.useRef(null);
        h.current = {
            onTouchStart(e) {
                var t = e.touches[0], n = t.screenX, r = t.screenY;
                o({x: n, y: r}), window.clearInterval(m.current)
            }, onTouchMove(e) {
                if (r) {
                    e.preventDefault();
                    var n = e.touches[0], a = n.screenX, s = n.screenY;
                    o({x: a, y: s});
                    var c = a - r.x, d = s - r.y;
                    t(c, d);
                    var f = Date.now();
                    l(f), u(f - i), p({x: c, y: d})
                }
            }, onTouchEnd() {
                if (r && (o(null), p(null), f)) {
                    var e = f.x / c, n = f.y / c, a = Math.abs(e), i = Math.abs(n);
                    if (Math.max(a, i) < .1) return;
                    var l = e, s = n;
                    m.current = window.setInterval((() => {
                        Math.abs(l) < .01 && Math.abs(s) < .01 ? window.clearInterval(m.current) : t(20 * (l *= eP), 20 * (s *= eP))
                    }), 20)
                }
            }, onWheel(e) {
                var n = e.deltaX, r = e.deltaY, o = 0, a = Math.abs(n), i = Math.abs(r);
                a === i ? o = "x" === g.current ? n : r : a > i ? (o = n, g.current = "x") : (o = r, g.current = "y"), t(-o, -o) && e.preventDefault()
            }
        }, F.useEffect((() => {
            function t(e) {
                h.current.onTouchMove(e)
            }

            function n(e) {
                h.current.onTouchEnd(e)
            }

            return document.addEventListener("touchmove", t, {passive: !1}), document.addEventListener("touchend", n, {passive: !1}), e.current.addEventListener("touchstart", (e => {
                h.current.onTouchStart(e)
            }), {passive: !1}), e.current.addEventListener("wheel", (e => {
                h.current.onWheel(e)
            })), () => {
                document.removeEventListener("touchmove", t), document.removeEventListener("touchend", n)
            }
        }), [])
    })(P, ((e, t) => {
        function n(e, t) {
            e((e => fe(e + t)))
        }

        return !!le && (I ? n(T, e) : n(A, t), be(), ve(), !0)
    })), F.useEffect((() => (be(), ge && (pe.current = window.setTimeout((() => {
        he(0)
    }), 100)), be)), [ge]);
    var ye = ((e, t, n, r, o, a, i) => {
            var l, s, c, u = i.tabs, d = i.tabPosition, f = i.rtl;
            return ["top", "bottom"].includes(d) ? (l = "width", s = f ? "right" : "left", c = Math.abs(n)) : (l = "height", s = "top", c = -n), F.useMemo((() => {
                if (!u.length) return [0, 0];
                for (var n = u.length, r = n, o = 0; o < n; o += 1) {
                    var a = e.get(u[o].key) || nP;
                    if (a[s] + a[l] > c + t) {
                        r = o - 1;
                        break
                    }
                }
                for (var i = 0, d = n - 1; d >= 0; d -= 1) if ((e.get(u[d].key) || nP)[s] < c) {
                    i = d + 1;
                    break
                }
                return i >= r ? [0, 0] : [i, r]
            }), [e, t, r, o, a, c, d, u.map((e => e.key)).join("_"), f])
        })(ne, se, I ? z : L, oe, ae, ie, Cd(Cd({}, e), {}, {tabs: u})), we = Df(ye, 2), xe = we[0], Ce = we[1],
        Se = Dg((function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                t = ne.get(e) || {width: 0, height: 0, left: 0, right: 0, top: 0};
            if (I) {
                var n = z;
                h ? t.right < z ? n = t.right : t.right + t.width > z + se && (n = t.right + t.width - se) : t.left < -z ? n = -t.left : t.left + t.width > -z + se && (n = -(t.left + t.width - se)), A(0), T(fe(n))
            } else {
                var r = L;
                t.top < -L ? r = -t.top : t.top + t.height > -L + se && (r = -(t.top + t.height - se)), T(0), A(fe(r))
            }
        })), Ee = {};
    "top" === w || "bottom" === w ? Ee[h ? "marginRight" : "marginLeft"] = x : Ee.marginTop = x;
    var ke = u.map(((e, t) => {
        var n = e.key;
        return F.createElement(dP, {
            id: p,
            prefixCls: c,
            key: n,
            tab: e,
            style: 0 === t ? void 0 : Ee,
            closable: e.closable,
            editable: b,
            active: n === g,
            renderWrapper: C,
            removeAriaLabel: null == y ? void 0 : y.removeAriaLabel,
            onClick(e) {
                S(n, e)
            },
            onFocus() {
                Se(n), ve(), P.current && (h || (P.current.scrollLeft = 0), P.current.scrollTop = 0)
            }
        })
    })), $e = () => te((() => {
        var e = new Map;
        return u.forEach((t => {
            var n, r = t.key,
                o = null === (n = N.current) || void 0 === n ? void 0 : n.querySelector('[data-node-key="'.concat(oP(r), '"]'));
            o && e.set(r, {width: o.offsetWidth, height: o.offsetHeight, left: o.offsetLeft, top: o.offsetTop})
        })), e
    }));
    F.useEffect((() => {
        $e()
    }), [u.map((e => e.key)).join("_")]);
    var Oe = tP((() => {
            var e = fP(k), t = fP($), n = fP(O);
            B([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
            var r = fP(R);
            X(r);
            var o = fP(M);
            Q(o);
            var a = fP(N);
            K([a[0] - r[0], a[1] - r[1]]), $e()
        })), Pe = u.slice(0, xe), Ne = u.slice(Ce + 1), Me = [].concat(If(Pe), If(Ne)), Re = Df(F.useState(), 2),
        Ie = Re[0], je = Re[1], ze = ne.get(g), Te = F.useRef();

    function _e() {
        Ff.cancel(Te.current)
    }

    F.useEffect((() => {
        var e = {};
        return ze && (I ? (h ? e.right = ze.right : e.left = ze.left, e.width = ze.width) : (e.top = ze.top, e.height = ze.height)), _e(), Te.current = Ff((() => {
            je(e)
        })), _e
    }), [ze, I, h]), F.useEffect((() => {
        Se()
    }), [g, ue, de, rP(ze), rP(ne), I]), F.useEffect((() => {
        Oe()
    }), [h]);
    var Le, Fe, Ae, He, De = !!Me.length, Be = "".concat(c, "-nav-wrap");
    return I ? h ? (Fe = z > 0, Le = z !== de) : (Le = z < 0, Fe = z !== ue) : (Ae = L < 0, He = L !== ue), F.createElement(Of, {onResize: Oe}, F.createElement("div", {
        ref: Xd(t, k),
        role: "tablist",
        className: sd("".concat(c, "-nav"), d),
        style: f,
        onKeyDown() {
            ve()
        }
    }, F.createElement(sP, {
        ref: $,
        position: "left",
        extra: v,
        prefixCls: c
    }), F.createElement("div", {
        className: sd(Be, (n = {}, wd(n, "".concat(Be, "-ping-left"), Le), wd(n, "".concat(Be, "-ping-right"), Fe), wd(n, "".concat(Be, "-ping-top"), Ae), wd(n, "".concat(Be, "-ping-bottom"), He), n)),
        ref: P
    }, F.createElement(Of, {onResize: Oe}, F.createElement("div", {
        ref: N,
        className: "".concat(c, "-nav-list"),
        style: {transform: "translate(".concat(z, "px, ").concat(L, "px)"), transition: ge ? "none" : void 0}
    }, ke, F.createElement(lP, {
        ref: R,
        prefixCls: c,
        locale: y,
        editable: b,
        style: Cd(Cd({}, 0 === ke.length ? void 0 : Ee), {}, {visibility: De ? "hidden" : null})
    }), F.createElement("div", {
        className: sd("".concat(c, "-ink-bar"), wd({}, "".concat(c, "-ink-bar-animated"), m.inkBar)),
        style: Ie
    })))), F.createElement(uP, cd({}, e, {
        removeAriaLabel: null == y ? void 0 : y.removeAriaLabel,
        ref: M,
        prefixCls: c,
        tabs: Me,
        className: !De && ce,
        tabMoving: !!ge
    })), F.createElement(sP, {ref: O, position: "right", extra: v, prefixCls: c})))
}

const gP = F.forwardRef(mP);
var hP = ["renderTabBar"], vP = ["label", "key"];

function bP(e) {
    var t = e.renderTabBar, n = tp(e, hP), r = F.useContext(XO).tabs;
    return t ? t(Cd(Cd({}, n), {}, {
        panes: r.map((e => {
            var t = e.label, n = e.key, r = tp(e, vP);
            return F.createElement(qO, cd({tab: t, key: n, tabKey: n}, r))
        }))
    }), gP) : F.createElement(gP, n)
}

var yP = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName"],
    wP = 0;

function xP(e, t) {
    var n, r = e.id, o = e.prefixCls, a = void 0 === o ? "rc-tabs" : o, i = e.className, l = e.items, s = e.direction,
        c = e.activeKey, u = e.defaultActiveKey, d = e.editable, f = e.animated, p = e.tabPosition,
        m = void 0 === p ? "top" : p, g = e.tabBarGutter, h = e.tabBarStyle, v = e.tabBarExtraContent, b = e.locale,
        y = e.moreIcon, w = e.moreTransitionName, x = e.destroyInactiveTabPane, C = e.renderTabBar, S = e.onChange,
        E = e.onTabClick, k = e.onTabScroll, $ = e.getPopupContainer, O = e.popupClassName, P = tp(e, yP),
        N = F.useMemo((() => (l || []).filter((e => e && "object" === Yu(e) && "key" in e))), [l]), M = "rtl" === s,
        R = function () {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {inkBar: !0, tabPane: !1};
            return (e = !1 === t ? {inkBar: !1, tabPane: !1} : !0 === t ? {
                inkBar: !0,
                tabPane: !1
            } : Cd({inkBar: !0}, "object" === Yu(t) ? t : {})).tabPaneMotion && void 0 === e.tabPane && (e.tabPane = !0), !e.tabPaneMotion && e.tabPane && (e.tabPane = !1), e
        }(f), I = Df(F.useState(!1), 2), j = I[0], z = I[1];
    F.useEffect((() => {
        z(FC())
    }), []);
    var T = Df(Vg((() => {
            var e;
            return null === (e = N[0]) || void 0 === e ? void 0 : e.key
        }), {value: c, defaultValue: u}), 2), _ = T[0], L = T[1],
        A = Df(F.useState((() => N.findIndex((e => e.key === _)))), 2), H = A[0], D = A[1];
    F.useEffect((() => {
        var e, t = N.findIndex((e => e.key === _));
        -1 === t && (t = Math.max(0, Math.min(H, N.length - 1)), L(null === (e = N[t]) || void 0 === e ? void 0 : e.key)), D(t)
    }), [N.map((e => e.key)).join("_"), _, H]);
    var B = Df(Vg(null, {value: r}), 2), W = B[0], V = B[1];
    F.useEffect((() => {
        r || (V("rc-tabs-".concat(wP)), wP += 1)
    }), []);
    var K = {id: W, activeKey: _, animated: R, tabPosition: m, rtl: M, mobile: j}, U = Cd(Cd({}, K), {}, {
        editable: d,
        locale: b,
        moreIcon: y,
        moreTransitionName: w,
        tabBarGutter: g,
        onTabClick(e, t) {
            null == E || E(e, t);
            var n = e !== _;
            L(e), n && (null == S || S(e))
        },
        onTabScroll: k,
        extra: v,
        style: h,
        panes: null,
        getPopupContainer: $,
        popupClassName: O
    });
    return F.createElement(XO.Provider, {value: {tabs: N, prefixCls: a}}, F.createElement("div", cd({
        ref: t,
        id: r,
        className: sd(a, "".concat(a, "-").concat(m), (n = {}, wd(n, "".concat(a, "-mobile"), j), wd(n, "".concat(a, "-editable"), d), wd(n, "".concat(a, "-rtl"), M), n), i)
    }, P), void 0, F.createElement(bP, cd({}, U, {renderTabBar: C})), F.createElement(QO, cd({destroyInactiveTabPane: x}, K, {animated: R}))))
}

var CP = F.forwardRef(xP);
const SP = {motionAppear: !1, motionEnter: !0, motionLeave: !0};
const EP = e => {
    const {componentCls: t, motionDurationSlow: n} = e;
    return [{
        [t]: {
            [`${t}-switch`]: {
                "&-appear, &-enter": {
                    transition: "none",
                    "&-start": {opacity: 0},
                    "&-active": {opacity: 1, transition: `opacity ${n}`}
                },
                "&-leave": {
                    position: "absolute",
                    transition: "none",
                    inset: 0,
                    "&-start": {opacity: 1},
                    "&-active": {opacity: 0, transition: `opacity ${n}`}
                }
            }
        }
    }, [qx(e, "slide-up"), qx(e, "slide-down")]]
}, kP = e => {
    const {
        componentCls: t,
        tabsCardPadding: n,
        cardBg: r,
        cardGutter: o,
        colorBorderSecondary: a,
        itemSelectedColor: i
    } = e;
    return {
        [`${t}-card`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-tab`]: {
                    margin: 0,
                    padding: n,
                    background: r,
                    border: `${e.lineWidth}px ${e.lineType} ${a}`,
                    transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
                },
                [`${t}-tab-active`]: {color: i, background: e.colorBgContainer},
                [`${t}-ink-bar`]: {visibility: "hidden"}
            },
            [`&${t}-top, &${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab + ${t}-tab`]: {
                        marginLeft: {
                            _skip_check_: !0,
                            value: `${o}px`
                        }
                    }
                }
            },
            [`&${t}-top`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab`]: {borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},
                    [`${t}-tab-active`]: {borderBottomColor: e.colorBgContainer}
                }
            },
            [`&${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab`]: {borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},
                    [`${t}-tab-active`]: {borderTopColor: e.colorBgContainer}
                }
            },
            [`&${t}-left, &${t}-right`]: {[`> ${t}-nav, > div > ${t}-nav`]: {[`${t}-tab + ${t}-tab`]: {marginTop: `${o}px`}}},
            [`&${t}-left`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab`]: {
                        borderRadius: {
                            _skip_check_: !0,
                            value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
                        }
                    }, [`${t}-tab-active`]: {borderRightColor: {_skip_check_: !0, value: e.colorBgContainer}}
                }
            },
            [`&${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab`]: {
                        borderRadius: {
                            _skip_check_: !0,
                            value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
                        }
                    }, [`${t}-tab-active`]: {borderLeftColor: {_skip_check_: !0, value: e.colorBgContainer}}
                }
            }
        }
    }
}, $P = e => {
    const {componentCls: t, itemHoverColor: n, dropdownEdgeChildVerticalPadding: r} = e;
    return {
        [`${t}-dropdown`]: Object.assign(Object.assign({}, Yg(e)), {
            position: "absolute",
            top: -9999,
            left: {_skip_check_: !0, value: -9999},
            zIndex: e.zIndexPopup,
            display: "block",
            "&-hidden": {display: "none"},
            [`${t}-dropdown-menu`]: {
                maxHeight: e.tabsDropdownHeight,
                margin: 0,
                padding: `${r}px 0`,
                overflowX: "hidden",
                overflowY: "auto",
                textAlign: {_skip_check_: !0, value: "left"},
                listStyleType: "none",
                backgroundColor: e.colorBgContainer,
                backgroundClip: "padding-box",
                borderRadius: e.borderRadiusLG,
                outline: "none",
                boxShadow: e.boxShadowSecondary,
                "&-item": Object.assign(Object.assign({}, qg), {
                    display: "flex",
                    alignItems: "center",
                    minWidth: e.tabsDropdownWidth,
                    margin: 0,
                    padding: `${e.paddingXXS}px ${e.paddingSM}px`,
                    color: e.colorText,
                    fontWeight: "normal",
                    fontSize: e.fontSize,
                    lineHeight: e.lineHeight,
                    cursor: "pointer",
                    transition: `all ${e.motionDurationSlow}`,
                    "> span": {flex: 1, whiteSpace: "nowrap"},
                    "&-remove": {
                        flex: "none",
                        marginLeft: {_skip_check_: !0, value: e.marginSM},
                        color: e.colorTextDescription,
                        fontSize: e.fontSizeSM,
                        background: "transparent",
                        border: 0,
                        cursor: "pointer",
                        "&:hover": {color: n}
                    },
                    "&:hover": {background: e.controlItemBgHover},
                    "&-disabled": {
                        "&, &:hover": {
                            color: e.colorTextDisabled,
                            background: "transparent",
                            cursor: "not-allowed"
                        }
                    }
                })
            }
        })
    }
}, OP = e => {
    const {
        componentCls: t,
        margin: n,
        colorBorderSecondary: r,
        horizontalMargin: o,
        verticalItemPadding: a,
        verticalItemMargin: i
    } = e;
    return {
        [`${t}-top, ${t}-bottom`]: {
            flexDirection: "column",
            [`> ${t}-nav, > div > ${t}-nav`]: {
                margin: o,
                "&::before": {
                    position: "absolute",
                    right: {_skip_check_: !0, value: 0},
                    left: {_skip_check_: !0, value: 0},
                    borderBottom: `${e.lineWidth}px ${e.lineType} ${r}`,
                    content: "''"
                },
                [`${t}-ink-bar`]: {
                    height: e.lineWidthBold,
                    "&-animated": {transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}
                },
                [`${t}-nav-wrap`]: {
                    "&::before, &::after": {top: 0, bottom: 0, width: e.controlHeight},
                    "&::before": {left: {_skip_check_: !0, value: 0}, boxShadow: e.boxShadowTabsOverflowLeft},
                    "&::after": {right: {_skip_check_: !0, value: 0}, boxShadow: e.boxShadowTabsOverflowRight},
                    [`&${t}-nav-wrap-ping-left::before`]: {opacity: 1},
                    [`&${t}-nav-wrap-ping-right::after`]: {opacity: 1}
                }
            }
        },
        [`${t}-top`]: {
            [`> ${t}-nav,\n        > div > ${t}-nav`]: {
                "&::before": {bottom: 0},
                [`${t}-ink-bar`]: {bottom: 0}
            }
        },
        [`${t}-bottom`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                marginTop: `${n}px`,
                marginBottom: 0,
                "&::before": {top: 0},
                [`${t}-ink-bar`]: {top: 0}
            }, [`> ${t}-content-holder, > div > ${t}-content-holder`]: {order: 0}
        },
        [`${t}-left, ${t}-right`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
                flexDirection: "column",
                minWidth: 1.25 * e.controlHeight,
                [`${t}-tab`]: {padding: a, textAlign: "center"},
                [`${t}-tab + ${t}-tab`]: {margin: i},
                [`${t}-nav-wrap`]: {
                    flexDirection: "column",
                    "&::before, &::after": {
                        right: {_skip_check_: !0, value: 0},
                        left: {_skip_check_: !0, value: 0},
                        height: e.controlHeight
                    },
                    "&::before": {top: 0, boxShadow: e.boxShadowTabsOverflowTop},
                    "&::after": {bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom},
                    [`&${t}-nav-wrap-ping-top::before`]: {opacity: 1},
                    [`&${t}-nav-wrap-ping-bottom::after`]: {opacity: 1}
                },
                [`${t}-ink-bar`]: {
                    width: e.lineWidthBold,
                    "&-animated": {transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}
                },
                [`${t}-nav-list, ${t}-nav-operations`]: {flex: "1 0 auto", flexDirection: "column"}
            }
        },
        [`${t}-left`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {[`${t}-ink-bar`]: {right: {_skip_check_: !0, value: 0}}},
            [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                marginLeft: {
                    _skip_check_: !0,
                    value: `-${e.lineWidth}px`
                },
                borderLeft: {_skip_check_: !0, value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},
                [`> ${t}-content > ${t}-tabpane`]: {paddingLeft: {_skip_check_: !0, value: e.paddingLG}}
            }
        },
        [`${t}-right`]: {
            [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                [`${t}-ink-bar`]: {left: {_skip_check_: !0, value: 0}}
            },
            [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                order: 0,
                marginRight: {_skip_check_: !0, value: -e.lineWidth},
                borderRight: {_skip_check_: !0, value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},
                [`> ${t}-content > ${t}-tabpane`]: {paddingRight: {_skip_check_: !0, value: e.paddingLG}}
            }
        }
    }
}, PP = e => {
    const {
        componentCls: t,
        cardPaddingSM: n,
        cardPaddingLG: r,
        horizontalItemPaddingSM: o,
        horizontalItemPaddingLG: a
    } = e;
    return {
        [t]: {
            "&-small": {[`> ${t}-nav`]: {[`${t}-tab`]: {padding: o, fontSize: e.titleFontSizeSM}}},
            "&-large": {[`> ${t}-nav`]: {[`${t}-tab`]: {padding: a, fontSize: e.titleFontSizeLG}}}
        },
        [`${t}-card`]: {
            [`&${t}-small`]: {
                [`> ${t}-nav`]: {[`${t}-tab`]: {padding: n}},
                [`&${t}-bottom`]: {[`> ${t}-nav ${t}-tab`]: {borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`}},
                [`&${t}-top`]: {[`> ${t}-nav ${t}-tab`]: {borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`}},
                [`&${t}-right`]: {
                    [`> ${t}-nav ${t}-tab`]: {
                        borderRadius: {
                            _skip_check_: !0,
                            value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
                        }
                    }
                },
                [`&${t}-left`]: {
                    [`> ${t}-nav ${t}-tab`]: {
                        borderRadius: {
                            _skip_check_: !0,
                            value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
                        }
                    }
                }
            }, [`&${t}-large`]: {[`> ${t}-nav`]: {[`${t}-tab`]: {padding: r}}}
        }
    }
}, NP = e => {
    const {
        componentCls: t,
        itemActiveColor: n,
        itemHoverColor: r,
        iconCls: o,
        tabsHorizontalItemMargin: a,
        horizontalItemPadding: i,
        itemSelectedColor: l
    } = e, s = `${t}-tab`;
    return {
        [s]: {
            position: "relative",
            WebkitTouchCallout: "none",
            WebkitTapHighlightColor: "transparent",
            display: "inline-flex",
            alignItems: "center",
            padding: i,
            fontSize: e.titleFontSize,
            background: "transparent",
            border: 0,
            outline: "none",
            cursor: "pointer",
            "&-btn, &-remove": Object.assign({"&:focus:not(:focus-visible), &:active": {color: n}}, eh(e)),
            "&-btn": {outline: "none", transition: "all 0.3s"},
            "&-remove": {
                flex: "none",
                marginRight: {_skip_check_: !0, value: -e.marginXXS},
                marginLeft: {_skip_check_: !0, value: e.marginXS},
                color: e.colorTextDescription,
                fontSize: e.fontSizeSM,
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
                transition: `all ${e.motionDurationSlow}`,
                "&:hover": {color: e.colorTextHeading}
            },
            "&:hover": {color: r},
            [`&${s}-active ${s}-btn`]: {color: l, textShadow: e.tabsActiveTextShadow},
            [`&${s}-disabled`]: {color: e.colorTextDisabled, cursor: "not-allowed"},
            [`&${s}-disabled ${s}-btn, &${s}-disabled ${t}-remove`]: {"&:focus, &:active": {color: e.colorTextDisabled}},
            [`& ${s}-remove ${o}`]: {margin: 0},
            [o]: {marginRight: {_skip_check_: !0, value: e.marginSM}}
        }, [`${s} + ${s}`]: {margin: {_skip_check_: !0, value: a}}
    }
}, MP = e => {
    const {componentCls: t, tabsHorizontalItemMarginRTL: n, iconCls: r, cardGutter: o} = e, a = `${t}-rtl`;
    return {
        [a]: {
            direction: "rtl",
            [`${t}-nav`]: {
                [`${t}-tab`]: {
                    margin: {_skip_check_: !0, value: n},
                    [`${t}-tab:last-of-type`]: {marginLeft: {_skip_check_: !0, value: 0}},
                    [r]: {
                        marginRight: {_skip_check_: !0, value: 0},
                        marginLeft: {_skip_check_: !0, value: `${e.marginSM}px`}
                    },
                    [`${t}-tab-remove`]: {
                        marginRight: {_skip_check_: !0, value: `${e.marginXS}px`},
                        marginLeft: {_skip_check_: !0, value: `-${e.marginXXS}px`},
                        [r]: {margin: 0}
                    }
                }
            },
            [`&${t}-left`]: {[`> ${t}-nav`]: {order: 1}, [`> ${t}-content-holder`]: {order: 0}},
            [`&${t}-right`]: {[`> ${t}-nav`]: {order: 0}, [`> ${t}-content-holder`]: {order: 1}},
            [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                    [`${t}-tab + ${t}-tab`]: {
                        marginRight: {
                            _skip_check_: !0,
                            value: o
                        }, marginLeft: {_skip_check_: !0, value: 0}
                    }
                }
            }
        },
        [`${t}-dropdown-rtl`]: {direction: "rtl"},
        [`${t}-menu-item`]: {[`${t}-dropdown-rtl`]: {textAlign: {_skip_check_: !0, value: "right"}}}
    }
}, RP = e => {
    const {
        componentCls: t,
        tabsCardPadding: n,
        cardHeight: r,
        cardGutter: o,
        itemHoverColor: a,
        itemActiveColor: i,
        colorBorderSecondary: l
    } = e;
    return {
        [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yg(e)), {
            display: "flex",
            [`> ${t}-nav, > div > ${t}-nav`]: {
                position: "relative",
                display: "flex",
                flex: "none",
                alignItems: "center",
                [`${t}-nav-wrap`]: {
                    position: "relative",
                    display: "flex",
                    flex: "auto",
                    alignSelf: "stretch",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    transform: "translate(0)",
                    "&::before, &::after": {
                        position: "absolute",
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${e.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: "none"
                    }
                },
                [`${t}-nav-list`]: {
                    position: "relative",
                    display: "flex",
                    transition: `opacity ${e.motionDurationSlow}`
                },
                [`${t}-nav-operations`]: {display: "flex", alignSelf: "stretch"},
                [`${t}-nav-operations-hidden`]: {position: "absolute", visibility: "hidden", pointerEvents: "none"},
                [`${t}-nav-more`]: {
                    position: "relative",
                    padding: n,
                    background: "transparent",
                    border: 0,
                    color: e.colorText,
                    "&::after": {
                        position: "absolute",
                        right: {_skip_check_: !0, value: 0},
                        bottom: 0,
                        left: {_skip_check_: !0, value: 0},
                        height: e.controlHeightLG / 8,
                        transform: "translateY(100%)",
                        content: "''"
                    }
                },
                [`${t}-nav-add`]: Object.assign({
                    minWidth: r,
                    marginLeft: {_skip_check_: !0, value: o},
                    padding: `0 ${e.paddingXS}px`,
                    background: "transparent",
                    border: `${e.lineWidth}px ${e.lineType} ${l}`,
                    borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                    outline: "none",
                    cursor: "pointer",
                    color: e.colorText,
                    transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                    "&:hover": {color: a},
                    "&:active, &:focus:not(:focus-visible)": {color: i}
                }, eh(e))
            },
            [`${t}-extra-content`]: {flex: "none"},
            [`${t}-ink-bar`]: {position: "absolute", background: e.inkBarColor, pointerEvents: "none"}
        }), NP(e)), {
            [`${t}-content`]: {position: "relative", width: "100%"},
            [`${t}-content-holder`]: {flex: "auto", minWidth: 0, minHeight: 0},
            [`${t}-tabpane`]: {outline: "none", "&-hidden": {display: "none"}}
        }),
        [`${t}-centered`]: {[`> ${t}-nav, > div > ${t}-nav`]: {[`${t}-nav-wrap`]: {[`&:not([class*='${t}-nav-wrap-ping'])`]: {justifyContent: "center"}}}}
    }
}, IP = lh("Tabs", (e => {
    const t = rh(e, {
        tabsCardPadding: e.cardPadding || `${(e.cardHeight - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
        dropdownEdgeChildVerticalPadding: e.paddingXXS,
        tabsActiveTextShadow: "0 0 0.25px currentcolor",
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${e.horizontalItemGutter}px`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${e.horizontalItemGutter}px`
    });
    return [PP(t), MP(t), OP(t), $P(t), kP(t), RP(t), EP(t)]
}), (e => {
    const t = e.controlHeightLG;
    return {
        zIndexPopup: e.zIndexPopupBase + 50,
        cardBg: e.colorFillAlter,
        cardHeight: t,
        cardPadding: "",
        cardPaddingSM: `${1.5 * e.paddingXXS}px ${e.padding}px`,
        cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${1.5 * e.paddingXXS}px`,
        titleFontSize: e.fontSize,
        titleFontSizeLG: e.fontSizeLG,
        titleFontSizeSM: e.fontSize,
        inkBarColor: e.colorPrimary,
        horizontalMargin: `0 0 ${e.margin}px 0`,
        horizontalItemGutter: 32,
        horizontalItemMargin: "",
        horizontalItemMarginRTL: "",
        horizontalItemPadding: `${e.paddingSM}px 0`,
        horizontalItemPaddingSM: `${e.paddingXS}px 0`,
        horizontalItemPaddingLG: `${e.padding}px 0`,
        verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
        verticalItemMargin: `${e.margin}px 0 0 0`,
        itemSelectedColor: e.colorPrimary,
        itemHoverColor: e.colorPrimaryHover,
        itemActiveColor: e.colorPrimaryActive,
        cardGutter: e.marginXXS / 2
    }
})), jP = e => {
    const {
            type: t,
            className: n,
            rootClassName: r,
            size: o,
            onEdit: a,
            hideAdd: i,
            centered: l,
            addIcon: s,
            popupClassName: c,
            children: u,
            items: d,
            animated: f,
            style: p
        } = e, m = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "popupClassName", "children", "items", "animated", "style"]), {
            prefixCls: g,
            moreIcon: h = F.createElement(lO, null)
        } = m, {direction: v, tabs: b, getPrefixCls: y, getPopupContainer: w} = F.useContext(Ug),
        x = y("tabs", g), [C, S] = IP(x);
    let E;
    "editable-card" === t && (E = {
        onEdit(e, t) {
            let {key: n, event: r} = t;
            null == a || a("add" === e ? r : n, e)
        }, removeIcon: F.createElement(Lv, null), addIcon: s || F.createElement(GO, null), showAdd: !0 !== i
    });
    const k = y(), $ = function (e, t) {
        return e || (e => e.filter((e => e)))(md(t).map((e => {
            if (F.isValidElement(e)) {
                const {key: t, props: n} = e, r = n || {}, {tab: o} = r, a = ((e, t) => {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                })(r, ["tab"]);
                return Object.assign(Object.assign({key: String(t)}, a), {label: o})
            }
            return null
        })))
    }(d, u), O = function (e) {
        let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {inkBar: !0, tabPane: !1};
        return t = !1 === n ? {inkBar: !1, tabPane: !1} : !0 === n ? {
            inkBar: !0,
            tabPane: !0
        } : Object.assign({inkBar: !0}, "object" == typeof n ? n : {}), t.tabPane && (t.tabPaneMotion = Object.assign(Object.assign({}, SP), {motionName: Uy(e, "switch")})), t
    }(x, f), P = Ub(o), N = Object.assign(Object.assign({}, null == b ? void 0 : b.style), p);
    return C(F.createElement(CP, Object.assign({
        direction: v,
        getPopupContainer: w,
        moreTransitionName: `${k}-slide-up`
    }, m, {
        items: $,
        className: sd({
            [`${x}-${P}`]: P,
            [`${x}-card`]: ["card", "editable-card"].includes(t),
            [`${x}-editable-card`]: "editable-card" === t,
            [`${x}-centered`]: l
        }, null == b ? void 0 : b.className, n, r, S),
        popupClassName: sd(c, S),
        style: N,
        editable: E,
        moreIcon: h,
        prefixCls: x,
        animated: O
    })))
};
jP.TabPane = () => null;
const zP = e => {
    var {prefixCls: t, className: n, hoverable: r = !0} = e, o = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["prefixCls", "className", "hoverable"]);
    const {getPrefixCls: a} = F.useContext(Ug), i = a("card", t), l = sd(`${i}-grid`, n, {[`${i}-grid-hoverable`]: r});
    return F.createElement("div", Object.assign({}, o, {className: l}))
}, TP = e => {
    const {antCls: t, componentCls: n, headerHeight: r, cardPaddingBase: o, tabsMarginBottom: a} = e;
    return Object.assign(Object.assign({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: r,
        marginBottom: -1,
        padding: `0 ${o}px`,
        color: e.colorTextHeading,
        fontWeight: e.fontWeightStrong,
        fontSize: e.headerFontSize,
        background: e.headerBg,
        borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,
        borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
    }, {
        "&::before": {display: "table", content: '""'},
        "&::after": {display: "table", clear: "both", content: '""'}
    }), {
        "&-wrapper": {width: "100%", display: "flex", alignItems: "center"},
        "&-title": Object.assign(Object.assign({
            display: "inline-block",
            flex: 1
        }, qg), {
            [`\n          > ${n}-typography,\n          > ${n}-typography-edit-content\n        `]: {
                insetInlineStart: 0,
                marginTop: 0,
                marginBottom: 0
            }
        }),
        [`${t}-tabs-top`]: {
            clear: "both",
            marginBottom: a,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: e.fontSize,
            "&-bar": {borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}
        }
    })
}, _P = e => {
    const {cardPaddingBase: t, colorBorderSecondary: n, cardShadow: r, lineWidth: o} = e;
    return {
        width: "33.33%",
        padding: t,
        border: 0,
        borderRadius: 0,
        boxShadow: `\n      ${o}px 0 0 0 ${n},\n      0 ${o}px 0 0 ${n},\n      ${o}px ${o}px 0 0 ${n},\n      ${o}px 0 0 0 ${n} inset,\n      0 ${o}px 0 0 ${n} inset;\n    `,
        transition: `all ${e.motionDurationMid}`,
        "&-hoverable:hover": {position: "relative", zIndex: 1, boxShadow: r}
    }
}, LP = e => {
    const {
        componentCls: t,
        iconCls: n,
        actionsLiMargin: r,
        cardActionsIconSize: o,
        colorBorderSecondary: a,
        actionsBg: i
    } = e;
    return Object.assign(Object.assign({
        margin: 0,
        padding: 0,
        listStyle: "none",
        background: i,
        borderTop: `${e.lineWidth}px ${e.lineType} ${a}`,
        display: "flex",
        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `
    }, {
        "&::before": {display: "table", content: '""'},
        "&::after": {display: "table", clear: "both", content: '""'}
    }), {
        "& > li": {
            margin: r,
            color: e.colorTextDescription,
            textAlign: "center",
            "> span": {
                position: "relative",
                display: "block",
                minWidth: 2 * e.cardActionsIconSize,
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                cursor: "pointer",
                "&:hover": {color: e.colorPrimary, transition: `color ${e.motionDurationMid}`},
                [`a:not(${t}-btn), > ${n}`]: {
                    display: "inline-block",
                    width: "100%",
                    color: e.colorTextDescription,
                    lineHeight: e.fontSize * e.lineHeight + "px",
                    transition: `color ${e.motionDurationMid}`,
                    "&:hover": {color: e.colorPrimary}
                },
                [`> ${n}`]: {fontSize: o, lineHeight: o * e.lineHeight + "px"}
            },
            "&:not(:last-child)": {borderInlineEnd: `${e.lineWidth}px ${e.lineType} ${a}`}
        }
    })
}, FP = e => Object.assign(Object.assign({
    margin: `-${e.marginXXS}px 0`,
    display: "flex"
}, {
    "&::before": {display: "table", content: '""'},
    "&::after": {display: "table", clear: "both", content: '""'}
}), {
    "&-avatar": {paddingInlineEnd: e.padding},
    "&-detail": {overflow: "hidden", flex: 1, "> div:not(:last-child)": {marginBottom: e.marginXS}},
    "&-title": Object.assign({color: e.colorTextHeading, fontWeight: e.fontWeightStrong, fontSize: e.fontSizeLG}, qg),
    "&-description": {color: e.colorTextDescription}
}), AP = e => {
    const {componentCls: t, cardPaddingBase: n, colorFillAlter: r} = e;
    return {
        [`${t}-head`]: {padding: `0 ${n}px`, background: r, "&-title": {fontSize: e.fontSize}},
        [`${t}-body`]: {padding: `${e.padding}px ${n}px`}
    }
}, HP = e => {
    const {componentCls: t} = e;
    return {overflow: "hidden", [`${t}-body`]: {userSelect: "none"}}
}, DP = e => {
    const {
        antCls: t,
        componentCls: n,
        cardShadow: r,
        cardHeadPadding: o,
        colorBorderSecondary: a,
        boxShadowTertiary: i,
        cardPaddingBase: l,
        extraColor: s
    } = e;
    return {
        [n]: Object.assign(Object.assign({}, Yg(e)), {
            position: "relative",
            background: e.colorBgContainer,
            borderRadius: e.borderRadiusLG,
            [`&:not(${n}-bordered)`]: {boxShadow: i},
            [`${n}-head`]: TP(e),
            [`${n}-extra`]: {marginInlineStart: "auto", color: s, fontWeight: "normal", fontSize: e.fontSize},
            [`${n}-body`]: Object.assign({
                padding: l,
                borderRadius: ` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
            }, {
                "&::before": {display: "table", content: '""'},
                "&::after": {display: "table", clear: "both", content: '""'}
            }),
            [`${n}-grid`]: _P(e),
            [`${n}-cover`]: {
                "> *": {display: "block", width: "100%"},
                [`img, img + ${t}-image-mask`]: {borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}
            },
            [`${n}-actions`]: LP(e),
            [`${n}-meta`]: FP(e)
        }),
        [`${n}-bordered`]: {
            border: `${e.lineWidth}px ${e.lineType} ${a}`,
            [`${n}-cover`]: {marginTop: -1, marginInlineStart: -1, marginInlineEnd: -1}
        },
        [`${n}-hoverable`]: {
            cursor: "pointer",
            transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
            "&:hover": {borderColor: "transparent", boxShadow: r}
        },
        [`${n}-contain-grid`]: {
            [`${n}-body`]: {display: "flex", flexWrap: "wrap"},
            [`&:not(${n}-loading) ${n}-body`]: {
                marginBlockStart: -e.lineWidth,
                marginInlineStart: -e.lineWidth,
                padding: 0
            }
        },
        [`${n}-contain-tabs`]: {[`> ${n}-head`]: {[`${n}-head-title, ${n}-extra`]: {paddingTop: o}}},
        [`${n}-type-inner`]: AP(e),
        [`${n}-loading`]: HP(e),
        [`${n}-rtl`]: {direction: "rtl"}
    }
}, BP = e => {
    const {componentCls: t, cardPaddingSM: n, headerHeightSM: r, headerFontSizeSM: o} = e;
    return {
        [`${t}-small`]: {
            [`> ${t}-head`]: {
                minHeight: r,
                padding: `0 ${n}px`,
                fontSize: o,
                [`> ${t}-head-wrapper`]: {[`> ${t}-extra`]: {fontSize: e.fontSize}}
            }, [`> ${t}-body`]: {padding: n}
        },
        [`${t}-small${t}-contain-tabs`]: {
            [`> ${t}-head`]: {
                [`${t}-head-title, ${t}-extra`]: {
                    minHeight: r,
                    paddingTop: 0,
                    display: "flex",
                    alignItems: "center"
                }
            }
        }
    }
}, WP = lh("Card", (e => {
    const t = rh(e, {
        cardShadow: e.boxShadowCard,
        cardHeadPadding: e.padding,
        cardPaddingBase: e.paddingLG,
        cardActionsIconSize: e.fontSize,
        cardPaddingSM: 12
    });
    return [DP(t), BP(t)]
}), (e => ({
    headerBg: "transparent",
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + 2 * e.padding,
    headerHeightSM: e.fontSize * e.lineHeight + 2 * e.paddingXS,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText
})));
var VP = (e, t) => {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
    }
    return n
};
const KP = F.forwardRef(((e, t) => {
    const {
            prefixCls: n,
            className: r,
            rootClassName: o,
            style: a,
            extra: i,
            headStyle: l = {},
            bodyStyle: s = {},
            title: c,
            loading: u,
            bordered: d = !0,
            size: f,
            type: p,
            cover: m,
            actions: g,
            tabList: h,
            children: v,
            activeTabKey: b,
            defaultActiveTabKey: y,
            tabBarExtraContent: w,
            hoverable: x,
            tabProps: C = {}
        } = e,
        S = VP(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]), {
            getPrefixCls: E,
            direction: k,
            card: $
        } = F.useContext(Ug), O = F.useMemo((() => {
            let e = !1;
            return F.Children.forEach(v, (t => {
                t && t.type && t.type === zP && (e = !0)
            })), e
        }), [v]), P = E("card", n), [N, M] = WP(P),
        R = F.createElement(VO, {loading: !0, active: !0, paragraph: {rows: 4}, title: !1}, v), I = void 0 !== b,
        j = Object.assign(Object.assign({}, C), {
            [I ? "activeKey" : "defaultActiveKey"]: I ? b : y,
            tabBarExtraContent: w
        });
    let z;
    const T = Ub(f), _ = T && "default" !== T ? T : "large", L = h ? F.createElement(jP, Object.assign({size: _}, j, {
        className: `${P}-head-tabs`, onChange(t) {
            var n;
            null === (n = e.onTabChange) || void 0 === n || n.call(e, t)
        }, items: h.map((e => {
            var {tab: t} = e, n = VP(e, ["tab"]);
            return Object.assign({label: t}, n)
        }))
    })) : null;
    (c || i || L) && (z = F.createElement("div", {
        className: `${P}-head`,
        style: l
    }, F.createElement("div", {className: `${P}-head-wrapper`}, c && F.createElement("div", {className: `${P}-head-title`}, c), i && F.createElement("div", {className: `${P}-extra`}, i)), L));
    const A = m ? F.createElement("div", {className: `${P}-cover`}, m) : null,
        H = F.createElement("div", {className: `${P}-body`, style: s}, u ? R : v),
        D = g && g.length ? F.createElement("ul", {className: `${P}-actions`}, (e => e.map(((t, n) => F.createElement("li", {
            style: {width: 100 / e.length + "%"},
            key: `action-${n}`
        }, F.createElement("span", null, t)))))(g)) : null, B = Pf(S, ["onTabChange"]),
        W = sd(P, null == $ ? void 0 : $.className, {
            [`${P}-loading`]: u,
            [`${P}-bordered`]: d,
            [`${P}-hoverable`]: x,
            [`${P}-contain-grid`]: O,
            [`${P}-contain-tabs`]: h && h.length,
            [`${P}-${T}`]: T,
            [`${P}-type-${p}`]: !!p,
            [`${P}-rtl`]: "rtl" === k
        }, r, o, M), V = Object.assign(Object.assign({}, null == $ ? void 0 : $.style), a);
    return N(F.createElement("div", Object.assign({ref: t}, B, {className: W, style: V}), z, A, H, D))
}));
KP.Grid = zP, KP.Meta = e => {
    const {prefixCls: t, className: n, avatar: r, title: o, description: a} = e, i = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "className", "avatar", "title", "description"]), {getPrefixCls: l} = F.useContext(Ug),
        s = l("card", t), c = sd(`${s}-meta`, n),
        u = r ? F.createElement("div", {className: `${s}-meta-avatar`}, r) : null,
        d = o ? F.createElement("div", {className: `${s}-meta-title`}, o) : null,
        f = a ? F.createElement("div", {className: `${s}-meta-description`}, a) : null,
        p = d || f ? F.createElement("div", {className: `${s}-meta-detail`}, d, f) : null;
    return F.createElement("div", Object.assign({}, i, {className: c}), u, p)
};
const UP = e => {
    const {componentCls: t, sizePaddingEdgeHorizontal: n, colorSplit: r, lineWidth: o} = e;
    return {
        [t]: Object.assign(Object.assign({}, Yg(e)), {
            borderBlockStart: `${o}px solid ${r}`,
            "&-vertical": {
                position: "relative",
                top: "-0.06em",
                display: "inline-block",
                height: "0.9em",
                margin: `0 ${e.dividerVerticalGutterMargin}px`,
                verticalAlign: "middle",
                borderTop: 0,
                borderInlineStart: `${o}px solid ${r}`
            },
            "&-horizontal": {
                display: "flex",
                clear: "both",
                width: "100%",
                minWidth: "100%",
                margin: `${e.dividerHorizontalGutterMargin}px 0`
            },
            [`&-horizontal${t}-with-text`]: {
                display: "flex",
                alignItems: "center",
                margin: `${e.dividerHorizontalWithTextGutterMargin}px 0`,
                color: e.colorTextHeading,
                fontWeight: 500,
                fontSize: e.fontSizeLG,
                whiteSpace: "nowrap",
                textAlign: "center",
                borderBlockStart: `0 ${r}`,
                "&::before, &::after": {
                    position: "relative",
                    width: "50%",
                    borderBlockStart: `${o}px solid transparent`,
                    borderBlockStartColor: "inherit",
                    borderBlockEnd: 0,
                    transform: "translateY(50%)",
                    content: "''"
                }
            },
            [`&-horizontal${t}-with-text-left`]: {"&::before": {width: "5%"}, "&::after": {width: "95%"}},
            [`&-horizontal${t}-with-text-right`]: {"&::before": {width: "95%"}, "&::after": {width: "5%"}},
            [`${t}-inner-text`]: {display: "inline-block", padding: "0 1em"},
            "&-dashed": {background: "none", borderColor: r, borderStyle: "dashed", borderWidth: `${o}px 0 0`},
            [`&-horizontal${t}-with-text${t}-dashed`]: {"&::before, &::after": {borderStyle: "dashed none none"}},
            [`&-vertical${t}-dashed`]: {
                borderInlineStartWidth: o,
                borderInlineEnd: 0,
                borderBlockStart: 0,
                borderBlockEnd: 0
            },
            [`&-plain${t}-with-text`]: {color: e.colorText, fontWeight: "normal", fontSize: e.fontSize},
            [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
                "&::before": {width: 0},
                "&::after": {width: "100%"},
                [`${t}-inner-text`]: {paddingInlineStart: n}
            },
            [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
                "&::before": {width: "100%"},
                "&::after": {width: 0},
                [`${t}-inner-text`]: {paddingInlineEnd: n}
            }
        })
    }
}, GP = lh("Divider", (e => {
    const t = rh(e, {
        dividerVerticalGutterMargin: e.marginXS,
        dividerHorizontalWithTextGutterMargin: e.margin,
        dividerHorizontalGutterMargin: e.marginLG
    });
    return [UP(t)]
}), {sizePaddingEdgeHorizontal: 0}), XP = e => {
    const {getPrefixCls: t, direction: n, divider: r} = F.useContext(Ug), {
            prefixCls: o,
            type: a = "horizontal",
            orientation: i = "center",
            orientationMargin: l,
            className: s,
            rootClassName: c,
            children: u,
            dashed: d,
            plain: f,
            style: p
        } = e, m = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "plain", "style"]),
        g = t("divider", o), [h, v] = GP(g), b = i.length > 0 ? `-${i}` : i, y = !!u, w = "left" === i && null != l,
        x = "right" === i && null != l, C = sd(g, null == r ? void 0 : r.className, v, `${g}-${a}`, {
            [`${g}-with-text`]: y,
            [`${g}-with-text${b}`]: y,
            [`${g}-dashed`]: !!d,
            [`${g}-plain`]: !!f,
            [`${g}-rtl`]: "rtl" === n,
            [`${g}-no-default-orientation-margin-left`]: w,
            [`${g}-no-default-orientation-margin-right`]: x
        }, s, c), S = F.useMemo((() => "number" == typeof l ? l : /^\d+$/.test(l) ? Number(l) : l), [l]),
        E = Object.assign(Object.assign({}, w && {marginLeft: S}), x && {marginRight: S});
    return h(F.createElement("div", Object.assign({
        className: C,
        style: Object.assign(Object.assign({}, null == r ? void 0 : r.style), p)
    }, m, {role: "separator"}), u && "vertical" !== a && F.createElement("span", {
        className: `${g}-inner-text`,
        style: E
    }, u)))
};

function qP(e) {
    return !(!e.addonBefore && !e.addonAfter)
}

function YP(e) {
    return !!(e.prefix || e.suffix || e.allowClear)
}

function QP(e, t, n, r) {
    if (n) {
        var o = t;
        if ("click" === t.type) {
            var a = e.cloneNode(!0);
            return o = Object.create(t, {target: {value: a}, currentTarget: {value: a}}), a.value = "", void n(o)
        }
        if (void 0 !== r) return o = Object.create(t, {
            target: {value: e},
            currentTarget: {value: e}
        }), e.value = r, void n(o);
        n(o)
    }
}

function ZP(e) {
    return null == e ? "" : String(e)
}

var JP = e => {
        var t, n, r = e.inputElement, o = e.prefixCls, a = e.prefix, i = e.suffix, l = e.addonBefore, s = e.addonAfter,
            c = e.className, u = e.style, d = e.disabled, f = e.readOnly, p = e.focused, m = e.triggerFocus,
            g = e.allowClear, h = e.value, v = e.handleReset, b = e.hidden, y = e.classes, w = e.classNames,
            x = e.dataAttrs, C = e.styles, S = e.components, E = (null == S ? void 0 : S.affixWrapper) || "span",
            k = (null == S ? void 0 : S.groupWrapper) || "span", $ = (null == S ? void 0 : S.wrapper) || "span",
            O = (null == S ? void 0 : S.groupAddon) || "span", P = F.useRef(null), N = F.cloneElement(r, {
                value: h,
                hidden: b,
                className: sd(null === (t = r.props) || void 0 === t ? void 0 : t.className, !YP(e) && !qP(e) && c) || null,
                style: Cd(Cd({}, null === (n = r.props) || void 0 === n ? void 0 : n.style), YP(e) || qP(e) ? {} : u)
            });
        if (YP(e)) {
            var M, R = "".concat(o, "-affix-wrapper"),
                I = sd(R, (wd(M = {}, "".concat(R, "-disabled"), d), wd(M, "".concat(R, "-focused"), p), wd(M, "".concat(R, "-readonly"), f), wd(M, "".concat(R, "-input-with-clear-btn"), i && g && h), M), !qP(e) && c, null == y ? void 0 : y.affixWrapper, null == w ? void 0 : w.affixWrapper),
                j = (i || g) && A.createElement("span", {
                    className: sd("".concat(o, "-suffix"), null == w ? void 0 : w.suffix),
                    style: null == C ? void 0 : C.suffix
                }, (() => {
                    var e;
                    if (!g) return null;
                    var t = !d && !f && h, n = "".concat(o, "-clear-icon"),
                        r = "object" === Yu(g) && null != g && g.clearIcon ? g.clearIcon : "✖";
                    return A.createElement("span", {
                        onClick: v,
                        onMouseDown(e) {
                            return e.preventDefault()
                        },
                        className: sd(n, (e = {}, wd(e, "".concat(n, "-hidden"), !t), wd(e, "".concat(n, "-has-suffix"), !!i), e)),
                        role: "button",
                        tabIndex: -1
                    }, r)
                })(), i);
            N = A.createElement(E, cd({
                className: I,
                style: Cd(Cd({}, qP(e) ? void 0 : u), null == C ? void 0 : C.affixWrapper),
                hidden: !qP(e) && b,
                onClick(e) {
                    var t;
                    null !== (t = P.current) && void 0 !== t && t.contains(e.target) && (null == m || m())
                }
            }, null == x ? void 0 : x.affixWrapper, {ref: P}), a && A.createElement("span", {
                className: sd("".concat(o, "-prefix"), null == w ? void 0 : w.prefix),
                style: null == C ? void 0 : C.prefix
            }, a), F.cloneElement(r, {value: h, hidden: null}), j)
        }
        if (qP(e)) {
            var z = "".concat(o, "-group"), T = "".concat(z, "-addon"),
                _ = sd("".concat(o, "-wrapper"), z, null == y ? void 0 : y.wrapper),
                L = sd("".concat(o, "-group-wrapper"), c, null == y ? void 0 : y.group);
            return A.createElement(k, {
                className: L,
                style: u,
                hidden: b
            }, A.createElement($, {className: _}, l && A.createElement(O, {className: T}, l), F.cloneElement(N, {hidden: null}), s && A.createElement(O, {className: T}, s)))
        }
        return N
    },
    eN = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "classes", "classNames", "styles"],
    tN = F.forwardRef(((e, t) => {
        var n = e.autoComplete, r = e.onChange, o = e.onFocus, a = e.onBlur, i = e.onPressEnter, l = e.onKeyDown,
            s = e.prefixCls, c = void 0 === s ? "rc-input" : s, u = e.disabled, d = e.htmlSize, f = e.className,
            p = e.maxLength, m = e.suffix, g = e.showCount, h = e.type, v = void 0 === h ? "text" : h, b = e.classes,
            y = e.classNames, w = e.styles, x = tp(e, eN), C = Df(Vg(e.defaultValue, {value: e.value}), 2), S = C[0],
            E = C[1], k = Df(F.useState(!1), 2), $ = k[0], O = k[1], P = F.useRef(null), N = e => {
                P.current && ((e, t) => {
                    if (e) {
                        e.focus(t);
                        var n = (t || {}).cursor;
                        if (n) {
                            var r = e.value.length;
                            switch (n) {
                                case"start":
                                    e.setSelectionRange(0, 0);
                                    break;
                                case"end":
                                    e.setSelectionRange(r, r);
                                    break;
                                default:
                                    e.setSelectionRange(0, r)
                            }
                        }
                    }
                })(P.current, e)
            };
        F.useImperativeHandle(t, (() => ({
            focus: N, blur() {
                var e;
                null === (e = P.current) || void 0 === e || e.blur()
            }, setSelectionRange(e, t, n) {
                var r;
                null === (r = P.current) || void 0 === r || r.setSelectionRange(e, t, n)
            }, select() {
                var e;
                null === (e = P.current) || void 0 === e || e.select()
            }, input: P.current
        }))), F.useEffect((() => {
            O((e => (!e || !u) && e))
        }), [u]);
        var M;
        return A.createElement(JP, cd({}, x, {
            prefixCls: c,
            className: f,
            inputElement: (M = Pf(e, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "showCount", "classes", "htmlSize", "styles", "classNames"]), A.createElement("input", cd({autoComplete: n}, M, {
                onChange(t) {
                    void 0 === e.value && E(t.target.value), P.current && QP(P.current, t, r)
                },
                onFocus(e) {
                    O(!0), null == o || o(e)
                },
                onBlur(e) {
                    O(!1), null == a || a(e)
                },
                onKeyDown(e) {
                    i && "Enter" === e.key && i(e), null == l || l(e)
                },
                className: sd(c, wd({}, "".concat(c, "-disabled"), u), null == y ? void 0 : y.input),
                style: null == w ? void 0 : w.input,
                ref: P,
                size: d,
                type: v
            }))),
            handleReset(e) {
                E(""), N(), P.current && QP(P.current, e, r)
            },
            value: ZP(S),
            focused: $,
            triggerFocus: N,
            suffix: (() => {
                var e = Number(p) > 0;
                if (m || g) {
                    var t = ZP(S), n = If(t).length, r = "object" === Yu(g) ? g.formatter({
                        value: t,
                        count: n,
                        maxLength: p
                    }) : "".concat(n).concat(e ? " / ".concat(p) : "");
                    return A.createElement(A.Fragment, null, !!g && A.createElement("span", {
                        className: sd("".concat(c, "-show-count-suffix"), wd({}, "".concat(c, "-show-count-has-suffix"), !!m), null == y ? void 0 : y.count),
                        style: Cd({}, null == w ? void 0 : w.count)
                    }, r), m)
                }
                return null
            })(),
            disabled: u,
            classes: b,
            classNames: y,
            styles: w
        }))
    }));

function nN(e, t) {
    const n = F.useRef([]), r = () => {
        n.current.push(setTimeout((() => {
            var t, n, r, o;
            (null === (t = e.current) || void 0 === t ? void 0 : t.input) && "password" === (null === (n = e.current) || void 0 === n ? void 0 : n.input.getAttribute("type")) && (null === (r = e.current) || void 0 === r ? void 0 : r.input.hasAttribute("value")) && (null === (o = e.current) || void 0 === o || o.input.removeAttribute("value"))
        })))
    };
    return F.useEffect((() => (t && r(), () => n.current.forEach((e => {
        e && clearTimeout(e)
    })))), []), r
}

const rN = F.forwardRef(((e, t) => {
    var n;
    const {
            prefixCls: r,
            bordered: o = !0,
            status: a,
            size: i,
            disabled: l,
            onBlur: s,
            onFocus: c,
            suffix: u,
            allowClear: d,
            addonAfter: f,
            addonBefore: p,
            className: m,
            style: g,
            styles: h,
            rootClassName: v,
            onChange: b,
            classNames: y
        } = e, w = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames"]), {
            getPrefixCls: x,
            direction: C,
            input: S
        } = A.useContext(Ug), E = x("input", r), k = F.useRef(null), [$, O] = CO(E), {
            compactSize: P,
            compactItemClassnames: N
        } = Zb(E, C), M = Ub((e => {
            var t;
            return null !== (t = null != i ? i : P) && void 0 !== t ? t : e
        })), R = A.useContext(dh), I = null != l ? l : R, {status: j, hasFeedback: z, feedbackIcon: T} = F.useContext(Cx),
        _ = NE(j, a), L = (e => !!(e.prefix || e.suffix || e.allowClear))(e) || !!z, H = F.useRef(L);
    F.useEffect((() => {
        L && H.current, H.current = L
    }), [L]);
    const D = nN(k, !0), B = (z || u) && A.createElement(A.Fragment, null, u, z && T);
    let W;
    return "object" == typeof d && (null == d ? void 0 : d.clearIcon) ? W = d : d && (W = {clearIcon: A.createElement(zv, null)}), $(A.createElement(tN, Object.assign({
        ref: Gd(t, k),
        prefixCls: E,
        autoComplete: null == S ? void 0 : S.autoComplete
    }, w, {
        disabled: I,
        onBlur(e) {
            D(), null == s || s(e)
        },
        onFocus(e) {
            D(), null == c || c(e)
        },
        style: Object.assign(Object.assign({}, null == S ? void 0 : S.style), g),
        styles: Object.assign(Object.assign({}, null == S ? void 0 : S.styles), h),
        suffix: B,
        allowClear: W,
        className: sd(m, v, N, null == S ? void 0 : S.className),
        onChange(e) {
            D(), null == b || b(e)
        },
        addonAfter: f && A.createElement(Jb, null, A.createElement(Sx, {override: !0, status: !0}, f)),
        addonBefore: p && A.createElement(Jb, null, A.createElement(Sx, {override: !0, status: !0}, p)),
        classNames: Object.assign(Object.assign(Object.assign({}, y), null == S ? void 0 : S.classNames), {
            input: sd({
                [`${E}-sm`]: "small" === M,
                [`${E}-lg`]: "large" === M,
                [`${E}-rtl`]: "rtl" === C,
                [`${E}-borderless`]: !o
            }, !L && PE(E, _), null == y ? void 0 : y.input, null === (n = null == S ? void 0 : S.classNames) || void 0 === n ? void 0 : n.input, O)
        }),
        classes: {
            affixWrapper: sd({
                [`${E}-affix-wrapper-sm`]: "small" === M,
                [`${E}-affix-wrapper-lg`]: "large" === M,
                [`${E}-affix-wrapper-rtl`]: "rtl" === C,
                [`${E}-affix-wrapper-borderless`]: !o
            }, PE(`${E}-affix-wrapper`, _, z), O),
            wrapper: sd({[`${E}-group-rtl`]: "rtl" === C}, O),
            group: sd({
                [`${E}-group-wrapper-sm`]: "small" === M,
                [`${E}-group-wrapper-lg`]: "large" === M,
                [`${E}-group-wrapper-rtl`]: "rtl" === C,
                [`${E}-group-wrapper-disabled`]: I
            }, PE(`${E}-group-wrapper`, _, z), O)
        }
    })))
}));
var oN = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}
        }, {
            tag: "path",
            attrs: {d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}
        }]
    }, name: "eye-invisible", theme: "outlined"
}, aN = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: oN})), iN = F.forwardRef(aN), lN = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}
        }]
    }, name: "eye", theme: "outlined"
}, sN = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: lN})), cN = F.forwardRef(sN);
const uN = e => e ? F.createElement(cN, null) : F.createElement(iN, null),
    dN = {click: "onClick", hover: "onMouseOver"}, fN = F.forwardRef(((e, t) => {
        const {visibilityToggle: n = !0} = e,
            r = "object" == typeof n && void 0 !== n.visible, [o, a] = F.useState((() => !!r && n.visible)),
            i = F.useRef(null);
        F.useEffect((() => {
            r && a(n.visible)
        }), [r, n]);
        const l = nN(i), s = () => {
                const {disabled: t} = e;
                t || (o && l(), a((e => {
                    var t;
                    const r = !e;
                    return "object" == typeof n && (null === (t = n.onVisibleChange) || void 0 === t || t.call(n, r)), r
                })))
            }, {className: c, prefixCls: u, inputPrefixCls: d, size: f} = e, p = ((e, t) => {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            })(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {getPrefixCls: m} = F.useContext(Ug),
            g = m("input", d), h = m("input-password", u), v = n && (t => {
                const {action: n = "click", iconRender: r = uN} = e, a = dN[n] || "", i = r(o), l = {
                    [a]: s, className: `${t}-icon`, key: "passwordIcon", onMouseDown(e) {
                        e.preventDefault()
                    }, onMouseUp(e) {
                        e.preventDefault()
                    }
                };
                return F.cloneElement(F.isValidElement(i) ? i : F.createElement("span", null, i), l)
            })(h), b = sd(h, c, {[`${h}-${f}`]: !!f}),
            y = Object.assign(Object.assign({}, Pf(p, ["suffix", "iconRender", "visibilityToggle"])), {
                type: o ? "text" : "password",
                className: b,
                prefixCls: g,
                suffix: v
            });
        return f && (y.size = f), F.createElement(rN, Object.assign({ref: Gd(t, i)}, y))
    })), pN = F.forwardRef(((e, t) => {
        const {
                prefixCls: n,
                inputPrefixCls: r,
                className: o,
                size: a,
                suffix: i,
                enterButton: l = !1,
                addonAfter: s,
                loading: c,
                disabled: u,
                onSearch: d,
                onChange: f,
                onCompositionStart: p,
                onCompositionEnd: m
            } = e, g = ((e, t) => {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            })(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
                getPrefixCls: h,
                direction: v
            } = F.useContext(Ug), b = F.useRef(!1), y = h("input-search", n), w = h("input", r), {compactSize: x} = Zb(y, v),
            C = Ub((e => {
                var t;
                return null !== (t = null != a ? a : x) && void 0 !== t ? t : e
            })), S = F.useRef(null), E = e => {
                var t;
                document.activeElement === (null === (t = S.current) || void 0 === t ? void 0 : t.input) && e.preventDefault()
            }, k = e => {
                var t, n;
                d && d(null === (n = null === (t = S.current) || void 0 === t ? void 0 : t.input) || void 0 === n ? void 0 : n.value, e)
            }, $ = "boolean" == typeof l ? F.createElement(ak, null) : null, O = `${y}-button`;
        let P;
        const N = l || {}, M = N.type && !0 === N.type.__ANT_BUTTON;
        P = M || "button" === N.type ? qv(N, Object.assign({
            onMouseDown: E, onClick(e) {
                var t, n;
                null === (n = null === (t = null == N ? void 0 : N.props) || void 0 === t ? void 0 : t.onClick) || void 0 === n || n.call(t, e), k(e)
            }, key: "enterButton"
        }, M ? {className: O, size: C} : {})) : F.createElement(Wy, {
            className: O,
            type: l ? "primary" : void 0,
            size: C,
            disabled: u,
            key: "enterButton",
            onMouseDown: E,
            onClick: k,
            loading: c,
            icon: $
        }, l), s && (P = [P, qv(s, {key: "addonAfter"})]);
        const R = sd(y, {[`${y}-rtl`]: "rtl" === v, [`${y}-${C}`]: !!C, [`${y}-with-button`]: !!l}, o);
        return F.createElement(rN, Object.assign({
            ref: Gd(S, t), onPressEnter(e) {
                b.current || c || k(e)
            }
        }, g, {
            size: C, onCompositionStart(e) {
                b.current = !0, null == p || p(e)
            }, onCompositionEnd(e) {
                b.current = !1, null == m || m(e)
            }, prefixCls: w, addonAfter: P, suffix: i, onChange(e) {
                e && e.target && "click" === e.type && d && d(e.target.value, e), f && f(e)
            }, className: R, disabled: u
        }))
    }));
var mN,
    gN = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"],
    hN = {};
var vN = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"],
    bN = F.forwardRef(((e, t) => {
        var n = e, r = n.prefixCls;
        n.onPressEnter;
        var o = n.defaultValue, a = n.value, i = n.autoSize, l = n.onResize, s = n.className, c = n.style,
            u = n.disabled, d = n.onChange;
        n.onInternalAutoSize;
        var f = tp(n, vN), p = Df(Vg(o, {value: a, postState: e => null != e ? e : ""}), 2), m = p[0], g = p[1],
            h = F.useRef();
        F.useImperativeHandle(t, (() => ({textArea: h.current})));
        var v = Df(F.useMemo((() => i && "object" === Yu(i) ? [i.minRows, i.maxRows] : []), [i]), 2), b = v[0],
            y = v[1], w = !!i, x = Df(F.useState(2), 2), C = x[0], S = x[1], E = Df(F.useState(), 2), k = E[0],
            $ = E[1], O = () => {
                S(0)
            };
        Sp((() => {
            w && O()
        }), [a, b, y, w]), Sp((() => {
            if (0 === C) S(1); else if (1 === C) {
                var e = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    mN || ((mN = document.createElement("textarea")).setAttribute("tab-index", "-1"), mN.setAttribute("aria-hidden", "true"), document.body.appendChild(mN)), e.getAttribute("wrap") ? mN.setAttribute("wrap", e.getAttribute("wrap")) : mN.removeAttribute("wrap");
                    var o = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
                        if (t && hN[n]) return hN[n];
                        var r = window.getComputedStyle(e),
                            o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"),
                            a = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")),
                            i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")),
                            l = {
                                sizingStyle: gN.map((e => "".concat(e, ":").concat(r.getPropertyValue(e)))).join(";"),
                                paddingSize: a,
                                borderSize: i,
                                boxSizing: o
                            };
                        return t && n && (hN[n] = l), l
                    }(e, t), a = o.paddingSize, i = o.borderSize, l = o.boxSizing, s = o.sizingStyle;
                    mN.setAttribute("style", "".concat(s, ";").concat("\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n")), mN.value = e.value || e.placeholder || "";
                    var c, u = void 0, d = void 0, f = mN.scrollHeight;
                    if ("border-box" === l ? f += i : "content-box" === l && (f -= a), null !== n || null !== r) {
                        mN.value = " ";
                        var p = mN.scrollHeight - a;
                        null !== n && (u = p * n, "border-box" === l && (u = u + a + i), f = Math.max(u, f)), null !== r && (d = p * r, "border-box" === l && (d = d + a + i), c = f > d ? "" : "hidden", f = Math.min(d, f))
                    }
                    var m = {height: f, overflowY: c, resize: "none"};
                    return u && (m.minHeight = u), d && (m.maxHeight = d), m
                }(h.current, !1, b, y);
                S(2), $(e)
            } else (() => {
                try {
                    if (document.activeElement === h.current) {
                        var e = h.current, t = e.selectionStart, n = e.selectionEnd, r = e.scrollTop;
                        h.current.setSelectionRange(t, n), h.current.scrollTop = r
                    }
                } catch (CM) {
                }
            })()
        }), [C]);
        var P = F.useRef(), N = () => {
            Ff.cancel(P.current)
        };
        F.useEffect((() => N), []);
        var M = w ? k : null, R = Cd(Cd({}, c), M);
        return 0 !== C && 1 !== C || (R.overflowY = "hidden", R.overflowX = "hidden"), F.createElement(Of, {
            onResize(e) {
                2 === C && (null == l || l(e), i && (N(), P.current = Ff((() => {
                    O()
                }))))
            }, disabled: !(i || l)
        }, F.createElement("textarea", cd({}, f, {
            ref: h,
            style: R,
            className: sd(r, s, wd({}, "".concat(r, "-disabled"), u)),
            disabled: u,
            value: m,
            onChange(e) {
                g(e.target.value), null == d || d(e)
            }
        })))
    })),
    yN = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"];

function wN(e, t) {
    return If(e || "").slice(0, t).join("")
}

function xN(e, t, n, r) {
    var o = n;
    return e ? o = wN(n, r) : If(t || "").length < n.length && If(n || "").length > r && (o = t), o
}

var CN = A.forwardRef(((e, t) => {
    var n, r = e.defaultValue, o = e.value, a = e.onFocus, i = e.onBlur, l = e.onChange, s = e.allowClear,
        c = e.maxLength, u = e.onCompositionStart, d = e.onCompositionEnd, f = e.suffix, p = e.prefixCls,
        m = void 0 === p ? "rc-textarea" : p, g = e.classes, h = e.showCount, v = e.className, b = e.style,
        y = e.disabled, w = e.hidden, x = e.classNames, C = e.styles, S = e.onResize, E = tp(e, yN),
        k = Df(Vg(r, {value: o, defaultValue: r}), 2), $ = k[0], O = k[1], P = F.useRef(null),
        N = Df(A.useState(!1), 2), M = N[0], R = N[1], I = Df(A.useState(!1), 2), j = I[0], z = I[1], T = A.useRef(),
        _ = A.useRef(0), L = Df(A.useState(null), 2), H = L[0], D = L[1], B = () => {
            var e;
            null === (e = P.current) || void 0 === e || e.textArea.focus()
        };
    F.useImperativeHandle(t, (() => ({
        resizableTextArea: P.current, focus: B, blur() {
            var e;
            null === (e = P.current) || void 0 === e || e.textArea.blur()
        }
    }))), F.useEffect((() => {
        R((e => !y && e))
    }), [y]);
    var W = Number(c) > 0, V = ZP($);
    !j && W && null == o && (V = wN(V, c));
    var K, U = f;
    if (h) {
        var G = If(V).length;
        K = "object" === Yu(h) ? h.formatter({
            value: V,
            count: G,
            maxLength: c
        }) : "".concat(G).concat(W ? " / ".concat(c) : ""), U = A.createElement(A.Fragment, null, U, A.createElement("span", {
            className: sd("".concat(m, "-data-count"), null == x ? void 0 : x.count),
            style: null == C ? void 0 : C.count
        }, K))
    }
    var X = !E.autoSize && !h && !s;
    return A.createElement(JP, {
        value: V,
        allowClear: s,
        handleReset(e) {
            var t;
            O(""), B(), QP(null === (t = P.current) || void 0 === t ? void 0 : t.textArea, e, l)
        },
        suffix: U,
        prefixCls: m,
        classes: {affixWrapper: sd(null == g ? void 0 : g.affixWrapper, (n = {}, wd(n, "".concat(m, "-show-count"), h), wd(n, "".concat(m, "-textarea-allow-clear"), s), n))},
        disabled: y,
        focused: M,
        className: v,
        style: Cd(Cd({}, b), H && !X ? {height: "auto"} : {}),
        dataAttrs: {affixWrapper: {"data-count": "string" == typeof K ? K : void 0}},
        hidden: w,
        inputElement: A.createElement(bN, cd({}, E, {
            onKeyDown(e) {
                var t = E.onPressEnter, n = E.onKeyDown;
                "Enter" === e.key && t && t(e), null == n || n(e)
            },
            onChange(e) {
                var t = e.target.value;
                !j && W && (t = xN(e.target.selectionStart >= c + 1 || e.target.selectionStart === t.length || !e.target.selectionStart, $, t, c)), O(t), QP(e.currentTarget, e, l, t)
            },
            onFocus(e) {
                R(!0), null == a || a(e)
            },
            onBlur(e) {
                R(!1), null == i || i(e)
            },
            onCompositionStart(e) {
                z(!0), T.current = $, _.current = e.currentTarget.selectionStart, null == u || u(e)
            },
            onCompositionEnd(e) {
                z(!1);
                var t, n = e.currentTarget.value;
                W && (n = xN(_.current >= c + 1 || _.current === (null === (t = T.current) || void 0 === t ? void 0 : t.length), T.current, n, c)), n !== $ && (O(n), QP(e.currentTarget, e, l, n)), null == d || d(e)
            },
            className: null == x ? void 0 : x.textarea,
            style: Cd(Cd({}, null == C ? void 0 : C.textarea), {}, {resize: null == b ? void 0 : b.resize}),
            disabled: y,
            prefixCls: m,
            onResize(e) {
                var t;
                null == S || S(e), null !== (t = P.current) && void 0 !== t && t.textArea.style.height && D(!0)
            },
            ref: P
        }))
    })
}));
const SN = F.forwardRef(((e, t) => {
    const {
        prefixCls: n,
        bordered: r = !0,
        size: o,
        disabled: a,
        status: i,
        allowClear: l,
        showCount: s,
        classNames: c
    } = e, u = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "showCount", "classNames"]), {
        getPrefixCls: d,
        direction: f
    } = F.useContext(Ug), p = Ub(o), m = F.useContext(dh), g = null != a ? a : m, {
        status: h,
        hasFeedback: v,
        feedbackIcon: b
    } = F.useContext(Cx), y = NE(h, i), w = F.useRef(null);
    F.useImperativeHandle(t, (() => {
        var e;
        return {
            resizableTextArea: null === (e = w.current) || void 0 === e ? void 0 : e.resizableTextArea, focus(e) {
                var t, n;
                ((e, t) => {
                    if (!e) return;
                    e.focus(t);
                    const {cursor: n} = t || {};
                    if (n) {
                        const t = e.value.length;
                        switch (n) {
                            case"start":
                                e.setSelectionRange(0, 0);
                                break;
                            case"end":
                                e.setSelectionRange(t, t);
                                break;
                            default:
                                e.setSelectionRange(0, t)
                        }
                    }
                })(null === (n = null === (t = w.current) || void 0 === t ? void 0 : t.resizableTextArea) || void 0 === n ? void 0 : n.textArea, e)
            }, blur() {
                var e;
                return null === (e = w.current) || void 0 === e ? void 0 : e.blur()
            }
        }
    }));
    const x = d("input", n);
    let C;
    "object" == typeof l && (null == l ? void 0 : l.clearIcon) ? C = l : l && (C = {clearIcon: F.createElement(zv, null)});
    const [S, E] = CO(x);
    return S(F.createElement(CN, Object.assign({}, u, {
        disabled: g,
        allowClear: C,
        classes: {
            affixWrapper: sd(`${x}-textarea-affix-wrapper`, {
                [`${x}-affix-wrapper-rtl`]: "rtl" === f,
                [`${x}-affix-wrapper-borderless`]: !r,
                [`${x}-affix-wrapper-sm`]: "small" === p,
                [`${x}-affix-wrapper-lg`]: "large" === p,
                [`${x}-textarea-show-count`]: s
            }, PE(`${x}-affix-wrapper`, y), E)
        },
        classNames: Object.assign(Object.assign({}, c), {
            textarea: sd({
                [`${x}-borderless`]: !r,
                [`${x}-sm`]: "small" === p,
                [`${x}-lg`]: "large" === p
            }, PE(x, y), E, null == c ? void 0 : c.textarea)
        }),
        prefixCls: x,
        suffix: v && F.createElement("span", {className: `${x}-textarea-suffix`}, b),
        showCount: s,
        ref: w
    })))
})), EN = rN;
EN.Group = e => {
    const {getPrefixCls: t, direction: n} = F.useContext(Ug), {prefixCls: r, className: o} = e, a = t("input-group", r),
        i = t("input"), [l, s] = CO(i), c = sd(a, {
            [`${a}-lg`]: "large" === e.size,
            [`${a}-sm`]: "small" === e.size,
            [`${a}-compact`]: e.compact,
            [`${a}-rtl`]: "rtl" === n
        }, s, o), u = F.useContext(Cx),
        d = F.useMemo((() => Object.assign(Object.assign({}, u), {isFormItemInput: !1})), [u]);
    return l(F.createElement("span", {
        className: c,
        style: e.style,
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        onFocus: e.onFocus,
        onBlur: e.onBlur
    }, F.createElement(Cx.Provider, {value: d}, e.children)))
}, EN.Search = pN, EN.TextArea = SN, EN.Password = fN;
const kN = A.createContext({});

function $N(e) {
    return null != e
}

const ON = e => {
    const {
        itemPrefixCls: t,
        component: n,
        span: r,
        className: o,
        style: a,
        labelStyle: i,
        contentStyle: l,
        bordered: s,
        label: c,
        content: u,
        colon: d
    } = e, f = n;
    return s ? F.createElement(f, {
        className: sd({[`${t}-item-label`]: $N(c), [`${t}-item-content`]: $N(u)}, o),
        style: a,
        colSpan: r
    }, $N(c) && F.createElement("span", {style: i}, c), $N(u) && F.createElement("span", {style: l}, u)) : F.createElement(f, {
        className: sd(`${t}-item`, o),
        style: a,
        colSpan: r
    }, F.createElement("div", {className: `${t}-item-container`}, (c || 0 === c) && F.createElement("span", {
        className: sd(`${t}-item-label`, {[`${t}-item-no-colon`]: !d}),
        style: i
    }, c), (u || 0 === u) && F.createElement("span", {className: sd(`${t}-item-content`), style: l}, u)))
};

function PN(e, t, n) {
    let {colon: r, prefixCls: o, bordered: a} = t, {
        component: i,
        type: l,
        showLabel: s,
        showContent: c,
        labelStyle: u,
        contentStyle: d
    } = n;
    return e.map(((e, t) => {
        let {
            label: n,
            children: f,
            prefixCls: p = o,
            className: m,
            style: g,
            labelStyle: h,
            contentStyle: v,
            span: b = 1,
            key: y
        } = e;
        return "string" == typeof i ? F.createElement(ON, {
            key: `${l}-${y || t}`,
            className: m,
            style: g,
            labelStyle: Object.assign(Object.assign({}, u), h),
            contentStyle: Object.assign(Object.assign({}, d), v),
            span: b,
            colon: r,
            component: i,
            itemPrefixCls: p,
            bordered: a,
            label: s ? n : null,
            content: c ? f : null
        }) : [F.createElement(ON, {
            key: `label-${y || t}`,
            className: m,
            style: Object.assign(Object.assign(Object.assign({}, u), g), h),
            span: 1,
            colon: r,
            component: i[0],
            itemPrefixCls: p,
            bordered: a,
            label: n
        }), F.createElement(ON, {
            key: `content-${y || t}`,
            className: m,
            style: Object.assign(Object.assign(Object.assign({}, d), g), v),
            span: 2 * b - 1,
            component: i[1],
            itemPrefixCls: p,
            bordered: a,
            content: f
        })]
    }))
}

const NN = e => {
    const t = F.useContext(kN), {prefixCls: n, vertical: r, row: o, index: a, bordered: i} = e;
    return r ? F.createElement(F.Fragment, null, F.createElement("tr", {
        key: `label-${a}`,
        className: `${n}-row`
    }, PN(o, e, Object.assign({
        component: "th",
        type: "label",
        showLabel: !0
    }, t))), F.createElement("tr", {
        key: `content-${a}`,
        className: `${n}-row`
    }, PN(o, e, Object.assign({
        component: "td",
        type: "content",
        showContent: !0
    }, t)))) : F.createElement("tr", {
        key: a,
        className: `${n}-row`
    }, PN(o, e, Object.assign({component: i ? ["th", "td"] : "td", type: "item", showLabel: !0, showContent: !0}, t)))
};

function MN(e, t, n) {
    let r = e;
    return (void 0 === n || n > t) && (r = Object.assign(Object.assign({}, e), {span: t})), r
}

function RN(e, t) {
    const n = [];
    let r = [], o = t;
    return e.filter((e => e)).forEach(((a, i) => {
        const l = null == a ? void 0 : a.span, s = l || 1;
        if (i === e.length - 1) return r.push(MN(a, o, l)), void n.push(r);
        s < o ? (o -= s, r.push(a)) : (r.push(MN(a, o, s)), n.push(r), o = t, r = [])
    })), n
}

const IN = e => {
    const {componentCls: t, labelBg: n} = e;
    return {
        [`&${t}-bordered`]: {
            [`> ${t}-view`]: {
                border: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
                "> table": {tableLayout: "auto", borderCollapse: "collapse"},
                [`${t}-row`]: {
                    borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
                    "&:last-child": {borderBottom: "none"},
                    [`> ${t}-item-label, > ${t}-item-content`]: {
                        padding: `${e.padding}px ${e.paddingLG}px`,
                        borderInlineEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
                        "&:last-child": {borderInlineEnd: "none"}
                    },
                    [`> ${t}-item-label`]: {
                        color: e.colorTextSecondary,
                        backgroundColor: n,
                        "&::after": {display: "none"}
                    }
                }
            },
            [`&${t}-middle`]: {[`${t}-row`]: {[`> ${t}-item-label, > ${t}-item-content`]: {padding: `${e.paddingSM}px ${e.paddingLG}px`}}},
            [`&${t}-small`]: {[`${t}-row`]: {[`> ${t}-item-label, > ${t}-item-content`]: {padding: `${e.paddingXS}px ${e.padding}px`}}}
        }
    }
}, jN = e => {
    const {
        componentCls: t,
        extraColor: n,
        itemPaddingBottom: r,
        colonMarginRight: o,
        colonMarginLeft: a,
        titleMarginBottom: i
    } = e;
    return {
        [t]: Object.assign(Object.assign(Object.assign({}, Yg(e)), IN(e)), {
            "&-rtl": {direction: "rtl"},
            [`${t}-header`]: {display: "flex", alignItems: "center", marginBottom: i},
            [`${t}-title`]: Object.assign(Object.assign({}, qg), {
                flex: "auto",
                color: e.colorText,
                fontWeight: e.fontWeightStrong,
                fontSize: e.fontSizeLG,
                lineHeight: e.lineHeightLG
            }),
            [`${t}-extra`]: {marginInlineStart: "auto", color: n, fontSize: e.fontSize},
            [`${t}-view`]: {
                width: "100%",
                borderRadius: e.borderRadiusLG,
                table: {width: "100%", tableLayout: "fixed"}
            },
            [`${t}-row`]: {"> th, > td": {paddingBottom: r}, "&:last-child": {borderBottom: "none"}},
            [`${t}-item-label`]: {
                color: e.colorTextTertiary,
                fontWeight: "normal",
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                textAlign: "start",
                "&::after": {content: '":"', position: "relative", top: -.5, marginInline: `${a}px ${o}px`},
                [`&${t}-item-no-colon::after`]: {content: '""'}
            },
            [`${t}-item-no-label`]: {"&::after": {margin: 0, content: '""'}},
            [`${t}-item-content`]: {
                display: "table-cell",
                flex: 1,
                color: e.colorText,
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                wordBreak: "break-word",
                overflowWrap: "break-word"
            },
            [`${t}-item`]: {
                paddingBottom: 0,
                verticalAlign: "top",
                "&-container": {
                    display: "flex",
                    [`${t}-item-label`]: {display: "inline-flex", alignItems: "baseline"},
                    [`${t}-item-content`]: {display: "inline-flex", alignItems: "baseline"}
                }
            },
            "&-middle": {[`${t}-row`]: {"> th, > td": {paddingBottom: e.paddingSM}}},
            "&-small": {[`${t}-row`]: {"> th, > td": {paddingBottom: e.paddingXS}}}
        })
    }
}, zN = lh("Descriptions", (e => {
    const t = rh(e, {});
    return [jN(t)]
}), (e => ({
    labelBg: e.colorFillAlter,
    titleMarginBottom: e.fontSizeSM * e.lineHeightSM,
    itemPaddingBottom: e.padding,
    colonMarginRight: e.marginXS,
    colonMarginLeft: e.marginXXS / 2,
    extraColor: e.colorText
}))), TN = {xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}, _N = e => {
    const {
            prefixCls: t,
            title: n,
            extra: r,
            column: o = TN,
            colon: a = !0,
            bordered: i,
            layout: l,
            children: s,
            className: c,
            rootClassName: u,
            style: d,
            size: f,
            labelStyle: p,
            contentStyle: m,
            items: g
        } = e, h = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "title", "extra", "column", "colon", "bordered", "layout", "children", "className", "rootClassName", "style", "size", "labelStyle", "contentStyle", "items"]), {
            getPrefixCls: v,
            direction: b,
            descriptions: y
        } = F.useContext(Ug), w = v("descriptions", t), [x, C] = F.useState({}), S = ((e, t) => {
            if ("number" == typeof e) return e;
            if ("object" == typeof e) for (let n = 0; n < dk.length; n++) {
                const r = dk[n];
                if (t[r] && void 0 !== e[r]) return e[r] || TN[r]
            }
            return 3
        })(o, x), E = Ub(f),
        k = ((e, t, n) => F.useMemo((() => Array.isArray(t) ? RN(t, e) : RN(md(n).map((e => Object.assign({}, null == e ? void 0 : e.props))), e)), [t, n, e]))(S, g, s), [$, O] = zN(w),
        P = function () {
            const [, e] = Hg(), t = (e => ({
                xs: `(max-width: ${e.screenXSMax}px)`,
                sm: `(min-width: ${e.screenSM}px)`,
                md: `(min-width: ${e.screenMD}px)`,
                lg: `(min-width: ${e.screenLG}px)`,
                xl: `(min-width: ${e.screenXL}px)`,
                xxl: `(min-width: ${e.screenXXL}px)`
            }))((e => {
                const t = e, n = [].concat(dk).reverse();
                return n.forEach(((e, r) => {
                    const o = e.toUpperCase(), a = `screen${o}Min`, i = `screen${o}`;
                    if (!(t[a] <= t[i])) throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);
                    if (r < n.length - 1) {
                        const e = `screen${o}Max`;
                        if (!(t[i] <= t[e])) throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
                        const a = `screen${n[r + 1].toUpperCase()}Min`;
                        if (!(t[e] <= t[a])) throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)
                    }
                })), e
            })(e));
            return A.useMemo((() => {
                const e = new Map;
                let n = -1, r = {};
                return {
                    matchHandlers: {}, dispatch: t => (r = t, e.forEach((e => e(r))), e.size >= 1), subscribe(t) {
                        return e.size || this.register(), n += 1, e.set(n, t), t(r), n
                    }, unsubscribe(t) {
                        e.delete(t), e.size || this.unregister()
                    }, unregister() {
                        Object.keys(t).forEach((e => {
                            const n = t[e], r = this.matchHandlers[n];
                            null == r || r.mql.removeListener(null == r ? void 0 : r.listener)
                        })), e.clear()
                    }, register() {
                        Object.keys(t).forEach((e => {
                            const n = t[e], o = t => {
                                let {matches: n} = t;
                                this.dispatch(Object.assign(Object.assign({}, r), {[e]: n}))
                            }, a = window.matchMedia(n);
                            a.addListener(o), this.matchHandlers[n] = {mql: a, listener: o}, o(a)
                        }))
                    }, responsiveMap: t
                }
            }), [e])
        }();
    F.useEffect((() => {
        const e = P.subscribe((e => {
            "object" == typeof o && C(e)
        }));
        return () => {
            P.unsubscribe(e)
        }
    }), []);
    const N = F.useMemo((() => ({labelStyle: p, contentStyle: m})), [p, m]);
    return $(F.createElement(kN.Provider, {value: N}, F.createElement("div", Object.assign({
        className: sd(w, null == y ? void 0 : y.className, {
            [`${w}-${E}`]: E && "default" !== E,
            [`${w}-bordered`]: !!i,
            [`${w}-rtl`]: "rtl" === b
        }, c, u, O), style: Object.assign(Object.assign({}, null == y ? void 0 : y.style), d)
    }, h), (n || r) && F.createElement("div", {className: `${w}-header`}, n && F.createElement("div", {className: `${w}-title`}, n), r && F.createElement("div", {className: `${w}-extra`}, r)), F.createElement("div", {className: `${w}-view`}, F.createElement("table", null, F.createElement("tbody", null, k.map(((e, t) => F.createElement(NN, {
        key: t,
        index: t,
        colon: a,
        prefixCls: w,
        vertical: "vertical" === l,
        bordered: i,
        row: e
    })))))))))
};
_N.Item = e => {
    let {children: t} = e;
    return t
};
const LN = A.createContext({latestIndex: 0, horizontalSize: 0, verticalSize: 0, supportFlexGap: !1}), FN = LN.Provider,
    AN = e => {
        let {className: t, direction: n, index: r, marginDirection: o, children: a, split: i, wrap: l, style: s} = e;
        const {horizontalSize: c, verticalSize: u, latestIndex: d, supportFlexGap: f} = F.useContext(LN);
        let p = {};
        return f || ("vertical" === n ? r < d && (p = {marginBottom: c / (i ? 2 : 1)}) : p = Object.assign(Object.assign({}, r < d && {[o]: c / (i ? 2 : 1)}), l && {paddingBottom: u})), null == a ? null : F.createElement(F.Fragment, null, F.createElement("div", {
            className: t,
            style: Object.assign(Object.assign({}, p), s)
        }, a), r < d && i && F.createElement("span", {className: `${t}-split`, style: p}, i))
    }, HN = {small: 8, middle: 16, large: 24}, DN = F.forwardRef(((e, t) => {
        var n, r;
        const {
                getPrefixCls: o,
                space: a,
                direction: i
            } = F.useContext(Ug), {
                size: l = (null == a ? void 0 : a.size) || "small",
                align: s,
                className: c,
                rootClassName: u,
                children: d,
                direction: f = "horizontal",
                prefixCls: p,
                split: m,
                style: g,
                wrap: h = !1,
                classNames: v,
                styles: b
            } = e, y = ((e, t) => {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            })(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]),
            w = (() => {
                const [e, t] = F.useState(!1);
                return F.useEffect((() => {
                    t((() => {
                        if (!pw()) return !1;
                        if (void 0 !== mw) return mw;
                        const e = document.createElement("div");
                        e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div"));
                        const t = document.createElement("div");
                        return t.style.position = "absolute", t.style.zIndex = "-9999", t.appendChild(e), document.body.appendChild(t), mw = 1 === e.scrollHeight, document.body.removeChild(t), mw
                    })())
                }), []), e
            })(), [x, C] = F.useMemo((() => (Array.isArray(l) ? l : [l, l]).map((e => (e => "string" == typeof e ? HN[e] : e || 0)(e)))), [l]),
            S = md(d, {keepEmpty: !0}), E = void 0 === s && "horizontal" === f ? "center" : s,
            k = o("space", p), [$, O] = qb(k), P = sd(k, null == a ? void 0 : a.className, O, `${k}-${f}`, {
                [`${k}-rtl`]: "rtl" === i,
                [`${k}-align-${E}`]: E
            }, c, u),
            N = sd(`${k}-item`, null !== (n = null == v ? void 0 : v.item) && void 0 !== n ? n : null === (r = null == a ? void 0 : a.classNames) || void 0 === r ? void 0 : r.item),
            M = "rtl" === i ? "marginLeft" : "marginRight";
        let R = 0;
        const I = S.map(((e, t) => {
            var n, r;
            null != e && (R = t);
            const o = e && e.key || `${N}-${t}`;
            return F.createElement(AN, {
                className: N,
                key: o,
                direction: f,
                index: t,
                marginDirection: M,
                split: m,
                wrap: h,
                style: null !== (n = null == b ? void 0 : b.item) && void 0 !== n ? n : null === (r = null == a ? void 0 : a.styles) || void 0 === r ? void 0 : r.item
            }, e)
        })), j = F.useMemo((() => ({horizontalSize: x, verticalSize: C, latestIndex: R, supportFlexGap: w})), [x, C, R, w]);
        if (0 === S.length) return null;
        const z = {};
        return h && (z.flexWrap = "wrap", w || (z.marginBottom = -C)), w && (z.columnGap = x, z.rowGap = C), $(F.createElement("div", Object.assign({
            ref: t,
            className: P,
            style: Object.assign(Object.assign(Object.assign({}, z), null == a ? void 0 : a.style), g)
        }, y), F.createElement(FN, {value: j}, I)))
    }));
DN.Compact = e => {
    const {getPrefixCls: t, direction: n} = F.useContext(Ug), {
            size: r,
            direction: o,
            block: a,
            prefixCls: i,
            className: l,
            rootClassName: s,
            children: c
        } = e, u = Yb(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]),
        d = Ub((e => null != r ? r : e)), f = t("space-compact", i), [p, m] = qb(f),
        g = sd(f, m, {[`${f}-rtl`]: "rtl" === n, [`${f}-block`]: a, [`${f}-vertical`]: "vertical" === o}, l, s),
        h = F.useContext(Qb), v = md(c), b = F.useMemo((() => v.map(((e, t) => {
            const n = e && e.key || `${f}-item-${t}`;
            return F.createElement(ey, {
                key: n,
                compactSize: d,
                compactDirection: o,
                isFirstItem: 0 === t && (!h || (null == h ? void 0 : h.isFirstItem)),
                isLastItem: t === v.length - 1 && (!h || (null == h ? void 0 : h.isLastItem))
            }, e)
        }))), [r, v, h]);
    return 0 === v.length ? null : p(F.createElement("div", Object.assign({className: g}, u), b))
};
let BN = null, WN = e => e(), VN = [], KN = {};

function UN() {
    const {prefixCls: e, getContainer: t, duration: n, rtl: r, maxCount: o, top: a} = KN,
        i = null != e ? e : pv().getPrefixCls("message"), l = (null == t ? void 0 : t()) || document.body;
    return {prefixCls: i, getContainer: () => l, duration: n, rtl: r, maxCount: o, top: a}
}

const GN = F.forwardRef(((e, t) => {
    const [n, r] = F.useState(UN), [o, a] = yb(n), i = pv(), l = i.getRootPrefixCls(), s = i.getIconPrefixCls(),
        c = i.getTheme(), u = () => {
            r(UN)
        };
    return F.useEffect(u, []), F.useImperativeHandle(t, (() => {
        const e = Object.assign({}, o);
        return Object.keys(e).forEach((t => {
            e[t] = function () {
                return u(), o[t].apply(o, arguments)
            }
        })), {instance: e, sync: u}
    })), F.createElement(gv, {prefixCls: l, iconPrefixCls: s, theme: c}, a)
}));

function XN() {
    if (!BN) {
        const e = document.createDocumentFragment(), t = {fragment: e};
        return BN = t, void WN((() => {
            Mb(F.createElement(GN, {
                ref(e) {
                    const {instance: n, sync: r} = e || {};
                    Promise.resolve().then((() => {
                        !t.instance && n && (t.instance = n, t.sync = r, XN())
                    }))
                }
            }), e)
        }))
    }
    BN.instance && (VN.forEach((e => {
        const {type: t, skipped: n} = e;
        if (!n) switch (t) {
            case"open":
                WN((() => {
                    const t = BN.instance.open(Object.assign(Object.assign({}, KN), e.config));
                    null == t || t.then(e.resolve), e.setCloseFn(t)
                }));
                break;
            case"destroy":
                WN((() => {
                    null == BN || BN.instance.destroy(e.key)
                }));
                break;
            default:
                WN((() => {
                    var n;
                    const r = (n = BN.instance)[t].apply(n, If(e.args));
                    null == r || r.then(e.resolve), e.setCloseFn(r)
                }))
        }
    })), VN = [])
}

const qN = {
    open(e) {
        const t = pb((t => {
            let n;
            const r = {
                type: "open", config: e, resolve: t, setCloseFn(e) {
                    n = e
                }
            };
            return VN.push(r), () => {
                n ? WN((() => {
                    n()
                })) : r.skipped = !0
            }
        }));
        return XN(), t
    }, destroy(e) {
        VN.push({type: "destroy", key: e}), XN()
    }, config(e) {
        KN = Object.assign(Object.assign({}, KN), e), WN((() => {
            var e;
            null === (e = null == BN ? void 0 : BN.sync) || void 0 === e || e.call(BN)
        }))
    }, useMessage: e => yb(e), _InternalPanelDoNotUseOrYouWillBeFired(e) {
        const {prefixCls: t, className: n, type: r, icon: o, content: a} = e, i = ((e, t) => {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            })(e, ["prefixCls", "className", "type", "icon", "content"]), {getPrefixCls: l} = F.useContext(Ug),
            s = t || l("message"), [, c] = ub(s);
        return F.createElement(Qv, Object.assign({}, i, {
            prefixCls: s,
            className: sd(n, c, `${s}-notice-pure-panel`),
            eventKey: "pure",
            duration: null,
            content: F.createElement(fb, {prefixCls: s, type: r, icon: o}, a)
        }))
    }
};
["success", "info", "warning", "error", "loading"].forEach((e => {
    qN[e] = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return ((e, t) => {
            const n = pb((n => {
                let r;
                const o = {
                    type: e, args: t, resolve: n, setCloseFn(e) {
                        r = e
                    }
                };
                return VN.push(o), () => {
                    r ? WN((() => {
                        r()
                    })) : o.skipped = !0
                }
            }));
            return XN(), n
        })(e, n)
    }
}));
const YN = LC((e => {
    const {prefixCls: t, className: n, closeIcon: r, closable: o, type: a, title: i, children: l} = e, s = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children"]), {getPrefixCls: c} = F.useContext(Ug),
        u = c(), d = t || c("modal"), [, f] = uC(d), p = `${d}-confirm`;
    let m = {};
    return m = a ? {
        closable: null != o && o,
        title: "",
        footer: "",
        children: F.createElement(pC, Object.assign({}, e, {confirmPrefixCls: p, rootPrefixCls: u, content: l}))
    } : {
        closable: null == o || o,
        title: i,
        footer: void 0 === e.footer ? F.createElement(kx, Object.assign({}, e)) : e.footer,
        children: l
    }, F.createElement(lw, Object.assign({
        prefixCls: d,
        className: sd(f, `${d}-pure-panel`, a && p, a && `${p}-${a}`, n)
    }, s, {closeIcon: Ex(d, r), closable: o}, m))
}));

function QN(e) {
    return vC(bC(e))
}

const ZN = fC;
ZN.useModal = () => {
    const e = F.useRef(null), [t, n] = F.useState([]);
    F.useEffect((() => {
        t.length && (If(t).forEach((e => {
            e()
        })), n([]))
    }), [t]);
    const r = F.useCallback((t => r => {
        var o;
        kC += 1;
        const a = F.createRef();
        let i;
        const l = new Promise((e => {
            i = e
        }));
        let s, c = !1;
        const u = F.createElement(EC, {
            key: `modal-${kC}`, config: t(r), ref: a, afterClose() {
                null == s || s()
            }, isSilent: () => c, onConfirm(e) {
                i(e)
            }
        });
        return s = null === (o = e.current) || void 0 === o ? void 0 : o.patchElement(u), s && gC.push(s), {
            destroy() {
                function e() {
                    var e;
                    null === (e = a.current) || void 0 === e || e.destroy()
                }

                a.current ? e() : n((t => [].concat(If(t), [e])))
            }, update(e) {
                function t() {
                    var t;
                    null === (t = a.current) || void 0 === t || t.update(e)
                }

                a.current ? t() : n((e => [].concat(If(e), [t])))
            }, then: e => (c = !0, l.then(e))
        }
    }), []);
    return [F.useMemo((() => ({
        info: r(yC),
        success: r(wC),
        error: r(xC),
        warning: r(bC),
        confirm: r(CC)
    })), []), F.createElement($C, {key: "modal-holder", ref: e})]
}, ZN.info = e => vC(yC(e)), ZN.success = e => vC(wC(e)), ZN.error = e => vC(xC(e)), ZN.warning = QN, ZN.warn = QN, ZN.confirm = e => vC(CC(e)), ZN.destroyAll = () => {
    for (; gC.length;) {
        const e = gC.pop();
        e && e()
    }
}, ZN.config = e => {
    let {rootPrefixCls: t} = e;
    hC = t
}, ZN._InternalPanelDoNotUseOrYouWillBeFired = YN;
let JN = null, eM = e => e(), tM = [], nM = {};

function rM() {
    const {prefixCls: e, getContainer: t, rtl: n, maxCount: r, top: o, bottom: a} = nM,
        i = null != e ? e : pv().getPrefixCls("notification"), l = (null == t ? void 0 : t()) || document.body;
    return {prefixCls: i, getContainer: () => l, rtl: n, maxCount: r, top: o, bottom: a}
}

const oM = F.forwardRef(((e, t) => {
    const [n, r] = F.useState(rM), [o, a] = _C(n), i = pv(), l = i.getRootPrefixCls(), s = i.getIconPrefixCls(),
        c = i.getTheme(), u = () => {
            r(rM)
        };
    return F.useEffect(u, []), F.useImperativeHandle(t, (() => {
        const e = Object.assign({}, o);
        return Object.keys(e).forEach((t => {
            e[t] = function () {
                return u(), o[t].apply(o, arguments)
            }
        })), {instance: e, sync: u}
    })), F.createElement(gv, {prefixCls: l, iconPrefixCls: s, theme: c}, a)
}));

function aM() {
    if (!JN) {
        const e = document.createDocumentFragment(), t = {fragment: e};
        return JN = t, void eM((() => {
            Mb(F.createElement(oM, {
                ref(e) {
                    const {instance: n, sync: r} = e || {};
                    Promise.resolve().then((() => {
                        !t.instance && n && (t.instance = n, t.sync = r, aM())
                    }))
                }
            }), e)
        }))
    }
    JN.instance && (tM.forEach((e => {
        switch (e.type) {
            case"open":
                eM((() => {
                    JN.instance.open(Object.assign(Object.assign({}, nM), e.config))
                }));
                break;
            case"destroy":
                eM((() => {
                    null == JN || JN.instance.destroy(e.key)
                }))
        }
    })), tM = [])
}

function iM(e) {
    tM.push({type: "open", config: e}), aM()
}

const lM = {
    open: iM, destroy(e) {
        tM.push({type: "destroy", key: e}), aM()
    }, config(e) {
        nM = Object.assign(Object.assign({}, nM), e), eM((() => {
            var e;
            null === (e = null == JN ? void 0 : JN.sync) || void 0 === e || e.call(JN)
        }))
    }, useNotification: e => _C(e), _InternalPanelDoNotUseOrYouWillBeFired(e) {
        const {
                prefixCls: t,
                className: n,
                icon: r,
                type: o,
                message: a,
                description: i,
                btn: l,
                closable: s = !0,
                closeIcon: c
            } = e, u = ((e, t) => {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            })(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon"]), {getPrefixCls: d} = F.useContext(Ug),
            f = t || d("notification"), p = `${f}-notice`, [, m] = NC(f);
        return F.createElement(Qv, Object.assign({}, u, {
            prefixCls: f,
            className: sd(n, m, `${p}-pure-panel`),
            eventKey: "pure",
            duration: null,
            closable: s,
            closeIcon: MC(f, c),
            content: F.createElement(IC, {prefixCls: p, icon: r, type: o, message: a, description: i, btn: l})
        }))
    }
};
["success", "info", "warning", "error"].forEach((e => {
    lM[e] = t => iM(Object.assign(Object.assign({}, t), {type: e}))
}));
var sM = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}
        }]
    }, name: "reload", theme: "outlined"
}, cM = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: sM})), uM = F.forwardRef(cM);
const dM = e => {
    const {lineWidth: t, fontSizeIcon: n} = e, r = e.fontSizeSM;
    return rh(e, {
        tagFontSize: r,
        tagLineHeight: e.lineHeightSM * r + "px",
        tagIconSize: n - 2 * t,
        tagPaddingHorizontal: 8,
        tagBorderlessBg: e.colorFillTertiary
    })
}, fM = e => ({defaultBg: e.colorFillQuaternary, defaultColor: e.colorText}), pM = lh("Tag", (e => (e => {
    const {paddingXXS: t, lineWidth: n, tagPaddingHorizontal: r, componentCls: o} = e, a = r - n, i = t - n;
    return {
        [o]: Object.assign(Object.assign({}, Yg(e)), {
            display: "inline-block",
            height: "auto",
            marginInlineEnd: e.marginXS,
            paddingInline: a,
            fontSize: e.tagFontSize,
            lineHeight: e.tagLineHeight,
            whiteSpace: "nowrap",
            background: e.defaultBg,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusSM,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
            textAlign: "start",
            position: "relative",
            [`&${o}-rtl`]: {direction: "rtl"},
            "&, a, a:hover": {color: e.defaultColor},
            [`${o}-close-icon`]: {
                marginInlineStart: i,
                color: e.colorTextDescription,
                fontSize: e.tagIconSize,
                cursor: "pointer",
                transition: `all ${e.motionDurationMid}`,
                "&:hover": {color: e.colorTextHeading}
            },
            [`&${o}-has-color`]: {
                borderColor: "transparent",
                [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {color: e.colorTextLightSolid}
            },
            "&-checkable": {
                backgroundColor: "transparent",
                borderColor: "transparent",
                cursor: "pointer",
                [`&:not(${o}-checkable-checked):hover`]: {color: e.colorPrimary, backgroundColor: e.colorFillSecondary},
                "&:active, &-checked": {color: e.colorTextLightSolid},
                "&-checked": {backgroundColor: e.colorPrimary, "&:hover": {backgroundColor: e.colorPrimaryHover}},
                "&:active": {backgroundColor: e.colorPrimaryActive}
            },
            "&-hidden": {display: "none"},
            [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {marginInlineStart: a}
        }), [`${o}-borderless`]: {borderColor: "transparent", background: e.tagBorderlessBg}
    }
})(dM(e))), fM), mM = sh(["Tag", "preset"], (e => (e => ch(e, ((t, n) => {
    let {textColor: r, lightBorderColor: o, lightColor: a, darkColor: i} = n;
    return {
        [`${e.componentCls}-${t}`]: {
            color: r,
            background: a,
            borderColor: o,
            "&-inverse": {color: e.colorTextLightSolid, background: i, borderColor: i},
            [`&${e.componentCls}-borderless`]: {borderColor: "transparent"}
        }
    }
})))(dM(e))), fM), gM = (e, t, n) => {
    const r = "string" != typeof (o = n) ? o : o.charAt(0).toUpperCase() + o.slice(1);
    var o;
    return {
        [`${e.componentCls}-${t}`]: {
            color: e[`color${n}`],
            background: e[`color${r}Bg`],
            borderColor: e[`color${r}Border`],
            [`&${e.componentCls}-borderless`]: {borderColor: "transparent"}
        }
    }
}, hM = sh(["Tag", "status"], (e => {
    const t = dM(e);
    return [gM(t, "success", "Success"), gM(t, "processing", "Info"), gM(t, "error", "Error"), gM(t, "warning", "Warning")]
}), fM), vM = (e, t) => {
    const {
        prefixCls: n,
        className: r,
        rootClassName: o,
        style: a,
        children: i,
        icon: l,
        color: s,
        onClose: c,
        closeIcon: u,
        closable: d,
        bordered: f = !0
    } = e, p = ((e, t) => {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    })(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable", "bordered"]), {
        getPrefixCls: m,
        direction: g,
        tag: h
    } = F.useContext(Ug), [v, b] = F.useState(!0);
    F.useEffect((() => {
        "visible" in p && b(p.visible)
    }), [p.visible]);
    const y = Rk(s), w = (e => Mk.includes(e))(s), x = y || w,
        C = Object.assign(Object.assign({backgroundColor: s && !x ? s : void 0}, null == h ? void 0 : h.style), a),
        S = m("tag", n), [E, k] = pM(S), $ = sd(S, null == h ? void 0 : h.className, {
            [`${S}-${s}`]: x,
            [`${S}-has-color`]: s && !x,
            [`${S}-hidden`]: !v,
            [`${S}-rtl`]: "rtl" === g,
            [`${S}-borderless`]: !f
        }, r, o, k), O = e => {
            e.stopPropagation(), null == c || c(e), e.defaultPrevented || b(!1)
        }, [, P] = fw(d, u, (e => null === e ? F.createElement(Lv, {
            className: `${S}-close-icon`,
            onClick: O
        }) : F.createElement("span", {className: `${S}-close-icon`, onClick: O}, e)), null, !1),
        N = "function" == typeof p.onClick || i && "a" === i.type, M = l || null,
        R = M ? F.createElement(F.Fragment, null, M, i && F.createElement("span", null, i)) : i,
        I = F.createElement("span", Object.assign({}, p, {
            ref: t,
            className: $,
            style: C
        }), R, P, y && F.createElement(mM, {key: "preset", prefixCls: S}), w && F.createElement(hM, {
            key: "status",
            prefixCls: S
        }));
    return E(N ? F.createElement(Kb, {component: "Tag"}, I) : I)
}, bM = F.forwardRef(vM);
bM.CheckableTag = e => {
    const {prefixCls: t, className: n, checked: r, onChange: o, onClick: a} = e, i = ((e, t) => {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        })(e, ["prefixCls", "className", "checked", "onChange", "onClick"]), {getPrefixCls: l} = F.useContext(Ug),
        s = l("tag", t), [c, u] = pM(s), d = sd(s, `${s}-checkable`, {[`${s}-checkable-checked`]: r}, n, u);
    return c(F.createElement("span", Object.assign({}, i, {
        className: d, onClick(e) {
            null == o || o(!r), null == a || a(e)
        }
    })))
};
var yM = {
    icon: {
        tag: "svg",
        attrs: {viewBox: "64 64 896 896", focusable: "false"},
        children: [{
            tag: "path",
            attrs: {d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}
        }]
    }, name: "copy", theme: "outlined"
}, wM = (e, t) => F.createElement(Nv, cd({}, e, {ref: t, icon: yM})), xM = F.forwardRef(wM);
export {
    Wy as B,
    KP as C,
    _N as D,
    Nv as I,
    ZN as M,
    xM as R,
    sk as S,
    zk as T,
    cd as _,
    Uu as a,
    DN as b,
    EN as c,
    uM as d,
    lM as e,
    XP as f,
    Hv as g,
    bM as h,
    A as i,
    F as r,
    qN as s
};