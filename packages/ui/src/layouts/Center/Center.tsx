import { CenterProps } from './Center.types';

import * as S from './Center.styles';

export const Center = ({ children, ...rest }: CenterProps) => {
  return <S.CenterContainer {...rest}>{children}</S.CenterContainer>;
};
