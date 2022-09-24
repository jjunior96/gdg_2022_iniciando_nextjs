import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 40rem;

    svg {
      font-size: ${theme.font.sizes.huge};
      color: ${theme.colors.gray_200};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray_300};

    margin: ${theme.spacings.xsmall} 0;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray_300};

    max-width: 100%;
    word-wrap: break-word;

    margin-bottom: ${theme.spacings.medium};
  `}
`;
