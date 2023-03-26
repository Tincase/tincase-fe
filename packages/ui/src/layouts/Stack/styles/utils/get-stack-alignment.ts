import { css } from '@emotion/react';
import { getHorizontalAlign, getVerticalAlign } from '@tincase/token';

import { StackOptions } from '../../Stack.types';

// prettier-ignore
export function getStackAlignment({
  direction,
  horizontalAlign,
  verticalAlign,
}: Pick<StackOptions, 'direction' | 'horizontalAlign' | 'verticalAlign'>) {
  const horizontalAlignCss =  getHorizontalAlign(horizontalAlign);
  const verticalAlignCss =    getVerticalAlign(verticalAlign);

  if (direction === 'row') {
    return css`
      flex-direction:   row;
      justify-content:  ${horizontalAlignCss};
      align-items:      ${verticalAlignCss};
    `
  }

  return css`
    flex-direction:   column;
    justify-content:  ${verticalAlignCss};
    align-items:      ${horizontalAlignCss};
  `;
}
