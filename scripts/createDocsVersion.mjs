import { execFileSync, spawnSync } from 'node:child_process';
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { syncStudyDocs } from './syncStudyDocs.mjs';
import { verifyStudyRelease } from './resolveStudyRelease.mjs';

const git = (directory, ...args) => execFileSync('git', args, { cwd: directory, encoding: 'utf8' }).trim();

export function resolveDocsRef(siteDir, ref) {
  if (!ref) throw new Error('An approved docs revision is required.');
  const remote = spawnSync('git', ['rev-parse', '--verify', '--end-of-options', `refs/remotes/origin/${ref}^{commit}`], { cwd: siteDir, encoding: 'utf8' });
  return remote.status === 0 ? remote.stdout.trim()
    : git(siteDir, 'rev-parse', '--verify', '--end-of-options', `${ref}^{commit}`);
}

export async function createDocsVersion({ siteDir, tag, docsRef, studyCommit, studyDir }) {
  if (!/^v\d+\.\d+\.\d+$/.test(tag)) throw new Error('A stable release tag such as v3.0.0 is required.');
  if (!/^[a-f0-9]{40}$/.test(studyCommit)) throw new Error('An exact study commit is required.');
  const docsCommit = resolveDocsRef(siteDir, docsRef);
  const source = {
    version: tag, docsCommit,
    nextTree: git(siteDir, 'rev-parse', `${docsCommit}:docs/next`),
    sidebarBlob: git(siteDir, 'rev-parse', `${docsCommit}:sidebars.next.ts`),
    studyCommit,
  };
  const statePath = path.join(siteDir, 'current-release.json');
  const current = JSON.parse(await readFile(statePath, 'utf8'));
  const versions = JSON.parse(await readFile(path.join(siteDir, 'versions.json'), 'utf8'));
  if (current.version === tag) {
    if (current.studyCommit !== studyCommit || (current.nextTree &&
      (current.nextTree !== source.nextTree || current.sidebarBlob !== source.sidebarBlob))) {
      throw new Error(`${tag} already exists with different sources; promotion cannot replace the same release.`);
    }
    console.log(`${tag} is already current.`);
    return false;
  }
  const numbers = value => value.slice(1).split('.').map(Number);
  const previous = numbers(current.version);
  const difference = numbers(tag).map((value, index) => value - previous[index]).find(value => value !== 0);
  if (difference === undefined || difference < 0 || versions.includes(tag)) {
    throw new Error(`${tag} must be newer than ${current.version}.`);
  }
  if (versions.includes(current.version)) throw new Error('Current release is already archived.');

  const staging = await mkdtemp(path.join(os.tmpdir(), 'revisit-docs-release-'));
  try {
    // Archive the maintained current files, including corrections since release.
    await cp(path.join(siteDir, 'docs/current'), path.join(staging, 'docs'), { recursive: true });
    await cp(path.join(siteDir, 'sidebars.current.ts'), path.join(staging, 'sidebars.ts'));
    await symlink(path.join(siteDir, 'node_modules'), path.join(staging, 'node_modules'), 'dir');
    await writeFile(path.join(staging, 'package.json'), '{"name":"docs-release-snapshot","private":true}\n');
    await writeFile(path.join(staging, 'docusaurus.config.js'), `module.exports = {
      title: 'Release snapshot', url: 'https://revisit.dev', baseUrl: '/',
      presets: [['classic', {docs: {sidebarPath: './sidebars.ts'}, blog: false}]],
    };\n`);
    execFileSync(process.execPath, [path.join(siteDir, 'node_modules/@docusaurus/core/bin/docusaurus.mjs'),
      'docs:version', current.version], { cwd: staging, stdio: 'inherit' });

    const archive = execFileSync('git', ['archive', docsCommit, 'docs/next', 'sidebars.next.ts'], {
      cwd: siteDir, maxBuffer: 128 * 1024 * 1024,
    });
    execFileSync('tar', ['-xf', '-', '-C', staging], { input: archive });
    if (studyDir) await syncStudyDocs(studyDir, path.join(staging, 'docs/next'));

    await cp(path.join(staging, `versioned_docs/version-${current.version}`), path.join(siteDir, `versioned_docs/version-${current.version}`), { recursive: true });
    await cp(path.join(staging, `versioned_sidebars/version-${current.version}-sidebars.json`), path.join(siteDir, `versioned_sidebars/version-${current.version}-sidebars.json`));
    await rm(path.join(siteDir, 'docs/current'), { recursive: true });
    await cp(path.join(staging, 'docs/next'), path.join(siteDir, 'docs/current'), { recursive: true });
    await cp(path.join(staging, 'sidebars.next.ts'), path.join(siteDir, 'sidebars.current.ts'));
    await writeFile(path.join(siteDir, 'versions.json'), `${JSON.stringify([current.version, ...versions], null, 2)}\n`);
    await writeFile(statePath, `${JSON.stringify(source, null, 2)}\n`);
    return true;
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [tag, docsRef, studyDir] = process.argv.slice(2);
  if (tag === 'resolve') {
    console.log(resolveDocsRef(process.cwd(), docsRef));
  } else {
    if (!tag || !docsRef || !studyDir) throw new Error('Usage: node scripts/createDocsVersion.mjs <release-tag> <docs-ref> <study-dir>');
    verifyStudyRelease(studyDir, tag);
    const studyCommit = git(studyDir, 'rev-parse', 'HEAD');
    await createDocsVersion({ siteDir: process.cwd(), tag, docsRef, studyCommit, studyDir });
  }
}
