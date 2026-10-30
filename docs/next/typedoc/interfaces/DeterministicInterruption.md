# DeterministicInterruption

Defined in: [parser/types.ts:1420](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1420)

The DeterministicInterruption interface is used to define an interruption that will be shown at a specific location in the block.

For example, if you want to show an interruption after the second component in the block, you would set firstLocation to 2. If you want to show an interruption after every 3 components, you would set spacing to 3. If you want to show an interruption after the second component and then every 3 components, you would set firstLocation to 2 and spacing to 3.

The components property is an array of the components that will be inserted at the location specified by firstLocation and spacing. These components should reference components in the StudyConfig.components section of the config.

Here's an example of how to use the DeterministicInterruption:

```json
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
      "firstLocation": 2,
      "spacing": 3,
      "components": [
        "interruption1",
        "interruption2"
      ]
    }
  ]
}
```

The resulting sequence array could be:

```json
[
  ["component1", "component2", "interruption1", "component3", "component4", "component5", "interruption2", "component6"],
  ["component1", "component2", "interruption1", "component3", "component4", "component5", "interruption2", "component6"],
  ["component1", "component2", "interruption1", "component3", "component4", "component5", "interruption2", "component6"],
  ...
]
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | `string`[] | The components that are included in the interruption. These reference components in the StudyConfig.components section of the config. | [parser/types.ts:1426](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1426) |
| <a id="firstlocation"></a> `firstLocation` | `number` | The Location of the first instance of the interruption. If this is set to 2, the interruption will be shown after the second component (inserted at index 2). | [parser/types.ts:1422](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1422) |
| <a id="spacing"></a> `spacing` | `number` | The number of components between breaks. | [parser/types.ts:1424](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L1424) |
