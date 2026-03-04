# MatrixRadioResponse

Defined in: [parser/types.ts:531](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L531)

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
    "The technique we developed",
    "The authors of the tools"
  ],
  "default": {
    "The tool we created": "Highly Satisfied",
    "The technique we developed": "Satisfied",
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
| <a id="answeroptions"></a> `answerOptions` | `"likely5"` \| `"likely7"` \| `"satisfaction5"` \| `"satisfaction7"` \| (`string` \| [`StringOption`](StringOption.md))[] | The answer options (columns). We provide some shortcuts for a likelihood scale (ranging from highly unlikely to highly likely) and a satisfaction scale (ranging from highly unsatisfied to highly satisfied) with either 5 or 7 options to choose from. | `BaseMatrixResponse.answerOptions` | [parser/types.ts:497](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L497) |
| <a id="default"></a> `default?` | `Record`\<`string`, `string`\> | The default value of the response by question key. Provide an object where each key is a question value and each value is one answer option value. | - | [parser/types.ts:534](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L534) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | `BaseMatrixResponse.excludeFromRandomization` | [parser/types.ts:377](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L377) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | `BaseMatrixResponse.hidden` | [parser/types.ts:367](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L367) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | `BaseMatrixResponse.id` | [parser/types.ts:349](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L349) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | `BaseMatrixResponse.infoText` | [parser/types.ts:355](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L355) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | `BaseMatrixResponse.location` | [parser/types.ts:359](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L359) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | `BaseMatrixResponse.paramCapture` | [parser/types.ts:365](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L365) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | `BaseMatrixResponse.prompt` | [parser/types.ts:351](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L351) |
| <a id="questionoptions"></a> `questionOptions` | (`string` \| [`StringOption`](StringOption.md))[] | The question options (rows) are the prompts for each response you'd like to record. | `BaseMatrixResponse.questionOptions` | [parser/types.ts:499](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L499) |
| <a id="questionorder"></a> `questionOrder?` | `"random"` \| `"fixed"` | The order in which the questions are displayed. Defaults to fixed. | `BaseMatrixResponse.questionOrder` | [parser/types.ts:501](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L501) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | `BaseMatrixResponse.required` | [parser/types.ts:357](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L357) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | `BaseMatrixResponse.requiredLabel` | [parser/types.ts:363](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L363) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | `BaseMatrixResponse.requiredValue` | [parser/types.ts:361](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L361) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | `BaseMatrixResponse.secondaryText` | [parser/types.ts:353](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L353) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | `BaseMatrixResponse.style` | [parser/types.ts:375](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L375) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | `BaseMatrixResponse.stylesheetPath` | [parser/types.ts:373](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L373) |
| <a id="type"></a> `type` | `"matrix-radio"` | - | - | [parser/types.ts:532](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L532) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | `BaseMatrixResponse.withDivider` | [parser/types.ts:369](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L369) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | `BaseMatrixResponse.withDontKnow` | [parser/types.ts:371](https://github.com/revisit-studies/study/blob/0246def09f8a8d3a9193428f2d57948507c787cd/src/parser/types.ts#L371) |
