"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
var _antdDDbB1c = require("./antd-D-DbB1c-.js");
var _iconsH9fv45kP = require("./icons-H9fv45kP.js");
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _iterableToArray(r) {
  if (
    ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r["@@iterator"]
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return r;
    };
  var t,
    r = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    o = "function" == typeof Symbol ? Symbol : {},
    i = o.iterator || "@@iterator",
    a = o.asyncIterator || "@@asyncIterator",
    u = o.toStringTag || "@@toStringTag";
  function c(t, r, e, n) {
    return Object.defineProperty(t, r, {
      value: e,
      enumerable: !n,
      configurable: !n,
      writable: !n,
    });
  }
  try {
    c({}, "");
  } catch (t) {
    c = function c(t, r, e) {
      return (t[r] = e);
    };
  }
  function h(r, e, n, o) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype);
    return (
      c(
        a,
        "_invoke",
        (function (r, e, n) {
          var o = 1;
          return function (i, a) {
            if (3 === o) throw Error("Generator is already running");
            if (4 === o) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var c = d(u, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (1 === o) throw ((o = 4), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = 3;
              var h = s(r, e, n);
              if ("normal" === h.type) {
                if (((o = n.done ? 4 : 2), h.arg === f)) continue;
                return { value: h.arg, done: n.done };
              }
              "throw" === h.type &&
                ((o = 4), (n.method = "throw"), (n.arg = h.arg));
            }
          };
        })(r, n, new Context(o || [])),
        !0,
      ),
      a
    );
  }
  function s(t, r, e) {
    try {
      return { type: "normal", arg: t.call(r, e) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  r.wrap = h;
  var f = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var l = {};
  c(l, i, function () {
    return this;
  });
  var p = Object.getPrototypeOf,
    y = p && p(p(x([])));
  y && y !== e && n.call(y, i) && (l = y);
  var v =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(l));
  function g(t) {
    ["next", "throw", "return"].forEach(function (r) {
      c(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function AsyncIterator(t, r) {
    function e(o, i, a, u) {
      var c = s(t[o], t, i);
      if ("throw" !== c.type) {
        var h = c.arg,
          f = h.value;
        return f && "object" == _typeof(f) && n.call(f, "__await")
          ? r.resolve(f.__await).then(
              function (t) {
                e("next", t, a, u);
              },
              function (t) {
                e("throw", t, a, u);
              },
            )
          : r.resolve(f).then(
              function (t) {
                (h.value = t), a(h);
              },
              function (t) {
                return e("throw", t, a, u);
              },
            );
      }
      u(c.arg);
    }
    var o;
    c(
      this,
      "_invoke",
      function (t, n) {
        function i() {
          return new r(function (r, o) {
            e(t, n, r, o);
          });
        }
        return (o = o ? o.then(i, i) : i());
      },
      !0,
    );
  }
  function d(r, e) {
    var n = e.method,
      o = r.i[n];
    if (o === t)
      return (
        (e.delegate = null),
        ("throw" === n &&
          r.i["return"] &&
          ((e.method = "return"),
          (e.arg = t),
          d(r, e),
          "throw" === e.method)) ||
          ("return" !== n &&
            ((e.method = "throw"),
            (e.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method",
            )))),
        f
      );
    var i = s(o, r.i, e.arg);
    if ("throw" === i.type)
      return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), f;
    var a = i.arg;
    return a
      ? a.done
        ? ((e[r.r] = a.value),
          (e.next = r.n),
          "return" !== e.method && ((e.method = "next"), (e.arg = t)),
          (e.delegate = null),
          f)
        : a
      : ((e.method = "throw"),
        (e.arg = new TypeError("iterator result is not an object")),
        (e.delegate = null),
        f);
  }
  function w(t) {
    this.tryEntries.push(t);
  }
  function m(r) {
    var e = r[4] || {};
    (e.type = "normal"), (e.arg = t), (r[4] = e);
  }
  function Context(t) {
    (this.tryEntries = [[-1]]), t.forEach(w, this), this.reset(!0);
  }
  function x(r) {
    if (null != r) {
      var e = r[i];
      if (e) return e.call(r);
      if ("function" == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var o = -1,
          a = function e() {
            for (; ++o < r.length; )
              if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
            return (e.value = t), (e.done = !0), e;
          };
        return (a.next = a);
      }
    }
    throw new TypeError(_typeof(r) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    c(v, "constructor", GeneratorFunctionPrototype),
    c(GeneratorFunctionPrototype, "constructor", GeneratorFunction),
    (GeneratorFunction.displayName = c(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction",
    )),
    (r.isGeneratorFunction = function (t) {
      var r = "function" == typeof t && t.constructor;
      return (
        !!r &&
        (r === GeneratorFunction ||
          "GeneratorFunction" === (r.displayName || r.name))
      );
    }),
    (r.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            c(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(v)),
        t
      );
    }),
    (r.awrap = function (t) {
      return { __await: t };
    }),
    g(AsyncIterator.prototype),
    c(AsyncIterator.prototype, a, function () {
      return this;
    }),
    (r.AsyncIterator = AsyncIterator),
    (r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(h(t, e, n, o), i);
      return r.isGeneratorFunction(e)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    g(v),
    c(v, u, "Generator"),
    c(v, i, function () {
      return this;
    }),
    c(v, "toString", function () {
      return "[object Generator]";
    }),
    (r.keys = function (t) {
      var r = Object(t),
        e = [];
      for (var n in r) e.unshift(n);
      return function t() {
        for (; e.length; )
          if ((n = e.pop()) in r) return (t.value = n), (t.done = !1), t;
        return (t.done = !0), t;
      };
    }),
    (r.values = x),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(r) {
        if (
          ((this.prev = this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(m),
          !r)
        )
          for (var e in this)
            "t" === e.charAt(0) &&
              n.call(this, e) &&
              !isNaN(+e.slice(1)) &&
              (this[e] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0][4];
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(r) {
        if (this.done) throw r;
        var e = this;
        function n(t) {
          (a.type = "throw"), (a.arg = r), (e.next = t);
        }
        for (var o = e.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i[4],
            u = this.prev,
            c = i[1],
            h = i[2];
          if (-1 === i[0]) return n("end"), !1;
          if (!c && !h) throw Error("try statement without catch or finally");
          if (null != i[0] && i[0] <= u) {
            if (u < c) return (this.method = "next"), (this.arg = t), n(c), !0;
            if (u < h) return n(h), !1;
          }
        }
      },
      abrupt: function abrupt(t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
            var o = n;
            break;
          }
        }
        o &&
          ("break" === t || "continue" === t) &&
          o[0] <= r &&
          r <= o[2] &&
          (o = null);
        var i = o ? o[4] : {};
        return (
          (i.type = t),
          (i.arg = r),
          o ? ((this.method = "next"), (this.next = o[2]), f) : this.complete(i)
        );
      },
      complete: function complete(t, r) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && r && (this.next = r),
          f
        );
      },
      finish: function finish(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
        }
      },
      catch: function _catch(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[0] === t) {
            var n = e[4];
            if ("throw" === n.type) {
              var o = n.arg;
              m(e);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(r, e, n) {
        return (
          (this.delegate = { i: x(r), r: e, n: n }),
          "next" === this.method && (this.arg = t),
          f
        );
      },
    }),
    r
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t =
    ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && "number" == typeof r.length)
    ) {
      t && (r = t);
      var _n3 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] };
        },
        e: function e(r) {
          throw r;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return (a = r.done), r;
    },
    e: function e(r) {
      (u = !0), (o = r);
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? _arrayLikeToArray(r, a)
          : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
(function () {
  var e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    var _iterator = _createForOfIteratorHelper(
        document.querySelectorAll('link[rel="modulepreload"]'),
      ),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _e2 = _step.value;
        t(_e2);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    new MutationObserver(function (e) {
      var _iterator2 = _createForOfIteratorHelper(e),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _r = _step2.value;
          if ("childList" === _r.type) {
            var _iterator3 = _createForOfIteratorHelper(_r.addedNodes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _e = _step3.value;
                "LINK" === _e.tagName && "modulepreload" === _e.rel && t(_e);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }).observe(document, {
      childList: !0,
      subtree: !0,
    });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    var t = (function (e) {
      var t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var E = {
    exports: {},
  },
  S = {},
  j = _antdDDbB1c.r,
  C = Symbol["for"]("react.element"),
  b = Symbol["for"]("react.fragment"),
  I = Object.prototype.hasOwnProperty,
  P = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  R = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function A(e, t, r) {
  var a,
    o = {},
    n = null,
    s = null;
  for (a in (void 0 !== r && (n = "" + r),
  void 0 !== t.key && (n = "" + t.key),
  void 0 !== t.ref && (s = t.ref),
  t))
    I.call(t, a) && !R.hasOwnProperty(a) && (o[a] = t[a]);
  if (e && e.defaultProps)
    for (a in (t = e.defaultProps)) void 0 === o[a] && (o[a] = t[a]);
  return {
    $$typeof: C,
    type: e,
    key: n,
    ref: s,
    props: o,
    _owner: P.current,
  };
}
(S.Fragment = b), (S.jsx = A), (S.jsxs = A), (E.exports = S);
var O = E.exports,
  L = {},
  T = _antdDDbB1c.a;
(L.createRoot = T.createRoot), (L.hydrateRoot = T.hydrateRoot);
var q = {
    getId: function getId() {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(
            function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return window.electronAPI.getDeviceId();
                  case 3:
                    return _context.abrupt("return", _context.sent);
                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    throw _context.t0 instanceof Error
                      ? _context.t0
                      : "string" == typeof _context.t0
                        ? new Error(_context.t0)
                        : new Error(
                            (null == _context.t0
                              ? void 0
                              : _context.t0.message) || "获取设备 ID 失败",
                          );
                  case 9:
                  case "end":
                    return _context.stop();
                }
            },
            _callee,
            null,
            [[0, 6]],
          );
        }),
      )();
    },
  },
  N = {
    updateConfig: function updateConfig(e) {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(
            function _callee2$(_context2) {
              while (1)
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return window.electronAPI.updateCursorConfig(e);
                  case 3:
                    _context2.next = 8;
                    break;
                  case 5:
                    _context2.prev = 5;
                    _context2.t0 = _context2["catch"](0);
                    throw _context2.t0 instanceof Error
                      ? _context2.t0
                      : "string" == typeof _context2.t0
                        ? new Error(_context2.t0)
                        : new Error(
                            (null == _context2.t0
                              ? void 0
                              : _context2.t0.message) || "更新 Cursor 配置失败",
                          );
                  case 8:
                  case "end":
                    return _context2.stop();
                }
            },
            _callee2,
            null,
            [[0, 5]],
          );
        }),
      )();
    },
    refresh: function refresh(e) {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(
            function _callee3$(_context3) {
              while (1)
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return window.electronAPI.refreshCursor(e);
                  case 3:
                    _context3.next = 8;
                    break;
                  case 5:
                    _context3.prev = 5;
                    _context3.t0 = _context3["catch"](0);
                    throw _context3.t0 instanceof Error
                      ? _context3.t0
                      : "string" == typeof _context3.t0
                        ? new Error(_context3.t0)
                        : new Error(
                            (null == _context3.t0
                              ? void 0
                              : _context3.t0.message) || "刷新 Cursor 授权失败",
                          );
                  case 8:
                  case "end":
                    return _context3.stop();
                }
            },
            _callee3,
            null,
            [[0, 5]],
          );
        }),
      )();
    },
    banUpgrade: function banUpgrade() {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(
            function _callee4$(_context4) {
              while (1)
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return window.electronAPI.banCursorUpgrade();
                  case 3:
                    _context4.next = 8;
                    break;
                  case 5:
                    _context4.prev = 5;
                    _context4.t0 = _context4["catch"](0);
                    throw _context4.t0 instanceof Error
                      ? _context4.t0
                      : "string" == typeof _context4.t0
                        ? new Error(_context4.t0)
                        : new Error(
                            (null == _context4.t0
                              ? void 0
                              : _context4.t0.message) || "禁用 Cursor 更新失败",
                          );
                  case 8:
                  case "end":
                    return _context4.stop();
                }
            },
            _callee4,
            null,
            [[0, 5]],
          );
        }),
      )();
    },
    patch: function patch() {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5() {
          return _regeneratorRuntime().wrap(
            function _callee5$(_context5) {
              while (1)
                switch ((_context5.prev = _context5.next)) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return window.electronAPI.patchCursor();
                  case 3:
                    _context5.next = 8;
                    break;
                  case 5:
                    _context5.prev = 5;
                    _context5.t0 = _context5["catch"](0);
                    throw _context5.t0 instanceof Error
                      ? _context5.t0
                      : "string" == typeof _context5.t0
                        ? new Error(_context5.t0)
                        : new Error(
                            (null == _context5.t0
                              ? void 0
                              : _context5.t0.message) || "补丁失败",
                          );
                  case 8:
                  case "end":
                    return _context5.stop();
                }
            },
            _callee5,
            null,
            [[0, 5]],
          );
        }),
      )();
    },
    beforeRefresh: function beforeRefresh() {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
          return _regeneratorRuntime().wrap(
            function _callee6$(_context6) {
              while (1)
                switch ((_context6.prev = _context6.next)) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return window.electronAPI.beforeRefreshCursor();
                  case 3:
                    _context6.next = 8;
                    break;
                  case 5:
                    _context6.prev = 5;
                    _context6.t0 = _context6["catch"](0);
                    throw _context6.t0 instanceof Error
                      ? _context6.t0
                      : "string" == typeof _context6.t0
                        ? new Error(_context6.t0)
                        : new Error(
                            (null == _context6.t0
                              ? void 0
                              : _context6.t0.message) || "刷新前补丁失败",
                          );
                  case 8:
                  case "end":
                    return _context6.stop();
                }
            },
            _callee6,
            null,
            [[0, 5]],
          );
        }),
      )();
    },
  },
  V = {
    getCursorVersion: (function () {
      var _getCursorVersion = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7() {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1)
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  _context7.next = 2;
                  return window.electronAPI.getCursorVersion();
                case 2:
                  return _context7.abrupt("return", _context7.sent);
                case 3:
                case "end":
                  return _context7.stop();
              }
          }, _callee7);
        }),
      );
      function getCursorVersion() {
        return _getCursorVersion.apply(this, arguments);
      }
      return getCursorVersion;
    })(),
    getAppVersion: (function () {
      var _getAppVersion = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8() {
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1)
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  _context8.next = 2;
                  return window.electronAPI.getAppVersion();
                case 2:
                  return _context8.abrupt("return", _context8.sent);
                case 3:
                case "end":
                  return _context8.stop();
              }
          }, _callee8);
        }),
      );
      function getAppVersion() {
        return _getAppVersion.apply(this, arguments);
      }
      return getAppVersion;
    })(),
  },
  D = {
    getPlatform: (function () {
      var _getPlatform = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9() {
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1)
              switch ((_context9.prev = _context9.next)) {
                case 0:
                  _context9.next = 2;
                  return window.electronAPI.getPlatform();
                case 2:
                  return _context9.abrupt("return", _context9.sent);
                case 3:
                case "end":
                  return _context9.stop();
              }
          }, _callee9);
        }),
      );
      function getPlatform() {
        return _getPlatform.apply(this, arguments);
      }
      return getPlatform;
    })(),
    updateWindowSettings: function updateWindowSettings(e) {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee0() {
          return _regeneratorRuntime().wrap(function _callee0$(_context0) {
            while (1)
              switch ((_context0.prev = _context0.next)) {
                case 0:
                  _context0.next = 2;
                  return window.electronAPI.updateWindowSettings(e);
                case 2:
                case "end":
                  return _context0.stop();
              }
          }, _callee0);
        }),
      )();
    },
    openExtensionWindow: function openExtensionWindow(e, t) {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee1() {
          return _regeneratorRuntime().wrap(function _callee1$(_context1) {
            while (1)
              switch ((_context1.prev = _context1.next)) {
                case 0:
                  _context1.next = 2;
                  return window.electronAPI.openExtensionWindow(e, t);
                case 2:
                case "end":
                  return _context1.stop();
              }
          }, _callee1);
        }),
      )();
    },
  },
  Q = {
    apiPrefix: "https://refresh.freecursor.fun",
    backupApiPrefix: "http://110.42.232.79:8080",
    DEBUG_ERROR: !1,
  },
  W = {
    apiPrefix: "https://refresh.freecursor.fun",
    backupApiPrefix: "http://110.42.232.79:8080",
    DEBUG_ERROR: !1,
  },
  U = Q,
  B = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(e) {
        var t, r, _r2, _r3;
        return _regeneratorRuntime().wrap(
          function _callee11$(_context11) {
            while (1)
              switch ((_context11.prev = _context11.next)) {
                case 0:
                  _context11.next = 2;
                  return _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee10() {
                        return _regeneratorRuntime().wrap(function _callee10$(
                          _context10,
                        ) {
                          while (1)
                            switch ((_context10.prev = _context10.next)) {
                              case 0:
                                _context10.next = 2;
                                return window.electronAPI.isDev();
                              case 2:
                                if (!_context10.sent) {
                                  _context10.next = 6;
                                  break;
                                }
                                _context10.t0 = Q;
                                _context10.next = 7;
                                break;
                              case 6:
                                _context10.t0 = W;
                              case 7:
                                return _context10.abrupt(
                                  "return",
                                  _context10.t0,
                                );
                              case 8:
                              case "end":
                                return _context10.stop();
                            }
                        }, _callee10);
                      },
                    ),
                  )();
                case 2:
                  t = _context11.sent;
                  _context11.prev = 3;
                  _r2 = e.url.startsWith("http")
                    ? e.url
                    : "".concat(t.apiPrefix).concat(e.url);
                  _context11.next = 7;
                  return G(_r2, e);
                case 7:
                  return _context11.abrupt("return", _context11.sent);
                case 10:
                  _context11.prev = 10;
                  _context11.t0 = _context11["catch"](3);
                  if (!((r = _context11.t0), !J(_context11.t0))) {
                    _context11.next = 14;
                    break;
                  }
                  throw r;
                case 14:
                  _context11.prev = 14;
                  _r3 = e.url.startsWith("http")
                    ? $(e.url, t.backupApiPrefix)
                    : "".concat(t.backupApiPrefix).concat(e.url);
                  _context11.next = 18;
                  return G(_r3, e);
                case 18:
                  return _context11.abrupt("return", _context11.sent);
                case 21:
                  _context11.prev = 21;
                  _context11.t1 = _context11["catch"](14);
                  throw _context11.t1;
                case 24:
                case "end":
                  return _context11.stop();
              }
          },
          _callee11,
          null,
          [
            [3, 10],
            [14, 21],
          ],
        );
      }),
    );
    return function B(_x) {
      return _ref.apply(this, arguments);
    };
  })(),
  $ = function $(e, t) {
    try {
      var r = new URL(e);
      if (t.startsWith("http")) {
        var _a = new URL(t);
        return e.replace(r.origin, _a.origin);
      }
      return e.replace(r.origin, "".concat(r.protocol, "//").concat(t));
    } catch (r) {
      return e;
    }
  },
  G = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12(e, t) {
        var r, a;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1)
            switch ((_context12.prev = _context12.next)) {
              case 0:
                _context12.next = 2;
                return window.electronAPI.httpRequest({
                  url: e,
                  method: t.method,
                  headers: _objectSpread(
                    {
                      "Content-Type": "application/json",
                    },
                    t.headers || {},
                  ),
                  body: t.body,
                });
              case 2:
                r = _context12.sent;
                a = JSON.parse(r);
                if (!(!e.includes("www.cursor.com") && 0 !== a.code)) {
                  _context12.next = 6;
                  break;
                }
                throw new Error(a.msg || "请求失败");
              case 6:
                return _context12.abrupt("return", a);
              case 7:
              case "end":
                return _context12.stop();
            }
        }, _callee12);
      }),
    );
    return function G(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  })(),
  J = function J(e) {
    var t, r;
    return (
      e instanceof Error
        ? null == (t = null == e ? void 0 : e.message)
          ? void 0
          : t.toLowerCase()
        : null == (r = String(e))
          ? void 0
          : r.toLowerCase()
    ).includes("http-request");
  },
  M = function M(e) {
    return e.startsWith("JGDL")
      ? "/quota/api/activate-refresh"
      : "/api/account/activate-refresh";
  },
  z = {
    activate: function activate(e, t, r, a, o, n) {
      return B({
        url: M(e),
        method: "POST",
        body: {
          key_code: e,
          device_id: t,
          platform: r,
          cursor_version: a,
          jg_version: o,
          used_mail: n,
        },
      });
    },
    refresh: function refresh(e, t, r, a, o, n, s) {
      return B({
        url: M(e),
        method: "POST",
        body: {
          key_code: e,
          device_id: t,
          used_mail: r,
          platform: a,
          cursor_version: o,
          jg_version: n,
          error_id: s,
        },
      });
    },
    getQuota: function getQuota(e, t) {
      return _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13() {
          var r, _r$data, a, o, n, s, i, c, l, d, _u;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1)
              switch ((_context13.prev = _context13.next)) {
                case 0:
                  _context13.next = 2;
                  return B({
                    url: "/quota/api/key-usage",
                    method: "POST",
                    body: {
                      quota_key: e,
                      device_id: t,
                    },
                  });
                case 2:
                  r = _context13.sent;
                  _r$data = r.data;
                  a = _r$data.info;
                  o = _r$data.quota_key_max_quota;
                  n = _r$data.quota_key_used_quota;
                  s = _r$data.activated_at;
                  i = _r$data.expired_at;
                  c = atob(a);
                  _context13.next = 12;
                  return B({
                    url: "https://www.cursor.com/api/usage",
                    method: "GET",
                    headers: {
                      Cookie: c,
                      "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                  });
                case 12:
                  l = _context13.sent;
                  d = 0;
                  for (_u in l)
                    l[_u] &&
                      l[_u].numRequestsTotal &&
                      (d += l[_u].numRequestsTotal);
                  return _context13.abrupt("return", {
                    totalQuota: o,
                    usedQuota: (n || 0) + d,
                    remainingQuota: o - ((n || 0) + d),
                    activatedAt: new Date(s).toLocaleString(),
                    expiresAt: new Date(i).toLocaleString(),
                  });
                case 16:
                case "end":
                  return _context13.stop();
              }
          }, _callee13);
        }),
      )();
    },
  },
  F = {
    upload: function upload(e) {
      return B({
        url: "/api/client_err_logs/upload",
        method: "POST",
        body: e,
      });
    },
  },
  K = {
    getLatest: function getLatest() {
      return B({
        url: "https://update.freecursor.fun/updates/notice.json",
        method: "GET",
      });
    },
  },
  H = _antdDDbB1c.T.Text,
  Y = "cursor_helper_activation_code",
  X = "cursor_helper_member_info",
  Z = "cursor_helper_app_info";
