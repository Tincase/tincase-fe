import { aliasToken } from './alias';
import { style } from './styles';
import { color } from './theme-color';
import { Token } from './types';
import { mapToCssReferences } from './utils';

export * from './types';

export const token: Token = {
  ...aliasToken,
  color,
  style,
};

export const tokenCssReferences = mapToCssReferences({
  token,
  prefix: 'tincase',
});

export * from './types';
export * from './utils';
