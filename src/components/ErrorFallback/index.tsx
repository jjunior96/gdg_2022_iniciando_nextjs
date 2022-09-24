import { useRouter } from 'next/router';

import Button from 'components/Button';

import * as S from './styles';

export type ErrorFallbackProps = {
  error: {
    message: string;
  };
  resetErrorBoundary?: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const route = useRouter();

  const handlePushToHome = () => {
    route.push('/');
  };

  return (
    <S.Container role="alert">
      <S.Content>
        <S.Title>Something went wrong</S.Title>
        <S.Description>{error.message}</S.Description>

        <Button onClick={resetErrorBoundary || handlePushToHome}>
          Try again
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default ErrorFallback;
