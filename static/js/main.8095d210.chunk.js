(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={header:"Header_header__3eIsf","cg-nav":"Header_cg-nav__-W-o7",content:"Header_content__bjMF9","site-title":"Header_site-title__FrTN_","vert-center":"Header_vert-center__35Z61",link:"Header_link__3fFMx",selected:"Header_selected__1EoxR"}},11:function(e,t,a){e.exports={fader:"DropFade_fader__1Pz9u",fade:"DropFade_fade__GKWSj",active:"DropFade_active__1vDHb","fade-container":"DropFade_fade-container__2xzIg","first-text":"DropFade_first-text__38ql3","parent-container":"DropFade_parent-container__2Vsoj"}},12:function(e,t,a){e.exports={main:"Main_main__4WOKJ","title-header":"Main_title-header__VSl15",h2:"Main_h2__nlXJf",figure:"Main_figure__14r4n",image:"Main_image__2qIJl"}},18:function(e,t,a){e.exports={blog:"Blog_blog__3nDMw"}},19:function(e,t,a){e.exports=a.p+"static/media/my-life-through-a-lens-110632-unsplash.bcbb4554.jpg"},20:function(e,t,a){e.exports={dc:"DC_dc__DA9wb"}},21:function(e,t,a){e.exports={blog:"Modules_blog__2TlYQ"}},24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},31:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=(a(29),a(3)),l=a(4),s=a(6),u=a(5),d=a(7),m=(a(31),a(1)),p=a.n(m),f=a(10),_=a.n(f),h=a(45),v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return"string"===typeof e}).filter(function(e){return isNaN(e.charAt(0))}).join(" ")};function b(e,t){var a=v(_.a["vert-center"],_.a["site-title"]),n=v(_.a.link);return r.a.createElement("nav",{className:_.a["cg-nav"]},r.a.createElement("div",{className:_.a.header},r.a.createElement("div",{className:_.a.content},r.a.createElement("h1",{className:a},r.a.createElement(h.a,{to:"/"},"CG")),r.a.createElement("div",{className:n},r.a.createElement(h.a,{to:"/Blog"},"Blog"),r.a.createElement(h.a,{to:"/Modules"},"Modules"),r.a.createElement(h.a,{to:"/DailyCoder"},"Daily\xa0Coder")))))}b.contextTypes={router:p.a.object};var j=b,g=a(18),E=a.n(g),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.blog},"I'm the Blog")}}]),t}(n.Component),y=a(12),w=a.n(y),N=a(23),x=a(11),k=a.n(x),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.df.addEventListener("animationend",this.props.setNextActive)}},{key:"render",value:function(){var e=this,t="".concat(this.props.tagtype);return r.a.createElement(t,{ref:function(t){return e.df=t},className:"".concat(k.a.fader," ").concat(!0===this.props.active?k.a.active:"")},"".concat(this.props.word))}}]),t}(n.Component);D.contextTypes={};var C=D,M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={words:[{word:"Is\xa0Hard\xa0Working",active:!0},{word:"Is\xa0Efficient",active:!1},{word:"Is\xa0Focused",active:!1},{word:"Is\xa0Energetic",active:!1},{word:"Has\xa0a\xa0Pteradactyl",active:!1}],active:0},a.setNextActive=function(){var e=a.state.active,t=e>=a.state.words.length-1?0:e+1,n=Object(N.a)({},a.state);n.words[t].active=!0,n.words[e].active=!1,n.active=t,a.setState(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:k.a["parent-container"]},r.a.createElement("div",{className:k.a["fade-container"]},this.state.words.map(function(t,a){return r.a.createElement(C,{key:a,word:t.word,tagtype:"h2",active:t.active,setNextActive:e.setNextActive})})))}}]),t}(n.Component);M.contextTypes={router:p.a.object};var F=M,H=a(19),I=a.n(H),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:w.a.main},r.a.createElement("h1",{className:w.a["title-header"]},"Chris Goodwin"),r.a.createElement(F,null),r.a.createElement("p",null,"Hello and welcome to my humble website.  I made everything you see before you from scratch.")),r.a.createElement("section",null,r.a.createElement("figure",{className:w.a.figure},r.a.createElement("img",{className:w.a.image,src:I.a,alt:""}))))}}]),t}(n.Component),B=a(20),W=a.n(B),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:W.a.dc},"Daily Coder")}}]),t}(n.Component),T=a(21),G=a.n(T),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.blog},"Modules")}}]),t}(n.Component),q=a(47),z=a(48),K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement("main",null,r.a.createElement(q.a,null,r.a.createElement(z.a,{exact:!0,path:"/",component:A}),r.a.createElement(z.a,{path:"/Blog",component:O}),r.a.createElement(z.a,{path:"/Modules",component:S}),r.a.createElement(z.a,{path:"/DailyCoder",component:J}))))}}]),t}(n.Component),P=a(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);o.a.render(r.a.createElement(P.a,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.8095d210.chunk.js.map