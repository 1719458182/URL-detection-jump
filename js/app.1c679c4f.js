(function(){"use strict";var t={3996:function(t,e,r){var n=r(6210),o=r(8085);function s(t,e,r,n,s,i){const a=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.j4)(a,{msg:""})}var i=r(5832);const a=t=>((0,o.dD)("data-v-3889ef95"),t=t(),(0,o.Cn)(),t),c={class:"redirector"},l={class:"welcome-title"},u=a((()=>(0,o._)("h2",{class:"blink"},"收藏此页防止失联",-1))),h={key:0,class:"progress-container"},d={key:1};function f(t,e,r,n,s,a){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("h1",l,(0,i.zw)(s.welcomeTitle),1),u,(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>a.addToFavorites&&a.addToFavorites(...t)),class:"favorite-button"},"添加到收藏夹"),(0,o._)("h1",null,(0,i.zw)(s.mainMessage),1),s.message?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",{class:"progress-bar",style:(0,i.j5)({width:`${s.progress}%`})},null,4)])),s.message?((0,o.wg)(),(0,o.iD)("h2",d,(0,i.zw)(s.message),1)):(0,o.kq)("",!0)])}r(7198);var g=r(8493),p={name:"UrlRedirector",data(){return{welcomeTitle:"欢迎访问，正在自动匹配最佳线路访问官网",message:"",mainMessage:"正在为您选择最佳线路",urls:[],progress:0,redirecting:!1,totalResponses:0}},async created(){try{await this.loadConfig(),this.urls.length>0?this.checkUrlsAndRedirect():this.message="没有可用的 URL，请联系管理员"}catch(t){console.error("初始化过程中出错:",t),this.message="初始化失败，请刷新页面重试"}},methods:{addToFavorites(){const t=window.location.href,e=document.title;try{window.external.AddFavorite(t,e)}catch(r){alert("按 Ctrl+D 添加到收藏夹")}},async loadConfig(){try{const t=await g.Z.get("/config.json"),e=t.data;if(this.welcomeTitle=e.welcomeTitle||this.welcomeTitle,this.urls=(e.urls||[]).map((t=>{try{const e=atob(t);if(e.startsWith("http://")||e.startsWith("https://"))return e}catch(e){}return t})),!Array.isArray(this.urls)||0===this.urls.length)throw new Error("URL 列表为空或格式不正确")}catch(t){throw console.error("加载配置失败:",t),t}},async checkUrlsAndRedirect(){if(0===this.urls.length)return void(this.message="没有可用的 URL，请联系管理员");const t=this.urls.map((t=>this.checkUrl(t)));try{await Promise.all(t),this.redirecting||(this.message="暂无线路可以访问，请联系管理员")}catch(e){console.error("检查URL时发生错误:",e),this.message="检查URL时发生错误，请刷新页面重试"}},async checkUrl(t){if(this.redirecting)this.updateProgress();else try{const e=Date.now();await g.Z.get(t);const r=Date.now()-e;console.log(`${t} 响应时间: ${r}ms`),this.redirecting=!0;const n=window.location.pathname+window.location.search+window.location.hash;let o=t.endsWith("/")?t.slice(0,-1):t;o+=n,window.location.href=o}catch(e){console.error(`无法访问 ${t}:`,e)}finally{this.updateProgress()}},updateProgress(){this.totalResponses++,this.progress=this.totalResponses/this.urls.length*100}}},w=r(6328);const v=(0,w.Z)(p,[["render",f],["__scopeId","data-v-3889ef95"]]);var m=v,y={name:"App",components:{HelloWorld:m}};const b=(0,w.Z)(y,[["render",s]]);var k=b;(0,n.ri)(k).mount("#app")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,s){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,i=n[0],a=n[1],c=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(e&&e(n);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},n=self["webpackChunktiaozhuan"]=self["webpackChunktiaozhuan"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3996)}));n=r.O(n)})();