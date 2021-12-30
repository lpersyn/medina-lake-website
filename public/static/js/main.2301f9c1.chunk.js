(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),i=n(7),a=n.n(i),c=(n(12),n(13),n(2)),o=n(3),u=n(5),l=n(4),d=(n(14),n(0)),h=[{name:"Spillway Elevation",getData:function(e){return"1,064.20 ft"}},{name:"Current Surface Elevation",getData:function(e){return e.value.timeSeries[10].values[0].value[0].value+" ft"}},{name:"Feet Low",getData:function(e){return(1064.2-e.value.timeSeries[6].values[0].value[0].value).toFixed(2)+" ft"}},{name:"Max Capacity",getData:function(e){return"254,823 acre-ft"}},{name:"Current Capacity",getData:function(e){return e.value.timeSeries[5].values[0].value[0].value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")+" acre-ft"}},{name:"Percent Full",getData:function(e){return(e.value.timeSeries[5].values[0].value[0].value/254823*100).toFixed(2)+"%"}}],j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={isLoaded:!1,data:0,error:!1},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://waterservices.usgs.gov/nwis/dv/?format=json&sites=08179500&siteStatus=all").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:t,error:!1})}),(function(t){e.setState({isLoaded:!0,error:!0,data:null})}))}},{key:"render",value:function(){for(var e=[],t=0;t<h.length;t++)e.push(Object(d.jsx)("div",{className:"col-md",children:Object(d.jsx)(b,{title:h[t].name,data:this.state.isLoaded&&!this.state.error?h[t].getData(this.state.data):"---"})}));return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("div",{className:"row justify-content-evenly",children:e})})}}]),n}(s.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"header-info row",children:[Object(d.jsx)("div",{className:"col justify-content-center",children:this.props.title}),Object(d.jsx)("div",{className:"w-100 d-none d-md-block"}),Object(d.jsx)("div",{className:"col justify-content-center",children:this.props.data})]})}}]),n}(s.a.Component),m=j,f=(n(16),"00060"),v="00065",O="00054",x="62614",g=[{sitenumber:"08179500",location:"Medina Lake Dam",getSE:function(e){return e[this.sitenumber][x]+" ft"},getRC:function(e){return e[this.sitenumber][O]}},{sitenumber:"08180010",location:"Diversion Lake",getSE:function(e){return e[this.sitenumber][x]},getRC:function(e){return e[this.sitenumber][O]}}],p=[{sitenumber:"08178861",location:"North Prong",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}},{sitenumber:"08178871",location:"West Prong",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}},{sitenumber:"0817887350",location:"Medina",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}},{sitenumber:"08178880",location:"Bandera",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}},{sitenumber:"08178980",location:"English Crossing",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}},{sitenumber:"08179110",location:"Red Bluff Creek",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}},{sitenumber:"08180500",location:"South of Diversion Lake",getGH:function(e){return e[this.sitenumber][v]},getFR:function(e){return e[this.sitenumber][f]}}],y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"map-row row",children:[Object(d.jsx)("div",{className:"col-md-7",children:Object(d.jsx)(S,{})}),Object(d.jsx)("div",{className:"col-md-5",children:Object(d.jsx)(N,{})})]})}}]),n}(s.a.Component),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"map-container"})}}]),n}(s.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={isLoaded:!1,data:0,error:!1},r}return Object(o.a)(n,[{key:"cleanData",value:function(e){e=e.value.timeSeries;for(var t={},n=0;n<e.length;n++){var r=e[n].name.split(":"),s=r[1],i=r[2];Object.keys(t).includes(s)?(t[s][i]=e[n].values[0].value[0].value,t[s].name=e[n].sourceInfo.siteName):(t[s]={},t[s][i]=e[n].values[0].value[0].value,t[s].name=e[n].sourceInfo.siteName)}return t}},{key:"componentDidMount",value:function(){var e=this;fetch("https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08179500,08180010,08178861,08178871,0817887350,08178880,08178980,08179110,08180500&siteStatus=all").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:e.cleanData(t),error:!1})}),(function(t){e.setState({isLoaded:!0,error:!0,data:null})}))}},{key:"render",value:function(){for(var e=[],t=0;t<g.length;t++)e.push(Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:g[t].sitenumber}),Object(d.jsx)("td",{children:g[t].location}),Object(d.jsx)("td",{children:this.state.isLoaded&&!this.state.error?g[t].getSE(this.state.data):"---"}),Object(d.jsx)("td",{children:this.state.isLoaded&&!this.state.error?g[t].getRC(this.state.data):"---"})]}));var n=[];for(t=0;t<p.length;t++)n.push(Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:p[t].sitenumber}),Object(d.jsx)("td",{children:p[t].location}),Object(d.jsx)("td",{children:this.state.isLoaded&&!this.state.error?p[t].getGH(this.state.data):"---"}),Object(d.jsx)("td",{children:this.state.isLoaded&&!this.state.error?p[t].getFR(this.state.data):"---"})]}));return Object(d.jsxs)("div",{className:"map-info",children:[Object(d.jsx)("h3",{children:"Reservoir Data"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Site #"}),Object(d.jsx)("th",{scope:"col",children:"Location"}),Object(d.jsx)("th",{scope:"col",children:"Surface Elevation"}),Object(d.jsx)("th",{scope:"col",children:"Reservoir Storage"})]})}),Object(d.jsx)("tbody",{children:e})]}),Object(d.jsx)("h3",{children:"River Data"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Site #"}),Object(d.jsx)("th",{scope:"col",children:"Location"}),Object(d.jsx)("th",{scope:"col",children:"Gauge Height"}),Object(d.jsx)("th",{scope:"col",children:"Flow Rate"})]})}),Object(d.jsx)("tbody",{children:n})]})]})}}]),n}(s.a.Component),w=y;a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsxs)("div",{className:"main-container container h-100 d-flex flex-column justify-content-evenly",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"row flex-grow-1",children:Object(d.jsx)(w,{})})]})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2301f9c1.chunk.js.map