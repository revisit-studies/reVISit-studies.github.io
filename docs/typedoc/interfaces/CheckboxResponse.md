---
sidebar_position: 1
displayed_sidebar: reference
---

# CheckboxResponse

The CheckboxResponse interface is used to define the properties of a checkbox response.
CheckboxResponses render as a checkbox input with user specified options.

```js
{
 "id": "q7",
 "prompt": "Checkbox example (not required)",
 "required": false,
 "location": "aboveStimulus",
 "type": "checkbox",
 "options": ["Option 1", "Option 2", "Option 3"]
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
| `maxSelections?` | `number` | The maximum number of selections that are required. | - |
| `minSelections?` | `number` | The minimum number of selections that are required. | - |
| `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as checkboxes, provided as an array of objects, with label and value fields. | - |
| `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).`paramCapture` |
| `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).`prompt` |
| `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).`required` |
| `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).`requiredLabel` |
| `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).`requiredValue` |
| `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).`secondaryText` |
| `type` | `"checkbox"` | - | - |
