# On recording papers that use reVISit 

We record papers that use reVISit in the `adoption.bib` file in this folder. This file is the source of truth and should only be changed manually.

Please submit updates by opening a pull request that edits `static/adoption.bib`.
If you are not comfortable with that workflow, email us at contact@revisit.dev and we can help add your study.

The adoption page data is generated at build time from this BibTeX file.

## Required fields

- `title`
- `author`
- `year`

## Recommended standard fields

- `journal` or `booktitle`
- `url`
- `doi`
- `abstract` (displayed as the adoption page description text)

## Custom fields used by the adoption page

- `revisitversion`
- `sourcecodelink`
- `studyurl` (supports multiple links separated by `|`)

## Optional fields

All fields other than `title`, `author`, and `year` are optional.

- If `journal` and `booktitle` are missing, the entry is shown as `Preprint`.
- If `url` is missing, the `See Paper` button is omitted (unless a DOI link can be used).
- If `doi` is missing, no DOI link is shown.
- If `abstract` is missing, no subtitle text is shown.
- If `revisitversion` is missing, no reVISit version label is shown.
- If `sourcecodelink` is missing, no source code link is shown.
- If `studyurl` is missing, no `See Study` button is shown.

## Example entry

```bibtex
@article{example-study-2026,
	title = {Example Study Title},
	author = {First Author and Second Author},
	year = {2026},
	journal = {Example Venue},
	url = {https://example.org/paper},
	doi = {10.1234/example-doi},
	abstract = {One-sentence summary of the purpose of the study used on the adoption page. Alternatively, the abstract of the paper.},
	revisitversion = {2.4.3},
	sourcecodelink = {https://github.com/example/repo},
	studyurl = {https://example.org/study-1 | https://example.org/study-2},
}
```