import { primitive } from "../primitive";
import { Breakpoint } from "../types";

export const breakpoint: Breakpoint = {
  desktop: primitive.size[1024],
} as const;
