# Dynamic Blocks

## Overview

Some studies require knowledge of the participant's responses to previous questions to determine the next component that is shown. For example, if a participant answers a question incorrectly, they may be shown a simpler task next. Alternatively, if a participant answers a question correctly, they may be shown a more difficult task next. This is a common feature in adaptive testing, where the difficulty of the questions adapts to the participant's performance.

In reVISit, this can be achieved using dynamic blocks. Dynamic blocks are blocks that use a function to calculate what the next component will be. This function is a typescript/javascript function that is defined in the `src/public/study-name/` folder and is referenced in the study configuration file like so:

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    {
      "id": "dynamicBlock",
      "order": "dynamic",
      "functionPath": "study-name/dynamic.ts",
      "parameters": {
        "param1": "value1",
        "param2": "value2"
      }
    },
    "post-study-survey"
  ]
}
```

In this example, the `dynamicBlock` component is a dynamic block that uses the function defined in `src/public/study-name/dynamic.ts` to determine the next component. The `parameters` field is used to pass any parameters to the function.

The function in `src/public/study-name/dynamic.ts` uses the following types provided by reVISit:

```ts
export default function dynamicFunction({ components, answers, sequenceSoFar, customParameters } : JumpFunctionParameters<T>): JumpFunctionReturnVal
```

Where `JumpFunctionParameters` is defined as:

```ts
export interface JumpFunctionParameters<T> {
  components: (string | ComponentBlock)[],
  answers: ParticipantData['answers'],
  sequenceSoFar: string[],
  customParameters: T
}
```

And `JumpFunctionReturnVal` is defined as:

```ts
export interface JumpFunctionReturnVal {
  component: string | null,
  parameters?: Record<string, any>,
  correctAnswer?: Answer[],
}
```

The `components` field is an array of all the components in the study. The `answers` field is an object that contains the participant's answers to all the questions so far. The `sequenceSoFar` field is an array of the ids of the components that have been shown so far. The `customParameters` field is an object that contains any parameters passed to the function from the study configuration file.

The function should return an object with the following fields:

- `component`: The id of the next component to show. If this is `null`, the study will exit the dynamic block and continue with the next component in the sequence.
- `parameters` (optional): Any parameters to pass to the next component. This is useful for passing information from the dynamic block to the next component to control how the next component renders.
- `correctAnswer` (optional): An array of correct answers to the questions that have been asked so far. This is used to calculate the participant's score at the end of the study.

It is required that the function you provide is deterministic, and has no randomness. This is because the function will be run multiple times during the study, and the same inputs should always produce the same outputs.

Here is an example of a dynamic function that shows a different component based on the participant's answers:

```ts
import { JumpFunctionParameters, JumpFunctionReturnVal } from '../../store/types';

export default function func({ answers } : JumpFunctionParameters<{name: string}>) : JumpFunctionReturnVal {
  const topAnswerLength = Object.entries(answers)
    .filter(([_, value]) => value.endTime > -1)
    .length;

  if (topAnswerLength === 5) {
    return { component: null };
  }

  return { component: 'reactComponent', parameters: { n: topAnswerLength || 0 } };
}
```

In this example, the function checks how many questions the participant has answered so far. If the participant has answered 5 questions, the function returns `null`, which exits the dynamic block. Otherwise, the function returns the id of the next component to show, along with any parameters to pass to the component. In this case, the `reactComponent` component is shown, and the parameter `n` is passed to the component with the value of the number of questions the participant has answered so far.

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "Dynamic Block Demo", url: "https://revisit.dev/study/demo-dynamic/"}
  ]}
  codeLinks={[
    {name: "Dynamic Block Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-dynamic"}
  ]}
  referenceLinks={[
    {name: "Dynamic Block", url:"../../typedoc/interfaces/DynamicBlock"}
  ]}
/>