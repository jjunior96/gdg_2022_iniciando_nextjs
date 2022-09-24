import Image from 'next/image';

import Heading from 'components/Heading';
import Tag from 'components/Tag';

import * as S from './styles';

export type CharacterProps = {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
};

const Character = ({
  name,
  image,
  status,
  species,
  gender,
  location
}: CharacterProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.HalfPage>
          <S.ImageContainer>
            <Image
              src={image}
              loading="lazy"
              alt={`Thumbnail of ${name}`}
              placeholder="blur"
              layout="fill"
              blurDataURL={image}
              title={name}
            />
          </S.ImageContainer>
        </S.HalfPage>
        <S.HalfPage>
          <S.InfoContainer>
            <Heading lineLeft lineColor="secundary">
              {name}
            </Heading>

            <Tag color={`${status === 'Alive' ? 'green' : 'red'}`}>
              {status}
            </Tag>
            <p>espécie: {species}</p>
            <p>genêro: {gender}</p>
            <p>localização: {location.name}</p>
          </S.InfoContainer>
        </S.HalfPage>
      </S.Content>
    </S.Container>
  );
};

export default Character;
