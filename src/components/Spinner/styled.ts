import { VscLoading as LoadingIcon } from 'react-icons/vsc';

import styled, { css, DefaultTheme, keyframes } from 'styled-components';

import theme from 'styles/theme';

import { SpinnerProps } from '.';

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.xlarge};
  `,

  large: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.huge};
  `
};

export const Container = styled.div<SpinnerProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    ${!!size && containerModifiers[size](theme)};

    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const IconLoading = styled(LoadingIcon).attrs({
  color: theme.colors.green
})`
  width: 100%;

  animation: ${loadingAnimation} 1s linear infinite;
`;
