"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[5521],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3050:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"Render-Blocking CSS",date:new Date("2021-04-11T00:00:00.000Z"),cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},l=void 0,u={permalink:"/en/blog/render-blocking-css",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/render-blocking-css.md",source:"@site/blog/render-blocking-css.md",title:"Render-Blocking CSS",description:"\uae30\ubcf8\uc801\uc73c\ub85c CSS\ub294 rendering-blocking resource\uc785\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uac00 \ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c render tree\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 DOM tree \uc640 CSSOM\uc774 \ubaa8\ub450 \ud544\uc694\ud569\ub2c8\ub2e4. CSSOM\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uc9c0 \uc54a\uc558\ub2e4\uba74 render tree\ub3c4 \ub9cc\ub4e4\uc218\uac00 \uc5c6\ub294\uac70\uc8e0.",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"\uc131\ub2a5",permalink:"/en/blog/tags/\uc131\ub2a5"}],readingTime:1.41,truncated:!0,authors:[],frontMatter:{title:"Render-Blocking CSS",date:"2021-04-11T00:00:00.000Z",cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},prevItem:{title:"DOMContentLoaded vs onLoad",permalink:"/en/blog/domcontentloaded-vs-onload"},nextItem:{title:"Resource Priority",permalink:"/en/blog/resource-priority"}},p={authorsImageUrls:[]},s=[],f={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c CSS\ub294 rendering-blocking resource\uc785\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uac00 \ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c render tree\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 DOM tree \uc640 CSSOM\uc774 \ubaa8\ub450 \ud544\uc694\ud569\ub2c8\ub2e4. CSSOM\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uc9c0 \uc54a\uc558\ub2e4\uba74 render tree\ub3c4 \ub9cc\ub4e4\uc218\uac00 \uc5c6\ub294\uac70\uc8e0. ",(0,a.kt)("br",null),"\nCSS\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud574\uc9c8 \ub54c\uae4c\uc9c0(CSSOM\uc774 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c\uae4c\uc9c0)\ub80c\ub354\ub9c1\uc774 \ucc28\ub2e8\ub418\uae30\uc5d0 ",(0,a.kt)("strong",{parentName:"p"},"media type"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"media query"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);