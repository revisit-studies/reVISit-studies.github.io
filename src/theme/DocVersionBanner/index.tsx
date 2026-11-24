import React from 'react';
import OriginalBanner from '@theme-original/DocVersionBanner';
import Link from '@docusaurus/Link';
import { useActivePluginAndVersion, useActiveDocContext, useDocsVersion, useLatestVersion } from '@docusaurus/plugin-content-docs/client';
import { getVersionTarget } from '@site/src/utils/versionedLinks.mjs';

export default function DocVersionBanner(props: React.ComponentProps<typeof OriginalBanner>) {
  const active = useActivePluginAndVersion();
  const { activeDoc } = useActiveDocContext(active?.activePlugin.pluginId ?? 'default');
  const stable = useLatestVersion('default');
  const version = useDocsVersion();
  if (!version.banner) return null;

  const banner = active?.activePlugin.pluginId === 'next' ? (
    <div className={`alert alert--warning margin-bottom--md ${props.className ?? ''}`} role="alert">
    This is unreleased documentation for <b>Next</b>. See the{' '}
    <Link to={getVersionTarget(stable, activeDoc?.id).path}>current release ({stable.label})</Link>.
    </div>
  ) : <OriginalBanner {...props} />;

  return <div className="doc-version-banner-sticky">{banner}</div>;
}