function ee() {
  var _e$useState = _antdDDbB1c.r.useState(""),
    _e$useState2 = _slicedToArray(_e$useState, 2),
    t = _e$useState2[0],
    r = _e$useState2[1],
    _e$useState3 = _antdDDbB1c.r.useState(function () {
      return localStorage.getItem(Y) || "";
    }),
    _e$useState4 = _slicedToArray(_e$useState3, 2),
    _ = _e$useState4[0],
    E = _e$useState4[1],
    _e$useState5 = _antdDDbB1c.r.useState(function () {
      return localStorage.getItem(Y) || "";
    }),
    _e$useState6 = _slicedToArray(_e$useState5, 2),
    S = _e$useState6[0],
    j = _e$useState6[1],
    _e$useState7 = _antdDDbB1c.r.useState(function () {
      var e = localStorage.getItem(X);
      if (e)
        try {
          return JSON.parse(e);
        } catch (t) {}
      return {
        status: "inactive",
        account: null,
        activatedAt: null,
        expiresAt: null,
        totalQuota: 0,
        usedQuota: 0,
        remainingQuota: 0,
      };
    }),
    _e$useState8 = _slicedToArray(_e$useState7, 2),
    C = _e$useState8[0],
    b = _e$useState8[1],
    _e$useState9 = _antdDDbB1c.r.useState(function () {
      var e = localStorage.getItem(Z);
      if (e)
        try {
          var _t = JSON.parse(e);
          return (
            D.updateWindowSettings({
              title: _t.appName,
            }),
            _t
          );
        } catch (t) {}
      return {
        appName: "Cursor 激活器",
        appIcon: "",
        appLinks: [],
      };
    }),
    _e$useState0 = _slicedToArray(_e$useState9, 2),
    I = _e$useState0[0],
    P = _e$useState0[1],
    _e$useState1 = _antdDDbB1c.r.useState({
      appVersion: "",
      cursorVersion: "",
    }),
    _e$useState10 = _slicedToArray(_e$useState1, 2),
    R = _e$useState10[0],
    A = _e$useState10[1],
    _e$useState11 = _antdDDbB1c.r.useState(function () {
      return localStorage.getItem("last_notification_hash") || "";
    }),
    _e$useState12 = _slicedToArray(_e$useState11, 2),
    L = _e$useState12[0],
    T = _e$useState12[1],
    _e$useState13 = _antdDDbB1c.r.useState([]),
    _e$useState14 = _slicedToArray(_e$useState13, 2),
    Q = _e$useState14[0],
    W = _e$useState14[1],
    _e$useState15 = _antdDDbB1c.r.useState(""),
    _e$useState16 = _slicedToArray(_e$useState15, 2),
    B = _e$useState16[0],
    $ = _e$useState16[1],
    _e$useState17 = _antdDDbB1c.r.useState(!1),
    _e$useState18 = _slicedToArray(_e$useState17, 2),
    G = _e$useState18[0],
    J = _e$useState18[1],
    _e$useState19 = _antdDDbB1c.r.useState(!1),
    _e$useState20 = _slicedToArray(_e$useState19, 2),
    M = _e$useState20[0],
    H = _e$useState20[1];
  _antdDDbB1c.r.useEffect(
    function () {
      C.account && localStorage.setItem(X, JSON.stringify(C));
    },
    [C],
  ),
    _antdDDbB1c.r.useEffect(
      function () {
        I.appName && localStorage.setItem(Z, JSON.stringify(I));
      },
      [I],
    ),
    _antdDDbB1c.r.useEffect(function () {
      D.getPlatform().then($);
    }, []);
  var ee = _antdDDbB1c.r.useMemo(
      function () {
        return S.startsWith("JGDL");
      },
      [S],
    ),
    te = _antdDDbB1c.r.useMemo(
      function () {
        return C.remainingQuota && C.remainingQuota < 0;
      },
      [C.remainingQuota],
    );
  _antdDDbB1c.r.useEffect(
    function () {
      _ &&
        t &&
        Q.length &&
        _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14() {
            var _iterator4, _step4, _r4;
            return _regeneratorRuntime().wrap(
              function _callee14$(_context14) {
                while (1)
                  switch ((_context14.prev = _context14.next)) {
                    case 0:
                      _iterator4 = _createForOfIteratorHelper(Q);
                      _context14.prev = 1;
                      _iterator4.s();
                    case 3:
                      if ((_step4 = _iterator4.n()).done) {
                        _context14.next = 18;
                        break;
                      }
                      _r4 = _step4.value;
                      _context14.prev = 5;
                      _context14.t0 = F;
                      _context14.next = 9;
                      return _r4(t, _);
                    case 9:
                      _context14.t1 = _context14.sent;
                      _context14.next = 12;
                      return _context14.t0.upload.call(
                        _context14.t0,
                        _context14.t1,
                      );
                    case 12:
                      _context14.next = 16;
                      break;
                    case 14:
                      _context14.prev = 14;
                      _context14.t2 = _context14["catch"](5);
                    case 16:
                      _context14.next = 3;
                      break;
                    case 18:
                      _context14.next = 23;
                      break;
                    case 20:
                      _context14.prev = 20;
                      _context14.t3 = _context14["catch"](1);
                      _iterator4.e(_context14.t3);
                    case 23:
                      _context14.prev = 23;
                      _iterator4.f();
                      return _context14.finish(23);
                    case 26:
                      W([]);
                    case 27:
                    case "end":
                      return _context14.stop();
                  }
              },
              _callee14,
              null,
              [
                [1, 20, 23, 26],
                [5, 14],
              ],
            );
          }),
        )();
    },
    [_, t, Q],
  ),
    _antdDDbB1c.r.useEffect(function () {
      _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18() {
          var _e3, _r5;
          return _regeneratorRuntime().wrap(
            function _callee18$(_context18) {
              while (1)
                switch ((_context18.prev = _context18.next)) {
                  case 0:
                    _context18.prev = 0;
                    _context18.next = 3;
                    return V.getAppVersion();
                  case 3:
                    _e3 = _context18.sent;
                    _context18.next = 6;
                    return V.getCursorVersion()["catch"](
                      /*#__PURE__*/ (function () {
                        var _ref6 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(
                            function _callee17(r) {
                              return _regeneratorRuntime().wrap(
                                function _callee17$(_context17) {
                                  while (1)
                                    switch (
                                      (_context17.prev = _context17.next)
                                    ) {
                                      case 0:
                                        _antdDDbB1c.s.error(
                                          r instanceof Error
                                            ? r.message
                                            : String(r),
                                        ),
                                          (function () {
                                            var _ref7 = _asyncToGenerator(
                                              /*#__PURE__*/ _regeneratorRuntime().mark(
                                                function _callee15(e) {
                                                  return _regeneratorRuntime().wrap(
                                                    function _callee15$(
                                                      _context15,
                                                    ) {
                                                      while (1)
                                                        switch (
                                                          (_context15.prev =
                                                            _context15.next)
                                                        ) {
                                                          case 0:
                                                            if (!(_ && t)) {
                                                              _context15.next = 14;
                                                              break;
                                                            }
                                                            _context15.prev = 1;
                                                            _context15.t0 = F;
                                                            _context15.next = 5;
                                                            return e(t, _);
                                                          case 5:
                                                            _context15.t1 =
                                                              _context15.sent;
                                                            _context15.next = 8;
                                                            return _context15.t0.upload.call(
                                                              _context15.t0,
                                                              _context15.t1,
                                                            );
                                                          case 8:
                                                            _context15.next = 12;
                                                            break;
                                                          case 10:
                                                            _context15.prev = 10;
                                                            _context15.t2 =
                                                              _context15[
                                                                "catch"
                                                              ](1);
                                                          case 12:
                                                            _context15.next = 15;
                                                            break;
                                                          case 14:
                                                            W(function (t) {
                                                              return [].concat(
                                                                _toConsumableArray(
                                                                  t,
                                                                ),
                                                                [e],
                                                              );
                                                            });
                                                          case 15:
                                                          case "end":
                                                            return _context15.stop();
                                                        }
                                                    },
                                                    _callee15,
                                                    null,
                                                    [[1, 10]],
                                                  );
                                                },
                                              ),
                                            );
                                            return function (_x5) {
                                              return _ref7.apply(
                                                this,
                                                arguments,
                                              );
                                            };
                                          })()(
                                            /*#__PURE__*/ (function () {
                                              var _ref8 = _asyncToGenerator(
                                                /*#__PURE__*/ _regeneratorRuntime().mark(
                                                  function _callee16(t, a) {
                                                    return _regeneratorRuntime().wrap(
                                                      function _callee16$(
                                                        _context16,
                                                      ) {
                                                        while (1)
                                                          switch (
                                                            (_context16.prev =
                                                              _context16.next)
                                                          ) {
                                                            case 0:
                                                              return _context16.abrupt(
                                                                "return",
                                                                {
                                                                  device_id: t,
                                                                  key_code: a,
                                                                  data: {
                                                                    error_type:
                                                                      "get_cursor_version_failed",
                                                                    error_message:
                                                                      r instanceof
                                                                      Error
                                                                        ? r.message
                                                                        : String(
                                                                            r,
                                                                          ),
                                                                    error_stack:
                                                                      r instanceof
                                                                      Error
                                                                        ? r.stack
                                                                        : "",
                                                                    cursor_version:
                                                                      "-",
                                                                    app_version:
                                                                      _e3,
                                                                    platform: B,
                                                                    timestamp:
                                                                      new Date().toLocaleString(),
                                                                  },
                                                                },
                                                              );
                                                            case 1:
                                                            case "end":
                                                              return _context16.stop();
                                                          }
                                                      },
                                                      _callee16,
                                                    );
                                                  },
                                                ),
                                              );
                                              return function (_x6, _x7) {
                                                return _ref8.apply(
                                                  this,
                                                  arguments,
                                                );
                                              };
                                            })(),
                                          );
                                      case 1:
                                      case "end":
                                        return _context17.stop();
                                    }
                                },
                                _callee17,
                              );
                            },
                          ),
                        );
                        return function (_x4) {
                          return _ref6.apply(this, arguments);
                        };
                      })(),
                    );
                  case 6:
                    _r5 = _context18.sent;
                    A({
                      appVersion: _e3 || "-",
                      cursorVersion: _r5 || "-",
                    });
                    _context18.next = 13;
                    break;
                  case 10:
                    _context18.prev = 10;
                    _context18.t0 = _context18["catch"](0);
                    _antdDDbB1c.s.error(
                      _context18.t0 instanceof Error
                        ? _context18.t0.message
                        : "获取版本信息失败，请重试",
                    ),
                      A({
                        appVersion: "-",
                        cursorVersion: "-",
                      });
                  case 13:
                  case "end":
                    return _context18.stop();
                }
            },
            _callee18,
            null,
            [[0, 10]],
          );
        }),
      )();
    }, []),
    _antdDDbB1c.r.useEffect(function () {
      q.getId()
        .then(r)
        ["catch"](function (e) {
          _antdDDbB1c.s.error(
            e instanceof Error ? e.message : "获取设备信息失败，请重试",
          );
        });
    }, []);
  var re = /*#__PURE__*/ (function () {
    var _ref9 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19() {
        var _t2, _r6, e;
        return _regeneratorRuntime().wrap(
          function _callee19$(_context19) {
            while (1)
              switch ((_context19.prev = _context19.next)) {
                case 0:
                  _context19.prev = 0;
                  _context19.next = 3;
                  return K.getLatest();
                case 3:
                  _t2 = _context19.sent.data;
                  if (
                    (null == _t2 ? void 0 : _t2.title) &&
                    (null == _t2 ? void 0 : _t2.content)
                  ) {
                    _r6 = (function (e) {
                      var t = 0;
                      for (var _r7 = 0; _r7 < e.length; _r7++)
                        (t = (t << 5) - t + e.charCodeAt(_r7)), (t |= 0);
                      return Math.abs(t).toString(16);
                    })("".concat((e = _t2).title, ":").concat(e.content));
                    _r6 !== L &&
                      (localStorage.setItem("last_notification_hash", _r6),
                      T(_r6),
                      _antdDDbB1c.e.info({
                        message: _t2.title,
                        description: O.jsx("div", {
                          style: {
                            whiteSpace: "pre-wrap",
                          },
                          children: _t2.content,
                        }),
                        duration: null,
                        placement: "topRight",
                      }));
                  }
                  _context19.next = 10;
                  break;
                case 7:
                  _context19.prev = 7;
                  _context19.t0 = _context19["catch"](0);
                  F.upload({
                    device_id: t,
                    key_code: _,
                    data: {
                      error_type: "fetch_notification_failed",
                      error_message:
                        _context19.t0 instanceof Error
                          ? _context19.t0.message
                          : String(_context19.t0),
                      error_stack:
                        _context19.t0 instanceof Error
                          ? _context19.t0.stack
                          : "",
                      cursor_version: R.cursorVersion,
                      app_version: R.appVersion,
                      platform: B,
                      timestamp: new Date().toLocaleString(),
                    },
                  });
                case 10:
                case "end":
                  return _context19.stop();
              }
          },
          _callee19,
          null,
          [[0, 7]],
        );
      }),
    );
    return function re() {
      return _ref9.apply(this, arguments);
    };
  })();
  _antdDDbB1c.r.useEffect(
    function () {
      re();
      var e = setInterval(re, 9e5);
      return function () {
        return clearInterval(e);
      };
    },
    [L],
  );
  return O.jsx(_antdDDbB1c.C, {
    className: "main-card",
    children: O.jsxs(_antdDDbB1c.b, {
      direction: "vertical",
      size: "large",
      style: {
        width: "100%",
      },
      children: [
        O.jsxs("div", {
          children: [
            O.jsx("div", {
              className: "section-title",
              children: "设备记录号",
            }),
            O.jsxs(_antdDDbB1c.b.Compact, {
              style: {
                width: "100%",
              },
              children: [
                O.jsx(_antdDDbB1c.c, {
                  value: t,
                  readOnly: !0,
                  style: {
                    backgroundColor: "#f5f5f5",
                  },
                }),
                O.jsx(_antdDDbB1c.B, {
                  icon: O.jsx(_antdDDbB1c.R, {}),
                  onClick: function onClick() {
                    return _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee20() {
                          return _regeneratorRuntime().wrap(
                            function _callee20$(_context20) {
                              while (1)
                                switch ((_context20.prev = _context20.next)) {
                                  case 0:
                                    _context20.prev = 0;
                                    _context20.next = 3;
                                    return navigator.clipboard.writeText(t);
                                  case 3:
                                    _antdDDbB1c.s.success(
                                      "设备记录号已复制到剪贴板",
                                    );
                                    _context20.next = 9;
                                    break;
                                  case 6:
                                    _context20.prev = 6;
                                    _context20.t0 = _context20["catch"](0);
                                    _antdDDbB1c.s.error("复制失败，请手动复制");
                                  case 9:
                                  case "end":
                                    return _context20.stop();
                                }
                            },
                            _callee20,
                            null,
                            [[0, 6]],
                          );
                        },
                      ),
                    )();
                  },
                  children: "复制",
                }),
              ],
            }),
          ],
        }),
        O.jsxs("div", {
          children: [
            O.jsx("div", {
              className: "section-title",
              children: "会员信息",
            }),
            O.jsxs(_antdDDbB1c.D, {
              bordered: !0,
              size: "small",
              children: [
                O.jsxs(_antdDDbB1c.D.Item, {
                  label: "版本信息",
                  span: 3,
                  children: [
                    I.appName,
                    " ",
                    ""
                      .concat(R.appVersion, " / Cursor ")
                      .concat(R.cursorVersion),
                  ],
                }),
                O.jsx(_antdDDbB1c.D.Item, {
                  label: "状态",
                  span: 3,
                  children: (function (e) {
                    var t = {
                      active: {
                        color: "success",
                        text: "已激活",
                      },
                      inactive: {
                        color: "default",
                        text: "未激活",
                      },
                      expired: {
                        color: "error",
                        text: "已过期",
                      },
                    }[e];
                    return O.jsx(_antdDDbB1c.i, {
                      color: t.color,
                      children: t.text,
                    });
                  })(C.status),
                }),
                O.jsx(_antdDDbB1c.D.Item, {
                  label: "会员账号",
                  span: 3,
                  children: C.account || "-",
                }),
                O.jsxs(_antdDDbB1c.D.Item, {
                  label: "授权有效期",
                  span: 3,
                  children: [C.activatedAt || "-", " - ", C.expiresAt || "-"],
                }),
                ee
                  ? O.jsx(_antdDDbB1c.D.Item, {
                      label: "额度详情",
                      span: 3,
                      children: O.jsxs(_antdDDbB1c.b, {
                        children: [
                          O.jsxs("span", {
                            children: ["总额度: ", C.totalQuota || 0],
                          }),
                          O.jsx(_antdDDbB1c.f, {
                            type: "vertical",
                          }),
                          O.jsxs("span", {
                            children: ["已用: ", C.usedQuota || 0],
                          }),
                          O.jsx(_antdDDbB1c.f, {
                            type: "vertical",
                          }),
                          O.jsxs("span", {
                            children: [
                              te ? "赠送" : "剩余",
                              ": ",
                              te
                                ? O.jsxs("span", {
                                    style: {
                                      display: "inline-flex",
                                      alignItems: "center",
                                    },
                                    children: [
                                      O.jsx("span", {
                                        children: Math.abs(
                                          C.remainingQuota || 0,
                                        ),
                                      }),
                                      O.jsx(_iconsH9fv45kP.c, {
                                        style: {
                                          color: "#FFD700",
                                          marginLeft: 4,
                                        },
                                      }),
                                    ],
                                  })
                                : C.remainingQuota || 0,
                            ],
                          }),
                          O.jsx(_antdDDbB1c.f, {
                            type: "vertical",
                          }),
                          O.jsx(_antdDDbB1c.g, {
                            title: "刷新额度",
                            children: O.jsx(_antdDDbB1c.B, {
                              type: "link",
                              className: "quota-refresh-btn",
                              icon: O.jsx(_iconsH9fv45kP.d, {
                                spin: M,
                              }),
                              onClick: function onClick() {
                                return _asyncToGenerator(
                                  /*#__PURE__*/ _regeneratorRuntime().mark(
                                    function _callee21() {
                                      var e;
                                      return _regeneratorRuntime().wrap(
                                        function _callee21$(_context21) {
                                          while (1)
                                            switch (
                                              (_context21.prev =
                                                _context21.next)
                                            ) {
                                              case 0:
                                                if (M) {
                                                  _context21.next = 15;
                                                  break;
                                                }
                                                H(!0);
                                                _context21.prev = 2;
                                                _context21.next = 5;
                                                return z.getQuota(_, t);
                                              case 5:
                                                e = _context21.sent;
                                                b(function (t) {
                                                  return _objectSpread(
                                                    _objectSpread({}, t),
                                                    e,
                                                  );
                                                }),
                                                  _antdDDbB1c.s.success(
                                                    "额度信息已更新",
                                                  );
                                                _context21.next = 12;
                                                break;
                                              case 9:
                                                _context21.prev = 9;
                                                _context21.t0 =
                                                  _context21["catch"](2);
                                                _antdDDbB1c.s.error(
                                                  _context21.t0 instanceof Error
                                                    ? _context21.t0.message
                                                    : String(_context21.t0),
                                                );
                                              case 12:
                                                _context21.prev = 12;
                                                H(!1);
                                                return _context21.finish(12);
                                              case 15:
                                              case "end":
                                                return _context21.stop();
                                            }
                                        },
                                        _callee21,
                                        null,
                                        [[2, 9, 12, 15]],
                                      );
                                    },
                                  ),
                                )();
                              },
                              size: "small",
                            }),
                          }),
                        ],
                      }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        O.jsxs("div", {
          children: [
            O.jsx("div", {
              className: "section-title",
              children: "激活码",
            }),
            O.jsx(_antdDDbB1c.b, {
              direction: "vertical",
              style: {
                width: "100%",
              },
              children: O.jsxs(_antdDDbB1c.b.Compact, {
                style: {
                  width: "100%",
                },
                children: [
                  O.jsx(_antdDDbB1c.c, {
                    placeholder: "请输入激活码",
                    value: _,
                    onChange: function onChange(e) {
                      return E(e.target.value.trim());
                    },
                  }),
                  O.jsx(_antdDDbB1c.B, {
                    type: "primary",
                    icon: O.jsx(_iconsH9fv45kP.R, {}),
                    onClick: function onClick() {
                      return _asyncToGenerator(
                        /*#__PURE__*/ _regeneratorRuntime().mark(
                          function _callee24() {
                            var e;
                            return _regeneratorRuntime().wrap(
                              function _callee24$(_context24) {
                                while (1)
                                  switch ((_context24.prev = _context24.next)) {
                                    case 0:
                                      if (_.trim()) {
                                        _context24.next = 2;
                                        break;
                                      }
                                      return _context24.abrupt("return");
                                    case 2:
                                      e = _antdDDbB1c.M.confirm({
                                        title: "确认激活",
                                        content:
                                          "激活过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？",
                                        okText: "确定",
                                        cancelText: "取消",
                                        onOk: function onOk() {
                                          return _asyncToGenerator(
                                            /*#__PURE__*/ _regeneratorRuntime().mark(
                                              function _callee23() {
                                                var _e4,
                                                  _r8,
                                                  _ref0,
                                                  _o,
                                                  _n,
                                                  _s,
                                                  _i;
                                                return _regeneratorRuntime().wrap(
                                                  function _callee23$(
                                                    _context23,
                                                  ) {
                                                    while (1)
                                                      switch (
                                                        (_context23.prev =
                                                          _context23.next)
                                                      ) {
                                                        case 0:
                                                          e.update({
                                                            cancelButtonProps: {
                                                              disabled: !0,
                                                            },
                                                          });
                                                          _context23.prev = 1;
                                                          _context23.next = 4;
                                                          return z.activate(
                                                            _,
                                                            t,
                                                            B,
                                                            R.cursorVersion,
                                                            R.appVersion,
                                                            C.account,
                                                          );
                                                        case 4:
                                                          _e4 = _context23.sent;
                                                          _r8 =
                                                            1 ===
                                                            _e4.data.key_info
                                                              .key_status
                                                              ? "active"
                                                              : 2 ===
                                                                  _e4.data
                                                                    .key_info
                                                                    .key_status
                                                                ? "expired"
                                                                : "inactive";
                                                          localStorage.setItem(
                                                            Y,
                                                            _,
                                                          ),
                                                            j(_),
                                                            b({
                                                              status: _r8,
                                                              account:
                                                                _e4.data.mail,
                                                              activatedAt:
                                                                new Date(
                                                                  _e4.data.key_info.activated_at,
                                                                ).toLocaleString(),
                                                              expiresAt:
                                                                new Date(
                                                                  _e4.data.key_info.expired_at,
                                                                ).toLocaleString(),
                                                              totalQuota:
                                                                _e4.data
                                                                  .key_info
                                                                  .quota_key_max_quota,
                                                              usedQuota:
                                                                _e4.data
                                                                  .key_info
                                                                  .quota_key_used_quota ||
                                                                0,
                                                              remainingQuota:
                                                                _e4.data
                                                                  .key_info
                                                                  .quota_key_max_quota -
                                                                (_e4.data
                                                                  .key_info
                                                                  .quota_key_used_quota ||
                                                                  0),
                                                            });
                                                          (_ref0 =
                                                            _e4.data.oem_info ||
                                                            {}),
                                                            (_o =
                                                              _ref0.app_name),
                                                            (_n =
                                                              _ref0.app_icon),
                                                            (_s =
                                                              _ref0.app_links);
                                                          P({
                                                            appName: _o,
                                                            appIcon: _n,
                                                            appLinks:
                                                              (function () {
                                                                try {
                                                                  return JSON.parse(
                                                                    _s,
                                                                  );
                                                                } catch (e) {
                                                                  return [];
                                                                }
                                                              })(),
                                                          });
                                                          _context23.next = 11;
                                                          return D.updateWindowSettings(
                                                            {
                                                              title: _o,
                                                              icon: _n,
                                                            },
                                                          );
                                                        case 11:
                                                          _i =
                                                            _antdDDbB1c.s.loading(
                                                              "正在更新 Cursor 配置...",
                                                              0,
                                                            );
                                                          N.refresh({
                                                            account:
                                                              _e4.data.account,
                                                          })
                                                            .then(function () {
                                                              _i(),
                                                                _antdDDbB1c.M.success(
                                                                  {
                                                                    title:
                                                                      "激活成功",
                                                                    content:
                                                                      "Cursor 授权配置已完成！您现在可以直接使用 Cursor 编辑器，祝您使用愉快！",
                                                                    okText:
                                                                      "我知道了",
                                                                  },
                                                                );
                                                            })
                                                            ["catch"](
                                                              /*#__PURE__*/ (function () {
                                                                var _ref1 =
                                                                  _asyncToGenerator(
                                                                    /*#__PURE__*/ _regeneratorRuntime().mark(
                                                                      function _callee22(
                                                                        e,
                                                                      ) {
                                                                        return _regeneratorRuntime().wrap(
                                                                          function _callee22$(
                                                                            _context22,
                                                                          ) {
                                                                            while (
                                                                              1
                                                                            )
                                                                              switch (
                                                                                (_context22.prev =
                                                                                  _context22.next)
                                                                              ) {
                                                                                case 0:
                                                                                  _i(),
                                                                                    _antdDDbB1c.s.error(
                                                                                      U.DEBUG_ERROR
                                                                                        ? e instanceof
                                                                                          Error
                                                                                          ? e.message
                                                                                          : String(
                                                                                              e,
                                                                                            )
                                                                                        : "激活失败，请重试",
                                                                                    ),
                                                                                    F.upload(
                                                                                      {
                                                                                        device_id:
                                                                                          t,
                                                                                        key_code:
                                                                                          _,
                                                                                        data: {
                                                                                          error_type:
                                                                                            "activation_failed",
                                                                                          error_message:
                                                                                            e instanceof
                                                                                            Error
                                                                                              ? e.message
                                                                                              : String(
                                                                                                  e,
                                                                                                ),
                                                                                          error_stack:
                                                                                            e instanceof
                                                                                            Error
                                                                                              ? e.stack
                                                                                              : "",
                                                                                          cursor_version:
                                                                                            R.cursorVersion,
                                                                                          app_version:
                                                                                            R.appVersion,
                                                                                          platform:
                                                                                            B,
                                                                                          timestamp:
                                                                                            new Date().toLocaleString(),
                                                                                        },
                                                                                      },
                                                                                    );
                                                                                case 1:
                                                                                case "end":
                                                                                  return _context22.stop();
                                                                              }
                                                                          },
                                                                          _callee22,
                                                                        );
                                                                      },
                                                                    ),
                                                                  );
                                                                return function (
                                                                  _x8,
                                                                ) {
                                                                  return _ref1.apply(
                                                                    this,
                                                                    arguments,
                                                                  );
                                                                };
                                                              })(),
                                                            );
                                                          _context23.next = 18;
                                                          break;
                                                        case 15:
                                                          _context23.prev = 15;
                                                          _context23.t0 =
                                                            _context23["catch"](
                                                              1,
                                                            );
                                                          _antdDDbB1c.s.error(
                                                            _context23.t0 instanceof
                                                              Error
                                                              ? _context23.t0
                                                                  .message
                                                              : String(
                                                                  _context23.t0,
                                                                ),
                                                          );
                                                        case 18:
                                                        case "end":
                                                          return _context23.stop();
                                                      }
                                                  },
                                                  _callee23,
                                                  null,
                                                  [[1, 15]],
                                                );
                                              },
                                            ),
                                          )();
                                        },
                                      });
                                    case 3:
                                    case "end":
                                      return _context24.stop();
                                  }
                              },
                              _callee24,
                            );
                          },
                        ),
                      )();
                    },
                    disabled: (function () {
                      var e = _.trim();
                      return !e || e === S;
                    })(),
                    children: "激活",
                  }),
                ],
              }),
            }),
          ],
        }),
        O.jsx("div", {
          children: O.jsx(_antdDDbB1c.b, {
            direction: "vertical",
            style: {
              width: "100%",
            },
            children: O.jsx(_antdDDbB1c.B, {
              icon: O.jsx(_antdDDbB1c.d, {}),
              onClick: function onClick() {
                return _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(
                    function _callee27() {
                      var e;
                      return _regeneratorRuntime().wrap(function _callee27$(
                        _context27,
                      ) {
                        while (1)
                          switch ((_context27.prev = _context27.next)) {
                            case 0:
                              if (_.trim() || !C) {
                                J(!0);
                                try {
                                  e = _antdDDbB1c.M.confirm({
                                    title: "确认刷新",
                                    icon: O.jsx(_antdDDbB1c.h, {}),
                                    content:
                                      "刷新过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？",
                                    okText: "确认",
                                    cancelText: "取消",
                                    onOk: function onOk() {
                                      return _asyncToGenerator(
                                        /*#__PURE__*/ _regeneratorRuntime().mark(
                                          function _callee26() {
                                            var _e5,
                                              _r9,
                                              _ref10,
                                              _o2,
                                              _n2,
                                              _s2,
                                              _i2;
                                            return _regeneratorRuntime().wrap(
                                              function _callee26$(_context26) {
                                                while (1)
                                                  switch (
                                                    (_context26.prev =
                                                      _context26.next)
                                                  ) {
                                                    case 0:
                                                      e.update({
                                                        cancelButtonProps: {
                                                          disabled: !0,
                                                        },
                                                      });
                                                      _context26.prev = 1;
                                                      _context26.next = 4;
                                                      return N.beforeRefresh();
                                                    case 4:
                                                      _context26.next = 6;
                                                      return new Promise(
                                                        function (e, t) {
                                                          _antdDDbB1c.M.confirm(
                                                            {
                                                              title:
                                                                "确认补丁结果",
                                                              content: O.jsx(
                                                                "div",
                                                                {
                                                                  style: {
                                                                    whiteSpace:
                                                                      "pre-line",
                                                                  },
                                                                  children:
                                                                    '补丁已执行完成，请确认补丁窗口显示的执行结果：\n\n• 全部成功 → 点击"继续"\n• 出现错误 → 点击"取消"并重试或截图反馈',
                                                                },
                                                              ),
                                                              okText: "继续",
                                                              cancelText:
                                                                "取消操作",
                                                              onOk: function onOk() {
                                                                e(!0);
                                                              },
                                                              onCancel:
                                                                function onCancel() {
                                                                  t(
                                                                    new Error(
                                                                      "用户取消了操作",
                                                                    ),
                                                                  );
                                                                },
                                                            },
                                                          );
                                                        },
                                                      );
                                                    case 6:
                                                      _context26.next = 8;
                                                      return z.refresh(
                                                        _,
                                                        t,
                                                        C.account,
                                                        B,
                                                        R.cursorVersion,
                                                        R.appVersion,
                                                        "",
                                                      );
                                                    case 8:
                                                      _e5 = _context26.sent;
                                                      _r9 =
                                                        1 ===
                                                        _e5.data.key_info
                                                          .key_status
                                                          ? "active"
                                                          : 2 ===
                                                              _e5.data.key_info
                                                                .key_status
                                                            ? "expired"
                                                            : "inactive";
                                                      b({
                                                        status: _r9,
                                                        account: _e5.data.mail,
                                                        activatedAt: new Date(
                                                          _e5.data.key_info.activated_at,
                                                        ).toLocaleString(),
                                                        expiresAt: new Date(
                                                          _e5.data.key_info.expired_at,
                                                        ).toLocaleString(),
                                                        totalQuota:
                                                          _e5.data.key_info
                                                            .quota_key_max_quota,
                                                        usedQuota:
                                                          _e5.data.key_info
                                                            .quota_key_used_quota ||
                                                          0,
                                                        remainingQuota:
                                                          _e5.data.key_info
                                                            .quota_key_max_quota -
                                                          (_e5.data.key_info
                                                            .quota_key_used_quota ||
                                                            0),
                                                      });
                                                      (_ref10 =
                                                        _e5.data.oem_info ||
                                                        {}),
                                                        (_o2 = _ref10.app_name),
                                                        (_n2 = _ref10.app_icon),
                                                        (_s2 =
                                                          _ref10.app_links);
                                                      P({
                                                        appName: _o2,
                                                        appIcon: _n2,
                                                        appLinks: (function () {
                                                          try {
                                                            return JSON.parse(
                                                              _s2,
                                                            );
                                                          } catch (e) {
                                                            return [];
                                                          }
                                                        })(),
                                                      });
                                                      _context26.next = 15;
                                                      return D.updateWindowSettings(
                                                        {
                                                          title: _o2,
                                                          icon: _n2,
                                                        },
                                                      );
                                                    case 15:
                                                      _i2 =
                                                        _antdDDbB1c.s.loading(
                                                          "正在更新 Cursor 配置...",
                                                          0,
                                                        );
                                                      N.refresh({
                                                        account:
                                                          _e5.data.account,
                                                      })
                                                        .then(function () {
                                                          _i2(),
                                                            _antdDDbB1c.s.success(
                                                              "刷新成功",
                                                            );
                                                        })
                                                        ["catch"](
                                                          /*#__PURE__*/ (function () {
                                                            var _ref11 =
                                                              _asyncToGenerator(
                                                                /*#__PURE__*/ _regeneratorRuntime().mark(
                                                                  function _callee25(
                                                                    e,
                                                                  ) {
                                                                    return _regeneratorRuntime().wrap(
                                                                      function _callee25$(
                                                                        _context25,
                                                                      ) {
                                                                        while (
                                                                          1
                                                                        )
                                                                          switch (
                                                                            (_context25.prev =
                                                                              _context25.next)
                                                                          ) {
                                                                            case 0:
                                                                              _i2(),
                                                                                _antdDDbB1c.s.error(
                                                                                  U.DEBUG_ERROR
                                                                                    ? e instanceof
                                                                                      Error
                                                                                      ? e.message
                                                                                      : String(
                                                                                          e,
                                                                                        )
                                                                                    : "刷新失败，请重试",
                                                                                ),
                                                                                F.upload(
                                                                                  {
                                                                                    device_id:
                                                                                      t,
                                                                                    key_code:
                                                                                      _,
                                                                                    data: {
                                                                                      error_type:
                                                                                        "refresh_failed",
                                                                                      error_message:
                                                                                        e instanceof
                                                                                        Error
                                                                                          ? e.message
                                                                                          : String(
                                                                                              e,
                                                                                            ),
                                                                                      error_stack:
                                                                                        e instanceof
                                                                                        Error
                                                                                          ? e.stack
                                                                                          : "",
                                                                                      cursor_version:
                                                                                        R.cursorVersion,
                                                                                      app_version:
                                                                                        R.appVersion,
                                                                                      platform:
                                                                                        B,
                                                                                      timestamp:
                                                                                        new Date().toLocaleString(),
                                                                                    },
                                                                                  },
                                                                                );
                                                                            case 1:
                                                                            case "end":
                                                                              return _context25.stop();
                                                                          }
                                                                      },
                                                                      _callee25,
                                                                    );
                                                                  },
                                                                ),
                                                              );
                                                            return function (
                                                              _x9,
                                                            ) {
                                                              return _ref11.apply(
                                                                this,
                                                                arguments,
                                                              );
                                                            };
                                                          })(),
                                                        );
                                                      _context26.next = 22;
                                                      break;
                                                    case 19:
                                                      _context26.prev = 19;
                                                      _context26.t0 =
                                                        _context26["catch"](1);
                                                      _antdDDbB1c.s.error(
                                                        _context26.t0 instanceof
                                                          Error
                                                          ? _context26.t0
                                                              .message
                                                          : String(
                                                              _context26.t0,
                                                            ),
                                                      );
                                                    case 22:
                                                    case "end":
                                                      return _context26.stop();
                                                  }
                                              },
                                              _callee26,
                                              null,
                                              [[1, 19]],
                                            );
                                          },
                                        ),
                                      )();
                                    },
                                  });
                                } catch (e) {
                                  _antdDDbB1c.s.error(
                                    "获取刷新原因失败，请重试",
                                  );
                                } finally {
                                  J(!1);
                                }
                              }
                            case 1:
                            case "end":
                              return _context27.stop();
                          }
                      }, _callee27);
                    },
                  ),
                )();
              },
              disabled: !_.trim(),
              loading: G,
              block: !0,
              children: "Cursor 不可用时点击刷新授权",
            }),
          }),
        }),
        O.jsx("div", {
          children: O.jsx(_antdDDbB1c.b, {
            direction: "vertical",
            style: {
              width: "100%",
            },
            children: O.jsxs(_antdDDbB1c.b.Compact, {
              block: !0,
              children: [
                O.jsx(_antdDDbB1c.B, {
                  danger: !0,
                  icon: O.jsx(_iconsH9fv45kP.a, {}),
                  onClick: function onClick() {
                    return _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee30() {
                          var e;
                          return _regeneratorRuntime().wrap(function _callee30$(
                            _context30,
                          ) {
                            while (1)
                              switch ((_context30.prev = _context30.next)) {
                                case 0:
                                  e = _antdDDbB1c.M.confirm({
                                    title: "确认禁用",
                                    content:
                                      "禁用过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？",
                                    okText: "确定",
                                    cancelText: "取消",
                                    onOk: function onOk() {
                                      return _asyncToGenerator(
                                        /*#__PURE__*/ _regeneratorRuntime().mark(
                                          function _callee29() {
                                            var _e6;
                                            return _regeneratorRuntime().wrap(
                                              function _callee29$(_context29) {
                                                while (1)
                                                  switch (
                                                    (_context29.prev =
                                                      _context29.next)
                                                  ) {
                                                    case 0:
                                                      e.update({
                                                        cancelButtonProps: {
                                                          disabled: !0,
                                                        },
                                                      });
                                                      _context29.prev = 1;
                                                      _context29.next = 4;
                                                      return Promise.race([
                                                        new Promise(function (
                                                          e,
                                                        ) {
                                                          return setTimeout(
                                                            function () {
                                                              return e(
                                                                "timeout",
                                                              );
                                                            },
                                                            1e3,
                                                          );
                                                        }),
                                                        N.banUpgrade()
                                                          .then(function () {
                                                            _e6 && _e6(),
                                                              _antdDDbB1c.s.success(
                                                                "已禁用 Cursor 更新",
                                                              );
                                                          })
                                                          ["catch"](
                                                            /*#__PURE__*/ (function () {
                                                              var _ref12 =
                                                                _asyncToGenerator(
                                                                  /*#__PURE__*/ _regeneratorRuntime().mark(
                                                                    function _callee28(
                                                                      r,
                                                                    ) {
                                                                      var o;
                                                                      return _regeneratorRuntime().wrap(
                                                                        function _callee28$(
                                                                          _context28,
                                                                        ) {
                                                                          while (
                                                                            1
                                                                          )
                                                                            switch (
                                                                              (_context28.prev =
                                                                                _context28.next)
                                                                            ) {
                                                                              case 0:
                                                                                o =
                                                                                  r instanceof
                                                                                  Error
                                                                                    ? r.message
                                                                                    : String(
                                                                                        r,
                                                                                      );
                                                                                _e6 &&
                                                                                  _e6(),
                                                                                  _antdDDbB1c.s.error(
                                                                                    U.DEBUG_ERROR
                                                                                      ? o
                                                                                      : "禁用更新失败，请重试",
                                                                                  ),
                                                                                  F.upload(
                                                                                    {
                                                                                      device_id:
                                                                                        t,
                                                                                      key_code:
                                                                                        _,
                                                                                      data: {
                                                                                        error_type:
                                                                                          "disable_update_failed",
                                                                                        error_message:
                                                                                          r instanceof
                                                                                          Error
                                                                                            ? r.message
                                                                                            : String(
                                                                                                r,
                                                                                              ),
                                                                                        error_stack:
                                                                                          r instanceof
                                                                                          Error
                                                                                            ? r.stack
                                                                                            : "",
                                                                                        cursor_version:
                                                                                          R.cursorVersion,
                                                                                        app_version:
                                                                                          R.appVersion,
                                                                                        platform:
                                                                                          B,
                                                                                        timestamp:
                                                                                          new Date().toLocaleString(),
                                                                                      },
                                                                                    },
                                                                                  );
                                                                              case 2:
                                                                              case "end":
                                                                                return _context28.stop();
                                                                            }
                                                                        },
                                                                        _callee28,
                                                                      );
                                                                    },
                                                                  ),
                                                                );
                                                              return function (
                                                                _x0,
                                                              ) {
                                                                return _ref12.apply(
                                                                  this,
                                                                  arguments,
                                                                );
                                                              };
                                                            })(),
                                                          ),
                                                      ]);
                                                    case 4:
                                                      _context29.t0 =
                                                        _context29.sent;
                                                      _context29.t1 =
                                                        "timeout" ===
                                                        _context29.t0;
                                                      if (!_context29.t1) {
                                                        _context29.next = 8;
                                                        break;
                                                      }
                                                      _e6 =
                                                        _antdDDbB1c.s.loading(
                                                          "正在更新 Cursor 配置...",
                                                          0,
                                                        );
                                                    case 8:
                                                      _context29.next = 13;
                                                      break;
                                                    case 10:
                                                      _context29.prev = 10;
                                                      _context29.t2 =
                                                        _context29["catch"](1);
                                                      _antdDDbB1c.s.error(
                                                        _context29.t2 instanceof
                                                          Error
                                                          ? _context29.t2
                                                              .message
                                                          : String(
                                                              _context29.t2,
                                                            ),
                                                      );
                                                    case 13:
                                                    case "end":
                                                      return _context29.stop();
                                                  }
                                              },
                                              _callee29,
                                              null,
                                              [[1, 10]],
                                            );
                                          },
                                        ),
                                      )();
                                    },
                                  });
                                case 1:
                                case "end":
                                  return _context30.stop();
                              }
                          }, _callee30);
                        },
                      ),
                    )();
                  },
                  style: {
                    width: "60%",
                    marginRight: "8px",
                  },
                  children: "首次使用或安装Cursor时点击禁止更新",
                }),
                O.jsx(_antdDDbB1c.B, {
                  icon: O.jsx(_iconsH9fv45kP.b, {}),
                  onClick: function onClick() {
                    return _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee33() {
                          var e;
                          return _regeneratorRuntime().wrap(function _callee33$(
                            _context33,
                          ) {
                            while (1)
                              switch ((_context33.prev = _context33.next)) {
                                case 0:
                                  e = _antdDDbB1c.M.confirm({
                                    title: "确认补丁",
                                    content:
                                      "补丁过程需要关闭 Cursor，请确保已保存所有工作内容。是否继续？",
                                    okText: "确定",
                                    cancelText: "取消",
                                    onOk: function onOk() {
                                      return _asyncToGenerator(
                                        /*#__PURE__*/ _regeneratorRuntime().mark(
                                          function _callee32() {
                                            var _e7;
                                            return _regeneratorRuntime().wrap(
                                              function _callee32$(_context32) {
                                                while (1)
                                                  switch (
                                                    (_context32.prev =
                                                      _context32.next)
                                                  ) {
                                                    case 0:
                                                      e.update({
                                                        cancelButtonProps: {
                                                          disabled: !0,
                                                        },
                                                      });
                                                      _context32.prev = 1;
                                                      _context32.next = 4;
                                                      return Promise.race([
                                                        new Promise(function (
                                                          e,
                                                        ) {
                                                          return setTimeout(
                                                            function () {
                                                              return e(
                                                                "timeout",
                                                              );
                                                            },
                                                            1e3,
                                                          );
                                                        }),
                                                        N.patch()
                                                          .then(function () {
                                                            _e7 && _e7(),
                                                              _antdDDbB1c.s.success(
                                                                '补丁执行成功，请点击"刷新授权"按钮',
                                                                10,
                                                              );
                                                          })
                                                          ["catch"](
                                                            /*#__PURE__*/ (function () {
                                                              var _ref13 =
                                                                _asyncToGenerator(
                                                                  /*#__PURE__*/ _regeneratorRuntime().mark(
                                                                    function _callee31(
                                                                      r,
                                                                    ) {
                                                                      var o;
                                                                      return _regeneratorRuntime().wrap(
                                                                        function _callee31$(
                                                                          _context31,
                                                                        ) {
                                                                          while (
                                                                            1
                                                                          )
                                                                            switch (
                                                                              (_context31.prev =
                                                                                _context31.next)
                                                                            ) {
                                                                              case 0:
                                                                                o =
                                                                                  r instanceof
                                                                                  Error
                                                                                    ? r.message
                                                                                    : String(
                                                                                        r,
                                                                                      );
                                                                                _e7 &&
                                                                                  _e7(),
                                                                                  _antdDDbB1c.s.error(
                                                                                    U.DEBUG_ERROR
                                                                                      ? o
                                                                                      : "补丁失败，请重试",
                                                                                  ),
                                                                                  F.upload(
                                                                                    {
                                                                                      device_id:
                                                                                        t,
                                                                                      key_code:
                                                                                        _,
                                                                                      data: {
                                                                                        error_type:
                                                                                          "patch_failed",
                                                                                        error_message:
                                                                                          r instanceof
                                                                                          Error
                                                                                            ? r.message
                                                                                            : String(
                                                                                                r,
                                                                                              ),
                                                                                        error_stack:
                                                                                          r instanceof
                                                                                          Error
                                                                                            ? r.stack
                                                                                            : "",
                                                                                        cursor_version:
                                                                                          R.cursorVersion,
                                                                                        app_version:
                                                                                          R.appVersion,
                                                                                        platform:
                                                                                          B,
                                                                                        timestamp:
                                                                                          new Date().toLocaleString(),
                                                                                      },
                                                                                    },
                                                                                  );
                                                                              case 2:
                                                                              case "end":
                                                                                return _context31.stop();
                                                                            }
                                                                        },
                                                                        _callee31,
                                                                      );
                                                                    },
                                                                  ),
                                                                );
                                                              return function (
                                                                _x1,
                                                              ) {
                                                                return _ref13.apply(
                                                                  this,
                                                                  arguments,
                                                                );
                                                              };
                                                            })(),
                                                          ),
                                                      ]);
                                                    case 4:
                                                      _context32.t0 =
                                                        _context32.sent;
                                                      _context32.t1 =
                                                        "timeout" ===
                                                        _context32.t0;
                                                      if (!_context32.t1) {
                                                        _context32.next = 8;
                                                        break;
                                                      }
                                                      _e7 =
                                                        _antdDDbB1c.s.loading(
                                                          "正在更新 Cursor 配置...",
                                                          0,
                                                        );
                                                    case 8:
                                                      _context32.next = 13;
                                                      break;
                                                    case 10:
                                                      _context32.prev = 10;
                                                      _context32.t2 =
                                                        _context32["catch"](1);
                                                      _antdDDbB1c.s.error(
                                                        _context32.t2 instanceof
                                                          Error
                                                          ? _context32.t2
                                                              .message
                                                          : String(
                                                              _context32.t2,
                                                            ),
                                                      );
                                                    case 13:
                                                    case "end":
                                                      return _context32.stop();
                                                  }
                                              },
                                              _callee32,
                                              null,
                                              [[1, 10]],
                                            );
                                          },
                                        ),
                                      )();
                                    },
                                  });
                                case 1:
                                case "end":
                                  return _context33.stop();
                              }
                          }, _callee33);
                        },
                      ),
                    )();
                  },
                  style: {
                    width: "40%",
                    borderColor: "#d9d9d9",
                  },
                  children: "多次刷新无效点击这里",
                }),
              ],
            }),
          }),
        }),
        O.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          children: [
            I.appIcon
              ? O.jsx("div", {
                  className: "logo-container",
                  children: O.jsx("img", {
                    src: I.appIcon,
                    alt: "App Logo",
                    className: "app-logo",
                  }),
                })
              : null,
            I.appLinks.length
              ? O.jsx("div", {
                  className: "button-container",
                  children: I.appLinks.map(function (_ref14) {
                    var e = _ref14.link,
                      t = _ref14.text,
                      _ref14$type = _ref14.type,
                      r = _ref14$type === void 0 ? "Out_link" : _ref14$type;
                    return O.jsx(
                      _antdDDbB1c.B,
                      {
                        type: "link",
                        onClick: function onClick() {
                          return (function (e, t) {
                            "Out_link" === e
                              ? window.electronAPI.openWebsite(t)
                              : "In_link" === e &&
                                D.openExtensionWindow(t, I.appName);
                          })(r, e);
                        },
                        children: t,
                      },
                      e,
                    );
                  }),
                })
              : null,
          ],
        }),
      ],
    }),
  });
}
L.createRoot(document.getElementById("root")).render(
  O.jsx(_antdDDbB1c.j.StrictMode, {
    children: O.jsx(ee, {}),
  }),
);
