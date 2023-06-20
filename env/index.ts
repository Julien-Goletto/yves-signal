import { validatedServerEnvironment } from './server';
import { validatedClientEnvironment } from './client';

export const environment = { ...validatedServerEnvironment, ...validatedClientEnvironment };
