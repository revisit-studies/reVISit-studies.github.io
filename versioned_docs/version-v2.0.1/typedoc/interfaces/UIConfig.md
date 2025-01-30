---
sidebar_position: 1
displayed_sidebar: reference
---

# UIConfig

Defined in: [parser/types.ts:84](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L84)

The UIConfig is used to configure the UI of the app.
This includes the logo, contact email, and whether to show a progress bar.
The UIConfig is also used to configure the sidebar, which can be used to display the task instructions and capture responses. Below is an example of how the UI Config would look in your study configuration (note, there are optional fields that are not shown here):
```js
uiConfig:{
 "contactEmail": "contact@revisit.dev",
 "helpTextPath": "<study-name>/assets/help.md",
 "logoPath": "<study-name>/assets/logo.jpg",
 "withProgressBar": true,
 "autoDownloadStudy": true
 "autoDownloadTime": 5000,
 "studyEndMsg": "Thank you for completing this study. You're the best!",
 "sidebar": true,
 "windowEventDebounceTime": 500,
 "urlParticipantIdParam": "PROLIFIC_ID",
 "numSequences": 500
}
```
In the above, the `path/to/assets/` path is referring to the path to your individual study assets. It is common practice to have your study directory contain an `assets` directory where all components and images relevant to your study reside. Note that this path is relative to the `public` folder of the repository - as is all other paths you define in reVISit (aside from React components whose paths are relative to `src/public`.)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="autodownloadstudy"></a> `autoDownloadStudy?` | `boolean` | Controls whether the study data is automatically downloaded at the end of the study. | [parser/types.ts:94](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L94) |
| <a id="autodownloadtime"></a> `autoDownloadTime?` | `number` | The time in milliseconds to wait before automatically downloading the study data. | [parser/types.ts:96](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L96) |
| <a id="contactemail"></a> `contactEmail` | `string` | The email address that used during the study if a participant clicks contact. | [parser/types.ts:86](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L86) |
| <a id="enumeratequestions"></a> `enumerateQuestions?` | `boolean` | Whether to prepend questions with their index (+ 1). This should only be used when all questions are in the same location, e.g. all are in the side bar. | [parser/types.ts:118](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L118) |
| <a id="helptextpath"></a> `helpTextPath?` | `string` | The path to the help text file. This is displayed when a participant clicks help. Markdown is supported. | [parser/types.ts:88](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L88) |
| <a id="logopath"></a> `logoPath` | `string` | The path to the logo image. This is displayed on the landing page and the header. | [parser/types.ts:90](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L90) |
| <a id="nextonenter"></a> `nextOnEnter?` | `boolean` | Whether enter key should move to the next question. Defaults to false. | [parser/types.ts:124](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L124) |
| <a id="numsequences"></a> `numSequences?` | `number` | The number of sequences to generate for the study. This is used to generate the random sequences for the study. The default is 1000. | [parser/types.ts:114](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L114) |
| <a id="participantnamefield"></a> `participantNameField?` | `string` | The default name field for a participant. Directs revisit to use the task and response id as a name in UI elements. For example, if you wanted the response 'prolificId' from the task 'introduction' to be the name, this field would be 'introduction.prolificId' | [parser/types.ts:122](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L122) |
| <a id="recordstudyaudio"></a> `recordStudyAudio?` | `boolean` | Whether or not we want to utilize think-aloud features. If true, will record audio on all components unless deactivated on individual components. Defaults to false. | [parser/types.ts:100](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L100) |
| <a id="sidebar"></a> `sidebar` | `boolean` | Controls whether the left sidebar is rendered at all. Required to be true if your response's location is set to sidebar for any question. | [parser/types.ts:102](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L102) |
| <a id="sidebarwidth"></a> `sidebarWidth?` | `number` | The width of the left sidebar. Defaults to 300. | [parser/types.ts:104](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L104) |
| <a id="studyendmsg"></a> `studyEndMsg?` | `string` | The message to display when the study ends. | [parser/types.ts:98](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L98) |
| <a id="timeoutreject"></a> `timeoutReject?` | `boolean` | Whether to redirect a timed out participant to a rejection page. This only works for components where the `nextButtonDisableTime` field is set. | [parser/types.ts:120](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L120) |
| <a id="urlparticipantidparam"></a> `urlParticipantIdParam?` | `string` | If the participant ID is passed in the URL, this is the name of the querystring parameter that is used to capture the participant ID (e.g. PROLIFIC_ID). This will allow a user to continue a study on different devices and browsers. | [parser/types.ts:110](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L110) |
| <a id="windoweventdebouncetime"></a> `windowEventDebounceTime?` | `number` | Debounce time in milliseconds for automatically tracked window events. Defaults to 100. E.g 100 here means 1000ms / 100ms = 10 times a second, 200 here means 1000ms / 200ms = 5 times per second | [parser/types.ts:106](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L106) |
| <a id="withprogressbar"></a> `withProgressBar` | `boolean` | Controls whether the progress bar is rendered in the study. | [parser/types.ts:92](https://github.com/revisit-studies/study/blob/cc971c3a87dd8aa25af38cb8fdda41a9d7f7e906/src/parser/types.ts#L92) |
