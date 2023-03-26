import { VerticalAlign } from '../types';

// prettier-ignore
export function getVerticalAlign(verticalAlign?: VerticalAlign): string {
  let align = verticalAlign ?? '';

  switch (verticalAlign) {
    case 'top':     align = 'start';  break;
    case 'bottom':  align = 'end';    break;
  }

  return align;
}
