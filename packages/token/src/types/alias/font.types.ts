import { SizeProperty } from '../primitive';

// prettier-ignore
export type FontFamily = {
  heading:        string;
  body:           string;
};

// prettier-ignore
export type FontSize = {
  xs:             SizeProperty;
  sm:             SizeProperty;
  md:             SizeProperty;
  lg:             SizeProperty;
  xl:             SizeProperty;
  "2xl":          SizeProperty;
  "3xl":          SizeProperty;
};

// prettier-ignore
export type FontWeight = {
  light:          number;
  regular:        number;
  medium:         number;
  bold:           number;
};

// prettier-ignore
export type LineHeight = {
  none:           number;
  short:          number;
  default:        number;
  large:          number;
};

// prettier-ignore
export type LetterSpacing = {
  tighter:        string;
  tight:          string;
  normal:         string;
  wide:           string;
  wider:          string;
  widest:         string;
};

// prettier-ignore
export type Font = {
  fontFamily:     FontFamily;
  fontSize:       FontSize;
  fontWeight:     FontWeight;
  lineHeight:     LineHeight;
  letterSpacing:  LetterSpacing;
}

export type TypographyKey = keyof FontSize;
