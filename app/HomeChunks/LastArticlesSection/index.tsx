import React from 'react';

import { getArticleSlugList, getArticleMetaBySlug } from '@/utils';
import { Card } from '@components/index';

export const LastArticlesSection = async () => {
  const articlesSlugList = await getArticleSlugList();
  const articlesListWithMeta = await Promise.all(articlesSlugList.map(async(slug) => (getArticleMetaBySlug(slug))));

  return (
    <section id="last-articles">
      {
        articlesListWithMeta.map(({title, slug}) => (
          <div key={title}>
            <Card title={title} slug={slug}/>
          </div>
        ))
      }
    </section>
  );
};