(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c2f1f4b","chunk-682152de"],{"24a3":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"screen-5"},[a("div",{staticClass:"roulette-wrapper"},[a("v-roulette",{style:t.animate?t.rotate:""}),t._m(0)],1),a("div",{staticClass:"v-control"},[a("div",{staticClass:"v-control__sound",on:{click:function(n){t.soundOn=!t.soundOn}}},[t.soundOn?a("img",{attrs:{src:e("f601")}}):t._e(),t.soundOn?t._e():a("img",{attrs:{src:e("65eb")}})]),a("div",{staticClass:"v-control__window",on:{click:t.openFullscreen}},[a("img",{attrs:{src:e("b3eb")}})])]),t._t("default"),a("v-balls")],2)},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"roulette-pointer"},[a("img",{attrs:{src:e("48fc"),alt:""}})])}],o=e("785e"),i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"v-balls"},[a("div",{staticClass:"ball ball-top"},[a("img",{attrs:{src:e("928a")}})]),a("div",{staticClass:"ball ball-bottom"},[a("img",{attrs:{src:e("dd8d")}})])])}],r=(e("c886"),e("2877")),l={},u=Object(r["a"])(l,i,c,!1,null,null,null),d=u.exports,f={props:{rotate:Object,animate:Boolean},components:{VRoulette:o["a"],VBalls:d},data:function(){return{soundOn:!0}},methods:{openFullscreen:function(){}}},m=f,p=(e("ce04"),Object(r["a"])(m,a,s,!1,null,null,null));n["default"]=p.exports},"2e2e":function(t,n,e){},"3ad9":function(t,n,e){"use strict";var a=e("aaf8"),s=e.n(a);s.a},"48fc":function(t,n,e){t.exports=e.p+"img/pointer.4b367b14.svg"},"515a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-screen-5",{staticClass:"v-screen-game",attrs:{rotate:t.rotate,animate:t.animate}},[a("div",{staticClass:"content"},[a("div",{staticClass:"logo-mini"},[a("img",{attrs:{src:e("5276"),alt:""}})]),"scan"===t.type?a("div",{staticClass:"container"},[a("v-button",{attrs:{"is-disabled":t.disabled&&t.animate},on:{click:t.rotateRoulette}},[t._v("Крутить колесо!")]),a("span",{staticClass:"link",on:{click:function(n){t.type="download"}}},[t._v("Отсканировать чек")])],1):t._e(),"download"===t.type?a("div",{staticClass:"container down-load"},[a("v-button",[t._v("Загрузить фото чека")]),a("v-button",[t._v("Сделать фотографию")]),a("v-button",{on:{click:function(n){return t.$router.push({path:"/scan/qrcode"})}}},[t._v("Ввести данные чека вручную")])],1):t._e()])])},s=[],o=e("24a3"),i=e("6c75"),c={components:{VButton:i["a"],VScreen5:o["default"]},data:function(){return{animate:!1,disabled:!1,rotate:{},type:"scan"}},computed:{deg:function(){var t=.36*this.delay;return t%45===0&&(t+=5),Math.floor(t)},delay:function(){return Math.floor(2e3+1001*Math.random())}},methods:{rotateRoulette:function(){this.animate||(this.disabled=!0,this.animate=!0,document.documentElement.clientWidth<=768?this.rotate={transition:"transform ".concat(this.delay,"ms"),transform:"translate(-50%, -72%) rotate(".concat(this.deg,"deg)")}:this.rotate={transition:"transform ".concat(this.delay,"ms"),transform:"translateY(-50%) rotate(".concat(this.deg,"deg)")})}}},r=c,l=(e("3ad9"),e("2877")),u=Object(l["a"])(r,a,s,!1,null,null,null);n["default"]=u.exports},5276:function(t,n,e){t.exports=e.p+"img/logo-mini.4a8dd3de.png"},"65eb":function(t,n,e){t.exports=e.p+"img/sound_off.01312f8b.svg"},"8e43":function(t,n,e){},"928a":function(t,n,e){t.exports=e.p+"img/ball-top.65bd3007.png"},aaf8:function(t,n,e){},b3eb:function(t,n,e){t.exports=e.p+"img/window.fdc43992.svg"},c886:function(t,n,e){"use strict";var a=e("2e2e"),s=e.n(a);s.a},ce04:function(t,n,e){"use strict";var a=e("8e43"),s=e.n(a);s.a},dd8d:function(t,n,e){t.exports=e.p+"img/ball-bottom.74a549cf.png"},f601:function(t,n,e){t.exports=e.p+"img/sound_on.ba45e348.svg"}}]);
//# sourceMappingURL=chunk-5c2f1f4b.0ffd49bd.js.map