# GlobalStoreOperandTransform

> **GlobalStoreOperandTransform** = \{ `operation`: `"add"` \| `"subtract"` \| `"multiply"` \| `"divide"` \| `"subtractFrom"` \| `"divideInto"`; `value`: `number`; \} \| \{ `operation`: `"not"`; \}

Defined in: [parser/types.ts:26](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L26)

Transform the operand before applying the action; reverse operations use value op operand.
