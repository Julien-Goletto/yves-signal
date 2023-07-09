import {z} from 'zod';

export const handleFetch = async <T = unknown>(
  url: string, 
  zodSchema?: z.ZodSchema<T>,
  target : 'internal' | 'external' = 'internal',
  method : 'GET' | 'POST' | 'PUT' | 'UPDATE' = 'GET', 
  data?: unknown, 
  token?: string) => {
  const options = {
    method,
    data,
    headers: {
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      // 'Accept': 'application/json',
    }
  }
  return fetch(target !== 'internal' ? url : `${process.env.NEXT_PUBLIC_INTERNAL_API_PREFIX}${url}`, options)
    .then((res) => res.json())
    .then((data) => {
      if (zodSchema === undefined) return data;
      return zodSchema.parse(data);
    })
    .catch((err) => console.error(err.message));
};