import * as S from './styles';

export type TagColorsProps = 'red' | 'green' | 'blue';

export type TagProps = {
  children: React.ReactNode;
  color?: TagColorsProps;
};

const Tag = ({ children, color = 'blue' }: TagProps) => {
  return (
    <S.Container role="textbox" color={color}>
      {children}
    </S.Container>
  );
};

export default Tag;
