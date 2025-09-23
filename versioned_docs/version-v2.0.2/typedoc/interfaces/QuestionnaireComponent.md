# QuestionnaireComponent

Defined in: [parser/types.ts:742](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L742)

A QuestionnaireComponent is used to render simple questions that require a response. The main use case of this component type is to ask participants questions when you don't need to render a stimulus. Please note, that even though we're not using a stimulus, the responses still require a `location`. For example this could be used to collect demographic information from a participant using the following snippet:

```js
{
 "type": "questionnaire",
 "response": [
   {
     "id": "gender",
     "prompt": "Gender:",
     "location": "belowStimulus",
     "type": "checkbox",
     "options": ["Man", "Woman", "Genderqueer", "Third-gender", ...]
   }
 ]
}
```

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="allowfailedtraining"></a> `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`allowFailedTraining`](BaseIndividualComponent.md#allowfailedtraining) | [parser/types.ts:552](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L552) |
| <a id="correctanswer"></a> `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`correctAnswer`](BaseIndividualComponent.md#correctanswer) | [parser/types.ts:546](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L546) |
| <a id="description"></a> `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`description`](BaseIndividualComponent.md#description) | [parser/types.ts:556](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L556) |
| <a id="instruction"></a> `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instruction`](BaseIndividualComponent.md#instruction) | [parser/types.ts:558](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L558) |
| <a id="instructionlocation"></a> `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instructionLocation`](BaseIndividualComponent.md#instructionlocation) | [parser/types.ts:544](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L544) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`meta`](BaseIndividualComponent.md#meta) | [parser/types.ts:554](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L554) |
| <a id="nextbuttondisabletime"></a> `nextButtonDisableTime?` | `number` | A timeout (in ms) after which the next button will be disabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonDisableTime`](BaseIndividualComponent.md#nextbuttondisabletime) | [parser/types.ts:562](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L562) |
| <a id="nextbuttonenabletime"></a> `nextButtonEnableTime?` | `number` | A timer (in ms) after which the next button will be enabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonEnableTime`](BaseIndividualComponent.md#nextbuttonenabletime) | [parser/types.ts:564](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L564) |
| <a id="nextbuttonlocation"></a> `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonLocation`](BaseIndividualComponent.md#nextbuttonlocation) | [parser/types.ts:542](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L542) |
| <a id="nextbuttontext"></a> `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonText`](BaseIndividualComponent.md#nextbuttontext) | [parser/types.ts:540](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L540) |
| <a id="providefeedback"></a> `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`provideFeedback`](BaseIndividualComponent.md#providefeedback) | [parser/types.ts:548](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L548) |
| <a id="recordaudio"></a> `recordAudio?` | `boolean` | Whether or not to record audio for a component. Only relevant if recordStudyAudio in the uiConfig is true. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`recordAudio`](BaseIndividualComponent.md#recordaudio) | [parser/types.ts:560](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L560) |
| <a id="response"></a> `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`response`](BaseIndividualComponent.md#response) | [parser/types.ts:536](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L536) |
| <a id="responsedividers"></a> `responseDividers?` | `boolean` | Whether to show the response dividers. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`responseDividers`](BaseIndividualComponent.md#responsedividers) | [parser/types.ts:566](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L566) |
| <a id="trainingattempts"></a> `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`trainingAttempts`](BaseIndividualComponent.md#trainingattempts) | [parser/types.ts:550](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L550) |
| <a id="type"></a> `type` | `"questionnaire"` | - | - | [parser/types.ts:743](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L743) |
