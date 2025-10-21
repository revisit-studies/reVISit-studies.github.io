# reVISit Libraries



We provide predefined **libraries** of study components and validated questionnaires for visualization and HCI. These libraries that are easy to integrate into your study configurations as individual components or sequences of components.

We currently provide libraries for: 

* basic checks, such as microphone checks
* visualization literacy checks 
* visualization quality metrics
* usability and user workload assessments

You can find details [below](#available-libraries).

:::note
When we mention “library” here, we are not referring to external libraries like NPM packages. If you’d like to use an NPM package in your study, you will need to create a React component that incorporates the package and reference that component in your study configuration.
:::


## Using Libraries in Your Study  

Using libraries is simple. You can import the library into your study and then use the components and/or whole sequences that are provided by the library.

The libraries are in [`public/libraries`](https://github.com/revisit-studies/study/tree/main/public/libraries) folder in your study. The folder name corresponds to the library's `name`.  Below are the steps for using a library. 

### Step 1: Import the Library 

To import a library, add its name to the `importedLibraries` top-level field of your study's config. For example:  

```js

"components": {...}

"importedLibraries": [   
  // Add the library names you want to import, e.g. "vlat" 
  "mic-check",
  "vlat"
]
```

### Step 2: Use Components and Sequences

Libraries expose one ore multiple “components“ and possible also “sequences” – predefined collections of components. You can use its components and sequences in the `sequence` section of your study configuration. The format for referencing components and sequences is:

- **Components**: `$name.co.componentName`
- **Sequences**: `$name.se.sequenceName`

For example: 

```js
"sequence": {   
  // Configuration of the sequence for your study
  "components": [    
    // List the components used in your study
    "$mic-check.co.audioTest",
    "$vlat.se.full"
  ] 
}
```

## Modifying Components in Existing Libraries
You can also modify the components in your study configuration directly via [inheritance](../../getting-started/how-does-it-work/#base-components-and-inheritance). Any attributes you specify in your study config for a component will overwrite the original attributes of that component as defined in the plugin library. 

For example, here we add a new `instruction` to the `mini-vlat` library's `treemap` component: 

```js
"importedLibraries": ["mini-vlat"],
"components": {
  "mini-vlat-treemap-modified": {
      "baseComponent": "$mini-vlat.co.treemap",
      "instruction": "new instruction."
  }
},
"sequence": {
  "order": "fixed",
  "components": [
    ...
    "mini-vlat-treemap-modified",
    ...
  ]
}
```

## Creating your Own Plugins

Beyond the libraries we provide, you can also define your own plugins in your study. See [LibraryConfig](https://revisit.dev/docs/typedoc/interfaces/LibraryConfig/) for the details of how to define a plugin libraries.

We are happy to **accept community contributions for libraries!** If you have a library that you think would be useful for others, please reach out to us and we will help you merge it into our repository. 


## Available Libraries

Below is a list of libraries and descriptions we provide at the moment.

Check out the [repository](https://github.com/revisit-studies/study/tree/main/public/libraries) for details.

When using these plugins, please ensure that you properly cite the original sources in your work.

### Basic Checks


- `mic-check`: **Tests whether participants' microphone is working properly**

- `color-blindness`: **The Ishihara Color Blindness Test**
	**Images from**: https://www.colour-blindness.com/colour-blindness-tests/ishihara-colour-test-plates/

- `demographics`: **Collects participant demographic information**

- `screen-recording`: **Records participants' screen**


### Questionnaires

#### Visual Literacy

- `vlat`: **VLAT: The Visualization Literacy Assessment Test**    
:::note[Reference]
     S. Lee, S.-H. Kim, and B. C. Kwon, "VLAT: Development of a Visualization Literacy Assessment Test," _IEEE Transactions on Visualization and Computer Graphics_, vol. 23, no. 1, pp. 551-560, Jan. 2017, doi: 10.1109/TVCG.2016.2598920.
:::

- `mini-vlat`: **Mini-VLAT: A shorter version of VLAT designed for efficient assessment of visualization literacy**    
:::note[Reference]
S. Pandey and A. Ottley, “Mini‐VLAT: A Short and Effective Measure of Visualization Literacy,” _Computer Graphics Forum_, vol. 42, no. 3, pp. 1–11, Jun. 2023, doi: 10.1111/cgf.14809.
:::

- `berlin-num`: **The Berlin Numeracy Test**
:::note[Reference]
E. T. Cokely, M. Galesic, E. Schulz, S. Ghazal, and R. Garcia-Retamero, “Measuring Risk Literacy: The Berlin Numeracy Test,” _Judgment and Decision Making_, vol. 7, no. 1, pp. 25–47, Jan. 2012, doi: 10.1017/S1930297500001819.  
:::

- `graph-literacy-scale`: **The Graph Literacy Scale**
:::note[Reference]
M. Galesic and R. Garcia-Retamero, “Graph literacy: A cross-cultural comparison,” _Medical Decision Making_, vol. 31, no. 3, pp. 444–457, May–Jun. 2011, doi: 10.1177/0272989X10373805.
:::

- `calvi`: **CALVI: The Critical Thinking Assessment for Literacy in Visualizations**
:::note[Reference]
L. W. Ge, Y. Cui, and M. Kay, “CALVI: Critical Thinking Assessment for Literacy in Visualizations,” in _Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI ’23)_, article no. 815 pp. 1–18, 2023, doi: 10.1145/3544548.3581406.  
:::

- `adaptive-vlat`: **A-VLAT: A short, adaptive visualization literacy test**
:::note[Reference]
Y. Cui, L. W. Ge, Y. Ding, F. Yang, L. Harrison and M. Kay, Adaptive Assessment of Visualization Literacy, _IEEE Transactions on Visualization and Computer Graphics_, vol. 30, no. 1, pp. 628-637, Jan. 2024, doi: 10.1109/TVCG.2023.3327165
:::

#### Usability and User Workload
- `NASA-TLX`: The NASA Task Load Index (TLX) questionnaire for measuring perceived workload.  
    **Reference**:  Hart, Sandra G., and Lowell E. Staveland. "Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research." Advances in psychology. Vol. 52. North-Holland, 1988. 139-183.

- `SUS`: **SUS: The System Usability Scale**   
:::note[Reference]
J. Brooke, “SUS: A ‘Quick and Dirty’ Usability Scale,” Usability Evaluation In Industry, pp. 207–212, Jun. 1996, doi: 10.1201/9781498710411-35.
:::

- `quis`: **QUIS: The Questionnaire for User Interaction Satisfaction**
:::note[Reference]
J. P. Chin, V. A. Diehl, and K. L. Norman, “Development of an instrument measuring user satisfaction of the human-computer interface,” in _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems_, New York, NY, USA: Association for Computing Machinery, 1988, pp. 213–218.
:::

:::note[Reference]
J. P. Chin, K. L. Norman, and B. Shneiderman, “Subjective user evaluation of CF PASCAL programming tools,” _Technical Report CAR-TR-304_, Human-Computer Interaction Laboratory, Center for Automation Research, University of Maryland, College Park, MD, USA, 1987.
:::

:::note[Reference]
B. D. Harper and K. L. Norman, “Improving user satisfaction: The Questionnaire for User Interaction Satisfaction Version 5.5,” in _Proceedings of the First Annual Mid-Atlantic Human Factors Conference_, Virginia Beach, VA, USA, 1993, pp. 224–228.
:::


- `sam`: **SAM: The Self-Assessment Manikin for measuring the affective reaction**
:::note[Reference]
M. M. Bradley and P. J. Lang, “Measuring emotion: The Self-Assessment Manikin and the semantic differential,” _Journal of Behavior Therapy and Experimental Psychiatry_, vol. 25, no. 1, pp. 49–59, 1994, doi: 10.1016/0005-7916(94)90063-9.
:::

- `smeq`: **SMEQ: The Subjective Mental Effort Questionnaire**
:::note[Reference]
F. R. H. Zijlstra and L. Van Doorn, The Construction of a Scale to Measure Perceived Effort. Delft University of Technology, 1985.
:::


#### Visualization Quality Metrics  
-  `beauvis`: BeauVis: A scale for assessing the aesthetic pleasure of visualizations**    
:::note[Reference]
T. He, P. Isenberg, R. Dachselt, and T. Isenberg, “BeauVis: A Validated Scale for Measuring the Aesthetic Pleasure of Visual Representations,” _IEEE Transactions on Visualization and Computer Graphics_, pp. 1–11, 2022, doi: 10.1109/tvcg.2022.3209390.
:::

- `previs`: **PREVis: A questionnaire for evaluating the perceived readability of visualizations**   
:::note[Reference]
A.-F. Cabouat, T. He, P. Isenberg, and T. Isenberg, “PREVis: Perceived Readability Evaluation for Visualizations,” _IEEE Transactions on Visualization and Computer Graphics_, vol. 31, no. 1, pp. 1083–1093, Jan. 2025, doi: 10.1109/tvcg.2024.3456318.
:::


import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
      {name: "Mic Check Demo", url: "https://revisit.dev/study/library-mic-check/"},
      {name: "Color Blindess Demo", url: "https://revisit.dev/study/library-color-blindness/"},
      {name: "Demographics Demo", url: "https://revisit.dev/study/library-demographics/"},
      {name: "Screen Recording Demo", url: "https://revisit.dev/study/library-screen-recording/"},
      {name: "VLAT Demo", url: "https://revisit.dev/study/library-vlat/"},
      {name: "Mini VLAT Demo", url: "https://revisit.dev/study/library-mini-vlat/"},
      {name: "Berlin Numeracy Demo", url: "https://revisit.dev/study/library-berlin-num/"},
      {name: "Graph Literacy Demo", url: "https://revisit.dev/study/library-graph-literacy-scale/"},
      {name: "CALVI Demo", url: "https://revisit.dev/study/library-calvi/"},
      {name: "A-VLAT Demo", url: "https://revisit.dev/study/library-adaptive-vlat/"},
      {name: "NASA TLX Demo", url: "https://revisit.dev/study/library-nasa-tlx/"},
      {name: "SUS Demo", url: "https://revisit.dev/study/library-sus/"},
      {name: "QUIS Demo", url: "https://revisit.dev/study/library-quis/"},
      {name: "SAM Demo", url: "https://revisit.dev/study/library-sam/"},
      {name: "SMEQ Demo", url: "https://revisit.dev/study/library-smeq/"},
      {name: "Beauvis Demo", url: "https://revisit.dev/study/library-beauvis/"},
      {name: "PREVis Demo", url: "https://revisit.dev/study/library-previs/"}
    ]}
    codeLinks={[
      {name: "Mic Check Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-mic-check"},
      {name: "Color Blindess Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-color-blindness"},
      {name: "Demographics Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-demographics"},
      {name: "Screen Recording Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-screen-recording/"},
      {name: "VLAT Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-vlat"},
      {name: "Mini VLAT Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-mini-vlat"},
      {name: "Berlin Numeracy Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-berlin-num"},
      {name: "Graph Literacy Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-graph-literacy-scale/"},
      {name: "CALVI Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-calvi"},
      {name: "A-VLAT Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-adaptive-vlat/"},
      {name: "NASA TLX Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-nasa-tlx"},
      {name: "SUS Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-sus"},
      {name: "QUIS Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-quis/"},
      {name: "SAM Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-sam/"},
      {name: "SMEQ Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-smeq/"},
      {name: "Beauvis Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-beauvis"},
      {name: "PREVis Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-previs"}
    ]}
    referenceLinks={[
      {name: "Library Config", url: "../../typedoc/interfaces/LibraryConfig"},
      {name: "Mic Check Library", url:"../../libraries/mic-check/"},
      {name: "Color Blindess Library", url:"../../libraries/color-blindness/"},
      {name: "Demographics Library", url:"../../libraries/demographics/"},
      {name: "Screen Recording Library", url:"../../libraries/screen-recording/"},
      {name: "VLAT Library", url:"../../libraries/vlat/"},
      {name: "Mini VLAT Library", url:"../../libraries/mini-vlat/"},
      {name: "Berlin Numeracy Library", url:"../../libraries/berlin-num/"},
      {name: "Graph Literacy Library", url:"../../libraries/graph-literacy-scale/"},
      {name: "CALVI Library", url:"../../libraries/calvi/"},
      {name: "A-VLAT Library", url:"../../libraries/adaptive-vlat/"},
      {name: "NASA TLX Library", url:"../../libraries/nasa-tlx/"},
      {name: "SUS Library", url:"../../libraries/sus/"},
      {name: "QUIS Library", url:"../../libraries/quis/"},
      {name: "SAM Library", url:"../../libraries/sam/"},
      {name: "SMEQ Library", url:"../../libraries/smeq/"},
      {name: "Beauvis Library", url:"../../libraries/beauvis/"},
      {name: "PREVis Library", url:"../../libraries/previs/"}
    ]}
/>