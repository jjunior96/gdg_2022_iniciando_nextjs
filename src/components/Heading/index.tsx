import * as S from './styles';

export type LineColorProps = 'primary' | 'secundary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium' | 'large';
  lineColor?: LineColorProps;
};

const Heading = ({
  children,
  color,
  lineLeft = false,
  lineBottom = false,
  size = 'large',
  lineColor = 'primary'
}: HeadingProps) => {
  return (
    <S.Container
      color={color}
      lineLeft={lineLeft}
      size={size}
      lineColor={lineColor}
      lineBottom={lineBottom}
    >
      {children}
    </S.Container>
  );
};

export default Heading;
