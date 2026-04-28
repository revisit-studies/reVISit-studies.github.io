# RankingResponse

Defined in: [parser/types.ts:796](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L796)

The RankingResponse interface is used to define the properties of a ranking widget response.
RankingResponses render as a ranking widget with user specified options.

There are three types of ranking widgets:
Ranking Sublist: The participant is asked to rank a subset of items from a larger list.
Ranking Categorical: The participant is asked to rank items within categories: HIGH, MEDIUM, and LOW.
Ranking Pairwise: The participant is asked to rank items by comparing them in pairs.

```json
{
  "id": "ranking-sublist",
  "type": "ranking-sublist",
  "prompt": "Rank your top 2 favorite fruits from the list below",
  "location": "belowStimulus",
  "options": ["Apple", "Banana", "Orange", "Strawberry", "Grapes"],
  "default": {"Orange": "0", "Apple": "1"},
  "numItems": 2
},
{
  "id": "ranking-categorical",
  "type": "ranking-categorical",
  "prompt": "Sort these hobbies into the categories of HIGH, MEDIUM, and LOW based on your level of interest.",
  "location": "belowStimulus",
  "options": ["Drawing", "Singing", "Hiking", "Dancing", "Photography"],
  "default": {"Drawing": "HIGH", "Hiking": "MEDIUM", "Singing": "LOW"}
},
{
  "id": "ranking-pairwise",
  "type": "ranking-pairwise",
  "prompt": "Which meal would you prefer",
  "location": "belowStimulus",
  "options": ["Pizza", "Sushi", "Burger", "Pasta", "Salad", "Tacos"],
  "default": {"Pizza": "pair-0-high", "Sushi": "pair-0-low"}
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="default"></a> `default?` | `Record`\<`string`, `string`\> | The default value of the response. Provide an object keyed by option value. Values depend on ranking type: index strings for sublist (e.g. `"0"`), category labels for categorical (`"HIGH"`, `"MEDIUM"`, `"LOW"`), and pairwise slots (`"pair-<n>-high"` / `"pair-<n>-low"`). | - | [parser/types.ts:801](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L801) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | [`BaseResponse`](BaseResponse.md).[`excludeFromRandomization`](BaseResponse.md#excludefromrandomization) | [parser/types.ts:390](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L390) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:380](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L380) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:362](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L362) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`infoText`](BaseResponse.md#infotext) | [parser/types.ts:368](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L368) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:372](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L372) |
| <a id="numitems"></a> `numItems?` | `number` | The number of items to rank. Applies only to sublist and categorical ranking widgets. | - | [parser/types.ts:803](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L803) |
| <a id="options"></a> `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as ranking options, provided as an array of objects, with label and value fields. | - | [parser/types.ts:799](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L799) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:378](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L378) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:364](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L364) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:370](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L370) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:376](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L376) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:374](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L374) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:366](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L366) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:388](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L388) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:386](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L386) |
| <a id="type"></a> `type` | `"ranking-sublist"` \| `"ranking-categorical"` \| `"ranking-pairwise"` | - | - | [parser/types.ts:797](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L797) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:382](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L382) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:384](https://github.com/revisit-studies/study/blob/1342408885dd25e64fbef15c6478d0a8d7cedb45/src/parser/types.ts#L384) |
