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
await writeFile(path.join(studyDir, 'tsconfig.docs.json'), `${JSON.stringify({
  extends: './tsconfig.json', include: [...config.entryPoints, 'src/*.d.ts'],
}, null, 2)}\n`);
// Generate the overview from the exports too: the app's handwritten TypeDoc
// readme can still refer to interfaces that have become type aliases.
execFileSync('yarn', ['buildDocs', '--tsconfig', 'tsconfig.docs.json', '--sanitizeComments',
  '--readme', 'none', '--name', 'Reference Documentation'], { cwd: studyDir, stdio: 'inherit' });
execFileSync('yarn', ['node', 'libraryDocGenerator.cjs'], { cwd: studyDir, stdio: 'inherit' });
