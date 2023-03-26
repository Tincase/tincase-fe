import styled from '@emotion/styled';

// prettier-ignore
export const Template = styled.article`
  width:          320px;
  height:         544px;

  box-shadow:     ${({ theme }) => theme.elevation.level3};
  border-radius:  ${({ theme }) => theme.radius.xl};
`;
