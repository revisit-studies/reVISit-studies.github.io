# Collecting Data Locally

Now that we have a working study, we'll look at how we can start collecting data. 

By default, reVISit does not collect data. This is because you don't need to collect data while you're developing your study. Rather, you want to work on your stimuli and study design first, and then, when you're ready to test you can enable data collection. 

reVISit supports two modes of data collection: 

1. Storing data on your **local computer**. This is useful for testing and if you are running an in-lab study. Local storage is also easy to set up. 
2. Storing data on **Firebase or Supabase, a cloud storage provider**. This is useful and necessary if you want to run an online study. 

In this getting-started guide, we will **only cover local storage**. For setting up cloud storage, please refer to the [Firebase tutorial](../data-and-deployment/firebase/setup.md) or [Supabase tutorial](../data-and-deployment/supabase/setup.md). 

## Recording Data

Take the survey that you have created earlier! After you are done, use the menu on the top right, select “Next Participant“ and take the survey again (using different values). Now you have recorded data for two participants. 

## Accessing Data

To access the data, go to the [analytics interface](.) by visiting the root of reVISit at http://localhost:8080/, and clicking “Analyze & Manage Study” in the study card on the bottom-right. This will get you to the analysis interface that will show all studies in your reVISit instance, including the one you just created `basic-questionnaire-study`. You can now download your data either “flattened” in tabular data format (as [“tidy data”](https://r4ds.hadley.nz/data-tidy.html#sec-tidy-data)), or you can download the full nested JSON file. 

:::info
Note that the JSON data contains much more detailed data, including logs about mouse movements and browser fingerprints of participants.
:::

You can also preview your data in the “Table View”, which is especially usefull if you're debugging your study. 


## Resetting your Local Database

The data collected locally is stored in your browser and associated with the page. If you want to clear the data, e.g., because you have completed your pilots and are ready to start a study, you will need to reset the local storage of your browser associated with reVISit. How this works varies between browsers. For Chrome: 

* Click the Tune Icon for ReVISit or the Info Icon for localhost in the URL bar
* Select Site Settings
* Click Delete Data
* Reload the page

This will clear your database. 

:::warning
This cannot be undone. Be sure to back up your data if it is valuable. 
:::

<!-- Importing links  -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "Firebase Setup", url: "../../data-and-deployment/firebase/setup"},
        {name: "Supabase Setup", url: "../../data-and-deployment/supabase/setup"}
    ]}
/>