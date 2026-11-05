# RankingCategoricalResponse

Defined in: [parser/types.ts:1141](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1141)

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

- [`BaseRankingResponse`](BaseRankingResponse.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="categorizeall"></a> `categorizeAll?` | `boolean` | Whether all items need to be categorized. Defaults to false. | - | [parser/types.ts:1144](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1144) |
| <a id="default"></a> `default?` | `Record`\<`string`, `string`\> | The default value of the response. Provide an object keyed by option value. Values depend on ranking type: index strings for sublist (e.g. `"0"`), category labels for categorical (`"HIGH"`, `"MEDIUM"`, `"LOW"`), and pairwise slots (`"pair-<n>-high"` / `"pair-<n>-low"`). | [`BaseRankingResponse`](BaseRankingResponse.md).[`default`](BaseRankingResponse.md#default) | [parser/types.ts:1124](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1124) |
| <a id="delay"></a> `delay?` | `number` | Delay in milliseconds before an element activates. Must be non-negative; defaults to 0 meaning the element is always active. **Minimum** 0 | [`BaseRankingResponse`](BaseRankingResponse.md).[`delay`](BaseRankingResponse.md#delay) | [parser/types.ts:520](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L520) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | [`BaseRankingResponse`](BaseRankingResponse.md).[`excludeFromRandomization`](BaseRankingResponse.md#excludefromrandomization) | [parser/types.ts:516](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L516) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseRankingResponse`](BaseRankingResponse.md).[`hidden`](BaseRankingResponse.md#hidden) | [parser/types.ts:506](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L506) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseRankingResponse`](BaseRankingResponse.md).[`id`](BaseRankingResponse.md#id) | [parser/types.ts:486](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L486) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [`BaseRankingResponse`](BaseRankingResponse.md).[`infoText`](BaseRankingResponse.md#infotext) | [parser/types.ts:494](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L494) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseRankingResponse`](BaseRankingResponse.md).[`location`](BaseRankingResponse.md#location) | [parser/types.ts:498](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L498) |
| <a id="max"></a> `max?` | `number` | The maximum number of items to rank. For sublist ranking it is the number of items, for categorical ranking it is items per category, and for pairwise ranking it is the number of pairs. | [`BaseRankingResponse`](BaseRankingResponse.md).[`max`](BaseRankingResponse.md#max) | [parser/types.ts:1130](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1130) |
| <a id="min"></a> `min?` | `number` | The minimum number of items to rank. For sublist ranking it is the number of items, for categorical ranking it is items per category, and for pairwise ranking it is the number of pairs. | [`BaseRankingResponse`](BaseRankingResponse.md).[`min`](BaseRankingResponse.md#min) | [parser/types.ts:1128](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1128) |
| <a id="numitems"></a> `numItems?` | `number` | The number of items to rank. Applies only to sublist and categorical ranking widgets. | [`BaseRankingResponse`](BaseRankingResponse.md).[`numItems`](BaseRankingResponse.md#numitems) | [parser/types.ts:1126](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1126) |
| <a id="onsubmit"></a> `onSubmit?` | [`GlobalStoreAction`](GlobalStoreAction.md)[] | Apply these actions to the final submitted answer, in declared order. | [`BaseRankingResponse`](BaseRankingResponse.md).[`onSubmit`](BaseRankingResponse.md#onsubmit) | [parser/types.ts:484](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L484) |
| <a id="options"></a> `options` | (`string` \| [`StringOption`](StringOption.md))[] | The options that are displayed as ranking options, provided as an array of objects, with label and value fields. | [`BaseRankingResponse`](BaseRankingResponse.md).[`options`](BaseRankingResponse.md#options) | [parser/types.ts:1122](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1122) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | [`BaseRankingResponse`](BaseRankingResponse.md).[`paramCapture`](BaseRankingResponse.md#paramcapture) | [parser/types.ts:504](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L504) |
| <a id="path"></a> `path?` | `string` | Path under `src/public/` to response code. Custom responses require a default React component. Any response code module may export `validate(value, values, response)` to return an error message, a boolean validity result, or null for valid input. It may separately export `score(value, values, response, expected?)` to return a boolean or a score from 0 to 1; null uses ordinary correct-answer matching. `expected` is the configured correct answer when correctness is checked. | [`BaseRankingResponse`](BaseRankingResponse.md).[`path`](BaseRankingResponse.md#path) | [parser/types.ts:488](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L488) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseRankingResponse`](BaseRankingResponse.md).[`prompt`](BaseRankingResponse.md#prompt) | [parser/types.ts:490](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L490) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseRankingResponse`](BaseRankingResponse.md).[`required`](BaseRankingResponse.md#required) | [parser/types.ts:496](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L496) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseRankingResponse`](BaseRankingResponse.md).[`requiredLabel`](BaseRankingResponse.md#requiredlabel) | [parser/types.ts:502](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L502) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseRankingResponse`](BaseRankingResponse.md).[`requiredValue`](BaseRankingResponse.md#requiredvalue) | [parser/types.ts:500](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L500) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseRankingResponse`](BaseRankingResponse.md).[`secondaryText`](BaseRankingResponse.md#secondarytext) | [parser/types.ts:492](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L492) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseRankingResponse`](BaseRankingResponse.md).[`style`](BaseRankingResponse.md#style) | [parser/types.ts:514](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L514) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseRankingResponse`](BaseRankingResponse.md).[`stylesheetPath`](BaseRankingResponse.md#stylesheetpath) | [parser/types.ts:512](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L512) |
| <a id="type"></a> `type` | `"ranking-categorical"` | - | - | [parser/types.ts:1142](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L1142) |
| <a id="visibleif"></a> `visibleIf?` | [`ResponseVisibilityCondition`](../type-aliases/ResponseVisibilityCondition.md) | Show this response only when another response in this component satisfies the condition. | [`BaseRankingResponse`](BaseRankingResponse.md).[`visibleIf`](BaseRankingResponse.md#visibleif) | [parser/types.ts:518](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L518) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | [`BaseRankingResponse`](BaseRankingResponse.md).[`withDivider`](BaseRankingResponse.md#withdivider) | [parser/types.ts:508](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L508) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseRankingResponse`](BaseRankingResponse.md).[`withDontKnow`](BaseRankingResponse.md#withdontknow) | [parser/types.ts:510](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L510) |
