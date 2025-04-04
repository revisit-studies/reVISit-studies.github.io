---
sidebar_position: 1
displayed_sidebar: reference
---

# RandomInterruption

Defined in: [parser/types.ts:968](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L968)

The RandomInterruption interface is used to define an interruption that will be shown randomly in the block.

For example, if you want to show a single interruption randomly in the block, you would set `"spacing"` to "random" and `"numInterruptions"` to 1. If you want to show 3 interruptions randomly in the block, you would set `"spacing"` to "random" and `"numInterruptions"` to 3.

The components property is an array of the components that will be inserted randomly in the block. These components should reference components in the StudyConfig.components section of the config.

Here's an example of how to use the RandomInterruption:

```js
{
 "order": "fixed",
 "components": [
   "component1",
   "component2",
   "component3",
   "component4",
   "component5",
   "component6"
 ],
 "interruptions": [
   {
     "spacing": "random",
     "numInterruptions": 3,
     "components": [
       "interruption1",
       "interruption2"
     ]
   }
 ]
}
```

The resulting sequence array could be:

```js
[
 ["component1", "interruption1", "interruption2", "component2", "interruption1", "interruption2", "component3", "component4", "component5", "interruption1", "interruption2", "component6],
 ["component1", "interruption1", "interruption2", "component2", "interruption1", "interruption2", "component3", "component4", "interruption1", "interruption2", "component5", "component6],
 ["component1", "component2" "interruption1", "interruption2", "component3", "interruption1", "interruption2", "component4", "component5", "interruption1", "interruption2", "component6],
 ...
]
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | `string`[] | The components that are included in the interruption. These reference components in the StudyConfig.components section of the config. | [parser/types.ts:974](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L974) |
| <a id="numinterruptions"></a> `numInterruptions` | `number` | The number of times the interruption will be randomly added | [parser/types.ts:972](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L972) |
| <a id="spacing"></a> `spacing` | `"random"` | If spacing is set to random, reVISit will add interruptions randomly. These interruptions will not ever be displayed as the first component in the block. | [parser/types.ts:970](https://github.com/revisit-studies/study/blob/2e617a552035dd6d22a4f8cba7e0d8ac40275f33/src/parser/types.ts#L970) |
