(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(3),r=n.n(i),c=(n(12),n(4)),o=n(5),u=n(7),d=n(6),l=(n(13),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={error:null,isLoaded:!1,data:0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.dataSource).then((function(t){return t.json()})).then((function(e){t.setState({isLoaded:!0,data:e.value.timeSeries[6].values[0].value[0].value})}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"render",value:function(){return Object(l.jsxs)("h1",{classname:"BigInfo-h1",children:[this.props.title,Object(l.jsx)("span",{"class-name":"BigInfo-data",children:this.state.data})]})}}]),n}(s.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{title:"Medina Lake water level: ",dataSource:"https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all"})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.7ee42b02.chunk.js.map