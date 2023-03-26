import { StackProps } from './Stack.types';

import { S } from './styles';

export const Stack = ({ direction = 'row', children, ...rest }: StackProps) => {
  return (
    <S.StackContainer direction={direction} {...rest}>
      {children}
    </S.StackContainer>
  );
};
