import React from 'react';
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import { useLocation } from '@docusaurus/router';
import { useActivePluginAndVersion, useActiveDocContext, useAllDocsData, useDocsPreferredVersion } from '@docusaurus/plugin-content-docs/client';
import { useVersionedLink } from '@site/src/components/VersionedLink';
import { getVersionTarget } from '@site/src/utils/versionedLinks.mjs';

function VersionedNavbarItem(props: React.ComponentProps<typeof DefaultNavbarItem>) {
  const href = useVersionedLink(props.href);
  return <DefaultNavbarItem {...props} href={href} />;
}

function DocsSidebarItem(props: React.ComponentProps<typeof DocSidebarNavbarItem>) {
  const active = useActivePluginAndVersion();
  return <DocSidebarNavbarItem {...props} docsPluginId={active?.activePlugin.pluginId ?? 'default'} />;
}

function DocsVersionsItem(props: React.ComponentProps<typeof DropdownNavbarItem>) {
  const data = useAllDocsData();
  const active = useActivePluginAndVersion();
  const { activeDoc } = useActiveDocContext(active?.activePlugin.pluginId ?? 'default');
  const { search, hash } = useLocation();
  const { preferredVersion, savePreferredVersionName } = useDocsPreferredVersion('default');
  const versions = [...data.next.versions, ...data.default.versions];
  const displayed = active?.activeVersion ?? preferredVersion ?? data.default.versions.find(version => version.isLast);
  return <DropdownNavbarItem {...props} label={props.mobile ? 'Versions' : displayed.label}
    items={versions.map(version => ({
      label: version.label,
      to: getVersionTarget(version, activeDoc?.id).path + search + hash,
      isActive: () => version === active?.activeVersion,
      onClick: () => {
        if (data.default.versions.includes(version)) savePreferredVersionName(version.name);
      },
    }))} />;
}

export default { ...ComponentTypes, 'custom-versionedLink': VersionedNavbarItem,
  'custom-docSidebar': DocsSidebarItem, 'custom-docsVersions': DocsVersionsItem };
