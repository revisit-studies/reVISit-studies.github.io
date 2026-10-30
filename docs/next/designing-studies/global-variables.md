# Global Variables

Use global variables when a Participant's choices should carry across trials: a remaining budget, a running score, a label, or an eligibility flag. Each Participant has their own values. Component `parameters` still describe a particular component; global variables hold values that can change during the study.

Declare variables in the Study Config, read them in Markdown, React, or HTML, and update them when a Participant submits a trial. Editing a field or clicking Previous does not apply an update.

## Declare Variables

Add `globalVariables` at the top level of the Study Config:

```json
"globalVariables": {
  "budget": 100,
  "totalSpent": 0,
  "eligible": true,
  "participantLabel": "Ready"
}
```

Values can be finite numbers, strings, or booleans. A variable keeps its initial type throughout the session; arrays, objects, and `null` are not supported. Use names such as `budget` or `totalSpent`, without spaces or periods. The names `__proto__`, `constructor`, and `prototype` are reserved.

Use an expanded declaration to add validation:

```json
"globalVariables": {
  "budget": { "initialValue": 100, "min": 0 },
  "participantLabel": {
    "initialValue": "Ready",
    "minCharLength": 1,
    "maxCharLength": 20,
    "textValidation": [
      { "type": "matchesRegex", "value": "^[A-Za-z ]+$" }
    ]
  }
}
```

The shorthand `"budget": 100` is equivalent to `"budget": { "initialValue": 100 }`.

Global variables reuse the validation rules for [form responses](./forms.md):

| Variable type | Supported validation |
| --- | --- |
| Number | Inclusive `min` and `max`; exclusive `strictMin` and `strictMax` |
| String | `minCharLength`, `maxCharLength`, `minWordLength`, `maxWordLength`, and `textValidation` |
| String formats | `builtInValidation`: `email`, `url`, `phoneNumber`, or `usPhoneNumber` |
| Boolean | Must remain a boolean |

Text rules support `equals`, `doesNotEqual`, `contains`, `doesNotContain`, and `matchesRegex`. Both the initial value and each final proposed value must pass validation. For example, a budget with `min: 0` rejects a submission whose combined purchases would make it negative.

## Display Values in Markdown and Templates

Use `{{globalVariables.budget}}` in [templated fields](./templating.md), including instructions, response prompts, help text, and Markdown content:

```md title="public/my-study/assets/budget.md"
# Your next purchase

You have **{{globalVariables.budget}}** remaining.
```

These values represent the accepted state at trial entry. They do not change as the Participant types. The next trial sees the values accepted by the preceding submission. When revisiting an answered trial, the Participant sees that trial's original entry values.

An exact global-variable reference also works in a numerical response's `min`, `max`, `strictMin`, or `strictMax`, retaining its numeric type:

```json
"max": "{{globalVariables.budget}}"
```

The referenced variable must be declared and numeric. This field accepts a number or an exact reference, rather than an arithmetic expression.

## Update Values from Responses

Attach an `onSubmit` array to a response. By default, each action uses that response's submitted answer as its operand:

```json
{
  "id": "cost",
  "type": "numerical",
  "prompt": "How much will you spend?",
  "min": 0,
  "max": "{{globalVariables.budget}}",
  "onSubmit": [
    { "variable": "budget", "operation": "subtract" },
    { "variable": "totalSpent", "operation": "add" }
  ]
}
```

Declare both `budget` and `totalSpent` first. Starting at 100 and 0, an answer of 10 produces a budget of 90 and total spending of 10.

| Variable type | Operations |
| --- | --- |
| All types | `set` |
| Number | `add`, `subtract`, `multiply`, `divide` |
| String | `append`, `prepend` |
| Boolean | `and`, `or`, `toggle` |

`and` and `or` require boolean operands. A standard checkbox response produces an array, not a boolean. Use a custom response that returns a scalar boolean, or a boolean literal operand. `toggle` takes no operand: it flips the variable when its attached response is answered, including responses with structured answers.

Actions execute in the response order declared in the resolved component configuration, then in each `onSubmit` array's order. This order stays the same when response display order is randomized or responses appear in different locations. Multiple actions can update the same variable.

Unanswered optional fields, hidden responses, and Don't Know answers do not trigger actions. Zero and `false` count as answers. Validation checks the combined result before accepting any changes; a failed action leaves the accepted values unchanged.

### Use a Literal Operand

