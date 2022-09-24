import { GetStaticProps } from 'next';

import { LocationsService } from 'services/http/locations';
import { ReturnLocationsProps } from 'services/http/locations/types';

import Locations from 'templates/Locations';

export default function LocationPage({ results }: ReturnLocationsProps) {
  return <Locations results={results} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await LocationsService.getAll();

  return {
    props: {
      results: data
    },
    revalidate: 10 // 10 segundos
  };
};
