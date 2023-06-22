import React from 'react';
import fs from 'node:fs';
import Link from 'next/link';

/**
 * Returns all written articles, extracting slugs from filenames.
 * Is synchronous because it's only called at build time.
 * Avoids to return other unexpected types of files
 * @returns 
 */
const getArticles = () => {
  const folder = 'articles/';
  const files = fs.readdirSync(folder);
  const mdxArticles = files.filter((file) => file.endsWith('.mdx'));
  const articles = mdxArticles.map((file) => file.replace(".mdx", ""));
  return articles;
};

export default async function Home() {
  const postMetadata = getArticles();
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug}>
      <Link href={`/articles/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return (
    <main>
      <section>{postPreviews}</section>
    </main>
  );
}
