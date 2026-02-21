# Device Restrictions

ReVISit lets you control whether participants can enter a study based on screen size, browser version, device type, and input method.
These checks are configured in `studyRules`.

## Configuring Study Rules

`studyRules` supports:

- `display`: minimum viewport dimensions in pixels
- `browsers`: allowed browser names and optional minimum versions
- `devices`: allowed device types (`desktop`, `tablet`, `mobile`)
- `inputs`: allowed input types (`mouse`, `touch`)

The following snippet shows how to config device restrictions:

```json
{
  "studyRules": {
    "display": {
      "minHeight": 400,
      "minWidth": 800
    },
    "browsers": {
      "allowed": [
        {
          "name": "chrome",
          "minVersion": 100
        },
        {
          "name": "firefox",
          "minVersion": 100
        },
        {
          "name": "safari",
          "minVersion": 10
        }
      ],
      "blockedMessage": "You must be on a relatively modern browser, Chrome > 100, Firefox > 100, Safari > 10."
    },
    "devices": {
      "allowed": ["tablet", "desktop", "mobile"]
    },
    "inputs": {
      "allowed": ["touch", "mouse"]
    }
  }
}
```

## How It Works

When a participant starts the study, reVISit validates the participant environment against `studyRules`.
If requirements are not met, a blocking screen is shown with the rule that failed.

For display-size checks, participants see a warning screen with a one-minute countdown timer showing current and required dimensions.

![Device Size Check Timer](./img/device-check-timer.gif)

The participant has one minute to resize their browser window. During this time, reVISit continuously monitors the window size. Once both the width and height meet the requirements, the warning disappears and the study begins.

If the timer runs out and the screen is still too small, the participant will see a training failed page and will not be able to continue the study.

![Device Size Check Timeout](./img/device-check-timeout.png)

In the participant table, the participant will be listed as rejected with the reason "Screen resolution too small."

![Device Size Check Rejected Participant](./img/device-check-rejected.png)

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "HTML Demo", url: "https://revisit.dev/study/demo-html/"}
  ]}
  codeLinks={[
    {name: "HTML Demo Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-html"}
  ]}
  referenceLinks={[
    {name: "StudyConfig", url:"../../typedoc/interfaces/StudyConfig"},
    {name: "UIConfig", url:"../../typedoc/interfaces/UIConfig"}
  ]}
/>
