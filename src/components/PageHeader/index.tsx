import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoChevronBack as BackIcon } from 'react-icons/io5';

import ActiveLink from 'components/ActiveLink';

import * as S from './styles';

export type PageHeaderProps = {
  title: string;
  subTitle?: string;
  extra?: React.ReactNode[];
  children: React.ReactNode;
  onBack?: boolean;
};

const PageHeader = ({
  title = 'Header',
  subTitle,
  extra,
  children,
  onBack = false
}: PageHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <S.Container>
        <S.Header>
          <S.HeaderContent>
            {onBack && (
              <button onClick={() => router.back()} title="Go back">
                <BackIcon />
              </button>
            )}

            <S.HeaderTitle title={title}>{title}</S.HeaderTitle>

            <S.HeaderSubTitle title={subTitle}>{subTitle}</S.HeaderSubTitle>
          </S.HeaderContent>

          <nav>
            <ActiveLink href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink href="/locations">
              <a>Localizações</a>
            </ActiveLink>
          </nav>

          {extra && (
            <S.ExtraContainer role="contentinfo">
              <>{extra}</>
            </S.ExtraContainer>
          )}
        </S.Header>
      </S.Container>

      <S.Content>{children}</S.Content>
    </>
  );
};

export default PageHeader;
