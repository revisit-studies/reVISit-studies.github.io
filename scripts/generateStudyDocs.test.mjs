import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { chmod, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

for (const modern of [false, true]) {
  test(`reference generation ${modern ? 'preserves the study-owned project configuration' : 'supports older release tags'}`, async t => {
    const root = await mkdtemp(path.join(os.tmpdir(), 'revisit-generator-test-'));
    t.after(() => rm(root, { recursive: true, force: true }));
    const bin = path.join(root, 'bin');
    await mkdir(bin);
    const log = path.join(root, 'calls.jsonl');
    const yarn = path.join(bin, 'yarn');
    await writeFile(yarn, `#!${process.execPath}\nrequire('node:fs').appendFileSync(${JSON.stringify(log)}, JSON.stringify(process.argv.slice(2)) + '\\n');\n`);
    await chmod(yarn, 0o755);
    const config = { entryPoints: ['src/parser/types.ts'], readme: 'typedocReadMe.md' };
    if (modern) Object.assign(config, { tsconfig: 'tsconfig.typedoc.json', projectDocuments: ['typedocDocuments/*.md'] });
    await writeFile(path.join(root, 'typedoc.json'), JSON.stringify(config));
    execFileSync(process.execPath, ['scripts/generateStudyDocs.mjs', root], {
      env: { ...process.env, PATH: `${bin}${path.delimiter}${process.env.PATH}` },
    });
    const [typedoc, libraries] = (await readFile(log, 'utf8')).trim().split('\n').map(line => JSON.parse(line));
    assert.deepEqual(libraries, ['node', 'libraryDocGenerator.cjs']);
    assert.ok(typedoc.includes('--sanitizeComments'));
    if (modern) {
      assert.ok(!typedoc.includes('--readme'));
      assert.ok(!typedoc.includes('--tsconfig'));
      await assert.rejects(readFile(path.join(root, 'tsconfig.docs.json')), { code: 'ENOENT' });
    } else {
      assert.equal(typedoc[typedoc.indexOf('--readme') + 1], 'none');
      assert.equal(typedoc[typedoc.indexOf('--tsconfig') + 1], 'tsconfig.docs.json');
      assert.deepEqual(JSON.parse(await readFile(path.join(root, 'tsconfig.docs.json'), 'utf8')).include,
        ['src/parser/types.ts', 'src/**/*.d.ts']);
    }
  });
}
