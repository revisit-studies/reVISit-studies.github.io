# IndividualComponentSingleResponseCondition

Defined in: [parser/types.ts:1226](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1226)

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
| <a id="check"></a> `check` | `"response"` | The check we'll perform. | [parser/types.ts:1230](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1230) |
| <a id="comparison"></a> `comparison` | `"equal"` \| `"notEqual"` | The comparison to use. | [parser/types.ts:1236](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1236) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1228](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1228) |
| <a id="responseid"></a> `responseId` | `string` | The response id to check. | [parser/types.ts:1232](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1232) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1238](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1238) |
| <a id="value"></a> `value` | `string` \| `number` | The value to check. | [parser/types.ts:1234](https://github.com/revisit-studies/study/blob/3f9f0405fd0a640035b224bca9821c931f0fdb91/src/parser/types.ts#L1234) |
