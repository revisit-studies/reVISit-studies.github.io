# Record Screen
 
ReVISit provides built-in support for screen recording and playback, enabling both in-person and crowdsourced tracking studies.

## Turning on screen recording 

You can enable screen recording in your study by setting the `recordScreen` flag, importing the `screen-recording` library, and adding the `screenRecordingPermission` component to your study sequence.

**Step 1: Enable screen recording in your study**

*A. Enabling screen recording through out the study*

Set the `recordScreen` flag in the `uiConfig` section of your config file. You can optionally specify the FPS (frames per second) for screen recording.

```json
{
    "uiConfig": {
        "recordScreen": true,
        "recordScreenFPS": 30
    }
}
```

This enables screen recording to your entire study. However, you can also disable screen recording on individual component.

```json
{
    "barchart": {
        "recordScreen": false
    }
}
```

*B. Enabling screen recording on specific screens*

If you want to enable screen recording on certain screens, you can leave `recordScreen` in the `uiConfig` as `false` and enable `recordScreen` at the component level. Settings in the component level overrides the global config. 

```json
{
    "barchart": {
        "recordScreen": true
    }
}
```

**Step 2: Import the screen recording library**

Add `screen-recording` to the `importedLibraries` section of your config. This makes the `screenRecordingPermission` component available, which is required to request user permission for screen capture.

```json
"importedLibraries": [
    "screen-recording"
],
```

**Step 3: Add the screen recording permission page to your sequence**

Insert the `screenRecordingPermission` page into your study sequence (ideally after your introduction and consent components). Any screens that follow it will be able to record the participant’s screen.

```json
{
    "sequence": {
        "order": "fixed",
        "components": ["introduction", "$screen-recording.co.screenRecordingPermission", "external_website", "barChart"]
    }
}
```

## Screen recording per stimulus

By default, the screen is recorded for all tasks that follow the `screenRecordingPermission` page. However, we recommend only recording tasks you plan to analyze, and disabling recording for components such as consent forms or introductions.

To disable recording for a component, set its `recordScreen` flag to `false`:

```json
{
    "introduction": {
        "type": "markdown",
        "path": "example-brush-interactions/assets/introduction.md",
        "recordScreen": false,
        "response": [
            {
                "id": "prolificId",
                "prompt": "Please enter your Prolific ID",
                "location": "belowStimulus",
                "type": "shortText",
                "placeholder": "Prolific ID",
                "paramCapture": "PROLIFIC_PID"
            }
        ]
    }
}
```

## Screen recording permissions

Screen is recorded via browser, and participants will receive a permissions request from their browser to allow screen capture. If they do not grant permissions, they will be automatically stopped from continuing the study. This is done through the `screen-recording` library. You can find more information in the [reVISit libraries](./plugin-libraries.md).

Participants are asked to share the study tab. In Chromium-based browsers, the study tab is usually pre-selected by default. In other browsers, participants must manually select the correct tab, which is labeled _"RECORD THIS TAB."_

All recorded videos are stored in Firebase storage. To download participants' screen recorded videos after they have completed a study, navigate to the [Participant Replay](../analysis/participant-replay.md) view in analysis. 

## Downloading screen recording videos

You can [download screen recording videos](../analysis/data-export.md#download-screen-recording) from the analysis page of the study.

Alternatively, you can use `gsutils` to download screen recorded videos. We recommend utilizing `gsutil` to download the video files in bulk. Navigate to your firebase storage to find your appspot name, then run the command:

```bash
gsutil -m cp -r gs://my-bucket/studyName/screenRecording .
```

## Screen recording with think-aloud (audio recording)

ReVISit also supports [think-aloud](../think-aloud) protocols alongside screen recording. To enable this, set `recordAudio` in the `uiConfig`:

```json
{
    "uiConfig": {
        "recordScreen": true,
        "recordAudio": true
    }
}
```

When both screen and audio recording are enabled, the permissions page will include a microphone check.

<!-- Importing links -->

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
      {name: "Screen Recording Demo", url: "https://revisit.dev/study/demo-screen-recording/"}
    ]}
    codeLinks={[
      {name: "Screen Recording Code", url: "https://github.com/revisit-studies/study/tree/main/public/demo-screen-recording"}
    ]}
    referenceLinks={[
        {name: "Screen Recording Library", url: "../../libraries/screen-recording/"},
        {name: "reVISit Libraries", url: "../plugin-libraries"},
        {name: "Downloading recorded videos", url: "../../analysis/data-export/#download-screen-recording"},
        {name: "ThinkAloud", url: "../think-aloud"}
    ]}
/>
