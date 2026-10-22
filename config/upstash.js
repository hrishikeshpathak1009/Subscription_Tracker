import { Client } from '@upstash/workflow';
import { QSTASH_DEV } from './env.js';

export const workflowClient = new Client({
  devMode: QSTASH_DEV === 'true',
});