"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8751],{8892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const d={sidebar_position:1,displayed_sidebar:"docs"},o="BaseIndividualComponent",l={id:"typedoc/interfaces/BaseIndividualComponent",title:"BaseIndividualComponent",description:"The BaseIndividualComponent interface is used to define the required fields for all components.",source:"@site/versioned_docs/version-v1.0.0-beta10/typedoc/interfaces/BaseIndividualComponent.md",sourceDirName:"typedoc/interfaces",slug:"/typedoc/interfaces/BaseIndividualComponent",permalink:"/docs/v1.0.0-beta10/typedoc/interfaces/BaseIndividualComponent",draft:!1,unlisted:!1,tags:[],version:"v1.0.0-beta10",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Answer",permalink:"/docs/v1.0.0-beta10/typedoc/interfaces/Answer"},next:{title:"BaseResponse",permalink:"/docs/v1.0.0-beta10/typedoc/interfaces/BaseResponse"}},r={},c=[{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"baseindividualcomponent",children:"BaseIndividualComponent"}),"\n",(0,i.jsx)(t.p,{children:"The BaseIndividualComponent interface is used to define the required fields for all components."}),"\n",(0,i.jsx)(t.p,{children:"All components must include the response field, which is an array of Response interfaces.\nThere are additional optional fields that can be included in a component that help layout the task. These include the nextButtonText, nextButtonLocation, instructionLocation, correctAnswer.\nThere are other fields that can be included in a component that are used to identify the task in the admin panel. These include the meta, description, instruction, and title fields."}),"\n",(0,i.jsx)(t.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/interfaces/MarkdownComponent",children:(0,i.jsx)(t.code,{children:"MarkdownComponent"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/interfaces/ReactComponent",children:(0,i.jsx)(t.code,{children:"ReactComponent"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/interfaces/ImageComponent",children:(0,i.jsx)(t.code,{children:"ImageComponent"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/interfaces/WebsiteComponent",children:(0,i.jsx)(t.code,{children:"WebsiteComponent"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/interfaces/QuestionnaireComponent",children:(0,i.jsx)(t.code,{children:"QuestionnaireComponent"})})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"correctAnswer?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/interfaces/Answer",children:(0,i.jsx)(t.code,{children:"Answer"})}),"[]"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"description?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The description of the component. This is used to identify and provide additional information for the component in the admin panel."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"instruction?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The instruction of the component. This is used to identify and provide additional information for the component in the admin panel."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"instructionLocation?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:'"sidebar"'})," | ",(0,i.jsx)(t.code,{children:'"aboveStimulus"'})," | ",(0,i.jsx)(t.code,{children:'"belowStimulus"'})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The location of the instructions."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"meta?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Record"}),"<",(0,i.jsx)(t.code,{children:"string"}),", ",(0,i.jsx)(t.code,{children:"unknown"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The meta data for the component. This is used to identify and provide additional information for the component in the admin panel."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nextButtonLocation?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:'"sidebar"'})," | ",(0,i.jsx)(t.code,{children:'"aboveStimulus"'})," | ",(0,i.jsx)(t.code,{children:'"belowStimulus"'})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The location of the next button."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nextButtonText?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The text that is displayed on the next button."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"provideFeedback?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"response"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/v1.0.0-beta10/typedoc/type-aliases/Response",children:(0,i.jsx)(t.code,{children:"Response"})}),"[]"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The responses to the component"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},d=i.createContext(s);function o(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);