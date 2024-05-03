---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: ReactComponent

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
https://revisit.dev/study/demo-click-accuracy-test (https://github.com/revisit-studies/study/tree/v1.0.0-beta5
https://revisit.dev/study/demo-brush-interactions (https://github.com/revisit-studies/study/tree/1.0.0-beta4/src/public/demo-brush-interactions/assets)

## Hierarchy

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

  ↳ **`ReactComponent`**

## Table of contents

### Properties

- [correctAnswer](ReactComponent.md#correctanswer)
- [description](ReactComponent.md#description)
- [instruction](ReactComponent.md#instruction)
- [instructionLocation](ReactComponent.md#instructionlocation)
- [meta](ReactComponent.md#meta)
- [nextButtonLocation](ReactComponent.md#nextbuttonlocation)
- [nextButtonText](ReactComponent.md#nextbuttontext)
- [parameters](ReactComponent.md#parameters)
- [path](ReactComponent.md#path)
- [provideFeedback](ReactComponent.md#providefeedback)
- [response](ReactComponent.md#response)
- [type](ReactComponent.md#type)

## Properties

### correctAnswer

• `Optional` **correctAnswer**: [`Answer`](Answer.md)[]

The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[correctAnswer](BaseIndividualComponent.md#correctanswer)

#### Defined in

[parser/types.ts:302](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L302)

___

### description

• `Optional` **description**: `string`

The description of the component. This is used to identify and provide additional information for the component in the admin panel.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[description](BaseIndividualComponent.md#description)

#### Defined in

[parser/types.ts:308](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L308)

___

### instruction

• `Optional` **instruction**: `string`

The instruction of the component. This is used to identify and provide additional information for the component in the admin panel.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[instruction](BaseIndividualComponent.md#instruction)

#### Defined in

[parser/types.ts:310](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L310)

___

### instructionLocation

• `Optional` **instructionLocation**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

The location of the instructions.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[instructionLocation](BaseIndividualComponent.md#instructionlocation)

#### Defined in

[parser/types.ts:300](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L300)

___

### meta

• `Optional` **meta**: `Record`\<`string`, `unknown`\>

The meta data for the component. This is used to identify and provide additional information for the component in the admin panel.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[meta](BaseIndividualComponent.md#meta)

#### Defined in

[parser/types.ts:306](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L306)

___

### nextButtonLocation

• `Optional` **nextButtonLocation**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

The location of the next button.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[nextButtonLocation](BaseIndividualComponent.md#nextbuttonlocation)

#### Defined in

[parser/types.ts:298](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L298)

___

### nextButtonText

• `Optional` **nextButtonText**: `string`

The text that is displayed on the next button.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[nextButtonText](BaseIndividualComponent.md#nextbuttontext)

#### Defined in

[parser/types.ts:296](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L296)

___

### parameters

• `Optional` **parameters**: `Record`\<`string`, `unknown`\>

The parameters that are passed to the react component. These can be used within your react component to render different things.

#### Defined in

[parser/types.ts:368](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L368)

___

### path

• **path**: `string`

The path to the react component. This should be a relative path from the src/public folder.

#### Defined in

[parser/types.ts:366](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L366)

___

### provideFeedback

• `Optional` **provideFeedback**: `boolean`

Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false.

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[provideFeedback](BaseIndividualComponent.md#providefeedback)

#### Defined in

[parser/types.ts:304](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L304)

___

### response

• **response**: [`Response`](../modules.md#response)[]

The responses to the component

#### Inherited from

[BaseIndividualComponent](BaseIndividualComponent.md).[response](BaseIndividualComponent.md#response)

#### Defined in

[parser/types.ts:292](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L292)

___

### type

• **type**: ``"react-component"``

#### Defined in

[parser/types.ts:364](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L364)
