"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2185],{46608:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=s(74848),t=s(28453);const o={sidebar_position:1,displayed_sidebar:"reference"},r="Reference Documentation",c={id:"typedoc/index",title:"Reference Documentation",description:"General reVISit",source:"@site/docs/typedoc/index.md",sourceDirName:"typedoc",slug:"/typedoc/",permalink:"/docs/typedoc/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"reference"},sidebar:"reference",next:{title:"Interfaces",permalink:"/docs/category/interfaces"}},d={},a=[{value:"General reVISit",id:"general-revisit",level:2},{value:"Data Formats",id:"data-formats",level:2},{value:"reVISit Spec",id:"revisit-spec",level:2},{value:"Components",id:"components",level:2},{value:"Responses",id:"responses",level:2},{value:"Form Elements",id:"form-elements",level:3},{value:"Sequencing",id:"sequencing",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"reference-documentation",children:"Reference Documentation"}),"\n",(0,i.jsx)(n.h2,{id:"general-revisit",children:"General reVISit"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/GlobalConfig",children:"GlobalConfig"})," \u2014 The GlobalConfig is used to generate the list of available studies in the UI."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-formats",children:"Data Formats"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/ParticipantData",children:"ParticipantData"})," \u2013\xa0The ParticipantData is a JSON object that includes data for a participant in your study. This is how the data is stored in the database and how it will download with the JSON downloader."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/StoredAnswer",children:"StoredAnswer"})," - The StoredAnswer object is a data structure describing the participants interaction with an individual component. It is used by ParticipantData to store individual answers."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"revisit-spec",children:"reVISit Spec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/StudyConfig",children:"StudyConfig"})," \u2013 The StudyConfig interface is used to define the properties of a study configuration. This is a JSON object with four main components: the StudyMetadata, the UIConfig, the Components, and the Sequence."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/StudyMetadata",children:"StudyMetadata"})," \u2013 A top-level property of the ",(0,i.jsx)(n.code,{children:"StudyConfig"}),". The study metadata defines elements such as the study title, authors, and description."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/UIConfig",children:"UIConfig"})," \u2013 A top-level property of the ",(0,i.jsx)(n.code,{children:"StudyConfig"}),", defining the appearance of the study."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For other components of the reVISit spec see ",(0,i.jsx)(n.a,{href:"#components",children:"Components"})," and ",(0,i.jsx)(n.a,{href:"#sequencing",children:"Sequencing"})]}),"\n",(0,i.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(n.p,{children:["Components contain study-specific content. See the ",(0,i.jsx)(n.a,{href:"https://revisit.dev/docs/getting-started/how-does-it-work",children:"How does it Work"})," guide for an introduction."]}),"\n",(0,i.jsx)(n.p,{children:"The different component types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/ImageComponent",children:"ImageComponent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/MarkdownComponent",children:"MarkdownComponent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/QuestionnaireComponent",children:"QuestionnaireComponent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/ReactComponent",children:"ReactComponent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/WebsiteComponent",children:"WebsiteComponent"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,i.jsx)(n.p,{children:"Responses allow study designers to collect responses from participants  Responses are included on administrative forms, such as consent or training, but most importantly as a response to a stimulus."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/type-aliases/Response",children:"Response"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/IFrameResponse",children:"IFrameResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/Answer",children:"Answer"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"form-elements",children:"Form Elements"}),"\n",(0,i.jsx)(n.p,{children:"Responses are provided as form elements. ReVISit supports the following form elements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/BaseResponse",children:"BaseResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/CheckboxResponse",children:"CheckboxResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/DropdownResponse",children:"DropdownResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/LikertResponse",children:"LikertResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/LongTextResponse",children:"LongTextResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/NumericalResponse",children:"NumericalResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/NumberOption",children:"NumberOption"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/StringOption",children:"StringOption"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/RadioResponse",children:"RadioResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/ShortTextResponse",children:"ShortTextResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/SliderResponse",children:"SliderResponse"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sequencing",children:"Sequencing"}),"\n",(0,i.jsx)(n.p,{children:"Sequencing determines the order in which components appear."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/ComponentBlock",children:"ComponentBlock"})," \u2014 The ComponentBlock interface is used to define order properties within the sequence."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Interruptions augment the sequence with components that are inserted either randomly or deterministically. These might be for breaks or attention checks."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/DeterministicInterruption",children:"DeterministicInterruption"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/RandomInterruption",children:"RandomInterruption"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/type-aliases/InterruptionBlock",children:"InterruptionBlock"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Skip conditions enable the participant to jump through the sequence if a certain condition is met."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/type-aliases/SkipConditions",children:"SkipConditions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/ComponentBlockCondition",children:"ComponentBlockCondition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/IndividualComponentAllResponsesCondition",children:"IndividualComponentAllResponsesCondition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/IndividualComponentSingleResponseCondition",children:"IndividualComponentSingleResponseCondition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/typedoc/interfaces/RepeatedComponentBlockCondition",children:"RepeatedComponentBlockCondition"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);