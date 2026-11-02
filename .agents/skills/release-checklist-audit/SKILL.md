---
name: release-checklist-audit
description: Audit and update the ReVISit pre-release and post-release checklists for upcoming releases. Compare upstream development changes, inspect release workflows and related repositories, identify missing or obsolete verification tasks, and update the existing checklists. Use when preparing, reviewing, or maintaining release checklists.
---

# Release Checklist Audit

Keep the ReVISit pre-release and post-release checklists accurate, complete, and aligned with the functionality and release procedures of the upcoming version.

Update both checklists directly, using verified repository evidence. Preserve useful existing checks, add missing ones, and remove or revise demonstrably obsolete instructions.

This skill maintains release checklists. It does not execute the complete release process.

## 1. Scope and safety

- Read applicable repository instructions before making changes.
- Preserve unrelated working-tree changes.
- Use read-only Git and GitHub operations to investigate release changes.
- Fetch current upstream references when permitted; do not rely on stale local branches.
- Do not modify application code, generated files, or documentation unrelated to the checklists.
- Do not commit, push, merge, switch branches, create pull requests, publish releases, or modify GitHub issues without authorization.
- Do not execute destructive commands or untrusted scripts.
- Never mark a checklist item as completed merely because the corresponding functionality exists.
- Preserve existing checkbox states unless verified evidence and the user's instructions justify changing them.
- Do not invent release procedures, URLs, deployment requirements, or test results.

## 2. Repository context

ReVISit uses multiple repositories:

### Study repository

https://github.com/revisit-studies/study

Contains the main application, study configurations, demo studies, tests, libraries, analysis functionality, parser types, and storage implementations.

Use upstream `dev` as the upcoming release implementation and upstream `main` as the comparison baseline.

Compare the actual upstream commits, not merely the current local checkout.

### Documentation repository

https://github.com/revisit-studies/reVISit-studies.github.io

Contains user documentation, examples, screenshots, and documentation navigation.

Inspect documentation-related release requirements and update relevant checklist tasks when necessary.

### ReVISitPy repository

https://github.com/revisit-studies/revisitpy

Inspect compatibility requirements when changes to parser types, generated schemas, or configuration structures may affect ReVISitPy.

### Release checklist location

Locate the existing pre-release and post-release checklist templates using repository files, GitHub issue templates, release workflow definitions, or existing release issues.

Prefer updating canonical reusable templates rather than modifying completed historical release issues.

If a canonical template cannot be identified, report the ambiguity rather than creating a competing checklist.

## 3. Determine release scope

1. Identify the upcoming release version from the user's request or reliable release metadata.
2. Fetch or query upstream `study/dev` and `study/main`.
3. Record the exact commit SHAs used for the comparison.
4. Inspect the development delta using the appropriate Git comparison.
5. Review relevant release workflows, changed configuration schemas, generated artifacts, and repository conventions.
6. Inspect related merged PRs and closed issues when useful for understanding changes.
7. Compare the findings with existing pre-release and post-release checklist tasks.

Distinguish changes introduced by the upcoming release from functionality already available in previous releases.

If the current upstream branches cannot be accessed, report which comparison could not be completed. Do not claim comprehensive release coverage.

## 4. Audit the pre-release checklist

Review the complete existing pre-release checklist.

Preserve useful regression tests covering functionality that remains supported, even if it has not changed in the upcoming release.

### Release pull request

Verify that the checklist includes appropriate tasks for:

- Correct release version and PR title.
- Correct target branch.
- Required CI checks.
- Required approvals.
- Successful preview deployment.
- Creation or linking of the post-release checklist.
- Any new release workflow requirements.

Do not hardcode an outdated version number.

### Demo and example studies

Inspect the canonical study definitions and compare them with existing checklist entries.

- Add new runnable demo studies.
- Add new example studies.
- Retain supported existing studies.
- Remove obsolete entries only when their removal or replacement is verified.
- Avoid listing internal fixtures as runnable studies unless they are intended for release QA.

Preserve meaningful grouping and consistent identifiers.

### Tutorials

Check whether newly introduced or modified tutorials require release testing.

Verify that the checklist covers representative tutorial workflows and configuration compatibility.

### Tests

Inspect release-relevant test studies and workflows.

Add checks for newly introduced functionality that requires manual verification.

Do not turn the checklist into a duplicate of the automated test suite.

Prioritize meaningful end-to-end and regression scenarios.

### Libraries

Compare the existing checklist against supported study libraries.

Identify:

- Newly added libraries.
- Removed or renamed libraries.
- Changes that require new manual checks.
- Library generation or documentation requirements.

Avoid duplicate entries and preserve useful supported-library coverage.

### Analysis functionality

Inspect changes to analysis pages and associated user workflows.

