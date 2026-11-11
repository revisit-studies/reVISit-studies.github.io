import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { findDocsDrift } from './checkDocsDrift.mjs';

async function createSite(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'revisit-drift-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  const write = async (file, content) => {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), content);
  };
  const commit = message => {
    git('add', '--all');
    git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '--allow-empty', '-m', message);
    return git('rev-parse', 'HEAD');
  };
  for (const tree of ['current', 'next']) {
    await write(`docs/${tree}/guide.md`, '# Guide\n\nShared intro.\n\nShared setup.\n');
    await write(`docs/${tree}/typedoc/index.md`, `# ${tree} reference\n`);
  }
  await write('docs/next/upcoming.md', '# Guide\n\nShared intro.\n\nUnreleased feature.\n\nShared setup.\n');
  await write('docs/current/upcoming.md', '# Guide\n\nShared intro.\n\nShared setup.\n');
  git('init', '--quiet');
  return { root, write, commit, base: commit('Base docs') };
}

test('passes when a current change is applied to next', async t => {
  const { root, write, commit, base } = await createSite(t);
  await write('docs/current/guide.md', '# Guide\n\nShared intro.\n\nFixed setup.\n');
  await write('docs/next/guide.md', '# Guide\n\nShared intro.\n\nFixed setup.\n');
  await write('docs/current/new-page.md', '# New\n');
  await write('docs/next/new-page.md', '# New\n');
  commit('Fix both');
  assert.deepEqual(await findDocsDrift(root, base), []);
});

test('passes when next already differs but contains the same change', async t => {
  const { root, write, commit, base } = await createSite(t);
  await write('docs/current/upcoming.md', '# Guide\n\nShared intro.\n\nFixed setup.\n');
  await write('docs/next/upcoming.md', '# Guide\n\nShared intro.\n\nUnreleased feature.\n\nFixed setup.\n');
  commit('Fix both with unreleased content in next');
  assert.deepEqual(await findDocsDrift(root, base), []);
});

test('reports current changes, additions, and deletions missing from next', async t => {
  const { root, write, commit, base } = await createSite(t);
  await write('docs/current/guide.md', '# Guide\n\nShared intro.\n\nFixed setup.\n');
  await write('docs/current/new-page.md', '# New\n');
  await rm(path.join(root, 'docs/current/upcoming.md'));
  commit('Fix current only');
  assert.deepEqual((await findDocsDrift(root, base)).sort(), ['guide.md', 'new-page.md', 'upcoming.md']);
});

test('ignores generated references and checks head rather than the working tree', async t => {
  const { root, write, commit, base } = await createSite(t);
  await write('docs/current/typedoc/index.md', '# Release reference\n');
  commit('Regenerate current references');
  assert.deepEqual(await findDocsDrift(root, base), []);
  await write('docs/current/guide.md', '# Guide\n\nShared intro.\n\nFixed setup.\n');
  const head = commit('Fix current only');
  await write('docs/next/guide.md', '# Guide\n\nShared intro.\n\nFixed setup.\n');
  assert.deepEqual(await findDocsDrift(root, base, head), ['guide.md']);
});
