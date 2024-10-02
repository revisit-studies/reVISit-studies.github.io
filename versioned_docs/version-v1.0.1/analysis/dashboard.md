# Dashboard

The dashboard is the landing page of the analysis platform. It provides an overview of the status of each of your studies. On any page of reVISit, you can navigate to the analysis dashboard via the navigation menu in the upper right-hand corner.


![Analysis dashboard page](./img/Revisit-analysis-dash.svg)

The participants stats shows the total number of participants, the number of participants who have completed the experiment, and the number of participants who started but have not completed the experiment. 
We provide data download feature here. You can choose to download data in **JSON** format or in **Tidy CSV** format.

The details view button brings you to details analysis page of the experiment.
You can adjust time filter to view data in different time range. The default time range is the past 24 hours.
The Cumulative Distribution Plot shows the history of completion of the experiment in selected time range.

Additionally, the table view allows an administrator to reject a participant. When a participant is rejected, their data is flagged with "rejected". The sequence that they received is then returned to the sequence array. Thus, if you are using latin square randomization for your study, that particular sequence will still be used by another participant. 

:::info What is Tidy data format?


Tidy data format is a structured approach to organizing tabular data where each variable is a column, each observation is a row, and each type of observational unit is a separate table.
You may check more details [Here](https://cran.r-project.org/web/packages/tidyr/vignettes/tidy-data.html).
:::