import { BorderKey, SizeKey } from './alias.types';
import { ThemeColor } from './theme-color.types';
import { Token } from './token.types';

// prettier-ignore
export interface GetCssProps {
  token:    Token;
  size?:    SizeKey;
  border?:  BorderType;
}

export type BorderType = BorderKey | BorderStyleObject;

// prettier-ignore
export type BorderStyleObject = {
  type:     BorderKey;
  color?:   ThemeColor;
}
