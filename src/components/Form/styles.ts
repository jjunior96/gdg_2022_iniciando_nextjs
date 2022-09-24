import styled, { css } from 'styled-components';

import * as ButtonComponent from 'components/Button/styles';
import * as InputComponent from 'components/Input/styles';

export const Container = styled.form``;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100%;
    max-width: ${theme.grid.container};
    min-width: ${theme.grid.container};

    ${InputComponent.Container} {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${ButtonComponent.Container} {
      margin-top: ${theme.spacings.xxsmall};
    }

    label {
      margin-top: ${theme.spacings.xsmall};
    }

    button[type='submit'] {
      margin: ${theme.spacings.small} 0;
    }

    @media (max-width: 960px) {
      min-width: 100%;
    }

    @media (max-width: 500px) {
      max-width: 100%;
      min-width: 100%;
    }
  `}
`;
