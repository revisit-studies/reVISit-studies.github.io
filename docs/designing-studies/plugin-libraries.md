# Plugin Libraries

We provide predefined components and sequences, called plugins, that are easy to integrate into your study configurations. These plugins include commonly used study components and validated questionnaires for visualization and HCI.

**Note:** These plugins are specifically for reVISit components. When we mention "library" here, we are not referring to external libraries like NPM packages. If you’d like to use an NPM package in your study, you will need to create a React component that incorporates the package and reference that component in your study configuration.

## Available Plugins

Below are the plugins we provide. The list will continue to grow as we are currently adding new plugins.

The plugins are stored in the [public/libraries folder](https://github.com/revisit-studies/study/tree/main/public/libraries). Each folder name corresponds to the library's `libraryName`. 

When using these plugins, please ensure that you properly cite the original sources in your work.

### Basic Checks


- `mic-check`: Tests whether participants' microphones are functioning properly.

- `color-blindness`: The Ishihara color blindness test with 24 plates.
	**Images from**: https://www.colour-blindness.com/colour-blindness-tests/ishihara-colour-test-plates/

- `demographics`: Collects participant demographic information.


### Questionnaires

#### Visual Literacy

-  `vlat`: The Visualization Literacy Assessment Test (VLAT).  
    **Reference**:  S. Lee, S.-H. Kim, and B. C. Kwon, "VLAT: Development of a Visualization Literacy Assessment Test," _IEEE Transactions on Visualization and Computer Graphics_, vol. 23, no. 1, pp. 551-560, Jan. 2017, doi: 10.1109/TVCG.2016.2598920.

- `mini-vlat`: Mini-VLAT: A shorter version of VLAT designed for efficient assessment of visualization literacy.  
    **Reference**:  S. Pandey and A. Ottley, “Mini‐VLAT: A Short and Effective Measure of Visualization Literacy,” _Computer Graphics Forum_, vol. 42, no. 3, pp. 1–11, Jun. 2023, doi: 10.1111/cgf.14809.

#### Usability and User Workload
- `SUS`: the System Usability Scale
	**Reference**: J. Brooke, “SUS: A ‘Quick and Dirty’ Usability Scale,” Usability Evaluation In Industry, pp. 207–212, Jun. 1996, doi: 10.1201/9781498710411-35.

#### Visualization Quality Metrics
-  `beauvis`: The BeauVis scale for assessing the aesthetic pleasure of visualizations.  
    **Reference**:  T. He, P. Isenberg, R. Dachselt, and T. Isenberg, “BeauVis: A Validated Scale for Measuring the Aesthetic Pleasure of Visual Representations,” _IEEE Transactions on Visualization and Computer Graphics_, pp. 1–11, 2022, doi: 10.1109/tvcg.2022.3209390.

- `previs`: The PREVis questionnaire for evaluating the perceived readability of visualizations. 
    **Reference**:  A.-F. Cabouat, T. He, P. Isenberg, and T. Isenberg, “PREVis: Perceived Readability Evaluation for Visualizations,” _IEEE Transactions on Visualization and Computer Graphics_, vol. 31, no. 1, pp. 1083–1093, Jan. 2025, doi: 10.1109/tvcg.2024.3456318.


## Using Plugins in Your Study  

Using libraries is simple. You can import the library into your study and then use the components and/or whole sequences that are provided by the library.

The plugin library should be in [public/libraries folder](https://github.com/revisit-studies/study/tree/main/public/libraries) in your study.  The folder name is this library's `libraryName`.  Below are the steps for using a library. 

### Step 1: Import the Library 

To import a library, add its name to the `"importedLibraries"` section of your study's `config.json` file. For example:  

```js
{
...
	"importedLibraries": [   
		// Add the library names you want to import, e.g. "vlat" 
		"mic-check",
		"vlat",
		...
	]
...
}
```

### Step 2: Use Components and Sequences

Once the plugin library is imported, you can use its components and sequences in the `"sequence"` section of your study configuration (`config.json`). The format for referencing components and sequences is:

- **Components**: `$libraryName.co.componentName`
- **Sequences**: `$libraryName.se.sequenceName`

For example: 

```js
{
...
	"sequence": {   
	  // Configuration of the sequence for your study
	  ...
	  "components": [    
	    // List the components used in your study
	    ...
	    "$mic-check.co.audioTest",
	    "$vlat.se.latinSquare",
            ...
	  ] 
	}
...
}
```

## Modifying Components in Existing Plugins
You can also modify the components in your study configuration directly. Any attributes you specify in the `config.json` file of your study for a component will overwrite the original attributes of that component as defined in the plugin library. 

For example: 

```js
{
  "$schema": "https://raw.githubusercontent.com/revisit-studies/study/dev/src/parser/StudyConfigSchema.json",
  "studyMetadata": { ... },
  "uiConfig": { ... },
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
}
```

## Defining your own plugins

Beyond the libraries we provide, you can also define your own plugins in your study. See [LibraryConfig](https://revisit.dev/docs/typedoc/interfaces/LibraryConfig/) for the details of how to define a plugin libraries.

We plan to accept community contributions for libraries. If you have a library that you think would be useful for others, please reach out to us.
