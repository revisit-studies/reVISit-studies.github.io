# BaseIndividualComponent

The BaseIndividualComponent interface is used to define the required fields for all components.

All components must include the response field, which is an array of Response interfaces.
There are additional optional fields that can be included in a component that help layout the task. These include the nextButtonText, nextButtonLocation, instructionLocation, correctAnswer.
There are other fields that can be included in a component that are used to identify the task in the admin panel. These include the meta, description, instruction, and title fields.

## Extended by

- [`MarkdownComponent`](MarkdownComponent.md)
- [`ReactComponent`](ReactComponent.md)
- [`ImageComponent`](ImageComponent.md)
- [`WebsiteComponent`](WebsiteComponent.md)
- [`QuestionnaireComponent`](QuestionnaireComponent.md)

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `allowFailedTraining?` | `boolean` | Controls whether the component should allow failed training. If not provided, the default is true. |
| `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. |
| `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. |
| `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. |
| `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. |
| `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. |
| `nextButtonDisableTime?` | `number` | A timeout (in ms) after which the next button will be disabled. |
| `nextButtonEnableTime?` | `number` | A timer (in ms) after which the next button will be enabled. |
| `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. |
| `nextButtonText?` | `string` | The text that is displayed on the next button. |
| `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. |
| `recordAudio?` | `boolean` | Whether or not to record audio for a component. Only relevant if StudyConfig.recordStudyAudio is true. Defaults to true. |
| `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component |
| `trainingAttempts?` | `number` | The number of training attempts allowed for the component. The next button will be disabled until either the correct answer is given or the number of attempts is reached. When the number of attempts is reached, if the answer is incorrect still, the correct value will be shown to the participant. The default value is 2. Providing a value of -1 will allow infinite attempts and the participant must enter the correct answer to continue, and reVISit will not show the correct answer to the user. |
