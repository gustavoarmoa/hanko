"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[35],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return t?o.createElement(h,s(s({ref:n},c),{},{components:t})):o.createElement(h,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(7294),a=t(6010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var o=t(7462),a=t(7294),r=t(6010),s=t(2466),i=t(6775),l=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,u]=h({queryString:t,groupId:o}),[p,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),f=(()=>{const e=l??p;return d({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var f=t(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),o=u[t].value;o!==i&&(p(n),l(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,r.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:o}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function N(e){const n=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",g)},a.createElement(y,(0,o.Z)({},e,n)),a.createElement(v,(0,o.Z)({},e,n)))}function x(e){const n=(0,f.Z)();return a.createElement(N,(0,o.Z)({key:String(n)},e))}},3148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=t(7462),a=(t(7294),t(3905)),r=t(4866),s=t(5162);const i={title:"Next.js + Hanko",sidebar_label:"Next.js",keywords:["next","nextjs"],sidebar_custom_props:{docCardIconName:"nextjs-dark"}},l="Integrate Hanko with Next.js",u={unversionedId:"guides/next",id:"guides/next",title:"Next.js + Hanko",description:"Learn how to quickly add authentication and user profile in your Next.js app using Hanko.",source:"@site/docs/guides/next.mdx",sourceDirName:"guides",slug:"/guides/next",permalink:"/guides/next",draft:!1,tags:[],version:"current",frontMatter:{title:"Next.js + Hanko",sidebar_label:"Next.js",keywords:["next","nextjs"],sidebar_custom_props:{docCardIconName:"nextjs-dark"}},sidebar:"docs",previous:{title:"Fullstack guides",permalink:"/guides/fullstack"},next:{title:"Nuxt",permalink:"/guides/nuxt"}},c={},p=[{value:"Install @teamhanko/hanko-elements",id:"install-teamhankohanko-elements",level:2},{value:"Add the Hanko API URL",id:"add-the-hanko-api-url",level:2},{value:"Add <code>&lt;hanko-auth&gt;</code> component",id:"add-hanko-auth-component",level:2},{value:"Define event callbacks",id:"define-event-callbacks",level:2},{value:"Add <code>&lt;hanko-profile&gt;</code> component",id:"hanko-profile",level:2},{value:"Implement logout functionality",id:"implement-logout-functionality",level:2},{value:"Customize component styles",id:"customize-component-styles",level:2},{value:"Securing routes with Middleware",id:"securing-routes-with-middleware",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-hanko-with-nextjs"},"Integrate Hanko with Next.js"),(0,a.kt)("p",null,"Learn how to quickly add authentication and user profile in your Next.js app using Hanko."),(0,a.kt)("h2",{id:"install-teamhankohanko-elements"},"Install @teamhanko/hanko-elements"),(0,a.kt)("p",null,"Once you've initialized your Next app, installing hanko-elements provides you with access to the prebuilt components: ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-profile"),"."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @teamhanko/hanko-elements\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @teamhanko/hanko-elements\n")))),(0,a.kt)("h2",{id:"add-the-hanko-api-url"},"Add the Hanko API URL"),(0,a.kt)("p",null,"Retrieve the API URL from the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.hanko.io/"},"Hanko console")," and place it in your .env file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title=".env.local"',title:'".env.local"'},"NEXT_PUBLIC_HANKO_API_URL=https://f4****-4802-49ad-8e0b-3d3****ab32.hanko.io\n")),(0,a.kt)("h2",{id:"add-hanko-auth-component"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-auth>")," component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," web component adds a login interface to your app. Begin by importing the register function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," into your Next.js component. Call it with the Hanko API URL as an argument to register ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," with the browser's ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},"CustomElementRegistry"),". Once done, include it in your JSX."),(0,a.kt)(r.Z,{groupId:"environment",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"app-directory",label:"App directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/HankoAuth.tsx" showLineNumbers',title:'"components/HankoAuth.tsx"',showLineNumbers:!0},'"use client";\n\nimport { useEffect } from "react";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport default function HankoAuth() {\n  useEffect(() => {\n    register(hankoApi).catch((error) => {\n      // handle error\n    });\n  }, []);\n\n  return <hanko-auth />;\n}\n'))),(0,a.kt)(s.Z,{value:"pages-directory",label:"Pages directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/HankoAuth.tsx" showLineNumbers',title:'"components/HankoAuth.tsx"',showLineNumbers:!0},'import { useEffect } from "react";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport default function HankoAuth() {\n  useEffect(() => {\n    register(hankoApi).catch((error) => {\n      // handle error\n    });\n  }, []);\n\n  return <hanko-auth />;\n}\n')))),(0,a.kt)("p",null,"Now simply import the component you just created (HankoAuth)"),(0,a.kt)(r.Z,{groupId:"environment",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"app-directory",label:"App directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app/login/page.tsx" showLineNumbers',title:'"app/login/page.tsx"',showLineNumbers:!0},'import HankoAuth from "@/components/HankoAuth";\n\nexport default function LoginPage() {\n return (\n   <HankoAuth />\n );\n}\n'))),(0,a.kt)(s.Z,{value:"pages-directory",label:"Pages directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/login.tsx" showLineNumbers',title:'"pages/login.tsx"',showLineNumbers:!0},'import dynamic from "next/dynamic";\n\nexport default function LoginPage() {\n  const HankoAuth = dynamic(\n    () => import(\'@/components/HankoAuth\'),\n    { ssr: false },\n  )\n  return (\n    <Suspense fallback={"Loading ..."}>\n      <HankoAuth/>\n    </Suspense>\n  )\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Why do we use dynamic import in the Nextjs pages directory?")," \ud83e\udd14"),(0,a.kt)("p",{parentName:"admonition"},"  The register function tries to set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element for the browser. But, Next.js pre-renders pages before displaying them. Since it doesn't have access to the browser's ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object during this pre-render phase, the registration of the custom element would fail."),(0,a.kt)("p",{parentName:"admonition"},"  To fix this, we can use Next.js's ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/dynamic-import"},"dynamic import")," to load our component only when it's displayed on the client-side and skip the pre-creation step.")))),(0,a.kt)("h2",{id:"define-event-callbacks"},"Define event callbacks"),(0,a.kt)("p",null,"The Hanko client from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements"),' lets you "listen" for specific ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#events"},"events"),". It simplifies the process of subscribing to events, such as user logins."),(0,a.kt)(r.Z,{groupId:"environment",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"app-directory",label:"App directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/HankoAuth.tsx" showLineNumbers',title:'"components/HankoAuth.tsx"',showLineNumbers:!0},'"use client";\n\nimport { useEffect, useCallback, useState } from "react";\nimport { useRouter } from "next/navigation";\nimport { register, Hanko } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport default function HankoAuth() {\n  const router = useRouter();\n\n  const [hanko, setHanko] = useState<Hanko>();\n\n  useEffect(() => {\n    import("@teamhanko/hanko-elements").then(({ Hanko }) =>\n      setHanko(new Hanko(hankoApi))\n    );\n  }, []);\n\n  const redirectAfterLogin = useCallback(() => {\n    // successfully logged in, redirect to a page in your application\n    router.replace("/dashboard");\n  }, [router]);\n\n  useEffect(\n    () =>\n      hanko?.onAuthFlowCompleted(() => {\n        redirectAfterLogin();\n      }),\n    [hanko, redirectAfterLogin]\n  );\n\n  useEffect(() => {\n    register(hankoApi).catch((error) => {\n      // handle error\n    });\n  }, []);\n\n  return <hanko-auth />;\n}\n'))),(0,a.kt)(s.Z,{value:"pages-directory",label:"Pages directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="components/HankoAuth.tsx" showLineNumbers',filename:'"components/HankoAuth.tsx"',showLineNumbers:!0},'import { useEffect, useCallback, useState } from "react";\nimport { useRouter } from "next/router";\nimport { register, Hanko } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport default function HankoAuth() {\n  const router = useRouter();\n\n  const [hanko, setHanko] = useState<Hanko>();\n\n  useEffect(() => {\n    import("@teamhanko/hanko-elements").then(({ Hanko }) =>\n      setHanko(new Hanko(hankoApi))\n    );\n  }, []);\n\n  const redirectAfterLogin = useCallback(() => {\n    // successfully logged in, redirect to a page in your application\n    router.replace("/dashboard");\n  }, [router]);\n\n  useEffect(\n    () =>\n      hanko?.onAuthFlowCompleted(() => {\n        redirectAfterLogin();\n      }),\n    [hanko, redirectAfterLogin]\n  );\n\n  useEffect(() => {\n    register(hankoApi).catch((error) => {\n      // handle error\n    });\n  }, []);\n\n  return <hanko-auth />;\n}\n')))),(0,a.kt)("h2",{id:"hanko-profile"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-profile>")," component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," component offers an interface for managing email addresses and passkeys."),(0,a.kt)(r.Z,{groupId:"environment",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"app-directory",label:"App directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/HankoProfile.jsx" showLineNumbers',title:'"components/HankoProfile.jsx"',showLineNumbers:!0},'"use client"\n\nimport { useEffect } from "react";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport default function HankoProfile() {\n  useEffect(() => {\n    register(hankoApi).catch((error) => {\n      // handle error\n    });\n  }, []);\n\n  return <hanko-profile />;\n}\n'))),(0,a.kt)(s.Z,{value:"pages-directory",label:"Pages directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="components/HankoProfile.jsx" showLineNumbers',filename:'"components/HankoProfile.jsx"',showLineNumbers:!0},'import { useEffect } from "react";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport default function HankoProfile() {\n  useEffect(() => {\n    register(hankoApi).catch((error) => {\n      // handle error\n    });\n  }, []);\n\n  return <hanko-profile />;\n}\n')))),(0,a.kt)("h2",{id:"implement-logout-functionality"},"Implement logout functionality"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," to easily manage user logouts. Below, we make a logout button component that you can use anywhere. "),(0,a.kt)(r.Z,{groupId:"environment",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"app-directory",label:"App directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/LogoutButton.tsx" showLineNumbers',title:'"components/LogoutButton.tsx"',showLineNumbers:!0},'"use client";\n\nimport { useState, useEffect } from "react";\nimport { useRouter } from "next/navigation";\nimport { Hanko } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport function LogoutBtn() {\n  const router = useRouter();\n  const [hanko, setHanko] = useState<Hanko>();\n\n  useEffect(() => {\n    import("@teamhanko/hanko-elements").then(({ Hanko }) =>\n      setHanko(new Hanko(hankoApi ?? ""))\n    );\n  }, []);\n\n  const logout = async () => {\n    try {\n      await hanko?.user.logout();\n      router.push("/login");\n      router.refresh();\n      return;\n    } catch (error) {\n      console.error("Error during logout:", error);\n    }\n  };\n\n  return <button onClick={logout}>Logout</button>;\n}\n'))),(0,a.kt)(s.Z,{value:"pages-directory",label:"Pages directory",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="components/LogoutButton.tsx" showLineNumbers',filename:'"components/LogoutButton.tsx"',showLineNumbers:!0},'import { useState, useEffect } from "react";\nimport { useRouter } from "next/router";\nimport { Hanko } from "@teamhanko/hanko-elements";\n\nconst hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport function LogoutBtn() {\n  const router = useRouter();\n  const [hanko, setHanko] = useState<Hanko>();\n\n  useEffect(() => {\n    import("@teamhanko/hanko-elements").then(({ Hanko }) =>\n      setHanko(new Hanko(hankoApi ?? ""))\n    );\n  }, []);\n\n  const logout = async () => {\n    try {\n      await hanko?.user.logout();\n      router.push("/login");\n      router.refresh();\n      return;\n    } catch (error) {\n      console.error("Error during logout:", error);\n    }\n  };\n\n  return <button onClick={logout}>Logout</button>;\n}\n')))),(0,a.kt)("h2",{id:"customize-component-styles"},"Customize component styles"),(0,a.kt)("p",null,"You can customize the appearance of ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-profile")," components using CSS variables and parts. Refer to our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/tree/main/frontend/elements#ui-customization"},"customization guide"),"."),(0,a.kt)("h2",{id:"securing-routes-with-middleware"},"Securing routes with Middleware"),(0,a.kt)("p",null,"To add JWT verification middleware with Hanko in your Next.js application, we're using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jose"},"jose library"),". However, you're free to choose any other suitable library. This middleware will ensure secure access to specific routes, like ",(0,a.kt)("inlineCode",{parentName:"p"},"/dashboard")," here, by checking for valid JWT. Here we define the Hanko API URL, extract and verify the JWT from cookies, and redirect unauthorized users to the login page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="middleware.ts" showLineNumbers',title:'"middleware.ts"',showLineNumbers:!0},'import { NextResponse, NextRequest } from "next/server";\n\nimport { jwtVerify, createRemoteJWKSet } from "jose";\n\nconst hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;\n\nexport async function middleware(req: NextRequest) {\n  const hanko = req.cookies.get("hanko")?.value;\n\n  const JWKS = createRemoteJWKSet(\n    new URL(`${hankoApiUrl}/.well-known/jwks.json`)\n  );\n\n  try {\n    const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);\n  } catch {\n    return NextResponse.redirect(new URL("/login", req.url));\n  }\n}\n\nexport const config = {\n  matcher: ["/dashboard"],\n};\n')))}d.isMDXComponent=!0}}]);