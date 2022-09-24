import Image from 'next/image';
import { BiBookAlt as ComicIcon } from 'react-icons/bi';
import { BsCalendar3Event as EventsIcon } from 'react-icons/bs';
import { MdWebStories as StoriesIcon } from 'react-icons/md';
import { SiBookstack as SeriesIcon } from 'react-icons/si';

import CardInfo from 'components/CardInfo';
import Heading from 'components/Heading';
import Line from 'components/Line';

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
  console.log(image);

  return (
    <S.Container>
      <S.Content>
        <S.InfoContainer>
          <S.ImageContainer>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt={`${name} thumbnail`}
              title={`${name} thumbnail`}
              aria-label={`${name} thumbnail`}
            />
          </S.ImageContainer>

          <S.SectionInfo>
            <Heading lineBottom>{name}</Heading>

            <S.CardContainer>
              <Line>
                <CardInfo
                  href="#"
                  title="Espécie"
                  description={species}
                  icon={ComicIcon}
                />

                <CardInfo
                  href="#"
                  title="Estado"
                  description={status}
                  icon={SeriesIcon}
                />
              </Line>

              <Line>
                <CardInfo
                  href="#"
                  title="Genêro"
                  description={gender}
                  icon={StoriesIcon}
                />

                <CardInfo
                  href="#"
                  title="Localização"
                  description={location.name}
                  icon={EventsIcon}
                />
              </Line>
            </S.CardContainer>
          </S.SectionInfo>
        </S.InfoContainer>
      </S.Content>
    </S.Container>
  );
};

export default Character;
