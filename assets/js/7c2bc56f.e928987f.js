"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7857],{4352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(4848),a=n(8453);const s={sidebar_position:1,displayed_sidebar:"reference"},r="ParticipantData",c={id:"typedoc/interfaces/ParticipantData",title:"ParticipantData",description:'The ParticipantData is a JSON object that contains all of the data for all of the participants in your study. It is structured as a list. Each element refers to a participants data or a configuration. While in many cases there is only one configuration per study, the study creator is allowed to change the configuration file after the study has already been completed by other participants. The data for each participant will have a "participantConfigHash" which refers to a particular configuration which is also in this list.',source:"@site/docs/typedoc/interfaces/ParticipantData.md",sourceDirName:"typedoc/interfaces",slug:"/typedoc/interfaces/ParticipantData",permalink:"/docs/typedoc/interfaces/ParticipantData",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"reference"},sidebar:"reference",previous:{title:"Option",permalink:"/docs/typedoc/interfaces/Option"},next:{title:"ParticipantMetadata",permalink:"/docs/typedoc/interfaces/ParticipantMetadata"}},d={},o=[{value:"Properties",id:"properties",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"participantdata",children:"ParticipantData"})}),"\n",(0,i.jsx)(t.p,{children:'The ParticipantData is a JSON object that contains all of the data for all of the participants in your study. It is structured as a list. Each element refers to a participants data or a configuration. While in many cases there is only one configuration per study, the study creator is allowed to change the configuration file after the study has already been completed by other participants. The data for each participant will have a "participantConfigHash" which refers to a particular configuration which is also in this list.'}),"\n",(0,i.jsx)(t.p,{children:"Below we have an example of a participants data."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'[\n    {\n        "participantId": <UUID4>,\n        "participantConfigHash": <CONFIG_ID>,\n        "sequence": {\n            ...\n        },\n        "answers": {\n            ...\n        },\n        "searchParameters": {\n            ...\n        }\n    }\n]\n'})}),"\n",(0,i.jsx)(t.p,{children:"Each key in answer will be labeled the same as the response component that it refers to. The sequence shows the order that the participant saw each component (since these may be different for each participant if the configuration sequence has some randomization). This answer will contain information such as the start time, the end time, and all of the window events. See the example below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'     "bar-chart-1_1": {\n        "answer": {\n          "barChart": [\n            1.3\n          ]\n        },\n        "startTime": 1711641174858,\n        "endTime": 1711641178836,\n        "provenanceGraph":{\n          ...\n        },\n        "windowEvents": [\n          ...\n        ]\n      }\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The keys of this object are the names of the components with an additional underscore and number appended to the end. This is done so that the study creator can discern between not only the components but also between the various instances of the same component when necessary. All times are in ",(0,i.jsx)(t.strong,{children:"epoch milliseconds"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:'"provenanceGraph"'})," key will only exist if the component is a React component and if it is utilizing Trrack. See ",(0,i.jsx)(t.a,{href:"../StoredAnswer",children:"here"})," for more details."]})}),"\n",(0,i.jsxs)(t.p,{children:["We can see at a high level that we are given the answer that the user submitted, the start time for the component, and the end time. In addition to this, we have a list of window events. You can find more information about the StoredAnswer object ",(0,i.jsx)(t.a,{href:"../StoredAnswer",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"answers"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Record"}),"<",(0,i.jsx)(t.code,{children:"string"}),", ",(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StoredAnswer",children:(0,i.jsx)(t.code,{children:"StoredAnswer"})}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Object whose keys are the component names and values are StoredAnswer objects."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"completed"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Whether the participant has completed the study."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"metadata"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/ParticipantMetadata",children:(0,i.jsx)(t.code,{children:"ParticipantMetadata"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Metadata of a participants browser, resolution, language, and IP."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"participantConfigHash"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unique ID corresponding to the Configuration that the participant received."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"participantId"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unique ID  associated with the participant"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"rejected"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"false"})," | ",(0,i.jsx)(t.code,{children:"object"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Whether the participant has been rejected and the reason."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"searchParams"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Record"}),"<",(0,i.jsx)(t.code,{children:"string"}),", ",(0,i.jsx)(t.code,{children:"string"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Query parameters of the URL used to enter the study."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"sequence"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Sequence"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sequence of components that the participant received. This is an internal data type and is compiled from the ComponentBlocks in the StudyConfig sequence."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);