---
sidebar_position: 1
displayed_sidebar: docs
---

# Interface: IndividualComponentAllResponsesCondition

The IndividualComponentAllResponsesCondition interface is used to define a SkipCondition based on all answers to a specific component. If the component is repeated within the block, this condition will only check the first instance of the component once the order is flattened. If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.

## Table of contents

### Properties

- [check](IndividualComponentAllResponsesCondition.md#check)
- [name](IndividualComponentAllResponsesCondition.md#name)
- [to](IndividualComponentAllResponsesCondition.md#to)

## Properties

### check

• **check**: ``"responses"``

The check we'll perform.

#### Defined in

[parser/types.ts:483](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L483)

___

### name

• **name**: `string`

The name of the component to check.

#### Defined in

[parser/types.ts:481](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L481)

___

### to

• **to**: `string`

The id of the component or block to skip to

#### Defined in

[parser/types.ts:485](https://github.com/revisit-studies/study/blob/4b1bc13/src/parser/types.ts#L485)
