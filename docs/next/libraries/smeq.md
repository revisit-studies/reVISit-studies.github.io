# smeq

The Subjective Mental Effort Questionnaire (SMEQ) is a single-item scale designed to measure perceived mental effort during a task. This library includes a single component, the SMEQ.

## Reference

:::note[Reference]
F. R. H. Zijlstra and L. van Doorn, “The construction of a scale to measure perceived effort,” Delft University of Technology, Delft, The Netherlands, Tech. Rep., 1985.
:::

## Available Components

- smeq

## Available Sequences

None

## Slider Interaction

On the SMEQ scale, hovering over the vertical slider previews the value at the pointer with a temporary tick and numeric tooltip. Moving the pointer does not change the Participant's answer; selecting a value commits it. The preview disappears when the pointer leaves the scale and is unavailable when the slider is disabled or read-only during replay.

<!-- Importing Links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

  <StructuredLinks
      demoLinks={[
        {name: "smeq Demo", url: "https://revisit.dev/study/library-smeq"}
      ]}
      codeLinks={[
        {name: "smeq Demo Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-smeq"},
        {name: "smeq Library Code", url: "https://github.com/revisit-studies/study/tree/main/public/libraries/smeq"}
      ]}
      
  />
