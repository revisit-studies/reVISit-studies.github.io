"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[240],{628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const d={sidebar_position:1,displayed_sidebar:"docs"},r="Interface: StudyMetadata",a={id:"typedoc/interfaces/StudyMetadata",title:"Interface: StudyMetadata",description:"The StudyMetadata is used to describe certain properties of a study.",source:"@site/docs/typedoc/interfaces/StudyMetadata.md",sourceDirName:"typedoc/interfaces",slug:"/typedoc/interfaces/StudyMetadata",permalink:"/docs/typedoc/interfaces/StudyMetadata",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Interface: StudyConfig",permalink:"/docs/typedoc/interfaces/StudyConfig"},next:{title:"Interface: UIConfig",permalink:"/docs/typedoc/interfaces/UIConfig"}},o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"authors",id:"authors",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"date",id:"date",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"organizations",id:"organizations",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"title",id:"title",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"version",id:"version",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"interface-studymetadata",children:"Interface: StudyMetadata"}),"\n",(0,i.jsx)(t.p,{children:"The StudyMetadata is used to describe certain properties of a study.\nSome of this data is displayed on the landing page when running the app, such as the title and description.\nThis data is also included in the data file that is downloaded at the end of the study, to help identify the study and version. Below is an example of a StudyMetadata entry in your study configuration file:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'"studyMetadata" : {\n   "title": "My New Study",\n   "version": "pilot",\n   "authors": [\n     "Jane Doe",\n     "John Doe"\n   ],\n   "date": "2024-04-01",\n   "description": "This study is meant to test your patience.",\n   "organizations": [\n     "The reVISit Team",\n     "The Other Team"\n   ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StudyMetadata#authors",children:"authors"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StudyMetadata#date",children:"date"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StudyMetadata#description",children:"description"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StudyMetadata#organizations",children:"organizations"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StudyMetadata#title",children:"title"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/StudyMetadata#version",children:"version"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"properties-1",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"authors",children:"authors"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"authors"}),": ",(0,i.jsx)(t.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(t.p,{children:"The authors of your study."}),"\n",(0,i.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L53",children:"parser/types.ts:53"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"date",children:"date"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"date"}),": ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"The date of your study, may be useful for the researcher."}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L55",children:"parser/types.ts:55"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"description"}),": ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"The description of your study, shown on the landing page."}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L57",children:"parser/types.ts:57"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"organizations",children:"organizations"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"organizations"}),": ",(0,i.jsx)(t.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(t.p,{children:"The organizations that are associated with your study."}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L59",children:"parser/types.ts:59"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"title",children:"title"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"title"}),": ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"The title of your study, shown on the landing page."}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L49",children:"parser/types.ts:49"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"version",children:"version"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"version"}),": ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"The version of your study, shown on the landing page and attached to participant data. When you change a configuration file after a study has already been distributed to participants, you can change the version number so that the participants who see this new configuration file can be identified."}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L51",children:"parser/types.ts:51"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);