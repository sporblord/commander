"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[280],{8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(2488),a=n(7052),s=n(5360),l=n(5320);const o={description:"Installing Commander"},i="Installation",u={id:"getting-started/installation",title:"Installation",description:"Installing Commander",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/commander/docs/getting-started/installation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Installing Commander"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/commander/docs/"},next:{title:"Examples",permalink:"/commander/docs/getting-started/examples"}},c={},d=[{value:"roblox-ts",id:"roblox-ts",level:2},{value:"Commander",id:"commander",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.h2,{id:"roblox-ts",children:"roblox-ts"}),"\n",(0,r.jsxs)(t.p,{children:["Commander requires ",(0,r.jsx)(t.strong,{children:"roblox-ts"}),". An installation guide can be\nfound in its ",(0,r.jsx)(t.a,{href:"https://roblox-ts.com/docs/setup-guide",children:"documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"commander",children:"Commander"}),"\n",(0,r.jsxs)(l.c,{children:[(0,r.jsx)(s.c,{value:"npm",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @rbxts/commander\n"})})}),(0,r.jsx)(s.c,{value:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"yarn add @rbxts/commander\n"})})}),(0,r.jsx)(s.c,{value:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"pnpm add @rbxts/commander\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5360:(e,t,n)=>{n.d(t,{c:()=>l});n(6651);var r=n(6548);const a={tabItem:"tabItem_VAqR"};var s=n(2488);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,l),hidden:n,children:t})}},5320:(e,t,n)=>{n.d(t,{c:()=>I});var r=n(6651),a=n(6548),s=n(2440),l=n(4760),o=n(1440),i=n(3540),u=n(6904),c=n(6008);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.Uz)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._M)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.IN)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,o.c)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(5168);const g={tabList:"tabList_zsOt",tabItem:"tabItem_wrWy"};var v=n(2488);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.MV)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function I(e){const t=(0,f.c)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},7052:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var r=n(6651);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);