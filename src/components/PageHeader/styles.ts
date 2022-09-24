import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;

    position: fixed;
    top: 0;

    z-index: ${theme.layers.menu};

    background-color: ${theme.colors.white};
  `}
`;

export const ContentContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    padding: ${theme.spacings.xsmall};
    padding-top: calc(${theme.components.header} + ${theme.spacings.small});

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
      display: block;
      max-width: 100%;
      min-width: 100%;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;

    padding: ${theme.spacings.xsmall};
    padding-top: calc(${theme.components.header} + ${theme.spacings.small});
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.components.header};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xsmall};

    box-shadow: ${theme.box.shadow};
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    height: 100%;

    gap: ${theme.spacings.xsmall};

    > button {
      border: none;
      background-color: transparent;

      padding: 0.2rem 0.5rem;

      cursor: pointer;

      border-radius: ${theme.border.radius};

      svg {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray_300};
      }

      transition: color ${theme.transition.fast};

      &:hover {
        svg {
          color: ${theme.colors.green};
        }
      }

      &:focus {
        outline: 3px solid ${lighten(0.4, theme.colors.green)};
      }
    }
  `}
`;

export const HeaderTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    color: ${theme.colors.gray_450};

    line-height: 0;
  `}
`;

export const HeaderSubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    color: ${theme.colors.gray_200};

    display: flex;
    align-items: center;
  `}
`;

export const ExtraContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.spacings.xsmall};
  `}
`;
