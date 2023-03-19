import { aliasToken } from './alias';
import { color } from './theme-color';

export * from './types';

export const token = {
  ...aliasToken,
  color,
};

export type Token = typeof token;

export * from './types';
export * from './utils';
