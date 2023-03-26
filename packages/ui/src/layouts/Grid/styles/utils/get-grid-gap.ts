import { css } from '@emotion/react';
import { Token } from '@tincase/token';

import { GridOptions } from '../../Grid.types';

interface GetGridGapProps
  extends Pick<GridOptions, 'gap' | 'rowGap' | 'colGap'> {}

// prettier-ignore
export function getGridGap(
  theme: Token,
  { gap, rowGap, colGap }: GetGridGapProps
) {
  let styles = [];

  if (gap)    styles.push(css`grid-gap:         ${theme.spacing[gap]};`);
  if (rowGap) styles.push(css`grid-row-gap:     ${theme.spacing[rowGap] ?? 0};`)
  if (colGap) styles.push(css`grid-column-gap:  ${theme.spacing[colGap] ?? 0};`)

  return styles;
}
