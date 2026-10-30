import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readFile, rm, stat, symlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { syncStudyDocs } from './syncStudyDocs.mjs';
import { createDocsVersion } from './createDocsVersion.mjs';

// Production HTML can omit quotes around attribute values.
const hrefs = html => [...html.matchAll(/href=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
  .map(match => match[1] ?? match[2] ?? match[3]);

test('study references survive generation, import, and full stable/Next website builds', async t => {
  assert.ok(process.env.STUDY_DOCS_DIR, 'Set STUDY_DOCS_DIR to a study checkout with dependencies and the HTML API reference.');
  const siteDir = process.cwd();
  const studyDir = path.resolve(process.env.STUDY_DOCS_DIR);
  const staging = await mkdtemp(path.join(os.tmpdir(), 'revisit-reference-integration-'));
  t.after(() => rm(staging, { recursive: true, force: true }));
  execFileSync(process.execPath, ['scripts/generateStudyDocs.mjs', studyDir], { stdio: 'inherit' });
  for (const entry of ['docs', 'versioned_docs', 'versioned_sidebars', 'src', 'static', 'blog', 'scripts',
    'package.json', 'docusaurus.config.ts', 'sidebars.ts', 'versions.json', 'docs-releases.json', 'tsconfig.json']) {
    await cp(path.join(siteDir, entry), path.join(staging, entry), { recursive: true });
  }
  await symlink(path.join(siteDir, 'node_modules'), path.join(staging, 'node_modules'), 'dir');
  await syncStudyDocs(studyDir, path.join(staging, 'docs'));
  // Docusaurus reads Git history for last-update metadata, including old versions.
  const git = (...args) => execFileSync('git', args, { cwd: staging, stdio: 'pipe' });
  git('init', '--quiet');
  git('add', 'docs', 'sidebars.ts', 'versioned_docs', 'blog', 'src');
  git('-c', 'user.name=Integration test', '-c', 'user.email=test@example.com',
    'commit', '--quiet', '-m', 'Reference build fixture');
  const overview = await readFile(path.join(staging, 'docs/typedoc/index.md'), 'utf8');
  assert.match(overview, /### Factors/);
  assert.match(overview, /documents\/Revisit\.postAnswers\.md/);

  for (const baseUrl of ['/', '/PR999/']) {
    execFileSync('yarn', ['build'], { cwd: staging, stdio: 'inherit', env: { ...process.env, BASE_URL: baseUrl } });
    const route = 'docs/next/typedoc/';
    const html = async page => readFile(path.join(staging, 'build', route, page, 'index.html'), 'utf8');
    const landing = await html('');
    const answerPage = await html('documents/Revisit.postAnswers');
    const answerUrl = `${baseUrl}${route}documents/Revisit.postAnswers/`;
    assert.ok(hrefs(landing).includes(answerUrl), 'landing page links to HTML API');
    assert.match(answerPage, /HTML Component API/);
    assert.match(answerPage, /completeRegistration/);
    assert.ok([...answerPage.matchAll(/<a\b[^>]*>/g)].some(([tag]) => tag.includes('menu__link')
      && hrefs(tag).includes(answerUrl)), 'HTML API has a sidebar entry');
    const expression = await html('type-aliases/FactorExpression');
    const operation = await html('interfaces/FactorCombinationExpression');
    assert.match(operation, /Cartesian product/);
    // Check reference links in rendered output, including the sidebar and legacy flat paths.
    for (const content of [landing, answerPage, expression, operation]) {
      for (const href of hrefs(content)) {
        if (!href.startsWith(`${baseUrl}${route}`)) continue;
        const target = decodeURIComponent(href.split(/[?#]/)[0].slice(baseUrl.length));
        assert.ok((await stat(path.join(staging, 'build', target, 'index.html'))).isFile(), href);
      }
    }
    const stable = await readFile(path.join(staging, 'build/docs/typedoc/index.html'), 'utf8');
    assert.ok(!stable.includes(`${baseUrl}${route}documents/Revisit.postAnswers/`), 'stable sidebar remains frozen');
    if (baseUrl !== '/') assert.match(answerPage, /noindex, nofollow/);
  }

  // Exercise #292's promotion path locally without publishing or changing this checkout.
  await createDocsVersion({
    siteDir: staging,
    tag: 'v99.0.0',
    docsRef: git('rev-parse', 'HEAD').toString().trim(),
    studyCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: studyDir, encoding: 'utf8' }).trim(),
    studyDir,
  });
  execFileSync('yarn', ['build'], { cwd: staging, stdio: 'inherit', env: { ...process.env, BASE_URL: '/' } });
  for (const version of ['', 'next/']) {
    const route = `docs/${version}typedoc/`;
    const page = await readFile(path.join(staging, 'build', route, 'documents/Revisit.postAnswers/index.html'), 'utf8');
    assert.ok([...page.matchAll(/<a\b[^>]*>/g)].some(([tag]) => tag.includes('menu__link')
      && hrefs(tag).includes(`/${route}documents/Revisit.postAnswers/`)), 'promoted stable and Next retain the HTML API sidebar');
    assert.ok((await stat(path.join(staging, 'build', route, 'interfaces/FactorCombinationExpression/index.html'))).isFile());
  }
});
