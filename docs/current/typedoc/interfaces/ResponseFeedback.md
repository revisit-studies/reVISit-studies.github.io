# ResponseFeedback

Defined in: [parser/types.ts:1293](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1293)

Custom training messages. Arrays select a message for each answer-checking attempt (first entry for attempt 1), repeating the last entry for later attempts. Tokens: \{attemptsUsed\} and \{attemptsLeft\}.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="correcttext"></a> `correctText?` | `string` \| `string`[] | Message when this response is correct. | [parser/types.ts:1295](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1295) |
| <a id="exhaustedtext"></a> `exhaustedText?` | `string` \| `string`[] | Message when this response is incorrect and all attempts have been used. | [parser/types.ts:1299](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1299) |
| <a id="hints"></a> `hints?` | `string`[] | Progressive hints shown alongside incorrect feedback while attempts remain. One per trial-wide answer-checking attempt, repeating the final hint for later attempts. | [parser/types.ts:1301](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1301) |
| <a id="incorrecttext"></a> `incorrectText?` | `string` \| `string`[] | Message when this response is incorrect. Also used after the final attempt when exhaustedText is absent. | [parser/types.ts:1297](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1297) |
