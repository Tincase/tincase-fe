import styled from '@emotion/styled';
import { getCss } from '@tincase/token';

import { ButtonOptions } from '../Button.types';

import { getButtonVaraintCss } from './get-button-variant-css';

/* ----------------------------------------
 * Tokens
 * ----------------------------------------*/

/* ----------------------------------------
 * Components
 * ----------------------------------------*/

type PickedButtonOptions = 'size' | 'fill' | 'variant' | 'color';

// prettier-ignore
export const Button = styled.button<Pick<ButtonOptions, PickedButtonOptions>>`
  border:           unset;
  outline:          unset;
  
  ${({ theme, size }) =>
                    getCss({ token: theme, size, transition: true })}

  display:          inline-flex;
  justify-content:  center;
  align-items:      center;
  gap:              ${({ theme }) => theme.spacing?.[8]};

  position:         relative;

  white-space:      nowrap;
  vertical-align:   middle;
  font-weight:      ${({ theme }) => theme.font.fontWeight.medium};

  cursor:           pointer;
  appearance:       none;
  user-select:      none;

  ${({ fill }) =>   fill && 'width: 100%;'}

  ${({ theme, variant, color }) =>
                    getButtonVaraintCss({ token: theme, variant, color })}
`;
