"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
!function (t, e) {
    "function" == typeof define && define.amd ? define("Checkbix", e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports = module.exports = e() : t.Checkbix = e()
}(void 0, function () {
    var r, e = {}, a = {initClass: "checkbix"}, l = function (t, e, o) {
        if ("[object Object]" === Object.prototype.toString.call(t)) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.call(o, t[n], n, t); else for (var i = 0, r = t.length; i < r; i++) e.call(o, t[i], i, t)
    }, c = function () {
        for (var t = document.querySelectorAll("." + r.initClass), e = 0; e < t.length; e++) {
            var o = t[e].getAttribute("data-size") ? t[e].getAttribute("data-size") : "",
                n = t[e].getAttribute("data-arialabel") ? t[e].getAttribute("data-arialabel") : "";
            t[e].insertAdjacentHTML("afterend", '<label aria-label="' + n + '" role="checkbox" for="' + t[e].id + '" class="' + r.initClass + '"><span class="' + o + '"></span>' + t[e].getAttribute("data-text") + "</label>")
        }
    };
    return e.destroy = function () {
        r && (document.removeEventListener("click", c, !1), r = null)
    }, e.init = function (t) {
        var o, n, i;
        e.destroy(), n = t || {}, i = {}, l(o = a, function (t, e) {
            i[e] = o[e]
        }), l(n, function (t, e) {
            i[e] = n[e]
        }), r = i, document.addEventListener("DOMContentLoaded", c, !1)
    }, e
});