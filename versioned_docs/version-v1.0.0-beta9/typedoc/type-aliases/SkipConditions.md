---
sidebar_position: 1
displayed_sidebar: docs
---

# SkipConditions

> **SkipConditions**: ([`IndividualComponentSingleResponseCondition`](../interfaces/IndividualComponentSingleResponseCondition.md) \| [`IndividualComponentAllResponsesCondition`](../interfaces/IndividualComponentAllResponsesCondition.md) \| [`ComponentBlockCondition`](../interfaces/ComponentBlockCondition.md) \| [`RepeatedComponentBlockCondition`](../interfaces/RepeatedComponentBlockCondition.md))[]

The SkipConditions interface is used to define skip conditions. This is used to skip to a different component or block based on the response to a component or the number of correct or incorrect responses in a block. Skip conditions work recursively, that is if you have a nested block, they parent blocks' skip conditions will be considered when computing the skip logic.

## Source

[parser/types.ts:528](https://github.com/revisit-studies/study/blob/9476518/src/parser/types.ts#L528)
