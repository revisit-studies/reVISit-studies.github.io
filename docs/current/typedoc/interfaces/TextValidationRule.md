# TextValidationRule

Defined in: [parser/types.ts:591](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L591)

A validation rule applied to a short or long text response.
Rules are evaluated in array order, and the first failing rule is displayed to the participant.

For example, the following rules accept only `ReVISit is great`: it must start with `ReVISit`,
contain `great`, not contain `invalid`, equal `ReVISit is great`, and not equal `TEST`.
See the [MDN regular expression syntax cheat sheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)
for help writing regular expression patterns.
```json
"textValidation": [
  {
    "type": "matchesRegex",
    "value": "^ReVISit"
  },
  {
    "type": "contains",
    "value": "great"
  },
  {
    "type": "doesNotContain",
    "value": "invalid"
  },
  {
    "type": "equals",
    "value": "ReVISit is great"
  },
  {
    "type": "doesNotEqual",
    "value": "TEST"
  }
]
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="type"></a> `type` | [`TextValidationType`](../type-aliases/TextValidationType.md) | The operation used to validate the response value. | [parser/types.ts:593](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L593) |
| <a id="value"></a> `value` | `string` | The regular expression pattern or text value used by the validation operation. Must be non-empty for `equals`, `contains`, and `doesNotContain`. Empty `matchesRegex` and `doesNotEqual` values produce a parser warning because they do not restrict responses. | [parser/types.ts:599](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L599) |
