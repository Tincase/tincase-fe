/* ----------------------------------------
 * Button Options
 * ----------------------------------------*/

import { ColorVariant } from '@tincase/token';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = keyof ColorVariant;
export type ButtonVariant =
  | 'solid'
  | 'outline'
  | 'light-solid'
  | 'link'
  | 'text';
export type ButtonIconPosition = 'start' | 'end';

// prettier-ignore
export interface ButtonOptions {
  /* ----------------------------------------
   * Button Variants
   * ----------------------------------------*/
  /**
   * The size of the button
   * @default "md"
   * @example
   * - "sm": Small size
   * - "md": Medium size
   * - "lg": Large size
   */
  size?:          ButtonSize;
  color?:         ButtonColor;
  variant?:       ButtonVariant;
  icon?:          React.ReactNode;
  iconPosition?: ButtonIconPosition;

  /* ----------------------------------------
   * Button States
   * ----------------------------------------*/
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?:  boolean;
  /**
   * If `true`, the button loading animation will appear.
   * @default false
   */
  loading?:   boolean;
  /**
   * If `true`, the button will fill the full width of its parent container.
   * @default false
   */
  fill?:      boolean;
}

/* ----------------------------------------
 * Button Interface
 * ----------------------------------------*/
type OmittedButtonProps = 'color';

export interface ButtonProps
  extends ButtonOptions,
    Omit<React.HTMLAttributes<HTMLButtonElement>, OmittedButtonProps> {}
