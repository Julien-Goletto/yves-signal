import React from 'react';
import dynamic from 'next/dynamic';

// const getMDXArticleComponent = (slug: string) => {
//   const folder = 'articles/';
//   const articlePath = `${folder}${slug}.mdx`;
//   const ArticleComponent = dynamic(import(`@/${articlePath}`));
//   return ArticleComponent;
// };

const ArticlePage = async ({params}: {params: {slug: string}}) => {
  const articlePath = `articles/modes-rendus-frontend.mdx`;
  // const MDXArticleComponent = dynamic(async () => import(`@/articles/modes-rendus-frontend.mdx`));
  // const MDXArticleComponent = dynamic(async () => import(`articles/modes-rendus-frontend.mdx`));
  const MDXArticleComponent = dynamic(async () => import(`${articlePath}`));
  // const MDXArticleComponent = getMDXArticleComponent(params.slug);
  return(
    <section>
      <h1>{params.slug}</h1>
      <article>
          <MDXArticleComponent/>
      </article>
    </section>
  );
};

export default ArticlePage;