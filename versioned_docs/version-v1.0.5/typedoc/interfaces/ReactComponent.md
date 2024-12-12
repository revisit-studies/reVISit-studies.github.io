---
sidebar_position: 1
displayed_sidebar: reference
---

# ReactComponent

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
https://revisit.dev/study/demo-click-accuracy-test (https://github.com/revisit-studies/study/tree/v1.0.5/src/public/demo-click-accuracy-test/assets)
https://revisit.dev/study/demo-brush-interactions (https://github.com/revisit-studies/study/tree/v1.0.5/src/public/demo-brush-interactions/assets)

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`allowFailedTraining` |
| `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`correctAnswer` |
| `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`description` |
| `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`instruction` |
| `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`instructionLocation` |
| `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`meta` |
| `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonLocation` |
| `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonText` |
| `parameters?` | `Record`\<`string`, `unknown`\> | The parameters that are passed to the react component. These can be used within your react component to render different things. | - |
| `path` | `string` | The path to the react component. This should be a relative path from the src/public folder. | - |
| `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`provideFeedback` |
| `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).`response` |
| `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`trainingAttempts` |
| `type` | `"react-component"` | - | - |
