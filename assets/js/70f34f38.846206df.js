"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[820],{48343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(74848),i=n(28453);const r={sidebar_position:1,displayed_sidebar:"docs"},o="StoredAnswer",d={id:"typedoc/interfaces/StoredAnswer",title:"StoredAnswer",description:"The StoredAnswer object is a data structure describing the participants interaction with an individual component. It is the data structure used as values of the answers object of ParticipantData. The general structure for this is below:",source:"@site/versioned_docs/version-v1.0.0-beta11/typedoc/interfaces/StoredAnswer.md",sourceDirName:"typedoc/interfaces",slug:"/typedoc/interfaces/StoredAnswer",permalink:"/docs/v1.0.0-beta11/typedoc/interfaces/StoredAnswer",draft:!1,unlisted:!1,tags:[],version:"v1.0.0-beta11",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SliderResponse",permalink:"/docs/v1.0.0-beta11/typedoc/interfaces/SliderResponse"},next:{title:"StudyConfig",permalink:"/docs/v1.0.0-beta11/typedoc/interfaces/StudyConfig"}},c={},l=[{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"storedanswer",children:"StoredAnswer"}),"\n",(0,s.jsxs)(t.p,{children:["The StoredAnswer object is a data structure describing the participants interaction with an individual component. It is the data structure used as values of the ",(0,s.jsx)(t.code,{children:"answers"})," object of ",(0,s.jsx)(t.a,{href:"ParticipantData",children:"ParticipantData"}),". The general structure for this is below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'    {\n      "answer": {\n        "barChart": [\n          1.3\n        ]\n      },\n      "startTime": 1711641174858,\n      "endTime": 1711641178836,\n      "windowEvents": [\n        ...\n      ]\n    }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"answer"}),' object here uses the "id" in the ',(0,s.jsx)(t.a,{href:"BaseResponse",children:"Response"})," list of the component in your ",(0,s.jsx)(t.a,{href:"StudyConfig",children:"StudyConfiguration"})," as its keys. It then contains a list of the answers given. You are also given a start and end time for the participants interaction with the component. Lastly, a set of windowEvents is given. Below is an example of the windowEvents list."]}),"\n",(0,s.jsx)(t.p,{children:"Each item in the window event is given a time, a position an event name, and some extra information for the event (for mouse events, this is the location)."}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"answer"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Record"}),"<",(0,s.jsx)(t.code,{children:"string"}),", ",(0,s.jsx)(t.code,{children:"object"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'Object whose keys are the "id"s in the Response list of the component in the StudyConfiguration and whose value is the inputted value from the participant.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"endTime"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Time that the user ended interaction with the component in epoch milliseconds."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provenanceGraph?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"TrrackedProvenance"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The entire provenance graph exported from a Trrack instance from a React component. This will only be present if you are using React components and you're utilizing Trrack."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"startTime"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Time that the user began interacting with the component in epoch milliseconds."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"windowEvents"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"EventType"}),"[]"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["A list containing the time (in epoch milliseconds), the action (focus, input, kepress, mousedown, mouseup, mousemove, resize, scroll or visibility), and then either a coordinate pertaining to where the event took place on the screen or string related to such event. Below is an example of the windowEvents list.",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:'js"windowEvents" :[  [    1711641174878,    "mousedown",    [ 1843, 286 ]  ],  [    1711641174878,    "focus",    "BUTTON"  ],  [    1711641174935,    "mouseup",    [ 1843, 286 ]  ],  .  .  .  [    1711641178706,    "mousemove",    [ 1868, 728 ]  ]]'})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);