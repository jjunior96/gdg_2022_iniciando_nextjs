import styled, { css, DefaultTheme } from 'styled-components';

import { HeadingProps, LineColorProps } from '.';

const containerModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    padding-left: ${theme.spacings.xxsmall};

    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${!!size && containerModifiers[size](theme)};

    ${lineLeft && containerModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && containerModifiers.lineBottom(theme, lineColor!)}
  `}
`;
