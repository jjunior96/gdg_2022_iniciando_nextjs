import { GetServerSideProps } from 'next';

import api from 'services/api';

import PageHeader from 'components/PageHeader';

import Character, { CharacterProps } from 'templates/Character';

type CharacterDataProps = {
  data: CharacterProps;
};

export default function CharacterPage({ data }: CharacterDataProps) {
  const { name, image, gender, location, status, species } = data;

  return (
    <PageHeader onBack title={name}>
      <Character
        name={name}
        image={image}
        gender={gender}
        status={status}
        species={species}
        location={location}
      />
    </PageHeader>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const { data } = await api.get(`character/${id}`);

  return {
    props: {
      data
    }
  };
};
