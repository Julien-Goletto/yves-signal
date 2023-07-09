import { z } from'zod';

// Inspired by https://create.t3.gg/
export const serverSchema = z.object({
  TOTO: z.string(),
  DATABASE_URL: z.string(),
});

export const clientSchema = z.object({
  NEXT_PUBLIC_TATA: z.string(),
  NEXT_PUBLIC_INTERNAL_API_URL: z.string(),
});

type ServerSchema = {
  [k in keyof z.infer<typeof serverSchema>]:
  | z.infer<typeof serverSchema>[k]
  | undefined;
};

type ClientSchema = {
  [k in keyof z.infer<typeof clientSchema>]:
  | z.infer<typeof clientSchema>[k]
  | undefined;
};


export const serverEnvironment: ServerSchema = {
  TOTO: process.env.TOTO,
  DATABASE_URL: process.env.DATABASE_URL,
};
export const clientEnvironment: ClientSchema = {
  NEXT_PUBLIC_TATA: process.env.NEXT_PUBLIC_TATA,
  NEXT_PUBLIC_INTERNAL_API_URL: process.env.NEXT_PUBLIC_INTERNAL_API_URL,
};