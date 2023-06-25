import React from 'react';
import Link from 'next/link';

import { getArticleSlugList, getArticleMetaBySlug } from '@/utils';

const CreationsPage = async () => {
  const articlesSlugList = await getArticleSlugList();
  const articlesListWithMeta = await Promise.all(articlesSlugList.map(async(slug) => (getArticleMetaBySlug(slug))));
  const articleCards = articlesListWithMeta.map(({title, slug}) => (
    <div key={title}>
      <Link href={`/articles/${slug}`}>
        <h2>{title}</h2>
      </Link>
    </div>
  ));
  return(
    <main>
        <h1>Mes Articles ✍️</h1>
        <section>{articleCards}</section>
    </main>
  );
};

export default CreationsPage;