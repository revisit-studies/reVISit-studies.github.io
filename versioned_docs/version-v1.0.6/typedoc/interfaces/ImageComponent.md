---
sidebar_position: 1
displayed_sidebar: reference
---

# ImageComponent

The ImageComponent interface is used to define the properties of an image component. This component is used to render an image with optional styling.

For example, to render an image with a path of `path/to/study/assets/image.jpg` and a max width of 50%, you would use the following snippet:
```js
{
 "type": "image",
 "path": "<study-name>/assets/image.jpg",
 "style": {
 "maxWidth": "50%"
 }
}
```

## Extends

- [`BaseIndividualComponent`](BaseIndividualComponent.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`allowFailedTraining` |
| `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`correctAnswer` |
| `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`description` |
| `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`instruction` |
| `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`instructionLocation` |
| `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`meta` |
| `nextButtonDisableTime?` | `number` | A timeout (in ms) after which the next button will be disabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonDisableTime` |
| `nextButtonEnableTime?` | `number` | A timer (in ms) after which the next button will be enabled. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonEnableTime` |
| `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonLocation` |
| `nextButtonText?` | `string` | The text that is displayed on the next button. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`nextButtonText` |
| `path` | `string` | The path to the image. This should be a relative path from the public folder. | - |
| `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`provideFeedback` |
| `recordAudio?` | `boolean` | Whether or not to record audio for a component. Only relevant if StudyConfig.recordStudyAudio is true. Defaults to true. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`recordAudio` |
| `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component | [`BaseIndividualComponent`](BaseIndividualComponent.md).`response` |
| `style?` | `Record`\<`string`, `string`\> | The style of the image. This is an object with css properties as keys and css values as values. | - |
| `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. | [`BaseIndividualComponent`](BaseIndividualComponent.md).`trainingAttempts` |
| `type` | `"image"` | - | - |
