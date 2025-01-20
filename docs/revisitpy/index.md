# ReVISitPy Python Package

The reVISitPy python package is a pip package that aids in the construction of configuration files. Just like in the study configuration file, you can create components, responses, study metadata, UI config, and complex sequences. Then, you can combine these all together in a single study configuration file. Here is an example of creating a simple response and attaching it to a single component.


```python
response_one = rvt.response(
    id='response_one',
    type='shortText',
    prompt='Original Prompt:',
    required=True
)

component_one = rvt.component(
    component_name__='component_one',
    type='questionnaire',
    response=[test_response]
)

print(component_one)

'''
Expected Output:
{
    "response": [
        {
            "id": "test_response",
            "prompt": "Original Prompt:",
            "required": true,
            "type": "shortText"
        }
    ],
    "type": "questionnaire"
}
'''
```

Each of the classes that we exposed can be printed to show the JSON output. 

## Closed Feedback Loop

We wanted to create a package which not only makes creating long, complex configuration files easier, but also provide feedback for your designs faster. ReVISitPy exposes a `widget` component that allows you to immediately visualize a configuration file directly in a Jupyter notebook.

![png](img/intro-widget.png)

When using the widget, you can immediately interact with the study in the Jupyter notebook and see how each of your components and responses will function. Additionally, you can see how the data will be outputted in the Analysis tab and even export your testing data back to the Jupyter notebook.

:::info
Note that a Jupyter environment is not necessary to take advantage of reVISitPy. Jupyter enhances the experience by providing this widget functionality, but configuration files can still be created and saved using reVISitPy with a standard python environment.
:::

<!-- Maybe a video here?? Or Just a screenshot?? Probably need to wait to push the new packages.-->


## Advanced Sequence Creation

When using the reVISitPy python package, not only do you have all the flexibility of using a full programming language, we have also built several different features to help create complex study designs. Generated data in a separate CSV file? Pass the data in using reVISitPy's `from_data` method in order to create components based on the data. Need to permute over multiple different factors? Use the `Sequence` class's built-in `permute` function to generate components based on these factors while simultaneously permuting over possible combinations of them.


## Usage

If you're ready to get started using the reVISitPy in your own python environment, check out the [installation page](./installation.md). If you'd like to try out the package as quick as possible, we instead suggest using the [reVISitPy examples repository](https://github.com/revisit-studies/revisit-py-examples). This repository uses a jupyter notebook to walk you through each example. Start by cloning the repository:


```bash
git clone git@github.com:revisit-studies/revisit-py-examples.git
```

Once you have cloned the repository, we recommend installing the python package manager [uv](https://docs.astral.sh/uv/). We use `uv` for a myriad of reasons, but most importantly because it will manage your virtual environment for you which ensures that you'll be able to use the repository with very little set up.

After you've installed `uv`, navigate to the examples repository you just cloned and call the following:

```bash
uv install
```

This will install all the necessary dependencies for the examples, including the reVISitPy and its support package `revisitpy_server`. 

:::note
When choosing the Jupyter kernel to use, you should use the one that corresponds to the virtual environment in the `revisit-py-examples` repository. This, by default, will be initialized in the `.venv` directory after running `uv install`.
:::

Each of the examples in the `revisit-py-examples` repository are also shown [here](./examples/index.md) in markdown format.

<!-- If you're ready to start working with reVISitPy, check out the [installation]() page. If you'd like to see some examples of the package in action, you can see more examples [here](). Each of the examples are pulled directly from our  -->

<!-- The reVISit python package wraps the standard items of the reVISit configuration file with readable, easy-to-use functions. We expose a factory function for each top-level item in the reVISit configuration: `studyMetadata`, `uiConfig`, `components`, `sequence`, and `studyMetadata`. Currently, we do not expose a `baseComponents` function. Instead, base components are still well-defined components and can be passed during the creation of another component. The final configuration will not include base components but will have the expected inherited output. 

Each factory function takes in the same parameters as the reVISit configuration file. For example, the `studyMetadata` function requires the author, organizations, title, version, and description parameters. Robust error output will help you, the user, understand what is required in each function. For the sake of brevity, we do not list every possible parameter since these are already defined in the current study configuration. Instead, we will show additional required/optional parameters as well as additional methods and other exposed functions.

The individual classes (`Component`, `Response`, `Sequence`, `StudyMetadata`, `UIConfig`, and `StudyConfig`) should not be created directly. Instead, you should use the corresponding factory functions to insantiate them (`component()`, `response()`, `sequence()`, `studyMetadata()`, `uiConfig()`, and `studyConfig`). -->