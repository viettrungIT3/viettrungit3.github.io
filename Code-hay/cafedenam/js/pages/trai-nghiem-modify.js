function shuffle(t) {
    for (var e, i, n = t.length; 0 !== n;) i = Math.floor(Math.random() * n), n -= 1, e = t[n], t[n] = t[i], t[i] = e;
    return t
}! function(t, e) {
    function i(t) {
        var e = t.length,
            i = ct.type(t);
        return ct.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t) {
        var e = kt[t] = {};
        return ct.each(t.match(pt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function r(t, i, n, r) {
        if (ct.acceptData(t)) {
            var s, o, a = ct.expando,
                l = t.nodeType,
                u = l ? ct.cache : t,
                c = l ? t[a] : t[a] && a;
            if (c && u[c] && (r || u[c].data) || n !== e || "string" != typeof i) return c || (c = l ? t[a] = et.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {
                toJSON: ct.noop
            }), ("object" == typeof i || "function" == typeof i) && (r ? u[c] = ct.extend(u[c], i) : u[c].data = ct.extend(u[c].data, i)), o = u[c], r || (o.data || (o.data = {}), o = o.data), n !== e && (o[ct.camelCase(i)] = n), "string" == typeof i ? (s = o[i], null == s && (s = o[ct.camelCase(i)])) : s = o, s
        }
    }

    function s(t, e, i) {
        if (ct.acceptData(t)) {
            var n, r, s = t.nodeType,
                o = s ? ct.cache : t,
                l = s ? t[ct.expando] : ct.expando;
            if (o[l]) {
                if (e && (n = i ? o[l] : o[l].data)) {
                    ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in n ? e = [e] : (e = ct.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete n[e[r]];
                    if (i ? !a(n) : !ct.isEmptyObject(n)) return
                }(i || (delete o[l].data, a(o[l]))) && (s ? ct.cleanData([t], !0) : ct.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
            }
        }
    }

    function o(t, i, n) {
        if (n === e && 1 === t.nodeType) {
            var r = "data-" + i.replace(Pt, "-$1").toLowerCase();
            if (n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? ct.parseJSON(n) : n
                } catch (s) {}
                ct.data(t, i, n)
            } else n = e
        }
        return n
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return G.activeElement
        } catch (t) {}
    }

    function h(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function p(t, e, i) {
        if (ct.isFunction(e)) return ct.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return ct.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (Ht.test(e)) return ct.filter(e, t, i);
            e = ct.filter(e, t)
        }
        return ct.grep(t, function(t) {
            return ct.inArray(t, e) >= 0 !== i
        })
    }

    function f(t) {
        var e = Ut.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function d(t, e) {
        return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function m(t) {
        return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type, t
    }

    function g(t) {
        var e = re.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) ct._data(i, "globalEval", !e || ct._data(e[n], "globalEval"))
    }

    function _(t, e) {
        if (1 === e.nodeType && ct.hasData(t)) {
            var i, n, r, s = ct._data(t),
                o = ct._data(e, s),
                a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, r = a[i].length; r > n; n++) ct.event.add(e, i, a[i][n])
            }
            o.data && (o.data = ct.extend({}, o.data))
        }
    }

    function y(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
                r = ct._data(e);
                for (n in r.events) ct.removeEvent(e, n, r.handle);
                e.removeAttribute(ct.expando)
            }
            "script" === i && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function b(t, i) {
        var n, r, s = 0,
            o = typeof t.getElementsByTagName !== V ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== V ? t.querySelectorAll(i || "*") : e;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (r = n[s]); s++) !i || ct.nodeName(r, i) ? o.push(r) : ct.merge(o, b(r, i));
        return i === e || i && ct.nodeName(t, i) ? ct.merge([t], o) : o
    }

    function x(t) {
        ee.test(t.type) && (t.defaultChecked = t.checked)
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = Ce.length; r--;)
            if (e = Ce[r] + i, e in t) return e;
        return n
    }

    function w(t, e) {
        return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
    }

    function C(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (s[o] = ct._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && w(n) && (s[o] = ct._data(n, "olddisplay", E(n.nodeName)))) : s[o] || (r = w(n), (i && "none" !== i || !r) && ct._data(n, "olddisplay", r ? i : ct.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function k(t, e, i) {
        var n = ve.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function S(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += ct.css(t, i + we[s], !0, r)), n ? ("content" === i && (o -= ct.css(t, "padding" + we[s], !0, r)), "margin" !== i && (o -= ct.css(t, "border" + we[s] + "Width", !0, r))) : (o += ct.css(t, "padding" + we[s], !0, r), "padding" !== i && (o += ct.css(t, "border" + we[s] + "Width", !0, r)));
        return o
    }

    function P(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = ce(t),
            o = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = he(t, e, s), (0 > r || null == r) && (r = t.style[e]), _e.test(r)) return r;
            n = o && (ct.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }

    function E(t) {
        var e = G,
            i = be[t];
        return i || (i = A(t, e), "none" !== i && i || (ue = (ue || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = A(t, e), ue.detach()), be[t] = i), i
    }

    function A(t, e) {
        var i = ct(e.createElement(t)).appendTo(e.body),
            n = ct.css(i[0], "display");
        return i.remove(), n
    }

    function O(t, e, i, n) {
        var r;
        if (ct.isArray(e)) ct.each(e, function(e, r) {
            i || Se.test(t) ? n(t, r) : O(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== ct.type(e)) n(t, e);
        else
            for (r in e) O(t + "[" + r + "]", e[r], i, n)
    }

    function D(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                s = e.toLowerCase().match(pt) || [];
            if (ct.isFunction(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function N(t, i, n, r) {
        function s(l) {
            var u;
            return o[l] = !0, ct.each(t[l] || [], function(t, l) {
                var c = l(i, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : e : (i.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        var o = {},
            a = t === qe;
        return s(i.dataTypes[0]) || !o["*"] && s("*")
    }

    function $(t, i) {
        var n, r, s = ct.ajaxSettings.flatOptions || {};
        for (r in i) i[r] !== e && ((s[r] ? t : n || (n = {}))[r] = i[r]);
        return n && ct.extend(!0, t, n), t
    }

    function R(t, i, n) {
        for (var r, s, o, a, l = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), s === e && (s = t.mimeType || i.getResponseHeader("Content-Type"));
        if (s)
            for (a in l)
                if (l[a] && l[a].test(s)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : e
    }

    function M(t, e, i, n) {
        var r, s, o, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: o ? h : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function L() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function j() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function F() {
        return setTimeout(function() {
            Je = e
        }), Je = ct.now()
    }

    function I(t, e, i) {
        for (var n, r = (ri[e] || []).concat(ri["*"]), s = 0, o = r.length; o > s; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function z(t, e, i) {
        var n, r, s = 0,
            o = ni.length,
            a = ct.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Je || F(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: ct.extend({}, e),
                opts: ct.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Je || F(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = ct.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (B(c, u.opts.specialEasing); o > s; s++)
            if (n = ni[s].call(u, t, c, u.opts)) return n;
        return ct.map(c, I, u), ct.isFunction(u.opts.start) && u.opts.start.call(t, u), ct.fx.timer(ct.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(t, e) {
        var i, n, r, s, o;
        for (i in t)
            if (n = ct.camelCase(i), r = e[n], s = t[i], ct.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = ct.cssHooks[n], o && "expand" in o) {
                s = o.expand(s), delete t[n];
                for (i in s) i in t || (t[i] = s[i], e[i] = r)
            } else e[n] = r
    }

    function H(t, e, i) {
        var n, r, s, o, a, l, u = this,
            c = {},
            h = t.style,
            p = t.nodeType && w(t),
            f = ct._data(t, "fxshow");
        i.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], ti.exec(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (p ? "hide" : "show")) continue;
                c[n] = f && f[n] || ct.style(t, n)
            }
        if (!ct.isEmptyObject(c)) {
            f ? "hidden" in f && (p = f.hidden) : f = ct._data(t, "fxshow", {}), s && (f.hidden = !p), p ? ct(t).show() : u.done(function() {
                ct(t).hide()
            }), u.done(function() {
                var e;
                ct._removeData(t, "fxshow");
                for (e in c) ct.style(t, e, c[e])
            });
            for (n in c) o = I(p ? f[n] : 0, n, u), n in f || (f[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function q(t, e, i, n, r) {
        return new q.prototype.init(t, e, i, n, r)
    }

    function X(t, e) {
        var i, n = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = we[r], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function W(t) {
        return ct.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var U, Y, V = typeof e,
        Q = t.location,
        G = t.document,
        Z = G.documentElement,
        J = t.jQuery,
        K = t.$,
        tt = {},
        et = [],
        it = "1.10.2",
        nt = et.concat,
        rt = et.push,
        st = et.slice,
        ot = et.indexOf,
        at = tt.toString,
        lt = tt.hasOwnProperty,
        ut = it.trim,
        ct = function(t, e) {
            return new ct.fn.init(t, e, Y)
        },
        ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        pt = /\S+/g,
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^[\],:{}\s]*$/,
        vt = /(?:^|:|,)(?:\s*\[)+/g,
        _t = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        bt = /^-ms-/,
        xt = /-([\da-z])/gi,
        Tt = function(t, e) {
            return e.toUpperCase()
        },
        wt = function(t) {
            (G.addEventListener || "load" === t.type || "complete" === G.readyState) && (Ct(), ct.ready())
        },
        Ct = function() {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", wt, !1), t.removeEventListener("load", wt, !1)) : (G.detachEvent("onreadystatechange", wt), t.detachEvent("onload", wt))
        };
    ct.fn = ct.prototype = {
            jquery: it,
            constructor: ct,
            init: function(t, i, n) {
                var r, s;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : dt.exec(t), !r || !r[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                    if (r[1]) {
                        if (i = i instanceof ct ? i[0] : i, ct.merge(this, ct.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : G, !0)), mt.test(r[1]) && ct.isPlainObject(i))
                            for (r in i) ct.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
                        return this
                    }
                    if (s = G.getElementById(r[2]), s && s.parentNode) {
                        if (s.id !== r[2]) return n.find(t);
                        this.length = 1, this[0] = s
                    }
                    return this.context = G, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return st.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = ct.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ct.each(this, t, e)
            },
            ready: function(t) {
                return ct.ready.promise().done(t), this
            },
            slice: function() {
                return this.pushStack(st.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            map: function(t) {
                return this.pushStack(ct.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: rt,
            sort: [].sort,
            splice: [].splice
        }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
            var t, i, n, r, s, o, a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                if (null != (s = arguments[l]))
                    for (r in s) t = a[r], n = s[r], a !== n && (c && n && (ct.isPlainObject(n) || (i = ct.isArray(n))) ? (i ? (i = !1, o = t && ct.isArray(t) ? t : []) : o = t && ct.isPlainObject(t) ? t : {}, a[r] = ct.extend(c, o, n)) : n !== e && (a[r] = n));
            return a
        }, ct.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return t.$ === ct && (t.$ = K), e && t.jQuery === ct && (t.jQuery = J), ct
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ct.readyWait++ : ct.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--ct.readyWait : !ct.isReady) {
                    if (!G.body) return setTimeout(ct.ready);
                    ct.isReady = !0, t !== !0 && --ct.readyWait > 0 || (U.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === ct.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ct.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                var i;
                if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
                try {
                    if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ct.support.ownLast)
                    for (i in t) return lt.call(t, i);
                for (i in t);
                return i === e || lt.call(t, i)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function(t) {
                throw Error(t)
            },
            parseHTML: function(t, e, i) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (i = e, e = !1), e = e || G;
                var n = mt.exec(t),
                    r = !i && [];
                return n ? [e.createElement(n[1])] : (n = ct.buildFragment([t], e, r), r && ct(r).remove(), ct.merge([], n.childNodes))
            },
            parseJSON: function(i) {
                return t.JSON && t.JSON.parse ? t.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = ct.trim(i), i && gt.test(i.replace(_t, "@").replace(yt, "]").replace(vt, ""))) ? Function("return " + i)() : (ct.error("Invalid JSON: " + i), e)
            },
            parseXML: function(i) {
                var n, r;
                if (!i || "string" != typeof i) return null;
                try {
                    t.DOMParser ? (r = new DOMParser, n = r.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                } catch (s) {
                    n = e
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + i), n
            },
            noop: function() {},
            globalEval: function(e) {
                e && ct.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(bt, "ms-").replace(xt, Tt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var r, s = 0,
                    o = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; o > s && (r = e.apply(t[s], n), r !== !1); s++);
                    else
                        for (s in t)
                            if (r = e.apply(t[s], n), r === !1) break
                } else if (a)
                    for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.call(t[s], s, t[s]), r === !1) break; return t
            },
            trim: ut && !ut.call("\ufeff ") ? function(t) {
                return null == t ? "" : ut.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(ft, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ct.merge(n, "string" == typeof t ? [t] : t) : rt.call(n, t)), n
            },
            inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (ot) return ot.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, i) {
                var n = i.length,
                    r = t.length,
                    s = 0;
                if ("number" == typeof n)
                    for (; n > s; s++) t[r++] = i[s];
                else
                    for (; i[s] !== e;) t[r++] = i[s++];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                var n, r = [],
                    s = 0,
                    o = t.length;
                for (i = !!i; o > s; s++) n = !!e(t[s], s), i !== n && r.push(t[s]);
                return r
            },
            map: function(t, e, n) {
                var r, s = 0,
                    o = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; o > s; s++) r = e(t[s], s, n), null != r && (l[l.length] = r);
                else
                    for (s in t) r = e(t[s], s, n), null != r && (l[l.length] = r);
                return nt.apply([], l)
            },
            guid: 1,
            proxy: function(t, i) {
                var n, r, s;
                return "string" == typeof i && (s = t[i], i = t, t = s), ct.isFunction(t) ? (n = st.call(arguments, 2), r = function() {
                    return t.apply(i || this, n.concat(st.call(arguments)))
                }, r.guid = t.guid = t.guid || ct.guid++, r) : e
            },
            access: function(t, i, n, r, s, o, a) {
                var l = 0,
                    u = t.length,
                    c = null == n;
                if ("object" === ct.type(n)) {
                    s = !0;
                    for (l in n) ct.access(t, i, l, n[l], !0, o, a)
                } else if (r !== e && (s = !0, ct.isFunction(r) || (a = !0), c && (a ? (i.call(t, r), i = null) : (c = i, i = function(t, e, i) {
                        return c.call(ct(t), i)
                    })), i))
                    for (; u > l; l++) i(t[l], n, a ? r : r.call(t[l], l, i(t[l], n)));
                return s ? t : c ? i.call(t) : u ? i(t[0], n) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(t, e, i, n) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                r = i.apply(t, n || []);
                for (s in e) t.style[s] = o[s];
                return r
            }
        }), ct.ready.promise = function(e) {
            if (!U)
                if (U = ct.Deferred(), "complete" === G.readyState) setTimeout(ct.ready);
                else if (G.addEventListener) G.addEventListener("DOMContentLoaded", wt, !1), t.addEventListener("load", wt, !1);
            else {
                G.attachEvent("onreadystatechange", wt), t.attachEvent("onload", wt);
                var i = !1;
                try {
                    i = null == t.frameElement && G.documentElement
                } catch (n) {}
                i && i.doScroll && function r() {
                    if (!ct.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        Ct(), ct.ready()
                    }
                }()
            }
            return U.promise(e)
        }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        }), Y = ct(G),
        function(t, e) {
            function i(t, e, i, n) {
                var r, s, o, a, l, u, c, h, d, m;
                if ((e ? e.ownerDocument || e : z) !== N && D(e), e = e || N, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (R && !n) {
                    if (r = yt.exec(t))
                        if (o = r[1]) {
                            if (9 === a) {
                                if (s = e.getElementById(o), !s || !s.parentNode) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && F(e, s) && s.id === o) return i.push(s), i
                        } else {
                            if (r[2]) return tt.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = r[3]) && w.getElementsByClassName && e.getElementsByClassName) return tt.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (w.qsa && (!M || !M.test(t))) {
                        if (h = c = I, d = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = p(t), (c = e.getAttribute("id")) ? h = c.replace(Tt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + f(u[l]);
                            d = ft.test(t) && e.parentNode || e, m = u.join(",")
                        }
                        if (m) try {
                            return tt.apply(i, d.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return x(t.replace(ut, "$1"), e, i, n)
            }

            function n() {
                function t(i, n) {
                    return e.push(i += " ") > k.cacheLength && delete t[e.shift()], t[i] = n
                }
                var e = [];
                return t
            }

            function r(t) {
                return t[I] = !0, t
            }

            function s(t) {
                var e = N.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function u(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return r(function(e) {
                    return e = +e, r(function(i, n) {
                        for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function h() {}

            function p(t, e) {
                var n, r, s, o, a, l, u, c = X[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = k.preFilter; a;) {
                    (!n || (r = ht.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = pt.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(ut, " ")
                    }), a = a.slice(n.length));
                    for (o in k.filter) !(r = vt[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return e ? a.length : a ? i.error(t) : X(t, l).slice(0)
            }

            function f(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function d(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    s = H++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, s)
                } : function(e, i, o) {
                    var a, l, u, c = B + " " + s;
                    if (o) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r)
                                if (u = e[I] || (e[I] = {}), (l = u[n]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === C) return a === !0
                                } else if (l = u[n] = [c], l[1] = t(e, i, o) || C, l[1] === !0) return !0
                }
            }

            function m(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
                return o
            }

            function v(t, e, i, n, s, o) {
                return n && !n[I] && (n = v(n)), s && !s[I] && (s = v(s, o)), r(function(r, o, a, l) {
                    var u, c, h, p = [],
                        f = [],
                        d = o.length,
                        m = r || b(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !r && e ? m : g(m, p, t, a, l),
                        _ = i ? s || (r ? t : d || n) ? [] : o : v;
                    if (i && i(v, _, a, l), n)
                        for (u = g(_, f), n(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[f[c]] = !(v[f[c]] = h));
                    if (r) {
                        if (s || t) {
                            if (s) {
                                for (u = [], c = _.length; c--;)(h = _[c]) && u.push(v[c] = h);
                                s(null, _ = [], u, l)
                            }
                            for (c = _.length; c--;)(h = _[c]) && (u = s ? it.call(r, h) : p[c]) > -1 && (r[u] = !(o[u] = h))
                        }
                    } else _ = g(_ === o ? _.splice(d, _.length) : _), s ? s(null, o, _, l) : tt.apply(o, _)
                })
            }

            function _(t) {
                for (var e, i, n, r = t.length, s = k.relative[t[0].type], o = s || k.relative[" "], a = s ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, o, !0), u = d(function(t) {
                        return it.call(e, t) > -1
                    }, o, !0), c = [function(t, i, n) {
                        return !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                    }]; r > a; a++)
                    if (i = k.relative[t[a].type]) c = [d(m(c), i)];
                    else {
                        if (i = k.filter[t[a].type].apply(null, t[a].matches), i[I]) {
                            for (n = ++a; r > n && !k.relative[t[n].type]; n++);
                            return v(a > 1 && m(c), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(ut, "$1"), i, n > a && _(t.slice(a, n)), r > n && _(t = t.slice(n)), r > n && f(t))
                        }
                        c.push(i)
                    }
                return m(c)
            }

            function y(t, e) {
                var n = 0,
                    s = e.length > 0,
                    o = t.length > 0,
                    a = function(r, a, l, u, c) {
                        var h, p, f, d = [],
                            m = 0,
                            v = "0",
                            _ = r && [],
                            y = null != c,
                            b = A,
                            x = r || o && k.find.TAG("*", c && a.parentNode || a),
                            T = B += null == b ? 1 : Math.random() || .1;
                        for (y && (A = a !== N && a, C = n); null != (h = x[v]); v++) {
                            if (o && h) {
                                for (p = 0; f = t[p++];)
                                    if (f(h, a, l)) {
                                        u.push(h);
                                        break
                                    }
                                y && (B = T, C = ++n)
                            }
                            s && ((h = !f && h) && m--, r && _.push(h))
                        }
                        if (m += v, s && v !== m) {
                            for (p = 0; f = e[p++];) f(_, d, a, l);
                            if (r) {
                                if (m > 0)
                                    for (; v--;) _[v] || d[v] || (d[v] = J.call(u));
                                d = g(d)
                            }
                            tt.apply(u, d), y && !r && d.length > 0 && m + e.length > 1 && i.uniqueSort(u)
                        }
                        return y && (B = T, A = b), _
                    };
                return s ? r(a) : a
            }

            function b(t, e, n) {
                for (var r = 0, s = e.length; s > r; r++) i(t, e[r], n);
                return n
            }

            function x(t, e, i, n) {
                var r, s, o, a, l, u = p(t);
                if (!n && 1 === u.length) {
                    if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === e.nodeType && R && k.relative[s[1].type]) {
                        if (e = (k.find.ID(o.matches[0].replace(wt, Ct), e) || [])[0], !e) return i;
                        t = t.slice(s.shift().value.length)
                    }
                    for (r = vt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !k.relative[a = o.type]);)
                        if ((l = k.find[a]) && (n = l(o.matches[0].replace(wt, Ct), ft.test(s[0].type) && e.parentNode || e))) {
                            if (s.splice(r, 1), t = n.length && f(s), !t) return tt.apply(i, n), i;
                            break
                        }
                }
                return E(t, u)(n, e, !R, i, ft.test(t)), i
            }
            var T, w, C, k, S, P, E, A, O, D, N, $, R, M, L, j, F, I = "sizzle" + -new Date,
                z = t.document,
                B = 0,
                H = 0,
                q = n(),
                X = n(),
                W = n(),
                U = !1,
                Y = function(t, e) {
                    return t === e ? (U = !0, 0) : 0
                },
                V = typeof e,
                Q = 1 << 31,
                G = {}.hasOwnProperty,
                Z = [],
                J = Z.pop,
                K = Z.push,
                tt = Z.push,
                et = Z.slice,
                it = Z.indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                rt = "[\\x20\\t\\r\\n\\f]",
                st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = st.replace("w", "w#"),
                at = "\\[" + rt + "*(" + st + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
                lt = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                ut = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                ht = RegExp("^" + rt + "*," + rt + "*"),
                pt = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                ft = RegExp(rt + "*[+~]"),
                dt = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
                mt = RegExp(lt),
                gt = RegExp("^" + ot + "$"),
                vt = {
                    ID: RegExp("^#(" + st + ")"),
                    CLASS: RegExp("^\\.(" + st + ")"),
                    TAG: RegExp("^(" + st.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + at),
                    PSEUDO: RegExp("^" + lt),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                },
                _t = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /^(?:input|select|textarea|button)$/i,
                xt = /^h\d$/i,
                Tt = /'|\\/g,
                wt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                Ct = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                tt.apply(Z = et.call(z.childNodes), z.childNodes), Z[z.childNodes.length].nodeType
            } catch (kt) {
                tt = {
                    apply: Z.length ? function(t, e) {
                        K.apply(t, et.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            P = i.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, w = i.support = {}, D = i.setDocument = function(t) {
                var i = t ? t.ownerDocument || t : z,
                    n = i.defaultView;
                return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, $ = i.documentElement, R = !P(i), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                    D()
                }), w.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = s(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = s(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = s(function(t) {
                    return $.appendChild(t).id = I, !i.getElementsByName || !i.getElementsByName(I).length
                }), w.getById ? (k.find.ID = function(t, e) {
                    if (typeof e.getElementById !== V && R) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, k.filter.ID = function(t) {
                    var e = t.replace(wt, Ct);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function(t) {
                    var e = t.replace(wt, Ct);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), k.find.TAG = w.getElementsByTagName ? function(t, i) {
                    return typeof i.getElementsByTagName !== V ? i.getElementsByTagName(t) : e
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, k.find.CLASS = w.getElementsByClassName && function(t, i) {
                    return typeof i.getElementsByClassName !== V && R ? i.getElementsByClassName(t) : e
                }, L = [], M = [], (w.qsa = _t.test(i.querySelectorAll)) && (s(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || M.push("\\[" + rt + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || M.push(":checked")
                }), s(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && M.push("[*^$]=" + rt + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (w.matchesSelector = _t.test(j = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && s(function(t) {
                    w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), L.push("!=", lt)
                }), M = M.length && RegExp(M.join("|")), L = L.length && RegExp(L.join("|")), F = _t.test($.contains) || $.compareDocumentPosition ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Y = $.compareDocumentPosition ? function(t, e) {
                    if (t === e) return U = !0, 0;
                    var n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                    return n ? 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || F(z, t) ? -1 : e === i || F(z, e) ? 1 : O ? it.call(O, t) - it.call(O, e) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, e) {
                    var n, r = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        l = [t],
                        u = [e];
                    if (t === e) return U = !0, 0;
                    if (!s || !o) return t === i ? -1 : e === i ? 1 : s ? -1 : o ? 1 : O ? it.call(O, t) - it.call(O, e) : 0;
                    if (s === o) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; l[r] === u[r];) r++;
                    return r ? a(l[r], u[r]) : l[r] === z ? -1 : u[r] === z ? 1 : 0
                }, i) : N
            }, i.matches = function(t, e) {
                return i(t, null, null, e)
            }, i.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== N && D(t), e = e.replace(dt, "='$1']"), !(!w.matchesSelector || !R || L && L.test(e) || M && M.test(e))) try {
                    var n = j.call(t, e);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {}
                return i(e, N, null, [t]).length > 0
            }, i.contains = function(t, e) {
                return (t.ownerDocument || t) !== N && D(t), F(t, e)
            }, i.attr = function(t, i) {
                (t.ownerDocument || t) !== N && D(t);
                var n = k.attrHandle[i.toLowerCase()],
                    r = n && G.call(k.attrHandle, i.toLowerCase()) ? n(t, i, !R) : e;
                return r === e ? w.attributes || !R ? t.getAttribute(i) : (r = t.getAttributeNode(i)) && r.specified ? r.value : null : r
            }, i.error = function(t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            }, i.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (U = !w.detectDuplicates, O = !w.sortStable && t.slice(0), t.sort(Y), U) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return t
            }, S = i.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n]; n++) i += S(e);
                return i
            }, k = i.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, Ct), t[3] = (t[4] || t[5] || "").replace(wt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var i, n = !t[5] && t[2];
                        return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && mt.test(n) && (i = p(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, Ct).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = q[t + " "];
                        return e || (e = RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(r) {
                            var s = i.attr(r, t);
                            return null == s ? "!=" === e : e ? (s += "", "=" === e ? s === n : "!=" === e ? s !== n : "^=" === e ? n && 0 === s.indexOf(n) : "*=" === e ? n && s.indexOf(n) > -1 : "$=" === e ? n && s.slice(-n.length) === n : "~=" === e ? (" " + s + " ").indexOf(n) > -1 : "|=" === e ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var u, c, h, p, f, d, m = s !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                _ = !l && !a;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? g.firstChild : g.lastChild], o && _) {
                                    for (c = g[I] || (g[I] = {}), u = c[t] || [], f = u[0] === B && u[1], p = u[0] === B && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (p = f = 0) || d.pop();)
                                        if (1 === h.nodeType && ++p && h === e) {
                                            c[t] = [B, f, p];
                                            break
                                        }
                                } else if (_ && (u = (e[I] || (e[I] = {}))[t]) && u[0] === B) p = u[1];
                                else
                                    for (;
                                        (h = ++f && h && h[m] || (p = f = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++p || (_ && ((h[I] || (h[I] = {}))[t] = [B, p]), h !== e)););
                                return p -= r, p === n || 0 === p % n && p / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                        return s[I] ? s(e) : s.length > 1 ? (n = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, i) {
                            for (var n, r = s(t, e), o = r.length; o--;) n = it.call(t, r[o]), t[n] = !(i[n] = r[o])
                        }) : function(t) {
                            return s(t, 0, n)
                        }) : s
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = [],
                            i = [],
                            n = E(t.replace(ut, "$1"));
                        return n[I] ? r(function(t, e, i, r) {
                            for (var s, o = n(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, r, s) {
                            return e[0] = t, n(e, null, s, i), !i.pop()
                        }
                    }),
                    has: r(function(t) {
                        return function(e) {
                            return i(t, e).length > 0
                        }
                    }),
                    contains: r(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                    }),
                    lang: r(function(t) {
                        return gt.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(wt, Ct).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === $
                    },
                    focus: function(t) {
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !k.pseudos.empty(t)
                    },
                    header: function(t) {
                        return xt.test(t.nodeName)
                    },
                    input: function(t) {
                        return bt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; e > ++n;) t.push(n);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[T] = l(T);
            for (T in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[T] = u(T);
            h.prototype = k.filters = k.pseudos, k.setFilters = new h, E = i.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    s = W[t + " "];
                if (!s) {
                    for (e || (e = p(t)), i = e.length; i--;) s = _(e[i]), s[I] ? n.push(s) : r.push(s);
                    s = W(t, y(r, n))
                }
                return s
            }, w.sortStable = I.split("").sort(Y).join("") === I, w.detectDuplicates = U, D(), w.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(N.createElement("div"))
            }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, i, n) {
                return n ? e : t.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
            }), w.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, i, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
            }), s(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(nt, function(t, i, n) {
                var r;
                return n ? e : (r = t.getAttributeNode(i)) && r.specified ? r.value : t[i] === !0 ? i.toLowerCase() : null
            }), ct.find = i, ct.expr = i.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = i.uniqueSort, ct.text = i.getText, ct.isXMLDoc = i.isXML, ct.contains = i.contains
        }(t);
    var kt = {};
    ct.Callbacks = function(t) {
        t = "string" == typeof t ? kt[t] || n(t) : ct.extend({}, t);
        var i, r, s, o, a, l, u = [],
            c = !t.once && [],
            h = function(e) {
                for (r = t.memory && e, s = !0, a = l || 0, l = 0, o = u.length, i = !0; u && o > a; a++)
                    if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        r = !1;
                        break
                    }
                i = !1, u && (c ? c.length && h(c.shift()) : r ? u = [] : p.disable())
            },
            p = {
                add: function() {
                    if (u) {
                        var e = u.length;
                        ! function n(e) {
                            ct.each(e, function(e, i) {
                                var r = ct.type(i);
                                "function" === r ? t.unique && p.has(i) || u.push(i) : i && i.length && "string" !== r && n(i)
                            })
                        }(arguments), i ? o = u.length : r && (l = e, h(r))
                    }
                    return this
                },
                remove: function() {
                    return u && ct.each(arguments, function(t, e) {
                        for (var n;
                            (n = ct.inArray(e, u, n)) > -1;) u.splice(n, 1), i && (o >= n && o--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? ct.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], o = 0, this
                },
                disable: function() {
                    return u = c = r = e, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = e, r || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !u || s && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : h(e)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return p
    }, ct.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ct.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ct.Deferred(function(i) {
                            ct.each(e, function(e, s) {
                                var o = s[0],
                                    a = ct.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && ct.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ct.extend(t, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, ct.each(e, function(t, s) {
                var o = s[2],
                    a = s[3];
                n[s[1]] = o.add, a && o.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, i, n, r = 0,
                s = st.call(arguments),
                o = s.length,
                a = 1 !== o || t && ct.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : ct.Deferred(),
                u = function(t, i, n) {
                    return function(r) {
                        i[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = Array(o), i = Array(o), n = Array(o); o > r; r++) s[r] && ct.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    }), ct.support = function(e) {
        var i, n, r, s, o, a, l, u, c, h = G.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = h.getElementsByTagName("*") || [], n = h.getElementsByTagName("a")[0], !n || !n.style || !i.length) return e;
        s = G.createElement("select"), a = s.appendChild(G.createElement("option")), r = h.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== h.className, e.leadingWhitespace = 3 === h.firstChild.nodeType, e.tbody = !h.getElementsByTagName("tbody").length, e.htmlSerialize = !!h.getElementsByTagName("link").length, e.style = /top/.test(n.getAttribute("style")), e.hrefNormalized = "/a" === n.getAttribute("href"), e.opacity = /^0.5/.test(n.style.opacity), e.cssFloat = !!n.style.cssFloat, e.checkOn = !!r.value, e.optSelected = a.selected, e.enctype = !!G.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete h.test
        } catch (p) {
            e.deleteExpando = !1
        }
        r = G.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = G.createDocumentFragment(), o.appendChild(r), e.appendChecked = r.checked, e.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function() {
            e.noCloneEvent = !1
        }), h.cloneNode(!0).click());
        for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) h.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || h.attributes[l].expando === !1;
        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === h.style.backgroundClip;
        for (c in ct(e)) break;
        return e.ownLast = "0" !== c, ct(function() {
            var i, n, r, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                o = G.getElementsByTagName("body")[0];
            o && (i = G.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(i).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = h.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(o, null != o.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e.boxSizing = 4 === h.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
                width: "4px"
            }).width, n = h.appendChild(G.createElement("div")), n.style.cssText = h.style.cssText = s, n.style.marginRight = n.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof h.style.zoom !== V && (h.innerHTML = "", h.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(i), i = h = r = n = null)
        }), i = s = o = a = n = r = null, e
    }({});
    var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Pt = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !a(t)
        },
        data: function(t, e, i) {
            return r(t, e, i)
        },
        removeData: function(t, e) {
            return s(t, e)
        },
        _data: function(t, e, i) {
            return r(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return s(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), ct.fn.extend({
        data: function(t, i) {
            var n, r, s = null,
                a = 0,
                l = this[0];
            if (t === e) {
                if (this.length && (s = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                    for (n = l.attributes; n.length > a; a++) r = n[a].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), o(l, r, s[r]));
                    ct._data(l, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                ct.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ct.data(this, t, i)
            }) : l ? o(l, t, ct.data(l, t)) : null
        },
        removeData: function(t) {
            return this.each(function() {
                ct.removeData(this, t)
            })
        }
    }), ct.extend({
        queue: function(t, i, n) {
            var r;
            return t ? (i = (i || "fx") + "queue", r = ct._data(t, i), n && (!r || ct.isArray(n) ? r = ct._data(t, i, ct.makeArray(n)) : r.push(n)), r || []) : e
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = ct.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = ct._queueHooks(t, e),
                o = function() {
                    ct.dequeue(t, e)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return ct._data(t, i) || ct._data(t, i, {
                empty: ct.Callbacks("once memory").add(function() {
                    ct._removeData(t, e + "queue"), ct._removeData(t, i)
                })
            })
        }
    }), ct.fn.extend({
        queue: function(t, i) {
            var n = 2;
            return "string" != typeof t && (i = t, t = "fx", n--), n > arguments.length ? ct.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = ct.queue(this, t, i);
                ct._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ct.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, i) {
            var n, r = 1,
                s = ct.Deferred(),
                o = this,
                a = this.length,
                l = function() {
                    --r || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = ct._data(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
            return l(), s.promise(i)
        }
    });
    var Et, At, Ot = /[\t\r\n\f]/g,
        Dt = /\r/g,
        Nt = /^(?:input|select|textarea|button|object)$/i,
        $t = /^(?:a|area)$/i,
        Rt = /^(?:checked|selected)$/i,
        Mt = ct.support.getSetAttribute,
        Lt = ct.support.input;
    ct.fn.extend({
        attr: function(t, e) {
            return ct.access(this, ct.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ct.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return ct.access(this, ct.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ct.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (i) {}
            })
        },
        addClass: function(t) {
            var e, i, n, r, s, o = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (ct.isFunction(t)) return this.each(function(e) {
                ct(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(pt) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ot, " ") : " ")) {
                        for (s = 0; r = e[s++];) 0 > n.indexOf(" " + r + " ") && (n += r + " ");
                        i.className = ct.trim(n)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, o = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (ct.isFunction(t)) return this.each(function(e) {
                ct(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(pt) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ot, " ") : "")) {
                        for (s = 0; r = e[s++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        i.className = t ? ct.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(i) {
                ct(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var e, n = 0, r = ct(this), s = t.match(pt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === V || "boolean" === i) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ot, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var i, n, r, s = this[0];
            return arguments.length ? (r = ct.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (s = r ? t.call(this, i, ct(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ct.isArray(s) && (s = ct.map(s, function(t) {
                    return null == t ? "" : t + ""
                })), n = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, s, "value") !== e || (this.value = s))
            })) : s ? (n = ct.valHooks[s.type] || ct.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (i = n.get(s, "value")) !== e ? i : (i = s.value, "string" == typeof i ? i.replace(Dt, "") : null == i ? "" : i)) : void 0
        }
    }), ct.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ct.find.attr(t, "value");
                    return null != e ? e : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (ct.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ct.nodeName(i.parentNode, "optgroup"))) {
                            if (e = ct(i).val(), s) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = ct.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = ct.inArray(ct(n).val(), s) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        },
        attr: function(t, i, n) {
            var r, s, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === V ? ct.prop(t, i, n) : (1 === o && ct.isXMLDoc(t) || (i = i.toLowerCase(), r = ct.attrHooks[i] || (ct.expr.match.bool.test(i) ? At : Et)), n === e ? r && "get" in r && null !== (s = r.get(t, i)) ? s : (s = ct.find.attr(t, i), null == s ? e : s) : null !== n ? r && "set" in r && (s = r.set(t, n, i)) !== e ? s : (t.setAttribute(i, n + ""), n) : (ct.removeAttr(t, i), e)) : void 0
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                s = e && e.match(pt);
            if (s && 1 === t.nodeType)
                for (; i = s[r++];) n = ct.propFix[i] || i, ct.expr.match.bool.test(i) ? Lt && Mt || !Rt.test(i) ? t[n] = !1 : t[ct.camelCase("default-" + i)] = t[n] = !1 : ct.attr(t, i, ""), t.removeAttribute(Mt ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, i, n) {
            var r, s, o, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !ct.isXMLDoc(t), o && (i = ct.propFix[i] || i, s = ct.propHooks[i]), n !== e ? s && "set" in s && (r = s.set(t, n, i)) !== e ? r : t[i] = n : s && "get" in s && null !== (r = s.get(t, i)) ? r : t[i]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ct.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Nt.test(t.nodeName) || $t.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), At = {
        set: function(t, e, i) {
            return e === !1 ? ct.removeAttr(t, i) : Lt && Mt || !Rt.test(i) ? t.setAttribute(!Mt && ct.propFix[i] || i, i) : t[ct.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, i) {
        var n = ct.expr.attrHandle[i] || ct.find.attr;
        ct.expr.attrHandle[i] = Lt && Mt || !Rt.test(i) ? function(t, i, r) {
            var s = ct.expr.attrHandle[i],
                o = r ? e : (ct.expr.attrHandle[i] = e) != n(t, i, r) ? i.toLowerCase() : null;
            return ct.expr.attrHandle[i] = s, o
        } : function(t, i, n) {
            return n ? e : t[ct.camelCase("default-" + i)] ? i.toLowerCase() : null
        }
    }), Lt && Mt || (ct.attrHooks.value = {
        set: function(t, i, n) {
            return ct.nodeName(t, "input") ? (t.defaultValue = i, e) : Et && Et.set(t, i, n)
        }
    }), Mt || (Et = {
        set: function(t, i, n) {
            var r = t.getAttributeNode(n);
            return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, i, n) {
        var r;
        return n ? e : (r = t.getAttributeNode(i)) && "" !== r.value ? r.value : null
    }, ct.valHooks.button = {
        get: function(t, i) {
            var n = t.getAttributeNode(i);
            return n && n.specified ? n.value : e
        },
        set: Et.set
    }, ct.attrHooks.contenteditable = {
        set: function(t, e, i) {
            Et.set(t, "" === e ? !1 : e, i)
        }
    }, ct.each(["width", "height"], function(t, i) {
        ct.attrHooks[i] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(i, "auto"), n) : e
            }
        }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function(t, e) {
        ct.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ct.support.style || (ct.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), ct.support.optSelected || (ct.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
        ct.valHooks[this] = {
            set: function(t, i) {
                return ct.isArray(i) ? t.checked = ct.inArray(ct(t).val(), i) >= 0 : e
            }
        }, ct.support.checkOn || (ct.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var jt = /^(?:input|select|textarea)$/i,
        Ft = /^key/,
        It = /^(?:mouse|contextmenu)|click/,
        zt = /^(?:focusinfocus|focusoutblur)$/,
        Bt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function(t, i, n, r, s) {
            var o, a, l, u, c, h, p, f, d, m, g, v = ct._data(t);
            if (v) {
                for (n.handler && (u = n, n = u.handler, s = u.selector), n.guid || (n.guid = ct.guid++), (a = v.events) || (a = v.events = {}), (h = v.handle) || (h = v.handle = function(t) {
                        return typeof ct === V || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(h.elem, arguments)
                    }, h.elem = t), i = (i || "").match(pt) || [""], l = i.length; l--;) o = Bt.exec(i[l]) || [], d = g = o[1], m = (o[2] || "").split(".").sort(), d && (c = ct.event.special[d] || {}, d = (s ? c.delegateType : c.bindType) || d, c = ct.event.special[d] || {}, p = ct.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && ct.expr.match.needsContext.test(s),
                    namespace: m.join(".")
                }, u), (f = a[d]) || (f = a[d] = [], f.delegateCount = 0, c.setup && c.setup.call(t, r, m, h) !== !1 || (t.addEventListener ? t.addEventListener(d, h, !1) : t.attachEvent && t.attachEvent("on" + d, h))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), s ? f.splice(f.delegateCount++, 0, p) : f.push(p), ct.event.global[d] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, p, f, d, m, g = ct.hasData(t) && ct._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(pt) || [""], u = e.length; u--;)
                    if (a = Bt.exec(e[u]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = ct.event.special[f] || {}, f = (n ? h.delegateType : h.bindType) || f, p = c[f] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;) o = p[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (p.splice(s, 1), o.selector && p.delegateCount--, h.remove && h.remove.call(t, o));
                        l && !p.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || ct.removeEvent(t, f, g.handle), delete c[f])
                    } else
                        for (f in c) ct.event.remove(t, f + e[u], i, n, !0);
                ct.isEmptyObject(c) && (delete g.handle, ct._removeData(t, "events"))
            }
        },
        trigger: function(i, n, r, s) {
            var o, a, l, u, c, h, p, f = [r || G],
                d = lt.call(i, "type") ? i.type : i,
                m = lt.call(i, "namespace") ? i.namespace.split(".") : [];
            if (l = h = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !zt.test(d + ct.event.triggered) && (d.indexOf(".") >= 0 && (m = d.split("."), d = m.shift(), m.sort()), a = 0 > d.indexOf(":") && "on" + d, i = i[ct.expando] ? i : new ct.Event(d, "object" == typeof i && i), i.isTrigger = s ? 2 : 3, i.namespace = m.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = r), n = null == n ? [i] : ct.makeArray(n, [i]), c = ct.event.special[d] || {}, s || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!s && !c.noBubble && !ct.isWindow(r)) {
                    for (u = c.delegateType || d, zt.test(u + d) || (l = l.parentNode); l; l = l.parentNode) f.push(l), h = l;
                    h === (r.ownerDocument || G) && f.push(h.defaultView || h.parentWindow || t)
                }
                for (p = 0;
                    (l = f[p++]) && !i.isPropagationStopped();) i.type = p > 1 ? u : c.bindType || d, o = (ct._data(l, "events") || {})[i.type] && ct._data(l, "handle"), o && o.apply(l, n), o = a && l[a], o && ct.acceptData(l) && o.apply && o.apply(l, n) === !1 && i.preventDefault();
                if (i.type = d, !s && !i.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && ct.acceptData(r) && a && r[d] && !ct.isWindow(r)) {
                    h = r[a], h && (r[a] = null), ct.event.triggered = d;
                    try {
                        r[d]()
                    } catch (g) {}
                    ct.event.triggered = e, h && (r[a] = h)
                }
                return i.result
            }
        },
        dispatch: function(t) {
            t = ct.event.fix(t);
            var i, n, r, s, o, a = [],
                l = st.call(arguments),
                u = (ct._data(this, "events") || {})[t.type] || [],
                c = ct.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = ct.event.handlers.call(this, t, u), i = 0;
                    (s = a[i++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, o = 0;
                        (r = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, i) {
            var n, r, s, o, a = [],
                l = i.delegateCount,
                u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], o = 0; l > o; o++) r = i[o], n = r.selector + " ", s[n] === e && (s[n] = r.needsContext ? ct(n, this).index(u) >= 0 : ct.find(n, this, null, [u]).length), s[n] && s.push(r);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    }
            return i.length > l && a.push({
                elem: this,
                handlers: i.slice(l)
            }), a
        },
        fix: function(t) {
            if (t[ct.expando]) return t;
            var e, i, n, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = It.test(r) ? this.mouseHooks : Ft.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new ct.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = s.srcElement || G), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, i) {
                var n, r, s, o = i.button,
                    a = i.fromElement;
                return null == t.pageX && null != i.clientX && (r = t.target.ownerDocument || G, s = r.documentElement, n = r.body, t.pageX = i.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || o === e || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : e
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                },
                _default: function(t) {
                    return ct.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var r = ct.extend(new ct.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ct.event.trigger(r, null, e) : ct.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, ct.removeEvent = G.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === V && (t[n] = null), t.detachEvent(n, i))
    }, ct.Event = function(t, i) {
        return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, i && ct.extend(this, i), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0, e) : new ct.Event(t, i)
    }, ct.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ct.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        ct.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return (!r || r !== n && !ct.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function(t) {
                var i = t.target,
                    n = ct.nodeName(i, "input") || ct.nodeName(i, "button") ? i.form : e;
                n && !ct._data(n, "submitBubbles") && (ct.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), ct._data(n, "submitBubbles", !0))
            }), e)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), e)
        }
    }), ct.support.changeBubbles || (ct.event.special.change = {
        setup: function() {
            return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, t, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                jt.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
                }), ct._data(e, "changeBubbles", !0))
            }), e)
        },
        handle: function(t) {
            var i = t.target;
            return this !== i || t.isSimulated || t.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? t.handleObj.handler.apply(this, arguments) : e
        },
        teardown: function() {
            return ct.event.remove(this, "._change"), !jt.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = 0,
            n = function(t) {
                ct.event.simulate(e, t.target, ct.event.fix(t), !0)
            };
        ct.event.special[e] = {
            setup: function() {
                0 === i++ && G.addEventListener(t, n, !0)
            },
            teardown: function() {
                0 === --i && G.removeEventListener(t, n, !0)
            }
        }
    }), ct.fn.extend({
        on: function(t, i, n, r, s) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof i && (n = n || i, i = e);
                for (o in t) this.on(o, i, n, t[o], s);
                return this
            }
            if (null == n && null == r ? (r = i, n = i = e) : null == r && ("string" == typeof i ? (r = n, n = e) : (r = n, n = i, i = e)), r === !1) r = u;
            else if (!r) return this;
            return 1 === s && (a = r, r = function(t) {
                return ct().off(t), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
                ct.event.add(this, t, r, n, i)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, i, n) {
            var r, s;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ct(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, i, t[s]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = u), this.each(function() {
                ct.event.remove(this, t, n, i)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ct.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, i) {
            var n = this[0];
            return n ? ct.event.trigger(t, i, n, !0) : e
        }
    });
    var Ht = /^.[^:#\[\.,]*$/,
        qt = /^(?:parents|prev(?:Until|All))/,
        Xt = ct.expr.match.needsContext,
        Wt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ct.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                r = n.length;
            if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
                for (e = 0; r > e; e++)
                    if (ct.contains(n[e], this)) return !0
            }));
            for (e = 0; r > e; e++) ct.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? ct.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        has: function(t) {
            var e, i = ct(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (ct.contains(this, i[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(p(this, t || [], !0))
        },
        filter: function(t) {
            return this.pushStack(p(this, t || [], !1))
        },
        is: function(t) {
            return !!p(this, "string" == typeof t && Xt.test(t) ? ct(t) : t || [], !1).length
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], o = Xt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (11 > i.nodeType && (o ? o.index(i) > -1 : 1 === i.nodeType && ct.find.matchesSelector(i, t))) {
                        i = s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? ct.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
                n = ct.merge(this.get(), i);
            return this.pushStack(ct.unique(n))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ct.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ct.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return ct.dir(t, "parentNode", i)
        },
        next: function(t) {
            return h(t, "nextSibling")
        },
        prev: function(t) {
            return h(t, "previousSibling")
        },
        nextAll: function(t) {
            return ct.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return ct.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return ct.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return ct.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return ct.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ct.sibling(t.firstChild)
        },
        contents: function(t) {
            return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
        }
    }, function(t, e) {
        ct.fn[t] = function(i, n) {
            var r = ct.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = ct.filter(n, r)), this.length > 1 && (Wt[t] || (r = ct.unique(r)), qt.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    }), ct.extend({
        filter: function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ct.find.matchesSelector(n, t) ? [n] : [] : ct.find.matches(t, ct.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        },
        dir: function(t, i, n) {
            for (var r = [], s = t[i]; s && 9 !== s.nodeType && (n === e || 1 !== s.nodeType || !ct(s).is(n));) 1 === s.nodeType && r.push(s), s = s[i];
            return r
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Yt = / jQuery\d+="(?:null|\d+)"/g,
        Vt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Qt = /^\s+/,
        Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zt = /<([\w:]+)/,
        Jt = /<tbody/i,
        Kt = /<|&#?\w+;/,
        te = /<(?:script|style|link)/i,
        ee = /^(?:checkbox|radio)$/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ne = /^$|\/(?:java|ecma)script/i,
        re = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ae = f(G),
        le = ae.appendChild(G.createElement("div"));
    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td, ct.fn.extend({
        text: function(t) {
            return ct.access(this, function(t) {
                return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? ct.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || ct.cleanData(b(i)), i.parentNode && (e && ct.contains(i.ownerDocument, i) && v(b(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ct.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ct.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return ct.clone(this, t, e)
            })
        },
        html: function(t) {
            return ct.access(this, function(t) {
                var i = this[0] || {},
                    n = 0,
                    r = this.length;
                if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Yt, "") : e;
                if (!("string" != typeof t || te.test(t) || !ct.support.htmlSerialize && Vt.test(t) || !ct.support.leadingWhitespace && Qt.test(t) || oe[(Zt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Gt, "<$1></$2>");
                    try {
                        for (; r > n; n++) i = this[n] || {}, 1 === i.nodeType && (ct.cleanData(b(i, !1)), i.innerHTML = t);
                        i = 0
                    } catch (s) {}
                }
                i && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = ct.map(this, function(t) {
                    return [t.nextSibling, t.parentNode]
                }),
                e = 0;
            return this.domManip(arguments, function(i) {
                var n = t[e++],
                    r = t[e++];
                r && (n && n.parentNode !== r && (n = this.nextSibling), ct(this).remove(), r.insertBefore(i, n))
            }, !0), e ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e, i) {
            t = nt.apply([], t);
            var n, r, s, o, a, l, u = 0,
                c = this.length,
                h = this,
                p = c - 1,
                f = t[0],
                d = ct.isFunction(f);
            if (d || !(1 >= c || "string" != typeof f || ct.support.checkClone) && ie.test(f)) return this.each(function(n) {
                var r = h.eq(n);
                d && (t[0] = f.call(this, n, r.html())), r.domManip(t, e, i)
            });
            if (c && (l = ct.buildFragment(t, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (o = ct.map(b(l, "script"), m), s = o.length; c > u; u++) r = l, u !== p && (r = ct.clone(r, !0, !0), s && ct.merge(o, b(r, "script"))), e.call(this[u], r, u);
                if (s)
                    for (a = o[o.length - 1].ownerDocument, ct.map(o, g), u = 0; s > u; u++) r = o[u], ne.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(a, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(se, "")));
                l = n = null
            }
            return this
        }
    }), ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ct.fn[t] = function(t) {
            for (var i, n = 0, r = [], s = ct(t), o = s.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), ct(s[n])[e](i), rt.apply(r, i.get());
            return this.pushStack(r)
        }
    }), ct.extend({
        clone: function(t, e, i) {
            var n, r, s, o, a, l = ct.contains(t.ownerDocument, t);
            if (ct.support.html5Clone || ct.isXMLDoc(t) || !Vt.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(s = le.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                for (n = b(s), a = b(t), o = 0; null != (r = a[o]); ++o) n[o] && y(r, n[o]);
            if (e)
                if (i)
                    for (a = a || b(t), n = n || b(s), o = 0; null != (r = a[o]); o++) _(r, n[o]);
                else _(t, s);
            return n = b(s, "script"), n.length > 0 && v(n, !l && b(t, "script")), n = a = r = null, s
        },
        buildFragment: function(t, e, i, n) {
            for (var r, s, o, a, l, u, c, h = t.length, p = f(e), d = [], m = 0; h > m; m++)
                if (s = t[m], s || 0 === s)
                    if ("object" === ct.type(s)) ct.merge(d, s.nodeType ? [s] : s);
                    else if (Kt.test(s)) {
                for (a = a || p.appendChild(e.createElement("div")), l = (Zt.exec(s) || ["", ""])[1].toLowerCase(), c = oe[l] || oe._default, a.innerHTML = c[1] + s.replace(Gt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!ct.support.leadingWhitespace && Qt.test(s) && d.push(e.createTextNode(Qt.exec(s)[0])), !ct.support.tbody)
                    for (s = "table" !== l || Jt.test(s) ? "<table>" !== c[1] || Jt.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) ct.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                for (ct.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else d.push(e.createTextNode(s));
            for (a && p.removeChild(a), ct.support.appendChecked || ct.grep(b(d, "input"), x), m = 0; s = d[m++];)
                if ((!n || -1 === ct.inArray(s, n)) && (o = ct.contains(s.ownerDocument, s), a = b(p.appendChild(s), "script"), o && v(a), i))
                    for (r = 0; s = a[r++];) ne.test(s.type || "") && i.push(s);
            return a = null, p
        },
        cleanData: function(t, e) {
            for (var i, n, r, s, o = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (i = t[o]); o++)
                if ((e || ct.acceptData(i)) && (r = i[a], s = r && l[r])) {
                    if (s.events)
                        for (n in s.events) c[n] ? ct.event.remove(i, n) : ct.removeEvent(i, n, s.handle);
                    l[r] && (delete l[r], u ? delete i[a] : typeof i.removeAttribute !== V ? i.removeAttribute(a) : i[a] = null, et.push(r))
                }
        },
        _evalUrl: function(t) {
            return ct.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ct.fn.extend({
        wrapAll: function(t) {
            if (ct.isFunction(t)) return this.each(function(e) {
                ct(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ct.isFunction(t) ? this.each(function(e) {
                ct(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ct(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ct.isFunction(t);
            return this.each(function(i) {
                ct(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ue, ce, he, pe = /alpha\([^)]*\)/i,
        fe = /opacity\s*=\s*([^)]*)/,
        de = /^(top|right|bottom|left)$/,
        me = /^(none|table(?!-c[ea]).+)/,
        ge = /^margin/,
        ve = RegExp("^(" + ht + ")(.*)$", "i"),
        _e = RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
        ye = RegExp("^([+-])=(" + ht + ")", "i"),
        be = {
            BODY: "block"
        },
        xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Te = {
            letterSpacing: 0,
            fontWeight: 400
        },
        we = ["Top", "Right", "Bottom", "Left"],
        Ce = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function(t, i) {
            return ct.access(this, function(t, i, n) {
                var r, s, o = {},
                    a = 0;
                if (ct.isArray(i)) {
                    for (s = ce(t), r = i.length; r > a; a++) o[i[a]] = ct.css(t, i[a], !1, s);
                    return o
                }
                return n !== e ? ct.style(t, i, n) : ct.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                w(this) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = he(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, i, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, l = ct.camelCase(i),
                    u = t.style;
                if (i = ct.cssProps[l] || (ct.cssProps[l] = T(u, l)), a = ct.cssHooks[i] || ct.cssHooks[l], n === e) return a && "get" in a && (s = a.get(t, !1, r)) !== e ? s : u[i];
                if (o = typeof n, "string" === o && (s = ye.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(ct.css(t, i)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || ct.cssNumber[l] || (n += "px"), ct.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (u[i] = "inherit"), a && "set" in a && (n = a.set(t, n, r)) === e))) try {
                    u[i] = n
                } catch (c) {}
            }
        },
        css: function(t, i, n, r) {
            var s, o, a, l = ct.camelCase(i);
            return i = ct.cssProps[l] || (ct.cssProps[l] = T(t.style, l)), a = ct.cssHooks[i] || ct.cssHooks[l], a && "get" in a && (o = a.get(t, !0, n)), o === e && (o = he(t, i, r)), "normal" === o && i in Te && (o = Te[i]), "" === n || n ? (s = parseFloat(o), n === !0 || ct.isNumeric(s) ? s || 0 : o) : o
        }
    }), t.getComputedStyle ? (ce = function(e) {
        return t.getComputedStyle(e, null)
    }, he = function(t, i, n) {
        var r, s, o, a = n || ce(t),
            l = a ? a.getPropertyValue(i) || a[i] : e,
            u = t.style;
        return a && ("" !== l || ct.contains(t.ownerDocument, t) || (l = ct.style(t, i)), _e.test(l) && ge.test(i) && (r = u.width, s = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = s, u.maxWidth = o)), l
    }) : G.documentElement.currentStyle && (ce = function(t) {
        return t.currentStyle
    }, he = function(t, i, n) {
        var r, s, o, a = n || ce(t),
            l = a ? a[i] : e,
            u = t.style;
        return null == l && u && u[i] && (l = u[i]), _e.test(l) && !de.test(i) && (r = u.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), u.left = "fontSize" === i ? "1em" : l, l = u.pixelLeft + "px", u.left = r, o && (s.left = o)), "" === l ? "auto" : l
    }), ct.each(["height", "width"], function(t, i) {
        ct.cssHooks[i] = {
            get: function(t, n, r) {
                return n ? 0 === t.offsetWidth && me.test(ct.css(t, "display")) ? ct.swap(t, xe, function() {
                    return P(t, i, r)
                }) : P(t, i, r) : e
            },
            set: function(t, e, n) {
                var r = n && ce(t);
                return k(t, e, n ? S(t, i, n, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function(t, e) {
            return fe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                r = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === ct.trim(s.replace(pe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = pe.test(s) ? s.replace(pe, r) : s + " " + r)
        }
    }), ct(function() {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function(t, i) {
                return i ? ct.swap(t, {
                    display: "inline-block"
                }, he, [t, "marginRight"]) : e
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(t, i) {
            ct.cssHooks[i] = {
                get: function(t, n) {
                    return n ? (n = he(t, i), _e.test(n) ? ct(t).position()[i] + "px" : n) : e
                }
            }
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
    }, ct.expr.filters.visible = function(t) {
        return !ct.expr.filters.hidden(t)
    }), ct.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ct.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + we[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, ge.test(t) || (ct.cssHooks[t + e].set = k)
    });
    var ke = /%20/g,
        Se = /\[\]$/,
        Pe = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function() {
            return ct.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ct.prop(this, "elements");
                return t ? ct.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ct(this).is(":disabled") && Ae.test(this.nodeName) && !Ee.test(t) && (this.checked || !ee.test(t))
            }).map(function(t, e) {
                var i = ct(this).val();
                return null == i ? null : ct.isArray(i) ? ct.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Pe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Pe, "\r\n")
                }
            }).get()
        }
    }), ct.param = function(t, i) {
        var n, r = [],
            s = function(t, e) {
                e = ct.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (i === e && (i = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (n in t) O(n, t[n], i, s);
        return r.join("&").replace(ke, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ct.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ct.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Oe, De, Ne = ct.now(),
        $e = /\?/,
        Re = /#.*$/,
        Me = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fe = /^(?:GET|HEAD)$/,
        Ie = /^\/\//,
        ze = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Be = ct.fn.load,
        He = {},
        qe = {},
        Xe = "*/".concat("*");
    try {
        De = Q.href
    } catch (We) {
        De = G.createElement("a"), De.href = "", De = De.href
    }
    Oe = ze.exec(De.toLowerCase()) || [], ct.fn.load = function(t, i, n) {
        if ("string" != typeof t && Be) return Be.apply(this, arguments);
        var r, s, o, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), ct.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (o = "POST"), a.length > 0 && ct.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: i
        }).done(function(t) {
            s = arguments, a.html(r ? ct("<div>").append(ct.parseHTML(t)).find(r) : t)
        }).complete(n && function(t, e) {
            a.each(n, s || [t.responseText, e, t])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ct.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: De,
            type: "GET",
            isLocal: je.test(Oe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ct.parseJSON,
                "text xml": ct.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? $($(t, ct.ajaxSettings), e) : $(ct.ajaxSettings, t)
        },
        ajaxPrefilter: D(He),
        ajaxTransport: D(qe),
        ajax: function(t, i) {
            function n(t, i, n, r) {
                var s, h, _, y, x, w = i;
                2 !== b && (b = 2, l && clearTimeout(l), c = e, a = r || "", T.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, n && (y = R(p, T, n)), y = M(p, y, T, s), s ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ct.lastModified[o] = x), x = T.getResponseHeader("etag"), x && (ct.etag[o] = x)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, h = y.data, _ = y.error, s = !_)) : (_ = w, (t || !w) && (w = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (i || w) + "", s ? m.resolveWith(f, [h, w, T]) : m.rejectWith(f, [T, w, _]), T.statusCode(v), v = e, u && d.trigger(s ? "ajaxSuccess" : "ajaxError", [T, p, s ? h : _]), g.fireWith(f, [T, w]), u && (d.trigger("ajaxComplete", [T, p]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var r, s, o, a, l, u, c, h, p = ct.ajaxSetup({}, i),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? ct(f) : ct.event,
                m = ct.Deferred(),
                g = ct.Callbacks("once memory"),
                v = p.statusCode || {},
                _ = {},
                y = {},
                b = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!h)
                                for (h = {}; e = Le.exec(a);) h[e[1].toLowerCase()] = e[2];
                            e = h[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, _[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) v[e] = [v[e], t[e]];
                            else T.always(t[T.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return c && c.abort(e), n(0, e), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || De) + "").replace(Re, "").replace(Ie, Oe[1] + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (r = ze.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === Oe[1] && r[2] === Oe[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Oe[3] || ("http:" === Oe[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ct.param(p.data, p.traditional)), N(He, p, i, T), 2 === b) return T;
            u = p.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Fe.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += ($e.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Me.test(o) ? o.replace(Me, "$1_=" + Ne++) : o + ($e.test(o) ? "&" : "?") + "_=" + Ne++)), p.ifModified && (ct.lastModified[o] && T.setRequestHeader("If-Modified-Since", ct.lastModified[o]), ct.etag[o] && T.setRequestHeader("If-None-Match", ct.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : p.accepts["*"]);
            for (s in p.headers) T.setRequestHeader(s, p.headers[s]);
            if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === b)) return T.abort();
            x = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[s](p[s]);
            if (c = N(qe, p, i, T)) {
                T.readyState = 1, u && d.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, c.send(_, n)
                } catch (w) {
                    if (!(2 > b)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, i) {
            return ct.get(t, e, i, "json")
        },
        getScript: function(t, i) {
            return ct.get(t, e, i, "script")
        }
    }), ct.each(["get", "post"], function(t, i) {
        ct[i] = function(t, n, r, s) {
            return ct.isFunction(n) && (s = s || r, r = n, n = e), ct.ajax({
                url: t,
                type: i,
                dataType: s,
                data: n,
                success: r
            })
        }
    }), ct.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ct.globalEval(t), t
            }
        }
    }), ct.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ct.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, n = G.head || ct("head")[0] || G.documentElement;
            return {
                send: function(e, r) {
                    i = G.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || r(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function() {
                    i && i.onload(e, !0)
                }
            }
        }
    });
    var Ue = [],
        Ye = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ue.pop() || ct.expando + "_" + Ne++;
            return this[t] = !0, t
        }
    }), ct.ajaxPrefilter("json jsonp", function(i, n, r) {
        var s, o, a, l = i.jsonp !== !1 && (Ye.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (s = i.jsonpCallback = ct.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ye, "$1" + s) : i.jsonp !== !1 && (i.url += ($e.test(i.url) ? "&" : "?") + i.jsonp + "=" + s), i.converters["script json"] = function() {
            return a || ct.error(s + " was not called"), a[0]
        }, i.dataTypes[0] = "json", o = t[s], t[s] = function() {
            a = arguments
        }, r.always(function() {
            t[s] = o, i[s] && (i.jsonpCallback = n.jsonpCallback, Ue.push(s)), a && ct.isFunction(o) && o(a[0]), a = o = e
        }), "script") : e
    });
    var Ve, Qe, Ge = 0,
        Ze = t.ActiveXObject && function() {
            var t;
            for (t in Ve) Ve[t](e, !0)
        };
    ct.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && L() || j()
    } : L, Qe = ct.ajaxSettings.xhr(), ct.support.cors = !!Qe && "withCredentials" in Qe, Qe = ct.support.ajax = !!Qe, Qe && ct.ajaxTransport(function(i) {
        if (!i.crossDomain || ct.support.cors) {
            var n;
            return {
                send: function(r, s) {
                    var o, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                        for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r) l.setRequestHeader(a, r[a])
                    } catch (u) {}
                    l.send(i.hasContent && i.data || null), n = function(t, r) {
                        var a, u, c, h;
                        try {
                            if (n && (r || 4 === l.readyState))
                                if (n = e, o && (l.onreadystatechange = ct.noop, Ze && delete Ve[o]), r) 4 !== l.readyState && l.abort();
                                else {
                                    h = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (p) {
                                        c = ""
                                    }
                                    a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                }
                        } catch (f) {
                            r || s(-1, f)
                        }
                        h && s(a, c, h, u)
                    }, i.async ? 4 === l.readyState ? setTimeout(n) : (o = ++Ge, Ze && (Ve || (Ve = {}, ct(t).unload(Ze)), Ve[o] = n), l.onreadystatechange = n) : n()
                },
                abort: function() {
                    n && n(e, !0)
                }
            }
        }
    });
    var Je, Ke, ti = /^(?:toggle|show|hide)$/,
        ei = RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        ni = [H],
        ri = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    r = ei.exec(e),
                    s = r && r[3] || (ct.cssNumber[t] ? "" : "px"),
                    o = (ct.cssNumber[t] || "px" !== s && +n) && ei.exec(ct.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +n || 1;
                    do a = a || ".5", o /= a, ct.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    ct.Animation = ct.extend(z, {
        tweener: function(t, e) {
            ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ri[i] = ri[i] || [], ri[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? ni.unshift(t) : ni.push(t)
        }
    }), ct.Tween = q, q.prototype = {
        constructor: q,
        init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ct.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = q.propHooks[this.prop];
            return t && t.get ? t.get(this) : q.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = q.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ct.each(["toggle", "show", "hide"], function(t, e) {
        var i = ct.fn[e];
        ct.fn[e] = function(t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(X(e, !0), t, n, r)
        }
    }), ct.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var r = ct.isEmptyObject(t),
                s = ct.speed(e, i, n),
                o = function() {
                    var e = z(this, ct.extend({}, t), s);
                    (r || ct._data(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(t, i, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    s = ct.timers,
                    o = ct._data(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && ii.test(i) && r(o[i]);
                for (i = s.length; i--;) s[i].elem !== this || null != t && s[i].queue !== t || (s[i].anim.stop(n), e = !1, s.splice(i, 1));
                (e || !n) && ct.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = ct._data(this),
                    n = i[t + "queue"],
                    r = i[t + "queueHooks"],
                    s = ct.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, ct.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), ct.each({
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ct.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), ct.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? ct.extend({}, t) : {
            complete: i || !i && e || ct.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !ct.isFunction(e) && e
        };
        return n.duration = ct.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ct.fx.speeds ? ct.fx.speeds[n.duration] : ct.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ct.isFunction(n.old) && n.old.call(this), n.queue && ct.dequeue(this, n.queue)
        }, n
    }, ct.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = q.prototype.init, ct.fx.tick = function() {
        var t, i = ct.timers,
            n = 0;
        for (Je = ct.now(); i.length > n; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
        i.length || ct.fx.stop(), Je = e
    }, ct.fx.timer = function(t) {
        t() && ct.timers.push(t) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function() {
        Ke || (Ke = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function() {
        clearInterval(Ke), Ke = null
    }, ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
        return ct.grep(ct.timers, function(e) {
            return t === e.elem
        }).length
    }), ct.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            ct.offset.setOffset(this, t, e)
        });
        var i, n, r = {
                top: 0,
                left: 0
            },
            s = this[0],
            o = s && s.ownerDocument;
        return o ? (i = o.documentElement, ct.contains(i, s) ? (typeof s.getBoundingClientRect !== V && (r = s.getBoundingClientRect()), n = W(o), {
            top: r.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: r.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }) : r) : void 0
    }, ct.offset = {
        setOffset: function(t, e, i) {
            var n = ct.css(t, "position");
            "static" === n && (t.style.position = "relative");
            var r, s, o = ct(t),
                a = o.offset(),
                l = ct.css(t, "top"),
                u = ct.css(t, "left"),
                c = ("absolute" === n || "fixed" === n) && ct.inArray("auto", [l, u]) > -1,
                h = {},
                p = {};
            c ? (p = o.position(), r = p.top, s = p.left) : (r = parseFloat(l) || 0, s = parseFloat(u) || 0), ct.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : o.css(h)
        }
    }, ct.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === ct.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (i = t.offset()), i.top += ct.css(t[0], "borderTopWidth", !0), i.left += ct.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ct.css(n, "marginTop", !0),
                    left: e.left - i.left - ct.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Z; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
                return t || Z
            })
        }
    }), ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var n = /Y/.test(i);
        ct.fn[t] = function(r) {
            return ct.access(this, function(t, r, s) {
                var o = W(t);
                return s === e ? o ? i in o ? o[i] : o.document.documentElement[r] : t[r] : (o ? o.scrollTo(n ? ct(o).scrollLeft() : s, n ? s : ct(o).scrollTop()) : t[r] = s, e)
            }, t, r, arguments.length, null)
        }
    }), ct.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        ct.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(n, r) {
            ct.fn[r] = function(r, s) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || s === !0 ? "margin" : "border");
                return ct.access(this, function(i, n, r) {
                    var s;
                    return ct.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (s = i.documentElement, Math.max(i.body["scroll" + t], s["scroll" + t], i.body["offset" + t], s["offset" + t], s["client" + t])) : r === e ? ct.css(i, n, a) : ct.style(i, n, r, a)
                }, i, o ? r : e, o, null)
            }
        })
    }), ct.fn.size = function() {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ct
    }))
}(window);
var getUrlParameter = function(t) {
    var e, i, n = decodeURIComponent(window.location.search.substring(1)),
        r = n.split("&");
    for (i = 0; i < r.length; i++)
        if (e = r[i].split("="), e[0] === t) return void 0 === e[1] ? !0 : e[1]
};
if ($(document).ready(function() {
        var t = getUrlParameter("id");
        if ("undefined" != typeof t) {
            for (var e = 0; e < data1.length; e++)
                if (data1[e].id == t) var i = data1[e];
            if (!i)
                for (var e = 0; e < data2.length; e++)
                    if (data2[e].id == t) var i = data2[e];
            if (i) {
                document.title = i.title + " | Cafe De Nam", $(".article-title").html(i.title), $(".article-short-content").html(i.short_content), $(".articles-detail .content").html(i.content), 2 == i.cat ? $(".cat-name").html('<a href="cafe-de-nam-va-toi.html"><span>Cafe <span class="de" style="text-decoration:underline;font-size:80%;display:inline-block;">de</span> nam và tôi</span></a>') : $(".cat-name").html('<a href="trai-nghiem-cafe-de-nam.html">hành trình cà phê phin</a>'), $(".fb-share").html('<div class="fb-like" data-href="' + $(location).attr("href") + '" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>');
                try {
                    FB.XFBML.parse()
                } catch (n) {}
                shuffle(data1);
                for (var e = 0; e < data1.length && 3 >= e; e++) data1[e].id != t && $(".other-item-1").append('<div class="item"><a href="chi-tiet-bai-viet.html?id=' + data1[e].id + '"><h2>' + data1[e].title + "</h2></a></div>");
                shuffle(data2);
                for (var e = 0; e < data2.length && 3 >= e; e++) data2[e].id != t && $(".other-item-2").append('<div class="item"><a href="chi-tiet-bai-viet.html?id=' + data2[e].id + '"><h2>' + data2[e].title + "</h2></a></div>")
            } else window.location = "trai-nghiem-cafe-de-nam.html"
        } else try {
            var r = getUrlParameter("page");
            "undefined" == typeof r && (r = 1);
            try {} catch (n) {}
            $(".pagination").paging(article_list.length, {
                format: "< . (q -) nnnnn (- p) . >",
                perpage: 7,
                lapping: 0,
                page: r,
                onFormat: function(t) {
                    switch (t) {
                        case "block":
                            return nclass = "", r == this.value && (nclass = "active"), '<a href="?page=' + this.value + '" class="' + nclass + '">' + this.value + "</a>";
                        case "next":
                            return r == this.value ? '<span><img src="img/icon/page-r.png"></span>' : '<a href="?page=' + this.value + '"><img src="img/icon/page-r.png"></a>';
                        case "prev":
                            return 1 == r ? '<span><img src="img/icon/page-l.png"></span>' : '<a href="?page=' + this.value + '"><img src="img/icon/page-l.png"></a>';
                        case "first":
                            return "";
                        case "last":
                            return "";
                        case "leap":
                            return "";
                        case "fill":
                            return this.active ? "<span>...</span>" : "";
                        case "left":
                            return this.active ? '<a href="?page=' + this.value + '">' + this.value + "</a>" : "";
                        case "right":
                            return this.active ? '<a href="?page=' + this.value + '">' + this.value + "</a>" : ""
                    }
                }
            })
        } catch (s) {
            console.log(s)
        }
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var r = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.2.0", n.prototype.close = function(e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            r = n.attr("data-target");
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = n.hasClass("alert") ? n : n.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.button"),
                s = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            r = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[r]()), n[r](null == s[e] ? this.options[e] : s[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, i.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.to = function(e) {
        var i = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, i) {
        var n = this.$element.find(".item.active"),
            r = i || n[e](),
            s = this.interval,
            o = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]()
        }
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: o
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                h && h.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: o
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, n.addClass(o), r.addClass(o), n.one("bsTransitionEnd", function() {
                r.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(i) {
        var n, r = t(this),
            s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.collapse"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && s.toggle && "show" == e && (e = !e), r || n.data("bs.collapse", r = new i(this, s)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var i = t.Event("show.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    e.call(n, "hide"), r || n.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                var a = t.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][a])
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(350) : n.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var n, r = t(this),
            s = r.attr("data-target") || i.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(s),
            a = o.data("bs.collapse"),
            l = a ? "toggle" : r.data(),
            u = r.attr("data-parent"),
            c = u && t(u);
        a && a.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(o, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(r).remove(), t(s).each(function() {
            var n = i(t(this)),
                r = {
                    relatedTarget: this
                };
            n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", r))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.2.0", o.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = i(r),
                o = s.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, o.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var n = t(this);
            if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = i(n),
                    o = r.hasClass("open");
                if (!o || o && 27 == e.keyCode) return 27 == e.which && r.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var i = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var n = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(r)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var i = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
        } else e && e()
    }, i.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            r = n.attr("href"),
            s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (r || "destroy" != e) && (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var n = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(o);
            l && (o = o.replace(a, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                c = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (l) {
                var p = o,
                    f = this.$element.parent(),
                    d = this.getPosition(f);
                o = "bottom" == o && u.top + u.height + h - d.scroll > d.height ? "top" : "top" == o && u.top - d.scroll - h < 0 ? "bottom" : "right" == o && u.right + c > d.width ? "left" : "left" == o && u.left - c < d.left ? "right" : o, r.removeClass(p).addClass(o)
            }
            var m = this.getCalculatedOffset(o, u, c, h);
            this.applyPlacement(m, o);
            var g = function() {
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            r = n[0].offsetWidth,
            s = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            u = n[0].offsetHeight;
        "top" == i && u != s && (e.top = e.top + s - u);
        var c = this.getViewportAdjustedDelta(i, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = c.left ? 2 * c.left - r + l : 2 * c.top - s + u,
            p = c.left ? "left" : "top",
            f = c.left ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(h, n[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this,
            n = this.tip(),
            r = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName;
        return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: n ? t(window).width() : e.outerWidth(),
            height: n ? t(window).height() : e.outerHeight()
        }, n ? {
            top: 0,
            left: 0
        } : e.offset())
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + n;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var u = e.left - s,
                c = e.left + s + i;
            u < o.left ? r.left = o.left - u : c > o.width && (r.left = o.left + o.width - c)
        }
        return r
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.popover"),
                s = "object" == typeof e && e;
            (r || "destroy" != e) && (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.2.0", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, i.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        var r = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var n = this;
        this.$body.find(this.selector).map(function() {
            var n = t(this),
                r = n.data("target") || n.attr("href"),
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[e]().top + i, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            r = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e <= r[0]) return o != (t = s[0]) && this.activate(t);
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tab");
            r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.2.0", i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = i.find(".active:last a")[0],
                s = t.Event("show.bs.tab", {
                    relatedTarget: r
                });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var o = t(n);
                this.activate(e.closest("li"), i), this.activate(o, o.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, i, n) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
        }
        var s = i.find("> .active"),
            o = n && t.support.transition && s.hasClass("fade");
        o ? s.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(i) {
        i.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.affix"),
                s = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.2.0", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                n = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.options.offset,
                o = s.top,
                a = s.bottom;
            "object" != typeof s && (a = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
            var l = null != this.unpin && n + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= e - a ? "bottom" : null != o && o >= n ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - a
                }))
            }
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function(t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? s : r;
        i(t, e)
    }
    var n, r, s;
    "classList" in document.documentElement ? (n = function(t, e) {
        return t.classList.contains(e)
    }, r = function(t, e) {
        t.classList.add(e)
    }, s = function(t, e) {
        t.classList.remove(e)
    }) : (n = function(t, i) {
        return e(i).test(t.className)
    }, r = function(t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, s = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var o = {
        hasClass: n,
        addClass: r,
        removeClass: s,
        toggleClass: i,
        has: n,
        add: r,
        remove: s,
        toggle: i
    };
    "function" == typeof define && define.amd ? define(o) : t.classie = o
}(window), window.Modernizr = function(t, e, i) {
        function n(t) {
            _.cssText = t
        }

        function r(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function o(t, e) {
            for (var n in t) {
                var r = t[n];
                if (!s(r, "-") && _[r] !== i) return "pfx" == e ? r : !0
            }
            return !1
        }

        function a(t, e, n) {
            for (var s in t) {
                var o = e[t[s]];
                if (o !== i) return n === !1 ? t[s] : r(o, "function") ? o.bind(n || e) : o
            }
            return !1
        }

        function l(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                s = (t + " " + b.join(n + " ") + n).split(" ");
            return r(e, "string") || r(e, "undefined") ? o(s, e) : (s = (t + " " + x.join(n + " ") + n).split(" "), a(s, e, i))
        }
        var u, c, h, p = "2.7.1",
            f = {},
            d = !0,
            m = e.documentElement,
            g = "modernizr",
            v = e.createElement(g),
            _ = v.style,
            y = ({}.toString, "Webkit Moz O ms"),
            b = y.split(" "),
            x = y.toLowerCase().split(" "),
            T = {},
            w = [],
            C = w.slice,
            k = {}.hasOwnProperty;
        h = r(k, "undefined") || r(k.call, "undefined") ? function(t, e) {
            return e in t && r(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return k.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = C.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var r = function() {};
                        r.prototype = e.prototype;
                        var s = new r,
                            o = e.apply(s, i.concat(C.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return e.apply(t, i.concat(C.call(arguments)))
                };
            return n
        }), T.csstransitions = function() {
            return l("transition")
        };
        for (var S in T) h(T, S) && (c = S.toLowerCase(), f[c] = T[S](), w.push((f[c] ? "" : "no-") + c));
        return f.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) h(t, n) && f.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), f[t] !== i) return f;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof d && d && (m.className += " " + (e ? "" : "no-") + t), f[t] = e
                }
                return f
            }, n(""), v = u = null,
            function(t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = _.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function r(t) {
                    var e = v[t[m]];
                    return e || (e = {}, g++, t[m] = g, v[g] = e), e
                }

                function s(t, i, n) {
                    if (i || (i = e), c) return i.createElement(t);
                    n || (n = r(i));
                    var s;
                    return s = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !s.canHaveChildren || f.test(t) || s.tagUrn ? s : n.frag.appendChild(s)
                }

                function o(t, i) {
                    if (t || (t = e), c) return t.createDocumentFragment();
                    i = i || r(t);
                    for (var s = i.frag.cloneNode(), o = 0, a = n(), l = a.length; l > o; o++) s.createElement(a[o]);
                    return s
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return _.shivMethods ? s(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(_, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = r(t);
                    return _.shivCSS && !u && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || a(t, n), t
                }
                var u, c, h = "3.7.0",
                    p = t.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        u = !0, c = !0
                    }
                }();
                var _ = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: h,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: s,
                    createDocumentFragment: o
                };
                t.html5 = _, l(e)
            }(this, e), f._version = p, f._domPrefixes = x, f._cssomPrefixes = b, f.testProp = function(t) {
                return o([t])
            }, f.testAllProps = l, f.prefixed = function(t, e, i) {
                return e ? l(t, e, i) : l(t, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + w.join(" ") : ""), f
    }(this, this.document),
    function(t, e, i) {
        function n(t) {
            return "[object Function]" == g.call(t)
        }

        function r(t) {
            return "string" == typeof t
        }

        function s() {}

        function o(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = v.shift();
            _ = 1, t ? t.t ? d(function() {
                ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : _ = 0
        }

        function l(t, i, n, r, s, l, u) {
            function c(e) {
                if (!f && o(h.readyState) && (y.r = f = 1, !_ && a(), h.onload = h.onreadystatechange = null, e)) {
                    "img" != t && d(function() {
                        x.removeChild(h)
                    }, 50);
                    for (var n in S[i]) S[i].hasOwnProperty(n) && S[i][n].onload()
                }
            }
            var u = u || p.errorTimeout,
                h = e.createElement(t),
                f = 0,
                g = 0,
                y = {
                    t: n,
                    s: i,
                    e: s,
                    a: l,
                    x: u
                };
            1 === S[i] && (g = 1, S[i] = []), "object" == t ? h.data = i : (h.src = i, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                c.call(this, g)
            }, v.splice(r, 0, y), "img" != t && (g || 2 === S[i] ? (x.insertBefore(h, b ? null : m), d(c, u)) : S[i].push(h))
        }

        function u(t, e, i, n, s) {
            return _ = 0, e = e || "j", r(t) ? l("c" == e ? w : T, t, e, this.i++, i, n, s) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
        }

        function c() {
            var t = p;
            return t.loader = {
                load: u,
                i: 0
            }, t
        }
        var h, p, f = e.documentElement,
            d = t.setTimeout,
            m = e.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            _ = 0,
            y = "MozAppearance" in f.style,
            b = y && !!e.createRange().compareNode,
            x = b ? f : m.parentNode,
            f = t.opera && "[object Opera]" == g.call(t.opera),
            f = !!e.attachEvent && !f,
            T = y ? "object" : f ? "script" : "img",
            w = f ? "script" : T,
            C = Array.isArray || function(t) {
                return "[object Array]" == g.call(t)
            },
            k = [],
            S = {},
            P = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        p = function(t) {
            function e(t) {
                var e, i, n, t = t.split("!"),
                    r = k.length,
                    s = t.pop(),
                    o = t.length,
                    s = {
                        url: s,
                        origUrl: s,
                        prefixes: t
                    };
                for (i = 0; o > i; i++) n = t[i].split("="), (e = P[n.shift()]) && (s = e(s, n));
                for (i = 0; r > i; i++) s = k[i](s);
                return s
            }

            function o(t, r, s, o, a) {
                var l = e(t),
                    u = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = n(r) ? r : r[t] || r[o] || r[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, r, s, o, a) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1, s.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(r) || n(u)) && s.load(function() {
                    c(), r && r(l.origUrl, a, o), u && u(l.origUrl, a, o), S[l.url] = 2
                })))
            }

            function a(t, e) {
                function i(t, i) {
                    if (t) {
                        if (r(t)) i || (h = function() {
                            var t = [].slice.call(arguments);
                            p.apply(this, t), f()
                        }), o(t, h, e, 0, u);
                        else if (Object(t) === t)
                            for (l in a = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!i && !--a && (n(h) ? h = function() {
                                var t = [].slice.call(arguments);
                                p.apply(this, t), f()
                            } : h[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), f()
                                }
                            }(p[l])), o(t[l], h, e, l, u))
                    } else !i && f()
                }
                var a, l, u = !!t.test,
                    c = t.load || t.both,
                    h = t.callback || s,
                    p = h,
                    f = t.complete || s;
                i(u ? t.yep : t.nope, !!c), c && i(c)
            }
            var l, u, h = this.yepnope.loader;
            if (r(t)) o(t, 0, h, 0);
            else if (C(t))
                for (l = 0; l < t.length; l++) u = t[l], r(u) ? o(u, 0, h, 0) : C(u) ? p(u) : Object(u) === u && a(u, h);
            else Object(t) === t && a(t, h)
        }, p.addPrefix = function(t, e) {
            P[t] = e
        }, p.addFilter = function(t) {
            k.push(t)
        }, p.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function() {
            e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
        }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, r, l, u) {
            var c, h, f = e.createElement("script"),
                r = r || p.errorTimeout;
            f.src = t;
            for (h in n) f.setAttribute(h, n[h]);
            i = u ? a : i || s, f.onreadystatechange = f.onload = function() {
                !c && o(f.readyState) && (c = 1, i(), f.onload = f.onreadystatechange = null)
            }, d(function() {
                c || (c = 1, i(1))
            }, r), l ? f.onload() : m.parentNode.insertBefore(f, m)
        }, t.yepnope.injectCss = function(t, i, n, r, o, l) {
            var u, r = e.createElement("link"),
                i = l ? a : i || s;
            r.href = t, r.rel = "stylesheet", r.type = "text/css";
            for (u in n) r.setAttribute(u, n[u]);
            o || (m.parentNode.insertBefore(r, m), d(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, $(document).ready(function() {
        if (function() {
                function t() {
                    if (classie.has(i, "open")) {
                        $("body").css({
                            overflow: "auto"
                        }), classie.remove(i, "open"), classie.add(i, "close");
                        var t = function(e) {
                            if (support.transitions) {
                                if ("visibility" !== e.propertyName) return;
                                this.removeEventListener(transEndEventName, t)
                            }
                            classie.remove(i, "close")
                        };
                        support.transitions ? i.addEventListener(transEndEventName, t) : t()
                    } else classie.has(i, "close") || (classie.add(i, "open"), $("body").css({
                        overflow: "hidden"
                    }))
                }
                var e = document.getElementById("trigger-overlay"),
                    i = document.querySelector("div.overlay"),
                    n = i.querySelector("button.overlay-close");
                transEndEventNames = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                }, transEndEventName = transEndEventNames[Modernizr.prefixed("transition")], support = {
                    transitions: Modernizr.csstransitions
                }, e.addEventListener("click", t), n.addEventListener("click", t)
            }(), TweenMax.from($(".backtotop i"), 1, {
                y: 30,
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: .5
            }), $(".backtotop").click(function(t) {
                t.preventDefault(), $("html,body").animate({
                    scrollTop: 0
                }, 700)
            }), TweenMax.from($(".home-page .mouse-w .mouse img"), 1, {
                y: -10,
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: .5
            }), TweenMax.from($(".story-page .box4 .arrow"), 1, {
                y: -30,
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: .5
            }), $(".story-page .box4 .btn-cir").click(function() {
                var t = $(this).attr("data-id");
                2 == t ? TweenMax.to($(".story-page .box4 .machine"), 1, {
                    y: -540
                }) : TweenMax.to($(".story-page .box4 .machine"), 1, {
                    y: -200
                }), TweenMax.to($(".story-page .box4 .machine .ele"), .3, {
                    autoAlpha: 0
                })
            }), $(".story-page .btn-diamond").click(function() {
                var t = $(this).attr("content-data");
                $(".discover-w .content-dis-" + t).addClass("active"), TweenMax.to($(".discover-w"), .8, {
                    x: -684,
                    ease: Expo.easeInOut
                }), TweenMax.to($(".discover-overlay"), .2, {
                    autoAlpha: 1,
                    visibility: "visible",
                    delay: .3
                }), $("body").css({
                    overflow: "hidden"
                })
            }), $(".discover-w .close-dis").click(function() {
                TweenMax.to($(".discover-w"), .8, {
                    x: 684,
                    ease: Expo.easeInOut
                }), TweenMax.to($(".discover-overlay"), .2, {
                    autoAlpha: 0,
                    visibility: "hidden",
                    delay: .3
                }), $("body").css({
                    overflow: "auto"
                }), $(".content-dis-w").removeClass("active")
            }), $(".discover-overlay").click(function() {
                $(".discover-w .close-dis").click()
            }), $(".back-to-top-q").length) {
            var t = 500,
                e = function() {
                    var e = $(window).scrollTop();
                    e > t ? $(".back-to-top-q").addClass("show-b") : $(".back-to-top-q").removeClass("show-b")
                };
            e(), $(window).on("scroll", function() {
                e()
            }), $(".back-to-top-q").on("click", function(t) {
                t.preventDefault(), $("html,body").animate({
                    scrollTop: 0
                }, 700)
            }), $(".plusnumber").click(function() {
                $input = $(this).parent().find("input").first(), $input.val(parseInt($input.val() || 0) + 1)
            }), $(".subnumber").click(function() {
                $input = $(this).parent().find("input").first(), $input.val() > 1 && $input.val(parseInt($input.val() || 0) - 1)
            })
        }
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    u = a.isArray,
                    c = s.prototype = i.to({}, .1, {}),
                    h = [];
                s.version = "1.18.0", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._time > 0 || s) {
                        this._initted = !1, this._init();
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
                    }
                    return this
                }, c.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, s, l, u, c, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === o) && _ !== t && (i = !0, _ > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && _ > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = p = !e || t || _ === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > this._time / v ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), d === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = _, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, o, a, c, p, f) {
                    a = a || 0;
                    var d, m, g, v, _ = o.delay || 0,
                        y = [],
                        b = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(f || o.callbackScope || this, p || h)
                        },
                        x = o.cycle,
                        T = o.startAt && o.startAt.cycle;
                    for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), d = t.length - 1, g = 0; d >= g; g++) {
                        m = {};
                        for (v in o) m[v] = o[v];
                        if (x && r(m, t, g), T) {
                            T = m.startAt = {};
                            for (v in o.startAt) T[v] = o.startAt[v];
                            r(m.startAt, t, g)
                        }
                        m.delay = _, g === d && c && (m.onComplete = b), y[g] = new s(t[g], e, m), _ += a
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var p = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(p(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    f = s.getAllTweens = function(e) {
                        return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = f(0 != r),
                        u = l.length,
                        c = i && n && r;
                    for (a = 0; u > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, o, c, h, p, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t))
                            for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
                        else {
                            r = [];
                            for (c in f)
                                for (o = f[c].target.parentNode; o;) o === t && (r = r.concat(f[c].tweens)), o = o.parentNode;
                            for (p = r.length, h = 0; p > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, o, a = f(r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, c.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    o = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    c = s.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    d = o.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.18.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
                    var s = n.repeat && h.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && h.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, g.staggerTo = function(t, e, r, s, o, l, u, c) {
                    var h, d, g = new n({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), d = 0; t.length > d; d++) h = p(r), h.startAt && (h.startAt = p(h.startAt), h.startAt.cycle && f(h.startAt, t, d)), v && f(h, t, d), g.to(t[d], e, h, d * s);
                    return this.add(g, o)
                }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, g.add = function(r, s, o, a) {
                    var u, c, h, p, f, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(p = r[h]) && (p = new n({
                                tweens: p
                            })), this.add(p, u), "string" != typeof p && "function" != typeof p && ("sequence" === o ? u = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, d, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, o, a, l, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= p) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (n = this._first; n && t >= n._startTime && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                            for (n = this._first; n && (o = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, !this._paused || g);) {
                                if (n._active || f >= n._startTime && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, g.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.18.0", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new e(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, u, c, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        _ = this._timeScale,
                        y = this._rawPrevTime,
                        b = this._paused,
                        x = this._cycle;
                    if (t >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        } else if (0 === d && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = d + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (n = this._first; n && t >= n._startTime && !p;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !p;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n), n = n._prev;
                        p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & x),
                            w = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            C = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = x * d, x > this._cycle ? T = !T : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = T ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (m = T ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = P, this._totalTime = C, this._cycle = k, this._rawPrevTime = S
                    }
                    if (!(this._time !== m && this._first || i || c || p)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                        for (n = this._first; n && (l = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || b);) {
                            if (n._active || m >= n._startTime && !n._paused && !n._gc) {
                                if (p === n) {
                                    for (p = n._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                    p = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                    return s
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            c = (i + n) / 2,
                            h = (l + u) / 2,
                            p = (u + c) / 2,
                            f = (p - h) / 8;
                        return r.b = l + (t - l) / 4, s.b = h + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + p) / 2, o.b = p - f, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    u = function(t, r, s, o, a) {
                        var u, c, h, p, f, d, m, g, v, _, y, b, x, T = t.length - 1,
                            w = 0,
                            C = t[0].a;
                        for (u = 0; T > u; u++) f = t[w], c = f.a, h = f.d, p = t[w + 1].d, a ? (y = e[u], b = i[u], x = .25 * (b + y) * r / (o ? .5 : n[u] || .5), d = h - (h - c) * (o ? .5 * r : 0 !== y ? x / y : 0), m = h + (p - h) * (o ? .5 * r : 0 !== b ? x / b : 0), g = h - (d + ((m - d) * (3 * y / (y + b) + .5) / 4 || 0))) : (d = h - .5 * (h - c) * r, m = h + .5 * (p - h) * r, g = h - (d + m) / 2), d += g, m += g, f.c = v = d, f.b = 0 !== u ? C : C = f.a + .6 * (f.c - f.a), f.da = h - c, f.ca = v - c, f.ba = C - c, s ? (_ = l(c, C, v, h), t.splice(w, 1, _[0], _[1], _[2], _[3]), w += 4) : w++, C = m;
                        f = t[w], f.b = C, f.c = C + .4 * (f.d - C), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = C - f.a, s && (_ = l(f.a, C, f.c, f.d), t.splice(w, 1, _[0], _[1], _[2], _[3]))
                    },
                    c = function(t, n, r, s) {
                        var a, l, u, c, h, p, f = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2, 0 > a) return f[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
                        for (l = 0; a > l; l++) u = t[l][n], c = t[l + 1][n], f[l] = new o(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
                        return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    h = function(t, s, o, l, h, p) {
                        var f, d, m, g, v, _, y, b, x = {},
                            T = [],
                            w = p || t[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
                        for (d in t[0]) T.push(d);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], y = !0, f = T.length; --f > -1;)
                                if (d = T[f], Math.abs(w[d] - b[d]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = T.length; --f > -1;) d = T[f], r[d] = -1 !== h.indexOf("," + d + ","), x[d] = c(t, d, r[d], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = T.length; --f > -1;)
                                if (r[d])
                                    for (m = x[T[f]], _ = m.length - 1, g = 0; _ > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = T.length, g = o ? 4 : 1; --f > -1;) d = T[f], m = x[d], u(m, s, o, l, r[d]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return x
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, u, c, h, p, f, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            _ = [];
                        if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) _.push(p);
                        for (u = _.length; --u > -1;) {
                            for (p = _[u], m[p] = l = [], f = 0, h = t.length, c = 0; h > c; c++) n = null == i ? t[c][p] : "string" == typeof(d = t[c][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && c > 1 && h - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (h = f - g + 1, f = 0, c = 0; h > c; c += g) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[f++] = d = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var n, r, s, o, a, l, u, c, h, p, f, d = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; i >= c; c++) u = d * c, h = 1 - u, n = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), f = m * i + c - 1, e[f] = (e[f] || 0) + n * n
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = e - 1,
                            h = [],
                            p = [];
                        for (i in t) f(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, p[s] = l, s === c && (u += l, s = n / e >> 0, h[s] = p, a[s] = u, l = 0, p = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, a, l = e.values || [],
                                u = {},
                                c = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in c) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) n = f[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = f[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, u, c, h, p = this._segCount,
                                f = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (u = p - 1; u > r && e >= (this._l2 = c[++r]););
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && h.length - 1 > r) {
                                    for (u = h.length - 1; u > r && e >= (this._s2 = h[++r]););
                                    this._s1 = h[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), f[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var g, v, _, y, b, x, T, w = this._autoRotate;
                                for (r = w.length; --r > -1;) s = w[r][2], x = w[r][3] || 0, T = w[r][4] === !0 ? 1 : t, o = this._beziers[w[r][0]], g = this._beziers[w[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, v += (y - v) * a, y += (o.c + (o.d - o.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, _ += (b - _) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - _, y - v) * T + x : this._initialRotations[r], f[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var u, c, h, p = e.values,
                                    f = p.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > f) return a;
                                for (u = 0; f >= u; u++) h = i(t, p[u], o, a, l, f !== u), d[u] = h.end;
                                for (c in e) g[c] = e[c];
                                return g.values = d, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x ? [
                                    ["x", "y", "rotation", u, !1]
                                ] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform), l._onInitTween(h.proxy, g, o._tween), a
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.18.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, h, p, f, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    w = /alpha\(opacity *=.+?\)/i,
                    C = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    N = /,(?=[^\)]*(?:\(|$))/gi,
                    $ = Math.PI / 180,
                    R = 180 / Math.PI,
                    M = {},
                    L = document,
                    j = function(t) {
                        return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t)
                    },
                    F = j("div"),
                    I = j("img"),
                    z = o._internals = {
                        _specialProps: l
                    },
                    B = navigator.userAgent,
                    H = function() {
                        var t = B.indexOf("Android"),
                            e = j("a");
                        return p = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), d = p && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), f = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    q = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    X = function(t) {
                        window.console && console.log(t)
                    },
                    W = "",
                    U = "",
                    Y = function(t, e) {
                        e = e || F;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (U = 3 === n ? "ms" : i[n], W = "-" + U.toLowerCase() + "-", U + t) : null
                    },
                    V = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                    Q = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return H || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || V(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : q(t)
                    },
                    G = z.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, u, c = A.test(i),
                            h = t,
                            p = F.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (h = t.parentNode || L.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                                p[c ? "width" : "height"] = n + r
                            }
                            h.appendChild(F), a = parseFloat(F[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(F), c && "%" === r && o.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = 100 * (a / n)), 0 !== a || s || (a = G(t, i, n, r, !0))
                        }
                        return f ? -a : a
                    },
                    Z = z.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + n, i);
                        return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(b, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || V(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || kt === r) && (s[r.replace(S, E)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Ct === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, E)] = e[i]);
                        return H || (s.opacity = q(t)), n = jt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Pt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            u = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(y, "") ? s : 0 : Z(t, o), void 0 !== u[o] && (a = new dt(u, o, u[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || V(t, null); --s > -1;) n -= parseFloat(Q(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Q(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, n) {
                        var r, s, o, a, l, u = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : R) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), u > a && a > -u && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ut = o.parseColor = function(t, e) {
                        var i, n, r, s, o, a, l, u, c, h, p;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = p = t.match(g), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(v)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(o + 1 / 3, n, r), i[1] = lt(o, n, r), i[2] = lt(o - 1 / 3, n, r);
                                else i = t.match(g) || at.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = at.black;
                        return e && !p && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, u = Math.max(n, r, s), c = Math.min(n, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), o = u === n ? (r - s) / h + (s > r ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4, o *= 60), i[0] = 0 | o + .5, i[1] = 0 | 100 * a + .5, i[2] = 0 | 100 * l + .5), i
                    },
                    ct = function(t, e) {
                        var i, n, r, s = t.match(ht) || [],
                            o = 0,
                            a = s.length ? "" : t;
                        for (i = 0; s.length > i; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = ut(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (u in at) ht += "|" + u + "\\b";
                ht = RegExp(ht + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ht.lastIndex = 0, ht.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var pt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(ht) || [""])[0] : "",
                            o = t.split(s).join("").match(_) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            h = c > 0 ? o[0].replace(g, "") : "";
                        return c ? r = e ? function(t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += h;
                            else if (n && N.test(t)) {
                                for (d = t.replace(N, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(ht) || [s])[0], p = t.split(e).join("").match(_) || [], f = p.length, c > f--)
                                for (; c > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : o[f];
                            return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, p;
                            if ("number" == typeof t) t += h;
                            else if (n && N.test(t)) {
                                for (s = t.replace(N, "|").split("|"), p = 0; s.length > p; p++) s[p] = r(s[p]);
                                return s.join(",")
                            }
                            if (e = t.match(_) || [], p = e.length, c > p--)
                                for (; c > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : o[p];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ft = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, u = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    dt = (z._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
                            for (a = s.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    mt = (z._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, u, c, h = n,
                            p = {},
                            f = {},
                            d = i._transform,
                            m = M;
                        for (i._transform = null, M = e, n = c = i.parse(t, e, n, r), M = m, s && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, s || (u = new dt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], s || (u = new dt(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: u,
                            pt: c
                        }
                    }, z.CSSPropTween = function(t, e, n, r, o, a, l, u, c, h, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof mt || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
                    }),
                    gt = function(t, e, i, n, r, s) {
                        var o = new mt(t, e, i, n - i, r, -1, s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    vt = o.parseComplex = function(t, e, i, n, r, s, o, a, l, u) {
                        i = i || s || "", o = new mt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "";
                        var h, p, f, d, m, _, y, b, x, T, w, C, k, S = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            E = S.length,
                            A = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(N, ", ").split(" "), P = P.join(" ").replace(N, ", ").split(" "), E = S.length), E !== P.length && (S = (s || "").split(" "), E = S.length), o.plugin = l, o.setRatio = u, ht.lastIndex = 0, h = 0; E > h; h++)
                            if (d = S[h], m = P[h], b = parseFloat(d), b || 0 === b) o.appendXtra("", b, rt(m, b), m.replace(v, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ht.test(d)) C = "," === m.charAt(m.length - 1) ? ")," : ")", k = -1 !== m.indexOf("hsl") && H, d = ut(d, k), m = ut(m, k), x = d.length + m.length > 6, x && !H && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[h]).join("transparent")) : (H || (x = !1), k ? o.appendXtra(x ? "hsla(" : "hsl(", d[0], rt(m[0], d[0]), ",", !1, !0).appendXtra("", d[1], rt(m[1], d[1]), "%,", !1).appendXtra("", d[2], rt(m[2], d[2]), x ? "%," : "%" + C, !1) : o.appendXtra(x ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], x ? "," : C, !0), x && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, C, !1))), ht.lastIndex = 0;
                        else if (_ = d.match(g)) {
                            if (y = m.match(v), !y || y.length !== _.length) return o;
                            for (f = 0, p = 0; _.length > p; p++) w = _[p], T = d.indexOf(w, f), o.appendXtra(d.substr(f, T - f), Number(w), rt(y[p], w), "", A && "px" === d.substr(T + w.length, 2), 0 === p), f = T + w.length;
                            o["xs" + o.l] += d.substr(f)
                        } else o["xs" + o.l] += o.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (C = o.xs0 + o.data.s, h = 1; o.l > h; h++) C += o["xs" + h] + o.data["xn" + h];
                            o.e = C + o["xs" + h]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    _t = 9;
                for (u = mt.prototype, u.l = u.pr = 0; --_t > 0;) u["xn" + _t] = 0, u["xs" + _t] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new mt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    bt = z._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new yt(s[n], e)
                    },
                    xt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            bt(t, {
                                parser: function(t, i, n, r, s, o, u) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : (X("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                u = yt.prototype, u.parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h, p = this.keyword;
                    if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), h = i.indexOf(p), c !== h && (-1 === h ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return vt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, u.parse = function(t, e, i, n, s, o) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    bt(t, {
                        parser: function(t, n, r, s, o, a) {
                            var l = new mt(t, r, 0, 0, o, 2, r, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = p || f;
                var Tt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ct = Y("transform"),
                    kt = W + "transform",
                    St = Y("transformOrigin"),
                    Pt = null !== Y("perspective"),
                    Et = z.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Pt ? o.defaultForce3D || "auto" : !1
                    },
                    At = window.SVGElement,
                    Ot = function(t, e, i) {
                        var n, r = L.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Dt = L.documentElement,
                    Nt = function() {
                        var t, e, i, n = m || /Android/i.test(B) && !window.chrome;
                        return L.createElementNS && !n && (t = Ot("svg", Dt), e = Ot("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Ct] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Pt), Dt.removeChild(t)), n
                    }(),
                    $t = function(t, e, i, n, r) {
                        var s, a, l, u, c, h, p, f, d, m, g, v, _, y, b = t._gsTransform,
                            x = Lt(t, !0);
                        b && (_ = b.xOrigin, y = b.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (p = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), n && x !== Mt && (h = x[0], p = x[1], f = x[2], d = x[3], m = x[4], g = x[5], v = h * d - p * f, a = u * (d / v) + c * (-f / v) + (f * g - d * m) / v, l = u * (-p / v) + c * (h / v) - (h * g - p * m) / v, u = i.xOrigin = s[0] = a, c = i.yOrigin = s[1] = l), b && (r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (a = u - _, l = c - y, b.xOffset += a * x[0] + l * x[2] - a, b.yOffset += a * x[1] + l * x[3] - l) : b.xOffset = b.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Rt = function(t) {
                        return !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Mt = [1, 0, 0, 1, 0, 0],
                    Lt = function(t, e) {
                        var i, n, r, s, o, a = t._gsTransform || new Et,
                            l = 1e5;
                        if (Ct ? n = Q(t, kt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(O), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Rt(t)) && (i && -1 !== (t.style[Ct] + "").indexOf("matrix") && (n = t.style[Ct], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
                                i = 0))), i) return Mt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _t = r.length; --_t > -1;) s = Number(r[_t]), r[_t] = (o = s - (s |= 0)) ? (0 | o * l + (0 > o ? -.5 : .5)) / l + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    jt = z.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var a, l, u, c, h, p, f = n ? t._gsTransform || new Et : new Et,
                            d = 0 > f.scaleX,
                            m = 2e-5,
                            g = 1e5,
                            v = Pt ? parseFloat(Q(t, St, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            _ = parseFloat(o.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !Rt(t)), f.svg && ($t(t, Q(t, St, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || Nt), a = Lt(t), a !== Mt) {
                            if (16 === a.length) {
                                var y, b, x, T, w, C = a[0],
                                    k = a[1],
                                    S = a[2],
                                    P = a[3],
                                    E = a[4],
                                    A = a[5],
                                    O = a[6],
                                    D = a[7],
                                    N = a[8],
                                    $ = a[9],
                                    M = a[10],
                                    L = a[12],
                                    j = a[13],
                                    F = a[14],
                                    I = a[11],
                                    z = Math.atan2(O, M);
                                f.zOrigin && (F = -f.zOrigin, L = N * F - a[12], j = $ * F - a[13], F = M * F + f.zOrigin - a[14]), f.rotationX = z * R, z && (T = Math.cos(-z), w = Math.sin(-z), y = E * T + N * w, b = A * T + $ * w, x = O * T + M * w, N = E * -w + N * T, $ = A * -w + $ * T, M = O * -w + M * T, I = D * -w + I * T, E = y, A = b, O = x), z = Math.atan2(N, M), f.rotationY = z * R, z && (T = Math.cos(-z), w = Math.sin(-z), y = C * T - N * w, b = k * T - $ * w, x = S * T - M * w, $ = k * w + $ * T, M = S * w + M * T, I = P * w + I * T, C = y, k = b, S = x), z = Math.atan2(k, C), f.rotation = z * R, z && (T = Math.cos(-z), w = Math.sin(-z), C = C * T + E * w, b = k * T + A * w, A = k * -w + A * T, O = S * -w + O * T, k = b), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(C * C + k * k) * g + .5) / g, f.scaleY = (0 | Math.sqrt(A * A + $ * $) * g + .5) / g, f.scaleZ = (0 | Math.sqrt(O * O + M * M) * g + .5) / g, f.skewX = 0, f.perspective = I ? 1 / (0 > I ? -I : I) : 0, f.x = L, f.y = j, f.z = F, f.svg && (f.x -= f.xOrigin - (f.xOrigin * C - f.yOrigin * E), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                            } else if (!(Pt && !s && a.length && f.x === a[4] && f.y === a[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var B = a.length >= 6,
                                    H = B ? a[0] : 1,
                                    q = a[1] || 0,
                                    X = a[2] || 0,
                                    W = B ? a[3] : 1;
                                f.x = a[4] || 0, f.y = a[5] || 0, u = Math.sqrt(H * H + q * q), c = Math.sqrt(W * W + X * X), h = H || q ? Math.atan2(q, H) * R : f.rotation || 0, p = X || W ? Math.atan2(X, W) * R + h : f.skewX || 0, Math.abs(p) > 90 && 270 > Math.abs(p) && (d ? (u *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), f.scaleX = u, f.scaleY = c, f.rotation = h, f.skewX = p, Pt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = _, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * H + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * q + f.yOrigin * W))
                            }
                            f.zOrigin = v;
                            for (l in f) m > f[l] && f[l] > -m && (f[l] = 0)
                        }
                        return n && (t._gsTransform = f, f.svg && (Tt && t.style[Ct] ? e.delayedCall(.001, function() {
                            Bt(t.style, Ct)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Ft = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * $,
                            s = r + n.skewX * $,
                            o = 1e5,
                            a = (0 | Math.cos(r) * n.scaleX * o) / o,
                            l = (0 | Math.sin(r) * n.scaleX * o) / o,
                            u = (0 | Math.sin(s) * -n.scaleY * o) / o,
                            c = (0 | Math.cos(s) * n.scaleY * o) / o,
                            h = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = l, l = -u, u = -i, e = p.filter, h.filter = "";
                            var f, d, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                _ = "absolute" !== p.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                T = n.x + g * n.xPercent / 100,
                                w = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, d = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, T += f - (f * a + d * l), w += d - (f * u + d * c)), _ ? (f = g / 2, d = v / 2, y += ", Dx=" + (f - (f * a + d * l) + T) + ", Dy=" + (d - (f * u + d * c) + w) + ")") : y += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (_ && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !_) {
                                var C, k, S, P = 8 > m ? 1 : -1;
                                for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + T), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + w), _t = 0; 4 > _t; _t++) k = et[_t], C = p[k], i = -1 !== C.indexOf("px") ? parseFloat(C) : G(this.t, k, parseFloat(C), C.replace(b, "")) || 0, S = i !== n[k] ? 2 > _t ? -n.ieOffsetX : -n.ieOffsetY : 2 > _t ? f - n.ieOffsetX : d - n.ieOffsetY, h[k] = (n[k] = Math.round(i - S * (0 === _t || 2 === _t ? 1 : P))) + "px"
                            }
                        }
                    },
                    It = z.set3DTransformRatio = z.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, u, c, h, p, d, m, g, v, _, y, b, x, T, w, C, k = this.data,
                            S = this.t.style,
                            P = k.rotation,
                            E = k.rotationX,
                            A = k.rotationY,
                            O = k.scaleX,
                            D = k.scaleY,
                            N = k.scaleZ,
                            R = k.x,
                            M = k.y,
                            L = k.z,
                            j = k.svg,
                            F = k.perspective,
                            I = k.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || L || F || A || E) || Tt && j || !Pt) return void(P || k.skewX || j ? (P *= $, w = k.skewX * $, C = 1e5, e = Math.cos(P) * O, r = Math.sin(P) * O, i = Math.sin(P - w) * -D, s = Math.cos(P - w) * D, w && "simple" === k.skewType && (_ = Math.tan(w), _ = Math.sqrt(1 + _ * _), i *= _, s *= _, k.skewY && (e *= _, r *= _)), j && (R += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, M += k.yOrigin - (k.xOrigin * r + k.yOrigin * s) + k.yOffset, Tt && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), R += .01 * k.xPercent * m.width, M += .01 * k.yPercent * m.height), m = 1e-6, m > R && R > -m && (R = 0), m > M && M > -m && (M = 0)), b = (0 | e * C) / C + "," + (0 | r * C) / C + "," + (0 | i * C) / C + "," + (0 | s * C) / C + "," + R + "," + M + ")", j && Tt ? this.t.setAttribute("transform", "matrix(" + b) : S[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + b) : S[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + D + "," + R + "," + M + ")");
                        if (f && (m = 1e-4, m > O && O > -m && (O = N = 2e-5), m > D && D > -m && (D = N = 2e-5), !F || k.z || k.rotationX || k.rotationY || (F = 0)), P || k.skewX) P *= $, g = e = Math.cos(P), v = r = Math.sin(P), k.skewX && (P -= k.skewX * $, g = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (_ = Math.tan(k.skewX * $), _ = Math.sqrt(1 + _ * _), g *= _, v *= _, k.skewY && (e *= _, r *= _))), i = -v, s = g;
                        else {
                            if (!(A || E || 1 !== N || F || j)) return void(S[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + L + "px)" + (1 !== O || 1 !== D ? " scale(" + O + "," + D + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        u = 1, n = o = a = l = c = h = 0, p = F ? -1 / F : 0, d = k.zOrigin, m = 1e-6, x = ",", T = "0", P = A * $, P && (g = Math.cos(P), v = Math.sin(P), a = -v, c = p * -v, n = e * v, o = r * v, u = g, p *= g, e *= g, r *= g), P = E * $, P && (g = Math.cos(P), v = Math.sin(P), _ = i * g + n * v, y = s * g + o * v, l = u * v, h = p * v, n = i * -v + n * g, o = s * -v + o * g, u *= g, p *= g, i = _, s = y), 1 !== N && (n *= N, o *= N, u *= N, p *= N), 1 !== D && (i *= D, s *= D, l *= D, h *= D), 1 !== O && (e *= O, r *= O, a *= O, c *= O), (d || j) && (d && (R += n * -d, M += o * -d, L += u * -d + d), j && (R += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, M += k.yOrigin - (k.xOrigin * r + k.yOrigin * s) + k.yOffset), m > R && R > -m && (R = T), m > M && M > -m && (M = T), m > L && L > -m && (L = 0)), b = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? T : e) + x + (m > r && r > -m ? T : r) + x + (m > a && a > -m ? T : a), b += x + (m > c && c > -m ? T : c) + x + (m > i && i > -m ? T : i) + x + (m > s && s > -m ? T : s), E || A ? (b += x + (m > l && l > -m ? T : l) + x + (m > h && h > -m ? T : h) + x + (m > n && n > -m ? T : n), b += x + (m > o && o > -m ? T : o) + x + (m > u && u > -m ? T : u) + x + (m > p && p > -m ? T : p) + x) : b += ",0,0,0,0,1,0,", b += R + x + M + x + L + x + (F ? 1 + -L / F : 1) + ")", S[Ct] = b
                    };
                u = Et.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var u, c, h, p, f, d, m, g, v, _, y = t._gsTransform,
                            b = t.style,
                            x = 1e-6,
                            T = wt.length,
                            w = l,
                            C = {},
                            k = "transformOrigin";
                        if (l.display ? (p = Q(t, "display"), b.display = "block", u = jt(t, r, !0, l.parseTransform), b.display = p) : u = jt(t, r, !0, l.parseTransform), n._transform = u, "string" == typeof w.transform && Ct) p = F.style, p[Ct] = w.transform, p.display = "block", p.position = "absolute", L.body.appendChild(F), c = jt(F, null, !1), L.body.removeChild(F), c.perspective || (c.perspective = u.perspective), null != w.xPercent && (c.xPercent = st(w.xPercent, u.xPercent)), null != w.yPercent && (c.yPercent = st(w.yPercent, u.yPercent));
                        else if ("object" == typeof w) {
                            if (c = {
                                    scaleX: st(null != w.scaleX ? w.scaleX : w.scale, u.scaleX),
                                    scaleY: st(null != w.scaleY ? w.scaleY : w.scale, u.scaleY),
                                    scaleZ: st(w.scaleZ, u.scaleZ),
                                    x: st(w.x, u.x),
                                    y: st(w.y, u.y),
                                    z: st(w.z, u.z),
                                    xPercent: st(w.xPercent, u.xPercent),
                                    yPercent: st(w.yPercent, u.yPercent),
                                    perspective: st(w.transformPerspective, u.perspective)
                                }, g = w.directionalRotation, null != g)
                                if ("object" == typeof g)
                                    for (p in g) w[p] = g[p];
                                else w.rotation = g;
                                "string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = st(w.x, u.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = st(w.y, u.yPercent)), c.rotation = ot("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : u.rotation, u.rotation, "rotation", C), Pt && (c.rotationX = ot("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", C), c.rotationY = ot("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", C)), c.skewX = null == w.skewX ? u.skewX : ot(w.skewX, u.skewX), c.skewY = null == w.skewY ? u.skewY : ot(w.skewY, u.skewY), (h = c.skewY - u.skewY) && (c.skewX += h, c.rotation += h)
                        }
                        for (Pt && null != w.force3D && (u.force3D = w.force3D, m = !0), u.skewType = w.skewType || u.skewType || o.defaultSkewType, d = u.force3D || u.z || u.rotationX || u.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == w.scale || (c.scaleZ = 1); --T > -1;) i = wt[T], f = c[i] - u[i], (f > x || -x > f || null != w[i] || null != M[i]) && (m = !0, s = new mt(u, i, u[i], f, s), i in C && (s.e = C[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return f = w.transformOrigin, u.svg && (f || w.svgOrigin) && (v = u.xOffset, _ = u.yOffset, $t(t, nt(f), c, w.svgOrigin, w.smoothOrigin), s = gt(u, "xOrigin", (y ? u : c).xOrigin, c.xOrigin, s, k), s = gt(u, "yOrigin", (y ? u : c).yOrigin, c.yOrigin, s, k), (v !== u.xOffset || _ !== u.yOffset) && (s = gt(u, "xOffset", y ? v : u.xOffset, u.xOffset, s, k), s = gt(u, "yOffset", y ? _ : u.yOffset, u.yOffset, s, k)), f = Tt ? null : "0px 0px"), (f || Pt && d && u.zOrigin) && (Ct ? (m = !0, i = St, f = (f || Q(t, i, r, !1, "50% 50%")) + "", s = new mt(b, i, 0, 0, s, -1, k), s.b = b[i], s.plugin = a, Pt ? (p = u.zOrigin, f = f.split(" "), u.zOrigin = (f.length > 2 && (0 === p || "0px" !== f[2]) ? parseFloat(f[2]) : p) || 0, s.xs0 = s.e = f[0] + " " + (f[1] || "50%") + " 0px", s = new mt(u, "zOrigin", 0, 0, s, -1, s.n), s.b = p, s.xs0 = s.e = u.zOrigin) : s.xs0 = s.e = f) : nt(f + "", u)), m && (n._transformType = u.svg && Tt || !d && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), bt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), bt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o) {
                        e = this.format(e);
                        var a, l, u, c, h, p, f, d, m, g, v, _, y, b, x, T, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; w.length > l; l++) this.p.indexOf("border") && (w[l] = Y(w[l])), h = c = Q(t, w[l], r, !1, "0px"), -1 !== h.indexOf(" ") && (c = h.split(" "), h = c[0], c = c[1]), p = u = a[l], f = parseFloat(h), _ = h.substr((f + "").length), y = "=" === p.charAt(1), y ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = n[i] || _), v !== _ && (b = G(t, "borderLeft", f, _), x = G(t, "borderTop", f, _), "%" === v ? (h = 100 * (b / m) + "%", c = 100 * (x / g) + "%") : "em" === v ? (T = G(t, "borderLeft", 1, "em"), h = b / T + "em", c = x / T + "em") : (h = b + "px", c = x + "px"), y && (p = parseFloat(h) + d + v, u = parseFloat(c) + d + v)), o = vt(C, w[l], h + " " + c, p + " " + u, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: pt("0px 0px 0px 0px", !1, !0)
                }), bt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u, c, h, p, f = "background-position",
                            d = r || V(t, null),
                            g = this.format((d ? m ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Q(t, "backgroundImage").replace(P, ""), p && "none" !== p)) {
                            for (a = g.split(" "), l = v.split(" "), I.setAttribute("src", p), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : 100 * (parseFloat(g) / h) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, s, o)
                    },
                    formatter: nt
                }), bt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), bt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), bt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), bt("transformStyle", {
                    prefix: !0
                }), bt("backfaceVisibility", {
                    prefix: !0
                }), bt("userSelect", {
                    prefix: !0
                }), bt("margin", {
                    parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                }), bt("padding", {
                    parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), bt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), bt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), bt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), bt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), bt("borderWidth", {
                    parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), bt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r) {
                        var s = t.style,
                            o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new mt(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
                    }
                });
                var zt = function(t) {
                    var e, i = this.t,
                        n = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
                };
                bt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Q(t, "visibility", r) && 0 !== e && (a = 0), H ? s = new mt(l, "opacity", a, e - a, s) : (s = new mt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = zt), u && (s = new mt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Bt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ht = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Bt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                bt("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var u, c, h, p, f, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new mt(t, n, 0, 0, o, 2), o.setRatio = Ht, o.pr = -11, i = !0, o.b = d, c = J(t, r), h = t._gsClassPT) {
                            for (p = {}, f = h.data; f;) p[f.p] = 1, f = f._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = K(t, c, J(t), l, p), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
                    }
                });
                var qt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? St : l[i].p), Bt(o, i);
                        r && (Bt(o, Ct), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (bt("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new mt(t, n, 0, 0, s, 2), s.setRatio = qt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), _t = u.length; _t--;) xt(u[_t]);
                u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = V(t, ""), s = this._overwriteProps;
                    var u, f, m, g, v, _, y, b, x, w = t.style;
                    if (h && "" === w.zIndex && (u = Q(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (g = w.cssText, u = J(t, r), w.cssText = g + ";" + e, u = K(t, u, J(t)).difs, !H && T.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, w.cssText = g), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Ct ? p && (h = !0, "" === w.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(w, "zIndex", 0)), d && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, m = f; m && m._next;) m = m._next;
                        b = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = Ct ? It : Ft, b.data = this._transform || jt(t, r, !0), b.tween = a, b.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (_ = f._next, m = g; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : v) ? f._prev._next = f: g = f, (f._next = m) ? m._prev = f : v = f, f = _
                        }
                        this._firstPT = g
                    }
                    return !0
                }, u.parse = function(t, e, i, s) {
                    var o, a, u, h, p, f, d, m, g, v, _ = t.style;
                    for (o in e) f = e[o], a = l[o], a ? i = a.parse(t, f, o, this, i, s, e) : (p = Q(t, o, r) + "", g = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && C.test(f) ? (g || (f = ut(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = vt(_, o, p, f, !0, "transparent", i, 0, s)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (u = parseFloat(p), d = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (u = it(t, o, r), d = "px") : "left" === o || "top" === o ? (u = Z(t, o, r), d = "px") : (u = "opacity" !== o ? 0 : 1, d = "")), v = g && "=" === f.charAt(1), v ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *= parseFloat(f), m = f.replace(b, "")) : (h = parseFloat(f), m = g ? f.replace(b, "") : ""), "" === m && (m = o in n ? n[o] : d), f = h || 0 === h ? (v ? h + u : h) + m : e[o], d !== m && "" !== m && (h || 0 === h) && u && (u = G(t, o, u, d), "%" === m ? (u /= G(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = u + "%")) : "em" === m || "rem" === m ? u /= G(t, o, 1, m) : "px" !== m && (h = G(t, o, h, m), m = "px"), v && (h || 0 === h) && (f = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== _[o] && (f || "NaN" != f + "" && null != f) ? (i = new mt(_, o, h || u || 0, 0, i, -1, o, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p) : X("invalid " + o + " tween value: " + e[o]) : (i = new mt(_, o, u, h - u, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, p, f), i.xs0 = m)) : i = vt(_, o, p, f, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || jt(this._target, r, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Xt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Xt, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Wt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Wt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Wt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        u = [l],
                        c = [],
                        h = [],
                        p = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Wt(t, c, p), l.render(i, !0, !0), Wt(t, h), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                        if (s = K(p[r], c[r], h[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n) f[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s) a[o] = c[r][o];
                            u.push(e.fromTo(p[r], i, a, s))
                        }
                    return u
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = 1;
                    for (o = s.length; --o > -1;)
                        for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e) {
                        var i;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, r, s, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = s - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > u || -u > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    h = function(t, e, i, n) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = h("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), f = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / h * f, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (s = 1 - i, r = s * s * v) : "in" === l ? r = i * i * v : .5 > i ? (s = 2 * i, r = .5 * s * s * v) : (s = 2 * (1 - i), r = .5 * s * s * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), f = h; --f > -1;) o = u[f], a = new p(o.x, o.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, h("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, h("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), h("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, o, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                c = 1e-10,
                h = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                m = function(n, r, s, o) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(u) {
                        for (var c, h, p, f, g, v = r.length, _ = v; --v > -1;)(c = d[r[v]] || new m(r[v], [])).gsClass ? (a[v] = c.gsClass, _--) : u && c.sc.push(this);
                        if (0 === _ && s)
                            for (h = ("com.greensock." + n).split("."), p = h.pop(), f = l(h.join("."))[p] = this.gsClass = s.apply(s, a), o && (i[p] = f, g = "undefined" != typeof module && module.exports, !g && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === e && g && (module.exports = f)), v = 0; this.sc.length > v; v++) this.sc[v].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = u._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var _ = [0, 0, 1, 1],
                y = [],
                b = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
                }, !0),
                x = b.map = {},
                T = b.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], r = n ? v("easing." + s, null, !0) : u.easing[s] || {}, o = h.length; --o > -1;) a = h[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = b.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, T(new b(null, null, 1, r), s, "easeOut", !0), T(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), T(new b(null, null, 3, r), s, "easeInOut");
            x.linear = u.easing.Linear.easeIn, x.swing = u.easing.Quad.easeInOut;
            var w = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = w.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, u = this._listeners[t],
                    c = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === c && r > s.pr && (c = l + 1);
                u.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== o || a || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var C = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                P = S();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !C;) C = t[n[r] + "RequestAnimationFrame"], k = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, s, l, u = this,
                    h = S(),
                    f = e !== !1 && C,
                    d = 500,
                    m = 33,
                    g = "tick",
                    v = function(t) {
                        var e, o, a = S() - P;
                        a > d && (h += a - m), P += a, u.time = (P - h) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(v)), o && u.dispatchEvent(g)
                    };
                w.call(u), u.time = u.frame = 0, u.tick = function() {
                    v(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / c, m = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), n = p, r = null, u === o && (a = !1))
                }, u.wake = function() {
                    null !== r ? u.sleep() : u.frame > 10 && (P = S() - d + 5), n = 0 === i ? p : f && C ? C : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                    }, u === o && (a = !0), v(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), f = t, void u.fps(i)) : f
                }, u.fps(t), setTimeout(function() {
                    f && 5 > u.frame && u.useRAF(!1)
                }, 1500)
            }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
            var E = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Y) {
                    a || o.wake();
                    var i = this.vars.useFrames ? U : Y;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = E.ticker = new u.Ticker, s = E.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var A = function() {
                a && S() - P > 2e3 && o.wake(), setTimeout(A, 2e3)
            };
            A(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function() {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, s._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function() {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (R.length && Q(), this.render(t, e, !1), R.length && Q())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var O = v("core.SimpleTimeline", function(t) {
                E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = O.prototype = new E, s.constructor = O, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var D = v("TweenLite", function(e, i, n) {
                    if (E.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = o = h(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(h(s))) : (this._siblings[r] = G(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : (s = o[r--] = D.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                N = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                $ = function(t, e) {
                    var i, n = {};
                    for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = D.prototype = new E, s.constructor = D, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, D.version = "1.18.0", D.defaultEase = s._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var R = [],
                M = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                j = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function(t, e, i, n) {
                    var r, s, o, a, l, u, c, h = [t, e],
                        p = 0,
                        f = "",
                        d = 0;
                    for (h.start = t, i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(L) || [], s = e.match(L) || [], n && (n._next = null, n.blob = 1, h._firstPT = n), l = s.length, a = 0; l > a; a++) c = s[a], u = e.substr(p, e.indexOf(c, p) - p), f += u || !a ? u : ",", p += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || a >= r.length ? f += c : (f && (h.push(f), f = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        r: d && 4 > d
                    }), p += c.length;
                    return f += e.substr(p), f && h.push(f), h.setRatio = j, h
                },
                I = function(t, e, i, n, r, s, o, a) {
                    var l, u, c = "get" === i ? t[e] : i,
                        h = typeof t[e],
                        p = "string" == typeof n && "=" === n.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === h,
                            pg: 0,
                            n: r || e,
                            r: s,
                            pr: 0,
                            c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                    return "number" !== h && ("function" === h && "get" === i && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = c = o ? t[u](o) : t[u]()), "string" == typeof c && (o || isNaN(c)) ? (f.fp = o, l = F(c, n, a || D.defaultStringFilter, f), f = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : p || (f.c = parseFloat(n) - parseFloat(c) || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                z = D._internals = {
                    isArray: f,
                    isSelector: N,
                    lazyTweens: R,
                    blobDif: F
                },
                B = D._plugins = {},
                H = z.tweenLookup = {},
                q = 0,
                X = z.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                U = E._rootFramesTimeline = new O,
                Y = E._rootTimeline = new O,
                V = 30,
                Q = z.lazyRender = function() {
                    var t, e = R.length;
                    for (M = {}; --e > -1;) t = R[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    R.length = 0
                };
            Y._startTime = o.time, U._startTime = o.frame, Y._active = U._active = !0, setTimeout(Q, 1), E._updateRoot = D.render = function() {
                var t, e, i;
                if (R.length && Q(), Y.render((o.time - Y._startTime) * Y._timeScale, !1, !1), U.render((o.frame - U._startTime) * U._timeScale, !1, !1), R.length && Q(), o.frame >= V) {
                    V = o.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in H) {
                        for (e = H[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete H[i]
                    }
                    if (i = Y._first, (!i || i._paused) && D.autoSleep && !U._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", E._updateRoot);
            var G = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (H[s || (t._gsTweenID = s = "t" + q++)] || (H[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = H[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return H[s].tweens
                },
                Z = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), o = D.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                },
                J = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, h = e._startTime + c,
                        p = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || K(e, 0, d), 0 === K(a, u, d) && (p[f++] = a)) : h >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && 2e-10 >= h - a._startTime || (p[f++] = a)));
                    for (s = f; --s > -1;)
                        if (a = p[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Z(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                K = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) X[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, o, a, l, u, c;
                if (null == e) return !1;
                M[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && B.css && this.vars.autoCSS !== !1 && $(this.vars, e);
                for (s in this.vars)
                    if (c = this.vars[s], X[s]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (B[s] && (l = new B[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[s] = I.call(this, e, s, "get", c, s, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && h >= .5) && (h = 1 - h), 3 === p && (h *= 2), 1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h), this.ratio = 1 === p ? 1 - h : 2 === p ? h : .5 > t / l ? h / 2 : 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, R.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, r, s, o, a, l, u, c, h, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || N(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !t) && !Z(this, i, e, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, s._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = G(n[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, r, s;
                if ((f(t) || N(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = G(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var tt = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (s = tt.prototype, tt.version = "1.18.0", tt.API = 2, s._firstPT = null, s._addTween = I, s.setRatio = j, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (B[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            tt.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new tt(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, tt.activate([o]), o
                }, n = t._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e, i) {
        t.fn.paging = function(n, r) {
            var s = this,
                o = {
                    setOptions: function(n) {
                        return o.a = t.extend(o.a || {
                            lapping: 0,
                            perpage: 10,
                            page: 1,
                            refresh: {
                                interval: 10,
                                url: null
                            },
                            format: "",
                            lock: !1,
                            circular: !1,
                            onClick: null,
                            onFormat: function() {},
                            onSelect: function() {
                                return !0
                            },
                            onRefresh: function() {}
                        }, n || {}), o.a.lapping |= 0, o.a.perpage |= 0, null !== o.a.page && (o.a.page |= 0), 1 > o.a.perpage && (o.a.perpage = 10), o.interval && e.clearInterval(o.interval), o.a.refresh.url && (o.interval = e.setInterval(function() {
                            t.ajax({
                                url: o.a.refresh.url,
                                success: function(e) {
                                    if ("string" == typeof e) try {
                                        e = t.parseJSON(e)
                                    } catch (i) {
                                        return
                                    }
                                    o.a.onRefresh(e)
                                }
                            })
                        }, 1e3 * o.a.refresh.interval)), o.format = function(t) {
                            for (var e, n = 0, r = 0, s = 1, o = {
                                    g: [],
                                    i: 0,
                                    h: 0,
                                    b: 5,
                                    current: 3,
                                    l: 0,
                                    m: 0
                                }, a = /[*<>pq\[\]().-]|[nc]+!?/g, l = {
                                    "[": "first",
                                    "]": "last",
                                    "<": "prev",
                                    ">": "next",
                                    q: "left",
                                    p: "right",
                                    "-": "fill",
                                    ".": "leap"
                                }, u = {}; e = a.exec(t);) e = "" + e, i === l[e] ? "(" === e ? r = ++n : ")" === e ? r = 0 : s && ("*" === e ? (o.i = 1, o.h = 0) : (o.i = 0, o.h = "!" === e.charAt(e.length - 1), o.b = e.length - o.h, (o.current = 1 + e.indexOf("c")) || (o.current = 1 + o.b >> 1)), o.g.push({
                                f: "block",
                                j: 0,
                                c: 0
                            }), s = 0) : (o.g.push({
                                f: l[e],
                                j: r,
                                c: i === u[e] ? u[e] = 1 : ++u[e]
                            }), "q" === e ? ++o.m : "p" === e && ++o.l);
                            return o
                        }(o.a.format), o
                    },
                    setNumber: function(t) {
                        return o.s = i === t || 0 > t ? -1 : t, o
                    },
                    setPage: function(n) {
                        function r(t, e, i) {
                            i = "" + t.onFormat.call(e, i), c = e.value ? c + i.replace(/<a/i, '<a data-page="' + e.value + '"') : c + i
                        }
                        if (o.a.lock) return o.a.onSelect(0, s), o;
                        if (i === n) {
                            if (n = o.a.page, null === n) return o
                        } else if (o.a.page == n) return o;
                        o.a.page = n |= 0;
                        var a, l, u, c, h, p, f, d, m = o.s,
                            g = o.a,
                            v = 1,
                            _ = o.format,
                            y = _.g.length,
                            b = y;
                        for (g.perpage <= g.lapping && (g.lapping = g.perpage - 1), d = m <= g.lapping ? 0 : 0 | g.lapping, 0 > m ? (u = m = -1, a = Math.max(1, n - _.current + 1 - d), l = a + _.b) : (u = 1 + Math.ceil((m - g.perpage) / (g.perpage - d)), n = Math.max(1, Math.min(0 > n ? 1 + u + n : n, u)), _.i ? (a = 1, l = 1 + u, _.current = n, _.b = u) : (a = Math.max(1, Math.min(n - _.current, u - _.b) + 1), l = _.h ? a + _.b : Math.min(a + _.b, 1 + u))); b--;) {
                            switch (p = 0, f = _.g[b], f.f) {
                                case "left":
                                    p = f.c < a;
                                    break;
                                case "right":
                                    p = l <= u - _.l + f.c;
                                    break;
                                case "first":
                                    p = _.current < n;
                                    break;
                                case "last":
                                    p = _.b < _.current + u - n;
                                    break;
                                case "prev":
                                    p = n > 1;
                                    break;
                                case "next":
                                    p = u > n
                            }
                            v |= p << f.j
                        }
                        for (h = {
                                number: m,
                                lapping: d,
                                pages: u,
                                perpage: g.perpage,
                                page: n,
                                slice: [(p = n * (g.perpage - d) + d) - g.perpage, Math.min(p, m)]
                            }, c = ""; ++b < y;) {
                            switch (f = _.g[b], p = v >> f.j & 1, f.f) {
                                case "block":
                                    for (; l > a; ++a) h.value = a, h.pos = 1 + _.b - l + a, h.active = u >= a || 0 > m, h.first = 1 === a, h.last = a === u && m > 0, r(g, h, f.f);
                                    continue;
                                case "left":
                                    h.value = f.c, h.active = f.c < a;
                                    break;
                                case "right":
                                    h.value = u - _.l + f.c, h.active = l <= h.value;
                                    break;
                                case "first":
                                    h.value = 1, h.active = p && n > 1;
                                    break;
                                case "prev":
                                    (h.active = g.circular) ? h.value = 1 === n ? u : n - 1: (h.value = Math.max(1, n - 1), h.active = p && n > 1);
                                    break;
                                case "last":
                                    (h.active = 0 > m) ? h.value = 1 + n: (h.value = u, h.active = p && u > n);
                                    break;
                                case "next":
                                    (h.active = g.circular) ? h.value = 1 + n % u: (h.active = 0 > m) ? h.value = 1 + n : (h.value = Math.min(1 + n, u), h.active = p && u > n);
                                    break;
                                case "leap":
                                case "fill":
                                    h.pos = f.c, h.active = p, r(g, h, f.f);
                                    continue
                            }
                            h.pos = f.c, h.last = h.first = i, r(g, h, f.f)
                        }
                        return s.length && (t("a", s.html(c)).click(g.onClick || function(i) {
                            i.preventDefault(), i = this;
                            do
                                if ("a" === i.nodeName.toLowerCase()) break;
                            while (i = i.parentNode);
                            o.setPage(t(i).data("page")), o.o && (e.location = i.href)
                        }), o.o = g.onSelect.call({
                            number: m,
                            lapping: d,
                            pages: u,
                            slice: h.slice
                        }, n, s)), o
                    }
                };
            return o.setNumber(n).setOptions(r).setPage()
        }
    }(jQuery, this),
    function(t, e, i, n, r, s, o) {
        t.GoogleAnalyticsObject = r, t[r] = t[r] || function() {
            (t[r].q = t[r].q || []).push(arguments)
        }, t[r].l = 1 * new Date, s = e.createElement(i), o = e.getElementsByTagName(i)[0], s.async = 1, s.src = n, o.parentNode.insertBefore(s, o)
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-80878619-1", "auto", {
        allowLinker: !0
    }), ga("require", "linker"), ga("linker:autoLink", ["dev.bydna.net"]), window.location.href.indexOf("trai-nghiem-cafe-de-nam.html") > -1 && ga("set", "dimension1", "Hanh trinh Cafe Phin"), window.location.href.indexOf("cafe-de-nam-va-toi.html") > -1 && ga("set", "dimension1", "Cafe De Nam va toi"), window.location.href.indexOf("dang-ky-mo-quan-co-kinh-doanh-cafe.html") > -1 && ga("set", "dimension1", "Co kinh doanh cafe"), window.location.href.indexOf("dang-ky-mo-quan-khong-kinh-doanh-cafe.html") > -1 && ga("set", "dimension1", "Khong kinh doanh cafe"), ga("send", "pageview"), $("document").ready(function() {
        $(".home-page .page3 .btn-yellow").click(function() {
            ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Mo Quan",
                eventLabel: "Trang Chu"
            })
        }), $(".partner2-l .partner .request div:eq(0) a").click(function() {}), $(".partner2-l .partner .request div:eq(1) a").click(function() {}), $("nav .list-nav li").click(function() {
            var t = $("nav .list-nav li").index(this);
            1 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Chung Toi",
                eventLabel: "Menu"
            }), 2 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Cau chuyen Cafe De Nam",
                eventLabel: "Menu"
            }), 3 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Trai nghiem Cafe De Nam",
                eventLabel: "Menu"
            }), 4 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "He thong quan",
                eventLabel: "Menu"
            }), 5 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Mo Quan",
                eventLabel: "Menu"
            }), 6 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Mua Phin Dien",
                eventLabel: "Menu"
            })
        }), $("footer .left ul li").click(function() {
            var t = $("footer .left ul li").index(this);
            0 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Mo Quan",
                eventLabel: "Footer"
            }), 1 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Mua Phin Dien",
                eventLabel: "Footer"
            }), 2 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Dien thoai Hotline",
                eventLabel: "Footer"
            })
        }), $("footer .right ul li").click(function() {
            var t = $("footer .right ul li").index(this);
            0 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Facebook",
                eventLabel: "Footer"
            }), 1 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Youtube",
                eventLabel: "Footer"
            }), 2 == t && ga("send", {
                hitType: "event",
                eventCategory: "Button_Click",
                eventAction: "Google Plus",
                eventLabel: "Footer"
            })
        }), $("footer .left ul li:eq(2) a").click(function() {
            ga("send", {
                hitType: "event",
                eventCategory: "Call_Action",
                eventAction: "Goi Hotline",
                eventLabel: ""
            })
        })
    });