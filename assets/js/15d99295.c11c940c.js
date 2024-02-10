"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[848],{500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2488),a=t(7052),s=t(5360),o=t(5320);const i={description:"Learn the basics for Commander usage",slug:"/"},l="Getting Started",c={id:"getting-started/index",title:"Getting Started",description:"Learn the basics for Commander usage",source:"@site/docs/getting-started/index.mdx",sourceDirName:"getting-started",slug:"/",permalink:"/commander/docs/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Learn the basics for Commander usage",slug:"/"},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/commander/docs/getting-started/installation"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Starting Commander",id:"starting-commander",level:2},{value:"Registration",id:"registration",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Commander"})," is a flexible and extensible command framework for roblox-ts that makes defining commands easy\nand readable."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(o.c,{children:[(0,r.jsx)(s.c,{value:"npm",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @rbxts/commander\n"})})}),(0,r.jsxs)(s.c,{value:"Yarn",children:[(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["Installing through ",(0,r.jsx)(n.code,{children:"yarn"})," may cause errors due to the way dependencies are installed."]}),(0,r.jsxs)(n.p,{children:["It is recommended to use ",(0,r.jsx)(n.code,{children:"npm"})," instead to avoid any issues."]})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"yarn add @rbxts/commander\n"})})]}),(0,r.jsxs)(s.c,{value:"pnpm",children:[(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["Installing through ",(0,r.jsx)(n.code,{children:"pnpm"})," may cause errors due to the way dependencies are installed."]}),(0,r.jsxs)(n.p,{children:["It is recommended to use ",(0,r.jsx)(n.code,{children:"npm"})," instead to avoid any issues."]})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"pnpm add @rbxts/commander\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"starting-commander",children:"Starting Commander"}),"\n",(0,r.jsxs)(n.p,{children:["Commander needs to be started ",(0,r.jsx)(n.strong,{children:"once"})," on the client and server."]}),"\n",(0,r.jsxs)(o.c,{children:[(0,r.jsxs)(s.c,{value:"client",label:"Client",default:!0,children:[(0,r.jsx)(n.p,{children:"To start Commander on the client, you'll need to provide some extra options if you want to use\nits user interface."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:'CommanderClient.start(\n    (registry) => {\n        // Register commands or types here\n    },\n    {\n        // The interface that will be used to interact with Commander\n        // Commander comes with a default interface, but you can create your own\n        interface: CommanderInterface(),\n\n        // You can also customize the interface by providing options\n        interface: CommanderInterface({\n            position: new UDim2(),\n            size: new UDim2(),\n            ...\n        })\n\n        // The options below are optional\n\n        // The default key is F2, but you can change it here\n        activationKeys: [Enum.KeyCode.F2],\n\n        // The maximum terminal and command history length, default length is 1000\n        historyLength: 1000,\n\n        // If you don\'t want to register built-in types, you can change this option\n        // This is set to true by default\n        registerBuiltInTypes: true,\n    },\n).catch((err) => warn("Commander could not be started:", tostring(err)));\n'})})]}),(0,r.jsx)(s.c,{value:"server",label:"Server",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:'CommanderServer.start(\n    (registry) => {\n        // Register commands or types here\n    },\n    {\n        // If you don\'t want to register built-in types, you can change this option\n        // This is set to true by default.\n        registerBuiltInTypes: true,\n    },\n).catch((err) => warn("Commander could not be started:", tostring(err)));\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,r.jsx)(n.p,{children:"The way commands and types are registered is the same on the server and client."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:'CommanderServer.start((registry) => {\n    // Register commands by loading all command ModuleScripts under an Instance\n    // You can also use this for types: ModuleScripts that export a function\n    // will be called with the registry object, allowing you to do any\n    // registration there.\n    const commandContainer = script.Parent.commands;\n    registry.register(commandContainer);\n\n    // If you\'ve already loaded the command ModuleScripts\n    // (e.g. through Flamework.addPaths) you can register\n    // them like this:\n    registry.registerCommands();\n\n    // Type objects are registered like this:\n    registry.registerType(someType);\n    registry.registerTypes(someOtherType, anotherType);\n}).catch((err) => warn("Commander could not be started:", tostring(err)));\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/commander/docs/guides/registration",children:"Registration"})," guide for more details on how these methods work."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5360:(e,n,t)=>{t.d(n,{c:()=>o});t(6651);var r=t(6548);const a={tabItem:"tabItem_VAqR"};var s=t(2488);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,o),hidden:t,children:n})}},5320:(e,n,t)=>{t.d(n,{c:()=>w});var r=t(6651),a=t(6548),s=t(2440),o=t(4760),i=t(1440),l=t(3540),c=t(6904),d=t(6008);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.Uz)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._M)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.IN)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??p;return h({value:e,tabValues:s})?e:null})();(0,i.c)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(5168);const b={tabList:"tabList_zsOt",tabItem:"tabItem_wrWy"};var y=t(2488);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.c)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=p(e);return(0,y.jsxs)("div",{className:(0,a.c)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.c)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},7052:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>o});var r=t(6651);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);