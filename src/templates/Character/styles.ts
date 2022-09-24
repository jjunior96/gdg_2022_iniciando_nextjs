import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    display: flex;
    /* flex-direction: column; */

    margin: 0 auto;

    /* background-color: #ddd; */
    /* align-items: center; */
    /* justify-content: center; */

    p {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-left: 3rem;
    }

    img {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: ${theme.box.shadow};
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      p {
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.bold};
        margin-top: 2.4rem;
      }
    }
  `}
`;

export const HalfPage = styled.div`
  width: 50%;
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100%;
    height: 100%;

    flex-shrink: 0;

    border-radius: ${theme.border.radius};

    overflow: hidden;
    position: relative;

    img {
      object-fit: cover;
    }
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`;
