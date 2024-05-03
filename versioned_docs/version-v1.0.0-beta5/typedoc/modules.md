---
sidebar_position: 1
displayed_sidebar: docs
---

# Modules

## Table of contents

### Interfaces

- [Answer](interfaces/Answer.md)
- [BaseIndividualComponent](interfaces/BaseIndividualComponent.md)
- [BaseResponse](interfaces/BaseResponse.md)
- [CheckboxResponse](interfaces/CheckboxResponse.md)
- [ComponentBlock](interfaces/ComponentBlock.md)
- [ComponentBlockCondition](interfaces/ComponentBlockCondition.md)
- [DropdownResponse](interfaces/DropdownResponse.md)
- [GlobalConfig](interfaces/GlobalConfig.md)
- [IFrameResponse](interfaces/IFrameResponse.md)
- [ImageComponent](interfaces/ImageComponent.md)
- [IndividualComponentAllResponsesCondition](interfaces/IndividualComponentAllResponsesCondition.md)
- [IndividualComponentSingleResponseCondition](interfaces/IndividualComponentSingleResponseCondition.md)
- [LikertResponse](interfaces/LikertResponse.md)
- [LongTextResponse](interfaces/LongTextResponse.md)
- [MarkdownComponent](interfaces/MarkdownComponent.md)
- [NumericalResponse](interfaces/NumericalResponse.md)
- [Option](interfaces/Option.md)
- [ParticipantData](interfaces/ParticipantData.md)
- [QuestionnaireComponent](interfaces/QuestionnaireComponent.md)
- [RadioResponse](interfaces/RadioResponse.md)
- [ReactComponent](interfaces/ReactComponent.md)
- [RepeatedComponentBlockCondition](interfaces/RepeatedComponentBlockCondition.md)
- [Sequence](interfaces/Sequence.md)
- [ShortTextResponse](interfaces/ShortTextResponse.md)
- [SliderResponse](interfaces/SliderResponse.md)
- [StoredAnswer](interfaces/StoredAnswer.md)
- [StudyConfig](interfaces/StudyConfig.md)
- [StudyMetadata](interfaces/StudyMetadata.md)
- [UIConfig](interfaces/UIConfig.md)
- [WebsiteComponent](interfaces/WebsiteComponent.md)

### Type Aliases

- [IndividualComponent](modules.md#individualcomponent)
- [InheritedComponent](modules.md#inheritedcomponent)
- [InterruptionBlock](modules.md#interruptionblock)
- [Response](modules.md#response)
- [SkipConditions](modules.md#skipconditions)

## Type Aliases

### IndividualComponent

Ƭ **IndividualComponent**: [`MarkdownComponent`](interfaces/MarkdownComponent.md) \| [`ReactComponent`](interfaces/ReactComponent.md) \| [`ImageComponent`](interfaces/ImageComponent.md) \| [`WebsiteComponent`](interfaces/WebsiteComponent.md) \| [`QuestionnaireComponent`](interfaces/QuestionnaireComponent.md)

#### Defined in

[parser/types.ts:455](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L455)

___

### InheritedComponent

Ƭ **InheritedComponent**: `Partial`\<[`IndividualComponent`](modules.md#individualcomponent)\> & \{ `baseComponent`: `string`  }

An InheritedComponent is a component that inherits properties from a baseComponent. This is used to avoid repeating properties in components. This also means that components in the baseComponents object can be partially defined, while components in the components object can inherit from them and must be fully defined and include all properties (after potentially merging with a base component).

#### Defined in

[parser/types.ts:547](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L547)

___

### InterruptionBlock

Ƭ **InterruptionBlock**: `DeterministicInterruption` \| `RandomInterruption`

#### Defined in

[parser/types.ts:475](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L475)

___

### Response

Ƭ **Response**: [`NumericalResponse`](interfaces/NumericalResponse.md) \| [`ShortTextResponse`](interfaces/ShortTextResponse.md) \| [`LongTextResponse`](interfaces/LongTextResponse.md) \| [`LikertResponse`](interfaces/LikertResponse.md) \| [`DropdownResponse`](interfaces/DropdownResponse.md) \| [`SliderResponse`](interfaces/SliderResponse.md) \| [`RadioResponse`](interfaces/RadioResponse.md) \| [`CheckboxResponse`](interfaces/CheckboxResponse.md) \| [`IFrameResponse`](interfaces/IFrameResponse.md)

#### Defined in

[parser/types.ts:265](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L265)

___

### SkipConditions

Ƭ **SkipConditions**: ([`IndividualComponentSingleResponseCondition`](interfaces/IndividualComponentSingleResponseCondition.md) \| [`IndividualComponentAllResponsesCondition`](interfaces/IndividualComponentAllResponsesCondition.md) \| [`ComponentBlockCondition`](interfaces/ComponentBlockCondition.md) \| [`RepeatedComponentBlockCondition`](interfaces/RepeatedComponentBlockCondition.md))[]

The SkipConditions interface is used to define skip conditions. This is used to skip to a different component or block based on the response to a component or the number of correct or incorrect responses in a block. Skip conditions work recursively, that is if you have a nested block, they parent blocks' skip conditions will be considered when computing the skip logic.

#### Defined in

[parser/types.ts:528](https://github.com/revisit-studies/study/blob/cb2c5ee/src/parser/types.ts#L528)
