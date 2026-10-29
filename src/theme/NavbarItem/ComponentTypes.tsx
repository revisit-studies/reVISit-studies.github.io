import React from 'react';
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import { useVersionedLink } from '@site/src/components/VersionedLink';

function VersionedNavbarItem(props: React.ComponentProps<typeof DefaultNavbarItem>) {
  const href = useVersionedLink(props.href);
  return <DefaultNavbarItem {...props} href={href} />;
}

export default { ...ComponentTypes, 'custom-versionedLink': VersionedNavbarItem };
