"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6669],{2371:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(4848),t=n(8453);const s={sidebar_position:1,displayed_sidebar:"docs"},d="SkipConditions",c={id:"typedoc/type-aliases/SkipConditions",title:"SkipConditions",description:"SkipConditions: (IndividualComponentSingleResponseCondition \\| IndividualComponentAllResponsesCondition \\| ComponentBlockCondition \\| RepeatedComponentBlockCondition)[]",source:"@site/docs/typedoc/type-aliases/SkipConditions.md",sourceDirName:"typedoc/type-aliases",slug:"/typedoc/type-aliases/SkipConditions",permalink:"/docs/typedoc/type-aliases/SkipConditions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"docs"},sidebar:"docs"},r={},p=[{value:"Source",id:"source",level:2}];function a(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"skipconditions",children:"SkipConditions"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"SkipConditions"}),": (",(0,i.jsx)(o.a,{href:"/docs/typedoc/interfaces/IndividualComponentSingleResponseCondition",children:(0,i.jsx)(o.code,{children:"IndividualComponentSingleResponseCondition"})})," | ",(0,i.jsx)(o.a,{href:"/docs/typedoc/interfaces/IndividualComponentAllResponsesCondition",children:(0,i.jsx)(o.code,{children:"IndividualComponentAllResponsesCondition"})})," | ",(0,i.jsx)(o.a,{href:"/docs/typedoc/interfaces/ComponentBlockCondition",children:(0,i.jsx)(o.code,{children:"ComponentBlockCondition"})})," | ",(0,i.jsx)(o.a,{href:"/docs/typedoc/interfaces/RepeatedComponentBlockCondition",children:(0,i.jsx)(o.code,{children:"RepeatedComponentBlockCondition"})}),")[]"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"The SkipConditions interface is used to define skip conditions. This is used to skip to a different component/block based on the response to a component or based on the number of correct/incorrect responses in a block. Skip conditions work recursively: if you have a nested block, the parent blocks' skip conditions will be considered when computing the skip logic."}),"\n",(0,i.jsxs)(o.p,{children:["Skip conditions are evaluated in the order they are defined in the array. If a condition is met, the participant will be redirected to the component or block specified in the ",(0,i.jsx)(o.code,{children:'"to"'})," property. If no conditions are met, the participant will continue to the next component in the sequence."]}),"\n",(0,i.jsx)(o.p,{children:"Skip conditions allow you to jump to a different component or block. If you intend to skip to a block, you should specify a block id in the sequence. If you intend to skip to a component, you should specify a component id. Skipping backwards is not supported. Skipping to a repeated component will skip to the first instance of the component after the component that triggered the skip."}),"\n",(0,i.jsx)(o.p,{children:"Please see the interface definitions for more specific information on the different types of skip conditions."}),"\n",(0,i.jsx)(o.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/revisit-studies/study/blob/28fc76c7963482dd60846afde0942e2d4335731c/src/parser/types.ts#L968",children:"parser/types.ts:968"})})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>c});var i=n(6540);const t={},s=i.createContext(t);function d(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);