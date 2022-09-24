import { ToastMessageProps } from 'hooks/useToast/types';
import styled, { css, DefaultTheme, keyframes } from 'styled-components';

type ToastTypeProps = Pick<ToastMessageProps, 'type'>;

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;

    width: 35rem;

    z-index: ${theme.layers.alwaysOnTop};

    margin-top: ${theme.spacings.xxsmall};
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

const contentModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,

  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow_300};
  `,

  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red};
  `
};

const ContentAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div<ToastTypeProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.font.sizes.xsmall};

    color: ${theme.colors.black};

    font-weight: ${theme.font.bold};

    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};

    border-radius: ${theme.border.radius};

    position: relative;

    display: flex;
    align-items: center;

    animation: ${ContentAnimation} 0.5s;

    box-shadow: ${theme.box.shadow};

    > svg {
      margin-right: ${theme.spacings.xxxsmall};
    }

    ${!!type && contentModifiers[type](theme)};
  `}
`;

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    border: 0;

    background-color: transparent;

    position: absolute;

    top: 0;
    right: 0;

    margin-top: ${theme.spacings.xxxsmall};
    margin-right: ${theme.spacings.xxxsmall};

    svg {
      color: ${theme.colors.white};

      transition: color 0.4s;

      &:hover {
        color: ${theme.colors.black};
      }
    }
  `}
`;
