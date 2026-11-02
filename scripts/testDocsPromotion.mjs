import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { appendFile, cp, mkdir, mkdtemp, readFile, rm, stat, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { syncStudyDocs } from './syncStudyDocs.mjs';

// Exercise the real configuration, theme, CLI and generated HTML in a disposable
// repository. Never promote or publish the developer's working checkout.
const siteDir = process.cwd();
const sandbox = await mkdtemp(path.join(os.tmpdir(), 'revisit-promotion-integration-'));
const run = (command, args, cwd = sandbox) => execFileSync(command, args, { cwd, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024 });
const git = (...args) => run('git', args).trim();
const read = file => readFile(path.join(sandbox, file), 'utf8');
const tag = 'v999.0.0';
const withStudyReferences = process.argv.includes('--study-references');
const withReleaseWorkflow = process.argv.includes('--study-release-workflow');
const hrefs = html => [...html.matchAll(/href=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
  .map(match => match[1] ?? match[2] ?? match[3]);
try {
  await cp(siteDir, sandbox, { recursive: true, filter: source => {
    const relative = path.relative(siteDir, source);
    return !['.git', 'node_modules', '.docusaurus', 'build', '.study-docs'].includes(relative.split(path.sep)[0]);
  } });
  await symlink(path.join(siteDir, 'node_modules'), path.join(sandbox, 'node_modules'), 'dir');
  run(process.execPath, ['scripts/generateAdoptionData.mjs']);
  if (withStudyReferences) {
    assert(process.env.STUDY_DOCS_DIR && process.env.STABLE_STUDY_DOCS_DIR,
      'Set STUDY_DOCS_DIR and STABLE_STUDY_DOCS_DIR to study dev and main checkouts with dependencies.');
    for (const [source, destination] of [[process.env.STUDY_DOCS_DIR, 'next'], [process.env.STABLE_STUDY_DOCS_DIR, 'current']]) {
      const checkout = path.resolve(source);
      run(process.execPath, [path.join(siteDir, 'scripts/generateStudyDocs.mjs'), checkout]);
      await syncStudyDocs(checkout, path.join(sandbox, 'docs', destination));
      console.log(`Generated ${destination} references from study ${run('git', ['rev-parse', 'HEAD'], checkout).trim()}`);
    }
    const overview = await read('docs/next/typedoc/index.md');
    assert.match(overview, /### Factors/);
    assert.match(overview, /documents\/Revisit\.postAnswers\.md/);
  }
  const hasHtmlApi = directory => existsSync(path.join(sandbox, directory, 'typedoc/documents/Revisit.postAnswers.md'));
  const nextHasHtmlApi = hasHtmlApi('docs/next');
  const currentHasHtmlApi = hasHtmlApi('docs/current');
  const previous = JSON.parse(await read('current-release.json')).version;
  await appendFile(path.join(sandbox, 'docs/current/introduction.md'), '\n\nCURRENT_RELEASE_TEST_MARKER\n');
  await appendFile(path.join(sandbox, 'docs/next/introduction.md'), '\n\nNEXT_RELEASE_TEST_MARKER\n');
  await writeFile(path.join(sandbox, 'docs/next/future-feature.md'), '# Future feature\n\nNEXT_ONLY_PAGE_TEST_MARKER\n');
  git('init', '--quiet', '--initial-branch=main');
  git('add', 'docs/next', 'sidebars.next.ts');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '-m', 'Approve Next for promotion');
  const approved = git('rev-parse', 'HEAD');
  git('update-ref', 'refs/remotes/origin/release/docs', approved);
  assert.equal(run(process.execPath, ['scripts/createDocsVersion.mjs', 'resolve', 'release/docs']).trim(), approved);
  assert.throws(() => run(process.execPath, ['scripts/createDocsVersion.mjs', 'resolve', 'missing-branch']));

  const study = path.join(sandbox, '.study-docs');
  await mkdir(study);
  await cp(path.join(sandbox, 'docs/next/typedoc'), path.join(study, 'docs'), { recursive: true });
  await cp(path.join(sandbox, 'docs/next/libraries'), path.join(study, 'docsLibraries'), { recursive: true });
  await appendFile(path.join(study, 'docs/index.md'), '\n\nTAGGED_API_TEST_MARKER\n');
  run('git', ['init', '--quiet', '--initial-branch=main'], study);
  run('git', ['add', '.'], study);
  run('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '-m', 'Generated reference fixture'], study);

  if (withReleaseWorkflow) {
    assert(process.env.STUDY_RELEASE_WORKFLOW, 'Set STUDY_RELEASE_WORKFLOW to study/.github/workflows/release.yaml (with study dependencies installed).');
    const workflowPath = path.resolve(process.env.STUDY_RELEASE_WORKFLOW);
    // Use the producer's existing YAML dependency. Execute its real shell steps;
    // replace only the network dispatch boundary with local payload delivery.
    const { parse } = createRequire(workflowPath)('yaml');
    const workflow = parse(await readFile(workflowPath, 'utf8'));
    const remote = path.join(sandbox, 'study-origin.git');
    run('git', ['init', '--bare', '--quiet', remote]);
    run('git', ['remote', 'add', 'origin', remote], study);
    run('git', ['push', '--quiet', '--set-upstream', 'origin', 'main'], study);
    for (const directory of ['src', 'public']) await mkdir(path.join(study, directory));
    await writeFile(path.join(study, 'src/schema.ts'), 'https://raw.githubusercontent.com/revisit-studies/study/dev/src/parser/types.ts\n');
    await writeFile(path.join(study, 'public/config.json'), 'https://github.com/revisit-studies/study/tree/v1.0.0/public/example\n');
    let payload;
    for (const step of workflow.jobs.release.steps) {
      if (step.run) {
        execFileSync('bash', ['-e', '-o', 'pipefail', '-c', step.run], { cwd: study,
          env: { ...process.env, RELEASE_TAG: tag }, stdio: 'pipe' });
      } else if (step.with?.repository === 'revisit-studies/reVISit-studies.github.io') {
        assert.equal(step.with['event-type'], 'study_repo_publish');
        // These checks happen at the dispatch boundary, proving push precedes delivery.
        assert.equal(run('git', ['rev-parse', `refs/tags/${tag}^{commit}`], remote).trim(), run('git', ['rev-parse', 'HEAD'], study).trim());
        assert.equal(run('git', ['rev-parse', 'main'], remote).trim(), run('git', ['rev-parse', 'HEAD'], study).trim());
        payload = JSON.parse(step.with['client-payload']?.replaceAll('${{ env.RELEASE_TAG }}', tag));
      }
    }
    assert.deepEqual(payload, { release_tag: tag });
    assert((await readFile(path.join(study, 'src/schema.ts'), 'utf8')).includes(`/study/${tag}/src/`));
    assert((await readFile(path.join(study, 'public/config.json'), 'utf8')).includes(`/tree/${tag}/public/`));

    const eventPath = path.join(sandbox, 'release-event.json');
    await writeFile(eventPath, JSON.stringify({ action: 'study_repo_publish', client_payload: payload }));
    const request = Object.fromEntries(execFileSync(process.execPath, ['scripts/resolveStudyRelease.mjs', 'request'], {
      cwd: sandbox, encoding: 'utf8', env: { ...process.env, GITHUB_EVENT_PATH: eventPath, GITHUB_EVENT_NAME: 'repository_dispatch', GITHUB_SHA: approved },
    }).trim().split('\n').map(line => {
      const equals = line.indexOf('=');
      return [line.slice(0, equals), line.slice(equals + 1)];
    }));
    assert.equal(request.docs_ref, approved);
    // Both repositories advance after approval/delivery. Their new content must
    // not replace the event's release source or approved docs tree.
    await appendFile(path.join(sandbox, 'docs/next/introduction.md'), '\nUNAPPROVED_DOCS_TEST_MARKER\n');
    git('add', 'docs/next');
    git('-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '-m', 'Docs after event');
    run('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '--allow-empty', '-m', 'Study after event'], study);
    run('git', ['push', '--quiet', 'origin', 'main'], study);
    run('git', ['branch', tag], study);
    assert.throws(() => run(process.execPath, ['scripts/resolveStudyRelease.mjs', 'verify', study, request.release_tag]));
    assert.throws(() => run(process.execPath, ['scripts/resolveStudyRelease.mjs', 'verify', study]));
    run('git', ['checkout', '--quiet', '--detach', request.study_ref], study);
    assert.equal(run(process.execPath, ['scripts/resolveStudyRelease.mjs', 'verify', study, request.release_tag]).trim(), `tag=${tag}`);
    console.log('PASS: actual study release commands push tag before payload delivery; explicit release survives source and docs advance');
  } else {
    run('git', ['tag', tag], study);
  }

  const cli = path.join(siteDir, 'node_modules/@docusaurus/core/bin/docusaurus.mjs');
  function build(prefix = '/') {
    execFileSync(process.execPath, [cli, 'build'], { cwd: sandbox,
      env: { ...process.env, BASE_URL: prefix }, stdio: 'pipe', maxBuffer: 32 * 1024 * 1024 });
  }
  const page = route => read(`build/${route}/index.html`);
  async function verifyReferences(route, prefix, expected) {
    const overview = await page(`${route}typedoc`);
    const answerUrl = `${prefix}/${route}typedoc/documents/Revisit.postAnswers/`;
    const sidebarLinks = html => [...html.matchAll(/<a\b[^>]*>/g)]
      .filter(([anchor]) => anchor.includes('menu__link')).flatMap(([anchor]) => hrefs(anchor));
    if (!expected) {
      assert(!sidebarLinks(overview).includes(answerUrl), 'older references have no HTML API sidebar entry');
      return;
    }
    assert(hrefs(overview).includes(answerUrl), 'curated overview links to HTML API');
    const answers = await page(`${route}typedoc/documents/Revisit.postAnswers`);
    assert(sidebarLinks(answers).includes(answerUrl), `HTML API sidebar follows ${route}`);
    assert.match(answers, /completeRegistration/);
    const expression = await page(`${route}typedoc/type-aliases/FactorExpression`);
    const operation = await page(`${route}typedoc/interfaces/FactorCombinationExpression`);
    assert.match(operation, /Cartesian product/);
    for (const html of [overview, answers, expression, operation]) {
      for (const href of hrefs(html)) {
        if (!href.startsWith(`${prefix}/${route}typedoc/`)) continue;
        const target = decodeURIComponent(href.split(/[?#]/)[0].slice(prefix.length + 1));
        assert((await stat(path.join(sandbox, 'build', target, 'index.html'))).isFile(), href);
      }
    }
  }
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
  await verifyReferences('docs/next/', '', nextHasHtmlApi);
  await verifyReferences('docs/', '', currentHasHtmlApi);
  assert(!(await page('docs/introduction')).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page('docs/next/introduction')).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page('docs/next/future-feature')).includes('/docs/introduction/'));
  await assert.rejects(page('docs/future-feature'), { code: 'ENOENT' });
  console.log('PASS: both sources, existing stable pages, combined navigation and smart links before promotion');

  // A local tagged app fixture supplies generated references, exercising the
  // same exact-tag guard and copying boundary as the release workflow.
  const nextBefore = await read('docs/next/introduction.md');
  run('git', ['-c', 'user.name=Test', '-c', 'user.email=test@example.com', 'commit', '--quiet', '--allow-empty', '-m', 'Different app revision'], study);
  assert.throws(() => run(process.execPath, ['scripts/createDocsVersion.mjs', tag, approved, study]));
  assert.equal(JSON.parse(await read('current-release.json')).version, previous);
  run('git', ['checkout', '--quiet', '--detach', `refs/tags/${tag}`], study);
  run(process.execPath, ['scripts/createDocsVersion.mjs', tag, approved, study]);
  git('diff', '--exit-code', '--', 'docs/next', 'sidebars.next.ts');
  assert.equal(await read('docs/next/introduction.md'), nextBefore);
  assert.equal(JSON.parse(await read('current-release.json')).version, tag);
  assert.equal(JSON.parse(await read('versions.json'))[0], previous);
  assert((await read('docs/current/typedoc/index.md')).includes('TAGGED_API_TEST_MARKER'));
  assert(!(await read('docs/current/introduction.md')).includes('UNAPPROVED_DOCS_TEST_MARKER'));
  assert(!(await read('docs/next/typedoc/index.md')).includes('TAGGED_API_TEST_MARKER'));
  run(process.execPath, ['scripts/createDocsVersion.mjs', tag, approved, study]);
  build();
  await verifyLinks();
  await verifyReferences('docs/', '', nextHasHtmlApi);
  await verifyReferences(`docs/${previous}/`, '', currentHasHtmlApi);
  assert((await page('docs/introduction')).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page('docs/introduction')).includes(tag));
  assert((await page('docs/future-feature')).includes('NEXT_ONLY_PAGE_TEST_MARKER'));
  assert(!(await page(`docs/${previous}/introduction`)).includes('NEXT_RELEASE_TEST_MARKER'));
  assert((await page(`docs/${previous}/introduction`)).includes('CURRENT_RELEASE_TEST_MARKER'));
  assert((await page(`docs/${previous}/analysis/data-analysis`)).length > 0);
  console.log('PASS: CLI promotion, release references, unchanged Next, retry, rebuilt current and archived release');
  // Archive a release that itself contains the new reference sidebar. This is a
  // different path from archiving the original release's static sidebar.
  const secondTag = 'v999.0.1';
  run('git', ['tag', secondTag], study);
  run(process.execPath, ['scripts/createDocsVersion.mjs', secondTag, approved, study]);
  assert.equal(JSON.parse(await read('current-release.json')).version, secondTag);
  build();
  await verifyReferences('docs/', '', nextHasHtmlApi);
  await verifyReferences(`docs/${tag}/`, '', nextHasHtmlApi);
  await verifyReferences('docs/next/', '', nextHasHtmlApi);
  console.log('PASS: second promotion preserves HTML API navigation in archived references');
  build('/PR999/');
  await verifyLinks('/PR999');
  for (const route of ['docs/', 'docs/next/', `docs/${tag}/`]) {
    await verifyReferences(route, '/PR999', nextHasHtmlApi);
  }
  assert((await page('docs/next/introduction')).includes('noindex, nofollow'));
  console.log('PASS: promoted site also builds with PR-prefixed navigation');
  if (withReleaseWorkflow) {
    const { parse } = createRequire(path.resolve(process.env.STUDY_RELEASE_WORKFLOW))('yaml');
    const receiver = parse(await read('.github/workflows/new_version.yml'));
    const commit = receiver.jobs.create_version.steps.find(step => step.name === 'Commit and push release snapshot');
    const remote = path.join(sandbox, 'docs-origin.git');
    git('init', '--bare', '--quiet', remote);
    git('remote', 'add', 'origin', remote);
    git('push', '--quiet', '--set-upstream', 'origin', 'main');
    await appendFile(path.join(sandbox, 'docs/next/introduction.md'), '\nVALIDATION_ONLY_NEXT_TEST_MARKER\n');
    const publish = () => execFileSync('bash', ['-e', '-o', 'pipefail', '-c', commit.run], {
      cwd: sandbox, env: { ...process.env, RELEASE_TAG: secondTag }, stdio: 'pipe',
    });
    publish();
    assert.equal(run('git', ['rev-parse', 'main'], remote).trim(), git('rev-parse', 'HEAD'));
    assert(!git('show', 'HEAD:docs/next/introduction.md').includes('VALIDATION_ONLY_NEXT_TEST_MARKER'));
    assert(git('diff', '--name-only').includes('docs/next/introduction.md'));
    assert.equal(JSON.parse(git('show', 'HEAD:current-release.json')).version, secondTag);
    const published = git('rev-parse', 'HEAD');
    publish();
    assert.equal(git('rev-parse', 'HEAD'), published);
    console.log('PASS: actual receiver commit/push publishes stable metadata, excludes validation-only Next edits, and retries without a commit');
  }
} catch (error) {
  if (error.stdout) console.error(error.stdout.toString());
  if (error.stderr) console.error(error.stderr.toString());
  throw error;
} finally {
  await rm(sandbox, { recursive: true, force: true });
}
