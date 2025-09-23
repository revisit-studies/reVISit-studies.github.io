# IndividualComponentAllResponsesCondition

Defined in: [parser/types.ts:1051](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1051)

The IndividualComponentAllResponsesCondition interface is used to define a SkipCondition based on all answers to a specific component. The skip logic will be checked for every component in the block that has the specified name.

:::info

If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.

:::

Here's an example of how to use the IndividualComponentAllResponsesCondition:

```js
{
 ...
 "skip": [
   {
     "name": "attentionCheck",
     "check": "responses",
     "to": "end"
   }
 ]
 ...
}
```

In this example, if all responses to the component with the ID "attentionCheck" are correct, the participant will be redirected to the end of the study. If any response is incorrect, the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="check"></a> `check` | `"responses"` | The check we'll perform. | [parser/types.ts:1055](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1055) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1053](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1053) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1057](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L1057) |
