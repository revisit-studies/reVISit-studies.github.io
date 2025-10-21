# Functions

### `component(component_name__, base__, **kwargs) -> Component`

Instantiates a Component class with the given input parameters.

### **Parameters**:
| Parameter | Type   | Description                     | Default Value |
|-----------|--------|---------------------------------|---------------|
| `component_name__`  | `str` | Names the component for use in the final configuration file.   | _None_     |
| `base__`  | `Optional[component]` | When a base component is passed, all properties of the base are inherited by the component. Any other specified property during input will override base properties. | _None_        |
| `**kwargs` | `dict` | The component function requires any property that the component already requires, such as "type". Refer to the configuration documentation for required properties. | _None_ |

### **Returns**:
- `Component`: Returns an instantiation of the Component class.

### **Raises**:
- `RevisitError`: If the required properties are not specified, and exception will be raised.

### **Example**:
```python
import revisit as rvt

# Initializing a markdown component with an empty response list.
my_component = rvt.component(
    component_name__='my-component',
    response=[],
    type='markdown',
    path='./assets/my-markdown-file.md'
)

# Instantiating a component with the base as "my_component".
my_other_component = rvt.component(
    component_name__='my-other-component',
    base__=my_component,
    path='./assets/my-other-markdown-file.md'
)
```


### `response(**kwargs) -> Response`


Instantiates a Response class with the given input parameters.

### **Parameters**:
| Parameter | Type   | Description                     | Default Value |
|-----------|--------|---------------------------------|---------------|
| `**kwargs` | `dict` | The component function requires any property that the component already requires, such as "type". Refer to the configuration documentation for required properties. | _None_ |

### **Returns**:
- `Response`: Returns an instantiation of the Response class.

### **Raises**:
- `RevisitError`: If the required properties are not specified, and exception will be raised.

### **Example**:
```python
import revisit as rvt

# Initializing a matrix radio response
my_response = rvt.response(
    type='matrix-radio',
    answerOptions='likely5',
    questionOptions=['Question 1', 'Question 2', 'Question 3'],
    required=True,
    location='sidebar'
)
```

### `studyMetadata(**kwargs) -> StudyMetadata`

Instantiates a StudyMetadata class with the given parameters.

### **Parameters**:
| Parameter | Type   | Description                     | Default Value |
|-----------|--------|---------------------------------|---------------|
| `**kwargs` | `dict` | Required properties for the StudyMetadata | _None_ |

### **Returns**:
- `Response`: Returns an instantiation of the Response class.

### **Raises**:
- `RevisitError`: If the required properties are not specified, and exception will be raised.

### **Example**:
```python
import revisit as rvt

# Initializing a matrix radio response
my_response = rvt.response(
    type='matrix-radio',
    answerOptions='likely5',
    questionOptions=['Question 1', 'Question 2', 'Question 3'],
    required=True,
    location='sidebar'
)
```

### `uiConfig(**kwargs) -> UIConfig`

Instantiates a UIConfig class with the given parameters.

### **Parameters**:
| Parameter | Type   | Description                     | Default Value |
|-----------|--------|---------------------------------|---------------|
| `**kwargs` | `dict` | The component function requires any property that the component already requires, such as "type". Refer to the configuration documentation for required properties. | _None_ |

### **Returns**:
- `Response`: Returns an instantiation of the Response class.

### **Raises**:
- `RevisitError`: If the required properties are not specified, and exception will be raised.

### **Example**:
```python
import revisit as rvt

# Initializing a matrix radio response
my_response = rvt.response(
    type='matrix-radio',
    answerOptions='likely5',
    questionOptions=['Question 1', 'Question 2', 'Question 3'],
    required=True,
    location='sidebar'
)
```

### `studyConfig(studyMetadata, uiConfig, sequence, schema, components) -> StudyConfig`

Instantiates a the final `StudyConfig` based on the `UIConfig`, `StudyMetadata`, `Sequence`, and `Components` input. Note that the components list is completely optional: using the `studyConfig` factory function automatically populates all components based on their presence in the sequence.

### **Parameters**:
| Parameter | Type   | Description                     | Default Value |
|-----------|--------|---------------------------------|---------------|
| `studyMetadata` | `StudyMetadata` | An instance of the `StudyMetadata` class | _None_ |
| `uiConfig` | `UIConfig` | An instance of the `UIConfig` class | _None_ |
| `sequence` | `ComponentBlock` | The top level member of your sequence. | _None_ |
| `components` | `Optional[List[Component]]` | The list of `Component`s to be added to the config. This is automatically populated based on the inputted sequence | `[]` |
| `schema` | `str` |The valid `$schema` value for the config. You can always find the most recent schema value in the public repository of our main study repository, such as [here](https://github.com/revisit-studies/study/blob/main/public/demo-html/config.json) | _None_ |

### **Returns**:
- `StudyConfig`: Returns an instantiation of the StudyConfig class.

### **Raises**:
- `RevisitError`: If the required properties are not specified, and exception will be raised.

### **Example**:

```python
ui_config = rvt.uiConfig(...)
study_metadata = rvt.studyMetadata(...)
comp_one = rvt.component(...)
comp_two = rvt.component(...)
sequence = rvt.sequence(order='fixed',components=[comp_one, comp_two])

study = rvt.studyConfig(
    schema='https://raw.githubusercontent.com/revisit-studies/study/v2.0.0-rc5/src/parser/StudyConfigSchema.json',
    studyMetadata=study_metadata,
    uiConfig=ui_config,
    sequence=sequence # <-- Do not need to add components list separately if they are already in the sequence.
)
```


### `data(file_path)`

Parses a CSV file with the given `file_path` and returns a list of DataRows. Output can be passed into the `from_data` method of the `sequence` class to generate components based on the CSV data.

### **Parameters**:
| Parameter | Type   | Description                     | Default Value |
|-----------|--------|---------------------------------|---------------|
| `file_path` | `str` | Path to the CSV file | _None_ |

### **Returns**:
- `List[DataRow]`: Returns a list of dataclasses called `DataRow`. 


### **Example**:

In the below example, we create the study data using the `data` method, then create a sequence from this data using the `from_data` method. Each component shown in the new sequence will have the respective data added to their `meta` attribute. From here, you can use the `component` method of the `Sequence` class to transform each component based on their respective `meta` attributes that you applied with `from_data` method.

```python

'''
'my_csv_file.csv' contents

id | value_1 | value_2
---|---------|--------
 1 | 0.3     | 3
 2 | 0.1     | 4
 3 | 1.2     | 1
'''

study_data = rvt.data('path/to/my_csv_file.csv')

sequence = rvt.sequence(order='fixed').from_data(study_data)

print(sequence)
'''
{
    "order": "fixed",
    "components": [
        'id:1__value_1:0.3__value_2:3',
        'id:2__value_1:0.1__value_2:4',
        'id:3__value_1:1.2__value_2:1',
    ]
}
'''
```