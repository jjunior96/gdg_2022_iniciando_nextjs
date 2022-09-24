import { shade } from 'polished';
import styled, { css } from 'styled-components';

type LinkActivedProps = {
  isActive: boolean;
};

export const LinkActived = styled.a<LinkActivedProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;

    text-align: center;

    color: ${theme.colors.gray_200};

    text-decoration: none;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};

    padding: 0.2rem 0.5rem;
    border-radius: ${theme.border.radius};

    transition: color ${theme.transition.default};

    ${isActive &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.green};
    `}

    &:hover {
      color: ${shade(0.2, theme.colors.green)};
    }

    & + & {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
