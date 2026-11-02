import { execFileSync } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const studyDir = path.resolve(process.argv[2]);
const { config, error } = ts.readConfigFile(path.join(studyDir, 'typedoc.json'), ts.sys.readFile);
if (error) throw new Error(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
if (!Array.isArray(config.entryPoints) || !config.entryPoints.every(entry => typeof entry === 'string')) {
  throw new Error('Expected study TypeDoc entryPoints to be an array of paths.');
}
// Check the exported API and its imports. The app's broad tsconfig also includes
// unrelated demo code and tests, which must not block documentation generation.
const args = ['buildDocs', '--sanitizeComments', '--name', 'Reference Documentation'];
if (!config.tsconfig) {
  await writeFile(path.join(studyDir, 'tsconfig.docs.json'), `${JSON.stringify({
    extends: './tsconfig.json', include: [...config.entryPoints, 'src/**/*.d.ts'],
  }, null, 2)}\n`);
  args.push('--tsconfig', 'tsconfig.docs.json');
}
// Older tags have stale handwritten links. Newer study configs that opt into
// project documents also provide their curated reference landing page.
if (!config.projectDocuments?.length) args.push('--readme', 'none');
execFileSync('yarn', args, { cwd: studyDir, stdio: 'inherit' });
execFileSync('yarn', ['node', 'libraryDocGenerator.cjs'], { cwd: studyDir, stdio: 'inherit' });
