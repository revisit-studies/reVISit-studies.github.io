"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4502],{194:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=s(4848),i=s(8453);const l={sidebar_position:1,displayed_sidebar:"reference"},d="UIConfig",r={id:"typedoc/interfaces/UIConfig",title:"UIConfig",description:"The UIConfig is used to configure the UI of the app.",source:"@site/versioned_docs/version-v1.0.4/typedoc/interfaces/UIConfig.md",sourceDirName:"typedoc/interfaces",slug:"/typedoc/interfaces/UIConfig",permalink:"/docs/v1.0.4/typedoc/interfaces/UIConfig",draft:!1,unlisted:!1,tags:[],version:"v1.0.4",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"reference"},sidebar:"reference",previous:{title:"StudyMetadata",permalink:"/docs/v1.0.4/typedoc/interfaces/StudyMetadata"},next:{title:"WebsiteComponent",permalink:"/docs/v1.0.4/typedoc/interfaces/WebsiteComponent"}},o={},c=[{value:"Properties",id:"properties",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"uiconfig",children:"UIConfig"})}),"\n",(0,n.jsx)(t.p,{children:"The UIConfig is used to configure the UI of the app.\nThis includes the logo, contact email, and whether to show a progress bar.\nThe UIConfig is also used to configure the sidebar, which can be used to display the task instructions and capture responses. Below is an example of how the UI Config would look in your study configuration (note, there are optional fields that are not shown here):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'uiConfig:{\n "contactEmail": "contact@revisit.dev",\n "helpTextPath": "<study-name>/assets/help.md",\n "logoPath": "<study-name>/assets/logo.jpg",\n "withProgressBar": true,\n "autoDownloadStudy": true\n "autoDownloadTime": 5000,\n "studyEndMsg": "Thank you for completing this study. You\'re the best!",\n "sidebar": true,\n "windowEventDebounceTime": 500,\n "urlParticipantIdParam": "PROLIFIC_ID",\n "numSequences": 500\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In the above, the ",(0,n.jsx)(t.code,{children:"path/to/assets/"})," path is referring to the path to your individual study assets. It is common practice to have your study directory contain an ",(0,n.jsx)(t.code,{children:"assets"})," directory where all components and images relevant to your study reside. Note that this path is relative to the ",(0,n.jsx)(t.code,{children:"public"})," folder of the repository - as is all other paths you define in reVISit (aside from React components whose paths are relative to ",(0,n.jsx)(t.code,{children:"src/public"}),".)"]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"autoDownloadStudy?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Controls whether the study data is automatically downloaded at the end of the study."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"autoDownloadTime?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The time in milliseconds to wait before automatically downloading the study data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"contactEmail"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The email address that used during the study if a participant clicks contact."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"enumerateQuestions?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to prepend questions with their index (+ 1). This should only be used when all questions are in the same location, e.g. all are in the side bar."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"helpTextPath?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The path to the help text file. This is displayed when a participant clicks help. Markdown is supported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"logoPath"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The path to the logo image. This is displayed on the landing page and the header."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"numSequences?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The number of sequences to generate for the study. This is used to generate the random sequences for the study. The default is 1000."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sidebar"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Controls whether the left sidebar is rendered at all. Required to be true if your response's location is set to sidebar for any question."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sidebarWidth?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The width of the left sidebar. Defaults to 300."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"studyEndMsg?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The message to display when the study ends."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"urlParticipantIdParam?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If the participant ID is passed in the URL, this is the name of the querystring parameter that is used to capture the participant ID (e.g. PROLIFIC_ID). This will allow a user to continue a study on different devices and browsers."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"windowEventDebounceTime?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Debounce time in milliseconds for automatically tracked window events. Defaults to 100. E.g 100 here means 1000ms / 100ms = 10 times a second, 200 here means 1000ms / 200ms = 5 times per second"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"withProgressBar"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Controls whether the progress bar is rendered in the study."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>r});var n=s(6540);const i={},l=n.createContext(i);function d(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);