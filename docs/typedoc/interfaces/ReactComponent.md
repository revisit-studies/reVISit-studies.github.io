---
sidebar_position: 1
displayed_sidebar: reference
---

# ReactComponent

Defined in: [parser/types.ts:623](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L623)

The ReactComponent interface is used to define the properties of a react component. This component is used to render react code with certain parameters. These parameters can be used within your react code to render different things.

Unlike other types of components, the path for a React component is relative to the `src/public/` folder.
Similar to our standard assets, we suggest creating a folder named `src/public/{studyName}/assets` to house all of the React component assets for a particular study.
Your React component which you link to in the path must be default exported from its file.

React components created this way have a generic prop type passed to the component on render, `<StimulusParams<T>>`, which has the following types.

```ts
{
 parameters: T;
 setAnswer: ({ status, provenanceGraph, answers }: { status: boolean, provenanceGraph?: TrrackedProvenance, answers: Record<string, any> }) => void
}
```

parameters is the same object passed in from the ReactComponent type below, allowing you to pass options in from the config to your component.
setAnswer is a callback function allowing the creator of the ReactComponent to programmatically set the answer, as well as the provenance graph. This can be useful if you don't use the default answer interface, and instead have something more unique.

So, for example, if I had the following ReactComponent in my config
```js
{
 type: 'react-component';
 path: 'my_study/CoolComponent.tsx';
 parameters: {
   name: 'Zach';
   age: 26;
 }
}
```

My react component, CoolComponent.tsx, would exist in src/public/my_study/assets, and look something like this

```ts
export default function CoolComponent({ parameters, setAnswer }: StimulusParams<{name: string, age: number}>) {
 // render something
}
```

For in depth examples, see the following studies, and their associated codebases.
https://revisit.dev/study/demo-click-accuracy-test (https://github.com/revisit-studies/study/tree/v2.0.0-rc6/src/public/demo-click-accuracy-test/assets)
https://revisit.dev/study/example-brush-interactions (https://github.com/revisit-studies/study/tree/v2.0.0-rc6/src/public/example-brush-interactions/assets)

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="allowfailedtraining"></a> `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`allowFailedTraining`](BaseIndividualComponent.md#allowfailedtraining) | [parser/types.ts:546](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L546) |
| <a id="correctanswer"></a> `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`correctAnswer`](BaseIndividualComponent.md#correctanswer) | [parser/types.ts:540](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L540) |
| <a id="description"></a> `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`description`](BaseIndividualComponent.md#description) | [parser/types.ts:550](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L550) |
| <a id="instruction"></a> `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instruction`](BaseIndividualComponent.md#instruction) | [parser/types.ts:552](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L552) |
| <a id="instructionlocation"></a> `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instructionLocation`](BaseIndividualComponent.md#instructionlocation) | [parser/types.ts:538](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L538) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`meta`](BaseIndividualComponent.md#meta) | [parser/types.ts:548](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L548) |
| <a id="nextbuttondisabletime"></a> `nextButtonDisableTime?` | `number` | A timeout (in ms) after which the next button will be disabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonDisableTime`](BaseIndividualComponent.md#nextbuttondisabletime) | [parser/types.ts:556](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L556) |
| <a id="nextbuttonenabletime"></a> `nextButtonEnableTime?` | `number` | A timer (in ms) after which the next button will be enabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonEnableTime`](BaseIndividualComponent.md#nextbuttonenabletime) | [parser/types.ts:558](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L558) |
| <a id="nextbuttonlocation"></a> `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonLocation`](BaseIndividualComponent.md#nextbuttonlocation) | [parser/types.ts:536](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L536) |
| <a id="nextbuttontext"></a> `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonText`](BaseIndividualComponent.md#nextbuttontext) | [parser/types.ts:534](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L534) |
| <a id="parameters"></a> `parameters?` | `Record`\<`string`, `unknown`\> | The parameters that are passed to the react component. These can be used within your react component to render different things. | - | [parser/types.ts:628](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L628) |
| <a id="path"></a> `path` | `string` | The path to the react component. This should be a relative path from the src/public folder. | - | [parser/types.ts:626](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L626) |
| <a id="providefeedback"></a> `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`provideFeedback`](BaseIndividualComponent.md#providefeedback) | [parser/types.ts:542](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L542) |
| <a id="recordaudio"></a> `recordAudio?` | `boolean` | Whether or not to record audio for a component. Only relevant if StudyConfig.recordStudyAudio is true. Defaults to true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`recordAudio`](BaseIndividualComponent.md#recordaudio) | [parser/types.ts:554](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L554) |
| <a id="response"></a> `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`response`](BaseIndividualComponent.md#response) | [parser/types.ts:530](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L530) |
| <a id="responsedividers"></a> `responseDividers?` | `boolean` | Whether to show the response dividers. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`responseDividers`](BaseIndividualComponent.md#responsedividers) | [parser/types.ts:560](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L560) |
| <a id="trainingattempts"></a> `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`trainingAttempts`](BaseIndividualComponent.md#trainingattempts) | [parser/types.ts:544](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L544) |
| <a id="type"></a> `type` | `"react-component"` | - | - | [parser/types.ts:624](https://github.com/revisit-studies/study/blob/0a2c8883e69934da9156b86a1efccb1ecaffd2fc/src/parser/types.ts#L624) |
