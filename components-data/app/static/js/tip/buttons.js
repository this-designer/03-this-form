"use strict";(function(){var t,n,e,o,c,l,s,a,r,u,i,h,d,f,p,b,y,g,m=[].slice,v=function(t,e){function n(){this.constructor=t}for(var a in e)C.call(e,a)&&(t[a]=e[a]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},C={}.hasOwnProperty;if(d=(y=this).document,((o={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs"}).script=d.getElementById(o.scriptId))&&(o.url=o.script.src.replace(/[^\/]*([?#].*)?$/,"")),s=function(){function t(){}var c;return t.flatten=function(t){var l,s;return l=function(t,e){var n,a,r,i,o,c;switch(Object.prototype.toString.call(t)){case"[object Object]":for(i in t)c=t[i],l(c,e?e+"."+i:i);break;case"[object Array]":for(n=r=0,o=t.length;r<o;n=++r)a=t[n],l(a,e+"["+n+"]");break;default:s[e]=t}},s={},l(t,""),s},t.expand=function(t){var e,n,a,r,i,o;for(e in r=[],t){for(o=t[e],a=e.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),i=r,n=0;a.length;)null==i[n]&&(i[n]=a[0]===c(a[0])?{}:[]),i=i[n],n=c(a.shift());i[n]=o}return r[0]},c=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),u=function(){function t(){}return t.stringify=function(t){var e,n,a;for(e in n=[],t)a=t[e],n.push(e+"="+(null!=a?a:""));return n.join("&")},t.parse=function(t){var e,n,a,r,i,o,c,l;for(r={},e=0,a=(o=t.split("&")).length;e<a;e++)""!==(i=o[e])&&(n=(c=i.split("="))[0],l=2<=c.length?m.call(c,1):[],""!==n&&(r[n]=l.join("=")));return r},t}(),r=function(){function t(){}return t.encode=function(t){return"#"+encodeURIComponent(u.stringify(s.flatten(t)))},t.decode=function(t){return null==t&&(t=d.location.hash),s.expand(u.parse(decodeURIComponent(t.replace(/^#/,""))))||{}},t}(),l=function(){function t(t){this.$=t}var l,s;return t.prototype.on=function(){var t,e,n,a,r,i,o;for(n=2<=arguments.length?m.call(arguments,0,r=arguments.length-1):(r=0,[]),a=arguments[r++],t=function(e){return function(t){return a.call(e,t||y.event)}}(this),i=0,o=n.length;i<o;i++)e=n[i],l(this.$,e,t)},t.prototype.once=function(){var i,t,o,c,e,n,a;for(o=2<=arguments.length?m.call(arguments,0,e=arguments.length-1):(e=0,[]),c=arguments[e++],i=function(r){return function(t){var e,n,a;for(n=0,a=o.length;n<a;n++)e=o[n],s(r.$,e,i);return c.call(r,t||y.event)}}(this),n=0,a=o.length;n<a;n++)t=o[n],l(this.$,t,i)},l=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},s=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},t}(),c=function(t){function e(t,e){this.$=t&&1===t.nodeType?t:d.createElement(t),e&&e.call(this,this.$)}var n,a,r,i;return v(e,l),e.prototype.addClass=function(t){a(this.$,t)||n(this.$,t)},e.prototype.removeClass=function(t){a(this.$,t)&&i(this.$,t)},e.prototype.hasClass=function(t){return a(this.$,t)},n=function(t,e){t.className+=" "+e},i=function(t,e){t.className=(" "+t.className+" ").replace(r," ").replace(" "+e+" ","").replace(/^ | $/,"")},a=function(t,e){return 0<=(" "+t.className+" ").replace(r," ").indexOf(" "+e+" ")},r=/[ \t\n\f\r]+/g,e}(),a=function(t){function e(r){e.__super__.constructor.call(this,"iframe",function(t){var e,n,a;for(e in n={allowtransparency:!0,scrolling:"no",frameBorder:0})a=n[e],t.setAttribute(e,a);t.style.cssText="width: 1px; height: 0; border: none",t.src="javascript:0",r&&r.call(this,t)})}var n,o;return v(e,c),e.prototype.html=function(t){var e;try{(e=this.$.contentWindow.document).open().write(t),e.close()}catch(t){}},e.prototype.load=function(t){this.$.src=t},e.prototype.size=function(){var t,e,n,a,r,i;try{return r=(n=this.$.contentWindow.document).documentElement,t=n.body,i=Math.max(r.scrollWidth,t.scrollWidth),a=Math.max(r.scrollHeight,t.scrollHeight),t.getBoundingClientRect&&(t.style.display="inline-block",e=t.getBoundingClientRect(),i=Math.max(i,o(e.width||e.right-e.left)),a=Math.max(a,o(e.height||e.bottom-e.top)),t.style.display=""),{width:i+"px",height:a+"px"}}catch(t){}},e.prototype.resize=function(t){var e,n,a;a=(n=null!=t?t:this.size()||{}).width,e=n.height,a&&(this.$.style.width=a),e&&(this.$.style.height=e)},n=y.devicePixelRatio||1,o=function(t){return 1<n?Math.ceil(Math.round(t*n)/n*2)/2||0:Math.ceil(t)||0},e}(),t=function(){function t(){}return t.parse=function(t){return{href:t.href,text:t.getAttribute("data-text")||t.textContent||t.innerText||"",data:{count:{api:t.getAttribute("data-count-api")||"",href:t.getAttribute("data-count-href")||t.href,aria:{label:t.getAttribute("data-count-aria-label")||""}},style:t.getAttribute("data-style")||"",icon:t.getAttribute("data-icon")||""},aria:{label:t.getAttribute("aria-label")||""}}},t}(),n=function(t){function i(e,t,n){var a,r;i.__super__.constructor.call(this,t),a=function(){var t;a=null,t=r.size(),r.$.parentNode.removeChild(r.$),r.once("load",function(){this.resize(t)}),r.load(o.url+"buttons.html"+e),n&&n.call(r,r.$)},(r=this).once("load",function(){var t;(t=this.$.contentWindow.callback)?new c(t.script,function(t){this.on("load","error",function(){a&&a()}),t.readyState&&this.on("readystatechange",function(){!/i/.test(t.readyState)&&a&&a()})}):a()}),this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<link rel="stylesheet" href="'+o.url+'assets/css/buttons.css">\n<script>document.location.hash = "'+e+'";<\/script>\n</head>\n<body>\n<script src="'+o.script.src+'"><\/script>\n</body>\n</html>')}return v(i,a),i}(),g=function(t){function e(n,a,t){e.__super__.constructor.call(this,"a",function(e){if(r){if((e.href=a)&&!i.test(e.href))try{e.href=new URL(n,a).href}catch(t){r.href=a,e.href=n,new c("div",function(t){t.innerHTML=e.outerHTML,e.href=t.lastChild.href,t=null}),r.href=d.location.href,r.removeAttribute("href")}else e.href=n;i.test(e.href)&&(e.href="#",e.target="_self")}t(e)})}var r,i;return v(e,c),r=d.getElementsByTagName("base")[0],i=/^javascript:/i,e}(),e=function(n){var i,t;n&&n.data&&(d.body.className=n.data.style||"",new g(n.href,null,function(e){e.className="button",n.aria.label&&e.setAttribute("aria-label",n.aria.label),new c("i",function(t){t.className=(n.data.icon||o.icon)+(o.iconClass?" "+o.iconClass:""),t.setAttribute("aria-hidden","true"),e.appendChild(t)}),e.appendChild(d.createTextNode(" ")),new c("span",function(t){n.text&&t.appendChild(d.createTextNode(n.text)),e.appendChild(t)}),d.body.appendChild(e)}),i=n.data.count,t=n.href,i&&i.api&&new g(i.href,t,function(r){r.className="count",new c("b",function(t){r.appendChild(t)}),new c("i",function(t){r.appendChild(t)}),new c("span",function(n){var a,t,e;r.appendChild(n),e=i.api.replace(/^(?!\/)/,"/").split("#")[0],(t=u.parse(e.split("?").slice(1).join("?"))).callback="callback",a=e.split("?")[0]+"?"+u.stringify(t),new c("script",function(t){var e;t.async=!0,t.src=""+o.api+a,y.callback=function(t){var e;y.callback=null,200===t.meta.status&&(e=s.flatten(t.data)[i.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(e)&&(e=(""+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")),n.appendChild(d.createTextNode(e)),i.aria.label&&r.setAttribute("aria-label",i.aria.label.replace("#",e)),d.body.appendChild(r))},y.callback.script=t,this.on("error",function(){y.callback=null}),t.readyState&&this.on("readystatechange",function(){"loaded"===t.readyState&&t.children&&"loading"===t.readyState&&(y.callback=null)}),e=d.getElementsByTagName("head")[0],y.opera?new l(d).on("DOMContentLoaded",function(){e.appendChild(t)}):e.appendChild(t)})})}))},o.script)for(f=function(e){new n(r.encode(t.parse(e)),function(t){d.body.appendChild(t)},function(t){e.parentNode.replaceChild(t,e)})},p=0,b=(h=d.querySelectorAll?d.querySelectorAll("a."+o.anchorClass):function(){var t,e,n,a;for(a=[],t=0,e=(n=d.getElementsByTagName("a")).length;t<e;t++)i=n[t],new c(i).hasClass(o.anchorClass)&&a.push(i);return a}()).length;p<b;p++)f(i=h[p]);else new e(r.decode())}).call(void 0);