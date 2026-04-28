# MatrixRadioResponse

Defined in: [parser/types.ts:544](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L544)

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
| <a id="answeroptions"></a> `answerOptions` | `"likely5"` \| `"likely7"` \| `"satisfaction5"` \| `"satisfaction7"` \| (`string` \| [`StringOption`](StringOption.md))[] | The answer options (columns). We provide some shortcuts for a likelihood scale (ranging from highly unlikely to highly likely) and a satisfaction scale (ranging from highly unsatisfied to highly satisfied) with either 5 or 7 options to choose from. | `BaseMatrixResponse.answerOptions` | [parser/types.ts:510](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L510) |
| <a id="default"></a> `default?` | `Record`\<`string`, `string`\> | The default value of the response by question key. Provide an object where each key is a question value and each value is one answer option value. | - | [parser/types.ts:547](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L547) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | `BaseMatrixResponse.excludeFromRandomization` | [parser/types.ts:390](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L390) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | `BaseMatrixResponse.hidden` | [parser/types.ts:380](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L380) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | `BaseMatrixResponse.id` | [parser/types.ts:362](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L362) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | `BaseMatrixResponse.infoText` | [parser/types.ts:368](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L368) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | `BaseMatrixResponse.location` | [parser/types.ts:372](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L372) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | `BaseMatrixResponse.paramCapture` | [parser/types.ts:378](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L378) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | `BaseMatrixResponse.prompt` | [parser/types.ts:364](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L364) |
| <a id="questionoptions"></a> `questionOptions` | (`string` \| [`StringOption`](StringOption.md))[] | The question options (rows) are the prompts for each response you'd like to record. | `BaseMatrixResponse.questionOptions` | [parser/types.ts:512](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L512) |
| <a id="questionorder"></a> `questionOrder?` | `"random"` \| `"fixed"` | The order in which the questions are displayed. Defaults to fixed. | `BaseMatrixResponse.questionOrder` | [parser/types.ts:514](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L514) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | `BaseMatrixResponse.required` | [parser/types.ts:370](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L370) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | `BaseMatrixResponse.requiredLabel` | [parser/types.ts:376](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L376) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | `BaseMatrixResponse.requiredValue` | [parser/types.ts:374](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L374) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | `BaseMatrixResponse.secondaryText` | [parser/types.ts:366](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L366) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | `BaseMatrixResponse.style` | [parser/types.ts:388](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L388) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | `BaseMatrixResponse.stylesheetPath` | [parser/types.ts:386](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L386) |
| <a id="type"></a> `type` | `"matrix-radio"` | - | - | [parser/types.ts:545](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L545) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | `BaseMatrixResponse.withDivider` | [parser/types.ts:382](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L382) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | `BaseMatrixResponse.withDontKnow` | [parser/types.ts:384](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L384) |
