<!-- 

*** All markdown processed by Docusaurus is processed as MDX. That means that instead of using HTML inline syntax, you must use JSX inline syntax (so something like <span style="background-color:red">Hello World!</span> would instead need to be written as <span style={{backgroundColor:'red'}}>Hello World!</span>) ***

This index file will be used as the main landing page when clicking on this particular section in the side bar. From here, users can access child pages. These child pages will be children to this index.md file -- they will automatically be parsed as being subsections. Use this file as an introduction. 

To add pages to this section and have them appear in the sidebar, navigate to the `sidebars.ts` file. You should see this: 

`const sidebars: SidebarConfig = {
    docs: [
        ...
    ]
}`

Within the docs list, you will see the section corresponding to this section of the documentation:

`
    {
      type: 'category',
      label: 'Analysis Dashboard',
      link: {
        type: 'doc',
        id: 'analysis-dashboard/index'
      },
      items:[
        'analysis-dashboard/downloading-user-data',
      ]
    }  
`

To add more pages, add the corresponding path to the `items` list. The path is relative to the `docs` folder. To change the behavior of this section to have no introduction page (and instead have an automatically rendered page which has the list of subsections to navigate to), you can change 
`link : { type: 'doc', id: 'analysis-dashboard/index' }` to `link: { type: 'generated-index' }`. The `index.md` file will not be automatically viewed in this case and will need to be added to the `items` list if you intend to use it as a page.


Admonitions Syntax:

-- Admonitions is the basic way to have a "tip" or "info" panel appear in docusaurus. This is similar to the "info" and "warning" panels we had in the original site using custom css. Please use these admonitions where needed:

Syntax:

:::info
:::

(You can change 'info' to the following: 'note', 'warning', 'tip', or 'danger')

Navigation Panel:

By default, the sidebar is always enabled. If you have a page where you'd like to add a list of sub-page panels for the user to click on, you can add the following to this file:

```
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

See the `getting-started` section for how this renders. 


 -->

# ReVISit Analysis Platform


reVISit provides an analysis platform for researchers to analyze their data. 
This platform is designed to allow researchers to quickly monitor their experimental data without needing to download it or perform analysis elsewhere. 
The platform currently includes the Dashboard, a place to check experiments at a glance, and the Table View, where researchers can inspect each record in table format.