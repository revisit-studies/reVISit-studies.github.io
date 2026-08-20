# IndividualComponentAllResponsesCondition

Defined in: [parser/types.ts:1521](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1521)

The IndividualComponentAllResponsesCondition interface is used to define a SkipCondition based on all answers to a specific component. The skip logic will be checked for every component in the block that has the specified name.

:::info
If you need to check all instances of a repeated component, you should use the RepeatedComponentBlockCondition.
:::

Here's an example of how to use the IndividualComponentAllResponsesCondition:

```json
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
| <a id="check"></a> `check` | `"responses"` | The check we'll perform. | [parser/types.ts:1525](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1525) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1523](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1523) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1527](https://github.com/revisit-studies/study/blob/72b8e5c4fa403736be782c35d94c86b3f785e056/src/parser/types.ts#L1527) |
