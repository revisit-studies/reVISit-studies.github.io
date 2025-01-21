# Classes 

## `Component`

The class that is instantiated when calling the `component` factory function. Used to define the components in the study configuration file.

### **Attributes**:
| Attribute   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `component_name__`     | `str`   | Name of the component to be used as the key in the study config.        | _None_     |
| `base__`     | `Optional[Component]`   | The base component which is inherited by this component.         | _None_        |
| `metadata__` | `Optional[dict]` | A dictionary specifying metadata of the object. This is purely used for additional properties which are not written to the config and may be used to attach arbitrary data to the component without affecting the final output. | _None_ |

### **Methods**:

#### `responses(responses: List[Response]) -> self`

**Description**:  
Sets responses for the component

**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `responses`    | `List[Response]`   | Valid list of responses.         | _None_     |

**Returns**:  
- `self`: Returns self for method chaining.

**Raises**:  
- `RevisitError`: If the list is not a valid list of responses, raises and exception.

**Example**:
```python
my_response=rvt.response(
    id='my_response',
    type='dropdown',
    options=['Option 1', 'Option 2']
)

my_component = rvt.component(
    component_name__='my_component',
    type='markdown',
    path='assets/my-markdown-file.md'
).responses([
    my_response
])
```

#### `get_response(id: str) -> Response | None`

**Description**:
Returns the response of the component with the given ID. If the Response does not exist, returns `None`.

**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `id`    | `str`   | ID of Response         | _None_     |

**Returns**:
- `Response`: The response with the given ID.

**Example**:
```python
the_response = my_component.get_response(id='the_response')

if the_response is not None:
    print(the_response)
```

#### `edit_response(id: str, **kwargs: dict) -> self`

**Description**:
Edits the Response in the Component with the given ID. This is done by creating a new copy of the existing Response.

**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `id`    | `str`   | ID of Response         | _None_     |

**Returns**:
- `self`: Returns self for method chaining.

**Example**:
```python
test_response = rvt.response(
    id='test_response',
    type='shortText',
    prompt='Original Prompt:',
    required=True
)

component_one = rvt.component(
    component_name__='component_one',
    type='questionnaire',
    response=[test_response]
)

component_two = rvt.component(
    component_name__='component_two',
    type='questionnaire',
    response=[test_response]
).edit_response(id='test_response', prompt='New Prompt', required=False)

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
print(component_two)
'''
{
    "response": [
        {
            "id": "test_response",
            "prompt": "New Prompt",
            "required": false,
            "type": "shortText"
        }
    ],
    "type": "questionnaire"
}
'''
```

#### `clone(component_name__) -> Component`

**Description**:
Clones the component with the given new component name.

**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `component_name__`    | `str`   | New component name to assign to cloned component.        | _None_     |


**Returns**:
- `self`: Returns self for method chaining.

**Example**:
```python
test_response = rvt.response(
    id='test_response',
    type='shortText',
    prompt='Original Prompt:',
    required=True
)

component_one = rvt.component(
    component_name__='component_one',
    type='questionnaire',
    response=[test_response]
)

component_two = component_one.clone(component_name__='component_two').edit_response(id='test_response', prompt='New Prompt', required=False)

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
print(component_two)
'''
{
    "response": [
        {
            "id": "test_response",
            "prompt": "New Prompt",
            "required": false,
            "type": "shortText"
        }
    ],
    "type": "questionnaire"
}
'''
```

## `Response`

This is the `Responsse` class. When calling the `response` factory function, an instantiation of this class is returned.

### **Attributes**:
_No attributes_


### **Methods**:

#### `set(**kwargs: dict) -> self`

**Description**:

Sets the values of the response to the input dictionary. The `type` cannot be changed and would require creating a new response

**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `**kwargs`    | `dict`   | Dictionary containing valid values for the current response type.        | _None_     |

**Returns**:
- `self`: Returns self for method chaining.

**Raises**:
- `RevisitError`: If the user attempts to change the `type` attribute of the response, an exception will be raised. Any invalid inputs for the instantiated response type will also raise an exception.

