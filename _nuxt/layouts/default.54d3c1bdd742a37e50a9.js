webpackJsonp([0],{"+XNP":function(t,e,i){"use strict";var a=i("/Ngs"),s=i("3p6t"),o=!1;var n=function(t){o||i("dN5w")},r=i("VU/8")(a.a,s.a,!1,n,"data-v-7498edb2",null);r.options.__file="components/LayoutHeader.vue",e.a=r.exports},"/Ngs":function(t,e,i){"use strict";var a=i("WXhH");e.a={components:{CircularProgress:a.a},data:function(){return{strokeWidth:4,radius:28}},computed:{progress:function(){return(this.$store.state.index+1)/this.$store.state.length*100},tone:function(){return"white-tone"===this.$store.state.tone?"#000":"#fff"}},methods:{openSideNav:function(){this.$store.commit("openSideNav")}},mounted:function(){console.log(this.$store.state.title)}}},"3p6t":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gnb"},[i("h1",{staticClass:"gnb-title"},[t._v(t._s(this.$store.state.title))]),i("div",{staticClass:"side-nav"},[i("button",{staticClass:"side-nav-button",style:{borderColor:t.tone},attrs:{type:"button",name:"button"},on:{click:function(e){return t.openSideNav()}}},[i("CircularProgress",{staticClass:"circular-progress",attrs:{stroke:t.tone,strokeWidth:t.strokeWidth,radius:t.radius,progress:t.progress}})],1)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},AZII:function(t,e,i){var a=i("HxHD");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("4f85e152",a,!1,{sourceMap:!1})},DLCH:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("LayoutHeader"),e("SideNav"),e("nuxt"),e("div",{staticClass:"loading-panel",style:{display:this.isLoadingPanelDisplay}},[e("h1",{staticClass:"loading-title"},[this._v("loading..")])])],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},G6SA:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".wrap[data-v-8ab2da7e]{position:fixed;overflow:hidden;height:100%;width:100%}.fullpage-slide[data-v-8ab2da7e]{position:relative;overflow:hidden}.l-wrap[data-v-8ab2da7e]{padding:80px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.is-modal .wrap[data-v-8ab2da7e]{position:relative}.is-modal .fullpage-wrapper[data-v-8ab2da7e]{position:absolute}.is-modal .side-content[data-v-8ab2da7e]{position:relative}.heading[data-v-8ab2da7e]{font-size:30px;font-weight:lighter;line-height:1.2}.heading[data-v-8ab2da7e],.paragraph[data-v-8ab2da7e]{position:relative;color:#fff;word-break:keep-all;word-wrap:break-word}.paragraph[data-v-8ab2da7e]{font-size:17px}.sidenav[data-v-8ab2da7e]{position:fixed;top:0;width:100%;height:100%;z-index:100}.sidenav .dimmed[data-v-8ab2da7e]{position:fixed;background:#000;width:100%;height:100%;left:0;right:0}.sidenav .menu-container[data-v-8ab2da7e]{position:absolute;width:80%;height:100%;background:#fff}.sidenav .menu-list[data-v-8ab2da7e]{margin-top:2em;padding-left:2em;padding-right:2em}.sidenav .menu-item[data-v-8ab2da7e]{padding-top:16px;padding-bottom:16px;border-bottom:1px dotted #b7b7b7;font-size:28px}.sidenav .menu-item>a[data-v-8ab2da7e]{display:inline-block;width:100%;text-decoration:none}.sidenav .menu-icon[data-v-8ab2da7e]{color:#de5458;font-family:Roboto;margin-right:12px}.sidenav .menu-name[data-v-8ab2da7e]{display:inline-block;color:#999;font-size:18px}",""])},GNu0:function(t,e,i){"use strict";e.a={props:{radius:Number,stroke:String,strokeWidth:Number,progress:Number},data:function(){var t=this.radius-2*this.strokeWidth,e=2*t*Math.PI;return{normalizedRadius:t,circumference:e,strokeDasharray:e+" "+e}},computed:{strokeDashoffset:function(){return this.progress===1/0?this.circumference:this.circumference-this.circumference*(this.progress/100)}}}},"HU+T":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".wrap{position:fixed;overflow:hidden;height:100%;width:100%}.fullpage-slide{position:relative;overflow:hidden}.l-wrap{padding:80px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.is-modal .wrap{position:relative}.is-modal .fullpage-wrapper{position:absolute}.is-modal .side-content{position:relative}.heading{font-size:30px;font-weight:lighter;line-height:1.2}.heading,.paragraph{position:relative;color:#fff;word-break:keep-all;word-wrap:break-word}.paragraph{font-size:17px}.loading-panel{position:absolute;top:0;left:0;right:0;bottom:0;z-index:100;background:#fff}.loading-title{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center;font-family:Roboto;font-weight:lighter}",""])},HxHD:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"circle{-webkit-transition:stroke-dashoffset .35s,stroke .5s;transition:stroke-dashoffset .35s,stroke .5s;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}",""])},Ma2J:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("j60A"),s=i("DLCH"),o=!1;var n=function(t){o||i("NYuA")},r=i("VU/8")(a.a,s.a,!1,n,null,null);r.options.__file="layouts/default.vue",e.default=r.exports},NYuA:function(t,e,i){var a=i("HU+T");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("9c6f3d5e",a,!1,{sourceMap:!1})},WXhH:function(t,e,i){"use strict";var a=i("GNu0"),s=i("oDld"),o=!1;var n=function(t){o||i("AZII")},r=i("VU/8")(a.a,s.a,!1,n,null,null);r.options.__file="components/CircularProgress.vue",e.a=r.exports},dN5w:function(t,e,i){var a=i("r4o8");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("10beb505",a,!1,{sourceMap:!1})},flgw:function(t,e,i){"use strict";var a=i("sukp"),s=i("il2g"),o=!1;var n=function(t){o||i("qDME")},r=i("VU/8")(a.a,s.a,!1,n,"data-v-8ab2da7e",null);r.options.__file="components/SideNav.vue",e.a=r.exports},il2g:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidenav"},[i("div",{staticClass:"dimmed",on:{click:function(e){return t.clickDimmed()}}}),i("div",{staticClass:"menu-container"},[i("ol",{staticClass:"menu-list"},[i("li",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/ko/precious-piece"}},[i("span",{staticClass:"menu-icon"},[t._v("1.")]),i("div",{staticClass:"menu-name"},[t._v("\n            삶의 소중한 부분들\n          ")])])],1),i("li",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/ko/our-state"}},[i("span",{staticClass:"menu-icon"},[t._v("2.")]),i("div",{staticClass:"menu-name"},[t._v("\n            우리의 상태\n          ")])])],1),i("li",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/ko/good-news"}},[i("span",{staticClass:"menu-icon"},[t._v("3.")]),i("div",{staticClass:"menu-name"},[t._v("\n            예수 그리스도의 복음\n          ")])])],1),i("li",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/ko/what-should-do"}},[i("span",{staticClass:"menu-icon"},[t._v("4.")]),i("div",{staticClass:"menu-name"},[t._v("\n            완전한 삶\n          ")])])],1)])])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},j60A:function(t,e,i){"use strict";var a=i("Xxa5"),s=i.n(a),o=i("exGp"),n=i.n(o),r=i("+XNP"),d=i("flgw"),c=i("Z3k7"),l=i("vdRI");e.a={components:{LayoutHeader:r.a,SideNav:d.a},store:l.default,data:function(){return{windowHeight:0,isPaging:!1,isLoadingPanelDisplay:"block"}},watch:{$route:function(){var t=n()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.wait(50);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),"$store.state.index":function(){var t=n()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),"$store.state.isLoading":function(){this.$store.state.isLoading?this.isLoadingPanelDisplay="block":this.isLoadingPanelDisplay="none"},"$store.state.isModal":function(){this.$store.state.isModal?window.removeEventListener("touchmove",this.preventTouch,{passive:!1}):(window.addEventListener("touchmove",this.preventTouch,{passive:!1}),c.a.setLayoutSize(),c.a.setLayoutPosition(this))}},computed:{position:function(){return this.$store.state.index*this.windowHeight}},methods:{updatePosition:function(t){if(!(Math.abs(t)<1||this.isPaging||this.$store.state.isModal)){var e=document.querySelector(".fullpage-wrapper");t>30?this.$store.commit("increaseIndex"):this.$store.commit("decreaseIndex");var i=-this.$store.state.index*window.innerHeight;e.style.transform="translate3d(0, "+i+"px, 0)"}},preventTouch:function(t){t.preventDefault(),t.stopPropagation()}},mounted:function(){var t=this;c.a.receivedRouter=this.$router,window.addEventListener("wheel",function(e){var i=e.deltaY;t.updatePosition(i)}),window.addEventListener("touchstart",function(e){t.pos=e.changedTouches[0].pageY}),window.addEventListener("touchend",function(e){var i=e.changedTouches[0].pageY,a=t.pos-i;t.updatePosition(a)}),window.addEventListener("touchmove",this.preventTouch,{passive:!1})}}},oDld:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{height:2*t.radius,width:2*t.radius}},[i("circle",{style:{strokeDashoffset:t.strokeDashoffset},attrs:{r:t.normalizedRadius,cx:t.radius,cy:t.radius,stroke:t.stroke,"stroke-width":t.strokeWidth,fill:"transparent","stroke-dasharray":t.strokeDasharray,strokeDashoffset:"0"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},qDME:function(t,e,i){var a=i("G6SA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("7a43b59c",a,!1,{sourceMap:!1})},r4o8:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".wrap[data-v-7498edb2]{position:fixed;overflow:hidden;height:100%;width:100%}.fullpage-slide[data-v-7498edb2]{position:relative;overflow:hidden}.l-wrap[data-v-7498edb2]{padding:80px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.is-modal .wrap[data-v-7498edb2]{position:relative}.is-modal .fullpage-wrapper[data-v-7498edb2]{position:absolute}.is-modal .side-content[data-v-7498edb2]{position:relative}.heading[data-v-7498edb2]{font-size:30px;font-weight:lighter;line-height:1.2}.heading[data-v-7498edb2],.paragraph[data-v-7498edb2]{position:relative;color:#fff;word-break:keep-all;word-wrap:break-word}.paragraph[data-v-7498edb2]{font-size:17px}.gnb[data-v-7498edb2]{position:fixed;top:0;width:100%;height:80px;z-index:10;color:#de5458}.gnb-title[data-v-7498edb2]{margin:0;padding:31px 30px;font-size:16px;font-size:1rem}.side-nav[data-v-7498edb2]{position:fixed;top:10px;right:10px}.side-nav-button[data-v-7498edb2]{padding:0;border:none;border:2px solid;border-radius:50%;background:transparent;line-height:0;cursor:pointer;-webkit-transition:all .5s;transition:all .5s}.side-nav-button[data-v-7498edb2]:active:enabled{-webkit-transform:scale(.97);transform:scale(.97)}.circular-progress[data-v-7498edb2]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""])},sukp:function(t,e,i){"use strict";var a=i("Xxa5"),s=i.n(a),o=i("exGp"),n=i.n(o);i("Z3k7");e.a={watch:{"$store.state.isOpenedSideNav":function(){this.$store.state.isOpenedSideNav?(TweenMax.to(this.sideNav,.5,{display:"block"}),TweenMax.to(this.dimmed,.3,{opacity:.6}),TweenMax.to(this.menuContainer,.3,{x:"25%",opacity:1})):(TweenMax.to(this.sideNav,.5,{display:"none"}),TweenMax.to(this.dimmed,.3,{opacity:0}),TweenMax.to(this.menuContainer,.3,{x:"100%",opacity:0}))},"$store.state.isLoading":function(){var t=n()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.state.isLoading||this.$store.commit("closeSideNav");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},methods:{clickDimmed:function(){this.$store.commit("closeSideNav")}},mounted:function(){this.sideNav=document.querySelector(".sidenav"),this.dimmed=document.querySelector(".dimmed"),this.menuContainer=document.querySelector(".menu-container"),TweenMax.set(this.sideNav,{display:"none"}),TweenMax.set(this.dimmed,{opacity:0}),TweenMax.set(this.menuContainer,{x:"100%",opacity:0})}}}});