import { HorizontalAlign, Spacing, VerticalAlign } from '@tincase/token';

// prettier-ignore
export interface StackOptions {
  direction?:         'row' | 'column';
  gap:                keyof Spacing;
  horizontalAlign?:   HorizontalAlign;
  verticalAlign?:     VerticalAlign;
}

export interface StackProps extends StackOptions {
  children?: React.ReactNode;
}
