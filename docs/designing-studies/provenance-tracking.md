# Provenance Tracking

ReVISit integrates with [Trrack](https://apps.vdl.sci.utah.edu/trrack), a state-based provenance tracking library maintained by the ReVISit team. For new studies, use ReVISit's managed Trrack APIs:

- React stimuli receive `useTrrack` through `StimulusParams`.
- Website and iframe stimuli use `Revisit.createTrrack(...)`.

The managed APIs capture the initial state and every Trrack traversal, including `apply`, undo, redo, and revisiting an existing node. This gives Analyst replay the recorded interaction path rather than requiring it to infer a path from graph creation order.

## React Stimuli

Accept `useTrrack` in the component parameters. Do not import a ReVISit hook. Call it at the component's top level, as you would any other React hook.

```tsx title="src/public/my-study/assets/MyStimulus.tsx"
import { useMemo } from 'react';
import { Registry } from '@trrack/core';
import type { StimulusParams } from '../../store/types';

type CounterState = { count: number };

export default function MyStimulus({
  useTrrack,
}: StimulusParams<undefined, CounterState>) {
  const { actions, registry } = useMemo(() => {
    const nextRegistry = Registry.create();
    const increment = nextRegistry.register('increment', (state) => ({
      ...state,
      count: state.count + 1,
    }));

    return { actions: { increment }, registry: nextRegistry };
  }, []);

  const trrack = useTrrack({
    registry,
    initialState: { count: 0 },
  });

  const increment = () => {
    // Calls to apply, undo, redo, and traversal are captured automatically.
    trrack.apply('Increment', actions.increment());
  };

  return <button onClick={increment}>Increment</button>;
}
```

Continue to use `setAnswer` to report answers, but do not attach `provenanceGraph` to it. ReVISit records provenance separately from answer validation.

During replay, render the `provenanceState` supplied to the stimulus. Do not call `apply` while hydrating a replayed state, because that would create a new participant action.

```tsx
useEffect(() => {
  if (provenanceState) {
    setCount(provenanceState.count);
  }
}, [provenanceState]);
```

## Website and Iframe Stimuli

After loading `revisit-communicate.js`, pass Trrack's `initializeTrrack` function and the usual Trrack options to `Revisit.createTrrack`:

```js
const trrack = Revisit.createTrrack({
  initializeTrrack,
  registry,
  initialState,
});
```

This replaces direct `initializeTrrack(...)` plus repeated calls to `Revisit.postProvenance(trrack.graph.backend)`. The returned value is a normal Trrack instance, and ReVISit automatically records its initial state and subsequent traversals.

To render a replayed state, register a provenance handler in the website or iframe:

```js
Revisit.onProvenanceReceive((provenanceState) => {
  renderState(provenanceState);
});
```

## Migrating Existing Stimuli

New stimuli should use the managed APIs. Existing manual integrations remain supported, so you do not need to migrate an existing study urgently.

:::note[Deprecated compatibility paths]
`Revisit.postProvenance(...)`, `setAnswer({ provenanceGraph, ... })`, and graph-only replay for historical provenance remain supported for existing studies and data. They are deprecated for new work because they cannot reliably preserve traversal history such as undo, redo, or revisiting an existing node.
:::

When you do migrate:

- In a React stimulus, replace direct `initializeTrrack(...)` with the `useTrrack` function from `StimulusParams`, and remove `provenanceGraph` from `setAnswer`.
- In a website or iframe stimulus, replace the direct Trrack initialization and manual `Revisit.postProvenance(...)` calls with `Revisit.createTrrack(...)`.

## Examples

The official Trrack demos show managed provenance, answer reporting, undo/redo, and replay hydration:

- [React Stroop demo](https://revisit.dev/study/demo-react-trrack/)
- [HTML Trrack demo](https://revisit.dev/study/demo-html-trrack/)
- [Svelte Trrack demo](https://revisit.dev/study/demo-svelte-trrack/)

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
        {name: "React Stroop Demo", url: "https://revisit.dev/study/demo-react-trrack/"},
        {name: "HTML Trrack Demo", url: "https://revisit.dev/study/demo-html-trrack/"},
        {name: "Svelte Trrack Demo", url: "https://revisit.dev/study/demo-svelte-trrack/"}
    ]}
    codeLinks={[
        {name: "React Stroop Code", url: "https://github.com/revisit-studies/study/tree/main/src/public/demo-react-trrack"},
        {name: "HTML Trrack Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-html-trrack"},
        {name: "Svelte Trrack Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-svelte-trrack"}
    ]}
    referenceLinks={[
        {name: "Trrack", url: "https://apps.vdl.sci.utah.edu/trrack"},
        {name: "React Stimulus", url: "../react-stimulus"},
        {name: "HTML Stimulus", url: "../html-stimulus"}
    ]}
/>
