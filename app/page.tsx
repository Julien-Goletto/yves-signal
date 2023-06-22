import React from 'react';
import Link from 'next/link';

import { getArticleSlugList, getArticleMetaBySlug } from '@/utils';

export default async function Home() {
  const articlesSlugList = await getArticleSlugList();
  const articlesListWithMeta = await Promise.all(articlesSlugList.map(async(slug) => (getArticleMetaBySlug(slug))));
  const articleCards = articlesListWithMeta.map(({title, slug}) => (
    <div key={title}>
      <Link href={`/articles/${slug}`}>
        <h2>{title}</h2>
      </Link>
    </div>
  ));

  return (
    <main>
      <section>{articleCards}</section>
    </main>
  );
}
