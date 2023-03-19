import { BorderStyleObject } from "../../types";

export function isBorderStyleObject(arg: any): arg is BorderStyleObject {
  return arg?.type !== undefined;
}
