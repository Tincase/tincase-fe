import styled from '@emotion/styled';

import type { GridItemOptions } from './GridItem.types';

// prettier-ignore
export const Item = styled.div<GridItemOptions>`
  background:   ${({ background }) => background};
  color:        ${({ fontColor }) => fontColor};
`;
