# MatrixCheckboxResponse

Defined in: [parser/types.ts:611](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L611)

The MatrixCheckboxResponse interface defines a matrix where each row can select multiple options.
`questionOptions` are rendered as rows, and `answerOptions` are rendered as columns.
Defaults are specified per-row as arrays of selected answer option values.

Example using custom columns (`answerOptions`):
```json
{
  "id": "multi-custom",
  "prompt": "Which categories do the following items belong to?",
  "location": "aboveStimulus",
  "type": "matrix-checkbox",
  "answerOptions": [
    "Has Legs",
    "Has Wings",
    "Can Swim"
  ],
  "questionOptions": [
    "Dog",
    "Snake",
    "Eagle",
    "Salmon",
    "Platypus"
  ],
  "default": {
    "Dog": ["Has Legs"],
    "Snake": [],
    "Eagle": ["Has Wings"],
    "Salmon": ["Can Swim"],
    "Platypus": ["Has Legs", "Can Swim"]
  }
}
```

## Extends

- `BaseMatrixResponse`

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="answeroptions"></a> `answerOptions` | `"likely5"` \| `"likely7"` \| `"satisfaction5"` \| `"satisfaction7"` \| (`string` \| [`StringOption`](StringOption.md))[] | The answer options (columns). We provide some shortcuts for a likelihood scale (ranging from highly unlikely to highly likely) and a satisfaction scale (ranging from highly unsatisfied to highly satisfied) with either 5 or 7 options to choose from. | `BaseMatrixResponse.answerOptions` | [parser/types.ts:532](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L532) |
| <a id="default"></a> `default?` | `Record`\<`string`, `string`[]\> | The default value of the response by question key. Provide an object where each key is a question value and each value is an array of selected answer option values. | - | [parser/types.ts:614](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L614) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | `BaseMatrixResponse.excludeFromRandomization` | [parser/types.ts:412](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L412) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | `BaseMatrixResponse.hidden` | [parser/types.ts:402](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L402) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | `BaseMatrixResponse.id` | [parser/types.ts:384](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L384) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | `BaseMatrixResponse.infoText` | [parser/types.ts:390](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L390) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | `BaseMatrixResponse.location` | [parser/types.ts:394](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L394) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | `BaseMatrixResponse.paramCapture` | [parser/types.ts:400](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L400) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | `BaseMatrixResponse.prompt` | [parser/types.ts:386](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L386) |
| <a id="questionoptions"></a> `questionOptions` | (`string` \| [`MatrixQuestionOption`](MatrixQuestionOption.md))[] | The question options (rows) are the prompts for each response you'd like to record. Use `leftLabel` and `rightLabel` on object options to display bipolar row labels such as `"Obstructive - Supportive"` on either side of the matrix. | `BaseMatrixResponse.questionOptions` | [parser/types.ts:534](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L534) |
| <a id="questionorder"></a> `questionOrder?` | `"random"` \| `"fixed"` | The order in which the questions are displayed. Defaults to fixed. | `BaseMatrixResponse.questionOrder` | [parser/types.ts:536](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L536) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | `BaseMatrixResponse.required` | [parser/types.ts:392](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L392) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | `BaseMatrixResponse.requiredLabel` | [parser/types.ts:398](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L398) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | `BaseMatrixResponse.requiredValue` | [parser/types.ts:396](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L396) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | `BaseMatrixResponse.secondaryText` | [parser/types.ts:388](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L388) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | `BaseMatrixResponse.style` | [parser/types.ts:410](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L410) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | `BaseMatrixResponse.stylesheetPath` | [parser/types.ts:408](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L408) |
| <a id="type"></a> `type` | `"matrix-checkbox"` | - | - | [parser/types.ts:612](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L612) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | `BaseMatrixResponse.withDivider` | [parser/types.ts:404](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L404) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | `BaseMatrixResponse.withDontKnow` | [parser/types.ts:406](https://github.com/revisit-studies/study/blob/fb7b64f6ea729ee3d5a0457224326b40ce119176/src/parser/types.ts#L406) |
