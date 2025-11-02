# Live Monitor

Give a longer description of what this PR addresses and why it's needed
Add a live participants monitor view in the analytics interface for Firebase.
support regular trials and dynamic trials.
will have a horizontal scroll if the trial number exceeds a certain length.
Filters for in progress, completed, and rejected users will work in this tab too.
Hover will show trial names

This feature will add some firebase methods to store the participant progress in the firestore and a dashboard screen to watch progress in the analysis panel. This will show the data in realtime