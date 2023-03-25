import {
  Border,
  Breakpoint,
  Elevation,
  Font,
  Radius,
  Size,
  Spacing,
  ZIndex,
} from './alias.types';
import { Style } from './style.types';
import { Color } from './theme-color.types';

// prettier-ignore
export type Token = {
  border:       Border;
  breakpoint:   Breakpoint;
  elevation:    Elevation;
  font:         Font;
  radius:       Radius;
  size:         Size;
  spacing:      Spacing;
  zIndex:       ZIndex;

  color:        Color;

  style:       Style
};

export type AliasToken = Omit<Token, 'color'>;
