/* eslint-disable no-console */
import { serverEnvironment, serverSchema } from './schema';
import { formatErrors } from './format-errors';

const _serverEnvironment = serverSchema.safeParse(serverEnvironment);

if (!_serverEnvironment.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(_serverEnvironment.error.format())
  );
  throw new Error('Invalid environment variables');
}

for (const key of Object.keys(_serverEnvironment.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key);

    throw new Error('You are exposing a server-side env-variable');
  }
}

export const validatedServerEnvironment = _serverEnvironment.data;
