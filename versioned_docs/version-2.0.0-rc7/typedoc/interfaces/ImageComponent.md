---
sidebar_position: 1
displayed_sidebar: reference
---

# ImageComponent

Defined in: [parser/types.ts:647](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L647)

The ImageComponent interface is used to define the properties of an image component. This component is used to render an image with optional styling.

For example, to render an image with a path of `path/to/study/assets/image.jpg` and a max width of 50%, you would use the following snippet:
```js
{
 "type": "image",
 "path": "<study-name>/assets/image.jpg",
 "style": {
 "maxWidth": "50%"
 }
}
```

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="allowfailedtraining"></a> `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`allowFailedTraining`](BaseIndividualComponent.md#allowfailedtraining) | [parser/types.ts:548](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L548) |
| <a id="correctanswer"></a> `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`correctAnswer`](BaseIndividualComponent.md#correctanswer) | [parser/types.ts:542](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L542) |
| <a id="description"></a> `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`description`](BaseIndividualComponent.md#description) | [parser/types.ts:552](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L552) |
| <a id="instruction"></a> `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instruction`](BaseIndividualComponent.md#instruction) | [parser/types.ts:554](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L554) |
| <a id="instructionlocation"></a> `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instructionLocation`](BaseIndividualComponent.md#instructionlocation) | [parser/types.ts:540](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L540) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`meta`](BaseIndividualComponent.md#meta) | [parser/types.ts:550](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L550) |
| <a id="nextbuttondisabletime"></a> `nextButtonDisableTime?` | `number` | A timeout (in ms) after which the next button will be disabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonDisableTime`](BaseIndividualComponent.md#nextbuttondisabletime) | [parser/types.ts:558](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L558) |
| <a id="nextbuttonenabletime"></a> `nextButtonEnableTime?` | `number` | A timer (in ms) after which the next button will be enabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonEnableTime`](BaseIndividualComponent.md#nextbuttonenabletime) | [parser/types.ts:560](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L560) |
| <a id="nextbuttonlocation"></a> `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonLocation`](BaseIndividualComponent.md#nextbuttonlocation) | [parser/types.ts:538](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L538) |
| <a id="nextbuttontext"></a> `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonText`](BaseIndividualComponent.md#nextbuttontext) | [parser/types.ts:536](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L536) |
| <a id="path"></a> `path` | `string` | The path to the image. This should be a relative path from the public folder. | - | [parser/types.ts:650](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L650) |
| <a id="providefeedback"></a> `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`provideFeedback`](BaseIndividualComponent.md#providefeedback) | [parser/types.ts:544](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L544) |
| <a id="recordaudio"></a> `recordAudio?` | `boolean` | Whether or not to record audio for a component. Only relevant if recordStudyAudio in the uiConfig is true. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`recordAudio`](BaseIndividualComponent.md#recordaudio) | [parser/types.ts:556](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L556) |
| <a id="response"></a> `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`response`](BaseIndividualComponent.md#response) | [parser/types.ts:532](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L532) |
| <a id="responsedividers"></a> `responseDividers?` | `boolean` | Whether to show the response dividers. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`responseDividers`](BaseIndividualComponent.md#responsedividers) | [parser/types.ts:562](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L562) |
| <a id="style"></a> `style?` | `Record`\<`string`, `string`\> | The style of the image. This is an object with css properties as keys and css values as values. | - | [parser/types.ts:652](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L652) |
| <a id="trainingattempts"></a> `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`trainingAttempts`](BaseIndividualComponent.md#trainingattempts) | [parser/types.ts:546](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L546) |
| <a id="type"></a> `type` | `"image"` | - | - | [parser/types.ts:648](https://github.com/revisit-studies/study/blob/8321281ac346f1aa0a6d05a2638ef2608adef62e/src/parser/types.ts#L648) |
