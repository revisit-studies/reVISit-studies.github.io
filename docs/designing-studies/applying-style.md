# Applying Styles

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
        {name: "Style Demo", url: "https://revisit.dev/study/demo-style"}
    ]}
    codeLinks={[
        {name: "Style Demo Code", url: "https://github.com/revisit-studies/study/blob/main/public/demo-style"}
    ]}
    referenceLinks={[
        {name: "UIConfig", url: "../../typedoc/interfaces/UIConfig"},
        {name: "BaseIndividualComponent", url: "../../typedoc/interfaces/BaseIndividualComponent"},
        {name: "BaseResponse", url: "../../typedoc/interfaces/BaseResponse"},
        {name: "CSS Properties", url:"https://developer.mozilla.org/en-US/docs/Web/CSS/Properties"}
    ]}
/>

ReVISit provides flexible styling capabilities to customize the appearance of your study components and responses. You can apply styles at three levels: globally through UI configuration, at the component level, and at the response level.

## Styling Methods

There are two primary ways to apply styles to your study:

### 1. External CSS Files (`stylesheetPath`)
Load external CSS files for comprehensive styling across components:

```ts
{
  "uiConfig": {
    ...
    "stylesheetPath": "study-name/assets/style.css"
    ...
  }
}
```

### 2. Inline Styles (`style`)
Apply specific CSS properties directly to components or responses:

```ts
"component": {
    ...
    "style": {
        "width": "800px",
        "margin": "20px auto",
        "padding": "30px",
        "fontFamily": "Georgia, serif", 
        "lineHeight": "2",
        "backgroundColor": "#deeff5",
        "fontSize": "16px",
        "border": "1px solid #e0e0e0",
        "borderRadius": "12px"
    }
    ...
},
```

## Styling Hierarchy

Styles are applied in the following order (later styles override earlier ones):

1. **Global UI Styles** (`uiConfig.stylesheetPath`)
2. **Component Styles** (`component.stylesheetPath` and `component.style`)
3. **Response Styles** (`response.stylesheetPath` and `response.style`)
