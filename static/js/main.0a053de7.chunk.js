(this["webpackJsonpcoronavirus-help"]=this["webpackJsonpcoronavirus-help"]||[]).push([[0],{73:function(e,t,n){e.exports=n(87)},78:function(e,t,n){},80:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(78),n(32)),i=n.n(s),l=n(39),u=n(35),m=n(133),p=n(134),d=n(128),f=n(135),g=n(129),h=n(130),v=n(136),E=n(127),w=n(51),b=(n(80),n(131)),x=n(132);function y(e){var t=r.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],c=r.a.useState([]),s=Object(u.a)(c,2),m=s[0],p=s[1];r.a.useEffect((function(){var e=!0;return Object(l.a)(i.a.mark((function t(){var n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/ols/apis/completion?gp-access-lib=2.1.6&text=".concat(a,"&type=PositionOfInterest,StreetAddress&terr&maximumResponses=5"),t.next=3,fetch(encodeURI(n));case 3:return r=t.sent,t.next=6,r.json();case 6:o=t.sent,e&&p(o.results);case 8:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[a]);var d=function(e){o(e.target.value)};return r.a.createElement(x.a,{id:"asynchronous-demo",style:{width:"100%"},filterOptions:function(e){return e},getOptionLabel:function(e){return e.fulltext},options:m,noOptionsText:"Adresse non trouv\xe9e",autoComplete:!0,onChange:function(t,n,a){"select-option"===a&&n&&e.onAddressSelected(n)},includeInputInList:!0,renderInput:function(e){return r.a.createElement(b.a,Object.assign({},e,{placeholder:"Tapez votre adresse ici",variant:"outlined",onChange:d}))}})}var k=n(124),j=n(126),O=n(53),S=n.n(O);function A(){return r.a.createElement(k.a,{elevation:3,style:{padding:"10px"}},r.a.createElement(j.a,{variant:"caption",display:"block",gutterBottom:!0,style:{textAlign:"left"}},r.a.createElement(S.a,{style:{color:w.a[500],verticalAlign:"middle"}}),"Zone pi\xe9tonne fournie par IGN"),r.a.createElement(j.a,{variant:"caption",display:"block",gutterBottom:!0,style:{textAlign:"left"}},r.a.createElement(S.a,{style:{color:E.a[500],verticalAlign:"middle"}}),"Rayon d'un kilom\xe8tre autour de l'adresse"))}var I=function(){var e=r.a.useState(null),t=Object(u.a)(e,2),n=t[0],a=t[1],o=r.a.useState([]),c=Object(u.a)(o,2),s=c[0],b=c[1];return r.a.useEffect((function(){var e=!0;return n&&Object(l.a)(i.a.mark((function t(){var a,r,o,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/isochrone/isochrone.json?gp-access-lib=2.1.6&location=".concat(n.lng,",").concat(n.lat,"&smoothing=true&holes=false&reverse=false&method=distance&distance=1000&graphName=Pieton&exclusions&srs=EPSG:4326"),t.next=3,fetch(encodeURI(a));case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:o=t.sent,c=o.wktGeometry.split("((")[1].split(")")[0].split(",").map((function(e){return e.trim().split(" ")})),e&&b(c.map((function(e){return{lng:Number(e[0]),lat:Number(e[1])}})));case 10:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[n]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"locationInput"},r.a.createElement(v.a,{style:{backgroundColor:"white",width:"50%"}},r.a.createElement(y,{onAddressSelected:function(e){a({lat:e.y,lng:e.x})}}))),r.a.createElement(m.a,{center:n||{lat:48.866667,lng:2.333333},zoom:13,animate:!0},r.a.createElement(p.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:n},r.a.createElement(f.a,null,"Vous \xeates ici !")),s.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{center:n,color:E.a[500],fillColor:E.a[500],radius:1e3}),r.a.createElement(h.a,{color:w.a[500],positions:s})))),r.a.createElement("div",{className:"legend"},r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.0a053de7.chunk.js.map