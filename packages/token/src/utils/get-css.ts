import type {
  SemanticSize,
  SizeKey,
  BorderType,
  GetCssProps,
  Token,
} from '../types';

import { isBorderStyleObject } from './type-guard';

export function getCss({ token, size, border }: GetCssProps) {
  let styles = [];

  if (size) {
    styles.push(getSizeCss(token, size));
    styles.push(getTypographyCssBySize(token, size));
  }

  if (border) {
    styles.push(getBorderCss(token, border));
  }

  return styles.join(' ');
}

/* ----------------------------------------
 * Functions for each CSS
 * ----------------------------------------*/
function getSizeCss(token: Token, size: SizeKey) {
  return mapSemanticSizeObjectToCss(token.size[size]);
}

// prettier-ignore
function mapSemanticSizeObjectToCss({
  minWidth,
  height,
  paddingX,
  radius,
}: SemanticSize) {
  return `
    min-width:      ${minWidth};
    height:         ${height};
    padding:        0 ${paddingX};
    border-radius:  ${radius};
  `;
}

function getTypographyCssBySize(token: Token, size: SizeKey) {
  const fontFamily = token.font.fontFamily.body;
  const fontSize = token.font.fontSize[size];
  const lineHeight = token.font.lineHeight.default;

  return `
    font-family: ${fontFamily};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
}

// prettier-ignore
function getBorderCss(token: Token, border: BorderType) {
  if (isBorderStyleObject(border))
    return `border: ${token.border[border.type]} ${border.color};`;
  else
    return `border: ${token.border[border]};`;
}
