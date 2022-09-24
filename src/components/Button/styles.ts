import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

const containerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    background-color: ${theme.colors.gray_300};

    &:hover {
      background-color: ${theme.colors.gray_300};

      box-shadow: none;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.4rem;

    font-size: ${theme.font.sizes.xxsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 3.2rem;

    font-size: ${theme.font.sizes.xsmall};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5.6rem;

    font-size: ${theme.font.sizes.xsmall};
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;

    color: ${theme.colors.green};

    font-weight: ${theme.font.normal};

    transition: color 0.2s;

    &:hover {
      color: ${darken(0.1, theme.colors.green)};
    }
  `
};

const variants = {
  outline: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};

    &:hover {
      background-color: transparent;
      color: ${lighten(0.1, theme.colors.primary)};

      border-color: ${lighten(0.1, theme.colors.primary)};
    }
  `
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, color, size, minimal, disabled, variant }) => css`
    width: 100%;

    color: ${theme.colors.white};
    background-color: ${theme.colors[color!]};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${theme.border.radius};
    border: 0;

    padding: 0 ${theme.spacings.xsmall};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};

    transition: background-color 0.3s, box-shadow 0.2s;

    outline: none;

    &:focus {
      outline: 3px solid ${lighten(0.4, theme.colors.green)};
    }

    ${!minimal &&
    css`
      &:hover {
        background-color: ${lighten(0.05, theme.colors[color!])};

        box-shadow: ${theme.box.shadow};
      }
    `}

    > svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    ${!!size && containerModifiers[size](theme)};

    ${!!minimal && containerModifiers.minimal(theme)};
    ${!!variant && variants[variant!](theme)};
    ${disabled && containerModifiers.disabled(theme)};

    ${color === 'red' &&
    css`
      color: ${theme.colors.white};
      border-color: ${theme.colors.red};

      &:hover {
        border-color: ${theme.colors.red};

        box-shadow: ${theme.box.shadow};
      }
    `}
  `}
`;
