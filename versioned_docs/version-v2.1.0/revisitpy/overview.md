# Overview

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    codeLinks={[
        {name: "reVISitPy Examples", url: "https://github.com/revisit-studies/revisitpy-examples"}
    ]}
    referenceLinks={[
        {name: "reVISitPy Installation", url: "../installation"},
        {name: "reVISitPy Examples", url: "../examples"}
    ]}
/>

The reVISit python package wraps the standard items of the reVISit configuration file with readable, easy-to-use functions. We expose a factory function for each top-level item in the reVISit configuration: `studyMetadata`, `uiConfig`, `components`, `sequence`, and `studyMetadata`. Currently, we do not expose a `baseComponents` function. Instead, base components are still well-defined components and can be passed during the creation of another component. The final configuration will not include base components but will have the expected inherited output. 

Each factory function takes in the same parameters as the reVISit configuration file. For example, the `studyMetadata` function requires the author, organizations, title, version, and description parameters. Robust error output will help you, the user, understand what is required in each function. For the sake of brevity, we do not list every possible parameter since these are already defined in the current study configuration. Instead, we will show additional required/optional parameters as well as additional methods and other exposed functions.

The individual classes (`Component`, `Response`, `Sequence`, `StudyMetadata`, `UIConfig`, and `StudyConfig`) should not be created directly. Instead, you should use the corresponding factory functions to instantiate them (`component()`, `response()`, `sequence()`, `studyMetadata()`, `uiConfig()`, and `studyConfig()`).

## Using The Widget

As stated previously, the widget requires a local copy of the reVISit application to be running. If you have a local copy already on your machine, you can get started by first navigating to your study repo and running `yarn serve`. If you do not have a local copy of reVISit and would like to handle all this directly in python, use the `revisitpy_server` package. 

:::info
While all configuration creation can be done in a standard python environment, the provided widget only has functionality inside of a Jupyter notebook.
:::

Whether you are using `revisitpy_server` or your local copy of reVISit, the widget requires you to pass in the configuration file that you intend to view in the Jupyter notebook in addition to other parameters.

### Use with A Local reVISit repository

When using your own copy of the reVISit repository, the widget requires you to specify the `revisitPath` (i.e. the absolute path to your study repository that is running). 

```python
import revisitpy as rvt

w = rvt.widget(my_study, revisitPath='/path/to/study')

# View the widget in a Jupyter notebook by running 'w'
w
```

### Using reVISitPy Server

If you're using the `revisit_server` package, the widget does not require the path to the server location by default.

```python
import revisitpy as rvt

w = rvt.widget(my_study, server=True)

# View the widget in a Jupyter notebook by running 'w'
w
```

If you installed the `revisit_server` package in a different environment than the `revisitpy` package, you'll instead need to specify the path to that library.

```python
import revisitpy as rvt

w = rvt.widget(my_study, server=True, pathToLib='/absolute/path/to/revisitpy_server')

# View the widget in a Jupyter notebook by running 'w'
w
```

## Widget And Study Assets

The widget function passes the study configuration file as an iframe to the widget displayed in the Jupyter notebook. The assets, however, are directly copied to the repository (or `revisitpy_server` package). Thus, all the paths you specify in your study should be absolute paths to the assets or relative to your current working directory. The widget handles where they should be moved to. 

:::warning
Since the `revisitpy_server` package uses an already built version of the reVISit application, `react-component` assets will not be copied over to the package directory. All other assets will work as expected. If your study heavily relies on react components as study assets, we suggest using a local copy of reVISit instead of the `revisitpy_server`, or use placeholder components until you're ready to deploy your study.
:::


