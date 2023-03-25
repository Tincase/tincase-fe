import { SizeProperty } from '../primitive';
import { Spacing } from './spacing.types';

// prettier-ignore
export type SemanticSize = {
  minWidth:       SizeProperty;
  height:         SizeProperty;
  paddingX:       SizeProperty;
  radius:         SizeProperty;
}

// prettier-ignore
export type Size = Spacing & {
  sm:             SemanticSize;
  md:             SemanticSize;
  lg:             SemanticSize;
  min:            string;
  max:            string;
  full:           string;
};

export type SizeKey = 'sm' | 'md' | 'lg';
