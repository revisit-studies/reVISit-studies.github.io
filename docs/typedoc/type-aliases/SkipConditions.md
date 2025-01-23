---
sidebar_position: 1
displayed_sidebar: reference
---

# SkipConditions

> **SkipConditions**: ([`IndividualComponentSingleResponseCondition`](../interfaces/IndividualComponentSingleResponseCondition.md) \| [`IndividualComponentAllResponsesCondition`](../interfaces/IndividualComponentAllResponsesCondition.md) \| [`ComponentBlockCondition`](../interfaces/ComponentBlockCondition.md) \| [`RepeatedComponentBlockCondition`](../interfaces/RepeatedComponentBlockCondition.md))[]

Defined in: [parser/types.ts:1083](https://github.com/revisit-studies/study/blob/79149c8bf8bccdc63f81d04e34de6bd5b26d533d/src/parser/types.ts#L1083)

The SkipConditions interface is used to define skip conditions. This is used to skip to a different component/block based on the response to a component or based on the number of correct/incorrect responses in a block. Skip conditions work recursively: if you have a nested block, the parent blocks' skip conditions will be considered when computing the skip logic.

Skip conditions are evaluated in the order they are defined in the array. If a condition is met, the participant will be redirected to the component or block specified in the `"to"` property. If no conditions are met, the participant will continue to the next component in the sequence.

Skip conditions allow you to jump to a different component or block. If you intend to skip to a block, you should specify a block id in the sequence. If you intend to skip to a component, you should specify a component id. Skipping backwards is not supported. Skipping to a repeated component will skip to the first instance of the component after the component that triggered the skip.

Please see the interface definitions for more specific information on the different types of skip conditions.
