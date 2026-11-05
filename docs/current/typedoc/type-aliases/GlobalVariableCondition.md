# GlobalVariableCondition

> **GlobalVariableCondition** = `object` & [`ValueCondition`](ValueCondition.md)

Defined in: [parser/types.ts:2013](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L2013)

The SkipConditions interface is used to define skip conditions. This is used to skip to a different component/block based on the response to a component or based on the number of correct/incorrect responses in a block. Skip conditions work recursively: if you have a nested block, the parent blocks' skip conditions will be considered when computing the skip logic.

Skip conditions are evaluated in the order they are defined in the array. If a condition is met, the participant will be redirected to the component or block specified in the `"to"` property. If no conditions are met, the participant will continue to the next component in the sequence.

Skip conditions allow you to jump to a different component or block. If you intend to skip to a block, you should specify a block id in the sequence. If you intend to skip to a component, you should specify a component id. Skipping backwards is not supported. Skipping to a repeated component will skip to the first instance of the component after the component that triggered the skip.

Please see the interface definitions for more specific information on the different types of skip conditions.

## Type Declaration

### check

> **check**: `"globalVariable"`

### to

> **to**: `string`

### variable

> **variable**: `string`
