# WebsiteComponent

Defined in: [parser/types.ts:1158](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1158)

The WebsiteComponent interface is used to define the properties of a website component. A WebsiteComponent is used to render an iframe with a website inside of it. This can be used to display an external website or an html file that is located in the public folder.
```json
{
  "type": "website",
  "path": "<study-name>/assets/website.html"
}
```

To pass a data from the config to the website, you can use the `parameters` field as below:

```json
{
  "type": "website",
  "path": "<study-name>/website.html",
  "parameters": {
    "barData": [0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
  },
  "response": [
    {
      "id": "barChart",
      "prompt": "Your selected answer:",
      "location": "belowStimulus",
      "type": "reactive"
    }
  ]
}
```
In the `website.html` file, by including `revisit-communicate.js`, you can use the `Revisit.onDataReceive` method to retrieve the data, and `Revisit.postAnswers` to send the user's responses back to the reVISit as shown in the example below:

```html
<script src="../../revisitUtilities/revisit-communicate.js"></script>
<script>
Revisit.onDataReceive((data) => {
    const barData = data['barData'];
    ...
  });

  // Call out that 'barChart' needs to match ID in 'response' object
  Revisit.postAnswers({ barChart: userAnswer });
  </script>
```

If the html website implements Trrack library for provenance tracking, you can send the provenance graph back to reVISit by calling `Revisit.postProvenance` as shown in the example below. You need to call this each time the Trrack state is updated so that reVISit is kept aware of the changes in the provenance graph.

