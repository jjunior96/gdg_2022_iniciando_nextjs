import { useCallback, useEffect, useState } from 'react';

import useDebounce from 'hooks/useDebounce';
import { CharactersService } from 'services/http/characters';
import { CharactersProps } from 'services/http/characters/types';

import Card from 'components/Card';
import Empty from 'components/Empty';
import Form from 'components/Form';
import Input from 'components/Input';
import PageHeader from 'components/PageHeader';

import * as S from './styles';

const Home = () => {
  const [characters, setCharacters] = useState<CharactersProps[]>([]);
  const [searchName, setSearchName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchNameDebounced = useDebounce<string>(searchName, 400);

  const handleFetchCharacterByName = useCallback(async () => {
    setErrorMessage('');

    try {
      const charactersResponse = await CharactersService.getByName(
        searchNameDebounced
      );

      setCharacters(charactersResponse!);
    } catch (error) {
      setErrorMessage('Verifique o nome digitado');
    }
  }, [searchNameDebounced]);

  useEffect(() => {
    handleFetchCharacterByName();
  }, [handleFetchCharacterByName]);

  return (
    <PageHeader title="Home">
      <S.Container>
        <S.Content>
          <Form>
            <Input
              placeholder="Ex.: Rick Sanchez"
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
              error={errorMessage}
              autoFocus
            />
          </Form>

          {!characters.length && <Empty title="Nenhum resultado" />}

          <S.CardGrid>
            {characters.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                status={item.status}
              />
            ))}
          </S.CardGrid>
        </S.Content>
      </S.Container>
    </PageHeader>
  );
};

export default Home;
