"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[9532],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(n),g=o,m=s["".concat(u,".").concat(g)]||s[g]||f[g]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8440:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return g}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"Throttling & Debouncing",date:new Date("2021-05-03T00:00:00.000Z"),cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},u=void 0,l={permalink:"/en/blog/throttling-debouncing",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/throttling-debouncing.md",source:"@site/blog/throttling-debouncing.md",title:"Throttling & Debouncing",description:"Throttle\uacfc Debounce\ub294 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \uc774\ubca4\ud2b8\ub098 \ud568\uc218\uc758 \uc2e4\ud589 \ube48\ub3c4\ub97c \uc904\uc5ec \uc131\ub2a5\uc0c1\uc5d0 \uc774\uc810\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"May 3, 2021",tags:[{label:"\uc131\ub2a5",permalink:"/en/blog/tags/\uc131\ub2a5"}],readingTime:2.63,truncated:!0,authors:[],frontMatter:{title:"Throttling & Debouncing",date:"2021-05-03T00:00:00.000Z",cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},prevItem:{title:"Execution Context",permalink:"/en/blog/execution-context"},nextItem:{title:"Use WebP images",permalink:"/en/blog/use-webp-images"}},p={authorsImageUrls:[]},f=[],s={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Throttle\uacfc Debounce\ub294 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \uc774\ubca4\ud2b8\ub098 \ud568\uc218\uc758 \uc2e4\ud589 \ube48\ub3c4\ub97c \uc904\uc5ec \uc131\ub2a5\uc0c1\uc5d0 \uc774\uc810\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."))}g.isMDXComponent=!0}}]);