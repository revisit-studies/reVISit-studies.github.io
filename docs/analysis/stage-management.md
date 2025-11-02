# Stage Management

Add stage management in the manage tab
Users can add a stage, give the stage a color, and modifythe existing stage color
Add a stage selection. The data displayed in each tab, and the downloaded data, will be filtered by the selected stage.

It's often useful to label study stages, such as "debugging" - "pre-pilot" - "pilot" - "main-study" and have these fields available in the dataset.

We will create a "default" stage.

Stages should have:

a label (that's the only thing that's stored in the data)
a color tag (so that it's easy to identify in the participant view)
a long description
a number that specifies "target # of participants"
Exactly one stage needs to be active, and we need the UI to activate a stage. When a new stage is created, it should be activated by default.

We should allow experimenters to create arbitrary stages in the "Manage" tab.

This could be visuallized in a table; and the tag selection / renaming / coloring UI could be reused.