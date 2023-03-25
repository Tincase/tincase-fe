import { css } from '@emotion/react';
import { GlobalStyle, Token } from '../types';

export const global = (theme: Token): GlobalStyle => css`
  body {
    margin: 0;
  }

  a {
    text-decoration: none;

    &,
    &:active,
    &:focus,
    &:hover,
    &:visited {
      color: ${theme.color.font.default};
    }
  }
`;
