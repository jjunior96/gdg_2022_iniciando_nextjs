import Link from 'next/link';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 32rem;

    background-color: ${theme.colors.white};

    box-shadow: ${theme.box.shadow};
    border-radius: ${theme.border.radius};

    border: 1px solid ${lighten(0.17, theme.colors.gray_200)};

    overflow: hidden;

    transition: box-shadow ${theme.transition.default},
      color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.green};

      box-shadow: 0 4px 12px ${lighten(0.1, theme.colors.green)};
    }
  `}
`;

export const LinkStyled = styled(Link)``;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;

  position: relative;

  img {
    position: absolute;

    object-fit: cover;
  }
`;

export const CardFooter = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    p {
      margin-top: ${theme.spacings.xxsmall};

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: ${theme.font.sizes.medium};
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `}
`;