Review existing checks for:

- Study Summary.
- Participant View.
- Replay.
- Trial Stats.
- Coding.
- Live Monitor.
- Config.
- Manage.
- File downloads and exports.
- Study navigation.

Add checks for newly introduced analysis functionality and important behavioral changes.

Prefer observable user actions and expected results rather than vague instructions such as "check the page."

### Generated files

Check whether release procedures must account for:

- Study configuration schema generation.
- Library documentation generation.
- Example study generation.
- Other generated outputs introduced by the project.

Inspect current package scripts and workflow definitions before recommending commands.

Do not assume previously documented commands are still available.

### Internal documentation

Check whether relevant changes require:

- Updated comments or type documentation.
- Updated TypeDoc input or README content.
- Verification of links from the study repository to user documentation.
- Additional release documentation or migration notes.

Distinguish generated documentation from editable source documentation.

### Documentation repository

Ensure the pre-release checklist includes appropriate verification for:

- New and changed functionality documentation.
- Outdated documentation.
- Configuration examples.
- Documentation links.
- Documentation navigation.
- Screenshots.
- Library documentation.
- Relevant accessibility concerns.
- Documentation build or validation checks.

Do not duplicate every task performed by the separate write-documentation skill.

### ReVISitPy compatibility

When relevant schema or parser changes occur, ensure the checklist includes verification of compatibility with ReVISitPy.

Do not require unrelated compatibility work when no relevant interface has changed.

## 5. Audit the post-release checklist

Locate and inspect the existing post-release checklist.

Post-release checks should confirm that the published release works as expected, rather than repeating the complete pre-release test matrix.

Review whether it covers applicable tasks such as:

- Release publication and version correctness.
- Production deployment status.
- Production smoke testing.
- Public documentation availability.
- Published documentation links.
- Package or generated artifact availability.
- Version alignment across relevant repositories.
- Representative production study execution.
- Analysis and data export functionality.
- ReVISitPy compatibility where applicable.
- Release announcements and communication.
- Monitoring or follow-up of known issues.
- Closing or linking release tracking issues when appropriate.

Include only procedures supported by repository evidence or established release practices.

Do not invent deployment systems or publication requirements.

## 6. Detect missing and obsolete tasks

Compare release evidence with both existing checklists.

For each candidate change, determine:

1. What changed or was introduced?
2. Does it affect release verification?
3. Is an existing checklist task sufficient?
4. Does a task need clarification or expansion?
5. Is a new task necessary?
6. Is an existing task obsolete or duplicated?
7. Does the task belong in pre-release or post-release QA?

Prefer improving an existing task over creating multiple overlapping entries.

Do not remove broad regression checks merely because their functionality was unchanged.

When a change affects multiple workflows, add distinct checks only when they validate meaningfully different behavior.

## 7. Update the checklists

Apply verified changes to the canonical checklist files.

- Preserve the established Markdown structure and section organization.
- Preserve meaningful checkbox hierarchy.
- Keep tasks actionable and understandable to release reviewers.
- Use exact study identifiers, UI labels, and documented commands.
- Group related tasks logically.
- Avoid vague tasks without observable completion criteria.
- Avoid creating redundant sections for individual PRs or issues.
- Update outdated version references when the intended release version is known.
- Maintain links to relevant repositories and authoritative release resources.
- Keep unchecked tasks unchecked.

Only modify checklist files and directly related checklist metadata when needed.

If the checklists exist exclusively as GitHub issues and modification has not been authorized, prepare the proposed changes without changing the issues.

## 8. Verification

After editing:

1. Review the complete checklist diff.
2. Confirm every newly listed demo, example, tutorial, test, and library actually exists and is applicable.
3. Verify commands and referenced file paths.
4. Check links and Markdown checkbox syntax.
5. Confirm pre-release and post-release responsibilities are distinct.
6. Check for missing high-risk release workflows.
7. Check for duplicate or contradictory tasks.
8. Verify that unrelated files and checkbox completion states were preserved.

Run relevant repository checks when available and justified.

Do not perform complete release QA as part of checklist maintenance.

If any source or repository cannot be inspected, identify the limitation explicitly.

## 9. Completion report

Report concisely:

**Release scope**
- Upcoming version when known.
- Upstream branches and commits compared.
- Repositories inspected.

**Pre-release changes**
- Tasks added.
- Tasks revised.
- Obsolete tasks removed.

**Post-release changes**
- Tasks added.
- Tasks revised.
- Obsolete tasks removed.

**Verification**
- Checks performed and results.
- Any missing repository access or unverified assumptions.

**Delivery**
- Files modified.
- Whether changes remain uncommitted.
- Any issues requiring manual decisions.

Never claim that release QA passed or that the release is ready merely because the checklists were updated.
