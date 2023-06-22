import React from 'react';
import { getArticleDataBySlug } from '@/utils';

const ArticlePage = async ({params}: {params: {slug: string}}) => {
  const {meta, content} = await getArticleDataBySlug(params.slug);
  return(
    <section>
      <h1>{params.slug}</h1>
      <article>
          {content}
      </article>
    </section>
  );
};

export default ArticlePage;