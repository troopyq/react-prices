(this["webpackJsonpreact-prices"]=this["webpackJsonpreact-prices"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(6),i=t.n(r),s=t(7),o=t(5),a=t(0);var l=function(e){var n=e.removePrice,t=(e.id,e.el);return Object(a.jsx)("div",{onClick:function(){return n(t.id)},className:"num",children:t.val})};t(13);function u(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(""),u=Object(o.a)(i,2),j=u[0],b=u[1],d=Object(c.useRef)(null);function h(){j&&(console.log(t.length),t.length>=24||(r((function(e){return[].concat(Object(s.a)(e),[{id:""+Math.floor(1e5*Math.random())+(new Date).getTime().toString().slice(-5),val:+j}])})),b(""),console.log(d.current.focus())))}function f(e){r((function(n){return n.filter((function(n){return n.id!=e}))}))}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("h1",{children:"\u0421\u043e\u0437\u0434\u0430\u0439 \u0446\u0435\u043d\u043d\u0438\u043a\u0438!"}),Object(a.jsx)("h3",{children:"\u0427\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0446\u0435\u043d\u043d\u0438\u043a, \u043a\u043b\u0438\u043a\u043d\u0438 \u043d\u0430 \u043d\u0435\u0433\u043e"}),Object(a.jsxs)("div",{className:"inp",children:[Object(a.jsx)("input",{onKeyDown:function(e){return"Enter"===e.code?h():null},ref:d,value:j,onChange:function(e){return function(e){e.target.value.length<=4&&b(e.target.value)}(e)},type:"number"}),Object(a.jsx)("button",{onClick:h,className:"btn btn_add",children:"+"})]}),Object(a.jsx)("button",{onClick:function(){window.print()},className:"btn btn_print",children:"\u041f\u0435\u0447\u0430\u0442\u044c"}),Object(a.jsx)("button",{onClick:function(){r([])},className:"btn btn_print",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435"})]}),Object(a.jsx)("div",{className:"price",children:t.map((function(e,n){return Object(a.jsx)(l,{removePrice:f,el:e,id:n},e.id)}))})]})}var j=document.getElementById("root");i.a.render(Object(a.jsx)(c.StrictMode,{children:Object(a.jsx)(u,{})}),j)}},[[14,1,2]]]);
//# sourceMappingURL=main.e994362b.chunk.js.map