# ResponseVisibilityCondition

> **ResponseVisibilityCondition** = `object` & [`ValueCondition`](ValueCondition.md) \| `object` & [`ValueCondition`](ValueCondition.md) \| \{ `comparison`: `"isCorrect"`; `value`: `boolean`; \}

Defined in: [parser/types.ts:466](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L466)

Controls visibility based on another response's answer in the same component.
List equality comparisons ignore selection order.
Unanswered or conditionally hidden controlling responses never satisfy a condition.
