import type { GlobalProps, SerializedStyles } from '@emotion/react';

import type { Token } from './token.types';

export type GlobalStyle = GlobalProps['styles'] & {};

export type CustomGlobalStyle = string | SerializedStyles;

export type Style = {
  global(customStyle?: CustomGlobalStyle): (theme: Token) => GlobalStyle;
};
