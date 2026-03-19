Docs Tech Stack
- Docusaurus
- Vite

Purpose
This docs repo supports the ReVISit project. The docs are for users of our software, study designers. These study designers should be assumed to have some basic development knowledge (e.g. they know what JSON is and might have built a few websites, but they're not react experts).

The ReVISit project aims to create a robust platform for conducting and analyzing user studies focused on interactive data visualization tools. By leveraging modern web technologies and state management solutions, ReVISit provides researchers with the necessary tools to design, deploy, and evaluate visualization interfaces effectively.

The goal is to expand the scope of user studies to beyond the visualization community, making it easier for researchers from various fields to conduct studies on interactive data visualizations. This means we need state management that can handle complex interactions and data flows, as well as a user-friendly interface for both study designers and participants.

ReVISit Tech Stack
- Yarn
- React 18
- TypeScript
- Vite
- Mantine UI
- Firebase or Supabase as storage and database backends (.env selects the engine)

Verbiage
- "Study Designer": The individual who creates and configures the user study.
- "Participant": The user who takes part in the study.
- "Analyst": The individual who reviews and analyzes the data collected from the study, both in the platform and externally.
- "Study Config": The configuration file that defines the parameters and settings of a user study.

Study Configs
The study configurations are defined in JSON files with schemas. These configs specify various aspects of the study, including the visualization tools to be used, the tasks participants need to complete, and the data sources involved. You can find the full definition of the study config typescript at https://raw.githubusercontent.com/revisit-studies/study/dev/src/parser/parser.ts. When adding new docs, always ready the current version of the schema and assume that you should read from the `dev` branch (replace dev in the string above if you're asked to look at a different branch).

How you should interact with this docs codebase
You should read docs related to features that you're adding Fore example, if we're adding anew component, read the docs for the other component types. You can run git commands but don't run them unless asked to. Don't interact with GitHub issues or pull requests directly. You should only ever write user facing documentation, we don't host any development/architectural documents in this repo.

Typedoc
Typedoc is built from the app for every release and included as reference material so you don't need to add that to this repo. Assume it will be handled, but state your assumption.
