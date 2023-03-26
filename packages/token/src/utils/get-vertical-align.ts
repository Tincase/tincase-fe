import { VerticalAlign } from '../types';

// prettier-ignore
export function getVerticalAlign(verticalAlign: VerticalAlign = 'center'): string {
  let align: string = verticalAlign;

  switch (verticalAlign) {
    case 'top':     align = 'start';  break;
    case 'bottom':  align = 'end';    break;
  }

  return align;
}
