# SliderResponse

Defined in: [parser/types.ts:492](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L492)

The SliderResponse interface is used to define the properties of a slider response.
SliderResponses render as a slider input with user specified steps. For example, you could have steps of 0, 50, and 100.

Example:
```js
{
 "id": "q-slider",
 "prompt": "How are you feeling?",
 "location": "aboveStimulus",
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

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="hidden"></a> `hidden?` | `boolean` | Controls whether the response is hidden. | [`BaseResponse`](BaseResponse.md).[`hidden`](BaseResponse.md#hidden) | [parser/types.ts:262](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L262) |
| <a id="id"></a> `id` | `string` | The id of the response. This is used to identify the response in the data file. | [`BaseResponse`](BaseResponse.md).[`id`](BaseResponse.md#id) | [parser/types.ts:244](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L244) |
| <a id="infotext"></a> `infoText?` | `string` | The description that is displayed when the participant hovers over the response. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`infoText`](BaseResponse.md#infotext) | [parser/types.ts:250](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L250) |
| <a id="location"></a> `location?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | Controls the response location. These might be the same for all responses, or differ across responses. Defaults to `belowStimulus` | [`BaseResponse`](BaseResponse.md).[`location`](BaseResponse.md#location) | [parser/types.ts:254](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L254) |
| <a id="options"></a> `options` | [`NumberOption`](NumberOption.md)[] | This defines the steps in the slider and the extent of the slider as an array of objects that have a label and a value. | - | [parser/types.ts:495](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L495) |
| <a id="paramcapture"></a> `paramCapture?` | `string` | Use to capture querystring parameters in answers such as participant_name. See the examples for how this is used, but prefer uiConfig.urlParticipantIdParam if you are capturing a participant ID. | [`BaseResponse`](BaseResponse.md).[`paramCapture`](BaseResponse.md#paramcapture) | [parser/types.ts:260](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L260) |
| <a id="prompt"></a> `prompt` | `string` | The prompt that is displayed to the participant. You can use markdown here to render images, links, etc. | [`BaseResponse`](BaseResponse.md).[`prompt`](BaseResponse.md#prompt) | [parser/types.ts:246](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L246) |
| <a id="required"></a> `required?` | `boolean` | Controls whether the response is required to be answered. Defaults to true. | [`BaseResponse`](BaseResponse.md).[`required`](BaseResponse.md#required) | [parser/types.ts:252](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L252) |
| <a id="requiredlabel"></a> `requiredLabel?` | `string` | You can provide a required label, which makes it so a participant has to answer with a response that matches label. | [`BaseResponse`](BaseResponse.md).[`requiredLabel`](BaseResponse.md#requiredlabel) | [parser/types.ts:258](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L258) |
| <a id="requiredvalue"></a> `requiredValue?` | `unknown` | You can provide a required value, which makes it so a participant has to answer with that value. | [`BaseResponse`](BaseResponse.md).[`requiredValue`](BaseResponse.md#requiredvalue) | [parser/types.ts:256](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L256) |
| <a id="secondarytext"></a> `secondaryText?` | `string` | The secondary text that is displayed to the participant under the prompt. This does not accept markdown. | [`BaseResponse`](BaseResponse.md).[`secondaryText`](BaseResponse.md#secondarytext) | [parser/types.ts:248](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L248) |
| <a id="smeqstyle"></a> `smeqStyle?` | `boolean` | Whether to render the slider with a SMEQ style. Defaults to false. | - | [parser/types.ts:509](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L509) |
| <a id="snap"></a> `snap?` | `boolean` | Whether the slider should snap between values. Defaults to false. Slider snapping disables the label above the handle. | - | [parser/types.ts:499](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L499) |
| <a id="spacing"></a> `spacing?` | `number` | The spacing between the ticks. If not provided, the spacing is calculated as the range of the slider divided by power of 10. | - | [parser/types.ts:503](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L503) |
| <a id="startingvalue"></a> `startingValue?` | `number` | The starting value of the slider. Defaults to the minimum value. | - | [parser/types.ts:497](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L497) |
| <a id="step"></a> `step?` | `number` | The step value of the slider. If not provided (and snap not enabled), the step value is calculated as the range of the slider divided by 100. | - | [parser/types.ts:501](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L501) |
| <a id="style"></a> `style?` | [`Styles`](../type-aliases/Styles.md) | You can set styles here, using React CSSProperties, for example: `{"width": 100}` or `{"width": "50%"}` | [`BaseResponse`](BaseResponse.md).[`style`](BaseResponse.md#style) | [parser/types.ts:270](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L270) |
| <a id="stylesheetpath"></a> `stylesheetPath?` | `string` | The path to the external stylesheet file. | [`BaseResponse`](BaseResponse.md).[`stylesheetPath`](BaseResponse.md#stylesheetpath) | [parser/types.ts:268](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L268) |
| <a id="tlxstyle"></a> `tlxStyle?` | `boolean` | Whether to render the slider with a NASA-tlx style. Defaults to false. | - | [parser/types.ts:507](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L507) |
| <a id="type"></a> `type` | `"slider"` | - | - | [parser/types.ts:493](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L493) |
| <a id="withbar"></a> `withBar?` | `boolean` | Whether to render the slider with a bar to the left. Defaults to true. | - | [parser/types.ts:505](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L505) |
| <a id="withdivider"></a> `withDivider?` | `boolean` | Renders the response with a trailing divider. If present, will override the divider setting in the components or uiConfig. | [`BaseResponse`](BaseResponse.md).[`withDivider`](BaseResponse.md#withdivider) | [parser/types.ts:264](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L264) |
| <a id="withdontknow"></a> `withDontKnow?` | `boolean` | Renders the response with an option for "I don't know". This counts as a completed answer for the validation. | [`BaseResponse`](BaseResponse.md).[`withDontKnow`](BaseResponse.md#withdontknow) | [parser/types.ts:266](https://github.com/revisit-studies/study/blob/d85836850c66a7e523578f6b0e32c1027d11846b/src/parser/types.ts#L266) |
