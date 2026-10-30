import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { releaseRequest, verifyStudyRelease } from './resolveStudyRelease.mjs';

test('dispatch and manual payloads pin release sources and approved docs; legacy uses the event docs commit', () => {
  const sha = 'a'.repeat(40);
  assert.deepEqual(releaseRequest({ client_payload: { release_tag: 'v3.0.0' } }, 'repository_dispatch', sha),
    { study_ref: 'refs/tags/v3.0.0', release_tag: 'v3.0.0', docs_ref: sha });
  for (const eventName of ['repository_dispatch', 'workflow_dispatch']) {
    const input = { release_tag: 'v3.0.0', docs_ref: 'release/docs' };
    assert.equal(releaseRequest({ inputs: input, client_payload: input }, eventName, sha).docs_ref, 'release/docs');
    for (const tag of ['v3.0.0-beta.1', 'main', '3.0.0', 'v3.0', 'v3.0.0\n']) {
      assert.throws(() => releaseRequest({ inputs: { release_tag: tag }, client_payload: { release_tag: tag } }, eventName, sha), /stable release_tag/);
    }
  }
  assert.deepEqual(releaseRequest({}, 'repository_dispatch', sha), { study_ref: 'main', release_tag: '', docs_ref: sha });
  assert.throws(() => releaseRequest({ inputs: {} }, 'workflow_dispatch', sha), /requires release_tag/);
  assert.throws(() => releaseRequest({}, 'repository_dispatch', ''), /approved docs revision/);
  assert.throws(() => releaseRequest({ client_payload: { docs_ref: 'main\nother=value' } }, 'repository_dispatch', sha), /approved docs revision/);
});

test('exact tag verification rejects advanced or mismatched source and prereleases while supporting legacy stable tags', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'revisit-release-source-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: 'pipe' }).trim();
  git('init', '--quiet', '--initial-branch=main');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '--allow-empty', '-m', 'release');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'tag', '-a', 'v3.0.0', '-m', 'release');
  assert.equal(verifyStudyRelease(root, 'v3.0.0'), 'v3.0.0');
  assert.equal(verifyStudyRelease(root), 'v3.0.0');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '--allow-empty', '-m', 'main advances');
  assert.throws(() => verifyStudyRelease(root, 'v3.0.0'), /checkout must match/);
  assert.throws(() => verifyStudyRelease(root));
  git('tag', 'v3.1.0-beta.1');
  assert.throws(() => verifyStudyRelease(root), /stable release_tag/);
  assert.throws(() => verifyStudyRelease(root, 'v3.1.0-beta.1'), /stable release_tag/);
  git('tag', '-d', 'v3.1.0-beta.1');
  git('tag', 'v3.1.0');
  // Legacy has no release identity and can only report the later tag.
  assert.equal(verifyStudyRelease(root), 'v3.1.0');
  git('checkout', '--quiet', '--detach', 'refs/tags/v3.0.0');
  assert.equal(verifyStudyRelease(root, 'v3.0.0'), 'v3.0.0');
});
