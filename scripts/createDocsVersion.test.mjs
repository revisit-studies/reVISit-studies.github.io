import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createDocsVersion, resolveDocsRef } from './createDocsVersion.mjs';

test('promotion archives maintained current, promotes the selected remote branch and preserves working Next', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'revisit-release-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  for (const dir of ['docs/current', 'docs/next/typedoc', 'docs/next/libraries', 'versioned_docs', 'versioned_sidebars', 'study/docs', 'study/docsLibraries']) {
    await mkdir(path.join(root, dir), { recursive: true });
  }
  await symlink(path.resolve('node_modules'), path.join(root, 'node_modules'), 'dir');
  await writeFile(path.join(root, 'docs/current/guide.md'), '# Stable with post-release correction\n');
  await writeFile(path.join(root, 'docs/current/removed.md'), '# Removed in new release\n');
  await writeFile(path.join(root, 'docs/next/guide.md'), '# Approved next release\n');
  await writeFile(path.join(root, 'docs/next/typedoc/stale.md'), '# Stale reference\n');
  await writeFile(path.join(root, 'docs/next/libraries/stale.md'), '# Stale library\n');
  await writeFile(path.join(root, 'sidebars.current.ts'), "export default {docs: ['guide', 'removed']};\n");
  await writeFile(path.join(root, 'sidebars.next.ts'), "export default {docs: ['guide']};\n");
  await writeFile(path.join(root, 'versions.json'), '[]\n');
  await writeFile(path.join(root, 'current-release.json'), JSON.stringify({ version: 'v1.0.0', studyCommit: '0'.repeat(40) }));
  git('init', '--quiet');
  git('add', 'docs/next', 'sidebars.next.ts');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '-m', 'Approved docs');
  const approved = git('rev-parse', 'HEAD');
  git('update-ref', 'refs/remotes/origin/release/docs', approved);
  assert.equal(resolveDocsRef(root, 'release/docs'), approved);
  assert.throws(() => resolveDocsRef(root, 'missing-branch'));
  await writeFile(path.join(root, 'docs/next/guide.md'), '# Work after approval\n');
  await writeFile(path.join(root, 'study/docs/index.md'), '# Tagged API\n');
  await writeFile(path.join(root, 'study/docsLibraries/library.md'), '# Tagged library\n');
  const options = { siteDir: root, tag: 'v1.1.0', docsRef: 'release/docs', studyCommit: 'a'.repeat(40), studyDir: path.join(root, 'study') };
  assert.equal(await createDocsVersion(options), true);
  assert.equal(await readFile(path.join(root, 'versioned_docs/version-v1.0.0/guide.md'), 'utf8'), '# Stable with post-release correction\n');
  assert.equal(await readFile(path.join(root, 'docs/current/guide.md'), 'utf8'), '# Approved next release\n');
  assert.equal(await readFile(path.join(root, 'docs/next/guide.md'), 'utf8'), '# Work after approval\n');
  assert.equal(await readFile(path.join(root, 'docs/current/typedoc/index.md'), 'utf8'), '# Tagged API\n');
  assert.equal(await readFile(path.join(root, 'sidebars.current.ts'), 'utf8'), "export default {docs: ['guide']};\n");
  for (const file of ['removed.md', 'typedoc/stale.md', 'libraries/stale.md']) {
    await assert.rejects(readFile(path.join(root, 'docs/current', file)), { code: 'ENOENT' });
  }
  assert.deepEqual(JSON.parse(await readFile(path.join(root, 'versions.json'), 'utf8')), ['v1.0.0']);
  assert.equal(JSON.parse(await readFile(path.join(root, 'current-release.json'), 'utf8')).version, 'v1.1.0');
  assert.equal(await createDocsVersion(options), false);
  await assert.rejects(createDocsVersion({ ...options, studyCommit: 'b'.repeat(40) }), /different sources/);
  await assert.rejects(createDocsVersion({ ...options, tag: 'v1.0.1' }), /must be newer/);
  await assert.rejects(createDocsVersion({ ...options, tag: 'v2.0.0-beta.1' }), /stable release tag/);
});
