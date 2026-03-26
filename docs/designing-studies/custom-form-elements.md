# Custom Form Elements

Sometimes, the [form elements](./forms.md) ReVISit provides are not sufficient for your needs. In this case, you can create your own custom form elements. Your custom form elements can be coded in React and can use any React libraries you want. You can then include these custom form elements in your study config and they will be rendered in the study just like the built-in form elements.

This page will walk you through how to create and use custom form elements in your ReVISit study, and show you how to provide custom validation logic for your custom form elements.

## Creating Custom Form Elements

To create a custom form element, you need to define a React component that follows the structure defined by the `CustomResponseParams` type. This component receives the current response value, metadata about the response itself, optional custom parameters from the study config, validation state, and a `field` helper for updating and blurring the value. You can then use this component in your study configuration to collect responses from participants. Here's a basic example of a custom form element that collects a color input from participants:

```tsx title="ColorPicker.tsx"
import { CustomResponseParams } from '../../../store/types';

type ColorPickerValue = string;

export default function ColorPicker({
  response,
  value,
  error,
  disabled,
  field,
}: CustomResponseParams<Record<string, unknown>, ColorPickerValue>) {
  const inputProps = field.getInputProps();

  return (
    <>
      <p>{response.prompt}</p>
      <input
        type="color"
        {...inputProps}
        value={typeof value === 'string' ? value : '#000000'}
        disabled={disabled}
        onChange={(event) => field.setValue(event.currentTarget.value)}
        onBlur={() => field.onBlur()}
      />
      {error && <p>{error}</p>}
    </>
  );
}
```

In this example, the `ColorPicker` component renders an HTML color input. The `getInputProps` function is useful for wiring a native input, while `setValue` updates the stored answer and `onBlur` marks the field as interacted with. For more custom interfaces, you can call `setValue` and `onBlur` directly without relying much on `getInputProps`.

## Using Custom Form Elements in Your Study Config

To use your custom form element in your study config, you need to define a response with `type` set to `custom` and provide the path to your custom form element component. Custom responses live inside a component's `response` array, just like built-in response types. Here's how you can include the `ColorPicker` custom form element in your study config:

```json
{
  "type": "questionnaire",
  "response": [
    {
      "id": "favoriteColor",
      "prompt": "What is your favorite color?",
      "location": "belowStimulus",
      "type": "custom",
      "path": "my-study/assets/ColorPicker.tsx",
      "default": "#ff0000"
    }
  ]
}
```

::note[Note]
The path here is relative to the `src/public` directory of the ReVISit app, not the `public` directory used for most other study assets. You can place your custom form element component anywhere under `src/public`. We recommend that you follow the same folder structure that we suggest in the [react stimulus docs](./react-stimulus.md) for your custom form elements.
:::

## Custom Validation Logic for Custom Form Elements

Custom validation logic can be added to your custom form elements by defining a validation function that checks the response value and returns an error message if the value is invalid. The validation controls whether the participant can submit their response or not. The `validate` function receives the current value, the full set of response values for the component, and the current response config, so it can validate against sibling answers or `response.parameters`. Here's an example of how you can add custom validation logic to the `ColorPicker` component:

```tsx title="ColorPickerWithValidation.tsx"
import { CustomResponseParams, CustomResponseValidate } from '../../../store/types';

type ColorPickerValue = string;

export default function ColorPicker({
  response,
  value,
  error,
  disabled,
  field,
}: CustomResponseParams<Record<string, unknown>, ColorPickerValue>) {
  const inputProps = field.getInputProps();

  return (
    <>
      <p>{response.prompt}</p>
      <input
        type="color"
        {...inputProps}
        value={typeof value === 'string' ? value : '#000000'}
        disabled={disabled}
        onChange={(event) => field.setValue(event.currentTarget.value)}
        onBlur={() => field.onBlur()}
      />
      {error && <p>{error}</p>}
    </>
  );
}

export const validate: CustomResponseValidate<ColorPickerValue> = (value, _values, response) => {
  if (typeof value !== 'string' || !value) {
    return `Please select a color for "${response.prompt}".`;
  }

  return null;
};
```

In this example, we supplied a `validate` function that checks if a color has been selected. If no color is selected, it returns an error message prompting the participant to select a color. If a color is selected, it returns `null`, indicating that the response is valid. The function must be called `validate` and must be exported from the same file as the custom form element component.

When you include this custom form element in your study config, the validation logic will be automatically applied, and participants will not be able to submit their response until they have selected a color.

## Provenance tracking for custom form elements

Since custom form elements are hooked into the same response system as built-in form elements, they will automatically have provenance tracking enabled. For proper rehydration of the response values, make sure that your custom form element component updates values through `field.setValue(...)` and marks interaction with `field.onBlur()`. This ensures that the response values are properly tracked and can be analyzed.
