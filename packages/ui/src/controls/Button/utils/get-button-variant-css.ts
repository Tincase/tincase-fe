import type { ThemeColor } from '@tincase/token';
import { getCss } from '@tincase/token';

import type { ButtonVariant } from '../Button.types';

interface GetButtonVaraintCSSProps {
  variant?: ButtonVariant;
  color?: ThemeColor;
}

// prettier-ignore
export function getButtonVaraintCss({
  variant,
  color = '',
}: GetButtonVaraintCSSProps) {
  switch (variant) {
    case 'outline':       return getOutlineButtonCss(color);
    case 'light-solid':   return getLightSolidButtonCss(color);
    case 'link':          return getLinkButtonCss(color);
    case 'text':          return getTextButtonCss(color);
    default:              return getSolidButtonCss(color);
  }
}

const getSolidButtonCss = (color: ThemeColor) =>
  `
    background-color: ${color};
    color: white;
  `;

const getOutlineButtonCss = (color: ThemeColor) =>
  `
    background: transparent;
    color: ${color};
    ${getCss({ border: { type: 'level1', color } })}
  `;

const getLightSolidButtonCss = (color: ThemeColor) =>
  `
    color: ${color};
  `;

const getLinkButtonCss = (color: ThemeColor) =>
  `
    background: transparent;
    color: ${color};

    &:hover {
      text-decoration: underline;
    }
  `;

const getTextButtonCss = (color: ThemeColor) =>
  `
    background: transparent;
    color: ${color};
  `;
