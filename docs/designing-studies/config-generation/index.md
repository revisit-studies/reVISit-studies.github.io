---
sidebar_position: 4
---

# Config File Generation

In some cases, you will encounter the problem that your experiments may include hundreds or even thousands of trials, and it is not feasible to write them all by hand. Even though reVISit provides the [`BaseComponents`](/docs/typedoc/type-aliases/BaseComponents/) that you can reuse to reduce redundancy in your configurations files, it can still be quite an effort to write trials and sequences manually.

In this section, you will find three examples for generating config files that are too time-consuming to do by hand.

import DocCardList from '@theme/DocCardList';

<DocCardList />

<!-- ## Example 1 (Fixed Order)

Generating 100 trials for the click accuracy test with fixed order.

## Example 2 (Random Sample)

Generating config file for a VLAT-like experiment([VLAT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7539634&casa_token=9jo2PolUvEQAAAAA:vQJzbp3Sh6FU5TW1uaNyNKzQio6cSyx6-BOKrZ4cbDE6nAYOWFj3NJNecDMQlHg-1beKBM8Ra5I&tag=1)). Each trial contains of a chart, a question and a few options. However, for each chart type and task combination, we have different questions with various context.
We will generate a VLAT-like experiment, the chart type and task will be identical with the original VLAT, but the context is randomly selected.

## Example (Latin Square)

Using the same trials from Example 2, we picked a set of questions from the pool and want to ask expert to review them, but it takes too much time for one person to review all of them.
In this case, we want to each expert can review a certain amount of questions, and we want to each question be reviewed at balanced times. In this case, we will use the Latin Square randomization. -->