Set `source` to `literal` to use a fixed number, string, or boolean. For example, subtract the submitted cost and then apply a fixed ten-percent reduction:

```json
"onSubmit": [
  { "variable": "budget", "operation": "subtract" },
  {
    "variable": "budget",
    "operation": "multiply",
    "operand": { "source": "literal", "value": 0.9 }
  }
]
```

Starting at 100, an answer of 10 produces `(100 - 10) * 0.9 = 81`. The recorded answer remains 10.

Other uses include adding a fixed completion bonus, appending a fixed separator, or setting a flag with `"operand": { "source": "literal", "value": true }`. A literal action still requires its attached response to be answered and visible.

### Transform an Operand

Use `transforms` when the operand needs calculation before it is applied. For a discount entered as a proportion between 0 and 1:

```json
{
  "id": "discount",
  "type": "numerical",
  "prompt": "Discount proportion (0 to 1)",
  "min": 0,
  "max": 1,
  "onSubmit": [
    {
      "variable": "budget",
      "operation": "multiply",
      "operand": {
        "source": "answer",
        "transforms": [
          { "operation": "subtractFrom", "value": 1 }
        ]
      }
    }
  ]
}
```

A budget of 100 and answer of 0.2 produce `100 * (1 - 0.2) = 80`. Omitting `operand` uses the answer directly. Omitting `source` inside `operand` also defaults to `answer`, so `"operand": { "transforms": [...] }` is valid.

Transforms run in array order. For an answer `x` and a transform's numeric `value` named `n`:

| Transform | Result |
| --- | --- |
| `add` | `x + n` |
| `subtract` | `x - n` |
| `multiply` | `x * n` |
| `divide` | `x / n` |
| `subtractFrom` | `n - x` |
| `divideInto` | `n / x` |
| `not` | Boolean opposite of `x`; omit `value` |

To accept a percentage from 0 to 100, first divide the answer by 100, then subtract it from 1:

```json
"operand": {
  "transforms": [
    { "operation": "divide", "value": 100 },
    { "operation": "subtractFrom", "value": 1 }
  ]
}
```

Use response bounds of 0 and 100 for that version. An answer of 20 becomes an operand of 0.8. Numeric transforms also work on literal numbers. The boolean transform `{"operation": "not"}` works on boolean answers or literals; string transforms are not supported.

Every action starts from its own original answer or literal. A preceding action's transformed operand does not carry into the next action, although its update to the target global variable does. `toggle` rejects an explicit operand definition. Incompatible types, division by zero, and non-finite intermediate results reject the whole submission. Variable bounds and text constraints apply to the final combined values.

## Read and Update Values in React

A [React stimulus](./react-stimulus.md) receives a `globalVariables` prop for rendering content. Register an updater when a calculation depends on stimulus state. For this example, configure the component as:

```json
{
  "type": "react-component",
  "path": "my-study/assets/Budget.tsx",
  "response": [{ "id": "spend", "type": "reactive", "prompt": "Selected spending" }]
}
```

```tsx title="src/public/my-study/assets/Budget.tsx"
import { useEffect } from 'react';
import type { StimulusParams } from '../../../store/types';
import { useStudyState } from '../../../store/hooks/useStudyState';

export default function Budget({
  globalVariables, registerGlobalStoreUpdater, setAnswer,
}: StimulusParams<unknown>) {
  const [spend, setSpend] = useStudyState({ responseId: 'spend', initialState: 0 });

  useEffect(() => {
    setAnswer({ status: true, answers: { spend } });
  }, [setAnswer, spend]);

  useEffect(() => registerGlobalStoreUpdater(({ store }) => ({
    budget: Number(store.budget) - spend,
  })), [registerGlobalStoreUpdater, spend]);

  return (
    <div>
      <p>Remaining budget: {globalVariables.budget}</p>
      <button disabled={Number(globalVariables.budget) < 15}
        onClick={() => setSpend(15)}>Select a purchase costing 15</button>
      <p>Selected spending: {spend}</p>
    </div>
  );
}
```

Clicking the button changes the selection; Next accepts the proposed deduction. `useStudyState` restores the selection on Previous and reload. Return the updater's cleanup function from the effect, as above.

The updater callback receives `{ store, answers }`: the names of these callback arguments differ from the rendering prop `globalVariables`. `store` is the immutable entry snapshot, and `answers` contains the current trial's submitted answers. Return a plain object containing only the variables to change, or a Promise of that object. Returning `{}` leaves them unchanged.

