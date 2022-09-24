import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { InputProps } from '.';

type DisableProps = Pick<InputProps, 'isDisabled'>;

type IconContainerProps = {
  isFocused: boolean;
  isErrored?: boolean;
  positionIcon?: 'left' | 'right';
  hiddenInput?: boolean;
} & DisableProps;

export const Container = styled.div`
  width: 100%;
`;

export const IconContainer = styled.div<IconContainerProps>`
  ${({
    theme,
    isErrored,
    isFocused,
    isDisabled,
    positionIcon,
    hiddenInput
  }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray_200};

    border-radius: ${theme.border.radius};
    padding: 0 2rem;

    width: 100%;
    height: 56px;

    font-size: ${theme.font.sizes.medium};

    display: flex;
    align-items: center;

    border: 2px solid ${theme.colors.gray_300};

    cursor: default;

    &:focus-within {
      outline: 3px solid ${lighten(0.4, theme.colors.green)};
    }

    ${positionIcon === 'right' &&
    css`
      > svg {
        order: 2;
      }
    `}

    input {
      color: ${hiddenInput ? 'transparent' : theme.colors.black};
      background: transparent;
      outline: none;
      height: 100%;

      line-height: 1.2;

      font-size: ${theme.font.sizes.xsmall};

      border: 0;

      flex: 1;

      // Remove as setas up e down nos inputs do tipo number
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type='number'] {
        -moz-appearance: textfield;
      }

      /* Remove os estilos nas sugestões do Chrome */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.colors.gray_300};
        -webkit-box-shadow: #282f3a26 inset;
        box-shadow: #282f3a26;
        transition: background-color 5000s ease-in-out 0s;
      }

      &::placeholder {
        color: ${theme.colors.gray_200};
      }

      ${isDisabled &&
      css`
        cursor: not-allowed;

        color: ${theme.colors.gray_200};
      `}
    }

    svg {
      margin-right: ${theme.spacings.xsmall};
      color: ${theme.colors.gray_300};
    }

    ${isFocused &&
    css`
      border-color: ${theme.colors.green};
      color: ${theme.colors.green};

      > svg {
        color: ${theme.colors.green};
      }
    `}

    ${isErrored &&
    css`
      border: 2px solid ${theme.colors.error};

      > svg {
        color: ${theme.colors.error};
      }
    `}




    ${isDisabled &&
    css`
      cursor: not-allowed;

      border-color: ${lighten(0.3, theme.colors.gray_200)};

      color: ${lighten(0.3, theme.colors.gray_300)};

      > svg {
        color: ${lighten(0.3, theme.colors.gray_300)};
      }
    `}

    &:hover {
      border-color: ${theme.colors.black};
    }
  `}
`;

export const ButtonVisiblePassword = styled.button`
  ${({ theme }) => css`
    text-align: center;

    border: none;
    background: none;

    border-radius: 10%;

    width: 2.4rem;
    height: 2.4rem;

    font-size: 0.6rem;

    &:focus-within {
      outline: 3px solid ${lighten(0.2, theme.colors.green)};

      > svg {
        color: ${theme.colors.green};
      }
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;
