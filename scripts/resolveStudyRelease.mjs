import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const stableTag = /^v\d+\.\d+\.\d+$/;
const git = (directory, ...args) => execFileSync('git', args, { cwd: directory, encoding: 'utf8', stdio: 'pipe' }).trim();

export function releaseRequest(event, eventName, docsSha) {
  const input = eventName === 'workflow_dispatch' ? event.inputs : event.client_payload;
  const tag = input?.release_tag || '';
  const docsRef = input?.docs_ref || docsSha;
  if (tag && !stableTag.test(tag)) throw new Error('An exact stable release_tag such as v3.0.0 is required.');
  if (eventName === 'workflow_dispatch' && !tag) throw new Error('Manual promotion requires release_tag.');
  if (!docsRef || /[\r\n]/.test(docsRef)) throw new Error('An approved docs revision is required.');
  // Qualify tags so a branch with the same name cannot supply release sources.
  return { study_ref: tag ? `refs/tags/${tag}` : 'main', release_tag: tag, docs_ref: docsRef };
}

export function verifyStudyRelease(studyDir, requestedTag) {
  // Legacy dispatches carry no identity. Only accept the exact checked-out tag;
  // they cannot recover the intended release if main has already advanced.
  const tag = requestedTag || git(studyDir, 'describe', '--exact-match', '--tags', 'HEAD');
  if (!stableTag.test(tag)) throw new Error('An exact stable release_tag such as v3.0.0 is required.');
  const commit = git(studyDir, 'rev-parse', '--verify', '--end-of-options', `refs/tags/${tag}^{commit}`);
  if (git(studyDir, 'rev-parse', 'HEAD') !== commit) throw new Error('Study checkout must match the release tag before generating references.');
  return tag;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [command, studyDir, tag] = process.argv.slice(2);
  if (command === 'request') {
    const event = JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'));
    for (const [key, value] of Object.entries(releaseRequest(event, process.env.GITHUB_EVENT_NAME, process.env.GITHUB_SHA))) {
      console.log(`${key}=${value}`);
    }
  } else if (command === 'verify') {
    console.log(`tag=${verifyStudyRelease(studyDir, tag)}`);
  } else {
    throw new Error('Usage: resolveStudyRelease.mjs request | verify <study-dir> [release-tag]');
  }
}
