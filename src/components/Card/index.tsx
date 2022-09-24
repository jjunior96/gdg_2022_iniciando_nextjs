import Image from 'next/image';

import Tag from 'components/Tag';

import * as S from './styles';

export type CardProps = {
  id: number;
  name: string;
  image: string;
  status: string;
};

const Card = ({ id, name, image, status }: CardProps) => {
  return (
    <S.Container>
      <S.LinkStyled href={`/character/${id}`}>
        <a>
          <S.ImageContainer>
            <Image src={image} alt={`Thumbnail of ${name}`} layout="fill" />
          </S.ImageContainer>

          <S.CardFooter>
            <Tag color={`${status === 'Alive' ? 'green' : 'red'}`}>
              {status}
            </Tag>
            <p>{name}</p>
          </S.CardFooter>
        </a>
      </S.LinkStyled>
    </S.Container>
  );
};

export default Card;
