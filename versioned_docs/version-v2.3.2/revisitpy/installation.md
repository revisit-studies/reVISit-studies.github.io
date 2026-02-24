# Installation



Adding reVISitPy to a python project is simple. If you're using `pip`, you can do the following:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pip" label="pip">

```sh
pip install revisitpy
```

</TabItem>
<TabItem value="uv" label="uv">

```sh
uv add revisitpy
```

</TabItem>
</Tabs>

This will provide you with all the functionality that reVISitPy provides -- including the widget to view your study in a Jupyter notebook.


## ReVISit Server

The widget functionality of reVISitPy requires that you have a local copy of reVISit running on port 8080. If you do not have the study repository cloned on your local machine, you can still run a local copy or reVISit directly in python without needing to clone our main repository by using our `revisitpy-server` package.

<Tabs>
<TabItem value="pip" label="pip">

```sh
pip install revisitpy-server
```

</TabItem>
<TabItem value="uv" label="uv">

```sh
uv add revisitpy-server
```

</TabItem>
</Tabs>

Once installed, you will be able to serve a local copy of reVISit like so (note the use of an underscore instead of dash in the import statement):

```python
import revisitpy_server as rs

process = rs.serve()
```

:::note
Note that this is, by default, serving a copy of reVISit on port 8080. Currently, there are no adjustments in place to change this default port. We intend to allow for more customization in the future.
:::


<!-- Importing links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    referenceLinks={[
        {name: "uv Installation", url: "https://docs.astral.sh/uv/getting-started/installation/"},
        {name: "pip Installation", url: "https://pip.pypa.io/en/stable/installation/"}
    ]}
/>