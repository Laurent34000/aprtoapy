(this.webpackJsonpata=this.webpackJsonpata||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(7),c=n.n(i),l=(n(12),n(13),n(14),n(2)),r=n(3),o=n(5),d=n(4),j=n(0),p=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={yourapr:"",period:"",total:""},t.handleApr=function(e){t.setState({yourapr:e.target.value})},t.handlePeriod=function(e){t.setState({period:e.target.value})},t.exe=function(e){e.preventDefault(),t.setState({total:100*[Math.pow(1+t.state.yourapr/100/t.state.period,t.state.period)-1]})},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"APR to APY"}),Object(j.jsxs)("form",{class:"row align-items-center",style:{width:"100%",justifyContent:"center"},onSubmit:this.exe,children:[Object(j.jsxs)("div",{style:{display:"contents"},children:[Object(j.jsx)("input",{class:"form-control",type:"text",value:this.state.yourapr,onChange:this.handleApr,style:{width:"200px"}}),Object(j.jsx)("span",{style:{margin:"25px"},children:"% APR compounding"})]}),Object(j.jsxs)("div",{style:{display:"contents"},children:[Object(j.jsxs)("select",{class:"form-select",value:this.state.value,onChange:this.handlePeriod,style:{width:"200px"},children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"1",children:"annualy"}),Object(j.jsx)("option",{value:"2",children:"semester"}),Object(j.jsx)("option",{value:"12",children:"monthly"}),Object(j.jsx)("option",{value:"52",children:"weekly"}),Object(j.jsx)("option",{value:"365",children:"daily"})]})," ",Object(j.jsx)("span",{style:{margin:"25px"},children:"is"})]}),Object(j.jsx)("div",{style:{display:"contents"},children:Object(j.jsx)("button",{class:"btn btn-secondary",style:{padding:"10px"},type:"submit",children:"Calculate"})}),Object(j.jsxs)("p",{children:[isNaN(Number(this.state.total).toFixed(2))?"0.00":Number(this.state.total).toFixed(2)," % APY"]})]})]})}}]),n}(s.Component),h=p,u=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={yourapy:"",period:"",total:""},t.handleApy=function(e){t.setState({yourapy:e.target.value})},t.handlePeriod=function(e){t.setState({period:e.target.value})},t.exe=function(e){e.preventDefault(),t.setState({total:[Math.pow(1+parseInt(t.state.yourapy)/100,1/parseInt(t.state.period))-1]*[100*parseInt(t.state.period)]})},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{paddingTop:"60px"},children:" APY to APR"}),Object(j.jsxs)("form",{class:"row align-items-center",onSubmit:this.exe,style:{width:"100%",justifyContent:"center"},children:[Object(j.jsxs)("div",{style:{display:"contents"},children:[Object(j.jsx)("input",{class:"form-control",type:"text",value:this.state.yourapy,onChange:this.handleApy,style:{width:"200px"}}),Object(j.jsx)("span",{style:{margin:"25px"},children:"% APY compounding"})]}),Object(j.jsxs)("div",{style:{display:"contents"},children:[Object(j.jsxs)("select",{class:"form-select",value:this.state.period,onChange:this.handlePeriod,style:{width:"200px"},children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"1",children:"annual"}),Object(j.jsx)("option",{value:"2",children:"semestre"}),Object(j.jsx)("option",{value:"12",children:"monthly"}),Object(j.jsx)("option",{value:"52",children:"weekly"}),Object(j.jsx)("option",{value:"365",children:"daily"})]}),Object(j.jsx)("span",{style:{margin:"25px"},children:"is"})]}),Object(j.jsx)("div",{style:{display:"contents"},children:Object(j.jsx)("button",{class:"btn btn-secondary",style:{padding:"10px"},type:"submit",children:"Calculate"})}),Object(j.jsxs)("p",{children:[isNaN(Number(this.state.total).toFixed(2))?"0.00":Number(this.state.total).toFixed(2)," % APR"]})]})]})}}]),n}(s.Component),b=u;var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{}),Object(j.jsxs)("main",{className:"App-main",children:[Object(j.jsx)(h,{}),Object(j.jsx)(b,{})]})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.341bf2c6.chunk.js.map