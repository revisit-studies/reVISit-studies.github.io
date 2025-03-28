# Think Aloud

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLink="https://revisit.dev/study/test-audio/"
    codeLink="https://github.com/revisit-studies/study/tree/main/public/test-audio"
    referenceLinks={
      [
        {name: "mic-check Library", url:"../../libraries/mic-check/"}
      ]
    }
/>

ReVISit has integrated audio recording and audio playback for conducting in-person or crowdsourced think-aloud studies. Audio is only recorded while using firebase storage, and will not activate if using local storage. 

## Turning on audio recording 

Turning on audio recording for your entire study can be done by setting the `recordStudyAudio` flag at the top level of your config file.
```json 
"recordStudyAudio": true
```

By default, this will record audio for every task in the study. However, we recommend only recording audio for tasks which you plan on later analyzing, and turning it off for tasks such as consent forms and introductions. Each component can turn off audio for that component by setting the `recordAudio` flag within the component to false, as shown below. 

```json

"introduction": {
    "type": "markdown",
    "path": "example-brush-interactions/assets/introduction.md",
    "recordAudio": false,
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
},
```

Audio is recorded via browser, and participants will receive a permissions request from their browser to access their microphone. If they do not have a microphone or failed to grant permissions, they will not be automatically stopped from continuing the study. However, for this purpose we provide the `mic-check` library, which requires participants to have a functioning microphone to continue the study. You can find more information in the [reVISit libraries](./plugin-libraries.md).

All audio data is stored in firebase storage. To listen to participants audio after they have completed a study, navigate to the [Participant Replay](../analysis/participant-replay.md) view in analysis. 

To download audio data after completing a study, we recommend utilizing gsutil to download the audio and transcript files in bulk. Navigate to your firebase storage to find your appspot name, then run the command `gsutil -m cp -r gs://my-bucket/studyName/audio .`

