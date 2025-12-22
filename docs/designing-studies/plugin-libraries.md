# ReVISit Libraries

We provide predefined **libraries** of study components and validated questionnaires for visualization and HCI. These libraries are easy to integrate into your study configurations as individual components or sequences of components.

We currently provide libraries for:

- basic checks, such as microphone checks
- usability and user workload assessments
- visualization literacy checks
- visualization quality metrics

You can find details [below](#available-libraries).

:::note
When we mention "library" here, we are not referring to external libraries like NPM packages. If you'd like to use an NPM package in your study, you will need to create a React component that incorporates the package and reference that component in your study configuration.
:::

## Using Libraries in Your Study

Using libraries is simple. You can import the library into your study and then use the components and/or whole sequences that are provided by the library.

The libraries are in [`public/libraries`](https://github.com/revisit-studies/study/tree/main/public/libraries) folder in your study. The folder name corresponds to the library's `name`.  Below are the steps for using a library.

### Step 1: Import the Library

To import a library, add its name to the `importedLibraries` top-level field of your study's config. For example:

```json
"components": {
  ...
},
"importedLibraries": [
  // Add the library names you want to import, e.g. "vlat"
  "mic-check",
  "vlat"
]
```

### Step 2: Use Components and Sequences

Libraries expose one or multiple "components" and possibly also "sequences" – predefined collections of components. You can use its components and sequences in the `sequence` section of your study configuration. The format for referencing components and sequences is:

- **Components**: `$libraryName.co.componentName`
- **Sequences**: `$libraryName.se.sequenceName`

For example:

```json
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

```json
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

Beyond the libraries we provide, you can also define your own plugins in your study. See [LibraryConfig](https://revisit.dev/docs/typedoc/interfaces/LibraryConfig/) for the details of how to define plugin libraries.

We are happy to **accept community contributions for libraries!** If you have a library that you think would be useful for others, please reach out to us and we will help you merge it into our repository.

## Available Libraries

Below is a list of libraries and descriptions we provide at the moment.

Check out the [repository](https://github.com/revisit-studies/study/tree/main/public/libraries) for details.

When using these plugins, please ensure that you properly cite the original sources in your work.

:::note
All references listed below follow the IEEE citation style.
:::

### Basic Checks

- [`color-blindness`](../../libraries/color-blindness/): **The Ishihara Color Blindness Test**
:::note[Reference]
Images from [Ishihara Color Test](https://www.colour-blindness.com/colour-blindness-tests/ishihara-colour-test-plates/)
:::

- [`demographics`](../../libraries/demographics): **Collects participant demographic information**

- [`mic-check`](../../libraries/mic-check): **Tests whether participants' microphone is working properly**

- [`screen-recording`](../../libraries/screen-recording): **Records participants' screen**

- [`virtual-chinrest`](../../libraries/virtual-chinrest): **Controls participants' viewing distance using a Virtual Chinrest**
:::note[Reference]
Q. Li, S. J. Joo, J. D. Yeatman, and K. Reinecke, "Controlling for participants' viewing distance in large-scale, psychophysical online experiments using a virtual chinrest," _Scientific Reports_, vol. 10, no. 1, pp. 1–11, 2020, doi: 10.1038/s41598-019-57204-1.
:::

### Questionnaires

#### Usability and User Workload

- [`nasa-tlx`](../../libraries/nasa-tlx): **NASA-TLX: The NASA Task Load Index (TLX) questionnaire for measuring perceived workload**
:::note[Reference]
S. G. Hart and L. E. Staveland, "Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research," in _Advances in Psychology_, vol. 52, Amsterdam, The Netherlands: North-Holland, 1988, pp. 139–183, doi: 10.1016/S0166-4115(08)62386-9.
:::

- [`quis`](../../libraries/quis): **QUIS: The Questionnaire for User Interaction Satisfaction**
:::note[Reference]
J. P. Chin, V. A. Diehl, and K. L. Norman, "Development of an instrument measuring user satisfaction of the human-computer interface," in _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems_, New York, NY, USA: Association for Computing Machinery, 1988, pp. 213–218, doi: 10.1145/57167.57203.
:::

:::note[Reference]
J. P. Chin, K. L. Norman, and B. Shneiderman, "Subjective user evaluation of CF PASCAL programming tools," _Technical Report CAR-TR-304_, Human-Computer Interaction Laboratory, Center for Automation Research, University of Maryland, College Park, MD, USA, 1987.
:::

:::note[Reference]
B. D. Harper and K. L. Norman, "Improving user satisfaction: The Questionnaire for User Interaction Satisfaction Version 5.5," in _Proceedings of the First Annual Mid-Atlantic Human Factors Conference_, Virginia Beach, VA, USA, 1993, pp. 224–228.
:::

- [`sam`](../../libraries/sam): **SAM: The Self-Assessment Manikin for measuring the affective reaction**
:::note[Reference]
M. M. Bradley and P. J. Lang, "Measuring emotion: The Self-Assessment Manikin and the semantic differential," _Journal of Behavior Therapy and Experimental Psychiatry_, vol. 25, no. 1, pp. 49–59, 1994, doi: 10.1016/0005-7916(94)90063-9.
:::

- [`smeq`](../../libraries/smeq): **SMEQ: The Subjective Mental Effort Questionnaire**
:::note[Reference]
F. R. H. Zijlstra and L. Van Doorn, "The construction of a scale to measure perceived effort," Delft University of Technology, Delft, The Netherlands, 1985.
:::

- [`sus`](../../libraries/sus): **SUS: The System Usability Scale**
:::note[Reference]
J. Brooke, "SUS: A 'quick and dirty' usability scale," in _Usability Evaluation in Industry_, P. W. Jordan et al., Eds. London, U.K.: Taylor & Francis, 1996, pp. 207–212, doi: 10.1201/9781498710411-35.
:::

- [`umux`](../../libraries/umux): **UMUX: The Usability Metric for User Experience**
:::note[Reference]
K. Finstad, "The usability metric for user experience," _Interacting with Computers_, vol. 22, no. 5, pp. 323–327, Sep. 2010, doi: 10.1016/j.intcom.2010.04.004.
:::

- [`umux-lite`](../../libraries/umux-lite): **UMUX-Lite: A shorter version of the Usability Metric for User Experience**
:::note[Reference]
J. R. Lewis, B. S. Utesch, and D. E. Maher, "UMUX-LITE: When there's no time for the SUS," in _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems_, Paris, France, 2013, pp. 2099–2102, doi: 10.1145/2470654.2481287.
:::

#### Visual Literacy

- [`adaptive-vlat`](../../libraries/adaptive-vlat): **A-VLAT: A short, adaptive visualization literacy test**
:::note[Reference]
Y. Cui, L. W. Ge, Y. Ding, F. Yang, L. Harrison, and M. Kay, "Adaptive assessment of visualization literacy," _IEEE Transactions on Visualization and Computer Graphics_, vol. 30, no. 1, pp. 628–637, Jan. 2024, doi: 10.1109/TVCG.2023.3327165.
:::

- [`berlin-num`](../../libraries/berlin-num): **The Berlin Numeracy Test**
:::note[Reference]
E. T. Cokely, M. Galesic, E. Schulz, S. Ghazal, and R. Garcia-Retamero, "Measuring risk literacy: The Berlin Numeracy Test," _Judgment and Decision Making_, vol. 7, no. 1, pp. 25–47, Jan. 2012, doi: 10.1017/S1930297500001819.
:::

- [`calvi`](../../libraries/calvi): **CALVI: The Critical Thinking Assessment for Literacy in Visualizations**
:::note[Reference]
L. W. Ge, Y. Cui, and M. Kay, "CALVI: Critical thinking assessment for literacy in visualizations," in _Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems_, Hamburg, Germany, 2023, Art. no. 815, pp. 1–18, doi: 10.1145/3544548.3581406.
:::

- [`graph-literacy-scale`](../../libraries/graph-literacy-scale): **The Graph Literacy Scale**
:::note[Reference]
M. Galesic and R. Garcia-Retamero, "Graph literacy: A cross-cultural comparison," _Medical Decision Making_, vol. 31, no. 3, pp. 444–457, May–Jun. 2011, doi: 10.1177/0272989X10373805.
:::

- [`mini-vlat`](../../libraries/mini-vlat): **Mini-VLAT: A shorter version of VLAT designed for efficient assessment of visualization literacy**
:::note[Reference]
S. Pandey and A. Ottley, "Mini-VLAT: A short and effective measure of visualization literacy," _Computer Graphics Forum_, vol. 42, no. 3, pp. 1–11, Jun. 2023, doi: 10.1111/cgf.14809.
:::

- [`vlat`](../../libraries/vlat): **VLAT: The Visualization Literacy Assessment Test**
:::note[Reference]
S. Lee, S.-H. Kim, and B. C. Kwon, "VLAT: Development of a visualization literacy assessment test," _IEEE Transactions on Visualization and Computer Graphics_, vol. 23, no. 1, pp. 551–560, Jan. 2017, doi: 10.1109/TVCG.2016.2598920.
:::

#### Visualization Quality Metrics

- [`beauvis`](../../libraries/beauvis): **BeauVis: A scale for assessing the aesthetic pleasure of visualizations**
:::note[Reference]
T. He, P. Isenberg, R. Dachselt, and T. Isenberg, "BeauVis: A validated scale for measuring the aesthetic pleasure of visual representations," _IEEE Transactions on Visualization and Computer Graphics_, pp. 1–11, 2022, doi: 10.1109/TVCG.2022.3209390.
:::

- [`previs`](../../libraries/previs): **PREVis: A questionnaire for evaluating the perceived readability of visualizations**
:::note[Reference]
A.-F. Cabouat, T. He, P. Isenberg, and T. Isenberg, "PREVis: Perceived readability evaluation for visualizations," _IEEE Transactions on Visualization and Computer Graphics_, vol. 31, no. 1, pp. 1083–1093, Jan. 2025, doi: 10.1109/TVCG.2024.3456318.
:::

<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
  demoLinks={[
    {name: "A-VLAT Demo", url: "https://revisit.dev/study/library-adaptive-vlat/"},
    {name: "Beauvis Demo", url: "https://revisit.dev/study/library-beauvis/"},
    {name: "Berlin Numeracy Demo", url: "https://revisit.dev/study/library-berlin-num/"},
    {name: "CALVI Demo", url: "https://revisit.dev/study/library-calvi/"},
    {name: "Color Blindness Demo", url: "https://revisit.dev/study/library-color-blindness/"},
    {name: "Demographics Demo", url: "https://revisit.dev/study/library-demographics/"},
    {name: "Graph Literacy Demo", url: "https://revisit.dev/study/library-graph-literacy-scale/"},
    {name: "Mic Check Demo", url: "https://revisit.dev/study/library-mic-check/"},
    {name: "Mini VLAT Demo", url: "https://revisit.dev/study/library-mini-vlat/"},
    {name: "NASA TLX Demo", url: "https://revisit.dev/study/library-nasa-tlx/"},
    {name: "PREVis Demo", url: "https://revisit.dev/study/library-previs/"},
    {name: "QUIS Demo", url: "https://revisit.dev/study/library-quis/"},
    {name: "SAM Demo", url: "https://revisit.dev/study/library-sam/"},
    {name: "Screen Recording Demo", url: "https://revisit.dev/study/library-screen-recording/"},
    {name: "SMEQ Demo", url: "https://revisit.dev/study/library-smeq/"},
    {name: "SUS Demo", url: "https://revisit.dev/study/library-sus/"},
    {name: "UMUX Demo", url: "https://revisit.dev/study/library-umux/"},
    {name: "UMUX Lite Demo", url: "https://revisit.dev/study/library-umux-lite/"},
    {name: "Virtual Chinrest Demo", url: "https://revisit.dev/study/library-virtual-chinrest/"},
    {name: "VLAT Demo", url: "https://revisit.dev/study/library-vlat/"}
  ]}
  codeLinks={[
    {name: "A-VLAT Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-adaptive-vlat/"},
    {name: "Beauvis Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-beauvis"},
    {name: "Berlin Numeracy Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-berlin-num"},
    {name: "CALVI Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-calvi"},
    {name: "Color Blindness Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-color-blindness"},
    {name: "Demographics Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-demographics"},
    {name: "Graph Literacy Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-graph-literacy-scale/"},
    {name: "Mic Check Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-mic-check"},
    {name: "Mini VLAT Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-mini-vlat"},
    {name: "NASA TLX Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-nasa-tlx"},
    {name: "PREVis Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-previs"},
    {name: "QUIS Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-quis/"},
    {name: "SAM Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-sam/"},
    {name: "Screen Recording Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-screen-recording/"},
    {name: "SMEQ Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-smeq/"},
    {name: "SUS Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-sus"},
    {name: "UMUX Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-umux/"},
    {name: "UMUX Lite Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-umux-lite/"},
    {name: "Virtual Chinrest Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-virtual-chinrest"},
    {name: "VLAT Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-vlat"}
  ]}
  referenceLinks={[
    {name: "A-VLAT Library", url:"../../libraries/adaptive-vlat/"},
    {name: "Beauvis Library", url:"../../libraries/beauvis/"},
    {name: "Berlin Numeracy Library", url:"../../libraries/berlin-num/"},
    {name: "CALVI Library", url:"../../libraries/calvi/"},
    {name: "Color Blindness Library", url:"../../libraries/color-blindness/"},
    {name: "Demographics Library", url:"../../libraries/demographics/"},
    {name: "Graph Literacy Library", url:"../../libraries/graph-literacy-scale/"},
    {name: "Library Config", url: "../../typedoc/interfaces/LibraryConfig"},
    {name: "Mic Check Library", url:"../../libraries/mic-check/"},
    {name: "Mini VLAT Library", url:"../../libraries/mini-vlat/"},
    {name: "NASA TLX Library", url:"../../libraries/nasa-tlx/"},
    {name: "PREVis Library", url:"../../libraries/previs/"},
    {name: "QUIS Library", url:"../../libraries/quis/"},
    {name: "SAM Library", url:"../../libraries/sam/"},
    {name: "Screen Recording Library", url:"../../libraries/screen-recording/"},
    {name: "SMEQ Library", url:"../../libraries/smeq/"},
    {name: "SUS Library", url:"../../libraries/sus/"},
    {name: "UMUX Library", url:"../../libraries/umux/"},
    {name: "UMUX Lite Library", url:"../../libraries/umux-lite/"},
    {name: "Virtual Chinrest Library", url:"../../libraries/virtual-chinrest"},
    {name: "VLAT Library", url:"../../libraries/vlat/"}
  ]}
/>