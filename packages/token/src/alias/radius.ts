import { primitive } from '../primitive';
import { Radius } from '../types';

// prettier-ignore
export const radius: Radius = {
  none:   primitive.size[0],
  sm:     primitive.size[4],
  md:     primitive.size[6],
  lg:     primitive.size[8],
  xl:     primitive.size[12],
  max:    primitive.size.max,
} as const;
