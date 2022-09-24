import { lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { TagProps } from '.';

type ContainerProps = Pick<TagProps, 'color'>;

const containerModifiers = {
  blue: (theme: DefaultTheme) => css`
    background-color: ${lighten(0.34, theme.colors.info)};
    border-color: ${theme.colors.info};

    color: ${theme.colors.info};
  `,

  red: (theme: DefaultTheme) => css`
    background-color: ${lighten(0.34, theme.colors.red)};
    border-color: ${theme.colors.red};

    color: ${theme.colors.red};
  `,

  green: (theme: DefaultTheme) => css`
    background-color: ${lighten(0.34, theme.colors.green)};
    border-color: ${theme.colors.green};

    color: ${theme.colors.green};
  `
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, color }) => css`
    width: fit-content;
    max-width: 20rem;

    padding: 0.5rem ${theme.spacings.small};
    color: ${theme.colors.white};

    font-size: calc(${theme.font.sizes.xxxsmall} - 0.1rem);
    font-weight: ${theme.font.bold};

    border-style: solid;
    border-width: 1px;

    border-radius: 20px;

    overflow: hidden;

    ${!!color && containerModifiers[color!](theme)};
  `}
`;
