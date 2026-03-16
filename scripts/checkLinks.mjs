import { LinkChecker, LinkState } from 'linkinator';

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';

const linksToSkip = [
  'revisit.dev',
  'localhost:8080',
  'wpi.edu',
  'petra.isenberg.cc',
  'doi.org',
  'acm.org',
  'cs.utah.edu',
  'github\\.com/.+/edit/.+', // "Edit this page" links
];

const checker = new LinkChecker();

// Deduplicate: track URLs that have already been reported
const seenUrls = new Set();
const okLinks = [];
const skippedLinks = [];
const brokenLinks = [];

checker.on('link', (result) => {
  if (seenUrls.has(result.url)) {
    return;
  }
  seenUrls.add(result.url);

  if (result.state === LinkState.BROKEN) {
    brokenLinks.push(result);
    // Print broken links immediately so progress is visible
    console.log(`${BOLD}${RED}[${result.status ?? 'ERR'}] ${result.url}${RESET}`);
  } else if (result.state === LinkState.SKIPPED) {
    skippedLinks.push(result);
    console.log(`[SKIP] ${result.url}`);
  } else {
    okLinks.push(result);
    console.log(`${GREEN}[${result.status}] ${result.url}${RESET}`);
  }
});

const results = await checker.check({
  path: './build',
  recurse: true,
  linksToSkip,
});

// Print a summary of broken links at the end for easy identification
if (brokenLinks.length > 0) {
  console.log(`\n${BOLD}${RED}=== BROKEN LINKS SUMMARY ===${RESET}`);
  for (const link of brokenLinks) {
    const status = link.status ?? 'ERR';
    const parent = link.parent ? ` (found on: ${link.parent})` : '';
    console.log(`${BOLD}${RED}  [${status}] ${link.url}${YELLOW}${parent}${RESET}`);
  }
  console.log(`\n${BOLD}${RED}Total broken links: ${brokenLinks.length}${RESET}`);
} else {
  console.log(`\n${BOLD}${GREEN}All links are valid!${RESET}`);
}

const totalUnique = okLinks.length + skippedLinks.length + brokenLinks.length;
const totalReported = results.links.length;
console.log(`Checked ${totalUnique} unique links (${totalReported} total, ${totalReported - totalUnique} duplicates skipped).`);

if (!results.passed) {
  process.exit(1);
}
