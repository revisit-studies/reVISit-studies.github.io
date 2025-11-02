# Think Aloud Coding

Does this PR close any open issues?
Closes #674 #712 #850 #527 #543 #921 #888

Give a longer description of what this PR addresses and why it's needed
Merging the think-aloud analysis from the CrowdAloud paper, with many many UI changes and functionality, but actual features include

-- Playback speed adjusting
-- Showing Transcripts from firebase in the analysis tabs
-- Transcripts come with text tags, which can be created and assigned, and annotations
-- Participants and tasks have their own tags
-- The footer with audio has been rewritten to be the same between provenance playback and analysis, and they each have a button that opens th eother
-- They also communicate and sync up participant, task, and time

Are there any additional TODOs before this PR is ready to go?
TODOs:

Theres still the problem of doing all this makes it impossible to have multiple analyses of different participants open at once, which feels wrong, and if I had to guess will be extremely annoying