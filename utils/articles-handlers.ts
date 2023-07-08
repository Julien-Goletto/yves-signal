import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ArticleSchema } from '@/types';

const folder = 'articles/';

/**
 * @returns array of all articles slugs in article folder
 */
export const getArticleSlugList = () => {
  const files = fs.readdirSync(folder);
  const articlesList = files.filter((file) => file.endsWith('.mdx'));
  return articlesList.map((article) => article.replace('.mdx', ''));
};

/**
 * @param slug
 * @returns the one and only complete article with the given slug
 */
export const getArticleDataBySlug = async(slug: string) => {
    const articlePath = `${folder}${slug}.mdx`;
    const rawArticleContent = fs.readFileSync(articlePath, 'utf8');
      const {frontmatter, content} = await compileMDX({source: rawArticleContent, options: {parseFrontmatter: true}});
      const article = ArticleSchema.parse({meta: {...frontmatter, slug}, content});
      return article;
  };

/**
 * @param slug
 * @returns the meta from the one and only article with the given slug
 */
export const getArticleMetaBySlug = async(slug: string) => {
    const articlePath = `${folder}${slug}.mdx`;
    const rawArticleContent = fs.readFileSync(articlePath, 'utf8');
      const {frontmatter} = await compileMDX({source: rawArticleContent, options: {parseFrontmatter: true}});
      const meta = ArticleSchema.shape.meta.parse({...frontmatter, slug});
      return meta;
  };
