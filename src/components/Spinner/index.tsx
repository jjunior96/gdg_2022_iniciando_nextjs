import * as S from './styled';

export type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
};

const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  return (
    <S.Container size={size} data-testid="spinner">
      <S.IconLoading data-testid="spinner-icon" />
    </S.Container>
  );
};

export default Spinner;
