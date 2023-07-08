import React from 'react';
import Link from 'next/link';

type CardProperties = {
  title: string;
  slug: string;
}

/**
 * @param
 * @param
 * @returns Polymorphic card component
 */
export const Card = ({title, slug}: CardProperties) => {
  return (
    <article>
      <Link href={`/articles/${slug}`}>
        <h2>{title}</h2>
      </Link>
    </article>
  );
};
