(this["webpackJsonpreact-antd-admin-template"]=this["webpackJsonpreact-antd-admin-template"]||[]).push([[10],{130:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),r=n.n(c),i=n(2),l=n(224),s=n(226),o=n(229),u=n(230),d=(n(75),n(3)),j=n(6),f=n(68),b=n(191);function h(e,t,n){for(var a=[],c=0;c<e.length;c+=1){var r=e[c];a.push(Object(j.a)(Object(j.a)({},r),{},{auth:"undefined"!==typeof r.auth?r.auth:n})),r.children&&t&&a.push.apply(a,Object(d.a)(h(r.children,t,n)))}return a}var O=f.a.filter((function(e){return"/"===e.path})).length>0?h(f.a,!0,!1):[];var p=n(147),m=n(16);var v=function(e){Object(i.m)();var t=O.find((function(e){var t=e.path;return t=t.replace(/\*/,""),Object(b.a)(t).exec(window.location.pathname)}));return Object(p.a)()?null!==t&&void 0!==t&&t.redirect?Object(m.jsx)(i.a,{to:t.redirect}):t?Object(m.jsx)(m.Fragment,{children:e.children}):Object(m.jsx)(i.a,{to:"/error/404"}):Object(m.jsx)(i.a,{to:"/login"})},x=n(133),g=n.n(x),y=(n(192),function(e){var t=e.name,n=e.onClick,a=e.className,c=void 0===a?"":a,r=e.color,i=void 0===r?"":r,l=e.size,s=void 0===l?"":l,o=e.style,u=g()("icon",c);return"string"===typeof t?Object(m.jsx)("svg",{onClick:n,className:u,style:Object(j.a)({color:i,fontSize:s+"px"},o),"aria-hidden":"true",children:Object(m.jsx)("use",{xlinkHref:"#icon-".concat(t)})}):t}),k=function e(t){for(var n=[],a=0;a<t.length;a++)t[a].meta.menu&&n.push({key:t[a].path,icon:t[a].meta.icon?r.a.createElement(y,{name:t[a].meta.icon,size:18}):"",children:t[a].children&&e(t[a].children),label:t[a].meta.title});return n.length>0?n:null},K=(n(193),l.a.Header),N=l.a.Sider,S=l.a.Content;t.default=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],d=t[1],j=Object(i.m)(),b=Object(i.o)(),h=Object(c.useMemo)((function(){return function(e){for(var t={defaultSelectedKeys:[e],defaultOpenKeys:[]},n=e,c=5;n&&c>0;){var r=n.match(/(\/\w+)+/);if(r&&r.length>=2){var i=Object(a.a)(r,2),l=i[0],s=i[1];(n=l.replace(s,""))&&t.defaultOpenKeys.push(n)}else n=r;c--}return t}(j.pathname)}),[]),O=h.defaultSelectedKeys,p=h.defaultOpenKeys,x=Object(c.useMemo)((function(){return k(f.b[0].children)}),[]);return Object(m.jsxs)(l.a,{className:"main_layout",children:[Object(m.jsxs)(N,{trigger:null,collapsible:!0,collapsed:n,children:[Object(m.jsx)("div",{className:"logo"}),Object(m.jsx)(s.a,{theme:"dark",mode:"inline",defaultSelectedKeys:O,defaultOpenKeys:p,items:x,onSelect:function(e){var t=e.key;return b(t)}})]}),Object(m.jsxs)(l.a,{className:"site-layout",children:[Object(m.jsx)(K,{style:{padding:0,background:"#fff"},children:r.a.createElement(n?o.a:u.a,{className:"trigger",onClick:function(){return d(!n)}})}),Object(m.jsx)(S,{style:{margin:"24px 16px",padding:24,background:"#fff",overflowY:"scroll"},children:Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)("div",{}),children:Object(m.jsx)(v,{children:Object(m.jsx)(i.b,{})})})})]})]})}},147:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(160),c=n.n(a),r=n(65),i=function(e){return c.a.set(r.a.TOKEN_KEY,e)},l=function(){return c.a.get(r.a.TOKEN_KEY)||""}},192:function(e,t,n){},193:function(e,t,n){}}]);