# IndividualComponentAllResponsesCondition

Defined in: [parser/types.ts:1515](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L1515)

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
| <a id="check"></a> `check` | `"responses"` | The check we'll perform. | [parser/types.ts:1519](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L1519) |
| <a id="name"></a> `name` | `string` | The name of the component to check. | [parser/types.ts:1517](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L1517) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1521](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L1521) |
