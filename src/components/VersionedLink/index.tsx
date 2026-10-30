import React from 'react';
import Link from '@docusaurus/Link';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import { resolveVersionedLink } from '@site/src/utils/versionedLinks.mjs';

export function useVersionedLink(href?: string): string | undefined {
  const active = useActivePluginAndVersion();
  const version = active?.activeVersion;
  return href === undefined ? undefined : resolveVersionedLink(href, version && {
    ...version, name: active.activePlugin.pluginId === 'next' ? 'next' : version.name,
  });
}

export default function VersionedLink(props: React.ComponentProps<typeof Link>) {
  const href = useVersionedLink(props.href);
  return <Link {...props} href={href} />;
}
