
# berlin-num

import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';
  
  <StructuredLinks
      demoLinks={[
        {name: "berlin-num Demo", url: "https://revisit.dev/study/library-berlin-num"}
      ]}
      codeLinks={[
        {name: "berlin-num Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-berlin-num"}
      ]}
      referenceLinks={[
        {name: "DOI", url: "https://dx.doi.org/10.1017/S1930297500001819"},
        {name: "berlin-num", url: "http://www.riskliteracy.org/"}
      ]}
  />



The Berlin Numeracy Test is a psychometrically sound instrument that quickly assesses statistical numeracy and risk literacy. It contains 4 questions. This library contains four components, each is a question from the Berlin Numeracy Test. There are two sequences: a four-item sequence and a single-item sequence. The four-item sequence is the traditional Berlin Numeracy Test and contains all 4 questions. The single-item sequence is the single question version and contains only question 1.

## Reference

:::note[Reference]
Cokely ET, Galesic M, Schulz E, Ghazal S, Garcia-Retamero R. Measuring Risk Literacy: The Berlin Numeracy Test. Judgment and Decision Making. 2012;7(1):25-47.
:::

DOI: [10.1017/S1930297500001819](https://dx.doi.org/10.1017/S1930297500001819)

Link: [http://www.riskliteracy.org/](http://www.riskliteracy.org/)

## Available Components

- q1-choir-probability
- q2a-dice-odd-numbers
- q2b-loaded-dice
- q3-poisonous-mushrooms

## Available Sequences

- adaptive
- four-items
- single-item


