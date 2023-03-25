import {
  BorderKey,
  SizeKey,
  TransitionProperty,
  TransitionTimingFunction,
  TransitionDuration,
} from './alias';
import { ThemeColor } from './theme-color.types';
import { Token } from './token.types';

// prettier-ignore
export interface GetCssProps {
  token:        Token;
  size?:        SizeKey;
  border?:      BorderType;
  transition?:  TransitionProps;
}

// prettier-ignore
export type TransitionProps = boolean & {
  property?:    keyof TransitionProperty;
  easing?:      keyof TransitionTimingFunction;
  duration?:    keyof TransitionDuration;
};

export type BorderType = BorderKey | BorderStyleObject;

// prettier-ignore
export type BorderStyleObject = {
  type:         BorderKey;
  color?:       ThemeColor;
}
