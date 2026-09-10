# Record Screen and Webcam

ReVISit provides built-in support for screen and webcam recording and playback, enabling both in-person and crowdsourced tracking studies. You can record the screen, the webcam, or both. Audio recording can also be enabled for Think Aloud studies.

## Turning on screen and webcam recording

You can enable recording by setting `recordScreen` and/or `recordWebcam` in your study config. Screen recording uses the [`screen-recording`](../libraries/screen-recording.md) library. Webcam-only studies use the `webcam-recording` library and its `webcamRecordingPermission` component.

**Step 1: Enable recording in your study**

*A. Enabling recording throughout the study*

Set the `recordScreen` flag in the `uiConfig` section of your config file. You can optionally specify the FPS (frames per second) for screen recording.

```json title="public/study-name/config.json"
"uiConfig": {
    "recordScreen": true,
    "recordWebcam": true,
    "recordScreenFPS": 30
}
```

This enables screen and webcam recording throughout your study. The two flags are independent, so set only the one you need. You can also disable either recording type on individual components.

```json title="public/study-name/config.json"
"barchart": {
    "recordScreen": false,
    "recordWebcam": false
}
```

*B. Enabling recording on specific screens*

If you want to enable recording on certain screens, you can set the recording flags at the component level. Component settings override the global config.

```json title="public/study-name/config.json"
"barchart": {
    "recordScreen": true,
    "recordWebcam": true
}
```

**Step 2: Import the recording library**

For a study that records the screen, or both the screen and webcam, add `screen-recording` to `importedLibraries`. For a webcam-only study, add `webcam-recording` instead.

```json title="public/study-name/config.json"
"importedLibraries": [
    "screen-recording"
],
```

**Step 3: Add the recording permission page to your sequence**

For screen recording, insert `screenRecordingPermission` into your sequence, ideally after your introduction and consent components. This page also starts webcam capture when `recordWebcam` is enabled, and starts microphone capture when `recordAudio` is enabled.

```json title="public/study-name/config.json"
"sequence": {
    "order": "fixed",
    "components": ["introduction", "$screen-recording.components.screenRecordingPermission", "external_website", "barChart"]
}
```

For a webcam-only study, insert the webcam permission page instead:

```json title="public/study-name/config.json"
"sequence": {
    "order": "fixed",
    "components": ["introduction", "$webcam-recording.components.webcamRecordingPermission", "barChart"]
}
```

## Recording per stimulus

By default, enabled recording types continue for all tasks that follow the permission page. However, we recommend only recording tasks you plan to analyze, and disabling recording for components such as consent forms or introductions.

To disable recording for a component, set its `recordScreen` and/or `recordWebcam` flag to `false`:

```json title="public/example-brush-interactions/config.json"
"introduction": {
    "type": "markdown",
    "path": "example-brush-interactions/assets/introduction.md",
    "recordScreen": false,
    "recordWebcam": false,
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
```

## Recording permissions

Participants receive browser permission requests for the devices the study records. The screen permission page includes screen and webcam previews when both are enabled. The webcam-only permission page includes a live webcam preview. If participants do not grant the required permissions, they will be stopped from continuing the study. You can find more information in the [reVISit libraries](./plugin-libraries.md).

Participants are asked to share the study tab. In Chromium-based browsers, the study tab is usually pre-selected by default. In other browsers, participants must manually select the correct tab, which is labeled _"RECORD THIS TAB."_

Keep the recording streams active until the study is completed.
Recording files are saved as separate screen and webcam assets by the selected storage engine.

:::caution[Dynamic blocks]
If the only component that needs webcam or audio recording is created later inside a dynamic block, ReVISit may not request that device before the block starts. To avoid this, enable the recording at the study level or include a known recording component before the dynamic block.
:::

## Downloading recordings

You can [download screen and webcam recordings](../analysis/data-export.md#download-screen-and-webcam-recordings) from the analysis page. The same recording download control handles screen-only, webcam-only, and combined studies. When both are available, it downloads both video files.

Alternatively, you can use `gsutil` to download recorded videos in bulk. Navigate to your Firebase storage to find your appspot name, then run the relevant command:

```bash
gsutil -m cp -r gs://my-bucket/studyName/screenRecording
gsutil -m cp -r gs://my-bucket/studyName/webcamRecording
```

## Replaying recordings

In analysis, screen and webcam recordings are loaded separately and played together. When both are available, choose between side by side, picture in picture, and webcam on top. The selected layout applies only to the current analysis session.

## Screen recording with Think Aloud (audio recording)

ReVISit also supports [Think Aloud](../think-aloud) protocols alongside screen recording. To enable this, set `recordAudio` in the `uiConfig`:

```json title="public/study-name/config.json"
"uiConfig": {
    "recordScreen": true,
    "recordAudio": true
}
```

When both screen and audio recording are enabled, the permissions page will include a microphone check.

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
        {name: "Screen and Webcam Recording Demo", url: "https://revisit.dev/study/library-screen-recording"},
        {name: "Webcam-only Recording Demo", url: "https://revisit.dev/study/library-webcam-recording"}
    ]}
    codeLinks={[
        {name: "Screen and Webcam Recording Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-screen-recording"},
        {name: "Webcam-only Recording Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-webcam-recording"}
    ]}
    referenceLinks={[
        {name: "Screen Recording Library", url: "../../libraries/screen-recording/"},
        {name: "ReVISit Libraries", url: "../plugin-libraries"},
        {name: "Downloading recordings", url: "../../analysis/data-export/#download-screen-and-webcam-recordings"},
        {name: "ThinkAloud", url: "../think-aloud"}
    ]}
/>
