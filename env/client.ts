/* eslint-disable no-console */
import { clientEnvironment, clientSchema } from './schema';
import { formatErrors } from './format-errors';

const _clientEnvironment = clientSchema.safeParse(clientEnvironment);

if (!_clientEnvironment.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(_clientEnvironment.error.format())
  );
  throw new Error('Invalid environment variables');
}

for (const key of Object.keys(_clientEnvironment.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.warn(
      `❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`
    );

    throw new Error('Invalid public environment variable name');
  }
}

export const validatedClientEnvironment = _clientEnvironment.data;