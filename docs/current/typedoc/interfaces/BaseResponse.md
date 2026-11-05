# BaseResponse

Defined in: [parser/types.ts:482](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L482)

The BaseResponse interface is used to define the required fields for all responses.
Other Response interfaces inherit properties from the BaseResponse interface.
Therefore, all responses must include these properties.

## Extended by

- [`NumericalResponse`](NumericalResponse.md)
- [`DateResponse`](DateResponse.md)
- [`TimeResponse`](TimeResponse.md)
- [`ShortTextResponse`](ShortTextResponse.md)
- [`LongTextResponse`](LongTextResponse.md)
- [`LikertResponse`](LikertResponse.md)
- [`DropdownResponse`](DropdownResponse.md)
- [`SliderResponse`](SliderResponse.md)
- [`RadioResponse`](RadioResponse.md)
- [`CheckboxResponse`](CheckboxResponse.md)
- [`BaseRankingResponse`](BaseRankingResponse.md)
- [`ReactiveResponse`](ReactiveResponse.md)
- [`CustomResponse`](CustomResponse.md)
- [`ButtonsResponse`](ButtonsResponse.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="delay"></a> `delay?` | `number` | Delay in milliseconds before an element activates. Must be non-negative; defaults to 0 meaning the element is always active. **Minimum** 0 | [parser/types.ts:520](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L520) |
| <a id="excludefromrandomization"></a> `excludeFromRandomization?` | `boolean` | Exclude response from randomization. If present, will override the `responseOrder` randomization setting in the components. Defaults to false. | [parser/types.ts:516](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L516) |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [parser/types.ts:506](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L506) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [parser/types.ts:486](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L486) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [parser/types.ts:494](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L494) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [parser/types.ts:498](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L498) |
| <a id="onsubmit"></a> `onSubmit?` | [`GlobalStoreAction`](GlobalStoreAction.md)[] | Apply these actions to the final submitted answer, in declared order. | [parser/types.ts:484](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L484) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer `uiConfig.urlParticipantIdParam` if you are capturing a participant ID. | [parser/types.ts:504](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L504) |
| <a id="path"></a> `path?` | `string` | Path under `src/public/` to response code. Custom responses require a default React component. Any response code module may export `validate(value, values, response)` to return an error message, a boolean validity result, or null for valid input. It may separately export `score(value, values, response, expected?)` to return a boolean or a score from 0 to 1; null uses ordinary correct-answer matching. `expected` is the configured correct answer when correctness is checked. | [parser/types.ts:488](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L488) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [parser/types.ts:490](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L490) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [parser/types.ts:496](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L496) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [parser/types.ts:502](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L502) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [parser/types.ts:500](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L500) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [parser/types.ts:492](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L492) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [parser/types.ts:514](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L514) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [parser/types.ts:512](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L512) |
| <a id="visibleif"></a> `visibleIf?` | [`ResponseVisibilityCondition`](../type-aliases/ResponseVisibilityCondition.md) | Show this response only when another response in this component satisfies the condition. | [parser/types.ts:518](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L518) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or `uiConfig`. | [parser/types.ts:508](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L508) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [parser/types.ts:510](https://github.com/revisit-studies/study/blob/273f7d4991bf1e86cf2f161453897d15b90b7333/src/parser/types.ts#L510) |
