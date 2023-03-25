import { GlobalProps } from '@emotion/react';

import { Token } from './token.types';

export type GlobalStyle = GlobalProps['styles'] & {};

export type Style = {
  global(theme: Token): GlobalStyle;
};

interface A {
  prop1: string;
  prop2: number;
}
