(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34036615"],{"21bb":function(t,e,n){},"24aa":function(t,e,n){"use strict";var r=n("526b"),a=n.n(r);a.a},"3a60":function(t,e,n){(function(e,n){t.exports=n()})(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),s=n(0),o=n.n(s);e.a=function(t,e){var s=e.value;if((Array.isArray(s)||"string"==typeof s)&&(s={mask:s,tokens:o.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var i=t.getElementsByTagName("input");if(1!==i.length)throw new Error("v-mask directive requires 1 input, found "+i.length);t=i[0]}t.oninput=function(e){if(e.isTrusted){var o=t.selectionEnd,i=t.value[o-1];for(t.value=n.i(a.a)(t.value,s.mask,!0,s.tokens);o<t.value.length&&t.value.charAt(o-1)!==i;)o++;t===document.activeElement&&(t.setSelectionRange(o,o),setTimeout(function(){t.setSelectionRange(o,o)},0)),t.dispatchEvent(r("input"))}};var u=n.i(a.a)(t.value,s.mask,!0,s.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,o)(t,e,s,o):n.i(r.a)(t,e,s,o)}},function(t,e,n){"use strict";function r(t){t.component(u.a.name,u.a),t.directive("mask",o.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n.n(a),o=n(1),i=n(7),u=n.n(i);n.d(e,"TheMask",function(){return u.a}),n.d(e,"mask",function(){return o.a}),n.d(e,"tokens",function(){return s.a}),n.d(e,"version",function(){return c});var c="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),s=n.n(a),o=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return s.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=n.i(o.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function r(t,e,n){return e=e.sort(function(t,e){return t.length-e.length}),function(r,a){for(var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0;o<e.length;){var i=e[o];o++;var u=e[o];if(!(u&&t(r,u,!0,n).length>i.length))return t(r,i,s,n)}return""}}e.a=r},function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,s=0,o="";a<e.length&&s<t.length;){var i=e[a],u=r[i],c=t[s];u&&!u.escape?(u.pattern.test(c)&&(o+=u.transform?u.transform(c):c,a++),s++):(u&&u.escape&&(a++,i=e[a]),n&&(o+=i),c===i&&s++,a++)}for(var l="";a<e.length&&n;){i=e[a];if(r[i]){l="";break}l+=i,a++}return o+l}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,s=t.default);var i="function"==typeof s?s.options:s;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n),r){var u=i.computed||(i.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:a,exports:s,options:i}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])})},"526b":function(t,e,n){},7435:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-modal"},[n("span",{staticClass:"v-modal-close",on:{click:function(e){return t.$router.go(-1)}}},[n("svg",{attrs:{width:"43",height:"44",viewBox:"0 0 43 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.4649 12.8389C10.172 12.546 10.2512 11.992 10.6417 11.6015C11.0322 11.211 11.5862 11.1318 11.8791 11.4247L32.0317 31.5773C32.3245 31.8701 32.2454 32.4242 31.8549 32.8147C31.4644 33.2052 30.9103 33.2844 30.6174 32.9915L10.4649 12.8389Z",fill:"#FF711A"}}),n("path",{attrs:{d:"M11.879 32.9912C11.5861 33.284 11.0321 33.2049 10.6415 32.8144C10.251 32.4239 10.1719 31.8698 10.4647 31.5769L30.6173 11.4244C30.9102 11.1315 31.4642 11.2107 31.8547 11.6012C32.2453 11.9917 32.3244 12.5457 32.0315 12.8386L11.879 32.9912Z",fill:"#FF711A"}})])]),n("div",{staticClass:"v-modal__body"},[t._t("default")],2)])},a=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var c={name:"VModal",methods:u({},Object(o["b"])(["routerPush"]))},l=c,f=(n("7d26"),n("2877")),p=Object(f["a"])(l,r,a,!1,null,null,null);e["a"]=p.exports},"7a08":function(t,e,n){t.exports=n.p+"img/phone.f88d139f.svg"},"7d26":function(t,e,n){"use strict";var r=n("e6f7"),a=n.n(r);a.a},"8c9a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-modal",{staticClass:"modal-reg"},[n("h3",{staticClass:"modal-reg__title"},[t._v("Заполните данные")]),n("form",{staticClass:"modal-form"},[n("v-modal-input",{staticClass:"modal-reg__input",attrs:{"place-holder":"Имя",autofocus:""}}),n("v-modal-input",{staticClass:"modal-reg__input",attrs:{type:"tel"}})],1),n("p",[t._v("\n    Номер телефона нужен для входа в игру. Обещаем не присылать вам спам и не\n    передавать ваш номер телефона третьим лицам.\n  ")]),n("div",{staticClass:"v-modal-footer modal-reg__footer"},[n("v-button",{class:{disabled:!t.rules.checked},on:{click:t.goNext}},[t._v("Играть")]),n("v-rules-agree",{class:t.rules.class,attrs:{type:"modal"},on:{change:function(e){t.rules.checked=!t.rules.checked}}},[n("span",[t._v("и согласен на\n        "),n("a",{staticClass:"link",attrs:{href:"#!"}},[t._v("обработку личных данных")])])])],1)])},a=[],s=n("7435"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-input-wrapper"},[t._t("default"),"text"===t.type?n("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"v-input",attrs:{placeholder:t.placeHolder,maxlength:"20"}}):"tel"===t.type?n("div",{staticClass:"v-input-tel"},[t._m(0),n("the-mask",{staticClass:"v-input",attrs:{mask:"!+7 (###) ###-##-##",value:"+7 (",type:"tel",placeholder:"+7(  )"}})],1):t._e()],2)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("img",{staticClass:"v-input-img",attrs:{src:n("7a08")}})])}],u=n("3a60"),c={props:{unValid:Boolean,placeHolder:String,autofocus:Boolean,type:{type:String,default:"text"}},components:{TheMask:u["TheMask"]}},l=c,f=(n("c88a"),n("2877")),p=Object(f["a"])(l,o,i,!1,null,null,null),d=p.exports,v=n("abd5"),h=n("6c75"),m={name:"VModalReg",props:["routerPush"],components:{VModal:s["a"],VButton:h["a"],VRulesAgree:v["a"],VModalInput:d},data:function(){return{rules:{checked:!1,class:null}}},methods:{goNext:function(){var t=this;if(!this.rules.checked)return this.rules.class="animate-shake",void setTimeout(function(){t.rules.class=null},800);this.$router.push("code")}}},g=m,k=(n("24aa"),Object(f["a"])(g,r,a,!1,null,null,null));e["default"]=k.exports},c88a:function(t,e,n){"use strict";var r=n("21bb"),a=n.n(r);a.a},e6f7:function(t,e,n){}}]);
//# sourceMappingURL=chunk-34036615.ec89dd24.js.map