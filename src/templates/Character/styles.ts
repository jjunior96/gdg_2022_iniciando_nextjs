import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as CardInfoContainer from 'components/CardInfo/styles';
import * as HeadingContainer from 'components/Heading/styles';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: ${theme.grid.container};

    margin: 0 auto;

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.large};
    `}
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  margin: auto;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 36rem;

  ${HeadingContainer.Container} {
    text-align: left;
  }

  ${media.lessThan('medium')`
      max-width: 100%;
      margin-top: 16rem;
    `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: ${theme.spacings.small};

    margin-bottom: ${theme.spacings.small};

    ${media.lessThan('medium')`
      align-items: center;

      ${CardInfoContainer.Container} {
        width: 100%;
        max-width: 100%;
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};

    line-height: ${theme.font.sizes.large};

    color: ${theme.colors.gray_300};

    margin-bottom: ${theme.spacings.small};
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 60%;
    height: calc(100vh - ${theme.components.header});

    border-radius: ${theme.border.radius};
    overflow: hidden;

    position: relative;

    flex-shrink: 0;

    ${media.lessThan('medium')`
      position: absolute;

      height: 20rem;
      width: 100% ;

      top: 3rem;
    `}
  `}
`;
