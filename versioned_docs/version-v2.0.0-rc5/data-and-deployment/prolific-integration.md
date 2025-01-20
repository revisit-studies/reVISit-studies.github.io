# Prolific Integration

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

When the study is over, you want to redirect participant back to prolific, so they can be confirmed as finished and paid. This is also done in the uiConfig via the `studyEndMsg`, and you should use the link specific to your study that prolific provides. 

```ts
'uiConfig': {
    ...
    'urlParticipantIdParam': 'PROLIFIC_PID',
    'studyEndMsg': '**Thank you for completing the study. You may click this link and return to Prolific**: [yourProlificLink](yourProlificLink)',
    ...
}
```

