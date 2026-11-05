# MatrixRadioResponse

Defined in: [parser/types.ts:851](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L851)

The MatrixRadioResponse interface defines a matrix where each row accepts exactly one selected option.
`questionOptions` are rendered as rows, and `answerOptions` are rendered as columns.
`answerOptions` can be custom labels/values or one of the built-in shortcuts: `satisfaction5`, `satisfaction7`, `likely5`, `likely7`.

Example:
```json
{
  "id": "multi-satisfaction",
  "prompt": "Rate your satisfaction from 1 (not enjoyable) to 5 (very enjoyable) for the following items.",
  "location": "aboveStimulus",
  "type": "matrix-radio",
  "answerOptions": "satisfaction5",
  "questionOptions": [
    "The tool we created",
    {
      "label": "Obstructive - Supportive",
      "value": "obstructive-supportive",
      "leftLabel": "Obstructive",
      "rightLabel": "Supportive"
    },
    "The authors of the tools"
  ],
  "default": {
    "The tool we created": "Highly Satisfied",
    "obstructive-supportive": "Satisfied",
    "The authors of the tools": "Neutral"
  },
  "questionOrder": "random"
}
```

## Extends

- `BaseMatrixResponse`

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="answeroptions"></a> `answerOptions` | (`string` \| [`StringOption`](StringOption.md))[] \| `"likely5"` \| `"likely7"` \| `"satisfaction5"` \| `"satisfaction7"` | The answer options (columns). We provide some shortcuts for a likelihood scale (ranging from highly unlikely to highly likely) and a satisfaction scale (ranging from highly unsatisfied to highly satisfied) with either 5 or 7 options to choose from. | `BaseMatrixResponse.answerOptions` | [parser/types.ts:812](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L812) |
| <a id="default"></a> `default?` | `Record`\<`string`, `string`\> | The default value of the response by question key. Provide an object where each key is a question value and each value is one answer option value. | - | [parser/types.ts:854](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L854) |
| <a id="delay"></a> `delay?` | `number` | Delay in milliseconds before an element activates. Must be non-negative; defaults to 0 meaning the element is always active. **Minimum** 0 | `BaseMatrixResponse.delay` | [parser/types.ts:520](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L520) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | `BaseMatrixResponse.excludeFromRandomization` | [parser/types.ts:516](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L516) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | `BaseMatrixResponse.hidden` | [parser/types.ts:506](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L506) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | `BaseMatrixResponse.id` | [parser/types.ts:486](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L486) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | `BaseMatrixResponse.infoText` | [parser/types.ts:494](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L494) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | `BaseMatrixResponse.location` | [parser/types.ts:498](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L498) |
| <a id="onsubmit"></a> `onSubmit?` | [`GlobalStoreAction`](GlobalStoreAction.md)[] | Apply these actions to the final submitted answer, in declared order. | `BaseMatrixResponse.onSubmit` | [parser/types.ts:484](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L484) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | `BaseMatrixResponse.paramCapture` | [parser/types.ts:504](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L504) |
| <a id="path"></a> `path?` | `string` | Path under `src/public/` to response code. Custom responses require a default React component. Any response code module may export `validate(value, values, response)` to return an error message, a boolean validity result, or null for valid input. It may separately export `score(value, values, response, expected?)` to return a boolean or a score from 0 to 1; null uses ordinary correct-answer matching. `expected` is the configured correct answer when correctness is checked. | `BaseMatrixResponse.path` | [parser/types.ts:488](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L488) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | `BaseMatrixResponse.prompt` | [parser/types.ts:490](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L490) |
| <a id="questionoptions"></a> `questionOptions` | (`string` \| [`MatrixQuestionOption`](MatrixQuestionOption.md))[] | The question options (rows) are the prompts for each response you'd like to record. Use `leftLabel` and `rightLabel` on object options to display bipolar row labels such as `"Obstructive - Supportive"` on either side of the matrix. | `BaseMatrixResponse.questionOptions` | [parser/types.ts:814](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L814) |
| <a id="questionorder"></a> `questionOrder?` | `"fixed"` \| `"random"` | The order in which the questions are displayed. Defaults to fixed. | `BaseMatrixResponse.questionOrder` | [parser/types.ts:816](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L816) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | `BaseMatrixResponse.required` | [parser/types.ts:496](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L496) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | `BaseMatrixResponse.requiredLabel` | [parser/types.ts:502](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L502) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | `BaseMatrixResponse.requiredValue` | [parser/types.ts:500](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L500) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | `BaseMatrixResponse.secondaryText` | [parser/types.ts:492](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L492) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | `BaseMatrixResponse.style` | [parser/types.ts:514](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L514) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | `BaseMatrixResponse.stylesheetPath` | [parser/types.ts:512](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L512) |
| <a id="type"></a> `type` | `"matrix-radio"` | - | - | [parser/types.ts:852](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L852) |
| <a id="visibleif"></a> `visibleIf?` | [`ResponseVisibilityCondition`](../type-aliases/ResponseVisibilityCondition.md) | Show this response only when another response in this component satisfies the condition. | `BaseMatrixResponse.visibleIf` | [parser/types.ts:518](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L518) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | `BaseMatrixResponse.withDivider` | [parser/types.ts:508](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L508) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | `BaseMatrixResponse.withDontKnow` | [parser/types.ts:510](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L510) |
