import styled from '@emotion/styled';

import { StackOptions } from '../Stack.types';
import { getStackAlignment } from './utils';

// prettier-ignore
export const StackContainer = styled.div<StackOptions>`
  display:  flex;
  gap:      ${({ theme, gap }) => theme.spacing[gap]};
  ${({ direction, horizontalAlign, verticalAlign }) =>
            getStackAlignment({ direction, horizontalAlign, verticalAlign })}
`;
