"use strict";(self.webpackChunkreact_beer_recipes_zustand_ts=self.webpackChunkreact_beer_recipes_zustand_ts||[]).push([[285],{5285:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t,c,a,u=r(4165),i=r(5861),s=r(2791),o=r(7689),p=r(4917),f=r(5053),l=r(168),d=r(5867),g=d.ZP.ul(t||(t=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  gap: 15px;\n"]))),v=r(1087),x=d.ZP.li(c||(c=(0,l.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 220px;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),h=(0,d.ZP)(v.rU)(a||(a=(0,l.Z)(["\n  text-decoration: none;\n"]))),Z=r(184),b=function(e){var n=e.recipes,r=e.location;return(0,Z.jsx)(Z.Fragment,{children:n.map((function(e){var n=e.id,t=e.name;return(0,Z.jsx)(x,{children:(0,Z.jsx)(h,{className:"link",to:"/".concat(n),state:{from:r},children:(0,Z.jsx)("p",{children:t})})},n)}))})},m=function(e){var n=e.recipes,r=e.location;return(0,Z.jsx)(g,{children:(0,Z.jsx)(b,{recipes:n,location:r})})},k=function(){var e=(0,p.Z)((function(e){return e.beerRecipes})),n=(0,p.Z)((function(e){return e.currentPage})),r=(0,p.Z)((function(e){return e.setBeerRecipes})),t=(0,p.Z)((function(e){return e.setCurrentPage})),c=(0,o.TH)();return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,u.Z)().mark((function e(n){var c,a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.y)(n);case 3:c=e.sent,a=c.data,i=c.currentPage,a&&(r(a),t(i)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();e(n)}),[n,r,t]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(m,{recipes:e,location:c}),(0,Z.jsx)("button",{onClick:function(){t(n-1)},children:"prevPage"}),(0,Z.jsx)("button",{onClick:function(){t(n+1)},children:"nextPage"})]})}},5053:function(e,n,r){r.d(n,{f:function(){return s},y:function(){return i}});var t=r(4165),c=r(5861),a=r(1243),u="https://api.punkapi.com/v2/beers/",i=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(n){var r,c,i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={page:n,per_page:15},e.next=3,a.Z.get(u,{params:r});case 3:return c=e.sent,i=c.data,s=c.config.params.page,e.abrupt("return",{data:i,currentPage:s});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(u+n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4917:function(e,n,r){var t=r(5847),c=r(7416),a=r(768),u=(0,t.Ue)()((0,a.mW)((0,c.n)((function(e){return{beerRecipes:[],favoriteBeerRecipes:[],beerRecipe:[],currentPage:1,isLoading:!1,errors:[],setBeerRecipes:function(n){return e({beerRecipes:n})},setBeerRecipe:function(n){return e({beerRecipe:n})},setCurrentPage:function(n){return e({currentPage:n})},setLoading:function(n){return e({isLoading:n})},setErrors:function(n){return e({errors:n})}}}))));n.Z=u}}]);
//# sourceMappingURL=285.936ca368.chunk.js.map