# DynamicBlock

Defined in: [parser/types.ts:1524](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1524)

The DynamicBlock interface is used to define a block where displayed components are controlled by a function. This is useful when you want to generate the sequence based on answers to previous questions or other factors.

The functionPath property is a path to the function that generates the components. This should be a relative path from the src/public folder.

Here's an example of how to use the DynamicBlock:

```js
{
  "id": "funcBlock",
  "order": "dynamic",
  "functionPath": "<study-name>/assets/function.js",
  "parameters": {
    "param1": "value1",
    "param2": "value2"
  }
}
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="conditional"></a> `conditional?` | `boolean` | The conditional property shows the block only when the URL condition matches its `id`. | [parser/types.ts:1534](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1534) |
| <a id="functionpath"></a> `functionPath` | `string` | The path to the function that generates the components. This should be a relative path from the src/public folder. | [parser/types.ts:1530](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1530) |
| <a id="id"></a> `id` | `string` | The id of the block. This is used to identify the block in the SkipConditions and is only required if you want to refer to the whole block in the condition.to property. | [parser/types.ts:1526](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1526) |
| <a id="order"></a> `order` | `"dynamic"` | The type of order. This can be random (pure random), latinSquare (random with some guarantees), or fixed. | [parser/types.ts:1528](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1528) |
| <a id="parameters"></a> `parameters?` | `Record`\<`string`, `unknown`\> | The parameters that are passed to the function. These can be used within your function to render different things. | [parser/types.ts:1532](https://github.com/revisit-studies/study/blob/317436dc2065f4bc80347c4bd7250d4444518b6d/src/parser/types.ts#L1532) |
