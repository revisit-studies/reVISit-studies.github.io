# IndividualComponentAllResponsesCondition

Defined in: [parser/types.ts:1415](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1415)

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
| <a id="check"></a> `check` | `"responses"` | The check we'll perform. | [parser/types.ts:1419](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1419) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1417](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1417) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1421](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1421) |
