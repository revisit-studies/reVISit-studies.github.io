import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveVersionedLink } from '../src/utils/versionedLinks.mjs';

const next = { name: 'current', path: '/docs/next' };
const stable = { name: 'v2.4.4', path: '/docs' };

test('moving study source and demo links follow Next and switch back on promotion', () => {
  const links = [
    ['https://github.com/revisit-studies/study/tree/main/public/demo-vega', 'https://github.com/revisit-studies/study/tree/dev/public/demo-vega'],
    ['https://github.com/revisit-studies/study/blob/main/src/parser/types.ts#L5', 'https://github.com/revisit-studies/study/blob/dev/src/parser/types.ts#L5'],
    ['https://raw.githubusercontent.com/revisit-studies/study/main/schema.json', 'https://raw.githubusercontent.com/revisit-studies/study/dev/schema.json'],
    ['https://revisit.dev/study/demo-vega/?participantId=a#trial', 'https://revisit.dev/study/dev/demo-vega/?participantId=a#trial'],
    ['https://revisit.dev/study/', 'https://revisit.dev/study/dev/'],
  ];
  for (const [source, expected] of links) {
    assert.equal(resolveVersionedLink(source, next), expected);
    assert.equal(resolveVersionedLink(source, stable), source);
  }
});

test('absolute docs links stay in the viewed version, including PR base paths', () => {
  const href = 'https://revisit.dev/docs/typedoc/interfaces/StudyConfig/?q=a#sequence';
  assert.equal(resolveVersionedLink(href, next), '/docs/next/typedoc/interfaces/StudyConfig/?q=a#sequence');
  assert.equal(resolveVersionedLink(href, stable), '/docs/typedoc/interfaces/StudyConfig/?q=a#sequence');
  assert.equal(resolveVersionedLink(href, { name: 'current', path: '/PR42/docs/next' }), '/PR42/docs/next/typedoc/interfaces/StudyConfig/?q=a#sequence');
  assert.equal(resolveVersionedLink('/docs/introduction/', { name: 'v2.3.2', path: '/PR42/docs/v2.3.2' }), '/PR42/docs/v2.3.2/introduction/');
});

test('pinned versions, explicit deployments, relative links and unrelated sites are preserved', () => {
  for (const href of [
    'https://github.com/revisit-studies/study/blob/v2.4.4/public/demo/config.json',
    'https://github.com/revisit-studies/study/blob/abcdef123456/public/demo/config.json',
    'https://github.com/revisit-studies/study/tree/dev/public/demo',
    'https://github.com/revisit-studies/study/issues',
    'https://github.com/revisit-studies/template/tree/main',
    'https://revisit.dev/study/dev/demo/',
    'https://revisit.dev/study/dev-supabase/demo/',
    'https://revisit.dev/study/supabase/demo/',
    'https://revisit.dev/study/PR42/demo/',
    'https://revisit.dev/docs/v2.3.2/introduction/',
    '/docs/next/introduction/',
    '../../typedoc/interfaces/StudyConfig/',
    '#sequence', 'mailto:contact@revisit.dev',
    'https://example.com/docs/introduction/',
    'https://revisit.dev/replication-studies/',
  ]) assert.equal(resolveVersionedLink(href, next), href);
});

test('global pages keep their original links without an active docs version', () => {
  for (const href of ['https://revisit.dev/study/', '/docs/introduction/']) {
    assert.equal(resolveVersionedLink(href), href);
  }
});
