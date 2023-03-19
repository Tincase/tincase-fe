import styled from "@emotion/styled";
import { token, getCss } from "@tincase/token";

import { getButtonVaraintCss } from "./utils";

import { ButtonOptions } from "./Button.types";

/* ----------------------------------------
 * Components
 * ----------------------------------------*/

type PickedButtonOptions = "size" | "fill" | "variant";

// prettier-ignore
export const Button = styled.button<Pick<ButtonOptions, PickedButtonOptions>>`
  border:           unset;
  outline:          unset;

  display:          inline-flex;
  justify-content:  center;
  align-items:      center;
  gap:              ${token.spacing[8]};

  position:         relative;

  white-space:      nowrap;
  vertical-align:   middle;

  cursor:           pointer;
  appearance:       none;
  user-select:      none;

  ${({ size }) =>     getCss({ size })}

  ${({ fill }) =>     fill && 'width: 100%;'}
  ${({ variant }) =>  getButtonVaraintCss({ variant })}
`;
