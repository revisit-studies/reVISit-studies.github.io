# Prolific Integration

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Prolific", url: "https://prolific.com"}
    ]}
/>

## Overview
[Prolific](https://prolific.com) is a popular platform for recruiting crowd-sourced participants. ReVISit has built-in integration to make it easy to run studies on prolific. 

When you create a prolific study and give it the url of your deployed reVISit study site, it will add multiple url parameters to the link. For our purposes, we want to store the `PROLIFIC_PID`. To do this, in the `uiConfig` object of your config file, add the key 

```ts
'uiConfig': {
    ...
    'urlParticipantIdParam': 'PROLIFIC_PID'
    ...
}
```

To automatically access the `PROLIFIC_PID`, use the `paramCapture` field inside of your response. The below example will automatically answer the id field in the introduction with the linked PROLIFIC_PID, and will not allow the participant to change it. This way, you are guaranteed to properly keep track of your participants without relying on them to enter their prolific id. 

```ts
'introduction': {
    'type': 'markdown',
    'path': 'myPath/path',
    'response': [
        {
            'id': 'prolificId',
            'prompt': 'Please enter your Prolific ID',
            'required': true,
            'location': 'belowStimulus',
            'type': 'shortText',
            'placeholder': 'Prolific ID',
            'paramCapture': 'PROLIFIC_PID'
        }
    ]
},
```

When the study is over, you want to redirect participant back to prolific, so they can be confirmed as finished and paid. This is also done in the uiConfig via the `studyEndMsg`, and you should use the link specific to your study that prolific provides. Be sure to use the return URL provided by Prolific, and include `{PARTICIPANT_ID}` where the participant ID should be inserted.

Here's an exmaple:

```ts
"uiConfig": {
    "urlParticipantIdParam": "PROLIFIC_PID",
    "studyEndMsg": "Thank you for completing the study! Return to Prolific: [Click here](https://app.prolific.com/submissions/complete?cc={STUDY_ID}?PROLIFIC_ID={PARTICIPANT_ID})"
}
```

## Customizing Return Links with Participant ID

Customizing return links with participant ID is not limited to Prolific. You can use it with any external participant management system that tracks user IDs through URL parameters—such as custom research platforms, or other services like SONA.

To use this feature with another service, simply update the `urlParticipantIdParam` in your `uiConfig` to match the URL parameter that the service appends to your study link. Then, use `{PARTICIPANT_ID}` as a placeholder in the studyEndMsg, which reVISit will replace with the actual value from the URL when the study ends.

### Generic Research Platform

Let’s say you’re recruiting participants from a research pool that passes `PARTICIPANT_ID` as a query parameter in the study URL. Here's how you'd configure reVISit to capture and return this ID:

#### 1. `uiConfig` Setup

```ts
"uiConfig": {
    "urlParticipantIdParam": "PARTICIPANT_ID",
    "studyEndMsg": "Thank you for completing the study! Return to this link to receive credit: [Click here](https://study-link.com/complete?cc={STUDY_ID}&ID={PARTICIPANT_ID})"
}
```

In this example, when a participant visits a URL like:
https://revisit.dev/study/studyName?PARTICIPANT_ID=abc123
ReVISit will store abc123 and inject it into the return link at the end of the study.

#### 2. Capture Participant ID in the Study
To store and display the participant ID within the study, use a shortText response with paramCapture:

```ts
"introduction": {
    "type": "markdown",
    "path": "myPath/path",
    "response": [
        {
            "id": "participantId",
            "prompt": "Please enter your Participant ID",
            "required": true,
            "location": "belowStimulus",
            "type": "shortText",
            "placeholder": "Participant ID",
            "paramCapture": "PARTICIPANT_ID"
        }
    ]
},
```
This automatically fills in the participant’s ID from the URL and disables editing to prevent manual tampering.

### SONA Integration
SONA Systems is another commonly used recruitment platform in academic research. SONA can append a unique participant ID (e.g., SONA_ID) to the study URL. To ensure participants are redirected properly at the end of the study, you can configure ReVISit as follows:

1. uiConfig Setup for SONA

```ts
"uiConfig": {
    "urlParticipantIdParam": "SONA_ID",
    "studyEndMsg": "Thank you for completing the study! Return to SONA to receive credit: [Click here](https://study-link.com/submissions/complete?cc={STUDY_ID}&SONA_ID={PARTICIPANT_ID})"
}
```
As before, `{PARTICIPANT_ID}` will be replaced with the actual SONA_ID value from the URL. So if the participant opens a link like:

https://revisit.dev/study/my-study-id?SONA_ID=789xyz

The participant will be redirected to:
https://study-link.com/submissions/complete?cc=StudyID&SONA_ID=789xyz

2. Capture SONA ID in Study
Just like with other platforms, you can optionally display the SONA ID in the introduction or elsewhere in the study using:

```ts
"introduction": {
    "type": "markdown",
    "path": "myPath/path",
    "response": [
        {
            "id": "sonaId",
            "prompt": "Your SONA ID",
            "required": true,
            "location": "belowStimulus",
            "type": "shortText",
            "placeholder": "SONA ID",
            "paramCapture": "SONA_ID"
        }
    ]
},
```