**Examples**:
```python
response_one = rvt.response(
    id='r-1',
    type='shortText',
    required=False,
    location='belowStimulus',
    prompt=''
)

response_one.set(prompt='New Prompt')
print(response_one)
'''
Expected Output
{
    "id": "r-1",
    "location": "belowStimulus",
    "prompt": "New Prompt",
    "required": false,
    "type": "shortText"
}
'''

response_one.set(type='longText')
# Raises Exception: 'Cannot change type from shortText to longText'

response_one.set(options=[1,2,3])

```

#### `clone() -> Response`

**Description**:
Clones the response.

**Parameters**:  
_No parameters_

**Returns**:
- `self`: Returns self for method chaining.

**Examples**:
```python
import random
question_1 = rvt.response(
    id='q-1',
    type='shortText',
    prompt='What is 4 - 2?',
    required=True,
    location='belowStimulus'
)

# Initialize a list with first question
final_responses = [question_1]

# Randomly generate different arithmetic questions by cloning original question.
for i in range(2, 21):
    curr_response = question_1.clone().set(
        id=f'q-{i}',
        prompt=f'What is {random.randint(1, 10)} - {random.randint(1, 10)}'
    )
    final_responses.append(curr_response)

component_one = rvt.component(
    component_name__='component_one',
    type='questionnaire',
    response=final_responses
)

print(component_one)
'''
Expected Output:
{
    "response": [
        {
            "id": "q-1",
            "location": "belowStimulus",
            "prompt": "What is 4 - 2?",
            "required": true,
            "type": "shortText"
        },
        {
            "id": "q-2",
            "location": "belowStimulus",
            "prompt": "What is 10 - 4",
            "required": true,
            "type": "shortText"
        },

        ...

        {
            "id": "q-20",
            "location": "belowStimulus",
            "prompt": "What is 2 - 5",
            "required": true,
            "type": "shortText"
        }
    ],
    "type": "questionnaire"
}
'''
```


## `ComponentBlock`

**Description**:  
The `ComponentBlock` class (also referred to as a "Sequence"). A well-defined sequence simply contains an order and a set of components, with other optional properties. Just as in the nested structure of component blocks in the reVISit study configuration, `ComponentBlock` classes can be added together.

A `ComponentBlock` automatically tracks all of its existing `Component` classes. When the `ComponentBlock` is added to the study configuration, all components will automatically be added to the high-level components element of the study config.

### **Attributes**:
_No attributes_


### **Methods**:

#### `__add__(other: Union[ComponentBlock, Component]) -> self:`

**Description**:

Adds two `ComponentBlock` or `Component` to the input sequence. When adding two sequences together, the right sequence gets added as a `ComponentBlock` to the list of components of the left sequence. When the right object is an instance of the `Component` class, the component is added to the `ComponentBlock`'s list of components.


**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `other`   | `Union[ComponentBlock, Component]`   | Other item adding to left sequence.        | _None_     |

**Returns**:
- `self`: Returns self for method chaining.

**Raises**:
- `NotImplemented`: If the right item is not a `Component` or `ComponentBlock`, raises a `NotImplemented` exception.

**Examples**:
```python
first_sequence = rvt.sequence(
    order='fixed',
    components=[introduction]
)
second_sequence = rvt.sequence(
    order='random',
    components=[comp_one, comp_two]
)

first_sequence = first_sequence + second_sequence

print(first_sequence)
'''
Expected Output:
{
    "order": "fixed",
    "components" : [
        "introduction",
        {
            "order": "random"
            "components" : [
                "comp_one",
                "comp_two"
            ]
        }
    ]
}
'''
post_study = rvt.component(
    component_name__='post-study',
    type='markdown',
    path='./post-study.md'
)

first_sequence = first_sequence + post_study
print(first_sequence)
'''
Expected Output:
{
    "order": "fixed",
    "components" : [
        "introduction",
        {
            "order": "random"
            "components" : [
                "comp_one",
                "comp_two"
            ]
        },
        "post-study"
    ]
}
'''
```

#### `get_component(name: str) -> Component:`

