# VegaComponentPath

Defined in: [parser/types.ts:802](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L802)

The VegaComponentPath interface is used to define the properties of a Vega Component. This component is used to render a Vega/Vega-Lite Component with path pointing to your Vega/Vega-Lite specs file.

For example, to render a vega based stimuli with a path of `<study-name>/assets/vega.spec.json`, you would use the following snippet:
```js
{
 "type": "vega",
 "path": "<study-name>/assets/vega.spec.json",
}
```

If you are using Vega, you can use signals with `revisitAnswer` to send the user's responses back to the reVISit. For example, you can use the following snippet in your Vega spec file's signals section:
```js
{
 "signals": [
   {
     "name": "revisitAnswer",
     "value": {},
     "on": [
       {
         "events": "rect:click",
         "update": "{responseId: 'vegaDemoResponse1', response: datum.category}"
       }
     ]
   }
 ]
}
In this example, when a user clicks on a rectangle in the Vega chart, the `revisitAnswer` signal is updated with the responseId and response. This signal is then passed to reVISit as the participant's response.
```

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="allowfailedtraining"></a> `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`allowFailedTraining`](BaseIndividualComponent.md#allowfailedtraining) | [parser/types.ts:576](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L576) |
| <a id="correctanswer"></a> `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`correctAnswer`](BaseIndividualComponent.md#correctanswer) | [parser/types.ts:570](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L570) |
| <a id="description"></a> `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`description`](BaseIndividualComponent.md#description) | [parser/types.ts:580](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L580) |
| <a id="helptextpathoverride"></a> `helpTextPathOverride?` | `string` | Optional override for the help text. If present, will override the default help text path set in the uiConfig. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`helpTextPathOverride`](BaseIndividualComponent.md#helptextpathoverride) | [parser/types.ts:592](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L592) |
| <a id="instruction"></a> `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instruction`](BaseIndividualComponent.md#instruction) | [parser/types.ts:582](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L582) |
| <a id="instructionlocation"></a> `instructionLocation?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`instructionLocation`](BaseIndividualComponent.md#instructionlocation) | [parser/types.ts:568](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L568) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`meta`](BaseIndividualComponent.md#meta) | [parser/types.ts:578](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L578) |
| <a id="nextbuttondisabletime"></a> `nextButtonDisableTime?` | `number` | A timeout (in ms) after which the next button will be disabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonDisableTime`](BaseIndividualComponent.md#nextbuttondisabletime) | [parser/types.ts:586](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L586) |
| <a id="nextbuttonenabletime"></a> `nextButtonEnableTime?` | `number` | A timer (in ms) after which the next button will be enabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonEnableTime`](BaseIndividualComponent.md#nextbuttonenabletime) | [parser/types.ts:588](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L588) |
| <a id="nextbuttonlocation"></a> `nextButtonLocation?` | [`ConfigResponseBlockLocation`](../type-aliases/ConfigResponseBlockLocation.md) | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonLocation`](BaseIndividualComponent.md#nextbuttonlocation) | [parser/types.ts:566](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L566) |
| <a id="nextbuttontext"></a> `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`nextButtonText`](BaseIndividualComponent.md#nextbuttontext) | [parser/types.ts:564](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L564) |
| <a id="path"></a> `path` | `string` | The path to the vega file. This should be a relative path from the public folder. | - | [parser/types.ts:805](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L805) |
| <a id="providefeedback"></a> `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`provideFeedback`](BaseIndividualComponent.md#providefeedback) | [parser/types.ts:572](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L572) |
| <a id="recordaudio"></a> `recordAudio?` | `boolean` | Whether or not to record audio for a component. Only relevant if recordStudyAudio in the uiConfig is true. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`recordAudio`](BaseIndividualComponent.md#recordaudio) | [parser/types.ts:584](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L584) |
| <a id="response"></a> `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`response`](BaseIndividualComponent.md#response) | [parser/types.ts:560](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L560) |
| <a id="responsedividers"></a> `responseDividers?` | `boolean` | Whether to show the response dividers. Defaults to false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`responseDividers`](BaseIndividualComponent.md#responsedividers) | [parser/types.ts:590](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L590) |
| <a id="trainingattempts"></a> `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).[`trainingAttempts`](BaseIndividualComponent.md#trainingattempts) | [parser/types.ts:574](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L574) |
| <a id="type"></a> `type` | `"vega"` | - | - | [parser/types.ts:803](https://github.com/revisit-studies/study/blob/31fcae3595a542c4a0975c6994f16db7c44439d4/src/parser/types.ts#L803) |
