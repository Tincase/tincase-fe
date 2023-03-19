import { BorderKey, SizeKey } from "./alias.types";
import { ThemeColor } from "./theme.types";

// prettier-ignore
export interface GetCssProps {
  size?:    SizeKey;
  border?:  BorderType;
}

export type BorderType = BorderKey | BorderStyleObject;

// prettier-ignore
export type BorderStyleObject = {
  type:     BorderKey;
  color?:   ThemeColor;
}
