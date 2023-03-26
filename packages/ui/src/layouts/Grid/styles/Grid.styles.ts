import styled from '@emotion/styled';
import { GridOptions } from '../Grid.types';
import { getGridGap, getGridStyles } from './utils';

// prettier-ignore
export const GridContainer = styled.div<GridOptions>`
  width:    100%;

  display:  grid;
  ${({ row, col, horizontalAlign, verticalAlign }) =>
            getGridStyles({ row, col, horizontalAlign, verticalAlign })}
  ${({ theme, gap, rowGap, colGap }) =>
            getGridGap(theme, { gap, rowGap, colGap })};
`;
