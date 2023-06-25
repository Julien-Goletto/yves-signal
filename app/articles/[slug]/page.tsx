import React from 'react';
import { getArticleDataBySlug } from '@/utils';

const ArticlePage = async ({params}: {params: {slug: string}}) => {
  const {meta, content} = await getArticleDataBySlug(params.slug);
  return(
    <main>
      <h1>{params.slug}</h1>
    <section>
      <article>
          {content}
      </article>
    </section>
    </main>
  );
};

export default ArticlePage;