Register one updater per mounted stimulus. Its result must settle within ten seconds. A form action and the stimulus updater may write different variables, but writing the same variable from both rejects the submission.

## Read and Update Values in HTML

An [HTML stimulus](./html-stimulus.md) reads values through `Revisit.onGlobalVariablesReceive` and registers a calculation with `Revisit.registerGlobalStoreUpdater`. Use the same reactive response configuration as the React example, with `type: "website"` and `path: "my-study/assets/budget.html"`.

```html title="public/my-study/assets/budget.html"
<!doctype html>
<html lang="en">
<head>
  <title>Budget</title>
  <script src="../../revisitUtilities/revisit-communicate.js"></script>
</head>
<body>
  <p>Remaining budget: <output id="budget"></output></p>
  <button id="purchase" disabled>Select a purchase costing 20</button>
  <p>Selected spending: <output id="selected">0</output></p>
  <script>
    Revisit.beginRegistration();
    let spend = 0;
    const render = () => {
      document.querySelector('#selected').textContent = spend;
      Revisit.postAnswers({ spend });
    };
    Revisit.onGlobalVariablesReceive((globalVariables) => {
      document.querySelector('#budget').textContent = globalVariables.budget;
      document.querySelector('#purchase').disabled = globalVariables.budget < 20;
    });
    Revisit.onRestore(({ answers }) => { spend = answers.spend ?? 0; render(); });
    Revisit.registerGlobalStoreUpdater(({ store }) => ({ budget: store.budget - spend }));
    document.querySelector('#purchase').addEventListener('click', () => {
      spend = 20;
      render();
    });
    Revisit.completeRegistration();
  </script>
</body>
</html>
```

The bridge delivers values without reloading the iframe. The registration and restore callbacks let the page finish initialization before restoring its selection. The callback's `store` argument follows the same entry-snapshot contract as React.

With `"templated": true` on the website component, its HTML markup can also contain `{{globalVariables.budget}}`. Use the receive callback for JavaScript access; a template expression is a markup substitution, not a JavaScript value.

## Use Values in Study Flow

Show a response only when a global condition holds:

```json
"visibleIf": { "globalVariable": "eligible", "comparison": "equals", "value": true }
```

A block's skip rule can use a global value to choose another block:

```json
"skip": [
  { "check": "globalVariable", "variable": "budget", "comparison": "lessThan", "value": 20, "to": "lowBudget" }
]
```

Define the target block with `"id": "lowBudget"`. See [Study Sequence](./sequences/study-sequences.md) for block placement and skip behavior. Skip rules evaluate after accepting the submission, using its resulting values.

[Dynamic block functions](./sequences/dynamic-blocks.md) receive the accepted prefix of answers and a `store` argument containing the corresponding global values. Use this argument to choose the next task or calculate its parameters.

## Previous, Saving, and Analysis

Enable `"previousButton": true` on components where Participants may revisit their answers. Previous restores the trial's accepted answers and entry values. Resubmitting unchanged preserves later progress without applying a deduction twice.

Changing an earlier accepted answer asks for confirmation when it invalidates later accepted submissions. Cancel keeps the active path. Confirm clears later active answers and drafts, preserves randomized assignments, and regenerates dynamic trials from the revised context. The original submissions remain in history. A visited trial that was not submitted is also reset when its context is invalidated.

Updates are accepted after validation, the stimulus updater, and a durable local save succeed. Cloud uploads are queued; retries upload the accepted result without repeating actions or updater callbacks. Studies with data collection disabled retain local behavior without cloud uploads. Check Answer, field edits, rendering, replay, and timeout advancement without data collection do not apply actions. A completed study session cannot be reopened for editing.

In [Participant Replay](../analysis/participant-replay.md), the **Submission history** selector lets an Analyst inspect original and revised submissions without executing study code. Recording assets stay associated with their accepted visits. The [Data Export](../analysis/data-export.md) guide describes the optional `globalStoreBefore`, `globalStoreAfter`, and `globalStoreOperations` Tidy CSV fields. Provenance downloads retain the complete submission history, including resolved operands and configured operand definitions.

Use one active browser session per Participant. Simultaneous editing across tabs or devices is not supported; stale cloud writes are rejected rather than combined.

For a working example, see the [templating demo source](https://github.com/revisit-studies/study/tree/123d955d16001042bef5af6edb63fa32dfc92abb/public/demo-templating), which carries a shared budget through Markdown, React, and HTML.
