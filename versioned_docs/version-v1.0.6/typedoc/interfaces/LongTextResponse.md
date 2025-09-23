# LongTextResponse

The LongTextResponse interface is used to define the properties of a long text response.
LongTextResponses render as a text area that accepts any text and can optionally have a placeholder.
```js
{
 "id": "q-name",
 "prompt": "What is your first name?",
 "required": true,
 "location": "aboveStimulus",
 "type": "longText",
 "placeholder": "Please enter your first name"
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).`hidden` |
| `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).`id` |
| `location?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).`location` |
| `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).`paramCapture` |
| `placeholder?` | `string` | The placeholder text that is displayed in the input. | - |
| `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).`prompt` |
| `required` | `boolean` | Controls whether the response is required to be answered. | [`BaseResponse`](BaseResponse.md).`required` |
| `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).`requiredLabel` |
| `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).`requiredValue` |
| `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).`secondaryText` |
| `type` | `"longText"` | - | - |
