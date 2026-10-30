# Study Browser

The Study Browser shows how a Study Config is structured and, when an Analyst views a Participant's data, how that Participant moved through the study. Hover over an indicator to view its details.


## Reading the Study Browser

### Study Structure

- **Imported library:** The package-import icon marks a component or sequence from an imported library. Hover over it to see the library name.
- **Interruption:** The brain icon marks an interruption inserted into the normal sequence flow, such as a break or attention check.
- **Conditional block:** The tree icon marks a block whose contents or progression depend on conditions.


### Flow and Ordering

- **Skip condition:** The forward-arrow icon marks a block that can send a Participant to a later component or block. Hover over it to see a summary of the condition and destination.
- **Random or Latin-square block:** The shuffle icon marks a block whose components use `random` or `latinSquare` assignment.


### Response Randomization

- **Random responses:** The three-dot die means that response items are displayed in random order.
- **Random options or questions:** The five-dot die means that the options in a radio, checkbox, or button response—or the questions in a matrix response—are displayed in random order.

Response order and option/question order are configured independently.


### Participant Status

These icons describe the Participant's overall study status, not whether an individual task response was correct.

- **Completed:** Green checkmark.
- **In progress:** Blue progress ring.
- **Rejected:** Red X.


### Task Correctness

These icons appear for an individual task response when an Analyst views Participant data.

- **Correct:** Green checkmark.
- **Incorrect:** Red X.
- **Correctness not configured:** Gray checkmark. The tooltip reads: “Response recorded; correctness not configured.”
- **Unfinished:** Orange progress icon.

**Skipped** means a skip condition was triggered during participation, so the Participant did not see the item. **Excluded** means the item was left out of the Participant's generated sequence because of sampling, randomization, or condition filtering. An excluded item was not skipped after an answer.


### Recordings and Time

- **Monitor:** An orange monitor means a screen recording is available for the task.
- **Microphone:** An orange microphone means an audio recording is available for the task.
- **Browsed away marker:** A black bar or tooltip marks a point when the Participant browsed away from the study.
- **Hourglass:** The Duration column uses an hourglass icon to identify the recorded duration.


### Other Controls

- **Chevron:** Expand or collapse a block.
- **Info icon:** Hover to view the component description, parameters, configured response, and—when available—recorded and correct answers.
- **Copy icon:** Copy the participant ID from the ID column.
