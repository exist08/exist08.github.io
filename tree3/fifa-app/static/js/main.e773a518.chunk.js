(this["webpackJsonpfifa-app"]=this["webpackJsonpfifa-app"]||[]).push([[0],{28:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(19),r=t.n(c),n=(t(28),t(13)),l=t.n(n),i=t(16),j=t(7),o=t(2),b=t(10),d=t(23),u=t(0);var h=function(e){e.match;var a=e.players,t=Object(o.f)().name,s=a.filter((function(e){return e.Name.replace(" ","+")===t}))[0];console.log(s);var c={labels:["Overall","Crossing","Finishing","Heading Accuracy","Short Passing","Volleys"],datasets:[{label:"# of Stats",data:[s.Overall,s.Crossing,s.Finishing,s.HeadingAccuracy,s.ShortPassing,s.Volleys],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1}]};return Object(u.jsx)("div",{className:"player-details",children:Object(u.jsxs)("div",{className:"player-details-container",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsxs)(b.b,{to:"/",style:{textDecoration:"none",color:"#b8b8b8"},children:[Object(u.jsx)("i",{className:"fa-solid fa-arrow-left"}),"Home"]}),Object(u.jsxs)("a",{href:"#",style:{textDecoration:"none",color:"#b8b8b8"},children:[Object(u.jsx)("i",{className:"fa-solid fa-question"}),"Help"]})]}),Object(u.jsx)("div",{className:"mid",children:Object(u.jsx)("h1",{className:"player-name",children:s.Name})}),Object(u.jsx)("div",{className:"right"})]}),Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)("div",{className:"player-graph",children:Object(u.jsx)(d.a,{data:c,options:{scale:{ticks:{beginAtZero:!0}}}})}),Object(u.jsxs)("div",{className:"player-stats",children:[Object(u.jsx)("div",{className:"head",children:Object(u.jsxs)("span",{children:["Overall ",s.Overall," "]})}),Object(u.jsxs)("div",{className:"sub-stats",children:[Object(u.jsxs)("p",{children:["Age : ",Object(u.jsx)("span",{className:"stats-value",children:s.Age})," "]}),Object(u.jsxs)("p",{children:["Height : ",Object(u.jsx)("span",{className:"stats-value",children:s.Height})," "]}),Object(u.jsxs)("p",{children:["Weight : ",Object(u.jsx)("span",{className:"stats-value",children:s.Weight})," "]}),Object(u.jsxs)("p",{children:["Preferred Foot :"," ",Object(u.jsx)("span",{className:"stats-value",children:s.PreferredFoot})," "]}),Object(u.jsxs)("p",{children:["Position :"," ",Object(u.jsx)("span",{className:"stats-value",children:s.Position})," "]}),Object(u.jsxs)("p",{children:["Jersey Number :"," ",Object(u.jsx)("span",{className:"stats-value",children:s.JerseyNumber})," "]}),Object(u.jsxs)("p",{children:["Club : ",Object(u.jsx)("span",{className:"stats-value",children:s.Club})," "]}),Object(u.jsxs)("p",{children:["Value : ",Object(u.jsx)("span",{className:"stats-value",children:s.Value})," "]}),Object(u.jsxs)("p",{children:["Contract :"," ",Object(u.jsx)("span",{className:"stats-value",children:s.ContractValidUntil})," "]}),Object(u.jsxs)("p",{children:["Work Rate :"," ",Object(u.jsx)("span",{className:"stats-value",children:s.WorkRate})," "]})]})]})]})]})})};var p=function(e){var a=e.search,t=e.players.filter((function(e){return e.Name.toLowerCase().includes(a)}));return Object(u.jsx)("div",{className:"player-list",children:t.map((function(e,a){console.log(e.Name);var t=e.Name.replace(" ","+");return Object(u.jsx)("h2",{children:Object(u.jsxs)(b.b,{to:"/player/".concat(t),children:[e.Name," ",Object(u.jsx)("span",{children:e.Overall})]})},a)}))})};var O=function(e){e.query;var a=e.setQuery,t=e.players,c=Object(s.useState)(""),r=Object(j.a)(c,2),n=r[0],l=r[1],i=Object(s.useState)("name"),o=Object(j.a)(i,2),b=o[0],d=o[1];return Object(u.jsx)("div",{className:"search-page",children:Object(u.jsx)("div",{className:"search-page-container",children:Object(u.jsxs)("div",{className:"search-box-container",children:[Object(u.jsx)("h1",{children:"FIFA DATABASE"}),Object(u.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(n),console.log(n)}(e)},children:Object(u.jsxs)("div",{className:"search-box",children:[Object(u.jsx)("input",{type:"text",value:n,onChange:function(e){return function(e){l(e.target.value)}(e)},autoComplete:"off"}),Object(u.jsxs)("select",{name:"searcher",id:"search",value:b,onChange:function(e){return function(e){d(e.target.value),console.log(e.target.value)}(e)},children:[Object(u.jsx)("option",{value:"name",children:"Name"}),Object(u.jsx)("option",{value:"club",children:"Club"}),Object(u.jsx)("option",{value:"nation",children:"Nation"})]})]})}),n&&Object(u.jsx)(p,{search:n,filter:b,players:t})]})})})},x=t(22),m=t.n(x);var v=function(){var e=Object(s.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];function r(){return(r=Object(i.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m.a,e.next=3,n();case 3:return e.t1=e.sent,e.t2={header:!0},a=e.t0.parse.call(e.t0,e.t1,e.t2),c(a.data),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(l.a.mark((function e(){var a,t,s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/data.csv");case 2:return a=e.sent,t=a.body.getReader(),e.next=6,t.read();case 6:return s=e.sent,c=new TextDecoder("utf-8"),r=c.decode(s.value),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]);var p=Object(s.useState)(""),x=Object(j.a)(p,2),v=x[0],f=x[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(o.c,{}),Object(u.jsx)(o.a,{path:"/",exact:!0,children:Object(u.jsx)(O,{query:v,setQuery:f,players:t})}),Object(u.jsx)(o.a,{path:"/player/:name",children:Object(u.jsx)(h,{players:t})})]})})};r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e773a518.chunk.js.map