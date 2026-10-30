import React from 'react';
import OriginalA from '@theme-original/MDXComponents/A';
import type { Props } from '@theme/MDXComponents/A';
import { useVersionedLink } from '@site/src/components/VersionedLink';

export default function A(props: Props) {
  const href = useVersionedLink(props.href);
  return <OriginalA {...props} href={href} />;
}
