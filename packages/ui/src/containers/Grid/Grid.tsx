import { forwardRef } from 'react';

import { S } from './styles';
import type { GridProps } from './Grid.types';
import { GridItem } from './GridItem';

export const Grid = ({ col = 1, children, ...rest }: GridProps) => {
  return (
    <S.GridContainer col={col} {...rest}>
      {children}
    </S.GridContainer>
  );
};

Grid.displayName = 'Grid';
Grid.Item = GridItem;
