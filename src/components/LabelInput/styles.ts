import styled, { css } from 'styled-components';

import { LabelInputProps } from '.';

type LabelContainerProps = Omit<LabelInputProps, 'label'>;

export const LabelContainer = styled.label<LabelContainerProps>`
  ${({ theme, isRequired, isDisabled, labelColor, error }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin: 0;
    padding: 0;
    line-height: 1;

    span {
      display: none;
    }

    color: ${labelColor === 'white' ? theme.colors.white : theme.colors.black};

    ${isRequired &&
    css`
      span {
        display: inline;
        color: ${theme.colors.red};
      }
    `}

    ${isDisabled &&
    css`
      cursor: not-allowed;

      color: ${theme.colors.gray_200};
    `}

    ${error &&
    css`
      color: ${theme.colors.red};
    `}
  `}
`;
