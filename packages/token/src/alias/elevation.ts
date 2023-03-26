import { Elevation } from '../types';

// prettier-ignore
export const elevation: Elevation = {
  level1:   '0 1px 2px 0 rgba(0, 0, 0, 0.3)'      + ', 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
  level2:   '0 1px 2px 0 rgba(0, 0, 0, 0.3)'      + ', 0 2px 6px 2px rgba(0, 0, 0, 0.15)',
  level3:   '0 2px 8px 3px rgba(0, 0, 0, 0.15)'   + ', 0 1px 3px 0 rgba(0, 0, 0, 0.2)',
  level4:   '0 3px 10px 4px rgba(0, 0, 0, 0.15)'  + ', 0 1px 3px 0 rgba(0, 0, 0, 0.2)',
  level5:   '0 5px 12px 6px rgba(0, 0, 0, 0.15)'  + ', 0 2px 6px 0 rgba(0, 0, 0, 0.2)',
} as const;
