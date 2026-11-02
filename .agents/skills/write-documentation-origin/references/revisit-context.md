# ReVISit audience and terminology

ReVISit helps researchers design, deploy, conduct, and analyze user studies involving interactive data visualizations. Documentation should help researchers beyond the visualization community complete concrete tasks.

## Readers

- **Study Designer**: creates and configures a study.
- **Participant**: takes part in a study.
- **Analyst**: reviews and analyzes collected data in ReVISit or externally.
- **Study Config**: the schema-backed configuration file describing study parameters, components, tasks, data sources, and flow; commonly written in JSON.

Use these names consistently in prose. Preserve actual UI labels, configuration keys, and source identifiers verbatim.

## Technical context (verify against target checkout)

- Documentation uses Docusaurus.
- The study application has used Yarn, React 19, TypeScript, Vite, and Mantine UI.
- Firebase or Supabase may be selected via `.env` configuration.

These are contextual starting points, not a substitute for checking the current documentation version and repository files.
