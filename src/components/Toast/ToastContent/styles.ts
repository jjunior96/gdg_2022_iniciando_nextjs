import { motion } from 'framer-motion';
import { ToastMessageProps } from 'hooks/useToast/types';
import styled, { css, DefaultTheme } from 'styled-components';

type ToastTypeProps = Pick<ToastMessageProps, 'type'>;

const containerModifiers = {
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

export const Container = styled(motion.div)<ToastTypeProps>`
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

    box-shadow: ${theme.box.shadow};

    > svg {
      margin-right: ${theme.spacings.xxxsmall};
    }

    ${!!type && containerModifiers[type](theme)};
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
