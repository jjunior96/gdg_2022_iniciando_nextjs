import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div``;

export const CardGrid = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    width: 100%;
    max-width: ${theme.grid.container};

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.small};

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;
