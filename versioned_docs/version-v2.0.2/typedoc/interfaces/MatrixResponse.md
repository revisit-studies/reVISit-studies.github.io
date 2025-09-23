# MatrixResponse

Defined in: [parser/types.ts:336](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L336)

The MatrixResponse interface is used to define the properties of a matrix radio or matrix checkbox response.
Question options are rendered as rows of the matrix, each row containing its own radio/checkbox group.
Answer options are rendered as column headers of the matrix. These can be customized by passing in the custom strings into the answer options. Alternatively, `answerOptions` can be set to one of the following custom strings: 'satisfaction5','satisfaction7', 'likely5', 'likely7'. This will automatically generate the appropriate headers for the matrix.

Example for a 5-scale satisfaction matrix with three questions:

```js
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
 ]
}
```

Here's an example using custom columns (answerOptions):

```js
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
 ]

}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="answeroptions"></a> `answerOptions` | `string`[] \| `"likely5"` \| `"likely7"` \| `"satisfaction5"` \| `"satisfaction7"` | The answer options (columns). We provide some shortcuts for a likelihood scale (ranging from highly unlikely to highly likely) and a satisfaction scale (ranging from highly unsatisfied to highly satisfied) with either 5 or 7 options to choose from. | - | [parser/types.ts:339](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L339) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:185](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L185) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:169](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L169) |
| <a id="location"></a> `location?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:177](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L177) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:183](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L183) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:171](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L171) |
| <a id="questionoptions"></a> `questionOptions` | `string`[] | The question options (rows) are the prompts for each response you'd like to record. | - | [parser/types.ts:341](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L341) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:175](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L175) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:181](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L181) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:179](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L179) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:173](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L173) |
| <a id="type"></a> `type` | `"matrix-radio"` \| `"matrix-checkbox"` | - | - | [parser/types.ts:337](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L337) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:187](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L187) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:189](https://github.com/revisit-studies/study/blob/91e343153031618f8f5789851e5b25c288bf8f4a/src/parser/types.ts#L189) |
