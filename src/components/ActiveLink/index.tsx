import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import * as S from './styles';

export type ActiveLinkProps = {
  children: ReactNode;
  href: string;
} & LinkProps;

const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { asPath } = useRouter();

  const isCurrentPath =
    asPath === href || asPath === rest.as || asPath.startsWith(String(rest.as));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Link href={href} {...rest}>
          <S.LinkActived isActive={!!isCurrentPath}>{children}</S.LinkActived>
        </Link>
      )}
    </>
  );
};

export default ActiveLink;
