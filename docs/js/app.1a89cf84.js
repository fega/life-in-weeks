(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e02e7bee"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}a[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/life-in-weeks/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0669":function(e,t,n){"use strict";n("640b")},"1cf3":function(e,t,n){},"1e71":function(e,t,n){"use strict";n("1cf3")},"3e61":function(e,t,n){"use strict";n("9c69")},"4a66":function(e,t,n){},"4ff7":function(e,t,n){"use strict";n("85c3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["f"])("div",{id:"nav"},null,-1);function c(e,t){var n=Object(r["w"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[a,Object(r["f"])(n)],64)}n("3e61");const o={};o.render=c;var i=o,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s=Object(r["E"])("data-v-2339a80b");Object(r["r"])("data-v-2339a80b");var b={class:"home"},l={class:"home-headers"},d=Object(r["f"])("h1",null,"Your Life in weeks",-1),f={class:"date-container"},O=Object(r["f"])("label",{class:"date-label",for:"date"}," Your BirthDate: ",-1),j=Object(r["f"])("button",{class:"get-calendar-button"},"Get Calendar",-1),p={key:0},v={key:0,class:"years"};Object(r["p"])();var m,h=s((function(e,t,n,a,c,o){var i=Object(r["w"])("Legend"),u=Object(r["w"])("Header"),s=Object(r["w"])("Year");return Object(r["o"])(),Object(r["d"])("div",b,[Object(r["f"])("div",l,[d,Object(r["f"])("div",f,[O,Object(r["f"])("span",null,[Object(r["D"])(Object(r["f"])("input",{type:"date",name:"date",id:"date",min:c.minDate,max:c.maxDate,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.date=e}),onFocus:t[2]||(t[2]=function(e){return c.show=!1}),onBlur:t[3]||(t[3]=function(e){return c.show=!0})},null,40,["min","max"]),[[r["A"],c.date]]),j])]),c.show?(Object(r["o"])(),Object(r["d"])("h2",p,"Legend")):Object(r["e"])("",!0)]),c.show?(Object(r["o"])(),Object(r["d"])("div",v,[Object(r["f"])(i),Object(r["f"])(u),(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(c.years,(function(e,t){return Object(r["o"])(),Object(r["d"])(s,{key:t,year:e,birthDate:o.birthDate},null,8,["year","birthDate"])})),128))])):Object(r["e"])("",!0)])})),w=n("ade3"),k=(n("7db0"),n("d81d"),n("cb29"),n("b1d0")),y=n("d148"),g=125,D=52,C="1994-02-09",S=new Date(C),_=new Date(0),A=new Date("2100-02-09"),L=Object(k["a"])(new Date,g).toISOString,P=(new Date).toISOString,E=["#00d0ff","#49e9a6","#e8ff00","#ff9800","red","#673ab7"],M=(m={0:{name:"Birth"}},Object(w["a"])(m,3837,{name:"Average Global Life Span"}),Object(w["a"])(m,2861,{name:"Death of Hitler"}),Object(w["a"])(m,572,{name:"First Decade"}),Object(w["a"])(m,1092,{name:"Legal Age to Drink in USA"}),Object(w["a"])(m,936,{name:"You're and adult!"}),Object(w["a"])(m,Math.round(53.1*52),{name:"Average Life Span in Central African Republic"}),Object(w["a"])(m,Math.round(84.3*52),{name:"Average Life Span in Japan"}),Object(w["a"])(m,Math.round(79.3*52),{name:"Average Life Span in Colombia"}),Object(w["a"])(m,Math.round(5252),{name:"A Century"}),Object(w["a"])(m,Object(y["a"])(new Date("1687-07-05"),new Date("1643-01-04")),{name:"Newton publish about gravity"}),Object(w["a"])(m,Object(y["a"])(new Date("2014-08-10"),new Date("1997-07-12")),{name:"Youngest Nobel Peace Prize winner"}),Object(w["a"])(m,Math.round(6344+164/365*52),{name:"Oldest verified woman ever"}),Object(w["a"])(m,Math.round(6032+54/365*52),{name:"Oldest verified man ever"}),Object(w["a"])(m,Object(y["a"])(new Date("1905-09-26"),new Date("1879-03-14")),{name:"Einstein publish about relativity"}),m),W=[{name:"Early Years",from:0,color:E[0]},{name:"Elementary School (USA)",from:5,color:E[1]},{name:"Middle School (USA)",from:11.5,color:E[2]},{name:"High School (USA)",from:14.5,color:E[3]},{name:"College (USA)",from:18.5,color:E[4]},{name:"Career",from:21.5,color:E[5]},{name:"Retirement",from:63,color:"blue"}].reverse(),Y=function(e,t,n){return{week:n,year:t,tooltip:M[52*t+n],phase:e.find((function(e){return e.from<=t+n/D}))}},x=function(e,t){return new Array(D).fill(!1).map((function(n,r){return Y(e,t,r)}))},I=function(e){return function(t,n){return{year:n,weeks:x(e,n)}}},T=function(){return new Array(g).fill(!1).map(I(W))},H=Object(r["E"])("data-v-48d6f0f8");Object(r["r"])("data-v-48d6f0f8");var U={class:"year"};Object(r["p"])();var B=H((function(e,t,n,a,c,o){var i=Object(r["w"])("Week");return Object(r["o"])(),Object(r["d"])("div",U,[Object(r["f"])("span",{class:[{decade:!(n.year.year%10)&&0!==n.year.year},"number"]},Object(r["y"])(n.year.year),3),(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(n.year.weeks,(function(e,t){return Object(r["o"])(),Object(r["d"])(i,{class:"week",birthDate:n.birthDate,key:t,week:e},null,8,["birthDate","week"])})),128))])})),F=n("cdb6"),J=n("1d9b"),z=n("3245"),G=(n("b0c0"),Object(r["E"])("data-v-1c9697ee")),N=G((function(e,t,n,a,c,o){var i=Object(r["w"])("Tooltip");return Object(r["o"])(),Object(r["d"])("div",{class:["week",{isCurrent:o.isCurrent}],style:{borderColor:o.borderColor,backgroundColor:o.backgroundColor}},[n.week.tooltip?(Object(r["o"])(),Object(r["d"])(i,{key:0,class:"week-tooltip",name:n.week.tooltip.name},null,8,["name"])):Object(r["e"])("",!0)],6)})),R=n("af8b"),q=n("dfe1"),V=Object(r["E"])("data-v-88618f40");Object(r["r"])("data-v-88618f40");var $={class:"tooltip-container"},K={class:"tooltip"};Object(r["p"])();var Q=V((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",$,[Object(r["f"])("div",K,Object(r["y"])(n.name),1)])})),X={props:{name:String}};n("a577");X.render=Q,X.__scopeId="data-v-88618f40";var Z=X,ee={components:{Tooltip:Z},props:{week:{default:function(){return{week:0,year:0,phase:{color:"black"}}}},birthDate:{default:S}},computed:{currentWeek:function(){return Object(F["a"])(Object(R["a"])(this.birthDate,this.week.week),this.week.year)},isPast:function(){return Object(J["a"])(this.currentWeek)},isCurrent:function(){return Object(q["a"])(this.currentWeek)},backgroundColor:function(){var e,t;return this.isPast?null===(e=this.week)||void 0===e||null===(t=e.phase)||void 0===t?void 0:t.color:"transparent"},borderColor:function(){var e,t;return null===(e=this.week)||void 0===e||null===(t=e.phase)||void 0===t?void 0:t.color}}};n("87e0");ee.render=N,ee.__scopeId="data-v-1c9697ee";var te=ee,ne={components:{Week:te},props:{year:{default:function(){return{year:0,weeks:[]}}},birthDate:{default:S}},computed:{currentWeek:function(){return Object(F["a"])(this.week.year)},isPast:function(){return Object(J["a"])(this.currentWeek)},isCurrent:function(){return Object(z["a"])(this.currentWeek)},optimizedDate:function(){return this.isCurrent?this.birthDate:this.isPast?_:A}}};n("b828");ne.render=B,ne.__scopeId="data-v-48d6f0f8";var re=ne,ae=Object(r["E"])("data-v-ec379e76");Object(r["r"])("data-v-ec379e76");var ce={class:"header"},oe=Object(r["f"])("div",{class:"year"},[Object(r["f"])("span",null,"Year")],-1),ie={class:"week"},ue=Object(r["f"])("span",null,"Week",-1),se={class:"week-number-container"};Object(r["p"])();var be=ae((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",ce,[oe,Object(r["f"])("div",ie,[ue,Object(r["f"])("div",se,[(Object(r["o"])(),Object(r["d"])(r["a"],null,Object(r["u"])(52,(function(e){return Object(r["f"])("div",{class:"week-number",key:e},Object(r["y"])(e),1)})),64))])])])})),le={props:{week:{default:function(){return{week:0,year:0,phase:{color:"black"}}}}}};n("7c4c");le.render=be,le.__scopeId="data-v-ec379e76";var de=le,fe={class:"legends"},Oe={class:"column"},je={class:"column"};function pe(e,t,n,a,c,o){var i=Object(r["w"])("Week"),u=Object(r["w"])("Legend"),s=Object(r["w"])("Label");return Object(r["o"])(),Object(r["d"])("div",fe,[Object(r["f"])("div",Oe,[Object(r["f"])(u,{description:"Your past life"},{default:Object(r["C"])((function(){return[Object(r["f"])(i,{week:{phase:{color:"rgb(73, 233, 166)"},week:0,year:-10},birthDate:new Date(0)},null,8,["week","birthDate"])]})),_:1}),Object(r["f"])(u,{description:"Your future life"},{default:Object(r["C"])((function(){return[Object(r["f"])(i,{week:{phase:{color:"rgb(73, 233, 166)"}}},null,8,["week"])]})),_:1}),Object(r["f"])(u,{description:"Your Current week"},{default:Object(r["C"])((function(){return[Object(r["f"])(i,{week:{phase:{color:"rgb(73, 233, 166)"}},class:"isCurrent",style:{"border-color":"none !important"}},null,8,["week"])]})),_:1}),Object(r["f"])(u,{description:"Interesting Fact"},{default:Object(r["C"])((function(){return[Object(r["f"])(s,{name:"Label"})]})),_:1})]),Object(r["f"])("div",je,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(c.phases,(function(e,t){return Object(r["o"])(),Object(r["d"])(u,{key:t,description:e.name},{default:Object(r["C"])((function(){return[Object(r["f"])(i,{week:{phase:{color:e.color},week:0,year:-10},birthDate:new Date(0)},null,8,["week","birthDate"])]})),_:2},1032,["description"])})),128))])])}n("a4d3"),n("e01a");var ve={class:"legend"},me={class:"component"},he={class:"description"};function we(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",ve,[Object(r["f"])("span",me,[Object(r["v"])(e.$slots,"default")]),Object(r["f"])("span",he,Object(r["y"])(n.description),1)])}var ke={props:{name:String,description:String}};n("0669");ke.render=we;var ye=ke,ge={components:{Legend:ye,Week:te,Label:Z},data:function(){return{phases:W.reverse()}}};n("4ff7");ge.render=pe;var De=ge,Ce={name:"Home",data:function(){return{date:C,years:T(),show:!0,minDate:L,maxDate:P}},components:{Year:re,Header:de,Legend:De},computed:{birthDate:function(){return new Date(this.date)}},methods:{onDateChange:function(){var e=this;this.show=!1,setTimeout((function(){e.show=!0}),100)}}};n("1e71");Ce.render=h,Ce.__scopeId="data-v-2339a80b";var Se=Ce,_e=[{path:"/",name:"Home",component:Se},{path:"/c",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ae=Object(u["a"])({history:Object(u["b"])("/life-in-weeks/"),routes:_e}),Le=Ae,Pe=n("5502"),Ee=Object(Pe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(i).use(Ee).use(Le).mount("#app")},"640b":function(e,t,n){},"7c4c":function(e,t,n){"use strict";n("4a66")},"85c3":function(e,t,n){},"87e0":function(e,t,n){"use strict";n("e2a3")},"93b5":function(e,t,n){},"9c69":function(e,t,n){},a434:function(e,t,n){},a577:function(e,t,n){"use strict";n("a434")},b828:function(e,t,n){"use strict";n("93b5")},e2a3:function(e,t,n){}});
//# sourceMappingURL=app.1a89cf84.js.map