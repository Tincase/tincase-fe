import styled from '@emotion/styled';
import { getCss } from '@tincase/token';

import { getButtonVaraintCss } from './utils';

import { ButtonOptions } from './Button.types';

/* ----------------------------------------
 * Components
 * ----------------------------------------*/

type PickedButtonOptions = 'size' | 'fill' | 'variant';

// prettier-ignore
export const Button = styled.button<Pick<ButtonOptions, PickedButtonOptions>>`
  border:           unset;
  outline:          unset;

  display:          inline-flex;
  justify-content:  center;
  align-items:      center;
  gap:              ${({ theme }) => theme.spacing?.[8]};

  position:         relative;

  white-space:      nowrap;
  vertical-align:   middle;

  cursor:           pointer;
  appearance:       none;
  user-select:      none;
  
  &:hover {

  }

  ${({ theme, size }) =>     getCss({ token: theme, size })}

  ${({ fill }) =>     fill && 'width: 100%;'}
  ${({ theme, variant }) =>  getButtonVaraintCss({ token: theme, variant, color: theme.color.primary })}
`;
