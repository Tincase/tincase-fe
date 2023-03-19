import type { SemanticSize, SizeKey, BorderType, GetCssProps } from "../types";
import { token } from "../index";

import { isBorderStyleObject } from "./type-guard";

export function getCss({ size, border }: GetCssProps) {
  let styles = [];

  if (size) {
    styles.push(getSizeCss(size));
    styles.push(getTypographyCssBySize(size));
  }

  if (border) styles.push(getBorderCss(border));

  return styles.join();
}

/* ----------------------------------------
 * Functions for each CSS
 * ----------------------------------------*/
function getSizeCss(size: SizeKey) {
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

function getTypographyCssBySize(size: SizeKey) {
  const fontFamily = token.font.fontFamily.body;
  const fontSize = token.font.fontSize[size];
  const fontWeight = token.font.fontWeight.regular;
  const lineHeight = token.font.lineHeight.default;

  return `
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
}

// prettier-ignore
function getBorderCss(border: BorderType) {
  if (isBorderStyleObject(border))
    return `border: ${token.border[border.type]} ${border.color};`;
  else
    return `border: ${token.border[border]};`;
}
