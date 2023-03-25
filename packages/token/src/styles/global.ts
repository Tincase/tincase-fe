import { css } from '@emotion/react';
import { GlobalStyle, Token } from '../types';

export const global = (theme: Token): GlobalStyle => css`
  body {
    margin: 0;
  }
`;
