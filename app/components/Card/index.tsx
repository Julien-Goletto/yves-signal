import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import type { Article } from '@/types';

type CardProperties = Article["meta"];

/**
 * @param
 * @param
 * @returns Polymorphic card component
 */
export const Card = ({description, publishingDate, tags, title, slug, }: CardProperties) => {
  return (
    <Link href={`/articles/${slug}`}>
      <article className='border border-white backdrop-blur-xl p-2.5 rounded-2xl flex flex-col gap-2'>
        <Image
          src='/assets/articles/placeholder/banner.avif'
          alt={`${slug} banner`}
          width={1800} 
          height={900}
          className='rounded-xl w-full aspect-[2.66] object-cover mb-3.5'
          />
          <ul className='flex gap-1.5 text-white/90'>
            {
              tags.map((tag) => (
                <li key={tag} className='border px-2.5 py-0.5 w-fit text-sm rounded-xl'>{tag}</li>
              ))
            }
          </ul>
        <h3 className=''>{title}</h3>
        <p>{description}</p>
        <p className='secondary'>{`Publié le ${publishingDate}`}</p>
      </article>
    </Link>
  );
};
