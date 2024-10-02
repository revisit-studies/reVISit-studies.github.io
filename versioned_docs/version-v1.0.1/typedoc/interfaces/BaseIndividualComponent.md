---
sidebar_position: 1
displayed_sidebar: reference
---

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
| `correctAnswer?` | [`Answer`](Answer.md)[] | The correct answer to the component. This is used for training trials where the user is shown the correct answer after a guess. |
| `description?` | `string` | The description of the component. This is used to identify and provide additional information for the component in the admin panel. |
| `instruction?` | `string` | The instruction of the component. This is used to identify and provide additional information for the component in the admin panel. |
| `instructionLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the instructions. |
| `meta?` | `Record`\<`string`, `unknown`\> | The meta data for the component. This is used to identify and provide additional information for the component in the admin panel. |
| `nextButtonLocation?` | `"sidebar"` \| `"aboveStimulus"` \| `"belowStimulus"` | The location of the next button. |
| `nextButtonText?` | `string` | The text that is displayed on the next button. |
| `provideFeedback?` | `boolean` | Controls whether the component should provide feedback to the participant, such as in a training trial. If not provided, the default is false. |
| `response` | [`Response`](../type-aliases/Response.md)[] | The responses to the component |
