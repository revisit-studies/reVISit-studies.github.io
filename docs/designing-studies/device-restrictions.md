# Device Restrictions

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
      {name: "HTML Demo", url: "https://revisit.dev/study/demo-html/"}
    ]}
    codeLinks={[
      {name: "HTML Demo Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-html"}
    ]}
    referenceLinks={[
        {name: "UI Config", url:"../../typedoc/interfaces/UIConfig"}
    ]}
/>

ReVISit lets you set a minimum screen size for your study to make sure participants have enough space to view the content and complete tasks. If their screen is too small, they’ll see a message asking them to resize their browser window or switch to a larger device.

## Setting Screen Size Requirements

You can specify minimum screen dimensions in the `uiConfig` section of your study configuration file by setting the `minWidthSize` and `minHeightSize` properties. These values are measured in pixels.

```json
{
  "uiConfig": {
    "contactEmail": "contact@revisit.dev",
    "helpTextPath": "demo-html/assets/help.md",
    "logoPath": "revisitAssets/revisitLogoSquare.svg",
    "withProgressBar": true,
    "autoDownloadStudy": false,
    "withSidebar": true,
    "windowEventDebounceTime": 200,
    "minHeightSize": 800,
    "minWidthSize": 400
  }
}
```