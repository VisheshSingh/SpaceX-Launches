(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,a,n){e.exports=n.p+"static/media/logo.adbf010c.png"},53:function(e,a,n){e.exports=n(79)},58:function(e,a,n){},70:function(e,a,n){},79:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(41),r=n.n(l),s=(n(58),n(11)),m=n(12),u=n(18),o=n(13),i=n(19),h=n(23),p=n(7),d=n.n(p),E=n(14),b=n(25),g=n.n(b),f=n(42),y=n.n(f),_=n(82);var v=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=(a.launch_year,a.launch_success),r=a.launch_date_local;return c.a.createElement("div",{className:"card card-body my-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:g()({"text-success":l,"text-danger":!l})},t)),c.a.createElement("p",null,"Launch Date:"," ",c.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(_.a,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))};var N=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = SUCCESS"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = FAILURE"))};function k(){var e=Object(h.a)(["\n  query launchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n    }\n  }\n"]);return k=function(){return e},e}var j=d()(k()),O=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(N,null),c.a.createElement(E.Query,{query:j},function(e){var a=e.loading,n=e.error,t=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement("div",null,t.launches.map(function(e){return c.a.createElement(v,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component);function w(){var e=Object(h.a)(["\n  query launchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return w=function(){return e},e}var x=d()(w()),L=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement("div",null,c.a.createElement(E.Query,{query:x,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=t.launch,r=l.mission_name,s=l.launch_year,m=l.launch_success,u=l.flight_number,o=l.rocket,i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",u),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch successful:"," ",c.a.createElement("span",{className:g()({"text-success":m,"text-danger":!m})},m?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement(_.a,{to:"/",component:O,className:"btn btn-secondary my-3"},"Back"))}))}}]),a}(t.Component),D=n(83),Y=n(84),q=n(51),C=n(48),I=n.n(C),R=(n(70),new q.a({uri:"/graphql"})),M=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(E.ApolloProvider,{client:R},c.a.createElement(D.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:I.a,alt:"SpaceX logo",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(Y.a,{exact:!0,path:"/",component:O}),c.a.createElement(Y.a,{exact:!0,path:"/launch/:flight_number",component:L}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.426dd8c5.chunk.js.map