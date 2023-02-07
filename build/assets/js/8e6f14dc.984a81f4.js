"use strict";(self.webpackChunkbee_ui=self.webpackChunkbee_ui||[]).push([[230],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(r),f=a,m=k["".concat(c,".").concat(f)]||k[f]||u[f]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[k]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1666:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>k});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"color-link",title:"Color Link"},c=void 0,s={unversionedId:"components/color-link",id:"components/color-link",title:"Color Link",description:"Primary link",source:"@site/docs/03-components/color-link.md",sourceDirName:"03-components",slug:"/components/color-link",permalink:"/bee-ui/docs/components/color-link",draft:!1,editUrl:"https://github.com/xirosoft/bee-ui-docs/edit/main/docs/03-components/color-link.md",tags:[],version:"current",frontMatter:{id:"color-link",title:"Color Link"},sidebar:"myAutogeneratedSidebar",previous:{title:"Check Box",permalink:"/bee-ui/docs/components/checkbox"},next:{title:"Form",permalink:"/bee-ui/docs/components/form"}},p={},k=[],u={toc:k},f="wrapper";function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"#",className:"link-primary"},"Primary link"),(0,o.kt)("a",{href:"#",className:"link-secondary"},"Secondary link"),(0,o.kt)("a",{href:"#",className:"link-success"},"Success link"),(0,o.kt)("a",{href:"#",className:"link-danger"},"Danger link"),(0,o.kt)("a",{href:"#",className:"link-warning"},"Warning link"),(0,o.kt)("a",{href:"#",className:"link-info"},"Info link"),(0,o.kt)("a",{href:"#",className:"link-light"},"Light link"),(0,o.kt)("a",{href:"#",className:"link-dark"},"Dark link"),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#" class="link-primary">Primary link</a>\n<a href="#" class="link-secondary">Secondary link</a>\n<a href="#" class="link-success">Success link</a>\n<a href="#" class="link-danger">Danger link</a>\n<a href="#" class="link-warning">Warning link</a>\n<a href="#" class="link-info">Info link</a>\n<a href="#" class="link-light">Light link</a>\n<a href="#" class="link-dark">Dark link</a>\n')))}m.isMDXComponent=!0}}]);