```ts
const trrack = initializeTrrack({
    initialState,
    registry
  });

  ...
  Revisit.postProvenance(trrack.graph.backend);
```

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="allowfailedtraining"></a> `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If present, will override the allow failed training setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`allowFailedTraining`](BaseIndividualComponent.md#allowfailedtraining) | [parser/types.ts:993](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L993) |
| <a id="clicktorecord"></a> `clickToRecord?` | `boolean` | Enables a click-and-hold microphone button instead of continuous recording. When true, audio is muted by default and is recorded only while the button is held. When false, recording starts immediately and can be paused/resumed via the microphone button. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`clickToRecord`](BaseIndividualComponent.md#clicktorecord) | [parser/types.ts:997](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L997) |
| <a id="correctanswer"></a> `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`correctAnswer`](BaseIndividualComponent.md#correctanswer) | [parser/types.ts:953](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L953) |
| <a id="description"></a> `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`description`](BaseIndividualComponent.md#description) | [parser/types.ts:957](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L957) |
| <a id="enumeratequestions"></a> `enumerateQuestions?` | `boolean` | Whether to prepend questions with their index (+ 1). This should only be used when all questions are in the same location, e.g. all are in the side bar. If present, will override the enumeration of questions setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`enumerateQuestions`](BaseIndividualComponent.md#enumeratequestions) | [parser/types.ts:1001](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1001) |
| <a id="helptextpath"></a> `helpTextPath?` | `string` | The path to the help text file. This is displayed when a participant clicks help. Markdown is supported. If present, will override the help text path set in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`helpTextPath`](BaseIndividualComponent.md#helptextpath) | [parser/types.ts:973](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L973) |
| <a id="instruction"></a> `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instruction`](BaseIndividualComponent.md#instruction) | [parser/types.ts:969](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L969) |
| <a id="instructionlocation"></a> `instructionLocation?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | The location of the instructions. If present, will override the instruction location setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instructionLocation`](BaseIndividualComponent.md#instructionlocation) | [parser/types.ts:971](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L971) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`meta`](BaseIndividualComponent.md#meta) | [parser/types.ts:955](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L955) |
| <a id="nextbuttondisabletime"></a> `nextButtonDisableTime?` | `number` | The time in milliseconds to wait before the next button is disabled. If present, will override the next button disable time setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonDisableTime`](BaseIndividualComponent.md#nextbuttondisabletime) | [parser/types.ts:983](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L983) |
| <a id="nextbuttonenabletime"></a> `nextButtonEnableTime?` | `number` | The time in milliseconds to wait before the next button is enabled. If present, will override the next button enable time setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonEnableTime`](BaseIndividualComponent.md#nextbuttonenabletime) | [parser/types.ts:981](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L981) |
| <a id="nextbuttonlocation"></a> `nextButtonLocation?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | The location of the next button. If present, will override the next button location setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonLocation`](BaseIndividualComponent.md#nextbuttonlocation) | [parser/types.ts:979](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L979) |
| <a id="nextbuttontext"></a> `nextButtonText?` | `string` | The text to display on the next button. If present, will override the next button text setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonText`](BaseIndividualComponent.md#nextbuttontext) | [parser/types.ts:977](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L977) |
| <a id="nextonenter"></a> `nextOnEnter?` | `boolean` | Whether enter key should move to the next question. If present, will override the enter key setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextOnEnter`](BaseIndividualComponent.md#nextonenter) | [parser/types.ts:975](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L975) |
| <a id="parameters"></a> `parameters?` | `Record`\<`string`, `unknown`\> | The parameters that are passed to the website (iframe). These can be used within your website to render different things. | - | [parser/types.ts:1163](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1163) |
| <a id="path"></a> `path` | `string` | The path to the website. This should be a relative path from the public folder or could be an external website. | - | [parser/types.ts:1161](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1161) |
| <a id="previousbutton"></a> `previousButton?` | `boolean` | Whether to show the previous button. If present, will override the previous button setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`previousButton`](BaseIndividualComponent.md#previousbutton) | [parser/types.ts:985](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L985) |
| <a id="previousbuttontext"></a> `previousButtonText?` | `string` | The text that is displayed on the previous button. If present, will override the previous button text setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`previousButtonText`](BaseIndividualComponent.md#previousbuttontext) | [parser/types.ts:987](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L987) |
| <a id="providefeedback"></a> `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If present, will override the provide feedback setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`provideFeedback`](BaseIndividualComponent.md#providefeedback) | [parser/types.ts:989](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L989) |
| <a id="recordaudio"></a> `recordAudio?` | `boolean` | Whether or not we want to utilize think-aloud features. If present, will override the record audio setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`recordAudio`](BaseIndividualComponent.md#recordaudio) | [parser/types.ts:995](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L995) |
| <a id="recordscreen"></a> `recordScreen?` | `boolean` | Whether or not we want to utilize screen recording feature. If present, will override the record screen setting in the uiConfig. If true, the uiConfig must have recordScreen set to true or the screen will not be captured. It's also required that the library component, $screen-recording.components.screenRecordingPermission, be included in the study at some point before this component to ensure permissions are granted and screen capture has started. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`recordScreen`](BaseIndividualComponent.md#recordscreen) | [parser/types.ts:999](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L999) |
| <a id="response"></a> `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`response`](BaseIndividualComponent.md#response) | [parser/types.ts:949](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L949) |
| <a id="responsedividers"></a> `responseDividers?` | `boolean` | Whether to show the response dividers. If present, will override the response dividers setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`responseDividers`](BaseIndividualComponent.md#responsedividers) | [parser/types.ts:1003](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1003) |
| <a id="responseorder"></a> `responseOrder?` | `"random"` \| `"fixed"` | The order of the responses. Defaults to 'fixed'. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`responseOrder`](BaseIndividualComponent.md#responseorder) | [parser/types.ts:1007](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1007) |
| <a id="showtitle"></a> `showTitle?` | `boolean` | Controls whether the title should be hidden in the study. If present, will override the title setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`showTitle`](BaseIndividualComponent.md#showtitle) | [parser/types.ts:965](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L965) |
| <a id="showtitlebar"></a> `showTitleBar?` | `boolean` | Controls whether the title bar should be hidden in the study. If present, will override the title bar setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`showTitleBar`](BaseIndividualComponent.md#showtitlebar) | [parser/types.ts:967](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L967) |
| <a id="sidebarwidth"></a> `sidebarWidth?` | `number` | The width of the left sidebar. If present, will override the sidebar width setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`sidebarWidth`](BaseIndividualComponent.md#sidebarwidth) | [parser/types.ts:963](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L963) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`style`](BaseIndividualComponent.md#style) | [parser/types.ts:1011](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1011) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`stylesheetPath`](BaseIndividualComponent.md#stylesheetpath) | [parser/types.ts:1009](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1009) |
| <a id="trainingattempts"></a> `trainingAttempts?` | `number` | The number of training attempts allowed for the component. If present, will override the training attempts setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`trainingAttempts`](BaseIndividualComponent.md#trainingattempts) | [parser/types.ts:991](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L991) |
| <a id="type"></a> `type` | `"website"` | - | - | [parser/types.ts:1159](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1159) |
| <a id="windoweventdebouncetime"></a> `windowEventDebounceTime?` | `number` | Debounce time in milliseconds for automatically tracked window events. If present, will override the window event debounce time setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`windowEventDebounceTime`](BaseIndividualComponent.md#windoweventdebouncetime) | [parser/types.ts:1005](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L1005) |
| <a id="withprogressbar"></a> `withProgressBar?` | `boolean` | Controls whether the progress bar is rendered. If present, will override the progress bar setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`withProgressBar`](BaseIndividualComponent.md#withprogressbar) | [parser/types.ts:959](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L959) |
| <a id="withsidebar"></a> `withSidebar?` | `boolean` | Controls whether the left sidebar is rendered at all. Required to be true if your response's location is set to sidebar for any question. If present, will override the sidebar setting in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`withSidebar`](BaseIndividualComponent.md#withsidebar) | [parser/types.ts:961](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L961) |
