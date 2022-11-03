"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{33:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,i,o=t(861),u=t(885),s=t(757),p=t.n(s),d=t(791),l=t(689),f=t(635),v=t(168),h=t(444),x=t(87),g=(0,h.ZP)(x.OL)(r||(r=(0,v.Z)(["\n  text-decoration: none;\n  color: black;\n  background-color: gray;\n  padding: 8px 16px;\n\n  &.active {\n    color: red;\n    background-color: brown;\n  }\n"]))),m=h.ZP.div(a||(a=(0,v.Z)(["\n  height: 60px;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n"]))),k=h.ZP.div(c||(c=(0,v.Z)(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n"]))),w=(0,h.ZP)(x.OL)(i||(i=(0,v.Z)(["   \n  text-decoration: none;\n  color: black;\n  background-color: gray;\n  padding: 8px 16px;\n"]))),j=t(184),Z=function(){var n,e,t=(0,d.useState)(null),r=(0,u.Z)(t,2),a=r[0],c=r[1],i=(0,l.UO)().movieId,s=(0,l.TH)();if((0,d.useEffect)((function(){var n=function(){var n=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.TP)(i);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]),!a)return null;var v=a.poster_path,h=a.title,x=a.release_date,Z=a.overview,b=a.genres;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k,{children:(0,j.jsx)(w,{to:null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",children:"Go Back"})}),(0,j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(v),alt:"",width:"300"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:h}),(0,j.jsx)("p",{children:x}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:Z}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:b.map((function(n){return(0,j.jsxs)("span",{children:[n.name," "]},n.id)}))})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:"Adittional information"}),(0,j.jsxs)(m,{children:[(0,j.jsx)(g,{to:"cast",name:a.id,children:"Cast"}),(0,j.jsx)(g,{to:"reviews",name:a.id,children:"Reviews"})]})]}),(0,j.jsx)(d.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:(0,j.jsx)(l.j3,{})})]})}},635:function(n,e,t){t.d(e,{Hg:function(){return s},TP:function(){return d},Uk:function(){return f},z1:function(){return p},zv:function(){return l}});var r=t(861),a=t(757),c=t.n(a),i=t(44),o="https://api.themoviedb.org/3/",u="248eab561af730ae2789760eff8bc947",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"trending/movie/day?api_key=").concat(u,"&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"movie/").concat(e,"//reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.3eba2791.chunk.js.map