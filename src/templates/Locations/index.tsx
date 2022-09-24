import Link from 'next/link';

import { ReturnLocationsProps } from 'services/http/locations/types';

import PageHeader from 'components/PageHeader';

import * as S from './styles';

const Locations = ({ results }: ReturnLocationsProps) => {
  console.log(results);

  return (
    <PageHeader onBack title="Localizações">
      <S.Container>
        {results.map((item) => (
          <S.Content key={item.id}>
            <Link href={`/location/${item.id}`}>
              <a>
                <p>
                  {item.name} <span> {item.dimension}</span>{' '}
                </p>
              </a>
            </Link>
          </S.Content>
        ))}
      </S.Container>
    </PageHeader>
  );
};

export default Locations;
