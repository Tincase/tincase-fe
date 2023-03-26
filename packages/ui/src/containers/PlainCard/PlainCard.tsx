import type { PlainCardProps } from './PlainCard.types';

import { S } from './styles';

export const PlainCard = ({ children }: PlainCardProps) => {
  return <S.Template>{children}</S.Template>;
};
