import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Error = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    margin: 0;
    padding: 0;
    margin-top: ${theme.spacings.xxxsmall};
    margin-bottom: calc(${theme.spacings.xxxsmall} / 4); // 0.2rem

    svg {
      margin: 0;
      padding: 0;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.red};
    }
  `}
`;
