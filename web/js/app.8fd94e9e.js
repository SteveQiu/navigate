(function(){"use strict";var t={2125:function(t,e,n){var i=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:"/projects"}},[t._v("Projects")]),e("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),e("div",[e("router-view")],1)],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"logo"},[t._v("Profile")]),e("div",{staticClass:"menu",on:{click:function(e){return t.toggleMenu()}}},[e("a",[t._v("MENU")])]),t.allowMenu?e("div",{staticClass:"link-a"},[t._t("default")],2):t._e()])},a=[],l={name:"HeaderContainer",data:function(){return{windowWidth:window.innerWidth,showMenu:!1}},mounted:function(){window.addEventListener("resize",(()=>{this.windowWidth=window.innerWidth}))},computed:{allowMenu(){return this.showMenu||this.windowWidth>600}},methods:{toggleMenu(){console.log(this.allowMenu),this.showMenu=!this.allowMenu},onResize(){this.windowWidth=window.innerWidth}}},c=l,h=n(1001),d=(0,h.Z)(c,r,a,!1,null,"39eeef48",null),u=d.exports,p={name:"ApplicationEntry",components:{Header:u},data:()=>({hello:"Vue app"})},v=p,f=(0,h.Z)(v,o,s,!1,null,"fab6cd96",null),b=f.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("welcome-banner"),e("Introduction"),e("phone-container")],1)},g=[],w=(n(7658),function(){var t=this;t._self._c;return t._m(0)}),x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner-container"},[e("div",{staticClass:"img img-city rellax",attrs:{"data-rellax-speed":"3"}}),e("div",{staticClass:"img img-building rellax",attrs:{"data-rellax-speed":"5"}}),e("div",{staticClass:"img img-platform"}),e("div",{staticClass:"img img-title rellax",attrs:{"data-rellax-speed":"-5"}},[t._v("WELCOME!")]),e("div",{staticClass:"parallax-fillter"})])}],_={name:"WelcomeBanner"},C=_,y=(0,h.Z)(C,w,x,!1,null,null,null),k=y.exports,P=function(){var t=this,e=t._self._c;return e("div",{ref:"phoneContainer",staticClass:"encouragement-container"},[e("img",{ref:"phone",staticClass:"phone",style:t.phoneStyleObject,attrs:{src:n(2029),alt:""}}),e("div",{staticClass:"slide"},[e("div",{staticClass:"text"},[t._v(" Scroll Down ")]),e("div",{staticStyle:{position:"absolute",transform:"rotate(40deg)"}},[e("LoremText")],1)]),e("div",{staticClass:"slide"},[e("div",{staticClass:"text"},[t._v(" Thank you ")]),e("div",{staticStyle:{position:"absolute",transform:"rotate(-40deg)"}},[e("LoremText")],1)]),e("div",{staticClass:"slide"},[e("div",{staticClass:"text"},[t._v(" Have a nice day! ")]),e("div",{staticStyle:{position:"absolute",transform:"rotate(40deg)"}},[e("LoremText")],1)])])},E=[],O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"text"},[t._v(" "+t._s(t.text)+" ")])])},M=[],W={name:"LoremText",data:()=>{let t=[];for(let e=0;e<10;e++)t.push("Web Development ");return{text:t.join("")}}},S=W,j=(0,h.Z)(S,O,M,!1,null,"58fc4030",null),T=j.exports,B={name:"PhoneContainer",components:{LoremText:T},data:function(){return{observer:null,observedElm:null,phoneWidth:"200px",phoneHeight:"400px",phoneLeft:(window.innerWidth-200)/2+"px",phoneTop:"0px",phonePosition:"absolute"}},computed:{phoneStyleObject(){return{width:this.phoneWidth,height:this.phoneHeight,left:this.phoneLeft,top:this.phoneTop,position:this.phonePosition}}},destroyed(){this.phoneObserver.unobserve(this.observedElm)},mounted:function(){this.setupPhoneObserver()},methods:{setupPhoneObserver(){let t=[];for(let n=1;n<20;n++)t.push(n/20);let e={root:null,rootMargin:"0px",threshold:t};this.observedElm=this.$refs.phoneContainer,this.phoneObserver=new IntersectionObserver(this.updatePhoneSize,e),this.phoneObserver.observe(this.observedElm)},updatePhoneSize(t){t.forEach((t=>{if(t.target!==this.$refs.phoneContainer)return;const e=t.boundingClientRect.top/t.rootBounds.height,n=t.rootBounds.height-t.boundingClientRect.top,i=1,o=2,s=200*Math.pow(o-t.intersectionRatio,i),r=400*Math.pow(o-t.intersectionRatio,i),a=Math.min((window.innerHeight-r)/2,Math.abs(n));console.log(t),console.log(t.intersectionRatio,t.boundingClientRect.top,n,t.rootBounds.height,t.boundingClientRect.top/t.rootBounds.height),e<.3?(this.phoneWidth=`${s}px`,this.phoneHeight=`${r}px`,this.phoneLeft=(window.innerWidth-s)/2+"px",this.phoneTop=`${a}px`,this.phonePosition="fixed"):(this.phoneWidth="200px",this.phoneHeight="400px",this.phoneLeft=(window.innerWidth-200)/2+"px",this.phoneTop="0px",this.phonePosition="absolute")}))}}},D=B,Z=(0,h.Z)(D,P,E,!1,null,"4e82f144",null),H=Z.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"directory-description"},[e("h1",[t._v("Steve's Web Directory")]),e("h3",[t._v("It is a directory for Steve's website.")]),e("div",{staticClass:"flex"},[e("div",{staticClass:"box mouse"}),e("table",{ref:"box1",staticClass:"box"},[e("transition",{attrs:{name:"slide-fade"}},[t.toggleBox1?e("td",[t._v("Design a page with minimualist style")]):t._e()])],1)]),e("div",{staticClass:"flex inverted-flex"},[e("div",{staticClass:"box keyboard"}),e("table",{ref:"box2",staticClass:"box"},[e("transition",{attrs:{name:"slide-fade"}},[e("td",{directives:[{name:"show",rawName:"v-show",value:t.toggleBox2,expression:"toggleBox2"}]},[t._v("Created with VueJS, Webpack, and NodeJS")])])],1)])])},R=[],$={name:"IntroductionPage",data:function(){return{toggleBox1:!1,toggleBox2:!1,observer:null,observedElm1:null,observedElm2:null}},destroyed(){this.observer.unobserve(this.observedElm1),this.observer.unobserve(this.observedElm2)},mounted:function(){let t={root:null,rootMargin:"0px",threshold:[0,.9]};this.observer=new IntersectionObserver(this.updateDisplay,t),this.observedElm1=this.$refs.box1,this.observedElm2=this.$refs.box2,this.observer.observe(this.observedElm1),this.observer.observe(this.observedElm2)},methods:{updateDisplay(t){t.forEach((t=>{t.target==this.observedElm1?this.toggleBox1=t.intersectionRatio>.8:t.target==this.observedElm2&&(this.toggleBox2=t.intersectionRatio>.8)}))}}},A=$,J=(0,h.Z)(A,L,R,!1,null,"1e132d3b",null),I=J.exports;let N=n(9849);var q={name:"HomePage",components:{WelcomeBanner:k,PhoneContainer:H,Introduction:I},mounted:function(){new N(".rellax",{center:!1,wrapper:null,round:!0,vertical:!0,horizontal:!1})},methods:{goBack(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},z=q,V=(0,h.Z)(z,m,g,!1,null,"54eb1feb",null),F=V.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},t._l(t.sites,(function(n){return e("a",{key:n.env,class:{disabled:n.disabled},attrs:{href:`${n.disabled?"javascript:;":n.link}`,target:""+(n.disabled?"_self":"_blank")}},[e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[e("table",[e("tr",[e("td",[t._v(t._s(n.env))])])])]),e("div",{staticClass:"description"},[t._v(t._s(n.content))])])])})),0)},U=[],G={name:"ProjectPage",data:()=>({sites:[{env:"PHP",link:"http://steveqiu.github.io/personal-web/",content:"Profile website. This is another profile with details of other projects from the past",disabled:!1},{env:"JAVA",link:"http://targetanalysis.steveqiu.com",content:"(Discontinued) MongoDB, Springboot, ReactJS, Intrinio Financial Service. App for financial statement query. Due to price hike, service unsubscribed",disabled:!0},{env:"NodeJs",link:"",content:"(Discontinued) MEAN(MongoDB ExpressJS AngularJS NodeJS) stack. This is of an TODO List application for personal/team goal management",disabled:!0},{env:"Django",link:"https://noteweb.herokuapp.com/",content:"(Discontinued) This is a simple note taking application with authentication.",disabled:!0},{env:"Rail",link:"https://infiloopmusic.herokuapp.com/",content:"(Discontinued) A simple web application using Rails and prestige sql",disabled:!0}]}),methods:{}},K=G,Y=(0,h.Z)(K,Q,U,!1,null,"558728f9",null),X=Y.exports,tt=function(){var t=this;t._self._c;return t._m(0)},et=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"img1"},[e("div",{staticClass:"text"},[t._v("Creativity and Efficiency")])]),e("section",{staticClass:"section section-light"},[e("h1",[t._v("Linkedin")]),e("h3",[e("a",{attrs:{href:"https://www.linkedin.com/in/qsteve/",target:"_blank"}},[t._v("https://www.linkedin.com/in/qsteve/")])])]),e("div",{staticClass:"img2"},[e("div",{staticClass:"text"},[t._v(" Work hard Everyday ")])]),e("section",{staticClass:"section section-dark"},[e("h1",[t._v("Github")]),e("h3",[e("a",{attrs:{href:"https://github.com/SteveQiu",target:"_blank"}},[t._v("https://github.com/SteveQiu")])])]),e("div",{staticClass:"img3"},[e("div",{staticClass:"text"},[t._v(" THANK YOU ! ")])])])}],nt={name:"ContactPage",data:()=>({}),computed:{},methods:{goBack(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},it=nt,ot=(0,h.Z)(it,tt,et,!1,null,"4766ec04",null),st=ot.exports,rt={routes:[{path:"/",name:"home",component:F},{path:"/projects",name:"projects",component:X},{path:"/contact",name:"contact",component:st}]},at=n(2631);i.ZP.use(at.ZP),i.ZP.config.productionTip=!1,new i.ZP({el:"#app",router:new at.ZP(rt),render:t=>t(b)}).$mount("#app")},2029:function(t,e,n){t.exports=n.p+"img/phone.b93a4140.png"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,s){if(!i){var r=1/0;for(h=0;h<t.length;h++){i=t[h][0],o=t[h][1],s=t[h][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,s<r&&(r=s));if(a){t.splice(h--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[i,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,r=i[0],a=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var h=l(n)}for(e&&e(i);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(h)},i=self["webpackChunknew_project"]=self["webpackChunknew_project"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2125)}));i=n.O(i)})();
//# sourceMappingURL=app.8fd94e9e.js.map