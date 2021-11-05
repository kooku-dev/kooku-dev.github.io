"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[5341],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,b=s["".concat(o,".").concat(g)]||s[g]||m[g]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={title:"Use WebP images",date:new Date("2021-05-03T00:00:00.000Z"),cover:"",tags:["web"]},o=void 0,u={permalink:"/blog/use-webp-images",editUrl:"https://github.com/kooku-dev/kooku-dev.github.io/edit/main/blog/blog/use-webp-images.md",source:"@site/blog/use-webp-images.md",title:"Use WebP images",description:"\uad6c\uae00\uc774 Webp\ub97c \ub9cc\ub4e4\uc5b4\uc11c \ubb34\ub8cc\ub85c \ubfcc\ub9ac\ub294 \uc774\uc720\ub294 \ub3c8 \ub54c\ubb38\uc774\ub2e4. \uad6c\uae00 \ud63c\uc790\uc11c \uc5c4\uccad\ub09c \uc778\ud130\ub137 \ud2b8\ub798\ud53d\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370, \uc774\ubbf8\uc9c0 \ud3ec\ub9f7\ub9cc \ucd5c\uc801\ud654\ud574\ub3c4 \uc11c\ubc84 \ud2b8\ub798\ud53d\uc774 \ud06c\uac8c \uc904\uc5b4 \uc11c\ubc84\ube44\ub97c \uc544\ub084 \uc218 \uc788\ub2e4. \uac8c\ub2e4\uac00 \uc778\ud130\ub137 \uc18d\ub3c4\uac00 \ube68\ub77c\uc9c8\uc218\ub85d \uad11\uace0 \ub9e4\ucd9c\ub3c4 \ub298\uc5b4\ub098\uae30 \ub54c\ubb38\uc5d0 \uad6c\uae00\uc740 \ud56d\uc0c1 \uc778\ud130\ub137 \uc18d\ub3c4\ub97c \uc62c\ub9ac\ub824\uace0 \ub178\ub825\ud55c\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"May 3, 2021",tags:[{label:"web",permalink:"/blog/tags/web"}],readingTime:4.32,truncated:!1,authors:[],prevItem:{title:"Throttling & Debouncing",permalink:"/blog/throttling-debouncing"},nextItem:{title:"React v17",permalink:"/blog/react-v17"}},c={authorsImageUrls:[]},m=[{value:"Convert images to WebP",id:"convert-images-to-webp",children:[{value:"Use cwebp",id:"use-cwebp",children:[],level:3},{value:"Use Imagemin",id:"use-imagemin",children:[],level:3}],level:2},{value:"Serve WebP images",id:"serve-webp-images",children:[{value:"Before:",id:"before",children:[],level:4},{value:"After:",id:"after",children:[],level:4},{value:"picture",id:"picture",children:[],level:3},{value:"source",id:"source",children:[],level:3},{value:"image",id:"image",children:[],level:3}],level:2},{value:"Verify WebP usage",id:"verify-webp-usage",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],s={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uad6c\uae00\uc774 Webp\ub97c \ub9cc\ub4e4\uc5b4\uc11c \ubb34\ub8cc\ub85c \ubfcc\ub9ac\ub294 \uc774\uc720\ub294 \ub3c8 \ub54c\ubb38\uc774\ub2e4. \uad6c\uae00 \ud63c\uc790\uc11c \uc5c4\uccad\ub09c \uc778\ud130\ub137 \ud2b8\ub798\ud53d\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370, \uc774\ubbf8\uc9c0 \ud3ec\ub9f7\ub9cc \ucd5c\uc801\ud654\ud574\ub3c4 \uc11c\ubc84 \ud2b8\ub798\ud53d\uc774 \ud06c\uac8c \uc904\uc5b4 \uc11c\ubc84\ube44\ub97c \uc544\ub084 \uc218 \uc788\ub2e4. \uac8c\ub2e4\uac00 \uc778\ud130\ub137 \uc18d\ub3c4\uac00 \ube68\ub77c\uc9c8\uc218\ub85d \uad11\uace0 \ub9e4\ucd9c\ub3c4 \ub298\uc5b4\ub098\uae30 \ub54c\ubb38\uc5d0 \uad6c\uae00\uc740 \ud56d\uc0c1 \uc778\ud130\ub137 \uc18d\ub3c4\ub97c \uc62c\ub9ac\ub824\uace0 \ub178\ub825\ud55c\ub2e4."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://namu.wiki/w/WebP"},"WebP \uc81c\uc791 \ubc30\uacbd :: \ub098\ubb34\uc704\ud0a4"))),(0,l.kt)("p",null,"webp \ud3ec\uba67\uc758 \uc774\ubbf8\uc9c0\ub294 JPEG \ubc0f PNG \uc774\ubbf8\uc9c0\ubcf4\ub2e4 \uc791\uc73c\uba70 \uc77c\ubc18\uc801\uc73c\ub85c \ud30c\uc77c\ud06c\uae30\uac00 25~35% \uc791\uc2b5\ub2c8\ub2e4. \uc774\ub85c\uc778\ud574 First load times\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"YouTube\ub294 Thumbnail \uc774\ubbf8\uc9c0\ub97c WebP\ub85c \uc804\ud658\ud55c \uacb0\uacfc \ud398\uc774\uc9c0\ub85c\ub4dc \uc18d\ub3c4\uac00 10% \ube68\ub77c\uc84c\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Facebook\uc740 WebP\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc804\ud658\ud588\uc744 \ub54c JPEG\uc640 \ube44\uad50\ud588\uc744 \uacbd\uc6b0 25 ~ 35%, PNG\uc640 \ube44\uad50\ud588\uc744 \uacbd\uc6b0 80%\uc758 \ud30c\uc77c\ud06c\uae30 \uc808\uac10\uc744 \uacbd\ud5d8\ud588\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"WebP\ub294 JPEG, PNG \ubc0f GIF \uc774\ubbf8\uc9c0\ub97c \uc644\uc804\ud788 \ub300\uccb4\ud560 \uc218 \uc788\uc73c\uba70, lossless and lossy compression \uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"lossless compression")," \uc740 \ub370\uc774\ud130\uc758 \uc190\uc2e4\uc774 \ubc1c\uc0dd\ud558\uc9c0\uc54a\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"lossy compression"),"\ub294 \ud30c\uc77c\ud06c\uae30\uac00 \uc904\uc5b4\ub4e4\uace0 \uc774\ubbf8\uc9c0 \ud654\uc9c8\uc744 \ub5a8\uc5b4\uc9c0\uac8c \ud558\ub294 \uc555\ucd95\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"convert-images-to-webp"},"Convert images to WebP"),(0,l.kt)("p",null,"\uc774\ubbf8\uc9c0\ub97c WebP\ub85c \ubcc0\ud658\ud560 \ub54c \ubcf4\ud1b5 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/speed/webp/docs/using"},"cwebp command-line tool")," \uc640 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/imagemin/imagemin-webp"},"Imagemin WebP plugin"),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. Imagemin WebP plugin\uc740 Webpack\uc774\ub098 Gulp\uc640 \uac19\uc740 build tools\ub97c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd5c\uace0\uc758 \uc120\ud0dd\uc774\uace0 CLI\ub294 image\ub97c \ud55c \ubc88\ub9cc \ubcc0\ud658\uc2dc\ud0ac \ub54c \uc0ac\uc6a9\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ubbf8\uc9c0\ub97c WebP\ub85c \ubcc0\ud658\ud560 \ub54c \ub2e4\uc591\ud55c \uc555\ucd95 \uc124\uc815\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc9c0\ub9cc \uac00\uc7a5 \uc911\uc694\ud558\uac8c \ubd10\uc57c\ud560 \uac83\uc774 \ud488\uc9c8\uc218\uc900\uc785\ub2c8\ub2e4. 0(\ucd5c\uc57d)\uc5d0\uc11c 100(\ucd5c\uc0c1)\uae4c\uc9c0 \ud488\uc9c8 \uc218\uc900\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uae30\uc5d0 \ud544\uc694\uc5d0 \ub9de\ub294 \uc774\ubbf8\uc9c0 \ud488\uc9c8\uacfc \ud30c\uc77c\ud06c\uae30\ub97c \uace0\ub824\ud558\uc5ec \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"use-cwebp"},"Use cwebp"),(0,l.kt)("p",null,"\uac04\ub2e8\ud788 \ud558\ub098\uc758 \ud30c\uc77c\uc744 \ubcc0\uacbd\ud560 \ub54c\ub294 cwebp\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"default:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cwebp images/flower.jpg -o images/flower.webp\n")),(0,l.kt)("p",null,"using a query level of ",(0,l.kt)("inlineCode",{parentName:"p"},"50"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cwebp -q 50 images/flower.jpg -o images/flower.webp\n")),(0,l.kt)("p",null,"Convert all files in a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for file in images/*; do cwebp "$file" -o "${file%.*}.webp"; done\n')),(0,l.kt)("h3",{id:"use-imagemin"},"Use Imagemin"),(0,l.kt)("p",null,"Imagemin\uc740 Webpack\uacfc \uac19\uc740 build tools\ub97c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac04\ub2e8\ud788 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/imagemin-webp-webpack-plugin"},"imagemin-webp-webpack-plugin"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');\n\nmodule.exports = {\n  plugins: [new ImageminWebpWebpackPlugin()]\n};\n")),(0,l.kt)("h2",{id:"serve-webp-images"},"Serve WebP images"),(0,l.kt)("p",null,"\ub9cc\uc57d WebP\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=webp"},"\ube0c\ub77c\uc6b0\uc800"),"\ub77c\uba74 fallback\uc744 \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"before"},"Before:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<img src="flower.jpg" alt="" />\n')),(0,l.kt)("h4",{id:"after"},"After:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<picture>\n  <source type="image/webp" srcset="flower.webp" />\n  <source type="image/jpeg" srcset="flower.jpg" />\n  <img src="flower.jpg" alt="" />\n</picture>\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<picture>"),"\uc548\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"<source>")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," \ud0dc\uadf8\ub294 \uc0c1\uc704\uc5d0 \ub300\ud55c fallback\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"picture"},"picture"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<picture>"),"\ub294 0\uac1c \uc774\uc0c1\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"<source>"),"\uc640 \ud558\ub098\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," \ud0dc\uadf8\uc758 wrapper\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"source"},"source"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<source>")," \ud0dc\uadf8\ub294 \ubbf8\ub514\uc5b4 \ub9ac\uc18c\uc2a4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800\uc5d0 \uc9c0\uc6d0\ub418\ub294 \ud615\uc2dd\uc744 \uc21c\uc11c\ub300\ub85c \ub530\ub77c\uac00\uba70, \ub9cc\uc57d \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," \ud0dc\uadf8\uc5d0 \uc9c0\uc815\ub41c \uc774\ubbf8\uc9c0\ub85c \ub300\uccb4\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"image"},"image"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<img>"),"\uc758 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"<picture>")," \ud0dc\uadf8\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," \ud0dc\uadf8\uc758 image\ub97c \ub85c\ub4dc\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"verify-webp-usage"},"Verify WebP usage"),(0,l.kt)("p",null,"Lighthouse\ub294 \uc0ac\uc774\ud2b8\uc758 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\uac00 WebP\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub294 \uccb4\ud06c\ud558\uace0, \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0\ub97c \ub098\uc5f4\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.dev/serve-images-webp/"},"Use WebP images :: WebDev"))))}g.isMDXComponent=!0}}]);