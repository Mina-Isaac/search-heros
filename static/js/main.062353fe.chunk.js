(this["webpackJsonpreact-redux-exercise"]=this["webpackJsonpreact-redux-exercise"]||[]).push([[0],{35:function(e){e.exports=JSON.parse('{"a":[{"id":1,"name":"Barry Allen","alias":"@Flash"},{"id":2,"name":"Bruce Wayne","alias":"@Batman"},{"id":3,"name":"Clark Kent","alias":"@Superman"},{"id":4,"name":"Diana of Themyscira","alias":"@WonderWoman"},{"id":5,"name":"Arthur Curry","alias":"@Aquaman"},{"id":6,"name":"Harold Jordan","alias":"@GreenLantern"},{"id":7,"name":"Oliver Queen","alias":"@GreenArrow"},{"id":8,"name":"Dinah Lance","alias":"@BlackCanary"},{"id":9,"name":"Dick Grayson","alias":"@Nightwing"},{"id":10,"name":"Selina Kyle","alias":"@Catwoman"},{"id":11,"name":"Helena Bertinelli","alias":"@Huntress"},{"id":12,"name":"Slade Wilson","alias":"@Deathstroke"}]}')},37:function(e,a,t){e.exports=t(49)},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),i=t.n(c),u=t(16),l=t(10),s=t(55),o=t(35);var m=Object(l.c)({loading:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SEARCH_REQUEST":return!0;case"SEARCH_SUCCESS":case"SEARCH_FAILURE":default:return!1}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_SUCCESS":return a.result;case"SEARCH_FAILURE":return[];default:return e}}}),d=t(25),f=t(36),E=t(52),p=t(53),S=t(24),b=t(54),h=function(e){return{type:"SEARCH_SUCCESS",result:e}},v=Object(s.a)({dependencies:function(e){var a=o.a.filter((function(a){var t=!1;return Object.keys(a).forEach((function(n){a[n].toString().toLowerCase().includes(e.toLowerCase())&&(t=!0)})),t}));return new Promise((function(e){setTimeout((function(){e(a)}),Math.ceil(500*Math.random()))}))}}),O=Object(l.d)(Object(l.a)(v)),C=Object(l.e)(m,O);v.run((function(e,a,t){return e.pipe(Object(E.a)((function(e){return"SEARCH_REQUEST"===e.type})),Object(p.a)((function(e){return Object(d.a)(t(e.query)).pipe(Object(S.a)(h),Object(b.a)((function(e){return Object(f.a)(function(e){return{type:"SEARCH_FAILURE",error:e}}(e))})))})))}));var j=C,y=t(26);t(48);var A=function(){var e=Object(u.b)(),a=Object(n.useState)(""),t=Object(y.a)(a,2),c=t[0],i=t[1],l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=Object(n.useState)(e),r=Object(y.a)(t,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){i(e)}),a);return function(){clearTimeout(t)}}),[e,a]),c}(c,500),s=Object(u.c)((function(e){return e.result})),o=Object(u.c)((function(e){return e.loading}));Object(n.useEffect)((function(){e(function(e){return{type:"SEARCH_REQUEST",query:e}}(l))}),[l]);var m=Object(n.useMemo)((function(){return s.map((function(e,a){return r.a.createElement("div",{className:"result",key:a},e.name+" ",r.a.createElement("span",{className:"alias"},e.alias))}))}),[s]);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Searchable heroes"),r.a.createElement("br",null),r.a.createElement("div",{className:"Wrapper"},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{placeholder:"Search DC heros by name, alias or ID",className:"input",type:"text",value:c,onChange:function(e){i(e.target.value)}}),o&&r.a.createElement("div",{class:"icon-container"},r.a.createElement("i",{class:"loader"}))),m))};i.a.render(r.a.createElement(u.a,{store:j},r.a.createElement(A,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.062353fe.chunk.js.map