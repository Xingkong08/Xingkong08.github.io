(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return u.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"d80554d1"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="static/css/"+({about:"about"}[t]||t)+"."+{about:"5192dfdd"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===r||c===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t);var d=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"215f":function(t,e,n){"use strict";var r=n("fb0b"),o=n.n(r);o.a},"322b":function(t,e,n){"use strict";var r=n("8894"),o=n.n(r);o.a},3966:function(t,e,n){t.exports=n.p+"static/img/cyay.5bdc57e4.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{attrs:{id:"footer"}},[n("el-dropdown",{staticClass:"fb",attrs:{trigger:"click"}},[n("el-button",{staticClass:"btn",attrs:{type:"text",icon:"el-icon-s-home"}},[t._v("主页")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{staticClass:"tip",attrs:{to:"/"}},[t._v("主页")])],1)],1)],1),n("el-dropdown",{staticClass:"fb",attrs:{trigger:"click"}},[n("el-button",{staticClass:"btn",attrs:{type:"text",icon:"el-icon-film"}},[t._v("视频")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{staticClass:"tip",attrs:{to:"/Video"}},[t._v("视频列表")])],1)],1)],1),n("el-dropdown",{staticClass:"fb",attrs:{trigger:"click"}},[n("el-button",{staticClass:"btn",attrs:{type:"text",icon:"el-icon-reading"}},[t._v("阅读")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{staticClass:"tip",attrs:{to:"/Reader"}},[t._v("最新增加")])],1),n("el-dropdown-item",[n("router-link",{staticClass:"tip",attrs:{to:"/Book"}},[t._v("其他阅读")])],1),n("el-dropdown-item",[n("router-link",{staticClass:"tip",attrs:{to:"/Way"}},[t._v("南部经典")])],1)],1)],1),n("el-dropdown",{staticClass:"fb",attrs:{trigger:"click"}},[n("el-button",{staticClass:"btn",attrs:{type:"text",icon:"el-icon-document"}},[t._v("需知")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticClass:"tip"},[n("router-link",{staticClass:"tip",attrs:{to:"/Notice"}},[t._v("布告")])],1)],1)],1)],1)],1)},a=[],i=(n("322b"),n("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,"0d89b024",null),l=u.exports,c=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cen"},[r("div",{staticStyle:{"margin-top":"10%","text-align":"center"}},[r("img",{staticStyle:{width:"400px"},attrs:{alt:"莲",src:n("3966")}})])])}],f={name:"Main",data:function(){return{}},methods:{}},m=f,b=(n("215f"),Object(i["a"])(m,d,p,!1,null,"496a1966",null)),h=b.exports;r["default"].use(c["a"]);var v=[{path:"/",name:"Home",component:h},{path:"/Video",name:"Video",component:function(){return n.e("about").then(n.bind(null,"81a8"))}},{path:"/Reader",name:"Reader",component:function(){return n.e("about").then(n.bind(null,"968f"))}},{path:"/Book",name:"FrameReader",component:function(){return n.e("about").then(n.bind(null,"991a"))}},{path:"/Way",name:"Way",component:function(){return n.e("about").then(n.bind(null,"980a"))}},{path:"/Notice",name:"Notice",component:function(){return n.e("about").then(n.bind(null,"c9d4"))}}],g=new c["a"]({routes:v}),w=g,y=n("5c96"),_=n.n(y),C=(n("f843"),n("2f62"));r["default"].use(C["a"]);var k=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=n("82ae"),j=n.n(x);r["default"].prototype.$http=j.a,r["default"].use(_.a),r["default"].config.productionTip=!1,new r["default"]({router:w,store:k,render:function(t){return t(l)}}).$mount("#app")},8894:function(t,e,n){},f843:function(t,e,n){},fb0b:function(t,e,n){}});
//# sourceMappingURL=app.a8f4386a.js.map