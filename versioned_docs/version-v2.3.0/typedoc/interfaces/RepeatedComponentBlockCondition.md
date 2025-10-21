# RepeatedComponentBlockCondition

Defined in: [parser/types.ts:1335](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1335)

The RepeatedComponentBlockCondition interface is used to define a SkipCondition based on the number of correct or incorrect repeated components. You might use this if you need to check if an attention check was failed multiple times. This is similar to the [ComponentBlockCondition](../ComponentBlockCondition), but it only checks a specific repeated component.

Here's an example of how to use the RepeatedComponentBlockCondition:

```js
{
 ...
 "skip": [
   {
     "name": "attentionCheck",
     "check": "repeatedComponent",
     "condition": "numIncorrect",
     "value": 2,
     "to": "end"
   }
 ]
 ...
}
```

In this example, when the number of incorrect responses to the repeated component with the name "attentionCheck" is two, the participant will be redirected to the end of the study. If the number of incorrect responses is less than two, the participant will continue to the next component in the sequence.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="check"></a> `check` | `"repeatedComponent"` | The check we'll perform. | [parser/types.ts:1339](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1339) |
| <a id="condition"></a> `condition` | `"numCorrect"` \| `"numIncorrect"` | The condition to check. | [parser/types.ts:1341](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1341) |
| <a id="name"></a> `name` | `string` | The name of the repeated component to check (e.g. attentionCheck). | [parser/types.ts:1337](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1337) |
| <a id="to"></a> `to` | `string` | The id of the component or block to skip to | [parser/types.ts:1345](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1345) |
| <a id="value"></a> `value` | `number` | The number of correct or incorrect responses to check for. | [parser/types.ts:1343](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L1343) |