**Description**:

Fetches the `Component` with the given component name from the sequence.


**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `name`   | `str`   | string matching the `component_name__` attribute of the desired `Component`.       | _None_     |

**Returns**:
- `Component`: Returns desired `Component`. If no component with specified name is found, returns `None`.


**Examples**:
```python

sequence = rvt.sequence(
    order='random',
    components=[comp_one, comp_two]
)

print(sequence.get_component(name='comp_two'))
'''
{
    "type": "markdown",
    "path": "my_markdown_file.md",
    "response": []
}
'''
```

#### `component(component_function: Optional[Callable]) -> self`

#### **Description**:
Maps each component in the current sequence to the result of the inputted `component_function`. This will maintain the entire structure of the sequence and will recursively call this function to replace every component.

The `metadata__` attribute of the components are passed in as arguments to the `component_function`. This makes it especially useful after using the `permute` or `from_data` methods since both add `metadata__` attributes to the components. If an exception is raised when calling the `component_function`, the original input component will be used in its stead.  Additionally, the `component_function` can also take in the `component__` parameter which is the original component that is being transformed. 

#### **Examples**:

**Simple component function to change the name**
```python

# Basic component function
def my_component_function(id, value):
    return rvt.component(
        component_name__=f"{id}_{value}"
        type='website',
        path='path/to/html',
    )


first_boring_component = rvt.component(type='questionnaire',metadata__={'id': 1, 'value': 2}, component_name__='bor-comp-1')
second_boring_component = rvt.component(type='questionnaire',metadata__={'id': 2, 'value': 7}, component_name__='bor-comp-2')

sequence = rvt.sequence(order='fixed', components=[first_boring_component, second_boring_component])

print(sequence)
'''
{
    'order':'fixed',
    'components':[
        'bor-comp-1',
        'bor-comp-2'
    ]
}
'''

sequence.component(my_component_function)

print(sequence)
'''
{
    'order':'fixed',
    'components':[
        '1_2',
        '2_7'
    ]
}
'''
```

**Passing in Original Components**

In the example below, we'll use the original component to determine if we want to append the `metadata__` as parameters.

```python
def my_component_function(id, value, component__):
    if component__.get('type') === 'website':
        return rvt.component(
            component_name__=f"website_{id}_{value}"
            type='website',
            path='path/to/html',
            parameters={
                'id':id,
                'value':value
            }
        )
    
    return rvt.component(
        component_name__=f'questionnaire_{id}_{value}'
        type='questionnaire',
    )

first_boring_component = rvt.component(type='questionnaire',metadata__={'id': 1, 'value': 2}, component_name__='bor-comp-1')
second_boring_component = rvt.component(type='website',metadata__={'id': 2, 'value': 7}, component_name__='bor-comp-2')

sequence = rvt.sequence(
    order='fixed',
    components=[first_boring_component, second_boring_component]
).component(my_component_function)

print(sequence)

'''
{
    'order':'fixed',
    'components':[
        'questionnaire_1_2',
        'website_2_7'
    ]
}
'''
```

:::warning
Due to how `revisitpy` is structured, the `component__` that is passed into the component function does not directly have access to the `component_name__`, `base__`, and `metadata__` attributes. It will, however, have access to any of its other standard properties such as `type`, `path`, `parameters`, and `response`.
:::

:::info
If you'd like to have your `component_function` always take in all `metadata__` entries and the original component, you can define your component function using the `kwargs` keyword like `def my_component_function(**kwargs)`. Then, to access each entry, you can use `kwargs.get('my_metadata_key')` and `kwargs.get('component__')`.
:::

You can find more examples of using the `component` method in the [Scatter JND Example](../examples/example_jnd_study) where we first construct a sequence by permuting over multiple factors, then using the `component` method to alter the components based on the `metadata__` that is applied during th permutation method.


#### `permute(factors: List[dict], order: 'fixed' | 'latinSquare' | 'random', numSamples: Optional[int]) -> self`

**Description**:
Permutes the the existing components of the sequence over the given `factors`. The permute method can be chained to complex study sequences. By default, the factors are attached as `metadata__` attributes to each component created.

