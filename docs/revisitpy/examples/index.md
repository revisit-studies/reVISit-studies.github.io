# Examples

import DocCardList from '@theme/DocCardList';
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    codeLinks={[
        {name: "reVISitPy Examples", url: "https://github.com/revisit-studies/revisitpy-examples"}
    ]}
    referenceLinks={[
        {name: "uv Installation", url: "https://docs.astral.sh/uv/getting-started/installation/"}
    ]}
/>

Here you'll find several examples for designing full studies using reVISitPy. Each of the examples takes advantage of the `revisitpy-server` and a Jupyter notebook environment. While neither of these are necessary to create complex configuration files, they are the quickest ways to get started with reVISitPy and the best way to create a closed-feedback loop for quick iterations of your study design.



## Using The Examples Repository

If you're looking for a more hands-on approach to working with these examples, you can find each of these examples in the [reVISitPy examples repository](https://github.com/revisit-studies/revisit-py-examples). We suggest using [uv](https://docs.astral.sh/uv/getting-started/installation/) with this repository since it is the simplest way to get started.

Once you have `uv` installed and the repository successfully cloned, navigate to the repository and run the following:

```bash
uv sync
```

This will initialize a virtual environment with all of the necessary packages for the repository (including `revisitpy` and `revisitpy-server`). Then, when running any of the examples, you just need to choose the `ipykernel` associated with your virtual environment (by default, this is the `.venv` directory).


<DocCardList />
