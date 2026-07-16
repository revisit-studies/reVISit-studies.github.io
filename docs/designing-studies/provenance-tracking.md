# Provenance Tracking

ReVISit integrates with [Trrack](https://apps.vdl.sci.utah.edu/trrack), a state-based provenance tracking library maintained by the reVISit team. Use reVISit's managed Trrack APIs for new studies:

- React stimuli: `useRevisitTrrack`
- Website or iframe stimuli: `Revisit.createTrrack`

Both APIs create a Trrack instance, subscribe before returning control to the stimulus, and immediately capture the initial state. They then capture every current-node transition, including `apply`, `undo`, `redo`, direct traversal, and branches created after undo. The recorded traversal history lets participant replay follow the interaction path in chronological order instead of inferring it from graph creation time.

The managed subscription is also cleaned up with the stimulus lifecycle: React unsubscribes when the stimulus unmounts, and website stimuli unsubscribe when the page is discarded.

## React stimuli: `useRevisitTrrack`

Building on the [Stroop color experiment](react-stimulus.md#example-2-stroop-color-experiment-with-reactive-response), the following example records each response change and supports replay.

### 1. Define the tracked state and actions

Create the registry and actions once. The managed hook creates the Trrack instance, so do not call `initializeTrrack` yourself.

```tsx title="src/public/demo-react-trrack/assets/DemoReactTrrack.tsx"
import { useMemo } from 'react';
import { Registry } from '@trrack/core';
import { useRevisitTrrack } from '../../../store/hooks/useRevisitTrrack';

interface StroopState {
  response: string;
}

const { actions, registry } = useMemo(() => {
  const registry = Registry.create();
  const setResponse = registry.register(
    'setResponse',
    (state, response: string) => {
      state.response = response;
      return state;
    },
  );

  return { actions: { setResponse }, registry };
}, []);
```

### 2. Create the managed Trrack instance

Pass the normal Trrack configuration to `useRevisitTrrack`. The hook must run inside a React stimulus rendered by reVISit.

```tsx
const trrack = useRevisitTrrack({
  registry,
  initialState: { response: '' },
});
```

The initial state is reported automatically. Calling any Trrack traversal method reports the updated graph and traversal event automatically:

```tsx
trrack.apply('Set response', actions.setResponse(value));
trrack.undo();
trrack.redo();
trrack.to(nodeId);
```

Continue to use `setAnswer` for participant answers, but do not pass the provenance graph:

```tsx
const updateAnswer = (value: string) => {
  trrack.apply('Set response', actions.setResponse(value));
  setAnswer({
    status: value.trim().length > 0,
    answers: { stroopAnswer: value },
  });
};
```

### 3. Hydrate the visible stimulus during replay

During participant replay, reVISit passes the state of the selected provenance node through `provenanceState`. Render from that state so the stimulus follows the replay timeline:

```tsx
useEffect(() => {
  if (provenanceState) {
    setResponseText(provenanceState.response);
  }
}, [provenanceState]);
```

`useRevisitTrrack` manages capture; `provenanceState` manages replay hydration. Do not call `apply` from this hydration effect, because replaying a historical state should not create a new participant action.

For the complete example, see [DemoReactTrrack.tsx](https://github.com/revisit-studies/study/blob/dev/src/public/demo-react-trrack/assets/DemoReactTrrack.tsx).

## Website and iframe stimuli: `Revisit.createTrrack`

Include `revisit-communicate.js`, import Trrack's `initializeTrrack`, and pass that function with the normal Trrack options to `Revisit.createTrrack`:

```html
<script src="../../revisitUtilities/revisit-communicate.js"></script>
<script type="module">
  import { Registry, initializeTrrack } from 'https://cdn.jsdelivr.net/npm/@trrack/core@1.3.0/+esm';

  const registry = Registry.create();
  const setCount = registry.register('set-count', (state, count) => {
    state.count = count;
  });

  const trrack = Revisit.createTrrack({
    initializeTrrack,
    registry,
    initialState: { count: 0 },
  });

  addButton.onclick = () => {
    trrack.apply('Increment', setCount(trrack.getState().count + 1));
  };
  undoButton.onclick = () => trrack.undo();
  redoButton.onclick = () => trrack.redo();
</script>
```

`Revisit.createTrrack` returns the normal Trrack instance. As with the React hook, it automatically reports the initial state and every apply, undo, redo, and other traversal.

For replay hydration, register `Revisit.onProvenanceReceive` and render the received state. The parent resends the current state after the iframe reports that its window is ready, so the handler also works for slower-loading website stimuli.

```js
Revisit.onProvenanceReceive((provenanceState) => {
  if (typeof provenanceState?.count === 'number') {
    renderCount(provenanceState.count);
  }
});
```

For complete website examples, see the [HTML Dots example](https://github.com/revisit-studies/study/blob/dev/public/demo-html-trrack/assets/dots-count.html) and [Svelte Dots example](https://github.com/revisit-studies/study/blob/dev/public/demo-svelte-trrack/assets/dots-count.html).

## API reference

### `useRevisitTrrack(options)`

| Item | Description |
| --- | --- |
| Availability | React stimuli rendered by reVISit |
| Argument | Standard Trrack `ConfigureTrrackOptions`, including `registry` and `initialState` |
| Returns | A standard Trrack instance |
| Capture | Initial state and all current-node changes, including apply, undo, redo, and arbitrary traversal |
| Cleanup | Unsubscribes automatically when the stimulus unmounts |
| Hydration | Render the `provenanceState` stimulus prop during replay |

### `Revisit.createTrrack({ initializeTrrack, ...options })`

| Item | Description |
| --- | --- |
| Availability | Website and iframe stimuli that load `revisit-communicate.js` |
| Arguments | The imported Trrack `initializeTrrack` function plus standard Trrack configuration options |
| Returns | A standard Trrack instance |
| Capture | Initial state and all current-node changes, including apply, undo, redo, and arbitrary traversal |
| Cleanup | Unsubscribes automatically when the iframe page is discarded |
| Hydration | Render state received by `Revisit.onProvenanceReceive` during replay |

## Migrating existing studies

### React: remove manual graph reporting

The old pattern created Trrack directly and attached the graph to an answer update:

```tsx title="Deprecated manual pattern"
const trrack = initializeTrrack({ registry, initialState });

trrack.apply('Set response', actions.setResponse(value));
setAnswer({
  status: true,
  answers: { stroopAnswer: value },
  provenanceGraph: trrack.graph.backend,
});
```

Replace it with the managed hook and keep answer reporting separate:

```tsx title="Managed pattern"
const trrack = useRevisitTrrack({ registry, initialState });

trrack.apply('Set response', actions.setResponse(value));
setAnswer({
  status: true,
  answers: { stroopAnswer: value },
});
```

### Website: replace `Revisit.postProvenance`

The old pattern required every code path to publish the graph manually:

```js title="Deprecated manual pattern"
const trrack = initializeTrrack({ registry, initialState });

trrack.currentChange(() => {
  Revisit.postProvenance(trrack.graph.backend);
});
```

Replace it with `Revisit.createTrrack` and remove the manual provenance callback:

```js title="Managed pattern"
const trrack = Revisit.createTrrack({
  initializeTrrack,
  registry,
  initialState,
});
```

:::warning Deprecated compatibility paths
Passing `provenanceGraph` to `setAnswer` and calling `Revisit.postProvenance` are deprecated. They remain backward-compatible so existing and historical studies continue to record and load, but new studies should use the managed APIs.

Historical provenance that contains only a graph and no traversal events also remains replayable through the legacy graph-only fallback. That fallback follows graph creation order and cannot accurately reproduce undo, redo, or arbitrary traversal, so graph-only replay is deprecated for newly collected data.
:::

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
        {name: "React Stroop Demo", url: "https://revisit.dev/study/demo-react-trrack/"},
        {name: "HTML Trrack Demo", url: "https://revisit.dev/study/demo-html-trrack/"},
        {name: "Svelte Trrack Demo", url: "https://revisit.dev/study/demo-svelte-trrack/"}
    ]}
    codeLinks={[
        {name: "React Stroop Code", url: "https://github.com/revisit-studies/study/tree/dev/src/public/demo-react-trrack"},
        {name: "HTML Trrack Code", url: "https://github.com/revisit-studies/study/tree/dev/public/demo-html-trrack"},
        {name: "Svelte Trrack Code", url: "https://github.com/revisit-studies/study/tree/dev/public/demo-svelte-trrack"}
    ]}
    referenceLinks={[
        {name: "Trrack", url: "https://apps.vdl.sci.utah.edu/trrack"},
        {name: "React Stimulus", url: "../react-stimulus"},
        {name: "HTML Stimulus", url: "../html-stimulus"}
    ]}
/>
