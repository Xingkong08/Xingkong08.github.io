(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"165a":function(t,e,o){},"2b03":function(t,e,o){"use strict";var s=o("165a"),n=o.n(s);n.a},3552:function(t,e,o){},"7ba2":function(t,e,o){t.exports=o.p+"static/img/bkg.2dad5319.jpg"},"8a29":function(t,e,o){"use strict";var s=o("3552"),n=o.n(s);n.a},"8f2f":function(t,e,o){"use strict";var s=o("ebbe"),n=o.n(s);n.a},"980a":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header"},[o("el-dropdown",{staticClass:"fb",attrs:{trigger:"click"},on:{command:t.getBook}},[o("el-button",{staticClass:"btn",attrs:{type:"text",icon:"el-icon-notebook-2"}},[t._v("选择书籍")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.books,(function(e,s){return o("el-dropdown-item",{key:s,staticClass:"tip",attrs:{command:e.url}},[t._v(t._s(e.name)+" ")])})),1)],1),o("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.tohome}},[t._v("回到目录")]),o("el-button",{staticClass:"icon",attrs:{type:"text",icon:"el-icon-zoom-in"},on:{click:t.zoomIn}}),o("el-button",{staticClass:"icon",attrs:{type:"text",icon:"el-icon-zoom-out"},on:{click:t.zoomOut}})],1),o("iframe",{attrs:{id:"reader",src:t.url,frameborder:"0"}})])},n=[],l=(o("d3b7"),{props:{bookUrl:String,words:{type:Array}},data:function(){return{font:{size:1},books:[{name:"N0004 长部经典",url:"data/N0004 长部经典/toc.xhtml"},{name:"N0005 中部经典",url:"data/N0005 中部经典/toc.xhtml"},{name:"N0006 相应部经典",url:"data/N0006 相应部经典/toc.xhtml"},{name:"N0007 增支部经典",url:"data/N0007 增支部经典/toc.xhtml"},{name:"N0008 小诵经",url:"data/N0008 小诵经/toc.xhtml"},{name:"N0009 法句经",url:"data/N0009 法句经/toc.xhtml"},{name:"N0010 自说经",url:"data/N0010 自说经/toc.xhtml"},{name:"N0011 如是语经",url:"data/N0011 如是语经/toc.xhtml"},{name:"N0012 经集",url:"data/N0012 经集/toc.xhtml"},{name:"N0013 天宫事经",url:"data/N0013 天宫事经/toc.xhtml"},{name:"N0014 饿鬼事经",url:"data/N0014 饿鬼事经/toc.xhtml"},{name:"N0015 长老偈经",url:"data/N0015 长老偈经/toc.xhtml"},{name:"N0016 长老尼偈经",url:"data/N0016 长老尼偈经/toc.xhtml"},{name:"N0017 譬喻经",url:"data/N0017 譬喻经/toc.xhtml"},{name:"N0018 本生经",url:"data/N0018 本生经/toc.xhtml"}],url:"",urltemp:"",drawer:!1}},created:function(){this.url="data/N0004 长部经典/toc.xhtml",this.urltemp="data/N0004 长部经典/toc.xhtml"},methods:{tohome:function(){this.font.size=1.1,this.getBook(this.urltemp)},getBook:function(t){return this.urltemp=t,this.url=this.urltemp+"?time="+(new Date).getTime(),document.getElementById("reader").contentWindow.location.reload(!0),Promise.resolve(!0)},zoomOut:function(){console.log("字体缩小");var t=document.getElementById("reader").contentWindow.document,e=this.ScollPostion(t),o=e.top/e.height,s=t.body;this.font.size-=.1,s.style.fontSize=this.font.size+"em",e=this.ScollPostion(t),t.documentElement.scrollTop=parseInt(o*e.height*.99)},zoomIn:function(){console.log("字体放大");var t=document.getElementById("reader").contentWindow.document,e=this.ScollPostion(t),o=e.top/e.height,s=t.body;this.font.size+=.1,s.style.fontSize=this.font.size+"em",e=this.ScollPostion(t),t.documentElement.scrollTop=parseInt(o*e.height*.995)},resetFront:function(){},ScollPostion:function(t){var e,o,s,n;return t.documentElement&&t.documentElement.scrollTop?(e=t.documentElement.scrollTop,o=t.documentElement.scrollLeft,s=t.documentElement.scrollWidth,n=t.documentElement.scrollHeight):t.body&&(e=t.body.scrollTop,o=t.body.scrollLeft,s=t.body.scrollWidth,n=t.body.scrollHeight),{top:e,left:o,width:s,height:n}}}}),a=l,m=(o("2b03"),o("2877")),i=Object(m["a"])(a,s,n,!1,null,"a0ea6e94",null);e["default"]=i.exports},bb51:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[t._m(0),o("div",{staticClass:"front"},[o("p",{staticStyle:{color:"dodgerblue"}},[t._v("点击标题展开视频列表")]),o("div",{staticClass:"title",on:{click:function(e){t.dgj=!t.dgj}}},[t._v("《佛说稻芉经》")]),o("a",{directives:[{name:"show",rawName:"v-show",value:t.dgj,expression:"dgj"}],attrs:{href:"https://mp.weixin.qq.com/s/8OXhYAlahCdNoVE0-xLSGg"}},[t._v("佛说稻芉经(带字幕)")]),t._l(t.dgjList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.dgj,expression:"dgj"}],key:e.key,attrs:{href:""+e.key}},[t._v(t._s(e.name))])})),o("div",{staticClass:"title",on:{click:function(e){t.amtj=!t.amtj}}},[t._v("《阿弥陀经》要义")]),t._l(t.amtjList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.amtj,expression:"amtj"}],key:e.key,attrs:{href:""+e.key}},[t._v(t._s(e.name))])})),o("div",{staticClass:"title",on:{click:function(e){t.wlsj=!t.wlsj}}},[t._v("《无量寿经》要义")]),t._l(t.wlsjList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.wlsj,expression:"wlsj"}],key:e.key,attrs:{href:""+e.key}},[t._v(t._s(e.name))])})),o("div",{staticClass:"title",on:{click:function(e){t.ftzg=!t.ftzg}}},[t._v("《佛陀》(国语中字)")]),t._l(t.ftzgList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.ftzg,expression:"ftzg"}],key:e.key,attrs:{href:""+e.key}},[t._v(t._s(e.name))])})),o("a",{directives:[{name:"show",rawName:"v-show",value:t.ftzg,expression:"ftzg"}],attrs:{href:"https://pan.baidu.com/s/13kl0iSot6nSenWzQ96dxhw"}},[t._v("佛陀_原音中字下载_提取码：6h3h")]),o("div",{staticClass:"title",on:{click:function(e){t.wcj=!t.wcj}}},[t._v("《无常经》(音频)")]),t._l(t.wcjList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.wcj,expression:"wcj"}],key:e.key,attrs:{href:"http://dahangfashi.zbyt.net/mp3/02经论集/15无常经/无常经"+e.key+".mp3"}},[t._v("无常经"+t._s(e.key))])})),o("div",{staticClass:"title",on:{click:function(e){t.xzzl=!t.xzzl}}},[t._v("《玄奘之路》")]),t._l(t.xzzlList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.xzzl,expression:"xzzl"}],key:e.url,attrs:{href:""+e.url}},[t._v(t._s(e.name))])})),o("div",{staticClass:"title",on:{click:function(e){t.wym=!t.wym}}},[t._v("《五百年来王阳明》")]),o("a",{directives:[{name:"show",rawName:"v-show",value:t.wym,expression:"wym"}],attrs:{href:"https://www.bilibili.com/bangumi/play/ep308318"}},[t._v("五百年来王阳明")]),o("div",{staticClass:"title",on:{click:function(e){t.lfsx=!t.lfsx}}},[t._v("《了凡四训讲解》")]),t._l(t.lfsxList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.lfsx,expression:"lfsx"}],key:e.url,attrs:{href:""+e.url}},[t._v(t._s(e.name))])})),o("div",{staticClass:"title",on:{click:function(e){t.lfmv=!t.lfmv}}},[t._v("《了凡四训电视剧》")]),t._l(t.lfmvList,(function(e){return o("a",{directives:[{name:"show",rawName:"v-show",value:t.lfmv,expression:"lfmv"}],key:e.url,attrs:{href:""+e.url}},[t._v(t._s(e.name))])})),o("div",{staticClass:"title",on:{click:function(e){t.dh=!t.dh}}},[t._v("动画")]),o("a",{directives:[{name:"show",rawName:"v-show",value:t.dh,expression:"dh"}],attrs:{href:"https://m.v.qq.com/play.html?vid=v08279huxba&ptag=v_qq_com%23v.play.adaptor%233&from=singlemessage&isappinstalled=0"}},[t._v("释迦牟尼佛的故事一")]),o("a",{directives:[{name:"show",rawName:"v-show",value:t.dh,expression:"dh"}],attrs:{href:"https://m.v.qq.com/play.html?vid=d0852bv0yva&ptag=v_qq_com%23v.play.adaptor%233&from=singlemessage&isappinstalled=0"}},[t._v("释迦牟尼佛的故事二")]),o("a",{directives:[{name:"show",rawName:"v-show",value:t.dh,expression:"dh"}],attrs:{href:"https://m.v.qq.com/play.html?vid=t0783wz53wo&ptag=v_qq_com%23v.play.adaptor%233&from=singlemessage&isappinstalled=0"}},[t._v("金刚经的故事")]),o("div",{staticClass:"footer"})],2)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background"},[s("img",{attrs:{src:o("7ba2")}})])}],l={name:"Home",components:{},data:function(){var t=function(t){for(var e=[],o=1;o<=26;o++){var s="";s=o<10?"0"+o:""+o,e.push({key:s,name:"无常经 ".concat(s)})}return e};return{wym:!1,dh:!1,dgj:!1,dgjList:[],amtj:!1,amtjList:[],wlsj:!1,wlsjList:[],ftzg:!1,ftzgList:["MTUwOTU3MTM1","MTUwOTU3MzM3","MTUwOTU3NDg0","MTUwOTU3NzAz","MTUwOTU3ODkw","MTUwOTU4MDA4","MTUwOTU4MDQ3","MTUwOTU4MTI5","MTUwOTU4MTc3","MTUwOTU4MTc5","MTUwOTU4NDg4","MTUwOTU4NDky","MTUwOTU4NTA5","MTUwOTU4Njgx","MTUwOTU4NzI2","MTUwOTU5Mzg4","MTUwOTU5NTQy","MTUwOTU5NTQ0","MTUwOTc2NDgx","MTUwOTc2NTE4","MTUwOTc2NTIz","MTUwOTc2NTY4","MTUwOTc2NTg3","MTUwOTc2NzQ0","MTUxMDM5MzA3","MTUwOTc2ODM0","MTUwOTc2ODY2"],xzzl:!1,xzzlList:[{url:"https://www.mgtv.com/b/9329/4581703.html",name:"《玄奘之路》01"},{url:"https://www.mgtv.com/b/9329/4581704.html",name:"《玄奘之路》02"},{url:"https://www.mgtv.com/b/9329/4581705.html",name:"《玄奘之路》03"},{url:"https://www.mgtv.com/b/9329/4581706.html",name:"《玄奘之路》04"},{url:"https://www.mgtv.com/b/9329/4581707.html",name:"《玄奘之路》05"},{url:"https://www.mgtv.com/b/9329/4581725.html",name:"《玄奘之路》06"},{url:"https://www.mgtv.com/b/9329/4581726.html",name:"《玄奘之路》07"},{url:"https://www.mgtv.com/b/9329/4581730.html",name:"《玄奘之路》08"},{url:"https://www.mgtv.com/b/9329/4581743.html",name:"《玄奘之路》09"},{url:"https://www.mgtv.com/b/9329/4581744.html",name:"《玄奘之路》10"},{url:"https://www.mgtv.com/b/9329/4581745.html",name:"《玄奘之路》11"},{url:"https://www.mgtv.com/b/9329/4581746.html",name:"《玄奘之路》12"}],lfsx:!1,lfsxList:[{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0Mjk2NDU0LnNodG1s.html",name:"了凡四训_讲解01"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0Mjk2NDUzLnNodG1s.html",name:"了凡四训_讲解02"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0Mjk2NDUyLnNodG1s.html",name:"了凡四训_讲解03"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0Mjk4NTg5LnNodG1s.html",name:"了凡四训_讲解04"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0Mjk4OTI2LnNodG1s.html",name:"了凡四训_讲解05"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzAzNDU3LnNodG1s.html",name:"了凡四训_讲解06"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzAzNDU2LnNodG1s.html",name:"了凡四训_讲解07"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzAzNDU4LnNodG1s.html",name:"了凡四训_讲解08"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzI4OTI4LnNodG1s.html",name:"了凡四训_讲解09"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzA1NDA4LnNodG1s.html",name:"了凡四训_讲解10"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzE3NDY0LnNodG1s.html",name:"了凡四训_讲解11"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzA4MTIyLnNodG1s.html",name:"了凡四训_讲解12"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzA4MjMzLnNodG1s.html",name:"了凡四训_讲解13"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzA4MjQ2LnNodG1s.html",name:"了凡四训_讲解14"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzExNzEyLnNodG1s.html",name:"了凡四训_讲解15"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzE3NDY1LnNodG1s.html",name:"了凡四训_讲解16"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzIxMzczLnNodG1s.html",name:"了凡四训_讲解17"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzIzMjM4LnNodG1s.html",name:"了凡四训_讲解18"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzI0OTI4LnNodG1s.html",name:"了凡四训_讲解19"},{url:"https://tv.sohu.com/v/dXMvMTQ1MzU2MzAyLzU0MzE3NDY2LnNodG1s.html",name:"了凡四训_讲解20"},{url:"https://www.iqiyi.com/w_19rtxnw859.html",name:"了凡四训_电影"}],lfmv:!1,lfmvList:[{url:"https://v.youku.com/v_show/id_XMjI5ODMyNDA=.html",name:"了凡四训电视剧01"},{url:"https://v.youku.com/v_show/id_XMjI5ODI4MjA=.html",name:"了凡四训电视剧02"},{url:"https://v.youku.com/v_show/id_XMjI5ODc1NjA=.html",name:"了凡四训电视剧03"},{url:"https://v.youku.com/v_show/id_XMjI5ODc2MjA=.html",name:"了凡四训电视剧04"},{url:"https://v.youku.com/v_show/id_XMjI4MzI2MjQ=.html",name:"了凡四训电视剧05"},{url:"https://v.youku.com/v_show/id_XMjI5Mjg1NjQ=.html",name:"了凡四训电视剧06"},{url:"https://v.youku.com/v_show/id_XMjI5MzE5MDg=.html",name:"了凡四训电视剧07"},{url:"https://v.youku.com/v_show/id_XMjI5MzM5NDg=.html",name:"了凡四训电视剧08"},{url:"https://v.youku.com/v_show/id_XMjI5MzI3MzY=.html",name:"了凡四训电视剧09"},{url:"https://v.youku.com/v_show/id_XMjI5MzQ3NzY=.html",name:"了凡四训电视剧10"},{url:"https://v.youku.com/v_show/id_XMjI5Mzg3NDA=.html",name:"了凡四训电视剧11"},{url:"https://v.youku.com/v_show/id_XMjI5Mzk5ODg=.html",name:"了凡四训电视剧12"},{url:"https://v.youku.com/v_show/id_XMjI5Mzk4MzI=.html",name:"了凡四训电视剧13"},{url:"https://v.youku.com/v_show/id_XMjI5NDIzMDg=.html",name:"了凡四训电视剧14"},{url:"https://v.youku.com/v_show/id_XMjI5NDI3NDA=.html",name:"了凡四训电视剧15"},{url:"https://v.youku.com/v_show/id_XMjI5NzIzNjg=.html",name:"了凡四训电视剧16"},{url:"https://v.youku.com/v_show/id_XMTEwMjU0NjE2.html",name:"了凡四训电视剧17"},{url:"https://v.youku.com/v_show/id_XMTkyMDg2OTc2.html",name:"了凡四训电视剧18"},{url:"https://v.youku.com/v_show/id_XMTEwMjU1MjEy.html",name:"了凡四训电视剧19"},{url:"https://v.youku.com/v_show/id_XMTkyMDI4MDM2.html",name:"了凡四训电视剧20"},{url:"https://v.youku.com/v_show/id_XMTkyMDE4Njcy.html",name:"了凡四训电视剧21"},{url:"https://v.youku.com/v_show/id_XMjI5Nzc2ODA=.html",name:"了凡四训电视剧22"},{url:"https://v.youku.com/v_show/id_XMTkxOTQxMjcy.html",name:"了凡四训电视剧23"}],wcj:!1,wcjList:t()}},methods:{getFtzgList:function(){for(var t=[],e=0;e<this.ftzgList.length;e++){var o=2*e+1+"-"+(2*e+2),s={key:"https://www.56.com/w11/play_album-aid-14492315_vid-"+this.ftzgList[e]+".html",name:"《佛陀》第"+o+"集"};t.push(s)}this.ftzgList=t},getVedioList:function(t,e,o,s,n){for(var l=[],a=t;a<=e;a++){var m=s+a+n,i=a-t+1;i<10&&(i="0"+i);var r=o+i;l.push({key:m,name:r})}return l},initList:function(){this.wlsjList=this.getVedioList(4790,4809,"《无量寿经》要义","http://www.dahangfashi.com/newsshow.asp?classid=7&id=310&videoid="),this.amtjList=this.getVedioList(4740,4747,"《阿弥陀经》要义","http://www.dahangfashi.com/newsshow.asp?classid=7&id=302&videoid="),this.dgjList=this.getVedioList(4074,4078,"佛说稻芉经","http://www.dahangfashi.com/newsshow.asp?classid=6&id=265&videoid=")}},created:function(){this.getFtzgList(),this.initList()}},a=l,m=(o("8f2f"),o("2877")),i=Object(m["a"])(a,s,n,!1,null,"78134cf3",null);e["default"]=i.exports},c9d4:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"xuzhi"},[o("h2",{staticStyle:{"text-align":"center"}},[t._v("网站声明")]),o("p",[t._v("本站仅方便视频链接跳转和文档阅读使用。部分摘引的信息和资料，可能转载自其它网站，它们的版权属原作者或出版人所有。 不代表本站故意侵犯原作者或出版人的版权和利益。")]),o("p",[t._v("如果作者本人或版权方不想让您的作品出现在本站，请联系我们删除 (联系方式：3327367253@qq.com)。为此给您带来的不便，敬请谅解！")])])])}],l={name:"Notice"},a=l,m=(o("8a29"),o("2877")),i=Object(m["a"])(a,s,n,!1,null,"1f4dd696",null);e["default"]=i.exports},dd2a:function(t,e,o){"use strict";var s=o("e5d1"),n=o.n(s);n.a},e5d1:function(t,e,o){},ebbe:function(t,e,o){},f820:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header"},[o("el-dropdown",{staticClass:"fb",attrs:{trigger:"click"},on:{command:t.getBook}},[o("el-button",{staticClass:"btn",attrs:{type:"text",icon:"el-icon-notebook-2"}},[t._v("选择书籍")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.books,(function(e,s){return o("el-dropdown-item",{key:s,staticClass:"tip",attrs:{command:e.url}},[t._v(t._s(e.name)+" ")])})),1)],1),o("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.tohome}},[t._v("回到目录")]),o("el-button",{staticClass:"icon",attrs:{type:"text",icon:"el-icon-zoom-in"},on:{click:t.zoomIn}}),o("el-button",{staticClass:"icon",attrs:{type:"text",icon:"el-icon-zoom-out"},on:{click:t.zoomOut}})],1),o("iframe",{attrs:{id:"reader",src:t.url,frameborder:"0"}})])},n=[],l=(o("d3b7"),{props:{bookUrl:String,words:{type:Array}},data:function(){return{font:{size:1},books:[{name:"《佛陀传》",url:"data/佛陀传/Text/text00002.html"},{name:"《中阿含经》",url:"data/中阿含经/toc.xhtml"},{name:"《古文观止》",url:"data/古文观止/text/part0000.html"},{name:"《定慧之路》",url:"data/定慧之路/Text/TOC.xhtml"},{name:"《中阿含—白话》",url:"data/中阿含_白话/zahj.html"},{name:"《长阿含—白话》",url:"data/长阿含经_白话/cahj.html"},{name:"《杂阿含—白话》",url:"data/杂阿含_白话/zahj.html"},{name:"《增一阿含—白话》",url:"data/增一阿含_白话/zyahj.html"},{name:"《佛遗教经》",url:"data/经/Text/佛遗教经.xhtml"},{name:"《八大人觉经》",url:"data/经/Text/八大人觉经.xhtml"},{name:"《大念处经》",url:"data/经/Text/大念处经.xhtml"},{name:"《佛说稻芉经》",url:"data/经/Text/佛说稻芉经.xhtml"},{name:"《印光法师文钞》",url:"data/印光法师文钞/Text/text00000.html"},{name:"《人体使用手册》",url:"data/人体使用手册/Text/part0000.html"},{name:"《十法界概述》",url:"data/十法界概述/Text/TOC.xhtml"}],url:"",urltemp:"",drawer:!1}},created:function(){this.url="data/佛陀传/Text/text00002.html",this.urltemp="data/佛陀传/Text/text00002.html"},updated:function(){console.log("我刷新了")},methods:{tohome:function(){this.font.size=1.1,this.getBook(this.urltemp).then((function(t){t&&setTimeout((function(){}),0)}))},getBook:function(t){return this.urltemp=t,this.url=this.urltemp+"?time="+(new Date).getTime(),document.getElementById("reader").contentWindow.location.reload(!0),Promise.resolve(!0)},zoomOut:function(){console.log("字体缩小");var t=document.getElementById("reader").contentWindow.document,e=this.ScollPostion(t),o=e.top/e.height;this.font.size-=.1,t.body.style.fontSize=this.font.size+"em",e=this.ScollPostion(t),t.documentElement.scrollTop=parseInt(o*e.height*.99)},zoomIn:function(){var t=document.getElementById("reader").contentWindow.document,e=this.ScollPostion(t),o=e.top/e.height;this.font.size+=.1,t.body.style.fontSize=this.font.size+"em",e=this.ScollPostion(t),t.documentElement.scrollTop=parseInt(o*e.height*.995)},resetFront:function(){},ScollPostion:function(t){var e,o,s,n;return t.documentElement&&t.documentElement.scrollTop?(e=t.documentElement.scrollTop,o=t.documentElement.scrollLeft,s=t.documentElement.scrollWidth,n=t.documentElement.scrollHeight):t.body&&(e=t.body.scrollTop,o=t.body.scrollLeft,s=t.body.scrollWidth,n=t.body.scrollHeight),{top:e,left:o,width:s,height:n}}}}),a=l,m=(o("dd2a"),o("2877")),i=Object(m["a"])(a,s,n,!1,null,"58094ea6",null);e["default"]=i.exports}}]);
//# sourceMappingURL=about.82b303e6.js.map