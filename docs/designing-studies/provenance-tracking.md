# Provenance Tracking



ReVISit has integrated provenance tracking with Trrack, a state-based provenance tracking library maintained by the same team that maintains reVISit. The below example shows a simple example for using trrack, for more detailed information on trrack and its API visit the [trrack documentation](https://apps.vdl.sci.utah.edu/trrack) 

## Integrating into a react or HTML component

Building off the [bar chart example](../react-stimulus) we created in the react stimulus tutorial, we will add simple provenance tracking that keeps track of which bar in the bar chart is selected. 

Because trrack is state-based, you must define a state for your tracked application. In this case, the state is simply 
```ts
{
    selectedBar: string | null;
}
```

Next, we need to create a trrack instance, and an action that we will call when the bar gets clicked. We only need to do this once. 

```ts
const { actions, trrack } = useMemo(() => {
    const reg = Registry.create();

    const selectBarAction = reg.register('click', (state, barName: string) => {
        state.selectedBar = barName
        return state;
    });

    const trrackInst = initializeTrrack({
        registry: reg,
        initialState: { selectedBar: null },
    });

    return {
        actions: { selectBarAction },
        trrack: trrackInst,
    };
}, []);
```

Finally, all thats left is to call the action! When calling the action you can add a label to the created node, either for analysis or if you wish to visualize your provenance graph. 

Once you have a graph, you save it to storage by calling the `setAnswer` callback which is passed as a prop to all react components used in revisit. 

```ts
const clickCallback = useCallback((barName: string) => {
    trrack.apply('Select Bar', actions.selectBarAction(barName));

    setAnswer({
        status: true,
        provenanceGraph: trrack.graph.backend,
        answers: {}, // You can set the answers here if you want to control it manually, otherwise leave empty.
    });
}, [actions, setAnswer, taskid, trrack]);
```

For a full react example, see our [ClickAccuracyTest example](https://github.com/revisit-studies/study/blob/main/src/public/demo-click-accuracy-test/assets/ClickAccuracyTest.tsx)

For a basic HTML + D3 example, see our [Dots example](https://github.com/revisit-studies/study/blob/main/public/demo-html-trrack/assets/dots-count.html). Creating a trrack instance and actions works the same as above, just without the react hooks.


## Using trrack for undo/redo 
The above example shows the basic use case for trrack if you just want to store provenance, and do some simple analysis on it later. But with a little more effort, trrack can also give your stimulus more powerful features, such as undo/redo and full study rehydration. 

For this, we will use trrack as our central storage, instead of react. So in the above example, you probably have a react state that looks like 

```ts
const [selectedBar, setSelectedBar] = useState<string | null>(null);
```

We will keep this, but where we would normally call `setSelectedBar`, such as in an onclick of the bar, we instead call our trrack action 

```ts
trrack.apply('Select Bar', actions.selectBarAction(barName));
```

Now, to update our frontend, we will add an observer onto trrack that will get called whenever our current node changes. This gets called not only when new clicks are made, but also when `undo` or `redo` are called.

```ts
trrack.currentChange(() => {
    const selectedBar = trrack.getState().selectedBar;
    setSelectedBar(selectedBar);
});
```

Now we can add undo/redo, either via a button or with the standard keybinds, by calling the built in trrack functions. 

```ts
trrack.undo();
trrack.redo();
```

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks= {[
        {name: "HTML Track Demo", url: "https://revisit.dev/study/demo-html-trrack/"},
        {name: "Click Accuracy Demo", url: "https://revisit.dev/study/demo-click-accuracy-test"}
    ]}
    codeLinks= {[
        {name: "HTML Track Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-html-trrack"},
        {name: "Click Accuracy Code", url: "https://github.com/revisit-studies/study/tree/main/src/public/demo-click-accuracy-test"},
    ]}
    referenceLinks={[
        {name: "Trrack", url:"https://apps.vdl.sci.utah.edu/trrack"}
    ]}
/>