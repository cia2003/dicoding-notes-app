/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], s = 0; s < t.length; s++) {
            var u = t[s],
              c = r.base ? u[0] + r.base : u[0],
              l = i[c] || 0,
              f = "".concat(c, " ").concat(l);
            i[c] = l + 1;
            var h = n(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(p);
            else {
              var d = o(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: f, updater: d, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              e[s].references--;
            }
            for (var u = r(t, o), c = 0; c < i.length; c++) {
              var l = n(i[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0];
                  null != u && (a[u] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      401: (t, e) => {
        "use strict";
        function n(t, e) {
          -1 === t.indexOf(e) && t.push(e);
        }
        function r(t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1);
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        const o = (t, e, n) => (n > e ? e : n < t ? t : n);
        (e.warning = () => {}), (e.invariant = () => {});
        const i = {},
          a = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
          s = (t) => /^0[^.\s]+$/u.test(t);
        function u(t) {
          let e;
          return () => (void 0 === e && (e = t()), e);
        }
        const c = (t) => t,
          l = (t, e) => (n) => e(t(n)),
          f = (...t) => t.reduce(l),
          h = (t, e, n) => {
            const r = e - t;
            return 0 === r ? 1 : (n - t) / r;
          };
        class p {
          constructor() {
            this.subscriptions = [];
          }
          add(t) {
            return n(this.subscriptions, t), () => r(this.subscriptions, t);
          }
          notify(t, e, n) {
            const r = this.subscriptions.length;
            if (r)
              if (1 === r) this.subscriptions[0](t, e, n);
              else
                for (let o = 0; o < r; o++) {
                  const r = this.subscriptions[o];
                  r && r(t, e, n);
                }
          }
          getSize() {
            return this.subscriptions.length;
          }
          clear() {
            this.subscriptions.length = 0;
          }
        }
        const d = (t) => 1e3 * t,
          m = (t) => t / 1e3;
        function y(t, e) {
          return e ? t * (1e3 / e) : 0;
        }
        const v = new Set(),
          g = (t, e, n) => {
            const r = e - t;
            return ((((n - t) % r) + r) % r) + t;
          },
          b = (t, e, n) =>
            (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        function w(t, e, n, r) {
          if (t === e && n === r) return c;
          return (o) =>
            0 === o || 1 === o
              ? o
              : b(
                  (function (t, e, n, r, o) {
                    let i,
                      a,
                      s = 0;
                    do {
                      (a = e + (n - e) / 2),
                        (i = b(a, r, o) - t),
                        i > 0 ? (n = a) : (e = a);
                    } while (Math.abs(i) > 1e-7 && ++s < 12);
                    return a;
                  })(o, 0, 1, t, n),
                  e,
                  r,
                );
        }
        const x = (t) => (e) =>
            e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
          S = (t) => (e) => 1 - t(1 - e),
          E = w(0.33, 1.53, 0.69, 0.99),
          T = S(E),
          k = x(T),
          _ = (t) =>
            (t *= 2) < 1 ? 0.5 * T(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
          O = (t) => 1 - Math.sin(Math.acos(t)),
          j = S(O),
          P = x(O),
          M = w(0.42, 0, 1, 1),
          A = w(0, 0, 0.58, 1),
          C = w(0.42, 0, 0.58, 1),
          R = (t) => Array.isArray(t) && "number" != typeof t[0];
        function V(t, e) {
          return R(t) ? t[g(0, t.length, e)] : t;
        }
        const L = (t) => Array.isArray(t) && "number" == typeof t[0],
          F = {
            linear: c,
            easeIn: M,
            easeInOut: C,
            easeOut: A,
            circIn: O,
            circInOut: P,
            circOut: j,
            backIn: T,
            backInOut: k,
            backOut: E,
            anticipate: _,
          },
          I = (t) => {
            if (L(t)) {
              e.invariant(
                4 === t.length,
                "Cubic bezier arrays must contain four numerical values.",
              );
              const [n, r, o, i] = t;
              return w(n, r, o, i);
            }
            return "string" == typeof t
              ? (e.invariant(void 0 !== F[t], `Invalid easing type '${t}'`),
                F[t])
              : t;
          },
          N = [
            "setup",
            "read",
            "resolveKeyframes",
            "preUpdate",
            "update",
            "preRender",
            "render",
            "postRender",
          ],
          B = { value: null, addProjectionMetrics: null };
        function D(t, e) {
          let n = !1,
            r = !0;
          const o = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = () => (n = !0),
            s = N.reduce(
              (t, n) => (
                (t[n] = (function (t, e) {
                  let n = new Set(),
                    r = new Set(),
                    o = !1,
                    i = !1;
                  const a = new WeakSet();
                  let s = { delta: 0, timestamp: 0, isProcessing: !1 },
                    u = 0;
                  function c(e) {
                    a.has(e) && (l.schedule(e), t()), u++, e(s);
                  }
                  const l = {
                    schedule: (t, e = !1, i = !1) => {
                      const s = i && o ? n : r;
                      return e && a.add(t), s.has(t) || s.add(t), t;
                    },
                    cancel: (t) => {
                      r.delete(t), a.delete(t);
                    },
                    process: (t) => {
                      (s = t),
                        o
                          ? (i = !0)
                          : ((o = !0),
                            ([n, r] = [r, n]),
                            n.forEach(c),
                            e && B.value && B.value.frameloop[e].push(u),
                            (u = 0),
                            n.clear(),
                            (o = !1),
                            i && ((i = !1), l.process(t)));
                    },
                  };
                  return l;
                })(a, e ? n : void 0)),
                t
              ),
              {},
            ),
            {
              setup: u,
              read: c,
              resolveKeyframes: l,
              preUpdate: f,
              update: h,
              preRender: p,
              render: d,
              postRender: m,
            } = s,
            y = () => {
              const a = i.useManualTiming ? o.timestamp : performance.now();
              (n = !1),
                i.useManualTiming ||
                  (o.delta = r
                    ? 1e3 / 60
                    : Math.max(Math.min(a - o.timestamp, 40), 1)),
                (o.timestamp = a),
                (o.isProcessing = !0),
                u.process(o),
                c.process(o),
                l.process(o),
                f.process(o),
                h.process(o),
                p.process(o),
                d.process(o),
                m.process(o),
                (o.isProcessing = !1),
                n && e && ((r = !1), t(y));
            };
          return {
            schedule: N.reduce((e, i) => {
              const a = s[i];
              return (
                (e[i] = (e, i = !1, s = !1) => (
                  n || ((n = !0), (r = !0), o.isProcessing || t(y)),
                  a.schedule(e, i, s)
                )),
                e
              );
            }, {}),
            cancel: (t) => {
              for (let e = 0; e < N.length; e++) s[N[e]].cancel(t);
            },
            state: o,
            steps: s,
          };
        }
        const {
          schedule: G,
          cancel: W,
          state: H,
          steps: $,
        } = D(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : c,
          !0,
        );
        let q;
        function K() {
          q = void 0;
        }
        const z = {
            now: () => (
              void 0 === q &&
                z.set(
                  H.isProcessing || i.useManualTiming
                    ? H.timestamp
                    : performance.now(),
                ),
              q
            ),
            set: (t) => {
              (q = t), queueMicrotask(K);
            },
          },
          U = { layout: 0, mainThread: 0, waapi: 0 },
          Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
          X = Y("--"),
          Z = Y("var(--"),
          J = (t) => !!Z(t) && Q.test(t.split("/*")[0].trim()),
          Q =
            /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
          tt = {
            test: (t) => "number" == typeof t,
            parse: parseFloat,
            transform: (t) => t,
          },
          et = { ...tt, transform: (t) => o(0, 1, t) },
          nt = { ...tt, default: 1 },
          rt = (t) => Math.round(1e5 * t) / 1e5,
          ot = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
          it =
            /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
          at = (t, e) => (n) =>
            Boolean(
              ("string" == typeof n && it.test(n) && n.startsWith(t)) ||
                (e &&
                  !(function (t) {
                    return null == t;
                  })(n) &&
                  Object.prototype.hasOwnProperty.call(n, e)),
            ),
          st = (t, e, n) => (r) => {
            if ("string" != typeof r) return r;
            const [o, i, a, s] = r.match(ot);
            return {
              [t]: parseFloat(o),
              [e]: parseFloat(i),
              [n]: parseFloat(a),
              alpha: void 0 !== s ? parseFloat(s) : 1,
            };
          },
          ut = {
            ...tt,
            transform: (t) => Math.round(((t) => o(0, 255, t))(t)),
          },
          ct = {
            test: at("rgb", "red"),
            parse: st("red", "green", "blue"),
            transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
              "rgba(" +
              ut.transform(t) +
              ", " +
              ut.transform(e) +
              ", " +
              ut.transform(n) +
              ", " +
              rt(et.transform(r)) +
              ")",
          },
          lt = {
            test: at("#"),
            parse: function (t) {
              let e = "",
                n = "",
                r = "",
                o = "";
              return (
                t.length > 5
                  ? ((e = t.substring(1, 3)),
                    (n = t.substring(3, 5)),
                    (r = t.substring(5, 7)),
                    (o = t.substring(7, 9)))
                  : ((e = t.substring(1, 2)),
                    (n = t.substring(2, 3)),
                    (r = t.substring(3, 4)),
                    (o = t.substring(4, 5)),
                    (e += e),
                    (n += n),
                    (r += r),
                    (o += o)),
                {
                  red: parseInt(e, 16),
                  green: parseInt(n, 16),
                  blue: parseInt(r, 16),
                  alpha: o ? parseInt(o, 16) / 255 : 1,
                }
              );
            },
            transform: ct.transform,
          },
          ft = (t) => ({
            test: (e) =>
              "string" == typeof e &&
              e.endsWith(t) &&
              1 === e.split(" ").length,
            parse: parseFloat,
            transform: (e) => `${e}${t}`,
          }),
          ht = ft("deg"),
          pt = ft("%"),
          dt = ft("px"),
          mt = ft("vh"),
          yt = ft("vw"),
          vt = (() => ({
            ...pt,
            parse: (t) => pt.parse(t) / 100,
            transform: (t) => pt.transform(100 * t),
          }))(),
          gt = {
            test: at("hsl", "hue"),
            parse: st("hue", "saturation", "lightness"),
            transform: ({
              hue: t,
              saturation: e,
              lightness: n,
              alpha: r = 1,
            }) =>
              "hsla(" +
              Math.round(t) +
              ", " +
              pt.transform(rt(e)) +
              ", " +
              pt.transform(rt(n)) +
              ", " +
              rt(et.transform(r)) +
              ")",
          },
          bt = {
            test: (t) => ct.test(t) || lt.test(t) || gt.test(t),
            parse: (t) =>
              ct.test(t) ? ct.parse(t) : gt.test(t) ? gt.parse(t) : lt.parse(t),
            transform: (t) =>
              "string" == typeof t
                ? t
                : t.hasOwnProperty("red")
                  ? ct.transform(t)
                  : gt.transform(t),
          },
          wt =
            /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
          xt = "number",
          St = "color",
          Et =
            /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function Tt(t) {
          const e = t.toString(),
            n = [],
            r = { color: [], number: [], var: [] },
            o = [];
          let i = 0;
          const a = e
            .replace(
              Et,
              (t) => (
                bt.test(t)
                  ? (r.color.push(i), o.push(St), n.push(bt.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(i), o.push("var"), n.push(t))
                    : (r.number.push(i), o.push(xt), n.push(parseFloat(t))),
                ++i,
                "${}"
              ),
            )
            .split("${}");
          return { values: n, split: a, indexes: r, types: o };
        }
        function kt(t) {
          return Tt(t).values;
        }
        function _t(t) {
          const { split: e, types: n } = Tt(t),
            r = e.length;
          return (t) => {
            let o = "";
            for (let i = 0; i < r; i++)
              if (((o += e[i]), void 0 !== t[i])) {
                const e = n[i];
                o += e === xt ? rt(t[i]) : e === St ? bt.transform(t[i]) : t[i];
              }
            return o;
          };
        }
        const Ot = (t) => ("number" == typeof t ? 0 : t),
          jt = {
            test: function (t) {
              return (
                isNaN(t) &&
                "string" == typeof t &&
                (t.match(ot)?.length || 0) + (t.match(wt)?.length || 0) > 0
              );
            },
            parse: kt,
            createTransformer: _t,
            getAnimatableNone: function (t) {
              const e = kt(t);
              return _t(t)(e.map(Ot));
            },
          };
        function Pt(t, e, n) {
          return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6
              ? t + 6 * (e - t) * n
              : n < 0.5
                ? e
                : n < 2 / 3
                  ? t + (e - t) * (2 / 3 - n) * 6
                  : t
          );
        }
        function Mt({ hue: t, saturation: e, lightness: n, alpha: r }) {
          (t /= 360), (n /= 100);
          let o = 0,
            i = 0,
            a = 0;
          if ((e /= 100)) {
            const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
              s = 2 * n - r;
            (o = Pt(s, r, t + 1 / 3)),
              (i = Pt(s, r, t)),
              (a = Pt(s, r, t - 1 / 3));
          } else o = i = a = n;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * i),
            blue: Math.round(255 * a),
            alpha: r,
          };
        }
        function At(t, e) {
          return (n) => (n > 0 ? e : t);
        }
        const Ct = (t, e, n) => t + (e - t) * n,
          Rt = (t, e, n) => {
            const r = t * t,
              o = n * (e * e - r) + r;
            return o < 0 ? 0 : Math.sqrt(o);
          },
          Vt = [lt, ct, gt];
        function Lt(t) {
          const n = ((r = t), Vt.find((t) => t.test(r)));
          var r;
          if (
            (e.warning(
              Boolean(n),
              `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            ),
            !Boolean(n))
          )
            return !1;
          let o = n.parse(t);
          return n === gt && (o = Mt(o)), o;
        }
        const Ft = (t, e) => {
            const n = Lt(t),
              r = Lt(e);
            if (!n || !r) return At(t, e);
            const o = { ...n };
            return (t) => (
              (o.red = Rt(n.red, r.red, t)),
              (o.green = Rt(n.green, r.green, t)),
              (o.blue = Rt(n.blue, r.blue, t)),
              (o.alpha = Ct(n.alpha, r.alpha, t)),
              ct.transform(o)
            );
          },
          It = new Set(["none", "hidden"]);
        function Nt(t, e) {
          return It.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
        }
        function Bt(t, e) {
          return (n) => Ct(t, e, n);
        }
        function Dt(t) {
          return "number" == typeof t
            ? Bt
            : "string" == typeof t
              ? J(t)
                ? At
                : bt.test(t)
                  ? Ft
                  : Ht
              : Array.isArray(t)
                ? Gt
                : "object" == typeof t
                  ? bt.test(t)
                    ? Ft
                    : Wt
                  : At;
        }
        function Gt(t, e) {
          const n = [...t],
            r = n.length,
            o = t.map((t, n) => Dt(t)(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        }
        function Wt(t, e) {
          const n = { ...t, ...e },
            r = {};
          for (const o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = Dt(t[o])(t[o], e[o]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        }
        const Ht = (t, n) => {
          const r = jt.createTransformer(n),
            o = Tt(t),
            i = Tt(n);
          return o.indexes.var.length === i.indexes.var.length &&
            o.indexes.color.length === i.indexes.color.length &&
            o.indexes.number.length >= i.indexes.number.length
            ? (It.has(t) && !i.values.length) || (It.has(n) && !o.values.length)
              ? Nt(t, n)
              : f(
                  Gt(
                    (function (t, e) {
                      const n = [],
                        r = { color: 0, var: 0, number: 0 };
                      for (let o = 0; o < e.values.length; o++) {
                        const i = e.types[o],
                          a = t.indexes[i][r[i]],
                          s = t.values[a] ?? 0;
                        (n[o] = s), r[i]++;
                      }
                      return n;
                    })(o, i),
                    i.values,
                  ),
                  r,
                )
            : (e.warning(
                !0,
                `Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              At(t, n));
        };
        function $t(t, e, n) {
          return "number" == typeof t &&
            "number" == typeof e &&
            "number" == typeof n
            ? Ct(t, e, n)
            : Dt(t)(t, e);
        }
        const qt = (t) => {
            const e = ({ timestamp: e }) => t(e);
            return {
              start: (t = !0) => G.update(e, t),
              stop: () => W(e),
              now: () => (H.isProcessing ? H.timestamp : z.now()),
            };
          },
          Kt = (t, e, n = 10) => {
            let r = "";
            const o = Math.max(Math.round(e / n), 2);
            for (let e = 0; e < o; e++) r += t(e / (o - 1)) + ", ";
            return `linear(${r.substring(0, r.length - 2)})`;
          },
          zt = 2e4;
        function Ut(t) {
          let e = 0,
            n = t.next(e);
          for (; !n.done && e < zt; ) (e += 50), (n = t.next(e));
          return e >= zt ? 1 / 0 : e;
        }
        function Yt(t, e = 100, n) {
          const r = n({ ...t, keyframes: [0, e] }),
            o = Math.min(Ut(r), zt);
          return {
            type: "keyframes",
            ease: (t) => r.next(o * t).value / e,
            duration: m(o),
          };
        }
        function Xt(t, e, n) {
          const r = Math.max(e - 5, 0);
          return y(n - t(r), e - r);
        }
        const Zt = 0.01,
          Jt = 2,
          Qt = 0.005,
          te = 0.5;
        const ee = 12;
        function ne(t, e) {
          return t * Math.sqrt(1 - e * e);
        }
        const re = ["duration", "bounce"],
          oe = ["stiffness", "damping", "mass"];
        function ie(t, e) {
          return e.some((e) => void 0 !== t[e]);
        }
        function ae(t = 0.3, n = 0.3) {
          const r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: n }
              : t;
          let { restSpeed: i, restDelta: a } = r;
          const s = r.keyframes[0],
            u = r.keyframes[r.keyframes.length - 1],
            c = { done: !1, value: s },
            {
              stiffness: l,
              damping: f,
              mass: h,
              duration: p,
              velocity: y,
              isResolvedFromDuration: v,
            } = (function (t) {
              let n = {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
                ...t,
              };
              if (!ie(t, oe) && ie(t, re))
                if (t.visualDuration) {
                  const e = t.visualDuration,
                    r = (2 * Math.PI) / (1.2 * e),
                    i = r * r,
                    a = 2 * o(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                  n = { ...n, mass: 1, stiffness: i, damping: a };
                } else {
                  const r = (function ({
                    duration: t = 800,
                    bounce: n = 0.3,
                    velocity: r = 0,
                    mass: i = 1,
                  }) {
                    let a, s;
                    e.warning(
                      t <= d(10),
                      "Spring duration must be 10 seconds or less",
                    );
                    let u = 1 - n;
                    (u = o(0.05, 1, u)),
                      (t = o(0.01, 10, m(t))),
                      u < 1
                        ? ((a = (e) => {
                            const n = e * u,
                              o = n * t;
                            return 0.001 - ((n - r) / ne(e, u)) * Math.exp(-o);
                          }),
                          (s = (e) => {
                            const n = e * u * t,
                              o = n * r + r,
                              i = Math.pow(u, 2) * Math.pow(e, 2) * t,
                              s = Math.exp(-n),
                              c = ne(Math.pow(e, 2), u);
                            return (
                              ((0.001 - a(e) > 0 ? -1 : 1) * ((o - i) * s)) / c
                            );
                          }))
                        : ((a = (e) =>
                            Math.exp(-e * t) * ((e - r) * t + 1) - 0.001),
                          (s = (e) => Math.exp(-e * t) * (t * t * (r - e))));
                    const c = (function (t, e, n) {
                      let r = n;
                      for (let n = 1; n < ee; n++) r -= t(r) / e(r);
                      return r;
                    })(a, s, 5 / t);
                    if (((t = d(t)), isNaN(c)))
                      return { stiffness: 100, damping: 10, duration: t };
                    {
                      const e = Math.pow(c, 2) * i;
                      return {
                        stiffness: e,
                        damping: 2 * u * Math.sqrt(i * e),
                        duration: t,
                      };
                    }
                  })(t);
                  (n = { ...n, ...r, mass: 1 }),
                    (n.isResolvedFromDuration = !0);
                }
              return n;
            })({ ...r, velocity: -m(r.velocity || 0) }),
            g = y || 0,
            b = f / (2 * Math.sqrt(l * h)),
            w = u - s,
            x = m(Math.sqrt(l / h)),
            S = Math.abs(w) < 5;
          let E;
          if ((i || (i = S ? Zt : Jt), a || (a = S ? Qt : te), b < 1)) {
            const t = ne(x, b);
            E = (e) => {
              const n = Math.exp(-b * x * e);
              return (
                u -
                n *
                  (((g + b * x * w) / t) * Math.sin(t * e) +
                    w * Math.cos(t * e))
              );
            };
          } else if (1 === b)
            E = (t) => u - Math.exp(-x * t) * (w + (g + x * w) * t);
          else {
            const t = x * Math.sqrt(b * b - 1);
            E = (e) => {
              const n = Math.exp(-b * x * e),
                r = Math.min(t * e, 300);
              return (
                u -
                (n * ((g + b * x * w) * Math.sinh(r) + t * w * Math.cosh(r))) /
                  t
              );
            };
          }
          const T = {
            calculatedDuration: (v && p) || null,
            next: (t) => {
              const e = E(t);
              if (v) c.done = t >= p;
              else {
                let n = 0 === t ? g : 0;
                b < 1 && (n = 0 === t ? d(g) : Xt(E, t, e));
                const r = Math.abs(n) <= i,
                  o = Math.abs(u - e) <= a;
                c.done = r && o;
              }
              return (c.value = c.done ? u : e), c;
            },
            toString: () => {
              const t = Math.min(Ut(T), zt),
                e = Kt((e) => T.next(t * e).value, t, 30);
              return t + "ms " + e;
            },
            toTransition: () => {},
          };
          return T;
        }
        function se({
          keyframes: t,
          velocity: e = 0,
          power: n = 0.8,
          timeConstant: r = 325,
          bounceDamping: o = 10,
          bounceStiffness: i = 500,
          modifyTarget: a,
          min: s,
          max: u,
          restDelta: c = 0.5,
          restSpeed: l,
        }) {
          const f = t[0],
            h = { done: !1, value: f },
            p = (t) =>
              void 0 === s
                ? u
                : void 0 === u || Math.abs(s - t) < Math.abs(u - t)
                  ? s
                  : u;
          let d = n * e;
          const m = f + d,
            y = void 0 === a ? m : a(m);
          y !== m && (d = y - f);
          const v = (t) => -d * Math.exp(-t / r),
            g = (t) => y + v(t),
            b = (t) => {
              const e = v(t),
                n = g(t);
              (h.done = Math.abs(e) <= c), (h.value = h.done ? y : n);
            };
          let w, x;
          const S = (t) => {
            var e;
            (e = h.value),
              ((void 0 !== s && e < s) || (void 0 !== u && e > u)) &&
                ((w = t),
                (x = ae({
                  keyframes: [h.value, p(h.value)],
                  velocity: Xt(g, t, h.value),
                  damping: o,
                  stiffness: i,
                  restDelta: c,
                  restSpeed: l,
                })));
          };
          return (
            S(0),
            {
              calculatedDuration: null,
              next: (t) => {
                let e = !1;
                return (
                  x || void 0 !== w || ((e = !0), b(t), S(t)),
                  void 0 !== w && t >= w ? x.next(t - w) : (!e && b(t), h)
                );
              },
            }
          );
        }
        function ue(t, n, { clamp: r = !0, ease: a, mixer: s } = {}) {
          const u = t.length;
          if (
            (e.invariant(
              u === n.length,
              "Both input and output ranges must be the same length",
            ),
            1 === u)
          )
            return () => n[0];
          if (2 === u && n[0] === n[1]) return () => n[1];
          const l = t[0] === t[1];
          t[0] > t[u - 1] && ((t = [...t].reverse()), (n = [...n].reverse()));
          const p = (function (t, e, n) {
              const r = [],
                o = n || i.mix || $t,
                a = t.length - 1;
              for (let n = 0; n < a; n++) {
                let i = o(t[n], t[n + 1]);
                if (e) {
                  const t = Array.isArray(e) ? e[n] || c : e;
                  i = f(t, i);
                }
                r.push(i);
              }
              return r;
            })(n, a, s),
            d = p.length,
            m = (e) => {
              if (l && e < t[0]) return n[0];
              let r = 0;
              if (d > 1) for (; r < t.length - 2 && !(e < t[r + 1]); r++);
              const o = h(t[r], t[r + 1], e);
              return p[r](o);
            };
          return r ? (e) => m(o(t[0], t[u - 1], e)) : m;
        }
        function ce(t, e) {
          const n = t[t.length - 1];
          for (let r = 1; r <= e; r++) {
            const o = h(0, e, r);
            t.push(Ct(n, 1, o));
          }
        }
        function le(t) {
          const e = [0];
          return ce(e, t.length - 1), e;
        }
        function fe(t, e) {
          return t.map((t) => t * e);
        }
        function he(t, e) {
          return t.map(() => e || C).splice(0, t.length - 1);
        }
        function pe({
          duration: t = 300,
          keyframes: e,
          times: n,
          ease: r = "easeInOut",
        }) {
          const o = R(r) ? r.map(I) : I(r),
            i = { done: !1, value: e[0] },
            a = ue(fe(n && n.length === e.length ? n : le(e), t), e, {
              ease: Array.isArray(o) ? o : he(e, o),
            });
          return {
            calculatedDuration: t,
            next: (e) => ((i.value = a(e)), (i.done = e >= t), i),
          };
        }
        ae.applyToOptions = (t) => {
          const e = Yt(t, 100, ae);
          return (
            (t.ease = e.ease),
            (t.duration = d(e.duration)),
            (t.type = "keyframes"),
            t
          );
        };
        const de = (t) => null !== t;
        function me(t, { repeat: e, repeatType: n = "loop" }, r, o = 1) {
          const i = t.filter(de),
            a = o < 0 || (e && "loop" !== n && e % 2 == 1) ? 0 : i.length - 1;
          return a && void 0 !== r ? r : i[a];
        }
        const ye = {
          decay: se,
          inertia: se,
          tween: pe,
          keyframes: pe,
          spring: ae,
        };
        function ve(t) {
          "string" == typeof t.type && (t.type = ye[t.type]);
        }
        class ge {
          constructor() {
            this.updateFinished();
          }
          get finished() {
            return this._finished;
          }
          updateFinished() {
            this._finished = new Promise((t) => {
              this.resolve = t;
            });
          }
          notifyFinished() {
            this.resolve();
          }
          then(t, e) {
            return this.finished.then(t, e);
          }
        }
        const be = (t) => t / 100;
        class we extends ge {
          constructor(t) {
            super(),
              (this.state = "idle"),
              (this.startTime = null),
              (this.isStopped = !1),
              (this.currentTime = 0),
              (this.holdTime = null),
              (this.playbackSpeed = 1),
              (this.stop = (t = !0) => {
                if (t) {
                  const { motionValue: t } = this.options;
                  t && t.updatedAt !== z.now() && this.tick(z.now());
                }
                (this.isStopped = !0),
                  "idle" !== this.state &&
                    (this.teardown(), this.options.onStop?.());
              }),
              U.mainThread++,
              (this.options = t),
              this.initAnimation(),
              this.play(),
              !1 === t.autoplay && this.pause();
          }
          initAnimation() {
            const { options: t } = this;
            ve(t);
            const {
              type: e = pe,
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: i = 0,
            } = t;
            let { keyframes: a } = t;
            const s = e || pe;
            s !== pe &&
              "number" != typeof a[0] &&
              ((this.mixKeyframes = f(be, $t(a[0], a[1]))), (a = [0, 100]));
            const u = s({ ...t, keyframes: a });
            "mirror" === o &&
              (this.mirroredGenerator = s({
                ...t,
                keyframes: [...a].reverse(),
                velocity: -i,
              })),
              null === u.calculatedDuration && (u.calculatedDuration = Ut(u));
            const { calculatedDuration: c } = u;
            (this.calculatedDuration = c),
              (this.resolvedDuration = c + r),
              (this.totalDuration = this.resolvedDuration * (n + 1) - r),
              (this.generator = u);
          }
          updateTime(t) {
            const e = Math.round(t - this.startTime) * this.playbackSpeed;
            null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime = e);
          }
          tick(t, e = !1) {
            const {
              generator: n,
              totalDuration: r,
              mixKeyframes: i,
              mirroredGenerator: a,
              resolvedDuration: s,
              calculatedDuration: u,
            } = this;
            if (null === this.startTime) return n.next(0);
            const {
              delay: c = 0,
              keyframes: l,
              repeat: f,
              repeatType: h,
              repeatDelay: p,
              type: d,
              onUpdate: m,
              finalKeyframe: y,
            } = this.options;
            this.speed > 0
              ? (this.startTime = Math.min(this.startTime, t))
              : this.speed < 0 &&
                (this.startTime = Math.min(t - r / this.speed, this.startTime)),
              e ? (this.currentTime = t) : this.updateTime(t);
            const v = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
              g = this.playbackSpeed >= 0 ? v < 0 : v > r;
            (this.currentTime = Math.max(v, 0)),
              "finished" === this.state &&
                null === this.holdTime &&
                (this.currentTime = r);
            let b = this.currentTime,
              w = n;
            if (f) {
              const t = Math.min(this.currentTime, r) / s;
              let e = Math.floor(t),
                n = t % 1;
              !n && t >= 1 && (n = 1),
                1 === n && e--,
                (e = Math.min(e, f + 1)),
                Boolean(e % 2) &&
                  ("reverse" === h
                    ? ((n = 1 - n), p && (n -= p / s))
                    : "mirror" === h && (w = a)),
                (b = o(0, 1, n) * s);
            }
            const x = g ? { done: !1, value: l[0] } : w.next(b);
            i && (x.value = i(x.value));
            let { done: S } = x;
            g ||
              null === u ||
              (S =
                this.playbackSpeed >= 0
                  ? this.currentTime >= r
                  : this.currentTime <= 0);
            const E =
              null === this.holdTime &&
              ("finished" === this.state || ("running" === this.state && S));
            return (
              E && d !== se && (x.value = me(l, this.options, y, this.speed)),
              m && m(x.value),
              E && this.finish(),
              x
            );
          }
          then(t, e) {
            return this.finished.then(t, e);
          }
          get duration() {
            return m(this.calculatedDuration);
          }
          get time() {
            return m(this.currentTime);
          }
          set time(t) {
            (t = d(t)),
              (this.currentTime = t),
              null === this.startTime ||
              null !== this.holdTime ||
              0 === this.playbackSpeed
                ? (this.holdTime = t)
                : this.driver &&
                  (this.startTime = this.driver.now() - t / this.playbackSpeed),
              this.driver?.start(!1);
          }
          get speed() {
            return this.playbackSpeed;
          }
          set speed(t) {
            this.updateTime(z.now());
            const e = this.playbackSpeed !== t;
            (this.playbackSpeed = t), e && (this.time = m(this.currentTime));
          }
          play() {
            if (this.isStopped) return;
            const { driver: t = qt, startTime: e } = this.options;
            this.driver || (this.driver = t((t) => this.tick(t))),
              this.options.onPlay?.();
            const n = this.driver.now();
            "finished" === this.state
              ? (this.updateFinished(), (this.startTime = n))
              : null !== this.holdTime
                ? (this.startTime = n - this.holdTime)
                : this.startTime || (this.startTime = e ?? n),
              "finished" === this.state &&
                this.speed < 0 &&
                (this.startTime += this.calculatedDuration),
              (this.holdTime = null),
              (this.state = "running"),
              this.driver.start();
          }
          pause() {
            (this.state = "paused"),
              this.updateTime(z.now()),
              (this.holdTime = this.currentTime);
          }
          complete() {
            "running" !== this.state && this.play(),
              (this.state = "finished"),
              (this.holdTime = null);
          }
          finish() {
            this.notifyFinished(),
              this.teardown(),
              (this.state = "finished"),
              this.options.onComplete?.();
          }
          cancel() {
            (this.holdTime = null),
              (this.startTime = 0),
              this.tick(0),
              this.teardown(),
              this.options.onCancel?.();
          }
          teardown() {
            (this.state = "idle"),
              this.stopDriver(),
              (this.startTime = this.holdTime = null),
              U.mainThread--;
          }
          stopDriver() {
            this.driver && (this.driver.stop(), (this.driver = void 0));
          }
          sample(t) {
            return (this.startTime = 0), this.tick(t, !0);
          }
          attachTimeline(t) {
            return (
              this.options.allowFlatten &&
                ((this.options.type = "keyframes"),
                (this.options.ease = "linear"),
                this.initAnimation()),
              this.driver?.stop(),
              t.observe(this)
            );
          }
        }
        function xe(t) {
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        const Se = (t) => (180 * t) / Math.PI,
          Ee = (t) => {
            const e = Se(Math.atan2(t[1], t[0]));
            return ke(e);
          },
          Te = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
            rotate: Ee,
            rotateZ: Ee,
            skewX: (t) => Se(Math.atan(t[1])),
            skewY: (t) => Se(Math.atan(t[2])),
            skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
          },
          ke = (t) => ((t %= 360) < 0 && (t += 360), t),
          _e = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
          Oe = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
          je = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: _e,
            scaleY: Oe,
            scale: (t) => (_e(t) + Oe(t)) / 2,
            rotateX: (t) => ke(Se(Math.atan2(t[6], t[5]))),
            rotateY: (t) => ke(Se(Math.atan2(-t[2], t[0]))),
            rotateZ: Ee,
            rotate: Ee,
            skewX: (t) => Se(Math.atan(t[4])),
            skewY: (t) => Se(Math.atan(t[1])),
            skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
          };
        function Pe(t) {
          return t.includes("scale") ? 1 : 0;
        }
        function Me(t, e) {
          if (!t || "none" === t) return Pe(e);
          const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
          let r, o;
          if (n) (r = je), (o = n);
          else {
            const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            (r = Te), (o = e);
          }
          if (!o) return Pe(e);
          const i = r[e],
            a = o[1].split(",").map(Ce);
          return "function" == typeof i ? i(a) : a[i];
        }
        const Ae = (t, e) => {
          const { transform: n = "none" } = getComputedStyle(t);
          return Me(n, e);
        };
        function Ce(t) {
          return parseFloat(t.trim());
        }
        const Re = [
            "transformPerspective",
            "x",
            "y",
            "z",
            "translateX",
            "translateY",
            "translateZ",
            "scale",
            "scaleX",
            "scaleY",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "skew",
            "skewX",
            "skewY",
          ],
          Ve = (() => new Set(Re))(),
          Le = (t) => t === tt || t === dt,
          Fe = new Set(["x", "y", "z"]),
          Ie = Re.filter((t) => !Fe.has(t)),
          Ne = {
            width: (
              { x: t },
              { paddingLeft: e = "0", paddingRight: n = "0" },
            ) => t.max - t.min - parseFloat(e) - parseFloat(n),
            height: (
              { y: t },
              { paddingTop: e = "0", paddingBottom: n = "0" },
            ) => t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t, { top: e }) => parseFloat(e),
            left: (t, { left: e }) => parseFloat(e),
            bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
            right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
            x: (t, { transform: e }) => Me(e, "x"),
            y: (t, { transform: e }) => Me(e, "y"),
          };
        (Ne.translateX = Ne.x), (Ne.translateY = Ne.y);
        const Be = new Set();
        let De = !1,
          Ge = !1,
          We = !1;
        function He() {
          if (Ge) {
            const t = Array.from(Be).filter((t) => t.needsMeasurement),
              e = new Set(t.map((t) => t.element)),
              n = new Map();
            e.forEach((t) => {
              const e = (function (t) {
                const e = [];
                return (
                  Ie.forEach((n) => {
                    const r = t.getValue(n);
                    void 0 !== r &&
                      (e.push([n, r.get()]),
                      r.set(n.startsWith("scale") ? 1 : 0));
                  }),
                  e
                );
              })(t);
              e.length && (n.set(t, e), t.render());
            }),
              t.forEach((t) => t.measureInitialState()),
              e.forEach((t) => {
                t.render();
                const e = n.get(t);
                e &&
                  e.forEach(([e, n]) => {
                    t.getValue(e)?.set(n);
                  });
              }),
              t.forEach((t) => t.measureEndState()),
              t.forEach((t) => {
                void 0 !== t.suspendedScrollY &&
                  window.scrollTo(0, t.suspendedScrollY);
              });
          }
          (Ge = !1), (De = !1), Be.forEach((t) => t.complete(We)), Be.clear();
        }
        function $e() {
          Be.forEach((t) => {
            t.readKeyframes(), t.needsMeasurement && (Ge = !0);
          });
        }
        function qe() {
          (We = !0), $e(), He(), (We = !1);
        }
        class Ke {
          constructor(t, e, n, r, o, i = !1) {
            (this.state = "pending"),
              (this.isAsync = !1),
              (this.needsMeasurement = !1),
              (this.unresolvedKeyframes = [...t]),
              (this.onComplete = e),
              (this.name = n),
              (this.motionValue = r),
              (this.element = o),
              (this.isAsync = i);
          }
          scheduleResolve() {
            (this.state = "scheduled"),
              this.isAsync
                ? (Be.add(this),
                  De || ((De = !0), G.read($e), G.resolveKeyframes(He)))
                : (this.readKeyframes(), this.complete());
          }
          readKeyframes() {
            const {
              unresolvedKeyframes: t,
              name: e,
              element: n,
              motionValue: r,
            } = this;
            if (null === t[0]) {
              const o = r?.get(),
                i = t[t.length - 1];
              if (void 0 !== o) t[0] = o;
              else if (n && e) {
                const r = n.readValue(e, i);
                null != r && (t[0] = r);
              }
              void 0 === t[0] && (t[0] = i), r && void 0 === o && r.set(t[0]);
            }
            xe(t);
          }
          setFinalKeyframe() {}
          measureInitialState() {}
          renderEndStyles() {}
          measureEndState() {}
          complete(t = !1) {
            (this.state = "complete"),
              this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
              Be.delete(this);
          }
          cancel() {
            "scheduled" === this.state &&
              (Be.delete(this), (this.state = "pending"));
          }
          resume() {
            "pending" === this.state && this.scheduleResolve();
          }
        }
        const ze = (t) => t.startsWith("--");
        function Ue(t, e, n) {
          ze(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
        }
        const Ye = u(() => void 0 !== window.ScrollTimeline),
          Xe = {};
        function Ze(t, e) {
          const n = u(t);
          return () => Xe[e] ?? n();
        }
        const Je = Ze(() => {
            try {
              document
                .createElement("div")
                .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          }, "linearEasing"),
          Qe = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
          tn = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: Qe([0, 0.65, 0.55, 1]),
            circOut: Qe([0.55, 0, 1, 0.45]),
            backIn: Qe([0.31, 0.01, 0.66, -0.59]),
            backOut: Qe([0.33, 1.53, 0.69, 0.99]),
          };
        function en(t, e) {
          return t
            ? "function" == typeof t
              ? Je()
                ? Kt(t, e)
                : "ease-out"
              : L(t)
                ? Qe(t)
                : Array.isArray(t)
                  ? t.map((t) => en(t, e) || tn.easeOut)
                  : tn[t]
            : void 0;
        }
        function nn(
          t,
          e,
          n,
          {
            delay: r = 0,
            duration: o = 300,
            repeat: i = 0,
            repeatType: a = "loop",
            ease: s = "easeOut",
            times: u,
          } = {},
          c = void 0,
        ) {
          const l = { [e]: n };
          u && (l.offset = u);
          const f = en(s, o);
          Array.isArray(f) && (l.easing = f), B.value && U.waapi++;
          const h = {
            delay: r,
            duration: o,
            easing: Array.isArray(f) ? "linear" : f,
            fill: "both",
            iterations: i + 1,
            direction: "reverse" === a ? "alternate" : "normal",
          };
          c && (h.pseudoElement = c);
          const p = t.animate(l, h);
          return (
            B.value &&
              p.finished.finally(() => {
                U.waapi--;
              }),
            p
          );
        }
        function rn(t) {
          return "function" == typeof t && "applyToOptions" in t;
        }
        function on({ type: t, ...e }) {
          return rn(t) && Je()
            ? t.applyToOptions(e)
            : (e.duration ?? (e.duration = 300),
              e.ease ?? (e.ease = "easeOut"),
              e);
        }
        class an extends ge {
          constructor(t) {
            if (
              (super(), (this.finishedTime = null), (this.isStopped = !1), !t)
            )
              return;
            const {
              element: n,
              name: r,
              keyframes: o,
              pseudoElement: i,
              allowFlatten: a = !1,
              finalKeyframe: s,
              onComplete: u,
            } = t;
            (this.isPseudoElement = Boolean(i)),
              (this.allowFlatten = a),
              (this.options = t),
              e.invariant(
                "string" != typeof t.type,
                'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?',
              );
            const c = on(t);
            (this.animation = nn(n, r, o, c, i)),
              !1 === c.autoplay && this.animation.pause(),
              (this.animation.onfinish = () => {
                if (((this.finishedTime = this.time), !i)) {
                  const t = me(o, this.options, s, this.speed);
                  this.updateMotionValue
                    ? this.updateMotionValue(t)
                    : Ue(n, r, t),
                    this.animation.cancel();
                }
                u?.(), this.notifyFinished();
              });
          }
          play() {
            this.isStopped ||
              (this.animation.play(),
              "finished" === this.state && this.updateFinished());
          }
          pause() {
            this.animation.pause();
          }
          complete() {
            this.animation.finish?.();
          }
          cancel() {
            try {
              this.animation.cancel();
            } catch (t) {}
          }
          stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            const { state: t } = this;
            "idle" !== t &&
              "finished" !== t &&
              (this.updateMotionValue
                ? this.updateMotionValue()
                : this.commitStyles(),
              this.isPseudoElement || this.cancel());
          }
          commitStyles() {
            this.isPseudoElement || this.animation.commitStyles?.();
          }
          get duration() {
            const t =
              this.animation.effect?.getComputedTiming?.().duration || 0;
            return m(Number(t));
          }
          get time() {
            return m(Number(this.animation.currentTime) || 0);
          }
          set time(t) {
            (this.finishedTime = null), (this.animation.currentTime = d(t));
          }
          get speed() {
            return this.animation.playbackRate;
          }
          set speed(t) {
            t < 0 && (this.finishedTime = null),
              (this.animation.playbackRate = t);
          }
          get state() {
            return null !== this.finishedTime
              ? "finished"
              : this.animation.playState;
          }
          get startTime() {
            return Number(this.animation.startTime);
          }
          set startTime(t) {
            this.animation.startTime = t;
          }
          attachTimeline({ timeline: t, observe: e }) {
            return (
              this.allowFlatten &&
                this.animation.effect?.updateTiming({ easing: "linear" }),
              (this.animation.onfinish = null),
              t && Ye() ? ((this.animation.timeline = t), c) : e(this)
            );
          }
        }
        const sn = { anticipate: _, backInOut: k, circInOut: P };
        class un extends an {
          constructor(t) {
            var e;
            "string" == typeof (e = t).ease &&
              e.ease in sn &&
              (e.ease = sn[e.ease]),
              ve(t),
              super(t),
              t.startTime && (this.startTime = t.startTime),
              (this.options = t);
          }
          updateMotionValue(t) {
            const {
              motionValue: e,
              onUpdate: n,
              onComplete: r,
              element: o,
              ...i
            } = this.options;
            if (!e) return;
            if (void 0 !== t) return void e.set(t);
            const a = new we({ ...i, autoplay: !1 }),
              s = d(this.finishedTime ?? this.time);
            e.setWithVelocity(a.sample(s - 10).value, a.sample(s).value, 10),
              a.stop();
          }
        }
        const cn = (t, e) =>
            !(
              "zIndex" === e ||
              ("number" != typeof t &&
                !Array.isArray(t) &&
                ("string" != typeof t ||
                  (!jt.test(t) && "0" !== t) ||
                  t.startsWith("url(")))
            ),
          ln = new Set(["opacity", "clipPath", "filter", "transform"]),
          fn = u(() =>
            Object.hasOwnProperty.call(Element.prototype, "animate"),
          );
        function hn(t) {
          const {
            motionValue: e,
            name: n,
            repeatDelay: r,
            repeatType: o,
            damping: i,
            type: a,
          } = t;
          if (!(e && e.owner && e.owner.current instanceof HTMLElement))
            return !1;
          const { onUpdate: s, transformTemplate: u } = e.owner.getProps();
          return (
            fn() &&
            n &&
            ln.has(n) &&
            ("transform" !== n || !u) &&
            !s &&
            !r &&
            "mirror" !== o &&
            0 !== i &&
            "inertia" !== a
          );
        }
        class pn extends ge {
          constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: o = 0,
            repeatType: i = "loop",
            keyframes: a,
            name: s,
            motionValue: u,
            element: c,
            ...l
          }) {
            super(),
              (this.stop = () => {
                this._animation &&
                  (this._animation.stop(), this.stopTimeline?.()),
                  this.keyframeResolver?.cancel();
              }),
              (this.createdAt = z.now());
            const f = {
                autoplay: t,
                delay: e,
                type: n,
                repeat: r,
                repeatDelay: o,
                repeatType: i,
                name: s,
                motionValue: u,
                element: c,
                ...l,
              },
              h = c?.KeyframeResolver || Ke;
            (this.keyframeResolver = new h(
              a,
              (t, e, n) => this.onKeyframesResolved(t, e, f, !n),
              s,
              u,
              c,
            )),
              this.keyframeResolver?.scheduleResolve();
          }
          onKeyframesResolved(t, n, r, o) {
            this.keyframeResolver = void 0;
            const {
              name: a,
              type: s,
              velocity: u,
              delay: l,
              isHandoff: f,
              onUpdate: h,
            } = r;
            (this.resolvedAt = z.now()),
              (function (t, n, r, o) {
                const i = t[0];
                if (null === i) return !1;
                if ("display" === n || "visibility" === n) return !0;
                const a = t[t.length - 1],
                  s = cn(i, n),
                  u = cn(a, n);
                return (
                  e.warning(
                    s === u,
                    `You are trying to animate ${n} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`,
                  ),
                  !(!s || !u) &&
                    ((function (t) {
                      const e = t[0];
                      if (1 === t.length) return !0;
                      for (let n = 0; n < t.length; n++)
                        if (t[n] !== e) return !0;
                    })(t) ||
                      (("spring" === r || rn(r)) && o))
                );
              })(t, a, s, u) ||
                ((!i.instantAnimations && l) || h?.(me(t, r, n)),
                (t[0] = t[t.length - 1]),
                (r.duration = 0),
                (r.repeat = 0));
            const p = {
                startTime: o
                  ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                    ? this.resolvedAt
                    : this.createdAt
                  : void 0,
                finalKeyframe: n,
                ...r,
                keyframes: t,
              },
              d =
                !f && hn(p)
                  ? new un({ ...p, element: p.motionValue.owner.current })
                  : new we(p);
            d.finished.then(() => this.notifyFinished()).catch(c),
              this.pendingTimeline &&
                ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
                (this.pendingTimeline = void 0)),
              (this._animation = d);
          }
          get finished() {
            return this._animation ? this.animation.finished : this._finished;
          }
          then(t, e) {
            return this.finished.finally(t).then(() => {});
          }
          get animation() {
            return (
              this._animation || (this.keyframeResolver?.resume(), qe()),
              this._animation
            );
          }
          get duration() {
            return this.animation.duration;
          }
          get time() {
            return this.animation.time;
          }
          set time(t) {
            this.animation.time = t;
          }
          get speed() {
            return this.animation.speed;
          }
          get state() {
            return this.animation.state;
          }
          set speed(t) {
            this.animation.speed = t;
          }
          get startTime() {
            return this.animation.startTime;
          }
          attachTimeline(t) {
            return (
              this._animation
                ? (this.stopTimeline = this.animation.attachTimeline(t))
                : (this.pendingTimeline = t),
              () => this.stop()
            );
          }
          play() {
            this.animation.play();
          }
          pause() {
            this.animation.pause();
          }
          complete() {
            this.animation.complete();
          }
          cancel() {
            this._animation && this.animation.cancel(),
              this.keyframeResolver?.cancel();
          }
        }
        class dn {
          constructor(t) {
            (this.stop = () => this.runAll("stop")),
              (this.animations = t.filter(Boolean));
          }
          get finished() {
            return Promise.all(this.animations.map((t) => t.finished));
          }
          getAll(t) {
            return this.animations[0][t];
          }
          setAll(t, e) {
            for (let n = 0; n < this.animations.length; n++)
              this.animations[n][t] = e;
          }
          attachTimeline(t) {
            const e = this.animations.map((e) => e.attachTimeline(t));
            return () => {
              e.forEach((t, e) => {
                t && t(), this.animations[e].stop();
              });
            };
          }
          get time() {
            return this.getAll("time");
          }
          set time(t) {
            this.setAll("time", t);
          }
          get speed() {
            return this.getAll("speed");
          }
          set speed(t) {
            this.setAll("speed", t);
          }
          get state() {
            return this.getAll("state");
          }
          get startTime() {
            return this.getAll("startTime");
          }
          get duration() {
            let t = 0;
            for (let e = 0; e < this.animations.length; e++)
              t = Math.max(t, this.animations[e].duration);
            return t;
          }
          runAll(t) {
            this.animations.forEach((e) => e[t]());
          }
          play() {
            this.runAll("play");
          }
          pause() {
            this.runAll("pause");
          }
          cancel() {
            this.runAll("cancel");
          }
          complete() {
            this.runAll("complete");
          }
        }
        class mn extends dn {
          then(t, e) {
            return this.finished.finally(t).then(() => {});
          }
        }
        class yn extends an {
          constructor(t) {
            super(),
              (this.animation = t),
              (t.onfinish = () => {
                (this.finishedTime = this.time), this.notifyFinished();
              });
          }
        }
        const vn = new WeakMap(),
          gn = (t, e = "") => `${t}:${e}`;
        function bn(t) {
          const e = vn.get(t) || new Map();
          return vn.set(t, e), e;
        }
        const wn = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
        function xn(t) {
          const e = wn.exec(t);
          if (!e) return [,];
          const [, n, r, o] = e;
          return [`--${n ?? r}`, o];
        }
        function Sn(t, n, r = 1) {
          e.invariant(
            r <= 4,
            `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
          );
          const [o, i] = xn(t);
          if (!o) return;
          const s = window.getComputedStyle(n).getPropertyValue(o);
          if (s) {
            const t = s.trim();
            return a(t) ? parseFloat(t) : t;
          }
          return J(i) ? Sn(i, n, r + 1) : i;
        }
        function En(t, e) {
          return t?.[e] ?? t?.default ?? t;
        }
        const Tn = new Set([
            "width",
            "height",
            "top",
            "left",
            "right",
            "bottom",
            ...Re,
          ]),
          kn = (t) => (e) => e.test(t),
          _n = [
            tt,
            dt,
            pt,
            ht,
            yt,
            mt,
            { test: (t) => "auto" === t, parse: (t) => t },
          ],
          On = (t) => _n.find(kn(t)),
          jn = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function Pn(t) {
          const [e, n] = t.slice(0, -1).split("(");
          if ("drop-shadow" === e) return t;
          const [r] = n.match(ot) || [];
          if (!r) return t;
          const o = n.replace(r, "");
          let i = jn.has(e) ? 1 : 0;
          return r !== n && (i *= 100), e + "(" + i + o + ")";
        }
        const Mn = /\b([a-z-]*)\(.*?\)/gu,
          An = {
            ...jt,
            getAnimatableNone: (t) => {
              const e = t.match(Mn);
              return e ? e.map(Pn).join(" ") : t;
            },
          },
          Cn = { ...tt, transform: Math.round },
          Rn = {
            rotate: ht,
            rotateX: ht,
            rotateY: ht,
            rotateZ: ht,
            scale: nt,
            scaleX: nt,
            scaleY: nt,
            scaleZ: nt,
            skew: ht,
            skewX: ht,
            skewY: ht,
            distance: dt,
            translateX: dt,
            translateY: dt,
            translateZ: dt,
            x: dt,
            y: dt,
            z: dt,
            perspective: dt,
            transformPerspective: dt,
            opacity: et,
            originX: vt,
            originY: vt,
            originZ: dt,
          },
          Vn = {
            borderWidth: dt,
            borderTopWidth: dt,
            borderRightWidth: dt,
            borderBottomWidth: dt,
            borderLeftWidth: dt,
            borderRadius: dt,
            radius: dt,
            borderTopLeftRadius: dt,
            borderTopRightRadius: dt,
            borderBottomRightRadius: dt,
            borderBottomLeftRadius: dt,
            width: dt,
            maxWidth: dt,
            height: dt,
            maxHeight: dt,
            top: dt,
            right: dt,
            bottom: dt,
            left: dt,
            padding: dt,
            paddingTop: dt,
            paddingRight: dt,
            paddingBottom: dt,
            paddingLeft: dt,
            margin: dt,
            marginTop: dt,
            marginRight: dt,
            marginBottom: dt,
            marginLeft: dt,
            backgroundPositionX: dt,
            backgroundPositionY: dt,
            ...Rn,
            zIndex: Cn,
            fillOpacity: et,
            strokeOpacity: et,
            numOctaves: Cn,
          },
          Ln = {
            ...Vn,
            color: bt,
            backgroundColor: bt,
            outlineColor: bt,
            fill: bt,
            stroke: bt,
            borderColor: bt,
            borderTopColor: bt,
            borderRightColor: bt,
            borderBottomColor: bt,
            borderLeftColor: bt,
            filter: An,
            WebkitFilter: An,
          },
          Fn = (t) => Ln[t];
        function In(t, e) {
          let n = Fn(t);
          return (
            n !== An && (n = jt),
            n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
          );
        }
        const Nn = new Set(["auto", "none", "0"]);
        class Bn extends Ke {
          constructor(t, e, n, r, o) {
            super(t, e, n, r, o, !0);
          }
          readKeyframes() {
            const { unresolvedKeyframes: t, element: e, name: n } = this;
            if (!e || !e.current) return;
            super.readKeyframes();
            for (let n = 0; n < t.length; n++) {
              let r = t[n];
              if ("string" == typeof r && ((r = r.trim()), J(r))) {
                const o = Sn(r, e.current);
                void 0 !== o && (t[n] = o),
                  n === t.length - 1 && (this.finalKeyframe = r);
              }
            }
            if ((this.resolveNoneKeyframes(), !Tn.has(n) || 2 !== t.length))
              return;
            const [r, o] = t,
              i = On(r),
              a = On(o);
            if (i !== a)
              if (Le(i) && Le(a))
                for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  "string" == typeof n && (t[e] = parseFloat(n));
                }
              else Ne[n] && (this.needsMeasurement = !0);
          }
          resolveNoneKeyframes() {
            const { unresolvedKeyframes: t, name: e } = this,
              n = [];
            for (let e = 0; e < t.length; e++)
              (null === t[e] ||
                ("number" == typeof (r = t[e])
                  ? 0 === r
                  : null === r || "none" === r || "0" === r || s(r))) &&
                n.push(e);
            var r;
            n.length &&
              (function (t, e, n) {
                let r,
                  o = 0;
                for (; o < t.length && !r; ) {
                  const e = t[o];
                  "string" == typeof e &&
                    !Nn.has(e) &&
                    Tt(e).values.length &&
                    (r = t[o]),
                    o++;
                }
                if (r && n) for (const o of e) t[o] = In(n, r);
              })(t, n, e);
          }
          measureInitialState() {
            const { element: t, unresolvedKeyframes: e, name: n } = this;
            if (!t || !t.current) return;
            "height" === n && (this.suspendedScrollY = window.pageYOffset),
              (this.measuredOrigin = Ne[n](
                t.measureViewportBox(),
                window.getComputedStyle(t.current),
              )),
              (e[0] = this.measuredOrigin);
            const r = e[e.length - 1];
            void 0 !== r && t.getValue(n, r).jump(r, !1);
          }
          measureEndState() {
            const { element: t, name: e, unresolvedKeyframes: n } = this;
            if (!t || !t.current) return;
            const r = t.getValue(e);
            r && r.jump(this.measuredOrigin, !1);
            const o = n.length - 1,
              i = n[o];
            (n[o] = Ne[e](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
              null !== i &&
                void 0 === this.finalKeyframe &&
                (this.finalKeyframe = i),
              this.removedTransforms?.length &&
                this.removedTransforms.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              this.resolveNoneKeyframes();
          }
        }
        const Dn = new Set([
          "borderWidth",
          "borderTopWidth",
          "borderRightWidth",
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRadius",
          "radius",
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomRightRadius",
          "borderBottomLeftRadius",
          "width",
          "maxWidth",
          "height",
          "maxHeight",
          "top",
          "right",
          "bottom",
          "left",
          "padding",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "backgroundPositionX",
          "backgroundPositionY",
        ]);
        function Gn(t, e) {
          for (let n = 0; n < t.length; n++)
            "number" == typeof t[n] && Dn.has(e) && (t[n] = t[n] + "px");
        }
        const Wn = u(() => {
            try {
              document.createElement("div").animate({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          }),
          Hn = new Set(["opacity", "clipPath", "filter", "transform"]);
        function $n(t, e, n) {
          if (t instanceof EventTarget) return [t];
          if ("string" == typeof t) {
            let r = document;
            e && (r = e.current);
            const o = n?.[t] ?? r.querySelectorAll(t);
            return o ? Array.from(o) : [];
          }
          return Array.from(t);
        }
        const qn = { current: void 0 };
        class Kn {
          constructor(t, e = {}) {
            (this.canTrackVelocity = null),
              (this.events = {}),
              (this.updateAndNotify = (t, e = !0) => {
                const n = z.now();
                if (
                  (this.updatedAt !== n && this.setPrevFrameValue(),
                  (this.prev = this.current),
                  this.setCurrent(t),
                  this.current !== this.prev &&
                    (this.events.change?.notify(this.current), this.dependents))
                )
                  for (const t of this.dependents) t.dirty();
                e && this.events.renderRequest?.notify(this.current);
              }),
              (this.hasAnimated = !1),
              this.setCurrent(t),
              (this.owner = e.owner);
          }
          setCurrent(t) {
            var e;
            (this.current = t),
              (this.updatedAt = z.now()),
              null === this.canTrackVelocity &&
                void 0 !== t &&
                (this.canTrackVelocity =
                  ((e = this.current), !isNaN(parseFloat(e))));
          }
          setPrevFrameValue(t = this.current) {
            (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
          }
          onChange(t) {
            return this.on("change", t);
          }
          on(t, e) {
            this.events[t] || (this.events[t] = new p());
            const n = this.events[t].add(e);
            return "change" === t
              ? () => {
                  n(),
                    G.read(() => {
                      this.events.change.getSize() || this.stop();
                    });
                }
              : n;
          }
          clearListeners() {
            for (const t in this.events) this.events[t].clear();
          }
          attach(t, e) {
            (this.passiveEffect = t), (this.stopPassiveEffect = e);
          }
          set(t, e = !0) {
            e && this.passiveEffect
              ? this.passiveEffect(t, this.updateAndNotify)
              : this.updateAndNotify(t, e);
          }
          setWithVelocity(t, e, n) {
            this.set(e),
              (this.prev = void 0),
              (this.prevFrameValue = t),
              (this.prevUpdatedAt = this.updatedAt - n);
          }
          jump(t, e = !0) {
            this.updateAndNotify(t),
              (this.prev = t),
              (this.prevUpdatedAt = this.prevFrameValue = void 0),
              e && this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect();
          }
          dirty() {
            this.events.change?.notify(this.current);
          }
          addDependent(t) {
            this.dependents || (this.dependents = new Set()),
              this.dependents.add(t);
          }
          removeDependent(t) {
            this.dependents && this.dependents.delete(t);
          }
          get() {
            return qn.current && qn.current.push(this), this.current;
          }
          getPrevious() {
            return this.prev;
          }
          getVelocity() {
            const t = z.now();
            if (
              !this.canTrackVelocity ||
              void 0 === this.prevFrameValue ||
              t - this.updatedAt > 30
            )
              return 0;
            const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return y(
              parseFloat(this.current) - parseFloat(this.prevFrameValue),
              e,
            );
          }
          start(t) {
            return (
              this.stop(),
              new Promise((e) => {
                (this.hasAnimated = !0),
                  (this.animation = t(e)),
                  this.events.animationStart &&
                    this.events.animationStart.notify();
              }).then(() => {
                this.events.animationComplete &&
                  this.events.animationComplete.notify(),
                  this.clearAnimation();
              })
            );
          }
          stop() {
            this.animation &&
              (this.animation.stop(),
              this.events.animationCancel &&
                this.events.animationCancel.notify()),
              this.clearAnimation();
          }
          isAnimating() {
            return !!this.animation;
          }
          clearAnimation() {
            delete this.animation;
          }
          destroy() {
            this.dependents?.clear(),
              this.events.destroy?.notify(),
              this.clearListeners(),
              this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect();
          }
        }
        function zn(t, e) {
          return new Kn(t, e);
        }
        const Un = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
        class Yn {
          constructor() {
            (this.latest = {}), (this.values = new Map());
          }
          set(t, e, n, r) {
            const o = this.values.get(t);
            o && o.onRemove();
            const i = () => {
              (this.latest[t] = Un(e.get(), Vn[t])), n && G.render(n);
            };
            i();
            const a = e.on("change", i);
            r && e.addDependent(r);
            const s = () => {
              a(), n && W(n), this.values.delete(t), r && e.removeDependent(r);
            };
            return this.values.set(t, { value: e, onRemove: s }), s;
          }
          get(t) {
            return this.values.get(t)?.value;
          }
          destroy() {
            for (const t of this.values.values()) t.onRemove();
          }
        }
        const Xn = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective",
          },
          Zn = new WeakMap();
        function Jn(t, e, n, r) {
          let o, i;
          return (
            Ve.has(n)
              ? (e.get("transform") ||
                  e.set("transform", new Kn("none"), () => {
                    t.style.transform = (function (t) {
                      let e = "",
                        n = !0;
                      for (let r = 0; r < Re.length; r++) {
                        const o = Re[r],
                          i = t.latest[o];
                        if (void 0 === i) continue;
                        let a = !0;
                        (a =
                          "number" == typeof i
                            ? i === (o.startsWith("scale") ? 1 : 0)
                            : 0 === parseFloat(i)),
                          a ||
                            ((n = !1), (e += `${Xn[o] || o}(${t.latest[o]}) `));
                      }
                      return n ? "none" : e.trim();
                    })(e);
                  }),
                (i = e.get("transform")))
              : (o = ze(n)
                  ? () => {
                      t.style.setProperty(n, e.latest[n]);
                    }
                  : () => {
                      t.style[n] = e.latest[n];
                    }),
            e.set(n, r, o, i)
          );
        }
        const { schedule: Qn, cancel: tr } = D(queueMicrotask, !1),
          er = { x: !1, y: !1 };
        function nr() {
          return er.x || er.y;
        }
        function rr(t, e) {
          const n = $n(t),
            r = new AbortController();
          return [n, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
        }
        function or(t) {
          return !("touch" === t.pointerType || nr());
        }
        const ir = (t, e) => !!e && (t === e || ir(t, e.parentElement)),
          ar = (t) =>
            "mouse" === t.pointerType
              ? "number" != typeof t.button || t.button <= 0
              : !1 !== t.isPrimary,
          sr = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
          ur = new WeakSet();
        function cr(t) {
          return (e) => {
            "Enter" === e.key && t(e);
          };
        }
        function lr(t, e) {
          t.dispatchEvent(
            new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
          );
        }
        function fr(t) {
          return ar(t) && !nr();
        }
        function hr(t, e) {
          const n = window.getComputedStyle(t);
          return ze(e) ? n.getPropertyValue(e) : n[e];
        }
        function pr(t, e) {
          let n;
          const r = () => {
            const { currentTime: r } = e,
              o = (null === r ? 0 : r.value) / 100;
            n !== o && t(o), (n = o);
          };
          return G.preUpdate(r, !0), () => W(r);
        }
        function dr() {
          const { value: t } = B;
          null !== t
            ? (t.frameloop.rate.push(H.delta),
              t.animations.mainThread.push(U.mainThread),
              t.animations.waapi.push(U.waapi),
              t.animations.layout.push(U.layout))
            : W(dr);
        }
        function mr(t) {
          return t.reduce((t, e) => t + e, 0) / t.length;
        }
        function yr(t, e = mr) {
          return 0 === t.length
            ? { min: 0, max: 0, avg: 0 }
            : { min: Math.min(...t), max: Math.max(...t), avg: e(t) };
        }
        const vr = (t) => Math.round(1e3 / t);
        function gr() {
          (B.value = null), (B.addProjectionMetrics = null);
        }
        function br() {
          const { value: t } = B;
          if (!t) throw new Error("Stats are not being measured");
          gr(), W(dr);
          const e = {
              frameloop: {
                setup: yr(t.frameloop.setup),
                rate: yr(t.frameloop.rate),
                read: yr(t.frameloop.read),
                resolveKeyframes: yr(t.frameloop.resolveKeyframes),
                preUpdate: yr(t.frameloop.preUpdate),
                update: yr(t.frameloop.update),
                preRender: yr(t.frameloop.preRender),
                render: yr(t.frameloop.render),
                postRender: yr(t.frameloop.postRender),
              },
              animations: {
                mainThread: yr(t.animations.mainThread),
                waapi: yr(t.animations.waapi),
                layout: yr(t.animations.layout),
              },
              layoutProjection: {
                nodes: yr(t.layoutProjection.nodes),
                calculatedTargetDeltas: yr(
                  t.layoutProjection.calculatedTargetDeltas,
                ),
                calculatedProjections: yr(
                  t.layoutProjection.calculatedProjections,
                ),
              },
            },
            { rate: n } = e.frameloop;
          return (
            (n.min = vr(n.min)),
            (n.max = vr(n.max)),
            (n.avg = vr(n.avg)),
            ([n.min, n.max] = [n.max, n.min]),
            e
          );
        }
        function wr(...t) {
          const e = !Array.isArray(t[0]),
            n = e ? 0 : -1,
            r = t[0 + n],
            o = ue(t[1 + n], t[2 + n], t[3 + n]);
          return e ? o(r) : o;
        }
        function xr(t) {
          const e = [];
          qn.current = e;
          const n = t();
          qn.current = void 0;
          const r = zn(n);
          return (
            (function (t, e, n) {
              const r = () => e.set(n()),
                o = () => G.preRender(r, !1, !0),
                i = t.map((t) => t.on("change", o));
              e.on("destroy", () => {
                i.forEach((t) => t()), W(r);
              });
            })(e, r, t),
            r
          );
        }
        const Sr = [..._n, bt, jt],
          Er = (t) => Sr.find(kn(t));
        function Tr(t) {
          return "layout" === t
            ? "group"
            : "enter" === t || "new" === t
              ? "new"
              : "exit" === t || "old" === t
                ? "old"
                : "group";
        }
        let kr = {},
          _r = null;
        const Or = (t, e) => {
          kr[t] = e;
        };
        function jr(t) {
          const e = t.match(
            /::view-transition-(old|new|group|image-pair)\((.*?)\)/,
          );
          return e ? { layer: e[2], type: e[1] } : null;
        }
        function Pr(t) {
          const { effect: e } = t;
          return (
            !!e &&
            e.target === document.documentElement &&
            e.pseudoElement?.startsWith("::view-transition")
          );
        }
        const Mr = ["layout", "enter", "exit", "new", "old"];
        function Ar(t) {
          const { update: e, targets: n, options: r } = t;
          if (!document.startViewTransition)
            return new Promise(async (t) => {
              await e(), t(new dn([]));
            });
          (function (t, e) {
            return e.has(t) && Object.keys(e.get(t)).length > 0;
          })("root", n) || Or(":root", { "view-transition-name": "none" }),
            Or(
              "::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)",
              { "animation-timing-function": "linear !important" },
            ),
            (() => {
              _r ||
                ((_r = document.createElement("style")),
                (_r.id = "motion-view"));
              let t = "";
              for (const e in kr) {
                const n = kr[e];
                t += `${e} {\n`;
                for (const [e, r] of Object.entries(n)) t += `  ${e}: ${r};\n`;
                t += "}\n";
              }
              (_r.textContent = t), document.head.appendChild(_r), (kr = {});
            })();
          const o = document.startViewTransition(async () => {
            await e();
          });
          return (
            o.finished.finally(() => {
              _r && _r.parentElement && _r.parentElement.removeChild(_r);
            }),
            new Promise((t) => {
              o.ready.then(() => {
                const e = document.getAnimations().filter(Pr),
                  o = [];
                n.forEach((t, e) => {
                  for (const n of Mr) {
                    if (!t[n]) continue;
                    const { keyframes: i, options: a } = t[n];
                    for (let [t, s] of Object.entries(i)) {
                      if (!s) continue;
                      const i = { ...En(r, t), ...En(a, t) },
                        u = Tr(n);
                      "opacity" !== t ||
                        Array.isArray(s) ||
                        (s = ["new" === u ? 0 : 1, s]),
                        "function" == typeof i.delay &&
                          (i.delay = i.delay(0, 1)),
                        i.duration && (i.duration = d(i.duration)),
                        i.delay && (i.delay = d(i.delay));
                      const c = new an({
                        ...i,
                        element: document.documentElement,
                        name: t,
                        pseudoElement: `::view-transition-${u}(${e})`,
                        keyframes: s,
                      });
                      o.push(c);
                    }
                  }
                });
                for (const t of e) {
                  if ("finished" === t.playState) continue;
                  const { effect: e } = t;
                  if (!(e && e instanceof KeyframeEffect)) continue;
                  const { pseudoElement: i } = e;
                  if (!i) continue;
                  const a = jr(i);
                  if (!a) continue;
                  const s = n.get(a.layer);
                  if (s)
                    Cr(s, "enter") &&
                    Cr(s, "exit") &&
                    e.getKeyframes().some((t) => t.mixBlendMode)
                      ? o.push(new yn(t))
                      : t.cancel();
                  else {
                    const n = "group" === a.type ? "layout" : "";
                    let i = { ...En(r, n) };
                    i.duration && (i.duration = d(i.duration)), (i = on(i));
                    const s = en(i.ease, i.duration);
                    e.updateTiming({
                      delay: d(i.delay ?? 0),
                      duration: i.duration,
                      easing: s,
                    }),
                      o.push(new yn(t));
                  }
                }
                t(new dn(o));
              });
            })
          );
        }
        function Cr(t, e) {
          return t?.[e]?.keyframes.opacity;
        }
        let Rr = [],
          Vr = null;
        function Lr() {
          Vr = null;
          const [t] = Rr;
          var e;
          t &&
            (r(Rr, (e = t)),
            (Vr = e),
            Ar(e).then((t) => {
              e.notifyReady(t), t.finished.finally(Lr);
            }));
        }
        function Fr() {
          for (let t = Rr.length - 1; t >= 0; t--) {
            const e = Rr[t],
              { interrupt: n } = e.options;
            if ("immediate" === n) {
              const n = Rr.slice(0, t + 1).map((t) => t.update),
                r = Rr.slice(t + 1);
              (e.update = () => {
                n.forEach((t) => t());
              }),
                (Rr = [e, ...r]);
              break;
            }
          }
          (Vr && "immediate" !== Rr[0]?.options.interrupt) || Lr();
        }
        class Ir {
          constructor(t, e = {}) {
            (this.currentTarget = "root"),
              (this.targets = new Map()),
              (this.notifyReady = c),
              (this.readyPromise = new Promise((t) => {
                this.notifyReady = t;
              })),
              (this.update = t),
              (this.options = { interrupt: "wait", ...e }),
              Rr.push(this),
              Qn.render(Fr);
          }
          get(t) {
            return (this.currentTarget = t), this;
          }
          layout(t, e) {
            return this.updateTarget("layout", t, e), this;
          }
          new(t, e) {
            return this.updateTarget("new", t, e), this;
          }
          old(t, e) {
            return this.updateTarget("old", t, e), this;
          }
          enter(t, e) {
            return this.updateTarget("enter", t, e), this;
          }
          exit(t, e) {
            return this.updateTarget("exit", t, e), this;
          }
          crossfade(t) {
            return (
              this.updateTarget("enter", { opacity: 1 }, t),
              this.updateTarget("exit", { opacity: 0 }, t),
              this
            );
          }
          updateTarget(t, e, n = {}) {
            const { currentTarget: r, targets: o } = this;
            o.has(r) || o.set(r, {}),
              (o.get(r)[t] = { keyframes: e, options: n });
          }
          then(t, e) {
            return this.readyPromise.then(t, e);
          }
        }
        const Nr = G,
          Br = N.reduce((t, e) => ((t[e] = (t) => W(t)), t), {}),
          Dr = (t) => Boolean(t && t.getVelocity);
        function Gr(t) {
          return "object" == typeof t && !Array.isArray(t);
        }
        function Wr(t, e, n, r) {
          return "string" == typeof t && Gr(e)
            ? $n(t, n, r)
            : t instanceof NodeList
              ? Array.from(t)
              : Array.isArray(t)
                ? t
                : [t];
        }
        function Hr(t, e, n) {
          return t * (e + 1);
        }
        function $r(t, e, n, r) {
          return "number" == typeof e
            ? e
            : e.startsWith("-") || e.startsWith("+")
              ? Math.max(0, t + parseFloat(e))
              : "<" === e
                ? n
                : (r.get(e) ?? t);
        }
        function qr(t, e, n, o, i, a) {
          !(function (t, e, n) {
            for (let o = 0; o < t.length; o++) {
              const i = t[o];
              i.at > e && i.at < n && (r(t, i), o--);
            }
          })(t, i, a);
          for (let r = 0; r < e.length; r++)
            t.push({ value: e[r], at: Ct(i, a, o[r]), easing: V(n, r) });
        }
        function Kr(t, e) {
          for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1);
        }
        function zr(t, e) {
          return t.at === e.at
            ? null === t.value
              ? 1
              : null === e.value
                ? -1
                : 0
            : t.at - e.at;
        }
        function Ur(t, e) {
          return !e.has(t) && e.set(t, {}), e.get(t);
        }
        function Yr(t, e) {
          return e[t] || (e[t] = []), e[t];
        }
        function Xr(t) {
          return Array.isArray(t) ? t : [t];
        }
        function Zr(t, e) {
          return t && t[e] ? { ...t, ...t[e] } : { ...t };
        }
        const Jr = (t) => "number" == typeof t,
          Qr = (t) => t.every(Jr),
          to = new WeakMap();
        function eo(t) {
          const e = [{}, {}];
          return (
            t?.values.forEach((t, n) => {
              (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
            }),
            e
          );
        }
        function no(t, e, n, r) {
          if ("function" == typeof e) {
            const [o, i] = eo(r);
            e = e(void 0 !== n ? n : t.custom, o, i);
          }
          if (
            ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e)
          ) {
            const [o, i] = eo(r);
            e = e(void 0 !== n ? n : t.custom, o, i);
          }
          return e;
        }
        function ro(t, e, n) {
          t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, zn(n));
        }
        function oo(t, e) {
          const n = t.getValue("willChange");
          if (((r = n), Boolean(Dr(r) && r.add))) return n.add(e);
          if (!n && i.WillChange) {
            const n = new i.WillChange("auto");
            t.addValue("willChange", n), n.add(e);
          }
          var r;
        }
        const io = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
          ao = "data-" + io("framerAppearId");
        function so(t) {
          return t.props[ao];
        }
        const uo = (t) => null !== t,
          co = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
          lo = { type: "keyframes", duration: 0.8 },
          fo = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
          ho =
            (t, e, n, r = {}, o, a) =>
            (s) => {
              const u = En(r, t) || {},
                c = u.delay || r.delay || 0;
              let { elapsed: l = 0 } = r;
              l -= d(c);
              const f = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...u,
                delay: -l,
                onUpdate: (t) => {
                  e.set(t), u.onUpdate && u.onUpdate(t);
                },
                onComplete: () => {
                  s(), u.onComplete && u.onComplete();
                },
                name: t,
                motionValue: e,
                element: a ? void 0 : o,
              };
              (function ({
                when: t,
                delay: e,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: o,
                repeat: i,
                repeatType: a,
                repeatDelay: s,
                from: u,
                elapsed: c,
                ...l
              }) {
                return !!Object.keys(l).length;
              })(u) ||
                Object.assign(
                  f,
                  ((t, { keyframes: e }) =>
                    e.length > 2
                      ? lo
                      : Ve.has(t)
                        ? t.startsWith("scale")
                          ? {
                              type: "spring",
                              stiffness: 550,
                              damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                              restSpeed: 10,
                            }
                          : co
                        : fo)(t, f),
                ),
                f.duration && (f.duration = d(f.duration)),
                f.repeatDelay && (f.repeatDelay = d(f.repeatDelay)),
                void 0 !== f.from && (f.keyframes[0] = f.from);
              let h = !1;
              if (
                ((!1 === f.type || (0 === f.duration && !f.repeatDelay)) &&
                  ((f.duration = 0), 0 === f.delay && (h = !0)),
                (i.instantAnimations || i.skipAnimations) &&
                  ((h = !0), (f.duration = 0), (f.delay = 0)),
                (f.allowFlatten = !u.type && !u.ease),
                h && !a && void 0 !== e.get())
              ) {
                const t = (function (
                  t,
                  { repeat: e, repeatType: n = "loop" },
                  r,
                ) {
                  const o = t.filter(uo),
                    i = e && "loop" !== n && e % 2 == 1 ? 0 : o.length - 1;
                  return i && void 0 !== r ? r : o[i];
                })(f.keyframes, u);
                if (void 0 !== t)
                  return void G.update(() => {
                    f.onUpdate(t), f.onComplete();
                  });
              }
              return u.isSync ? new we(f) : new pn(f);
            };
        function po({ protectedKeys: t, needsAnimating: e }, n) {
          const r = t.hasOwnProperty(n) && !0 !== e[n];
          return (e[n] = !1), r;
        }
        function mo(
          t,
          e,
          { delay: n = 0, transitionOverride: r, type: o } = {},
        ) {
          let {
            transition: i = t.getDefaultTransition(),
            transitionEnd: a,
            ...s
          } = e;
          r && (i = r);
          const u = [],
            c = o && t.animationState && t.animationState.getState()[o];
          for (const e in s) {
            const r = t.getValue(e, t.latestValues[e] ?? null),
              o = s[e];
            if (void 0 === o || (c && po(c, e))) continue;
            const a = { delay: n, ...En(i || {}, e) },
              l = r.get();
            if (
              void 0 !== l &&
              !r.isAnimating &&
              !Array.isArray(o) &&
              o === l &&
              !a.velocity
            )
              continue;
            let f = !1;
            if (window.MotionHandoffAnimation) {
              const n = so(t);
              if (n) {
                const t = window.MotionHandoffAnimation(n, e, G);
                null !== t && ((a.startTime = t), (f = !0));
              }
            }
            oo(t, e),
              r.start(
                ho(
                  e,
                  r,
                  o,
                  t.shouldReduceMotion && Tn.has(e) ? { type: !1 } : a,
                  t,
                  f,
                ),
              );
            const h = r.animation;
            h && u.push(h);
          }
          return (
            a &&
              Promise.all(u).then(() => {
                G.update(() => {
                  a &&
                    (function (t, e) {
                      const n = (function (t, e) {
                        const n = t.getProps();
                        return no(n, e, n.custom, t);
                      })(t, e);
                      let {
                        transitionEnd: r = {},
                        transition: o = {},
                        ...i
                      } = n || {};
                      i = { ...i, ...r };
                      for (const e in i)
                        ro(
                          t,
                          e,
                          ((t) => Array.isArray(t))((a = i[e]))
                            ? a[a.length - 1] || 0
                            : a,
                        );
                      var a;
                    })(t, a);
                });
              }),
            u
          );
        }
        const yo = {
            animation: [
              "animate",
              "variants",
              "whileHover",
              "whileTap",
              "exit",
              "whileInView",
              "whileFocus",
              "whileDrag",
            ],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"],
          },
          vo = {};
        for (const t in yo)
          vo[t] = { isEnabled: (e) => yo[t].some((t) => !!e[t]) };
        const go = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
          bo = "undefined" != typeof window,
          wo = { current: null },
          xo = { current: !1 },
          So = [
            "initial",
            "animate",
            "whileInView",
            "whileFocus",
            "whileHover",
            "whileTap",
            "whileDrag",
            "exit",
          ];
        function Eo(t) {
          return (
            (null !== (e = t.animate) &&
              "object" == typeof e &&
              "function" == typeof e.start) ||
            So.some((e) =>
              (function (t) {
                return "string" == typeof t || Array.isArray(t);
              })(t[e]),
            )
          );
          var e;
        }
        const To = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
        class ko {
          scrapeMotionValuesFromProps(t, e, n) {
            return {};
          }
          constructor(
            {
              parent: t,
              props: e,
              presenceContext: n,
              reducedMotionConfig: r,
              blockInitialAnimation: o,
              visualState: i,
            },
            a = {},
          ) {
            (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.KeyframeResolver = Ke),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
              (this.render = () => {
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection,
                  ));
              }),
              (this.renderScheduledAt = 0),
              (this.scheduleRender = () => {
                const t = z.now();
                this.renderScheduledAt < t &&
                  ((this.renderScheduledAt = t), G.render(this.render, !1, !0));
              });
            const { latestValues: s, renderState: u } = i;
            (this.latestValues = s),
              (this.baseTarget = { ...s }),
              (this.initialValues = e.initial ? { ...s } : {}),
              (this.renderState = u),
              (this.parent = t),
              (this.props = e),
              (this.presenceContext = n),
              (this.depth = t ? t.depth + 1 : 0),
              (this.reducedMotionConfig = r),
              (this.options = a),
              (this.blockInitialAnimation = Boolean(o)),
              (this.isControllingVariants = Eo(e)),
              (this.isVariantNode = (function (t) {
                return Boolean(Eo(t) || t.variants);
              })(e)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(t && t.current));
            const { willChange: c, ...l } = this.scrapeMotionValuesFromProps(
              e,
              {},
              this,
            );
            for (const t in l) {
              const e = l[t];
              void 0 !== s[t] && Dr(e) && e.set(s[t], !1);
            }
          }
          mount(t) {
            (this.current = t),
              to.set(t, this),
              this.projection &&
                !this.projection.instance &&
                this.projection.mount(t),
              this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                  this.parent.addVariantChild(this)),
              this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
              xo.current ||
                (function () {
                  if (((xo.current = !0), bo))
                    if (window.matchMedia) {
                      const t = window.matchMedia("(prefers-reduced-motion)"),
                        e = () => (wo.current = t.matches);
                      t.addListener(e), e();
                    } else wo.current = !1;
                })(),
              (this.shouldReduceMotion =
                "never" !== this.reducedMotionConfig &&
                ("always" === this.reducedMotionConfig || wo.current)),
              this.parent && this.parent.children.add(this),
              this.update(this.props, this.presenceContext);
          }
          unmount() {
            this.projection && this.projection.unmount(),
              W(this.notifyUpdate),
              W(this.render),
              this.valueSubscriptions.forEach((t) => t()),
              this.valueSubscriptions.clear(),
              this.removeFromVariantTree && this.removeFromVariantTree(),
              this.parent && this.parent.children.delete(this);
            for (const t in this.events) this.events[t].clear();
            for (const t in this.features) {
              const e = this.features[t];
              e && (e.unmount(), (e.isMounted = !1));
            }
            this.current = null;
          }
          bindToMotionValue(t, e) {
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            const n = Ve.has(t);
            n && this.onBindTransform && this.onBindTransform();
            const r = e.on("change", (e) => {
                (this.latestValues[t] = e),
                  this.props.onUpdate && G.preRender(this.notifyUpdate),
                  n &&
                    this.projection &&
                    (this.projection.isTransformDirty = !0);
              }),
              o = e.on("renderRequest", this.scheduleRender);
            let i;
            window.MotionCheckAppearSync &&
              (i = window.MotionCheckAppearSync(this, t, e)),
              this.valueSubscriptions.set(t, () => {
                r(), o(), i && i(), e.owner && e.stop();
              });
          }
          sortNodePosition(t) {
            return this.current &&
              this.sortInstanceNodePosition &&
              this.type === t.type
              ? this.sortInstanceNodePosition(this.current, t.current)
              : 0;
          }
          updateFeatures() {
            let t = "animation";
            for (t in vo) {
              const e = vo[t];
              if (!e) continue;
              const { isEnabled: n, Feature: r } = e;
              if (
                (!this.features[t] &&
                  r &&
                  n(this.props) &&
                  (this.features[t] = new r(this)),
                this.features[t])
              ) {
                const e = this.features[t];
                e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
              }
            }
          }
          triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props);
          }
          measureViewportBox() {
            return this.current
              ? this.measureInstanceViewportBox(this.current, this.props)
              : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          }
          getStaticValue(t) {
            return this.latestValues[t];
          }
          setStaticValue(t, e) {
            this.latestValues[t] = e;
          }
          update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) &&
              this.scheduleRender(),
              (this.prevProps = this.props),
              (this.props = t),
              (this.prevPresenceContext = this.presenceContext),
              (this.presenceContext = e);
            for (let e = 0; e < To.length; e++) {
              const n = To[e];
              this.propEventSubscriptions[n] &&
                (this.propEventSubscriptions[n](),
                delete this.propEventSubscriptions[n]);
              const r = t["on" + n];
              r && (this.propEventSubscriptions[n] = this.on(n, r));
            }
            (this.prevMotionValues = (function (t, e, n) {
              for (const r in e) {
                const o = e[r],
                  i = n[r];
                if (Dr(o)) t.addValue(r, o);
                else if (Dr(i)) t.addValue(r, zn(o, { owner: t }));
                else if (i !== o)
                  if (t.hasValue(r)) {
                    const e = t.getValue(r);
                    !0 === e.liveStyle ? e.jump(o) : e.hasAnimated || e.set(o);
                  } else {
                    const e = t.getStaticValue(r);
                    t.addValue(r, zn(void 0 !== e ? e : o, { owner: t }));
                  }
              }
              for (const r in n) void 0 === e[r] && t.removeValue(r);
              return e;
            })(
              this,
              this.scrapeMotionValuesFromProps(t, this.prevProps, this),
              this.prevMotionValues,
            )),
              this.handleChildMotionValue && this.handleChildMotionValue();
          }
          getProps() {
            return this.props;
          }
          getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0;
          }
          getDefaultTransition() {
            return this.props.transition;
          }
          getTransformPagePoint() {
            return this.props.transformPagePoint;
          }
          getClosestVariantNode() {
            return this.isVariantNode
              ? this
              : this.parent
                ? this.parent.getClosestVariantNode()
                : void 0;
          }
          addVariantChild(t) {
            const e = this.getClosestVariantNode();
            if (e)
              return (
                e.variantChildren && e.variantChildren.add(t),
                () => e.variantChildren.delete(t)
              );
          }
          addValue(t, e) {
            const n = this.values.get(t);
            e !== n &&
              (n && this.removeValue(t),
              this.bindToMotionValue(t, e),
              this.values.set(t, e),
              (this.latestValues[t] = e.get()));
          }
          removeValue(t) {
            this.values.delete(t);
            const e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)),
              delete this.latestValues[t],
              this.removeValueFromRenderState(t, this.renderState);
          }
          hasValue(t) {
            return this.values.has(t);
          }
          getValue(t, e) {
            if (this.props.values && this.props.values[t])
              return this.props.values[t];
            let n = this.values.get(t);
            return (
              void 0 === n &&
                void 0 !== e &&
                ((n = zn(null === e ? void 0 : e, { owner: this })),
                this.addValue(t, n)),
              n
            );
          }
          readValue(t, e) {
            let n =
              void 0 === this.latestValues[t] && this.current
                ? (this.getBaseTargetFromProps(this.props, t) ??
                  this.readValueFromInstance(this.current, t, this.options))
                : this.latestValues[t];
            return (
              null != n &&
                ("string" == typeof n && (a(n) || s(n))
                  ? (n = parseFloat(n))
                  : !Er(n) && jt.test(e) && (n = In(t, e)),
                this.setBaseTarget(t, Dr(n) ? n.get() : n)),
              Dr(n) ? n.get() : n
            );
          }
          setBaseTarget(t, e) {
            this.baseTarget[t] = e;
          }
          getBaseTarget(t) {
            const { initial: e } = this.props;
            let n;
            if ("string" == typeof e || "object" == typeof e) {
              const r = no(this.props, e, this.presenceContext?.custom);
              r && (n = r[t]);
            }
            if (e && void 0 !== n) return n;
            const r = this.getBaseTargetFromProps(this.props, t);
            return void 0 === r || Dr(r)
              ? void 0 !== this.initialValues[t] && void 0 === n
                ? void 0
                : this.baseTarget[t]
              : r;
          }
          on(t, e) {
            return (
              this.events[t] || (this.events[t] = new p()),
              this.events[t].add(e)
            );
          }
          notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e);
          }
        }
        class _o extends ko {
          constructor() {
            super(...arguments), (this.KeyframeResolver = Bn);
          }
          sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          }
          getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0;
          }
          removeValueFromRenderState(t, { vars: e, style: n }) {
            delete e[t], delete n[t];
          }
          handleChildMotionValue() {
            this.childSubscription &&
              (this.childSubscription(), delete this.childSubscription);
            const { children: t } = this.props;
            Dr(t) &&
              (this.childSubscription = t.on("change", (t) => {
                this.current && (this.current.textContent = `${t}`);
              }));
          }
        }
        const Oo = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective",
          },
          jo = Re.length;
        function Po(t, e, n) {
          const { style: r, vars: o, transformOrigin: i } = t;
          let a = !1,
            s = !1;
          for (const t in e) {
            const n = e[t];
            if (Ve.has(t)) a = !0;
            else if (X(t)) o[t] = n;
            else {
              const e = Un(n, Vn[t]);
              t.startsWith("origin") ? ((s = !0), (i[t] = e)) : (r[t] = e);
            }
          }
          if (
            (e.transform ||
              (a || n
                ? (r.transform = (function (t, e, n) {
                    let r = "",
                      o = !0;
                    for (let i = 0; i < jo; i++) {
                      const a = Re[i],
                        s = t[a];
                      if (void 0 === s) continue;
                      let u = !0;
                      if (
                        ((u =
                          "number" == typeof s
                            ? s === (a.startsWith("scale") ? 1 : 0)
                            : 0 === parseFloat(s)),
                        !u || n)
                      ) {
                        const t = Un(s, Vn[a]);
                        u || ((o = !1), (r += `${Oo[a] || a}(${t}) `)),
                          n && (e[a] = t);
                      }
                    }
                    return (
                      (r = r.trim()),
                      n ? (r = n(e, o ? "" : r)) : o && (r = "none"),
                      r
                    );
                  })(e, t.transform, n))
                : r.transform && (r.transform = "none")),
            s)
          ) {
            const {
              originX: t = "50%",
              originY: e = "50%",
              originZ: n = 0,
            } = i;
            r.transformOrigin = `${t} ${e} ${n}`;
          }
        }
        function Mo(t, { style: e, vars: n }, r, o) {
          Object.assign(t.style, e, o && o.getProjectionStyles(r));
          for (const e in n) t.style.setProperty(e, n[e]);
        }
        const Ao = {};
        function Co(t, { layout: e, layoutId: n }) {
          return (
            Ve.has(t) ||
            t.startsWith("origin") ||
            ((e || void 0 !== n) && (!!Ao[t] || "opacity" === t))
          );
        }
        function Ro(t, e, n) {
          const { style: r } = t,
            o = {};
          for (const i in r)
            (Dr(r[i]) ||
              (e.style && Dr(e.style[i])) ||
              Co(i, t) ||
              void 0 !== n?.getValue(i)?.liveStyle) &&
              (o[i] = r[i]);
          return o;
        }
        class Vo extends _o {
          constructor() {
            super(...arguments),
              (this.type = "html"),
              (this.renderInstance = Mo);
          }
          readValueFromInstance(t, e) {
            if (Ve.has(e))
              return this.projection?.isProjecting ? Pe(e) : Ae(t, e);
            {
              const r = ((n = t), window.getComputedStyle(n)),
                o = (X(e) ? r.getPropertyValue(e) : r[e]) || 0;
              return "string" == typeof o ? o.trim() : o;
            }
            var n;
          }
          measureInstanceViewportBox(t, { transformPagePoint: e }) {
            return (function (t, e) {
              return (function ({ top: t, left: e, right: n, bottom: r }) {
                return { x: { min: e, max: n }, y: { min: t, max: r } };
              })(
                (function (t, e) {
                  if (!e) return t;
                  const n = e({ x: t.left, y: t.top }),
                    r = e({ x: t.right, y: t.bottom });
                  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
                })(t.getBoundingClientRect(), e),
              );
            })(t, e);
          }
          build(t, e, n) {
            Po(t, e, n.transformTemplate);
          }
          scrapeMotionValuesFromProps(t, e, n) {
            return Ro(t, e, n);
          }
        }
        class Lo extends ko {
          constructor() {
            super(...arguments), (this.type = "object");
          }
          readValueFromInstance(t, e) {
            if (
              (function (t, e) {
                return t in e;
              })(e, t)
            ) {
              const n = t[e];
              if ("string" == typeof n || "number" == typeof n) return n;
            }
          }
          getBaseTargetFromProps() {}
          removeValueFromRenderState(t, e) {
            delete e.output[t];
          }
          measureInstanceViewportBox() {
            return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          }
          build(t, e) {
            Object.assign(t.output, e);
          }
          renderInstance(t, { output: e }) {
            Object.assign(t, e);
          }
          sortInstanceNodePosition() {
            return 0;
          }
        }
        const Fo = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
          Io = { offset: "strokeDashoffset", array: "strokeDasharray" };
        const No = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]);
        class Bo extends _o {
          constructor() {
            super(...arguments),
              (this.type = "svg"),
              (this.isSVGTag = !1),
              (this.measureInstanceViewportBox = go);
          }
          getBaseTargetFromProps(t, e) {
            return t[e];
          }
          readValueFromInstance(t, e) {
            if (Ve.has(e)) {
              const t = Fn(e);
              return (t && t.default) || 0;
            }
            return (e = No.has(e) ? e : io(e)), t.getAttribute(e);
          }
          scrapeMotionValuesFromProps(t, e, n) {
            return (function (t, e, n) {
              const r = Ro(t, e, n);
              for (const n in t)
                (Dr(t[n]) || Dr(e[n])) &&
                  (r[
                    -1 !== Re.indexOf(n)
                      ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                      : n
                  ] = t[n]);
              return r;
            })(t, e, n);
          }
          build(t, e, n) {
            !(function (
              t,
              {
                attrX: e,
                attrY: n,
                attrScale: r,
                pathLength: o,
                pathSpacing: i = 1,
                pathOffset: a = 0,
                ...s
              },
              u,
              c,
              l,
            ) {
              if ((Po(t, s, c), u))
                return void (
                  t.style.viewBox && (t.attrs.viewBox = t.style.viewBox)
                );
              (t.attrs = t.style), (t.style = {});
              const { attrs: f, style: h } = t;
              f.transform && ((h.transform = f.transform), delete f.transform),
                (h.transform || f.transformOrigin) &&
                  ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
                  delete f.transformOrigin),
                h.transform &&
                  ((h.transformBox = l?.transformBox ?? "fill-box"),
                  delete f.transformBox),
                void 0 !== e && (f.x = e),
                void 0 !== n && (f.y = n),
                void 0 !== r && (f.scale = r),
                void 0 !== o &&
                  (function (t, e, n = 1, r = 0, o = !0) {
                    t.pathLength = 1;
                    const i = o ? Fo : Io;
                    t[i.offset] = dt.transform(-r);
                    const a = dt.transform(e),
                      s = dt.transform(n);
                    t[i.array] = `${a} ${s}`;
                  })(f, o, i, a, !1);
            })(t, e, this.isSVGTag, n.transformTemplate, n.style);
          }
          renderInstance(t, e, n, r) {
            !(function (t, e, n, r) {
              Mo(t, e, void 0, r);
              for (const n in e.attrs)
                t.setAttribute(No.has(n) ? n : io(n), e.attrs[n]);
            })(t, e, 0, r);
          }
          mount(t) {
            var e;
            (this.isSVGTag =
              "string" == typeof (e = t.tagName) && "svg" === e.toLowerCase()),
              super.mount(t);
          }
        }
        function Do(t) {
          const e = {
              presenceContext: null,
              props: {},
              visualState: {
                renderState: {
                  transform: {},
                  transformOrigin: {},
                  style: {},
                  vars: {},
                  attrs: {},
                },
                latestValues: {},
              },
            },
            n = (function (t) {
              return t instanceof SVGElement && "svg" !== t.tagName;
            })(t)
              ? new Bo(e)
              : new Vo(e);
          n.mount(t), to.set(t, n);
        }
        function Go(t) {
          const e = new Lo({
            presenceContext: null,
            props: {},
            visualState: { renderState: { output: {} }, latestValues: {} },
          });
          e.mount(t), to.set(t, e);
        }
        function Wo(t, n, r, o) {
          const i = [];
          if (
            (function (t, e) {
              return (
                Dr(t) ||
                "number" == typeof t ||
                ("string" == typeof t && !Gr(e))
              );
            })(t, n)
          )
            i.push(
              (function (t, e, n) {
                const r = Dr(t) ? t : zn(t);
                return r.start(ho("", r, e, n)), r.animation;
              })(t, (Gr(n) && n.default) || n, (r && r.default) || r),
            );
          else {
            const a = Wr(t, n, o),
              s = a.length;
            e.invariant(Boolean(s), "No valid elements provided.");
            for (let t = 0; t < s; t++) {
              const e = a[t],
                o = e instanceof Element ? Do : Go;
              to.has(e) || o(e);
              const u = to.get(e),
                c = { ...r };
              "delay" in c &&
                "function" == typeof c.delay &&
                (c.delay = c.delay(t, s)),
                i.push(...mo(u, { ...n, transition: c }, {}));
            }
          }
          return i;
        }
        function Ho(t) {
          return function (n, r, o) {
            let i = [];
            var a;
            (a = n),
              (i =
                Array.isArray(a) && a.some(Array.isArray)
                  ? (function (t, n, r) {
                      const o = [],
                        i = (function (
                          t,
                          { defaultTransition: n = {}, ...r } = {},
                          o,
                          i,
                        ) {
                          const a = n.duration || 0.3,
                            s = new Map(),
                            u = new Map(),
                            c = {},
                            l = new Map();
                          let f = 0,
                            p = 0,
                            m = 0;
                          for (let r = 0; r < t.length; r++) {
                            const s = t[r];
                            if ("string" == typeof s) {
                              l.set(s, p);
                              continue;
                            }
                            if (!Array.isArray(s)) {
                              l.set(s.name, $r(p, s.at, f, l));
                              continue;
                            }
                            let [h, y, v = {}] = s;
                            void 0 !== v.at && (p = $r(p, v.at, f, l));
                            let g = 0;
                            const b = (t, r, o, s = 0, u = 0) => {
                              const c = Xr(t),
                                {
                                  delay: l = 0,
                                  times: f = le(c),
                                  type: h = "keyframes",
                                  repeat: y,
                                  repeatType: v,
                                  repeatDelay: b = 0,
                                  ...w
                                } = r;
                              let {
                                ease: x = n.ease || "easeOut",
                                duration: S,
                              } = r;
                              const E = "function" == typeof l ? l(s, u) : l,
                                T = c.length,
                                k = rn(h) ? h : i?.[h];
                              if (T <= 2 && k) {
                                let t = 100;
                                if (2 === T && Qr(c)) {
                                  const e = c[1] - c[0];
                                  t = Math.abs(e);
                                }
                                const e = { ...w };
                                void 0 !== S && (e.duration = d(S));
                                const n = Yt(e, t, k);
                                (x = n.ease), (S = n.duration);
                              }
                              S ?? (S = a);
                              const _ = p + E;
                              1 === f.length && 0 === f[0] && (f[1] = 1);
                              const O = f.length - c.length;
                              if (
                                (O > 0 && ce(f, O),
                                1 === c.length && c.unshift(null),
                                y)
                              ) {
                                e.invariant(
                                  y < 20,
                                  "Repeat count too high, must be less than 20",
                                ),
                                  (S = Hr(S, y));
                                const t = [...c],
                                  n = [...f];
                                x = Array.isArray(x) ? [...x] : [x];
                                const r = [...x];
                                for (let e = 0; e < y; e++) {
                                  c.push(...t);
                                  for (let o = 0; o < t.length; o++)
                                    f.push(n[o] + (e + 1)),
                                      x.push(0 === o ? "linear" : V(r, o - 1));
                                }
                                Kr(f, y);
                              }
                              const j = _ + S;
                              qr(o, c, x, f, _, j),
                                (g = Math.max(E + S, g)),
                                (m = Math.max(j, m));
                            };
                            if (Dr(h)) b(y, v, Yr("default", Ur(h, u)));
                            else {
                              const t = Wr(h, y, o, c),
                                e = t.length;
                              for (let n = 0; n < e; n++) {
                                const r = Ur(t[n], u);
                                for (const t in y)
                                  b(y[t], Zr(v, t), Yr(t, r), n, e);
                              }
                            }
                            (f = p), (p += g);
                          }
                          return (
                            u.forEach((t, e) => {
                              for (const o in t) {
                                const i = t[o];
                                i.sort(zr);
                                const a = [],
                                  u = [],
                                  c = [];
                                for (let t = 0; t < i.length; t++) {
                                  const { at: e, value: n, easing: r } = i[t];
                                  a.push(n),
                                    u.push(h(0, m, e)),
                                    c.push(r || "easeOut");
                                }
                                0 !== u[0] &&
                                  (u.unshift(0),
                                  a.unshift(a[0]),
                                  c.unshift("easeInOut")),
                                  1 !== u[u.length - 1] &&
                                    (u.push(1), a.push(null)),
                                  s.has(e) ||
                                    s.set(e, { keyframes: {}, transition: {} });
                                const l = s.get(e);
                                (l.keyframes[o] = a),
                                  (l.transition[o] = {
                                    ...n,
                                    duration: m,
                                    ease: c,
                                    times: u,
                                    ...r,
                                  });
                              }
                            }),
                            s
                          );
                        })(t, n, r, { spring: ae });
                      return (
                        i.forEach(({ keyframes: t, transition: e }, n) => {
                          o.push(...Wo(n, t, e));
                        }),
                        o
                      );
                    })(n, r, t)
                  : Wo(n, r, o, t));
            const s = new mn(i);
            return t && t.animations.push(s), s;
          };
        }
        const $o = Ho(),
          qo = (t) =>
            function (n, r, o) {
              return new mn(
                (function (t, n, r, o) {
                  const i = $n(t, o),
                    a = i.length;
                  e.invariant(Boolean(a), "No valid element provided.");
                  const s = [];
                  for (let t = 0; t < a; t++) {
                    const e = i[t],
                      o = { ...r };
                    "function" == typeof o.delay && (o.delay = o.delay(t, a));
                    for (const t in n) {
                      let r = n[t];
                      Array.isArray(r) || (r = [r]);
                      const i = { ...En(o, t) };
                      i.duration && (i.duration = d(i.duration)),
                        i.delay && (i.delay = d(i.delay));
                      const a = bn(e),
                        u = gn(t, i.pseudoElement || ""),
                        c = a.get(u);
                      c && c.stop(),
                        s.push({
                          map: a,
                          key: u,
                          unresolvedKeyframes: r,
                          options: {
                            ...i,
                            element: e,
                            name: t,
                            allowFlatten: !o.type && !o.ease,
                          },
                        });
                    }
                  }
                  for (let t = 0; t < s.length; t++) {
                    const { unresolvedKeyframes: e, options: n } = s[t],
                      { element: r, name: o, pseudoElement: i } = n;
                    i || null !== e[0] || (e[0] = hr(r, o)),
                      xe(e),
                      Gn(e, o),
                      !i && e.length < 2 && e.unshift(hr(r, o)),
                      (n.keyframes = e);
                  }
                  const u = [];
                  for (let t = 0; t < s.length; t++) {
                    const { map: e, key: n, options: r } = s[t],
                      o = new an(r);
                    e.set(n, o),
                      o.finished.finally(() => e.delete(n)),
                      u.push(o);
                  }
                  return u;
                })(n, r, o, t),
              );
            },
          Ko = qo(),
          zo = new WeakMap();
        let Uo;
        function Yo({ target: t, contentRect: e, borderBoxSize: n }) {
          zo.get(t)?.forEach((r) => {
            r({
              target: t,
              contentSize: e,
              get size() {
                return (function (t, e) {
                  if (e) {
                    const { inlineSize: t, blockSize: n } = e[0];
                    return { width: t, height: n };
                  }
                  return t instanceof SVGElement && "getBBox" in t
                    ? t.getBBox()
                    : { width: t.offsetWidth, height: t.offsetHeight };
                })(t, n);
              },
            });
          });
        }
        function Xo(t) {
          t.forEach(Yo);
        }
        function Zo(t, e) {
          Uo ||
            ("undefined" != typeof ResizeObserver &&
              (Uo = new ResizeObserver(Xo)));
          const n = $n(t);
          return (
            n.forEach((t) => {
              let n = zo.get(t);
              n || ((n = new Set()), zo.set(t, n)), n.add(e), Uo?.observe(t);
            }),
            () => {
              n.forEach((t) => {
                const n = zo.get(t);
                n?.delete(e), n?.size || Uo?.unobserve(t);
              });
            }
          );
        }
        const Jo = new Set();
        let Qo;
        const ti = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
        function ei(t, e, n, r) {
          const o = n[e],
            { length: i, position: a } = ti[e],
            s = o.current,
            u = n.time;
          (o.current = t[`scroll${a}`]),
            (o.scrollLength = t[`scroll${i}`] - t[`client${i}`]),
            (o.offset.length = 0),
            (o.offset[0] = 0),
            (o.offset[1] = o.scrollLength),
            (o.progress = h(0, o.scrollLength, o.current));
          const c = r - u;
          o.velocity = c > 50 ? 0 : y(o.current - s, c);
        }
        const ni = { start: 0, center: 0.5, end: 1 };
        function ri(t, e, n = 0) {
          let r = 0;
          if ((t in ni && (t = ni[t]), "string" == typeof t)) {
            const e = parseFloat(t);
            t.endsWith("px")
              ? (r = e)
              : t.endsWith("%")
                ? (t = e / 100)
                : t.endsWith("vw")
                  ? (r = (e / 100) * document.documentElement.clientWidth)
                  : t.endsWith("vh")
                    ? (r = (e / 100) * document.documentElement.clientHeight)
                    : (t = e);
          }
          return "number" == typeof t && (r = e * t), n + r;
        }
        const oi = [0, 0];
        function ii(t, e, n, r) {
          let o = Array.isArray(t) ? t : oi,
            i = 0,
            a = 0;
          return (
            "number" == typeof t
              ? (o = [t, t])
              : "string" == typeof t &&
                (o = (t = t.trim()).includes(" ")
                  ? t.split(" ")
                  : [t, ni[t] ? t : "0"]),
            (i = ri(o[0], n, r)),
            (a = ri(o[1], e)),
            i - a
          );
        }
        const ai = {
            Enter: [
              [0, 1],
              [1, 1],
            ],
            Exit: [
              [0, 0],
              [1, 0],
            ],
            Any: [
              [1, 0],
              [0, 1],
            ],
            All: [
              [0, 0],
              [1, 1],
            ],
          },
          si = { x: 0, y: 0 };
        function ui(t, e, n, r = {}) {
          return {
            measure: () =>
              (function (t, e = t, n) {
                if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
                  let r = e;
                  for (; r && r !== t; )
                    (n.x.targetOffset += r.offsetLeft),
                      (n.y.targetOffset += r.offsetTop),
                      (r = r.offsetParent);
                }
                (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                  (n.y.targetLength =
                    e === t ? e.scrollHeight : e.clientHeight),
                  (n.x.containerLength = t.clientWidth),
                  (n.y.containerLength = t.clientHeight);
              })(t, r.target, n),
            update: (e) => {
              !(function (t, e, n) {
                ei(t, "x", e, n), ei(t, "y", e, n), (e.time = n);
              })(t, n, e),
                (r.offset || r.target) &&
                  (function (t, e, n) {
                    const { offset: r = ai.All } = n,
                      { target: i = t, axis: a = "y" } = n,
                      s = "y" === a ? "height" : "width",
                      u =
                        i !== t
                          ? (function (t, e) {
                              const n = { x: 0, y: 0 };
                              let r = t;
                              for (; r && r !== e; )
                                if (r instanceof HTMLElement)
                                  (n.x += r.offsetLeft),
                                    (n.y += r.offsetTop),
                                    (r = r.offsetParent);
                                else if ("svg" === r.tagName) {
                                  const t = r.getBoundingClientRect();
                                  r = r.parentElement;
                                  const e = r.getBoundingClientRect();
                                  (n.x += t.left - e.left),
                                    (n.y += t.top - e.top);
                                } else {
                                  if (!(r instanceof SVGGraphicsElement)) break;
                                  {
                                    const { x: t, y: e } = r.getBBox();
                                    (n.x += t), (n.y += e);
                                    let o = null,
                                      i = r.parentNode;
                                    for (; !o; )
                                      "svg" === i.tagName && (o = i),
                                        (i = r.parentNode);
                                    r = o;
                                  }
                                }
                              return n;
                            })(i, t)
                          : si,
                      c =
                        i === t
                          ? { width: t.scrollWidth, height: t.scrollHeight }
                          : (function (t) {
                              return "getBBox" in t && "svg" !== t.tagName
                                ? t.getBBox()
                                : {
                                    width: t.clientWidth,
                                    height: t.clientHeight,
                                  };
                            })(i),
                      l = { width: t.clientWidth, height: t.clientHeight };
                    e[a].offset.length = 0;
                    let f = !e[a].interpolate;
                    const h = r.length;
                    for (let t = 0; t < h; t++) {
                      const n = ii(r[t], l[s], c[s], u[a]);
                      f || n === e[a].interpolatorOffsets[t] || (f = !0),
                        (e[a].offset[t] = n);
                    }
                    f &&
                      ((e[a].interpolate = ue(e[a].offset, le(r), {
                        clamp: !1,
                      })),
                      (e[a].interpolatorOffsets = [...e[a].offset])),
                      (e[a].progress = o(0, 1, e[a].interpolate(e[a].current)));
                  })(t, n, r);
            },
            notify: () => e(n),
          };
        }
        const ci = new WeakMap(),
          li = new WeakMap(),
          fi = new WeakMap(),
          hi = (t) => (t === document.scrollingElement ? window : t);
        function pi(
          t,
          { container: e = document.scrollingElement, ...n } = {},
        ) {
          if (!e) return c;
          let r = fi.get(e);
          r || ((r = new Set()), fi.set(e, r));
          const o = ui(
            e,
            t,
            {
              time: 0,
              x: {
                current: 0,
                offset: [],
                progress: 0,
                scrollLength: 0,
                targetOffset: 0,
                targetLength: 0,
                containerLength: 0,
                velocity: 0,
              },
              y: {
                current: 0,
                offset: [],
                progress: 0,
                scrollLength: 0,
                targetOffset: 0,
                targetLength: 0,
                containerLength: 0,
                velocity: 0,
              },
            },
            n,
          );
          if ((r.add(o), !ci.has(e))) {
            const t = () => {
                for (const t of r) t.measure();
              },
              n = () => {
                for (const t of r) t.update(H.timestamp);
              },
              o = () => {
                for (const t of r) t.notify();
              },
              u = () => {
                G.read(t), G.read(n), G.preUpdate(o);
              };
            ci.set(e, u);
            const c = hi(e);
            window.addEventListener("resize", u, { passive: !0 }),
              e !== document.documentElement &&
                li.set(
                  e,
                  ((s = u),
                  "function" == typeof (a = e)
                    ? ((i = a),
                      Jo.add(i),
                      Qo ||
                        ((Qo = () => {
                          const t = {
                              width: window.innerWidth,
                              height: window.innerHeight,
                            },
                            e = { target: window, size: t, contentSize: t };
                          Jo.forEach((t) => t(e));
                        }),
                        window.addEventListener("resize", Qo)),
                      () => {
                        Jo.delete(i), !Jo.size && Qo && (Qo = void 0);
                      })
                    : Zo(a, s)),
                ),
              c.addEventListener("scroll", u, { passive: !0 }),
              u();
          }
          var i, a, s;
          const u = ci.get(e);
          return (
            G.read(u, !1, !0),
            () => {
              W(u);
              const t = fi.get(e);
              if (!t) return;
              if ((t.delete(o), t.size)) return;
              const n = ci.get(e);
              ci.delete(e),
                n &&
                  (hi(e).removeEventListener("scroll", n),
                  li.get(e)?.(),
                  window.removeEventListener("resize", n));
            }
          );
        }
        const di = new Map();
        function mi({ source: t, container: e, ...n }) {
          const { axis: r } = n;
          t && (e = t);
          const o = di.get(e) ?? new Map();
          di.set(e, o);
          const i = n.target ?? "self",
            a = o.get(i) ?? {},
            s = r + (n.offset ?? []).join(",");
          return (
            a[s] ||
              (a[s] =
                !n.target && Ye()
                  ? new ScrollTimeline({ source: e, axis: r })
                  : (function (t) {
                      const e = { value: 0 },
                        n = pi((n) => {
                          e.value = 100 * n[t.axis].progress;
                        }, t);
                      return { currentTime: e, cancel: n };
                    })({ container: e, ...n })),
            a[s]
          );
        }
        const yi = { some: 0, all: 1 },
          vi = (t, e) => Math.abs(t - e);
        (e.AsyncMotionValueAnimation = pn),
          (e.DOMKeyframesResolver = Bn),
          (e.GroupAnimation = dn),
          (e.GroupAnimationWithThen = mn),
          (e.JSAnimation = we),
          (e.KeyframeResolver = Ke),
          (e.MotionGlobalConfig = i),
          (e.MotionValue = Kn),
          (e.NativeAnimation = an),
          (e.NativeAnimationExtended = un),
          (e.NativeAnimationWrapper = yn),
          (e.SubscriptionManager = p),
          (e.ViewTransitionBuilder = Ir),
          (e.acceleratedValues = Hn),
          (e.activeAnimations = U),
          (e.addUniqueItem = n),
          (e.alpha = et),
          (e.analyseComplexValue = Tt),
          (e.animate = $o),
          (e.animateMini = Ko),
          (e.animateValue = function (t) {
            return new we(t);
          }),
          (e.animateView = function (t, e = {}) {
            return new Ir(t, e);
          }),
          (e.animationMapKey = gn),
          (e.anticipate = _),
          (e.applyPxDefaults = Gn),
          (e.backIn = T),
          (e.backInOut = k),
          (e.backOut = E),
          (e.calcGeneratorDuration = Ut),
          (e.cancelFrame = W),
          (e.cancelMicrotask = tr),
          (e.cancelSync = Br),
          (e.circIn = O),
          (e.circInOut = P),
          (e.circOut = j),
          (e.clamp = o),
          (e.collectMotionValues = qn),
          (e.color = bt),
          (e.complex = jt),
          (e.convertOffsetToTimes = fe),
          (e.createGeneratorEasing = Yt),
          (e.createRenderBatcher = D),
          (e.createScopedAnimate = Ho),
          (e.cubicBezier = w),
          (e.cubicBezierAsString = Qe),
          (e.defaultEasing = he),
          (e.defaultOffset = le),
          (e.defaultTransformValue = Pe),
          (e.defaultValueTypes = Ln),
          (e.degrees = ht),
          (e.delay = function (t, e) {
            return (function (t, e) {
              const n = z.now(),
                r = ({ timestamp: o }) => {
                  const i = o - n;
                  i >= e && (W(r), t(i - e));
                };
              return G.setup(r, !0), () => W(r);
            })(t, d(e));
          }),
          (e.dimensionValueTypes = _n),
          (e.distance = vi),
          (e.distance2D = function (t, e) {
            const n = vi(t.x, e.x),
              r = vi(t.y, e.y);
            return Math.sqrt(n ** 2 + r ** 2);
          }),
          (e.easeIn = M),
          (e.easeInOut = C),
          (e.easeOut = A),
          (e.easingDefinitionToFunction = I),
          (e.fillOffset = ce),
          (e.fillWildcards = xe),
          (e.findDimensionValueType = On),
          (e.findValueType = Er),
          (e.flushKeyframeResolvers = qe),
          (e.frame = G),
          (e.frameData = H),
          (e.frameSteps = $),
          (e.generateLinearEasing = Kt),
          (e.getAnimatableNone = In),
          (e.getAnimationMap = bn),
          (e.getComputedStyle = hr),
          (e.getDefaultValueType = Fn),
          (e.getEasingForSegment = V),
          (e.getMixer = Dt),
          (e.getValueAsType = Un),
          (e.getValueTransition = En),
          (e.getVariableValue = Sn),
          (e.hasWarned = function (t) {
            return v.has(t);
          }),
          (e.hex = lt),
          (e.hover = function (t, e, n = {}) {
            const [r, o, i] = rr(t, n),
              a = (t) => {
                if (!or(t)) return;
                const { target: n } = t,
                  r = e(n, t);
                if ("function" != typeof r || !n) return;
                const i = (t) => {
                  or(t) && (r(t), n.removeEventListener("pointerleave", i));
                };
                n.addEventListener("pointerleave", i, o);
              };
            return (
              r.forEach((t) => {
                t.addEventListener("pointerenter", a, o);
              }),
              i
            );
          }),
          (e.hsla = gt),
          (e.hslaToRgba = Mt),
          (e.inView = function (
            t,
            e,
            { root: n, margin: r, amount: o = "some" } = {},
          ) {
            const i = $n(t),
              a = new WeakMap(),
              s = new IntersectionObserver(
                (t) => {
                  t.forEach((t) => {
                    const n = a.get(t.target);
                    if (t.isIntersecting !== Boolean(n))
                      if (t.isIntersecting) {
                        const n = e(t.target, t);
                        "function" == typeof n
                          ? a.set(t.target, n)
                          : s.unobserve(t.target);
                      } else
                        "function" == typeof n && (n(t), a.delete(t.target));
                  });
                },
                {
                  root: n,
                  rootMargin: r,
                  threshold: "number" == typeof o ? o : yi[o],
                },
              );
            return i.forEach((t) => s.observe(t)), () => s.disconnect();
          }),
          (e.inertia = se),
          (e.interpolate = ue),
          (e.invisibleValues = It),
          (e.isBezierDefinition = L),
          (e.isCSSVariableName = X),
          (e.isCSSVariableToken = J),
          (e.isDragActive = nr),
          (e.isDragging = er),
          (e.isEasingArray = R),
          (e.isGenerator = rn),
          (e.isNodeOrChild = ir),
          (e.isNumericalString = a),
          (e.isPrimaryPointer = ar),
          (e.isWaapiSupportedEasing = function t(e) {
            return Boolean(
              ("function" == typeof e && Je()) ||
                !e ||
                ("string" == typeof e && (e in tn || Je())) ||
                L(e) ||
                (Array.isArray(e) && e.every(t)),
            );
          }),
          (e.isZeroValueString = s),
          (e.keyframes = pe),
          (e.mapEasingToNativeEasing = en),
          (e.mapValue = function (t, e, n, r) {
            const o = wr(e, n, r);
            return xr(() => o(t.get()));
          }),
          (e.maxGeneratorDuration = zt),
          (e.memo = u),
          (e.microtask = Qn),
          (e.millisecondsToSeconds = m),
          (e.mirrorEasing = x),
          (e.mix = $t),
          (e.mixArray = Gt),
          (e.mixColor = Ft),
          (e.mixComplex = Ht),
          (e.mixImmediate = At),
          (e.mixLinearColor = Rt),
          (e.mixNumber = Ct),
          (e.mixObject = Wt),
          (e.mixVisibility = Nt),
          (e.motionValue = zn),
          (e.moveItem = function ([...t], e, n) {
            const r = e < 0 ? t.length + e : e;
            if (r >= 0 && r < t.length) {
              const r = n < 0 ? t.length + n : n,
                [o] = t.splice(e, 1);
              t.splice(r, 0, o);
            }
            return t;
          }),
          (e.noop = c),
          (e.number = tt),
          (e.numberValueTypes = Vn),
          (e.observeTimeline = pr),
          (e.parseCSSVariable = xn),
          (e.parseValueFromTransform = Me),
          (e.percent = pt),
          (e.pipe = f),
          (e.positionalKeys = Tn),
          (e.press = function (t, e, n = {}) {
            const [r, o, i] = rr(t, n),
              a = (t) => {
                const r = t.currentTarget;
                if (!fr(t)) return;
                ur.add(r);
                const i = e(r, t),
                  a = (t, e) => {
                    window.removeEventListener("pointerup", s),
                      window.removeEventListener("pointercancel", u),
                      ur.has(r) && ur.delete(r),
                      fr(t) && "function" == typeof i && i(t, { success: e });
                  },
                  s = (t) => {
                    a(
                      t,
                      r === window ||
                        r === document ||
                        n.useGlobalTarget ||
                        ir(r, t.target),
                    );
                  },
                  u = (t) => {
                    a(t, !1);
                  };
                window.addEventListener("pointerup", s, o),
                  window.addEventListener("pointercancel", u, o);
              };
            return (
              r.forEach((t) => {
                var e;
                (n.useGlobalTarget ? window : t).addEventListener(
                  "pointerdown",
                  a,
                  o,
                ),
                  t instanceof HTMLElement &&
                    (t.addEventListener("focus", (t) =>
                      ((t, e) => {
                        const n = t.currentTarget;
                        if (!n) return;
                        const r = cr(() => {
                          if (ur.has(n)) return;
                          lr(n, "down");
                          const t = cr(() => {
                            lr(n, "up");
                          });
                          n.addEventListener("keyup", t, e),
                            n.addEventListener(
                              "blur",
                              () => lr(n, "cancel"),
                              e,
                            );
                        });
                        n.addEventListener("keydown", r, e),
                          n.addEventListener(
                            "blur",
                            () => n.removeEventListener("keydown", r),
                            e,
                          );
                      })(t, o),
                    ),
                    (e = t),
                    sr.has(e.tagName) ||
                      -1 !== e.tabIndex ||
                      t.hasAttribute("tabindex") ||
                      (t.tabIndex = 0));
              }),
              i
            );
          }),
          (e.progress = h),
          (e.progressPercentage = vt),
          (e.px = dt),
          (e.readTransformValue = Ae),
          (e.recordStats = function () {
            if (B.value)
              throw (gr(), new Error("Stats are already being measured"));
            const t = B;
            return (
              (t.value = {
                frameloop: {
                  setup: [],
                  rate: [],
                  read: [],
                  resolveKeyframes: [],
                  preUpdate: [],
                  update: [],
                  preRender: [],
                  render: [],
                  postRender: [],
                },
                animations: { mainThread: [], waapi: [], layout: [] },
                layoutProjection: {
                  nodes: [],
                  calculatedTargetDeltas: [],
                  calculatedProjections: [],
                },
              }),
              (t.addProjectionMetrics = (e) => {
                const { layoutProjection: n } = t.value;
                n.nodes.push(e.nodes),
                  n.calculatedTargetDeltas.push(e.calculatedTargetDeltas),
                  n.calculatedProjections.push(e.calculatedProjections);
              }),
              G.postRender(dr, !0),
              br
            );
          }),
          (e.removeItem = r),
          (e.resolveElements = $n),
          (e.reverseEasing = S),
          (e.rgbUnit = ut),
          (e.rgba = ct),
          (e.scale = nt),
          (e.scroll = function (
            t,
            {
              axis: e = "y",
              container: n = document.scrollingElement,
              ...r
            } = {},
          ) {
            if (!n) return c;
            const o = { axis: e, container: n, ...r };
            return "function" == typeof t
              ? (function (t, e) {
                  return (function (t) {
                    return 2 === t.length;
                  })(t)
                    ? pi((n) => {
                        t(n[e.axis].progress, n);
                      }, e)
                    : pr(t, mi(e));
                })(t, o)
              : (function (t, e) {
                  const n = mi(e);
                  return t.attachTimeline({
                    timeline: e.target ? void 0 : n,
                    observe: (t) => (
                      t.pause(),
                      pr((e) => {
                        t.time = t.duration * e;
                      }, n)
                    ),
                  });
                })(t, o);
          }),
          (e.scrollInfo = pi),
          (e.secondsToMilliseconds = d),
          (e.setDragLock = function (t) {
            return "x" === t || "y" === t
              ? er[t]
                ? null
                : ((er[t] = !0),
                  () => {
                    er[t] = !1;
                  })
              : er.x || er.y
                ? null
                : ((er.x = er.y = !0),
                  () => {
                    er.x = er.y = !1;
                  });
          }),
          (e.setStyle = Ue),
          (e.spring = ae),
          (e.stagger = function (
            t = 0.1,
            { startDelay: e = 0, from: n = 0, ease: r } = {},
          ) {
            return (o, i) => {
              const a =
                  "number" == typeof n
                    ? n
                    : (function (t, e) {
                        if ("first" === t) return 0;
                        {
                          const n = e - 1;
                          return "last" === t ? n : n / 2;
                        }
                      })(n, i),
                s = Math.abs(a - o);
              let u = t * s;
              if (r) {
                const e = i * t;
                u = I(r)(u / e) * e;
              }
              return e + u;
            };
          }),
          (e.startWaapiAnimation = nn),
          (e.statsBuffer = B),
          (e.steps = function (t, e = "end") {
            return (n) => {
              const r =
                  (n = "end" === e ? Math.min(n, 0.999) : Math.max(n, 0.001)) *
                  t,
                i = "end" === e ? Math.floor(r) : Math.ceil(r);
              return o(0, 1, i / t);
            };
          }),
          (e.styleEffect = function (t, e) {
            const n = $n(t),
              r = [];
            for (let t = 0; t < n.length; t++) {
              const o = n[t],
                i = Zn.get(o) ?? new Yn();
              Zn.set(o, i);
              for (const t in e) {
                const n = Jn(o, i, t, e[t]);
                r.push(n);
              }
            }
            return () => {
              for (const t of r) t();
            };
          }),
          (e.supportedWaapiEasing = tn),
          (e.supportsBrowserAnimation = hn),
          (e.supportsFlags = Xe),
          (e.supportsLinearEasing = Je),
          (e.supportsPartialKeyframes = Wn),
          (e.supportsScrollTimeline = Ye),
          (e.sync = Nr),
          (e.testValueType = kn),
          (e.time = z),
          (e.transform = wr),
          (e.transformPropOrder = Re),
          (e.transformProps = Ve),
          (e.transformValue = xr),
          (e.transformValueTypes = Rn),
          (e.velocityPerSecond = y),
          (e.vh = mt),
          (e.vw = yt),
          (e.warnOnce = function (t, e, n) {
            t || v.has(e) || (console.warn(e), n && console.warn(n), v.add(e));
          }),
          (e.wrap = g);
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      919: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => s });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          ':root {\n  --Ivory-Mist: #f1efec;\n  --Soft-Mushroom: #d4c9be;\n  --Midnight-Blue: #123458;\n  --Charcoal-Black: #030303;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 100vh 1fr;\n  grid-template-areas:\n    "header main"\n    "header main"\n    "header footer";\n  background-color: var(--Ivory-Mist);\n  font-family: "Outfit", sans-serif, monospace;\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--Midnight-Blue);\n  color: white;\n}\n\n.logo {\n  padding: 20px 20px 0 20px;\n}\n\n.main {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.add-note {\n  padding: 10px 20px;\n}\n\n.add-note-button {\n  background-color: transparent;\n  border: none;\n  font-family: "Outfit", sans-serif, monospace;\n  font-size: 1rem;\n  font-weight: 700;\n  transition: all 0.2 ease;\n}\n\n.add-note-button:hover {\n  color: grey;\n  cursor: pointer;\n}\n\n.note-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 50px 10px;\n  padding: 0 20px 70px 20px;\n}\n\n.footer {\n  grid-area: footer;\n  background-color: var(--Charcoal-Black);\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n}\n\n@media screen and (max-width: 768px) {\n  body {\n    grid-template-columns: 1fr;\n    grid-template-rows: 90px 1fr 70px;\n    grid-template-areas:\n      "header"\n      "main"\n      "footer";\n\n    height: 100vh;\n  }\n\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 20px;\n  }\n\n  .logo {\n    padding: 0;\n  }\n}\n',
          "",
        ]);
        const s = a;
      },
      953: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function s() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_submitEvent", "submit"),
              a(e, "_searchEvent", "search"),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (u = s),
            (c = [
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n            .search-form {\n                display: flex;\n                background-color: white;\n                padding: 25px;\n                box-shadow: 4px 4px 4px rgba(0, 0,0, 0.2);\n            }\n\n            .search-form .form-group {\n                width: 100%;\n                padding: 10px;\n            }\n\n            .search-form input {\n                width: 100%;\n                padding: 10px;\n                border: none;\n                box-shadow: 0px 0px 2px rgba(0, 0,0, 0.2);\n            }\n\n            .search-form button {\n                background-color: transparent;\n                border: none;\n                cursor: pointer;\n            }\n\n        ";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n            <form id="searchForm" class="search-form">\n                <div class="form-group">\n                    <label for="title"></label>\n                    <input type="search" name="title" id="title" placeholder="Enter the Note\'s Title">                    \n                </div>\n                <button type="submit">\n                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">\n                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>\n                    </svg>\n                    <p hidden>Search</p>\n                </button>\n            </form>  \n        ');
                },
              },
              {
                key: "_onFormSubmit",
                value: function (t, e) {
                  e.dispatchEvent(new CustomEvent("submit")),
                    t.preventDefault();
                },
              },
              {
                key: "_onSearchNote",
                value: function () {
                  var t = this._shadowRoot.querySelector("input#title").value;
                  this.dispatchEvent(
                    new CustomEvent(this._searchEvent, {
                      detail: { query: t },
                      bubbles: !0,
                    }),
                  );
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  var t = this;
                  this._shadowRoot
                    .getElementById("searchForm")
                    .addEventListener("submit", function (e) {
                      return t._onFormSubmit(e, t);
                    }),
                    this.addEventListener(
                      this._submitEvent,
                      this._onSearchNote,
                    );
                },
              },
            ]) && e(u.prototype, c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, c;
        })(n(HTMLElement));
        customElements.define("search-bar", u);
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        s = n(56),
        u = n.n(s),
        c = n(540),
        l = n.n(c),
        f = n(113),
        h = n.n(f),
        p = n(919),
        d = {};
      function m(t) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          m(t)
        );
      }
      function y() {
        y = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          return Object.defineProperty(t, e, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r,
          });
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(e, n, r, o) {
          var i = n && n.prototype instanceof h ? n : h,
            a = Object.create(i.prototype);
          return (
            u(
              a,
              "_invoke",
              (function (e, n, r) {
                var o = 1;
                return function (i, a) {
                  if (3 === o) throw Error("Generator is already running");
                  if (4 === o) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    var s = r.delegate;
                    if (s) {
                      var u = E(s, r);
                      if (u) {
                        if (u === f) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (1 === o) throw ((o = 4), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = 3;
                    var c = l(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? 4 : 2), c.arg === f)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = 4), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, new _(o || [])),
              !0,
            ),
            a
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        u(v, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(O([])));
        b && b !== n && r.call(b, i) && (v = b);
        var w = (d.prototype = h.prototype = Object.create(v));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == m(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          u(
            this,
            "_invoke",
            function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
            !0,
          );
        }
        function E(e, n) {
          var r = n.method,
            o = e.i[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.i.return &&
                ((n.method = "return"),
                (n.arg = t),
                E(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var i = l(o, e.i, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.r] = a.value),
                (n.next = e.n),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                f)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function T(t) {
          this.tryEntries.push(t);
        }
        function k(e) {
          var n = e[4] || {};
          (n.type = "normal"), (n.arg = t), (e[4] = n);
        }
        function _(t) {
          (this.tryEntries = [[-1]]), t.forEach(T, this), this.reset(!0);
        }
        function O(e) {
          if (null != e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(m(e) + " is not iterable");
        }
        return (
          (p.prototype = d),
          u(w, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(S.prototype),
          u(S.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          u(w, s, "Generator"),
          u(w, i, function () {
            return this;
          }),
          u(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.unshift(r);
            return function t() {
              for (; n.length; )
                if ((r = n.pop()) in e) return (t.value = r), (t.done = !1), t;
              return (t.done = !0), t;
            };
          }),
          (e.values = O),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0][4];
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t) {
                (a.type = "throw"), (a.arg = e), (n.next = t);
              }
              for (var o = n.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i[4],
                  s = this.prev,
                  u = i[1],
                  c = i[2];
                if (-1 === i[0]) return r("end"), !1;
                if (!u && !c)
                  throw Error("try statement without catch or finally");
                if (null != i[0] && i[0] <= s) {
                  if (s < u)
                    return (this.method = "next"), (this.arg = t), r(u), !0;
                  if (s < c) return r(c), !1;
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o[0] <= e &&
                e <= o[2] &&
                (o = null);
              var i = o ? o[4] : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o[2]), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), k(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                  var r = n[4];
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { i: O(e), r: n, n: r }),
                "next" === this.method && (this.arg = t),
                f
              );
            },
          }),
          e
        );
      }
      function v(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                b(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function b(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ("object" != m(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != m(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" == m(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function w(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function x(t) {
        return S.apply(this, arguments);
      }
      function S() {
        var t;
        return (
          (t = y().mark(function t(e) {
            var r, o, i, a, s, u, c, l;
            return y().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (l = function (t, e) {
                      var n = s.get(t) || g({}, c),
                        r = g(g({}, n), e);
                      s.set(t, r);
                      var i = 1;
                      r.isHovered
                        ? ((i = 1.05), a.classList.add("background-shadow"))
                        : a.classList.remove("background-shadow"),
                        o(t, { scale: i }, u);
                    }),
                      (r = n(401)),
                      (o = r.animate),
                      (i = r.hover),
                      (a = e.querySelector(".note-item")),
                      (s = new WeakMap()),
                      (u = { type: "spring", stiffness: 500, damping: 25 }),
                      (c = { isHovered: !1 }),
                      i(a, function (t) {
                        return (
                          l(t, { isHovered: !0 }),
                          function () {
                            return l(t, { isHovered: !1 });
                          }
                        );
                      });
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (S = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = t.apply(e, n);
              function a(t) {
                w(i, r, o, a, s, "next", t);
              }
              function s(t) {
                w(i, r, o, a, s, "throw", t);
              }
              a(void 0);
            });
          }),
          S.apply(this, arguments)
        );
      }
      (d.styleTagTransform = h()),
        (d.setAttributes = u()),
        (d.insert = a().bind(null, "head")),
        (d.domAPI = o()),
        (d.insertStyleElement = l()),
        e()(p.A, d),
        p.A && p.A.locals && p.A.locals;
      var E = new CSSStyleSheet();
      function T(t) {
        return (
          (T =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          T(t)
        );
      }
      function k() {
        k = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          return Object.defineProperty(t, e, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r,
          });
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(e, n, r, o) {
          var i = n && n.prototype instanceof h ? n : h,
            a = Object.create(i.prototype);
          return (
            u(
              a,
              "_invoke",
              (function (e, n, r) {
                var o = 1;
                return function (i, a) {
                  if (3 === o) throw Error("Generator is already running");
                  if (4 === o) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    var s = r.delegate;
                    if (s) {
                      var u = x(s, r);
                      if (u) {
                        if (u === f) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (1 === o) throw ((o = 4), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = 3;
                    var c = l(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? 4 : 2), c.arg === f)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = 4), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, new _(o || [])),
              !0,
            ),
            a
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(O([])));
        v && v !== n && r.call(v, i) && (m = v);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          function n(o, i, a, s) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == T(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          u(
            this,
            "_invoke",
            function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
            !0,
          );
        }
        function x(e, n) {
          var r = n.method,
            o = e.i[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.i.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var i = l(o, e.i, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.r] = a.value),
                (n.next = e.n),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                f)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function S(t) {
          this.tryEntries.push(t);
        }
        function E(e) {
          var n = e[4] || {};
          (n.type = "normal"), (n.arg = t), (e[4] = n);
        }
        function _(t) {
          (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
        }
        function O(e) {
          if (null != e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(T(e) + " is not iterable");
        }
        return (
          (p.prototype = d),
          u(g, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, s, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.unshift(r);
            return function t() {
              for (; n.length; )
                if ((r = n.pop()) in e) return (t.value = r), (t.done = !1), t;
              return (t.done = !0), t;
            };
          }),
          (e.values = O),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0][4];
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t) {
                (a.type = "throw"), (a.arg = e), (n.next = t);
              }
              for (var o = n.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i[4],
                  s = this.prev,
                  u = i[1],
                  c = i[2];
                if (-1 === i[0]) return r("end"), !1;
                if (!u && !c)
                  throw Error("try statement without catch or finally");
                if (null != i[0] && i[0] <= s) {
                  if (s < u)
                    return (this.method = "next"), (this.arg = t), r(u), !0;
                  if (s < c) return r(c), !1;
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o[0] <= e &&
                e <= o[2] &&
                (o = null);
              var i = o ? o[4] : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o[2]), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                  var r = n[4];
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { i: O(e), r: n, n: r }),
                "next" === this.method && (this.arg = t),
                f
              );
            },
          }),
          e
        );
      }
      function _(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function O(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              _(i, r, o, a, s, "next", t);
            }
            function s(t) {
              _(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function j(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, V(r.key), r);
        }
      }
      function P(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (P = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (M()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && A(o, n.prototype), o;
              })(t, arguments, C(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              A(n, t)
            );
          }),
          P(t)
        );
      }
      function M() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (M = function () {
          return !!t;
        })();
      }
      function A(t, e) {
        return (
          (A = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          A(t, e)
        );
      }
      function C(t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          C(t)
        );
      }
      function R(t, e, n) {
        return (
          (e = V(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function V(t) {
        var e = (function (t) {
          if ("object" != T(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != T(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == T(e) ? e : e + "";
      }
      E.replaceSync(
        "\n                .note-item {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                gap: 5px;\n                background-color: white;\n                padding: 20px;\n                border-radius: 5px;\n                height: 100%;\n            }\n\n            .note-datetime {\n                color: grey;\n                margin-bottom: 0;\n            }\n\n            .note-body{\n                display: -webkit-box;\n                -webkit-line-clamp: 3;\n                -webkit-box-orient: vertical;\n                width: 100%;\n            }\n\n            .note-button {\n                background-color: transparent;\n                border: none;\n                border-radius: 3px;\n                padding: 5px 10px;\n                font-family: 'Outfit';\n            }\n\n            .note-button:hover {\n                border: 1px solid blacks;\n                cursor: pointer;\n                transition: all 0.5s ease;\n            }\n\n            .archive-button {\n                background-color: green;\n                color: white;\n            }\n\n            .archive-button:hover {\n                background-color: white;\n                color: green;\n\n            }\n            \n            .undo-button{\n                background-color: blue;\n                color: white;\n            }\n\n            .undo-button:hover {\n                background-color: white;\n                color: blue;\n            }\n\n            .remove-button {\n                background-color: red;\n                color: white;\n            }\n\n            .remove-button:hover {\n                background-color: white;\n                color: red;\n            } \n            .ellipsis {\n              overflow: hidden;\n              text-overflow: ellipsis;\n            }\n            .background-shadow {\n              box-shadow: 1px 0 10px rgba(0, 0, 0, 0.5);\n            }\n    ",
      );
      var L = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            R(
              (t = (function (t, e, n) {
                return (
                  (e = C(e)),
                  (function (t, e) {
                    if (e && ("object" == T(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    M()
                      ? Reflect.construct(e, n || [], C(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            R(t, "_style", null),
            R(t, "_clickEvent", "click"),
            R(t, "_noteAction", "note-action"),
            R(t, "_note", {
              id: null,
              title: null,
              body: null,
              createdAt: null,
              archived: null,
            }),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && A(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "note",
              get: function () {
                return this._note;
              },
              set: function (t) {
                (this._note = t), this.render();
              },
            },
            {
              key: "_emptyContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._shadowRoot.adoptedStyleSheets = [E];
              },
            },
            {
              key: "_calculateDateTime",
              value: function () {
                var t, e;
                return (
                  (t = this._note.createdAt),
                  {
                    dateOnly: (e = new Date(t)).toLocaleDateString(),
                    timeOnly: e.toLocaleTimeString(),
                  }
                );
              },
            },
            {
              key: "_archiveAction",
              value: function () {
                var t,
                  e,
                  n =
                    ((t = this._note),
                    (e = this._noteAction),
                    console.log("udah diklik"),
                    new CustomEvent(e, {
                      detail: { action: "archive", noteId: t.id },
                      bubbles: !0,
                    }));
                this.dispatchEvent(n);
              },
            },
            {
              key: "_undoAction",
              value: function () {
                var t,
                  e,
                  n =
                    ((t = this._note),
                    (e = this._noteAction),
                    this.dispatchEvent,
                    new CustomEvent(e, {
                      detail: { action: "undo", noteId: t.id },
                      bubbles: !0,
                    }));
                this.dispatchEvent(n);
              },
            },
            {
              key: "_removeAction",
              value: function () {
                var t,
                  e,
                  n =
                    ((t = this._note),
                    (e = this._noteAction),
                    this.dispatchEvent,
                    new CustomEvent(e, {
                      detail: { action: "remove", noteId: t.id },
                      bubbles: !0,
                    }));
                this.dispatchEvent(n);
              },
            },
            {
              key: "_activateButton",
              value:
                ((a = O(
                  k().mark(function t() {
                    var e = this;
                    return k().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              0 == this._note.archived
                                ? this._shadowRoot
                                    .querySelector(".archive-button")
                                    .addEventListener("click", function (t) {
                                      return e._archiveAction(t);
                                    })
                                : this._shadowRoot
                                    .querySelector(".undo-button")
                                    .addEventListener("click", function (t) {
                                      return e._undoAction(t);
                                    }),
                                this._shadowRoot
                                  .querySelector(".remove-button")
                                  .addEventListener("click", function (t) {
                                    return e._removeAction(t);
                                  });
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                )),
                function () {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: "_addAnimation",
              value:
                ((i = O(
                  k().mark(function t() {
                    return k().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              x(this._shadowRoot);
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                )),
                function () {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "connectedCallback",
              value:
                ((o = O(
                  k().mark(function t() {
                    return k().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this._activateButton();
                            case 2:
                              return (t.next = 4), this._addAnimation();
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                )),
                function () {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "render",
              value: function () {
                var t = this._calculateDateTime(),
                  e = t.dateOnly,
                  n = t.timeOnly;
                this._emptyContent(),
                  this._updateStyle(),
                  !1 === this._note.archived
                    ? (this._shadowRoot.innerHTML =
                        '\n                <section class="note-item" id="'
                          .concat(
                            this._note.id,
                            '">\n                    <header class="note-header">\n                        <h2 class="note-title ellipsis">',
                          )
                          .concat(
                            this._note.title,
                            '</h2>\n                        <p class="note-datetime">',
                          )
                          .concat(e, " | ")
                          .concat(
                            n,
                            '</p>                        \n                    </header>\n                    <main class="note-content">\n                        <p class="note-body ellipsis">\n                            ',
                          )
                          .concat(
                            this._note.body,
                            '\n                        </p>\n                    </main>\n                    <footer class="note-footer">\n                        <button class="note-button archive-button">Archive</button>\n                        <button class="note-button remove-button">Remove</button>\n                    </footer>\n                </section>\n            ',
                          ))
                    : (this._shadowRoot.innerHTML =
                        '\n            <section class="note-item" id="'
                          .concat(
                            this._note.id,
                            '">\n                <header class="note-header">\n                    <h2 class="note-title">',
                          )
                          .concat(
                            this._note.title,
                            '</h2>\n                    <p class="note-datetime">',
                          )
                          .concat(e, " | ")
                          .concat(
                            n,
                            '</p>                        \n                </header>\n                <main class="note-content">\n                    <p class="note-body">\n                        ',
                          )
                          .concat(
                            this._note.body,
                            '\n                    </p>\n                </main>\n                <footer class="note-footer">\n                    <button class="note-button undo-button">Undo</button>\n                    <button class="note-button remove-button">Remove</button>\n                </footer>\n            </section>\n        ',
                          ));
              },
            },
          ]),
          r && j(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o, i, a;
      })(P(HTMLElement));
      customElements.define("note-item", L);
      var F = new CSSStyleSheet();
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          I(t)
        );
      }
      function N(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, $(r.key), r);
        }
      }
      function B(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (B = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (D()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && G(o, n.prototype), o;
              })(t, arguments, W(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              G(n, t)
            );
          }),
          B(t)
        );
      }
      function D() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (D = function () {
          return !!t;
        })();
      }
      function G(t, e) {
        return (
          (G = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          G(t, e)
        );
      }
      function W(t) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          W(t)
        );
      }
      function H(t, e, n) {
        return (
          (e = $(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function $(t) {
        var e = (function (t) {
          if ("object" != I(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != I(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == I(e) ? e : e + "";
      }
      F.replaceSync(
        "\n            .hamburger {\n                font-size: 1.5rem;\n                display: none;\n                cursor: pointer;\n            }\n\n            .nav-list {\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n                padding-left: 0px;\n            }\n\n            .nav-item {\n                list-style-type: none;\n                cursor: pointer;\n                padding: 10px 20px;\n            }\n\n            .nav-item:hover {\n                background-color: white;\n                color: var(--Midnight-Blue);\n                transition: all 0.5s ease;\n            }\n\n            @media screen and (max-width: 768px){\n                .hamburger {\n                    display: block;\n                }\n\n                .nav-container {\n                    display: none;\n                }\n\n                .show {\n                    display: flex;\n                    position: absolute;\n                    align-items: center;\n                    justify-content: center;\n                    left: 0;\n                    top: 80px;\n                    width: 100vw;\n                    text-align: center;\n                    background-color: var(--Midnight-Blue);\n                    border-top: 1px solid white;\n                    padding: 10px 0;\n                    z-index: 1000;\n                }\n            }\n    ",
      );
      var q = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            H(
              (t = (function (t, e, n) {
                return (
                  (e = W(e)),
                  (function (t, e) {
                    if (e && ("object" == I(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    D()
                      ? Reflect.construct(e, n || [], W(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            H(t, "_style", null),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && G(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "connectedCallback",
              value: function () {
                this.render();
              },
            },
            {
              key: "_emptyContent",
              value: function () {
                this._shadowRoot.innerHTMl = "";
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._shadowRoot.adoptedStyleSheets = [F];
              },
            },
            {
              key: "_onClickHamburgerButton",
              value: function (t) {
                t.preventDefault();
                var e = this._shadowRoot.querySelector(".hamburger"),
                  n = this._shadowRoot.querySelector(".nav-container");
                n.classList.toggle("show"),
                  n.classList.contains("show")
                    ? (e.innerHTML = "X")
                    : (e.innerHTML = "☰");
              },
            },
            {
              key: "_onClickHomeMenu",
              value: function (t) {
                t.preventDefault();
                var e = new CustomEvent("navigate", {
                  detail: { page: "home" },
                  bubbles: !0,
                  composed: !0,
                });
                this.dispatchEvent(e);
              },
            },
            {
              key: "_onClickArchiveMenu",
              value: function (t) {
                t.preventDefault();
                var e = new CustomEvent("navigate", {
                  detail: { page: "archive" },
                  bubbles: !0,
                  composed: !0,
                });
                this.dispatchEvent(e);
              },
            },
            {
              key: "_activateButton",
              value: function () {
                var t = this,
                  e = this._shadowRoot.getElementById("hamburger"),
                  n = this._shadowRoot.getElementById("homeMenu"),
                  r = this._shadowRoot.getElementById("archiveMenu");
                e.addEventListener("click", function (e) {
                  return t._onClickHamburgerButton(e);
                }),
                  n.addEventListener("click", function (e) {
                    return t._onClickHomeMenu(e);
                  }),
                  r.addEventListener("click", function (e) {
                    return t._onClickArchiveMenu(e);
                  });
              },
            },
            {
              key: "render",
              value: function () {
                this._emptyContent(),
                  this._updateStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n            <div class="navbar">\n                <div class="hamburger" id="hamburger">\n                    &#9776;\n                </div>\n                <nav class="nav-container">\n                    <ul class="nav-list">\n                        <li class="nav-item" id="homeMenu">Home</li>\n                        <li class="nav-item" id="archiveMenu">Archive</li>\n                    </ul>\n                </nav>                \n            </div>\n        '),
                  this._activateButton();
              },
            },
          ]) && N(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(B(HTMLElement));
      customElements.define("nav-bar", q);
      var K = new CSSStyleSheet();
      function z(t) {
        return (
          (z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          z(t)
        );
      }
      function U(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, tt(r.key), r);
        }
      }
      function Y(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (Y = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (X()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && Z(o, n.prototype), o;
              })(t, arguments, J(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Z(n, t)
            );
          }),
          Y(t)
        );
      }
      function X() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (X = function () {
          return !!t;
        })();
      }
      function Z(t, e) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Z(t, e)
        );
      }
      function J(t) {
        return (
          (J = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          J(t)
        );
      }
      function Q(t, e, n) {
        return (
          (e = tt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tt(t) {
        var e = (function (t) {
          if ("object" != z(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == z(e) ? e : e + "";
      }
      K.replaceSync(
        "\n            :host {\n                font-family: 'Outfit', sans-serif;\n            }\n            .add-note-form .form-group {\n                margin-bottom: 1rem;\n            }\n\n            .add-note-form input[type=\"text\"], .add-note-form textarea {\n                padding: 5px;\n                width: 100%;\n                box-sizing: border-box;\n            }\n\n            .form-submit {\n                width: 100%;\n                background-color: #123458;\n                color: white;\n                border: 1px solid #123458;\n                padding: 10px;\n                border-radius: 5px;\n                font-weight: 700;\n                letter-spacing: 0.3rem;\n            }\n\n            .form-submit:hover {\n                transition: all 0.5s ease;\n                background-color: white;\n                border: 3px solid #123458;\n                color: #123458;\n                cursor: pointer;\n            }\n    ",
      );
      var et = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            Q(
              (t = (function (t, e, n) {
                return (
                  (e = J(e)),
                  (function (t, e) {
                    if (e && ("object" == z(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    X()
                      ? Reflect.construct(e, n || [], J(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            Q(t, "_style", null),
            Q(t, "_submitEvent", "submit"),
            Q(t, "_sendNoteEvent", "send-note"),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Z(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "_empytElement",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._shadowRoot.adoptedStyleSheets = [K];
              },
            },
            {
              key: "_activateInput",
              value: function () {
                var t = this._shadowRoot.getElementById("noteTitle"),
                  e = this._shadowRoot.getElementById("noteBody"),
                  n = this._shadowRoot.getElementById("titleError"),
                  r = this._shadowRoot.getElementById("bodyError"),
                  o = function (t, e, n) {
                    t.addEventListener("input", function () {
                      var r = t.value.length,
                        o = n - r;
                      o === n
                        ? ((e.textContent = "Required to fill this field!"),
                          (e.style.color = "#dc143c"))
                        : o < n
                          ? ((e.textContent = "Remain Characters: ".concat(o)),
                            (e.style.color = "#006400"))
                          : r <= 20
                            ? ((e.textContent = "Remain Characters: ".concat(
                                o,
                              )),
                              (e.style.color = "#d4af37"))
                            : r <= 10 &&
                              ((e.textContent = "Remain Characters: ".concat(
                                o,
                              )),
                              (e.style.color = "#dc143c"));
                    });
                  };
                o(t, n, 20), o(e, r, 800);
              },
            },
            {
              key: "_onFormSubmit",
              value: function (t, e) {
                e.dispatchEvent(new CustomEvent("submit")), t.preventDefault();
              },
            },
            {
              key: "_onSendNote",
              value: function () {
                var t = this._shadowRoot
                    .getElementById("noteTitle")
                    .value.trim(),
                  e = this._shadowRoot.getElementById("noteBody").value;
                if (t && e) {
                  var n = {
                    id: "note-" + Date.now(),
                    title: t,
                    body: e,
                    createdAt: new Date().toISOString(),
                    archived: !1,
                  };
                  this.dispatchEvent(
                    new CustomEvent(this._sendNoteEvent, {
                      detail: { note: n },
                      bubbles: !0,
                    }),
                  );
                }
              },
            },
            {
              key: "render",
              value: function () {
                this._empytElement(),
                  this._updateStyle(),
                  (this._shadowRoot.innerHTML =
                    '\n            <form id="addNoteForm" class="add-note-form">\n                <div class="form-group">\n                    <label for="note-title">Title</label><br>\n                    <input type="text" name="note-title" id="noteTitle" maxlength=20 required>\n                    <small class="error-input" id="titleError"></small>\n                </div>\n                <div class="form-group">\n                    <label for="note-body">Body</label><br>\n                    <textarea name="note-body" rows="10" id="noteBody" maxlength=800 required></textarea>\n                    <small class="error-input" id="bodyError"></small>\n                </div>\n                <button type="submit" class="form-submit">SUBMIT</button>\n            </form>\n        ');
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var t = this;
                this.render(),
                  this._activateInput(),
                  this._shadowRoot
                    .getElementById("addNoteForm")
                    .addEventListener("submit", function (e) {
                      return t._onFormSubmit(e, t);
                    }),
                  this.addEventListener(this._submitEvent, this._onSendNote);
              },
            },
          ]) && U(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(Y(HTMLElement));
      customElements.define("add-note-form", et), n(953);
      var nt = new CSSStyleSheet();
      function rt(t) {
        return (
          (rt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          rt(t)
        );
      }
      function ot(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, lt(r.key), r);
        }
      }
      function it(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (it = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (at()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && st(o, n.prototype), o;
              })(t, arguments, ut(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              st(n, t)
            );
          }),
          it(t)
        );
      }
      function at() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (at = function () {
          return !!t;
        })();
      }
      function st(t, e) {
        return (
          (st = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          st(t, e)
        );
      }
      function ut(t) {
        return (
          (ut = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ut(t)
        );
      }
      function ct(t, e, n) {
        return (
          (e = lt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function lt(t) {
        var e = (function (t) {
          if ("object" != rt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != rt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == rt(e) ? e : e + "";
      }
      nt.replaceSync(
        "\n        .attribution {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 100%;\n        }\n\n        .attribution a {\n            text-decoration: none;\n            color: white;\n            background-color: #123458;\n            padding: 5px;\n            border-radius: 5px;\n            margin: 0 5px;\n        }\n\n        .attribution a:hover {\n            background-color: white;\n            color: #123458;\n            transition: all 0.3s ease;\n        }\n    ",
      );
      var ft = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ct(
              (t = (function (t, e, n) {
                return (
                  (e = ut(e)),
                  (function (t, e) {
                    if (e && ("object" == rt(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    at()
                      ? Reflect.construct(e, n || [], ut(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            ct(t, "_style", null),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            (t._projectOwner = t.getAttribute("project-owner")),
            (t._ownerLink = t.getAttribute("owner-link")),
            (t._coderName = t.getAttribute("coder-name")),
            (t._coderLink = t.getAttribute("coder-link")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && st(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "_emptyContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._shadowRoot.adoptedStyleSheets = [nt];
              },
            },
            {
              key: "render",
              value: function () {
                this._emptyContent(),
                  this._updateStyle(),
                  (this._shadowRoot.innerHTML =
                    '\n            <div class="attribution">\n                Project by <a href="'
                      .concat(this._ownerLink, '" target="_blank">')
                      .concat(
                        this._projectOwner,
                        '</a> |\n                Coded by <a href="',
                      )
                      .concat(this._coderLink, '" target="_blank">')
                      .concat(
                        this._coderName,
                        "</a>\n            </div>\n        ",
                      ));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                this.render();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (t, e, n) {
                switch (t) {
                  case "project-owner":
                    this._projectOwner = n;
                    break;
                  case "owner-link":
                    this._ownerLink = n;
                    break;
                  case "coder-name":
                    this._coderName = n;
                    break;
                  case "coder-link":
                    this._coderLink = n;
                }
                this.render();
              },
            },
          ]) && ot(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(it(HTMLElement));
      ct(ft, "observedAttributes", [
        "project-owner",
        "owner-link",
        "coder-name",
        "coder-link",
      ]),
        customElements.define("my-attribution", ft);
      var ht = new CSSStyleSheet();
      function pt(t) {
        return (
          (pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          pt(t)
        );
      }
      function dt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, wt(r.key), r);
        }
      }
      function mt(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (mt = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (yt()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && vt(o, n.prototype), o;
              })(t, arguments, gt(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              vt(n, t)
            );
          }),
          mt(t)
        );
      }
      function yt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (yt = function () {
          return !!t;
        })();
      }
      function vt(t, e) {
        return (
          (vt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          vt(t, e)
        );
      }
      function gt(t) {
        return (
          (gt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          gt(t)
        );
      }
      function bt(t, e, n) {
        return (
          (e = wt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function wt(t) {
        var e = (function (t) {
          if ("object" != pt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != pt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == pt(e) ? e : e + "";
      }
      ht.replaceSync(
        "\n            ::slotted(*) {\n                width: 100%;\n            }\n            .dialog {\n                display: none;\n                flex-direction: column;\n                align-items: center;\n                margin: auto;\n                top: 0;\n                padding: 30px;\n                border: none;\n                border-radius: 10px;\n                width: 280px;\n            }\n\n            .dialog-header {\n                width: 100%;\n                display: flex;\n                justify-content: flex-end;\n            }\n            \n            .dialog-title {\n                text-align: center;\n                font-size: 1.5rem;\n                margin-bottom: 1.5rem;\n            }\n\n            .dialog-body {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                width: 100%;\n            }\n            \n            .dialog .close-button {\n                font-size: 2rem;\n                background-color: transparent;\n                border: none;\n                cursor: pointer; \n    ",
      );
      var xt = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            bt(
              (t = (function (t, e, n) {
                return (
                  (e = gt(e)),
                  (function (t, e) {
                    if (e && ("object" == pt(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    yt()
                      ? Reflect.construct(e, n || [], gt(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            bt(t, "_style", null),
            bt(t, "_submitEvent", "submit"),
            bt(t, "_sendNoteEvent", "send-note"),
            (t._dialogTitle = t.getAttribute("dialog-title")),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && vt(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "_empytElement",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._shadowRoot.adoptedStyleSheets = [ht];
              },
            },
            {
              key: "_activateButton",
              value: function () {
                var t = this;
                this._shadowRoot
                  .querySelector(".dialog")
                  .querySelector(".close-button")
                  .addEventListener("click", function (e) {
                    e.preventDefault(), t.closeDialog();
                  });
              },
            },
            {
              key: "render",
              value: function () {
                this._empytElement(),
                  this._updateStyle(),
                  (this._shadowRoot.innerHTML +=
                    '\n            <dialog class="dialog">\n                <header class="dialog-header">\n                    <button class="close-button">X</button>\n                </header>\n                <main class="dialog-body">\n                    <h1 class="dialog-title">'.concat(
                      this._dialogTitle,
                      '</h1>\n                    <slot name="form-content"></slot>\n                </main>  \n            </dialog>\n        ',
                    ));
              },
            },
            {
              key: "closeDialog",
              value: function () {
                var t = this._shadowRoot.querySelector(".dialog");
                (t.style.display = "none"), t.close(), this.remove();
              },
            },
            {
              key: "openDialog",
              value: function () {
                var t = this._shadowRoot.querySelector(".dialog");
                (t.style.display = "flex"), t.showModal();
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                this.render(), this.openDialog(), this._activateButton();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (t, e, n) {
                "dialog-title" === t && (this._dialogTitle = n);
              },
            },
          ]) && dt(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(mt(HTMLElement));
      bt(xt, "observedAttributes", ["dialog-title"]),
        customElements.define("form-dialog", xt);
      var St = new CSSStyleSheet();
      function Et(t) {
        return (
          (Et =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Et(t)
        );
      }
      function Tt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Mt(r.key), r);
        }
      }
      function kt(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (kt = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (_t()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && Ot(o, n.prototype), o;
              })(t, arguments, jt(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Ot(n, t)
            );
          }),
          kt(t)
        );
      }
      function _t() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (_t = function () {
          return !!t;
        })();
      }
      function Ot(t, e) {
        return (
          (Ot = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Ot(t, e)
        );
      }
      function jt(t) {
        return (
          (jt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          jt(t)
        );
      }
      function Pt(t, e, n) {
        return (
          (e = Mt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Mt(t) {
        var e = (function (t) {
          if ("object" != Et(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != Et(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Et(e) ? e : e + "";
      }
      St.replaceSync(
        "\n            .loading-group {\n                display: block;\n                text-align: center;\n            }\n            .loading-box {\n                width: 50px;\n                height: 50px;\n                background-color: #ff0088;\n                border-radius: 10px;\n                margin: 1rem auto;\n            }\n    ",
      );
      var At = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            Pt(
              (t = (function (t, e, n) {
                return (
                  (e = jt(e)),
                  (function (t, e) {
                    if (e && ("object" == Et(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    _t()
                      ? Reflect.construct(e, n || [], jt(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            Pt(t, "_style", null),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ot(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "_empytElement",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._shadowRoot.adoptedStyleSheets = [St];
              },
            },
            {
              key: "_animateBox",
              value: function () {
                (0, n(401).animate)(
                  this._shadowRoot.querySelector(".loading-box"),
                  { rotate: 90 },
                  { type: "spring", repeat: 1 / 0, repeatDelay: 0.2 },
                );
              },
            },
            {
              key: "render",
              value: function () {
                this._empytElement(),
                  this._updateStyle(),
                  (this._shadowRoot.innerHTML =
                    '\n            <div class="loading-group">\n                <div class="loading-box"></div>\n                <div class="loading-text">\n                    <h3>LOADING...</h3>\n                </div>            \n            </div>\n\n        ');
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                this.render(), this._animateBox();
              },
            },
          ]) && Tt(r.prototype, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o;
      })(kt(HTMLElement));
      function Ct() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Ct = function () {
          return !!t;
        })();
      }
      function Rt(t) {
        return (
          (Rt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Rt(t)
        );
      }
      function Vt(t, e) {
        return (
          (Vt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Vt(t, e)
        );
      }
      function Lt(t) {
        return (
          (Lt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Lt(t)
        );
      }
      function Ft(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function It(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Bt(r.key), r);
        }
      }
      function Nt(t, e, n) {
        return (
          e && It(t.prototype, e),
          n && It(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function Bt(t) {
        var e = (function (t) {
          if ("object" != Lt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != Lt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Lt(e) ? e : e + "";
      }
      customElements.define("loading-indicator", At);
      var Dt = new ((function (t) {
        function e() {
          return (
            Ft(this, e),
            (t = this),
            (r = ["NAVIGATION_"]),
            (n = Rt((n = e))),
            (function (t, e) {
              if (e && ("object" == Lt(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              t,
              Ct()
                ? Reflect.construct(n, r || [], Rt(t).constructor)
                : n.apply(t, r),
            )
          );
          var t, n, r;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Vt(t, e);
          })(e, t),
          Nt(e, [
            {
              key: "setActivePage",
              value: function (t) {
                this.setSessionItem("ACTIVE_PAGE", t);
              },
            },
            {
              key: "getActivePage",
              value: function () {
                return this.getSessionItem("ACTIVE_PAGE");
              },
            },
            {
              key: "clearNavigationData",
              value: function () {
                this.removeSessionItem("ACTIVE_PAGE");
              },
            },
          ])
        );
      })(
        (function () {
          return Nt(
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "APP_";
              Ft(this, t), (this.sessionPrefix = e);
            },
            [
              {
                key: "isAvailable",
                value: function () {
                  return (
                    void 0 !==
                      ("undefined" == typeof Storage
                        ? "undefined"
                        : Lt(Storage)) ||
                    (alert("Browser kamu tidak mendukung session storage"), !1)
                  );
                },
              },
              {
                key: "setSessionItem",
                value: function (t, e) {
                  sessionStorage.setItem(
                    this.sessionPrefix + t,
                    JSON.stringify(e),
                  );
                },
              },
              {
                key: "getSessionItem",
                value: function (t) {
                  return sessionStorage.getItem(this.sessionPrefix + t);
                },
              },
              {
                key: "removeSessionItem",
                value: function (t) {
                  sessionStorage.removeItem(this.sessionPrefix + t);
                },
              },
            ],
          );
        })(),
      ))();
      function Gt(t) {
        return (
          (Gt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Gt(t)
        );
      }
      function Wt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ht(r.key), r);
        }
      }
      function Ht(t) {
        var e = (function (t) {
          if ("object" != Gt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != Gt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Gt(e) ? e : e + "";
      }
      const $t = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "emptyElement",
              value: function (t) {
                t.innerHTML = "";
              },
            },
            {
              key: "showElement",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "block";
                (t.style.display = e), (t.hidden = !1);
              },
            },
            {
              key: "hideElement",
              value: function (t) {
                (t.style.display = "none"), (t.hidden = !0);
              },
            },
          ]),
          null && Wt(t.prototype, null),
          e && Wt(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function qt(t) {
        return (
          (qt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          qt(t)
        );
      }
      function Kt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, zt(r.key), r);
        }
      }
      function zt(t) {
        var e = (function (t) {
          if ("object" != qt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != qt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == qt(e) ? e : e + "";
      }
      var Ut = new ((function () {
        return (
          (t = function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "loading-indicator",
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ".note-list",
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : ".add-note";
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.loadingIndicator = document.querySelector(e)),
              (this.listElement = document.querySelector(n)),
              (this.buttonContainer = document.querySelector(r));
          }),
          (e = [
            {
              key: "enterLoadingState",
              value: function () {
                $t.showElement(this.loadingIndicator),
                  $t.hideElement(this.buttonContainer),
                  $t.hideElement(this.listElement);
              },
            },
            {
              key: "exitLoadingState",
              value: function () {
                $t.hideElement(this.loadingIndicator),
                  $t.showElement(this.buttonContainer),
                  $t.showElement(this.listElement, "grid");
              },
            },
          ]) && Kt(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })())();
      function Yt(t) {
        return (
          (Yt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Yt(t)
        );
      }
      function Xt() {
        Xt = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          return Object.defineProperty(t, e, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r,
          });
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(e, n, r, o) {
          var i = n && n.prototype instanceof h ? n : h,
            a = Object.create(i.prototype);
          return (
            u(
              a,
              "_invoke",
              (function (e, n, r) {
                var o = 1;
                return function (i, a) {
                  if (3 === o) throw Error("Generator is already running");
                  if (4 === o) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    var s = r.delegate;
                    if (s) {
                      var u = x(s, r);
                      if (u) {
                        if (u === f) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (1 === o) throw ((o = 4), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = 3;
                    var c = l(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? 4 : 2), c.arg === f)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = 4), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, new T(o || [])),
              !0,
            ),
            a
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(k([])));
        v && v !== n && r.call(v, i) && (m = v);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          function n(o, i, a, s) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == Yt(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          u(
            this,
            "_invoke",
            function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
            !0,
          );
        }
        function x(e, n) {
          var r = n.method,
            o = e.i[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.i.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var i = l(o, e.i, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.r] = a.value),
                (n.next = e.n),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                f)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function S(t) {
          this.tryEntries.push(t);
        }
        function E(e) {
          var n = e[4] || {};
          (n.type = "normal"), (n.arg = t), (e[4] = n);
        }
        function T(t) {
          (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
        }
        function k(e) {
          if (null != e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(Yt(e) + " is not iterable");
        }
        return (
          (p.prototype = d),
          u(g, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, s, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.unshift(r);
            return function t() {
              for (; n.length; )
                if ((r = n.pop()) in e) return (t.value = r), (t.done = !1), t;
              return (t.done = !0), t;
            };
          }),
          (e.values = k),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0][4];
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t) {
                (a.type = "throw"), (a.arg = e), (n.next = t);
              }
              for (var o = n.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i[4],
                  s = this.prev,
                  u = i[1],
                  c = i[2];
                if (-1 === i[0]) return r("end"), !1;
                if (!u && !c)
                  throw Error("try statement without catch or finally");
                if (null != i[0] && i[0] <= s) {
                  if (s < u)
                    return (this.method = "next"), (this.arg = t), r(u), !0;
                  if (s < c) return r(c), !1;
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o[0] <= e &&
                e <= o[2] &&
                (o = null);
              var i = o ? o[4] : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o[2]), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                  var r = n[4];
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { i: k(e), r: n, n: r }),
                "next" === this.method && (this.arg = t),
                f
              );
            },
          }),
          e
        );
      }
      function Zt(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function Jt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              Zt(i, r, o, a, s, "next", t);
            }
            function s(t) {
              Zt(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Qt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, te(r.key), r);
        }
      }
      function te(t) {
        var e = (function (t) {
          if ("object" != Yt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != Yt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Yt(e) ? e : e + "";
      }
      var ee = "https://notes-api.dicoding.dev/v2",
        ne = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          return (
            (e = t),
            (n = [
              {
                key: "getNote",
                value:
                  ((s = Jt(
                    Xt().mark(function e(n) {
                      var r, o;
                      return Xt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (Ut.enterLoadingState(),
                                  (e.prev = 1),
                                  (r = null),
                                  !n)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 6),
                                  fetch("".concat(ee, "/notes/archived"))
                                );
                              case 6:
                                (r = e.sent), (e.next = 12);
                                break;
                              case 9:
                                return (
                                  (e.next = 11), fetch("".concat(ee, "/notes"))
                                );
                              case 11:
                                r = e.sent;
                              case 12:
                                return (e.next = 14), r.json();
                              case 14:
                                if (!(o = e.sent).error) {
                                  e.next = 19;
                                  break;
                                }
                                console.log(o.message), (e.next = 20);
                                break;
                              case 19:
                                return e.abrupt("return", o.data);
                              case 20:
                                e.next = 25;
                                break;
                              case 22:
                                (e.prev = 22),
                                  (e.t0 = e.catch(1)),
                                  t.showResponseMessage(e.t0);
                              case 25:
                                return (
                                  (e.prev = 25),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  e.finish(25)
                                );
                              case 28:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 22, 25, 28]],
                      );
                    }),
                  )),
                  function (t) {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: "searchNote",
                value:
                  ((a = Jt(
                    Xt().mark(function t(e) {
                      var n, r, o;
                      return Xt().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                Ut.enterLoadingState(),
                                  (n = null),
                                  (r = JSON.parse(Dt.getActivePage())),
                                  (t.t0 = r),
                                  (t.next =
                                    "home" === t.t0
                                      ? 6
                                      : "archive" === t.t0
                                        ? 10
                                        : 14);
                                break;
                              case 6:
                                return (t.next = 8), this.getNote(!1);
                              case 8:
                              case 12:
                                return (n = t.sent), t.abrupt("break", 14);
                              case 10:
                                return (t.next = 12), this.getNote(!0);
                              case 14:
                                return (
                                  (o = n.filter(function (t) {
                                    var n = (t.title || "-")
                                        .toLowerCase()
                                        .replace(/\s/g, ""),
                                      r = e.toLowerCase().replace(/\s/g, "");
                                    return -1 !== n.indexOf(r);
                                  })),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  t.abrupt("return", o)
                                );
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "insertNote",
                value:
                  ((i = Jt(
                    Xt().mark(function e(n) {
                      var r, o;
                      return Xt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Ut.enterLoadingState(),
                                  (e.prev = 1),
                                  (r = {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      title: n.title,
                                      body: n.body,
                                    }),
                                  }),
                                  (e.next = 5),
                                  fetch("".concat(ee, "/notes"), r)
                                );
                              case 5:
                                return (o = e.sent), (e.next = 8), o.json();
                              case 8:
                                return e.sent, e.abrupt("return", o.status);
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  t.showResponseMessage(e.t0);
                              case 15:
                                return (
                                  (e.prev = 15),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  e.finish(15)
                                );
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 12, 15, 18]],
                      );
                    }),
                  )),
                  function (t) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "setNoteToArchive",
                value:
                  ((o = Jt(
                    Xt().mark(function e(n) {
                      var r, o;
                      return Xt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Ut.enterLoadingState(),
                                  (e.prev = 1),
                                  (r = {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }),
                                  (e.next = 5),
                                  fetch(
                                    ""
                                      .concat(ee, "/notes/")
                                      .concat(n, "/archive"),
                                    r,
                                  )
                                );
                              case 5:
                                return (o = e.sent), (e.next = 8), o.json();
                              case 8:
                                return e.sent, e.abrupt("return", o.status);
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  t.showResponseMessage(e.t0);
                              case 15:
                                return (
                                  (e.prev = 15),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  e.finish(15)
                                );
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 12, 15, 18]],
                      );
                    }),
                  )),
                  function (t) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: "undoNoteFromArchive",
                value: (function () {
                  var e = Jt(
                    Xt().mark(function e(n) {
                      var r, o;
                      return Xt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Ut.enterLoadingState(),
                                  (e.prev = 1),
                                  (r = {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }),
                                  (e.next = 5),
                                  fetch(
                                    ""
                                      .concat(ee, "/notes/")
                                      .concat(n, "/unarchive"),
                                    r,
                                  )
                                );
                              case 5:
                                return (o = e.sent), (e.next = 8), o.json();
                              case 8:
                                return e.sent, e.abrupt("return", o.status);
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  t.showResponseMessage(e.t0);
                              case 15:
                                return (
                                  (e.prev = 15),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  e.finish(15)
                                );
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 12, 15, 18]],
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getSingleNote",
                value:
                  ((r = Jt(
                    Xt().mark(function e(n) {
                      var r, o, i;
                      return Xt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Ut.enterLoadingState(),
                                  (e.prev = 1),
                                  (r = {
                                    method: "GET",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }),
                                  (e.next = 5),
                                  fetch("".concat(ee, "/notes/").concat(n), r)
                                );
                              case 5:
                                return (o = e.sent), (e.next = 8), o.json();
                              case 8:
                                return (i = e.sent), e.abrupt("return", i.data);
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  t.showResponseMessage(e.t0);
                              case 15:
                                return (
                                  (e.prev = 15),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  e.finish(15)
                                );
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 12, 15, 18]],
                      );
                    }),
                  )),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "removeNote",
                value: (function () {
                  var e = Jt(
                    Xt().mark(function e(n) {
                      var r, o;
                      return Xt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Ut.enterLoadingState(),
                                  (e.prev = 1),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  t.getSingleNote(n)
                                );
                              case 6:
                                e.sent, (e.next = 12);
                                break;
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e.catch(3)),
                                  e.abrupt("return")
                                );
                              case 12:
                                return (
                                  (r = {
                                    method: "DELETE",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }),
                                  (e.next = 15),
                                  fetch("".concat(ee, "/notes/").concat(n), r)
                                );
                              case 15:
                                return (o = e.sent), (e.next = 18), o.json();
                              case 18:
                                return e.sent, e.abrupt("return", o.status);
                              case 22:
                                (e.prev = 22),
                                  (e.t1 = e.catch(1)),
                                  t.showResponseMessage(e.t1);
                              case 25:
                                return (
                                  (e.prev = 25),
                                  setTimeout(function () {
                                    Ut.exitLoadingState();
                                  }, 1500),
                                  e.finish(25)
                                );
                              case 28:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [1, 22, 25, 28],
                          [3, 9],
                        ],
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "showResponseMessage",
                value: function (t) {
                  alert(t);
                },
              },
            ]),
            n && Qt(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, n, r, o, i, a, s;
        })();
      const re = ne;
      function oe(t) {
        return (
          (oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          oe(t)
        );
      }
      function ie(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function ae() {
        ae = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          return Object.defineProperty(t, e, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r,
          });
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(e, n, r, o) {
          var i = n && n.prototype instanceof h ? n : h,
            a = Object.create(i.prototype);
          return (
            u(
              a,
              "_invoke",
              (function (e, n, r) {
                var o = 1;
                return function (i, a) {
                  if (3 === o) throw Error("Generator is already running");
                  if (4 === o) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    var s = r.delegate;
                    if (s) {
                      var u = x(s, r);
                      if (u) {
                        if (u === f) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (1 === o) throw ((o = 4), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = 3;
                    var c = l(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? 4 : 2), c.arg === f)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = 4), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, new T(o || [])),
              !0,
            ),
            a
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(k([])));
        v && v !== n && r.call(v, i) && (m = v);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          function n(o, i, a, s) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == oe(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          u(
            this,
            "_invoke",
            function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
            !0,
          );
        }
        function x(e, n) {
          var r = n.method,
            o = e.i[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.i.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var i = l(o, e.i, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.r] = a.value),
                (n.next = e.n),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                f)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function S(t) {
          this.tryEntries.push(t);
        }
        function E(e) {
          var n = e[4] || {};
          (n.type = "normal"), (n.arg = t), (e[4] = n);
        }
        function T(t) {
          (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
        }
        function k(e) {
          if (null != e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(oe(e) + " is not iterable");
        }
        return (
          (p.prototype = d),
          u(g, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, s, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.unshift(r);
            return function t() {
              for (; n.length; )
                if ((r = n.pop()) in e) return (t.value = r), (t.done = !1), t;
              return (t.done = !0), t;
            };
          }),
          (e.values = k),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0][4];
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t) {
                (a.type = "throw"), (a.arg = e), (n.next = t);
              }
              for (var o = n.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i[4],
                  s = this.prev,
                  u = i[1],
                  c = i[2];
                if (-1 === i[0]) return r("end"), !1;
                if (!u && !c)
                  throw Error("try statement without catch or finally");
                if (null != i[0] && i[0] <= s) {
                  if (s < u)
                    return (this.method = "next"), (this.arg = t), r(u), !0;
                  if (s < c) return r(c), !1;
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o[0] <= e &&
                e <= o[2] &&
                (o = null);
              var i = o ? o[4] : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o[2]), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                  var r = n[4];
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { i: k(e), r: n, n: r }),
                "next" === this.method && (this.arg = t),
                f
              );
            },
          }),
          e
        );
      }
      function se(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function ue(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              se(i, r, o, a, s, "next", t);
            }
            function s(t) {
              se(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ce(t, e) {
        t >= 200 && t < 300 && e();
      }
      function le() {
        return (le = ue(
          ae().mark(function t(e, n, r) {
            return ae().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n(e);
                  case 2:
                    ce(t.sent, r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function fe() {
        return (fe = ue(
          ae().mark(function t(e, n, r) {
            return ae().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n(e);
                  case 2:
                    ce(t.sent, r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function he() {
        return (he = ue(
          ae().mark(function t(e, n, r) {
            return ae().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n(e);
                  case 2:
                    ce(t.sent, r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function pe(t) {
        return t.map(function (t) {
          var e = document.createElement("note-item");
          return (
            (e.note = t),
            e.addEventListener("note-action", function (t) {
              return (function (t) {
                var e = t.detail.action,
                  n = t.detail.noteId;
                switch (e) {
                  case "archive":
                    !(function (t, e, n) {
                      le.apply(this, arguments);
                    })(n, re.setNoteToArchive, xe);
                    break;
                  case "undo":
                    !(function (t, e, n) {
                      fe.apply(this, arguments);
                    })(n, re.undoNoteFromArchive, xe);
                    break;
                  case "remove":
                    !(function (t, e, n) {
                      he.apply(this, arguments);
                    })(n, re.removeNote, xe);
                }
              })(t);
            }),
            e
          );
        });
      }
      function de() {
        return (de = ue(
          ae().mark(function t(e, n) {
            var r, o, i;
            return ae().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ("" !== e) {
                      t.next = 4;
                      break;
                    }
                    n(), (t.next = 12);
                    break;
                  case 4:
                    return (t.next = 6), re.searchNote(e);
                  case 6:
                    0 === (r = t.sent).length &&
                      (alert("Maaf! Tidak ketemu catatannya :D"), n()),
                      (o = document.querySelector(".note-list")),
                      (i = pe(r)),
                      $t.emptyElement(o),
                      o.append.apply(
                        o,
                        (function (t) {
                          if (Array.isArray(t)) return ie(t);
                        })((a = i)) ||
                          (function (t) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                              null != t["@@iterator"]
                            )
                              return Array.from(t);
                          })(a) ||
                          (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return ie(t, e);
                              var n = {}.toString.call(t).slice(8, -1);
                              return (
                                "Object" === n &&
                                  t.constructor &&
                                  (n = t.constructor.name),
                                "Map" === n || "Set" === n
                                  ? Array.from(t)
                                  : "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n,
                                      )
                                    ? ie(t, e)
                                    : void 0
                              );
                            }
                          })(a) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          })(),
                      );
                  case 12:
                  case "end":
                    return t.stop();
                }
              var a;
            }, t);
          }),
        )).apply(this, arguments);
      }
      function me(t, e, n) {
        return ye.apply(this, arguments);
      }
      function ye() {
        return (ye = ue(
          ae().mark(function t(e, n, r) {
            return ae().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n(e);
                  case 2:
                    ce(t.sent, r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function ve(t) {
        return (
          (ve =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ve(t)
        );
      }
      function ge() {
        ge = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          return Object.defineProperty(t, e, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r,
          });
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(e, n, r, o) {
          var i = n && n.prototype instanceof h ? n : h,
            a = Object.create(i.prototype);
          return (
            u(
              a,
              "_invoke",
              (function (e, n, r) {
                var o = 1;
                return function (i, a) {
                  if (3 === o) throw Error("Generator is already running");
                  if (4 === o) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    var s = r.delegate;
                    if (s) {
                      var u = x(s, r);
                      if (u) {
                        if (u === f) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (1 === o) throw ((o = 4), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = 3;
                    var c = l(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? 4 : 2), c.arg === f)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = 4), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, new T(o || [])),
              !0,
            ),
            a
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(k([])));
        v && v !== n && r.call(v, i) && (m = v);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          function n(o, i, a, s) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == ve(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          u(
            this,
            "_invoke",
            function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
            !0,
          );
        }
        function x(e, n) {
          var r = n.method,
            o = e.i[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.i.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var i = l(o, e.i, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.r] = a.value),
                (n.next = e.n),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                f)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function S(t) {
          this.tryEntries.push(t);
        }
        function E(e) {
          var n = e[4] || {};
          (n.type = "normal"), (n.arg = t), (e[4] = n);
        }
        function T(t) {
          (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
        }
        function k(e) {
          if (null != e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(ve(e) + " is not iterable");
        }
        return (
          (p.prototype = d),
          u(g, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, s, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.unshift(r);
            return function t() {
              for (; n.length; )
                if ((r = n.pop()) in e) return (t.value = r), (t.done = !1), t;
              return (t.done = !0), t;
            };
          }),
          (e.values = k),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0][4];
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t) {
                (a.type = "throw"), (a.arg = e), (n.next = t);
              }
              for (var o = n.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i[4],
                  s = this.prev,
                  u = i[1],
                  c = i[2];
                if (-1 === i[0]) return r("end"), !1;
                if (!u && !c)
                  throw Error("try statement without catch or finally");
                if (null != i[0] && i[0] <= s) {
                  if (s < u)
                    return (this.method = "next"), (this.arg = t), r(u), !0;
                  if (s < c) return r(c), !1;
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o[0] <= e &&
                e <= o[2] &&
                (o = null);
              var i = o ? o[4] : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o[2]), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                  var r = n[4];
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { i: k(e), r: n, n: r }),
                "next" === this.method && (this.arg = t),
                f
              );
            },
          }),
          e
        );
      }
      function be(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function we(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function xe() {
        return Se.apply(this, arguments);
      }
      function Se() {
        var t;
        return (
          (t = ge().mark(function t() {
            var e, n, r, o;
            return ge().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (e = document.querySelector(".note-list")),
                      (n = null),
                      null === Dt.getActivePage() && Dt.setActivePage("home"),
                      (r = JSON.parse(Dt.getActivePage())),
                      (t.t0 = r),
                      (t.next =
                        "home" === t.t0 ? 6 : "archive" === t.t0 ? 10 : 14);
                    break;
                  case 6:
                    return (t.next = 8), re.getNote(!1);
                  case 8:
                    return (n = t.sent), t.abrupt("break", 14);
                  case 10:
                    return (t.next = 12), re.getNote(!0);
                  case 12:
                    return (n = t.sent), t.abrupt("break", 14);
                  case 14:
                    (o = pe(n)),
                      $t.emptyElement(e),
                      e.append.apply(
                        e,
                        (function (t) {
                          if (Array.isArray(t)) return be(t);
                        })((i = o)) ||
                          (function (t) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != t[Symbol.iterator]) ||
                              null != t["@@iterator"]
                            )
                              return Array.from(t);
                          })(i) ||
                          (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return be(t, e);
                              var n = {}.toString.call(t).slice(8, -1);
                              return (
                                "Object" === n &&
                                  t.constructor &&
                                  (n = t.constructor.name),
                                "Map" === n || "Set" === n
                                  ? Array.from(t)
                                  : "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n,
                                      )
                                    ? be(t, e)
                                    : void 0
                              );
                            }
                          })(i) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                          })(),
                      );
                  case 17:
                  case "end":
                    return t.stop();
                }
              var i;
            }, t);
          })),
          (Se = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = t.apply(e, n);
              function a(t) {
                we(i, r, o, a, s, "next", t);
              }
              function s(t) {
                we(i, r, o, a, s, "throw", t);
              }
              a(void 0);
            });
          }),
          Se.apply(this, arguments)
        );
      }
      function Ee(t) {
        return (
          (Ee =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ee(t)
        );
      }
      function Te() {
        Te = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function u(t, e, n, r) {
          return Object.defineProperty(t, e, {
            value: n,
            enumerable: !r,
            configurable: !r,
            writable: !r,
          });
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(e, n, r, o) {
          var i = n && n.prototype instanceof h ? n : h,
            a = Object.create(i.prototype);
          return (
            u(
              a,
              "_invoke",
              (function (e, n, r) {
                var o = 1;
                return function (i, a) {
                  if (3 === o) throw Error("Generator is already running");
                  if (4 === o) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                  }
                  for (r.method = i, r.arg = a; ; ) {
                    var s = r.delegate;
                    if (s) {
                      var u = x(s, r);
                      if (u) {
                        if (u === f) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (1 === o) throw ((o = 4), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = 3;
                    var c = l(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? 4 : 2), c.arg === f)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = 4), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, new T(o || [])),
              !0,
            ),
            a
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = c;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(k([])));
        v && v !== n && r.call(v, i) && (m = v);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          function n(o, i, a, s) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == Ee(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          u(
            this,
            "_invoke",
            function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
            !0,
          );
        }
        function x(e, n) {
          var r = n.method,
            o = e.i[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.i.return &&
                ((n.method = "return"),
                (n.arg = t),
                x(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              f
            );
          var i = l(o, e.i, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.r] = a.value),
                (n.next = e.n),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                f)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function S(t) {
          this.tryEntries.push(t);
        }
        function E(e) {
          var n = e[4] || {};
          (n.type = "normal"), (n.arg = t), (e[4] = n);
        }
        function T(t) {
          (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
        }
        function k(e) {
          if (null != e) {
            var n = e[i];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(Ee(e) + " is not iterable");
        }
        return (
          (p.prototype = d),
          u(g, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          u(g, s, "Generator"),
          u(g, i, function () {
            return this;
          }),
          u(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.unshift(r);
            return function t() {
              for (; n.length; )
                if ((r = n.pop()) in e) return (t.value = r), (t.done = !1), t;
              return (t.done = !0), t;
            };
          }),
          (e.values = k),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0][4];
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t) {
                (a.type = "throw"), (a.arg = e), (n.next = t);
              }
              for (var o = n.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i[4],
                  s = this.prev,
                  u = i[1],
                  c = i[2];
                if (-1 === i[0]) return r("end"), !1;
                if (!u && !c)
                  throw Error("try statement without catch or finally");
                if (null != i[0] && i[0] <= s) {
                  if (s < u)
                    return (this.method = "next"), (this.arg = t), r(u), !0;
                  if (s < c) return r(c), !1;
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o[0] <= e &&
                e <= o[2] &&
                (o = null);
              var i = o ? o[4] : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o[2]), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                  var r = n[4];
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { i: k(e), r: n, n: r }),
                "next" === this.method && (this.arg = t),
                f
              );
            },
          }),
          e
        );
      }
      function ke(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function _e(t) {
        !(function (t, e) {
          de.apply(this, arguments);
        })(t.detail.query, xe);
      }
      function Oe(t) {
        return je.apply(this, arguments);
      }
      function je() {
        var t;
        return (
          (t = Te().mark(function t(e) {
            var n;
            return Te().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (n = document.querySelector("form-dialog")),
                      me(e.detail.note, re.insertNote, xe),
                      n.closeDialog();
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          (je = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = t.apply(e, n);
              function a(t) {
                ke(i, r, o, a, s, "next", t);
              }
              function s(t) {
                ke(i, r, o, a, s, "throw", t);
              }
              a(void 0);
            });
          }),
          je.apply(this, arguments)
        );
      }
      function Pe() {
        var t = document.querySelector("nav-bar"),
          e = document.querySelector("search-bar"),
          n = document.querySelector(".add-note-button");
        t.addEventListener("navigate", function (t) {
          return (function (t) {
            var e = t.detail.page;
            Dt.setActivePage(e), xe();
          })(t);
        }),
          e.addEventListener("search", _e),
          n.addEventListener("click", function (t) {
            return (
              (e = document.querySelector(".main")),
              (n = (function (t, e) {
                var n = (function (t, e) {
                  var n = document.createElement("form-dialog");
                  return (
                    n.setAttribute("dialog-title", "Add Note Form"),
                    e.setAttribute("slot", "form-content"),
                    n.appendChild(e),
                    n
                  );
                })(0, t);
                return t.addEventListener("send-note", e), n;
              })(document.createElement("add-note-form"), Oe)),
              e.appendChild(n),
              void n.openDialog()
            );
            var e, n;
          });
      }
      document.addEventListener("DOMContentLoaded", function () {
        Pe(), xe();
      });
    })();
})();
