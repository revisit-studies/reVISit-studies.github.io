import { cp, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export async function syncStudyDocs(studyDir, docsDir) {
  const directories = [['docs', 'typedoc'], ['docsLibraries', 'libraries']];
  // Validate both inputs before replacing either generated directory.
  for (const [source] of directories) {
    if (!(await readdir(path.join(studyDir, source))).length) {
      throw new Error(`Generated study directory is empty: ${source}`);
    }
  }
  for (const [source, destination] of directories) {
    const target = path.join(docsDir, destination);
    await rm(target, { recursive: true, force: true });
    await cp(path.join(studyDir, source), target, { recursive: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [studyDir, docsDir] = process.argv.slice(2);
  if (!studyDir || !docsDir) throw new Error('Usage: node scripts/syncStudyDocs.mjs <study-dir> <docs-dir>');
  await syncStudyDocs(studyDir, docsDir);
}
