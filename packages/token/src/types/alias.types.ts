import { SizeProperty } from './primitive.types';

// prettier-ignore
export type Border = {
  none:           number;
  level1:         string;
  level2:         string;
  level3:         string;
  level4:         string;
};

export type BorderKey = keyof Border;

// prettier-ignore
export type Breakpoint = {
  desktop:        SizeProperty;
};

// prettier-ignore
export type Elevation = {
  level1:         string;
  level2:         string;
  level3:         string;
  level4:         string;
  level5:         string;
};

/* ----------------------------------------
 * Font Types
 * ----------------------------------------*/

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

// prettier-ignore
export type Radius = {
  none:           SizeProperty;
  sm:             SizeProperty;
  md:             SizeProperty;
  lg:             SizeProperty;
  max:            SizeProperty;
}

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

// prettier-ignore
export type Spacing = {
  2:              SizeProperty;
  4:              SizeProperty;
  6:              SizeProperty;
  8:              SizeProperty;
  10:             SizeProperty;
  12:             SizeProperty;
  16:             SizeProperty;
  20:             SizeProperty;
  24:             SizeProperty;
  28:             SizeProperty;
  32:             SizeProperty;
  36:             SizeProperty;
  40:             SizeProperty;
  44:             SizeProperty;
  48:             SizeProperty;
  52:             SizeProperty;
  56:             SizeProperty;
  60:             SizeProperty;
  64:             SizeProperty;
  68:             SizeProperty;
  72:             SizeProperty;
  76:             SizeProperty;
  80:             SizeProperty;
  96:             SizeProperty;
  112:            SizeProperty;
  128:            SizeProperty;
  144:            SizeProperty;
  160:            SizeProperty;
  200:            SizeProperty;
  240:            SizeProperty;
  320:            SizeProperty;
  400:            SizeProperty;
};

// prettier-ignore
export type ZIndex = {
  auto:           string;
  hide:           number;
  background:     number;
  dropdown:       number;
  sticky:         number;
  banner:         number;
  overlay:        number;
  modal:          number;
  popover:        number;
  skipLink:       number;
  toast:          number;
  tooltip:        number;
}
