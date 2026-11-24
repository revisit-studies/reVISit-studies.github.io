import { execFileSync } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Builds regenerate these from the study repository, so Next follows study dev.
const generatedDirectories = ['typedoc/', 'libraries/'];

// Lists hand-written docs/current files whose changes since base are missing from docs/next.
// Next can hold unreleased content, so a change only has to be present there, not identical.
export async function findDocsDrift(siteDir, base, head = 'HEAD') {
  const git = (args, options = {}) => execFileSync('git', args, { cwd: siteDir, encoding: 'utf8', maxBuffer: 512 * 1024 * 1024, ...options });
  const blob = file => {
    try {
      return git(['rev-parse', '--verify', '--quiet', `${head}:${file}`], { stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    } catch {
      return undefined;
    }
  };
  const range = `${base}...${head}`;
  const changed = git(['diff', '--name-only', '--no-renames', range, '--', 'docs/current'])
    .split('\n')
    .filter(Boolean)
    .map(file => file.slice('docs/current/'.length))
    .filter(file => !generatedDirectories.some(directory => file.startsWith(directory)));
  if (!changed.length) return [];

  // Check against head's tree in a scratch index so the working tree does not matter.
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'revisit-docs-drift-'));
  try {
    const env = { ...process.env, GIT_INDEX_FILE: path.join(scratch, 'index') };
    git(['read-tree', head], { env });
    return changed.filter(file => {
      // Identical files, including images, and deletions made in both trees need no patch.
      if (blob(`docs/current/${file}`) === blob(`docs/next/${file}`)) return false;
      const patch = git(['diff', '--binary', '--no-renames', range, '--', `docs/current/${file}`]);
      try {
        // The change is in Next if undoing it there applies cleanly. One line of context
        // lets this match where Next has unreleased content next to the change.
        git(['apply', '--cached', '--check', '--reverse', '-C1', '-p3', '--directory=docs/next'], { env, input: patch, stdio: ['pipe', 'ignore', 'ignore'] });
        return false;
      } catch {
        return true;
      }
    });
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [base, head = 'HEAD'] = process.argv.slice(2);
  if (!base) throw new Error('Usage: node scripts/checkDocsDrift.mjs <base-ref> [head-ref]');
  const drifted = await findDocsDrift(process.cwd(), base, head);
  if (drifted.length) {
    console.error('These docs/current changes are missing from docs/next. Apply the same change to both, because releases replace current with next:');
    for (const file of drifted) console.error(`  docs/current/${file} -> docs/next/${file}`);
    process.exit(1);
  }
  console.log('Every docs/current change is also in docs/next.');
}
