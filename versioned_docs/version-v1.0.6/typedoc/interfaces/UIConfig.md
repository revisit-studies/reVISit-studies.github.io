# UIConfig

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

| Property | Type | Description |
| :------ | :------ | :------ |
| `autoDownloadStudy?` | `boolean` | Controls whether the study data is automatically downloaded at the end of the study. |
| `autoDownloadTime?` | `number` | The time in milliseconds to wait before automatically downloading the study data. |
| `contactEmail` | `string` | The email address that used during the study if a participant clicks contact. |
| `enumerateQuestions?` | `boolean` | Whether to prepend questions with their index (+ 1). This should only be used when all questions are in the same location, e.g. all are in the side bar. |
| `helpTextPath?` | `string` | The path to the help text file. This is displayed when a participant clicks help. Markdown is supported. |
| `logoPath` | `string` | The path to the logo image. This is displayed on the landing page and the header. |
| `numSequences?` | `number` | The number of sequences to generate for the study. This is used to generate the random sequences for the study. The default is 1000. |
| `sidebar` | `boolean` | Controls whether the left sidebar is rendered at all. Required to be true if your response's location is set to sidebar for any question. |
| `sidebarWidth?` | `number` | The width of the left sidebar. Defaults to 300. |
| `studyEndMsg?` | `string` | The message to display when the study ends. |
| `timeoutReject?` | `boolean` | Whether to redirect a timed out participant to a rejection page. This only works for components where the `nextButtonDisableTime` field is set. |
| `urlParticipantIdParam?` | `string` | If the participant ID is passed in the URL, this is the name of the querystring parameter that is used to capture the participant ID (e.g. PROLIFIC_ID). This will allow a user to continue a study on different devices and browsers. |
| `windowEventDebounceTime?` | `number` | Debounce time in milliseconds for automatically tracked window events. Defaults to 100. E.g 100 here means 1000ms / 100ms = 10 times a second, 200 here means 1000ms / 200ms = 5 times per second |
| `withProgressBar` | `boolean` | Controls whether the progress bar is rendered in the study. |
