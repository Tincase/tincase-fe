import { HorizontalAlign } from '../types';

// prettier-ignore
export function getHorizontalAlign(horizontalAlign?: HorizontalAlign): string {
  let align = horizontalAlign ?? '';

  switch (horizontalAlign) {
    case 'left':    align = 'start';  break;
    case 'right':   align = 'end';    break;
  }

  return align;
}
