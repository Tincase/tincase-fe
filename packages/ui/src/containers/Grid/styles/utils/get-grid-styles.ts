import { css } from '@emotion/react';
import { HorizontalAlign, VerticalAlign } from '@tincase/token';

import type { GridOptions } from '../../Grid.types';

// prettier-ignore
export function getGridStyles({
  row,
  col,
  horizontalAlign,
  verticalAlign,
}: Pick<GridOptions, 'row' | 'col' | 'horizontalAlign' | 'verticalAlign'>) {
  let styles = [];

  if (row) styles.push(css`grid-template-rows:    repeat(${row}, 1fr);`);
  if (col) styles.push(css`grid-template-columns: repeat(${col}, 1fr);`);
  
  styles.push(getGridHorizontalAlign(horizontalAlign));
  styles.push(getGridVerticalAlign(verticalAlign));

  return styles;
}

// prettier-ignore
function getGridHorizontalAlign(horizontalAlign: HorizontalAlign = 'center') {
  let align: string = horizontalAlign;

  switch (horizontalAlign) {
    case 'left':  align = 'start';
    case 'right': align = 'end';
  }

  return `justify-items: ${align};`;
}

// prettier-ignore
function getGridVerticalAlign(verticalAlign: VerticalAlign = 'center') {
  let align: string = verticalAlign;

  switch (verticalAlign) {
    case 'top':     align = 'start';
    case 'bottom':  align = 'end';
  }

  return `align-items: ${align};`;
}
