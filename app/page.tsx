import React from 'react';
import Link from 'next/link';

import { getArticleSlugList, getArticleMetaBySlug } from '@/utils';
import { AnimatedBlob } from './components/Backgrounds/animated-blob';

const Home = async() => {
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
    <>
      <section id="hero" className='container mx-auto'>
        <AnimatedBlob />
      </section>
      <section id="last-articles">{articleCards}</section>
    </>
  );
};

export default Home;
