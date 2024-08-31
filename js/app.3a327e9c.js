(function(){"use strict";var t={1453:function(t,e,a){var n=a(5130),o=a(6768);function r(t,e,a,n,r,s){const l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(l)}var s={name:"App"},l=a(1241);const u=(0,l.A)(s,[["render",r]]);var d=u,i=a(4232);const c=t=>((0,o.Qi)("data-v-172d596a"),t=t(),(0,o.jt)(),t),p=c((()=>(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"ID"),(0,o.Lk)("th",null,"Name"),(0,o.Lk)("th",null,"Contact"),(0,o.Lk)("th",null,"Address"),(0,o.Lk)("th",null,"Actions")])],-1))),m=["onClick"];function h(t,e,a,n,r,s){const l=(0,o.g2)("AppHeader"),u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l),(0,o.Lk)("h1",null,"Hello "+(0,i.v_)(r.name)+", Welcome on Home Page",1),(0,o.Lk)("table",null,[p,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.restaurants,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id},[(0,o.Lk)("td",null,(0,i.v_)(t.id),1),(0,o.Lk)("td",null,(0,i.v_)(t.name),1),(0,o.Lk)("td",null,(0,i.v_)(t.address),1),(0,o.Lk)("td",null,(0,i.v_)(t.contact),1),(0,o.Lk)("td",null,[(0,o.bF)(u,{to:"/update"+t.id},{default:(0,o.k6)((()=>[(0,o.eW)("Update")])),_:2},1032,["to"]),(0,o.Lk)("button",{onClick:e=>s.deleteResto(t.id)},"Delete",8,m)])])))),128))])])],64)}a(4114);const g={class:"nav"};function f(t,e,a,n,r,s){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",g,[(0,o.bF)(l,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1}),(0,o.bF)(l,{to:"/add"},{default:(0,o.k6)((()=>[(0,o.eW)("Add Restaurant")])),_:1}),(0,o.Lk)("a",{onClick:e[0]||(e[0]=(...t)=>s.logout&&s.logout(...t))},"Logout Restaurant")])}var k={name:"AppHeader",data(){return{}},methods:{logout(){localStorage.clear("user-info"),this.$router.push({name:"SignUp"})}}};const v=(0,l.A)(k,[["render",f],["__scopeId","data-v-75c61470"]]);var L=v,b=a(4373),y={name:"HomePage",data(){return{name:"",restaurants:[]}},methods:{async deleteResto(t){let e=await b.A.delete(`http://localhost:3000/restaurant/${t}`);200==e.status&&this.loadData()},async loadData(){let t=JSON.parse(localStorage.getItem("user-info"));this.name=t.name;let e=localStorage.getItem("user-info");e||this.$router.push({name:"SignUp"});let a=await b.A.get("http://localhost:3000/restaurant");this.restaurants=a.data}},components:{AppHeader:L},mounted(){this.loadData()}};const U=(0,l.A)(y,[["render",h],["__scopeId","data-v-172d596a"]]);var A=U,w=a.p+"img/Restaurant.2acae4b4.svg";const S=(0,o.Lk)("img",{class:"logo",src:w,alt:""},null,-1),E=(0,o.Lk)("h1",null,"Sign Up",-1),_={class:"register"},C={class:"login-link"};function H(t,e,a,r,s,l){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[S,E,(0,o.Lk)("div",_,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.name=t),type:"text",placeholder:"Enter Name"},null,512),[[n.Jo,s.name]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.email=t),type:"text",placeholder:"Enter Email"},null,512),[[n.Jo,s.email]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.password=t),type:"password",placeholder:"Enter Password"},null,512),[[n.Jo,s.password]]),(0,o.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>l.singUp&&l.singUp(...t))},"Sign Up"),(0,o.Lk)("p",C,[(0,o.eW)(" Already have an account "),(0,o.bF)(u,{to:"/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})])])],64)}var O={name:"SignUp",data(){return{name:"",email:"",password:""}},methods:{async singUp(){let t=await b.A.post("http://localhost:3000/user",{name:this.name,email:this.email,password:this.password});201==t.status&&(localStorage.setItem("user-info",JSON.stringify(t.data)),this.$router.push({name:"Home"}))}},mounted(){let t=localStorage.getItem("user-info");t&&this.$router.push({name:"Home"})}};const F=(0,l.A)(O,[["render",H]]);var $=F;const J=(0,o.Lk)("img",{class:"logo",src:w,alt:""},null,-1),I=(0,o.Lk)("h1",null,"Login",-1),R={class:"login"},x={class:"login-link"};function j(t,e,a,r,s,l){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[J,I,(0,o.Lk)("div",R,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.email=t),type:"text",placeholder:"Enter Email"},null,512),[[n.Jo,s.email]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t),type:"password",placeholder:"Enter Password"},null,512),[[n.Jo,s.password]]),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>l.login&&l.login(...t))},"Login"),(0,o.Lk)("p",x,[(0,o.eW)(" Don't have account "),(0,o.bF)(u,{to:"/sign-up"},{default:(0,o.k6)((()=>[(0,o.eW)("Sign Up")])),_:1})])])],64)}var V={name:"UserLogin",data(){return{email:"",password:""}},methods:{async login(){const t=await b.A.get(`http://localhost:3000/user?email=${this.email}&${this.password}`);200==t.status&&t.data.length>0&&(localStorage.setItem("user-info",JSON.stringify(t.data[0])),this.$router.push({name:"Home"}))}},mounted(){let t=localStorage.getItem("user-info");t&&this.$router.push({name:"Home"})}};const W=(0,l.A)(V,[["render",j]]);var N=W;const P={class:"add"};function X(t,e,a,r,s,l){const u=(0,o.g2)("AppHeader");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),(0,o.Lk)("h1",null,"Hello "+(0,i.v_)(s.name)+", Welcome on Add RestaurantPage",1),(0,o.Lk)("form",P,[(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Name",name:"name","onUpdate:modelValue":e[0]||(e[0]=t=>s.restaurant.name=t)},null,512),[[n.Jo,s.restaurant.name]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Address",name:"address","onUpdate:modelValue":e[1]||(e[1]=t=>s.restaurant.address=t)},null,512),[[n.Jo,s.restaurant.address]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Contact",name:"contact","onUpdate:modelValue":e[2]||(e[2]=t=>s.restaurant.contact=t)},null,512),[[n.Jo,s.restaurant.contact]]),(0,o.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>l.addRestaurant&&l.addRestaurant(...t))},"Add New Restaurant")])],64)}var D={name:"Add-Item",data(){return{name:"",restaurant:{name:"",address:"",contact:""}}},components:{AppHeader:L},mounted(){let t=localStorage.getItem("user-info");t||this.$router.push({name:"SignUp"});const e=JSON.parse(t);this.name=e.name},methods:{async addRestaurant(){if(""==this.restaurant.name||""==this.restaurant.address||""==this.restaurant.contact)alert("Fill up the form");else{const t=await b.A.post("http://localhost:3000/restaurant",this.restaurant);201==t.status&&this.$router.push({name:"Home"})}}}};const K=(0,l.A)(D,[["render",X]]);var T=K;const M={class:"update"};function Q(t,e,a,r,s,l){const u=(0,o.g2)("Header");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),(0,o.Lk)("h1",null,"Hello "+(0,i.v_)(s.name)+", Welcome on Update Restaurant Page",1),(0,o.Lk)("form",M,[(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Name",name:"name","onUpdate:modelValue":e[0]||(e[0]=t=>s.restaurant.name=t)},null,512),[[n.Jo,s.restaurant.name]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Address",name:"address","onUpdate:modelValue":e[1]||(e[1]=t=>s.restaurant.address=t)},null,512),[[n.Jo,s.restaurant.address]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Contact",name:"contact","onUpdate:modelValue":e[2]||(e[2]=t=>s.restaurant.contact=t)},null,512),[[n.Jo,s.restaurant.contact]]),(0,o.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>l.UpdateRestaurant&&l.UpdateRestaurant(...t))},"Update Restaurant")])],64)}var q={name:"Update-Item",data(){return{name:"",restaurant:{name:"",address:"",contact:""}}},components:{Header:L},methods:{async UpdateRestaurant(){if(""==this.restaurant.name||""==this.restaurant.address||""==this.restaurant.contact)alert("Fill up the form");else{const t=await b.A.put(`http://localhost:3000/restaurant/${this.$route.params.id}`,{name:this.restaurant.name,address:this.restaurant.address,contact:this.restaurant.contact});200==t.status&&this.$router.push({name:"Home"})}}},async mounted(){let t=localStorage.getItem("user-info");t||this.$router.push({name:"SignUp"});let e=JSON.parse(localStorage.getItem("user-info"));this.name=e.name;const a=await b.A.get(`http://localhost:3000/restaurant/${this.$route.params.id}`);this.restaurant=a.data}};const z=(0,l.A)(q,[["render",Q]]);var B=z,G=a(973);const Y=[{name:"Home",component:A,path:"/"},{name:"SignUp",component:$,path:"/sign-up"},{name:"Login",component:N,path:"/login"},{name:"Add",component:T,path:"/add"},{name:"Update",component:B,path:"/update:id"}],Z=(0,G.aE)({history:(0,G.LA)(),routes:Y});var tt=Z;(0,n.Ef)(d).use(tt).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,r){if(!n){var s=1/0;for(i=0;i<t.length;i++){n=t[i][0],o=t[i][1],r=t[i][2];for(var l=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(l=!1,r<s&&(s=r));if(l){t.splice(i--,1);var d=o();void 0!==d&&(e=d)}}return e}r=r||0;for(var i=t.length;i>0&&t[i-1][2]>r;i--)t[i]=t[i-1];t[i]=[n,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,s=n[0],l=n[1],u=n[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(u)var i=u(a)}for(e&&e(n);d<s.length;d++)r=s[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(i)},n=self["webpackChunkresto_project"]=self["webpackChunkresto_project"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(1453)}));n=a.O(n)})();
//# sourceMappingURL=app.3a327e9c.js.map