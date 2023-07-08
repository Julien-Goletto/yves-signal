import React from 'react';

import { getArticleSlugList, getArticleMetaBySlug } from '@/utils';
import { Card } from '@components/index';

export const LastArticlesSection = async () => {
  const articlesSlugList = await getArticleSlugList();
  const articlesMetaList = await Promise.all(articlesSlugList.map(async(slug) => (getArticleMetaBySlug(slug))));

  return (
    <section id="last-articles" className='custom-container'>
      <h2 className='w-full'>Les derniers articles ✍️</h2>
      {
        articlesMetaList.map((articleMeta) => (
            <Card {...articleMeta} key={articleMeta.slug}/>
        ))
      }
    </section>
  );
};