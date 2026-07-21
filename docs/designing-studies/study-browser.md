# Study Browser

The Study Browser shows how a Study Config is structured and, when an Analyst views a Participant's data, how that Participant moved through the study. Hover over an indicator to view its details.

<!-- Screenshot replacement note: Use the actual Study Browser icons in the screenshots listed below. Do not substitute emoji or text glyphs for the UI icons. -->

## Reading the Study Browser

### Study Structure

- **Imported library:** The package-import icon marks a component or sequence from an imported library. Hover over it to see the library name.
- **Interruption:** The brain icon marks an interruption inserted into the normal sequence flow, such as a break or attention check.
- **Conditional block:** The tree icon marks a block whose contents or progression depend on conditions.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-structure-indicators.png. Capture the Study Browser Steps Panel with nested sequence rows that show the actual blue package-import, orange brain, and green binary-tree icons. -->

### Flow and Ordering

- **Skip condition:** The forward-arrow icon marks a block that can send a Participant to a later component or block. Hover over it to see a summary of the condition and destination.
- **Random or Latin-square block:** The shuffle icon marks a block whose components use `random` or `latinSquare` assignment.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-flow-and-ordering.png. Capture a sequence with a random or Latin-square block and a skip condition. Open the actual purple forward-arrow tooltip so its condition and destination are readable, and show the gray shuffle icon. -->

### Response Randomization

- **Random responses:** The three-dot die means that response items are displayed in random order.
- **Random options or questions:** The five-dot die means that the options in a radio, checkbox, or button response—or the questions in a matrix response—are displayed in random order.

Response order and option/question order are configured independently.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-response-randomization.png. Capture two component rows side by side: one with the actual three-dot random-responses die and one with the actual five-dot random-options-or-questions die. The screenshot should make the independent response-order and option/question-order settings clear. -->

### Participant Status

These icons describe the Participant's overall study status, not whether an individual task response was correct.

- **Completed:** Green checkmark.
- **In progress:** Blue progress ring.
- **Rejected:** Red X.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-participant-status.png. Capture the Participant Status column with the actual green checkmark, blue progress ring, and red X. -->

### Task Correctness

These icons appear for an individual task response when an Analyst views Participant data.

- **Correct:** Green checkmark.
- **Incorrect:** Red X.
- **Correctness not configured:** Gray checkmark. The tooltip reads: “Response recorded; correctness not configured.”
- **Unfinished:** Orange progress icon.

**Skipped** means a skip condition was triggered during participation, so the Participant did not see the item. **Excluded** means the item was left out of the Participant's generated sequence because of sampling, randomization, or condition filtering. An excluded item was not skipped after an answer.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-task-correctness.png. Capture the Study Browser while viewing one Participant. Show green, red, and gray response-status icons together, with the gray-check tooltip open; show an unfinished task plus Skipped and Excluded items so their distinct states are visible. -->

### Recordings and Time

- **Monitor:** An orange monitor means a screen recording is available for the task.
- **Microphone:** An orange microphone means an audio recording is available for the task.
- **Browsed away marker:** A black bar or tooltip marks a point when the Participant browsed away from the study.
- **Hourglass:** The Duration column uses an hourglass icon to identify the recorded duration.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-recordings-and-time.png. Capture an expanded task timeline with the actual orange monitor, orange microphone, black browsed-away marker or tooltip, and Duration hourglass. -->

### Other Controls

- **Chevron:** Expand or collapse a block.
- **Info icon:** Hover to view the component description, parameters, configured response, and—when available—recorded and correct answers.
- **Copy icon:** Copy the participant ID from the ID column.

<!-- Screenshot needed: docs/designing-studies/img/study-browser-component-details.png. Capture a component row with its info-icon hover card open. Show a description or parameters and, when available, configured, recorded, and correct answers. Include the chevron and participant-ID copy icon when they are visible. -->
