# IndividualComponentSingleResponseCondition

Defined in: [parser/types.ts:1511](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1511)

The IndividualComponentSingleResponseCondition interface is used to define a SkipCondition based on a single answer to a specific component. The skip logic will be checked for every component in the block that has the specified name.

:::info
If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.
:::

For example, if you want to skip to a different component based on a response to a specific component, you would use the IndividualComponentSingleResponseCondition. Here's an example of how to use the IndividualComponentSingleResponseCondition:

```json
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
| <a id="check"></a> `check` | `"response"` | The check we'll perform. | [parser/types.ts:1515](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1515) |
| <a id="comparison"></a> `comparison` | `"equal"` \| `"notEqual"` | The comparison to use. | [parser/types.ts:1521](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1521) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1513](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1513) |
| <a id="responseid"></a> `responseId` | `string` | The response id to check. | [parser/types.ts:1517](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1517) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1523](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1523) |
| <a id="value"></a> `value` | `string` \| `number` | The value to check. | [parser/types.ts:1519](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1519) |
