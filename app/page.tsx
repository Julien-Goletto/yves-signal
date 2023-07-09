import React from 'react';

import { handleFetch } from '@/utils';
import { SlugsListSchema } from '@/types/article';
import { AxisSection, HeroSection, LastArticlesSection } from '@/app/chunks';

const Home = async() => {

  // To delete later
  const myArticles = await handleFetch("articles/slugs", SlugsListSchema);
  console.log(myArticles);
  
  return (
    <>
      <HeroSection />
      <AxisSection />
      <LastArticlesSection />
    </>
  );
};

export default Home;
