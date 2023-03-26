import { css } from '@emotion/react';

import { CustomGlobalStyle, GlobalStyle, Token } from '../types';

export const global =
  (customGlobalStyle?: CustomGlobalStyle) =>
  (theme: Token): GlobalStyle =>
    css`
      html,
      body {
        height: 100%;
      }

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

      ${customGlobalStyle}
    `;
