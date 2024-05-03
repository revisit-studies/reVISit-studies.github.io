---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: QuestionnaireComponent

The QuestionnaireComponent interface is used to define the properties of a questionnaire component. A QuestionnaireComponent is used to render questions with different response types. The response types are also defined with these documentation. The main use case of this component type is to ask participants questions, without using markdown, websites, images, etc.

## Hierarchy

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

  ↳ **`QuestionnaireComponent`**

## Table of contents

### Properties

- [correctAnswer](QuestionnaireComponent.md#correctanswer)
- [description](QuestionnaireComponent.md#description)
- [instruction](QuestionnaireComponent.md#instruction)
- [instructionLocation](QuestionnaireComponent.md#instructionlocation)
- [meta](QuestionnaireComponent.md#meta)
- [nextButtonLocation](QuestionnaireComponent.md#nextbuttonlocation)
- [nextButtonText](QuestionnaireComponent.md#nextbuttontext)
- [provideFeedback](QuestionnaireComponent.md#providefeedback)
- [response](QuestionnaireComponent.md#response)
- [type](QuestionnaireComponent.md#type)

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

• **type**: ``"questionnaire"``

#### Defined in

[parser/types.ts:452](https://github.com/revisit-studies/study/blob/bdd28e8/src/parser/types.ts#L452)
