"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6407],{6801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var i=n(4848),s=n(8453);const d={sidebar_position:1,displayed_sidebar:"docs"},o="QuestionnaireComponent",l={id:"typedoc/interfaces/QuestionnaireComponent",title:"QuestionnaireComponent",description:"A QuestionnaireComponent is used to render simple questions that require a response. The main use case of this component type is to ask participants questions when you don't need to render a stimulus. Please note, that even though we're not using a stimulus, the responses still require a location. For example this could be used to collect demographic information from a participant using the following snippet:",source:"@site/docs/typedoc/interfaces/QuestionnaireComponent.md",sourceDirName:"typedoc/interfaces",slug:"/typedoc/interfaces/QuestionnaireComponent",permalink:"/docs/typedoc/interfaces/QuestionnaireComponent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ParticipantData",permalink:"/docs/typedoc/interfaces/ParticipantData"},next:{title:"RadioResponse",permalink:"/docs/typedoc/interfaces/RadioResponse"}},r={},c=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"questionnairecomponent",children:"QuestionnaireComponent"}),"\n",(0,i.jsxs)(t.p,{children:["A QuestionnaireComponent is used to render simple questions that require a response. The main use case of this component type is to ask participants questions when you don't need to render a stimulus. Please note, that even though we're not using a stimulus, the responses still require a ",(0,i.jsx)(t.code,{children:"location"}),". For example this could be used to collect demographic information from a participant using the following snippet:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:' {\n   "type": "questionnaire",\n   "response": [\n     {\n       "id": "gender",\n       "prompt": "Gender:",\n       "required": true,\n       "location": "belowStimulus",\n       "type": "checkbox",\n       "options": [\n         {\n           "label": "Man",\n           "value": "Man"\n         },\n         {\n           "label": "Woman",\n           "value": "Woman"\n         },\n         {\n           "label": "Genderqueer",\n           "value": "Genderqueer"\n         },\n         {\n           "label": "Third-gender",\n           "value": "Third-gender"\n         },\n         ... etc.\n       ]\n     }\n   ]\n }\n'})}),"\n",(0,i.jsx)(t.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Inherited from"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"correctAnswer?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/Answer",children:(0,i.jsx)(t.code,{children:"Answer"})}),"[]"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"correctAnswer"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"description?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The description of the component. This is used to identify and provide additional information for the component in the admin panel."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"description"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"instruction?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The instruction of the component. This is used to identify and provide additional information for the component in the admin panel."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"instruction"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"instructionLocation?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:'"sidebar"'})," | ",(0,i.jsx)(t.code,{children:'"aboveStimulus"'})," | ",(0,i.jsx)(t.code,{children:'"belowStimulus"'})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The location of the instructions."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"instructionLocation"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"meta?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Record"}),"<",(0,i.jsx)(t.code,{children:"string"}),", ",(0,i.jsx)(t.code,{children:"unknown"}),">"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The meta data for the component. This is used to identify and provide additional information for the component in the admin panel."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"meta"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nextButtonLocation?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:'"sidebar"'})," | ",(0,i.jsx)(t.code,{children:'"aboveStimulus"'})," | ",(0,i.jsx)(t.code,{children:'"belowStimulus"'})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The location of the next button."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"nextButtonLocation"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nextButtonText?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The text that is displayed on the next button."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"nextButtonText"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"provideFeedback?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"provideFeedback"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"response"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/type-aliases/Response",children:(0,i.jsx)(t.code,{children:"Response"})}),"[]"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The responses to the component"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/typedoc/interfaces/BaseIndividualComponent",children:(0,i.jsx)(t.code,{children:"BaseIndividualComponent"})}),".",(0,i.jsx)(t.code,{children:"response"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"type"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"questionnaire"'})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const s={},d=i.createContext(s);function o(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);