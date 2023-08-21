"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"JS + Hanko",sidebar_label:"Javascript",keywords:["js","javascript"],sidebar_custom_props:{docCardIconName:"javascript"}},i="Javascript",l={unversionedId:"guides/js",id:"guides/js",title:"JS + Hanko",description:"In this guide you will learn how to use the",source:"@site/docs/guides/js.mdx",sourceDirName:"guides",slug:"/guides/js",permalink:"/guides/js",draft:!1,tags:[],version:"current",frontMatter:{title:"JS + Hanko",sidebar_label:"Javascript",keywords:["js","javascript"],sidebar_custom_props:{docCardIconName:"javascript"}},sidebar:"docs",previous:{title:"Angular",permalink:"/guides/angular"},next:{title:"React",permalink:"/guides/react"}},s={},p=[{value:"Add <code>&lt;hanko-auth&gt;</code> component",id:"add-hanko-auth-component",level:2},{value:"Define event callbacks",id:"define-event-callbacks",level:2},{value:"Add <code>&lt;hanko-profile&gt;</code> component",id:"hanko-profile",level:2},{value:"Implement logout",id:"implement-logout",level:2},{value:"Customize component styles",id:"customize-component-styles",level:2},{value:"Authenticate backend requests",id:"authenticate-backend-requests",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript"},"Javascript"),(0,a.kt)("p",null,"In this guide you will learn how to use the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md"},"hanko-elements")," web components to\nadd authentication and a user profile using plain Javascript and HTML."),(0,a.kt)("h2",{id:"add-hanko-auth-component"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-auth>")," component"),(0,a.kt)("p",null,"To provide a login interface in your app, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," web component. To do so, first import the ",(0,a.kt)("inlineCode",{parentName:"p"},"register"),"\nfunction from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements"),". Call it with the URL of the Hanko API as an argument\nto register the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element with the browser's\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),".\nThen use the element in your markup."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.hanko.io"},"Hanko Cloud"),", you can find the API URL on your project dashboard.\nIf you are self-hosting you need to provide the URL of your running Hanko backend.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="login.html" showLineNumbers',title:'"login.html"',showLineNumbers:!0},'  <body>\n\n  <hanko-auth />\n\n  <script type="module">\n    import { register } from \'https://esm.run/@teamhanko/hanko-elements\';\n\n    await register("<YOUR_API_URL>");\n  <\/script>\n\n  </body>\n')),(0,a.kt)("h2",{id:"define-event-callbacks"},"Define event callbacks"),(0,a.kt)("p",null,"Use the Hanko client provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," to subscribe to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#events"},"events"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="login.html" showLineNumbers',title:'"login.html"',showLineNumbers:!0},'  <body>\n\n  <hanko-auth />\n\n  <script type="module">\n    import { register } from \'https://esm.run/@teamhanko/hanko-elements\';\n\n    const { hanko } = await register("<YOUR_API_URL>");\n\n    //highlight-start\n    hanko.onAuthFlowCompleted(() => {\n        // successfully logged in, redirect to a page in your application\n        document.location.href = "..."\n    })\n    //highlight-end\n  <\/script>\n\n  </body>\n')),(0,a.kt)("h2",{id:"hanko-profile"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-profile>")," component"),(0,a.kt)("p",null,"To provide a page where users can manage their email addresses, password and passkeys, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," web\ncomponent. Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in\nyour React component. Call it with the\nURL of the Hanko API as an argument to register the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," element with the browser's\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),". Then\nuse the element in your markup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="profile.html" showLineNumbers',title:'"profile.html"',showLineNumbers:!0},'  <body>\n\n  <hanko-profile />\n\n  <script type="module">\n    import { register } from \'https://esm.run/@teamhanko/hanko-elements\';\n\n    await register("<YOUR_API_URL>");\n  <\/script>\n\n  </body>\n')),(0,a.kt)("h2",{id:"implement-logout"},"Implement logout"),(0,a.kt)("p",null,"Use the Hanko client provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," to log out users. On logout a custom event is\ndispatched that you can subscribe to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="profile.html" showLineNumbers',title:'"profile.html"',showLineNumbers:!0},'  <body>\n\n  //highlight-start\n  <nav>\n    <a href="#" id="logout-link">Logout</a>\n  </nav>\n  //highlight-end\n\n  <hanko-profile />\n\n  <script type="module">\n    import { register } from \'https://esm.run/@teamhanko/hanko-elements\';\n\n    // highlight-start\n    const { hanko } = await register("<YOUR_API_URL>");\n    // highlight-end\n\n    //highlight-start\n    document.getElementById("logout-link")\n      .addEventListener("click", (event) => {\n          event.preventDefault();\n          hanko.user.logout();\n      });\n    //highlight-end\n\n    //highlight-start\n    hanko.onUserLoggedOut(() => {\n        // successfully logged out, redirect to a page in your application\n        document.location.href = "..."\n    }\n    //highlight-end\n  <\/script>\n\n  </body>\n')),(0,a.kt)("h2",{id:"customize-component-styles"},"Customize component styles"),(0,a.kt)("p",null,"The styles of the ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-profile")," elements can be customized using CSS variables and parts. See our\nguide on customization ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/tree/main/frontend/elements#ui-customization"},"here"),"."),(0,a.kt)("h2",{id:"authenticate-backend-requests"},"Authenticate backend requests"),(0,a.kt)("p",null,"If you want to authenticate requests in your own backend, please view our ",(0,a.kt)("a",{parentName:"p",href:"/guides/backend"},"backend guide"),"."))}m.isMDXComponent=!0}}]);