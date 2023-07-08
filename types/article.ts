import {z} from 'zod';
import type { ReactNode } from 'react';

export const ArticleSchema = z.object({
  meta: z.object(
    {
      description: z.string(),
      publishingDate: z.string(),
      slug: z.string(),
      tags: z.array(z.string()),
      title: z.string(),
    }),
  content: z.custom<ReactNode>(),
});

export type Article = z.infer<typeof ArticleSchema>;