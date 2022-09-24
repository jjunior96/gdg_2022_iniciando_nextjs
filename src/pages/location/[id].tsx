import { GetStaticPaths, GetStaticProps } from 'next';

import { LocationsService } from 'services/http/locations';
import { LocationsProps } from 'services/http/locations/types';

import PageHeader from 'components/PageHeader';

export default function LocationPage({
  name,
  dimension,
  residents
}: LocationsProps) {
  return (
    <PageHeader onBack title={name}>
      <div>Localização: {name}</div>
      <div>Dimensão: {dimension}</div>
      <div>Populução: {residents.length}</div>
    </PageHeader>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await LocationsService.getById(+params!.id!);

  return {
    props: {
      ...data
    },
    revalidate: 10
  };
};
