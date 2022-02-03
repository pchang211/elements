var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// ../../packages/mux-audio/dist/index.js
var require_dist = __commonJS({
  "../../packages/mux-audio/dist/index.js"() {
    (() => {
      var yt = Object.create;
      var Ne = Object.defineProperty;
      var Tt = Object.getOwnPropertyDescriptor;
      var xt = Object.getOwnPropertyNames;
      var St = Object.getPrototypeOf, _t = Object.prototype.hasOwnProperty;
      var Lt = (N) => Ne(N, "__esModule", { value: true });
      var Ke = (N, I) => () => (I || N((I = { exports: {} }).exports, I), I.exports);
      var At = (N, I, c) => {
        if (I && typeof I == "object" || typeof I == "function")
          for (let R of xt(I))
            !_t.call(N, R) && R !== "default" && Ne(N, R, { get: () => I[R], enumerable: !(c = Tt(I, R)) || c.enumerable });
        return N;
      }, Dt = (N) => At(Lt(Ne(N != null ? yt(St(N)) : {}, "default", N && N.__esModule && "default" in N ? { get: () => N.default, enumerable: true } : { value: N, enumerable: true })), N);
      var Qe = Ke((be, je) => {
        (function() {
          var N = false;
          (function(I, c) {
            typeof be == "object" && typeof je == "object" ? je.exports = c() : typeof N == "function" && N.amd ? N("mux", [], c) : typeof be == "object" ? be.mux = c() : I.mux = c();
          })(this, function() {
            return function(I) {
              function c(A) {
                if (R[A])
                  return R[A].exports;
                var _ = R[A] = { i: A, l: false, exports: {} };
                return I[A].call(_.exports, _, _.exports, c), _.l = true, _.exports;
              }
              var R = {};
              return c.m = I, c.c = R, c.d = function(A, _, M) {
                c.o(A, _) || Object.defineProperty(A, _, { configurable: false, enumerable: true, get: M });
              }, c.n = function(A) {
                var _ = A && A.__esModule ? function() {
                  return A.default;
                } : function() {
                  return A;
                };
                return c.d(_, "a", _), _;
              }, c.o = function(A, _) {
                return Object.prototype.hasOwnProperty.call(A, _);
              }, c.p = "", c(c.s = 15);
            }([function(I, c, R) {
              (function(A) {
                var _;
                _ = typeof window != "undefined" ? window : A !== void 0 ? A : typeof self != "undefined" ? self : {}, I.exports = _;
              }).call(c, R(17));
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(0), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = {};
              M.now = function() {
                var O = _.default.performance, D = O && O.timing;
                return D && typeof D.navigationStart == "number" && typeof O.now == "function" ? D.navigationStart + O.now() : Date.now();
              }, c.default = M;
            }, function(I, c) {
              function R(F, U, w) {
                switch (w.length) {
                  case 0:
                    return F.call(U);
                  case 1:
                    return F.call(U, w[0]);
                  case 2:
                    return F.call(U, w[0], w[1]);
                  case 3:
                    return F.call(U, w[0], w[1], w[2]);
                }
                return F.apply(U, w);
              }
              function A(F, U) {
                for (var w = -1, k = Array(F); ++w < F; )
                  k[w] = U(w);
                return k;
              }
              function _(F, U) {
                var w = C(F) || T(F) ? A(F.length, String) : [], k = w.length, W = !!k;
                for (var K in F)
                  !U && !a.call(F, K) || W && (K == "length" || u(K, k)) || w.push(K);
                return w;
              }
              function M(F, U, w) {
                var k = F[U];
                a.call(F, U) && g(k, w) && (w !== void 0 || U in F) || (F[U] = w);
              }
              function O(F) {
                if (!p(F))
                  return S(F);
                var U = [];
                for (var w in Object(F))
                  a.call(F, w) && w != "constructor" && U.push(w);
                return U;
              }
              function D(F, U) {
                return U = P(U === void 0 ? F.length - 1 : U, 0), function() {
                  for (var w = arguments, k = -1, W = P(w.length - U, 0), K = Array(W); ++k < W; )
                    K[k] = w[U + k];
                  k = -1;
                  for (var j = Array(U + 1); ++k < U; )
                    j[k] = w[k];
                  return j[U] = K, R(F, this, j);
                };
              }
              function L(F, U, w, k) {
                w || (w = {});
                for (var W = -1, K = U.length; ++W < K; ) {
                  var j = U[W], G = k ? k(w[j], F[j], j, w, F) : void 0;
                  M(w, j, G === void 0 ? F[j] : G);
                }
                return w;
              }
              function u(F, U) {
                return !!(U = U == null ? f : U) && (typeof F == "number" || o.test(F)) && F > -1 && F % 1 == 0 && F < U;
              }
              function y(F, U, w) {
                if (!i(w))
                  return false;
                var k = typeof U;
                return !!(k == "number" ? x(w) && u(U, w.length) : k == "string" && U in w) && g(w[U], F);
              }
              function p(F) {
                var U = F && F.constructor;
                return F === (typeof U == "function" && U.prototype || n);
              }
              function g(F, U) {
                return F === U || F !== F && U !== U;
              }
              function T(F) {
                return r(F) && a.call(F, "callee") && (!m.call(F, "callee") || E.call(F) == v);
              }
              function x(F) {
                return F != null && t(F.length) && !e(F);
              }
              function r(F) {
                return d(F) && x(F);
              }
              function e(F) {
                var U = i(F) ? E.call(F) : "";
                return U == h || U == l;
              }
              function t(F) {
                return typeof F == "number" && F > -1 && F % 1 == 0 && F <= f;
              }
              function i(F) {
                var U = typeof F;
                return !!F && (U == "object" || U == "function");
              }
              function d(F) {
                return !!F && typeof F == "object";
              }
              function s(F) {
                return x(F) ? _(F) : O(F);
              }
              var f = 9007199254740991, v = "[object Arguments]", h = "[object Function]", l = "[object GeneratorFunction]", o = /^(?:0|[1-9]\d*)$/, n = Object.prototype, a = n.hasOwnProperty, E = n.toString, m = n.propertyIsEnumerable, S = function(F, U) {
                return function(w) {
                  return F(U(w));
                };
              }(Object.keys, Object), P = Math.max, b = !m.call({ valueOf: 1 }, "valueOf"), C = Array.isArray, B = function(F) {
                return D(function(U, w) {
                  var k = -1, W = w.length, K = W > 1 ? w[W - 1] : void 0, j = W > 2 ? w[2] : void 0;
                  for (K = F.length > 3 && typeof K == "function" ? (W--, K) : void 0, j && y(w[0], w[1], j) && (K = W < 3 ? void 0 : K, W = 1), U = Object(U); ++k < W; ) {
                    var G = w[k];
                    G && F(U, G, k, K);
                  }
                  return U;
                });
              }(function(F, U) {
                if (b || p(U) || x(U))
                  return void L(U, s(U), F);
                for (var w in U)
                  a.call(U, w) && M(F, w, U[w]);
              });
              I.exports = B;
            }, function(I, c, R) {
              "use strict";
              function A(_, M, O) {
                O = O === void 0 ? 1 : O, _[M] = _[M] || 0, _[M] += O;
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(18), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = _.default.methodFactory;
              _.default.methodFactory = function(O, D, L) {
                var u = M(O, D, L);
                return function() {
                  for (var y = ["[mux]"], p = 0; p < arguments.length; p++)
                    y.push(arguments[p]);
                  u.apply(void 0, y);
                };
              }, _.default.setLevel(_.default.getLevel()), c.default = _.default;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = function(O) {
                return M(O)[0];
              }, _ = function(O) {
                return M(O)[1];
              }, M = function(O) {
                if (typeof O != "string" || O === "")
                  return ["localhost"];
                var D = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, L = O.match(D) || [], u = L[4], y = void 0;
                return u && (y = (u.match(/[^\.]+\.[^\.]+$/) || [])[0]), [u, y];
              };
              c.extractHostnameAndDomain = M, c.extractHostname = A, c.extractDomain = _;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(M) {
                  var O = 16 * Math.random() | 0;
                  return (M === "x" ? O : 3 & O | 8).toString(16);
                });
              }, _ = function() {
                return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
              };
              c.generateUUID = A, c.generateShortID = _;
            }, function(I, c, R) {
              "use strict";
              function A(M) {
                M = M || "";
                var O = {};
                return M.trim().split(/[\r\n]+/).forEach(function(D) {
                  if (D) {
                    var L = D.split(": "), u = L.shift();
                    u && _.indexOf(u.toLowerCase()) >= 0 && (O[u] = L.join(": "));
                  }
                }), O;
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
              var _ = ["x-cdn", "content-type"];
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true }), c.findMediaElement = c.getMuxPlayerId = void 0;
              var A = R(6), _ = function(O) {
                return O && O.nodeName !== void 0 ? (O.muxId || (O.muxId = O.id || (0, A.generateShortID)()), O.muxId) : O;
              }, M = function(O) {
                var D = void 0;
                return O && O.nodeName !== void 0 ? (D = O, O = _(D)) : D = document.querySelector(O), [D, O, D && D.nodeName ? D.nodeName.toLowerCase() : ""];
              };
              c.getMuxPlayerId = _, c.findMediaElement = M;
            }, function(I, c, R) {
              "use strict";
              function A() {
                return (M.default.doNotTrack || M.default.navigator && (M.default.navigator.doNotTrack || M.default.navigator.msDoNotTrack)) === "1";
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
              var _ = R(0), M = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(_);
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(0), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = {};
              M.exists = function() {
                var O = _.default.performance;
                return (O && O.timing) !== void 0;
              }, M.domContentLoadedEventEnd = function() {
                var O = _.default.performance, D = O && O.timing;
                return D && D.domContentLoadedEventEnd;
              }, M.navigationStart = function() {
                var O = _.default.performance, D = O && O.timing;
                return D && D.navigationStart;
              }, c.default = M;
            }, function(I, c, R) {
              "use strict";
              var A = R(37), _ = R(38), M = R(13);
              I.exports = { formats: M, parse: _, stringify: A };
            }, function(I, c, R) {
              "use strict";
              var A = Object.prototype.hasOwnProperty, _ = function() {
                for (var O = [], D = 0; D < 256; ++D)
                  O.push("%" + ((D < 16 ? "0" : "") + D.toString(16)).toUpperCase());
                return O;
              }(), M = function(O) {
                for (var D; O.length; ) {
                  var L = O.pop();
                  if (D = L.obj[L.prop], Array.isArray(D)) {
                    for (var u = [], y = 0; y < D.length; ++y)
                      D[y] !== void 0 && u.push(D[y]);
                    L.obj[L.prop] = u;
                  }
                }
                return D;
              };
              c.arrayToObject = function(O, D) {
                for (var L = D && D.plainObjects ? Object.create(null) : {}, u = 0; u < O.length; ++u)
                  O[u] !== void 0 && (L[u] = O[u]);
                return L;
              }, c.merge = function(O, D, L) {
                if (!D)
                  return O;
                if (typeof D != "object") {
                  if (Array.isArray(O))
                    O.push(D);
                  else {
                    if (typeof O != "object")
                      return [O, D];
                    (L.plainObjects || L.allowPrototypes || !A.call(Object.prototype, D)) && (O[D] = true);
                  }
                  return O;
                }
                if (typeof O != "object")
                  return [O].concat(D);
                var u = O;
                return Array.isArray(O) && !Array.isArray(D) && (u = c.arrayToObject(O, L)), Array.isArray(O) && Array.isArray(D) ? (D.forEach(function(y, p) {
                  A.call(O, p) ? O[p] && typeof O[p] == "object" ? O[p] = c.merge(O[p], y, L) : O.push(y) : O[p] = y;
                }), O) : Object.keys(D).reduce(function(y, p) {
                  var g = D[p];
                  return A.call(y, p) ? y[p] = c.merge(y[p], g, L) : y[p] = g, y;
                }, u);
              }, c.assign = function(O, D) {
                return Object.keys(D).reduce(function(L, u) {
                  return L[u] = D[u], L;
                }, O);
              }, c.decode = function(O) {
                try {
                  return decodeURIComponent(O.replace(/\+/g, " "));
                } catch {
                  return O;
                }
              }, c.encode = function(O) {
                if (O.length === 0)
                  return O;
                for (var D = typeof O == "string" ? O : String(O), L = "", u = 0; u < D.length; ++u) {
                  var y = D.charCodeAt(u);
                  y === 45 || y === 46 || y === 95 || y === 126 || y >= 48 && y <= 57 || y >= 65 && y <= 90 || y >= 97 && y <= 122 ? L += D.charAt(u) : y < 128 ? L += _[y] : y < 2048 ? L += _[192 | y >> 6] + _[128 | 63 & y] : y < 55296 || y >= 57344 ? L += _[224 | y >> 12] + _[128 | y >> 6 & 63] + _[128 | 63 & y] : (u += 1, y = 65536 + ((1023 & y) << 10 | 1023 & D.charCodeAt(u)), L += _[240 | y >> 18] + _[128 | y >> 12 & 63] + _[128 | y >> 6 & 63] + _[128 | 63 & y]);
                }
                return L;
              }, c.compact = function(O) {
                for (var D = [{ obj: { o: O }, prop: "o" }], L = [], u = 0; u < D.length; ++u)
                  for (var y = D[u], p = y.obj[y.prop], g = Object.keys(p), T = 0; T < g.length; ++T) {
                    var x = g[T], r = p[x];
                    typeof r == "object" && r !== null && L.indexOf(r) === -1 && (D.push({ obj: p, prop: x }), L.push(r));
                  }
                return M(D);
              }, c.isRegExp = function(O) {
                return Object.prototype.toString.call(O) === "[object RegExp]";
              }, c.isBuffer = function(O) {
                return O != null && !!(O.constructor && O.constructor.isBuffer && O.constructor.isBuffer(O));
              };
            }, function(I, c, R) {
              "use strict";
              var A = String.prototype.replace, _ = /%20/g;
              I.exports = { default: "RFC3986", formatters: { RFC1738: function(M) {
                return A.call(M, _, "+");
              }, RFC3986: function(M) {
                return M;
              } }, RFC1738: "RFC1738", RFC3986: "RFC3986" };
            }, function(I, c, R) {
              "use strict";
              function A(x) {
                return x && x.__esModule ? x : { default: x };
              }
              function _(x) {
                var r = {};
                for (var e in x)
                  x.hasOwnProperty(e) && (r[x[e]] = e);
                return r;
              }
              function M(x) {
                var r = {}, e = {};
                return Object.keys(x).forEach(function(t) {
                  var i = false;
                  if (x.hasOwnProperty(t) && x[t] !== void 0) {
                    var d = t.split("_"), s = d[0], f = p[s];
                    f || (D.default.info("Data key word `" + d[0] + "` not expected in " + t), f = s + "_"), d.splice(1).forEach(function(v) {
                      v === "url" && (i = true), T[v] ? f += T[v] : Number(v) && Math.floor(Number(v)) === Number(v) ? f += v : (D.default.info("Data key word `" + v + "` not expected in " + t), f += "_" + v + "_");
                    }), i ? e[f] = x[t] : r[f] = x[t];
                  }
                }), (0, u.default)(r, e);
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = M;
              var O = R(4), D = A(O), L = R(2), u = A(L), y = { a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" }, p = _(y), g = { ad: "ad", ag: "aggregate", ap: "api", al: "application", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", br: "break", bw: "browser", by: "bytes", ca: "cached", cb: "cancel", cd: "code", cg: "category", ch: "changed", cn: "config", co: "count", ce: "counter", cp: "complete", cr: "creative", ct: "content", cu: "current", cx: "connection", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", du: "duration", dv: "device", ec: "encoding", en: "end", eg: "engine", em: "embed", er: "error", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", fi: "first", fm: "family", ft: "format", fq: "frequency", fr: "frame", fs: "fullscreen", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pr: "preload", ps: "position", pt: "part", py: "property", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", se: "session", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", st: "start", su: "startup", sv: "server", sw: "software", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" }, T = _(g);
            }, function(I, c, R) {
              "use strict";
              I.exports = R(16).default;
            }, function(I, c, R) {
              "use strict";
              function A(v) {
                return v && v.__esModule ? v : { default: v };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = function() {
                function v(h, l) {
                  var o = [], n = true, a = false, E = void 0;
                  try {
                    for (var m, S = h[Symbol.iterator](); !(n = (m = S.next()).done) && (o.push(m.value), !l || o.length !== l); n = true)
                      ;
                  } catch (P) {
                    a = true, E = P;
                  } finally {
                    try {
                      !n && S.return && S.return();
                    } finally {
                      if (a)
                        throw E;
                    }
                  }
                  return o;
                }
                return function(h, l) {
                  if (Array.isArray(h))
                    return h;
                  if (Symbol.iterator in Object(h))
                    return v(h, l);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
              }(), M = R(0), O = A(M), D = R(8), L = R(4), u = A(L), y = R(9), p = A(y), g = R(1), T = A(g), x = R(19), r = A(x), e = R(45), t = A(e), i = R(46), d = A(i), s = {}, f = function v(h) {
                var l = arguments;
                typeof h == "string" ? v.hasOwnProperty(h) ? O.default.setTimeout(function() {
                  l = Array.prototype.splice.call(l, 1), v[h].apply(null, l);
                }, 0) : u.default.warn("`" + h + "` is an unknown task") : typeof h == "function" ? O.default.setTimeout(function() {
                  h(v);
                }, 0) : u.default.warn("`" + h + "` is invalid.");
              };
              f.loaded = T.default.now(), f.NAME = "mux-embed", f.VERSION = "4.3.0", f.API_VERSION = "2.1", f.PLAYER_TRACKED = false, f.monitor = function(v, h) {
                return (0, t.default)(f, v, h);
              }, f.destroyMonitor = function(v) {
                var h = (0, D.findMediaElement)(v), l = _(h, 1), o = l[0];
                o && o.mux && typeof o.mux.destroy == "function" ? o.mux.destroy() : u.default.error("A video element monitor for `" + v + "` has not been initialized via `mux.monitor`.");
              }, f.addHLSJS = function(v, h) {
                var l = (0, D.getMuxPlayerId)(v);
                s[l] ? s[l].addHLSJS(h) : u.default.error("A monitor for `" + l + "` has not been initialized.");
              }, f.addDashJS = function(v, h) {
                var l = (0, D.getMuxPlayerId)(v);
                s[l] ? s[l].addDashJS(h) : u.default.error("A monitor for `" + l + "` has not been initialized.");
              }, f.removeHLSJS = function(v) {
                var h = (0, D.getMuxPlayerId)(v);
                s[h] ? s[h].removeHLSJS() : u.default.error("A monitor for `" + h + "` has not been initialized.");
              }, f.removeDashJS = function(v) {
                var h = (0, D.getMuxPlayerId)(v);
                s[h] ? s[h].removeDashJS() : u.default.error("A monitor for `" + h + "` has not been initialized.");
              }, f.init = function(v, h) {
                (0, p.default)() && h && h.respectDoNotTrack && u.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
                var l = (0, D.getMuxPlayerId)(v);
                s[l] = new r.default(f, l, h);
              }, f.emit = function(v, h, l) {
                var o = (0, D.getMuxPlayerId)(v);
                s[o] ? (s[o].emit(h, l), h === "destroy" && delete s[o]) : u.default.error("A monitor for `" + o + "` has not been initialized.");
              }, O.default !== void 0 && typeof O.default.addEventListener == "function" && O.default.addEventListener("unload", function() {
                f.WINDOW_UNLOADING = true;
              }, false), f.checkDoNotTrack = p.default, f.log = u.default, f.utils = d.default, c.default = f;
            }, function(I, c) {
              var R;
              R = function() {
                return this;
              }();
              try {
                R = R || Function("return this")() || (0, eval)("this");
              } catch {
                typeof window == "object" && (R = window);
              }
              I.exports = R;
            }, function(I, c, R) {
              var A, _;
              (function(M, O) {
                "use strict";
                A = O, (_ = typeof A == "function" ? A.call(c, R, c, I) : A) !== void 0 && (I.exports = _);
              })(0, function() {
                "use strict";
                function M(d, s) {
                  var f = d[s];
                  if (typeof f.bind == "function")
                    return f.bind(d);
                  try {
                    return Function.prototype.bind.call(f, d);
                  } catch {
                    return function() {
                      return Function.prototype.apply.apply(f, [d, arguments]);
                    };
                  }
                }
                function O() {
                  console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
                }
                function D(d) {
                  return d === "debug" && (d = "log"), typeof console !== T && (d === "trace" && x ? O : console[d] !== void 0 ? M(console, d) : console.log !== void 0 ? M(console, "log") : g);
                }
                function L(d, s) {
                  for (var f = 0; f < r.length; f++) {
                    var v = r[f];
                    this[v] = f < d ? g : this.methodFactory(v, d, s);
                  }
                  this.log = this.debug;
                }
                function u(d, s, f) {
                  return function() {
                    typeof console !== T && (L.call(this, s, f), this[d].apply(this, arguments));
                  };
                }
                function y(d, s, f) {
                  return D(d) || u.apply(this, arguments);
                }
                function p(d, s, f) {
                  function v(E) {
                    var m = (r[E] || "silent").toUpperCase();
                    if (typeof window !== T && n) {
                      try {
                        return void (window.localStorage[n] = m);
                      } catch {
                      }
                      try {
                        window.document.cookie = encodeURIComponent(n) + "=" + m + ";";
                      } catch {
                      }
                    }
                  }
                  function h() {
                    var E;
                    if (typeof window !== T && n) {
                      try {
                        E = window.localStorage[n];
                      } catch {
                      }
                      if (typeof E === T)
                        try {
                          var m = window.document.cookie, S = m.indexOf(encodeURIComponent(n) + "=");
                          S !== -1 && (E = /^([^;]+)/.exec(m.slice(S))[1]);
                        } catch {
                        }
                      return o.levels[E] === void 0 && (E = void 0), E;
                    }
                  }
                  var l, o = this, n = "loglevel";
                  typeof d == "string" ? n += ":" + d : typeof d == "symbol" && (n = void 0), o.name = d, o.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, o.methodFactory = f || y, o.getLevel = function() {
                    return l;
                  }, o.setLevel = function(E, m) {
                    if (typeof E == "string" && o.levels[E.toUpperCase()] !== void 0 && (E = o.levels[E.toUpperCase()]), !(typeof E == "number" && E >= 0 && E <= o.levels.SILENT))
                      throw "log.setLevel() called with invalid level: " + E;
                    if (l = E, m !== false && v(E), L.call(o, E, d), typeof console === T && E < o.levels.SILENT)
                      return "No console available for logging";
                  }, o.setDefaultLevel = function(E) {
                    h() || o.setLevel(E, false);
                  }, o.enableAll = function(E) {
                    o.setLevel(o.levels.TRACE, E);
                  }, o.disableAll = function(E) {
                    o.setLevel(o.levels.SILENT, E);
                  };
                  var a = h();
                  a == null && (a = s == null ? "WARN" : s), o.setLevel(a, false);
                }
                var g = function() {
                }, T = "undefined", x = typeof window !== T && typeof window.navigator !== T && /Trident\/|MSIE /.test(window.navigator.userAgent), r = ["trace", "debug", "info", "warn", "error"], e = new p(), t = {};
                e.getLogger = function(d) {
                  if (typeof d != "symbol" && typeof d != "string" || d === "")
                    throw new TypeError("You must supply a name when creating a logger.");
                  var s = t[d];
                  return s || (s = t[d] = new p(d, e.getLevel(), e.methodFactory)), s;
                };
                var i = typeof window !== T ? window.log : void 0;
                return e.noConflict = function() {
                  return typeof window !== T && window.log === e && (window.log = i), e;
                }, e.getLoggers = function() {
                  return t;
                }, e.default = e, e;
              });
            }, function(I, c, R) {
              "use strict";
              function A(z) {
                return z && z.__esModule ? z : { default: z };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = function() {
                function z(V, Y) {
                  var te = [], ae = true, ne = false, oe = void 0;
                  try {
                    for (var ue, ie = V[Symbol.iterator](); !(ae = (ue = ie.next()).done) && (te.push(ue.value), !Y || te.length !== Y); ae = true)
                      ;
                  } catch (ee) {
                    ne = true, oe = ee;
                  } finally {
                    try {
                      !ae && ie.return && ie.return();
                    } finally {
                      if (ne)
                        throw oe;
                    }
                  }
                  return te;
                }
                return function(V, Y) {
                  if (Array.isArray(V))
                    return V;
                  if (Symbol.iterator in Object(V))
                    return z(V, Y);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
              }(), M = R(4), O = A(M), D = R(2), L = A(D), u = R(6), y = R(5), p = R(0), g = A(p), T = R(10), x = A(T), r = R(3), e = A(r), t = R(20), i = R(21), d = R(22), s = A(d), f = R(23), v = A(f), h = R(24), l = A(h), o = R(25), n = A(o), a = R(26), E = A(a), m = R(27), S = A(m), P = R(28), b = A(P), C = R(29), B = A(C), F = R(30), U = A(F), w = R(31), k = A(w), W = R(32), K = A(W), j = R(33), G = A(j), H = R(34), J = A(H), Q = R(35), Z = A(Q), $ = R(44), q = A($), se = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"], X = function(z, V, Y) {
                var te = this;
                this.DOM_CONTENT_LOADED_EVENT_END = x.default.domContentLoadedEventEnd(), this.NAVIGATION_START = x.default.navigationStart();
                var ae = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1e3, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, errorTranslator: function(ee) {
                  return ee;
                } };
                this.mux = z, this.id = V, Y = (0, L.default)(ae, Y), Y.data = Y.data || {}, Y.data.property_key && (Y.data.env_key = Y.data.property_key, delete Y.data.property_key), O.default.setLevel(Y.debug ? "debug" : "warn"), this.getPlayheadTime = Y.getPlayheadTime, this.getStateData = Y.getStateData || function() {
                }, this.getAdData = Y.getAdData || function() {
                }, this.minimumRebufferDuration = Y.minimumRebufferDuration, this.sustainedRebufferThreshold = Y.sustainedRebufferThreshold, this.playbackHeartbeatTime = Y.playbackHeartbeatTime, this.disableRebufferTracking = Y.disableRebufferTracking, this.disableRebufferTracking && this.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), this.errorTranslator = Y.errorTranslator, this.playbackEventDispatcher = new Z.default(z, Y.data.env_key, Y), this.data = { player_instance_id: (0, u.generateUUID)(), mux_sample_rate: Y.sampleRate, beacon_domain: Y.beaconDomain }, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function(ee, re) {
                  re = (0, L.default)({ viewer_time: this.mux.utils.now() }, re), this.oldEmit(ee, re);
                };
                var ne = function() {
                  this.data.view_start === void 0 && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
                }.bind(this);
                this.on("viewinit", function(ee, re) {
                  this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, L.default)(this.data, re), this._initializeViewData(), this.one("play", ne), this.one("adbreakstart", ne);
                });
                var oe = function(ee) {
                  this.emit("viewend"), this.send("viewend"), this.emit("viewinit", ee);
                }.bind(this);
                this.on("videochange", function(ee, re) {
                  oe(re);
                }), this.on("programchange", function(ee, re) {
                  this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), oe((0, L.default)(re, { view_program_changed: true })), ne(), this.emit("play"), this.emit("playing");
                }), this.on("fragmentchange", function(ee, re) {
                  this.currentFragmentPDT = re.currentFragmentPDT, this.currentFragmentStart = re.currentFragmentStart;
                }), this.on("destroy", this.destroy);
                var ue = this.destroy.bind(this);
                g.default !== void 0 && typeof g.default.addEventListener == "function" && g.default.addEventListener("unload", ue, false), this.on("destroy", function() {
                  g.default !== void 0 && typeof g.default.removeEventListener == "function" && g.default.removeEventListener("unload", ue);
                }), this.on("playerready", function(ee, re) {
                  (0, L.default)(this.data, re);
                }), se.forEach(function(ee) {
                  te.on(ee, function(re, ge) {
                    ee.indexOf("ad") !== 0 && this._updateStateData(), (0, L.default)(this.data, ge), this._sanitizeData();
                  }), te.on("after" + ee, function() {
                    (ee !== "error" || this.viewErrored) && this.send(ee);
                  });
                }), this.on("viewend", function(ee, re) {
                  (0, L.default)(te.data, re);
                });
                var ie = function(ee) {
                  var re = this.mux.utils.now();
                  this.data.player_init_time && (this.data.player_startup_time = re - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = true, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
                };
                this.one("playerready", ie), l.default.apply(this), J.default.apply(this), k.default.apply(this), S.default.apply(this), v.default.apply(this), U.default.apply(this), n.default.apply(this), E.default.apply(this), K.default.apply(this), b.default.apply(this), B.default.apply(this), G.default.apply(this), q.default.apply(this), Y.hlsjs && this.addHLSJS(Y), Y.dashjs && this.addDashJS(Y), this.emit("viewinit", Y.data);
              };
              (0, L.default)(X.prototype, s.default.prototype), (0, L.default)(X.prototype, S.default.prototype), (0, L.default)(X.prototype, k.default.prototype), (0, L.default)(X.prototype, v.default.prototype), (0, L.default)(X.prototype, n.default.prototype), (0, L.default)(X.prototype, E.default.prototype), (0, L.default)(X.prototype, K.default.prototype), (0, L.default)(X.prototype, b.default.prototype), (0, L.default)(X.prototype, B.default.prototype), X.prototype.destroy = function() {
                this._destroyed || (this._destroyed = true, this.data.view_start !== void 0 && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), g.default.clearTimeout(this._heartBeatTimeout));
              }, X.prototype.send = function(z) {
                var V = (0, L.default)({}, this.data);
                if (V.player_error_code === 1 && (delete V.player_error_code, delete V.player_error_message), V.player_source_duration === 1 / 0 || V.video_source_duration === 1 / 0 ? V.video_source_is_live = true : (V.player_source_duration > 0 || V.video_source_duration > 0) && (V.video_source_is_live = false), V.video_source_url = V.video_source_url || V.player_source_url, V.video_source_url) {
                  var Y = (0, y.extractHostnameAndDomain)(V.video_source_url), te = _(Y, 2), ae = te[0], ne = te[1];
                  V.video_source_domain = ne, V.video_source_hostname = ae;
                }
                delete V.ad_request_id, this.playbackEventDispatcher.send(z, V), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat();
              }, X.prototype._updateStateData = function() {
                (0, L.default)(this.data, this.getStateData()), this._updatePlayheadTime(), this._sanitizeData();
              }, X.prototype._sanitizeData = function() {
                var z = this;
                ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(V) {
                  var Y = parseInt(z.data[V], 10);
                  z.data[V] = isNaN(Y) ? void 0 : Y;
                }), ["player_source_url", "video_source_url"].forEach(function(V) {
                  if (z.data[V]) {
                    var Y = z.data[V].toLowerCase();
                    Y.indexOf("data:") !== 0 && Y.indexOf("blob:") !== 0 || (z.data[V] = "MSE style URL");
                  }
                });
              }, X.prototype._resetVideoData = function(z, V) {
                var Y = this;
                Object.keys(this.data).forEach(function(te) {
                  te.indexOf("video_") === 0 && delete Y.data[te];
                });
              }, X.prototype._resetViewData = function() {
                var z = this;
                Object.keys(this.data).forEach(function(V) {
                  V.indexOf("view_") === 0 && delete z.data[V];
                }), this.data.view_sequence_number = 1;
              }, X.prototype._resetErrorData = function(z, V) {
                delete this.data.player_error_code, delete this.data.player_error_message;
              }, X.prototype._initializeViewData = function() {
                var z = this, V = this.data.view_id = (0, u.generateUUID)(), Y = function() {
                  V === z.data.view_id && (0, e.default)(z.data, "player_view_count", 1);
                };
                this.data.player_is_paused ? this.one("play", Y) : Y();
              }, X.prototype._restartHeartBeat = function() {
                var z = this;
                g.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = g.default.setTimeout(function() {
                  z.data.player_is_paused || z.emit("hb");
                }, 1e4));
              }, X.prototype.addHLSJS = function(z) {
                return z.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = z.hlsjs, void (0, t.monitorHlsJs)(this.mux, this.id, z.hlsjs, {}, z.Hls || g.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
              }, X.prototype.removeHLSJS = function() {
                this.hlsjs && ((0, t.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0);
              }, X.prototype.addDashJS = function(z) {
                return z.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = z.dashjs, void (0, i.monitorDashJS)(this.mux, this.id, z.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
              }, X.prototype.removeDashJS = function() {
                this.dashjs && ((0, i.stopMonitoringDashJS)(this.dashjs), this.dashjs = void 0);
              }, c.default = X;
            }, function(I, c, R) {
              "use strict";
              function A(T) {
                return T && T.__esModule ? T : { default: T };
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.stopMonitoringHlsJs = c.monitorHlsJs = void 0;
              var _ = R(7), M = A(_), O = R(10), D = A(O), L = R(5), u = function(T) {
                if (!T)
                  return {};
                var x = D.default.navigationStart(), r = T.loading, e = r ? r.start : T.trequest, t = r ? r.first : T.tfirst, i = r ? r.end : T.tload;
                return { bytesLoaded: T.total, requestStart: Math.round(x + e), responseStart: Math.round(x + t), responseEnd: Math.round(x + i) };
              }, y = function(T) {
                if (T && typeof T.getAllResponseHeaders == "function")
                  return (0, M.default)(T.getAllResponseHeaders());
              }, p = function(T, x, r) {
                var e = (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], arguments[4]), t = T.log, i = T.utils.secondsToMs, d = function(m) {
                  var S = parseInt(e.version), P = void 0;
                  return S === 1 && m.programDateTime !== null && (P = m.programDateTime), S === 0 && m.pdt !== null && (P = m.pdt), P;
                };
                if (!D.default.exists())
                  return void t.warn("performance timing not supported. Not tracking HLS.js.");
                var s = function(m, S) {
                  return T.emit(x, m, S);
                }, f = function(m, S) {
                  var P = S.levels, b = S.audioTracks, C = S.url, B = S.stats, F = S.networkDetails, U = {}, w = {};
                  P.forEach(function(H, J) {
                    U[J] = { width: H.width, height: H.height, bitrate: H.bitrate, attrs: H.attrs };
                  }), b.forEach(function(H, J) {
                    w[J] = { name: H.name, language: H.lang, bitrate: H.bitrate };
                  });
                  var k = u(B), W = k.bytesLoaded, K = k.requestStart, j = k.responseStart, G = k.responseEnd;
                  s("requestcompleted", { request_event_type: m, request_bytes_loaded: W, request_start: K, request_response_start: j, request_response_end: G, request_type: "manifest", request_hostname: (0, L.extractHostname)(C), request_response_headers: y(F), request_rendition_lists: { media: U, audio: w, video: {} } });
                };
                r.on(e.Events.MANIFEST_LOADED, f);
                var v = function(m, S) {
                  var P = S.details, b = S.level, C = S.networkDetails, B = S.stats, F = u(B), U = F.bytesLoaded, w = F.requestStart, k = F.responseStart, W = F.responseEnd, K = P.fragments[P.fragments.length - 1], j = d(K) + i(K.duration);
                  s("requestcompleted", { request_event_type: m, request_bytes_loaded: U, request_start: w, request_response_start: k, request_response_end: W, request_current_level: b, request_type: "manifest", request_hostname: (0, L.extractHostname)(P.url), request_response_headers: y(C), video_holdback: P.holdBack && i(P.holdBack), video_part_holdback: P.partHoldBack && i(P.partHoldBack), video_part_target_duration: P.partTarget && i(P.partTarget), video_target_duration: P.targetduration && i(P.targetduration), player_manifest_newest_program_time: isNaN(j) ? void 0 : j });
                };
                r.on(e.Events.LEVEL_LOADED, v);
                var h = function(m, S) {
                  var P = S.details, b = S.networkDetails, C = S.stats, B = u(C), F = B.bytesLoaded, U = B.requestStart, w = B.responseStart, k = B.responseEnd;
                  s("requestcompleted", { request_event_type: m, request_bytes_loaded: F, request_start: U, request_response_start: w, request_response_end: k, request_type: "manifest", request_hostname: (0, L.extractHostname)(P.url), request_response_headers: y(b) });
                };
                r.on(e.Events.AUDIO_TRACK_LOADED, h);
                var l = function(m, S) {
                  var P = S.stats, b = S.networkDetails, C = S.frag, B = u(P), F = B.bytesLoaded, U = B.requestStart, w = B.responseStart, k = B.responseEnd, W = { request_event_type: m, request_bytes_loaded: F, request_start: U, request_response_start: w, request_response_end: k, request_hostname: b ? (0, L.extractHostname)(b.responseURL) : void 0, request_response_headers: y(b), request_media_duration: C.duration };
                  C.type === "main" ? (W.request_type = "media", W.request_current_level = C.level, W.request_video_width = (r.levels[C.level] || {}).width, W.request_video_height = (r.levels[C.level] || {}).height) : W.request_type = C.type, s("requestcompleted", W);
                };
                r.on(e.Events.FRAG_LOADED, l);
                var o = function(m, S) {
                  var P = S.frag, b = P.start, C = d(P), B = { currentFragmentPDT: C, currentFragmentStart: i(b) };
                  s("fragmentchange", B);
                };
                r.on(e.Events.FRAG_CHANGED, o);
                var n = function(m, S) {
                  var P = S.details, b = S.response, C = S.context, B = S.frag;
                  if (P === e.ErrorDetails.MANIFEST_LOAD_ERROR || P === e.ErrorDetails.MANIFEST_LOAD_TIMEOUT || P === e.ErrorDetails.FRAG_LOAD_ERROR || P === e.ErrorDetails.FRAG_LOAD_TIMEOUT || P === e.ErrorDetails.LEVEL_LOAD_ERROR || P === e.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                    var F = B && B.url || C && C.url || "";
                    s("requestfailed", { request_error: P, request_url: F, request_hostname: (0, L.extractHostname)(F), request_type: P === e.ErrorDetails.FRAG_LOAD_ERROR || P === e.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest", request_error_code: b && b.code, request_error_text: b && b.text });
                  }
                };
                r.on(e.Events.ERROR, n);
                var a = function(m, S) {
                  var P = S.frag, b = P && P._url || "";
                  s("requestcanceled", { request_cancel: m, request_url: b, request_type: "media", request_hostname: (0, L.extractHostname)(b) });
                };
                r.on(e.Events.FRAG_LOAD_EMERGENCY_ABORTED, a);
                var E = function(m, S) {
                  var P = S.level, b = r.levels[P];
                  if (b && b.attrs && b.attrs.BANDWIDTH) {
                    var C = b.attrs.BANDWIDTH;
                    C ? s("renditionchange", { video_source_bitrate: C, video_source_width: b.width, video_source_height: b.height }) : t.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                  }
                };
                r.on(e.Events.LEVEL_SWITCHED, E), r._stopMuxMonitor = function() {
                  r.off(e.Events.MANIFEST_LOADED, f), r.off(e.Events.LEVEL_LOADED, v), r.off(e.Events.AUDIO_TRACK_LOADED, h), r.off(e.Events.FRAG_LOADED, l), r.off(e.Events.FRAG_CHANGED, o), r.off(e.Events.ERROR, n), r.off(e.Events.FRAG_LOAD_EMERGENCY_ABORTED, a), r.off(e.Events.LEVEL_SWITCHED, E), r.off(e.Events.DESTROYING, r._stopMuxMonitor), delete r._stopMuxMonitor;
                }, r.on(e.Events.DESTROYING, r._stopMuxMonitor);
              }, g = function(T) {
                T && typeof T._stopMuxMonitor == "function" && T._stopMuxMonitor();
              };
              c.monitorHlsJs = p, c.stopMonitoringHlsJs = g;
            }, function(I, c, R) {
              "use strict";
              function A(T) {
                return T && T.__esModule ? T : { default: T };
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.stopMonitoringDashJS = c.monitorDashJS = void 0;
              var _ = R(0), M = A(_), O = R(7), D = A(O), L = R(5), u = function(T, x) {
                if (!T || typeof T.getRequests != "function")
                  return {};
                var r = T.getRequests({ state: "executed" });
                if (r.length === 0)
                  return {};
                var e = r[r.length - 1], t = (0, L.extractHostname)(e.url), i = e.bytesLoaded, d = new Date(e.requestStartDate).getTime(), s = new Date(e.firstByteDate).getTime(), f = new Date(e.requestEndDate).getTime(), v = isNaN(e.duration) ? 0 : e.duration, h = typeof x.getMetricsFor == "function" ? x.getMetricsFor(e.mediaType).HttpList : x.getDashMetrics().getHttpRequests(e.mediaType), l = void 0;
                return h.length > 0 && (l = (0, D.default)(h[h.length - 1]._responseHeaders || "")), { requestStart: d, requestResponseStart: s, requestResponseEnd: f, requestBytesLoaded: i, requestResponseHeaders: l, requestMediaDuration: v, requestHostname: t };
              }, y = function(T, x) {
                var r = x.getQualityFor(T), e = x.getCurrentTrackFor(T), t = e.bitrateList;
                return t ? { currentLevel: r, renditionWidth: t[r].width || null, renditionHeight: t[r].height || null, renditionBitrate: t[r].bandwidth } : {};
              }, p = function(T, x, r) {
                var e = (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], T.log);
                if (!r || !r.on)
                  return void e.warn("Invalid dash.js player reference. Monitoring blocked.");
                var t = function(n, a) {
                  return T.emit(x, n, a);
                }, i = function(n) {
                  var a = n.type, E = n.data, m = E || {}, S = m.url;
                  t("requestcompleted", { request_event_type: a, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: (0, L.extractHostname)(S) });
                };
                r.on("manifestLoaded", i);
                var d = {}, s = function(n) {
                  var a = n.type, E = n.fragmentModel, m = n.chunk, S = m || {}, P = S.mediaInfo, b = P || {}, C = b.type, B = b.bitrateList;
                  B = B || [];
                  var F = {};
                  B.forEach(function(H, J) {
                    F[J] = {}, F[J].width = H.width, F[J].height = H.height, F[J].bitrate = H.bandwidth, F[J].attrs = {};
                  }), C === "video" ? d.video = F : C === "audio" ? d.audio = F : d.media = F;
                  var U = u(E, r), w = U.requestStart, k = U.requestResponseStart, W = U.requestResponseEnd, K = U.requestResponseHeaders, j = U.requestMediaDuration, G = U.requestHostname;
                  t("requestcompleted", { request_event_type: a, request_start: w, request_response_start: k, request_response_end: W, request_bytes_loaded: -1, request_type: C + "_init", request_response_headers: K, request_hostname: G, request_media_duration: j, request_rendition_lists: d });
                };
                r.on("initFragmentLoaded", s);
                var f = function(n) {
                  var a = n.type, E = n.fragmentModel, m = n.chunk, S = m || {}, P = S.mediaInfo, b = S.start, C = P || {}, B = C.type, F = u(E, r), U = F.requestStart, w = F.requestResponseStart, k = F.requestResponseEnd, W = F.requestBytesLoaded, K = F.requestResponseHeaders, j = F.requestMediaDuration, G = F.requestHostname, H = y(B, r), J = H.currentLevel, Q = H.renditionWidth, Z = H.renditionHeight, $ = H.renditionBitrate;
                  t("requestcompleted", { request_event_type: a, request_start: U, request_response_start: w, request_response_end: k, request_bytes_loaded: W, request_type: B, request_response_headers: K, request_hostname: G, request_media_start_time: b, request_media_duration: j, request_current_level: J, request_labeled_bitrate: $, request_video_width: Q, request_video_height: Z });
                };
                r.on("mediaFragmentLoaded", f);
                var v = { video: void 0, audio: void 0, totalBitrate: void 0 }, h = function() {
                  if (v.video && typeof v.video.bitrate == "number") {
                    if (!v.video.width || !v.video.height)
                      return void e.warn("have bitrate info for video but missing width/height");
                    var n = v.video.bitrate;
                    return v.audio && typeof v.audio.bitrate == "number" && (n += v.audio.bitrate), n !== v.totalBitrate ? (v.totalBitrate = n, { video_source_bitrate: n, video_source_height: v.video.height, video_source_width: v.video.width }) : void 0;
                  }
                }, l = function(n, a, E) {
                  if (typeof n.newQuality != "number")
                    return void e.warn("missing evt.newQuality in qualityChangeRendered event", n);
                  var m = n.mediaType;
                  if (m === "audio" || m === "video") {
                    var S = r.getBitrateInfoListFor(m).find(function(b) {
                      return b.qualityIndex === n.newQuality;
                    });
                    if (!S || typeof S.bitrate != "number")
                      return void e.warn("missing bitrate info for " + m);
                    v[m] = S;
                    var P = h();
                    P && t("renditionchange", P);
                  }
                };
                r.on("qualityChangeRendered", l);
                var o = function(n) {
                  var a = n.error, E = n.event;
                  E = E || {};
                  var m = E.request || {}, S = M.default.event && M.default.event.currentTarget || {};
                  t("requestfailed", { request_error: a + "_" + E.id + "_" + m.type, request_url: E.url, request_hostname: (0, L.extractHostname)(E.url), request_type: m.mediaType, request_error_code: S.status, request_error_type: S.statusText });
                };
                r.on("error", o), r._stopMuxMonitor = function() {
                  r.off("manifestLoaded", i), r.off("initFragmentLoaded", s), r.off("mediaFragmentLoaded", f), r.off("qualityChangeRendered", l), r.off("error", o), delete r._stopMuxMonitor;
                };
              }, g = function(T) {
                T && typeof T._stopMuxMonitor == "function" && T._stopMuxMonitor();
              };
              c.monitorDashJS = p, c.stopMonitoringDashJS = g;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = function() {
              }, _ = 0;
              A.prototype.on = function(M, O, D) {
                return O._eventEmitterGuid = O._eventEmitterGuid || ++_, this._listeners = this._listeners || {}, this._listeners[M] = this._listeners[M] || [], D && (O = O.bind(D)), this._listeners[M].push(O), O;
              }, A.prototype.off = function(M, O) {
                var D = this._listeners && this._listeners[M];
                D && D.forEach(function(L, u) {
                  L._eventEmitterGuid === O._eventEmitterGuid && D.splice(u, 1);
                });
              }, A.prototype.one = function(M, O, D) {
                var L = this;
                O._eventEmitterGuid = O._eventEmitterGuid || ++_;
                var u = function y() {
                  L.off(M, y), O.apply(D || this, arguments);
                };
                u._eventEmitterGuid = O._eventEmitterGuid, this.on(M, u);
              }, A.prototype.emit = function(M, O) {
                var D = this;
                if (this._listeners) {
                  O = O || {};
                  var L = this._listeners["before*"] || [], u = this._listeners[M] || [], y = this._listeners["after" + M] || [], p = function(g, T) {
                    g = g.slice(), g.forEach(function(x) {
                      x.call(D, { type: M }, T);
                    });
                  };
                  p(L, O), p(u, O), p(y, O);
                }
              }, c.default = A;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(0), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = function() {
                this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = false, this.on("playing", function() {
                  this._playheadShouldBeProgressing = true;
                }), this.on("play", this._startPlaybackHeartbeatInterval), this.on("playing", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("adplaying", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("viewstart", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("aderror", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adended", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", function() {
                  this.data.player_is_paused ? this._stopPlaybackHeartbeatInterval() : this._startPlaybackHeartbeatInterval();
                }), this.on("timeupdate", function() {
                  this._playbackHeartbeatInterval !== null && this.emit("playbackheartbeat");
                }), this.on("devicesleep", function(O, D) {
                  this._playbackHeartbeatInterval !== null && (_.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", { viewer_time: D.viewer_time }), this._playbackHeartbeatInterval = null);
                });
              };
              M.prototype._startPlaybackHeartbeatInterval = function() {
                var O = this;
                this._playbackHeartbeatInterval === null && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = _.default.setInterval(function() {
                  O.emit("playbackheartbeat");
                }, this.playbackHeartbeatTime));
              }, M.prototype._stopPlaybackHeartbeatInterval = function() {
                this._playheadShouldBeProgressing = false, this._playbackHeartbeatInterval !== null && (_.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
              }, c.default = M;
            }, function(I, c, R) {
              "use strict";
              function A() {
                var _ = this;
                this.on("viewinit", function() {
                  _.viewErrored = false;
                }), this.on("error", function() {
                  try {
                    var M = _.errorTranslator({ player_error_code: _.data.player_error_code, player_error_message: _.data.player_error_message });
                    M ? (_.data.player_error_code = M.player_error_code, _.data.player_error_message = M.player_error_message, _.viewErrored = true) : (delete _.data.player_error_code, delete _.data.player_error_message);
                  } catch (O) {
                    _.mux.log.warn("Exception in error translator callback.", O), _.viewErrored = true;
                  }
                });
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(3), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = function() {
                this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState);
              };
              M.prototype._updateWatchTime = function(O, D) {
                var L = D.viewer_time;
                this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = L), (0, _.default)(this.data, "view_watch_time", L - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = L;
              }, M.prototype._clearWatchTimeState = function(O, D) {
                this._updateWatchTime(O, D), this._watchTimeTrackerLastCheckedTime = null;
              }, c.default = M;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(3), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = function() {
                this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState);
              };
              M.prototype._updatePlaybackTime = function() {
                var O = this.data.player_playhead_time;
                if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && O > this._playbackTimeTrackerLastPlayheadPosition) {
                  var D = O - this._playbackTimeTrackerLastPlayheadPosition;
                  D <= 1e3 && (0, _.default)(this.data, "view_content_playback_time", D);
                }
                this._playbackTimeTrackerLastPlayheadPosition = O;
              }, M.prototype._clearPlaybackTimeState = function() {
                this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1;
              }, c.default = M;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = function() {
                this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", function() {
                  this.off("timeupdate", this._updatePlayheadTime);
                });
              };
              A.prototype._updateMaxPlayheadPosition = function() {
                this.data.view_max_playhead_position = this.data.view_max_playhead_position === void 0 ? this.data.player_playhead_time : Math.max(this.data.view_max_playhead_position, this.data.player_playhead_time);
              }, A.prototype._updatePlayheadTime = function(_, M) {
                if (M && M.player_playhead_time)
                  this.data.player_playhead_time = M.player_playhead_time, this.data.player_program_time = this.currentFragmentPDT && this.currentFragmentStart ? this.currentFragmentPDT + M.player_playhead_time - this.currentFragmentStart : void 0, this._updateMaxPlayheadPosition();
                else if (this.getPlayheadTime) {
                  var O = this.getPlayheadTime();
                  O !== void 0 && (this.data.player_playhead_time = O, this.data.player_program_time = this.currentFragmentPDT && this.currentFragmentStart ? this.currentFragmentPDT + O - this.currentFragmentStart : void 0, this._updateMaxPlayheadPosition());
                }
              }, c.default = A;
            }, function(I, c, R) {
              "use strict";
              function A(u) {
                return u && u.__esModule ? u : { default: u };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = R(1), M = A(_), O = R(3), D = A(O), L = function() {
                this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", function() {
                  this._cleanupRebufferTracker(null, { viewer_time: M.default.now() });
                });
              };
              L.prototype._checkIfRebuffering = function(u, y) {
                if (!this.disableRebufferTracking) {
                  if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing)
                    return void this._cleanupRebufferTracker(u, y);
                  if (this._lastCheckedTime === null)
                    return this._prepareRebufferTrackerState(y.viewer_time), void this._updateRebufferMetrics();
                  if (this._lastPlayheadTime !== this.data.player_playhead_time)
                    return void this._cleanupRebufferTracker(u, y, true);
                  var p = y.viewer_time - this._lastPlayheadTimeUpdatedTime;
                  p >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(y.viewer_time - this._lastCheckedTime) : (this._rebuffering = true, (0, D.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(p), this.emit("rebufferstart"))), this._lastCheckedTime = y.viewer_time;
                }
              }, L.prototype._clearRebufferTrackerState = function() {
                this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
              }, L.prototype._prepareRebufferTrackerState = function(u) {
                this._lastCheckedTime = u, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = u;
              }, L.prototype._cleanupRebufferTracker = function(u, y) {
                var p = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                if (!this.disableRebufferTracking) {
                  if (this._rebuffering)
                    this._rebuffering = false, this._updateRebufferMetrics(y.viewer_time - this._lastCheckedTime), this.emit("rebufferend", { viewer_time: y.viewer_time });
                  else {
                    if (this._lastCheckedTime === null)
                      return void this._updateRebufferMetrics();
                    var g = this.data.player_playhead_time - this._lastPlayheadTime, T = y.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    g > 0 && T - g > this.minimumRebufferDuration ? ((0, D.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(T - g), this.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }), this.emit("rebufferend", { viewer_time: this._lastPlayheadTimeUpdatedTime + T - g })) : this._updateRebufferMetrics();
                  }
                  p ? this._prepareRebufferTrackerState(y.viewer_time) : this._clearRebufferTrackerState();
                }
              }, L.prototype._updateRebufferMetrics = function(u) {
                u > 0 && (0, D.default)(this.data, "view_rebuffer_duration", u), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time);
              }, c.default = L;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(1), _ = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(A), M = function() {
                this.on("viewinit", function() {
                  var O = this.data, D = O.view_id;
                  if (!O.view_program_changed) {
                    var L = function(u, y) {
                      var p = y.viewer_time;
                      u.type === "playing" && this.data.view_time_to_first_frame === void 0 ? this.calculateTimeToFirstFrame(p || _.default.now(), D) : u.type !== "adplaying" || this.data.view_time_to_first_frame !== void 0 && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(p || _.default.now(), D);
                    };
                    this.one("playing", L), this.one("adplaying", L), this.one("viewend", function() {
                      this.off("playing", L), this.off("adplaying", L);
                    });
                  }
                });
              };
              M.prototype.calculateTimeToFirstFrame = function(O, D) {
                D === this.data.view_id && (this._updateWatchTime(null, { viewer_time: O }), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START));
              }, c.default = M;
            }, function(I, c, R) {
              "use strict";
              function A() {
                var O = this;
                this.on("viewinit", function() {
                  this._lastPlayheadPosition = -1;
                });
                var D = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"], L = ["playing", "hb"];
                D.forEach(function(u) {
                  O.on(u, function() {
                    if (this._lastPlayheadPosition >= 0 && this.data.player_playhead_time >= 0 && this._lastPlayerWidth >= 0 && this._lastSourceWidth > 0 && this._lastPlayerHeight >= 0 && this._lastSourceHeight > 0) {
                      var y = this.data.player_playhead_time - this._lastPlayheadPosition;
                      if (y < 0)
                        return void (this._lastPlayheadPosition = -1);
                      var p = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight), g = Math.max(0, p - 1), T = Math.max(0, 1 - p);
                      this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, g), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, T), (0, M.default)(this.data, "view_total_content_playback_time", y), (0, M.default)(this.data, "view_total_upscaling", g * y), (0, M.default)(this.data, "view_total_downscaling", T * y);
                    }
                    this._lastPlayheadPosition = -1;
                  });
                }), L.forEach(function(u) {
                  O.on(u, function() {
                    this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height;
                  });
                });
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
              var _ = R(3), M = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(_);
            }, function(I, c, R) {
              "use strict";
              function A(p) {
                return p && p.__esModule ? p : { default: p };
              }
              function _() {
                this.isSeeking = false, this.on("seeking", function(p, g) {
                  (0, y.default)(this.data, g), this._lastSeekingTime = O.default.now(), this.isSeeking === false && (this.isSeeking = true, this.send("seeking"));
                }), this.on("seeked", function() {
                  this.isSeeking = false;
                  var p = this._lastSeekingTime || O.default.now(), g = O.default.now() - p;
                  (0, L.default)(this.data, "view_seek_count", 1), (0, L.default)(this.data, "view_seek_duration", g);
                  var T = this.data.view_max_seek_time || 0;
                  this.data.view_max_seek_time = Math.max(T, g);
                }), this.on("viewend", function() {
                  this.isSeeking = false;
                });
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = _;
              var M = R(1), O = A(M), D = R(3), L = A(D), u = R(2), y = A(u);
            }, function(I, c, R) {
              "use strict";
              function A(T) {
                return T && T.__esModule ? T : { default: T };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = function() {
                function T(x, r) {
                  var e = [], t = true, i = false, d = void 0;
                  try {
                    for (var s, f = x[Symbol.iterator](); !(t = (s = f.next()).done) && (e.push(s.value), !r || e.length !== r); t = true)
                      ;
                  } catch (v) {
                    i = true, d = v;
                  } finally {
                    try {
                      !t && f.return && f.return();
                    } finally {
                      if (i)
                        throw d;
                    }
                  }
                  return e;
                }
                return function(x, r) {
                  if (Array.isArray(x))
                    return x;
                  if (Symbol.iterator in Object(x))
                    return T(x, r);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
              }(), M = R(3), O = A(M), D = R(5), L = R(2), u = A(L), y = function(T, x) {
                T.push(x), T.sort(function(r, e) {
                  return r.viewer_time - e.viewer_time;
                });
              }, p = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"], g = function() {
                var T = this;
                this.on("viewinit", function() {
                  this.isAdBreak = false, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = false, this._wouldBeNewAdPlay = true, this._prerollPlayTime = void 0;
                }), p.forEach(function(r) {
                  return T.on(r, T._updateAdData);
                });
                var x = function() {
                  T.isAdBreak = false;
                };
                this.on("adbreakstart", function() {
                  this.isAdBreak = true;
                }), this.on("play", x), this.on("playing", x), this.on("viewend", x), this.on("adrequest", function(r, e) {
                  e = (0, u.default)({ ad_request_id: "generatedAdRequestId" + this._currentAdRequestNumber++ }, e), y(this._adRequests, e), (0, O.default)(this.data, "view_ad_request_count"), this.inPrerollPosition() && (this.data.view_preroll_requested = true, this._adHasPlayed || (0, O.default)(this.data, "view_preroll_request_count"));
                }), this.on("adresponse", function(r, e) {
                  e = (0, u.default)({ ad_request_id: "generatedAdRequestId" + this._currentAdResponseNumber++ }, e), y(this._adResponses, e);
                  var t = this.findAdRequest(e.ad_request_id);
                  t && (0, O.default)(this.data, "view_ad_request_time", Math.max(0, e.viewer_time - t.viewer_time));
                }), this.on("adplay", function(r, e) {
                  this._adHasPlayed = true, this._wouldBeNewAdPlay && (this._wouldBeNewAdPlay = false, (0, O.default)(this.data, "view_ad_played_count")), this.inPrerollPosition() && !this.data.view_preroll_played && (this.data.view_preroll_played = true, this._adRequests.length > 0 && (this.data.view_preroll_request_time = Math.max(0, e.viewer_time - this._adRequests[0].viewer_time)), this.data.view_start && (this.data.view_startup_preroll_request_time = Math.max(0, e.viewer_time - this.data.view_start)), this._prerollPlayTime = e.viewer_time);
                }), this.on("adplaying", function(r, e) {
                  this.inPrerollPosition() && this.data.view_preroll_load_time === void 0 && this._prerollPlayTime !== void 0 && (this.data.view_preroll_load_time = e.viewer_time - this._prerollPlayTime, this.data.view_startup_preroll_load_time = e.viewer_time - this._prerollPlayTime);
                }), this.on("adended", function() {
                  this._wouldBeNewAdPlay = true;
                }), this.on("aderror", function() {
                  this._wouldBeNewAdPlay = true;
                });
              };
              g.prototype.inPrerollPosition = function() {
                return this.data.view_content_playback_time === void 0 || this.data.view_content_playback_time <= 1e3;
              }, g.prototype.findAdRequest = function(T) {
                for (var x = 0; x < this._adRequests.length; x++)
                  if (this._adRequests[x].ad_request_id === T)
                    return this._adRequests[x];
              }, g.prototype._updateAdData = function(T, x) {
                if (this.inPrerollPosition()) {
                  if (!this.data.view_preroll_ad_tag_hostname && x.ad_tag_url) {
                    var r = (0, D.extractHostnameAndDomain)(x.ad_tag_url), e = _(r, 2), t = e[0], i = e[1];
                    this.data.view_preroll_ad_tag_domain = i, this.data.view_preroll_ad_tag_hostname = t;
                  }
                  if (!this.data.view_preroll_ad_asset_hostname && x.ad_asset_url) {
                    var d = (0, D.extractHostnameAndDomain)(x.ad_asset_url), s = _(d, 2), f = s[0], v = s[1];
                    this.data.view_preroll_ad_asset_domain = v, this.data.view_preroll_ad_asset_hostname = f;
                  }
                }
              }, c.default = g;
            }, function(I, c, R) {
              "use strict";
              function A(u) {
                return u && u.__esModule ? u : { default: u };
              }
              function _() {
                var u = this, y = void 0, p = void 0, g = function() {
                  u.disableRebufferTracking || ((0, L.default)(u.data, "view_waiting_rebuffer_count", 1), y = O.default.now(), p = window.setInterval(function() {
                    if (y) {
                      var t = O.default.now();
                      (0, L.default)(u.data, "view_waiting_rebuffer_duration", t - y), y = t;
                    }
                  }, 250));
                }, T = function() {
                  u.disableRebufferTracking || y && ((0, L.default)(u.data, "view_waiting_rebuffer_duration", O.default.now() - y), y = false, window.clearInterval(p));
                }, x = false, r = function() {
                  x = true;
                }, e = function() {
                  x = false, T();
                };
                this.on("waiting", function() {
                  x && g();
                }), this.on("playing", function() {
                  T(), r();
                }), this.on("pause", e), this.on("seeking", e);
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = _;
              var M = R(1), O = A(M), D = R(3), L = A(D);
            }, function(I, c, R) {
              "use strict";
              function A(p) {
                return p && p.__esModule ? p : { default: p };
              }
              function _() {
                var p = this;
                this.one("playbackheartbeat", u), this.on("playbackheartbeatend", function() {
                  p.off("before*", y), p.one("playbackheartbeat", u);
                });
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = _;
              var M = R(2), O = A(M), D = R(1), L = A(D), u = function() {
                this.lastWallClockTime = L.default.now(), this.on("before*", y);
              }, y = function(p) {
                var g = L.default.now(), T = this.lastWallClockTime;
                this.lastWallClockTime = g, g - T > 3e4 && (this.emit("devicesleep", { viewer_time: T }), (0, O.default)(this.data, { viewer_time: T }), this.send("devicesleep"), this.emit("devicewake", { viewer_time: g }), (0, O.default)(this.data, { viewer_time: g }), this.send("devicewake"));
              };
            }, function(I, c, R) {
              "use strict";
              function A(a) {
                return a && a.__esModule ? a : { default: a };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
                return typeof a;
              } : function(a) {
                return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
              }, M = R(0), O = A(M), D = R(36), L = R(4), u = A(L), y = R(40), p = A(y), g = R(9), T = A(g), x = R(41), r = A(x), e = R(14), t = A(e), i = R(42), d = A(i), s = R(2), f = A(s), v = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"], h = ["viewstart", "error", "ended", "viewend"], l = function(a, E) {
                var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                this.mux = a, this.envKey = E, this.eventQueue = new d.default((0, p.default)(E, m.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = m.sampleRate, this.disableCookies = m.disableCookies, this.respectDoNotTrack = m.respectDoNotTrack;
                var S = m.platform || {};
                this.pageLevelData = { mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: S.name, viewer_application_version: S.version, viewer_application_engine: S.layout, viewer_device_name: S.product, viewer_device_category: "", viewer_device_manufacturer: S.manufacturer, viewer_os_family: S.os && S.os.family, viewer_os_architecture: S.os && S.os.architecture, viewer_os_version: S.os && S.os.version };
                var P = (0, r.default)();
                P && (this.pageLevelData = (0, f.default)(this.pageLevelData, { viewer_connection_type: P })), O.default !== void 0 && O.default.location && O.default.location.href && (this.pageLevelData.page_url = O.default.location.href), this.viewerData = this.disableCookies ? {} : (0, D.getAndUpdateViewerData)();
              };
              l.prototype.send = function(a, E) {
                if (a) {
                  if (this.respectDoNotTrack && (0, T.default)())
                    return u.default.info("Not sending `" + a + "` because Do Not Track is enabled");
                  if (!E || (E === void 0 ? "undefined" : _(E)) !== "object")
                    return u.default.error("A data object was expected in send() but was not provided");
                  var m = this.disableCookies ? {} : (0, D.getAndUpdateSessionData)(), S = {};
                  (0, f.default)(S, this.pageLevelData), (0, f.default)(S, E), (0, f.default)(S, m), (0, f.default)(S, this.viewerData), S.event = a, S.env_key = this.envKey, S.user_id && (S.viewer_user_id = S.user_id, delete S.user_id);
                  var P = S.mux_sample_number >= this.sampleRate, b = this._deduplicateBeaconData(a, S), C = (0, t.default)(b);
                  if (this.lastEventTime = this.mux.utils.now(), P)
                    return u.default.info("Not sending event due to sample rate restriction", a, S, C);
                  if (!this.envKey)
                    return u.default.info("Not sending event due to missing environment key", a, S, C);
                  if (!this.rateLimited) {
                    if (u.default.info("Sending event", a, S, C), this.rateLimited = !this.eventQueue.queueEvent(a, C), this.mux.WINDOW_UNLOADING && a === "viewend")
                      this.eventQueue.destroy(true);
                    else if (h.indexOf(a) >= 0 && this.eventQueue.flushEvents(), this.rateLimited)
                      return S.event = "eventrateexceeded", C = (0, t.default)(S), this.eventQueue.queueEvent(S.event, C), u.default.error("Beaconing disabled due to rate limit.");
                  }
                }
              }, l.prototype.destroy = function() {
                this.eventQueue.destroy(false);
              };
              var o = function(a, E, m, S) {
                return !(!a || E.indexOf("request_") !== 0) && (E === "request_response_headers" || (m === void 0 ? "undefined" : _(m)) !== "object" || (S === void 0 ? "undefined" : _(S)) !== "object" || Object.keys(m || {}).length !== Object.keys(S || {}).length);
              }, n = function(a, E) {
                return a === "renditionchange" && E.indexOf("video_source_") === 0;
              };
              l.prototype._deduplicateBeaconData = function(a, E) {
                var m = this, S = {}, P = E.view_id;
                if (!P || a === "viewstart" || a === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5)
                  S = (0, f.default)({}, E), P && (this.previousBeaconData = S), P && a === "viewend" && (this.previousBeaconData = null);
                else {
                  var b = a.indexOf("request") === 0;
                  Object.keys(E).forEach(function(C) {
                    var B = E[C];
                    (B !== m.previousBeaconData[C] || v.indexOf(C) > -1 || o(b, C, B, m.previousBeaconData[C]) || n(a, C)) && (S[C] = B, m.previousBeaconData[C] = B);
                  });
                }
                return S;
              }, c.default = l;
            }, function(I, c, R) {
              "use strict";
              function A(r) {
                return r && r.__esModule ? r : { default: r };
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.getAndUpdateSessionData = c.getAndUpdateViewerData = void 0;
              var _ = R(11), M = A(_), O = R(39), D = A(O), L = R(6), u = R(1), y = A(u), p = function() {
                var r = void 0;
                try {
                  r = M.default.parse(D.default.get("muxData") || "");
                } catch {
                  r = {};
                }
                return r;
              }, g = function(r) {
                try {
                  D.default.set("muxData", M.default.stringify(r), { expires: 7300 });
                } catch {
                }
              }, T = function() {
                var r = p();
                return r.mux_viewer_id = r.mux_viewer_id || (0, L.generateUUID)(), r.msn = r.msn || Math.random(), g(r), { mux_viewer_id: r.mux_viewer_id, mux_sample_number: r.msn };
              }, x = function() {
                var r = p(), e = y.default.now();
                return r.session_start && (r.sst = r.session_start, delete r.session_start), r.session_id && (r.sid = r.session_id, delete r.session_id), r.session_expires && (r.sex = r.session_expires, delete r.session_expires), (!r.sex || r.sex < e) && (r.sid = (0, L.generateUUID)(), r.sst = e), r.sex = e + 15e5, g(r), { session_id: r.sid, session_start: r.sst, session_expires: r.sex };
              };
              c.getAndUpdateViewerData = T, c.getAndUpdateSessionData = x;
            }, function(I, c, R) {
              "use strict";
              var A = R(12), _ = R(13), M = { brackets: function(u) {
                return u + "[]";
              }, indices: function(u, y) {
                return u + "[" + y + "]";
              }, repeat: function(u) {
                return u;
              } }, O = Date.prototype.toISOString, D = { delimiter: "&", encode: true, encoder: A.encode, encodeValuesOnly: false, serializeDate: function(u) {
                return O.call(u);
              }, skipNulls: false, strictNullHandling: false }, L = function u(y, p, g, T, x, r, e, t, i, d, s, f) {
                var v = y;
                if (typeof e == "function")
                  v = e(p, v);
                else if (v instanceof Date)
                  v = d(v);
                else if (v === null) {
                  if (T)
                    return r && !f ? r(p, D.encoder) : p;
                  v = "";
                }
                if (typeof v == "string" || typeof v == "number" || typeof v == "boolean" || A.isBuffer(v))
                  return r ? [s(f ? p : r(p, D.encoder)) + "=" + s(r(v, D.encoder))] : [s(p) + "=" + s(String(v))];
                var h = [];
                if (v === void 0)
                  return h;
                var l;
                if (Array.isArray(e))
                  l = e;
                else {
                  var o = Object.keys(v);
                  l = t ? o.sort(t) : o;
                }
                for (var n = 0; n < l.length; ++n) {
                  var a = l[n];
                  x && v[a] === null || (h = Array.isArray(v) ? h.concat(u(v[a], g(p, a), g, T, x, r, e, t, i, d, s, f)) : h.concat(u(v[a], p + (i ? "." + a : "[" + a + "]"), g, T, x, r, e, t, i, d, s, f)));
                }
                return h;
              };
              I.exports = function(u, y) {
                var p = u, g = y ? A.assign({}, y) : {};
                if (g.encoder !== null && g.encoder !== void 0 && typeof g.encoder != "function")
                  throw new TypeError("Encoder has to be a function.");
                var T = g.delimiter === void 0 ? D.delimiter : g.delimiter, x = typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : D.strictNullHandling, r = typeof g.skipNulls == "boolean" ? g.skipNulls : D.skipNulls, e = typeof g.encode == "boolean" ? g.encode : D.encode, t = typeof g.encoder == "function" ? g.encoder : D.encoder, i = typeof g.sort == "function" ? g.sort : null, d = g.allowDots !== void 0 && g.allowDots, s = typeof g.serializeDate == "function" ? g.serializeDate : D.serializeDate, f = typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : D.encodeValuesOnly;
                if (g.format === void 0)
                  g.format = _.default;
                else if (!Object.prototype.hasOwnProperty.call(_.formatters, g.format))
                  throw new TypeError("Unknown format option provided.");
                var v, h, l = _.formatters[g.format];
                typeof g.filter == "function" ? (h = g.filter, p = h("", p)) : Array.isArray(g.filter) && (h = g.filter, v = h);
                var o = [];
                if (typeof p != "object" || p === null)
                  return "";
                var n;
                n = g.arrayFormat in M ? g.arrayFormat : "indices" in g ? g.indices ? "indices" : "repeat" : "indices";
                var a = M[n];
                v || (v = Object.keys(p)), i && v.sort(i);
                for (var E = 0; E < v.length; ++E) {
                  var m = v[E];
                  r && p[m] === null || (o = o.concat(L(p[m], m, a, x, r, e ? t : null, h, i, d, s, l, f)));
                }
                var S = o.join(T), P = g.addQueryPrefix === true ? "?" : "";
                return S.length > 0 ? P + S : "";
              };
            }, function(I, c, R) {
              "use strict";
              var A = R(12), _ = Object.prototype.hasOwnProperty, M = { allowDots: false, allowPrototypes: false, arrayLimit: 20, decoder: A.decode, delimiter: "&", depth: 5, parameterLimit: 1e3, plainObjects: false, strictNullHandling: false }, O = function(u, y) {
                for (var p = {}, g = y.ignoreQueryPrefix ? u.replace(/^\?/, "") : u, T = y.parameterLimit === 1 / 0 ? void 0 : y.parameterLimit, x = g.split(y.delimiter, T), r = 0; r < x.length; ++r) {
                  var e, t, i = x[r], d = i.indexOf("]="), s = d === -1 ? i.indexOf("=") : d + 1;
                  s === -1 ? (e = y.decoder(i, M.decoder), t = y.strictNullHandling ? null : "") : (e = y.decoder(i.slice(0, s), M.decoder), t = y.decoder(i.slice(s + 1), M.decoder)), _.call(p, e) ? p[e] = [].concat(p[e]).concat(t) : p[e] = t;
                }
                return p;
              }, D = function(u, y, p) {
                for (var g = y, T = u.length - 1; T >= 0; --T) {
                  var x, r = u[T];
                  if (r === "[]")
                    x = [], x = x.concat(g);
                  else {
                    x = p.plainObjects ? Object.create(null) : {};
                    var e = r.charAt(0) === "[" && r.charAt(r.length - 1) === "]" ? r.slice(1, -1) : r, t = parseInt(e, 10);
                    !isNaN(t) && r !== e && String(t) === e && t >= 0 && p.parseArrays && t <= p.arrayLimit ? (x = [], x[t] = g) : x[e] = g;
                  }
                  g = x;
                }
                return g;
              }, L = function(u, y, p) {
                if (u) {
                  var g = p.allowDots ? u.replace(/\.([^.[]+)/g, "[$1]") : u, T = /(\[[^[\]]*])/, x = /(\[[^[\]]*])/g, r = T.exec(g), e = r ? g.slice(0, r.index) : g, t = [];
                  if (e) {
                    if (!p.plainObjects && _.call(Object.prototype, e) && !p.allowPrototypes)
                      return;
                    t.push(e);
                  }
                  for (var i = 0; (r = x.exec(g)) !== null && i < p.depth; ) {
                    if (i += 1, !p.plainObjects && _.call(Object.prototype, r[1].slice(1, -1)) && !p.allowPrototypes)
                      return;
                    t.push(r[1]);
                  }
                  return r && t.push("[" + g.slice(r.index) + "]"), D(t, y, p);
                }
              };
              I.exports = function(u, y) {
                var p = y ? A.assign({}, y) : {};
                if (p.decoder !== null && p.decoder !== void 0 && typeof p.decoder != "function")
                  throw new TypeError("Decoder has to be a function.");
                if (p.ignoreQueryPrefix = p.ignoreQueryPrefix === true, p.delimiter = typeof p.delimiter == "string" || A.isRegExp(p.delimiter) ? p.delimiter : M.delimiter, p.depth = typeof p.depth == "number" ? p.depth : M.depth, p.arrayLimit = typeof p.arrayLimit == "number" ? p.arrayLimit : M.arrayLimit, p.parseArrays = p.parseArrays !== false, p.decoder = typeof p.decoder == "function" ? p.decoder : M.decoder, p.allowDots = typeof p.allowDots == "boolean" ? p.allowDots : M.allowDots, p.plainObjects = typeof p.plainObjects == "boolean" ? p.plainObjects : M.plainObjects, p.allowPrototypes = typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : M.allowPrototypes, p.parameterLimit = typeof p.parameterLimit == "number" ? p.parameterLimit : M.parameterLimit, p.strictNullHandling = typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : M.strictNullHandling, u === "" || u === null || u === void 0)
                  return p.plainObjects ? Object.create(null) : {};
                for (var g = typeof u == "string" ? O(u, p) : u, T = p.plainObjects ? Object.create(null) : {}, x = Object.keys(g), r = 0; r < x.length; ++r) {
                  var e = x[r], t = L(e, g[e], p);
                  T = A.merge(T, t, p);
                }
                return A.compact(T);
              };
            }, function(I, c, R) {
              "use strict";
              var A, _, M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
                return typeof O;
              } : function(O) {
                return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
              };
              (function(O) {
                var D = false;
                if (A = O, (_ = typeof A == "function" ? A.call(c, R, c, I) : A) !== void 0 && (I.exports = _), D = true, M(c) === "object" && (I.exports = O(), D = true), !D) {
                  var L = window.Cookies, u = window.Cookies = O();
                  u.noConflict = function() {
                    return window.Cookies = L, u;
                  };
                }
              })(function() {
                function O(L) {
                  function u(y, p, g) {
                    var T;
                    if (typeof document != "undefined") {
                      if (arguments.length > 1) {
                        if (g = D({ path: "/" }, u.defaults, g), typeof g.expires == "number") {
                          var x = new Date();
                          x.setMilliseconds(x.getMilliseconds() + 864e5 * g.expires), g.expires = x;
                        }
                        try {
                          T = JSON.stringify(p), /^[\{\[]/.test(T) && (p = T);
                        } catch {
                        }
                        return p = L.write ? L.write(p, y) : encodeURIComponent(String(p)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), y = encodeURIComponent(String(y)), y = y.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), y = y.replace(/[\(\)]/g, escape), document.cookie = [y, "=", p, g.expires ? "; expires=" + g.expires.toUTCString() : "", g.path ? "; path=" + g.path : "", g.domain ? "; domain=" + g.domain : "", g.secure ? "; secure" : ""].join("");
                      }
                      y || (T = {});
                      for (var r = document.cookie ? document.cookie.split("; ") : [], e = /(%[0-9A-Z]{2})+/g, t = 0; t < r.length; t++) {
                        var i = r[t].split("="), d = i.slice(1).join("=");
                        d.charAt(0) === '"' && (d = d.slice(1, -1));
                        try {
                          var s = i[0].replace(e, decodeURIComponent);
                          if (d = L.read ? L.read(d, s) : L(d, s) || d.replace(e, decodeURIComponent), this.json)
                            try {
                              d = JSON.parse(d);
                            } catch {
                            }
                          if (y === s) {
                            T = d;
                            break;
                          }
                          y || (T[s] = d);
                        } catch {
                        }
                      }
                      return T;
                    }
                  }
                  return u.set = u, u.get = function(y) {
                    return u.call(u, y);
                  }, u.getJSON = function() {
                    return u.apply({ json: true }, [].slice.call(arguments));
                  }, u.defaults = {}, u.remove = function(y, p) {
                    u(y, "", D(p, { expires: -1 }));
                  }, u.withConverter = O, u;
                }
                var D = function() {
                  for (var L = 0, u = {}; L < arguments.length; L++) {
                    var y = arguments[L];
                    for (var p in y)
                      u[p] = y[p];
                  }
                  return u;
                };
                return O(function() {
                });
              });
            }, function(I, c, R) {
              "use strict";
              function A(_, M) {
                return _ = _ || "", M = M || "litix.io", _.match(/^[a-z0-9]+$/) ? "https://" + _ + "." + M : "https://img.litix.io/a.gif";
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
            }, function(I, c, R) {
              "use strict";
              Object.defineProperty(c, "__esModule", { value: true });
              var A = R(0), _ = function(D) {
                return D && D.__esModule ? D : { default: D };
              }(A), M = function() {
                var D = void 0;
                switch (O()) {
                  case "cellular":
                    D = "cellular";
                    break;
                  case "ethernet":
                    D = "wired";
                    break;
                  case "wifi":
                    D = "wifi";
                    break;
                  case void 0:
                    break;
                  default:
                    D = "other";
                }
                return D;
              }, O = function() {
                var D = _.default.navigator, L = D && (D.connection || D.mozConnection || D.webkitConnection);
                return L && L.type;
              };
              c.default = M;
            }, function(I, c, R) {
              "use strict";
              function A(d) {
                return d && d.__esModule ? d : { default: d };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = R(0), M = A(_), O = R(4), D = A(O), L = R(43), u = A(L), y = R(2), p = A(y), g = R(14), T = A(g), x = R(1), r = A(x), e = !!M.default.XMLHttpRequest && "withCredentials" in new M.default.XMLHttpRequest(), t = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 5e3 }, i = function(d, s) {
                this._beaconUrl = d || "https://img.litix.io", this._eventQueue = [], this._postInFlight = false, this._failureCount = 0, this._sendTimeout = false, this._options = (0, p.default)({}, t, s);
              };
              i.prototype.queueEvent = function(d, s) {
                var f = (0, p.default)({}, s);
                return e ? (this._eventQueue.length <= this._options.maxQueueLength || d === "eventrateexceeded") && (this._eventQueue.push(f), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (u.default.send(this._beaconUrl, f), true);
              }, i.prototype.flushEvents = function() {
                e && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
              }, i.prototype.destroy = function() {
                var d = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                this.destroyed = true, d ? this._clearBeaconQueue() : this.flushEvents(), M.default.clearTimeout(this._sendTimeout);
              }, i.prototype._clearBeaconQueue = function() {
                var d = M.default.navigator, s = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, f = this._eventQueue.slice(s);
                s > 0 && (0, p.default)(f[f.length - 1], (0, T.default)({ mux_view_message: "event queue truncated" }));
                var v = this._createPayload(f);
                if (d.sendBeacon)
                  d.sendBeacon(this._beaconUrl, v);
                else if (M.default.XMLHttpRequest) {
                  var h = new M.default.XMLHttpRequest();
                  h.open("POST", this._beaconUrl), h.setRequestHeader("Content-Type", "application/json"), h.send(v);
                } else
                  u.default.send(this._beaconUrl, f[f.length - 1]);
              }, i.prototype._sendBeaconQueue = function() {
                var d = this;
                if (M.default.XMLHttpRequest && !this._postInFlight) {
                  var s = new M.default.XMLHttpRequest(), f = this._eventQueue.slice(0, this._options.maxBeaconSize);
                  this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = true, s.onreadystatechange = function() {
                    s.readyState === 4 && (s.status !== 200 ? (d._eventQueue = f.concat(d._eventQueue), d._failureCount += 1, D.default.info("Error sending beacon: " + s.status), D.default.info(s.responseText)) : d._failureCount = 0, d._roundTripTime = r.default.now() - h, d._postInFlight = false);
                  }, s.open("POST", this._beaconUrl), s.setRequestHeader("Content-Type", "application/json");
                  var v = this._createPayload(f), h = r.default.now();
                  s.send(v);
                }
              }, i.prototype._getNextBeaconTime = function() {
                if (!this._failureCount)
                  return this._options.baseTimeBetweenBeacons;
                var d = Math.pow(2, this._failureCount - 1);
                return (1 + (d *= Math.random())) * this._options.baseTimeBetweenBeacons;
              }, i.prototype._startBeaconSending = function() {
                var d = this;
                M.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = M.default.setTimeout(function() {
                  d._eventQueue.length && d._sendBeaconQueue(), d._startBeaconSending();
                }, this._getNextBeaconTime()));
              }, i.prototype._createPayload = function(d) {
                var s = { transmission_timestamp: Math.round(r.default.now()) };
                return this._roundTripTime && (s.rtt_ms = Math.round(this._roundTripTime)), JSON.stringify({ metadata: s, events: d });
              }, c.default = i;
            }, function(I, c, R) {
              "use strict";
              function A(u) {
                return u && u.__esModule ? u : { default: u };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = R(11), M = A(_), O = R(0), D = A(O), L = {};
              L.send = function(u, y) {
                function p() {
                  g.src = x + (T ? "&rc=" + T : "");
                }
                var g = new Image(), T = 0, x = u + "?" + M.default.stringify(y);
                return g.addEventListener("error", function() {
                  T > 3 || D.default.setTimeout(function() {
                    T++, p();
                  }, 5e3 * T);
                }), p(), g;
              }, c.default = L;
            }, function(I, c, R) {
              "use strict";
              function A() {
                function _(x, r) {
                  var e = r.request_start, t = r.request_response_start, i = r.request_response_end, d = r.request_bytes_loaded;
                  y++;
                  var s = void 0, f = void 0;
                  if (t ? (s = t - e, f = i - t) : f = i - e, f > 0 && d > 0) {
                    var v = d / f * 8e3;
                    p++, L += d, u += f, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, v), this.data.view_average_request_throughput = L / u * 8e3, this.data.view_request_count = y, s > 0 && (D += s, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, s), this.data.view_average_request_latency = D / p);
                  }
                }
                function M(x, r) {
                  y++, g++, this.data.view_request_count = y, this.data.view_request_failed_count = g;
                }
                function O(x, r) {
                  y++, T++, this.data.view_request_count = y, this.data.view_request_canceled_count = T;
                }
                var D = 0, L = 0, u = 0, y = 0, p = 0, g = 0, T = 0;
                this.on("requestcompleted", _), this.on("requestfailed", M), this.on("requestcanceled", O);
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
            }, function(I, c, R) {
              "use strict";
              function A(p, g, T) {
                var x = (0, L.findMediaElement)(g), r = M(x, 3), e = r[0], t = r[1], i = r[2], d = p.log, s = p.utils.getComputedStyle, f = p.utils.secondsToMs, v = { automaticErrorTracking: true };
                if (!e)
                  return d.error("No element was found with the `" + t + "` query selector.");
                if (i !== "video" && i !== "audio")
                  return d.error("The element of `" + t + "` was not a media element.");
                T = (0, D.default)(v, T), T.data = (0, D.default)({ player_software: "HTML5 Video Element", player_software_version: "No Versions", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: "4.3.0" }, T.data), T.getPlayheadTime = function() {
                  return f(e.currentTime);
                }, T.getStateData = function() {
                  var l = this.hlsjs && this.hlsjs.url, o = this.dashjs && _(this.dashjs.getSource === "function") && this.dashjs.getSource();
                  return { player_is_paused: e.paused, player_playhead_time: f(e.currentTime), player_width: parseInt(s(e, "width")), player_height: parseInt(s(e, "height")), player_autoplay_on: e.autoplay, player_preload_on: e.preload, video_poster_url: e.poster, video_source_url: l || o || e.currentSrc, video_source_duration: f(e.duration), video_source_height: e.videoHeight, video_source_width: e.videoWidth };
                }, e.mux = e.mux || {}, e.mux.deleted = false, e.mux.emit = function(l, o) {
                  p.emit(t, l, o);
                };
                var h = function() {
                  d.error("The monitor for this video element has already been destroyed.");
                };
                e.mux.destroy = function() {
                  Object.keys(e.mux.listeners).forEach(function(l) {
                    e.removeEventListener(l, e.mux.listeners[l], false);
                  }), delete e.mux.listeners, e.mux.destroy = h, e.mux.swapElement = h, e.mux.emit = h, e.mux.addHLSJS = h, e.mux.addDashJS = h, e.mux.removeHLSJS = h, e.mux.removeDashJS = h, e.mux.deleted = true, p.emit(t, "destroy");
                }, e.mux.swapElement = function(l) {
                  var o = (0, L.findMediaElement)(l), n = M(o, 3), a = n[0], E = n[1], m = n[2];
                  return a ? m !== "video" && m !== "audio" ? p.log.error("The element of `" + E + "` was not a media element.") : (a.muxId = e.muxId, delete e.muxId, a.mux = a.mux || {}, a.mux.listeners = (0, D.default)({}, e.mux.listeners), delete e.mux.listeners, Object.keys(a.mux.listeners).forEach(function(S) {
                    e.removeEventListener(S, a.mux.listeners[S], false), a.addEventListener(S, a.mux.listeners[S], false);
                  }), a.mux.swapElement = e.mux.swapElement, a.mux.destroy = e.mux.destroy, delete e.mux, void (e = a)) : p.log.error("No element was found with the `" + E + "` query selector.");
                }, e.mux.addHLSJS = function(l) {
                  p.addHLSJS(t, l);
                }, e.mux.addDashJS = function(l) {
                  p.addDashJS(t, l);
                }, e.mux.removeHLSJS = function() {
                  p.removeHLSJS(t);
                }, e.mux.removeDashJS = function() {
                  p.removeDashJS(t);
                }, p.init(t, T), p.emit(t, "playerready"), e.paused || (p.emit(t, "play"), e.readyState > 2 && p.emit(t, "playing")), e.mux.listeners = {}, u.forEach(function(l) {
                  (l !== "error" || T.automaticErrorTracking) && (e.mux.listeners[l] = function() {
                    var o = {};
                    if (l === "error") {
                      if (!e.error)
                        return;
                      o.player_error_code = e.error.code, o.player_error_message = y[e.error.code] || e.error.message;
                    }
                    p.emit(t, l, o);
                  }, e.addEventListener(l, e.mux.listeners[l], false));
                });
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
                return typeof p;
              } : function(p) {
                return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
              }, M = function() {
                function p(g, T) {
                  var x = [], r = true, e = false, t = void 0;
                  try {
                    for (var i, d = g[Symbol.iterator](); !(r = (i = d.next()).done) && (x.push(i.value), !T || x.length !== T); r = true)
                      ;
                  } catch (s) {
                    e = true, t = s;
                  } finally {
                    try {
                      !r && d.return && d.return();
                    } finally {
                      if (e)
                        throw t;
                    }
                  }
                  return x;
                }
                return function(g, T) {
                  if (Array.isArray(g))
                    return g;
                  if (Symbol.iterator in Object(g))
                    return p(g, T);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
              }();
              c.default = A;
              var O = R(2), D = function(p) {
                return p && p.__esModule ? p : { default: p };
              }(O), L = R(8), u = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"], y = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
            }, function(I, c, R) {
              "use strict";
              function A(s) {
                return s && s.__esModule ? s : { default: s };
              }
              Object.defineProperty(c, "__esModule", { value: true });
              var _ = R(47), M = A(_), O = R(3), D = A(O), L = R(48), u = A(L), y = R(49), p = A(y), g = R(2), T = A(g), x = R(7), r = A(x), e = R(5), t = R(1), i = A(t), d = {};
              d.safeCall = M.default, d.safeIncrement = D.default, d.getComputedStyle = u.default, d.secondsToMs = p.default, d.assign = T.default, d.headersStringToObject = r.default, d.extractHostnameAndDomain = e.extractHostnameAndDomain, d.extractHostname = e.extractHostname, d.now = i.default.now, c.default = d;
            }, function(I, c, R) {
              "use strict";
              function A(O, D, L, u) {
                var y = u;
                if (O && typeof O[D] == "function")
                  try {
                    y = O[D].apply(O, L);
                  } catch (p) {
                    M.default.info("safeCall error", p);
                  }
                return y;
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
              var _ = R(4), M = function(O) {
                return O && O.__esModule ? O : { default: O };
              }(_);
            }, function(I, c, R) {
              "use strict";
              function A(D, L) {
                if (D && L && M.default && typeof M.default.getComputedStyle == "function") {
                  var u = void 0;
                  return O && O.has(D) && (u = O.get(D)), u || (u = M.default.getComputedStyle(D, null), O && O.set(D, u)), u.getPropertyValue(L);
                }
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
              var _ = R(0), M = function(D) {
                return D && D.__esModule ? D : { default: D };
              }(_), O = void 0;
              M.default && M.default.WeakMap && (O = new WeakMap());
            }, function(I, c, R) {
              "use strict";
              function A(_) {
                return Math.floor(1e3 * _);
              }
              Object.defineProperty(c, "__esModule", { value: true }), c.default = A;
            }]);
          });
        })();
      });
      var Je = Ke((Ie, Ge) => {
        typeof window != "undefined" && function(I, c) {
          typeof Ie == "object" && typeof Ge == "object" ? Ge.exports = c() : typeof define == "function" && define.amd ? define([], c) : typeof Ie == "object" ? Ie.Hls = c() : I.Hls = c();
        }(Ie, function() {
          return function(N) {
            var I = {};
            function c(R) {
              if (I[R])
                return I[R].exports;
              var A = I[R] = { i: R, l: false, exports: {} };
              return N[R].call(A.exports, A, A.exports, c), A.l = true, A.exports;
            }
            return c.m = N, c.c = I, c.d = function(R, A, _) {
              c.o(R, A) || Object.defineProperty(R, A, { enumerable: true, get: _ });
            }, c.r = function(R) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(R, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(R, "__esModule", { value: true });
            }, c.t = function(R, A) {
              if (A & 1 && (R = c(R)), A & 8 || A & 4 && typeof R == "object" && R && R.__esModule)
                return R;
              var _ = Object.create(null);
              if (c.r(_), Object.defineProperty(_, "default", { enumerable: true, value: R }), A & 2 && typeof R != "string")
                for (var M in R)
                  c.d(_, M, function(O) {
                    return R[O];
                  }.bind(null, M));
              return _;
            }, c.n = function(R) {
              var A = R && R.__esModule ? function() {
                return R.default;
              } : function() {
                return R;
              };
              return c.d(A, "a", A), A;
            }, c.o = function(R, A) {
              return Object.prototype.hasOwnProperty.call(R, A);
            }, c.p = "/dist/", c(c.s = "./src/hls.ts");
          }({ "./node_modules/eventemitter3/index.js": function(N, I, c) {
            "use strict";
            var R = Object.prototype.hasOwnProperty, A = "~";
            function _() {
            }
            Object.create && (_.prototype = Object.create(null), new _().__proto__ || (A = false));
            function M(u, y, p) {
              this.fn = u, this.context = y, this.once = p || false;
            }
            function O(u, y, p, g, T) {
              if (typeof p != "function")
                throw new TypeError("The listener must be a function");
              var x = new M(p, g || u, T), r = A ? A + y : y;
              return u._events[r] ? u._events[r].fn ? u._events[r] = [u._events[r], x] : u._events[r].push(x) : (u._events[r] = x, u._eventsCount++), u;
            }
            function D(u, y) {
              --u._eventsCount == 0 ? u._events = new _() : delete u._events[y];
            }
            function L() {
              this._events = new _(), this._eventsCount = 0;
            }
            L.prototype.eventNames = function() {
              var y = [], p, g;
              if (this._eventsCount === 0)
                return y;
              for (g in p = this._events)
                R.call(p, g) && y.push(A ? g.slice(1) : g);
              return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(p)) : y;
            }, L.prototype.listeners = function(y) {
              var p = A ? A + y : y, g = this._events[p];
              if (!g)
                return [];
              if (g.fn)
                return [g.fn];
              for (var T = 0, x = g.length, r = new Array(x); T < x; T++)
                r[T] = g[T].fn;
              return r;
            }, L.prototype.listenerCount = function(y) {
              var p = A ? A + y : y, g = this._events[p];
              return g ? g.fn ? 1 : g.length : 0;
            }, L.prototype.emit = function(y, p, g, T, x, r) {
              var e = A ? A + y : y;
              if (!this._events[e])
                return false;
              var t = this._events[e], i = arguments.length, d, s;
              if (t.fn) {
                switch (t.once && this.removeListener(y, t.fn, void 0, true), i) {
                  case 1:
                    return t.fn.call(t.context), true;
                  case 2:
                    return t.fn.call(t.context, p), true;
                  case 3:
                    return t.fn.call(t.context, p, g), true;
                  case 4:
                    return t.fn.call(t.context, p, g, T), true;
                  case 5:
                    return t.fn.call(t.context, p, g, T, x), true;
                  case 6:
                    return t.fn.call(t.context, p, g, T, x, r), true;
                }
                for (s = 1, d = new Array(i - 1); s < i; s++)
                  d[s - 1] = arguments[s];
                t.fn.apply(t.context, d);
              } else {
                var f = t.length, v;
                for (s = 0; s < f; s++)
                  switch (t[s].once && this.removeListener(y, t[s].fn, void 0, true), i) {
                    case 1:
                      t[s].fn.call(t[s].context);
                      break;
                    case 2:
                      t[s].fn.call(t[s].context, p);
                      break;
                    case 3:
                      t[s].fn.call(t[s].context, p, g);
                      break;
                    case 4:
                      t[s].fn.call(t[s].context, p, g, T);
                      break;
                    default:
                      if (!d)
                        for (v = 1, d = new Array(i - 1); v < i; v++)
                          d[v - 1] = arguments[v];
                      t[s].fn.apply(t[s].context, d);
                  }
              }
              return true;
            }, L.prototype.on = function(y, p, g) {
              return O(this, y, p, g, false);
            }, L.prototype.once = function(y, p, g) {
              return O(this, y, p, g, true);
            }, L.prototype.removeListener = function(y, p, g, T) {
              var x = A ? A + y : y;
              if (!this._events[x])
                return this;
              if (!p)
                return D(this, x), this;
              var r = this._events[x];
              if (r.fn)
                r.fn === p && (!T || r.once) && (!g || r.context === g) && D(this, x);
              else {
                for (var e = 0, t = [], i = r.length; e < i; e++)
                  (r[e].fn !== p || T && !r[e].once || g && r[e].context !== g) && t.push(r[e]);
                t.length ? this._events[x] = t.length === 1 ? t[0] : t : D(this, x);
              }
              return this;
            }, L.prototype.removeAllListeners = function(y) {
              var p;
              return y ? (p = A ? A + y : y, this._events[p] && D(this, p)) : (this._events = new _(), this._eventsCount = 0), this;
            }, L.prototype.off = L.prototype.removeListener, L.prototype.addListener = L.prototype.on, L.prefixed = A, L.EventEmitter = L, N.exports = L;
          }, "./node_modules/url-toolkit/src/url-toolkit.js": function(N, I, c) {
            (function(R) {
              var A = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, _ = /^([^\/?#]*)([^]*)$/, M = /(?:\/|^)\.(?=\/)/g, O = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, D = { buildAbsoluteURL: function(L, u, y) {
                if (y = y || {}, L = L.trim(), u = u.trim(), !u) {
                  if (!y.alwaysNormalize)
                    return L;
                  var p = D.parseURL(L);
                  if (!p)
                    throw new Error("Error trying to parse base URL.");
                  return p.path = D.normalizePath(p.path), D.buildURLFromParts(p);
                }
                var g = D.parseURL(u);
                if (!g)
                  throw new Error("Error trying to parse relative URL.");
                if (g.scheme)
                  return y.alwaysNormalize ? (g.path = D.normalizePath(g.path), D.buildURLFromParts(g)) : u;
                var T = D.parseURL(L);
                if (!T)
                  throw new Error("Error trying to parse base URL.");
                if (!T.netLoc && T.path && T.path[0] !== "/") {
                  var x = _.exec(T.path);
                  T.netLoc = x[1], T.path = x[2];
                }
                T.netLoc && !T.path && (T.path = "/");
                var r = { scheme: T.scheme, netLoc: g.netLoc, path: null, params: g.params, query: g.query, fragment: g.fragment };
                if (!g.netLoc && (r.netLoc = T.netLoc, g.path[0] !== "/"))
                  if (!g.path)
                    r.path = T.path, g.params || (r.params = T.params, g.query || (r.query = T.query));
                  else {
                    var e = T.path, t = e.substring(0, e.lastIndexOf("/") + 1) + g.path;
                    r.path = D.normalizePath(t);
                  }
                return r.path === null && (r.path = y.alwaysNormalize ? D.normalizePath(g.path) : g.path), D.buildURLFromParts(r);
              }, parseURL: function(L) {
                var u = A.exec(L);
                return u ? { scheme: u[1] || "", netLoc: u[2] || "", path: u[3] || "", params: u[4] || "", query: u[5] || "", fragment: u[6] || "" } : null;
              }, normalizePath: function(L) {
                for (L = L.split("").reverse().join("").replace(M, ""); L.length !== (L = L.replace(O, "")).length; )
                  ;
                return L.split("").reverse().join("");
              }, buildURLFromParts: function(L) {
                return L.scheme + L.netLoc + L.path + L.params + L.query + L.fragment;
              } };
              N.exports = D;
            })(this);
          }, "./node_modules/webworkify-webpack/index.js": function(N, I, c) {
            function R(y) {
              var p = {};
              function g(x) {
                if (p[x])
                  return p[x].exports;
                var r = p[x] = { i: x, l: false, exports: {} };
                return y[x].call(r.exports, r, r.exports, g), r.l = true, r.exports;
              }
              g.m = y, g.c = p, g.i = function(x) {
                return x;
              }, g.d = function(x, r, e) {
                g.o(x, r) || Object.defineProperty(x, r, { configurable: false, enumerable: true, get: e });
              }, g.r = function(x) {
                Object.defineProperty(x, "__esModule", { value: true });
              }, g.n = function(x) {
                var r = x && x.__esModule ? function() {
                  return x.default;
                } : function() {
                  return x;
                };
                return g.d(r, "a", r), r;
              }, g.o = function(x, r) {
                return Object.prototype.hasOwnProperty.call(x, r);
              }, g.p = "/", g.oe = function(x) {
                throw console.error(x), x;
              };
              var T = g(g.s = ENTRY_MODULE);
              return T.default || T;
            }
            var A = "[\\.|\\-|\\+|\\w|/|@]+", _ = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + A + ").*?\\)";
            function M(y) {
              return (y + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
            }
            function O(y) {
              return !isNaN(1 * y);
            }
            function D(y, p, g) {
              var T = {};
              T[g] = [];
              var x = p.toString(), r = x.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
              if (!r)
                return T;
              for (var e = r[1], t = new RegExp("(\\\\n|\\W)" + M(e) + _, "g"), i; i = t.exec(x); )
                i[3] !== "dll-reference" && T[g].push(i[3]);
              for (t = new RegExp("\\(" + M(e) + '\\("(dll-reference\\s(' + A + '))"\\)\\)' + _, "g"); i = t.exec(x); )
                y[i[2]] || (T[g].push(i[1]), y[i[2]] = c(i[1]).m), T[i[2]] = T[i[2]] || [], T[i[2]].push(i[4]);
              for (var d = Object.keys(T), s = 0; s < d.length; s++)
                for (var f = 0; f < T[d[s]].length; f++)
                  O(T[d[s]][f]) && (T[d[s]][f] = 1 * T[d[s]][f]);
              return T;
            }
            function L(y) {
              var p = Object.keys(y);
              return p.reduce(function(g, T) {
                return g || y[T].length > 0;
              }, false);
            }
            function u(y, p) {
              for (var g = { main: [p] }, T = { main: [] }, x = { main: {} }; L(g); )
                for (var r = Object.keys(g), e = 0; e < r.length; e++) {
                  var t = r[e], i = g[t], d = i.pop();
                  if (x[t] = x[t] || {}, !(x[t][d] || !y[t][d])) {
                    x[t][d] = true, T[t] = T[t] || [], T[t].push(d);
                    for (var s = D(y, y[t][d], t), f = Object.keys(s), v = 0; v < f.length; v++)
                      g[f[v]] = g[f[v]] || [], g[f[v]] = g[f[v]].concat(s[f[v]]);
                  }
                }
              return T;
            }
            N.exports = function(y, p) {
              p = p || {};
              var g = { main: c.m }, T = p.all ? { main: Object.keys(g.main) } : u(g, y), x = "";
              Object.keys(T).filter(function(d) {
                return d !== "main";
              }).forEach(function(d) {
                for (var s = 0; T[d][s]; )
                  s++;
                T[d].push(s), g[d][s] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", x = x + "var " + d + " = (" + R.toString().replace("ENTRY_MODULE", JSON.stringify(s)) + ")({" + T[d].map(function(f) {
                  return "" + JSON.stringify(f) + ": " + g[d][f].toString();
                }).join(",") + `});
`;
              }), x = x + "new ((" + R.toString().replace("ENTRY_MODULE", JSON.stringify(y)) + ")({" + T.main.map(function(d) {
                return "" + JSON.stringify(d) + ": " + g.main[d].toString();
              }).join(",") + "}))(self);";
              var r = new window.Blob([x], { type: "text/javascript" });
              if (p.bare)
                return r;
              var e = window.URL || window.webkitURL || window.mozURL || window.msURL, t = e.createObjectURL(r), i = new window.Worker(t);
              return i.objectURL = t, i;
            };
          }, "./src/config.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "hlsDefaultConfig", function() {
              return f;
            }), c.d(I, "mergeConfig", function() {
              return h;
            }), c.d(I, "enableStreamingMode", function() {
              return l;
            });
            var R = c("./src/controller/abr-controller.ts"), A = c("./src/controller/audio-stream-controller.ts"), _ = c("./src/controller/audio-track-controller.ts"), M = c("./src/controller/subtitle-stream-controller.ts"), O = c("./src/controller/subtitle-track-controller.ts"), D = c("./src/controller/buffer-controller.ts"), L = c("./src/controller/timeline-controller.ts"), u = c("./src/controller/cap-level-controller.ts"), y = c("./src/controller/fps-controller.ts"), p = c("./src/controller/eme-controller.ts"), g = c("./src/utils/xhr-loader.ts"), T = c("./src/utils/fetch-loader.ts"), x = c("./src/utils/cues.ts"), r = c("./src/utils/mediakeys-helper.ts"), e = c("./src/utils/logger.ts");
            function t() {
              return t = Object.assign || function(o) {
                for (var n = 1; n < arguments.length; n++) {
                  var a = arguments[n];
                  for (var E in a)
                    Object.prototype.hasOwnProperty.call(a, E) && (o[E] = a[E]);
                }
                return o;
              }, t.apply(this, arguments);
            }
            function i(o, n) {
              var a = Object.keys(o);
              if (Object.getOwnPropertySymbols) {
                var E = Object.getOwnPropertySymbols(o);
                n && (E = E.filter(function(m) {
                  return Object.getOwnPropertyDescriptor(o, m).enumerable;
                })), a.push.apply(a, E);
              }
              return a;
            }
            function d(o) {
              for (var n = 1; n < arguments.length; n++) {
                var a = arguments[n] != null ? arguments[n] : {};
                n % 2 ? i(Object(a), true).forEach(function(E) {
                  s(o, E, a[E]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach(function(E) {
                  Object.defineProperty(o, E, Object.getOwnPropertyDescriptor(a, E));
                });
              }
              return o;
            }
            function s(o, n, a) {
              return n in o ? Object.defineProperty(o, n, { value: a, enumerable: true, configurable: true, writable: true }) : o[n] = a, o;
            }
            var f = d(d({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, maxBufferSize: 60 * 1e3 * 1e3, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, enableSoftwareAES: true, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: g.default, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: R.default, bufferController: D.default, capLevelController: u.default, fpsController: y.default, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: r.requestMediaKeySystemAccess, testBandwidth: true, progressive: false, lowLatencyMode: true }, v()), {}, { subtitleStreamController: M.SubtitleStreamController, subtitleTrackController: O.default, timelineController: L.TimelineController, audioStreamController: A.default, audioTrackController: _.default, emeController: p.default });
            function v() {
              return { cueHandler: x.default, enableCEA708Captions: true, enableWebVTT: true, enableIMSC1: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true };
            }
            function h(o, n) {
              if ((n.liveSyncDurationCount || n.liveMaxLatencyDurationCount) && (n.liveSyncDuration || n.liveMaxLatencyDuration))
                throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
              if (n.liveMaxLatencyDurationCount !== void 0 && (n.liveSyncDurationCount === void 0 || n.liveMaxLatencyDurationCount <= n.liveSyncDurationCount))
                throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
              if (n.liveMaxLatencyDuration !== void 0 && (n.liveSyncDuration === void 0 || n.liveMaxLatencyDuration <= n.liveSyncDuration))
                throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
              return t({}, o, n);
            }
            function l(o) {
              var n = o.loader;
              if (n !== T.default && n !== g.default)
                e.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), o.progressive = false;
              else {
                var a = Object(T.fetchSupported)();
                a && (o.loader = T.default, o.progressive = true, o.enableSoftwareAES = true, e.logger.log("[config]: Progressive streaming enabled, using FetchLoader"));
              }
            }
          }, "./src/controller/abr-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/polyfills/number.ts"), A = c("./src/utils/ewma-bandwidth-estimator.ts"), _ = c("./src/events.ts"), M = c("./src/utils/buffer-helper.ts"), O = c("./src/errors.ts"), D = c("./src/types/loader.ts"), L = c("./src/utils/logger.ts");
            function u(g, T) {
              for (var x = 0; x < T.length; x++) {
                var r = T[x];
                r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(g, r.key, r);
              }
            }
            function y(g, T, x) {
              return T && u(g.prototype, T), x && u(g, x), g;
            }
            var p = function() {
              function g(x) {
                this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = x;
                var r = x.config;
                this.bwEstimator = new A.default(r.abrEwmaSlowVoD, r.abrEwmaFastVoD, r.abrEwmaDefaultEstimate), this.registerListeners();
              }
              var T = g.prototype;
              return T.registerListeners = function() {
                var r = this.hls;
                r.on(_.Events.FRAG_LOADING, this.onFragLoading, this), r.on(_.Events.FRAG_LOADED, this.onFragLoaded, this), r.on(_.Events.FRAG_BUFFERED, this.onFragBuffered, this), r.on(_.Events.LEVEL_LOADED, this.onLevelLoaded, this), r.on(_.Events.ERROR, this.onError, this);
              }, T.unregisterListeners = function() {
                var r = this.hls;
                r.off(_.Events.FRAG_LOADING, this.onFragLoading, this), r.off(_.Events.FRAG_LOADED, this.onFragLoaded, this), r.off(_.Events.FRAG_BUFFERED, this.onFragBuffered, this), r.off(_.Events.LEVEL_LOADED, this.onLevelLoaded, this), r.off(_.Events.ERROR, this.onError, this);
              }, T.destroy = function() {
                this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
              }, T.onFragLoading = function(r, e) {
                var t = e.frag;
                if (t.type === D.PlaylistLevelType.MAIN && !this.timer) {
                  var i;
                  this.fragCurrent = t, this.partCurrent = (i = e.part) != null ? i : null, this.timer = self.setInterval(this.onCheck, 100);
                }
              }, T.onLevelLoaded = function(r, e) {
                var t = this.hls.config;
                e.details.live ? this.bwEstimator.update(t.abrEwmaSlowLive, t.abrEwmaFastLive) : this.bwEstimator.update(t.abrEwmaSlowVoD, t.abrEwmaFastVoD);
              }, T._abandonRulesCheck = function() {
                var r = this.fragCurrent, e = this.partCurrent, t = this.hls, i = t.autoLevelEnabled, d = t.config, s = t.media;
                if (!(!r || !s)) {
                  var f = e ? e.stats : r.stats, v = e ? e.duration : r.duration;
                  if (f.aborted) {
                    L.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), this._nextAutoLevel = -1;
                    return;
                  }
                  if (!(!i || s.paused || !s.playbackRate || !s.readyState)) {
                    var h = performance.now() - f.loading.start, l = Math.abs(s.playbackRate);
                    if (!(h <= 500 * v / l)) {
                      var o = t.levels, n = t.minAutoLevel, a = o[r.level], E = f.total || Math.max(f.loaded, Math.round(v * a.maxBitrate / 8)), m = Math.max(1, f.bwEstimate ? f.bwEstimate / 8 : f.loaded * 1e3 / h), S = (E - f.loaded) / m, P = s.currentTime, b = (M.BufferHelper.bufferInfo(s, P, d.maxBufferHole).end - P) / l;
                      if (!(b >= 2 * v / l || S <= b)) {
                        var C = Number.POSITIVE_INFINITY, B;
                        for (B = r.level - 1; B > n; B--) {
                          var F = o[B].maxBitrate;
                          if (C = v * F / (8 * 0.8 * m), C < b)
                            break;
                        }
                        if (!(C >= S)) {
                          var U = this.bwEstimator.getEstimate();
                          L.logger.warn("Fragment " + r.sn + (e ? " part " + e.index : "") + " of level " + r.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + B + `
      Current BW estimate: ` + (Object(R.isFiniteNumber)(U) ? (U / 1024).toFixed(3) : "Unknown") + ` Kb/s
      Estimated load time for current fragment: ` + S.toFixed(3) + ` s
      Estimated load time for the next fragment: ` + C.toFixed(3) + ` s
      Time to underbuffer: ` + b.toFixed(3) + " s"), t.nextLoadLevel = B, this.bwEstimator.sample(h, f.loaded), this.clearTimer(), r.loader && (this.fragCurrent = this.partCurrent = null, r.loader.abort()), t.trigger(_.Events.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, part: e, stats: f });
                        }
                      }
                    }
                  }
                }
              }, T.onFragLoaded = function(r, e) {
                var t = e.frag, i = e.part;
                if (t.type === D.PlaylistLevelType.MAIN && Object(R.isFiniteNumber)(t.sn)) {
                  var d = i ? i.stats : t.stats, s = i ? i.duration : t.duration;
                  if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                    var f = this.hls.levels[t.level], v = (f.loaded ? f.loaded.bytes : 0) + d.loaded, h = (f.loaded ? f.loaded.duration : 0) + s;
                    f.loaded = { bytes: v, duration: h }, f.realBitrate = Math.round(8 * v / h);
                  }
                  if (t.bitrateTest) {
                    var l = { stats: d, frag: t, part: i, id: t.type };
                    this.onFragBuffered(_.Events.FRAG_BUFFERED, l), t.bitrateTest = false;
                  }
                }
              }, T.onFragBuffered = function(r, e) {
                var t = e.frag, i = e.part, d = i ? i.stats : t.stats;
                if (!d.aborted && !(t.type !== D.PlaylistLevelType.MAIN || t.sn === "initSegment")) {
                  var s = d.parsing.end - d.loading.start;
                  this.bwEstimator.sample(s, d.loaded), d.bwEstimate = this.bwEstimator.getEstimate(), t.bitrateTest ? this.bitrateTestDelay = s / 1e3 : this.bitrateTestDelay = 0;
                }
              }, T.onError = function(r, e) {
                switch (e.details) {
                  case O.ErrorDetails.FRAG_LOAD_ERROR:
                  case O.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    this.clearTimer();
                    break;
                  default:
                    break;
                }
              }, T.clearTimer = function() {
                self.clearInterval(this.timer), this.timer = void 0;
              }, T.getNextABRAutoLevel = function() {
                var r = this.fragCurrent, e = this.partCurrent, t = this.hls, i = t.maxAutoLevel, d = t.config, s = t.minAutoLevel, f = t.media, v = e ? e.duration : r ? r.duration : 0, h = f ? f.currentTime : 0, l = f && f.playbackRate !== 0 ? Math.abs(f.playbackRate) : 1, o = this.bwEstimator ? this.bwEstimator.getEstimate() : d.abrEwmaDefaultEstimate, n = (M.BufferHelper.bufferInfo(f, h, d.maxBufferHole).end - h) / l, a = this.findBestLevel(o, s, i, n, d.abrBandWidthFactor, d.abrBandWidthUpFactor);
                if (a >= 0)
                  return a;
                L.logger.trace((n ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                var E = v ? Math.min(v, d.maxStarvationDelay) : d.maxStarvationDelay, m = d.abrBandWidthFactor, S = d.abrBandWidthUpFactor;
                if (!n) {
                  var P = this.bitrateTestDelay;
                  if (P) {
                    var b = v ? Math.min(v, d.maxLoadingDelay) : d.maxLoadingDelay;
                    E = b - P, L.logger.trace("bitrate test took " + Math.round(1e3 * P) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * E) + " ms"), m = S = 1;
                  }
                }
                return a = this.findBestLevel(o, s, i, n + E, m, S), Math.max(a, 0);
              }, T.findBestLevel = function(r, e, t, i, d, s) {
                for (var f, v = this.fragCurrent, h = this.partCurrent, l = this.lastLoadedFragLevel, o = this.hls.levels, n = o[l], a = !!(n != null && (f = n.details) !== null && f !== void 0 && f.live), E = n == null ? void 0 : n.codecSet, m = h ? h.duration : v ? v.duration : 0, S = t; S >= e; S--) {
                  var P = o[S];
                  if (!(!P || E && P.codecSet !== E)) {
                    var b = P.details, C = (h ? b == null ? void 0 : b.partTarget : b == null ? void 0 : b.averagetargetduration) || m, B = void 0;
                    S <= l ? B = d * r : B = s * r;
                    var F = o[S].maxBitrate, U = F * C / B;
                    if (L.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + S + "/" + Math.round(B) + "/" + F + "/" + C + "/" + i + "/" + U), B > F && (!U || a && !this.bitrateTestDelay || U < i))
                      return S;
                  }
                }
                return -1;
              }, y(g, [{ key: "nextAutoLevel", get: function() {
                var r = this._nextAutoLevel, e = this.bwEstimator;
                if (r !== -1 && (!e || !e.canEstimate()))
                  return r;
                var t = this.getNextABRAutoLevel();
                return r !== -1 && (t = Math.min(r, t)), t;
              }, set: function(r) {
                this._nextAutoLevel = r;
              } }]), g;
            }();
            I.default = p;
          }, "./src/controller/audio-stream-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/polyfills/number.ts"), A = c("./src/controller/base-stream-controller.ts"), _ = c("./src/events.ts"), M = c("./src/utils/buffer-helper.ts"), O = c("./src/controller/fragment-tracker.ts"), D = c("./src/types/level.ts"), L = c("./src/types/loader.ts"), u = c("./src/loader/fragment.ts"), y = c("./src/demux/chunk-cache.ts"), p = c("./src/demux/transmuxer-interface.ts"), g = c("./src/types/transmuxer.ts"), T = c("./src/controller/fragment-finders.ts"), x = c("./src/utils/discontinuities.ts"), r = c("./src/errors.ts"), e = c("./src/utils/logger.ts");
            function t() {
              return t = Object.assign || function(v) {
                for (var h = 1; h < arguments.length; h++) {
                  var l = arguments[h];
                  for (var o in l)
                    Object.prototype.hasOwnProperty.call(l, o) && (v[o] = l[o]);
                }
                return v;
              }, t.apply(this, arguments);
            }
            function i(v, h) {
              v.prototype = Object.create(h.prototype), v.prototype.constructor = v, d(v, h);
            }
            function d(v, h) {
              return d = Object.setPrototypeOf || function(o, n) {
                return o.__proto__ = n, o;
              }, d(v, h);
            }
            var s = 100, f = function(v) {
              i(h, v);
              function h(o, n) {
                var a;
                return a = v.call(this, o, n, "[audio-stream-controller]") || this, a.videoBuffer = null, a.videoTrackCC = -1, a.waitingVideoCC = -1, a.audioSwitch = false, a.trackId = -1, a.waitingData = null, a.mainDetails = null, a.bufferFlushed = false, a._registerListeners(), a;
              }
              var l = h.prototype;
              return l.onHandlerDestroying = function() {
                this._unregisterListeners(), this.mainDetails = null;
              }, l._registerListeners = function() {
                var n = this.hls;
                n.on(_.Events.MEDIA_ATTACHED, this.onMediaAttached, this), n.on(_.Events.MEDIA_DETACHING, this.onMediaDetaching, this), n.on(_.Events.MANIFEST_LOADING, this.onManifestLoading, this), n.on(_.Events.LEVEL_LOADED, this.onLevelLoaded, this), n.on(_.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), n.on(_.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), n.on(_.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), n.on(_.Events.ERROR, this.onError, this), n.on(_.Events.BUFFER_RESET, this.onBufferReset, this), n.on(_.Events.BUFFER_CREATED, this.onBufferCreated, this), n.on(_.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), n.on(_.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), n.on(_.Events.FRAG_BUFFERED, this.onFragBuffered, this);
              }, l._unregisterListeners = function() {
                var n = this.hls;
                n.off(_.Events.MEDIA_ATTACHED, this.onMediaAttached, this), n.off(_.Events.MEDIA_DETACHING, this.onMediaDetaching, this), n.off(_.Events.MANIFEST_LOADING, this.onManifestLoading, this), n.off(_.Events.LEVEL_LOADED, this.onLevelLoaded, this), n.off(_.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), n.off(_.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), n.off(_.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), n.off(_.Events.ERROR, this.onError, this), n.off(_.Events.BUFFER_RESET, this.onBufferReset, this), n.off(_.Events.BUFFER_CREATED, this.onBufferCreated, this), n.off(_.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), n.off(_.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), n.off(_.Events.FRAG_BUFFERED, this.onFragBuffered, this);
              }, l.onInitPtsFound = function(n, a) {
                var E = a.frag, m = a.id, S = a.initPTS;
                if (m === "main") {
                  var P = E.cc;
                  this.initPTS[E.cc] = S, this.log("InitPTS for cc: " + P + " found from main: " + S), this.videoTrackCC = P, this.state === A.State.WAITING_INIT_PTS && this.tick();
                }
              }, l.startLoad = function(n) {
                if (!this.levels) {
                  this.startPosition = n, this.state = A.State.STOPPED;
                  return;
                }
                var a = this.lastCurrentTime;
                this.stopLoad(), this.setInterval(s), this.fragLoadError = 0, a > 0 && n === -1 ? (this.log("Override startPosition with lastCurrentTime @" + a.toFixed(3)), this.state = A.State.IDLE) : (this.loadedmetadata = false, this.state = A.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = n, this.tick();
              }, l.doTick = function() {
                switch (this.state) {
                  case A.State.IDLE:
                    this.doTickIdle();
                    break;
                  case A.State.WAITING_TRACK: {
                    var n, a = this.levels, E = this.trackId, m = a == null || (n = a[E]) === null || n === void 0 ? void 0 : n.details;
                    if (m) {
                      if (this.waitForCdnTuneIn(m))
                        break;
                      this.state = A.State.WAITING_INIT_PTS;
                    }
                    break;
                  }
                  case A.State.FRAG_LOADING_WAITING_RETRY: {
                    var S, P = performance.now(), b = this.retryDate;
                    (!b || P >= b || (S = this.media) !== null && S !== void 0 && S.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = A.State.IDLE);
                    break;
                  }
                  case A.State.WAITING_INIT_PTS: {
                    var C = this.waitingData;
                    if (C) {
                      var B = C.frag, F = C.part, U = C.cache, w = C.complete;
                      if (this.initPTS[B.cc] !== void 0) {
                        this.waitingData = null, this.waitingVideoCC = -1, this.state = A.State.FRAG_LOADING;
                        var k = U.flush(), W = { frag: B, part: F, payload: k, networkDetails: null };
                        this._handleFragmentLoadProgress(W), w && v.prototype._handleFragmentLoadComplete.call(this, W);
                      } else if (this.videoTrackCC !== this.waitingVideoCC)
                        e.logger.log("Waiting fragment cc (" + B.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                      else {
                        var K = this.getLoadPosition(), j = M.BufferHelper.bufferInfo(this.mediaBuffer, K, this.config.maxBufferHole), G = Object(T.fragmentWithinToleranceTest)(j.end, this.config.maxFragLookUpTolerance, B);
                        G < 0 && (e.logger.log("Waiting fragment cc (" + B.cc + ") @ " + B.start + " cancelled because another fragment at " + j.end + " is needed"), this.clearWaitingFragment());
                      }
                    } else
                      this.state = A.State.IDLE;
                  }
                }
                this.onTickEnd();
              }, l.clearWaitingFragment = function() {
                var n = this.waitingData;
                n && (this.fragmentTracker.removeFragment(n.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = A.State.IDLE);
              }, l.onTickEnd = function() {
                var n = this.media;
                if (!(!n || !n.readyState)) {
                  var a = this.mediaBuffer ? this.mediaBuffer : n, E = a.buffered;
                  !this.loadedmetadata && E.length && (this.loadedmetadata = true), this.lastCurrentTime = n.currentTime;
                }
              }, l.doTickIdle = function() {
                var n, a, E = this.hls, m = this.levels, S = this.media, P = this.trackId, b = E.config;
                if (!(!m || !m[P]) && !(!S && (this.startFragRequested || !b.startFragPrefetch))) {
                  var C = m[P], B = C.details;
                  if (!B || B.live && this.levelLastLoaded !== P || this.waitForCdnTuneIn(B)) {
                    this.state = A.State.WAITING_TRACK;
                    return;
                  }
                  this.bufferFlushed && (this.bufferFlushed = false, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, u.ElementaryStreamTypes.AUDIO, L.PlaylistLevelType.AUDIO));
                  var F = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, L.PlaylistLevelType.AUDIO);
                  if (F !== null) {
                    var U = F.len, w = this.getMaxBufferLength(), k = this.audioSwitch;
                    if (!(U >= w && !k)) {
                      if (!k && this._streamEnded(F, B)) {
                        E.trigger(_.Events.BUFFER_EOS, { type: "audio" }), this.state = A.State.ENDED;
                        return;
                      }
                      var W = B.fragments, K = W[0].start, j = F.end;
                      if (k) {
                        var G = this.getLoadPosition();
                        j = G, B.PTSKnown && G < K && (F.end > K || F.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), S.currentTime = K + 0.05);
                      }
                      var H = this.getNextFragment(j, B);
                      if (!H) {
                        this.bufferFlushed = true;
                        return;
                      }
                      ((n = H.decryptdata) === null || n === void 0 ? void 0 : n.keyFormat) === "identity" && !((a = H.decryptdata) !== null && a !== void 0 && a.key) ? this.loadKey(H, B) : this.loadFragment(H, B, j);
                    }
                  }
                }
              }, l.getMaxBufferLength = function() {
                var n = v.prototype.getMaxBufferLength.call(this), a = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, L.PlaylistLevelType.MAIN);
                return a === null ? n : Math.max(n, a.len);
              }, l.onMediaDetaching = function() {
                this.videoBuffer = null, v.prototype.onMediaDetaching.call(this);
              }, l.onAudioTracksUpdated = function(n, a) {
                var E = a.audioTracks;
                this.resetTransmuxer(), this.levels = E.map(function(m) {
                  return new D.Level(m);
                });
              }, l.onAudioTrackSwitching = function(n, a) {
                var E = !!a.url;
                this.trackId = a.id;
                var m = this.fragCurrent;
                m != null && m.loader && m.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), E ? this.setInterval(s) : this.resetTransmuxer(), E ? (this.audioSwitch = true, this.state = A.State.IDLE) : this.state = A.State.STOPPED, this.tick();
              }, l.onManifestLoading = function() {
                this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = false;
              }, l.onLevelLoaded = function(n, a) {
                this.mainDetails = a.details;
              }, l.onAudioTrackLoaded = function(n, a) {
                var E, m = this.levels, S = a.details, P = a.id;
                if (!m) {
                  this.warn("Audio tracks were reset while loading level " + P);
                  return;
                }
                this.log("Track " + P + " loaded [" + S.startSN + "," + S.endSN + "],duration:" + S.totalduration);
                var b = m[P], C = 0;
                if (S.live || (E = b.details) !== null && E !== void 0 && E.live) {
                  var B = this.mainDetails;
                  if (S.fragments[0] || (S.deltaUpdateFailed = true), S.deltaUpdateFailed || !B)
                    return;
                  !b.details && S.hasProgramDateTime && B.hasProgramDateTime ? (Object(x.alignMediaPlaylistByPDT)(S, B), C = S.fragments[0].start) : C = this.alignPlaylists(S, b.details);
                }
                b.details = S, this.levelLastLoaded = P, !this.startFragRequested && (this.mainDetails || !S.live) && this.setStartPosition(b.details, C), this.state === A.State.WAITING_TRACK && !this.waitForCdnTuneIn(S) && (this.state = A.State.IDLE), this.tick();
              }, l._handleFragmentLoadProgress = function(n) {
                var a, E = n.frag, m = n.part, S = n.payload, P = this.config, b = this.trackId, C = this.levels;
                if (!C) {
                  this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + E.sn + " of level " + E.level + " will not be buffered");
                  return;
                }
                var B = C[b];
                console.assert(B, "Audio track is defined on fragment load progress");
                var F = B.details;
                console.assert(F, "Audio track details are defined on fragment load progress");
                var U = P.defaultAudioCodec || B.audioCodec || "mp4a.40.2", w = this.transmuxer;
                w || (w = this.transmuxer = new p.default(this.hls, L.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                var k = this.initPTS[E.cc], W = (a = E.initSegment) === null || a === void 0 ? void 0 : a.data;
                if (k !== void 0) {
                  var K = false, j = m ? m.index : -1, G = j !== -1, H = new g.ChunkMetadata(E.level, E.sn, E.stats.chunkCount, S.byteLength, j, G);
                  w.push(S, W, U, "", E, m, F.totalduration, K, H, k);
                } else {
                  e.logger.log("Unknown video PTS for cc " + E.cc + ", waiting for video PTS before demuxing audio frag " + E.sn + " of [" + F.startSN + " ," + F.endSN + "],track " + b);
                  var J = this.waitingData = this.waitingData || { frag: E, part: m, cache: new y.default(), complete: false }, Q = J.cache;
                  Q.push(new Uint8Array(S)), this.waitingVideoCC = this.videoTrackCC, this.state = A.State.WAITING_INIT_PTS;
                }
              }, l._handleFragmentLoadComplete = function(n) {
                if (this.waitingData) {
                  this.waitingData.complete = true;
                  return;
                }
                v.prototype._handleFragmentLoadComplete.call(this, n);
              }, l.onBufferReset = function() {
                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = false;
              }, l.onBufferCreated = function(n, a) {
                var E = a.tracks.audio;
                E && (this.mediaBuffer = E.buffer), a.tracks.video && (this.videoBuffer = a.tracks.video.buffer);
              }, l.onFragBuffered = function(n, a) {
                var E = a.frag, m = a.part;
                if (E.type === L.PlaylistLevelType.AUDIO) {
                  if (this.fragContextChanged(E)) {
                    this.warn("Fragment " + E.sn + (m ? " p: " + m.index : "") + " of level " + E.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch);
                    return;
                  }
                  E.sn !== "initSegment" && (this.fragPrevious = E, this.audioSwitch && (this.audioSwitch = false, this.hls.trigger(_.Events.AUDIO_TRACK_SWITCHED, { id: this.trackId }))), this.fragBufferedComplete(E, m);
                }
              }, l.onError = function(n, a) {
                switch (a.details) {
                  case r.ErrorDetails.FRAG_LOAD_ERROR:
                  case r.ErrorDetails.FRAG_LOAD_TIMEOUT:
                  case r.ErrorDetails.KEY_LOAD_ERROR:
                  case r.ErrorDetails.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(L.PlaylistLevelType.AUDIO, a);
                    break;
                  case r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                  case r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                    this.state !== A.State.ERROR && this.state !== A.State.STOPPED && (this.state = a.fatal ? A.State.ERROR : A.State.IDLE, this.warn(a.details + " while loading frag, switching to " + this.state + " state"));
                    break;
                  case r.ErrorDetails.BUFFER_FULL_ERROR:
                    if (a.parent === "audio" && (this.state === A.State.PARSING || this.state === A.State.PARSED)) {
                      var E = true, m = this.getFwdBufferInfo(this.mediaBuffer, L.PlaylistLevelType.AUDIO);
                      m && m.len > 0.5 && (E = !this.reduceMaxBufferLength(m.len)), E && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, v.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState();
                    }
                    break;
                  default:
                    break;
                }
              }, l.onBufferFlushed = function(n, a) {
                var E = a.type;
                E === u.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = true);
              }, l._handleTransmuxComplete = function(n) {
                var a, E = "audio", m = this.hls, S = n.remuxResult, P = n.chunkMeta, b = this.getCurrentContext(P);
                if (!b) {
                  this.warn("The loading context changed while buffering fragment " + P.sn + " of level " + P.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(P.level);
                  return;
                }
                var C = b.frag, B = b.part, F = S.audio, U = S.text, w = S.id3, k = S.initSegment;
                if (!this.fragContextChanged(C)) {
                  if (this.state = A.State.PARSING, this.audioSwitch && F && this.completeAudioSwitch(), k != null && k.tracks && (this._bufferInitSegment(k.tracks, C, P), m.trigger(_.Events.FRAG_PARSING_INIT_SEGMENT, { frag: C, id: E, tracks: k.tracks })), F) {
                    var W = F.startPTS, K = F.endPTS, j = F.startDTS, G = F.endDTS;
                    B && (B.elementaryStreams[u.ElementaryStreamTypes.AUDIO] = { startPTS: W, endPTS: K, startDTS: j, endDTS: G }), C.setElementaryStreamInfo(u.ElementaryStreamTypes.AUDIO, W, K, j, G), this.bufferFragmentData(F, C, B, P);
                  }
                  if (w != null && (a = w.samples) !== null && a !== void 0 && a.length) {
                    var H = t({ frag: C, id: E }, w);
                    m.trigger(_.Events.FRAG_PARSING_METADATA, H);
                  }
                  if (U) {
                    var J = t({ frag: C, id: E }, U);
                    m.trigger(_.Events.FRAG_PARSING_USERDATA, J);
                  }
                }
              }, l._bufferInitSegment = function(n, a, E) {
                if (this.state === A.State.PARSING) {
                  n.video && delete n.video;
                  var m = n.audio;
                  if (!!m) {
                    m.levelCodec = m.codec, m.id = "audio", this.log("Init audio buffer, container:" + m.container + ", codecs[parsed]=[" + m.codec + "]"), this.hls.trigger(_.Events.BUFFER_CODECS, n);
                    var S = m.initSegment;
                    if (S != null && S.byteLength) {
                      var P = { type: "audio", frag: a, part: null, chunkMeta: E, parent: a.type, data: S };
                      this.hls.trigger(_.Events.BUFFER_APPENDING, P);
                    }
                    this.tick();
                  }
                }
              }, l.loadFragment = function(n, a, E) {
                var m = this.fragmentTracker.getState(n);
                this.fragCurrent = n, (this.audioSwitch || m === O.FragmentState.NOT_LOADED || m === O.FragmentState.PARTIAL) && (n.sn === "initSegment" ? this._loadInitSegment(n) : a.live && !Object(R.isFiniteNumber)(this.initPTS[n.cc]) ? (this.log("Waiting for video PTS in continuity counter " + n.cc + " of live stream before loading audio fragment " + n.sn + " of level " + this.trackId), this.state = A.State.WAITING_INIT_PTS) : (this.startFragRequested = true, v.prototype.loadFragment.call(this, n, a, E)));
              }, l.completeAudioSwitch = function() {
                var n = this.hls, a = this.media, E = this.trackId;
                a && (this.log("Switching audio track : flushing all audio"), v.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = false, n.trigger(_.Events.AUDIO_TRACK_SWITCHED, { id: E });
              }, h;
            }(A.default);
            I.default = f;
          }, "./src/controller/audio-track-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/events.ts"), A = c("./src/errors.ts"), _ = c("./src/controller/base-playlist-controller.ts"), M = c("./src/types/loader.ts");
            function O(p, g) {
              for (var T = 0; T < g.length; T++) {
                var x = g[T];
                x.enumerable = x.enumerable || false, x.configurable = true, "value" in x && (x.writable = true), Object.defineProperty(p, x.key, x);
              }
            }
            function D(p, g, T) {
              return g && O(p.prototype, g), T && O(p, T), p;
            }
            function L(p, g) {
              p.prototype = Object.create(g.prototype), p.prototype.constructor = p, u(p, g);
            }
            function u(p, g) {
              return u = Object.setPrototypeOf || function(x, r) {
                return x.__proto__ = r, x;
              }, u(p, g);
            }
            var y = function(p) {
              L(g, p);
              function g(x) {
                var r;
                return r = p.call(this, x, "[audio-track-controller]") || this, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.trackName = "", r.selectDefaultTrack = true, r.registerListeners(), r;
              }
              var T = g.prototype;
              return T.registerListeners = function() {
                var r = this.hls;
                r.on(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), r.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), r.on(R.Events.LEVEL_LOADING, this.onLevelLoading, this), r.on(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), r.on(R.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), r.on(R.Events.ERROR, this.onError, this);
              }, T.unregisterListeners = function() {
                var r = this.hls;
                r.off(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), r.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), r.off(R.Events.LEVEL_LOADING, this.onLevelLoading, this), r.off(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), r.off(R.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), r.off(R.Events.ERROR, this.onError, this);
              }, T.destroy = function() {
                this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, p.prototype.destroy.call(this);
              }, T.onManifestLoading = function() {
                this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = true;
              }, T.onManifestParsed = function(r, e) {
                this.tracks = e.audioTracks || [];
              }, T.onAudioTrackLoaded = function(r, e) {
                var t = e.id, i = e.details, d = this.tracksInGroup[t];
                if (!d) {
                  this.warn("Invalid audio track id " + t);
                  return;
                }
                var s = d.details;
                d.details = e.details, this.log("audioTrack " + t + " loaded [" + i.startSN + "-" + i.endSN + "]"), t === this.trackId && (this.retryCount = 0, this.playlistLoaded(t, e, s));
              }, T.onLevelLoading = function(r, e) {
                this.switchLevel(e.level);
              }, T.onLevelSwitching = function(r, e) {
                this.switchLevel(e.level);
              }, T.switchLevel = function(r) {
                var e = this.hls.levels[r];
                if (!!(e != null && e.audioGroupIds)) {
                  var t = e.audioGroupIds[e.urlId];
                  if (this.groupId !== t) {
                    this.groupId = t;
                    var i = this.tracks.filter(function(s) {
                      return !t || s.groupId === t;
                    });
                    this.selectDefaultTrack && !i.some(function(s) {
                      return s.default;
                    }) && (this.selectDefaultTrack = false), this.tracksInGroup = i;
                    var d = { audioTracks: i };
                    this.log("Updating audio tracks, " + i.length + ' track(s) found in "' + t + '" group-id'), this.hls.trigger(R.Events.AUDIO_TRACKS_UPDATED, d), this.selectInitialTrack();
                  }
                }
              }, T.onError = function(r, e) {
                p.prototype.onError.call(this, r, e), !(e.fatal || !e.context) && e.context.type === M.PlaylistContextType.AUDIO_TRACK && e.context.id === this.trackId && e.context.groupId === this.groupId && this.retryLoadingOrFail(e);
              }, T.setAudioTrack = function(r) {
                var e = this.tracksInGroup;
                if (r < 0 || r >= e.length) {
                  this.warn("Invalid id passed to audio-track controller");
                  return;
                }
                this.clearTimer();
                var t = e[this.trackId];
                this.log("Now switching to audio-track index " + r);
                var i = e[r], d = i.id, s = i.groupId, f = s === void 0 ? "" : s, v = i.name, h = i.type, l = i.url;
                if (this.trackId = r, this.trackName = v, this.selectDefaultTrack = false, this.hls.trigger(R.Events.AUDIO_TRACK_SWITCHING, { id: d, groupId: f, name: v, type: h, url: l }), !(i.details && !i.details.live)) {
                  var o = this.switchParams(i.url, t == null ? void 0 : t.details);
                  this.loadPlaylist(o);
                }
              }, T.selectInitialTrack = function() {
                var r = this.tracksInGroup;
                console.assert(r.length, "Initial audio track should be selected when tracks are known");
                var e = this.trackName, t = this.findTrackId(e) || this.findTrackId();
                t !== -1 ? this.setAudioTrack(t) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: true }));
              }, T.findTrackId = function(r) {
                for (var e = this.tracksInGroup, t = 0; t < e.length; t++) {
                  var i = e[t];
                  if ((!this.selectDefaultTrack || i.default) && (!r || r === i.name))
                    return i.id;
                }
                return -1;
              }, T.loadPlaylist = function(r) {
                var e = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(e)) {
                  var t = e.id, i = e.groupId, d = e.url;
                  if (r)
                    try {
                      d = r.addDirectives(d);
                    } catch (s) {
                      this.warn("Could not construct new URL with HLS Delivery Directives: " + s);
                    }
                  this.log("loading audio-track playlist for id: " + t), this.clearTimer(), this.hls.trigger(R.Events.AUDIO_TRACK_LOADING, { url: d, id: t, groupId: i, deliveryDirectives: r || null });
                }
              }, D(g, [{ key: "audioTracks", get: function() {
                return this.tracksInGroup;
              } }, { key: "audioTrack", get: function() {
                return this.trackId;
              }, set: function(r) {
                this.selectDefaultTrack = false, this.setAudioTrack(r);
              } }]), g;
            }(_.default);
            I.default = y;
          }, "./src/controller/base-playlist-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return D;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/types/level.ts"), _ = c("./src/controller/level-helper.ts"), M = c("./src/utils/logger.ts"), O = c("./src/errors.ts"), D = function() {
              function L(y, p) {
                this.hls = void 0, this.timer = -1, this.canLoad = false, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = M.logger.log.bind(M.logger, p + ":"), this.warn = M.logger.warn.bind(M.logger, p + ":"), this.hls = y;
              }
              var u = L.prototype;
              return u.destroy = function() {
                this.clearTimer(), this.hls = this.log = this.warn = null;
              }, u.onError = function(p, g) {
                g.fatal && g.type === O.ErrorTypes.NETWORK_ERROR && this.clearTimer();
              }, u.clearTimer = function() {
                clearTimeout(this.timer), this.timer = -1;
              }, u.startLoad = function() {
                this.canLoad = true, this.retryCount = 0, this.loadPlaylist();
              }, u.stopLoad = function() {
                this.canLoad = false, this.clearTimer();
              }, u.switchParams = function(p, g) {
                var T = g == null ? void 0 : g.renditionReports;
                if (T)
                  for (var x = 0; x < T.length; x++) {
                    var r = T[x], e = "" + r.URI;
                    if (e === p.substr(-e.length)) {
                      var t = parseInt(r["LAST-MSN"]), i = parseInt(r["LAST-PART"]);
                      if (g && this.hls.config.lowLatencyMode) {
                        var d = Math.min(g.age - g.partTarget, g.targetduration);
                        i !== void 0 && d > g.partTarget && (i += 1);
                      }
                      if (Object(R.isFiniteNumber)(t))
                        return new A.HlsUrlParameters(t, Object(R.isFiniteNumber)(i) ? i : void 0, A.HlsSkip.No);
                    }
                  }
              }, u.loadPlaylist = function(p) {
              }, u.shouldLoadTrack = function(p) {
                return this.canLoad && p && !!p.url && (!p.details || p.details.live);
              }, u.playlistLoaded = function(p, g, T) {
                var x = this, r = g.details, e = g.stats, t = e.loading.end ? Math.max(0, self.performance.now() - e.loading.end) : 0;
                if (r.advancedDateTime = Date.now() - t, r.live || T != null && T.live) {
                  if (r.reloaded(T), T && this.log("live playlist " + p + " " + (r.advanced ? "REFRESHED " + r.lastPartSn + "-" + r.lastPartIndex : "MISSED")), T && r.fragments.length > 0 && Object(_.mergeDetails)(T, r), !this.canLoad || !r.live)
                    return;
                  var i, d = void 0, s = void 0;
                  if (r.canBlockReload && r.endSN && r.advanced) {
                    var f = this.hls.config.lowLatencyMode, v = r.lastPartSn, h = r.endSN, l = r.lastPartIndex, o = l !== -1, n = v === h, a = f ? 0 : l;
                    o ? (d = n ? h + 1 : v, s = n ? a : l + 1) : d = h + 1;
                    var E = r.age, m = E + r.ageHeader, S = Math.min(m - r.partTarget, r.targetduration * 1.5);
                    if (S > 0) {
                      if (T && S > T.tuneInGoal)
                        this.warn("CDN Tune-in goal increased from: " + T.tuneInGoal + " to: " + S + " with playlist age: " + r.age), S = 0;
                      else {
                        var P = Math.floor(S / r.targetduration);
                        if (d += P, s !== void 0) {
                          var b = Math.round(S % r.targetduration / r.partTarget);
                          s += b;
                        }
                        this.log("CDN Tune-in age: " + r.ageHeader + "s last advanced " + E.toFixed(2) + "s goal: " + S + " skip sn " + P + " to part " + s);
                      }
                      r.tuneInGoal = S;
                    }
                    if (i = this.getDeliveryDirectives(r, g.deliveryDirectives, d, s), f || !n) {
                      this.loadPlaylist(i);
                      return;
                    }
                  } else
                    i = this.getDeliveryDirectives(r, g.deliveryDirectives, d, s);
                  var C = Object(_.computeReloadInterval)(r, e);
                  d !== void 0 && r.canBlockReload && (C -= r.partTarget || 1), this.log("reload live playlist " + p + " in " + Math.round(C) + " ms"), this.timer = self.setTimeout(function() {
                    return x.loadPlaylist(i);
                  }, C);
                } else
                  this.clearTimer();
              }, u.getDeliveryDirectives = function(p, g, T, x) {
                var r = Object(A.getSkipValue)(p, T);
                return g != null && g.skip && p.deltaUpdateFailed && (T = g.msn, x = g.part, r = A.HlsSkip.No), new A.HlsUrlParameters(T, x, r);
              }, u.retryLoadingOrFail = function(p) {
                var g = this, T = this.hls.config, x = this.retryCount < T.levelLoadingMaxRetry;
                if (x) {
                  var r;
                  if (this.retryCount++, p.details.indexOf("LoadTimeOut") > -1 && (r = p.context) !== null && r !== void 0 && r.deliveryDirectives)
                    this.warn("retry playlist loading #" + this.retryCount + ' after "' + p.details + '"'), this.loadPlaylist();
                  else {
                    var e = Math.min(Math.pow(2, this.retryCount) * T.levelLoadingRetryDelay, T.levelLoadingMaxRetryTimeout);
                    this.timer = self.setTimeout(function() {
                      return g.loadPlaylist();
                    }, e), this.warn("retry playlist loading #" + this.retryCount + " in " + e + ' ms after "' + p.details + '"');
                  }
                } else
                  this.warn('cannot recover from error "' + p.details + '"'), this.clearTimer(), p.fatal = true;
                return x;
              }, L;
            }();
          }, "./src/controller/base-stream-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "State", function() {
              return h;
            }), c.d(I, "default", function() {
              return l;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/task-loop.ts"), _ = c("./src/controller/fragment-tracker.ts"), M = c("./src/utils/buffer-helper.ts"), O = c("./src/utils/logger.ts"), D = c("./src/events.ts"), L = c("./src/errors.ts"), u = c("./src/types/transmuxer.ts"), y = c("./src/utils/mp4-tools.ts"), p = c("./src/utils/discontinuities.ts"), g = c("./src/controller/fragment-finders.ts"), T = c("./src/controller/level-helper.ts"), x = c("./src/loader/fragment-loader.ts"), r = c("./src/crypt/decrypter.ts"), e = c("./src/utils/time-ranges.ts"), t = c("./src/types/loader.ts");
            function i(o, n) {
              for (var a = 0; a < n.length; a++) {
                var E = n[a];
                E.enumerable = E.enumerable || false, E.configurable = true, "value" in E && (E.writable = true), Object.defineProperty(o, E.key, E);
              }
            }
            function d(o, n, a) {
              return n && i(o.prototype, n), a && i(o, a), o;
            }
            function s(o) {
              if (o === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return o;
            }
            function f(o, n) {
              o.prototype = Object.create(n.prototype), o.prototype.constructor = o, v(o, n);
            }
            function v(o, n) {
              return v = Object.setPrototypeOf || function(E, m) {
                return E.__proto__ = m, E;
              }, v(o, n);
            }
            var h = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BACKTRACKING: "BACKTRACKING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" }, l = function(o) {
              f(n, o);
              function n(E, m, S) {
                var P;
                return P = o.call(this) || this, P.hls = void 0, P.fragPrevious = null, P.fragCurrent = null, P.fragmentTracker = void 0, P.transmuxer = null, P._state = h.STOPPED, P.media = void 0, P.mediaBuffer = void 0, P.config = void 0, P.bitrateTest = false, P.lastCurrentTime = 0, P.nextLoadPosition = 0, P.startPosition = 0, P.loadedmetadata = false, P.fragLoadError = 0, P.retryDate = 0, P.levels = null, P.fragmentLoader = void 0, P.levelLastLoaded = null, P.startFragRequested = false, P.decrypter = void 0, P.initPTS = [], P.onvseeking = null, P.onvended = null, P.logPrefix = "", P.log = void 0, P.warn = void 0, P.logPrefix = S, P.log = O.logger.log.bind(O.logger, S + ":"), P.warn = O.logger.warn.bind(O.logger, S + ":"), P.hls = E, P.fragmentLoader = new x.default(E.config), P.fragmentTracker = m, P.config = E.config, P.decrypter = new r.default(E, E.config), E.on(D.Events.KEY_LOADED, P.onKeyLoaded, s(P)), P;
              }
              var a = n.prototype;
              return a.doTick = function() {
                this.onTickEnd();
              }, a.onTickEnd = function() {
              }, a.startLoad = function(m) {
              }, a.stopLoad = function() {
                this.fragmentLoader.abort();
                var m = this.fragCurrent;
                m && this.fragmentTracker.removeFragment(m), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = h.STOPPED;
              }, a._streamEnded = function(m, S) {
                var P = this.fragCurrent, b = this.fragmentTracker;
                if (!S.live && P && P.sn === S.endSN && !m.nextStart) {
                  var C = b.getState(P);
                  return C === _.FragmentState.PARTIAL || C === _.FragmentState.OK;
                }
                return false;
              }, a.onMediaAttached = function(m, S) {
                var P = this.media = this.mediaBuffer = S.media;
                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), P.addEventListener("seeking", this.onvseeking), P.addEventListener("ended", this.onvended);
                var b = this.config;
                this.levels && b.autoStartLoad && this.state === h.STOPPED && this.startLoad(b.startPosition);
              }, a.onMediaDetaching = function() {
                var m = this.media;
                m != null && m.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), m && (m.removeEventListener("seeking", this.onvseeking), m.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
              }, a.onMediaSeeking = function() {
                var m = this.config, S = this.fragCurrent, P = this.media, b = this.mediaBuffer, C = this.state, B = P ? P.currentTime : 0, F = M.BufferHelper.bufferInfo(b || P, B, m.maxBufferHole);
                if (this.log("media seeking to " + (Object(R.isFiniteNumber)(B) ? B.toFixed(3) : B) + ", state: " + C), C === h.ENDED)
                  this.resetLoadingState();
                else if (S && !F.len) {
                  var U = m.maxFragLookUpTolerance, w = S.start - U, k = S.start + S.duration + U, W = B > k;
                  (B < w || W) && (W && S.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), S.loader.abort()), this.resetLoadingState());
                }
                P && (this.lastCurrentTime = B), !this.loadedmetadata && !F.len && (this.nextLoadPosition = this.startPosition = B), this.tickImmediate();
              }, a.onMediaEnded = function() {
                this.startPosition = this.lastCurrentTime = 0;
              }, a.onKeyLoaded = function(m, S) {
                if (!(this.state !== h.KEY_LOADING || S.frag !== this.fragCurrent || !this.levels)) {
                  this.state = h.IDLE;
                  var P = this.levels[S.frag.level].details;
                  P && this.loadFragment(S.frag, P, S.frag.start);
                }
              }, a.onHandlerDestroying = function() {
                this.stopLoad(), o.prototype.onHandlerDestroying.call(this);
              }, a.onHandlerDestroyed = function() {
                this.state = h.STOPPED, this.hls.off(D.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, o.prototype.onHandlerDestroyed.call(this);
              }, a.loadKey = function(m, S) {
                this.log("Loading key for " + m.sn + " of [" + S.startSN + "-" + S.endSN + "], " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + m.level), this.state = h.KEY_LOADING, this.fragCurrent = m, this.hls.trigger(D.Events.KEY_LOADING, { frag: m });
              }, a.loadFragment = function(m, S, P) {
                this._loadFragForPlayback(m, S, P);
              }, a._loadFragForPlayback = function(m, S, P) {
                var b = this, C = function(F) {
                  if (b.fragContextChanged(m)) {
                    b.warn("Fragment " + m.sn + (F.part ? " p: " + F.part.index : "") + " of level " + m.level + " was dropped during download."), b.fragmentTracker.removeFragment(m);
                    return;
                  }
                  m.stats.chunkCount++, b._handleFragmentLoadProgress(F);
                };
                this._doFragLoad(m, S, P, C).then(function(B) {
                  if (!!B) {
                    b.fragLoadError = 0;
                    var F = b.state;
                    if (b.fragContextChanged(m)) {
                      (F === h.FRAG_LOADING || F === h.BACKTRACKING || !b.fragCurrent && F === h.PARSING) && (b.fragmentTracker.removeFragment(m), b.state = h.IDLE);
                      return;
                    }
                    if ("payload" in B && (b.log("Loaded fragment " + m.sn + " of level " + m.level), b.hls.trigger(D.Events.FRAG_LOADED, B), b.state === h.BACKTRACKING)) {
                      b.fragmentTracker.backtrack(m, B), b.resetFragmentLoading(m);
                      return;
                    }
                    b._handleFragmentLoadComplete(B);
                  }
                }).catch(function(B) {
                  b.warn(B), b.resetFragmentLoading(m);
                });
              }, a.flushMainBuffer = function(m, S, P) {
                if (P === void 0 && (P = null), !!(m - S)) {
                  var b = { startOffset: m, endOffset: S, type: P };
                  this.fragLoadError = 0, this.hls.trigger(D.Events.BUFFER_FLUSHING, b);
                }
              }, a._loadInitSegment = function(m) {
                var S = this;
                this._doFragLoad(m).then(function(P) {
                  if (!P || S.fragContextChanged(m) || !S.levels)
                    throw new Error("init load aborted");
                  return P;
                }).then(function(P) {
                  var b = S.hls, C = P.payload, B = m.decryptdata;
                  if (C && C.byteLength > 0 && B && B.key && B.iv && B.method === "AES-128") {
                    var F = self.performance.now();
                    return S.decrypter.webCryptoDecrypt(new Uint8Array(C), B.key.buffer, B.iv.buffer).then(function(U) {
                      var w = self.performance.now();
                      return b.trigger(D.Events.FRAG_DECRYPTED, { frag: m, payload: U, stats: { tstart: F, tdecrypt: w } }), P.payload = U, P;
                    });
                  }
                  return P;
                }).then(function(P) {
                  var b = S.fragCurrent, C = S.hls, B = S.levels;
                  if (!B)
                    throw new Error("init load aborted, missing levels");
                  var F = B[m.level].details;
                  console.assert(F, "Level details are defined when init segment is loaded");
                  var U = m.stats;
                  S.state = h.IDLE, S.fragLoadError = 0, m.data = new Uint8Array(P.payload), U.parsing.start = U.buffering.start = self.performance.now(), U.parsing.end = U.buffering.end = self.performance.now(), P.frag === b && C.trigger(D.Events.FRAG_BUFFERED, { stats: U, frag: b, part: null, id: m.type }), S.tick();
                }).catch(function(P) {
                  S.warn(P), S.resetFragmentLoading(m);
                });
              }, a.fragContextChanged = function(m) {
                var S = this.fragCurrent;
                return !m || !S || m.level !== S.level || m.sn !== S.sn || m.urlId !== S.urlId;
              }, a.fragBufferedComplete = function(m, S) {
                var P = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.log("Buffered " + m.type + " sn: " + m.sn + (S ? " part: " + S.index : "") + " of " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + m.level + " " + e.default.toString(M.BufferHelper.getBuffered(P))), this.state = h.IDLE, this.tick();
              }, a._handleFragmentLoadComplete = function(m) {
                var S = this.transmuxer;
                if (!!S) {
                  var P = m.frag, b = m.part, C = m.partsLoaded, B = !C || C.length === 0 || C.some(function(U) {
                    return !U;
                  }), F = new u.ChunkMetadata(P.level, P.sn, P.stats.chunkCount + 1, 0, b ? b.index : -1, !B);
                  S.flush(F);
                }
              }, a._handleFragmentLoadProgress = function(m) {
              }, a._doFragLoad = function(m, S, P, b) {
                var C = this;
                if (P === void 0 && (P = null), !this.levels)
                  throw new Error("frag load aborted, missing levels");
                if (P = Math.max(m.start, P || 0), this.config.lowLatencyMode && S) {
                  var B = S.partList;
                  if (B && b) {
                    P > m.end && S.fragmentHint && (m = S.fragmentHint);
                    var F = this.getNextPart(B, m, P);
                    if (F > -1) {
                      var U = B[F];
                      return this.log("Loading part sn: " + m.sn + " p: " + U.index + " cc: " + m.cc + " of playlist [" + S.startSN + "-" + S.endSN + "] parts [0-" + F + "-" + (B.length - 1) + "] " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + m.level + ", target: " + parseFloat(P.toFixed(3))), this.nextLoadPosition = U.start + U.duration, this.state = h.FRAG_LOADING, this.hls.trigger(D.Events.FRAG_LOADING, { frag: m, part: B[F], targetBufferTime: P }), this.doFragPartsLoad(m, B, F, b).catch(function(w) {
                        return C.handleFragLoadError(w);
                      });
                    } else if (!m.url || this.loadedEndOfParts(B, P))
                      return Promise.resolve(null);
                  }
                }
                return this.log("Loading fragment " + m.sn + " cc: " + m.cc + " " + (S ? "of [" + S.startSN + "-" + S.endSN + "] " : "") + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + m.level + ", target: " + parseFloat(P.toFixed(3))), Object(R.isFiniteNumber)(m.sn) && !this.bitrateTest && (this.nextLoadPosition = m.start + m.duration), this.state = h.FRAG_LOADING, this.hls.trigger(D.Events.FRAG_LOADING, { frag: m, targetBufferTime: P }), this.fragmentLoader.load(m, b).catch(function(w) {
                  return C.handleFragLoadError(w);
                });
              }, a.doFragPartsLoad = function(m, S, P, b) {
                var C = this;
                return new Promise(function(B, F) {
                  var U = [], w = function k(W) {
                    var K = S[W];
                    C.fragmentLoader.loadPart(m, K, b).then(function(j) {
                      U[K.index] = j;
                      var G = j.part;
                      C.hls.trigger(D.Events.FRAG_LOADED, j);
                      var H = S[W + 1];
                      if (H && H.fragment === m)
                        k(W + 1);
                      else
                        return B({ frag: m, part: G, partsLoaded: U });
                    }).catch(F);
                  };
                  w(P);
                });
              }, a.handleFragLoadError = function(m) {
                var S = m.data;
                return S && S.details === L.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(S.frag, S.part) : this.hls.trigger(D.Events.ERROR, S), null;
              }, a._handleTransmuxerFlush = function(m) {
                var S = this.getCurrentContext(m);
                if (!S || this.state !== h.PARSING) {
                  this.fragCurrent || (this.state = h.IDLE);
                  return;
                }
                var P = S.frag, b = S.part, C = S.level, B = self.performance.now();
                P.stats.parsing.end = B, b && (b.stats.parsing.end = B), this.updateLevelTiming(P, b, C, m.partial);
              }, a.getCurrentContext = function(m) {
                var S = this.levels, P = m.level, b = m.sn, C = m.part;
                if (!S || !S[P])
                  return this.warn("Levels object was unset while buffering fragment " + b + " of level " + P + ". The current chunk will not be buffered."), null;
                var B = S[P], F = C > -1 ? Object(T.getPartWith)(B, b, C) : null, U = F ? F.fragment : Object(T.getFragmentWithSN)(B, b, this.fragCurrent);
                return U ? { frag: U, part: F, level: B } : null;
              }, a.bufferFragmentData = function(m, S, P, b) {
                if (!(!m || this.state !== h.PARSING)) {
                  var C = m.data1, B = m.data2, F = C;
                  if (C && B && (F = Object(y.appendUint8Array)(C, B)), !(!F || !F.length)) {
                    var U = { type: m.type, frag: S, part: P, chunkMeta: b, parent: S.type, data: F };
                    this.hls.trigger(D.Events.BUFFER_APPENDING, U), m.dropped && m.independent && !P && this.flushBufferGap(S);
                  }
                }
              }, a.flushBufferGap = function(m) {
                var S = this.media;
                if (!!S) {
                  if (!M.BufferHelper.isBuffered(S, S.currentTime)) {
                    this.flushMainBuffer(0, m.start);
                    return;
                  }
                  var P = S.currentTime, b = M.BufferHelper.bufferInfo(S, P, 0), C = m.duration, B = Math.min(this.config.maxFragLookUpTolerance * 2, C * 0.25), F = Math.max(Math.min(m.start - B, b.end - B), P + B);
                  m.start - F > B && this.flushMainBuffer(F, m.start);
                }
              }, a.getFwdBufferInfo = function(m, S) {
                var P = this.config, b = this.getLoadPosition();
                if (!Object(R.isFiniteNumber)(b))
                  return null;
                var C = M.BufferHelper.bufferInfo(m, b, P.maxBufferHole);
                if (C.len === 0 && C.nextStart !== void 0) {
                  var B = this.fragmentTracker.getBufferedFrag(b, S);
                  if (B && C.nextStart < B.end)
                    return M.BufferHelper.bufferInfo(m, b, Math.max(C.nextStart, P.maxBufferHole));
                }
                return C;
              }, a.getMaxBufferLength = function(m) {
                var S = this.config, P;
                return m ? P = Math.max(8 * S.maxBufferSize / m, S.maxBufferLength) : P = S.maxBufferLength, Math.min(P, S.maxMaxBufferLength);
              }, a.reduceMaxBufferLength = function(m) {
                var S = this.config, P = m || S.maxBufferLength;
                return S.maxMaxBufferLength >= P ? (S.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + S.maxMaxBufferLength + "s"), true) : false;
              }, a.getNextFragment = function(m, S) {
                var P, b, C = S.fragments, B = C.length;
                if (!B)
                  return null;
                var F = this.config, U = C[0].start, w;
                if (S.live) {
                  var k = F.initialLiveManifestSize;
                  if (B < k)
                    return this.warn("Not enough fragments to start playback (have: " + B + ", need: " + k + ")"), null;
                  !S.PTSKnown && !this.startFragRequested && this.startPosition === -1 && (w = this.getInitialLiveFragment(S, C), this.startPosition = w ? this.hls.liveSyncPosition || w.start : m);
                } else
                  m <= U && (w = C[0]);
                if (!w) {
                  var W = F.lowLatencyMode ? S.partEnd : S.fragmentEnd;
                  w = this.getFragmentAtPosition(m, W, S);
                }
                return (P = w) !== null && P !== void 0 && P.initSegment && !((b = w) !== null && b !== void 0 && b.initSegment.data) && !this.bitrateTest && (w = w.initSegment), w;
              }, a.getNextPart = function(m, S, P) {
                for (var b = -1, C = false, B = true, F = 0, U = m.length; F < U; F++) {
                  var w = m[F];
                  if (B = B && !w.independent, b > -1 && P < w.start)
                    break;
                  var k = w.loaded;
                  !k && (C || w.independent || B) && w.fragment === S && (b = F), C = k;
                }
                return b;
              }, a.loadedEndOfParts = function(m, S) {
                var P = m[m.length - 1];
                return P && S > P.start && P.loaded;
              }, a.getInitialLiveFragment = function(m, S) {
                var P = this.fragPrevious, b = null;
                if (P) {
                  if (m.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + P.programDateTime), b = Object(g.findFragmentByPDT)(S, P.endProgramDateTime, this.config.maxFragLookUpTolerance)), !b) {
                    var C = P.sn + 1;
                    if (C >= m.startSN && C <= m.endSN) {
                      var B = S[C - m.startSN];
                      P.cc === B.cc && (b = B, this.log("Live playlist, switching playlist, load frag with next SN: " + b.sn));
                    }
                    b || (b = Object(g.findFragWithCC)(S, P.cc), b && this.log("Live playlist, switching playlist, load frag with same CC: " + b.sn));
                  }
                } else {
                  var F = this.hls.liveSyncPosition;
                  F !== null && (b = this.getFragmentAtPosition(F, this.bitrateTest ? m.fragmentEnd : m.edge, m));
                }
                return b;
              }, a.getFragmentAtPosition = function(m, S, P) {
                var b = this.config, C = this.fragPrevious, B = P.fragments, F = P.endSN, U = P.fragmentHint, w = b.maxFragLookUpTolerance, k = !!(b.lowLatencyMode && P.partList && U);
                k && U && !this.bitrateTest && (B = B.concat(U), F = U.sn);
                var W;
                if (m < S) {
                  var K = m > S - w ? 0 : w;
                  W = Object(g.findFragmentByPTS)(C, B, m, K);
                } else
                  W = B[B.length - 1];
                if (W) {
                  var j = W.sn - P.startSN, G = C && W.level === C.level, H = B[j + 1], J = this.fragmentTracker.getState(W);
                  if (J === _.FragmentState.BACKTRACKED) {
                    W = null;
                    for (var Q = j; B[Q] && this.fragmentTracker.getState(B[Q]) === _.FragmentState.BACKTRACKED; )
                      C ? W = B[Q--] : W = B[--Q];
                    W || (W = H);
                  } else
                    C && W.sn === C.sn && !k && G && (W.sn < F && this.fragmentTracker.getState(H) !== _.FragmentState.OK ? (this.log("SN " + W.sn + " just loaded, load next one: " + H.sn), W = H) : W = null);
                }
                return W;
              }, a.synchronizeToLiveEdge = function(m) {
                var S = this.config, P = this.media;
                if (!!P) {
                  var b = this.hls.liveSyncPosition, C = P.currentTime, B = m.fragments[0].start, F = m.edge, U = C >= B - S.maxFragLookUpTolerance && C <= F;
                  if (b !== null && P.duration > b && (C < b || !U)) {
                    var w = S.liveMaxLatencyDuration !== void 0 ? S.liveMaxLatencyDuration : S.liveMaxLatencyDurationCount * m.targetduration;
                    (!U && P.readyState < 4 || C < F - w) && (this.loadedmetadata || (this.nextLoadPosition = b), P.readyState && (this.warn("Playback: " + C.toFixed(3) + " is located too far from the end of live sliding playlist: " + F + ", reset currentTime to : " + b.toFixed(3)), P.currentTime = b));
                  }
                }
              }, a.alignPlaylists = function(m, S) {
                var P = this.levels, b = this.levelLastLoaded, C = this.fragPrevious, B = b !== null ? P[b] : null, F = m.fragments.length;
                if (!F)
                  return this.warn("No fragments in live playlist"), 0;
                var U = m.fragments[0].start, w = !S, k = m.alignedSliding && Object(R.isFiniteNumber)(U);
                if (w || !k && !U) {
                  Object(p.alignStream)(C, B, m);
                  var W = m.fragments[0].start;
                  return this.log("Live playlist sliding: " + W.toFixed(2) + " start-sn: " + (S ? S.startSN : "na") + "->" + m.startSN + " prev-sn: " + (C ? C.sn : "na") + " fragments: " + F), W;
                }
                return U;
              }, a.waitForCdnTuneIn = function(m) {
                var S = 3;
                return m.live && m.canBlockReload && m.tuneInGoal > Math.max(m.partHoldBack, m.partTarget * S);
              }, a.setStartPosition = function(m, S) {
                var P = this.startPosition;
                if (P < S && (P = -1), P === -1 || this.lastCurrentTime === -1) {
                  var b = m.startTimeOffset;
                  Object(R.isFiniteNumber)(b) ? (P = S + b, b < 0 && (P += m.totalduration), P = Math.min(Math.max(S, P), S + m.totalduration), this.log("Start time offset " + b + " found in playlist, adjust startPosition to " + P), this.startPosition = P) : m.live ? P = this.hls.liveSyncPosition || S : this.startPosition = P = 0, this.lastCurrentTime = P;
                }
                this.nextLoadPosition = P;
              }, a.getLoadPosition = function() {
                var m = this.media, S = 0;
                return this.loadedmetadata && m ? S = m.currentTime : this.nextLoadPosition && (S = this.nextLoadPosition), S;
              }, a.handleFragLoadAborted = function(m, S) {
                this.transmuxer && m.sn !== "initSegment" && m.stats.aborted && (this.warn("Fragment " + m.sn + (S ? " part" + S.index : "") + " of level " + m.level + " was aborted"), this.resetFragmentLoading(m));
              }, a.resetFragmentLoading = function(m) {
                (!this.fragCurrent || !this.fragContextChanged(m)) && (this.state = h.IDLE);
              }, a.onFragmentOrKeyLoadError = function(m, S) {
                if (!S.fatal) {
                  var P = S.frag;
                  if (!(!P || P.type !== m)) {
                    var b = this.fragCurrent;
                    console.assert(b && P.sn === b.sn && P.level === b.level && P.urlId === b.urlId, "Frag load error must match current frag to retry");
                    var C = this.config;
                    if (this.fragLoadError + 1 <= C.fragLoadingMaxRetry) {
                      if (this.resetLiveStartWhenNotLoaded(P.level))
                        return;
                      var B = Math.min(Math.pow(2, this.fragLoadError) * C.fragLoadingRetryDelay, C.fragLoadingMaxRetryTimeout);
                      this.warn("Fragment " + P.sn + " of " + m + " " + P.level + " failed to load, retrying in " + B + "ms"), this.retryDate = self.performance.now() + B, this.fragLoadError++, this.state = h.FRAG_LOADING_WAITING_RETRY;
                    } else
                      S.levelRetry ? (m === t.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = h.IDLE) : (O.logger.error(S.details + " reaches max retry, redispatch as fatal ..."), S.fatal = true, this.hls.stopLoad(), this.state = h.ERROR);
                  }
                }
              }, a.afterBufferFlushed = function(m, S, P) {
                if (!!m) {
                  var b = M.BufferHelper.getBuffered(m);
                  this.fragmentTracker.detectEvictedFragments(S, b, P), this.state === h.ENDED && this.resetLoadingState();
                }
              }, a.resetLoadingState = function() {
                this.fragCurrent = null, this.fragPrevious = null, this.state = h.IDLE;
              }, a.resetLiveStartWhenNotLoaded = function(m) {
                if (!this.loadedmetadata) {
                  this.startFragRequested = false;
                  var S = this.levels ? this.levels[m].details : null;
                  if (S != null && S.live)
                    return this.startPosition = -1, this.setStartPosition(S, 0), this.resetLoadingState(), true;
                  this.nextLoadPosition = this.startPosition;
                }
                return false;
              }, a.updateLevelTiming = function(m, S, P, b) {
                var C = this, B = P.details;
                console.assert(!!B, "level.details must be defined");
                var F = Object.keys(m.elementaryStreams).reduce(function(U, w) {
                  var k = m.elementaryStreams[w];
                  if (k) {
                    var W = k.endPTS - k.startPTS;
                    if (W <= 0)
                      return C.warn("Could not parse fragment " + m.sn + " " + w + " duration reliably (" + W + ") resetting transmuxer to fallback to playlist timing"), C.resetTransmuxer(), U || false;
                    var K = b ? 0 : Object(T.updateFragPTSDTS)(B, m, k.startPTS, k.endPTS, k.startDTS, k.endDTS);
                    return C.hls.trigger(D.Events.LEVEL_PTS_UPDATED, { details: B, level: P, drift: K, type: w, frag: m, start: k.startPTS, end: k.endPTS }), true;
                  }
                  return U;
                }, false);
                F ? (this.state = h.PARSED, this.hls.trigger(D.Events.FRAG_PARSED, { frag: m, part: S })) : this.resetLoadingState();
              }, a.resetTransmuxer = function() {
                this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
              }, d(n, [{ key: "state", get: function() {
                return this._state;
              }, set: function(m) {
                var S = this._state;
                S !== m && (this._state = m, this.log(S + "->" + m));
              } }]), n;
            }(A.default);
          }, "./src/controller/buffer-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return g;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/events.ts"), _ = c("./src/utils/logger.ts"), M = c("./src/errors.ts"), O = c("./src/utils/buffer-helper.ts"), D = c("./src/utils/mediasource-helper.ts"), L = c("./src/loader/fragment.ts"), u = c("./src/controller/buffer-operation-queue.ts"), y = Object(D.getMediaSource)(), p = /([ha]vc.)(?:\.[^.,]+)+/, g = function() {
              function T(r) {
                var e = this;
                this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
                  var t = e.hls, i = e.media, d = e.mediaSource;
                  _.logger.log("[buffer-controller]: Media source opened"), i && (e.updateMediaElementDuration(), t.trigger(A.Events.MEDIA_ATTACHED, { media: i })), d && d.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks();
                }, this._onMediaSourceClose = function() {
                  _.logger.log("[buffer-controller]: Media source closed");
                }, this._onMediaSourceEnded = function() {
                  _.logger.log("[buffer-controller]: Media source ended");
                }, this.hls = r, this._initSourceBuffer(), this.registerListeners();
              }
              var x = T.prototype;
              return x.hasSourceTypes = function() {
                return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
              }, x.destroy = function() {
                this.unregisterListeners(), this.details = null;
              }, x.registerListeners = function() {
                var e = this.hls;
                e.on(A.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(A.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(A.Events.BUFFER_RESET, this.onBufferReset, this), e.on(A.Events.BUFFER_APPENDING, this.onBufferAppending, this), e.on(A.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.on(A.Events.BUFFER_EOS, this.onBufferEos, this), e.on(A.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(A.Events.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(A.Events.FRAG_PARSED, this.onFragParsed, this), e.on(A.Events.FRAG_CHANGED, this.onFragChanged, this);
              }, x.unregisterListeners = function() {
                var e = this.hls;
                e.off(A.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(A.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(A.Events.BUFFER_RESET, this.onBufferReset, this), e.off(A.Events.BUFFER_APPENDING, this.onBufferAppending, this), e.off(A.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.off(A.Events.BUFFER_EOS, this.onBufferEos, this), e.off(A.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(A.Events.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(A.Events.FRAG_PARSED, this.onFragParsed, this), e.off(A.Events.FRAG_CHANGED, this.onFragChanged, this);
              }, x._initSourceBuffer = function() {
                this.sourceBuffer = {}, this.operationQueue = new u.default(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] };
              }, x.onManifestParsed = function(e, t) {
                var i = 2;
                (t.audio && !t.video || !t.altAudio) && (i = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i, this.details = null, _.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
              }, x.onMediaAttaching = function(e, t) {
                var i = this.media = t.media;
                if (i && y) {
                  var d = this.mediaSource = new y();
                  d.addEventListener("sourceopen", this._onMediaSourceOpen), d.addEventListener("sourceended", this._onMediaSourceEnded), d.addEventListener("sourceclose", this._onMediaSourceClose), i.src = self.URL.createObjectURL(d), this._objectUrl = i.src;
                }
              }, x.onMediaDetaching = function() {
                var e = this.media, t = this.mediaSource, i = this._objectUrl;
                if (t) {
                  if (_.logger.log("[buffer-controller]: media source detaching"), t.readyState === "open")
                    try {
                      t.endOfStream();
                    } catch (d) {
                      _.logger.warn("[buffer-controller]: onMediaDetaching: " + d.message + " while calling endOfStream");
                    }
                  this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), e && (i && self.URL.revokeObjectURL(i), e.src === i ? (e.removeAttribute("src"), e.load()) : _.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
                }
                this.hls.trigger(A.Events.MEDIA_DETACHED, void 0);
              }, x.onBufferReset = function() {
                var e = this;
                this.getSourceBufferTypes().forEach(function(t) {
                  var i = e.sourceBuffer[t];
                  try {
                    i && (e.removeBufferListeners(t), e.mediaSource && e.mediaSource.removeSourceBuffer(i), e.sourceBuffer[t] = void 0);
                  } catch (d) {
                    _.logger.warn("[buffer-controller]: Failed to reset the " + t + " buffer", d);
                  }
                }), this._initSourceBuffer();
              }, x.onBufferCodecs = function(e, t) {
                var i = this, d = this.getSourceBufferTypes().length;
                Object.keys(t).forEach(function(s) {
                  if (d) {
                    var f = i.tracks[s];
                    if (f && typeof f.buffer.changeType == "function") {
                      var v = t[s], h = v.codec, l = v.levelCodec, o = v.container, n = (f.levelCodec || f.codec).replace(p, "$1"), a = (l || h).replace(p, "$1");
                      if (n !== a) {
                        var E = o + ";codecs=" + (l || h);
                        i.appendChangeType(s, E);
                      }
                    }
                  } else
                    i.pendingTracks[s] = t[s];
                }), !d && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks());
              }, x.appendChangeType = function(e, t) {
                var i = this, d = this.operationQueue, s = { execute: function() {
                  var v = i.sourceBuffer[e];
                  v && (_.logger.log("[buffer-controller]: changing " + e + " sourceBuffer type to " + t), v.changeType(t)), d.shiftAndExecuteNext(e);
                }, onStart: function() {
                }, onComplete: function() {
                }, onError: function(v) {
                  _.logger.warn("[buffer-controller]: Failed to change " + e + " SourceBuffer type", v);
                } };
                d.append(s, e);
              }, x.onBufferAppending = function(e, t) {
                var i = this, d = this.hls, s = this.operationQueue, f = this.tracks, v = t.data, h = t.type, l = t.frag, o = t.part, n = t.chunkMeta, a = n.buffering[h], E = self.performance.now();
                a.start = E;
                var m = l.stats.buffering, S = o ? o.stats.buffering : null;
                m.start === 0 && (m.start = E), S && S.start === 0 && (S.start = E);
                var P = f.audio, b = h === "audio" && n.id === 1 && (P == null ? void 0 : P.container) === "audio/mpeg", C = { execute: function() {
                  if (a.executeStart = self.performance.now(), b) {
                    var F = i.sourceBuffer[h];
                    if (F) {
                      var U = l.start - F.timestampOffset;
                      Math.abs(U) >= 0.1 && (_.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + l.start + " (delta: " + U + ") sn: " + l.sn + ")"), F.timestampOffset = l.start);
                    }
                  }
                  i.appendExecutor(v, h);
                }, onStart: function() {
                }, onComplete: function() {
                  var F = self.performance.now();
                  a.executeEnd = a.end = F, m.first === 0 && (m.first = F), S && S.first === 0 && (S.first = F);
                  var U = i.sourceBuffer, w = {};
                  for (var k in U)
                    w[k] = O.BufferHelper.getBuffered(U[k]);
                  i.appendError = 0, i.hls.trigger(A.Events.BUFFER_APPENDED, { type: h, frag: l, part: o, chunkMeta: n, parent: l.type, timeRanges: w });
                }, onError: function(F) {
                  _.logger.error("[buffer-controller]: Error encountered while trying to append to the " + h + " SourceBuffer", F);
                  var U = { type: M.ErrorTypes.MEDIA_ERROR, parent: l.type, details: M.ErrorDetails.BUFFER_APPEND_ERROR, err: F, fatal: false };
                  F.code === DOMException.QUOTA_EXCEEDED_ERR ? U.details = M.ErrorDetails.BUFFER_FULL_ERROR : (i.appendError++, U.details = M.ErrorDetails.BUFFER_APPEND_ERROR, i.appendError > d.config.appendErrorMaxRetry && (_.logger.error("[buffer-controller]: Failed " + d.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), U.fatal = true)), d.trigger(A.Events.ERROR, U);
                } };
                s.append(C, h);
              }, x.onBufferFlushing = function(e, t) {
                var i = this, d = this.operationQueue, s = function(v) {
                  return { execute: i.removeExecutor.bind(i, v, t.startOffset, t.endOffset), onStart: function() {
                  }, onComplete: function() {
                    i.hls.trigger(A.Events.BUFFER_FLUSHED, { type: v });
                  }, onError: function(l) {
                    _.logger.warn("[buffer-controller]: Failed to remove from " + v + " SourceBuffer", l);
                  } };
                };
                t.type ? d.append(s(t.type), t.type) : this.getSourceBufferTypes().forEach(function(f) {
                  d.append(s(f), f);
                });
              }, x.onFragParsed = function(e, t) {
                var i = this, d = t.frag, s = t.part, f = [], v = s ? s.elementaryStreams : d.elementaryStreams;
                v[L.ElementaryStreamTypes.AUDIOVIDEO] ? f.push("audiovideo") : (v[L.ElementaryStreamTypes.AUDIO] && f.push("audio"), v[L.ElementaryStreamTypes.VIDEO] && f.push("video"));
                var h = function() {
                  var o = self.performance.now();
                  d.stats.buffering.end = o, s && (s.stats.buffering.end = o);
                  var n = s ? s.stats : d.stats;
                  i.hls.trigger(A.Events.FRAG_BUFFERED, { frag: d, part: s, stats: n, id: d.type });
                };
                f.length === 0 && _.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + d.type + " level: " + d.level + " sn: " + d.sn), this.blockBuffers(h, f);
              }, x.onFragChanged = function(e, t) {
                this.flushBackBuffer();
              }, x.onBufferEos = function(e, t) {
                var i = this, d = this.getSourceBufferTypes().reduce(function(s, f) {
                  var v = i.sourceBuffer[f];
                  return (!t.type || t.type === f) && v && !v.ended && (v.ended = true, _.logger.log("[buffer-controller]: " + f + " sourceBuffer now EOS")), s && !!(!v || v.ended);
                }, true);
                d && this.blockBuffers(function() {
                  var s = i.mediaSource;
                  !s || s.readyState !== "open" || s.endOfStream();
                });
              }, x.onLevelUpdated = function(e, t) {
                var i = t.details;
                !i.fragments.length || (this.details = i, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
              }, x.flushBackBuffer = function() {
                var e = this.hls, t = this.details, i = this.media, d = this.sourceBuffer;
                if (!(!i || t === null)) {
                  var s = this.getSourceBufferTypes();
                  if (!!s.length) {
                    var f = t.live && e.config.liveBackBufferLength !== null ? e.config.liveBackBufferLength : e.config.backBufferLength;
                    if (!(!Object(R.isFiniteNumber)(f) || f < 0)) {
                      var v = i.currentTime, h = t.levelTargetDuration, l = Math.max(f, h), o = Math.floor(v / h) * h - l;
                      s.forEach(function(n) {
                        var a = d[n];
                        if (a) {
                          var E = O.BufferHelper.getBuffered(a);
                          E.length > 0 && o > E.start(0) && (e.trigger(A.Events.BACK_BUFFER_REACHED, { bufferEnd: o }), t.live && e.trigger(A.Events.LIVE_BACK_BUFFER_REACHED, { bufferEnd: o }), e.trigger(A.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: o, type: n }));
                        }
                      });
                    }
                  }
                }
              }, x.updateMediaElementDuration = function() {
                if (!(!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")) {
                  var e = this.details, t = this.hls, i = this.media, d = this.mediaSource, s = e.fragments[0].start + e.totalduration, f = i.duration, v = Object(R.isFiniteNumber)(d.duration) ? d.duration : 0;
                  e.live && t.config.liveDurationInfinity ? (_.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), d.duration = 1 / 0, this.updateSeekableRange(e)) : (s > v && s > f || !Object(R.isFiniteNumber)(f)) && (_.logger.log("[buffer-controller]: Updating Media Source duration to " + s.toFixed(3)), d.duration = s);
                }
              }, x.updateSeekableRange = function(e) {
                var t = this.mediaSource, i = e.fragments, d = i.length;
                if (d && e.live && t !== null && t !== void 0 && t.setLiveSeekableRange) {
                  var s = Math.max(0, i[0].start), f = Math.max(s, s + e.totalduration);
                  t.setLiveSeekableRange(s, f);
                }
              }, x.checkPendingTracks = function() {
                var e = this.bufferCodecEventsExpected, t = this.operationQueue, i = this.pendingTracks, d = Object.keys(i).length;
                if (d && !e || d === 2) {
                  this.createSourceBuffers(i), this.pendingTracks = {};
                  var s = this.getSourceBufferTypes();
                  if (s.length === 0) {
                    this.hls.trigger(A.Events.ERROR, { type: M.ErrorTypes.MEDIA_ERROR, details: M.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, reason: "could not create source buffer for media codec(s)" });
                    return;
                  }
                  s.forEach(function(f) {
                    t.executeNext(f);
                  });
                }
              }, x.createSourceBuffers = function(e) {
                var t = this.sourceBuffer, i = this.mediaSource;
                if (!i)
                  throw Error("createSourceBuffers called when mediaSource was null");
                var d = 0;
                for (var s in e)
                  if (!t[s]) {
                    var f = e[s];
                    if (!f)
                      throw Error("source buffer exists for track " + s + ", however track does not");
                    var v = f.levelCodec || f.codec, h = f.container + ";codecs=" + v;
                    _.logger.log("[buffer-controller]: creating sourceBuffer(" + h + ")");
                    try {
                      var l = t[s] = i.addSourceBuffer(h), o = s;
                      this.addBufferListener(o, "updatestart", this._onSBUpdateStart), this.addBufferListener(o, "updateend", this._onSBUpdateEnd), this.addBufferListener(o, "error", this._onSBUpdateError), this.tracks[s] = { buffer: l, codec: v, container: f.container, levelCodec: f.levelCodec, id: f.id }, d++;
                    } catch (n) {
                      _.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + n.message), this.hls.trigger(A.Events.ERROR, { type: M.ErrorTypes.MEDIA_ERROR, details: M.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: false, error: n, mimeType: h });
                    }
                  }
                d && this.hls.trigger(A.Events.BUFFER_CREATED, { tracks: this.tracks });
              }, x._onSBUpdateStart = function(e) {
                var t = this.operationQueue, i = t.current(e);
                i.onStart();
              }, x._onSBUpdateEnd = function(e) {
                var t = this.operationQueue, i = t.current(e);
                i.onComplete(), t.shiftAndExecuteNext(e);
              }, x._onSBUpdateError = function(e, t) {
                _.logger.error("[buffer-controller]: " + e + " SourceBuffer error", t), this.hls.trigger(A.Events.ERROR, { type: M.ErrorTypes.MEDIA_ERROR, details: M.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: false });
                var i = this.operationQueue.current(e);
                i && i.onError(t);
              }, x.removeExecutor = function(e, t, i) {
                var d = this.media, s = this.mediaSource, f = this.operationQueue, v = this.sourceBuffer, h = v[e];
                if (!d || !s || !h) {
                  _.logger.warn("[buffer-controller]: Attempting to remove from the " + e + " SourceBuffer, but it does not exist"), f.shiftAndExecuteNext(e);
                  return;
                }
                var l = Object(R.isFiniteNumber)(d.duration) ? d.duration : 1 / 0, o = Object(R.isFiniteNumber)(s.duration) ? s.duration : 1 / 0, n = Math.max(0, t), a = Math.min(i, l, o);
                a > n ? (_.logger.log("[buffer-controller]: Removing [" + n + "," + a + "] from the " + e + " SourceBuffer"), console.assert(!h.updating, e + " sourceBuffer must not be updating"), h.remove(n, a)) : f.shiftAndExecuteNext(e);
              }, x.appendExecutor = function(e, t) {
                var i = this.operationQueue, d = this.sourceBuffer, s = d[t];
                if (!s) {
                  _.logger.warn("[buffer-controller]: Attempting to append to the " + t + " SourceBuffer, but it does not exist"), i.shiftAndExecuteNext(t);
                  return;
                }
                s.ended = false, console.assert(!s.updating, t + " sourceBuffer must not be updating"), s.appendBuffer(e);
              }, x.blockBuffers = function(e, t) {
                var i = this;
                if (t === void 0 && (t = this.getSourceBufferTypes()), !t.length) {
                  _.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve(e);
                  return;
                }
                var d = this.operationQueue, s = t.map(function(f) {
                  return d.appendBlocker(f);
                });
                Promise.all(s).then(function() {
                  e(), t.forEach(function(f) {
                    var v = i.sourceBuffer[f];
                    (!v || !v.updating) && d.shiftAndExecuteNext(f);
                  });
                });
              }, x.getSourceBufferTypes = function() {
                return Object.keys(this.sourceBuffer);
              }, x.addBufferListener = function(e, t, i) {
                var d = this.sourceBuffer[e];
                if (!!d) {
                  var s = i.bind(this, e);
                  this.listeners[e].push({ event: t, listener: s }), d.addEventListener(t, s);
                }
              }, x.removeBufferListeners = function(e) {
                var t = this.sourceBuffer[e];
                !t || this.listeners[e].forEach(function(i) {
                  t.removeEventListener(i.event, i.listener);
                });
              }, T;
            }();
          }, "./src/controller/buffer-operation-queue.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return A;
            });
            var R = c("./src/utils/logger.ts"), A = function() {
              function _(O) {
                this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = O;
              }
              var M = _.prototype;
              return M.append = function(D, L) {
                var u = this.queues[L];
                u.push(D), u.length === 1 && this.buffers[L] && this.executeNext(L);
              }, M.insertAbort = function(D, L) {
                var u = this.queues[L];
                u.unshift(D), this.executeNext(L);
              }, M.appendBlocker = function(D) {
                var L, u = new Promise(function(p) {
                  L = p;
                }), y = { execute: L, onStart: function() {
                }, onComplete: function() {
                }, onError: function() {
                } };
                return this.append(y, D), u;
              }, M.executeNext = function(D) {
                var L = this.buffers, u = this.queues, y = L[D], p = u[D];
                if (p.length) {
                  var g = p[0];
                  try {
                    g.execute();
                  } catch (T) {
                    R.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), g.onError(T), (!y || !y.updating) && (p.shift(), this.executeNext(D));
                  }
                }
              }, M.shiftAndExecuteNext = function(D) {
                this.queues[D].shift(), this.executeNext(D);
              }, M.current = function(D) {
                return this.queues[D][0];
              }, _;
            }();
          }, "./src/controller/cap-level-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/events.ts");
            function A(O, D) {
              for (var L = 0; L < D.length; L++) {
                var u = D[L];
                u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(O, u.key, u);
              }
            }
            function _(O, D, L) {
              return D && A(O.prototype, D), L && A(O, L), O;
            }
            var M = function() {
              function O(L) {
                this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = L, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
              }
              var D = O.prototype;
              return D.setStreamController = function(u) {
                this.streamController = u;
              }, D.destroy = function() {
                this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
              }, D.registerListeners = function() {
                var u = this.hls;
                u.on(R.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), u.on(R.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), u.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), u.on(R.Events.BUFFER_CODECS, this.onBufferCodecs, this), u.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
              }, D.unregisterListener = function() {
                var u = this.hls;
                u.off(R.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), u.off(R.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), u.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), u.off(R.Events.BUFFER_CODECS, this.onBufferCodecs, this), u.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
              }, D.onFpsDropLevelCapping = function(u, y) {
                O.isLevelAllowed(y.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(y.droppedLevel);
              }, D.onMediaAttaching = function(u, y) {
                this.media = y.media instanceof HTMLVideoElement ? y.media : null;
              }, D.onManifestParsed = function(u, y) {
                var p = this.hls;
                this.restrictedLevels = [], this.firstLevel = y.firstLevel, p.config.capLevelToPlayerSize && y.video && this.startCapping();
              }, D.onBufferCodecs = function(u, y) {
                var p = this.hls;
                p.config.capLevelToPlayerSize && y.video && this.startCapping();
              }, D.onMediaDetaching = function() {
                this.stopCapping();
              }, D.detectPlayerSize = function() {
                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                  var u = this.hls.levels;
                  if (u.length) {
                    var y = this.hls;
                    y.autoLevelCapping = this.getMaxLevel(u.length - 1), y.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = y.autoLevelCapping;
                  }
                }
              }, D.getMaxLevel = function(u) {
                var y = this, p = this.hls.levels;
                if (!p.length)
                  return -1;
                var g = p.filter(function(T, x) {
                  return O.isLevelAllowed(x, y.restrictedLevels) && x <= u;
                });
                return this.clientRect = null, O.getMaxLevelByMediaSize(g, this.mediaWidth, this.mediaHeight);
              }, D.startCapping = function() {
                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
              }, D.stopCapping = function() {
                this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
              }, D.getDimensions = function() {
                if (this.clientRect)
                  return this.clientRect;
                var u = this.media, y = { width: 0, height: 0 };
                if (u) {
                  var p = u.getBoundingClientRect();
                  y.width = p.width, y.height = p.height, !y.width && !y.height && (y.width = p.right - p.left || u.width || 0, y.height = p.bottom - p.top || u.height || 0);
                }
                return this.clientRect = y, y;
              }, O.isLevelAllowed = function(u, y) {
                return y === void 0 && (y = []), y.indexOf(u) === -1;
              }, O.getMaxLevelByMediaSize = function(u, y, p) {
                if (!u || !u.length)
                  return -1;
                for (var g = function(t, i) {
                  return i ? t.width !== i.width || t.height !== i.height : true;
                }, T = u.length - 1, x = 0; x < u.length; x += 1) {
                  var r = u[x];
                  if ((r.width >= y || r.height >= p) && g(r, u[x + 1])) {
                    T = x;
                    break;
                  }
                }
                return T;
              }, _(O, [{ key: "mediaWidth", get: function() {
                return this.getDimensions().width * O.contentScaleFactor;
              } }, { key: "mediaHeight", get: function() {
                return this.getDimensions().height * O.contentScaleFactor;
              } }], [{ key: "contentScaleFactor", get: function() {
                var u = 1;
                try {
                  u = self.devicePixelRatio;
                } catch {
                }
                return u;
              } }]), O;
            }();
            I.default = M;
          }, "./src/controller/eme-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/events.ts"), A = c("./src/errors.ts"), _ = c("./src/utils/logger.ts"), M = c("./src/utils/mediakeys-helper.ts");
            function O(g, T) {
              for (var x = 0; x < T.length; x++) {
                var r = T[x];
                r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(g, r.key, r);
              }
            }
            function D(g, T, x) {
              return T && O(g.prototype, T), x && O(g, x), g;
            }
            var L = 3, u = function(T, x, r) {
              var e = { audioCapabilities: [], videoCapabilities: [] };
              return T.forEach(function(t) {
                e.audioCapabilities.push({ contentType: 'audio/mp4; codecs="' + t + '"', robustness: r.audioRobustness || "" });
              }), x.forEach(function(t) {
                e.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + t + '"', robustness: r.videoRobustness || "" });
              }), [e];
            }, y = function(T, x, r, e) {
              switch (T) {
                case M.KeySystems.WIDEVINE:
                  return u(x, r, e);
                default:
                  throw new Error("Unknown key-system: " + T);
              }
            }, p = function() {
              function g(x) {
                this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = false, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = x, this._config = x.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners();
              }
              var T = g.prototype;
              return T.destroy = function() {
                this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null;
              }, T._registerListeners = function() {
                this.hls.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(R.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this);
              }, T._unregisterListeners = function() {
                this.hls.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(R.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this);
              }, T.getLicenseServerUrl = function(r) {
                switch (r) {
                  case M.KeySystems.WIDEVINE:
                    if (!this._widevineLicenseUrl)
                      break;
                    return this._widevineLicenseUrl;
                }
                throw new Error('no license server URL configured for key-system "' + r + '"');
              }, T._attemptKeySystemAccess = function(r, e, t) {
                var i = this, d = y(r, e, t, this._drmSystemOptions);
                _.logger.log("Requesting encrypted media key-system access");
                var s = this.requestMediaKeySystemAccess(r, d);
                this.mediaKeysPromise = s.then(function(f) {
                  return i._onMediaKeySystemAccessObtained(r, f);
                }), s.catch(function(f) {
                  _.logger.error('Failed to obtain key-system "' + r + '" access:', f);
                });
              }, T._onMediaKeySystemAccessObtained = function(r, e) {
                var t = this;
                _.logger.log('Access for key-system "' + r + '" obtained');
                var i = { mediaKeysSessionInitialized: false, mediaKeySystemAccess: e, mediaKeySystemDomain: r };
                this._mediaKeysList.push(i);
                var d = Promise.resolve().then(function() {
                  return e.createMediaKeys();
                }).then(function(s) {
                  return i.mediaKeys = s, _.logger.log('Media-keys created for key-system "' + r + '"'), t._onMediaKeysCreated(), s;
                });
                return d.catch(function(s) {
                  _.logger.error("Failed to create media-keys:", s);
                }), d;
              }, T._onMediaKeysCreated = function() {
                var r = this;
                this._mediaKeysList.forEach(function(e) {
                  e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), r._onNewMediaKeySession(e.mediaKeysSession));
                });
              }, T._onNewMediaKeySession = function(r) {
                var e = this;
                _.logger.log("New key-system session " + r.sessionId), r.addEventListener("message", function(t) {
                  e._onKeySessionMessage(r, t.message);
                }, false);
              }, T._onKeySessionMessage = function(r, e) {
                _.logger.log("Got EME message event, creating license request"), this._requestLicense(e, function(t) {
                  _.logger.log("Received license data (length: " + (t && t.byteLength) + "), updating key-session"), r.update(t);
                });
              }, T.onMediaEncrypted = function(r) {
                var e = this;
                if (_.logger.log('Media is encrypted using "' + r.initDataType + '" init data type'), !this.mediaKeysPromise) {
                  _.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: true });
                  return;
                }
                var t = function(d) {
                  !e._media || (e._attemptSetMediaKeys(d), e._generateRequestWithPreferredKeySession(r.initDataType, r.initData));
                };
                this.mediaKeysPromise.then(t).catch(t);
              }, T._attemptSetMediaKeys = function(r) {
                if (!this._media)
                  throw new Error("Attempted to set mediaKeys without first attaching a media element");
                if (!this._hasSetMediaKeys) {
                  var e = this._mediaKeysList[0];
                  if (!e || !e.mediaKeys) {
                    _.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: true });
                    return;
                  }
                  _.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = true;
                }
              }, T._generateRequestWithPreferredKeySession = function(r, e) {
                var t = this, i = this._mediaKeysList[0];
                if (!i) {
                  _.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: true });
                  return;
                }
                if (i.mediaKeysSessionInitialized) {
                  _.logger.warn("Key-Session already initialized but requested again");
                  return;
                }
                var d = i.mediaKeysSession;
                if (!d) {
                  _.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: true });
                  return;
                }
                if (!e) {
                  _.logger.warn("Fatal: initData required for generating a key session is null"), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA, fatal: true });
                  return;
                }
                _.logger.log('Generating key-session request for "' + r + '" init data type'), i.mediaKeysSessionInitialized = true, d.generateRequest(r, e).then(function() {
                  _.logger.debug("Key-session generation succeeded");
                }).catch(function(s) {
                  _.logger.error("Error generating key-session request:", s), t.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: false });
                });
              }, T._createLicenseXhr = function(r, e, t) {
                var i = new XMLHttpRequest();
                i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, r, e, t);
                var d = this._licenseXhrSetup;
                if (d)
                  try {
                    d.call(this.hls, i, r), d = void 0;
                  } catch (s) {
                    _.logger.error(s);
                  }
                try {
                  i.readyState || i.open("POST", r, true), d && d.call(this.hls, i, r);
                } catch (s) {
                  throw new Error("issue setting up KeySystem license XHR " + s);
                }
                return i;
              }, T._onLicenseRequestReadyStageChange = function(r, e, t, i) {
                switch (r.readyState) {
                  case 4:
                    if (r.status === 200) {
                      this._requestLicenseFailureCount = 0, _.logger.log("License request succeeded");
                      var d = r.response, s = this._licenseResponseCallback;
                      if (s)
                        try {
                          d = s.call(this.hls, r, e);
                        } catch (v) {
                          _.logger.error(v);
                        }
                      i(d);
                    } else {
                      if (_.logger.error("License Request XHR failed (" + e + "). Status: " + r.status + " (" + r.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > L) {
                        this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true });
                        return;
                      }
                      var f = L - this._requestLicenseFailureCount + 1;
                      _.logger.warn("Retrying license request, " + f + " attempts left"), this._requestLicense(t, i);
                    }
                    break;
                }
              }, T._generateLicenseRequestChallenge = function(r, e) {
                switch (r.mediaKeySystemDomain) {
                  case M.KeySystems.WIDEVINE:
                    return e;
                }
                throw new Error("unsupported key-system: " + r.mediaKeySystemDomain);
              }, T._requestLicense = function(r, e) {
                _.logger.log("Requesting content license for key-system");
                var t = this._mediaKeysList[0];
                if (!t) {
                  _.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: true });
                  return;
                }
                try {
                  var i = this.getLicenseServerUrl(t.mediaKeySystemDomain), d = this._createLicenseXhr(i, r, e);
                  _.logger.log("Sending license request to URL: " + i);
                  var s = this._generateLicenseRequestChallenge(t, r);
                  d.send(s);
                } catch (f) {
                  _.logger.error("Failure requesting DRM license: " + f), this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.KEY_SYSTEM_ERROR, details: A.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true });
                }
              }, T.onMediaAttached = function(r, e) {
                if (!!this._emeEnabled) {
                  var t = e.media;
                  this._media = t, t.addEventListener("encrypted", this._onMediaEncrypted);
                }
              }, T.onMediaDetached = function() {
                var r = this._media, e = this._mediaKeysList;
                !r || (r.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e.map(function(t) {
                  if (t.mediaKeysSession)
                    return t.mediaKeysSession.close().catch(function() {
                    });
                })).then(function() {
                  return r.setMediaKeys(null);
                }).catch(function() {
                }));
              }, T.onManifestParsed = function(r, e) {
                if (!!this._emeEnabled) {
                  var t = e.levels.map(function(d) {
                    return d.audioCodec;
                  }).filter(function(d) {
                    return !!d;
                  }), i = e.levels.map(function(d) {
                    return d.videoCodec;
                  }).filter(function(d) {
                    return !!d;
                  });
                  this._attemptKeySystemAccess(M.KeySystems.WIDEVINE, t, i);
                }
              }, D(g, [{ key: "requestMediaKeySystemAccess", get: function() {
                if (!this._requestMediaKeySystemAccess)
                  throw new Error("No requestMediaKeySystemAccess function configured");
                return this._requestMediaKeySystemAccess;
              } }]), g;
            }();
            I.default = p;
          }, "./src/controller/fps-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/events.ts"), A = c("./src/utils/logger.ts"), _ = function() {
              function M(D) {
                this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = D, this.registerListeners();
              }
              var O = M.prototype;
              return O.setStreamController = function(L) {
                this.streamController = L;
              }, O.registerListeners = function() {
                this.hls.on(R.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
              }, O.unregisterListeners = function() {
                this.hls.off(R.Events.MEDIA_ATTACHING, this.onMediaAttaching);
              }, O.destroy = function() {
                this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
              }, O.onMediaAttaching = function(L, u) {
                var y = this.hls.config;
                if (y.capLevelOnFPSDrop) {
                  var p = u.media instanceof self.HTMLVideoElement ? u.media : null;
                  this.media = p, p && typeof p.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), y.fpsDroppedMonitoringPeriod);
                }
              }, O.checkFPS = function(L, u, y) {
                var p = performance.now();
                if (u) {
                  if (this.lastTime) {
                    var g = p - this.lastTime, T = y - this.lastDroppedFrames, x = u - this.lastDecodedFrames, r = 1e3 * T / g, e = this.hls;
                    if (e.trigger(R.Events.FPS_DROP, { currentDropped: T, currentDecoded: x, totalDroppedFrames: y }), r > 0 && T > e.config.fpsDroppedMonitoringThreshold * x) {
                      var t = e.currentLevel;
                      A.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + t), t > 0 && (e.autoLevelCapping === -1 || e.autoLevelCapping >= t) && (t = t - 1, e.trigger(R.Events.FPS_DROP_LEVEL_CAPPING, { level: t, droppedLevel: e.currentLevel }), e.autoLevelCapping = t, this.streamController.nextLevelSwitch());
                    }
                  }
                  this.lastTime = p, this.lastDroppedFrames = y, this.lastDecodedFrames = u;
                }
              }, O.checkFPSInterval = function() {
                var L = this.media;
                if (L)
                  if (this.isVideoPlaybackQualityAvailable) {
                    var u = L.getVideoPlaybackQuality();
                    this.checkFPS(L, u.totalVideoFrames, u.droppedVideoFrames);
                  } else
                    this.checkFPS(L, L.webkitDecodedFrameCount, L.webkitDroppedFrameCount);
              }, M;
            }();
            I.default = _;
          }, "./src/controller/fragment-finders.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "findFragmentByPDT", function() {
              return _;
            }), c.d(I, "findFragmentByPTS", function() {
              return M;
            }), c.d(I, "fragmentWithinToleranceTest", function() {
              return O;
            }), c.d(I, "pdtWithinToleranceTest", function() {
              return D;
            }), c.d(I, "findFragWithCC", function() {
              return L;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/utils/binary-search.ts");
            function _(u, y, p) {
              if (y === null || !Array.isArray(u) || !u.length || !Object(R.isFiniteNumber)(y))
                return null;
              var g = u[0].programDateTime;
              if (y < (g || 0))
                return null;
              var T = u[u.length - 1].endProgramDateTime;
              if (y >= (T || 0))
                return null;
              p = p || 0;
              for (var x = 0; x < u.length; ++x) {
                var r = u[x];
                if (D(y, p, r))
                  return r;
              }
              return null;
            }
            function M(u, y, p, g) {
              p === void 0 && (p = 0), g === void 0 && (g = 0);
              var T = null;
              if (u ? T = y[u.sn - y[0].sn + 1] || null : p === 0 && y[0].start === 0 && (T = y[0]), T && O(p, g, T) === 0)
                return T;
              var x = A.default.search(y, O.bind(null, p, g));
              return x || T;
            }
            function O(u, y, p) {
              u === void 0 && (u = 0), y === void 0 && (y = 0);
              var g = Math.min(y, p.duration + (p.deltaPTS ? p.deltaPTS : 0));
              return p.start + p.duration - g <= u ? 1 : p.start - g > u && p.start ? -1 : 0;
            }
            function D(u, y, p) {
              var g = Math.min(y, p.duration + (p.deltaPTS ? p.deltaPTS : 0)) * 1e3, T = p.endProgramDateTime || 0;
              return T - g > u;
            }
            function L(u, y) {
              return A.default.search(u, function(p) {
                return p.cc < y ? 1 : p.cc > y ? -1 : 0;
              });
            }
          }, "./src/controller/fragment-tracker.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "FragmentState", function() {
              return _;
            }), c.d(I, "FragmentTracker", function() {
              return M;
            });
            var R = c("./src/events.ts"), A = c("./src/types/loader.ts"), _;
            (function(L) {
              L.NOT_LOADED = "NOT_LOADED", L.BACKTRACKED = "BACKTRACKED", L.APPENDING = "APPENDING", L.PARTIAL = "PARTIAL", L.OK = "OK";
            })(_ || (_ = {}));
            var M = function() {
              function L(y) {
                this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hls = y, this._registerListeners();
              }
              var u = L.prototype;
              return u._registerListeners = function() {
                var p = this.hls;
                p.on(R.Events.BUFFER_APPENDED, this.onBufferAppended, this), p.on(R.Events.FRAG_BUFFERED, this.onFragBuffered, this), p.on(R.Events.FRAG_LOADED, this.onFragLoaded, this);
              }, u._unregisterListeners = function() {
                var p = this.hls;
                p.off(R.Events.BUFFER_APPENDED, this.onBufferAppended, this), p.off(R.Events.FRAG_BUFFERED, this.onFragBuffered, this), p.off(R.Events.FRAG_LOADED, this.onFragLoaded, this);
              }, u.destroy = function() {
                this._unregisterListeners(), this.fragments = this.timeRanges = null;
              }, u.getAppendedFrag = function(p, g) {
                if (g === A.PlaylistLevelType.MAIN) {
                  var T = this.activeFragment, x = this.activeParts;
                  if (!T)
                    return null;
                  if (x)
                    for (var r = x.length; r--; ) {
                      var e = x[r], t = e ? e.end : T.appendedPTS;
                      if (e.start <= p && t !== void 0 && p <= t)
                        return r > 9 && (this.activeParts = x.slice(r - 9)), e;
                    }
                  else if (T.start <= p && T.appendedPTS !== void 0 && p <= T.appendedPTS)
                    return T;
                }
                return this.getBufferedFrag(p, g);
              }, u.getBufferedFrag = function(p, g) {
                for (var T = this.fragments, x = Object.keys(T), r = x.length; r--; ) {
                  var e = T[x[r]];
                  if ((e == null ? void 0 : e.body.type) === g && e.buffered) {
                    var t = e.body;
                    if (t.start <= p && p <= t.end)
                      return t;
                  }
                }
                return null;
              }, u.detectEvictedFragments = function(p, g, T) {
                var x = this;
                Object.keys(this.fragments).forEach(function(r) {
                  var e = x.fragments[r];
                  if (!!e) {
                    if (!e.buffered) {
                      e.body.type === T && x.removeFragment(e.body);
                      return;
                    }
                    var t = e.range[p];
                    !t || t.time.some(function(i) {
                      var d = !x.isTimeBuffered(i.startPTS, i.endPTS, g);
                      return d && x.removeFragment(e.body), d;
                    });
                  }
                });
              }, u.detectPartialFragments = function(p) {
                var g = this, T = this.timeRanges, x = p.frag, r = p.part;
                if (!(!T || x.sn === "initSegment")) {
                  var e = D(x), t = this.fragments[e];
                  !t || (Object.keys(T).forEach(function(i) {
                    var d = x.elementaryStreams[i];
                    if (!!d) {
                      var s = T[i], f = r !== null || d.partial === true;
                      t.range[i] = g.getBufferedTimes(x, r, f, s);
                    }
                  }), t.backtrack = t.loaded = null, Object.keys(t.range).length ? t.buffered = true : this.removeFragment(t.body));
                }
              }, u.fragBuffered = function(p) {
                var g = D(p), T = this.fragments[g];
                T && (T.backtrack = T.loaded = null, T.buffered = true);
              }, u.getBufferedTimes = function(p, g, T, x) {
                for (var r = { time: [], partial: T }, e = g ? g.start : p.start, t = g ? g.end : p.end, i = p.minEndPTS || t, d = p.maxStartPTS || e, s = 0; s < x.length; s++) {
                  var f = x.start(s) - this.bufferPadding, v = x.end(s) + this.bufferPadding;
                  if (d >= f && i <= v) {
                    r.time.push({ startPTS: Math.max(e, x.start(s)), endPTS: Math.min(t, x.end(s)) });
                    break;
                  } else if (e < v && t > f)
                    r.partial = true, r.time.push({ startPTS: Math.max(e, x.start(s)), endPTS: Math.min(t, x.end(s)) });
                  else if (t <= f)
                    break;
                }
                return r;
              }, u.getPartialFragment = function(p) {
                var g = null, T, x, r, e = 0, t = this.bufferPadding, i = this.fragments;
                return Object.keys(i).forEach(function(d) {
                  var s = i[d];
                  !s || O(s) && (x = s.body.start - t, r = s.body.end + t, p >= x && p <= r && (T = Math.min(p - x, r - p), e <= T && (g = s.body, e = T)));
                }), g;
              }, u.getState = function(p) {
                var g = D(p), T = this.fragments[g];
                return T ? T.buffered ? O(T) ? _.PARTIAL : _.OK : T.backtrack ? _.BACKTRACKED : _.APPENDING : _.NOT_LOADED;
              }, u.backtrack = function(p, g) {
                var T = D(p), x = this.fragments[T];
                if (!x || x.backtrack)
                  return null;
                var r = x.backtrack = g || x.loaded;
                return x.loaded = null, r;
              }, u.getBacktrackData = function(p) {
                var g = D(p), T = this.fragments[g];
                if (T) {
                  var x, r = T.backtrack;
                  if (r != null && (x = r.payload) !== null && x !== void 0 && x.byteLength)
                    return r;
                  this.removeFragment(p);
                }
                return null;
              }, u.isTimeBuffered = function(p, g, T) {
                for (var x, r, e = 0; e < T.length; e++) {
                  if (x = T.start(e) - this.bufferPadding, r = T.end(e) + this.bufferPadding, p >= x && g <= r)
                    return true;
                  if (g <= x)
                    return false;
                }
                return false;
              }, u.onFragLoaded = function(p, g) {
                var T = g.frag, x = g.part;
                if (!(T.sn === "initSegment" || T.bitrateTest || x)) {
                  var r = D(T);
                  this.fragments[r] = { body: T, loaded: g, backtrack: null, buffered: false, range: Object.create(null) };
                }
              }, u.onBufferAppended = function(p, g) {
                var T = this, x = g.frag, r = g.part, e = g.timeRanges;
                if (x.type === A.PlaylistLevelType.MAIN)
                  if (this.activeFragment = x, r) {
                    var t = this.activeParts;
                    t || (this.activeParts = t = []), t.push(r);
                  } else
                    this.activeParts = null;
                this.timeRanges = e, Object.keys(e).forEach(function(i) {
                  var d = e[i];
                  if (T.detectEvictedFragments(i, d), !r)
                    for (var s = 0; s < d.length; s++)
                      x.appendedPTS = Math.max(d.end(s), x.appendedPTS || 0);
                });
              }, u.onFragBuffered = function(p, g) {
                this.detectPartialFragments(g);
              }, u.hasFragment = function(p) {
                var g = D(p);
                return !!this.fragments[g];
              }, u.removeFragmentsInRange = function(p, g, T) {
                var x = this;
                Object.keys(this.fragments).forEach(function(r) {
                  var e = x.fragments[r];
                  if (!!e && e.buffered) {
                    var t = e.body;
                    t.type === T && t.start < g && t.end > p && x.removeFragment(t);
                  }
                });
              }, u.removeFragment = function(p) {
                var g = D(p);
                p.stats.loaded = 0, p.clearElementaryStreamInfo(), delete this.fragments[g];
              }, u.removeAllFragments = function() {
                this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null;
              }, L;
            }();
            function O(L) {
              var u, y;
              return L.buffered && (((u = L.range.video) === null || u === void 0 ? void 0 : u.partial) || ((y = L.range.audio) === null || y === void 0 ? void 0 : y.partial));
            }
            function D(L) {
              return L.type + "_" + L.level + "_" + L.urlId + "_" + L.sn;
            }
          }, "./src/controller/gap-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "STALL_MINIMUM_DURATION_MS", function() {
              return O;
            }), c.d(I, "MAX_START_GAP_JUMP", function() {
              return D;
            }), c.d(I, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
              return L;
            }), c.d(I, "SKIP_BUFFER_RANGE_START", function() {
              return u;
            }), c.d(I, "default", function() {
              return y;
            });
            var R = c("./src/utils/buffer-helper.ts"), A = c("./src/errors.ts"), _ = c("./src/events.ts"), M = c("./src/utils/logger.ts"), O = 250, D = 2, L = 0.1, u = 0.05, y = function() {
              function p(T, x, r, e) {
                this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = T, this.media = x, this.fragmentTracker = r, this.hls = e;
              }
              var g = p.prototype;
              return g.destroy = function() {
                this.hls = this.fragmentTracker = this.media = null;
              }, g.poll = function(x) {
                var r = this.config, e = this.media, t = this.stalled, i = e.currentTime, d = e.seeking, s = this.seeking && !d, f = !this.seeking && d;
                if (this.seeking = d, i !== x) {
                  if (this.moved = true, t !== null) {
                    if (this.stallReported) {
                      var v = self.performance.now() - t;
                      M.logger.warn("playback not stuck anymore @" + i + ", after " + Math.round(v) + "ms"), this.stallReported = false;
                    }
                    this.stalled = null, this.nudgeRetry = 0;
                  }
                  return;
                }
                if ((f || s) && (this.stalled = null), !(e.paused || e.ended || e.playbackRate === 0 || !R.BufferHelper.getBuffered(e).length)) {
                  var h = R.BufferHelper.bufferInfo(e, i, 0), l = h.len > 0, o = h.nextStart || 0;
                  if (!(!l && !o)) {
                    if (d) {
                      var n = h.len > D, a = !o || o - i > D && !this.fragmentTracker.getPartialFragment(i);
                      if (n || a)
                        return;
                      this.moved = false;
                    }
                    if (!this.moved && this.stalled !== null) {
                      var E, m = Math.max(o, h.start || 0) - i, S = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, P = S == null || (E = S.details) === null || E === void 0 ? void 0 : E.live, b = P ? S.details.targetduration * 2 : D;
                      if (m > 0 && m <= b) {
                        this._trySkipBufferHole(null);
                        return;
                      }
                    }
                    var C = self.performance.now();
                    if (t === null) {
                      this.stalled = C;
                      return;
                    }
                    var B = C - t;
                    !d && B >= O && this._reportStall(h.len);
                    var F = R.BufferHelper.bufferInfo(e, i, r.maxBufferHole);
                    this._tryFixBufferStall(F, B);
                  }
                }
              }, g._tryFixBufferStall = function(x, r) {
                var e = this.config, t = this.fragmentTracker, i = this.media, d = i.currentTime, s = t.getPartialFragment(d);
                if (s) {
                  var f = this._trySkipBufferHole(s);
                  if (f)
                    return;
                }
                x.len > e.maxBufferHole && r > e.highBufferWatchdogPeriod * 1e3 && (M.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
              }, g._reportStall = function(x) {
                var r = this.hls, e = this.media, t = this.stallReported;
                t || (this.stallReported = true, M.logger.warn("Playback stalling at @" + e.currentTime + " due to low buffer (buffer=" + x + ")"), r.trigger(_.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.BUFFER_STALLED_ERROR, fatal: false, buffer: x }));
              }, g._trySkipBufferHole = function(x) {
                for (var r = this.config, e = this.hls, t = this.media, i = t.currentTime, d = 0, s = R.BufferHelper.getBuffered(t), f = 0; f < s.length; f++) {
                  var v = s.start(f);
                  if (i + r.maxBufferHole >= d && i < v) {
                    var h = Math.max(v + u, t.currentTime + L);
                    return M.logger.warn("skipping hole, adjusting currentTime from " + i + " to " + h), this.moved = true, this.stalled = null, t.currentTime = h, x && e.trigger(_.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: false, reason: "fragment loaded with buffer holes, seeking from " + i + " to " + h, frag: x }), h;
                  }
                  d = s.end(f);
                }
                return 0;
              }, g._tryNudgeBuffer = function() {
                var x = this.config, r = this.hls, e = this.media, t = e.currentTime, i = (this.nudgeRetry || 0) + 1;
                if (this.nudgeRetry = i, i < x.nudgeMaxRetry) {
                  var d = t + i * x.nudgeOffset;
                  M.logger.warn("Nudging 'currentTime' from " + t + " to " + d), e.currentTime = d, r.trigger(_.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.BUFFER_NUDGE_ON_STALL, fatal: false });
                } else
                  M.logger.error("Playhead still not moving while enough data buffered @" + t + " after " + x.nudgeMaxRetry + " nudges"), r.trigger(_.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.BUFFER_STALLED_ERROR, fatal: true });
              }, p;
            }();
          }, "./src/controller/id3-track-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/events.ts"), A = c("./src/utils/texttrack-utils.ts"), _ = c("./src/demux/id3.ts"), M = 0.25, O = function() {
              function D(u) {
                this.hls = void 0, this.id3Track = null, this.media = null, this.hls = u, this._registerListeners();
              }
              var L = D.prototype;
              return L.destroy = function() {
                this._unregisterListeners();
              }, L._registerListeners = function() {
                var y = this.hls;
                y.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), y.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), y.on(R.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), y.on(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }, L._unregisterListeners = function() {
                var y = this.hls;
                y.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), y.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), y.off(R.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), y.off(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }, L.onMediaAttached = function(y, p) {
                this.media = p.media;
              }, L.onMediaDetaching = function() {
                !this.id3Track || (Object(A.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null);
              }, L.getID3Track = function(y) {
                if (!!this.media) {
                  for (var p = 0; p < y.length; p++) {
                    var g = y[p];
                    if (g.kind === "metadata" && g.label === "id3")
                      return Object(A.sendAddTrackEvent)(g, this.media), g;
                  }
                  return this.media.addTextTrack("metadata", "id3");
                }
              }, L.onFragParsingMetadata = function(y, p) {
                if (!!this.media) {
                  var g = p.frag, T = p.samples;
                  this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                  for (var x = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, r = 0; r < T.length; r++) {
                    var e = _.getID3Frames(T[r].data);
                    if (e) {
                      var t = T[r].pts, i = r < T.length - 1 ? T[r + 1].pts : g.end, d = i - t;
                      d <= 0 && (i = t + M);
                      for (var s = 0; s < e.length; s++) {
                        var f = e[s];
                        if (!_.isTimeStampFrame(f)) {
                          var v = new x(t, i, "");
                          v.value = f, this.id3Track.addCue(v);
                        }
                      }
                    }
                  }
                }
              }, L.onBufferFlushing = function(y, p) {
                var g = p.startOffset, T = p.endOffset, x = p.type;
                if (!x || x === "audio") {
                  var r = this.id3Track;
                  r && Object(A.removeCuesInRange)(r, g, T);
                }
              }, D;
            }();
            I.default = O;
          }, "./src/controller/latency-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return D;
            });
            var R = c("./src/errors.ts"), A = c("./src/events.ts"), _ = c("./src/utils/logger.ts");
            function M(L, u) {
              for (var y = 0; y < u.length; y++) {
                var p = u[y];
                p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(L, p.key, p);
              }
            }
            function O(L, u, y) {
              return u && M(L.prototype, u), y && M(L, y), L;
            }
            var D = function() {
              function L(y) {
                var p = this;
                this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
                  return p.timeupdate();
                }, this.hls = y, this.config = y.config, this.registerListeners();
              }
              var u = L.prototype;
              return u.destroy = function() {
                this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
              }, u.registerListeners = function() {
                this.hls.on(A.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(A.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(A.Events.ERROR, this.onError, this);
              }, u.unregisterListeners = function() {
                this.hls.off(A.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(A.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(A.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(A.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(A.Events.ERROR, this.onError);
              }, u.onMediaAttached = function(p, g) {
                this.media = g.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
              }, u.onMediaDetaching = function() {
                this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
              }, u.onManifestLoading = function() {
                this.levelDetails = null, this._latency = null, this.stallCount = 0;
              }, u.onLevelUpdated = function(p, g) {
                var T = g.details;
                this.levelDetails = T, T.advanced && this.timeupdate(), !T.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
              }, u.onError = function(p, g) {
                g.details === R.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, _.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
              }, u.timeupdate = function() {
                var p = this.media, g = this.levelDetails;
                if (!(!p || !g)) {
                  this.currentTime = p.currentTime;
                  var T = this.computeLatency();
                  if (T !== null) {
                    this._latency = T;
                    var x = this.config, r = x.lowLatencyMode, e = x.maxLiveSyncPlaybackRate;
                    if (!(!r || e === 1)) {
                      var t = this.targetLatency;
                      if (t !== null) {
                        var i = T - t, d = Math.min(this.maxLatency, t + g.targetduration), s = i < d;
                        if (g.live && s && i > 0.05 && this.forwardBufferLength > 1) {
                          var f = Math.min(2, Math.max(1, e)), v = Math.round(2 / (1 + Math.exp(-0.75 * i - this.edgeStalled)) * 20) / 20;
                          p.playbackRate = Math.min(f, Math.max(1, v));
                        } else
                          p.playbackRate !== 1 && p.playbackRate !== 0 && (p.playbackRate = 1);
                      }
                    }
                  }
                }
              }, u.estimateLiveEdge = function() {
                var p = this.levelDetails;
                return p === null ? null : p.edge + p.age;
              }, u.computeLatency = function() {
                var p = this.estimateLiveEdge();
                return p === null ? null : p - this.currentTime;
              }, O(L, [{ key: "latency", get: function() {
                return this._latency || 0;
              } }, { key: "maxLatency", get: function() {
                var p = this.config, g = this.levelDetails;
                return p.liveMaxLatencyDuration !== void 0 ? p.liveMaxLatencyDuration : g ? p.liveMaxLatencyDurationCount * g.targetduration : 0;
              } }, { key: "targetLatency", get: function() {
                var p = this.levelDetails;
                if (p === null)
                  return null;
                var g = p.holdBack, T = p.partHoldBack, x = p.targetduration, r = this.config, e = r.liveSyncDuration, t = r.liveSyncDurationCount, i = r.lowLatencyMode, d = this.hls.userConfig, s = i && T || g;
                (d.liveSyncDuration || d.liveSyncDurationCount || s === 0) && (s = e !== void 0 ? e : t * x);
                var f = x, v = 1;
                return s + Math.min(this.stallCount * v, f);
              } }, { key: "liveSyncPosition", get: function() {
                var p = this.estimateLiveEdge(), g = this.targetLatency, T = this.levelDetails;
                if (p === null || g === null || T === null)
                  return null;
                var x = T.edge, r = p - g - this.edgeStalled, e = x - T.totalduration, t = x - (this.config.lowLatencyMode && T.partTarget || T.targetduration);
                return Math.min(Math.max(e, r), t);
              } }, { key: "drift", get: function() {
                var p = this.levelDetails;
                return p === null ? 1 : p.drift;
              } }, { key: "edgeStalled", get: function() {
                var p = this.levelDetails;
                if (p === null)
                  return 0;
                var g = (this.config.lowLatencyMode && p.partTarget || p.targetduration) * 3;
                return Math.max(p.age - g, 0);
              } }, { key: "forwardBufferLength", get: function() {
                var p = this.media, g = this.levelDetails;
                if (!p || !g)
                  return 0;
                var T = p.buffered.length;
                return T ? p.buffered.end(T - 1) : g.edge - this.currentTime;
              } }]), L;
            }();
          }, "./src/controller/level-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return r;
            });
            var R = c("./src/types/level.ts"), A = c("./src/events.ts"), _ = c("./src/errors.ts"), M = c("./src/utils/codecs.ts"), O = c("./src/controller/level-helper.ts"), D = c("./src/controller/base-playlist-controller.ts"), L = c("./src/types/loader.ts");
            function u() {
              return u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var d in i)
                    Object.prototype.hasOwnProperty.call(i, d) && (e[d] = i[d]);
                }
                return e;
              }, u.apply(this, arguments);
            }
            function y(e, t) {
              for (var i = 0; i < t.length; i++) {
                var d = t[i];
                d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(e, d.key, d);
              }
            }
            function p(e, t, i) {
              return t && y(e.prototype, t), i && y(e, i), e;
            }
            function g(e, t) {
              e.prototype = Object.create(t.prototype), e.prototype.constructor = e, T(e, t);
            }
            function T(e, t) {
              return T = Object.setPrototypeOf || function(d, s) {
                return d.__proto__ = s, d;
              }, T(e, t);
            }
            var x = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r = function(e) {
              g(t, e);
              function t(d) {
                var s;
                return s = e.call(this, d, "[level-controller]") || this, s._levels = [], s._firstLevel = -1, s._startLevel = void 0, s.currentLevelIndex = -1, s.manualLevelIndex = -1, s.onParsedComplete = void 0, s._registerListeners(), s;
              }
              var i = t.prototype;
              return i._registerListeners = function() {
                var s = this.hls;
                s.on(A.Events.MANIFEST_LOADED, this.onManifestLoaded, this), s.on(A.Events.LEVEL_LOADED, this.onLevelLoaded, this), s.on(A.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), s.on(A.Events.FRAG_LOADED, this.onFragLoaded, this), s.on(A.Events.ERROR, this.onError, this);
              }, i._unregisterListeners = function() {
                var s = this.hls;
                s.off(A.Events.MANIFEST_LOADED, this.onManifestLoaded, this), s.off(A.Events.LEVEL_LOADED, this.onLevelLoaded, this), s.off(A.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), s.off(A.Events.FRAG_LOADED, this.onFragLoaded, this), s.off(A.Events.ERROR, this.onError, this);
              }, i.destroy = function() {
                this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, e.prototype.destroy.call(this);
              }, i.startLoad = function() {
                var s = this._levels;
                s.forEach(function(f) {
                  f.loadError = 0;
                }), e.prototype.startLoad.call(this);
              }, i.onManifestLoaded = function(s, f) {
                var v = [], h = [], l = [], o, n = {}, a, E = false, m = false, S = false;
                if (f.levels.forEach(function(B) {
                  var F = B.attrs;
                  E = E || !!(B.width && B.height), m = m || !!B.videoCodec, S = S || !!B.audioCodec, x && B.audioCodec && B.audioCodec.indexOf("mp4a.40.34") !== -1 && (B.audioCodec = void 0);
                  var U = B.bitrate + "-" + B.attrs.RESOLUTION + "-" + B.attrs.CODECS;
                  a = n[U], a ? a.url.push(B.url) : (a = new R.Level(B), n[U] = a, v.push(a)), F && (F.AUDIO && Object(O.addGroupId)(a, "audio", F.AUDIO), F.SUBTITLES && Object(O.addGroupId)(a, "text", F.SUBTITLES));
                }), (E || m) && S && (v = v.filter(function(B) {
                  var F = B.videoCodec, U = B.width, w = B.height;
                  return !!F || !!(U && w);
                })), v = v.filter(function(B) {
                  var F = B.audioCodec, U = B.videoCodec;
                  return (!F || Object(M.isCodecSupportedInMp4)(F, "audio")) && (!U || Object(M.isCodecSupportedInMp4)(U, "video"));
                }), f.audioTracks && (h = f.audioTracks.filter(function(B) {
                  return !B.audioCodec || Object(M.isCodecSupportedInMp4)(B.audioCodec, "audio");
                }), Object(O.assignTrackIdsByGroup)(h)), f.subtitles && (l = f.subtitles, Object(O.assignTrackIdsByGroup)(l)), v.length > 0) {
                  o = v[0].bitrate, v.sort(function(B, F) {
                    return B.bitrate - F.bitrate;
                  }), this._levels = v;
                  for (var P = 0; P < v.length; P++)
                    if (v[P].bitrate === o) {
                      this._firstLevel = P, this.log("manifest loaded, " + v.length + " level(s) found, first bitrate: " + o);
                      break;
                    }
                  var b = S && !m, C = { levels: v, audioTracks: h, subtitleTracks: l, firstLevel: this._firstLevel, stats: f.stats, audio: S, video: m, altAudio: !b && h.some(function(B) {
                    return !!B.url;
                  }) };
                  this.hls.trigger(A.Events.MANIFEST_PARSED, C), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
                } else
                  this.hls.trigger(A.Events.ERROR, { type: _.ErrorTypes.MEDIA_ERROR, details: _.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: f.url, reason: "no level with compatible codecs found in manifest" });
              }, i.onError = function(s, f) {
                if (e.prototype.onError.call(this, s, f), !f.fatal) {
                  var v = f.context, h = this._levels[this.currentLevelIndex];
                  if (v && (v.type === L.PlaylistContextType.AUDIO_TRACK && h.audioGroupIds && v.groupId === h.audioGroupIds[h.urlId] || v.type === L.PlaylistContextType.SUBTITLE_TRACK && h.textGroupIds && v.groupId === h.textGroupIds[h.urlId])) {
                    this.redundantFailover(this.currentLevelIndex);
                    return;
                  }
                  var l = false, o = true, n;
                  switch (f.details) {
                    case _.ErrorDetails.FRAG_LOAD_ERROR:
                    case _.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case _.ErrorDetails.KEY_LOAD_ERROR:
                    case _.ErrorDetails.KEY_LOAD_TIMEOUT:
                      if (f.frag) {
                        var a = this._levels[f.frag.level];
                        a ? (a.fragmentError++, a.fragmentError > this.hls.config.fragLoadingMaxRetry && (n = f.frag.level)) : n = f.frag.level;
                      }
                      break;
                    case _.ErrorDetails.LEVEL_LOAD_ERROR:
                    case _.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                      v && (v.deliveryDirectives && (o = false), n = v.level), l = true;
                      break;
                    case _.ErrorDetails.REMUX_ALLOC_ERROR:
                      n = f.level, l = true;
                      break;
                  }
                  n !== void 0 && this.recoverLevel(f, n, l, o);
                }
              }, i.recoverLevel = function(s, f, v, h) {
                var l = s.details, o = this._levels[f];
                if (o.loadError++, v) {
                  var n = this.retryLoadingOrFail(s);
                  if (n)
                    s.levelRetry = true;
                  else {
                    this.currentLevelIndex = -1;
                    return;
                  }
                }
                if (h) {
                  var a = o.url.length;
                  if (a > 1 && o.loadError < a)
                    s.levelRetry = true, this.redundantFailover(f);
                  else if (this.manualLevelIndex === -1) {
                    var E = f === 0 ? this._levels.length - 1 : f - 1;
                    this.currentLevelIndex !== E && this._levels[E].loadError === 0 && (this.warn(l + ": switch to " + E), s.levelRetry = true, this.hls.nextAutoLevel = E);
                  }
                }
              }, i.redundantFailover = function(s) {
                var f = this._levels[s], v = f.url.length;
                if (v > 1) {
                  var h = (f.urlId + 1) % v;
                  this.warn("Switching to redundant URL-id " + h), this._levels.forEach(function(l) {
                    l.urlId = h;
                  }), this.level = s;
                }
              }, i.onFragLoaded = function(s, f) {
                var v = f.frag;
                if (v !== void 0 && v.type === L.PlaylistLevelType.MAIN) {
                  var h = this._levels[v.level];
                  h !== void 0 && (h.fragmentError = 0, h.loadError = 0);
                }
              }, i.onLevelLoaded = function(s, f) {
                var v, h = f.level, l = f.details, o = this._levels[h];
                if (!o) {
                  var n;
                  this.warn("Invalid level index " + h), (n = f.deliveryDirectives) !== null && n !== void 0 && n.skip && (l.deltaUpdateFailed = true);
                  return;
                }
                h === this.currentLevelIndex ? (o.fragmentError === 0 && (o.loadError = 0, this.retryCount = 0), this.playlistLoaded(h, f, o.details)) : (v = f.deliveryDirectives) !== null && v !== void 0 && v.skip && (l.deltaUpdateFailed = true);
              }, i.onAudioTrackSwitched = function(s, f) {
                var v = this.hls.levels[this.currentLevelIndex];
                if (!!v && v.audioGroupIds) {
                  for (var h = -1, l = this.hls.audioTracks[f.id].groupId, o = 0; o < v.audioGroupIds.length; o++)
                    if (v.audioGroupIds[o] === l) {
                      h = o;
                      break;
                    }
                  h !== v.urlId && (v.urlId = h, this.startLoad());
                }
              }, i.loadPlaylist = function(s) {
                var f = this.currentLevelIndex, v = this._levels[f];
                if (this.canLoad && v && v.url.length > 0) {
                  var h = v.urlId, l = v.url[h];
                  if (s)
                    try {
                      l = s.addDirectives(l);
                    } catch (o) {
                      this.warn("Could not construct new URL with HLS Delivery Directives: " + o);
                    }
                  this.log("Attempt loading level index " + f + (s ? " at sn " + s.msn + " part " + s.part : "") + " with URL-id " + h + " " + l), this.clearTimer(), this.hls.trigger(A.Events.LEVEL_LOADING, { url: l, level: f, id: h, deliveryDirectives: s || null });
                }
              }, i.removeLevel = function(s, f) {
                var v = function(o, n) {
                  return n !== f;
                }, h = this._levels.filter(function(l, o) {
                  return o !== s ? true : l.url.length > 1 && f !== void 0 ? (l.url = l.url.filter(v), l.audioGroupIds && (l.audioGroupIds = l.audioGroupIds.filter(v)), l.textGroupIds && (l.textGroupIds = l.textGroupIds.filter(v)), l.urlId = 0, true) : false;
                }).map(function(l, o) {
                  var n = l.details;
                  return n != null && n.fragments && n.fragments.forEach(function(a) {
                    a.level = o;
                  }), l;
                });
                this._levels = h, this.hls.trigger(A.Events.LEVELS_UPDATED, { levels: h });
              }, p(t, [{ key: "levels", get: function() {
                return this._levels.length === 0 ? null : this._levels;
              } }, { key: "level", get: function() {
                return this.currentLevelIndex;
              }, set: function(s) {
                var f, v = this._levels;
                if (v.length !== 0 && !(this.currentLevelIndex === s && (f = v[s]) !== null && f !== void 0 && f.details)) {
                  if (s < 0 || s >= v.length) {
                    var h = s < 0;
                    if (this.hls.trigger(A.Events.ERROR, { type: _.ErrorTypes.OTHER_ERROR, details: _.ErrorDetails.LEVEL_SWITCH_ERROR, level: s, fatal: h, reason: "invalid level idx" }), h)
                      return;
                    s = Math.min(s, v.length - 1);
                  }
                  this.clearTimer();
                  var l = this.currentLevelIndex, o = v[l], n = v[s];
                  this.log("switching to level " + s + " from " + l), this.currentLevelIndex = s;
                  var a = u({}, n, { level: s, maxBitrate: n.maxBitrate, uri: n.uri, urlId: n.urlId });
                  delete a._urlId, this.hls.trigger(A.Events.LEVEL_SWITCHING, a);
                  var E = n.details;
                  if (!E || E.live) {
                    var m = this.switchParams(n.uri, o == null ? void 0 : o.details);
                    this.loadPlaylist(m);
                  }
                }
              } }, { key: "manualLevel", get: function() {
                return this.manualLevelIndex;
              }, set: function(s) {
                this.manualLevelIndex = s, this._startLevel === void 0 && (this._startLevel = s), s !== -1 && (this.level = s);
              } }, { key: "firstLevel", get: function() {
                return this._firstLevel;
              }, set: function(s) {
                this._firstLevel = s;
              } }, { key: "startLevel", get: function() {
                if (this._startLevel === void 0) {
                  var s = this.hls.config.startLevel;
                  return s !== void 0 ? s : this._firstLevel;
                } else
                  return this._startLevel;
              }, set: function(s) {
                this._startLevel = s;
              } }, { key: "nextLoadLevel", get: function() {
                return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
              }, set: function(s) {
                this.level = s, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = s);
              } }]), t;
            }(D.default);
          }, "./src/controller/level-helper.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "addGroupId", function() {
              return _;
            }), c.d(I, "assignTrackIdsByGroup", function() {
              return M;
            }), c.d(I, "updatePTS", function() {
              return O;
            }), c.d(I, "updateFragPTSDTS", function() {
              return L;
            }), c.d(I, "mergeDetails", function() {
              return u;
            }), c.d(I, "mapPartIntersection", function() {
              return y;
            }), c.d(I, "mapFragmentIntersection", function() {
              return p;
            }), c.d(I, "adjustSliding", function() {
              return g;
            }), c.d(I, "addSliding", function() {
              return T;
            }), c.d(I, "computeReloadInterval", function() {
              return x;
            }), c.d(I, "getFragmentWithSN", function() {
              return r;
            }), c.d(I, "getPartWith", function() {
              return e;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/utils/logger.ts");
            function _(t, i, d) {
              switch (i) {
                case "audio":
                  t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(d);
                  break;
                case "text":
                  t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(d);
                  break;
              }
            }
            function M(t) {
              var i = {};
              t.forEach(function(d) {
                var s = d.groupId || "";
                d.id = i[s] = i[s] || 0, i[s]++;
              });
            }
            function O(t, i, d) {
              var s = t[i], f = t[d];
              D(s, f);
            }
            function D(t, i) {
              var d = i.startPTS;
              if (Object(R.isFiniteNumber)(d)) {
                var s = 0, f;
                i.sn > t.sn ? (s = d - t.start, f = t) : (s = t.start - d, f = i), f.duration !== s && (f.duration = s);
              } else if (i.sn > t.sn) {
                var v = t.cc === i.cc;
                v && t.minEndPTS ? i.start = t.start + (t.minEndPTS - t.start) : i.start = t.start + t.duration;
              } else
                i.start = Math.max(t.start - i.duration, 0);
            }
            function L(t, i, d, s, f, v) {
              var h = s - d;
              h <= 0 && (A.logger.warn("Fragment should have a positive duration", i), s = d + i.duration, v = f + i.duration);
              var l = d, o = s, n = i.startPTS, a = i.endPTS;
              if (Object(R.isFiniteNumber)(n)) {
                var E = Math.abs(n - d);
                Object(R.isFiniteNumber)(i.deltaPTS) ? i.deltaPTS = Math.max(E, i.deltaPTS) : i.deltaPTS = E, l = Math.max(d, n), d = Math.min(d, n), f = Math.min(f, i.startDTS), o = Math.min(s, a), s = Math.max(s, a), v = Math.max(v, i.endDTS);
              }
              i.duration = s - d;
              var m = d - i.start;
              i.appendedPTS = s, i.start = i.startPTS = d, i.maxStartPTS = l, i.startDTS = f, i.endPTS = s, i.minEndPTS = o, i.endDTS = v;
              var S = i.sn;
              if (!t || S < t.startSN || S > t.endSN)
                return 0;
              var P, b = S - t.startSN, C = t.fragments;
              for (C[b] = i, P = b; P > 0; P--)
                D(C[P], C[P - 1]);
              for (P = b; P < C.length - 1; P++)
                D(C[P], C[P + 1]);
              return t.fragmentHint && D(C[C.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = true, m;
            }
            function u(t, i) {
              for (var d = null, s = t.fragments, f = s.length - 1; f >= 0; f--) {
                var v = s[f].initSegment;
                if (v) {
                  d = v;
                  break;
                }
              }
              t.fragmentHint && delete t.fragmentHint.endPTS;
              var h = 0, l;
              if (p(t, i, function(S, P) {
                var b;
                S.relurl && (h = S.cc - P.cc), Object(R.isFiniteNumber)(S.startPTS) && Object(R.isFiniteNumber)(S.endPTS) && (P.start = P.startPTS = S.startPTS, P.startDTS = S.startDTS, P.appendedPTS = S.appendedPTS, P.maxStartPTS = S.maxStartPTS, P.endPTS = S.endPTS, P.endDTS = S.endDTS, P.minEndPTS = S.minEndPTS, P.duration = S.endPTS - S.startPTS, P.duration && (l = P), i.PTSKnown = i.alignedSliding = true), P.elementaryStreams = S.elementaryStreams, P.loader = S.loader, P.stats = S.stats, P.urlId = S.urlId, S.initSegment ? (P.initSegment = S.initSegment, d = S.initSegment) : (!P.initSegment || P.initSegment.relurl == ((b = d) === null || b === void 0 ? void 0 : b.relurl)) && (P.initSegment = d);
              }), i.skippedSegments && (i.deltaUpdateFailed = i.fragments.some(function(S) {
                return !S;
              }), i.deltaUpdateFailed)) {
                A.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                for (var o = i.skippedSegments; o--; )
                  i.fragments.shift();
                i.startSN = i.fragments[0].sn, i.startCC = i.fragments[0].cc;
              }
              var n = i.fragments;
              if (h) {
                A.logger.warn("discontinuity sliding from playlist, take drift into account");
                for (var a = 0; a < n.length; a++)
                  n[a].cc += h;
              }
              i.skippedSegments && (i.startCC = i.fragments[0].cc), y(t.partList, i.partList, function(S, P) {
                P.elementaryStreams = S.elementaryStreams, P.stats = S.stats;
              }), l ? L(i, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS) : g(t, i), n.length && (i.totalduration = i.edge - n[0].start), i.driftStartTime = t.driftStartTime, i.driftStart = t.driftStart;
              var E = i.advancedDateTime;
              if (i.advanced && E) {
                var m = i.edge;
                i.driftStart || (i.driftStartTime = E, i.driftStart = m), i.driftEndTime = E, i.driftEnd = m;
              } else
                i.driftEndTime = t.driftEndTime, i.driftEnd = t.driftEnd, i.advancedDateTime = t.advancedDateTime;
            }
            function y(t, i, d) {
              if (t && i)
                for (var s = 0, f = 0, v = t.length; f <= v; f++) {
                  var h = t[f], l = i[f + s];
                  h && l && h.index === l.index && h.fragment.sn === l.fragment.sn ? d(h, l) : s--;
                }
            }
            function p(t, i, d) {
              for (var s = i.skippedSegments, f = Math.max(t.startSN, i.startSN) - i.startSN, v = (t.fragmentHint ? 1 : 0) + (s ? i.endSN : Math.min(t.endSN, i.endSN)) - i.startSN, h = i.startSN - t.startSN, l = i.fragmentHint ? i.fragments.concat(i.fragmentHint) : i.fragments, o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, n = f; n <= v; n++) {
                var a = o[h + n], E = l[n];
                s && !E && n < s && (E = i.fragments[n] = a), a && E && d(a, E);
              }
            }
            function g(t, i) {
              var d = i.startSN + i.skippedSegments - t.startSN, s = t.fragments;
              d < 0 || d >= s.length || T(i, s[d].start);
            }
            function T(t, i) {
              if (i) {
                for (var d = t.fragments, s = t.skippedSegments; s < d.length; s++)
                  d[s].start += i;
                t.fragmentHint && (t.fragmentHint.start += i);
              }
            }
            function x(t, i) {
              var d = 1e3 * t.levelTargetDuration, s = d / 2, f = t.age, v = f > 0 && f < d * 3, h = i.loading.end - i.loading.start, l, o = t.availabilityDelay;
              if (t.updated === false)
                if (v) {
                  var n = 333 * t.misses;
                  l = Math.max(Math.min(s, h * 2), n), t.availabilityDelay = (t.availabilityDelay || 0) + l;
                } else
                  l = s;
              else
                v ? (o = Math.min(o || d / 2, f), t.availabilityDelay = o, l = o + d - f) : l = d - h;
              return Math.round(l);
            }
            function r(t, i, d) {
              if (!t || !t.details)
                return null;
              var s = t.details, f = s.fragments[i - s.startSN];
              return f || (f = s.fragmentHint, f && f.sn === i) ? f : i < s.startSN && d && d.sn === i ? d : null;
            }
            function e(t, i, d) {
              if (!t || !t.details)
                return null;
              var s = t.details.partList;
              if (s)
                for (var f = s.length; f--; ) {
                  var v = s[f];
                  if (v.index === d && v.fragment.sn === i)
                    return v;
                }
              return null;
            }
          }, "./src/controller/stream-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return s;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/controller/base-stream-controller.ts"), _ = c("./src/is-supported.ts"), M = c("./src/events.ts"), O = c("./src/utils/buffer-helper.ts"), D = c("./src/controller/fragment-tracker.ts"), L = c("./src/types/loader.ts"), u = c("./src/loader/fragment.ts"), y = c("./src/demux/transmuxer-interface.ts"), p = c("./src/types/transmuxer.ts"), g = c("./src/controller/gap-controller.ts"), T = c("./src/errors.ts"), x = c("./src/utils/logger.ts");
            function r(f, v) {
              for (var h = 0; h < v.length; h++) {
                var l = v[h];
                l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(f, l.key, l);
              }
            }
            function e(f, v, h) {
              return v && r(f.prototype, v), h && r(f, h), f;
            }
            function t(f, v) {
              f.prototype = Object.create(v.prototype), f.prototype.constructor = f, i(f, v);
            }
            function i(f, v) {
              return i = Object.setPrototypeOf || function(l, o) {
                return l.__proto__ = o, l;
              }, i(f, v);
            }
            var d = 100, s = function(f) {
              t(v, f);
              function v(l, o) {
                var n;
                return n = f.call(this, l, o, "[stream-controller]") || this, n.audioCodecSwap = false, n.gapController = null, n.level = -1, n._forceStartLoad = false, n.altAudio = false, n.audioOnly = false, n.fragPlaying = null, n.onvplaying = null, n.onvseeked = null, n.fragLastKbps = 0, n.stalled = false, n.couldBacktrack = false, n.audioCodecSwitch = false, n.videoBuffer = null, n._registerListeners(), n;
              }
              var h = v.prototype;
              return h._registerListeners = function() {
                var o = this.hls;
                o.on(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this), o.on(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this), o.on(M.Events.MANIFEST_LOADING, this.onManifestLoading, this), o.on(M.Events.MANIFEST_PARSED, this.onManifestParsed, this), o.on(M.Events.LEVEL_LOADING, this.onLevelLoading, this), o.on(M.Events.LEVEL_LOADED, this.onLevelLoaded, this), o.on(M.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), o.on(M.Events.ERROR, this.onError, this), o.on(M.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), o.on(M.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), o.on(M.Events.BUFFER_CREATED, this.onBufferCreated, this), o.on(M.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), o.on(M.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), o.on(M.Events.FRAG_BUFFERED, this.onFragBuffered, this);
              }, h._unregisterListeners = function() {
                var o = this.hls;
                o.off(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this), o.off(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this), o.off(M.Events.MANIFEST_LOADING, this.onManifestLoading, this), o.off(M.Events.MANIFEST_PARSED, this.onManifestParsed, this), o.off(M.Events.LEVEL_LOADED, this.onLevelLoaded, this), o.off(M.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), o.off(M.Events.ERROR, this.onError, this), o.off(M.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), o.off(M.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), o.off(M.Events.BUFFER_CREATED, this.onBufferCreated, this), o.off(M.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), o.off(M.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), o.off(M.Events.FRAG_BUFFERED, this.onFragBuffered, this);
              }, h.onHandlerDestroying = function() {
                this._unregisterListeners(), this.onMediaDetaching();
              }, h.startLoad = function(o) {
                if (this.levels) {
                  var n = this.lastCurrentTime, a = this.hls;
                  if (this.stopLoad(), this.setInterval(d), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                    var E = a.startLevel;
                    E === -1 && (a.config.testBandwidth ? (E = 0, this.bitrateTest = true) : E = a.nextAutoLevel), this.level = a.nextLoadLevel = E, this.loadedmetadata = false;
                  }
                  n > 0 && o === -1 && (this.log("Override startPosition with lastCurrentTime @" + n.toFixed(3)), o = n), this.state = A.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = o, this.tick();
                } else
                  this._forceStartLoad = true, this.state = A.State.STOPPED;
              }, h.stopLoad = function() {
                this._forceStartLoad = false, f.prototype.stopLoad.call(this);
              }, h.doTick = function() {
                switch (this.state) {
                  case A.State.IDLE:
                    this.doTickIdle();
                    break;
                  case A.State.WAITING_LEVEL: {
                    var o, n = this.levels, a = this.level, E = n == null || (o = n[a]) === null || o === void 0 ? void 0 : o.details;
                    if (E && (!E.live || this.levelLastLoaded === this.level)) {
                      if (this.waitForCdnTuneIn(E))
                        break;
                      this.state = A.State.IDLE;
                      break;
                    }
                    break;
                  }
                  case A.State.FRAG_LOADING_WAITING_RETRY:
                    {
                      var m, S = self.performance.now(), P = this.retryDate;
                      (!P || S >= P || (m = this.media) !== null && m !== void 0 && m.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = A.State.IDLE);
                    }
                    break;
                  default:
                    break;
                }
                this.onTickEnd();
              }, h.onTickEnd = function() {
                f.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
              }, h.doTickIdle = function() {
                var o, n, a = this.hls, E = this.levelLastLoaded, m = this.levels, S = this.media, P = a.config, b = a.nextLoadLevel;
                if (!(E === null || !S && (this.startFragRequested || !P.startFragPrefetch)) && !(this.altAudio && this.audioOnly) && !(!m || !m[b])) {
                  var C = m[b];
                  this.level = a.nextLoadLevel = b;
                  var B = C.details;
                  if (!B || this.state === A.State.WAITING_LEVEL || B.live && this.levelLastLoaded !== b) {
                    this.state = A.State.WAITING_LEVEL;
                    return;
                  }
                  var F = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : S, L.PlaylistLevelType.MAIN);
                  if (F !== null) {
                    var U = F.len, w = this.getMaxBufferLength(C.maxBitrate);
                    if (!(U >= w)) {
                      if (this._streamEnded(F, B)) {
                        var k = {};
                        this.altAudio && (k.type = "video"), this.hls.trigger(M.Events.BUFFER_EOS, k), this.state = A.State.ENDED;
                        return;
                      }
                      var W = F.end, K = this.getNextFragment(W, B);
                      if (this.couldBacktrack && !this.fragPrevious && K && K.sn !== "initSegment") {
                        var j = K.sn - B.startSN;
                        j > 1 && (K = B.fragments[j - 1], this.fragmentTracker.removeFragment(K));
                      }
                      if (K && this.fragmentTracker.getState(K) === D.FragmentState.OK && this.nextLoadPosition > W) {
                        var G = this.audioOnly && !this.altAudio ? u.ElementaryStreamTypes.AUDIO : u.ElementaryStreamTypes.VIDEO;
                        this.afterBufferFlushed(S, G, L.PlaylistLevelType.MAIN), K = this.getNextFragment(this.nextLoadPosition, B);
                      }
                      !K || (K.initSegment && !K.initSegment.data && !this.bitrateTest && (K = K.initSegment), ((o = K.decryptdata) === null || o === void 0 ? void 0 : o.keyFormat) === "identity" && !((n = K.decryptdata) !== null && n !== void 0 && n.key) ? this.loadKey(K, B) : this.loadFragment(K, B, W));
                    }
                  }
                }
              }, h.loadFragment = function(o, n, a) {
                var E, m = this.fragmentTracker.getState(o);
                if (this.fragCurrent = o, m === D.FragmentState.BACKTRACKED) {
                  var S = this.fragmentTracker.getBacktrackData(o);
                  if (S) {
                    this._handleFragmentLoadProgress(S), this._handleFragmentLoadComplete(S);
                    return;
                  } else
                    m = D.FragmentState.NOT_LOADED;
                }
                m === D.FragmentState.NOT_LOADED || m === D.FragmentState.PARTIAL ? o.sn === "initSegment" ? this._loadInitSegment(o) : this.bitrateTest ? (o.bitrateTest = true, this.log("Fragment " + o.sn + " of level " + o.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(o)) : (this.startFragRequested = true, f.prototype.loadFragment.call(this, o, n, a)) : m === D.FragmentState.APPENDING ? this.reduceMaxBufferLength(o.duration) && this.fragmentTracker.removeFragment(o) : ((E = this.media) === null || E === void 0 ? void 0 : E.buffered.length) === 0 && this.fragmentTracker.removeAllFragments();
              }, h.getAppendedFrag = function(o) {
                var n = this.fragmentTracker.getAppendedFrag(o, L.PlaylistLevelType.MAIN);
                return n && "fragment" in n ? n.fragment : n;
              }, h.getBufferedFrag = function(o) {
                return this.fragmentTracker.getBufferedFrag(o, L.PlaylistLevelType.MAIN);
              }, h.followingBufferedFrag = function(o) {
                return o ? this.getBufferedFrag(o.end + 0.5) : null;
              }, h.immediateLevelSwitch = function() {
                this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
              }, h.nextLevelSwitch = function() {
                var o = this.levels, n = this.media;
                if (n != null && n.readyState) {
                  var a, E = this.getAppendedFrag(n.currentTime);
                  if (E && E.start > 1 && this.flushMainBuffer(0, E.start - 1), !n.paused && o) {
                    var m = this.hls.nextLoadLevel, S = o[m], P = this.fragLastKbps;
                    P && this.fragCurrent ? a = this.fragCurrent.duration * S.maxBitrate / (1e3 * P) + 1 : a = 0;
                  } else
                    a = 0;
                  var b = this.getBufferedFrag(n.currentTime + a);
                  if (b) {
                    var C = this.followingBufferedFrag(b);
                    if (C) {
                      this.abortCurrentFrag();
                      var B = C.maxStartPTS ? C.maxStartPTS : C.start, F = C.duration, U = Math.max(b.end, B + Math.min(Math.max(F - this.config.maxFragLookUpTolerance, F * 0.5), F * 0.75));
                      this.flushMainBuffer(U, Number.POSITIVE_INFINITY);
                    }
                  }
                }
              }, h.abortCurrentFrag = function() {
                var o = this.fragCurrent;
                this.fragCurrent = null, o != null && o.loader && o.loader.abort(), this.state === A.State.KEY_LOADING && (this.state = A.State.IDLE), this.nextLoadPosition = this.getLoadPosition();
              }, h.flushMainBuffer = function(o, n) {
                f.prototype.flushMainBuffer.call(this, o, n, this.altAudio ? "video" : null);
              }, h.onMediaAttached = function(o, n) {
                f.prototype.onMediaAttached.call(this, o, n);
                var a = n.media;
                this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), a.addEventListener("playing", this.onvplaying), a.addEventListener("seeked", this.onvseeked), this.gapController = new g.default(this.config, a, this.fragmentTracker, this.hls);
              }, h.onMediaDetaching = function() {
                var o = this.media;
                o && (o.removeEventListener("playing", this.onvplaying), o.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), f.prototype.onMediaDetaching.call(this);
              }, h.onMediaPlaying = function() {
                this.tick();
              }, h.onMediaSeeked = function() {
                var o = this.media, n = o ? o.currentTime : null;
                Object(R.isFiniteNumber)(n) && this.log("Media seeked to " + n.toFixed(3)), this.tick();
              }, h.onManifestLoading = function() {
                this.log("Trigger BUFFER_RESET"), this.hls.trigger(M.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = false, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null;
              }, h.onManifestParsed = function(o, n) {
                var a = false, E = false, m;
                n.levels.forEach(function(S) {
                  m = S.audioCodec, m && (m.indexOf("mp4a.40.2") !== -1 && (a = true), m.indexOf("mp4a.40.5") !== -1 && (E = true));
                }), this.audioCodecSwitch = a && E && !Object(_.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = n.levels, this.startFragRequested = false;
              }, h.onLevelLoading = function(o, n) {
                var a = this.levels;
                if (!(!a || this.state !== A.State.IDLE)) {
                  var E = a[n.level];
                  (!E.details || E.details.live && this.levelLastLoaded !== n.level || this.waitForCdnTuneIn(E.details)) && (this.state = A.State.WAITING_LEVEL);
                }
              }, h.onLevelLoaded = function(o, n) {
                var a, E = this.levels, m = n.level, S = n.details, P = S.totalduration;
                if (!E) {
                  this.warn("Levels were reset while loading level " + m);
                  return;
                }
                this.log("Level " + m + " loaded [" + S.startSN + "," + S.endSN + "], cc [" + S.startCC + ", " + S.endCC + "] duration:" + P);
                var b = this.fragCurrent;
                b && (this.state === A.State.FRAG_LOADING || this.state === A.State.FRAG_LOADING_WAITING_RETRY) && b.level !== n.level && b.loader && (this.state = A.State.IDLE, b.loader.abort());
                var C = E[m], B = 0;
                if (S.live || (a = C.details) !== null && a !== void 0 && a.live) {
                  if (S.fragments[0] || (S.deltaUpdateFailed = true), S.deltaUpdateFailed)
                    return;
                  B = this.alignPlaylists(S, C.details);
                }
                if (C.details = S, this.levelLastLoaded = m, this.hls.trigger(M.Events.LEVEL_UPDATED, { details: S, level: m }), this.state === A.State.WAITING_LEVEL) {
                  if (this.waitForCdnTuneIn(S))
                    return;
                  this.state = A.State.IDLE;
                }
                this.startFragRequested ? S.live && this.synchronizeToLiveEdge(S) : this.setStartPosition(S, B), this.tick();
              }, h._handleFragmentLoadProgress = function(o) {
                var n, a = o.frag, E = o.part, m = o.payload, S = this.levels;
                if (!S) {
                  this.warn("Levels were reset while fragment load was in progress. Fragment " + a.sn + " of level " + a.level + " will not be buffered");
                  return;
                }
                var P = S[a.level], b = P.details;
                if (!b) {
                  this.warn("Dropping fragment " + a.sn + " of level " + a.level + " after level details were reset");
                  return;
                }
                var C = P.videoCodec, B = b.PTSKnown || !b.live, F = (n = a.initSegment) === null || n === void 0 ? void 0 : n.data, U = this._getAudioCodec(P), w = this.transmuxer = this.transmuxer || new y.default(this.hls, L.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), k = E ? E.index : -1, W = k !== -1, K = new p.ChunkMetadata(a.level, a.sn, a.stats.chunkCount, m.byteLength, k, W), j = this.initPTS[a.cc];
                w.push(m, F, U, C, a, E, b.totalduration, B, K, j);
              }, h.onAudioTrackSwitching = function(o, n) {
                var a = this.altAudio, E = !!n.url, m = n.id;
                if (!E) {
                  if (this.mediaBuffer !== this.media) {
                    this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                    var S = this.fragCurrent;
                    S != null && S.loader && (this.log("Switching to main audio track, cancel main fragment load"), S.loader.abort()), this.resetTransmuxer(), this.resetLoadingState();
                  } else
                    this.audioOnly && this.resetTransmuxer();
                  var P = this.hls;
                  a && P.trigger(M.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), P.trigger(M.Events.AUDIO_TRACK_SWITCHED, { id: m });
                }
              }, h.onAudioTrackSwitched = function(o, n) {
                var a = n.id, E = !!this.hls.audioTracks[a].url;
                if (E) {
                  var m = this.videoBuffer;
                  m && this.mediaBuffer !== m && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = m);
                }
                this.altAudio = E, this.tick();
              }, h.onBufferCreated = function(o, n) {
                var a = n.tracks, E, m, S = false;
                for (var P in a) {
                  var b = a[P];
                  if (b.id === "main") {
                    if (m = P, E = b, P === "video") {
                      var C = a[P];
                      C && (this.videoBuffer = C.buffer);
                    }
                  } else
                    S = true;
                }
                S && E ? (this.log("Alternate track found, use " + m + ".buffered to schedule main fragment loading"), this.mediaBuffer = E.buffer) : this.mediaBuffer = this.media;
              }, h.onFragBuffered = function(o, n) {
                var a = n.frag, E = n.part;
                if (!(a && a.type !== L.PlaylistLevelType.MAIN)) {
                  if (this.fragContextChanged(a)) {
                    this.warn("Fragment " + a.sn + (E ? " p: " + E.index : "") + " of level " + a.level + " finished buffering, but was aborted. state: " + this.state), this.state === A.State.PARSED && (this.state = A.State.IDLE);
                    return;
                  }
                  var m = E ? E.stats : a.stats;
                  this.fragLastKbps = Math.round(8 * m.total / (m.buffering.end - m.loading.first)), a.sn !== "initSegment" && (this.fragPrevious = a), this.fragBufferedComplete(a, E);
                }
              }, h.onError = function(o, n) {
                switch (n.details) {
                  case T.ErrorDetails.FRAG_LOAD_ERROR:
                  case T.ErrorDetails.FRAG_LOAD_TIMEOUT:
                  case T.ErrorDetails.KEY_LOAD_ERROR:
                  case T.ErrorDetails.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(L.PlaylistLevelType.MAIN, n);
                    break;
                  case T.ErrorDetails.LEVEL_LOAD_ERROR:
                  case T.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                    this.state !== A.State.ERROR && (n.fatal ? (this.warn("" + n.details), this.state = A.State.ERROR) : !n.levelRetry && this.state === A.State.WAITING_LEVEL && (this.state = A.State.IDLE));
                    break;
                  case T.ErrorDetails.BUFFER_FULL_ERROR:
                    if (n.parent === "main" && (this.state === A.State.PARSING || this.state === A.State.PARSED)) {
                      var a = true, E = this.getFwdBufferInfo(this.media, L.PlaylistLevelType.MAIN);
                      E && E.len > 0.5 && (a = !this.reduceMaxBufferLength(E.len)), a && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState();
                    }
                    break;
                  default:
                    break;
                }
              }, h.checkBuffer = function() {
                var o = this.media, n = this.gapController;
                if (!(!o || !n || !o.readyState)) {
                  var a = O.BufferHelper.getBuffered(o);
                  !this.loadedmetadata && a.length ? (this.loadedmetadata = true, this.seekToStartPos()) : n.poll(this.lastCurrentTime), this.lastCurrentTime = o.currentTime;
                }
              }, h.onFragLoadEmergencyAborted = function() {
                this.state = A.State.IDLE, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
              }, h.onBufferFlushed = function(o, n) {
                var a = n.type;
                if (a !== u.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
                  var E = (a === u.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                  this.afterBufferFlushed(E, a, L.PlaylistLevelType.MAIN);
                }
              }, h.onLevelsUpdated = function(o, n) {
                this.levels = n.levels;
              }, h.swapAudioCodec = function() {
                this.audioCodecSwap = !this.audioCodecSwap;
              }, h.seekToStartPos = function() {
                var o = this.media, n = o.currentTime, a = this.startPosition;
                if (a >= 0 && n < a) {
                  if (o.seeking) {
                    x.logger.log("could not seek to " + a + ", already seeking at " + n);
                    return;
                  }
                  var E = O.BufferHelper.getBuffered(o), m = E.length ? E.start(0) : 0, S = m - a;
                  S > 0 && (S < this.config.maxBufferHole || S < this.config.maxFragLookUpTolerance) && (x.logger.log("adjusting start position by " + S + " to match buffer start"), a += S, this.startPosition = a), this.log("seek to target start position " + a + " from current time " + n), o.currentTime = a;
                }
              }, h._getAudioCodec = function(o) {
                var n = this.config.defaultAudioCodec || o.audioCodec;
                return this.audioCodecSwap && n && (this.log("Swapping audio codec"), n.indexOf("mp4a.40.5") !== -1 ? n = "mp4a.40.2" : n = "mp4a.40.5"), n;
              }, h._loadBitrateTestFrag = function(o) {
                var n = this;
                this._doFragLoad(o).then(function(a) {
                  var E = n.hls;
                  if (!(!a || E.nextLoadLevel || n.fragContextChanged(o))) {
                    n.fragLoadError = 0, n.state = A.State.IDLE, n.startFragRequested = false, n.bitrateTest = false;
                    var m = o.stats;
                    m.parsing.start = m.parsing.end = m.buffering.start = m.buffering.end = self.performance.now(), E.trigger(M.Events.FRAG_LOADED, a);
                  }
                });
              }, h._handleTransmuxComplete = function(o) {
                var n, a = "main", E = this.hls, m = o.remuxResult, S = o.chunkMeta, P = this.getCurrentContext(S);
                if (!P) {
                  this.warn("The loading context changed while buffering fragment " + S.sn + " of level " + S.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(S.level);
                  return;
                }
                var b = P.frag, C = P.part, B = P.level, F = m.video, U = m.text, w = m.id3, k = m.initSegment, W = this.altAudio ? void 0 : m.audio;
                if (!this.fragContextChanged(b)) {
                  if (this.state = A.State.PARSING, k) {
                    k.tracks && (this._bufferInitSegment(B, k.tracks, b, S), E.trigger(M.Events.FRAG_PARSING_INIT_SEGMENT, { frag: b, id: a, tracks: k.tracks }));
                    var K = k.initPTS, j = k.timescale;
                    Object(R.isFiniteNumber)(K) && (this.initPTS[b.cc] = K, E.trigger(M.Events.INIT_PTS_FOUND, { frag: b, id: a, initPTS: K, timescale: j }));
                  }
                  if (F && m.independent !== false) {
                    if (B.details) {
                      var G = F.startPTS, H = F.endPTS, J = F.startDTS, Q = F.endDTS;
                      if (C)
                        C.elementaryStreams[F.type] = { startPTS: G, endPTS: H, startDTS: J, endDTS: Q };
                      else if (F.firstKeyFrame && F.independent && (this.couldBacktrack = true), F.dropped && F.independent) {
                        var Z = this.getLoadPosition() + this.config.maxBufferHole;
                        if (Z < G) {
                          this.backtrack(b);
                          return;
                        }
                        b.setElementaryStreamInfo(F.type, b.start, H, b.start, Q, true);
                      }
                      b.setElementaryStreamInfo(F.type, G, H, J, Q), this.bufferFragmentData(F, b, C, S);
                    }
                  } else if (m.independent === false) {
                    this.backtrack(b);
                    return;
                  }
                  if (W) {
                    var $ = W.startPTS, q = W.endPTS, se = W.startDTS, X = W.endDTS;
                    C && (C.elementaryStreams[u.ElementaryStreamTypes.AUDIO] = { startPTS: $, endPTS: q, startDTS: se, endDTS: X }), b.setElementaryStreamInfo(u.ElementaryStreamTypes.AUDIO, $, q, se, X), this.bufferFragmentData(W, b, C, S);
                  }
                  if (w != null && (n = w.samples) !== null && n !== void 0 && n.length) {
                    var z = { frag: b, id: a, samples: w.samples };
                    E.trigger(M.Events.FRAG_PARSING_METADATA, z);
                  }
                  if (U) {
                    var V = { frag: b, id: a, samples: U.samples };
                    E.trigger(M.Events.FRAG_PARSING_USERDATA, V);
                  }
                }
              }, h._bufferInitSegment = function(o, n, a, E) {
                var m = this;
                if (this.state === A.State.PARSING) {
                  this.audioOnly = !!n.audio && !n.video, this.altAudio && !this.audioOnly && delete n.audio;
                  var S = n.audio, P = n.video, b = n.audiovideo;
                  if (S) {
                    var C = o.audioCodec, B = navigator.userAgent.toLowerCase();
                    this.audioCodecSwitch && (C && (C.indexOf("mp4a.40.5") !== -1 ? C = "mp4a.40.2" : C = "mp4a.40.5"), S.metadata.channelCount !== 1 && B.indexOf("firefox") === -1 && (C = "mp4a.40.5")), B.indexOf("android") !== -1 && S.container !== "audio/mpeg" && (C = "mp4a.40.2", this.log("Android: force audio codec to " + C)), o.audioCodec && o.audioCodec !== C && this.log('Swapping manifest audio codec "' + o.audioCodec + '" for "' + C + '"'), S.levelCodec = C, S.id = "main", this.log("Init audio buffer, container:" + S.container + ", codecs[selected/level/parsed]=[" + (C || "") + "/" + (o.audioCodec || "") + "/" + S.codec + "]");
                  }
                  P && (P.levelCodec = o.videoCodec, P.id = "main", this.log("Init video buffer, container:" + P.container + ", codecs[level/parsed]=[" + (o.videoCodec || "") + "/" + P.codec + "]")), b && this.log("Init audiovideo buffer, container:" + b.container + ", codecs[level/parsed]=[" + (o.attrs.CODECS || "") + "/" + b.codec + "]"), this.hls.trigger(M.Events.BUFFER_CODECS, n), Object.keys(n).forEach(function(F) {
                    var U = n[F], w = U.initSegment;
                    w != null && w.byteLength && m.hls.trigger(M.Events.BUFFER_APPENDING, { type: F, data: w, frag: a, part: null, chunkMeta: E, parent: a.type });
                  }), this.tick();
                }
              }, h.backtrack = function(o) {
                this.couldBacktrack = true, this.resetTransmuxer(), this.flushBufferGap(o);
                var n = this.fragmentTracker.backtrack(o);
                this.fragPrevious = null, this.nextLoadPosition = o.start, n ? this.resetFragmentLoading(o) : this.state = A.State.BACKTRACKING;
              }, h.checkFragmentChanged = function() {
                var o = this.media, n = null;
                if (o && o.readyState > 1 && o.seeking === false) {
                  var a = o.currentTime;
                  if (O.BufferHelper.isBuffered(o, a) ? n = this.getAppendedFrag(a) : O.BufferHelper.isBuffered(o, a + 0.1) && (n = this.getAppendedFrag(a + 0.1)), n) {
                    var E = this.fragPlaying, m = n.level;
                    (!E || n.sn !== E.sn || E.level !== m || n.urlId !== E.urlId) && (this.hls.trigger(M.Events.FRAG_CHANGED, { frag: n }), (!E || E.level !== m) && this.hls.trigger(M.Events.LEVEL_SWITCHED, { level: m }), this.fragPlaying = n);
                  }
                }
              }, e(v, [{ key: "nextLevel", get: function() {
                var o = this.nextBufferedFrag;
                return o ? o.level : -1;
              } }, { key: "currentLevel", get: function() {
                var o = this.media;
                if (o) {
                  var n = this.getAppendedFrag(o.currentTime);
                  if (n)
                    return n.level;
                }
                return -1;
              } }, { key: "nextBufferedFrag", get: function() {
                var o = this.media;
                if (o) {
                  var n = this.getAppendedFrag(o.currentTime);
                  return this.followingBufferedFrag(n);
                } else
                  return null;
              } }, { key: "forceStartLoad", get: function() {
                return this._forceStartLoad;
              } }]), v;
            }(A.default);
          }, "./src/controller/subtitle-stream-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "SubtitleStreamController", function() {
              return t;
            });
            var R = c("./src/events.ts"), A = c("./src/utils/logger.ts"), _ = c("./src/utils/buffer-helper.ts"), M = c("./src/controller/fragment-finders.ts"), O = c("./src/utils/discontinuities.ts"), D = c("./src/controller/level-helper.ts"), L = c("./src/controller/fragment-tracker.ts"), u = c("./src/controller/base-stream-controller.ts"), y = c("./src/types/loader.ts"), p = c("./src/types/level.ts");
            function g(i, d) {
              for (var s = 0; s < d.length; s++) {
                var f = d[s];
                f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(i, f.key, f);
              }
            }
            function T(i, d, s) {
              return d && g(i.prototype, d), s && g(i, s), i;
            }
            function x(i, d) {
              i.prototype = Object.create(d.prototype), i.prototype.constructor = i, r(i, d);
            }
            function r(i, d) {
              return r = Object.setPrototypeOf || function(f, v) {
                return f.__proto__ = v, f;
              }, r(i, d);
            }
            var e = 500, t = function(i) {
              x(d, i);
              function d(f, v) {
                var h;
                return h = i.call(this, f, v, "[subtitle-stream-controller]") || this, h.levels = [], h.currentTrackId = -1, h.tracksBuffered = [], h.mainDetails = null, h._registerListeners(), h;
              }
              var s = d.prototype;
              return s.onHandlerDestroying = function() {
                this._unregisterListeners(), this.mainDetails = null;
              }, s._registerListeners = function() {
                var v = this.hls;
                v.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), v.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), v.on(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), v.on(R.Events.LEVEL_LOADED, this.onLevelLoaded, this), v.on(R.Events.ERROR, this.onError, this), v.on(R.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), v.on(R.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), v.on(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), v.on(R.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), v.on(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }, s._unregisterListeners = function() {
                var v = this.hls;
                v.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), v.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), v.off(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), v.off(R.Events.LEVEL_LOADED, this.onLevelLoaded, this), v.off(R.Events.ERROR, this.onError, this), v.off(R.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), v.off(R.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), v.off(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), v.off(R.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), v.off(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }, s.startLoad = function() {
                this.stopLoad(), this.state = u.State.IDLE, this.setInterval(e), this.tick();
              }, s.onManifestLoading = function() {
                this.mainDetails = null, this.fragmentTracker.removeAllFragments();
              }, s.onLevelLoaded = function(v, h) {
                this.mainDetails = h.details;
              }, s.onSubtitleFragProcessed = function(v, h) {
                var l = h.frag, o = h.success;
                if (this.fragPrevious = l, this.state = u.State.IDLE, !!o) {
                  var n = this.tracksBuffered[this.currentTrackId];
                  if (!!n) {
                    for (var a, E = l.start, m = 0; m < n.length; m++)
                      if (E >= n[m].start && E <= n[m].end) {
                        a = n[m];
                        break;
                      }
                    var S = l.start + l.duration;
                    a ? a.end = S : (a = { start: E, end: S }, n.push(a)), this.fragmentTracker.fragBuffered(l);
                  }
                }
              }, s.onBufferFlushing = function(v, h) {
                var l = h.startOffset, o = h.endOffset;
                if (l === 0 && o !== Number.POSITIVE_INFINITY) {
                  var n = this.currentTrackId, a = this.levels;
                  if (!a.length || !a[n] || !a[n].details)
                    return;
                  var E = a[n].details, m = E.targetduration, S = o - m;
                  if (S <= 0)
                    return;
                  h.endOffsetSubtitles = Math.max(0, S), this.tracksBuffered.forEach(function(P) {
                    for (var b = 0; b < P.length; ) {
                      if (P[b].end <= S) {
                        P.shift();
                        continue;
                      } else if (P[b].start < S)
                        P[b].start = S;
                      else
                        break;
                      b++;
                    }
                  }), this.fragmentTracker.removeFragmentsInRange(l, S, y.PlaylistLevelType.SUBTITLE);
                }
              }, s.onError = function(v, h) {
                var l, o = h.frag;
                !o || o.type !== y.PlaylistLevelType.SUBTITLE || ((l = this.fragCurrent) !== null && l !== void 0 && l.loader && this.fragCurrent.loader.abort(), this.state = u.State.IDLE);
              }, s.onSubtitleTracksUpdated = function(v, h) {
                var l = this, o = h.subtitleTracks;
                this.tracksBuffered = [], this.levels = o.map(function(n) {
                  return new p.Level(n);
                }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach(function(n) {
                  l.tracksBuffered[n.id] = [];
                }), this.mediaBuffer = null;
              }, s.onSubtitleTrackSwitch = function(v, h) {
                if (this.currentTrackId = h.id, !this.levels.length || this.currentTrackId === -1) {
                  this.clearInterval();
                  return;
                }
                var l = this.levels[this.currentTrackId];
                l != null && l.details ? (this.mediaBuffer = this.mediaBufferTimeRanges, this.setInterval(e)) : this.mediaBuffer = null;
              }, s.onSubtitleTrackLoaded = function(v, h) {
                var l, o = h.details, n = h.id, a = this.currentTrackId, E = this.levels;
                if (!!E.length) {
                  var m = E[a];
                  if (!(n >= E.length || n !== a || !m)) {
                    if (this.mediaBuffer = this.mediaBufferTimeRanges, o.live || (l = m.details) !== null && l !== void 0 && l.live) {
                      var S = this.mainDetails;
                      if (o.deltaUpdateFailed || !S)
                        return;
                      var P = S.fragments[0];
                      if (!m.details)
                        o.hasProgramDateTime && S.hasProgramDateTime ? Object(O.alignMediaPlaylistByPDT)(o, S) : P && Object(D.addSliding)(o, P.start);
                      else {
                        var b = this.alignPlaylists(o, m.details);
                        b === 0 && P && Object(D.addSliding)(o, P.start);
                      }
                    }
                    if (m.details = o, this.levelLastLoaded = n, this.tick(), o.live && !this.fragCurrent && this.media && this.state === u.State.IDLE) {
                      var C = Object(M.findFragmentByPTS)(null, o.fragments, this.media.currentTime, 0);
                      C || (this.warn("Subtitle playlist not aligned with playback"), m.details = void 0);
                    }
                  }
                }
              }, s._handleFragmentLoadComplete = function(v) {
                var h = v.frag, l = v.payload, o = h.decryptdata, n = this.hls;
                if (!this.fragContextChanged(h) && l && l.byteLength > 0 && o && o.key && o.iv && o.method === "AES-128") {
                  var a = performance.now();
                  this.decrypter.webCryptoDecrypt(new Uint8Array(l), o.key.buffer, o.iv.buffer).then(function(E) {
                    var m = performance.now();
                    n.trigger(R.Events.FRAG_DECRYPTED, { frag: h, payload: E, stats: { tstart: a, tdecrypt: m } });
                  });
                }
              }, s.doTick = function() {
                if (!this.media) {
                  this.state = u.State.IDLE;
                  return;
                }
                if (this.state === u.State.IDLE) {
                  var v, h = this.currentTrackId, l = this.levels;
                  if (!l.length || !l[h] || !l[h].details)
                    return;
                  var o = l[h].details, n = o.targetduration, a = this.config, E = this.media, m = _.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, E.currentTime - n, a.maxBufferHole), S = m.end, P = m.len, b = this.getMaxBufferLength() + n;
                  if (P > b)
                    return;
                  console.assert(o, "Subtitle track details are defined on idle subtitle stream controller tick");
                  var C = o.fragments, B = C.length, F = o.edge, U, w = this.fragPrevious;
                  if (S < F) {
                    var k = a.maxFragLookUpTolerance;
                    w && o.hasProgramDateTime && (U = Object(M.findFragmentByPDT)(C, w.endProgramDateTime, k)), U || (U = Object(M.findFragmentByPTS)(w, C, S, k), !U && w && w.start < C[0].start && (U = C[0]));
                  } else
                    U = C[B - 1];
                  (v = U) !== null && v !== void 0 && v.encrypted ? (A.logger.log("Loading key for " + U.sn), this.state = u.State.KEY_LOADING, this.hls.trigger(R.Events.KEY_LOADING, { frag: U })) : U && this.fragmentTracker.getState(U) === L.FragmentState.NOT_LOADED && this.loadFragment(U, o, S);
                }
              }, s.loadFragment = function(v, h, l) {
                this.fragCurrent = v, i.prototype.loadFragment.call(this, v, h, l);
              }, T(d, [{ key: "mediaBufferTimeRanges", get: function() {
                return this.tracksBuffered[this.currentTrackId] || [];
              } }]), d;
            }(u.default);
          }, "./src/controller/subtitle-track-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/events.ts"), A = c("./src/utils/texttrack-utils.ts"), _ = c("./src/controller/base-playlist-controller.ts"), M = c("./src/types/loader.ts");
            function O(g, T) {
              for (var x = 0; x < T.length; x++) {
                var r = T[x];
                r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(g, r.key, r);
              }
            }
            function D(g, T, x) {
              return T && O(g.prototype, T), x && O(g, x), g;
            }
            function L(g, T) {
              g.prototype = Object.create(T.prototype), g.prototype.constructor = g, u(g, T);
            }
            function u(g, T) {
              return u = Object.setPrototypeOf || function(r, e) {
                return r.__proto__ = e, r;
              }, u(g, T);
            }
            var y = function(g) {
              L(T, g);
              function T(r) {
                var e;
                return e = g.call(this, r, "[subtitle-track-controller]") || this, e.media = null, e.tracks = [], e.groupId = null, e.tracksInGroup = [], e.trackId = -1, e.selectDefaultTrack = true, e.queuedDefaultTrack = -1, e.trackChangeListener = function() {
                  return e.onTextTracksChanged();
                }, e.asyncPollTrackChange = function() {
                  return e.pollTrackChange(0);
                }, e.useTextTrackPolling = false, e.subtitlePollingInterval = -1, e.subtitleDisplay = true, e.registerListeners(), e;
              }
              var x = T.prototype;
              return x.destroy = function() {
                this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, g.prototype.destroy.call(this);
              }, x.registerListeners = function() {
                var e = this.hls;
                e.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(R.Events.LEVEL_LOADING, this.onLevelLoading, this), e.on(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(R.Events.ERROR, this.onError, this);
              }, x.unregisterListeners = function() {
                var e = this.hls;
                e.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(R.Events.LEVEL_LOADING, this.onLevelLoading, this), e.off(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(R.Events.ERROR, this.onError, this);
              }, x.onMediaAttached = function(e, t) {
                this.media = t.media, !!this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
              }, x.pollTrackChange = function(e) {
                self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, e);
              }, x.onMediaDetaching = function() {
                if (!!this.media) {
                  self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId);
                  var e = p(this.media.textTracks);
                  e.forEach(function(t) {
                    Object(A.clearCurrentCues)(t);
                  }), this.subtitleTrack = -1, this.media = null;
                }
              }, x.onManifestLoading = function() {
                this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = true;
              }, x.onManifestParsed = function(e, t) {
                this.tracks = t.subtitleTracks;
              }, x.onSubtitleTrackLoaded = function(e, t) {
                var i = t.id, d = t.details, s = this.trackId, f = this.tracksInGroup[s];
                if (!f) {
                  this.warn("Invalid subtitle track id " + i);
                  return;
                }
                var v = f.details;
                f.details = t.details, this.log("subtitle track " + i + " loaded [" + d.startSN + "-" + d.endSN + "]"), i === this.trackId && (this.retryCount = 0, this.playlistLoaded(i, t, v));
              }, x.onLevelLoading = function(e, t) {
                this.switchLevel(t.level);
              }, x.onLevelSwitching = function(e, t) {
                this.switchLevel(t.level);
              }, x.switchLevel = function(e) {
                var t = this.hls.levels[e];
                if (!!(t != null && t.textGroupIds)) {
                  var i = t.textGroupIds[t.urlId];
                  if (this.groupId !== i) {
                    var d = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, s = this.tracks.filter(function(h) {
                      return !i || h.groupId === i;
                    });
                    this.tracksInGroup = s;
                    var f = this.findTrackId(d == null ? void 0 : d.name) || this.findTrackId();
                    this.groupId = i;
                    var v = { subtitleTracks: s };
                    this.log("Updating subtitle tracks, " + s.length + ' track(s) found in "' + i + '" group-id'), this.hls.trigger(R.Events.SUBTITLE_TRACKS_UPDATED, v), f !== -1 && this.setSubtitleTrack(f, d);
                  }
                }
              }, x.findTrackId = function(e) {
                for (var t = this.tracksInGroup, i = 0; i < t.length; i++) {
                  var d = t[i];
                  if ((!this.selectDefaultTrack || d.default) && (!e || e === d.name))
                    return d.id;
                }
                return -1;
              }, x.onError = function(e, t) {
                g.prototype.onError.call(this, e, t), !(t.fatal || !t.context) && t.context.type === M.PlaylistContextType.SUBTITLE_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t);
              }, x.loadPlaylist = function(e) {
                var t = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(t)) {
                  var i = t.id, d = t.groupId, s = t.url;
                  if (e)
                    try {
                      s = e.addDirectives(s);
                    } catch (f) {
                      this.warn("Could not construct new URL with HLS Delivery Directives: " + f);
                    }
                  this.log("Loading subtitle playlist for id " + i), this.hls.trigger(R.Events.SUBTITLE_TRACK_LOADING, { url: s, id: i, groupId: d, deliveryDirectives: e || null });
                }
              }, x.toggleTrackModes = function(e) {
                var t = this, i = this.media, d = this.subtitleDisplay, s = this.trackId;
                if (!!i) {
                  var f = p(i.textTracks), v = f.filter(function(o) {
                    return o.groupId === t.groupId;
                  });
                  if (e === -1)
                    [].slice.call(f).forEach(function(o) {
                      o.mode = "disabled";
                    });
                  else {
                    var h = v[s];
                    h && (h.mode = "disabled");
                  }
                  var l = v[e];
                  l && (l.mode = d ? "showing" : "hidden");
                }
              }, x.setSubtitleTrack = function(e, t) {
                var i, d = this.tracksInGroup;
                if (!this.media) {
                  this.queuedDefaultTrack = e;
                  return;
                }
                if (this.trackId !== e && this.toggleTrackModes(e), !(this.trackId === e && (e === -1 || (i = d[e]) !== null && i !== void 0 && i.details) || e < -1 || e >= d.length)) {
                  this.clearTimer();
                  var s = d[e];
                  if (this.log("Switching to subtitle track " + e), this.trackId = e, s) {
                    var f = s.id, v = s.groupId, h = v === void 0 ? "" : v, l = s.name, o = s.type, n = s.url;
                    this.hls.trigger(R.Events.SUBTITLE_TRACK_SWITCH, { id: f, groupId: h, name: l, type: o, url: n });
                    var a = this.switchParams(s.url, t == null ? void 0 : t.details);
                    this.loadPlaylist(a);
                  } else
                    this.hls.trigger(R.Events.SUBTITLE_TRACK_SWITCH, { id: e });
                }
              }, x.onTextTracksChanged = function() {
                if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !(!this.media || !this.hls.config.renderTextTracksNatively)) {
                  for (var e = -1, t = p(this.media.textTracks), i = 0; i < t.length; i++)
                    if (t[i].mode === "hidden")
                      e = i;
                    else if (t[i].mode === "showing") {
                      e = i;
                      break;
                    }
                  this.subtitleTrack !== e && (this.subtitleTrack = e);
                }
              }, D(T, [{ key: "subtitleTracks", get: function() {
                return this.tracksInGroup;
              } }, { key: "subtitleTrack", get: function() {
                return this.trackId;
              }, set: function(e) {
                this.selectDefaultTrack = false;
                var t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                this.setSubtitleTrack(e, t);
              } }]), T;
            }(_.default);
            function p(g) {
              for (var T = [], x = 0; x < g.length; x++) {
                var r = g[x];
                r.kind === "subtitles" && r.label && T.push(g[x]);
              }
              return T;
            }
            I.default = y;
          }, "./src/controller/timeline-controller.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "TimelineController", function() {
              return p;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/events.ts"), _ = c("./src/utils/cea-608-parser.ts"), M = c("./src/utils/output-filter.ts"), O = c("./src/utils/webvtt-parser.ts"), D = c("./src/utils/texttrack-utils.ts"), L = c("./src/utils/imsc1-ttml-parser.ts"), u = c("./src/types/loader.ts"), y = c("./src/utils/logger.ts"), p = function() {
              function r(t) {
                if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.prevCC = -1, this.vttCCs = x(), this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, this.config.enableCEA708Captions) {
                  var i = new M.default(this, "textTrack1"), d = new M.default(this, "textTrack2"), s = new M.default(this, "textTrack3"), f = new M.default(this, "textTrack4");
                  this.cea608Parser1 = new _.default(1, i, d), this.cea608Parser2 = new _.default(3, s, f);
                }
                t.on(A.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(A.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(A.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(A.Events.FRAG_LOADING, this.onFragLoading, this), t.on(A.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(A.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(A.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(A.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(A.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(A.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }
              var e = r.prototype;
              return e.destroy = function() {
                var i = this.hls;
                i.off(A.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), i.off(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), i.off(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), i.off(A.Events.MANIFEST_LOADED, this.onManifestLoaded, this), i.off(A.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), i.off(A.Events.FRAG_LOADING, this.onFragLoading, this), i.off(A.Events.FRAG_LOADED, this.onFragLoaded, this), i.off(A.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), i.off(A.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), i.off(A.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), i.off(A.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), i.off(A.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
              }, e.addCues = function(i, d, s, f, v) {
                for (var h = false, l = v.length; l--; ) {
                  var o = v[l], n = T(o[0], o[1], d, s);
                  if (n >= 0 && (o[0] = Math.min(o[0], d), o[1] = Math.max(o[1], s), h = true, n / (s - d) > 0.5))
                    return;
                }
                if (h || v.push([d, s]), this.config.renderTextTracksNatively) {
                  var a = this.captionsTracks[i];
                  this.Cues.newCue(a, d, s, f);
                } else {
                  var E = this.Cues.newCue(null, d, s, f);
                  this.hls.trigger(A.Events.CUES_PARSED, { type: "captions", cues: E, track: i });
                }
              }, e.onInitPtsFound = function(i, d) {
                var s = this, f = d.frag, v = d.id, h = d.initPTS, l = d.timescale, o = this.unparsedVttFrags;
                v === "main" && (this.initPTS[f.cc] = h, this.timescale[f.cc] = l), o.length && (this.unparsedVttFrags = [], o.forEach(function(n) {
                  s.onFragLoaded(A.Events.FRAG_LOADED, n);
                }));
              }, e.getExistingTrack = function(i) {
                var d = this.media;
                if (d)
                  for (var s = 0; s < d.textTracks.length; s++) {
                    var f = d.textTracks[s];
                    if (f[i])
                      return f;
                  }
                return null;
              }, e.createCaptionsTrack = function(i) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(i) : this.createNonNativeTrack(i);
              }, e.createNativeTrack = function(i) {
                if (!this.captionsTracks[i]) {
                  var d = this.captionsProperties, s = this.captionsTracks, f = this.media, v = d[i], h = v.label, l = v.languageCode, o = this.getExistingTrack(i);
                  if (o)
                    s[i] = o, Object(D.clearCurrentCues)(s[i]), Object(D.sendAddTrackEvent)(s[i], f);
                  else {
                    var n = this.createTextTrack("captions", h, l);
                    n && (n[i] = true, s[i] = n);
                  }
                }
              }, e.createNonNativeTrack = function(i) {
                if (!this.nonNativeCaptionsTracks[i]) {
                  var d = this.captionsProperties[i];
                  if (!!d) {
                    var s = d.label, f = { _id: i, label: s, kind: "captions", default: d.media ? !!d.media.default : false, closedCaptions: d.media };
                    this.nonNativeCaptionsTracks[i] = f, this.hls.trigger(A.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [f] });
                  }
                }
              }, e.createTextTrack = function(i, d, s) {
                var f = this.media;
                if (!!f)
                  return f.addTextTrack(i, d, s);
              }, e.onMediaAttaching = function(i, d) {
                this.media = d.media, this._cleanTracks();
              }, e.onMediaDetaching = function() {
                var i = this.captionsTracks;
                Object.keys(i).forEach(function(d) {
                  Object(D.clearCurrentCues)(i[d]), delete i[d];
                }), this.nonNativeCaptionsTracks = {};
              }, e.onManifestLoading = function() {
                this.lastSn = -1, this.prevCC = -1, this.vttCCs = x(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
              }, e._cleanTracks = function() {
                var i = this.media;
                if (!!i) {
                  var d = i.textTracks;
                  if (d)
                    for (var s = 0; s < d.length; s++)
                      Object(D.clearCurrentCues)(d[s]);
                }
              }, e.onSubtitleTracksUpdated = function(i, d) {
                var s = this;
                this.textTracks = [];
                var f = d.subtitleTracks || [], v = f.some(function(n) {
                  return n.textCodec === L.IMSC1_CODEC;
                });
                if (this.config.enableWebVTT || v && this.config.enableIMSC1) {
                  var h = this.tracks && f && this.tracks.length === f.length;
                  if (this.tracks = f || [], this.config.renderTextTracksNatively) {
                    var l = this.media ? this.media.textTracks : [];
                    this.tracks.forEach(function(n, a) {
                      var E;
                      if (a < l.length) {
                        for (var m = null, S = 0; S < l.length; S++)
                          if (g(l[S], n)) {
                            m = l[S];
                            break;
                          }
                        m && (E = m);
                      }
                      E ? Object(D.clearCurrentCues)(E) : (E = s.createTextTrack("subtitles", n.name, n.lang), E && (E.mode = "disabled")), E && (E.groupId = n.groupId, s.textTracks.push(E));
                    });
                  } else if (!h && this.tracks && this.tracks.length) {
                    var o = this.tracks.map(function(n) {
                      return { label: n.name, kind: n.type.toLowerCase(), default: n.default, subtitleTrack: n };
                    });
                    this.hls.trigger(A.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: o });
                  }
                }
              }, e.onManifestLoaded = function(i, d) {
                var s = this;
                this.config.enableCEA708Captions && d.captions && d.captions.forEach(function(f) {
                  var v = /(?:CC|SERVICE)([1-4])/.exec(f.instreamId);
                  if (!!v) {
                    var h = "textTrack" + v[1], l = s.captionsProperties[h];
                    !l || (l.label = f.name, f.lang && (l.languageCode = f.lang), l.media = f);
                  }
                });
              }, e.onFragLoading = function(i, d) {
                var s = this.cea608Parser1, f = this.cea608Parser2, v = this.lastSn;
                if (!(!this.enabled || !(s && f)) && d.frag.type === u.PlaylistLevelType.MAIN) {
                  var h = d.frag.sn;
                  h !== v + 1 && (s.reset(), f.reset()), this.lastSn = h;
                }
              }, e.onFragLoaded = function(i, d) {
                var s = d.frag, f = d.payload, v = this.initPTS, h = this.unparsedVttFrags;
                if (s.type === u.PlaylistLevelType.SUBTITLE)
                  if (f.byteLength) {
                    if (!Object(R.isFiniteNumber)(v[s.cc])) {
                      h.push(d), v.length && this.hls.trigger(A.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: s, error: new Error("Missing initial subtitle PTS") });
                      return;
                    }
                    var l = s.decryptdata;
                    if (l == null || l.key == null || l.method !== "AES-128") {
                      var o = this.tracks[s.level], n = this.vttCCs;
                      n[s.cc] || (n[s.cc] = { start: s.start, prevCC: this.prevCC, new: true }, this.prevCC = s.cc), o && o.textCodec === L.IMSC1_CODEC ? this._parseIMSC1(s, f) : this._parseVTTs(s, f, n);
                    }
                  } else
                    this.hls.trigger(A.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: s, error: new Error("Empty subtitle payload") });
              }, e._parseIMSC1 = function(i, d) {
                var s = this, f = this.hls;
                Object(L.parseIMSC1)(d, this.initPTS[i.cc], this.timescale[i.cc], function(v) {
                  s._appendCues(v, i.level), f.trigger(A.Events.SUBTITLE_FRAG_PROCESSED, { success: true, frag: i });
                }, function(v) {
                  y.logger.log("Failed to parse IMSC1: " + v), f.trigger(A.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: i, error: v });
                });
              }, e._parseVTTs = function(i, d, s) {
                var f = this, v = this.hls;
                Object(O.parseWebVTT)(d, this.initPTS[i.cc], this.timescale[i.cc], s, i.cc, i.start, function(h) {
                  f._appendCues(h, i.level), v.trigger(A.Events.SUBTITLE_FRAG_PROCESSED, { success: true, frag: i });
                }, function(h) {
                  f._fallbackToIMSC1(i, d), y.logger.log("Failed to parse VTT cue: " + h), v.trigger(A.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: i, error: h });
                });
              }, e._fallbackToIMSC1 = function(i, d) {
                var s = this, f = this.tracks[i.level];
                f.textCodec || Object(L.parseIMSC1)(d, this.initPTS[i.cc], this.timescale[i.cc], function() {
                  f.textCodec = L.IMSC1_CODEC, s._parseIMSC1(i, d);
                }, function() {
                  f.textCodec = "wvtt";
                });
              }, e._appendCues = function(i, d) {
                var s = this.hls;
                if (this.config.renderTextTracksNatively) {
                  var f = this.textTracks[d];
                  if (f.mode === "disabled")
                    return;
                  i.forEach(function(l) {
                    return Object(D.addCueToTrack)(f, l);
                  });
                } else {
                  var v = this.tracks[d], h = v.default ? "default" : "subtitles" + d;
                  s.trigger(A.Events.CUES_PARSED, { type: "subtitles", cues: i, track: h });
                }
              }, e.onFragDecrypted = function(i, d) {
                var s = d.frag;
                if (s.type === u.PlaylistLevelType.SUBTITLE) {
                  if (!Object(R.isFiniteNumber)(this.initPTS[s.cc])) {
                    this.unparsedVttFrags.push(d);
                    return;
                  }
                  this.onFragLoaded(A.Events.FRAG_LOADED, d);
                }
              }, e.onSubtitleTracksCleared = function() {
                this.tracks = [], this.captionsTracks = {};
              }, e.onFragParsingUserdata = function(i, d) {
                var s = this.cea608Parser1, f = this.cea608Parser2;
                if (!(!this.enabled || !(s && f)))
                  for (var v = 0; v < d.samples.length; v++) {
                    var h = d.samples[v].bytes;
                    if (h) {
                      var l = this.extractCea608Data(h);
                      s.addData(d.samples[v].pts, l[0]), f.addData(d.samples[v].pts, l[1]);
                    }
                  }
              }, e.onBufferFlushing = function(i, d) {
                var s = d.startOffset, f = d.endOffset, v = d.endOffsetSubtitles, h = d.type, l = this.media;
                if (!(!l || l.currentTime < f)) {
                  if (!h || h === "video") {
                    var o = this.captionsTracks;
                    Object.keys(o).forEach(function(a) {
                      return Object(D.removeCuesInRange)(o[a], s, f);
                    });
                  }
                  if (this.config.renderTextTracksNatively && s === 0 && v !== void 0) {
                    var n = this.textTracks;
                    Object.keys(n).forEach(function(a) {
                      return Object(D.removeCuesInRange)(n[a], s, v);
                    });
                  }
                }
              }, e.extractCea608Data = function(i) {
                for (var d = i[0] & 31, s = 2, f = [[], []], v = 0; v < d; v++) {
                  var h = i[s++], l = 127 & i[s++], o = 127 & i[s++], n = (4 & h) != 0, a = 3 & h;
                  l === 0 && o === 0 || n && (a === 0 || a === 1) && (f[a].push(l), f[a].push(o));
                }
                return f;
              }, r;
            }();
            function g(r, e) {
              return r && r.label === e.name && !(r.textTrack1 || r.textTrack2);
            }
            function T(r, e, t, i) {
              return Math.min(e, i) - Math.max(r, t);
            }
            function x() {
              return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: false } };
            }
          }, "./src/crypt/aes-crypto.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return R;
            });
            var R = function() {
              function A(M, O) {
                this.subtle = void 0, this.aesIV = void 0, this.subtle = M, this.aesIV = O;
              }
              var _ = A.prototype;
              return _.decrypt = function(O, D) {
                return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, D, O);
              }, A;
            }();
          }, "./src/crypt/aes-decryptor.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "removePadding", function() {
              return A;
            }), c.d(I, "default", function() {
              return _;
            });
            var R = c("./src/utils/typed-array.ts");
            function A(M) {
              var O = M.byteLength, D = O && new DataView(M.buffer).getUint8(O - 1);
              return D ? Object(R.sliceUint8)(M, 0, O - D) : M;
            }
            var _ = function() {
              function M() {
                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
              }
              var O = M.prototype;
              return O.uint8ArrayToUint32Array_ = function(L) {
                for (var u = new DataView(L), y = new Uint32Array(4), p = 0; p < 4; p++)
                  y[p] = u.getUint32(p * 4);
                return y;
              }, O.initTable = function() {
                var L = this.sBox, u = this.invSBox, y = this.subMix, p = y[0], g = y[1], T = y[2], x = y[3], r = this.invSubMix, e = r[0], t = r[1], i = r[2], d = r[3], s = new Uint32Array(256), f = 0, v = 0, h = 0;
                for (h = 0; h < 256; h++)
                  h < 128 ? s[h] = h << 1 : s[h] = h << 1 ^ 283;
                for (h = 0; h < 256; h++) {
                  var l = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
                  l = l >>> 8 ^ l & 255 ^ 99, L[f] = l, u[l] = f;
                  var o = s[f], n = s[o], a = s[n], E = s[l] * 257 ^ l * 16843008;
                  p[f] = E << 24 | E >>> 8, g[f] = E << 16 | E >>> 16, T[f] = E << 8 | E >>> 24, x[f] = E, E = a * 16843009 ^ n * 65537 ^ o * 257 ^ f * 16843008, e[l] = E << 24 | E >>> 8, t[l] = E << 16 | E >>> 16, i[l] = E << 8 | E >>> 24, d[l] = E, f ? (f = o ^ s[s[s[a ^ o]]], v ^= s[s[v]]) : f = v = 1;
                }
              }, O.expandKey = function(L) {
                for (var u = this.uint8ArrayToUint32Array_(L), y = true, p = 0; p < u.length && y; )
                  y = u[p] === this.key[p], p++;
                if (!y) {
                  this.key = u;
                  var g = this.keySize = u.length;
                  if (g !== 4 && g !== 6 && g !== 8)
                    throw new Error("Invalid aes key size=" + g);
                  var T = this.ksRows = (g + 6 + 1) * 4, x, r, e = this.keySchedule = new Uint32Array(T), t = this.invKeySchedule = new Uint32Array(T), i = this.sBox, d = this.rcon, s = this.invSubMix, f = s[0], v = s[1], h = s[2], l = s[3], o, n;
                  for (x = 0; x < T; x++) {
                    if (x < g) {
                      o = e[x] = u[x];
                      continue;
                    }
                    n = o, x % g == 0 ? (n = n << 8 | n >>> 24, n = i[n >>> 24] << 24 | i[n >>> 16 & 255] << 16 | i[n >>> 8 & 255] << 8 | i[n & 255], n ^= d[x / g | 0] << 24) : g > 6 && x % g == 4 && (n = i[n >>> 24] << 24 | i[n >>> 16 & 255] << 16 | i[n >>> 8 & 255] << 8 | i[n & 255]), e[x] = o = (e[x - g] ^ n) >>> 0;
                  }
                  for (r = 0; r < T; r++)
                    x = T - r, r & 3 ? n = e[x] : n = e[x - 4], r < 4 || x <= 4 ? t[r] = n : t[r] = f[i[n >>> 24]] ^ v[i[n >>> 16 & 255]] ^ h[i[n >>> 8 & 255]] ^ l[i[n & 255]], t[r] = t[r] >>> 0;
                }
              }, O.networkToHostOrderSwap = function(L) {
                return L << 24 | (L & 65280) << 8 | (L & 16711680) >> 8 | L >>> 24;
              }, O.decrypt = function(L, u, y) {
                for (var p = this.keySize + 6, g = this.invKeySchedule, T = this.invSBox, x = this.invSubMix, r = x[0], e = x[1], t = x[2], i = x[3], d = this.uint8ArrayToUint32Array_(y), s = d[0], f = d[1], v = d[2], h = d[3], l = new Int32Array(L), o = new Int32Array(l.length), n, a, E, m, S, P, b, C, B, F, U, w, k, W, K = this.networkToHostOrderSwap; u < l.length; ) {
                  for (B = K(l[u]), F = K(l[u + 1]), U = K(l[u + 2]), w = K(l[u + 3]), S = B ^ g[0], P = w ^ g[1], b = U ^ g[2], C = F ^ g[3], k = 4, W = 1; W < p; W++)
                    n = r[S >>> 24] ^ e[P >> 16 & 255] ^ t[b >> 8 & 255] ^ i[C & 255] ^ g[k], a = r[P >>> 24] ^ e[b >> 16 & 255] ^ t[C >> 8 & 255] ^ i[S & 255] ^ g[k + 1], E = r[b >>> 24] ^ e[C >> 16 & 255] ^ t[S >> 8 & 255] ^ i[P & 255] ^ g[k + 2], m = r[C >>> 24] ^ e[S >> 16 & 255] ^ t[P >> 8 & 255] ^ i[b & 255] ^ g[k + 3], S = n, P = a, b = E, C = m, k = k + 4;
                  n = T[S >>> 24] << 24 ^ T[P >> 16 & 255] << 16 ^ T[b >> 8 & 255] << 8 ^ T[C & 255] ^ g[k], a = T[P >>> 24] << 24 ^ T[b >> 16 & 255] << 16 ^ T[C >> 8 & 255] << 8 ^ T[S & 255] ^ g[k + 1], E = T[b >>> 24] << 24 ^ T[C >> 16 & 255] << 16 ^ T[S >> 8 & 255] << 8 ^ T[P & 255] ^ g[k + 2], m = T[C >>> 24] << 24 ^ T[S >> 16 & 255] << 16 ^ T[P >> 8 & 255] << 8 ^ T[b & 255] ^ g[k + 3], o[u] = K(n ^ s), o[u + 1] = K(m ^ f), o[u + 2] = K(E ^ v), o[u + 3] = K(a ^ h), s = B, f = F, v = U, h = w, u = u + 4;
                }
                return o.buffer;
              }, M;
            }();
          }, "./src/crypt/decrypter.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return u;
            });
            var R = c("./src/crypt/aes-crypto.ts"), A = c("./src/crypt/fast-aes-key.ts"), _ = c("./src/crypt/aes-decryptor.ts"), M = c("./src/utils/logger.ts"), O = c("./src/utils/mp4-tools.ts"), D = c("./src/utils/typed-array.ts"), L = 16, u = function() {
              function y(g, T, x) {
                var r = x === void 0 ? {} : x, e = r.removePKCS7Padding, t = e === void 0 ? true : e;
                if (this.logEnabled = true, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = g, this.config = T, this.removePKCS7Padding = t, t)
                  try {
                    var i = self.crypto;
                    i && (this.subtle = i.subtle || i.webkitSubtle);
                  } catch {
                  }
                this.subtle === null && (this.config.enableSoftwareAES = true);
              }
              var p = y.prototype;
              return p.destroy = function() {
                this.observer = null;
              }, p.isSync = function() {
                return this.config.enableSoftwareAES;
              }, p.flush = function() {
                var T = this.currentResult;
                if (!T) {
                  this.reset();
                  return;
                }
                var x = new Uint8Array(T);
                return this.reset(), this.removePKCS7Padding ? Object(_.removePadding)(x) : x;
              }, p.reset = function() {
                this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
              }, p.decrypt = function(T, x, r, e) {
                if (this.config.enableSoftwareAES) {
                  this.softwareDecrypt(new Uint8Array(T), x, r);
                  var t = this.flush();
                  t && e(t.buffer);
                } else
                  this.webCryptoDecrypt(new Uint8Array(T), x, r).then(e);
              }, p.softwareDecrypt = function(T, x, r) {
                var e = this.currentIV, t = this.currentResult, i = this.remainderData;
                this.logOnce("JS AES decrypt"), i && (T = Object(O.appendUint8Array)(i, T), this.remainderData = null);
                var d = this.getValidChunk(T);
                if (!d.length)
                  return null;
                e && (r = e);
                var s = this.softwareDecrypter;
                s || (s = this.softwareDecrypter = new _.default()), s.expandKey(x);
                var f = t;
                return this.currentResult = s.decrypt(d.buffer, 0, r), this.currentIV = Object(D.sliceUint8)(d, -16).buffer, f || null;
              }, p.webCryptoDecrypt = function(T, x, r) {
                var e = this, t = this.subtle;
                return (this.key !== x || !this.fastAesKey) && (this.key = x, this.fastAesKey = new A.default(t, x)), this.fastAesKey.expandKey().then(function(i) {
                  if (!t)
                    return Promise.reject(new Error("web crypto not initialized"));
                  var d = new R.default(t, r);
                  return d.decrypt(T.buffer, i);
                }).catch(function(i) {
                  return e.onWebCryptoError(i, T, x, r);
                });
              }, p.onWebCryptoError = function(T, x, r, e) {
                return M.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", T), this.config.enableSoftwareAES = true, this.logEnabled = true, this.softwareDecrypt(x, r, e);
              }, p.getValidChunk = function(T) {
                var x = T, r = T.length - T.length % L;
                return r !== T.length && (x = Object(D.sliceUint8)(T, 0, r), this.remainderData = Object(D.sliceUint8)(T, r)), x;
              }, p.logOnce = function(T) {
                !this.logEnabled || (M.logger.log("[decrypter.ts]: " + T), this.logEnabled = false);
              }, y;
            }();
          }, "./src/crypt/fast-aes-key.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return R;
            });
            var R = function() {
              function A(M, O) {
                this.subtle = void 0, this.key = void 0, this.subtle = M, this.key = O;
              }
              var _ = A.prototype;
              return _.expandKey = function() {
                return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
              }, A;
            }();
          }, "./src/demux/aacdemuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/demux/base-audio-demuxer.ts"), A = c("./src/demux/adts.ts"), _ = c("./src/utils/logger.ts"), M = c("./src/demux/id3.ts");
            function O(u, y) {
              u.prototype = Object.create(y.prototype), u.prototype.constructor = u, D(u, y);
            }
            function D(u, y) {
              return D = Object.setPrototypeOf || function(g, T) {
                return g.__proto__ = T, g;
              }, D(u, y);
            }
            var L = function(u) {
              O(y, u);
              function y(g, T) {
                var x;
                return x = u.call(this) || this, x.observer = void 0, x.config = void 0, x.observer = g, x.config = T, x;
              }
              var p = y.prototype;
              return p.resetInitSegment = function(T, x, r) {
                u.prototype.resetInitSegment.call(this, T, x, r), this._audioTrack = { container: "audio/adts", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: true, samples: [], manifestCodec: T, duration: r, inputTimeScale: 9e4, dropped: 0 };
              }, y.probe = function(T) {
                if (!T)
                  return false;
                for (var x = M.getID3Data(T, 0) || [], r = x.length, e = T.length; r < e; r++)
                  if (A.probe(T, r))
                    return _.logger.log("ADTS sync word found !"), true;
                return false;
              }, p.canParse = function(T, x) {
                return A.canParse(T, x);
              }, p.appendFrame = function(T, x, r) {
                A.initTrackConfig(T, this.observer, x, r, T.manifestCodec);
                var e = A.appendFrame(T, x, r, this.initPTS, this.frameIndex);
                if (e && e.missing === 0)
                  return e;
              }, y;
            }(R.default);
            L.minProbeByteLength = 9, I.default = L;
          }, "./src/demux/adts.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "getAudioConfig", function() {
              return M;
            }), c.d(I, "isHeaderPattern", function() {
              return O;
            }), c.d(I, "getHeaderLength", function() {
              return D;
            }), c.d(I, "getFullFrameLength", function() {
              return L;
            }), c.d(I, "canGetFrameLength", function() {
              return u;
            }), c.d(I, "isHeader", function() {
              return y;
            }), c.d(I, "canParse", function() {
              return p;
            }), c.d(I, "probe", function() {
              return g;
            }), c.d(I, "initTrackConfig", function() {
              return T;
            }), c.d(I, "getFrameDuration", function() {
              return x;
            }), c.d(I, "parseFrameHeader", function() {
              return r;
            }), c.d(I, "appendFrame", function() {
              return e;
            });
            var R = c("./src/utils/logger.ts"), A = c("./src/errors.ts"), _ = c("./src/events.ts");
            function M(t, i, d, s) {
              var f, v, h, l, o = navigator.userAgent.toLowerCase(), n = s, a = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
              f = ((i[d + 2] & 192) >>> 6) + 1;
              var E = (i[d + 2] & 60) >>> 2;
              if (E > a.length - 1) {
                t.trigger(_.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: "invalid ADTS sampling index:" + E });
                return;
              }
              return h = (i[d + 2] & 1) << 2, h |= (i[d + 3] & 192) >>> 6, R.logger.log("manifest codec:" + s + ", ADTS type:" + f + ", samplingIndex:" + E), /firefox/i.test(o) ? E >= 6 ? (f = 5, l = new Array(4), v = E - 3) : (f = 2, l = new Array(2), v = E) : o.indexOf("android") !== -1 ? (f = 2, l = new Array(2), v = E) : (f = 5, l = new Array(4), s && (s.indexOf("mp4a.40.29") !== -1 || s.indexOf("mp4a.40.5") !== -1) || !s && E >= 6 ? v = E - 3 : ((s && s.indexOf("mp4a.40.2") !== -1 && (E >= 6 && h === 1 || /vivaldi/i.test(o)) || !s && h === 1) && (f = 2, l = new Array(2)), v = E)), l[0] = f << 3, l[0] |= (E & 14) >> 1, l[1] |= (E & 1) << 7, l[1] |= h << 3, f === 5 && (l[1] |= (v & 14) >> 1, l[2] = (v & 1) << 7, l[2] |= 2 << 2, l[3] = 0), { config: l, samplerate: a[E], channelCount: h, codec: "mp4a.40." + f, manifestCodec: n };
            }
            function O(t, i) {
              return t[i] === 255 && (t[i + 1] & 246) == 240;
            }
            function D(t, i) {
              return t[i + 1] & 1 ? 7 : 9;
            }
            function L(t, i) {
              return (t[i + 3] & 3) << 11 | t[i + 4] << 3 | (t[i + 5] & 224) >>> 5;
            }
            function u(t, i) {
              return i + 5 < t.length;
            }
            function y(t, i) {
              return i + 1 < t.length && O(t, i);
            }
            function p(t, i) {
              return u(t, i) && O(t, i) && L(t, i) <= t.length - i;
            }
            function g(t, i) {
              if (y(t, i)) {
                var d = D(t, i);
                if (i + d >= t.length)
                  return false;
                var s = L(t, i);
                if (s <= d)
                  return false;
                var f = i + s;
                return f === t.length || y(t, f);
              }
              return false;
            }
            function T(t, i, d, s, f) {
              if (!t.samplerate) {
                var v = M(i, d, s, f);
                if (!v)
                  return;
                t.config = v.config, t.samplerate = v.samplerate, t.channelCount = v.channelCount, t.codec = v.codec, t.manifestCodec = v.manifestCodec, R.logger.log("parsed codec:" + t.codec + ", rate:" + v.samplerate + ", channels:" + v.channelCount);
              }
            }
            function x(t) {
              return 1024 * 9e4 / t;
            }
            function r(t, i, d, s, f) {
              var v = D(t, i), h = L(t, i);
              if (h -= v, h > 0) {
                var l = d + s * f;
                return { headerLength: v, frameLength: h, stamp: l };
              }
            }
            function e(t, i, d, s, f) {
              var v = x(t.samplerate), h = r(i, d, s, f, v);
              if (h) {
                var l = h.frameLength, o = h.headerLength, n = h.stamp, a = o + l, E = Math.max(0, d + a - i.length), m;
                E ? (m = new Uint8Array(a - o), m.set(i.subarray(d + o, i.length), 0)) : m = i.subarray(d + o, d + a);
                var S = { unit: m, pts: n };
                return E || t.samples.push(S), { sample: S, length: a, missing: E };
              }
            }
          }, "./src/demux/base-audio-demuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "initPTSFn", function() {
              return L;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/demux/id3.ts"), _ = c("./src/demux/dummy-demuxed-track.ts"), M = c("./src/utils/mp4-tools.ts"), O = c("./src/utils/typed-array.ts"), D = function() {
              function u() {
                this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null;
              }
              var y = u.prototype;
              return y.resetInitSegment = function(g, T, x) {
                this._id3Track = { type: "id3", id: 0, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
              }, y.resetTimeStamp = function() {
              }, y.resetContiguity = function() {
              }, y.canParse = function(g, T) {
                return false;
              }, y.appendFrame = function(g, T, x) {
              }, y.demux = function(g, T) {
                this.cachedData && (g = Object(M.appendUint8Array)(this.cachedData, g), this.cachedData = null);
                var x = A.getID3Data(g, 0), r = x ? x.length : 0, e, t, i = this._audioTrack, d = this._id3Track, s = x ? A.getTimeStamp(x) : void 0, f = g.length;
                for ((this.frameIndex === 0 || this.initPTS === null) && (this.initPTS = L(s, T)), x && x.length > 0 && d.samples.push({ pts: this.initPTS, dts: this.initPTS, data: x }), t = this.initPTS; r < f; ) {
                  if (this.canParse(g, r)) {
                    var v = this.appendFrame(i, g, r);
                    v ? (this.frameIndex++, t = v.sample.pts, r += v.length, e = r) : r = f;
                  } else
                    A.canParse(g, r) ? (x = A.getID3Data(g, r), d.samples.push({ pts: t, dts: t, data: x }), r += x.length, e = r) : r++;
                  if (r === f && e !== f) {
                    var h = Object(O.sliceUint8)(g, e);
                    this.cachedData ? this.cachedData = Object(M.appendUint8Array)(this.cachedData, h) : this.cachedData = h;
                  }
                }
                return { audioTrack: i, avcTrack: Object(_.dummyTrack)(), id3Track: d, textTrack: Object(_.dummyTrack)() };
              }, y.demuxSampleAes = function(g, T, x) {
                return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
              }, y.flush = function(g) {
                var T = this.cachedData;
                return T && (this.cachedData = null, this.demux(T, 0)), this.frameIndex = 0, { audioTrack: this._audioTrack, avcTrack: Object(_.dummyTrack)(), id3Track: this._id3Track, textTrack: Object(_.dummyTrack)() };
              }, y.destroy = function() {
              }, u;
            }(), L = function(y, p) {
              return Object(R.isFiniteNumber)(y) ? y * 90 : p * 9e4;
            };
            I.default = D;
          }, "./src/demux/chunk-cache.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return R;
            });
            var R = function() {
              function _() {
                this.chunks = [], this.dataLength = 0;
              }
              var M = _.prototype;
              return M.push = function(D) {
                this.chunks.push(D), this.dataLength += D.length;
              }, M.flush = function() {
                var D = this.chunks, L = this.dataLength, u;
                if (D.length)
                  D.length === 1 ? u = D[0] : u = A(D, L);
                else
                  return new Uint8Array(0);
                return this.reset(), u;
              }, M.reset = function() {
                this.chunks.length = 0, this.dataLength = 0;
              }, _;
            }();
            function A(_, M) {
              for (var O = new Uint8Array(M), D = 0, L = 0; L < _.length; L++) {
                var u = _[L];
                O.set(u, D), D += u.length;
              }
              return O;
            }
          }, "./src/demux/dummy-demuxed-track.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "dummyTrack", function() {
              return R;
            });
            function R() {
              return { type: "", id: -1, pid: -1, inputTimeScale: 9e4, sequenceNumber: -1, samples: [], dropped: 0 };
            }
          }, "./src/demux/exp-golomb.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/utils/logger.ts"), A = function() {
              function _(O) {
                this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = O, this.bytesAvailable = O.byteLength, this.word = 0, this.bitsAvailable = 0;
              }
              var M = _.prototype;
              return M.loadWord = function() {
                var D = this.data, L = this.bytesAvailable, u = D.byteLength - L, y = new Uint8Array(4), p = Math.min(4, L);
                if (p === 0)
                  throw new Error("no bytes available");
                y.set(D.subarray(u, u + p)), this.word = new DataView(y.buffer).getUint32(0), this.bitsAvailable = p * 8, this.bytesAvailable -= p;
              }, M.skipBits = function(D) {
                var L;
                this.bitsAvailable > D ? (this.word <<= D, this.bitsAvailable -= D) : (D -= this.bitsAvailable, L = D >> 3, D -= L >> 3, this.bytesAvailable -= L, this.loadWord(), this.word <<= D, this.bitsAvailable -= D);
              }, M.readBits = function(D) {
                var L = Math.min(this.bitsAvailable, D), u = this.word >>> 32 - L;
                return D > 32 && R.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= L, this.bitsAvailable > 0 ? this.word <<= L : this.bytesAvailable > 0 && this.loadWord(), L = D - L, L > 0 && this.bitsAvailable ? u << L | this.readBits(L) : u;
              }, M.skipLZ = function() {
                var D;
                for (D = 0; D < this.bitsAvailable; ++D)
                  if ((this.word & 2147483648 >>> D) != 0)
                    return this.word <<= D, this.bitsAvailable -= D, D;
                return this.loadWord(), D + this.skipLZ();
              }, M.skipUEG = function() {
                this.skipBits(1 + this.skipLZ());
              }, M.skipEG = function() {
                this.skipBits(1 + this.skipLZ());
              }, M.readUEG = function() {
                var D = this.skipLZ();
                return this.readBits(D + 1) - 1;
              }, M.readEG = function() {
                var D = this.readUEG();
                return 1 & D ? 1 + D >>> 1 : -1 * (D >>> 1);
              }, M.readBoolean = function() {
                return this.readBits(1) === 1;
              }, M.readUByte = function() {
                return this.readBits(8);
              }, M.readUShort = function() {
                return this.readBits(16);
              }, M.readUInt = function() {
                return this.readBits(32);
              }, M.skipScalingList = function(D) {
                for (var L = 8, u = 8, y, p = 0; p < D; p++)
                  u !== 0 && (y = this.readEG(), u = (L + y + 256) % 256), L = u === 0 ? L : u;
              }, M.readSPS = function() {
                var D = 0, L = 0, u = 0, y = 0, p, g, T, x = this.readUByte.bind(this), r = this.readBits.bind(this), e = this.readUEG.bind(this), t = this.readBoolean.bind(this), i = this.skipBits.bind(this), d = this.skipEG.bind(this), s = this.skipUEG.bind(this), f = this.skipScalingList.bind(this);
                x();
                var v = x();
                if (r(5), i(3), x(), s(), v === 100 || v === 110 || v === 122 || v === 244 || v === 44 || v === 83 || v === 86 || v === 118 || v === 128) {
                  var h = e();
                  if (h === 3 && i(1), s(), s(), i(1), t())
                    for (g = h !== 3 ? 8 : 12, T = 0; T < g; T++)
                      t() && (T < 6 ? f(16) : f(64));
                }
                s();
                var l = e();
                if (l === 0)
                  e();
                else if (l === 1)
                  for (i(1), d(), d(), p = e(), T = 0; T < p; T++)
                    d();
                s(), i(1);
                var o = e(), n = e(), a = r(1);
                a === 0 && i(1), i(1), t() && (D = e(), L = e(), u = e(), y = e());
                var E = [1, 1];
                if (t() && t()) {
                  var m = x();
                  switch (m) {
                    case 1:
                      E = [1, 1];
                      break;
                    case 2:
                      E = [12, 11];
                      break;
                    case 3:
                      E = [10, 11];
                      break;
                    case 4:
                      E = [16, 11];
                      break;
                    case 5:
                      E = [40, 33];
                      break;
                    case 6:
                      E = [24, 11];
                      break;
                    case 7:
                      E = [20, 11];
                      break;
                    case 8:
                      E = [32, 11];
                      break;
                    case 9:
                      E = [80, 33];
                      break;
                    case 10:
                      E = [18, 11];
                      break;
                    case 11:
                      E = [15, 11];
                      break;
                    case 12:
                      E = [64, 33];
                      break;
                    case 13:
                      E = [160, 99];
                      break;
                    case 14:
                      E = [4, 3];
                      break;
                    case 15:
                      E = [3, 2];
                      break;
                    case 16:
                      E = [2, 1];
                      break;
                    case 255: {
                      E = [x() << 8 | x(), x() << 8 | x()];
                      break;
                    }
                  }
                }
                return { width: Math.ceil((o + 1) * 16 - D * 2 - L * 2), height: (2 - a) * (n + 1) * 16 - (a ? 2 : 4) * (u + y), pixelRatio: E };
              }, M.readSliceType = function() {
                return this.readUByte(), this.readUEG(), this.readUEG();
              }, _;
            }();
            I.default = A;
          }, "./src/demux/id3.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "isHeader", function() {
              return R;
            }), c.d(I, "isFooter", function() {
              return A;
            }), c.d(I, "getID3Data", function() {
              return _;
            }), c.d(I, "canParse", function() {
              return O;
            }), c.d(I, "getTimeStamp", function() {
              return D;
            }), c.d(I, "isTimeStampFrame", function() {
              return L;
            }), c.d(I, "getID3Frames", function() {
              return y;
            }), c.d(I, "decodeFrame", function() {
              return p;
            }), c.d(I, "utf8ArrayToStr", function() {
              return e;
            }), c.d(I, "testables", function() {
              return t;
            });
            var R = function(f, v) {
              return v + 10 <= f.length && f[v] === 73 && f[v + 1] === 68 && f[v + 2] === 51 && f[v + 3] < 255 && f[v + 4] < 255 && f[v + 6] < 128 && f[v + 7] < 128 && f[v + 8] < 128 && f[v + 9] < 128;
            }, A = function(f, v) {
              return v + 10 <= f.length && f[v] === 51 && f[v + 1] === 68 && f[v + 2] === 73 && f[v + 3] < 255 && f[v + 4] < 255 && f[v + 6] < 128 && f[v + 7] < 128 && f[v + 8] < 128 && f[v + 9] < 128;
            }, _ = function(f, v) {
              for (var h = v, l = 0; R(f, v); ) {
                l += 10;
                var o = M(f, v + 6);
                l += o, A(f, v + 10) && (l += 10), v += l;
              }
              if (l > 0)
                return f.subarray(h, h + l);
            }, M = function(f, v) {
              var h = 0;
              return h = (f[v] & 127) << 21, h |= (f[v + 1] & 127) << 14, h |= (f[v + 2] & 127) << 7, h |= f[v + 3] & 127, h;
            }, O = function(f, v) {
              return R(f, v) && M(f, v + 6) + 10 <= f.length - v;
            }, D = function(f) {
              for (var v = y(f), h = 0; h < v.length; h++) {
                var l = v[h];
                if (L(l))
                  return r(l);
              }
            }, L = function(f) {
              return f && f.key === "PRIV" && f.info === "com.apple.streaming.transportStreamTimestamp";
            }, u = function(f) {
              var v = String.fromCharCode(f[0], f[1], f[2], f[3]), h = M(f, 4), l = 10;
              return { type: v, size: h, data: f.subarray(l, l + h) };
            }, y = function(f) {
              for (var v = 0, h = []; R(f, v); ) {
                var l = M(f, v + 6);
                v += 10;
                for (var o = v + l; v + 8 < o; ) {
                  var n = u(f.subarray(v)), a = p(n);
                  a && h.push(a), v += n.size + 10;
                }
                A(f, v) && (v += 10);
              }
              return h;
            }, p = function(f) {
              return f.type === "PRIV" ? g(f) : f.type[0] === "W" ? x(f) : T(f);
            }, g = function(f) {
              if (!(f.size < 2)) {
                var v = e(f.data, true), h = new Uint8Array(f.data.subarray(v.length + 1));
                return { key: f.type, info: v, data: h.buffer };
              }
            }, T = function(f) {
              if (!(f.size < 2)) {
                if (f.type === "TXXX") {
                  var v = 1, h = e(f.data.subarray(v), true);
                  v += h.length + 1;
                  var l = e(f.data.subarray(v));
                  return { key: f.type, info: h, data: l };
                }
                var o = e(f.data.subarray(1));
                return { key: f.type, data: o };
              }
            }, x = function(f) {
              if (f.type === "WXXX") {
                if (f.size < 2)
                  return;
                var v = 1, h = e(f.data.subarray(v), true);
                v += h.length + 1;
                var l = e(f.data.subarray(v));
                return { key: f.type, info: h, data: l };
              }
              var o = e(f.data);
              return { key: f.type, data: o };
            }, r = function(f) {
              if (f.data.byteLength === 8) {
                var v = new Uint8Array(f.data), h = v[3] & 1, l = (v[4] << 23) + (v[5] << 15) + (v[6] << 7) + v[7];
                return l /= 45, h && (l += 4772185884e-2), Math.round(l);
              }
            }, e = function(f, v) {
              v === void 0 && (v = false);
              var h = d();
              if (h) {
                var l = h.decode(f);
                if (v) {
                  var o = l.indexOf("\0");
                  return o !== -1 ? l.substring(0, o) : l;
                }
                return l.replace(/\0/g, "");
              }
              for (var n = f.length, a, E, m, S = "", P = 0; P < n; ) {
                if (a = f[P++], a === 0 && v)
                  return S;
                if (a === 0 || a === 3)
                  continue;
                switch (a >> 4) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                    S += String.fromCharCode(a);
                    break;
                  case 12:
                  case 13:
                    E = f[P++], S += String.fromCharCode((a & 31) << 6 | E & 63);
                    break;
                  case 14:
                    E = f[P++], m = f[P++], S += String.fromCharCode((a & 15) << 12 | (E & 63) << 6 | (m & 63) << 0);
                    break;
                  default:
                }
              }
              return S;
            }, t = { decodeTextFrame: T }, i;
            function d() {
              return !i && typeof self.TextDecoder != "undefined" && (i = new self.TextDecoder("utf-8")), i;
            }
          }, "./src/demux/mp3demuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/demux/base-audio-demuxer.ts"), A = c("./src/demux/id3.ts"), _ = c("./src/utils/logger.ts"), M = c("./src/demux/mpegaudio.ts");
            function O(u, y) {
              u.prototype = Object.create(y.prototype), u.prototype.constructor = u, D(u, y);
            }
            function D(u, y) {
              return D = Object.setPrototypeOf || function(g, T) {
                return g.__proto__ = T, g;
              }, D(u, y);
            }
            var L = function(u) {
              O(y, u);
              function y() {
                return u.apply(this, arguments) || this;
              }
              var p = y.prototype;
              return p.resetInitSegment = function(T, x, r) {
                u.prototype.resetInitSegment.call(this, T, x, r), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: false, samples: [], manifestCodec: T, duration: r, inputTimeScale: 9e4, dropped: 0 };
              }, y.probe = function(T) {
                if (!T)
                  return false;
                for (var x = A.getID3Data(T, 0) || [], r = x.length, e = T.length; r < e; r++)
                  if (M.probe(T, r))
                    return _.logger.log("MPEG Audio sync word found !"), true;
                return false;
              }, p.canParse = function(T, x) {
                return M.canParse(T, x);
              }, p.appendFrame = function(T, x, r) {
                if (this.initPTS !== null)
                  return M.appendFrame(T, x, r, this.initPTS, this.frameIndex);
              }, y;
            }(R.default);
            L.minProbeByteLength = 4, I.default = L;
          }, "./src/demux/mp4demuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/utils/mp4-tools.ts"), A = c("./src/demux/dummy-demuxed-track.ts"), _ = function() {
              function M(D, L) {
                this.remainderData = null, this.config = void 0, this.config = L;
              }
              var O = M.prototype;
              return O.resetTimeStamp = function() {
              }, O.resetInitSegment = function() {
              }, O.resetContiguity = function() {
              }, M.probe = function(L) {
                return Object(R.findBox)({ data: L, start: 0, end: Math.min(L.length, 16384) }, ["moof"]).length > 0;
              }, O.demux = function(L) {
                var u = L, y = Object(A.dummyTrack)();
                if (this.config.progressive) {
                  this.remainderData && (u = Object(R.appendUint8Array)(this.remainderData, L));
                  var p = Object(R.segmentValidRange)(u);
                  this.remainderData = p.remainder, y.samples = p.valid || new Uint8Array();
                } else
                  y.samples = u;
                return { audioTrack: Object(A.dummyTrack)(), avcTrack: y, id3Track: Object(A.dummyTrack)(), textTrack: Object(A.dummyTrack)() };
              }, O.flush = function() {
                var L = Object(A.dummyTrack)();
                return L.samples = this.remainderData || new Uint8Array(), this.remainderData = null, { audioTrack: Object(A.dummyTrack)(), avcTrack: L, id3Track: Object(A.dummyTrack)(), textTrack: Object(A.dummyTrack)() };
              }, O.demuxSampleAes = function(L, u, y) {
                return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
              }, O.destroy = function() {
              }, M;
            }();
            _.minProbeByteLength = 1024, I.default = _;
          }, "./src/demux/mpegaudio.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "appendFrame", function() {
              return D;
            }), c.d(I, "parseHeader", function() {
              return L;
            }), c.d(I, "isHeaderPattern", function() {
              return u;
            }), c.d(I, "isHeader", function() {
              return y;
            }), c.d(I, "canParse", function() {
              return p;
            }), c.d(I, "probe", function() {
              return g;
            });
            var R = null, A = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], _ = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], M = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], O = [0, 1, 1, 4];
            function D(T, x, r, e, t) {
              if (!(r + 24 > x.length)) {
                var i = L(x, r);
                if (i && r + i.frameLength <= x.length) {
                  var d = i.samplesPerFrame * 9e4 / i.sampleRate, s = e + t * d, f = { unit: x.subarray(r, r + i.frameLength), pts: s, dts: s };
                  return T.config = [], T.channelCount = i.channelCount, T.samplerate = i.sampleRate, T.samples.push(f), { sample: f, length: i.frameLength, missing: 0 };
                }
              }
            }
            function L(T, x) {
              var r = T[x + 1] >> 3 & 3, e = T[x + 1] >> 1 & 3, t = T[x + 2] >> 4 & 15, i = T[x + 2] >> 2 & 3;
              if (r !== 1 && t !== 0 && t !== 15 && i !== 3) {
                var d = T[x + 2] >> 1 & 1, s = T[x + 3] >> 6, f = r === 3 ? 3 - e : e === 3 ? 3 : 4, v = A[f * 14 + t - 1] * 1e3, h = r === 3 ? 0 : r === 2 ? 1 : 2, l = _[h * 3 + i], o = s === 3 ? 1 : 2, n = M[r][e], a = O[e], E = n * 8 * a, m = Math.floor(n * v / l + d) * a;
                if (R === null) {
                  var S = navigator.userAgent || "", P = S.match(/Chrome\/(\d+)/i);
                  R = P ? parseInt(P[1]) : 0;
                }
                var b = !!R && R <= 87;
                return b && e === 2 && v >= 224e3 && s === 0 && (T[x + 3] = T[x + 3] | 128), { sampleRate: l, channelCount: o, frameLength: m, samplesPerFrame: E };
              }
            }
            function u(T, x) {
              return T[x] === 255 && (T[x + 1] & 224) == 224 && (T[x + 1] & 6) != 0;
            }
            function y(T, x) {
              return x + 1 < T.length && u(T, x);
            }
            function p(T, x) {
              var r = 4;
              return u(T, x) && r <= T.length - x;
            }
            function g(T, x) {
              if (x + 1 < T.length && u(T, x)) {
                var r = 4, e = L(T, x), t = r;
                e != null && e.frameLength && (t = e.frameLength);
                var i = x + t;
                return i === T.length || y(T, i);
              }
              return false;
            }
          }, "./src/demux/sample-aes.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/crypt/decrypter.ts"), A = c("./src/demux/tsdemuxer.ts"), _ = function() {
              function M(D, L, u) {
                this.keyData = void 0, this.decrypter = void 0, this.keyData = u, this.decrypter = new R.default(D, L, { removePKCS7Padding: false });
              }
              var O = M.prototype;
              return O.decryptBuffer = function(L, u) {
                this.decrypter.decrypt(L, this.keyData.key.buffer, this.keyData.iv.buffer, u);
              }, O.decryptAacSample = function(L, u, y, p) {
                var g = L[u].unit, T = g.subarray(16, g.length - g.length % 16), x = T.buffer.slice(T.byteOffset, T.byteOffset + T.length), r = this;
                this.decryptBuffer(x, function(e) {
                  var t = new Uint8Array(e);
                  g.set(t, 16), p || r.decryptAacSamples(L, u + 1, y);
                });
              }, O.decryptAacSamples = function(L, u, y) {
                for (; ; u++) {
                  if (u >= L.length) {
                    y();
                    return;
                  }
                  if (!(L[u].unit.length < 32)) {
                    var p = this.decrypter.isSync();
                    if (this.decryptAacSample(L, u, y, p), !p)
                      return;
                  }
                }
              }, O.getAvcEncryptedData = function(L) {
                for (var u = Math.floor((L.length - 48) / 160) * 16 + 16, y = new Int8Array(u), p = 0, g = 32; g <= L.length - 16; g += 160, p += 16)
                  y.set(L.subarray(g, g + 16), p);
                return y;
              }, O.getAvcDecryptedUnit = function(L, u) {
                for (var y = new Uint8Array(u), p = 0, g = 32; g <= L.length - 16; g += 160, p += 16)
                  L.set(y.subarray(p, p + 16), g);
                return L;
              }, O.decryptAvcSample = function(L, u, y, p, g, T) {
                var x = Object(A.discardEPB)(g.data), r = this.getAvcEncryptedData(x), e = this;
                this.decryptBuffer(r.buffer, function(t) {
                  g.data = e.getAvcDecryptedUnit(x, t), T || e.decryptAvcSamples(L, u, y + 1, p);
                });
              }, O.decryptAvcSamples = function(L, u, y, p) {
                if (L instanceof Uint8Array)
                  throw new Error("Cannot decrypt samples of type Uint8Array");
                for (; ; u++, y = 0) {
                  if (u >= L.length) {
                    p();
                    return;
                  }
                  for (var g = L[u].units; !(y >= g.length); y++) {
                    var T = g[y];
                    if (!(T.data.length <= 48 || T.type !== 1 && T.type !== 5)) {
                      var x = this.decrypter.isSync();
                      if (this.decryptAvcSample(L, u, y, p, T, x), !x)
                        return;
                    }
                  }
                }
              }, M;
            }();
            I.default = _;
          }, "./src/demux/transmuxer-interface.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return g;
            });
            var R = c("./node_modules/webworkify-webpack/index.js"), A = c.n(R), _ = c("./src/events.ts"), M = c("./src/demux/transmuxer.ts"), O = c("./src/utils/logger.ts"), D = c("./src/errors.ts"), L = c("./src/utils/mediasource-helper.ts"), u = c("./node_modules/eventemitter3/index.js"), y = c.n(u), p = Object(L.getMediaSource)() || { isTypeSupported: function() {
              return false;
            } }, g = function() {
              function T(r, e, t, i) {
                var d = this;
                this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = r, this.id = e, this.onTransmuxComplete = t, this.onFlush = i;
                var s = r.config, f = function(n, a) {
                  a = a || {}, a.frag = d.frag, a.id = d.id, r.trigger(n, a);
                };
                this.observer = new u.EventEmitter(), this.observer.on(_.Events.FRAG_DECRYPTED, f), this.observer.on(_.Events.ERROR, f);
                var v = { mp4: p.isTypeSupported("video/mp4"), mpeg: p.isTypeSupported("audio/mpeg"), mp3: p.isTypeSupported('audio/mp4; codecs="mp3"') }, h = navigator.vendor;
                if (s.enableWorker && typeof Worker != "undefined") {
                  O.logger.log("demuxing in webworker");
                  var l;
                  try {
                    l = this.worker = R("./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), l.addEventListener("message", this.onwmsg), l.onerror = function(o) {
                      r.trigger(_.Events.ERROR, { type: D.ErrorTypes.OTHER_ERROR, details: D.ErrorDetails.INTERNAL_EXCEPTION, fatal: true, event: "demuxerWorker", error: new Error(o.message + "  (" + o.filename + ":" + o.lineno + ")") });
                    }, l.postMessage({ cmd: "init", typeSupported: v, vendor: h, id: e, config: JSON.stringify(s) });
                  } catch (o) {
                    O.logger.warn("Error in worker:", o), O.logger.error("Error while initializing DemuxerWorker, fallback to inline"), l && self.URL.revokeObjectURL(l.objectURL), this.transmuxer = new M.default(this.observer, v, s, h, e), this.worker = null;
                  }
                } else
                  this.transmuxer = new M.default(this.observer, v, s, h, e);
              }
              var x = T.prototype;
              return x.destroy = function() {
                var e = this.worker;
                if (e)
                  e.removeEventListener("message", this.onwmsg), e.terminate(), this.worker = null;
                else {
                  var t = this.transmuxer;
                  t && (t.destroy(), this.transmuxer = null);
                }
                var i = this.observer;
                i && i.removeAllListeners(), this.observer = null;
              }, x.push = function(e, t, i, d, s, f, v, h, l, o) {
                var n = this;
                l.transmuxing.start = self.performance.now();
                var a = this.transmuxer, E = this.worker, m = f ? f.start : s.start, S = s.decryptdata, P = this.frag, b = !(P && s.cc === P.cc), C = !(P && l.level === P.level), B = P ? l.sn - P.sn : -1, F = this.part ? l.part - this.part.index : 1, U = !C && (B === 1 || B === 0 && F === 1), w = self.performance.now();
                (C || B || s.stats.parsing.start === 0) && (s.stats.parsing.start = w), f && (F || !U) && (f.stats.parsing.start = w);
                var k = new M.TransmuxState(b, U, h, C, m);
                if (!U || b) {
                  O.logger.log("[transmuxer-interface, " + s.type + "]: Starting new transmux session for sn: " + l.sn + " p: " + l.part + " level: " + l.level + " id: " + l.id + `
        discontinuity: ` + b + `
        trackSwitch: ` + C + `
        contiguous: ` + U + `
        accurateTimeOffset: ` + h + `
        timeOffset: ` + m);
                  var W = new M.TransmuxConfig(i, d, t, v, o);
                  this.configureTransmuxer(W);
                }
                if (this.frag = s, this.part = f, E)
                  E.postMessage({ cmd: "demux", data: e, decryptdata: S, chunkMeta: l, state: k }, e instanceof ArrayBuffer ? [e] : []);
                else if (a) {
                  var K = a.push(e, S, l, k);
                  Object(M.isPromise)(K) ? K.then(function(j) {
                    n.handleTransmuxComplete(j);
                  }) : this.handleTransmuxComplete(K);
                }
              }, x.flush = function(e) {
                var t = this;
                e.transmuxing.start = self.performance.now();
                var i = this.transmuxer, d = this.worker;
                if (d)
                  d.postMessage({ cmd: "flush", chunkMeta: e });
                else if (i) {
                  var s = i.flush(e);
                  Object(M.isPromise)(s) ? s.then(function(f) {
                    t.handleFlushResult(f, e);
                  }) : this.handleFlushResult(s, e);
                }
              }, x.handleFlushResult = function(e, t) {
                var i = this;
                e.forEach(function(d) {
                  i.handleTransmuxComplete(d);
                }), this.onFlush(t);
              }, x.onWorkerMessage = function(e) {
                var t = e.data, i = this.hls;
                switch (t.event) {
                  case "init": {
                    self.URL.revokeObjectURL(this.worker.objectURL);
                    break;
                  }
                  case "transmuxComplete": {
                    this.handleTransmuxComplete(t.data);
                    break;
                  }
                  case "flush": {
                    this.onFlush(t.data);
                    break;
                  }
                  default: {
                    t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, i.trigger(t.event, t.data);
                    break;
                  }
                }
              }, x.configureTransmuxer = function(e) {
                var t = this.worker, i = this.transmuxer;
                t ? t.postMessage({ cmd: "configure", config: e }) : i && i.configure(e);
              }, x.handleTransmuxComplete = function(e) {
                e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
              }, T;
            }();
          }, "./src/demux/transmuxer-worker.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return D;
            });
            var R = c("./src/demux/transmuxer.ts"), A = c("./src/events.ts"), _ = c("./src/utils/logger.ts"), M = c("./node_modules/eventemitter3/index.js"), O = c.n(M);
            function D(g) {
              var T = new M.EventEmitter(), x = function(e, t) {
                g.postMessage({ event: e, data: t });
              };
              T.on(A.Events.FRAG_DECRYPTED, x), T.on(A.Events.ERROR, x), g.addEventListener("message", function(r) {
                var e = r.data;
                switch (e.cmd) {
                  case "init": {
                    var t = JSON.parse(e.config);
                    g.transmuxer = new R.default(T, e.typeSupported, t, e.vendor, e.id), Object(_.enableLogs)(t.debug), x("init", null);
                    break;
                  }
                  case "configure": {
                    g.transmuxer.configure(e.config);
                    break;
                  }
                  case "demux": {
                    var i = g.transmuxer.push(e.data, e.decryptdata, e.chunkMeta, e.state);
                    Object(R.isPromise)(i) ? i.then(function(f) {
                      L(g, f);
                    }) : L(g, i);
                    break;
                  }
                  case "flush": {
                    var d = e.chunkMeta, s = g.transmuxer.flush(d);
                    Object(R.isPromise)(s) ? s.then(function(f) {
                      y(g, f, d);
                    }) : y(g, s, d);
                    break;
                  }
                  default:
                    break;
                }
              });
            }
            function L(g, T) {
              if (!p(T.remuxResult)) {
                var x = [], r = T.remuxResult, e = r.audio, t = r.video;
                e && u(x, e), t && u(x, t), g.postMessage({ event: "transmuxComplete", data: T }, x);
              }
            }
            function u(g, T) {
              T.data1 && g.push(T.data1.buffer), T.data2 && g.push(T.data2.buffer);
            }
            function y(g, T, x) {
              T.forEach(function(r) {
                L(g, r);
              }), g.postMessage({ event: "flush", data: x });
            }
            function p(g) {
              return !g.audio && !g.video && !g.text && !g.id3 && !g.initSegment;
            }
          }, "./src/demux/transmuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return t;
            }), c.d(I, "isPromise", function() {
              return s;
            }), c.d(I, "TransmuxConfig", function() {
              return f;
            }), c.d(I, "TransmuxState", function() {
              return v;
            });
            var R = c("./src/events.ts"), A = c("./src/errors.ts"), _ = c("./src/crypt/decrypter.ts"), M = c("./src/demux/aacdemuxer.ts"), O = c("./src/demux/mp4demuxer.ts"), D = c("./src/demux/tsdemuxer.ts"), L = c("./src/demux/mp3demuxer.ts"), u = c("./src/remux/mp4-remuxer.ts"), y = c("./src/remux/passthrough-remuxer.ts"), p = c("./src/demux/chunk-cache.ts"), g = c("./src/utils/mp4-tools.ts"), T = c("./src/utils/logger.ts"), x;
            try {
              x = self.performance.now.bind(self.performance);
            } catch {
              T.logger.debug("Unable to use Performance API on this environment"), x = self.Date.now;
            }
            var r = [{ demux: D.default, remux: u.default }, { demux: O.default, remux: y.default }, { demux: M.default, remux: u.default }, { demux: L.default, remux: u.default }], e = 1024;
            r.forEach(function(h) {
              var l = h.demux;
              e = Math.max(e, l.minProbeByteLength);
            });
            var t = function() {
              function h(o, n, a, E, m) {
                this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new p.default(), this.observer = o, this.typeSupported = n, this.config = a, this.vendor = E, this.id = m;
              }
              var l = h.prototype;
              return l.configure = function(n) {
                this.transmuxConfig = n, this.decrypter && this.decrypter.reset();
              }, l.push = function(n, a, E, m) {
                var S = this, P = E.transmuxing;
                P.executeStart = x();
                var b = new Uint8Array(n), C = this.cache, B = this.config, F = this.currentTransmuxState, U = this.transmuxConfig;
                m && (this.currentTransmuxState = m);
                var w = i(b, a);
                if (w && w.method === "AES-128") {
                  var k = this.getDecrypter();
                  if (B.enableSoftwareAES) {
                    var W = k.softwareDecrypt(b, w.key.buffer, w.iv.buffer);
                    if (!W)
                      return P.executeEnd = x(), d(E);
                    b = new Uint8Array(W);
                  } else
                    return this.decryptionPromise = k.webCryptoDecrypt(b, w.key.buffer, w.iv.buffer).then(function(te) {
                      var ae = S.push(te, null, E);
                      return S.decryptionPromise = null, ae;
                    }), this.decryptionPromise;
                }
                var K = m || F, j = K.contiguous, G = K.discontinuity, H = K.trackSwitch, J = K.accurateTimeOffset, Q = K.timeOffset, Z = U.audioCodec, $ = U.videoCodec, q = U.defaultInitPts, se = U.duration, X = U.initSegmentData;
                if ((G || H) && this.resetInitSegment(X, Z, $, se), G && this.resetInitialTimestamp(q), j || this.resetContiguity(), this.needsProbing(b, G, H)) {
                  if (C.dataLength) {
                    var z = C.flush();
                    b = Object(g.appendUint8Array)(z, b);
                  }
                  this.configureTransmuxer(b, U);
                }
                var V = this.transmux(b, w, Q, J, E), Y = this.currentTransmuxState;
                return Y.contiguous = true, Y.discontinuity = false, Y.trackSwitch = false, P.executeEnd = x(), V;
              }, l.flush = function(n) {
                var a = this, E = n.transmuxing;
                E.executeStart = x();
                var m = this.decrypter, S = this.cache, P = this.currentTransmuxState, b = this.decryptionPromise;
                if (b)
                  return b.then(function() {
                    return a.flush(n);
                  });
                var C = [], B = P.timeOffset;
                if (m) {
                  var F = m.flush();
                  F && C.push(this.push(F, null, n));
                }
                var U = S.dataLength;
                S.reset();
                var w = this.demuxer, k = this.remuxer;
                if (!w || !k)
                  return U >= e && this.observer.emit(R.Events.ERROR, R.Events.ERROR, { type: A.ErrorTypes.MEDIA_ERROR, details: A.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: "no demux matching with content found" }), E.executeEnd = x(), [d(n)];
                var W = w.flush(B);
                return s(W) ? W.then(function(K) {
                  return a.flushRemux(C, K, n), C;
                }) : (this.flushRemux(C, W, n), C);
              }, l.flushRemux = function(n, a, E) {
                var m = a.audioTrack, S = a.avcTrack, P = a.id3Track, b = a.textTrack, C = this.currentTransmuxState, B = C.accurateTimeOffset, F = C.timeOffset;
                T.logger.log("[transmuxer.ts]: Flushed fragment " + E.sn + (E.part > -1 ? " p: " + E.part : "") + " of level " + E.level);
                var U = this.remuxer.remux(m, S, P, b, F, B, true, this.id);
                n.push({ remuxResult: U, chunkMeta: E }), E.transmuxing.executeEnd = x();
              }, l.resetInitialTimestamp = function(n) {
                var a = this.demuxer, E = this.remuxer;
                !a || !E || (a.resetTimeStamp(n), E.resetTimeStamp(n));
              }, l.resetContiguity = function() {
                var n = this.demuxer, a = this.remuxer;
                !n || !a || (n.resetContiguity(), a.resetNextTimestamp());
              }, l.resetInitSegment = function(n, a, E, m) {
                var S = this.demuxer, P = this.remuxer;
                !S || !P || (S.resetInitSegment(a, E, m), P.resetInitSegment(n, a, E));
              }, l.destroy = function() {
                this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
              }, l.transmux = function(n, a, E, m, S) {
                var P;
                return a && a.method === "SAMPLE-AES" ? P = this.transmuxSampleAes(n, a, E, m, S) : P = this.transmuxUnencrypted(n, E, m, S), P;
              }, l.transmuxUnencrypted = function(n, a, E, m) {
                var S = this.demuxer.demux(n, a, false, !this.config.progressive), P = S.audioTrack, b = S.avcTrack, C = S.id3Track, B = S.textTrack, F = this.remuxer.remux(P, b, C, B, a, E, false, this.id);
                return { remuxResult: F, chunkMeta: m };
              }, l.transmuxSampleAes = function(n, a, E, m, S) {
                var P = this;
                return this.demuxer.demuxSampleAes(n, a, E).then(function(b) {
                  var C = P.remuxer.remux(b.audioTrack, b.avcTrack, b.id3Track, b.textTrack, E, m, false, P.id);
                  return { remuxResult: C, chunkMeta: S };
                });
              }, l.configureTransmuxer = function(n, a) {
                for (var E = this.config, m = this.observer, S = this.typeSupported, P = this.vendor, b = a.audioCodec, C = a.defaultInitPts, B = a.duration, F = a.initSegmentData, U = a.videoCodec, w, k = 0, W = r.length; k < W; k++)
                  if (r[k].demux.probe(n)) {
                    w = r[k];
                    break;
                  }
                w || (T.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), w = { demux: O.default, remux: y.default });
                var K = this.demuxer, j = this.remuxer, G = w.remux, H = w.demux;
                (!j || !(j instanceof G)) && (this.remuxer = new G(m, E, S, P)), (!K || !(K instanceof H)) && (this.demuxer = new H(m, E, S), this.probe = H.probe), this.resetInitSegment(F, b, U, B), this.resetInitialTimestamp(C);
              }, l.needsProbing = function(n, a, E) {
                return !this.demuxer || !this.remuxer || a || E;
              }, l.getDecrypter = function() {
                var n = this.decrypter;
                return n || (n = this.decrypter = new _.default(this.observer, this.config)), n;
              }, h;
            }();
            function i(h, l) {
              var o = null;
              return h.byteLength > 0 && l != null && l.key != null && l.iv !== null && l.method != null && (o = l), o;
            }
            var d = function(l) {
              return { remuxResult: {}, chunkMeta: l };
            };
            function s(h) {
              return "then" in h && h.then instanceof Function;
            }
            var f = function(l, o, n, a, E) {
              this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = l, this.videoCodec = o, this.initSegmentData = n, this.duration = a, this.defaultInitPts = E;
            }, v = function(l, o, n, a, E) {
              this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.discontinuity = l, this.contiguous = o, this.accurateTimeOffset = n, this.trackSwitch = a, this.timeOffset = E;
            };
          }, "./src/demux/tsdemuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "discardEPB", function() {
              return d;
            });
            var R = c("./src/demux/adts.ts"), A = c("./src/demux/mpegaudio.ts"), _ = c("./src/demux/exp-golomb.ts"), M = c("./src/demux/id3.ts"), O = c("./src/demux/sample-aes.ts"), D = c("./src/events.ts"), L = c("./src/utils/mp4-tools.ts"), u = c("./src/utils/logger.ts"), y = c("./src/errors.ts"), p = { video: 1, audio: 2, id3: 3, text: 4 }, g = function() {
              function s(v, h, l) {
                this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = v, this.config = h, this.typeSupported = l;
              }
              s.probe = function(h) {
                var l = s.syncOffset(h);
                return l < 0 ? false : (l && u.logger.warn("MPEG2-TS detected but first sync word found @ offset " + l + ", junk ahead ?"), true);
              }, s.syncOffset = function(h) {
                for (var l = Math.min(1e3, h.length - 3 * 188), o = 0; o < l; ) {
                  if (h[o] === 71 && h[o + 188] === 71 && h[o + 2 * 188] === 71)
                    return o;
                  o++;
                }
                return -1;
              }, s.createTrack = function(h, l) {
                return { container: h === "video" || h === "audio" ? "video/mp2t" : void 0, type: h, id: p[h], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: h === "audio" ? l : void 0 };
              };
              var f = s.prototype;
              return f.resetInitSegment = function(h, l, o) {
                this.pmtParsed = false, this._pmtId = -1, this._avcTrack = s.createTrack("video", o), this._audioTrack = s.createTrack("audio", o), this._id3Track = s.createTrack("id3", o), this._txtTrack = s.createTrack("text", o), this._audioTrack.isAAC = true, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = h, this.videoCodec = l, this._duration = o;
              }, f.resetTimeStamp = function() {
              }, f.resetContiguity = function() {
                var h = this._audioTrack, l = this._avcTrack, o = this._id3Track;
                h && (h.pesData = null), l && (l.pesData = null), o && (o.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null;
              }, f.demux = function(h, l, o, n) {
                o === void 0 && (o = false), n === void 0 && (n = false), o || (this.sampleAes = null);
                var a, E = this._avcTrack, m = this._audioTrack, S = this._id3Track, P = E.pid, b = E.pesData, C = m.pid, B = S.pid, F = m.pesData, U = S.pesData, w = false, k = this.pmtParsed, W = this._pmtId, K = h.length;
                if (this.remainderData && (h = Object(L.appendUint8Array)(this.remainderData, h), K = h.length, this.remainderData = null), K < 188 && !n)
                  return this.remainderData = h, { audioTrack: m, avcTrack: E, id3Track: S, textTrack: this._txtTrack };
                var j = Math.max(0, s.syncOffset(h));
                K -= (K + j) % 188, K < h.byteLength && !n && (this.remainderData = new Uint8Array(h.buffer, K, h.buffer.byteLength - K));
                for (var G = j; G < K; G += 188)
                  if (h[G] === 71) {
                    var H = !!(h[G + 1] & 64), J = ((h[G + 1] & 31) << 8) + h[G + 2], Q = (h[G + 3] & 48) >> 4, Z = void 0;
                    if (Q > 1) {
                      if (Z = G + 5 + h[G + 4], Z === G + 188)
                        continue;
                    } else
                      Z = G + 4;
                    switch (J) {
                      case P:
                        H && (b && (a = e(b)) && this.parseAVCPES(a, false), b = { data: [], size: 0 }), b && (b.data.push(h.subarray(Z, G + 188)), b.size += G + 188 - Z);
                        break;
                      case C:
                        H && (F && (a = e(F)) && (m.isAAC ? this.parseAACPES(a) : this.parseMPEGPES(a)), F = { data: [], size: 0 }), F && (F.data.push(h.subarray(Z, G + 188)), F.size += G + 188 - Z);
                        break;
                      case B:
                        H && (U && (a = e(U)) && this.parseID3PES(a), U = { data: [], size: 0 }), U && (U.data.push(h.subarray(Z, G + 188)), U.size += G + 188 - Z);
                        break;
                      case 0:
                        H && (Z += h[Z] + 1), W = this._pmtId = x(h, Z);
                        break;
                      case W: {
                        H && (Z += h[Z] + 1);
                        var $ = r(h, Z, this.typeSupported.mpeg === true || this.typeSupported.mp3 === true, o);
                        P = $.avc, P > 0 && (E.pid = P), C = $.audio, C > 0 && (m.pid = C, m.isAAC = $.isAAC), B = $.id3, B > 0 && (S.pid = B), w && !k && (u.logger.log("reparse from beginning"), w = false, G = j - 188), k = this.pmtParsed = true;
                        break;
                      }
                      case 17:
                      case 8191:
                        break;
                      default:
                        w = true;
                        break;
                    }
                  } else
                    this.observer.emit(D.Events.ERROR, D.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.FRAG_PARSING_ERROR, fatal: false, reason: "TS packet did not start with 0x47" });
                E.pesData = b, m.pesData = F, S.pesData = U;
                var q = { audioTrack: m, avcTrack: E, id3Track: S, textTrack: this._txtTrack };
                return n && this.extractRemainingSamples(q), q;
              }, f.flush = function() {
                var h = this.remainderData;
                this.remainderData = null;
                var l;
                return h ? l = this.demux(h, -1, false, true) : l = { audioTrack: this._audioTrack, avcTrack: this._avcTrack, textTrack: this._txtTrack, id3Track: this._id3Track }, this.extractRemainingSamples(l), this.sampleAes ? this.decrypt(l, this.sampleAes) : l;
              }, f.extractRemainingSamples = function(h) {
                var l = h.audioTrack, o = h.avcTrack, n = h.id3Track, a = o.pesData, E = l.pesData, m = n.pesData, S;
                a && (S = e(a)) ? (this.parseAVCPES(S, true), o.pesData = null) : o.pesData = a, E && (S = e(E)) ? (l.isAAC ? this.parseAACPES(S) : this.parseMPEGPES(S), l.pesData = null) : (E != null && E.size && u.logger.log("last AAC PES packet truncated,might overlap between fragments"), l.pesData = E), m && (S = e(m)) ? (this.parseID3PES(S), n.pesData = null) : n.pesData = m;
              }, f.demuxSampleAes = function(h, l, o) {
                var n = this.demux(h, o, true, !this.config.progressive), a = this.sampleAes = new O.default(this.observer, this.config, l);
                return this.decrypt(n, a);
              }, f.decrypt = function(h, l) {
                return new Promise(function(o) {
                  var n = h.audioTrack, a = h.avcTrack;
                  n.samples && n.isAAC ? l.decryptAacSamples(n.samples, 0, function() {
                    a.samples ? l.decryptAvcSamples(a.samples, 0, 0, function() {
                      o(h);
                    }) : o(h);
                  }) : a.samples && l.decryptAvcSamples(a.samples, 0, 0, function() {
                    o(h);
                  });
                });
              }, f.destroy = function() {
                this._initPTS = this._initDTS = null, this._duration = 0;
              }, f.parseAVCPES = function(h, l) {
                var o = this, n = this._avcTrack, a = this.parseAVCNALu(h.data), E = false, m = this.avcSample, S, P = false;
                h.data = null, m && a.length && !n.audFound && (t(m, n), m = this.avcSample = T(false, h.pts, h.dts, "")), a.forEach(function(b) {
                  switch (b.type) {
                    case 1: {
                      S = true, m || (m = o.avcSample = T(true, h.pts, h.dts, "")), E && (m.debug += "NDR "), m.frame = true;
                      var C = b.data;
                      if (P && C.length > 4) {
                        var B = new _.default(C).readSliceType();
                        (B === 2 || B === 4 || B === 7 || B === 9) && (m.key = true);
                      }
                      break;
                    }
                    case 5:
                      S = true, m || (m = o.avcSample = T(true, h.pts, h.dts, "")), E && (m.debug += "IDR "), m.key = true, m.frame = true;
                      break;
                    case 6: {
                      S = true, E && m && (m.debug += "SEI ");
                      var F = new _.default(d(b.data));
                      F.readUByte();
                      for (var U = 0, w = 0, k = false, W = 0; !k && F.bytesAvailable > 1; ) {
                        U = 0;
                        do
                          W = F.readUByte(), U += W;
                        while (W === 255);
                        w = 0;
                        do
                          W = F.readUByte(), w += W;
                        while (W === 255);
                        if (U === 4 && F.bytesAvailable !== 0) {
                          k = true;
                          var K = F.readUByte();
                          if (K === 181) {
                            var j = F.readUShort();
                            if (j === 49) {
                              var G = F.readUInt();
                              if (G === 1195456820) {
                                var H = F.readUByte();
                                if (H === 3) {
                                  for (var J = F.readUByte(), Q = F.readUByte(), Z = 31 & J, $ = [J, Q], q = 0; q < Z; q++)
                                    $.push(F.readUByte()), $.push(F.readUByte()), $.push(F.readUByte());
                                  i(o._txtTrack.samples, { type: 3, pts: h.pts, bytes: $ });
                                }
                              }
                            }
                          }
                        } else if (U === 5 && F.bytesAvailable !== 0) {
                          if (k = true, w > 16) {
                            for (var se = [], X = 0; X < 16; X++)
                              se.push(F.readUByte().toString(16)), (X === 3 || X === 5 || X === 7 || X === 9) && se.push("-");
                            for (var z = w - 16, V = new Uint8Array(z), Y = 0; Y < z; Y++)
                              V[Y] = F.readUByte();
                            i(o._txtTrack.samples, { pts: h.pts, payloadType: U, uuid: se.join(""), userData: Object(M.utf8ArrayToStr)(V), userDataBytes: V });
                          }
                        } else if (w < F.bytesAvailable)
                          for (var te = 0; te < w; te++)
                            F.readUByte();
                      }
                      break;
                    }
                    case 7:
                      if (S = true, P = true, E && m && (m.debug += "SPS "), !n.sps) {
                        var ae = new _.default(b.data), ne = ae.readSPS();
                        n.width = ne.width, n.height = ne.height, n.pixelRatio = ne.pixelRatio, n.sps = [b.data], n.duration = o._duration;
                        for (var oe = b.data.subarray(1, 4), ue = "avc1.", ie = 0; ie < 3; ie++) {
                          var ee = oe[ie].toString(16);
                          ee.length < 2 && (ee = "0" + ee), ue += ee;
                        }
                        n.codec = ue;
                      }
                      break;
                    case 8:
                      S = true, E && m && (m.debug += "PPS "), n.pps || (n.pps = [b.data]);
                      break;
                    case 9:
                      S = false, n.audFound = true, m && t(m, n), m = o.avcSample = T(false, h.pts, h.dts, E ? "AUD " : "");
                      break;
                    case 12:
                      S = false;
                      break;
                    default:
                      S = false, m && (m.debug += "unknown NAL " + b.type + " ");
                      break;
                  }
                  if (m && S) {
                    var re = m.units;
                    re.push(b);
                  }
                }), l && m && (t(m, n), this.avcSample = null);
              }, f.getLastNalUnit = function() {
                var h, l = this.avcSample, o;
                if (!l || l.units.length === 0) {
                  var n = this._avcTrack.samples;
                  l = n[n.length - 1];
                }
                if ((h = l) !== null && h !== void 0 && h.units) {
                  var a = l.units;
                  o = a[a.length - 1];
                }
                return o;
              }, f.parseAVCNALu = function(h) {
                var l = h.byteLength, o = this._avcTrack, n = o.naluState || 0, a = n, E = [], m = 0, S, P, b, C = -1, B = 0;
                for (n === -1 && (C = 0, B = h[0] & 31, n = 0, m = 1); m < l; ) {
                  if (S = h[m++], !n) {
                    n = S ? 0 : 1;
                    continue;
                  }
                  if (n === 1) {
                    n = S ? 0 : 2;
                    continue;
                  }
                  if (!S)
                    n = 3;
                  else if (S === 1) {
                    if (C >= 0) {
                      var F = { data: h.subarray(C, m - n - 1), type: B };
                      E.push(F);
                    } else {
                      var U = this.getLastNalUnit();
                      if (U && (a && m <= 4 - a && U.state && (U.data = U.data.subarray(0, U.data.byteLength - a)), P = m - n - 1, P > 0)) {
                        var w = new Uint8Array(U.data.byteLength + P);
                        w.set(U.data, 0), w.set(h.subarray(0, P), U.data.byteLength), U.data = w;
                      }
                    }
                    m < l ? (b = h[m] & 31, C = m, B = b, n = 0) : n = -1;
                  } else
                    n = 0;
                }
                if (C >= 0 && n >= 0) {
                  var k = { data: h.subarray(C, l), type: B, state: n };
                  E.push(k);
                }
                if (E.length === 0) {
                  var W = this.getLastNalUnit();
                  if (W) {
                    var K = new Uint8Array(W.data.byteLength + h.byteLength);
                    K.set(W.data, 0), K.set(h, W.data.byteLength), W.data = K;
                  }
                }
                return o.naluState = n, E;
              }, f.parseAACPES = function(h) {
                var l = 0, o = this._audioTrack, n = this.aacOverFlow, a = h.data;
                if (n) {
                  this.aacOverFlow = null;
                  var E = n.sample.unit.byteLength, m = Math.min(n.missing, E), S = E - m;
                  n.sample.unit.set(a.subarray(0, m), S), o.samples.push(n.sample), l = n.missing;
                }
                var P, b;
                for (P = l, b = a.length; P < b - 1 && !R.isHeader(a, P); P++)
                  ;
                if (P !== l) {
                  var C, B;
                  if (P < b - 1 ? (C = "AAC PES did not start with ADTS header,offset:" + P, B = false) : (C = "no ADTS header found in AAC PES", B = true), u.logger.warn("parsing error:" + C), this.observer.emit(D.Events.ERROR, D.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.FRAG_PARSING_ERROR, fatal: B, reason: C }), B)
                    return;
                }
                R.initTrackConfig(o, this.observer, a, P, this.audioCodec);
                var F;
                if (h.pts !== void 0)
                  F = h.pts;
                else if (n) {
                  var U = R.getFrameDuration(o.samplerate);
                  F = n.sample.pts + U;
                } else {
                  u.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
                  return;
                }
                for (var w = 0; P < b; )
                  if (R.isHeader(a, P)) {
                    if (P + 5 < b) {
                      var k = R.appendFrame(o, a, P, F, w);
                      if (k)
                        if (k.missing)
                          this.aacOverFlow = k;
                        else {
                          P += k.length, w++;
                          continue;
                        }
                    }
                    break;
                  } else
                    P++;
              }, f.parseMPEGPES = function(h) {
                var l = h.data, o = l.length, n = 0, a = 0, E = h.pts;
                if (E === void 0) {
                  u.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
                  return;
                }
                for (; a < o; )
                  if (A.isHeader(l, a)) {
                    var m = A.appendFrame(this._audioTrack, l, a, E, n);
                    if (m)
                      a += m.length, n++;
                    else
                      break;
                  } else
                    a++;
              }, f.parseID3PES = function(h) {
                if (h.pts === void 0) {
                  u.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
                  return;
                }
                this._id3Track.samples.push(h);
              }, s;
            }();
            g.minProbeByteLength = 188;
            function T(s, f, v, h) {
              return { key: s, frame: false, pts: f, dts: v, units: [], debug: h, length: 0 };
            }
            function x(s, f) {
              return (s[f + 10] & 31) << 8 | s[f + 11];
            }
            function r(s, f, v, h) {
              var l = { audio: -1, avc: -1, id3: -1, isAAC: true }, o = (s[f + 1] & 15) << 8 | s[f + 2], n = f + 3 + o - 4, a = (s[f + 10] & 15) << 8 | s[f + 11];
              for (f += 12 + a; f < n; ) {
                var E = (s[f + 1] & 31) << 8 | s[f + 2];
                switch (s[f]) {
                  case 207:
                    if (!h) {
                      u.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                      break;
                    }
                  case 15:
                    l.audio === -1 && (l.audio = E);
                    break;
                  case 21:
                    l.id3 === -1 && (l.id3 = E);
                    break;
                  case 219:
                    if (!h) {
                      u.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                      break;
                    }
                  case 27:
                    l.avc === -1 && (l.avc = E);
                    break;
                  case 3:
                  case 4:
                    v ? l.audio === -1 && (l.audio = E, l.isAAC = false) : u.logger.log("MPEG audio found, not supported in this browser");
                    break;
                  case 36:
                    u.logger.warn("Unsupported HEVC stream type found");
                    break;
                  default:
                    break;
                }
                f += ((s[f + 3] & 15) << 8 | s[f + 4]) + 5;
              }
              return l;
            }
            function e(s) {
              var f = 0, v, h, l, o, n, a = s.data;
              if (!s || s.size === 0)
                return null;
              for (; a[0].length < 19 && a.length > 1; ) {
                var E = new Uint8Array(a[0].length + a[1].length);
                E.set(a[0]), E.set(a[1], a[0].length), a[0] = E, a.splice(1, 1);
              }
              v = a[0];
              var m = (v[0] << 16) + (v[1] << 8) + v[2];
              if (m === 1) {
                if (h = (v[4] << 8) + v[5], h && h > s.size - 6)
                  return null;
                var S = v[7];
                S & 192 && (o = (v[9] & 14) * 536870912 + (v[10] & 255) * 4194304 + (v[11] & 254) * 16384 + (v[12] & 255) * 128 + (v[13] & 254) / 2, S & 64 ? (n = (v[14] & 14) * 536870912 + (v[15] & 255) * 4194304 + (v[16] & 254) * 16384 + (v[17] & 255) * 128 + (v[18] & 254) / 2, o - n > 60 * 9e4 && (u.logger.warn(Math.round((o - n) / 9e4) + "s delta between PTS and DTS, align them"), o = n)) : n = o), l = v[8];
                var P = l + 9;
                if (s.size <= P)
                  return null;
                s.size -= P;
                for (var b = new Uint8Array(s.size), C = 0, B = a.length; C < B; C++) {
                  v = a[C];
                  var F = v.byteLength;
                  if (P)
                    if (P > F) {
                      P -= F;
                      continue;
                    } else
                      v = v.subarray(P), F -= P, P = 0;
                  b.set(v, f), f += F;
                }
                return h && (h -= l + 3), { data: b, pts: o, dts: n, len: h };
              }
              return null;
            }
            function t(s, f) {
              if (s.units.length && s.frame) {
                if (s.pts === void 0) {
                  var v = f.samples, h = v.length;
                  if (h) {
                    var l = v[h - 1];
                    s.pts = l.pts, s.dts = l.dts;
                  } else {
                    f.dropped++;
                    return;
                  }
                }
                f.samples.push(s);
              }
              s.debug.length && u.logger.log(s.pts + "/" + s.dts + ":" + s.debug);
            }
            function i(s, f) {
              var v = s.length;
              if (v > 0) {
                if (f.pts >= s[v - 1].pts)
                  s.push(f);
                else
                  for (var h = v - 1; h >= 0; h--)
                    if (f.pts < s[h].pts) {
                      s.splice(h, 0, f);
                      break;
                    }
              } else
                s.push(f);
            }
            function d(s) {
              for (var f = s.byteLength, v = [], h = 1; h < f - 2; )
                s[h] === 0 && s[h + 1] === 0 && s[h + 2] === 3 ? (v.push(h + 2), h += 2) : h++;
              if (v.length === 0)
                return s;
              var l = f - v.length, o = new Uint8Array(l), n = 0;
              for (h = 0; h < l; n++, h++)
                n === v[0] && (n++, v.shift()), o[h] = s[n];
              return o;
            }
            I.default = g;
          }, "./src/errors.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "ErrorTypes", function() {
              return R;
            }), c.d(I, "ErrorDetails", function() {
              return A;
            });
            var R;
            (function(_) {
              _.NETWORK_ERROR = "networkError", _.MEDIA_ERROR = "mediaError", _.KEY_SYSTEM_ERROR = "keySystemError", _.MUX_ERROR = "muxError", _.OTHER_ERROR = "otherError";
            })(R || (R = {}));
            var A;
            (function(_) {
              _.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", _.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", _.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", _.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", _.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", _.MANIFEST_LOAD_ERROR = "manifestLoadError", _.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", _.MANIFEST_PARSING_ERROR = "manifestParsingError", _.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", _.LEVEL_EMPTY_ERROR = "levelEmptyError", _.LEVEL_LOAD_ERROR = "levelLoadError", _.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", _.LEVEL_SWITCH_ERROR = "levelSwitchError", _.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", _.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", _.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", _.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", _.FRAG_LOAD_ERROR = "fragLoadError", _.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", _.FRAG_DECRYPT_ERROR = "fragDecryptError", _.FRAG_PARSING_ERROR = "fragParsingError", _.REMUX_ALLOC_ERROR = "remuxAllocError", _.KEY_LOAD_ERROR = "keyLoadError", _.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", _.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", _.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", _.BUFFER_APPEND_ERROR = "bufferAppendError", _.BUFFER_APPENDING_ERROR = "bufferAppendingError", _.BUFFER_STALLED_ERROR = "bufferStalledError", _.BUFFER_FULL_ERROR = "bufferFullError", _.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", _.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", _.INTERNAL_EXCEPTION = "internalException", _.INTERNAL_ABORTED = "aborted", _.UNKNOWN = "unknown";
            })(A || (A = {}));
          }, "./src/events.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "Events", function() {
              return R;
            });
            var R;
            (function(A) {
              A.MEDIA_ATTACHING = "hlsMediaAttaching", A.MEDIA_ATTACHED = "hlsMediaAttached", A.MEDIA_DETACHING = "hlsMediaDetaching", A.MEDIA_DETACHED = "hlsMediaDetached", A.BUFFER_RESET = "hlsBufferReset", A.BUFFER_CODECS = "hlsBufferCodecs", A.BUFFER_CREATED = "hlsBufferCreated", A.BUFFER_APPENDING = "hlsBufferAppending", A.BUFFER_APPENDED = "hlsBufferAppended", A.BUFFER_EOS = "hlsBufferEos", A.BUFFER_FLUSHING = "hlsBufferFlushing", A.BUFFER_FLUSHED = "hlsBufferFlushed", A.MANIFEST_LOADING = "hlsManifestLoading", A.MANIFEST_LOADED = "hlsManifestLoaded", A.MANIFEST_PARSED = "hlsManifestParsed", A.LEVEL_SWITCHING = "hlsLevelSwitching", A.LEVEL_SWITCHED = "hlsLevelSwitched", A.LEVEL_LOADING = "hlsLevelLoading", A.LEVEL_LOADED = "hlsLevelLoaded", A.LEVEL_UPDATED = "hlsLevelUpdated", A.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", A.LEVELS_UPDATED = "hlsLevelsUpdated", A.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", A.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", A.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", A.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", A.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", A.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", A.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", A.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", A.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", A.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", A.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", A.CUES_PARSED = "hlsCuesParsed", A.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", A.INIT_PTS_FOUND = "hlsInitPtsFound", A.FRAG_LOADING = "hlsFragLoading", A.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", A.FRAG_LOADED = "hlsFragLoaded", A.FRAG_DECRYPTED = "hlsFragDecrypted", A.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", A.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", A.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", A.FRAG_PARSED = "hlsFragParsed", A.FRAG_BUFFERED = "hlsFragBuffered", A.FRAG_CHANGED = "hlsFragChanged", A.FPS_DROP = "hlsFpsDrop", A.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", A.ERROR = "hlsError", A.DESTROYING = "hlsDestroying", A.KEY_LOADING = "hlsKeyLoading", A.KEY_LOADED = "hlsKeyLoaded", A.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", A.BACK_BUFFER_REACHED = "hlsBackBufferReached";
            })(R || (R = {}));
          }, "./src/hls.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return s;
            });
            var R = c("./node_modules/url-toolkit/src/url-toolkit.js"), A = c.n(R), _ = c("./src/loader/playlist-loader.ts"), M = c("./src/loader/key-loader.ts"), O = c("./src/controller/id3-track-controller.ts"), D = c("./src/controller/latency-controller.ts"), L = c("./src/controller/level-controller.ts"), u = c("./src/controller/fragment-tracker.ts"), y = c("./src/controller/stream-controller.ts"), p = c("./src/is-supported.ts"), g = c("./src/utils/logger.ts"), T = c("./src/config.ts"), x = c("./node_modules/eventemitter3/index.js"), r = c.n(x), e = c("./src/events.ts"), t = c("./src/errors.ts");
            function i(f, v) {
              for (var h = 0; h < v.length; h++) {
                var l = v[h];
                l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(f, l.key, l);
              }
            }
            function d(f, v, h) {
              return v && i(f.prototype, v), h && i(f, h), f;
            }
            var s = function() {
              f.isSupported = function() {
                return Object(p.isSupported)();
              };
              function f(h) {
                h === void 0 && (h = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new x.EventEmitter(), this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this._media = null, this.url = null;
                var l = this.config = Object(T.mergeConfig)(f.DefaultConfig, h);
                this.userConfig = h, Object(g.enableLogs)(l.debug), this._autoLevelCapping = -1, l.progressive && Object(T.enableStreamingMode)(l);
                var o = l.abrController, n = l.bufferController, a = l.capLevelController, E = l.fpsController, m = this.abrController = new o(this), S = this.bufferController = new n(this), P = this.capLevelController = new a(this), b = new E(this), C = new _.default(this), B = new M.default(this), F = new O.default(this), U = this.levelController = new L.default(this), w = new u.FragmentTracker(this), k = this.streamController = new y.default(this, w);
                P.setStreamController(k), b.setStreamController(k);
                var W = [U, k];
                this.networkControllers = W;
                var K = [C, B, m, S, P, b, F, w];
                this.audioTrackController = this.createController(l.audioTrackController, null, W), this.createController(l.audioStreamController, w, W), this.subtitleTrackController = this.createController(l.subtitleTrackController, null, W), this.createController(l.subtitleStreamController, w, W), this.createController(l.timelineController, null, K), this.emeController = this.createController(l.emeController, null, K), this.latencyController = this.createController(D.default, null, K), this.coreComponents = K;
              }
              var v = f.prototype;
              return v.createController = function(l, o, n) {
                if (l) {
                  var a = o ? new l(this, o) : new l(this);
                  return n && n.push(a), a;
                }
                return null;
              }, v.on = function(l, o, n) {
                n === void 0 && (n = this), this._emitter.on(l, o, n);
              }, v.once = function(l, o, n) {
                n === void 0 && (n = this), this._emitter.once(l, o, n);
              }, v.removeAllListeners = function(l) {
                this._emitter.removeAllListeners(l);
              }, v.off = function(l, o, n, a) {
                n === void 0 && (n = this), this._emitter.off(l, o, n, a);
              }, v.listeners = function(l) {
                return this._emitter.listeners(l);
              }, v.emit = function(l, o, n) {
                return this._emitter.emit(l, o, n);
              }, v.trigger = function(l, o) {
                if (this.config.debug)
                  return this.emit(l, l, o);
                try {
                  return this.emit(l, l, o);
                } catch (n) {
                  g.logger.error("An internal error happened while handling event " + l + '. Error message: "' + n.message + '". Here is a stacktrace:', n), this.trigger(e.Events.ERROR, { type: t.ErrorTypes.OTHER_ERROR, details: t.ErrorDetails.INTERNAL_EXCEPTION, fatal: false, event: l, error: n });
                }
                return false;
              }, v.listenerCount = function(l) {
                return this._emitter.listenerCount(l);
              }, v.destroy = function() {
                g.logger.log("destroy"), this.trigger(e.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(l) {
                  return l.destroy();
                }), this.networkControllers.length = 0, this.coreComponents.forEach(function(l) {
                  return l.destroy();
                }), this.coreComponents.length = 0;
              }, v.attachMedia = function(l) {
                g.logger.log("attachMedia"), this._media = l, this.trigger(e.Events.MEDIA_ATTACHING, { media: l });
              }, v.detachMedia = function() {
                g.logger.log("detachMedia"), this.trigger(e.Events.MEDIA_DETACHING, void 0), this._media = null;
              }, v.loadSource = function(l) {
                this.stopLoad();
                var o = this.media, n = this.url, a = this.url = R.buildAbsoluteURL(self.location.href, l, { alwaysNormalize: true });
                g.logger.log("loadSource:" + a), o && n && n !== a && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(o)), this.trigger(e.Events.MANIFEST_LOADING, { url: l });
              }, v.startLoad = function(l) {
                l === void 0 && (l = -1), g.logger.log("startLoad(" + l + ")"), this.networkControllers.forEach(function(o) {
                  o.startLoad(l);
                });
              }, v.stopLoad = function() {
                g.logger.log("stopLoad"), this.networkControllers.forEach(function(l) {
                  l.stopLoad();
                });
              }, v.swapAudioCodec = function() {
                g.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
              }, v.recoverMediaError = function() {
                g.logger.log("recoverMediaError");
                var l = this._media;
                this.detachMedia(), l && this.attachMedia(l);
              }, v.removeLevel = function(l, o) {
                o === void 0 && (o = 0), this.levelController.removeLevel(l, o);
              }, d(f, [{ key: "levels", get: function() {
                var l = this.levelController.levels;
                return l || [];
              } }, { key: "currentLevel", get: function() {
                return this.streamController.currentLevel;
              }, set: function(l) {
                g.logger.log("set currentLevel:" + l), this.loadLevel = l, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
              } }, { key: "nextLevel", get: function() {
                return this.streamController.nextLevel;
              }, set: function(l) {
                g.logger.log("set nextLevel:" + l), this.levelController.manualLevel = l, this.streamController.nextLevelSwitch();
              } }, { key: "loadLevel", get: function() {
                return this.levelController.level;
              }, set: function(l) {
                g.logger.log("set loadLevel:" + l), this.levelController.manualLevel = l;
              } }, { key: "nextLoadLevel", get: function() {
                return this.levelController.nextLoadLevel;
              }, set: function(l) {
                this.levelController.nextLoadLevel = l;
              } }, { key: "firstLevel", get: function() {
                return Math.max(this.levelController.firstLevel, this.minAutoLevel);
              }, set: function(l) {
                g.logger.log("set firstLevel:" + l), this.levelController.firstLevel = l;
              } }, { key: "startLevel", get: function() {
                return this.levelController.startLevel;
              }, set: function(l) {
                g.logger.log("set startLevel:" + l), l !== -1 && (l = Math.max(l, this.minAutoLevel)), this.levelController.startLevel = l;
              } }, { key: "capLevelToPlayerSize", get: function() {
                return this.config.capLevelToPlayerSize;
              }, set: function(l) {
                var o = !!l;
                o !== this.config.capLevelToPlayerSize && (o ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = o);
              } }, { key: "autoLevelCapping", get: function() {
                return this._autoLevelCapping;
              }, set: function(l) {
                this._autoLevelCapping !== l && (g.logger.log("set autoLevelCapping:" + l), this._autoLevelCapping = l);
              } }, { key: "bandwidthEstimate", get: function() {
                var l = this.abrController.bwEstimator;
                return l ? l.getEstimate() : NaN;
              } }, { key: "autoLevelEnabled", get: function() {
                return this.levelController.manualLevel === -1;
              } }, { key: "manualLevel", get: function() {
                return this.levelController.manualLevel;
              } }, { key: "minAutoLevel", get: function() {
                var l = this.levels, o = this.config.minAutoBitrate;
                if (!l)
                  return 0;
                for (var n = l.length, a = 0; a < n; a++)
                  if (l[a].maxBitrate > o)
                    return a;
                return 0;
              } }, { key: "maxAutoLevel", get: function() {
                var l = this.levels, o = this.autoLevelCapping, n;
                return o === -1 && l && l.length ? n = l.length - 1 : n = o, n;
              } }, { key: "nextAutoLevel", get: function() {
                return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
              }, set: function(l) {
                this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, l);
              } }, { key: "audioTracks", get: function() {
                var l = this.audioTrackController;
                return l ? l.audioTracks : [];
              } }, { key: "audioTrack", get: function() {
                var l = this.audioTrackController;
                return l ? l.audioTrack : -1;
              }, set: function(l) {
                var o = this.audioTrackController;
                o && (o.audioTrack = l);
              } }, { key: "subtitleTracks", get: function() {
                var l = this.subtitleTrackController;
                return l ? l.subtitleTracks : [];
              } }, { key: "subtitleTrack", get: function() {
                var l = this.subtitleTrackController;
                return l ? l.subtitleTrack : -1;
              }, set: function(l) {
                var o = this.subtitleTrackController;
                o && (o.subtitleTrack = l);
              } }, { key: "media", get: function() {
                return this._media;
              } }, { key: "subtitleDisplay", get: function() {
                var l = this.subtitleTrackController;
                return l ? l.subtitleDisplay : false;
              }, set: function(l) {
                var o = this.subtitleTrackController;
                o && (o.subtitleDisplay = l);
              } }, { key: "lowLatencyMode", get: function() {
                return this.config.lowLatencyMode;
              }, set: function(l) {
                this.config.lowLatencyMode = l;
              } }, { key: "liveSyncPosition", get: function() {
                return this.latencyController.liveSyncPosition;
              } }, { key: "latency", get: function() {
                return this.latencyController.latency;
              } }, { key: "maxLatency", get: function() {
                return this.latencyController.maxLatency;
              } }, { key: "targetLatency", get: function() {
                return this.latencyController.targetLatency;
              } }, { key: "drift", get: function() {
                return this.latencyController.drift;
              } }, { key: "forceStartLoad", get: function() {
                return this.streamController.forceStartLoad;
              } }], [{ key: "version", get: function() {
                return "1.0.11";
              } }, { key: "Events", get: function() {
                return e.Events;
              } }, { key: "ErrorTypes", get: function() {
                return t.ErrorTypes;
              } }, { key: "ErrorDetails", get: function() {
                return t.ErrorDetails;
              } }, { key: "DefaultConfig", get: function() {
                return f.defaultConfig ? f.defaultConfig : T.hlsDefaultConfig;
              }, set: function(l) {
                f.defaultConfig = l;
              } }]), f;
            }();
            s.defaultConfig = void 0;
          }, "./src/is-supported.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "isSupported", function() {
              return _;
            }), c.d(I, "changeTypeSupported", function() {
              return M;
            });
            var R = c("./src/utils/mediasource-helper.ts");
            function A() {
              return self.SourceBuffer || self.WebKitSourceBuffer;
            }
            function _() {
              var O = Object(R.getMediaSource)();
              if (!O)
                return false;
              var D = A(), L = O && typeof O.isTypeSupported == "function" && O.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), u = !D || D.prototype && typeof D.prototype.appendBuffer == "function" && typeof D.prototype.remove == "function";
              return !!L && !!u;
            }
            function M() {
              var O, D = A();
              return typeof (D == null || (O = D.prototype) === null || O === void 0 ? void 0 : O.changeType) == "function";
            }
          }, "./src/loader/fragment-loader.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return g;
            }), c.d(I, "LoadError", function() {
              return x;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/errors.ts");
            function _(r, e) {
              r.prototype = Object.create(e.prototype), r.prototype.constructor = r, u(r, e);
            }
            function M(r) {
              var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
              return M = function(i) {
                if (i === null || !L(i))
                  return i;
                if (typeof i != "function")
                  throw new TypeError("Super expression must either be null or a function");
                if (typeof e != "undefined") {
                  if (e.has(i))
                    return e.get(i);
                  e.set(i, d);
                }
                function d() {
                  return O(i, arguments, y(this).constructor);
                }
                return d.prototype = Object.create(i.prototype, { constructor: { value: d, enumerable: false, writable: true, configurable: true } }), u(d, i);
              }, M(r);
            }
            function O(r, e, t) {
              return D() ? O = Reflect.construct : O = function(d, s, f) {
                var v = [null];
                v.push.apply(v, s);
                var h = Function.bind.apply(d, v), l = new h();
                return f && u(l, f.prototype), l;
              }, O.apply(null, arguments);
            }
            function D() {
              if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch {
                return false;
              }
            }
            function L(r) {
              return Function.toString.call(r).indexOf("[native code]") !== -1;
            }
            function u(r, e) {
              return u = Object.setPrototypeOf || function(i, d) {
                return i.__proto__ = d, i;
              }, u(r, e);
            }
            function y(r) {
              return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }, y(r);
            }
            var p = Math.pow(2, 17), g = function() {
              function r(t) {
                this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t;
              }
              var e = r.prototype;
              return e.destroy = function() {
                this.loader && (this.loader.destroy(), this.loader = null);
              }, e.abort = function() {
                this.loader && this.loader.abort();
              }, e.load = function(i, d) {
                var s = this, f = i.url;
                if (!f)
                  return Promise.reject(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: i, networkDetails: null }, "Fragment does not have a " + (f ? "part list" : "url")));
                this.abort();
                var v = this.config, h = v.fLoader, l = v.loader;
                return new Promise(function(o, n) {
                  s.loader && s.loader.destroy();
                  var a = s.loader = i.loader = h ? new h(v) : new l(v), E = T(i), m = { timeout: v.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: v.fragLoadingMaxRetryTimeout, highWaterMark: p };
                  i.stats = a.stats, a.load(E, m, { onSuccess: function(P, b, C, B) {
                    s.resetLoader(i, a), o({ frag: i, part: null, payload: P.data, networkDetails: B });
                  }, onError: function(P, b, C) {
                    s.resetLoader(i, a), n(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: i, response: P, networkDetails: C }));
                  }, onAbort: function(P, b, C) {
                    s.resetLoader(i, a), n(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.INTERNAL_ABORTED, fatal: false, frag: i, networkDetails: C }));
                  }, onTimeout: function(P, b, C) {
                    s.resetLoader(i, a), n(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: i, networkDetails: C }));
                  }, onProgress: function(P, b, C, B) {
                    d && d({ frag: i, part: null, payload: C, networkDetails: B });
                  } });
                });
              }, e.loadPart = function(i, d, s) {
                var f = this;
                this.abort();
                var v = this.config, h = v.fLoader, l = v.loader;
                return new Promise(function(o, n) {
                  f.loader && f.loader.destroy();
                  var a = f.loader = i.loader = h ? new h(v) : new l(v), E = T(i, d), m = { timeout: v.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: v.fragLoadingMaxRetryTimeout, highWaterMark: p };
                  d.stats = a.stats, a.load(E, m, { onSuccess: function(P, b, C, B) {
                    f.resetLoader(i, a), f.updateStatsFromPart(i, d);
                    var F = { frag: i, part: d, payload: P.data, networkDetails: B };
                    s(F), o(F);
                  }, onError: function(P, b, C) {
                    f.resetLoader(i, a), n(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: i, part: d, response: P, networkDetails: C }));
                  }, onAbort: function(P, b, C) {
                    i.stats.aborted = d.stats.aborted, f.resetLoader(i, a), n(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.INTERNAL_ABORTED, fatal: false, frag: i, part: d, networkDetails: C }));
                  }, onTimeout: function(P, b, C) {
                    f.resetLoader(i, a), n(new x({ type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: i, part: d, networkDetails: C }));
                  } });
                });
              }, e.updateStatsFromPart = function(i, d) {
                var s = i.stats, f = d.stats, v = f.total;
                if (s.loaded += f.loaded, v) {
                  var h = Math.round(i.duration / d.duration), l = Math.min(Math.round(s.loaded / v), h), o = h - l, n = o * Math.round(s.loaded / l);
                  s.total = s.loaded + n;
                } else
                  s.total = Math.max(s.loaded, s.total);
                var a = s.loading, E = f.loading;
                a.start ? a.first += E.first - E.start : (a.start = E.start, a.first = E.first), a.end = E.end;
              }, e.resetLoader = function(i, d) {
                i.loader = null, this.loader === d && (self.clearTimeout(this.partLoadTimeout), this.loader = null), d.destroy();
              }, r;
            }();
            function T(r, e) {
              e === void 0 && (e = null);
              var t = e || r, i = { frag: r, part: e, responseType: "arraybuffer", url: t.url, rangeStart: 0, rangeEnd: 0 }, d = t.byteRangeStartOffset, s = t.byteRangeEndOffset;
              return Object(R.isFiniteNumber)(d) && Object(R.isFiniteNumber)(s) && (i.rangeStart = d, i.rangeEnd = s), i;
            }
            var x = function(r) {
              _(e, r);
              function e(t) {
                for (var i, d = arguments.length, s = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                  s[f - 1] = arguments[f];
                return i = r.call.apply(r, [this].concat(s)) || this, i.data = void 0, i.data = t, i;
              }
              return e;
            }(M(Error));
          }, "./src/loader/fragment.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "ElementaryStreamTypes", function() {
              return g;
            }), c.d(I, "BaseSegment", function() {
              return T;
            }), c.d(I, "Fragment", function() {
              return x;
            }), c.d(I, "Part", function() {
              return r;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./node_modules/url-toolkit/src/url-toolkit.js"), _ = c.n(A), M = c("./src/utils/logger.ts"), O = c("./src/loader/level-key.ts"), D = c("./src/loader/load-stats.ts");
            function L(e, t) {
              e.prototype = Object.create(t.prototype), e.prototype.constructor = e, u(e, t);
            }
            function u(e, t) {
              return u = Object.setPrototypeOf || function(d, s) {
                return d.__proto__ = s, d;
              }, u(e, t);
            }
            function y(e, t) {
              for (var i = 0; i < t.length; i++) {
                var d = t[i];
                d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(e, d.key, d);
              }
            }
            function p(e, t, i) {
              return t && y(e.prototype, t), i && y(e, i), e;
            }
            var g;
            (function(e) {
              e.AUDIO = "audio", e.VIDEO = "video", e.AUDIOVIDEO = "audiovideo";
            })(g || (g = {}));
            var T = function() {
              function e(i) {
                var d;
                this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = (d = {}, d[g.AUDIO] = null, d[g.VIDEO] = null, d[g.AUDIOVIDEO] = null, d), this.baseurl = i;
              }
              var t = e.prototype;
              return t.setByteRange = function(d, s) {
                var f = d.split("@", 2), v = [];
                f.length === 1 ? v[0] = s ? s.byteRangeEndOffset : 0 : v[0] = parseInt(f[1]), v[1] = parseInt(f[0]) + v[0], this._byteRange = v;
              }, p(e, [{ key: "byteRange", get: function() {
                return this._byteRange ? this._byteRange : [];
              } }, { key: "byteRangeStartOffset", get: function() {
                return this.byteRange[0];
              } }, { key: "byteRangeEndOffset", get: function() {
                return this.byteRange[1];
              } }, { key: "url", get: function() {
                return !this._url && this.baseurl && this.relurl && (this._url = Object(A.buildAbsoluteURL)(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
              }, set: function(d) {
                this._url = d;
              } }]), e;
            }(), x = function(e) {
              L(t, e);
              function t(d, s) {
                var f;
                return f = e.call(this, s) || this, f._decryptdata = null, f.rawProgramDateTime = null, f.programDateTime = null, f.tagList = [], f.duration = 0, f.sn = 0, f.levelkey = void 0, f.type = void 0, f.loader = null, f.level = -1, f.cc = 0, f.startPTS = void 0, f.endPTS = void 0, f.appendedPTS = void 0, f.startDTS = void 0, f.endDTS = void 0, f.start = 0, f.deltaPTS = void 0, f.maxStartPTS = void 0, f.minEndPTS = void 0, f.stats = new D.LoadStats(), f.urlId = 0, f.data = void 0, f.bitrateTest = false, f.title = null, f.initSegment = null, f.type = d, f;
              }
              var i = t.prototype;
              return i.createInitializationVector = function(s) {
                for (var f = new Uint8Array(16), v = 12; v < 16; v++)
                  f[v] = s >> 8 * (15 - v) & 255;
                return f;
              }, i.setDecryptDataFromLevelKey = function(s, f) {
                var v = s;
                return (s == null ? void 0 : s.method) === "AES-128" && s.uri && !s.iv && (v = O.LevelKey.fromURI(s.uri), v.method = s.method, v.iv = this.createInitializationVector(f), v.keyFormat = "identity"), v;
              }, i.setElementaryStreamInfo = function(s, f, v, h, l, o) {
                o === void 0 && (o = false);
                var n = this.elementaryStreams, a = n[s];
                if (!a) {
                  n[s] = { startPTS: f, endPTS: v, startDTS: h, endDTS: l, partial: o };
                  return;
                }
                a.startPTS = Math.min(a.startPTS, f), a.endPTS = Math.max(a.endPTS, v), a.startDTS = Math.min(a.startDTS, h), a.endDTS = Math.max(a.endDTS, l);
              }, i.clearElementaryStreamInfo = function() {
                var s = this.elementaryStreams;
                s[g.AUDIO] = null, s[g.VIDEO] = null, s[g.AUDIOVIDEO] = null;
              }, p(t, [{ key: "decryptdata", get: function() {
                if (!this.levelkey && !this._decryptdata)
                  return null;
                if (!this._decryptdata && this.levelkey) {
                  var s = this.sn;
                  typeof s != "number" && (this.levelkey && this.levelkey.method === "AES-128" && !this.levelkey.iv && M.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), s = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, s);
                }
                return this._decryptdata;
              } }, { key: "end", get: function() {
                return this.start + this.duration;
              } }, { key: "endProgramDateTime", get: function() {
                if (this.programDateTime === null || !Object(R.isFiniteNumber)(this.programDateTime))
                  return null;
                var s = Object(R.isFiniteNumber)(this.duration) ? this.duration : 0;
                return this.programDateTime + s * 1e3;
              } }, { key: "encrypted", get: function() {
                var s;
                return !!((s = this.decryptdata) !== null && s !== void 0 && s.keyFormat && this.decryptdata.uri);
              } }]), t;
            }(T), r = function(e) {
              L(t, e);
              function t(i, d, s, f, v) {
                var h;
                h = e.call(this, s) || this, h.fragOffset = 0, h.duration = 0, h.gap = false, h.independent = false, h.relurl = void 0, h.fragment = void 0, h.index = void 0, h.stats = new D.LoadStats(), h.duration = i.decimalFloatingPoint("DURATION"), h.gap = i.bool("GAP"), h.independent = i.bool("INDEPENDENT"), h.relurl = i.enumeratedString("URI"), h.fragment = d, h.index = f;
                var l = i.enumeratedString("BYTERANGE");
                return l && h.setByteRange(l, v), v && (h.fragOffset = v.fragOffset + v.duration), h;
              }
              return p(t, [{ key: "start", get: function() {
                return this.fragment.start + this.fragOffset;
              } }, { key: "end", get: function() {
                return this.start + this.duration;
              } }, { key: "loaded", get: function() {
                var d = this.elementaryStreams;
                return !!(d.audio || d.video || d.audiovideo);
              } }]), t;
            }(T);
          }, "./src/loader/key-loader.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return M;
            });
            var R = c("./src/events.ts"), A = c("./src/errors.ts"), _ = c("./src/utils/logger.ts"), M = function() {
              function O(L) {
                this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = L, this._registerListeners();
              }
              var D = O.prototype;
              return D._registerListeners = function() {
                this.hls.on(R.Events.KEY_LOADING, this.onKeyLoading, this);
              }, D._unregisterListeners = function() {
                this.hls.off(R.Events.KEY_LOADING, this.onKeyLoading);
              }, D.destroy = function() {
                this._unregisterListeners();
                for (var u in this.loaders) {
                  var y = this.loaders[u];
                  y && y.destroy();
                }
                this.loaders = {};
              }, D.onKeyLoading = function(u, y) {
                var p = y.frag, g = p.type, T = this.loaders[g];
                if (!p.decryptdata) {
                  _.logger.warn("Missing decryption data on fragment in onKeyLoading");
                  return;
                }
                var x = p.decryptdata.uri;
                if (x !== this.decrypturl || this.decryptkey === null) {
                  var r = this.hls.config;
                  if (T && (_.logger.warn("abort previous key loader for type:" + g), T.abort()), !x) {
                    _.logger.warn("key uri is falsy");
                    return;
                  }
                  var e = r.loader, t = p.loader = this.loaders[g] = new e(r);
                  this.decrypturl = x, this.decryptkey = null;
                  var i = { url: x, frag: p, responseType: "arraybuffer" }, d = { timeout: r.fragLoadingTimeOut, maxRetry: 0, retryDelay: r.fragLoadingRetryDelay, maxRetryDelay: r.fragLoadingMaxRetryTimeout, highWaterMark: 0 }, s = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
                  t.load(i, d, s);
                } else
                  this.decryptkey && (p.decryptdata.key = this.decryptkey, this.hls.trigger(R.Events.KEY_LOADED, { frag: p }));
              }, D.loadsuccess = function(u, y, p) {
                var g = p.frag;
                if (!g.decryptdata) {
                  _.logger.error("after key load, decryptdata unset");
                  return;
                }
                this.decryptkey = g.decryptdata.key = new Uint8Array(u.data), g.loader = null, delete this.loaders[g.type], this.hls.trigger(R.Events.KEY_LOADED, { frag: g });
              }, D.loaderror = function(u, y) {
                var p = y.frag, g = p.loader;
                g && g.abort(), delete this.loaders[p.type], this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.KEY_LOAD_ERROR, fatal: false, frag: p, response: u });
              }, D.loadtimeout = function(u, y) {
                var p = y.frag, g = p.loader;
                g && g.abort(), delete this.loaders[p.type], this.hls.trigger(R.Events.ERROR, { type: A.ErrorTypes.NETWORK_ERROR, details: A.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: false, frag: p });
              }, O;
            }();
          }, "./src/loader/level-details.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "LevelDetails", function() {
              return O;
            });
            var R = c("./src/polyfills/number.ts");
            function A(D, L) {
              for (var u = 0; u < L.length; u++) {
                var y = L[u];
                y.enumerable = y.enumerable || false, y.configurable = true, "value" in y && (y.writable = true), Object.defineProperty(D, y.key, y);
              }
            }
            function _(D, L, u) {
              return L && A(D.prototype, L), u && A(D, u), D;
            }
            var M = 10, O = function() {
              function D(u) {
                this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = false, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = u;
              }
              var L = D.prototype;
              return L.reloaded = function(y) {
                if (!y) {
                  this.advanced = true, this.updated = true;
                  return;
                }
                var p = this.lastPartSn - y.lastPartSn, g = this.lastPartIndex - y.lastPartIndex;
                this.updated = this.endSN !== y.endSN || !!g || !!p, this.advanced = this.endSN > y.endSN || p > 0 || p === 0 && g > 0, this.updated || this.advanced ? this.misses = Math.floor(y.misses * 0.6) : this.misses = y.misses + 1, this.availabilityDelay = y.availabilityDelay;
              }, _(D, [{ key: "hasProgramDateTime", get: function() {
                return this.fragments.length ? Object(R.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime) : false;
              } }, { key: "levelTargetDuration", get: function() {
                return this.averagetargetduration || this.targetduration || M;
              } }, { key: "drift", get: function() {
                var y = this.driftEndTime - this.driftStartTime;
                if (y > 0) {
                  var p = this.driftEnd - this.driftStart;
                  return p * 1e3 / y;
                }
                return 1;
              } }, { key: "edge", get: function() {
                return this.partEnd || this.fragmentEnd;
              } }, { key: "partEnd", get: function() {
                var y;
                return (y = this.partList) !== null && y !== void 0 && y.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
              } }, { key: "fragmentEnd", get: function() {
                var y;
                return (y = this.fragments) !== null && y !== void 0 && y.length ? this.fragments[this.fragments.length - 1].end : 0;
              } }, { key: "age", get: function() {
                return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
              } }, { key: "lastPartIndex", get: function() {
                var y;
                return (y = this.partList) !== null && y !== void 0 && y.length ? this.partList[this.partList.length - 1].index : -1;
              } }, { key: "lastPartSn", get: function() {
                var y;
                return (y = this.partList) !== null && y !== void 0 && y.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
              } }]), D;
            }();
          }, "./src/loader/level-key.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "LevelKey", function() {
              return O;
            });
            var R = c("./node_modules/url-toolkit/src/url-toolkit.js"), A = c.n(R);
            function _(D, L) {
              for (var u = 0; u < L.length; u++) {
                var y = L[u];
                y.enumerable = y.enumerable || false, y.configurable = true, "value" in y && (y.writable = true), Object.defineProperty(D, y.key, y);
              }
            }
            function M(D, L, u) {
              return L && _(D.prototype, L), u && _(D, u), D;
            }
            var O = function() {
              D.fromURL = function(u, y) {
                return new D(u, y);
              }, D.fromURI = function(u) {
                return new D(u);
              };
              function D(L, u) {
                this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, u ? this._uri = Object(R.buildAbsoluteURL)(L, u, { alwaysNormalize: true }) : this._uri = L;
              }
              return M(D, [{ key: "uri", get: function() {
                return this._uri;
              } }]), D;
            }();
          }, "./src/loader/load-stats.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "LoadStats", function() {
              return R;
            });
            var R = function() {
              this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
            };
          }, "./src/loader/m3u8-parser.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return t;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./node_modules/url-toolkit/src/url-toolkit.js"), _ = c.n(A), M = c("./src/loader/fragment.ts"), O = c("./src/loader/level-details.ts"), D = c("./src/loader/level-key.ts"), L = c("./src/utils/attr-list.ts"), u = c("./src/utils/logger.ts"), y = c("./src/utils/codecs.ts"), p = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g, g = /#EXT-X-MEDIA:(.*)/g, T = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), x = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), r = /\.(mp4|m4s|m4v|m4a)$/i;
            function e(v) {
              var h, l;
              return r.test((h = (l = A.parseURL(v)) === null || l === void 0 ? void 0 : l.path) != null ? h : "");
            }
            var t = function() {
              function v() {
              }
              return v.findGroup = function(l, o) {
                for (var n = 0; n < l.length; n++) {
                  var a = l[n];
                  if (a.id === o)
                    return a;
                }
              }, v.convertAVC1ToAVCOTI = function(l) {
                var o = l.split(".");
                if (o.length > 2) {
                  var n = o.shift() + ".";
                  return n += parseInt(o.shift()).toString(16), n += ("000" + parseInt(o.shift()).toString(16)).substr(-4), n;
                }
                return l;
              }, v.resolve = function(l, o) {
                return A.buildAbsoluteURL(o, l, { alwaysNormalize: true });
              }, v.parseMasterPlaylist = function(l, o) {
                var n = [], a = {}, E = false;
                p.lastIndex = 0;
                for (var m; (m = p.exec(l)) != null; )
                  if (m[1]) {
                    var S = new L.AttrList(m[1]), P = { attrs: S, bitrate: S.decimalInteger("AVERAGE-BANDWIDTH") || S.decimalInteger("BANDWIDTH"), name: S.NAME, url: v.resolve(m[2], o) }, b = S.decimalResolution("RESOLUTION");
                    b && (P.width = b.width, P.height = b.height), i((S.CODECS || "").split(/[ ,]+/).filter(function(B) {
                      return B;
                    }), P), P.videoCodec && P.videoCodec.indexOf("avc1") !== -1 && (P.videoCodec = v.convertAVC1ToAVCOTI(P.videoCodec)), n.push(P);
                  } else if (m[3]) {
                    var C = new L.AttrList(m[3]);
                    C["DATA-ID"] && (E = true, a[C["DATA-ID"]] = C);
                  }
                return { levels: n, sessionData: E ? a : null };
              }, v.parseMasterPlaylistMedia = function(l, o, n, a) {
                a === void 0 && (a = []);
                var E, m = [], S = 0;
                for (g.lastIndex = 0; (E = g.exec(l)) !== null; ) {
                  var P = new L.AttrList(E[1]);
                  if (P.TYPE === n) {
                    var b = { attrs: P, bitrate: 0, id: S++, groupId: P["GROUP-ID"], instreamId: P["INSTREAM-ID"], name: P.NAME || P.LANGUAGE || "", type: n, default: P.bool("DEFAULT"), autoselect: P.bool("AUTOSELECT"), forced: P.bool("FORCED"), lang: P.LANGUAGE, url: P.URI ? v.resolve(P.URI, o) : "" };
                    if (a.length) {
                      var C = v.findGroup(a, b.groupId) || a[0];
                      d(b, C, "audioCodec"), d(b, C, "textCodec");
                    }
                    m.push(b);
                  }
                }
                return m;
              }, v.parseLevelPlaylist = function(l, o, n, a, E) {
                var m = new O.LevelDetails(o), S = m.fragments, P = null, b = 0, C = 0, B = 0, F = 0, U = null, w = new M.Fragment(a, o), k, W, K, j = -1, G = false;
                for (T.lastIndex = 0, m.m3u8 = l; (k = T.exec(l)) !== null; ) {
                  G && (G = false, w = new M.Fragment(a, o), w.start = B, w.sn = b, w.cc = F, w.level = n, P && (w.initSegment = P, w.rawProgramDateTime = P.rawProgramDateTime));
                  var H = k[1];
                  if (H) {
                    w.duration = parseFloat(H);
                    var J = (" " + k[2]).slice(1);
                    w.title = J || null, w.tagList.push(J ? ["INF", H, J] : ["INF", H]);
                  } else if (k[3])
                    Object(R.isFiniteNumber)(w.duration) && (w.start = B, K && (w.levelkey = K), w.sn = b, w.level = n, w.cc = F, w.urlId = E, S.push(w), w.relurl = (" " + k[3]).slice(1), f(w, U), U = w, B += w.duration, b++, C = 0, G = true);
                  else if (k[4]) {
                    var Q = (" " + k[4]).slice(1);
                    U ? w.setByteRange(Q, U) : w.setByteRange(Q);
                  } else if (k[5])
                    w.rawProgramDateTime = (" " + k[5]).slice(1), w.tagList.push(["PROGRAM-DATE-TIME", w.rawProgramDateTime]), j === -1 && (j = S.length);
                  else {
                    if (k = k[0].match(x), !k) {
                      u.logger.warn("No matches on slow regex match for level playlist!");
                      continue;
                    }
                    for (W = 1; W < k.length && typeof k[W] == "undefined"; W++)
                      ;
                    var Z = (" " + k[W]).slice(1), $ = (" " + k[W + 1]).slice(1), q = k[W + 2] ? (" " + k[W + 2]).slice(1) : "";
                    switch (Z) {
                      case "PLAYLIST-TYPE":
                        m.type = $.toUpperCase();
                        break;
                      case "MEDIA-SEQUENCE":
                        b = m.startSN = parseInt($);
                        break;
                      case "SKIP": {
                        var se = new L.AttrList($), X = se.decimalInteger("SKIPPED-SEGMENTS");
                        if (Object(R.isFiniteNumber)(X)) {
                          m.skippedSegments = X;
                          for (var z = X; z--; )
                            S.unshift(null);
                          b += X;
                        }
                        var V = se.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                        V && (m.recentlyRemovedDateranges = V.split("	"));
                        break;
                      }
                      case "TARGETDURATION":
                        m.targetduration = parseFloat($);
                        break;
                      case "VERSION":
                        m.version = parseInt($);
                        break;
                      case "EXTM3U":
                        break;
                      case "ENDLIST":
                        m.live = false;
                        break;
                      case "#":
                        ($ || q) && w.tagList.push(q ? [$, q] : [$]);
                        break;
                      case "DIS":
                        F++;
                      case "GAP":
                        w.tagList.push([Z]);
                        break;
                      case "BITRATE":
                        w.tagList.push([Z, $]);
                        break;
                      case "DISCONTINUITY-SEQ":
                        F = parseInt($);
                        break;
                      case "KEY": {
                        var Y, te = new L.AttrList($), ae = te.enumeratedString("METHOD"), ne = te.URI, oe = te.hexadecimalInteger("IV"), ue = te.enumeratedString("KEYFORMATVERSIONS"), ie = te.enumeratedString("KEYID"), ee = (Y = te.enumeratedString("KEYFORMAT")) != null ? Y : "identity", re = ["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"];
                        if (re.indexOf(ee) > -1) {
                          u.logger.warn("Keyformat " + ee + " is not supported from the manifest");
                          continue;
                        } else if (ee !== "identity")
                          continue;
                        ae && (K = D.LevelKey.fromURL(o, ne), ne && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(ae) >= 0 && (K.method = ae, K.keyFormat = ee, ie && (K.keyID = ie), ue && (K.keyFormatVersions = ue), K.iv = oe));
                        break;
                      }
                      case "START": {
                        var ge = new L.AttrList($), he = ge.decimalFloatingPoint("TIME-OFFSET");
                        Object(R.isFiniteNumber)(he) && (m.startTimeOffset = he);
                        break;
                      }
                      case "MAP": {
                        var me = new L.AttrList($);
                        w.relurl = me.URI, me.BYTERANGE && w.setByteRange(me.BYTERANGE), w.level = n, w.sn = "initSegment", K && (w.levelkey = K), w.initSegment = null, P = w, G = true;
                        break;
                      }
                      case "SERVER-CONTROL": {
                        var de = new L.AttrList($);
                        m.canBlockReload = de.bool("CAN-BLOCK-RELOAD"), m.canSkipUntil = de.optionalFloat("CAN-SKIP-UNTIL", 0), m.canSkipDateRanges = m.canSkipUntil > 0 && de.bool("CAN-SKIP-DATERANGES"), m.partHoldBack = de.optionalFloat("PART-HOLD-BACK", 0), m.holdBack = de.optionalFloat("HOLD-BACK", 0);
                        break;
                      }
                      case "PART-INF": {
                        var Se = new L.AttrList($);
                        m.partTarget = Se.decimalFloatingPoint("PART-TARGET");
                        break;
                      }
                      case "PART": {
                        var fe = m.partList;
                        fe || (fe = m.partList = []);
                        var ve = C > 0 ? fe[fe.length - 1] : void 0, De = C++, pe = new M.Part(new L.AttrList($), w, o, De, ve);
                        fe.push(pe), w.duration += pe.duration;
                        break;
                      }
                      case "PRELOAD-HINT": {
                        var Ee = new L.AttrList($);
                        m.preloadHint = Ee;
                        break;
                      }
                      case "RENDITION-REPORT": {
                        var Re = new L.AttrList($);
                        m.renditionReports = m.renditionReports || [], m.renditionReports.push(Re);
                        break;
                      }
                      default:
                        u.logger.warn("line parsed but not handled: " + k);
                        break;
                    }
                  }
                }
                U && !U.relurl ? (S.pop(), B -= U.duration, m.partList && (m.fragmentHint = U)) : m.partList && (f(w, U), w.cc = F, m.fragmentHint = w);
                var ye = S.length, ce = S[0], _e = S[ye - 1];
                if (B += m.skippedSegments * m.targetduration, B > 0 && ye && _e) {
                  m.averagetargetduration = B / ye;
                  var Pe = _e.sn;
                  m.endSN = Pe !== "initSegment" ? Pe : 0, ce && (m.startCC = ce.cc, ce.initSegment || m.fragments.every(function(Le) {
                    return Le.relurl && e(Le.relurl);
                  }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), w = new M.Fragment(a, o), w.relurl = _e.relurl, w.level = n, w.sn = "initSegment", ce.initSegment = w, m.needSidxRanges = true));
                } else
                  m.endSN = 0, m.startCC = 0;
                return m.fragmentHint && (B += m.fragmentHint.duration), m.totalduration = B, m.endCC = F, j > 0 && s(S, j), m;
              }, v;
            }();
            function i(v, h) {
              ["video", "audio", "text"].forEach(function(l) {
                var o = v.filter(function(a) {
                  return Object(y.isCodecType)(a, l);
                });
                if (o.length) {
                  var n = o.filter(function(a) {
                    return a.lastIndexOf("avc1", 0) === 0 || a.lastIndexOf("mp4a", 0) === 0;
                  });
                  h[l + "Codec"] = n.length > 0 ? n[0] : o[0], v = v.filter(function(a) {
                    return o.indexOf(a) === -1;
                  });
                }
              }), h.unknownCodecs = v;
            }
            function d(v, h, l) {
              var o = h[l];
              o && (v[l] = o);
            }
            function s(v, h) {
              for (var l = v[h], o = h; o--; ) {
                var n = v[o];
                if (!n)
                  return;
                n.programDateTime = l.programDateTime - n.duration * 1e3, l = n;
              }
            }
            function f(v, h) {
              v.rawProgramDateTime ? v.programDateTime = Date.parse(v.rawProgramDateTime) : h != null && h.programDateTime && (v.programDateTime = h.endProgramDateTime), Object(R.isFiniteNumber)(v.programDateTime) || (v.programDateTime = null, v.rawProgramDateTime = null);
            }
          }, "./src/loader/playlist-loader.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/polyfills/number.ts"), A = c("./src/events.ts"), _ = c("./src/errors.ts"), M = c("./src/utils/logger.ts"), O = c("./src/utils/mp4-tools.ts"), D = c("./src/loader/m3u8-parser.ts"), L = c("./src/types/loader.ts"), u = c("./src/utils/attr-list.ts");
            function y(T) {
              var x = T.type;
              switch (x) {
                case L.PlaylistContextType.AUDIO_TRACK:
                  return L.PlaylistLevelType.AUDIO;
                case L.PlaylistContextType.SUBTITLE_TRACK:
                  return L.PlaylistLevelType.SUBTITLE;
                default:
                  return L.PlaylistLevelType.MAIN;
              }
            }
            function p(T, x) {
              var r = T.url;
              return (r === void 0 || r.indexOf("data:") === 0) && (r = x.url), r;
            }
            var g = function() {
              function T(r) {
                this.hls = void 0, this.loaders = Object.create(null), this.hls = r, this.registerListeners();
              }
              var x = T.prototype;
              return x.registerListeners = function() {
                var e = this.hls;
                e.on(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(A.Events.LEVEL_LOADING, this.onLevelLoading, this), e.on(A.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(A.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
              }, x.unregisterListeners = function() {
                var e = this.hls;
                e.off(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(A.Events.LEVEL_LOADING, this.onLevelLoading, this), e.off(A.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(A.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
              }, x.createInternalLoader = function(e) {
                var t = this.hls.config, i = t.pLoader, d = t.loader, s = i || d, f = new s(t);
                return e.loader = f, this.loaders[e.type] = f, f;
              }, x.getInternalLoader = function(e) {
                return this.loaders[e.type];
              }, x.resetInternalLoader = function(e) {
                this.loaders[e] && delete this.loaders[e];
              }, x.destroyInternalLoaders = function() {
                for (var e in this.loaders) {
                  var t = this.loaders[e];
                  t && t.destroy(), this.resetInternalLoader(e);
                }
              }, x.destroy = function() {
                this.unregisterListeners(), this.destroyInternalLoaders();
              }, x.onManifestLoading = function(e, t) {
                var i = t.url;
                this.load({ id: null, groupId: null, level: 0, responseType: "text", type: L.PlaylistContextType.MANIFEST, url: i, deliveryDirectives: null });
              }, x.onLevelLoading = function(e, t) {
                var i = t.id, d = t.level, s = t.url, f = t.deliveryDirectives;
                this.load({ id: i, groupId: null, level: d, responseType: "text", type: L.PlaylistContextType.LEVEL, url: s, deliveryDirectives: f });
              }, x.onAudioTrackLoading = function(e, t) {
                var i = t.id, d = t.groupId, s = t.url, f = t.deliveryDirectives;
                this.load({ id: i, groupId: d, level: null, responseType: "text", type: L.PlaylistContextType.AUDIO_TRACK, url: s, deliveryDirectives: f });
              }, x.onSubtitleTrackLoading = function(e, t) {
                var i = t.id, d = t.groupId, s = t.url, f = t.deliveryDirectives;
                this.load({ id: i, groupId: d, level: null, responseType: "text", type: L.PlaylistContextType.SUBTITLE_TRACK, url: s, deliveryDirectives: f });
              }, x.load = function(e) {
                var t, i = this.hls.config, d = this.getInternalLoader(e);
                if (d) {
                  var s = d.context;
                  if (s && s.url === e.url) {
                    M.logger.trace("[playlist-loader]: playlist request ongoing");
                    return;
                  }
                  M.logger.log("[playlist-loader]: aborting previous loader for type: " + e.type), d.abort();
                }
                var f, v, h, l;
                switch (e.type) {
                  case L.PlaylistContextType.MANIFEST:
                    f = i.manifestLoadingMaxRetry, v = i.manifestLoadingTimeOut, h = i.manifestLoadingRetryDelay, l = i.manifestLoadingMaxRetryTimeout;
                    break;
                  case L.PlaylistContextType.LEVEL:
                  case L.PlaylistContextType.AUDIO_TRACK:
                  case L.PlaylistContextType.SUBTITLE_TRACK:
                    f = 0, v = i.levelLoadingTimeOut;
                    break;
                  default:
                    f = i.levelLoadingMaxRetry, v = i.levelLoadingTimeOut, h = i.levelLoadingRetryDelay, l = i.levelLoadingMaxRetryTimeout;
                    break;
                }
                if (d = this.createInternalLoader(e), (t = e.deliveryDirectives) !== null && t !== void 0 && t.part) {
                  var o;
                  if (e.type === L.PlaylistContextType.LEVEL && e.level !== null ? o = this.hls.levels[e.level].details : e.type === L.PlaylistContextType.AUDIO_TRACK && e.id !== null ? o = this.hls.audioTracks[e.id].details : e.type === L.PlaylistContextType.SUBTITLE_TRACK && e.id !== null && (o = this.hls.subtitleTracks[e.id].details), o) {
                    var n = o.partTarget, a = o.targetduration;
                    n && a && (v = Math.min(Math.max(n * 3, a * 0.8) * 1e3, v));
                  }
                }
                var E = { timeout: v, maxRetry: f, retryDelay: h, maxRetryDelay: l, highWaterMark: 0 }, m = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
                d.load(e, E, m);
              }, x.loadsuccess = function(e, t, i, d) {
                if (d === void 0 && (d = null), i.isSidxRequest) {
                  this.handleSidxRequest(e, i), this.handlePlaylistLoaded(e, t, i, d);
                  return;
                }
                this.resetInternalLoader(i.type);
                var s = e.data;
                if (s.indexOf("#EXTM3U") !== 0) {
                  this.handleManifestParsingError(e, i, "no EXTM3U delimiter", d);
                  return;
                }
                t.parsing.start = performance.now(), s.indexOf("#EXTINF:") > 0 || s.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(e, t, i, d) : this.handleMasterPlaylist(e, t, i, d);
              }, x.loaderror = function(e, t, i) {
                i === void 0 && (i = null), this.handleNetworkError(t, i, false, e);
              }, x.loadtimeout = function(e, t, i) {
                i === void 0 && (i = null), this.handleNetworkError(t, i, true);
              }, x.handleMasterPlaylist = function(e, t, i, d) {
                var s = this.hls, f = e.data, v = p(e, i), h = D.default.parseMasterPlaylist(f, v), l = h.levels, o = h.sessionData;
                if (!l.length) {
                  this.handleManifestParsingError(e, i, "no level found in manifest", d);
                  return;
                }
                var n = l.map(function(b) {
                  return { id: b.attrs.AUDIO, audioCodec: b.audioCodec };
                }), a = l.map(function(b) {
                  return { id: b.attrs.SUBTITLES, textCodec: b.textCodec };
                }), E = D.default.parseMasterPlaylistMedia(f, v, "AUDIO", n), m = D.default.parseMasterPlaylistMedia(f, v, "SUBTITLES", a), S = D.default.parseMasterPlaylistMedia(f, v, "CLOSED-CAPTIONS");
                if (E.length) {
                  var P = E.some(function(b) {
                    return !b.url;
                  });
                  !P && l[0].audioCodec && !l[0].attrs.AUDIO && (M.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), E.unshift({ type: "main", name: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new u.AttrList({}), bitrate: 0, url: "" }));
                }
                s.trigger(A.Events.MANIFEST_LOADED, { levels: l, audioTracks: E, subtitles: m, captions: S, url: v, stats: t, networkDetails: d, sessionData: o });
              }, x.handleTrackOrLevelPlaylist = function(e, t, i, d) {
                var s = this.hls, f = i.id, v = i.level, h = i.type, l = p(e, i), o = Object(R.isFiniteNumber)(f) ? f : 0, n = Object(R.isFiniteNumber)(v) ? v : o, a = y(i), E = D.default.parseLevelPlaylist(e.data, l, n, a, o);
                if (!E.fragments.length) {
                  s.trigger(A.Events.ERROR, { type: _.ErrorTypes.NETWORK_ERROR, details: _.ErrorDetails.LEVEL_EMPTY_ERROR, fatal: false, url: l, reason: "no fragments found in level", level: typeof i.level == "number" ? i.level : void 0 });
                  return;
                }
                if (h === L.PlaylistContextType.MANIFEST) {
                  var m = { attrs: new u.AttrList({}), bitrate: 0, details: E, name: "", url: l };
                  s.trigger(A.Events.MANIFEST_LOADED, { levels: [m], audioTracks: [], url: l, stats: t, networkDetails: d, sessionData: null });
                }
                if (t.parsing.end = performance.now(), E.needSidxRanges) {
                  var S, P = (S = E.fragments[0].initSegment) === null || S === void 0 ? void 0 : S.url;
                  this.load({ url: P, isSidxRequest: true, type: h, level: v, levelDetails: E, id: f, groupId: null, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer", deliveryDirectives: null });
                  return;
                }
                i.levelDetails = E, this.handlePlaylistLoaded(e, t, i, d);
              }, x.handleSidxRequest = function(e, t) {
                var i = Object(O.parseSegmentIndex)(new Uint8Array(e.data));
                if (!!i) {
                  var d = i.references, s = t.levelDetails;
                  d.forEach(function(f, v) {
                    var h = f.info, l = s.fragments[v];
                    l.byteRange.length === 0 && l.setByteRange(String(1 + h.end - h.start) + "@" + String(h.start)), l.initSegment && l.initSegment.setByteRange(String(i.moovEndOffset) + "@0");
                  });
                }
              }, x.handleManifestParsingError = function(e, t, i, d) {
                this.hls.trigger(A.Events.ERROR, { type: _.ErrorTypes.NETWORK_ERROR, details: _.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: t.type === L.PlaylistContextType.MANIFEST, url: e.url, reason: i, response: e, context: t, networkDetails: d });
              }, x.handleNetworkError = function(e, t, i, d) {
                i === void 0 && (i = false), M.logger.warn("[playlist-loader]: A network " + (i ? "timeout" : "error") + " occurred while loading " + e.type + " level: " + e.level + " id: " + e.id + ' group-id: "' + e.groupId + '"');
                var s = _.ErrorDetails.UNKNOWN, f = false, v = this.getInternalLoader(e);
                switch (e.type) {
                  case L.PlaylistContextType.MANIFEST:
                    s = i ? _.ErrorDetails.MANIFEST_LOAD_TIMEOUT : _.ErrorDetails.MANIFEST_LOAD_ERROR, f = true;
                    break;
                  case L.PlaylistContextType.LEVEL:
                    s = i ? _.ErrorDetails.LEVEL_LOAD_TIMEOUT : _.ErrorDetails.LEVEL_LOAD_ERROR, f = false;
                    break;
                  case L.PlaylistContextType.AUDIO_TRACK:
                    s = i ? _.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : _.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, f = false;
                    break;
                  case L.PlaylistContextType.SUBTITLE_TRACK:
                    s = i ? _.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : _.ErrorDetails.SUBTITLE_LOAD_ERROR, f = false;
                    break;
                }
                v && this.resetInternalLoader(e.type);
                var h = { type: _.ErrorTypes.NETWORK_ERROR, details: s, fatal: f, url: e.url, loader: v, context: e, networkDetails: t };
                d && (h.response = d), this.hls.trigger(A.Events.ERROR, h);
              }, x.handlePlaylistLoaded = function(e, t, i, d) {
                var s = i.type, f = i.level, v = i.id, h = i.groupId, l = i.loader, o = i.levelDetails, n = i.deliveryDirectives;
                if (!(o != null && o.targetduration)) {
                  this.handleManifestParsingError(e, i, "invalid target duration", d);
                  return;
                }
                if (!!l)
                  switch (o.live && (l.getCacheAge && (o.ageHeader = l.getCacheAge() || 0), (!l.getCacheAge || isNaN(o.ageHeader)) && (o.ageHeader = 0)), s) {
                    case L.PlaylistContextType.MANIFEST:
                    case L.PlaylistContextType.LEVEL:
                      this.hls.trigger(A.Events.LEVEL_LOADED, { details: o, level: f || 0, id: v || 0, stats: t, networkDetails: d, deliveryDirectives: n });
                      break;
                    case L.PlaylistContextType.AUDIO_TRACK:
                      this.hls.trigger(A.Events.AUDIO_TRACK_LOADED, { details: o, id: v || 0, groupId: h || "", stats: t, networkDetails: d, deliveryDirectives: n });
                      break;
                    case L.PlaylistContextType.SUBTITLE_TRACK:
                      this.hls.trigger(A.Events.SUBTITLE_TRACK_LOADED, { details: o, id: v || 0, groupId: h || "", stats: t, networkDetails: d, deliveryDirectives: n });
                      break;
                  }
              }, T;
            }();
            I.default = g;
          }, "./src/polyfills/number.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "isFiniteNumber", function() {
              return R;
            }), c.d(I, "MAX_SAFE_INTEGER", function() {
              return A;
            });
            var R = Number.isFinite || function(_) {
              return typeof _ == "number" && isFinite(_);
            }, A = Number.MAX_SAFE_INTEGER || 9007199254740991;
          }, "./src/remux/aac-helper.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = function() {
              function A() {
              }
              return A.getSilentFrame = function(M, O) {
                switch (M) {
                  case "mp4a.40.2":
                    if (O === 1)
                      return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (O === 2)
                      return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (O === 3)
                      return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (O === 4)
                      return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (O === 5)
                      return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (O === 6)
                      return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    break;
                  default:
                    if (O === 1)
                      return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (O === 2)
                      return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (O === 3)
                      return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    break;
                }
              }, A;
            }();
            I.default = R;
          }, "./src/remux/mp4-generator.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = Math.pow(2, 32) - 1, A = function() {
              function _() {
              }
              return _.init = function() {
                _.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] };
                var O;
                for (O in _.types)
                  _.types.hasOwnProperty(O) && (_.types[O] = [O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2), O.charCodeAt(3)]);
                var D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                _.HDLR_TYPES = { video: D, audio: L };
                var u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), y = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                _.STTS = _.STSC = _.STCO = y, _.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), _.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), _.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), _.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var p = new Uint8Array([105, 115, 111, 109]), g = new Uint8Array([97, 118, 99, 49]), T = new Uint8Array([0, 0, 0, 1]);
                _.FTYP = _.box(_.types.ftyp, p, T, p, g), _.DINF = _.box(_.types.dinf, _.box(_.types.dref, u));
              }, _.box = function(O) {
                for (var D = 8, L = arguments.length, u = new Array(L > 1 ? L - 1 : 0), y = 1; y < L; y++)
                  u[y - 1] = arguments[y];
                for (var p = u.length, g = p; p--; )
                  D += u[p].byteLength;
                var T = new Uint8Array(D);
                for (T[0] = D >> 24 & 255, T[1] = D >> 16 & 255, T[2] = D >> 8 & 255, T[3] = D & 255, T.set(O, 4), p = 0, D = 8; p < g; p++)
                  T.set(u[p], D), D += u[p].byteLength;
                return T;
              }, _.hdlr = function(O) {
                return _.box(_.types.hdlr, _.HDLR_TYPES[O]);
              }, _.mdat = function(O) {
                return _.box(_.types.mdat, O);
              }, _.mdhd = function(O, D) {
                D *= O;
                var L = Math.floor(D / (R + 1)), u = Math.floor(D % (R + 1));
                return _.box(_.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, O >> 24 & 255, O >> 16 & 255, O >> 8 & 255, O & 255, L >> 24, L >> 16 & 255, L >> 8 & 255, L & 255, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255, 85, 196, 0, 0]));
              }, _.mdia = function(O) {
                return _.box(_.types.mdia, _.mdhd(O.timescale, O.duration), _.hdlr(O.type), _.minf(O));
              }, _.mfhd = function(O) {
                return _.box(_.types.mfhd, new Uint8Array([0, 0, 0, 0, O >> 24, O >> 16 & 255, O >> 8 & 255, O & 255]));
              }, _.minf = function(O) {
                return O.type === "audio" ? _.box(_.types.minf, _.box(_.types.smhd, _.SMHD), _.DINF, _.stbl(O)) : _.box(_.types.minf, _.box(_.types.vmhd, _.VMHD), _.DINF, _.stbl(O));
              }, _.moof = function(O, D, L) {
                return _.box(_.types.moof, _.mfhd(O), _.traf(L, D));
              }, _.moov = function(O) {
                for (var D = O.length, L = []; D--; )
                  L[D] = _.trak(O[D]);
                return _.box.apply(null, [_.types.moov, _.mvhd(O[0].timescale, O[0].duration)].concat(L).concat(_.mvex(O)));
              }, _.mvex = function(O) {
                for (var D = O.length, L = []; D--; )
                  L[D] = _.trex(O[D]);
                return _.box.apply(null, [_.types.mvex].concat(L));
              }, _.mvhd = function(O, D) {
                D *= O;
                var L = Math.floor(D / (R + 1)), u = Math.floor(D % (R + 1)), y = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, O >> 24 & 255, O >> 16 & 255, O >> 8 & 255, O & 255, L >> 24, L >> 16 & 255, L >> 8 & 255, L & 255, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return _.box(_.types.mvhd, y);
              }, _.sdtp = function(O) {
                var D = O.samples || [], L = new Uint8Array(4 + D.length), u, y;
                for (u = 0; u < D.length; u++)
                  y = D[u].flags, L[u + 4] = y.dependsOn << 4 | y.isDependedOn << 2 | y.hasRedundancy;
                return _.box(_.types.sdtp, L);
              }, _.stbl = function(O) {
                return _.box(_.types.stbl, _.stsd(O), _.box(_.types.stts, _.STTS), _.box(_.types.stsc, _.STSC), _.box(_.types.stsz, _.STSZ), _.box(_.types.stco, _.STCO));
              }, _.avc1 = function(O) {
                var D = [], L = [], u, y, p;
                for (u = 0; u < O.sps.length; u++)
                  y = O.sps[u], p = y.byteLength, D.push(p >>> 8 & 255), D.push(p & 255), D = D.concat(Array.prototype.slice.call(y));
                for (u = 0; u < O.pps.length; u++)
                  y = O.pps[u], p = y.byteLength, L.push(p >>> 8 & 255), L.push(p & 255), L = L.concat(Array.prototype.slice.call(y));
                var g = _.box(_.types.avcC, new Uint8Array([1, D[3], D[4], D[5], 252 | 3, 224 | O.sps.length].concat(D).concat([O.pps.length]).concat(L))), T = O.width, x = O.height, r = O.pixelRatio[0], e = O.pixelRatio[1];
                return _.box(_.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, T >> 8 & 255, T & 255, x >> 8 & 255, x & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), g, _.box(_.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), _.box(_.types.pasp, new Uint8Array([r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255, e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255])));
              }, _.esds = function(O) {
                var D = O.config.length;
                return new Uint8Array([0, 0, 0, 0, 3, 23 + D, 0, 1, 0, 4, 15 + D, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([D]).concat(O.config).concat([6, 1, 2]));
              }, _.mp4a = function(O) {
                var D = O.samplerate;
                return _.box(_.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, O.channelCount, 0, 16, 0, 0, 0, 0, D >> 8 & 255, D & 255, 0, 0]), _.box(_.types.esds, _.esds(O)));
              }, _.mp3 = function(O) {
                var D = O.samplerate;
                return _.box(_.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, O.channelCount, 0, 16, 0, 0, 0, 0, D >> 8 & 255, D & 255, 0, 0]));
              }, _.stsd = function(O) {
                return O.type === "audio" ? !O.isAAC && O.codec === "mp3" ? _.box(_.types.stsd, _.STSD, _.mp3(O)) : _.box(_.types.stsd, _.STSD, _.mp4a(O)) : _.box(_.types.stsd, _.STSD, _.avc1(O));
              }, _.tkhd = function(O) {
                var D = O.id, L = O.duration * O.timescale, u = O.width, y = O.height, p = Math.floor(L / (R + 1)), g = Math.floor(L % (R + 1));
                return _.box(_.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, D >> 24 & 255, D >> 16 & 255, D >> 8 & 255, D & 255, 0, 0, 0, 0, p >> 24, p >> 16 & 255, p >> 8 & 255, p & 255, g >> 24, g >> 16 & 255, g >> 8 & 255, g & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, u >> 8 & 255, u & 255, 0, 0, y >> 8 & 255, y & 255, 0, 0]));
              }, _.traf = function(O, D) {
                var L = _.sdtp(O), u = O.id, y = Math.floor(D / (R + 1)), p = Math.floor(D % (R + 1));
                return _.box(_.types.traf, _.box(_.types.tfhd, new Uint8Array([0, 0, 0, 0, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255])), _.box(_.types.tfdt, new Uint8Array([1, 0, 0, 0, y >> 24, y >> 16 & 255, y >> 8 & 255, y & 255, p >> 24, p >> 16 & 255, p >> 8 & 255, p & 255])), _.trun(O, L.length + 16 + 20 + 8 + 16 + 8 + 8), L);
              }, _.trak = function(O) {
                return O.duration = O.duration || 4294967295, _.box(_.types.trak, _.tkhd(O), _.mdia(O));
              }, _.trex = function(O) {
                var D = O.id;
                return _.box(_.types.trex, new Uint8Array([0, 0, 0, 0, D >> 24, D >> 16 & 255, D >> 8 & 255, D & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
              }, _.trun = function(O, D) {
                var L = O.samples || [], u = L.length, y = 12 + 16 * u, p = new Uint8Array(y), g, T, x, r, e, t;
                for (D += 8 + y, p.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u & 255, D >>> 24 & 255, D >>> 16 & 255, D >>> 8 & 255, D & 255], 0), g = 0; g < u; g++)
                  T = L[g], x = T.duration, r = T.size, e = T.flags, t = T.cts, p.set([x >>> 24 & 255, x >>> 16 & 255, x >>> 8 & 255, x & 255, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r & 255, e.isLeading << 2 | e.dependsOn, e.isDependedOn << 6 | e.hasRedundancy << 4 | e.paddingValue << 1 | e.isNonSync, e.degradPrio & 240 << 8, e.degradPrio & 15, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255], 12 + 16 * g);
                return _.box(_.types.trun, p);
              }, _.initSegment = function(O) {
                _.types || _.init();
                var D = _.moov(O), L = new Uint8Array(_.FTYP.byteLength + D.byteLength);
                return L.set(_.FTYP), L.set(D, _.FTYP.byteLength), L;
              }, _;
            }();
            A.types = void 0, A.HDLR_TYPES = void 0, A.STTS = void 0, A.STSC = void 0, A.STCO = void 0, A.STSZ = void 0, A.VMHD = void 0, A.SMHD = void 0, A.STSD = void 0, A.FTYP = void 0, A.DINF = void 0, I.default = A;
          }, "./src/remux/mp4-remuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return t;
            }), c.d(I, "normalizePts", function() {
              return i;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/remux/aac-helper.ts"), _ = c("./src/remux/mp4-generator.ts"), M = c("./src/events.ts"), O = c("./src/errors.ts"), D = c("./src/utils/logger.ts"), L = c("./src/types/loader.ts"), u = c("./src/utils/timescale-conversion.ts");
            function y() {
              return y = Object.assign || function(v) {
                for (var h = 1; h < arguments.length; h++) {
                  var l = arguments[h];
                  for (var o in l)
                    Object.prototype.hasOwnProperty.call(l, o) && (v[o] = l[o]);
                }
                return v;
              }, y.apply(this, arguments);
            }
            var p = 10 * 1e3, g = 1024, T = 1152, x = null, r = null, e = false, t = function() {
              function v(l, o, n, a) {
                if (a === void 0 && (a = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.observer = l, this.config = o, this.typeSupported = n, this.ISGenerated = false, x === null) {
                  var E = navigator.userAgent || "", m = E.match(/Chrome\/(\d+)/i);
                  x = m ? parseInt(m[1]) : 0;
                }
                if (r === null) {
                  var S = navigator.userAgent.match(/Safari\/(\d+)/i);
                  r = S ? parseInt(S[1]) : 0;
                }
                e = !!x && x < 75 || !!r && r < 600;
              }
              var h = v.prototype;
              return h.destroy = function() {
              }, h.resetTimeStamp = function(o) {
                D.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = o;
              }, h.resetNextTimestamp = function() {
                D.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
              }, h.resetInitSegment = function() {
                D.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false;
              }, h.getVideoStartPts = function(o) {
                var n = false, a = o.reduce(function(E, m) {
                  var S = m.pts - E;
                  return S < -4294967296 ? (n = true, i(E, m.pts)) : S > 0 ? E : m.pts;
                }, o[0].pts);
                return n && D.logger.debug("PTS rollover detected"), a;
              }, h.remux = function(o, n, a, E, m, S, P, b) {
                var C, B, F, U, w, k, W = m, K = m, j = o.pid > -1, G = n.pid > -1, H = n.samples.length, J = o.samples.length > 0, Q = H > 1, Z = (!j || J) && (!G || Q) || this.ISGenerated || P;
                if (Z) {
                  this.ISGenerated || (F = this.generateIS(o, n, m));
                  var $ = this.isVideoContiguous, q = -1;
                  if (Q && (q = d(n.samples), !$ && this.config.forceKeyFrameOnDiscontinuity))
                    if (k = true, q > 0) {
                      D.logger.warn("[mp4-remuxer]: Dropped " + q + " out of " + H + " video samples due to a missing keyframe");
                      var se = this.getVideoStartPts(n.samples);
                      n.samples = n.samples.slice(q), n.dropped += q, K += (n.samples[0].pts - se) / (n.timescale || 9e4);
                    } else
                      q === -1 && (D.logger.warn("[mp4-remuxer]: No keyframe found out of " + H + " video samples"), k = false);
                  if (this.ISGenerated) {
                    if (J && Q) {
                      var X = this.getVideoStartPts(n.samples), z = i(o.samples[0].pts, X) - X, V = z / n.inputTimeScale;
                      W += Math.max(0, V), K += Math.max(0, -V);
                    }
                    if (J) {
                      if (o.samplerate || (D.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), F = this.generateIS(o, n, m)), B = this.remuxAudio(o, W, this.isAudioContiguous, S, G || Q || b === L.PlaylistLevelType.AUDIO ? K : void 0), Q) {
                        var Y = B ? B.endPTS - B.startPTS : 0;
                        n.inputTimeScale || (D.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), F = this.generateIS(o, n, m)), C = this.remuxVideo(n, K, $, Y);
                      }
                    } else
                      Q && (C = this.remuxVideo(n, K, $, 0));
                    C && (C.firstKeyFrame = q, C.independent = q !== -1);
                  }
                }
                return this.ISGenerated && (a.samples.length && (w = this.remuxID3(a, m)), E.samples.length && (U = this.remuxText(E, m))), { audio: B, video: C, initSegment: F, independent: k, text: U, id3: w };
              }, h.generateIS = function(o, n, a) {
                var E = o.samples, m = n.samples, S = this.typeSupported, P = {}, b = !Object(R.isFiniteNumber)(this._initPTS), C = "audio/mp4", B, F, U;
                if (b && (B = F = 1 / 0), o.config && E.length && (o.timescale = o.samplerate, o.isAAC || (S.mpeg ? (C = "audio/mpeg", o.codec = "") : S.mp3 && (o.codec = "mp3")), P.audio = { id: "audio", container: C, codec: o.codec, initSegment: !o.isAAC && S.mpeg ? new Uint8Array(0) : _.default.initSegment([o]), metadata: { channelCount: o.channelCount } }, b && (U = o.inputTimeScale, B = F = E[0].pts - Math.round(U * a))), n.sps && n.pps && m.length && (n.timescale = n.inputTimeScale, P.video = { id: "main", container: "video/mp4", codec: n.codec, initSegment: _.default.initSegment([n]), metadata: { width: n.width, height: n.height } }, b)) {
                  U = n.inputTimeScale;
                  var w = this.getVideoStartPts(m), k = Math.round(U * a);
                  F = Math.min(F, i(m[0].dts, w) - k), B = Math.min(B, w - k);
                }
                if (Object.keys(P).length)
                  return this.ISGenerated = true, b && (this._initPTS = B, this._initDTS = F), { tracks: P, initPTS: B, timescale: U };
              }, h.remuxVideo = function(o, n, a, E) {
                var m = o.inputTimeScale, S = o.samples, P = [], b = S.length, C = this._initPTS, B = this.nextAvcDts, F = 8, U, w, k, W = Number.POSITIVE_INFINITY, K = Number.NEGATIVE_INFINITY, j = 0, G = false;
                if (!a || B === null) {
                  var H = n * m, J = S[0].pts - i(S[0].dts, S[0].pts);
                  B = H - J;
                }
                for (var Q = 0; Q < b; Q++) {
                  var Z = S[Q];
                  if (Z.pts = i(Z.pts - C, B), Z.dts = i(Z.dts - C, B), Z.dts > Z.pts) {
                    var $ = 9e4 * 0.2;
                    j = Math.max(Math.min(j, Z.pts - Z.dts), -1 * $);
                  }
                  Z.dts < S[Q > 0 ? Q - 1 : Q].dts && (G = true);
                }
                G && S.sort(function(ke, Ye) {
                  var pt = ke.dts - Ye.dts, Et = ke.pts - Ye.pts;
                  return pt || Et;
                }), w = S[0].dts, k = S[S.length - 1].dts;
                var q = Math.round((k - w) / (b - 1));
                if (j < 0) {
                  if (j < q * -2) {
                    D.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(u.toMsFromMpegTsClock)(-q, true) + " ms");
                    for (var se = j, X = 0; X < b; X++)
                      S[X].dts = se = Math.max(se, S[X].pts - q), S[X].pts = Math.max(se, S[X].pts);
                  } else {
                    D.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(u.toMsFromMpegTsClock)(j, true) + " ms to overcome this issue");
                    for (var z = 0; z < b; z++)
                      S[z].dts = S[z].dts + j;
                  }
                  w = S[0].dts;
                }
                if (a) {
                  var V = w - B, Y = V > q, te = V < -1;
                  if (Y || te) {
                    Y ? D.logger.warn("AVC: " + Object(u.toMsFromMpegTsClock)(V, true) + " ms (" + V + "dts) hole between fragments detected, filling it") : D.logger.warn("AVC: " + Object(u.toMsFromMpegTsClock)(-V, true) + " ms (" + V + "dts) overlapping between fragments detected"), w = B;
                    var ae = S[0].pts - V;
                    S[0].dts = w, S[0].pts = ae, D.logger.log("Video: First PTS/DTS adjusted: " + Object(u.toMsFromMpegTsClock)(ae, true) + "/" + Object(u.toMsFromMpegTsClock)(w, true) + ", delta: " + Object(u.toMsFromMpegTsClock)(V, true) + " ms");
                  }
                }
                e && (w = Math.max(0, w));
                for (var ne = 0, oe = 0, ue = 0; ue < b; ue++) {
                  for (var ie = S[ue], ee = ie.units, re = ee.length, ge = 0, he = 0; he < re; he++)
                    ge += ee[he].data.length;
                  oe += ge, ne += re, ie.length = ge, ie.dts = Math.max(ie.dts, w), ie.pts = Math.max(ie.pts, ie.dts, 0), W = Math.min(ie.pts, W), K = Math.max(ie.pts, K);
                }
                k = S[b - 1].dts;
                var me = oe + 4 * ne + 8, de;
                try {
                  de = new Uint8Array(me);
                } catch {
                  this.observer.emit(M.Events.ERROR, M.Events.ERROR, { type: O.ErrorTypes.MUX_ERROR, details: O.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: me, reason: "fail allocating video mdat " + me });
                  return;
                }
                var Se = new DataView(de.buffer);
                Se.setUint32(0, me), de.set(_.default.types.mdat, 4);
                for (var fe = 0; fe < b; fe++) {
                  for (var ve = S[fe], De = ve.units, pe = 0, Ee = 0, Re = De.length; Ee < Re; Ee++) {
                    var ye = De[Ee], ce = ye.data, _e = ye.data.byteLength;
                    Se.setUint32(F, _e), F += 4, de.set(ce, F), F += _e, pe += 4 + _e;
                  }
                  if (fe < b - 1)
                    U = S[fe + 1].dts - ve.dts;
                  else {
                    var Pe = this.config, Le = ve.dts - S[fe > 0 ? fe - 1 : fe].dts;
                    if (Pe.stretchShortVideoTrack && this.nextAudioPts !== null) {
                      var ct = Math.floor(Pe.maxBufferHole * m), we = (E ? W + E * m : this.nextAudioPts) - ve.pts;
                      we > ct ? (U = we - Le, U < 0 && (U = Le), D.logger.log("[mp4-remuxer]: It is approximately " + we / 90 + " ms to the next segment; using duration " + U / 90 + " ms for the last video frame.")) : U = Le;
                    } else
                      U = Le;
                  }
                  var ht = Math.round(ve.pts - ve.dts);
                  P.push(new s(ve.key, U, pe, ht));
                }
                if (P.length && x && x < 70) {
                  var Ve = P[0].flags;
                  Ve.dependsOn = 2, Ve.isNonSync = 0;
                }
                console.assert(U !== void 0, "mp4SampleDuration must be computed"), this.nextAvcDts = B = k + U, this.isVideoContiguous = true;
                var vt = _.default.moof(o.sequenceNumber++, w, y({}, o, { samples: P })), gt = "video", mt = { data1: vt, data2: de, startPTS: W / m, endPTS: (K + U) / m, startDTS: w / m, endDTS: B / m, type: gt, hasAudio: false, hasVideo: true, nb: P.length, dropped: o.dropped };
                return o.samples = [], o.dropped = 0, console.assert(de.length, "MDAT length must not be zero"), mt;
              }, h.remuxAudio = function(o, n, a, E, m) {
                var S = o.inputTimeScale, P = o.samplerate ? o.samplerate : S, b = S / P, C = o.isAAC ? g : T, B = C * b, F = this._initPTS, U = !o.isAAC && this.typeSupported.mpeg, w = [], k = o.samples, W = U ? 0 : 8, K = this.nextAudioPts || -1, j = n * S;
                if (this.isAudioContiguous = a = a || k.length && K > 0 && (E && Math.abs(j - K) < 9e3 || Math.abs(i(k[0].pts - F, j) - K) < 20 * B), k.forEach(function(ce) {
                  ce.pts = i(ce.pts - F, j);
                }), !a || K < 0) {
                  if (k = k.filter(function(ce) {
                    return ce.pts >= 0;
                  }), !k.length)
                    return;
                  m === 0 ? K = 0 : E ? K = Math.max(0, j) : K = k[0].pts;
                }
                if (o.isAAC)
                  for (var G = m !== void 0, H = this.config.maxAudioFramesDrift, J = 0, Q = K; J < k.length; J++) {
                    var Z = k[J], $ = Z.pts, q = $ - Q, se = Math.abs(1e3 * q / S);
                    if (q <= -H * B && G)
                      J === 0 && (D.logger.warn("Audio frame @ " + ($ / S).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * q / S) + " ms."), this.nextAudioPts = K = Q = $);
                    else if (q >= H * B && se < p && G) {
                      var X = Math.round(q / B);
                      Q = $ - X * B, Q < 0 && (X--, Q += B), J === 0 && (this.nextAudioPts = K = Q), D.logger.warn("[mp4-remuxer]: Injecting " + X + " audio frame @ " + (Q / S).toFixed(3) + "s due to " + Math.round(1e3 * q / S) + " ms gap.");
                      for (var z = 0; z < X; z++) {
                        var V = Math.max(Q, 0), Y = A.default.getSilentFrame(o.manifestCodec || o.codec, o.channelCount);
                        Y || (D.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), Y = Z.unit.subarray()), k.splice(J, 0, { unit: Y, pts: V }), Q += B, J++;
                      }
                    }
                    Z.pts = Q, Q += B;
                  }
                for (var te = null, ae = null, ne, oe = 0, ue = k.length; ue--; )
                  oe += k[ue].unit.byteLength;
                for (var ie = 0, ee = k.length; ie < ee; ie++) {
                  var re = k[ie], ge = re.unit, he = re.pts;
                  if (ae !== null) {
                    var me = w[ie - 1];
                    me.duration = Math.round((he - ae) / b);
                  } else if (a && o.isAAC && (he = K), te = he, oe > 0) {
                    oe += W;
                    try {
                      ne = new Uint8Array(oe);
                    } catch {
                      this.observer.emit(M.Events.ERROR, M.Events.ERROR, { type: O.ErrorTypes.MUX_ERROR, details: O.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: oe, reason: "fail allocating audio mdat " + oe });
                      return;
                    }
                    if (!U) {
                      var de = new DataView(ne.buffer);
                      de.setUint32(0, oe), ne.set(_.default.types.mdat, 4);
                    }
                  } else
                    return;
                  ne.set(ge, W);
                  var Se = ge.byteLength;
                  W += Se, w.push(new s(true, C, Se, 0)), ae = he;
                }
                var fe = w.length;
                if (!!fe) {
                  var ve = w[w.length - 1];
                  this.nextAudioPts = K = ae + b * ve.duration;
                  var De = U ? new Uint8Array(0) : _.default.moof(o.sequenceNumber++, te / b, y({}, o, { samples: w }));
                  o.samples = [];
                  var pe = te / S, Ee = K / S, Re = "audio", ye = { data1: De, data2: ne, startPTS: pe, endPTS: Ee, startDTS: pe, endDTS: Ee, type: Re, hasAudio: true, hasVideo: false, nb: fe };
                  return this.isAudioContiguous = true, console.assert(ne.length, "MDAT length must not be zero"), ye;
                }
              }, h.remuxEmptyAudio = function(o, n, a, E) {
                var m = o.inputTimeScale, S = o.samplerate ? o.samplerate : m, P = m / S, b = this.nextAudioPts, C = (b !== null ? b : E.startDTS * m) + this._initDTS, B = E.endDTS * m + this._initDTS, F = P * g, U = Math.ceil((B - C) / F), w = A.default.getSilentFrame(o.manifestCodec || o.codec, o.channelCount);
                if (D.logger.warn("[mp4-remuxer]: remux empty Audio"), !w) {
                  D.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
                  return;
                }
                for (var k = [], W = 0; W < U; W++) {
                  var K = C + W * F;
                  k.push({ unit: w, pts: K, dts: K });
                }
                return o.samples = k, this.remuxAudio(o, n, a, false);
              }, h.remuxID3 = function(o, n) {
                var a = o.samples.length;
                if (!!a) {
                  for (var E = o.inputTimeScale, m = this._initPTS, S = this._initDTS, P = 0; P < a; P++) {
                    var b = o.samples[P];
                    b.pts = i(b.pts - m, n * E) / E, b.dts = i(b.dts - S, n * E) / E;
                  }
                  var C = o.samples;
                  return o.samples = [], { samples: C };
                }
              }, h.remuxText = function(o, n) {
                var a = o.samples.length;
                if (!!a) {
                  for (var E = o.inputTimeScale, m = this._initPTS, S = 0; S < a; S++) {
                    var P = o.samples[S];
                    P.pts = i(P.pts - m, n * E) / E;
                  }
                  o.samples.sort(function(C, B) {
                    return C.pts - B.pts;
                  });
                  var b = o.samples;
                  return o.samples = [], { samples: b };
                }
              }, v;
            }();
            function i(v, h) {
              var l;
              if (h === null)
                return v;
              for (h < v ? l = -8589934592 : l = 8589934592; Math.abs(v - h) > 4294967296; )
                v += l;
              return v;
            }
            function d(v) {
              for (var h = 0; h < v.length; h++)
                if (v[h].key)
                  return h;
              return -1;
            }
            var s = function(h, l, o, n) {
              this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = l, this.size = o, this.cts = n, this.flags = new f(h);
            }, f = function(h) {
              this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = h ? 2 : 1, this.isNonSync = h ? 0 : 1;
            };
          }, "./src/remux/passthrough-remuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/polyfills/number.ts"), A = c("./src/utils/mp4-tools.ts"), _ = c("./src/loader/fragment.ts"), M = c("./src/utils/logger.ts"), O = function() {
              function u() {
                this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null;
              }
              var y = u.prototype;
              return y.destroy = function() {
              }, y.resetTimeStamp = function(g) {
                this.initPTS = g, this.lastEndDTS = null;
              }, y.resetNextTimestamp = function() {
                this.lastEndDTS = null;
              }, y.resetInitSegment = function(g, T, x) {
                this.audioCodec = T, this.videoCodec = x, this.generateInitSegment(g), this.emitInitSegment = true;
              }, y.generateInitSegment = function(g) {
                var T = this.audioCodec, x = this.videoCodec;
                if (!g || !g.byteLength) {
                  this.initTracks = void 0, this.initData = void 0;
                  return;
                }
                var r = this.initData = Object(A.parseInitSegment)(g);
                T || (T = L(r.audio, _.ElementaryStreamTypes.AUDIO)), x || (x = L(r.video, _.ElementaryStreamTypes.VIDEO));
                var e = {};
                r.audio && r.video ? e.audiovideo = { container: "video/mp4", codec: T + "," + x, initSegment: g, id: "main" } : r.audio ? e.audio = { container: "audio/mp4", codec: T, initSegment: g, id: "audio" } : r.video ? e.video = { container: "video/mp4", codec: x, initSegment: g, id: "main" } : M.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = e;
              }, y.remux = function(g, T, x, r, e) {
                var t = this.initPTS, i = this.lastEndDTS, d = { audio: void 0, video: void 0, text: r, id3: x, initSegment: void 0 };
                Object(R.isFiniteNumber)(i) || (i = this.lastEndDTS = e || 0);
                var s = T.samples;
                if (!s || !s.length)
                  return d;
                var f = { initPTS: void 0, timescale: 1 }, v = this.initData;
                if ((!v || !v.length) && (this.generateInitSegment(s), v = this.initData), !v || !v.length)
                  return M.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), d;
                this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = false), Object(R.isFiniteNumber)(t) || (this.initPTS = f.initPTS = t = D(v, s, i));
                var h = Object(A.getDuration)(s, v), l = i, o = h + l;
                Object(A.offsetStartDTS)(v, s, t), h > 0 ? this.lastEndDTS = o : (M.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                var n = !!v.audio, a = !!v.video, E = "";
                n && (E += "audio"), a && (E += "video");
                var m = { data1: s, startPTS: l, startDTS: l, endPTS: o, endDTS: o, type: E, hasAudio: n, hasVideo: a, nb: 1, dropped: 0 };
                return d.audio = m.type === "audio" ? m : void 0, d.video = m.type !== "audio" ? m : void 0, d.text = r, d.id3 = x, d.initSegment = f, d;
              }, u;
            }(), D = function(y, p, g) {
              return Object(A.getStartDTS)(y, p) - g;
            };
            function L(u, y) {
              var p = u == null ? void 0 : u.codec;
              return p && p.length > 4 ? p : p === "hvc1" ? "hvc1.1.c.L120.90" : p === "av01" ? "av01.0.04M.08" : p === "avc1" || y === _.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
            }
            I.default = O;
          }, "./src/task-loop.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return R;
            });
            var R = function() {
              function A() {
                this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
              }
              var _ = A.prototype;
              return _.destroy = function() {
                this.onHandlerDestroying(), this.onHandlerDestroyed();
              }, _.onHandlerDestroying = function() {
                this.clearNextTick(), this.clearInterval();
              }, _.onHandlerDestroyed = function() {
              }, _.hasInterval = function() {
                return !!this._tickInterval;
              }, _.hasNextTick = function() {
                return !!this._tickTimer;
              }, _.setInterval = function(O) {
                return this._tickInterval ? false : (this._tickInterval = self.setInterval(this._boundTick, O), true);
              }, _.clearInterval = function() {
                return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, true) : false;
              }, _.clearNextTick = function() {
                return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, true) : false;
              }, _.tick = function() {
                this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
              }, _.tickImmediate = function() {
                this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
              }, _.doTick = function() {
              }, A;
            }();
          }, "./src/types/level.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "HlsSkip", function() {
              return _;
            }), c.d(I, "getSkipValue", function() {
              return M;
            }), c.d(I, "HlsUrlParameters", function() {
              return O;
            }), c.d(I, "Level", function() {
              return D;
            });
            function R(L, u) {
              for (var y = 0; y < u.length; y++) {
                var p = u[y];
                p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(L, p.key, p);
              }
            }
            function A(L, u, y) {
              return u && R(L.prototype, u), y && R(L, y), L;
            }
            var _;
            (function(L) {
              L.No = "", L.Yes = "YES", L.v2 = "v2";
            })(_ || (_ = {}));
            function M(L, u) {
              var y = L.canSkipUntil, p = L.canSkipDateRanges, g = L.endSN, T = u !== void 0 ? u - g : 0;
              return y && T < y ? p ? _.v2 : _.Yes : _.No;
            }
            var O = function() {
              function L(y, p, g) {
                this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = y, this.part = p, this.skip = g;
              }
              var u = L.prototype;
              return u.addDirectives = function(p) {
                var g = new self.URL(p);
                return this.msn !== void 0 && g.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && g.searchParams.set("_HLS_part", this.part.toString()), this.skip && g.searchParams.set("_HLS_skip", this.skip), g.toString();
              }, L;
            }(), D = function() {
              function L(u) {
                this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [u.url], this.attrs = u.attrs, this.bitrate = u.bitrate, u.details && (this.details = u.details), this.id = u.id || 0, this.name = u.name, this.width = u.width || 0, this.height = u.height || 0, this.audioCodec = u.audioCodec, this.videoCodec = u.videoCodec, this.unknownCodecs = u.unknownCodecs, this.codecSet = [u.videoCodec, u.audioCodec].filter(function(y) {
                  return y;
                }).join(",").replace(/\.[^.,]+/g, "");
              }
              return A(L, [{ key: "maxBitrate", get: function() {
                return Math.max(this.realBitrate, this.bitrate);
              } }, { key: "uri", get: function() {
                return this.url[this._urlId] || "";
              } }, { key: "urlId", get: function() {
                return this._urlId;
              }, set: function(y) {
                var p = y % this.url.length;
                this._urlId !== p && (this.details = void 0, this._urlId = p);
              } }]), L;
            }();
          }, "./src/types/loader.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "PlaylistContextType", function() {
              return R;
            }), c.d(I, "PlaylistLevelType", function() {
              return A;
            });
            var R;
            (function(_) {
              _.MANIFEST = "manifest", _.LEVEL = "level", _.AUDIO_TRACK = "audioTrack", _.SUBTITLE_TRACK = "subtitleTrack";
            })(R || (R = {}));
            var A;
            (function(_) {
              _.MAIN = "main", _.AUDIO = "audio", _.SUBTITLE = "subtitle";
            })(A || (A = {}));
          }, "./src/types/transmuxer.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "ChunkMetadata", function() {
              return R;
            });
            var R = function(M, O, D, L, u, y) {
              L === void 0 && (L = 0), u === void 0 && (u = -1), y === void 0 && (y = false), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = A(), this.buffering = { audio: A(), video: A(), audiovideo: A() }, this.level = M, this.sn = O, this.id = D, this.size = L, this.part = u, this.partial = y;
            };
            function A() {
              return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
            }
          }, "./src/utils/attr-list.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "AttrList", function() {
              return _;
            });
            var R = /^(\d+)x(\d+)$/, A = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, _ = function() {
              function M(D) {
                typeof D == "string" && (D = M.parseAttrList(D));
                for (var L in D)
                  D.hasOwnProperty(L) && (this[L] = D[L]);
              }
              var O = M.prototype;
              return O.decimalInteger = function(L) {
                var u = parseInt(this[L], 10);
                return u > Number.MAX_SAFE_INTEGER ? 1 / 0 : u;
              }, O.hexadecimalInteger = function(L) {
                if (this[L]) {
                  var u = (this[L] || "0x").slice(2);
                  u = (u.length & 1 ? "0" : "") + u;
                  for (var y = new Uint8Array(u.length / 2), p = 0; p < u.length / 2; p++)
                    y[p] = parseInt(u.slice(p * 2, p * 2 + 2), 16);
                  return y;
                } else
                  return null;
              }, O.hexadecimalIntegerAsNumber = function(L) {
                var u = parseInt(this[L], 16);
                return u > Number.MAX_SAFE_INTEGER ? 1 / 0 : u;
              }, O.decimalFloatingPoint = function(L) {
                return parseFloat(this[L]);
              }, O.optionalFloat = function(L, u) {
                var y = this[L];
                return y ? parseFloat(y) : u;
              }, O.enumeratedString = function(L) {
                return this[L];
              }, O.bool = function(L) {
                return this[L] === "YES";
              }, O.decimalResolution = function(L) {
                var u = R.exec(this[L]);
                if (u !== null)
                  return { width: parseInt(u[1], 10), height: parseInt(u[2], 10) };
              }, M.parseAttrList = function(L) {
                var u, y = {}, p = '"';
                for (A.lastIndex = 0; (u = A.exec(L)) !== null; ) {
                  var g = u[2];
                  g.indexOf(p) === 0 && g.lastIndexOf(p) === g.length - 1 && (g = g.slice(1, -1)), y[u[1]] = g;
                }
                return y;
              }, M;
            }();
          }, "./src/utils/binary-search.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = { search: function(_, M) {
              for (var O = 0, D = _.length - 1, L = null, u = null; O <= D; ) {
                L = (O + D) / 2 | 0, u = _[L];
                var y = M(u);
                if (y > 0)
                  O = L + 1;
                else if (y < 0)
                  D = L - 1;
                else
                  return u;
              }
              return null;
            } };
            I.default = R;
          }, "./src/utils/buffer-helper.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "BufferHelper", function() {
              return _;
            });
            var R = c("./src/utils/logger.ts"), A = { length: 0, start: function() {
              return 0;
            }, end: function() {
              return 0;
            } }, _ = function() {
              function M() {
              }
              return M.isBuffered = function(D, L) {
                try {
                  if (D) {
                    for (var u = M.getBuffered(D), y = 0; y < u.length; y++)
                      if (L >= u.start(y) && L <= u.end(y))
                        return true;
                  }
                } catch {
                }
                return false;
              }, M.bufferInfo = function(D, L, u) {
                try {
                  if (D) {
                    var y = M.getBuffered(D), p = [], g;
                    for (g = 0; g < y.length; g++)
                      p.push({ start: y.start(g), end: y.end(g) });
                    return this.bufferedInfo(p, L, u);
                  }
                } catch {
                }
                return { len: 0, start: L, end: L, nextStart: void 0 };
              }, M.bufferedInfo = function(D, L, u) {
                L = Math.max(0, L), D.sort(function(f, v) {
                  var h = f.start - v.start;
                  return h || v.end - f.end;
                });
                var y = [];
                if (u)
                  for (var p = 0; p < D.length; p++) {
                    var g = y.length;
                    if (g) {
                      var T = y[g - 1].end;
                      D[p].start - T < u ? D[p].end > T && (y[g - 1].end = D[p].end) : y.push(D[p]);
                    } else
                      y.push(D[p]);
                  }
                else
                  y = D;
                for (var x = 0, r, e = L, t = L, i = 0; i < y.length; i++) {
                  var d = y[i].start, s = y[i].end;
                  if (L + u >= d && L < s)
                    e = d, t = s, x = t - L;
                  else if (L + u < d) {
                    r = d;
                    break;
                  }
                }
                return { len: x, start: e || 0, end: t || 0, nextStart: r };
              }, M.getBuffered = function(D) {
                try {
                  return D.buffered;
                } catch (L) {
                  return R.logger.log("failed to get media.buffered", L), A;
                }
              }, M;
            }();
          }, "./src/utils/cea-608-parser.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "Row", function() {
              return t;
            }), c.d(I, "CaptionScreen", function() {
              return i;
            });
            var R = c("./src/utils/logger.ts"), A = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, _ = function(o) {
              var n = o;
              return A.hasOwnProperty(o) && (n = A[o]), String.fromCharCode(n);
            }, M = 15, O = 100, D = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, L = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, u = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, y = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, p = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], g;
            (function(l) {
              l[l.ERROR = 0] = "ERROR", l[l.TEXT = 1] = "TEXT", l[l.WARNING = 2] = "WARNING", l[l.INFO = 2] = "INFO", l[l.DEBUG = 3] = "DEBUG", l[l.DATA = 3] = "DATA";
            })(g || (g = {}));
            var T = function() {
              function l() {
                this.time = null, this.verboseLevel = g.ERROR;
              }
              var o = l.prototype;
              return o.log = function(a, E) {
                this.verboseLevel >= a && R.logger.log(this.time + " [" + a + "] " + E);
              }, l;
            }(), x = function(o) {
              for (var n = [], a = 0; a < o.length; a++)
                n.push(o[a].toString(16));
              return n;
            }, r = function() {
              function l(n, a, E, m, S) {
                this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = n || "white", this.underline = a || false, this.italics = E || false, this.background = m || "black", this.flash = S || false;
              }
              var o = l.prototype;
              return o.reset = function() {
                this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
              }, o.setStyles = function(a) {
                for (var E = ["foreground", "underline", "italics", "background", "flash"], m = 0; m < E.length; m++) {
                  var S = E[m];
                  a.hasOwnProperty(S) && (this[S] = a[S]);
                }
              }, o.isDefault = function() {
                return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
              }, o.equals = function(a) {
                return this.foreground === a.foreground && this.underline === a.underline && this.italics === a.italics && this.background === a.background && this.flash === a.flash;
              }, o.copy = function(a) {
                this.foreground = a.foreground, this.underline = a.underline, this.italics = a.italics, this.background = a.background, this.flash = a.flash;
              }, o.toString = function() {
                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
              }, l;
            }(), e = function() {
              function l(n, a, E, m, S, P) {
                this.uchar = void 0, this.penState = void 0, this.uchar = n || " ", this.penState = new r(a, E, m, S, P);
              }
              var o = l.prototype;
              return o.reset = function() {
                this.uchar = " ", this.penState.reset();
              }, o.setChar = function(a, E) {
                this.uchar = a, this.penState.copy(E);
              }, o.setPenState = function(a) {
                this.penState.copy(a);
              }, o.equals = function(a) {
                return this.uchar === a.uchar && this.penState.equals(a.penState);
              }, o.copy = function(a) {
                this.uchar = a.uchar, this.penState.copy(a.penState);
              }, o.isEmpty = function() {
                return this.uchar === " " && this.penState.isDefault();
              }, l;
            }(), t = function() {
              function l(n) {
                this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                for (var a = 0; a < O; a++)
                  this.chars.push(new e());
                this.logger = n, this.pos = 0, this.currPenState = new r();
              }
              var o = l.prototype;
              return o.equals = function(a) {
                for (var E = true, m = 0; m < O; m++)
                  if (!this.chars[m].equals(a.chars[m])) {
                    E = false;
                    break;
                  }
                return E;
              }, o.copy = function(a) {
                for (var E = 0; E < O; E++)
                  this.chars[E].copy(a.chars[E]);
              }, o.isEmpty = function() {
                for (var a = true, E = 0; E < O; E++)
                  if (!this.chars[E].isEmpty()) {
                    a = false;
                    break;
                  }
                return a;
              }, o.setCursor = function(a) {
                this.pos !== a && (this.pos = a), this.pos < 0 ? (this.logger.log(g.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > O && (this.logger.log(g.DEBUG, "Too large cursor position " + this.pos), this.pos = O);
              }, o.moveCursor = function(a) {
                var E = this.pos + a;
                if (a > 1)
                  for (var m = this.pos + 1; m < E + 1; m++)
                    this.chars[m].setPenState(this.currPenState);
                this.setCursor(E);
              }, o.backSpace = function() {
                this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
              }, o.insertChar = function(a) {
                a >= 144 && this.backSpace();
                var E = _(a);
                if (this.pos >= O) {
                  this.logger.log(g.ERROR, "Cannot insert " + a.toString(16) + " (" + E + ") at position " + this.pos + ". Skipping it!");
                  return;
                }
                this.chars[this.pos].setChar(E, this.currPenState), this.moveCursor(1);
              }, o.clearFromPos = function(a) {
                var E;
                for (E = a; E < O; E++)
                  this.chars[E].reset();
              }, o.clear = function() {
                this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
              }, o.clearToEndOfRow = function() {
                this.clearFromPos(this.pos);
              }, o.getTextString = function() {
                for (var a = [], E = true, m = 0; m < O; m++) {
                  var S = this.chars[m].uchar;
                  S !== " " && (E = false), a.push(S);
                }
                return E ? "" : a.join("");
              }, o.setPenStyles = function(a) {
                this.currPenState.setStyles(a);
                var E = this.chars[this.pos];
                E.setPenState(this.currPenState);
              }, l;
            }(), i = function() {
              function l(n) {
                this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                for (var a = 0; a < M; a++)
                  this.rows.push(new t(n));
                this.logger = n, this.currRow = M - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
              }
              var o = l.prototype;
              return o.reset = function() {
                for (var a = 0; a < M; a++)
                  this.rows[a].clear();
                this.currRow = M - 1;
              }, o.equals = function(a) {
                for (var E = true, m = 0; m < M; m++)
                  if (!this.rows[m].equals(a.rows[m])) {
                    E = false;
                    break;
                  }
                return E;
              }, o.copy = function(a) {
                for (var E = 0; E < M; E++)
                  this.rows[E].copy(a.rows[E]);
              }, o.isEmpty = function() {
                for (var a = true, E = 0; E < M; E++)
                  if (!this.rows[E].isEmpty()) {
                    a = false;
                    break;
                  }
                return a;
              }, o.backSpace = function() {
                var a = this.rows[this.currRow];
                a.backSpace();
              }, o.clearToEndOfRow = function() {
                var a = this.rows[this.currRow];
                a.clearToEndOfRow();
              }, o.insertChar = function(a) {
                var E = this.rows[this.currRow];
                E.insertChar(a);
              }, o.setPen = function(a) {
                var E = this.rows[this.currRow];
                E.setPenStyles(a);
              }, o.moveCursor = function(a) {
                var E = this.rows[this.currRow];
                E.moveCursor(a);
              }, o.setCursor = function(a) {
                this.logger.log(g.INFO, "setCursor: " + a);
                var E = this.rows[this.currRow];
                E.setCursor(a);
              }, o.setPAC = function(a) {
                this.logger.log(g.INFO, "pacData = " + JSON.stringify(a));
                var E = a.row - 1;
                if (this.nrRollUpRows && E < this.nrRollUpRows - 1 && (E = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== E) {
                  for (var m = 0; m < M; m++)
                    this.rows[m].clear();
                  var S = this.currRow + 1 - this.nrRollUpRows, P = this.lastOutputScreen;
                  if (P) {
                    var b = P.rows[S].cueStartTime, C = this.logger.time;
                    if (b && C !== null && b < C)
                      for (var B = 0; B < this.nrRollUpRows; B++)
                        this.rows[E - this.nrRollUpRows + B + 1].copy(P.rows[S + B]);
                  }
                }
                this.currRow = E;
                var F = this.rows[this.currRow];
                if (a.indent !== null) {
                  var U = a.indent, w = Math.max(U - 1, 0);
                  F.setCursor(a.indent), a.color = F.chars[w].penState.foreground;
                }
                var k = { foreground: a.color, underline: a.underline, italics: a.italics, background: "black", flash: false };
                this.setPen(k);
              }, o.setBkgData = function(a) {
                this.logger.log(g.INFO, "bkgData = " + JSON.stringify(a)), this.backSpace(), this.setPen(a), this.insertChar(32);
              }, o.setRollUpRows = function(a) {
                this.nrRollUpRows = a;
              }, o.rollUp = function() {
                if (this.nrRollUpRows === null) {
                  this.logger.log(g.DEBUG, "roll_up but nrRollUpRows not set yet");
                  return;
                }
                this.logger.log(g.TEXT, this.getDisplayText());
                var a = this.currRow + 1 - this.nrRollUpRows, E = this.rows.splice(a, 1)[0];
                E.clear(), this.rows.splice(this.currRow, 0, E), this.logger.log(g.INFO, "Rolling up");
              }, o.getDisplayText = function(a) {
                a = a || false;
                for (var E = [], m = "", S = -1, P = 0; P < M; P++) {
                  var b = this.rows[P].getTextString();
                  b && (S = P + 1, a ? E.push("Row " + S + ": '" + b + "'") : E.push(b.trim()));
                }
                return E.length > 0 && (a ? m = "[" + E.join(" | ") + "]" : m = E.join(`
`)), m;
              }, o.getTextAndFormat = function() {
                return this.rows;
              }, l;
            }(), d = function() {
              function l(n, a, E) {
                this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = n, this.outputFilter = a, this.mode = null, this.verbose = 0, this.displayedMemory = new i(E), this.nonDisplayedMemory = new i(E), this.lastOutputScreen = new i(E), this.currRollUpRow = this.displayedMemory.rows[M - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = E;
              }
              var o = l.prototype;
              return o.reset = function() {
                this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[M - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
              }, o.getHandler = function() {
                return this.outputFilter;
              }, o.setHandler = function(a) {
                this.outputFilter = a;
              }, o.setPAC = function(a) {
                this.writeScreen.setPAC(a);
              }, o.setBkgData = function(a) {
                this.writeScreen.setBkgData(a);
              }, o.setMode = function(a) {
                a !== this.mode && (this.mode = a, this.logger.log(g.INFO, "MODE=" + a), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = a);
              }, o.insertChars = function(a) {
                for (var E = 0; E < a.length; E++)
                  this.writeScreen.insertChar(a[E]);
                var m = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                this.logger.log(g.INFO, m + ": " + this.writeScreen.getDisplayText(true)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(g.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(true)), this.outputDataUpdate());
              }, o.ccRCL = function() {
                this.logger.log(g.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
              }, o.ccBS = function() {
                this.logger.log(g.INFO, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
              }, o.ccAOF = function() {
              }, o.ccAON = function() {
              }, o.ccDER = function() {
                this.logger.log(g.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
              }, o.ccRU = function(a) {
                this.logger.log(g.INFO, "RU(" + a + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(a);
              }, o.ccFON = function() {
                this.logger.log(g.INFO, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
              }, o.ccRDC = function() {
                this.logger.log(g.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
              }, o.ccTR = function() {
                this.logger.log(g.INFO, "TR"), this.setMode("MODE_TEXT");
              }, o.ccRTD = function() {
                this.logger.log(g.INFO, "RTD"), this.setMode("MODE_TEXT");
              }, o.ccEDM = function() {
                this.logger.log(g.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
              }, o.ccCR = function() {
                this.logger.log(g.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
              }, o.ccENM = function() {
                this.logger.log(g.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
              }, o.ccEOC = function() {
                if (this.logger.log(g.INFO, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
                  var a = this.displayedMemory;
                  this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = a, this.writeScreen = this.nonDisplayedMemory, this.logger.log(g.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
                }
                this.outputDataUpdate(true);
              }, o.ccTO = function(a) {
                this.logger.log(g.INFO, "TO(" + a + ") - Tab Offset"), this.writeScreen.moveCursor(a);
              }, o.ccMIDROW = function(a) {
                var E = { flash: false };
                if (E.underline = a % 2 == 1, E.italics = a >= 46, E.italics)
                  E.foreground = "white";
                else {
                  var m = Math.floor(a / 2) - 16, S = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                  E.foreground = S[m];
                }
                this.logger.log(g.INFO, "MIDROW: " + JSON.stringify(E)), this.writeScreen.setPen(E);
              }, o.outputDataUpdate = function(a) {
                a === void 0 && (a = false);
                var E = this.logger.time;
                E !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = E : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, E, this.lastOutputScreen), a && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : E), this.lastOutputScreen.copy(this.displayedMemory));
              }, o.cueSplitAtTime = function(a) {
                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.displayedMemory), this.cueStartTime = a));
              }, l;
            }(), s = function() {
              function l(n, a, E) {
                this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                var m = new T();
                this.channels = [null, new d(n, a, m), new d(n + 1, E, m)], this.cmdHistory = h(), this.logger = m;
              }
              var o = l.prototype;
              return o.getHandler = function(a) {
                return this.channels[a].getHandler();
              }, o.setHandler = function(a, E) {
                this.channels[a].setHandler(E);
              }, o.addData = function(a, E) {
                var m, S, P, b = false;
                this.logger.time = a;
                for (var C = 0; C < E.length; C += 2)
                  if (S = E[C] & 127, P = E[C + 1] & 127, !(S === 0 && P === 0)) {
                    if (this.logger.log(g.DATA, "[" + x([E[C], E[C + 1]]) + "] -> (" + x([S, P]) + ")"), m = this.parseCmd(S, P), m || (m = this.parseMidrow(S, P)), m || (m = this.parsePAC(S, P)), m || (m = this.parseBackgroundAttributes(S, P)), !m && (b = this.parseChars(S, P), b)) {
                      var B = this.currentChannel;
                      if (B && B > 0) {
                        var F = this.channels[B];
                        F.insertChars(b);
                      } else
                        this.logger.log(g.WARNING, "No channel found yet. TEXT-MODE?");
                    }
                    !m && !b && this.logger.log(g.WARNING, "Couldn't parse cleaned data " + x([S, P]) + " orig: " + x([E[C], E[C + 1]]));
                  }
              }, o.parseCmd = function(a, E) {
                var m = this.cmdHistory, S = (a === 20 || a === 28 || a === 21 || a === 29) && E >= 32 && E <= 47, P = (a === 23 || a === 31) && E >= 33 && E <= 35;
                if (!(S || P))
                  return false;
                if (v(a, E, m))
                  return f(null, null, m), this.logger.log(g.DEBUG, "Repeated command (" + x([a, E]) + ") is dropped"), true;
                var b = a === 20 || a === 21 || a === 23 ? 1 : 2, C = this.channels[b];
                return a === 20 || a === 21 || a === 28 || a === 29 ? E === 32 ? C.ccRCL() : E === 33 ? C.ccBS() : E === 34 ? C.ccAOF() : E === 35 ? C.ccAON() : E === 36 ? C.ccDER() : E === 37 ? C.ccRU(2) : E === 38 ? C.ccRU(3) : E === 39 ? C.ccRU(4) : E === 40 ? C.ccFON() : E === 41 ? C.ccRDC() : E === 42 ? C.ccTR() : E === 43 ? C.ccRTD() : E === 44 ? C.ccEDM() : E === 45 ? C.ccCR() : E === 46 ? C.ccENM() : E === 47 && C.ccEOC() : C.ccTO(E - 32), f(a, E, m), this.currentChannel = b, true;
              }, o.parseMidrow = function(a, E) {
                var m = 0;
                if ((a === 17 || a === 25) && E >= 32 && E <= 47) {
                  if (a === 17 ? m = 1 : m = 2, m !== this.currentChannel)
                    return this.logger.log(g.ERROR, "Mismatch channel in midrow parsing"), false;
                  var S = this.channels[m];
                  return S ? (S.ccMIDROW(E), this.logger.log(g.DEBUG, "MIDROW (" + x([a, E]) + ")"), true) : false;
                }
                return false;
              }, o.parsePAC = function(a, E) {
                var m, S = this.cmdHistory, P = (a >= 17 && a <= 23 || a >= 25 && a <= 31) && E >= 64 && E <= 127, b = (a === 16 || a === 24) && E >= 64 && E <= 95;
                if (!(P || b))
                  return false;
                if (v(a, E, S))
                  return f(null, null, S), true;
                var C = a <= 23 ? 1 : 2;
                E >= 64 && E <= 95 ? m = C === 1 ? D[a] : u[a] : m = C === 1 ? L[a] : y[a];
                var B = this.channels[C];
                return B ? (B.setPAC(this.interpretPAC(m, E)), f(a, E, S), this.currentChannel = C, true) : false;
              }, o.interpretPAC = function(a, E) {
                var m, S = { color: null, italics: false, indent: null, underline: false, row: a };
                return E > 95 ? m = E - 96 : m = E - 64, S.underline = (m & 1) == 1, m <= 13 ? S.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(m / 2)] : m <= 15 ? (S.italics = true, S.color = "white") : S.indent = Math.floor((m - 16) / 2) * 4, S;
              }, o.parseChars = function(a, E) {
                var m, S = null, P = null;
                if (a >= 25 ? (m = 2, P = a - 8) : (m = 1, P = a), P >= 17 && P <= 19) {
                  var b;
                  P === 17 ? b = E + 80 : P === 18 ? b = E + 112 : b = E + 144, this.logger.log(g.INFO, "Special char '" + _(b) + "' in channel " + m), S = [b];
                } else
                  a >= 32 && a <= 127 && (S = E === 0 ? [a] : [a, E]);
                if (S) {
                  var C = x(S);
                  this.logger.log(g.DEBUG, "Char codes =  " + C.join(",")), f(a, E, this.cmdHistory);
                }
                return S;
              }, o.parseBackgroundAttributes = function(a, E) {
                var m = (a === 16 || a === 24) && E >= 32 && E <= 47, S = (a === 23 || a === 31) && E >= 45 && E <= 47;
                if (!(m || S))
                  return false;
                var P, b = {};
                a === 16 || a === 24 ? (P = Math.floor((E - 32) / 2), b.background = p[P], E % 2 == 1 && (b.background = b.background + "_semi")) : E === 45 ? b.background = "transparent" : (b.foreground = "black", E === 47 && (b.underline = true));
                var C = a <= 23 ? 1 : 2, B = this.channels[C];
                return B.setBkgData(b), f(a, E, this.cmdHistory), true;
              }, o.reset = function() {
                for (var a = 0; a < Object.keys(this.channels).length; a++) {
                  var E = this.channels[a];
                  E && E.reset();
                }
                this.cmdHistory = h();
              }, o.cueSplitAtTime = function(a) {
                for (var E = 0; E < this.channels.length; E++) {
                  var m = this.channels[E];
                  m && m.cueSplitAtTime(a);
                }
              }, l;
            }();
            function f(l, o, n) {
              n.a = l, n.b = o;
            }
            function v(l, o, n) {
              return n.a === l && n.b === o;
            }
            function h() {
              return { a: null, b: null };
            }
            I.default = s;
          }, "./src/utils/codecs.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "isCodecType", function() {
              return A;
            }), c.d(I, "isCodecSupportedInMp4", function() {
              return _;
            });
            var R = { audio: { a3ds: true, "ac-3": true, "ac-4": true, alac: true, alaw: true, dra1: true, "dts+": true, "dts-": true, dtsc: true, dtse: true, dtsh: true, "ec-3": true, enca: true, g719: true, g726: true, m4ae: true, mha1: true, mha2: true, mhm1: true, mhm2: true, mlpa: true, mp4a: true, "raw ": true, Opus: true, samr: true, sawb: true, sawp: true, sevc: true, sqcp: true, ssmv: true, twos: true, ulaw: true }, video: { avc1: true, avc2: true, avc3: true, avc4: true, avcp: true, av01: true, drac: true, dvav: true, dvhe: true, encv: true, hev1: true, hvc1: true, mjp2: true, mp4v: true, mvc1: true, mvc2: true, mvc3: true, mvc4: true, resv: true, rv60: true, s263: true, svc1: true, svc2: true, "vc-1": true, vp08: true, vp09: true }, text: { stpp: true, wvtt: true } };
            function A(M, O) {
              var D = R[O];
              return !!D && D[M.slice(0, 4)] === true;
            }
            function _(M, O) {
              return MediaSource.isTypeSupported((O || "video") + '/mp4;codecs="' + M + '"');
            }
          }, "./src/utils/cues.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/utils/vttparser.ts"), A = c("./src/utils/webvtt-parser.ts"), _ = c("./src/utils/texttrack-utils.ts"), M = /\s/, O = { newCue: function(L, u, y, p) {
              for (var g = [], T, x, r, e, t, i = self.VTTCue || self.TextTrackCue, d = 0; d < p.rows.length; d++)
                if (T = p.rows[d], r = true, e = 0, t = "", !T.isEmpty()) {
                  for (var s = 0; s < T.chars.length; s++)
                    M.test(T.chars[s].uchar) && r ? e++ : (t += T.chars[s].uchar, r = false);
                  T.cueStartTime = u, u === y && (y += 1e-4), e >= 16 ? e-- : e++;
                  var f = Object(R.fixLineBreaks)(t.trim()), v = Object(A.generateCueId)(u, y, f);
                  (!L || !L.cues || !L.cues.getCueById(v)) && (x = new i(u, y, f), x.id = v, x.line = d + 1, x.align = "left", x.position = 10 + Math.min(80, Math.floor(e * 8 / 32) * 10), g.push(x));
                }
              return L && g.length && (g.sort(function(h, l) {
                return h.line === "auto" || l.line === "auto" ? 0 : h.line > 8 && l.line > 8 ? l.line - h.line : h.line - l.line;
              }), g.forEach(function(h) {
                return Object(_.addCueToTrack)(L, h);
              })), g;
            } };
            I.default = O;
          }, "./src/utils/discontinuities.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "findFirstFragWithCC", function() {
              return M;
            }), c.d(I, "shouldAlignOnDiscontinuities", function() {
              return O;
            }), c.d(I, "findDiscontinuousReferenceFrag", function() {
              return D;
            }), c.d(I, "adjustSlidingStart", function() {
              return u;
            }), c.d(I, "alignStream", function() {
              return y;
            }), c.d(I, "alignPDT", function() {
              return g;
            }), c.d(I, "alignFragmentByPDTDelta", function() {
              return T;
            }), c.d(I, "alignMediaPlaylistByPDT", function() {
              return x;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/utils/logger.ts"), _ = c("./src/controller/level-helper.ts");
            function M(r, e) {
              for (var t = null, i = 0, d = r.length; i < d; i++) {
                var s = r[i];
                if (s && s.cc === e) {
                  t = s;
                  break;
                }
              }
              return t;
            }
            function O(r, e, t) {
              return !!(e.details && (t.endCC > t.startCC || r && r.cc < t.startCC));
            }
            function D(r, e) {
              var t = r.fragments, i = e.fragments;
              if (!i.length || !t.length) {
                A.logger.log("No fragments to align");
                return;
              }
              var d = M(t, i[0].cc);
              if (!d || d && !d.startPTS) {
                A.logger.log("No frag in previous level to align on");
                return;
              }
              return d;
            }
            function L(r, e) {
              if (r) {
                var t = r.start + e;
                r.start = r.startPTS = t, r.endPTS = t + r.duration;
              }
            }
            function u(r, e) {
              for (var t = e.fragments, i = 0, d = t.length; i < d; i++)
                L(t[i], r);
              e.fragmentHint && L(e.fragmentHint, r), e.alignedSliding = true;
            }
            function y(r, e, t) {
              !e || (p(r, t, e), !t.alignedSliding && e.details && g(t, e.details), !t.alignedSliding && e.details && !t.skippedSegments && Object(_.adjustSliding)(e.details, t));
            }
            function p(r, e, t) {
              if (O(r, t, e)) {
                var i = D(t.details, e);
                i && Object(R.isFiniteNumber)(i.start) && (A.logger.log("Adjusting PTS using last level due to CC increase within current level " + e.url), u(i.start, e));
              }
            }
            function g(r, e) {
              if (!(!e.fragments.length || !r.hasProgramDateTime || !e.hasProgramDateTime)) {
                var t = e.fragments[0].programDateTime, i = r.fragments[0].programDateTime, d = (i - t) / 1e3 + e.fragments[0].start;
                d && Object(R.isFiniteNumber)(d) && (A.logger.log("Adjusting PTS using programDateTime delta " + (i - t) + "ms, sliding:" + d.toFixed(3) + " " + r.url + " "), u(d, r));
              }
            }
            function T(r, e) {
              var t = r.programDateTime;
              if (!!t) {
                var i = (t - e) / 1e3;
                r.start = r.startPTS = i, r.endPTS = i + r.duration;
              }
            }
            function x(r, e) {
              if (!(!e.fragments.length || !r.hasProgramDateTime || !e.hasProgramDateTime)) {
                var t = e.fragments[0].programDateTime, i = e.fragments[0].start, d = t - i * 1e3;
                r.fragments.forEach(function(s) {
                  T(s, d);
                }), r.fragmentHint && T(r.fragmentHint, d), r.alignedSliding = true;
              }
            }
          }, "./src/utils/ewma-bandwidth-estimator.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/utils/ewma.ts"), A = function() {
              function _(O, D, L) {
                this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = L, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new R.default(O), this.fast_ = new R.default(D);
              }
              var M = _.prototype;
              return M.update = function(D, L) {
                var u = this.slow_, y = this.fast_;
                this.slow_.halfLife !== D && (this.slow_ = new R.default(D, u.getEstimate(), u.getTotalWeight())), this.fast_.halfLife !== L && (this.fast_ = new R.default(L, y.getEstimate(), y.getTotalWeight()));
              }, M.sample = function(D, L) {
                D = Math.max(D, this.minDelayMs_);
                var u = 8 * L, y = D / 1e3, p = u / y;
                this.fast_.sample(y, p), this.slow_.sample(y, p);
              }, M.canEstimate = function() {
                var D = this.fast_;
                return D && D.getTotalWeight() >= this.minWeight_;
              }, M.getEstimate = function() {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
              }, M.destroy = function() {
              }, _;
            }();
            I.default = A;
          }, "./src/utils/ewma.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = function() {
              function A(M, O, D) {
                O === void 0 && (O = 0), D === void 0 && (D = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = M, this.alpha_ = M ? Math.exp(Math.log(0.5) / M) : 0, this.estimate_ = O, this.totalWeight_ = D;
              }
              var _ = A.prototype;
              return _.sample = function(O, D) {
                var L = Math.pow(this.alpha_, O);
                this.estimate_ = D * (1 - L) + L * this.estimate_, this.totalWeight_ += O;
              }, _.getTotalWeight = function() {
                return this.totalWeight_;
              }, _.getEstimate = function() {
                if (this.alpha_) {
                  var O = 1 - Math.pow(this.alpha_, this.totalWeight_);
                  if (O)
                    return this.estimate_ / O;
                }
                return this.estimate_;
              }, A;
            }();
            I.default = R;
          }, "./src/utils/fetch-loader.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "fetchSupported", function() {
              return g;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/loader/load-stats.ts"), _ = c("./src/demux/chunk-cache.ts");
            function M(t, i) {
              t.prototype = Object.create(i.prototype), t.prototype.constructor = t, y(t, i);
            }
            function O(t) {
              var i = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
              return O = function(s) {
                if (s === null || !u(s))
                  return s;
                if (typeof s != "function")
                  throw new TypeError("Super expression must either be null or a function");
                if (typeof i != "undefined") {
                  if (i.has(s))
                    return i.get(s);
                  i.set(s, f);
                }
                function f() {
                  return D(s, arguments, p(this).constructor);
                }
                return f.prototype = Object.create(s.prototype, { constructor: { value: f, enumerable: false, writable: true, configurable: true } }), y(f, s);
              }, O(t);
            }
            function D(t, i, d) {
              return L() ? D = Reflect.construct : D = function(f, v, h) {
                var l = [null];
                l.push.apply(l, v);
                var o = Function.bind.apply(f, l), n = new o();
                return h && y(n, h.prototype), n;
              }, D.apply(null, arguments);
            }
            function L() {
              if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch {
                return false;
              }
            }
            function u(t) {
              return Function.toString.call(t).indexOf("[native code]") !== -1;
            }
            function y(t, i) {
              return y = Object.setPrototypeOf || function(s, f) {
                return s.__proto__ = f, s;
              }, y(t, i);
            }
            function p(t) {
              return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(d) {
                return d.__proto__ || Object.getPrototypeOf(d);
              }, p(t);
            }
            function g() {
              if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                try {
                  return new self.ReadableStream({}), true;
                } catch {
                }
              return false;
            }
            var T = function() {
              function t(d) {
                this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = d.fetchSetup || r, this.controller = new self.AbortController(), this.stats = new A.LoadStats();
              }
              var i = t.prototype;
              return i.destroy = function() {
                this.loader = this.callbacks = null, this.abortInternal();
              }, i.abortInternal = function() {
                var s = this.response;
                (!s || !s.ok) && (this.stats.aborted = true, this.controller.abort());
              }, i.abort = function() {
                var s;
                this.abortInternal(), (s = this.callbacks) !== null && s !== void 0 && s.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
              }, i.load = function(s, f, v) {
                var h = this, l = this.stats;
                if (l.loading.start)
                  throw new Error("Loader can only be used once.");
                l.loading.start = self.performance.now();
                var o = x(s, this.controller.signal), n = v.onProgress, a = s.responseType === "arraybuffer", E = a ? "byteLength" : "length";
                this.context = s, this.config = f, this.callbacks = v, this.request = this.fetchSetup(s, o), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
                  h.abortInternal(), v.onTimeout(l, s, h.response);
                }, f.timeout), self.fetch(this.request).then(function(m) {
                  if (h.response = h.loader = m, !m.ok) {
                    var S = m.status, P = m.statusText;
                    throw new e(P || "fetch, bad network response", S, m);
                  }
                  return l.loading.first = Math.max(self.performance.now(), l.loading.start), l.total = parseInt(m.headers.get("Content-Length") || "0"), n && Object(R.isFiniteNumber)(f.highWaterMark) ? h.loadProgressively(m, l, s, f.highWaterMark, n) : a ? m.arrayBuffer() : m.text();
                }).then(function(m) {
                  var S = h.response;
                  self.clearTimeout(h.requestTimeout), l.loading.end = Math.max(self.performance.now(), l.loading.first), l.loaded = l.total = m[E];
                  var P = { url: S.url, data: m };
                  n && !Object(R.isFiniteNumber)(f.highWaterMark) && n(l, s, m, S), v.onSuccess(P, l, s, S);
                }).catch(function(m) {
                  if (self.clearTimeout(h.requestTimeout), !l.aborted) {
                    var S = m.code || 0;
                    v.onError({ code: S, text: m.message }, s, m.details);
                  }
                });
              }, i.getCacheAge = function() {
                var s = null;
                if (this.response) {
                  var f = this.response.headers.get("age");
                  s = f ? parseFloat(f) : null;
                }
                return s;
              }, i.loadProgressively = function(s, f, v, h, l) {
                h === void 0 && (h = 0);
                var o = new _.default(), n = s.body.getReader(), a = function E() {
                  return n.read().then(function(m) {
                    if (m.done)
                      return o.dataLength && l(f, v, o.flush(), s), Promise.resolve(new ArrayBuffer(0));
                    var S = m.value, P = S.length;
                    return f.loaded += P, P < h || o.dataLength ? (o.push(S), o.dataLength >= h && l(f, v, o.flush(), s)) : l(f, v, S, s), E();
                  }).catch(function() {
                    return Promise.reject();
                  });
                };
                return a();
              }, t;
            }();
            function x(t, i) {
              var d = { method: "GET", mode: "cors", credentials: "same-origin", signal: i };
              return t.rangeEnd && (d.headers = new self.Headers({ Range: "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1) })), d;
            }
            function r(t, i) {
              return new self.Request(t.url, i);
            }
            var e = function(t) {
              M(i, t);
              function i(d, s, f) {
                var v;
                return v = t.call(this, d) || this, v.code = void 0, v.details = void 0, v.code = s, v.details = f, v;
              }
              return i;
            }(O(Error));
            I.default = T;
          }, "./src/utils/imsc1-ttml-parser.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "IMSC1_CODEC", function() {
              return u;
            }), c.d(I, "parseIMSC1", function() {
              return T;
            });
            var R = c("./src/utils/mp4-tools.ts"), A = c("./src/utils/vttparser.ts"), _ = c("./src/utils/vttcue.ts"), M = c("./src/demux/id3.ts"), O = c("./src/utils/timescale-conversion.ts"), D = c("./src/utils/webvtt-parser.ts");
            function L() {
              return L = Object.assign || function(l) {
                for (var o = 1; o < arguments.length; o++) {
                  var n = arguments[o];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (l[a] = n[a]);
                }
                return l;
              }, L.apply(this, arguments);
            }
            var u = "stpp.ttml.im1t", y = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, p = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, g = { left: "start", center: "center", right: "end", start: "start", end: "end" };
            function T(l, o, n, a, E) {
              var m = Object(R.findBox)(new Uint8Array(l), ["mdat"]);
              if (m.length === 0) {
                E(new Error("Could not parse IMSC1 mdat"));
                return;
              }
              var S = m[0], P = Object(M.utf8ArrayToStr)(new Uint8Array(l, S.start, S.end - S.start)), b = Object(O.toTimescaleFromScale)(o, 1, n);
              try {
                a(x(P, b));
              } catch (C) {
                E(C);
              }
            }
            function x(l, o) {
              var n = new DOMParser(), a = n.parseFromString(l, "text/xml"), E = a.getElementsByTagName("tt")[0];
              if (!E)
                throw new Error("Invalid ttml");
              var m = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, S = Object.keys(m).reduce(function(F, U) {
                return F[U] = E.getAttribute("ttp:" + U) || m[U], F;
              }, {}), P = E.getAttribute("xml:space") !== "preserve", b = e(r(E, "styling", "style")), C = e(r(E, "layout", "region")), B = r(E, "body", "[begin]");
              return [].map.call(B, function(F) {
                var U = t(F, P);
                if (!U || !F.hasAttribute("begin"))
                  return null;
                var w = f(F.getAttribute("begin"), S), k = f(F.getAttribute("dur"), S), W = f(F.getAttribute("end"), S);
                if (w === null)
                  throw s(F);
                if (W === null) {
                  if (k === null)
                    throw s(F);
                  W = w + k;
                }
                var K = new _.default(w - o, W - o, U);
                K.id = Object(D.generateCueId)(K.startTime, K.endTime, K.text);
                var j = C[F.getAttribute("region")], G = b[F.getAttribute("style")];
                K.position = 10, K.size = 80;
                var H = i(j, G), J = H.textAlign;
                if (J) {
                  var Q = g[J];
                  Q && (K.lineAlign = Q), K.align = J;
                }
                return L(K, H), K;
              }).filter(function(F) {
                return F !== null;
              });
            }
            function r(l, o, n) {
              var a = l.getElementsByTagName(o)[0];
              return a ? [].slice.call(a.querySelectorAll(n)) : [];
            }
            function e(l) {
              return l.reduce(function(o, n) {
                var a = n.getAttribute("xml:id");
                return a && (o[a] = n), o;
              }, {});
            }
            function t(l, o) {
              return [].slice.call(l.childNodes).reduce(function(n, a, E) {
                var m;
                return a.nodeName === "br" && E ? n + `
` : (m = a.childNodes) !== null && m !== void 0 && m.length ? t(a, o) : o ? n + a.textContent.trim().replace(/\s+/g, " ") : n + a.textContent;
              }, "");
            }
            function i(l, o) {
              var n = "http://www.w3.org/ns/ttml#styling", a = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"];
              return a.reduce(function(E, m) {
                var S = d(o, n, m) || d(l, n, m);
                return S && (E[m] = S), E;
              }, {});
            }
            function d(l, o, n) {
              return l.hasAttributeNS(o, n) ? l.getAttributeNS(o, n) : null;
            }
            function s(l) {
              return new Error("Could not parse ttml timestamp " + l);
            }
            function f(l, o) {
              if (!l)
                return null;
              var n = Object(A.parseTimeStamp)(l);
              return n === null && (y.test(l) ? n = v(l, o) : p.test(l) && (n = h(l, o))), n;
            }
            function v(l, o) {
              var n = y.exec(l), a = (n[4] | 0) + (n[5] | 0) / o.subFrameRate;
              return (n[1] | 0) * 3600 + (n[2] | 0) * 60 + (n[3] | 0) + a / o.frameRate;
            }
            function h(l, o) {
              var n = p.exec(l), a = Number(n[1]), E = n[2];
              switch (E) {
                case "h":
                  return a * 3600;
                case "m":
                  return a * 60;
                case "ms":
                  return a * 1e3;
                case "f":
                  return a / o.frameRate;
                case "t":
                  return a / o.tickRate;
              }
              return a;
            }
          }, "./src/utils/logger.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "enableLogs", function() {
              return D;
            }), c.d(I, "logger", function() {
              return L;
            });
            var R = function() {
            }, A = { trace: R, debug: R, log: R, warn: R, info: R, error: R }, _ = A;
            function M(u) {
              var y = self.console[u];
              return y ? y.bind(self.console, "[" + u + "] >") : R;
            }
            function O(u) {
              for (var y = arguments.length, p = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
                p[g - 1] = arguments[g];
              p.forEach(function(T) {
                _[T] = u[T] ? u[T].bind(u) : M(T);
              });
            }
            function D(u) {
              if (self.console && u === true || typeof u == "object") {
                O(u, "debug", "log", "info", "warn", "error");
                try {
                  _.log();
                } catch {
                  _ = A;
                }
              } else
                _ = A;
            }
            var L = _;
          }, "./src/utils/mediakeys-helper.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "KeySystems", function() {
              return R;
            }), c.d(I, "requestMediaKeySystemAccess", function() {
              return A;
            });
            var R;
            (function(_) {
              _.WIDEVINE = "com.widevine.alpha", _.PLAYREADY = "com.microsoft.playready";
            })(R || (R = {}));
            var A = function() {
              return typeof self != "undefined" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
            }();
          }, "./src/utils/mediasource-helper.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "getMediaSource", function() {
              return R;
            });
            function R() {
              return self.MediaSource || self.WebKitMediaSource;
            }
          }, "./src/utils/mp4-tools.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "bin2str", function() {
              return O;
            }), c.d(I, "readUint16", function() {
              return D;
            }), c.d(I, "readUint32", function() {
              return L;
            }), c.d(I, "writeUint32", function() {
              return u;
            }), c.d(I, "findBox", function() {
              return y;
            }), c.d(I, "parseSegmentIndex", function() {
              return p;
            }), c.d(I, "parseInitSegment", function() {
              return g;
            }), c.d(I, "getStartDTS", function() {
              return T;
            }), c.d(I, "getDuration", function() {
              return x;
            }), c.d(I, "computeRawDurationFromSamples", function() {
              return r;
            }), c.d(I, "offsetStartDTS", function() {
              return e;
            }), c.d(I, "segmentValidRange", function() {
              return t;
            }), c.d(I, "appendUint8Array", function() {
              return i;
            });
            var R = c("./src/utils/typed-array.ts"), A = c("./src/loader/fragment.ts"), _ = Math.pow(2, 32) - 1, M = [].push;
            function O(d) {
              return String.fromCharCode.apply(null, d);
            }
            function D(d, s) {
              "data" in d && (s += d.start, d = d.data);
              var f = d[s] << 8 | d[s + 1];
              return f < 0 ? 65536 + f : f;
            }
            function L(d, s) {
              "data" in d && (s += d.start, d = d.data);
              var f = d[s] << 24 | d[s + 1] << 16 | d[s + 2] << 8 | d[s + 3];
              return f < 0 ? 4294967296 + f : f;
            }
            function u(d, s, f) {
              "data" in d && (s += d.start, d = d.data), d[s] = f >> 24, d[s + 1] = f >> 16 & 255, d[s + 2] = f >> 8 & 255, d[s + 3] = f & 255;
            }
            function y(d, s) {
              var f = [];
              if (!s.length)
                return f;
              var v, h, l;
              "data" in d ? (v = d.data, h = d.start, l = d.end) : (v = d, h = 0, l = v.byteLength);
              for (var o = h; o < l; ) {
                var n = L(v, o), a = O(v.subarray(o + 4, o + 8)), E = n > 1 ? o + n : l;
                if (a === s[0])
                  if (s.length === 1)
                    f.push({ data: v, start: o + 8, end: E });
                  else {
                    var m = y({ data: v, start: o + 8, end: E }, s.slice(1));
                    m.length && M.apply(f, m);
                  }
                o = E;
              }
              return f;
            }
            function p(d) {
              var s = y(d, ["moov"]), f = s[0], v = f ? f.end : null, h = y(d, ["sidx"]);
              if (!h || !h[0])
                return null;
              var l = [], o = h[0], n = o.data[0], a = n === 0 ? 8 : 16, E = L(o, a);
              a += 4;
              var m = 0, S = 0;
              n === 0 ? a += 8 : a += 16, a += 2;
              var P = o.end + S, b = D(o, a);
              a += 2;
              for (var C = 0; C < b; C++) {
                var B = a, F = L(o, B);
                B += 4;
                var U = F & 2147483647, w = (F & 2147483648) >>> 31;
                if (w === 1)
                  return console.warn("SIDX has hierarchical references (not supported)"), null;
                var k = L(o, B);
                B += 4, l.push({ referenceSize: U, subsegmentDuration: k, info: { duration: k / E, start: P, end: P + U - 1 } }), P += U, B += 4, a = B;
              }
              return { earliestPresentationTime: m, timescale: E, version: n, referencesCount: b, references: l, moovEndOffset: v };
            }
            function g(d) {
              for (var s = [], f = y(d, ["moov", "trak"]), v = 0; v < f.length; v++) {
                var h = f[v], l = y(h, ["tkhd"])[0];
                if (l) {
                  var o = l.data[l.start], n = o === 0 ? 12 : 20, a = L(l, n), E = y(h, ["mdia", "mdhd"])[0];
                  if (E) {
                    o = E.data[E.start], n = o === 0 ? 12 : 20;
                    var m = L(E, n), S = y(h, ["mdia", "hdlr"])[0];
                    if (S) {
                      var P = O(S.data.subarray(S.start + 8, S.start + 12)), b = { soun: A.ElementaryStreamTypes.AUDIO, vide: A.ElementaryStreamTypes.VIDEO }[P];
                      if (b) {
                        var C = y(h, ["mdia", "minf", "stbl", "stsd"])[0], B = void 0;
                        C && (B = O(C.data.subarray(C.start + 12, C.start + 16))), s[a] = { timescale: m, type: b }, s[b] = { timescale: m, id: a, codec: B };
                      }
                    }
                  }
                }
              }
              var F = y(d, ["moov", "mvex", "trex"]);
              return F.forEach(function(U) {
                var w = L(U, 4), k = s[w];
                k && (k.default = { duration: L(U, 12), flags: L(U, 20) });
              }), s;
            }
            function T(d, s) {
              return y(s, ["moof", "traf"]).reduce(function(f, v) {
                var h = y(v, ["tfdt"])[0], l = h.data[h.start], o = y(v, ["tfhd"]).reduce(function(n, a) {
                  var E = L(a, 4), m = d[E];
                  if (m) {
                    var S = L(h, 4);
                    l === 1 && (S *= Math.pow(2, 32), S += L(h, 8));
                    var P = m.timescale || 9e4, b = S / P;
                    if (isFinite(b) && (n === null || b < n))
                      return b;
                  }
                  return n;
                }, null);
                return o !== null && isFinite(o) && (f === null || o < f) ? o : f;
              }, null) || 0;
            }
            function x(d, s) {
              for (var f = 0, v = 0, h = 0, l = y(d, ["moof", "traf"]), o = 0; o < l.length; o++) {
                var n = l[o], a = y(n, ["tfhd"])[0], E = L(a, 4), m = s[E];
                if (!!m) {
                  var S = m.default, P = L(a, 0) | (S == null ? void 0 : S.flags), b = S == null ? void 0 : S.duration;
                  P & 8 && (P & 2 ? b = L(a, 12) : b = L(a, 8));
                  for (var C = m.timescale || 9e4, B = y(n, ["trun"]), F = 0; F < B.length; F++) {
                    if (b) {
                      var U = L(B[F], 4);
                      f = b * U;
                    } else
                      f = r(B[F]);
                    m.type === A.ElementaryStreamTypes.VIDEO ? v += f / C : m.type === A.ElementaryStreamTypes.AUDIO && (h += f / C);
                  }
                }
              }
              if (v === 0 && h === 0) {
                var w = p(d);
                if (w != null && w.references)
                  return w.references.reduce(function(k, W) {
                    return k + W.info.duration || 0;
                  }, 0);
              }
              return v || h;
            }
            function r(d) {
              var s = L(d, 0), f = 8;
              s & 1 && (f += 4), s & 4 && (f += 4);
              for (var v = 0, h = L(d, 4), l = 0; l < h; l++) {
                if (s & 256) {
                  var o = L(d, f);
                  v += o, f += 4;
                }
                s & 512 && (f += 4), s & 1024 && (f += 4), s & 2048 && (f += 4);
              }
              return v;
            }
            function e(d, s, f) {
              y(s, ["moof", "traf"]).forEach(function(v) {
                y(v, ["tfhd"]).forEach(function(h) {
                  var l = L(h, 4), o = d[l];
                  if (!!o) {
                    var n = o.timescale || 9e4;
                    y(v, ["tfdt"]).forEach(function(a) {
                      var E = a.data[a.start], m = L(a, 4);
                      if (E === 0)
                        u(a, 4, m - f * n);
                      else {
                        m *= Math.pow(2, 32), m += L(a, 8), m -= f * n, m = Math.max(m, 0);
                        var S = Math.floor(m / (_ + 1)), P = Math.floor(m % (_ + 1));
                        u(a, 4, S), u(a, 8, P);
                      }
                    });
                  }
                });
              });
            }
            function t(d) {
              var s = { valid: null, remainder: null }, f = y(d, ["moof"]);
              if (f) {
                if (f.length < 2)
                  return s.remainder = d, s;
              } else
                return s;
              var v = f[f.length - 1];
              return s.valid = Object(R.sliceUint8)(d, 0, v.start - 8), s.remainder = Object(R.sliceUint8)(d, v.start - 8), s;
            }
            function i(d, s) {
              var f = new Uint8Array(d.length + s.length);
              return f.set(d), f.set(s, d.length), f;
            }
          }, "./src/utils/output-filter.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "default", function() {
              return R;
            });
            var R = function() {
              function A(M, O) {
                this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = M, this.trackName = O;
              }
              var _ = A.prototype;
              return _.dispatchCue = function() {
                this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
              }, _.newCue = function(O, D, L) {
                (this.startTime === null || this.startTime > O) && (this.startTime = O), this.endTime = D, this.screen = L, this.timelineController.createCaptionsTrack(this.trackName);
              }, _.reset = function() {
                this.cueRanges = [];
              }, A;
            }();
          }, "./src/utils/texttrack-utils.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "sendAddTrackEvent", function() {
              return A;
            }), c.d(I, "addCueToTrack", function() {
              return _;
            }), c.d(I, "clearCurrentCues", function() {
              return M;
            }), c.d(I, "removeCuesInRange", function() {
              return O;
            }), c.d(I, "getCuesInRange", function() {
              return L;
            });
            var R = c("./src/utils/logger.ts");
            function A(u, y) {
              var p;
              try {
                p = new Event("addtrack");
              } catch {
                p = document.createEvent("Event"), p.initEvent("addtrack", false, false);
              }
              p.track = u, y.dispatchEvent(p);
            }
            function _(u, y) {
              var p = u.mode;
              if (p === "disabled" && (u.mode = "hidden"), u.cues && !u.cues.getCueById(y.id))
                try {
                  if (u.addCue(y), !u.cues.getCueById(y.id))
                    throw new Error("addCue is failed for: " + y);
                } catch (T) {
                  R.logger.debug("[texttrack-utils]: " + T);
                  var g = new self.TextTrackCue(y.startTime, y.endTime, y.text);
                  g.id = y.id, u.addCue(g);
                }
              p === "disabled" && (u.mode = p);
            }
            function M(u) {
              var y = u.mode;
              if (y === "disabled" && (u.mode = "hidden"), u.cues)
                for (var p = u.cues.length; p--; )
                  u.removeCue(u.cues[p]);
              y === "disabled" && (u.mode = y);
            }
            function O(u, y, p) {
              var g = u.mode;
              if (g === "disabled" && (u.mode = "hidden"), u.cues && u.cues.length > 0)
                for (var T = L(u.cues, y, p), x = 0; x < T.length; x++)
                  u.removeCue(T[x]);
              g === "disabled" && (u.mode = g);
            }
            function D(u, y) {
              if (y < u[0].startTime)
                return 0;
              var p = u.length - 1;
              if (y > u[p].endTime)
                return -1;
              for (var g = 0, T = p; g <= T; ) {
                var x = Math.floor((T + g) / 2);
                if (y < u[x].startTime)
                  T = x - 1;
                else if (y > u[x].startTime && g < p)
                  g = x + 1;
                else
                  return x;
              }
              return u[g].startTime - y < y - u[T].startTime ? g : T;
            }
            function L(u, y, p) {
              var g = [], T = D(u, y);
              if (T > -1)
                for (var x = T, r = u.length; x < r; x++) {
                  var e = u[x];
                  if (e.startTime >= y && e.endTime <= p)
                    g.push(e);
                  else if (e.startTime > p)
                    return g;
                }
              return g;
            }
          }, "./src/utils/time-ranges.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = { toString: function(_) {
              for (var M = "", O = _.length, D = 0; D < O; D++)
                M += "[" + _.start(D).toFixed(3) + "," + _.end(D).toFixed(3) + "]";
              return M;
            } };
            I.default = R;
          }, "./src/utils/timescale-conversion.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "toTimescaleFromBase", function() {
              return A;
            }), c.d(I, "toTimescaleFromScale", function() {
              return _;
            }), c.d(I, "toMsFromMpegTsClock", function() {
              return M;
            }), c.d(I, "toMpegTsClockFromTimescale", function() {
              return O;
            });
            var R = 9e4;
            function A(D, L, u, y) {
              u === void 0 && (u = 1), y === void 0 && (y = false);
              var p = D * L * u;
              return y ? Math.round(p) : p;
            }
            function _(D, L, u, y) {
              return u === void 0 && (u = 1), y === void 0 && (y = false), A(D, L, 1 / u, y);
            }
            function M(D, L) {
              return L === void 0 && (L = false), A(D, 1e3, 1 / R, L);
            }
            function O(D, L) {
              return L === void 0 && (L = 1), A(D, R, 1 / L);
            }
          }, "./src/utils/typed-array.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "sliceUint8", function() {
              return R;
            });
            function R(A, _, M) {
              return Uint8Array.prototype.slice ? A.slice(_, M) : new Uint8Array(Array.prototype.slice.call(A, _, M));
            }
          }, "./src/utils/vttcue.ts": function(N, I, c) {
            "use strict";
            c.r(I), I.default = function() {
              if (typeof self != "undefined" && self.VTTCue)
                return self.VTTCue;
              var R = ["", "lr", "rl"], A = ["start", "middle", "end", "left", "right"];
              function _(u, y) {
                if (typeof y != "string" || !Array.isArray(u))
                  return false;
                var p = y.toLowerCase();
                return ~u.indexOf(p) ? p : false;
              }
              function M(u) {
                return _(R, u);
              }
              function O(u) {
                return _(A, u);
              }
              function D(u) {
                for (var y = arguments.length, p = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
                  p[g - 1] = arguments[g];
                for (var T = 1; T < arguments.length; T++) {
                  var x = arguments[T];
                  for (var r in x)
                    u[r] = x[r];
                }
                return u;
              }
              function L(u, y, p) {
                var g = this, T = { enumerable: true };
                g.hasBeenReset = false;
                var x = "", r = false, e = u, t = y, i = p, d = null, s = "", f = true, v = "auto", h = "start", l = 50, o = "middle", n = 50, a = "middle";
                Object.defineProperty(g, "id", D({}, T, { get: function() {
                  return x;
                }, set: function(m) {
                  x = "" + m;
                } })), Object.defineProperty(g, "pauseOnExit", D({}, T, { get: function() {
                  return r;
                }, set: function(m) {
                  r = !!m;
                } })), Object.defineProperty(g, "startTime", D({}, T, { get: function() {
                  return e;
                }, set: function(m) {
                  if (typeof m != "number")
                    throw new TypeError("Start time must be set to a number.");
                  e = m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "endTime", D({}, T, { get: function() {
                  return t;
                }, set: function(m) {
                  if (typeof m != "number")
                    throw new TypeError("End time must be set to a number.");
                  t = m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "text", D({}, T, { get: function() {
                  return i;
                }, set: function(m) {
                  i = "" + m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "region", D({}, T, { get: function() {
                  return d;
                }, set: function(m) {
                  d = m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "vertical", D({}, T, { get: function() {
                  return s;
                }, set: function(m) {
                  var S = M(m);
                  if (S === false)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                  s = S, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "snapToLines", D({}, T, { get: function() {
                  return f;
                }, set: function(m) {
                  f = !!m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "line", D({}, T, { get: function() {
                  return v;
                }, set: function(m) {
                  if (typeof m != "number" && m !== "auto")
                    throw new SyntaxError("An invalid number or illegal string was specified.");
                  v = m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "lineAlign", D({}, T, { get: function() {
                  return h;
                }, set: function(m) {
                  var S = O(m);
                  if (!S)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                  h = S, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "position", D({}, T, { get: function() {
                  return l;
                }, set: function(m) {
                  if (m < 0 || m > 100)
                    throw new Error("Position must be between 0 and 100.");
                  l = m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "positionAlign", D({}, T, { get: function() {
                  return o;
                }, set: function(m) {
                  var S = O(m);
                  if (!S)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                  o = S, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "size", D({}, T, { get: function() {
                  return n;
                }, set: function(m) {
                  if (m < 0 || m > 100)
                    throw new Error("Size must be between 0 and 100.");
                  n = m, this.hasBeenReset = true;
                } })), Object.defineProperty(g, "align", D({}, T, { get: function() {
                  return a;
                }, set: function(m) {
                  var S = O(m);
                  if (!S)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                  a = S, this.hasBeenReset = true;
                } })), g.displayState = void 0;
              }
              return L.prototype.getCueAsHTML = function() {
                var u = self.WebVTT;
                return u.convertCueToDOMTree(self, this.text);
              }, L;
            }();
          }, "./src/utils/vttparser.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "parseTimeStamp", function() {
              return _;
            }), c.d(I, "fixLineBreaks", function() {
              return y;
            }), c.d(I, "VTTParser", function() {
              return p;
            });
            var R = c("./src/utils/vttcue.ts"), A = function() {
              function g() {
              }
              var T = g.prototype;
              return T.decode = function(r, e) {
                if (!r)
                  return "";
                if (typeof r != "string")
                  throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(r));
              }, g;
            }();
            function _(g) {
              function T(r, e, t, i) {
                return (r | 0) * 3600 + (e | 0) * 60 + (t | 0) + parseFloat(i || 0);
              }
              var x = g.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
              return x ? parseFloat(x[2]) > 59 ? T(x[2], x[3], 0, x[4]) : T(x[1], x[2], x[3], x[4]) : null;
            }
            var M = function() {
              function g() {
                this.values = Object.create(null);
              }
              var T = g.prototype;
              return T.set = function(r, e) {
                !this.get(r) && e !== "" && (this.values[r] = e);
              }, T.get = function(r, e, t) {
                return t ? this.has(r) ? this.values[r] : e[t] : this.has(r) ? this.values[r] : e;
              }, T.has = function(r) {
                return r in this.values;
              }, T.alt = function(r, e, t) {
                for (var i = 0; i < t.length; ++i)
                  if (e === t[i]) {
                    this.set(r, e);
                    break;
                  }
              }, T.integer = function(r, e) {
                /^-?\d+$/.test(e) && this.set(r, parseInt(e, 10));
              }, T.percent = function(r, e) {
                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                  var t = parseFloat(e);
                  if (t >= 0 && t <= 100)
                    return this.set(r, t), true;
                }
                return false;
              }, g;
            }();
            function O(g, T, x, r) {
              var e = r ? g.split(r) : [g];
              for (var t in e)
                if (typeof e[t] == "string") {
                  var i = e[t].split(x);
                  if (i.length === 2) {
                    var d = i[0], s = i[1];
                    T(d, s);
                  }
                }
            }
            var D = new R.default(0, 0, ""), L = D.align === "middle" ? "middle" : "center";
            function u(g, T, x) {
              var r = g;
              function e() {
                var d = _(g);
                if (d === null)
                  throw new Error("Malformed timestamp: " + r);
                return g = g.replace(/^[^\sa-zA-Z-]+/, ""), d;
              }
              function t(d, s) {
                var f = new M();
                O(d, function(l, o) {
                  var n;
                  switch (l) {
                    case "region":
                      for (var a = x.length - 1; a >= 0; a--)
                        if (x[a].id === o) {
                          f.set(l, x[a].region);
                          break;
                        }
                      break;
                    case "vertical":
                      f.alt(l, o, ["rl", "lr"]);
                      break;
                    case "line":
                      n = o.split(","), f.integer(l, n[0]), f.percent(l, n[0]) && f.set("snapToLines", false), f.alt(l, n[0], ["auto"]), n.length === 2 && f.alt("lineAlign", n[1], ["start", L, "end"]);
                      break;
                    case "position":
                      n = o.split(","), f.percent(l, n[0]), n.length === 2 && f.alt("positionAlign", n[1], ["start", L, "end", "line-left", "line-right", "auto"]);
                      break;
                    case "size":
                      f.percent(l, o);
                      break;
                    case "align":
                      f.alt(l, o, ["start", L, "end", "left", "right"]);
                      break;
                  }
                }, /:/, /\s/), s.region = f.get("region", null), s.vertical = f.get("vertical", "");
                var v = f.get("line", "auto");
                v === "auto" && D.line === -1 && (v = -1), s.line = v, s.lineAlign = f.get("lineAlign", "start"), s.snapToLines = f.get("snapToLines", true), s.size = f.get("size", 100), s.align = f.get("align", L);
                var h = f.get("position", "auto");
                h === "auto" && D.position === 50 && (h = s.align === "start" || s.align === "left" ? 0 : s.align === "end" || s.align === "right" ? 100 : 50), s.position = h;
              }
              function i() {
                g = g.replace(/^\s+/, "");
              }
              if (i(), T.startTime = e(), i(), g.substr(0, 3) !== "-->")
                throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + r);
              g = g.substr(3), i(), T.endTime = e(), i(), t(g, T);
            }
            function y(g) {
              return g.replace(/<br(?: \/)?>/gi, `
`);
            }
            var p = function() {
              function g() {
                this.state = "INITIAL", this.buffer = "", this.decoder = new A(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
              }
              var T = g.prototype;
              return T.parse = function(r) {
                var e = this;
                r && (e.buffer += e.decoder.decode(r, { stream: true }));
                function t() {
                  var h = e.buffer, l = 0;
                  for (h = y(h); l < h.length && h[l] !== "\r" && h[l] !== `
`; )
                    ++l;
                  var o = h.substr(0, l);
                  return h[l] === "\r" && ++l, h[l] === `
` && ++l, e.buffer = h.substr(l), o;
                }
                function i(h) {
                  O(h, function(l, o) {
                  }, /:/);
                }
                try {
                  var d = "";
                  if (e.state === "INITIAL") {
                    if (!/\r\n|\n/.test(e.buffer))
                      return this;
                    d = t();
                    var s = d.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                    if (!s || !s[0])
                      throw new Error("Malformed WebVTT signature.");
                    e.state = "HEADER";
                  }
                  for (var f = false; e.buffer; ) {
                    if (!/\r\n|\n/.test(e.buffer))
                      return this;
                    switch (f ? f = false : d = t(), e.state) {
                      case "HEADER":
                        /:/.test(d) ? i(d) : d || (e.state = "ID");
                        continue;
                      case "NOTE":
                        d || (e.state = "ID");
                        continue;
                      case "ID":
                        if (/^NOTE($|[ \t])/.test(d)) {
                          e.state = "NOTE";
                          break;
                        }
                        if (!d)
                          continue;
                        if (e.cue = new R.default(0, 0, ""), e.state = "CUE", d.indexOf("-->") === -1) {
                          e.cue.id = d;
                          continue;
                        }
                      case "CUE":
                        if (!e.cue) {
                          e.state = "BADCUE";
                          continue;
                        }
                        try {
                          u(d, e.cue, e.regionList);
                        } catch {
                          e.cue = null, e.state = "BADCUE";
                          continue;
                        }
                        e.state = "CUETEXT";
                        continue;
                      case "CUETEXT":
                        {
                          var v = d.indexOf("-->") !== -1;
                          if (!d || v && (f = true)) {
                            e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                            continue;
                          }
                          if (e.cue === null)
                            continue;
                          e.cue.text && (e.cue.text += `
`), e.cue.text += d;
                        }
                        continue;
                      case "BADCUE":
                        d || (e.state = "ID");
                    }
                  }
                } catch {
                  e.state === "CUETEXT" && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = e.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
                }
                return this;
              }, T.flush = function() {
                var r = this;
                try {
                  if ((r.cue || r.state === "HEADER") && (r.buffer += `

`, r.parse()), r.state === "INITIAL" || r.state === "BADWEBVTT")
                    throw new Error("Malformed WebVTT signature.");
                } catch (e) {
                  r.onparsingerror && r.onparsingerror(e);
                }
                return r.onflush && r.onflush(), this;
              }, g;
            }();
          }, "./src/utils/webvtt-parser.ts": function(N, I, c) {
            "use strict";
            c.r(I), c.d(I, "generateCueId", function() {
              return p;
            }), c.d(I, "parseWebVTT", function() {
              return T;
            });
            var R = c("./src/polyfills/number.ts"), A = c("./src/utils/vttparser.ts"), _ = c("./src/demux/id3.ts"), M = c("./src/utils/timescale-conversion.ts"), O = c("./src/remux/mp4-remuxer.ts"), D = /\r\n|\n\r|\n|\r/g, L = function(r, e, t) {
              return t === void 0 && (t = 0), r.substr(t, e.length) === e;
            }, u = function(r) {
              var e = parseInt(r.substr(-3)), t = parseInt(r.substr(-6, 2)), i = parseInt(r.substr(-9, 2)), d = r.length > 9 ? parseInt(r.substr(0, r.indexOf(":"))) : 0;
              if (!Object(R.isFiniteNumber)(e) || !Object(R.isFiniteNumber)(t) || !Object(R.isFiniteNumber)(i) || !Object(R.isFiniteNumber)(d))
                throw Error("Malformed X-TIMESTAMP-MAP: Local:" + r);
              return e += 1e3 * t, e += 60 * 1e3 * i, e += 60 * 60 * 1e3 * d, e;
            }, y = function(r) {
              for (var e = 5381, t = r.length; t; )
                e = e * 33 ^ r.charCodeAt(--t);
              return (e >>> 0).toString();
            };
            function p(x, r, e) {
              return y(x.toString()) + y(r.toString()) + y(e);
            }
            var g = function(r, e, t) {
              var i = r[e], d = r[i.prevCC];
              if (!d || !d.new && i.new) {
                r.ccOffset = r.presentationOffset = i.start, i.new = false;
                return;
              }
              for (; (s = d) !== null && s !== void 0 && s.new; ) {
                var s;
                r.ccOffset += i.start - d.start, i.new = false, i = d, d = r[i.prevCC];
              }
              r.presentationOffset = t;
            };
            function T(x, r, e, t, i, d, s, f) {
              var v = new A.VTTParser(), h = Object(_.utf8ArrayToStr)(new Uint8Array(x)).trim().replace(D, `
`).split(`
`), l = [], o = Object(M.toMpegTsClockFromTimescale)(r, e), n = "00:00.000", a = 0, E = 0, m, S = true, P = false;
              v.oncue = function(b) {
                var C = t[i], B = t.ccOffset, F = (a - o) / 9e4;
                if (C != null && C.new && (E !== void 0 ? B = t.ccOffset = C.start : g(t, i, F)), F && (B = F - t.presentationOffset), P) {
                  var U = b.endTime - b.startTime, w = Object(O.normalizePts)((b.startTime + B - E) * 9e4, d * 9e4) / 9e4;
                  b.startTime = w, b.endTime = w + U;
                }
                var k = b.text.trim();
                b.text = decodeURIComponent(encodeURIComponent(k)), b.id || (b.id = p(b.startTime, b.endTime, k)), b.endTime > 0 && l.push(b);
              }, v.onparsingerror = function(b) {
                m = b;
              }, v.onflush = function() {
                if (m) {
                  f(m);
                  return;
                }
                s(l);
              }, h.forEach(function(b) {
                if (S)
                  if (L(b, "X-TIMESTAMP-MAP=")) {
                    S = false, P = true, b.substr(16).split(",").forEach(function(C) {
                      L(C, "LOCAL:") ? n = C.substr(6) : L(C, "MPEGTS:") && (a = parseInt(C.substr(7)));
                    });
                    try {
                      E = u(n) / 1e3;
                    } catch (C) {
                      P = false, m = C;
                    }
                    return;
                  } else
                    b === "" && (S = false);
                v.parse(b + `
`);
              }), v.flush();
            }
          }, "./src/utils/xhr-loader.ts": function(N, I, c) {
            "use strict";
            c.r(I);
            var R = c("./src/utils/logger.ts"), A = c("./src/loader/load-stats.ts"), _ = /^age:\s*[\d.]+\s*$/m, M = function() {
              function O(L) {
                this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = L ? L.xhrSetup : null, this.stats = new A.LoadStats(), this.retryDelay = 0;
              }
              var D = O.prototype;
              return D.destroy = function() {
                this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
              }, D.abortInternal = function() {
                var u = this.loader;
                self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), u && (u.onreadystatechange = null, u.onprogress = null, u.readyState !== 4 && (this.stats.aborted = true, u.abort()));
              }, D.abort = function() {
                var u;
                this.abortInternal(), (u = this.callbacks) !== null && u !== void 0 && u.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
              }, D.load = function(u, y, p) {
                if (this.stats.loading.start)
                  throw new Error("Loader can only be used once.");
                this.stats.loading.start = self.performance.now(), this.context = u, this.config = y, this.callbacks = p, this.retryDelay = y.retryDelay, this.loadInternal();
              }, D.loadInternal = function() {
                var u = this.config, y = this.context;
                if (!!u) {
                  var p = this.loader = new self.XMLHttpRequest(), g = this.stats;
                  g.loading.first = 0, g.loaded = 0;
                  var T = this.xhrSetup;
                  try {
                    if (T)
                      try {
                        T(p, y.url);
                      } catch {
                        p.open("GET", y.url, true), T(p, y.url);
                      }
                    p.readyState || p.open("GET", y.url, true);
                  } catch (x) {
                    this.callbacks.onError({ code: p.status, text: x.message }, y, p);
                    return;
                  }
                  y.rangeEnd && p.setRequestHeader("Range", "bytes=" + y.rangeStart + "-" + (y.rangeEnd - 1)), p.onreadystatechange = this.readystatechange.bind(this), p.onprogress = this.loadprogress.bind(this), p.responseType = y.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), u.timeout), p.send();
                }
              }, D.readystatechange = function() {
                var u = this.context, y = this.loader, p = this.stats;
                if (!(!u || !y)) {
                  var g = y.readyState, T = this.config;
                  if (!p.aborted && g >= 2)
                    if (self.clearTimeout(this.requestTimeout), p.loading.first === 0 && (p.loading.first = Math.max(self.performance.now(), p.loading.start)), g === 4) {
                      y.onreadystatechange = null, y.onprogress = null;
                      var x = y.status;
                      if (x >= 200 && x < 300) {
                        p.loading.end = Math.max(self.performance.now(), p.loading.first);
                        var r, e;
                        if (u.responseType === "arraybuffer" ? (r = y.response, e = r.byteLength) : (r = y.responseText, e = r.length), p.loaded = p.total = e, !this.callbacks)
                          return;
                        var t = this.callbacks.onProgress;
                        if (t && t(p, u, r, y), !this.callbacks)
                          return;
                        var i = { url: y.responseURL, data: r };
                        this.callbacks.onSuccess(i, p, u, y);
                      } else
                        p.retry >= T.maxRetry || x >= 400 && x < 499 ? (R.logger.error(x + " while loading " + u.url), this.callbacks.onError({ code: x, text: y.statusText }, u, y)) : (R.logger.warn(x + " while loading " + u.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, T.maxRetryDelay), p.retry++);
                    } else
                      self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), T.timeout);
                }
              }, D.loadtimeout = function() {
                R.logger.warn("timeout while loading " + this.context.url);
                var u = this.callbacks;
                u && (this.abortInternal(), u.onTimeout(this.stats, this.context, this.loader));
              }, D.loadprogress = function(u) {
                var y = this.stats;
                y.loaded = u.loaded, u.lengthComputable && (y.total = u.total);
              }, D.getCacheAge = function() {
                var u = null;
                if (this.loader && _.test(this.loader.getAllResponseHeaders())) {
                  var y = this.loader.getResponseHeader("age");
                  u = y ? parseFloat(y) : null;
                }
                return u;
              }, O;
            }();
            I.default = M;
          } }).default;
        });
      });
      var ft = Ke((ut) => {
        var Pt = Object.create, Ce = Object.defineProperty, It = Object.getOwnPropertyDescriptor, Mt = Object.getOwnPropertyNames, bt = Object.getPrototypeOf, Ct = Object.prototype.hasOwnProperty, $e = (N) => Ce(N, "__esModule", { value: true }), Ft = (N, I) => {
          $e(N);
          for (var c in I)
            Ce(N, c, { get: I[c], enumerable: true });
        }, Bt = (N, I, c) => {
          if (I && typeof I == "object" || typeof I == "function")
            for (let R of Mt(I))
              !Ct.call(N, R) && R !== "default" && Ce(N, R, { get: () => I[R], enumerable: !(c = It(I, R)) || c.enumerable });
          return N;
        }, Ze = (N) => Bt($e(Ce(N != null ? Pt(bt(N)) : {}, "default", N && N.__esModule && "default" in N ? { get: () => N.default, enumerable: true } : { value: N, enumerable: true })), N);
        Ft(ut, { ExtensionMimeTypeMap: () => Ae, Hls: () => Te.default, MimeTypeShorthandMap: () => Fe, StreamTypes: () => tt, allMediaTypes: () => Ut, getStreamTypeConfig: () => nt, getType: () => He, inferMimeTypeFromURL: () => it, initialize: () => kt, loadMedia: () => lt, mux: () => qe.default, setupHls: () => st, setupMux: () => ot, shorthandKeys: () => Be, teardown: () => at, toMuxVideoURL: () => wt, toPlaybackIdParts: () => rt });
        var qe = Ze(Qe()), Te = Ze(Je()), et = (N, I) => N in I, tt = { VOD: "on-demand", LIVE: "live", LL_LIVE: "ll-live" }, Ae = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" }, Fe = { HLS: Ae.M3U8 }, Be = Object.keys(Fe), Ut = [...Object.values(Ae), ...Be, ...Be.map((N) => N.toUpperCase()), ...Be.map((N) => N.toLowerCase())], rt = (N) => {
          let I = N.indexOf("?");
          if (I < 0)
            return [N];
          let c = N.slice(0, I), R = N.slice(I);
          return [c, R];
        }, wt = (N) => {
          if (!N)
            return;
          let [I, c = ""] = rt(N);
          return `https://stream.mux.com/${I}.m3u8${c}`;
        }, it = (N) => {
          let I = "";
          try {
            I = new URL(N).pathname;
          } catch {
            console.error("invalid url");
          }
          let c = I.lastIndexOf(".");
          if (c < 0)
            return "";
          let R = I.slice(c + 1).toUpperCase();
          return et(R, Ae) ? Ae[R] : "";
        }, He = (N) => {
          let I = N.type;
          if (I) {
            let R = I.toUpperCase();
            return et(R, Fe) ? Fe[R] : I;
          }
          let { src: c } = N;
          return c ? it(c) : "";
        }, nt = (N) => N === tt.LL_LIVE ? { maxFragLookUpTolerance: 1e-3 } : {}, at = (N, I) => {
          I && (I.detachMedia(), I.destroy()), (N == null ? void 0 : N.mux) && (N.mux.destroy(), N.mux);
        }, st = (N, I) => {
          var c;
          let { debug: R, preferMse: A, streamType: _, startTime: M = -1 } = N, O = He(N), D = O === Ae.M3U8, L = !O || ((c = I == null ? void 0 : I.canPlayType(O)) != null ? c : true), u = Te.default.isSupported();
          if (D && !(!D || L && !(A && u)) && u) {
            let y = nt(_);
            return new Te.default({ debug: R, startPosition: M, ...y });
          }
        }, ot = (N, I, c) => {
          let { envKey: R } = N;
          if (R && I) {
            let { playerInitTime: A, playerSoftwareName: _, playerSoftwareVersion: M, beaconDomain: O, metadata: D, debug: L } = N;
            qe.default.monitor(I, { debug: L, beaconDomain: O, hlsjs: c, Hls: c ? Te.default : void 0, data: { env_key: R, player_software_name: _, player_software_version: M, player_init_time: A, ...D } });
          }
        }, lt = (N, I, c) => {
          var R;
          if (!I) {
            console.warn("attempting to load media before mediaEl exists");
            return;
          }
          let { preferMse: A } = N, _ = He(N), M = _ === Ae.M3U8, O = !_ || ((R = I == null ? void 0 : I.canPlayType(_)) != null ? R : true), D = Te.default.isSupported(), L = !M || O && !(A && D), { src: u } = N;
          if (I && O && L)
            if (typeof u == "string") {
              let { startTime: y } = N;
              if (I.setAttribute("src", u), y) {
                let p = ({ target: g }) => {
                  g.currentTime = y, g.removeEventListener("loadedmetadata", p);
                };
                I.addEventListener("loadedmetadata", p);
              }
            } else
              I.removeAttribute("src");
          else
            c && u ? (c.on(Te.default.Events.ERROR, (y, p) => {
              if (p.fatal)
                switch (p.type) {
                  case Te.default.ErrorTypes.NETWORK_ERROR:
                    console.error("fatal network error encountered, try to recover"), c.startLoad();
                    break;
                  case Te.default.ErrorTypes.MEDIA_ERROR:
                    console.error("fatal media error encountered, try to recover"), c.recoverMediaError();
                    break;
                  default:
                    console.error("unrecoverable fatal error encountered, cannot recover (check logs for more info)"), c.destroy();
                    break;
                }
            }), c.loadSource(u), c.attachMedia(I)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
        }, kt = (N, I, c) => {
          at(I, c);
          let R = st(N, I);
          return ot(N, I, R), lt(N, I, R), R;
        };
      });
      var Xe = document.createElement("template");
      Xe.innerHTML = `
<style>
  :host {
    /* Supposed to reset styles. Need to understand the specific effects more */
    all: initial;

    /* display:inline (like the native el) makes it so you can't fill
      the container with the native el */
    display: inline-block;
    box-sizing: border-box;

    width: auto;
    height: auto;
  }

  audio {
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
  }

</style>

<audio crossorigin></audio>
`;
      var Oe = class extends HTMLElement {
        constructor() {
          super();
          var I = this.attachShadow({ mode: "open" });
          this.shadowRoot.appendChild(Xe.content.cloneNode(true));
          let c = this.nativeEl = this.shadowRoot.querySelector("audio");
          Array.prototype.forEach.call(this.attributes, (_) => {
            this.attributeChangedCallback(_.name, null, _.value);
          }), c.defaultMuted && (c.muted = true), this.shadowRoot.appendChild(c), this.querySelectorAll(":scope > track").forEach((_) => {
            this.nativeEl.appendChild(_.cloneNode());
          });
          let R = (_, M) => {
            for (let O of _)
              O.type === "childList" && (O.removedNodes.forEach((D) => {
                this.nativeEl.removeChild(this.nativeEl.querySelector(`track[src="${D.src}"]`));
              }), O.addedNodes.forEach((D) => {
                this.nativeEl.appendChild(D.cloneNode());
              }));
          };
          new MutationObserver(R).observe(this, { childList: true, subtree: true });
        }
        static get observedAttributes() {
          let I = [];
          Object.getOwnPropertyNames(this.prototype).forEach((R) => {
            let A = false;
            try {
              typeof this.prototype[R] == "function" && (A = true);
            } catch {
            }
            !A && R !== R.toUpperCase() && I.push(R.toLowerCase());
          });
          let c = Object.getPrototypeOf(this).observedAttributes;
          return c && (I = I.concat(c)), I;
        }
        attributeChangedCallback(I, c, R) {
          let A = Object.getOwnPropertyNames(Object.getPrototypeOf(this)), _ = Rt(A, I), M = Object.getPrototypeOf(this.constructor).toString().indexOf("function HTMLElement") === 0;
          _ && !M ? typeof this[_] == "boolean" ? R === null ? this[_] = false : this[_] = true : this[_] = R : R === null ? this.nativeEl.removeAttribute(I) : ["id", "class"].indexOf(I) === -1 && this.nativeEl.setAttribute(I, R);
        }
        connectedCallback() {
        }
      }, Me = [], ze = document.createElement("audio"), Ot = ["webkitDisplayingFullscreen", "webkitSupportsFullscreen"];
      for (let N = Object.getPrototypeOf(ze); N && N !== HTMLElement.prototype; N = Object.getPrototypeOf(N))
        Object.keys(N).forEach((I) => {
          Ot.indexOf(I) === -1 && Me.push(I);
        });
      Me = Me.concat(Object.keys(EventTarget.prototype));
      Me.forEach((N) => {
        if (typeof ze[N] == "function")
          Oe.prototype[N] = function() {
            return this.nativeEl[N].apply(this.nativeEl, arguments);
          };
        else {
          let c = { get() {
            return this.nativeEl[N];
          } };
          N !== N.toUpperCase() && (c.set = function(R) {
            this.nativeEl[N] = R;
          }), Object.defineProperty(Oe.prototype, N, c);
        }
      });
      function Rt(N, I) {
        let c = null;
        return N.forEach((R) => {
          R.toLowerCase() == I.toLowerCase() && (c = R);
        }), c;
      }
      globalThis.customElements.get("custom-audio") || (globalThis.customElements.define("custom-audio", Oe), globalThis.CustomAudioElement = Oe);
      var We = Oe;
      var xe = Dt(ft());
      var Nt = () => {
        try {
          return "0.2.0";
        } catch {
        }
        return "UNKNOWN";
      }, Kt = Nt(), dt = () => Kt;
      var le = { ENV_KEY: "env-key", DEBUG: "debug", PLAYBACK_ID: "playback-id", METADATA_URL: "metadata-url", PREFER_MSE: "prefer-mse", METADATA_VIDEO_ID: "metadata-video-id", METADATA_VIDEO_TITLE: "metadata-video-title", METADATA_VIEWER_USER_ID: "metadata-viewer-user-id", BEACON_DOMAIN: "beacon-domain", TYPE: "type", STREAM_TYPE: "stream-type", START_TIME: "start-time" }, Wt = Object.values(le), jt = dt(), Gt = "mux-audio", Ue = class extends We {
        constructor() {
          super();
          this.__metadata = {};
          this.__muxPlayerInitTime = Date.now();
        }
        static get observedAttributes() {
          var I;
          return [...Wt, ...(I = We.observedAttributes) != null ? I : []];
        }
        get playerSoftwareName() {
          return Gt;
        }
        get playerSoftwareVersion() {
          return jt;
        }
        get hls() {
          return this.__hls;
        }
        get mux() {
          return this.nativeEl.mux;
        }
        get src() {
          return this.getAttribute("src");
        }
        set src(I) {
          I !== this.src && (I == null ? this.removeAttribute("src") : this.setAttribute("src", I));
        }
        get debug() {
          return this.getAttribute(le.DEBUG) != null;
        }
        set debug(I) {
          I !== this.debug && (I ? this.setAttribute(le.DEBUG, "") : this.removeAttribute(le.DEBUG));
        }
        get startTime() {
          let I = this.getAttribute(le.START_TIME);
          if (I == null)
            return;
          let c = +I;
          return Number.isNaN(c) ? void 0 : c;
        }
        set startTime(I) {
          I !== this.startTime && (I == null ? this.removeAttribute(le.START_TIME) : this.setAttribute(le.START_TIME, `${I}`));
        }
        get beaconDomain() {
          var I;
          return (I = this.getAttribute(le.BEACON_DOMAIN)) != null ? I : void 0;
        }
        set beaconDomain(I) {
          I !== this.beaconDomain && (I ? this.setAttribute(le.BEACON_DOMAIN, I) : this.removeAttribute(le.BEACON_DOMAIN));
        }
        get streamType() {
          var I;
          return (I = this.getAttribute(le.STREAM_TYPE)) != null ? I : void 0;
        }
        set streamType(I) {
          I !== this.streamType && (I ? this.setAttribute(le.STREAM_TYPE, I) : this.removeAttribute(le.STREAM_TYPE));
        }
        get preferMSE() {
          return this.getAttribute(le.PREFER_MSE) != null;
        }
        set preferMSE(I) {
          I ? this.setAttribute(le.PREFER_MSE, "") : this.removeAttribute(le.PREFER_MSE);
        }
        get metadata() {
          return this.__metadata;
        }
        set metadata(I) {
          this.__metadata = I != null ? I : {}, this.mux && (console.info("Some metadata values may not be overridable at this time. Make sure you set all metadata to override before setting the src."), this.mux.emit("hb", this.__metadata));
        }
        load() {
          let I = (0, xe.initialize)(this, this.nativeEl, this.__hls);
          this.__hls = I;
        }
        unload() {
          (0, xe.teardown)(this.nativeEl, this.__hls), this.__hls = void 0;
        }
        attributeChangedCallback(I, c, R) {
          switch (I) {
            case "src":
              let A = !!c, _ = !!R;
              !A && _ ? this.load() : A && !_ ? this.unload() : A && _ && (this.unload(), this.load());
              break;
            case le.PLAYBACK_ID:
              this.src = (0, xe.toMuxVideoURL)(R != null ? R : void 0);
              break;
            case le.DEBUG:
              let M = this.debug;
              this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this.hls && (this.hls.config.debug = M);
              break;
            case le.METADATA_URL:
              R && fetch(R).then((O) => O.json()).then((O) => this.metadata = O).catch((O) => console.error(`Unable to load or parse metadata JSON from metadata-url ${R}!`));
              break;
            default:
              break;
          }
          super.attributeChangedCallback(I, c, R);
        }
        disconnectedCallback() {
          this.unload();
        }
        connectedCallback() {
          this.src && this.load();
        }
      };
      globalThis.customElements.get("mux-audio") || (globalThis.customElements.define("mux-audio", Ue), globalThis.MuxAudioElement = Ue);
      var tr = Ue;
    })();
  }
});

// src/mux-audio.ts
var MuxAudio = __toModule(require_dist());
export {
  MuxAudio
};
