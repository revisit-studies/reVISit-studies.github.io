import { LinkChecker, LinkState } from "linkinator";

const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";

const linksToSkip = [
  "revisit.dev",
  "localhost:8080",
  "wpi.edu",
  "petra.isenberg.cc",
  "doi.org",
  "acm.org",
  "cs.utah.edu",
  "github\\.com/.+/edit/.+", // "Edit this page" links
  "slack.com", // Slack invites

  "mika-long.github.io/vis-decode/", // slow revisit load
  "vdl.sci.utah.edu/Upset-alttxt-study/", // slow revisit load
  "ojs.aaai.org",
  "console.cloud.google.com",
  "https://www.google.com/recaptcha/admin/create",
];

const checker = new LinkChecker();

// Deduplicate: track URLs that have already been reported
const seenUrls = new Set();
const okLinks = [];
const skippedLinks = [];
const brokenLinks = [];
const warningLinks = [];

checker.on("link", (result) => {
  if (seenUrls.has(result.url)) {
    return;
  }
  seenUrls.add(result.url);

  if (result.state === LinkState.BROKEN) {
    brokenLinks.push(result);
    // Print broken links immediately so progress is visible
    console.log(
      `${BOLD}${RED}[${result.status ?? "ERR"}] ${result.url}${RESET}`,
    );
  } else if (result.state === LinkState.SKIPPED) {
    skippedLinks.push(result);
    console.log(`[SKIP] ${result.url}`);
  } else if (result.status === 403) {
    warningLinks.push(result);
    console.log(`${YELLOW}[WARN 403] ${result.url} (access denied to checker)${RESET}`);
  } else {
    okLinks.push(result);
    console.log(`${GREEN}[${result.status}] ${result.url}${RESET}`);
  }
});

const results = await checker.check({
  path: "./build",
  recurse: true,
  linksToSkip,
  retryErrors: true,
  retryErrorsCount: 2,
  // A 403 can reflect a site's policy for automated requests, not a missing page.
  statusCodes: { "403": "warn" },
});

// Print a summary of broken links at the end for easy identification
if (brokenLinks.length > 0) {
  console.log(`\n${BOLD}${RED}=== BROKEN LINKS SUMMARY ===${RESET}`);
  for (const link of brokenLinks) {
    const status = link.status ?? "ERR";
    const parent = link.parent ? ` (found on: ${link.parent})` : "";
    console.log(
      `${BOLD}${RED}  [${status}] ${link.url}${YELLOW}${parent}${RESET}`,
    );
  }
  console.log(
    `\n${BOLD}${RED}Total broken links: ${brokenLinks.length}${RESET}`,
  );
} else {
  console.log(`\n${BOLD}${GREEN}No broken links found.${RESET}`);
}

if (warningLinks.length > 0) {
  console.log(`${YELLOW}${warningLinks.length} access-denied links need manual review.${RESET}`);
}

const totalUnique = okLinks.length + skippedLinks.length + brokenLinks.length + warningLinks.length;
const totalReported = results.links.length;
console.log(
  `Checked ${totalUnique} unique links (${totalReported} total, ${totalReported - totalUnique} duplicates skipped).`,
);

if (!results.passed) {
  process.exit(1);
}
