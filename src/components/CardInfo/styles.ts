import Link from 'next/link';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { CardInfoProps } from '.';

export const ContainerLink = styled(Link)``;

type ContainerProps = Pick<CardInfoProps, 'variant'>;

export const Container = styled.div<ContainerProps>`
  ${({ theme, variant }) => css`
    background-color: ${theme.colors.white};

    padding: ${theme.spacings.xsmall};

    box-shadow: ${theme.box.shadow};

    border-radius: ${theme.border.radius};

    border: 1px solid ${lighten(0.07, theme.colors.gray_100)};

    width: 100%;

    transition: box-shadow 0.2s;

    a {
      text-decoration: none;
      color: ${theme.colors.black};
    }

    &:hover {
      box-shadow: 0 4px 12px ${lighten(0.2, theme.colors.green)};
    }

    ${variant === 'secundary' &&
    css`
      background-color: ${theme.colors.gray_300};

      a {
        color: ${theme.colors.white};
      }
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 100%;

    svg {
      width: ${theme.font.sizes.medium};
      height: ${theme.font.sizes.medium};

      color: ${theme.colors.green};
    }

    strong {
      margin-top: ${theme.spacings.xxsmall};

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.normal};
      line-height: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: fit-content;
`;
