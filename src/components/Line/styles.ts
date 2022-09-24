import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: ${theme.spacings.xsmall};

    margin: 0 auto;

    label {
      font-size: ${theme.font.sizes.xxsmall};
      color: ${theme.colors.gray_500};
      margin: 0;
      padding: 0;
    }
  `}
`;
