(function(){"use strict";var e={6673:function(e,t,r){var s=r(9242),i=r(3396);const a=(0,i._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),n=(0,i._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),o=(0,i._)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap",rel:"stylesheet"},null,-1),c={key:0,class:"main"},l={class:"cover-box"},h={class:"side-box"},d={key:1,class:"main"},u={class:"game-container"},m={class:"top-box"},p={class:"cover-box"};function g(e,t,r,s,g,w){const k=(0,i.up)("UIColorMode"),f=(0,i.up)("QuizHeader"),b=(0,i.up)("QuizImg"),y=(0,i.up)("QuizFilters"),v=(0,i.up)("QuizReset"),S=(0,i.up)("QuizScore"),A=(0,i.up)("QuizHistory"),_=(0,i.up)("QuizAnswerField"),G=(0,i.up)("QuizFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,n,o,(0,i.Wm)(k),(0,i.Wm)(f),g.windowWidth>1e3?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",l,[(0,i.Wm)(b,{imgSource:g.artistImg},null,8,["imgSource"])]),(0,i._)("div",h,[(0,i.Wm)(y,{onCheckedGenre:w.getGenreFilter,onCheckedPeriod:w.getPeriodFilter},null,8,["onCheckedGenre","onCheckedPeriod"]),(0,i.Wm)(v,{onReset:w.resetScore},null,8,["onReset"]),(0,i.Wm)(S,{gameScore:g.score,total:g.attemptsNb,gameSR:g.correctRate},null,8,["gameScore","total","gameSR"]),(0,i.Wm)(A,{class:"history",lastArtistName:g.lastArtist,imgSource:g.lastArtistImg},null,8,["lastArtistName","imgSource"]),(0,i.Wm)(_,{onAttempt:w.checkAnswer,onSkip:w.skipArtist},null,8,["onAttempt","onSkip"])])])):((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(y,{onCheckedGenre:w.getGenreFilter,onCheckedPeriod:w.getPeriodFilter},null,8,["onCheckedGenre","onCheckedPeriod"]),(0,i.Wm)(v,{onReset:w.resetScore},null,8,["onReset"]),(0,i._)("div",u,[(0,i._)("div",m,[(0,i.Wm)(S,{gameScore:g.score,total:g.attemptsNb,gameSR:g.correctRate},null,8,["gameScore","total","gameSR"]),(0,i.Wm)(A,{class:"history",lastArtistName:g.lastArtist,imgSource:g.lastArtistImg},null,8,["lastArtistName","imgSource"])]),(0,i._)("div",p,[(0,i.Wm)(b,{imgSource:g.artistImg},null,8,["imgSource"]),(0,i.Wm)(_,{onAttempt:w.checkAnswer,onSkip:w.skipArtist},null,8,["onAttempt","onSkip"])])])])),(0,i.Wm)(G)],64)}r(7658);const w=(0,i._)("span",{class:"title"},"Guess the artist",-1),k=[w];function f(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("header",null,k)}var b={name:"QuizHeader"},y=r(89);const v=(0,y.Z)(b,[["render",f]]);var S=v;const A=(0,i._)("span",{class:"text"},[(0,i.Uk)("Made by "),(0,i._)("a",{target:"_blank",href:"https://gregoiretinn.es"},"Grégoire Tinnes"),(0,i.Uk)(" with the "),(0,i._)("a",{target:"_blank",href:"https://developer.spotify.com/documentation/web-api"},"Spotify API")],-1),_=[A];function G(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("footer",null,_)}var I={name:"QuizFooter"};const D=(0,y.Z)(I,[["render",G]]);var z=D;const N={class:"filters-container"},C={class:"filters"},P=(0,i._)("span",{class:"label-text"},"Genre: ",-1),R=(0,i._)("label",{for:"all-genre"},"All",-1),x=(0,i._)("label",{for:"pop"},"Pop",-1),T=(0,i._)("label",{for:"rock"},"Rock",-1),F=(0,i._)("label",{for:"rap"},"Rap",-1),Q=(0,i._)("label",{for:"edm"},"EDM",-1),E={class:"filters"},W=(0,i._)("span",{class:"label-text"},"Period: ",-1),U=(0,i._)("label",{for:"all-period"},"All",-1),j=(0,i._)("label",{for:"old"},"Old",-1),B=(0,i._)("label",{for:"recent"},"Recent",-1);function O(e,t,r,a,n,o){return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("div",C,[P,(0,i.wy)((0,i._)("input",{type:"radio",id:"all-genre",value:"all",onChange:t[0]||(t[0]=(...e)=>o.checkGenre&&o.checkGenre(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>n.checkedGenre=e)},null,544),[[s.G2,n.checkedGenre]]),R,(0,i.wy)((0,i._)("input",{type:"radio",id:"pop",value:"pop",onChange:t[2]||(t[2]=(...e)=>o.checkGenre&&o.checkGenre(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>n.checkedGenre=e)},null,544),[[s.G2,n.checkedGenre]]),x,(0,i.wy)((0,i._)("input",{type:"radio",id:"rock",value:"rock",onChange:t[4]||(t[4]=(...e)=>o.checkGenre&&o.checkGenre(...e)),"onUpdate:modelValue":t[5]||(t[5]=e=>n.checkedGenre=e)},null,544),[[s.G2,n.checkedGenre]]),T,(0,i.wy)((0,i._)("input",{type:"radio",id:"rap",value:"rap",onChange:t[6]||(t[6]=(...e)=>o.checkGenre&&o.checkGenre(...e)),"onUpdate:modelValue":t[7]||(t[7]=e=>n.checkedGenre=e)},null,544),[[s.G2,n.checkedGenre]]),F,(0,i.wy)((0,i._)("input",{type:"radio",id:"edm",value:"edm",onChange:t[8]||(t[8]=(...e)=>o.checkGenre&&o.checkGenre(...e)),"onUpdate:modelValue":t[9]||(t[9]=e=>n.checkedGenre=e)},null,544),[[s.G2,n.checkedGenre]]),Q]),(0,i._)("div",E,[W,(0,i.wy)((0,i._)("input",{type:"radio",id:"all-period",value:"all",onChange:t[10]||(t[10]=(...e)=>o.checkPeriod&&o.checkPeriod(...e)),"onUpdate:modelValue":t[11]||(t[11]=e=>n.checkedPeriod=e)},null,544),[[s.G2,n.checkedPeriod]]),U,(0,i.wy)((0,i._)("input",{type:"radio",id:"old",value:"old",onChange:t[12]||(t[12]=(...e)=>o.checkPeriod&&o.checkPeriod(...e)),"onUpdate:modelValue":t[13]||(t[13]=e=>n.checkedPeriod=e)},null,544),[[s.G2,n.checkedPeriod]]),j,(0,i.wy)((0,i._)("input",{type:"radio",id:"recent",value:"recent",onChange:t[14]||(t[14]=(...e)=>o.checkPeriod&&o.checkPeriod(...e)),"onUpdate:modelValue":t[15]||(t[15]=e=>n.checkedPeriod=e)},null,544),[[s.G2,n.checkedPeriod]]),B])])}var Z={name:"QuizFilters",emits:["checkedGenre","checkedPeriod"],data(){return{checkedGenre:"all",checkedPeriod:"all"}},async created(){},methods:{checkGenre(){this.$emit("checkedGenre",{message:this.checkedGenre})},checkPeriod(){this.$emit("checkedPeriod",{message:this.checkedPeriod})}}};const L=(0,y.Z)(Z,[["render",O]]);var M=L;const V={id:"img-container"},H=["src"];function Y(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("img",{alt:"Artist picture",src:r.imgSource},null,8,H)])}var q={name:"QuizImg",props:{imgSource:String}};const J=(0,y.Z)(q,[["render",Y]]);var $=J;const X={class:"fields"},K={class:"text-field-box"},ee=(0,i._)("span",{id:"white-bg"},null,-1),te=(0,i._)("path",{d:"M17.7652 3.26517C17.9116 3.11872 17.9116 2.88128 17.7652 2.73483L15.3787 0.34835C15.2322 0.201903 14.9948 0.201903 14.8483 0.34835C14.7019 0.494796 14.7019 0.732233 14.8483 0.87868L16.9697 3L14.8483 5.12132C14.7019 5.26777 14.7019 5.5052 14.8483 5.65165C14.9948 5.7981 15.2322 5.7981 15.3787 5.65165L17.7652 3.26517ZM0 3.375H17.5V2.625H0V3.375Z"},null,-1),re=[te];function se(e,t,r,a,n,o){return(0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("div",K,[(0,i.wy)((0,i._)("input",{onKeyup:t[0]||(t[0]=(0,s.D2)(((...e)=>o.checkAnswer&&o.checkAnswer(...e)),["enter"])),placeholder:"Type answer here",id:"text-field","onUpdate:modelValue":t[1]||(t[1]=e=>n.attempt=e)},null,544),[[s.nr,n.attempt]]),ee,((0,i.wg)(),(0,i.iD)("svg",{onClick:t[2]||(t[2]=(...e)=>o.checkAnswer&&o.checkAnswer(...e)),id:"arrow",viewBox:"0 0 18 6",xmlns:"http://www.w3.org/2000/svg"},re))]),(0,i._)("button",{class:"btn skip",onClick:t[3]||(t[3]=(...e)=>o.skip&&o.skip(...e))},"Skip")])}var ie={name:"QuizAnswerField",emits:["attempt","skip"],data(){return{attempt:""}},methods:{clear(){this.attempt=""},toApp(e){this.$emit("attempt",{message:e}),this.clear()},checkAnswer(){""!=this.attempt&&this.toApp(this.attempt)},skip(){this.$emit("skip")}}};const ae=(0,y.Z)(ie,[["render",se]]);var ne=ae,oe=r(7139);const ce={id:"results"},le=(0,i._)("span",{class:"label"},"Score",-1),he=(0,i._)("br",null,null,-1),de={class:"value",id:"score"},ue=(0,i._)("span",{class:"label"},"Correct",-1),me=(0,i._)("br",null,null,-1),pe={class:"value"};function ge(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("div",ce,[(0,i._)("div",null,[le,he,(0,i._)("span",de,(0,oe.zw)(r.gameScore)+" / "+(0,oe.zw)(r.total),1)]),(0,i._)("div",null,[ue,me,(0,i._)("span",pe,(0,oe.zw)(r.gameSR)+"%",1)])])}var we={name:"QuizScore",props:{gameScore:Number,gameSR:Number,total:Number}};const ke=(0,y.Z)(we,[["render",ge]]);var fe=ke;const be={class:"last-artist-box"},ye=(0,i._)("h3",null,"Last artist",-1),ve={class:"last-artist-infos"},Se={id:"last-artist-img"},Ae=["src"],_e={id:"name"};function Ge(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("div",be,[ye,(0,i._)("div",ve,[(0,i._)("div",Se,[(0,i._)("img",{alt:"Artist picture",src:r.imgSource},null,8,Ae)]),(0,i._)("span",_e,(0,oe.zw)(r.lastArtistName),1)])])}var Ie={name:"QuizHistory",props:{lastArtistName:String,imgSource:String},watch:{imgSource:function(){""==this.imgSource?document.querySelector("#last-artist-img").style.visibility="hidden":document.querySelector("#last-artist-img").style.visibility="visible"}},mounted(){""==this.imgSource&&(document.querySelector("#last-artist-img").style.visibility="hidden")}};const De=(0,y.Z)(Ie,[["render",Ge]]);var ze=De;function Ne(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("button",{class:"btn reset",onClick:t[0]||(t[0]=(...e)=>n.reset&&n.reset(...e))},"Reset score")}var Ce={name:"QuizReset",methods:{reset(){this.$emit("reset")}}};const Pe=(0,y.Z)(Ce,[["render",Ne]]);var Re=Pe;const xe={class:"theme-btn"},Te=(0,i._)("label",{for:"checkbox",class:"switch-label"},[(0,i._)("span",{id:"dark"},"🌙"),(0,i._)("span",{id:"light"},"☀️")],-1);function Fe(e,t,r,s,a,n){return(0,i.wg)(),(0,i.iD)("div",xe,[(0,i._)("input",{onChange:t[0]||(t[0]=(...e)=>n.toggleTheme&&n.toggleTheme(...e)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),Te])}var Qe={name:"UIColorMode",mounted(){const e=this.getMediaPreference();this.setTheme(e)},methods:{showDarkBtn(){document.getElementById("dark").style.display="inline",document.getElementById("light").style.display="none"},showLightBtn(){document.getElementById("dark").style.display="none",document.getElementById("light").style.display="inline"},toggleTheme(){const e=localStorage.getItem("user-theme");"light-theme"===e?(this.setTheme("dark-theme"),this.showLightBtn()):(this.setTheme("light-theme"),this.showDarkBtn())},getMediaPreference(){if(localStorage.getItem("user-theme"))return localStorage.getItem("user-theme");const e=window.matchMedia("(prefers-color-scheme: dark)").matches;return e?"dark-theme":"light-theme"},setTheme(e){"light-theme"==e?this.showDarkBtn():this.showLightBtn(),localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e}}};const Ee=(0,y.Z)(Qe,[["render",Fe]]);var We=Ee;const Ue="OGZkNDUxYTU4NmIxNDc2ODhkNmNlY2ZlYTllOTQwZDU6YjgzZjk4Y2JkNzVkNGQ2OGFjNTljZmUwYTYwMzcyYmI=";let je="",Be=["0XXN2jKGfxhnAxzosyjJbd","68BOljqWA5DyNsTXE5qbXr","0g5bk8atjp6cIeN5WbS4B9","230z2ul4DpViQvSdHwkuQr","7oBeEkujcRybm7dCAUAIhG"],Oe=0,Ze={async getAccessToken(){let e=await fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials",{method:"POST",headers:{Authorization:"Basic "+Ue,"Content-Type":"application/x-www-form-urlencoded"}});if(!e)throw new Error("Something went wrong!");return e.json()},async getSongs(e){""==je&&await Le();let t=await fetch("https://api.spotify.com/v1/playlists/"+e+"/tracks?limits=2",{method:"GET",headers:{Authorization:"Bearer "+je}});if(!t)throw new Error("Something went wrong!");return t.json()},async getArtist(e){""==je&&await Le();let t=await fetch("https://api.spotify.com/v1/artists/"+e,{method:"GET",headers:{Authorization:"Bearer "+je}});if(!t)throw new Error("Something went wrong!");return t.json()},async getTopSongsArtist(e){""==je&&await Le();let t=await fetch("https://api.spotify.com/v1/artists/"+e+"/top-tracks?market=US",{method:"GET",headers:{Authorization:"Bearer "+je}});if(!t)throw new Error("Something went wrong!");return t.json()},async getArtistInfos(e){let t=[],r=await Ze.getArtist(e);return r.genres?t.push(r.genres.join()):t.push(""),t.push(r.images[0].url),t},async getArtistDecades(e){let t,r=await this.getTopSongsArtist(e),s="",i=new Date("2000-01-01");return r.tracks.forEach((e=>{t=new Date(e.album.release_date),s+=t<i?"old ":"recent "})),s},async getDataset(){const e=await Ze.getSongs(Be[Oe]);return Oe++,e.items},async createDatabase(){let e,t,r,s,i,a,n,o=await this.getDataset(),c=[];for(let l=0;l<o.length;l++)e=o[l].track.artists[0].id,t=o[l].track.artists[0].name,s=await this.getArtistDecades(e),n=await this.getArtistInfos(e),r=n[0],i=n[1],a={id:e,name:t,period:s,genres:r,img:i},c.push(a);return c=Me(c),JSON.stringify(c)}};async function Le(){je=await Ze.getAccessToken(),je=je.access_token}function Me(e){let t,r=e.length;while(0!=r)t=Math.floor(Math.random()*r),r--,[e[r],e[t]]=[e[t],e[r]];return e}setInterval(Le(),36e5);var Ve=Ze,He={name:"App",components:{QuizHeader:S,QuizFooter:z,QuizFilters:M,QuizImg:$,QuizAnswerField:ne,QuizScore:fe,QuizHistory:ze,QuizReset:Re,UIColorMode:We},async created(){document.title="Guess The Artist",this.getScoreUser(),await this.createDatabase(),this.play()},data(){return{windowWidth:window.innerWidth,artistId:"",artistName:"",artistPeriod:"",artistGenres:"",artistImg:"",score:0,correctRate:0,attemptsNb:0,genre:"all",period:"all",lastArtist:"",lastArtistImg:"",userTheme:"light-theme",database:"",currentDatabase:""}},methods:{handleWindowResize(){this.windowWidth=window.innerWidth},async checkAnswer(e){this.addAttempt();let t=e.message.normalize("NFD").replace(/[\u0300-\u036f]/g,"");this.artistName.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()==t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()&&(this.setLastArtist(),await this.next(),this.addScore()),this.updateCR()},addScore(){this.score++,localStorage.setItem("user-score",this.score)},addAttempt(){this.attemptsNb++,localStorage.setItem("user-attempts",this.attemptsNb)},getScoreUser(){localStorage.getItem("user-attempts",this.attemptsNb)&&(this.score=parseInt(localStorage.getItem("user-score")),this.attemptsNb=parseInt(localStorage.getItem("user-attempts",this.attemptsNb)),this.correctRate=parseInt(localStorage.getItem("user-cr",this.attemptsNb)))},resetScore(){this.score=0,this.attemptsNb=0,this.correctRate=0},updateCR(){this.attemptsNb>0&&(this.correctRate=Math.floor(100*this.score/this.attemptsNb),localStorage.setItem("user-cr",this.correctRate))},async skipArtist(){this.addAttempt(),this.setLastArtist(),await this.next(),this.updateCR()},async getGenreFilter(e){this.genre=e.message,await this.setFilter()},async getPeriodFilter(e){this.period=e.message,await this.setFilter()},async setFilter(){this.currentDatabase=this.merged(this.dbGenreFilter(),this.dbPeriodFilter()),await this.next()},dbPeriodFilter(){if("all"!=this.period){let e=[];return this.database.forEach((t=>{t.period.includes(this.period)&&e.push(t)})),e}return this.database},dbGenreFilter(){if("all"!=this.genre){let e=[];return this.database.forEach((t=>{t.genres.includes(this.genre)&&e.push(t)})),e}return this.database},merged(e,t){let r=[];return e.forEach((e=>{this.dbIncludes(t,e)&&r.push(e)})),0!=r.length?r:("all"!=this.genre&&(document.getElementById(this.genre).checked=!1,this.genre="all",document.getElementById("all-genre").checked=!0),"all"!=this.period&&(document.getElementById(this.period).checked=!1,this.period="all",document.getElementById("all-period").checked=!0),this.database)},dbIncludes(e,t){let r=!1;return e.forEach((e=>{e["name"].toString()===t["name"].toString()&&(r=!0)})),r},setLastArtist(){this.lastArtist=this.artistName,this.lastArtistImg=this.artistImg},async createDatabase(){this.database=await Ve.createDatabase(),this.database=JSON.parse(this.database),this.currentDatabase=this.database},cleanCurrentDb(){this.currentDatabase=this.currentDatabase.filter((function(e){return null!=e}))},setArtistInfos(){this.artistId=this.currentDatabase[0]["id"],this.artistName=this.currentDatabase[0]["name"],this.artistPeriod=this.currentDatabase[0]["period"],this.artistGenres=this.currentDatabase[0]["genres"],this.artistImg=this.currentDatabase[0]["img"]},async next(){delete this.currentDatabase[0],this.cleanCurrentDb(),0==this.currentDatabase.length&&(await this.createDatabase(),await this.setFilter()),this.setArtistInfos()},play(){this.setArtistInfos()}},mounted(){window.addEventListener("resize",this.handleWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.handleWindowResize)}};const Ye=(0,y.Z)(He,[["render",g]]);var qe=Ye;(0,s.ri)(qe).mount("#app")}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,s,i,a){if(!s){var n=1/0;for(h=0;h<e.length;h++){s=e[h][0],i=e[h][1],a=e[h][2];for(var o=!0,c=0;c<s.length;c++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[c])}))?s.splice(c--,1):(o=!1,a<n&&(n=a));if(o){e.splice(h--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[s,i,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,n=s[0],o=s[1],c=s[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(c)var h=c(r)}for(t&&t(s);l<n.length;l++)a=n[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(h)},s=self["webpackChunkimac_progwebvuejs"]=self["webpackChunkimac_progwebvuejs"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(6673)}));s=r.O(s)})();
//# sourceMappingURL=app.fbda9fa4.js.map