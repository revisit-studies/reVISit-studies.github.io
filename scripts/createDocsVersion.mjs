import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { syncStudyDocs } from './syncStudyDocs.mjs';

const git = (directory, ...args) => execFileSync('git', args, { cwd: directory, encoding: 'utf8' }).trim();

export async function createDocsVersion({ siteDir, tag, docsRef, studyCommit, studyDir }) {
  if (!/^v\d+\.\d+\.\d+$/.test(tag)) throw new Error('A stable release tag such as v3.0.0 is required.');
  if (!/^[a-f0-9]{40}$/.test(studyCommit)) throw new Error('An exact study commit is required.');
  const docsCommit = git(siteDir, 'rev-parse', '--verify', '--end-of-options', `${docsRef}^{commit}`);
  const source = {
    docsCommit,
    docsTree: git(siteDir, 'rev-parse', `${docsCommit}:docs`),
    sidebarBlob: git(siteDir, 'rev-parse', `${docsCommit}:sidebars.ts`),
    studyCommit,
  };
  const versions = JSON.parse(await readFile(path.join(siteDir, 'versions.json'), 'utf8'));
  const manifestPath = path.join(siteDir, 'docs-releases.json');
  const releases = JSON.parse(await readFile(manifestPath, 'utf8'));
  if (versions.includes(tag)) {
    const existing = releases[tag];
    if (!existing || ['docsTree', 'sidebarBlob', 'studyCommit'].some(key => existing[key] !== source[key])) {
      throw new Error(`${tag} already exists with different sources; published snapshots cannot be replaced.`);
    }
    console.log(`${tag} already exists with the same sources.`);
    return false;
  }
  const numbers = value => value.slice(1).split('.').map(Number);
  const previous = numbers(versions[0]);
  const next = numbers(tag);
  const difference = next.map((value, index) => value - previous[index]).find(value => value !== 0);
  if (difference === undefined || difference < 0) throw new Error(`${tag} must be newer than ${versions[0]}.`);

  const staging = await mkdtemp(path.join(os.tmpdir(), 'revisit-docs-release-'));
  try {
    // Snapshot only the selected docs revision; keep the working Next docs intact.
    const archive = execFileSync('git', ['archive', docsCommit, 'docs', 'sidebars.ts'], {
      cwd: siteDir, maxBuffer: 128 * 1024 * 1024,
    });
    execFileSync('tar', ['-xf', '-', '-C', staging], { input: archive });
    if (studyDir) await syncStudyDocs(studyDir, path.join(staging, 'docs'));
    await symlink(path.join(siteDir, 'node_modules'), path.join(staging, 'node_modules'), 'dir');
    await writeFile(path.join(staging, 'package.json'), '{"name":"docs-release-snapshot","private":true}\n');
    await writeFile(path.join(staging, 'docusaurus.config.js'), `module.exports = {
      title: 'Release snapshot', url: 'https://revisit.dev', baseUrl: '/',
      presets: [['classic', {docs: {sidebarPath: './sidebars.ts'}, blog: false}]],
    };\n`);
    execFileSync(process.execPath, [path.join(siteDir, 'node_modules/@docusaurus/core/bin/docusaurus.mjs'),
      'docs:version', tag], { cwd: staging, stdio: 'inherit' });
    await cp(path.join(staging, `versioned_docs/version-${tag}`), path.join(siteDir, `versioned_docs/version-${tag}`), { recursive: true });
    await cp(path.join(staging, `versioned_sidebars/version-${tag}-sidebars.json`), path.join(siteDir, `versioned_sidebars/version-${tag}-sidebars.json`));
    await writeFile(path.join(siteDir, 'versions.json'), `${JSON.stringify([tag, ...versions], null, 2)}\n`);
    releases[tag] = source;
    await writeFile(manifestPath, `${JSON.stringify(releases, null, 2)}\n`);
    return true;
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [tag, docsRef, studyDir] = process.argv.slice(2);
  if (!tag || !docsRef || !studyDir) throw new Error('Usage: node scripts/createDocsVersion.mjs <release-tag> <docs-ref> <study-dir>');
  const studyCommit = git(studyDir, 'rev-parse', '--verify', '--end-of-options', `refs/tags/${tag}^{commit}`);
  if (git(studyDir, 'rev-parse', 'HEAD') !== studyCommit) throw new Error('Study checkout must match the release tag before generating references.');
  await createDocsVersion({ siteDir: process.cwd(), tag, docsRef, studyCommit, studyDir });
}
