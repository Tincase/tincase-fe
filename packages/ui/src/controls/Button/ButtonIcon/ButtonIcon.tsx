import { ButtonIconProps } from './ButtonIcon.types';
import * as S from './ButtonIcon.styles';

export const ButtonIcon = ({ children, ...rest }: ButtonIconProps) => {
  return (
    <S.Container {...rest} aria-hidden="true" tabIndex={-1}>
      {children}
    </S.Container>
  );
};
