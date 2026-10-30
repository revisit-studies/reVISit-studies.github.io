import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { appendFile, cp, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

// Exercise the real configuration, theme, CLI and generated HTML in a disposable
// repository. Never promote or publish the developer's working checkout.
const siteDir = process.cwd();
const sandbox = await mkdtemp(path.join(os.tmpdir(), 'revisit-promotion-integration-'));
const run = (command, args, cwd = sandbox) => execFileSync(command, args, { cwd, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024 });
const git = (...args) => run('git', args).trim();
const read = file => readFile(path.join(sandbox, file), 'utf8');
const tag = 'v999.0.0';
try {
  await cp(siteDir, sandbox, { recursive: true, filter: source => {
    const relative = path.relative(siteDir, source);
    return !['.git', 'node_modules', '.docusaurus', 'build', '.study-docs'].includes(relative.split(path.sep)[0]);
  } });
  await symlink(path.join(siteDir, 'node_modules'), path.join(sandbox, 'node_modules'), 'dir');
  const previous = JSON.parse(await read('current-release.json')).version;
  await appendFile(path.join(sandbox, 'docs/next/introduction.md'), '\n\nNEXT_RELEASE_TEST_MARKER\n');
  await writeFile(path.join(sandbox, 'docs/next/future-feature.md'), '# Future feature\n\nNEXT_ONLY_PAGE_TEST_MARKER\n');
  git('init', '--quiet', '--initial-branch=main');
  git('add', 'docs/next', 'sidebars.next.ts');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '-m', 'Approve Next for promotion');
  const approved = git('rev-parse', 'HEAD');
  git('update-ref', 'refs/remotes/origin/release/docs', approved);
  assert.equal(run(process.execPath, ['scripts/createDocsVersion.mjs', 'resolve', 'release/docs']).trim(), approved);
  assert.throws(() => run(process.execPath, ['scripts/createDocsVersion.mjs', 'resolve', 'missing-branch']));

  const cli = path.join(siteDir, 'node_modules/@docusaurus/core/bin/docusaurus.mjs');
  function build(prefix = '/') {
    execFileSync(process.execPath, [cli, 'build'], { cwd: sandbox,
      env: { ...process.env, BASE_URL: prefix }, stdio: 'pipe', maxBuffer: 32 * 1024 * 1024 });
  }
  const page = route => read(`build/${route}/index.html`);
  async function verifyLinks(prefix = '') {
    const stable = await page('docs/designing-studies/vega-stimulus');
    const next = await page('docs/next/designing-studies/vega-stimulus');
    assert(stable.includes('https://revisit.dev/study/demo-vega/'));
    assert(stable.includes('https://github.com/revisit-studies/study/tree/main/public/demo-vega'));
    assert(next.includes('https://revisit.dev/study/dev/demo-vega/'));
    assert(next.includes('https://github.com/revisit-studies/study/tree/dev/public/demo-vega'));
    assert(stable.includes('docs-default-current'));
    assert(next.includes('docs-next-current'));
    for (const html of [stable, next]) {
      assert(html.includes(`${prefix}/docs/designing-studies/vega-stimulus/`));
      assert(html.includes(`${prefix}/docs/next/designing-studies/vega-stimulus/`));
    }
    for (const route of ['analysis/data-analysis', 'designing-studies/study-browser']) {
      assert((await page(`docs/${route}`)).length > 0);
    }
  }
  build();
  await verifyLinks();
  assert(!(await page('docs/introduction')).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page('docs/next/introduction')).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page('docs/next/future-feature')).includes('/docs/introduction/'));
  await assert.rejects(page('docs/future-feature'), { code: 'ENOENT' });
  console.log('PASS: both sources, existing stable pages, combined navigation and smart links before promotion');

  // A local tagged app fixture supplies generated references, exercising the
  // same exact-tag guard and copying boundary as the release workflow.
  const study = path.join(sandbox, '.study-docs');
  await mkdir(study);
  await cp(path.join(sandbox, 'docs/next/typedoc'), path.join(study, 'docs'), { recursive: true });
  await cp(path.join(sandbox, 'docs/next/libraries'), path.join(study, 'docsLibraries'), { recursive: true });
  await appendFile(path.join(study, 'docs/index.md'), '\n\nTAGGED_API_TEST_MARKER\n');
  run('git', ['init', '--quiet'], study);
  run('git', ['add', '.'], study);
  run('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '-m', 'Tagged generated reference fixture'], study);
  run('git', ['tag', tag], study);
  const nextBefore = await read('docs/next/introduction.md');
  run('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '--allow-empty', '-m', 'Different app revision'], study);
  assert.throws(() => run(process.execPath, ['scripts/createDocsVersion.mjs', tag, approved, study]));
  assert.equal(JSON.parse(await read('current-release.json')).version, previous);
  run('git', ['checkout', '--quiet', '--detach', tag], study);
  run(process.execPath, ['scripts/createDocsVersion.mjs', tag, approved, study]);
  git('diff', '--exit-code', '--', 'docs/next', 'sidebars.next.ts');
  assert.equal(await read('docs/next/introduction.md'), nextBefore);
  assert.equal(JSON.parse(await read('current-release.json')).version, tag);
  assert.equal(JSON.parse(await read('versions.json'))[0], previous);
  assert((await read('docs/current/typedoc/index.md')).includes('TAGGED_API_TEST_MARKER'));
  assert(!(await read('docs/next/typedoc/index.md')).includes('TAGGED_API_TEST_MARKER'));
  run(process.execPath, ['scripts/createDocsVersion.mjs', tag, approved, study]);
  build();
  await verifyLinks();
  assert((await page('docs/introduction')).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page('docs/introduction')).includes(tag));
  assert((await page('docs/future-feature')).includes('NEXT_ONLY_PAGE_TEST_MARKER'));
  assert(!(await page(`docs/${previous}/introduction`)).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page(`docs/${previous}/analysis/data-analysis`)).length > 0);
  console.log('PASS: CLI promotion, release references, unchanged Next, retry, rebuilt current and archived release');
  build('/PR999/');
  await verifyLinks('/PR999');
  assert((await page('docs/next/introduction')).includes('noindex, nofollow'));
  console.log('PASS: promoted site also builds with PR-prefixed navigation');
} catch (error) {
  if (error.stdout) console.error(error.stdout.toString());
  if (error.stderr) console.error(error.stderr.toString());
  throw error;
} finally {
  await rm(sandbox, { recursive: true, force: true });
}
