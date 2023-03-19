import { SizeProperty } from "./primitive.types";

// prettier-ignore
export type Elevation = {
  level1:         string;
  level2:         string;
  level3:         string;
  level4:         string;
  level5:         string;
};

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
export type Size = {
  sm:             SemanticSize;
  md:             SemanticSize;
  lg:             SemanticSize;
  min:            string;
  max:            string;
  full:           string;
};

export type SizeKey = "sm" | "md" | "lg";

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
  240:            SizeProperty;
  320:            SizeProperty;
  400:            SizeProperty;
};
