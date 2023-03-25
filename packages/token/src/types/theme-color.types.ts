export type ThemeColor = string;

// prettier-ignore
export type ColorVariant = {
  primary:    ThemeColor;
  secondary:  ThemeColor;
};

// prettier-ignore
export type FontColor = ColorVariant & {
  default:    string;
};

// prettier-ignore
export type Color = ColorVariant & {
  font:       FontColor
};
