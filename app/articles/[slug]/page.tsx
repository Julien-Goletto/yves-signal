import React from 'react';
import { getArticleDataBySlug, handleFetch } from '@/utils';
import { ArticleSchema } from '@/types';

const ArticlePage = async ({params}: {params: {slug: string}}) => {
  const article = await getArticleDataBySlug(params.slug);
  
  // To delete later
  const {meta, content} = await handleFetch(`articles/${params.slug}`, ArticleSchema);
  console.log(content);

  return(
    <main>
      <h1>{params.slug}</h1>
    <section>
      <article>
          {article.content}
      </article>
    </section>
    </main>
  );
};

export default ArticlePage;