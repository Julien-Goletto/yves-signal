import type { ZodFormattedError } from 'zod';

export const formatErrors = (errors: ZodFormattedError<Map<string, string>>) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if ('_errors' in value) return `${name}: ${value._errors.join(', ')}\n`;
    })
    .filter(Boolean);