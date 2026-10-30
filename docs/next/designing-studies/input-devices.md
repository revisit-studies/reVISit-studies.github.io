# Keyboard and Gamepad Input

ReVISit can record gamepad input events during a study. A `buttons` response can also assign keyboard shortcuts to its answer options. These features let Study Designers build studies around alternative input methods and let Analysts inspect recorded button and axis activity.

## Record gamepad input

Gamepad capture is off by default. Set `captureGamepad` to `true` in `uiConfig` to capture gamepad events throughout the study. Set it on an individual component to override the global setting for that component.

```json title="public/study-name/config.json"
{
  "uiConfig": {
    "captureGamepad": true
  },
  "components": {
    "consent": {
      "type": "markdown",
      "path": "study-name/assets/consent.md",
      "captureGamepad": false,
      "response": []
    }
  }
}
```

ReVISit records gamepad button and axis changes as part of the component's `windowEvents`. Browsers do not expose a connected gamepad to the page until the Participant presses a button on it, so events before that first press are not captured. If the task depends on a controller, include a clear instruction such as “Press any button on your controller to begin.”

The browser's Gamepad API provides snapshots of the controller state instead of button and axis events. ReVISit polls those snapshots with `requestAnimationFrame` and records changes it observes. As a result, event timestamps mark when the browser noticed a change, not the exact instant the Participant pressed the control; they can lag by up to one display frame (about 8–16 ms). Polling pauses while the browser tab is hidden. These limits make the recorded timestamps unsuitable for precision reaction-time measurements. Use them to describe input order and approximate timing, and choose another measurement method when frame-level timing accuracy matters.

The setting records input events; your stimulus still needs to read the Gamepad API and decide how those inputs control the task.

## Add shortcuts to button options

For a `buttons` response, define each option as an object and set its `key` property. See [Forms](./forms.md#keyboard-shortcuts-for-button-responses) for a configuration example and supported key formats. ReVISit ignores repeated key events and avoids capturing keys while the Participant is typing in an input, text area, or select field.

## Analyze input events

Gamepad events are stored with the other component window events in participant data. Download participant data as JSON to inspect those events alongside the response and timestamps. See [Data Export](../analysis/data-export.md#download-as-json) for the JSON download steps.
