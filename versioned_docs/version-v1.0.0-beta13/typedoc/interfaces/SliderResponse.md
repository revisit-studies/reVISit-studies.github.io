---
sidebar_position: 1
displayed_sidebar: docs
---

# SliderResponse

The SliderResponse interface is used to define the properties of a slider response.
SliderResponses render as a slider input with user specified steps. For example, you could have steps of 0, 50, and 100.

Example:
```js
{
   "id": "q-slider",
   "prompt": "How are you feeling?",
   "location": "aboveStimulus",
   "required": true,
   "type": "slider",
   "options": [
       {
           "label": "Bad",
           "value": 0
       },
       {
           "label": "OK",
           "value": 50
       },
       {
           "label": "Good",
           "value": 100
       }
   ]
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
| `options` | [`NumberOption`](NumberOption.md)[] | This defines the steps in the slider and the extent of the slider as an array of objects that have a label and a value. | - |
| `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).`paramCapture` |
| `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).`prompt` |
| `required` | `boolean` | Controls whether the response is required to be answered. | [`BaseResponse`](BaseResponse.md).`required` |
| `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).`requiredLabel` |
| `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).`requiredValue` |
| `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).`secondaryText` |
| `type` | `"slider"` | - | - |
