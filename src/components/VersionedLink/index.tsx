import React from 'react';
import Link from '@docusaurus/Link';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import { resolveVersionedLink } from '@site/src/utils/versionedLinks.mjs';

export function useVersionedLink(href?: string): string | undefined {
  const version = useActiveVersion(undefined);
  return href === undefined ? undefined : resolveVersionedLink(href, version);
}

export default function VersionedLink(props: React.ComponentProps<typeof Link>) {
  const href = useVersionedLink(props.href);
  return <Link {...props} href={href} />;
}
