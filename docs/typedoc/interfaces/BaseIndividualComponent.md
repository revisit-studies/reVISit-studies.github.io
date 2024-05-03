---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: BaseIndividualComponent

The BaseIndividualComponent interface is used to define the required fields for all components.

All components must include the response field, which is an array of Response interfaces.
There are additional optional fields that can be included in a component that help layout the task. These include the nextButtonText, nextButtonLocation, instructionLocation, correctAnswer.
There are other fields that can be included in a component that are used to identify the task in the admin panel. These include the meta, description, instruction, and title fields.

## Hierarchy

- **`BaseIndividualComponent`**

  ↳ [`MarkdownComponent`](MarkdownComponent.md)

  ↳ [`ReactComponent`](ReactComponent.md)

  ↳ [`ImageComponent`](ImageComponent.md)

  ↳ [`WebsiteComponent`](WebsiteComponent.md)

  ↳ [`QuestionnaireComponent`](QuestionnaireComponent.md)

## Table of contents

### Properties

- [correctAnswer](BaseIndividualComponent.md#correctanswer)
- [description](BaseIndividualComponent.md#description)
- [instruction](BaseIndividualComponent.md#instruction)
- [instructionLocation](BaseIndividualComponent.md#instructionlocation)
- [meta](BaseIndividualComponent.md#meta)
- [nextButtonLocation](BaseIndividualComponent.md#nextbuttonlocation)
- [nextButtonText](BaseIndividualComponent.md#nextbuttontext)
- [provideFeedback](BaseIndividualComponent.md#providefeedback)
- [response](BaseIndividualComponent.md#response)

## Properties

### correctAnswer

• `Optional` **correctAnswer**: [`Answer`](Answer.md)[]

The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess.

#### Defined in

[parser/types.ts:302](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L302)

___

### description

• `Optional` **description**: `string`

The description of the component. This is used to identify and provide additional information for the component in the admin panel.

#### Defined in

[parser/types.ts:308](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L308)

___

### instruction

• `Optional` **instruction**: `string`

The instruction of the component. This is used to identify and provide additional information for the component in the admin panel.

#### Defined in

[parser/types.ts:310](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L310)

___

### instructionLocation

• `Optional` **instructionLocation**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

The location of the instructions.

#### Defined in

[parser/types.ts:300](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L300)

___

### meta

• `Optional` **meta**: `Record`\<`string`, `unknown`\>

The meta data for the component. This is used to identify and provide additional information for the component in the admin panel.

#### Defined in

[parser/types.ts:306](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L306)

___

### nextButtonLocation

• `Optional` **nextButtonLocation**: ``"sidebar"`` \| ``"aboveStimulus"`` \| ``"belowStimulus"``

The location of the next button.

#### Defined in

[parser/types.ts:298](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L298)

___

### nextButtonText

• `Optional` **nextButtonText**: `string`

The text that is displayed on the next button.

#### Defined in

[parser/types.ts:296](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L296)

___

### provideFeedback

• `Optional` **provideFeedback**: `boolean`

Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false.

#### Defined in

[parser/types.ts:304](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L304)

___

### response

• **response**: [`Response`](../modules.md#response)[]

The responses to the component

#### Defined in

[parser/types.ts:292](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L292)
