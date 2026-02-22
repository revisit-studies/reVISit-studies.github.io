---
layout: post
title: "Remote Usability Testing of Figma Prototypes with reVISit"
authors:
  - team
---

Scheduling one-on-one usability sessions is time-consuming, expensive, and hard to scale. With reVISit's **screen recording** and **think-aloud audio** features, you can run instrumented prototype studies asynchronously-- participants navigate your Figma prototype while their screen and voice are captured, and you can run multiple participants at once!

<!-- truncate -->

## Why Test Figma Prototypes with reVISit?

Usability testing can be difficult. You have to track people down, schedule a time for the session, and repeat for each user. Remote testing, e.g. via Zoom is possible, but still requires you to be online at the same time. 

reVISit now offers an alternative through it's new screen recording and audio think-aloud features. Because Figma provides shareable embed URLs for interactive prototypes, you can drop one directly into a reVISit `website` component using iframes— little coding needed. Layering on `recordScreen: true` and `recordAudio: true` gives you:

- **Screen recordings** of every participant's navigation path through the prototype
- **Synchronized think-aloud audio** so you can hear their reasoning alongside what they see
- **Structured questionnaires** before and after the prototype task — in the same study, same dataset
- **Participant Replay** to watch recordings back with audio aligned on a single timeline

The entire study is defined in a single JSON config, and all data lands in your reVISit Firebase or Supabase storage automatically.

## Step 1: Enable Screen Recording and Think-Aloud Audio

Start by turning on both capture modes in the top-level `uiConfig` block:

```json
"uiConfig": {
  "recordScreen": true,
  "recordAudio": true,
  "withProgressBar": true,
  "withSidebar": true,
  "contactEmail": "your@email.com"
}
```

Then import the companion library that handles participant permissions:

```json
"importedLibraries": ["screen-recording"]
```

The **`screen-recording`** library provides a `screenRecordingPermission` component that asks participants to share their browser tab — similar to screen-sharing in a video call. When `recordAudio: true` is also set, the permissions step requests microphone access at the same time. reVISit blocks progression if either permission is denied.

Insert the permission step near the start of your study sequence:

```json
"sequence": {
  "order": "fixed",
  "components": [
    "introduction",
    "$screen-recording.co.screenRecordingPermission",
    "figmaTask",
    "postTaskQuestions"
  ]
}
```

