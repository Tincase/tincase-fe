import { CenterProps } from './Center.types';

import * as S from './Center.styles';

export const Center = ({ children }: CenterProps) => {
  return <S.CenterContainer>{children}</S.CenterContainer>;
};
