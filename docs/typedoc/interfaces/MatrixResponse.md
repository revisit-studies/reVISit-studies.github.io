---
sidebar_position: 1
displayed_sidebar: reference
---

# MatrixResponse

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

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `answerOptions` | `string`[] \| `"likely5"` \| `"likely7"` \| `"satisfaction5"` \| `"satisfaction7"` | The answer options (columns). We provide some shortcuts for a likelihood scale (ranging from highly unlikely to highly likely) and a satisfaction scale (ranging from highly unsatisfied to highly satisfied) with either 5 or 7 options to choose from. | - |
| `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).`hidden` |
| `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).`id` |
| `location?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).`location` |
| `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).`paramCapture` |
| `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).`prompt` |
| `questionOptions` | `string`[] | The question options (rows) are the prompts for each response you'd like to record. | - |
| `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).`required` |
| `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).`requiredLabel` |
| `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).`requiredValue` |
| `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).`secondaryText` |
| `type` | `"matrix-radio"` \| `"matrix-checkbox"` | - | - |
| `withDivider?` | `boolean` | Renders the response with a trailing divider. | [`BaseResponse`](BaseResponse.md).`withDivider` |
| `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).`withDontKnow` |
