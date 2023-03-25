import type { ThemeColor, Token } from '@tincase/token';

import { css } from '@emotion/react';
import { getCss } from '@tincase/token';

import type { ButtonColor, ButtonVariant } from '../Button.types';

interface GetButtonVaraintCSSProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  token: Token;
}

// prettier-ignore
export function getButtonVaraintCss({
  variant,
  color = 'primary',
  token
}: GetButtonVaraintCSSProps) {
  switch (variant) {
    case 'outline':       return getOutlineButtonCss(color, token);
    case 'light-solid':   return getLightSolidButtonCss(color, token);
    case 'link':          return getLinkButtonCss(color, token);
    case 'text':          return getTextButtonCss(token);
    default:              return getSolidButtonCss(color, token);
  }
}

// prettier-ignore
const getSolidButtonCss = (color: ButtonColor, token: Token) =>
  `
    background-color:   ${token.color[color]};
    color:              ${token.color.font[color]};
  `;

// prettier-ignore
const getOutlineButtonCss = (color: ButtonColor, token: Token) =>
  css`
    background: transparent;
    color:        ${token.color[color]};
    ${getCss({ token, border: { type: 'level1', color: token.color[color] } })}

    &:hover {
      background-color:   ${token.color[color]};
      color:              ${token.color.font[color]};
    }
  `;

const getLightSolidButtonCss = (color: ButtonColor, token: Token) =>
  `
    color: ${token.color[color]};
  `;

// prettier-ignore
const getLinkButtonCss = (color: ButtonColor, token: Token) =>
  `
    background-color:   transparent;
    color:              ${token.color[color]};

    &:hover {
      text-decoration:  underline;
    }
  `;

const getTextButtonCss = (token: Token) =>
  `
    background: transparent;
    color: ${token.color.font.default};
  `;