**Parameters**:  
| Parameter   | Type     | Description                         | Default Value |
|-------------|----------|-------------------------------------|---------------|
| `factors`   | `List[dict]`   | A list of single-key dictionaries to permute over. | _None_     |
| `order` | `'fixed' \| 'latinSquare' \| 'random' ` |The order to assign to the current permuted component block. |  _None_ |
| `numSamples` | `Optional[int]` | The `numSamples` value to assign to the current permuted block. | _None_ |

**Returns**:
- `self`: Returns self for method chaining.

#### **Examples**:

**Simple Permutation**
```python

comp_one = rvt.component(component_name__='my-base', type='markdown', path='./my-markdown.md')

sequence = rvt.component(order='fixed',components=[comp_one])

sequence.permute(
    factors=[{'condition':'A'}, {'condition':'B'}],
    order='random'
)

print(sequence)
'''
Expected Output:
{
    "order": "random", <--- Since there was only one component in the original sequence, order gets overwritten.
    "components": [
        "my-base_condition:A",
        "my-base_condition:B" <--- Note that the default behavior appends the factors to the name
    ]
}

The two components generated are inherently identical, except with different metadata__ attributes. 
These metadata__ attributes are not outputed into the final JSON study config or seen when printing out
the individual components.
'''

sequence.permute(
    factors=[{'type':'1'}, {'type': '2'}]
    order='fixed',
    numSamples=1
)

print(sequence)
'''
Expected Output:
{
    "order": "random",
    "components": [
        {
            "order": "fixed", <--- New order gets added to inner most component blocks.
            "components": [
                "my-base_condition:A_type:1",
                "my-base_condition:A_type:2",
            ],
            "numSamples": 1
        },
        {
            "order": "fixed",
            "components": [
                "my-base_condition:B_type:1",
                "my-base_condition:B_type:2",
            ],
            "numSamples": 1
        },
    ]

}
'''
```

**Using the `component_function` in the `component` method**

```python
# Defining component function.
# Takes in kwargs to prevent conflicts with any existing metadata.
def my_comp_function(**kwargs):
    condition = kwargs.get('condition')
    type_ = kwargs.get('type')
    # If condition and type_ are both defined, return new component.
    if condition is not None and type_ is not None:
        rvt.component(
            type='website'
            component_name__=f"{condition}__{type_}"
            parameters={
                'condition': condition,
                'type': type_
            },
            response=[
                rvt.response(
                    id=f"response_{condition}_{type_}",
                    type="longText",
                    prompt=f"How do you feel about condition {condition} and type {type_}?",
                    required=True
                )
            ]
        )

    # If not both defined, return a blank component with "BAD-COMPONENT" name.
    # Useful for debugging
    return rvt.component(type='questionnaire',component_name__="BAD-COMPONENT")

sequence = rvt.sequence(order='fixed').permute(
    factors=[{'condition':'A'}, {'condition':'B'}],
    order='random'
).permute(
    factors=[{'type':'1'}, {'type': '2'}]
    order='fixed',
    numSamples=1,
    
).component(component_function) # <-- Uses component method to map each component to the result of the component_function

print(sequence)
'''
Expected Output:
{
    "order": "random",
    "components": [
        {
            "order": "fixed", <--- New order gets added to inner most component blocks.
            "components": [
                "A__1",
                "A__2",
            ],
            "numSamples": 1
        },
        {
            "order": "fixed",
            "components": [
                "B__1",
                "B__2"
            ],
            "numSamples": 1
        },
    ]

}
'''
```



#### `from_data(data_list) -> self`

**Description**

The `from_data` method iterates over a list of `DataRows` and appends the data to the `metadata__` attribute of the components in the sequence.

### **Example**:

In the below example, we create the study data using the `data` method, then create a sequence from this data using the `from_data` method. Each component shown in the new sequence will have the respective data added to their `metadata__` attribute. From here, you can use the `component` method of the `Sequence` class to transform each component based on their respective `metadata__` attributes that you applied with `from_data` method.

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