![The permissions step participants encounter before the study begins — the browser's native "Choose what to share" dialog with the reVISit study tab pre-selected, alongside the microphone permission prompt. Both are requested together on the same screen.](/img/blog_posts/figma-1.png)

## Step 2: Embed Your Figma Prototype

In Figma, open your prototype, click **Share → Open embed code**, and copy the URL from the `src` attribute of the generated `<iframe>` tag. It will look something like:

```
https://embed.figma.com/proto/<FILE_ID>/<PROTOTYPE_NAME>?node-id=...&scaling=min-zoom&embed-host=share
```

Paste that URL into a `website` component in your reVISit config:

```json
"figmaTask": {
  "type": "website",
  "recordAudio": true,
  "recordScreen": true,
  "path": "https://embed.figma.com/proto/<YOUR_FILE_ID>/<PROTOTYPE_NAME>?...",
  "instruction": "Please explore the prototype below. As you navigate, speak your thoughts aloud — tell us what you notice, what you expect, and anything that feels unclear or surprising.",
  "response": []
}
```

Setting `recordAudio` and `recordScreen` on the component itself is optional when they are already enabled globally in `uiConfig`, but it is good practice to be explicit — especially if you want different recording behavior on other components (e.g., a plain questionnaire where you turn audio off).

![The reVISit participant view during the prototype task — the Figma prototype is embedded in the main content area, fully interactive, while the right sidebar displays the think-aloud instructions in a scrollable panel. The progress bar is visible at the top of the page.](/img/blog_posts/figma-2.png)

## Step 3: Guide Participants with Sidebar Instructions

Without a moderator in the room, participants need clear on-screen prompts to stay in the think-aloud mindset. Add a `textOnly` response at `location: "sidebar"` to keep instructions visible throughout the entire task:

```json
"response": [
  {
    "id": "think-aloud-instructions",
    "type": "textOnly",
    "location": "sidebar",
    "prompt": "### Think-Aloud Instructions\n\nYour screen and audio are being recorded. Please say out loud everything you are thinking as you move through the prototype.\n\n**As you explore, try to describe:**\n\n- What you notice on each screen\n- What you expect to happen when you tap or click something\n- What feels clear or confusing\n- Why you choose certain actions\n\nThere are no right or wrong actions — we are evaluating the design, not you."
  }
]
```

Sidebar content remains pinned while participants scroll or interact, so the instructions stay in view even as they move through multiple prototype screens.

## Step 4: Collect Structured Post-Task Feedback

Follow the prototype task with a `questionnaire` component. Setting `recordAudio: true` on it means participants can continue to narrate their thoughts while they fill out rating scales and open-ended questions — a useful signal for interpreting their written responses:

```json
"postTaskQuestions": {
  "type": "questionnaire",
  "recordAudio": true,
  "response": [
    {
      "id": "satisfaction",
      "prompt": "Rate your satisfaction with the following aspects of the prototype.",
      "location": "aboveStimulus",
      "type": "matrix-radio",
      "answerOptions": "satisfaction5",
      "questionOptions": [
        "Overall Design",
        "Ease of Navigation",
        "Visual Clarity",
        "Completeness of Information"
      ]
    },
    {
      "id": "open-feedback",
      "prompt": "What stood out most during your exploration — positive or negative?",
      "location": "aboveStimulus",
      "type": "longText",
      "placeholder": "Share your thoughts here..."
    }
  ]
}
```

The Likert matrix response type (`matrix-radio`) with the built-in `satisfaction5` answer options gives you a clean, pre-labeled five-point scale without any extra configuration.

## Reviewing Your Results

Once participants complete the study, head to the reVISit analysis interface. The **[Participant Replay](https://revisit.dev/docs/analysis/participant-replay/)** view lets you watch each participant's screen recording with their think-aloud audio synchronized on a timeline — so you can see exactly where they hesitated, backtracked, or expressed confusion.

For deeper qualitative analysis, the **[Qualitative Coding](https://revisit.dev/docs/analysis/coding/)** interface displays auto-transcribed think-aloud text for each participant and task, lets you correct transcriptions, and supports creating and applying codebooks to surface recurring themes across your dataset.

![The Participant Replay interface showing a recording of a participant navigating the Figma prototype in the main pane, with the audio waveform timeline running along the bottom of the player. The qualitative coding panel is open on the right, displaying the auto-transcribed think-aloud text with analyst annotations applied.](/img/blog_posts/figma-3.png)

## Putting it All Together

Here is a complete, ready-to-use config. The only change you need to make is swapping in your Figma embed URL for the `path` value in `figmaTask`:

```json
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/v2.3.0/src/parser/StudyConfigSchema.json",
  "studyMetadata": {
    "title": "Prototype Usability Study",
    "version": "pilot",
    "authors": ["Your Name"],
    "date": "2026-02-21",
    "description": "A think-aloud usability study with screen and audio recording.",
    "organizations": ["Your Institution"]
  },
  "uiConfig": {
    "contactEmail": "your@email.com",
    "withProgressBar": true,
    "withSidebar": true,
    "recordAudio": true,
    "recordScreen": true
  },
  "importedLibraries": ["screen-recording"],
  "components": {
    "introduction": {
      "type": "markdown",
      "path": "<PATH_TO_YOUR_INTRODUCTION.md>",
      "response": []
    },
    "figmaTask": {
      "type": "website",
      "recordAudio": true,
      "recordScreen": true,
      "path": "https://embed.figma.com/proto/<YOUR_FILE_ID>/<PROTOTYPE_NAME>?node-id=...&scaling=min-zoom&embed-host=share",
      "instruction": "Please explore the prototype below. As you navigate, speak your thoughts aloud — tell us what you notice, what you expect, and anything that feels unclear or surprising.",
      "response": [
        {
          "id": "think-aloud-instructions",
          "type": "textOnly",
          "location": "sidebar",
          "prompt": "### Think-Aloud Instructions\n\nYour screen and audio are being recorded. Please say out loud everything you are thinking as you move through the prototype.\n\n**As you explore, try to describe:**\n\n- What you notice on each screen\n- What you expect to happen when you tap or click something\n- What feels clear or confusing\n- Why you choose certain actions\n\nThere are no right or wrong actions — we are evaluating the design, not you."
        }
      ]
    },
    "postTaskQuestions": {
      "type": "questionnaire",
      "recordAudio": true,
      "response": [
        {
          "id": "satisfaction",
          "prompt": "Rate your satisfaction with the following aspects of the prototype.",
          "location": "aboveStimulus",
          "type": "matrix-radio",
          "answerOptions": "satisfaction5",
          "questionOptions": [
            "Overall Design",
            "Ease of Navigation",
            "Visual Clarity",
            "Completeness of Information"
          ]
        },
        {
          "id": "open-feedback",
          "prompt": "What stood out most during your exploration — positive or negative?",
          "location": "aboveStimulus",
          "type": "longText",
          "placeholder": "Share your thoughts here..."
        }
      ]
    }
  },
  "sequence": {
    "order": "fixed",
    "components": [
      "introduction",
      "$screen-recording.co.screenRecordingPermission",
      "figmaTask",
      "postTaskQuestions"
    ]
  }
}
```

## Getting Started

To learn more, check out the [Screen Recording setup guide](https://revisit.dev/docs/designing-studies/record-screen/) and the [Think-Aloud documentation](https://revisit.dev/docs/designing-studies/think-aloud/). If you have questions or want to share what you build, come find us in the [reVISit Slack](https://revisit.dev/contact/). We'd love to see what kinds of prototypes you put to the test.
