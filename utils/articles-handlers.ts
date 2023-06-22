import {z} from 'zod';
import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';

const folder = 'articles/';

const articleSchema = z.object({
  meta: z.object(
    {
      slug: z.string(),
      title: z.string(),
      description: z.string(),
      publishingDate: z.string(),
    }),
  content: z.custom<ReactNode>(),
});

export const getArticleSlugList = () => {
  const files = fs.readdirSync(folder);
  const articlesList = files.filter((file) => file.endsWith('.mdx'));
  return articlesList.map((article) => article.replace('.mdx', ''));
};

/**
 * Returns all written articles, extracting slugs from filenames.
 * Is synchronous because it's only called at build time.
 * Avoids to return other unexpected types of files
 * @param slug
 * @param onlyMeta when false returns all mdx content, else only the metadata
 * @returns 
 */
// const getArticleDataBySlug = async(slug: string, onlyMeta = false) => {
export const getArticleDataBySlug = async(slug: string) => {
    const articlePath = `${folder}${slug}.mdx`;
    const rawArticleContent = fs.readFileSync(articlePath, 'utf8');
      const {frontmatter, content} = await compileMDX({source: rawArticleContent, options: {parseFrontmatter: true}});
      const article = articleSchema.parse({meta: {...frontmatter, slug}, content});
      return article;
  };

export const getArticleMetaBySlug = async(slug: string) => {
    const articlePath = `${folder}${slug}.mdx`;
    const rawArticleContent = fs.readFileSync(articlePath, 'utf8');
      const {frontmatter} = await compileMDX({source: rawArticleContent, options: {parseFrontmatter: true}});
      const meta = articleSchema.shape.meta.parse({...frontmatter, slug});
      return meta;
  };
