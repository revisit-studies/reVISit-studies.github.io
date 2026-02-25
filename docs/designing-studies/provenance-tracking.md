# Provenance Tracking

ReVISit has integrated provenance tracking with Trrack, a state-based provenance tracking library maintained by the same team that maintains reVISit. For more detailed information on Trrack and its API, visit the [Trrack documentation](https://apps.vdl.sci.utah.edu/trrack).

## Integrating into a React and HTML component

Building off the [Stroop color experiment](react-stimulus.md#example-2-stroop-color-experiment-with-reactive-response) from the React stimulus tutorial, we add provenance tracking to record each keystroke and enable replay.

### 1. Define state and create Trrack with `useMemo`

Because Trrack is state-based, you must define a state for your tracked application. For the Stroop text input:

```ts title="src/public/demo-react-trrack/assets/DemoReactTrrack.tsx"
interface StroopState {
  response: string;
}
```

Create the Trrack registry, action, and instance **once** using `useMemo` (empty deps). This ensures the instance is stable across renders:

```ts title="src/public/demo-react-trrack/assets/DemoReactTrrack.tsx"
const { actions, trrack } = useMemo(() => {
  const reg = Registry.create();
  const setResponseAction = reg.register('setResponse', (state, nextResponse: string) => {
    state.response = nextResponse;
    return state;
  });
  const trrackInst = initializeTrrack({
    registry: reg,
    initialState: { response: '' },
  });
  return {
    actions: { setResponseAction },
    trrack: trrackInst,
  };
}, []);
```

### 2. Call the action and pass `provenanceGraph` to `setAnswer`

When the user types, call the Trrack action and include `provenanceGraph` in `setAnswer` so reVISit stores the provenance. Use a `useCallback` to keep the handler stable:

```ts title="src/public/demo-react-trrack/assets/DemoReactTrrack.tsx"
const updateAnswer = useCallback((value: string) => {
  setResponseText(value);
  trrack.apply('Set response', actions.setResponseAction(value));
  setAnswer({
    status: value.trim().length > 0,
    provenanceGraph: trrack.graph.backend,
    answers: { stroopAnswer: value },
  });
}, [actions, setAnswer, trrack]);

```

### 3. Sync from `provenanceState` for replay

During replay, reVISit passes `provenanceState` with the restored state. Sync it to your textbox so the input updates visibly when the user seeks through the timeline:

```ts title="src/public/demo-react-trrack/assets/DemoReactTrrack.tsx"
  useEffect(() => {
    if (provenanceState) {
      setResponseText(provenanceState.response);
    }
  }, [provenanceState]);
```

### Full component example

For the complete Stroop component with provenance tracking, see [DemoReactTrrack.tsx](https://github.com/revisit-studies/study/blob/main/src/public/demo-react-trrack/assets/DemoReactTrrack.tsx).

For a basic HTML + D3 example, see our [Dots example](https://github.com/revisit-studies/study/blob/main/public/demo-html-trrack/assets/dots-count.html). Creating a Trrack instance and actions works the same as above, just without the React hooks.

## Using Trrack for undo/redo

The above example shows the basic use case for Trrack if you just want to store provenance and enable replay. With a little more effort, Trrack can also give your stimulus undo/redo and full study rehydration.

For this, use Trrack as your central storage instead of React state. Where you would normally call `setState`, call the Trrack action instead:

```ts
trrack.apply('Set response', setResponseAction(value));
```

To update the frontend when the current node changes (e.g., when `undo` or `redo` are called), add an observer:

```ts
trrack.currentChange(() => {
  const response = trrack.getState().response;
  setResponseText(response);
});
```

Add undo/redo via buttons or keybinds:

```ts
trrack.undo();
trrack.redo();
```

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
        {name: "React Stroop Demo", url: "https://revisit.dev/study/demo-react-trrack/"},
        {name: "HTML Track Demo", url: "https://revisit.dev/study/demo-html-trrack/"}
    ]}
    codeLinks={[
        {name: "React Stroop Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-react-trrack"},
        {name: "HTML Track Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-html-trrack"}
    ]}
    referenceLinks={[
        {name: "Trrack", url: "https://apps.vdl.sci.utah.edu/trrack"},
        {name: "React Stimulus", url: "../react-stimulus"}
    ]}
/>
