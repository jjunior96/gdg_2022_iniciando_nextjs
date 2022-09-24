import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: fit-content;

    & + & {
      margin-top: ${theme.spacings.small};
    }

    p {
      display: flex;
      align-items: center;

      color: ${theme.colors.gray_300};

      transition: color ${theme.transition.fast},
        background-color ${theme.transition.fast};

      padding: 0.5rem ${theme.spacings.xxxsmall};
      border-radius: ${theme.border.radius};

      span {
        margin-left: ${theme.spacings.xxxsmall};

        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};

        border-radius: ${theme.border.radius};

        padding: 0.5rem ${theme.spacings.xxxsmall};
        font-size: ${theme.font.sizes.xsmall};
      }

      &:hover {
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};
      }
    }
  `}
`;
