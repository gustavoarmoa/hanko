"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[691],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(t),h=o,d=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return t?a.createElement(d,l(l({ref:n},m),{},{components:t})):a.createElement(d,l({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),o=t(7294),r=t(6010),l=t(2466),i=t(6775),s=t(1980),u=t(7392),m=t(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function c(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,u]=d({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,m.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),k=(()=>{const e=s??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var k=t(2389);const f="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=m.indexOf(n),a=u[t].value;a!==i&&(p(n),s(a))},h=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}null==(n=t)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>m.push(e),onKeyDown:h,onClick:c},l,{className:(0,r.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(y,(0,a.Z)({},e,n)),o.createElement(v,(0,a.Z)({},e,n)))}function w(e){const n=(0,k.Z)();return o.createElement(N,(0,a.Z)({key:String(n)},e))}},9169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),r=t(4866),l=t(5162);const i={title:"Angular + Hanko",sidebar_label:"Angular",keywords:["angular"],sidebar_custom_props:{docCardIconName:"angular"}},s="Angular",u={unversionedId:"guides/angular",id:"guides/angular",title:"Angular + Hanko",description:"In this guide you will learn how to use the",source:"@site/docs/guides/angular.mdx",sourceDirName:"guides",slug:"/guides/angular",permalink:"/guides/angular",draft:!1,tags:[],version:"current",frontMatter:{title:"Angular + Hanko",sidebar_label:"Angular",keywords:["angular"],sidebar_custom_props:{docCardIconName:"angular"}},sidebar:"docs",previous:{title:"Frontend guides",permalink:"/guides/frontend"},next:{title:"Javascript",permalink:"/guides/js"}},m={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Define custom elements schema",id:"define-custom-elements-schema",level:2},{value:"Add <code>&lt;hanko-auth&gt;</code> component",id:"add-hanko-auth-component",level:2},{value:"Add <code>&lt;hanko-events&gt;</code> component",id:"add-hanko-events-component",level:2},{value:"Add <code>&lt;hanko-profile&gt;</code> component",id:"hanko-profile",level:2},{value:"Implement logout",id:"implement-logout",level:2},{value:"Customize component styles",id:"customize-component-styles",level:2},{value:"Authenticate backend requests",id:"authenticate-backend-requests",level:2}],c={toc:p};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"angular"},"Angular"),(0,o.kt)("p",null,"In this guide you will learn how to use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md"},"hanko-elements")," web components to\nadd authentication and a user profile to your Angular application."),(0,o.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," package:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @teamhanko/hanko-elements\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @teamhanko/hanko-elements\n")))),(0,o.kt)("h2",{id:"define-custom-elements-schema"},"Define custom elements schema"),(0,o.kt)("p",null,"Angular requires you to explicitly declare that you are using custom elements inside your Angular modules, otherwise\nit will fail during build complaining about unknown elements. To do so, import the\n",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA"},(0,o.kt)("inlineCode",{parentName:"a"},"CUSTOM_ELEMENTS_SCHEMA")),", and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas")," in your\nmodule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,14} title="app.module.ts" showLineNumbers',"{1,14}":!0,title:'"app.module.ts"',showLineNumbers:!0},"import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent],\n  schemas: [CUSTOM_ELEMENTS_SCHEMA]\n})\nexport class AppModule { }\n")),(0,o.kt)("h2",{id:"add-hanko-auth-component"},"Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"<hanko-auth>")," component"),(0,o.kt)("p",null,"To provide a login interface in your app, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," web component. To do so, first import the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," function\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in your Angular component. Call it with the URL of the Hanko API as an argument to register\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element with\nthe browser's ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),".\nThen use the element in your component template."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.hanko.io"},"Hanko Cloud"),", you can find the API URL on your project dashboard.\nIf you are self-hosting you need to provide the URL of your running Hanko backend.")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"html",label:"login.component.html",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<hanko-auth/>\n"))),(0,o.kt)(l.Z,{value:"ts",label:"login.component.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { Component } from '@angular/core';\nimport { register } from '@teamhanko/hanko-elements';\n\n@Component({\n  selector: 'app-login',\n  templateUrl: './login.component.html',\n  styleUrls: ['./login.component.css']\n})\nexport class LoginComponent {\n  hankoApi = \"<YOUR_API_URL>\";\n\n  constructor() {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register(hankoApi)\n      .catch((error) => {\n        // handle error\n      });\n  }\n}\n")))),(0,o.kt)("h2",{id:"add-hanko-events-component"},"Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"<hanko-events>")," component"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<hanko-events>")," component provides a convenient way to subscribe to specific\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#events"},"events")," without displaying any UI elements.\nThe other hanko-elements will also dispatch these events."),(0,o.kt)("p",null,"To utilize this functionality in your Angular application, you can leverage Angular's event binding mechanism and define\ncallback functions within your component. This allows you to respond to the dispatched events accordingly."),(0,o.kt)("p",null,"Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in your Angular component. Call it with the URL of the\nHanko API as an argument to register the ",(0,o.kt)("inlineCode",{parentName:"p"},"<hanko-events>")," element with the browser's\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),".\nThen use the element in your component template."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"html",label:"login.component.html",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<hanko-auth />\n<hanko-events (onAuthFlowCompleted)="redirectAfterLogin()" />\n')),(0,o.kt)("p",null,"The lines above can be combined to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<hanko-auth (onAuthFlowCompleted)="redirectAfterLogin()" />\n'))),(0,o.kt)(l.Z,{value:"ts",label:"login.component.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { Component } from '@angular/core';\nimport { Router } from '@angular/router';\nimport { register } from '@teamhanko/hanko-elements';\n\n@Component({\n  selector: 'app-login',\n  templateUrl: './login.component.html',\n  styleUrls: ['./login.component.css'],\n})\nexport class LoginComponent {\n  hankoApi = \"<YOUR_API_URL>\";\n\n  constructor(private router: Router) {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register(hankoApi)\n      .catch((error) => {\n        // handle error\n      })\n  }\n\n  redirectAfterLogin() {\n    // successfully logged in, redirect to a page in your application\n    this.router.navigate('...');\n  }\n}\n")))),(0,o.kt)("h2",{id:"hanko-profile"},"Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"<hanko-profile>")," component"),(0,o.kt)("p",null,"To provide a page where users can manage their email addresses, password and passkeys, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," web\ncomponent. Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in your Angular component. Call it with the\nURL of the Hanko API as an argument to register the ",(0,o.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," element with the browser's\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),".\nThen use the element in your component template."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"html",label:"profile.component.html",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"  <hanko-profile />\n"))),(0,o.kt)(l.Z,{value:"ts",label:"profile.component.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { Component } from '@angular/core';\nimport { register } from '@teamhanko/hanko-elements';\n\n@Component({\n  selector: 'app-profile',\n  templateUrl: './profile.component.html',\n  styleUrls: ['./profile.component.css']\n})\nexport class ProfileComponent {\n  hankoApi = \"<YOUR_API_URL>\";\n\n  constructor() {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register(hankoApi)\n      .catch((error) => {\n        // handle error\n      });\n  }\n}\n")))),(0,o.kt)("h2",{id:"implement-logout"},"Implement logout"),(0,o.kt)("p",null,"Use the Hanko client provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," to log out users. On logout a custom event is\ndispatched that you can subscribe to:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"html",label:"profile.component.html",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'  // highlight-start\n  <button (click)="logout()" class="button">Logout</button>\n  <hanko-profile (onUserLoggedOut)="redirectAfterLogout()" />\n  // highlight-end\n'))),(0,o.kt)(l.Z,{value:"ts",label:"profile.component.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { Component } from '@angular/core';\n// highlight-next-line\nimport { Router } from '@angular/router';\n// highlight-next-line\nimport { register, Hanko } from '@teamhanko/hanko-elements';\n\n@Component({\n  selector: 'app-profile',\n  templateUrl: './profile.component.html',\n  styleUrls: ['./profile.component.css']\n})\nexport class ProfileComponent {\n  hankoApi = \"<YOUR_API_URL>\";\n  // highlight-next-line\n  hanko = new Hanko(hankoApi);\n\n  // highlight-start\n  logout() {\n    this.hanko.user.logout().catch((error) => {\n      // handle error\n    });\n  }\n  // highlight-end\n\n  // highlight-next-line\n  constructor(private router: Router) {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register(hankoApi)\n      .catch((error) => {\n        // handle error\n      });\n  }\n\n  // highlight-start\n  redirectAfterLogout() {\n    // successfully logged out, redirect to a login page\n    this.router.navigate('...');\n  }\n  // highlight-end\n}\n")))),(0,o.kt)("h2",{id:"customize-component-styles"},"Customize component styles"),(0,o.kt)("p",null,"The styles of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hanko-auth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hanko-profile")," elements can be customized using CSS variables and parts. See our\nguide on customization ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/tree/main/frontend/elements#ui-customization"},"here"),"."),(0,o.kt)("h2",{id:"authenticate-backend-requests"},"Authenticate backend requests"),(0,o.kt)("p",null,"If you want to authenticate requests in your own backend, please view our ",(0,o.kt)("a",{parentName:"p",href:"/guides/backend"},"backend guide"),"."))}h.isMDXComponent=!0}}]);