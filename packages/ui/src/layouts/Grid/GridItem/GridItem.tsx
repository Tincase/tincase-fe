import { GridItemProps } from './GridItem.types';

import * as S from './GridItem.styles';

export const GridItem = ({ children, ...rest }: GridItemProps) => {
  return <S.Item {...rest}>{children}</S.Item>;
};
