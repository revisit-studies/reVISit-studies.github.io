# RankingResponse

Defined in: [parser/types.ts:610](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L610)

The RankingResponse interface is used to define the properties of a ranking widget response.
RankingResponses render as a ranking widget with user specified options.

There are three types of ranking widgets:
Ranking Sublist: The participant is asked to rank a subset of items from a larger list.
Ranking Categorical: The participant is asked to rank items within categories: HIGH, MEDIUM, and LOW.
Ranking Pairwise: The participant is asked to rank items by comparing them in pairs.

```js
{
 "id": "ranking-sublist",
 "type": "ranking-sublist",
 "prompt": "Rank your top 2 favorite fruits from the list below",
 "location": "belowStimulus",
 "options": ["Apple", "Banana", "Orange", "Strawberry", "Grapes"],
 "numItems": 2
},
{
 "id": "ranking-categorical",
 "type": "ranking-categorical",
 "prompt": "Sort these hobbies into the categories of HIGH, MEDIUM, and LOW based on your level of interest.",
 "location": "belowStimulus",
 "options": ["Drawing", "Singing", "Hiking", "Dancing", "Photography"]
},
{
 "id": "ranking-pairwise",
 "type": "ranking-pairwise",
 "prompt": "Which meal would you prefer",
 "location": "belowStimulus",
 "options": ["Pizza", "Sushi", "Burger", "Pasta", "Salad", "Tacos"]
}
```

## Extends

- [`BaseResponse`](BaseResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the responseOrder randomization setting in the components. Defaults to false. | [`BaseResponse`](BaseResponse.md).[`excludeFromRandomization`](BaseResponse.md#excludefromrandomization) | [parser/types.ts:272](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L272) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:262](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L262) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:244](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L244) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`infoText`](BaseResponse.md#infotext) | [parser/types.ts:250](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L250) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:254](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L254) |
| <a id="numitems"></a> `numItems?` | `number` | The number of items to rank. Applies only to sublist and categorical ranking widgets. | - | [parser/types.ts:615](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L615) |
| <a id="options"></a> `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as ranking options, provided as an array of objects, with label and value fields. | - | [parser/types.ts:613](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L613) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:260](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L260) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:246](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L246) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:252](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L252) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:258](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L258) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:256](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L256) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:248](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L248) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:270](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L270) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:268](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L268) |
| <a id="type"></a> `type` | `"ranking-sublist"` \| `"ranking-categorical"` \| `"ranking-pairwise"` | - | - | [parser/types.ts:611](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L611) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:264](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L264) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:266](https://github.com/revisit-studies/study/blob/4a2d066376abc40f420535b2f018065ea046908c/src/parser/types.ts#L266) |
