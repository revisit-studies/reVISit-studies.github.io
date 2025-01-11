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

The plugin library are in [`public/libraries`](https://github.com/revisit-studies/study/tree/main/public/libraries) folder in your study. The folder name corresponds to the library's `libraryName`.  Below are the steps for using a library. 

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

- **Components**: `$libraryName.co.componentName`
- **Sequences**: `$libraryName.se.sequenceName`

For example: 

```js
"sequence": {   
  // Configuration of the sequence for your study
  "components": [    
    // List the components used in your study
    "$mic-check.co.audioTest",
    "$vlat.se.latinSquare"
  ] 
}
```

## Modifying Components in Existing Plugins
You can also modify the components in your study configuration directly via [inheritance](../getting-started/how-does-it-work/#base-components-and-inheritance). Any attributes you specify in your study config for a component will overwrite the original attributes of that component as defined in the plugin library. 

For example, here we add a new `description` to the `vlat` library's `line-value` component: 

```js
"importedLibraries": ["vlat"],
"components": {
  "vlat-modified":{
    "baseComponent":"$vlat.co.line-value"
    "description":"A new description"
  }
},
"sequence": {
  "order": "fixed",
  "components": [
    ...
    "vlat-modified",
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


- `mic-check`: **Tests whether participants' microphone is working properly.**

- `color-blindness`: **The Ishihara color blindness test with 24 plates.**
	**Images from**: https://www.colour-blindness.com/colour-blindness-tests/ishihara-colour-test-plates/

- `demographics`: **Collects participant demographic information.**


### Questionnaires

#### Visual Literacy

- `vlat`: **The Visualization Literacy Assessment Test (VLAT).**    
:::note[Reference]
     S. Lee, S.-H. Kim, and B. C. Kwon, "VLAT: Development of a Visualization Literacy Assessment Test," _IEEE Transactions on Visualization and Computer Graphics_, vol. 23, no. 1, pp. 551-560, Jan. 2017, doi: 10.1109/TVCG.2016.2598920.
:::

- `mini-vlat`: **Mini-VLAT: A shorter version of VLAT designed for efficient assessment of visualization literacy.**    
:::note[Reference]
S. Pandey and A. Ottley, “Mini‐VLAT: A Short and Effective Measure of Visualization Literacy,” _Computer Graphics Forum_, vol. 42, no. 3, pp. 1–11, Jun. 2023, doi: 10.1111/cgf.14809.
:::

#### Usability and User Workload
- `SUS`: **The System Usability Scale**   
:::note[Reference]
J. Brooke, “SUS: A ‘Quick and Dirty’ Usability Scale,” Usability Evaluation In Industry, pp. 207–212, Jun. 1996, doi: 10.1201/9781498710411-35.
:::

#### Visualization Quality Metrics  
-  `beauvis`: **The BeauVis scale for assessing the aesthetic pleasure of visualizations.**    
:::note[Reference]
T. He, P. Isenberg, R. Dachselt, and T. Isenberg, “BeauVis: A Validated Scale for Measuring the Aesthetic Pleasure of Visual Representations,” _IEEE Transactions on Visualization and Computer Graphics_, pp. 1–11, 2022, doi: 10.1109/tvcg.2022.3209390.
:::

- `previs`: **The PREVis questionnaire for evaluating the perceived readability of visualizations.**   
:::note[Reference]
A.-F. Cabouat, T. He, P. Isenberg, and T. Isenberg, “PREVis: Perceived Readability Evaluation for Visualizations,” _IEEE Transactions on Visualization and Computer Graphics_, vol. 31, no. 1, pp. 1083–1093, Jan. 2025, doi: 10.1109/tvcg.2024.3456318.
:::
