import type {
  SemanticSize,
  SizeKey,
  BorderType,
  GetCssProps,
  Token,
  TransitionProps,
} from '../types';

import { isBorderStyleObject } from './type-guard';

export function getCss({ token, size, border, transition }: GetCssProps) {
  let styles = [];

  if (size) {
    styles.push(getSizeCss(token, size));
    styles.push(getTypographyCssBySize(token, size));
  }

  if (border) {
    styles.push(getBorderCss(token, border));
  }

  if (transition) {
    styles.push(getTransition(token, transition));
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

// prettier-ignore
function getTransition(token: Token, transition: TransitionProps) {
  const { property, duration, easing } = {
    property:   token.transition.property[transition.property ?? 'common'],
    duration:   token.transition.duration[transition.duration ?? 'normal'],
    easing:     token.transition.easing[transition.easing ?? 'ease-in'],
  };

  console.log(property, duration, easing)

  return `
    transition-property:        ${property};
    transition-duration:        ${duration};
    transition-timing-function: ${easing};
  `
}
