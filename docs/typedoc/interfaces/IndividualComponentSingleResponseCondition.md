---
sidebar_position: 1
displayed_sidebar: reference
---

# IndividualComponentSingleResponseCondition

Defined in: [parser/types.ts:1178](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1178)

The IndividualComponentSingleResponseCondition interface is used to define a SkipCondition based on a single answer to a specific component. The skip logic will be checked for every component in the block that has the specified name.

:::info

If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.

:::

For example, if you want to skip to a different component based on a response to a specific component, you would use the IndividualComponentSingleResponseCondition. Here's an example of how to use the IndividualComponentSingleResponseCondition:

```js
{
 ...
 "skip": [
   {
     "name": "attentionCheck",
     "check": "response",
     "responseId": "attentionCheckResponse",
     "value": "the right answer",
     "comparison": "equal",
     "to": "end"
   }
 ]
 ...
}
```

In this example, we assign our skip logic to the component whose ID is "attentionCheck". If the answer given to the response "attentionCheckResponse" is equal to "the right answer", then the user will be redirected to the end of the study. If the response is _not_ equal to "the right answer", then the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="check"></a> `check` | `"response"` | The check we'll perform. | [parser/types.ts:1182](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1182) |
| <a id="comparison"></a> `comparison` | `"equal"` \| `"notEqual"` | The comparison to use. | [parser/types.ts:1188](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1188) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1180](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1180) |
| <a id="responseid"></a> `responseId` | `string` | The response id to check. | [parser/types.ts:1184](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1184) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1190](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1190) |
| <a id="value"></a> `value` | `string` \| `number` | The value to check. | [parser/types.ts:1186](https://github.com/revisit-studies/study/blob/6d0bcf865c88e39cf1cf0007fe3f55213492c22c/src/parser/types.ts#L1186) |
