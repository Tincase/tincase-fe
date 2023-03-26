import { HorizontalAlign, Spacing, VerticalAlign } from '@tincase/token';

// prettier-ignore
export type GridOptions = {
  row?:     number;
  col?:     number;
  gap?:     keyof Spacing;
  rowGap?:  keyof Spacing;
  colGap?:  keyof Spacing;
  horizontalAlign?:   HorizontalAlign;
  verticalAlign?:     VerticalAlign;
};

export interface GridProps extends GridOptions {
  children?: React.ReactNode;
}
