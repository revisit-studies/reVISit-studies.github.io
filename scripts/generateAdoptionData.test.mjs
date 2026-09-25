import test from 'node:test';
import assert from 'node:assert/strict';

import { buildAdoptionRecord, hasRequiredFields, parseBibTeX } from './generateAdoptionData.mjs';

test('parseBibTeX handles article and inproceedings entries', () => {
  const source = `
    @article{example-article,
      title = {Example Article},
      author = {First Author and Second Author},
      % this comment should not break parsing
      year = {2026},
      journal = {Example Journal},
      studyurl = {https://example.org/study},
      revisitversion = {2.4.3},
      sourcecodelink = {https://example.org/code}
    }

    @inproceedings{example-conf,
      title = {Example Conference Paper},
      author = {First Author and Second Author},
      year = {2026},
      booktitle = {Example Conference}
    }
  `;

  const entries = parseBibTeX(source);

  assert.equal(entries.length, 2);
  assert.equal(entries[0].type, 'article');
  assert.equal(entries[0].fields.title, 'Example Article');
  assert.equal(entries[0].fields.year, '2026');
  assert.equal(entries[0].fields.studyurl, 'https://example.org/study');
  assert.equal(entries[0].fields.revisitversion, '2.4.3');
  assert.equal(entries[0].fields.sourcecodelink, 'https://example.org/code');
  assert.equal(entries[1].type, 'inproceedings');
  assert.equal(entries[1].fields.booktitle, 'Example Conference');
});

test('hasRequiredFields rejects records without abstract', () => {
  const entry = {
    key: 'missing-abstract',
    fields: {
      title: 'Valid Title',
      author: 'First Author and Second Author',
      year: '2026',
      abstract: '',
    },
  };

  const record = buildAdoptionRecord(entry, 0);

  assert.equal(hasRequiredFields(record), false);
});

test('hasRequiredFields accepts records with abstract', () => {
  const entry = {
    key: 'with-abstract',
    fields: {
      title: 'Valid Title',
      author: 'First Author and Second Author',
      year: '2026',
      abstract: 'This paper evaluates a study built with ReVISit.',
    },
  };

  const record = buildAdoptionRecord(entry, 0);

  assert.equal(hasRequiredFields(record), true);
});
