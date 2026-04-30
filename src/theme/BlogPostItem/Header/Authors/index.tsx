import React, { type ReactNode } from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/BlogPostItem/Header/Authors';

export default function BlogPostItemHeaderAuthors({ className }: Props): ReactNode {
  const {
    metadata: { authors },
    assets,
  } = useBlogPost();

  if (authors.length === 0) {
    return null;
  }

  return (
    <div className={className} style={{ marginTop: '-0.75rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
      {authors.map((author, idx) => {
        const imageURL = assets.authorsImageUrls[idx] ?? author.imageURL;
        const link =
          author.page?.permalink ||
          author.url ||
          (author.email ? `mailto:${author.email}` : undefined);

        return (
          <React.Fragment key={idx}>
            {idx > 0 && ', '}
            {link ? (
              <Link href={link}>{author.name}</Link>
            ) : (
              <span>{author.name}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
