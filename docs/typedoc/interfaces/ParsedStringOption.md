# ParsedStringOption

Defined in: [parser/types.ts:368](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L368)

StringOption normalized to always include a value.

## Extends

- `Omit`\<[`StringOption`](StringOption.md), `"value"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the option. This does not accept markdown. | [`StringOption`](StringOption.md).[`infoText`](StringOption.md#infotext) | [parser/types.ts:351](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L351) |
| <a id="label"></a> `label` | `string` | The label displayed to participants. Markdown is supported. | [`StringOption`](StringOption.md).[`label`](StringOption.md#label) | [parser/types.ts:347](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L347) |
| <a id="value"></a> `value` | `string` | - | - | [parser/types.ts:369](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L369) |
