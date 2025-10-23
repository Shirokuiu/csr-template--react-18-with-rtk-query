import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import {
  useGetPokemonByNameQuery,
  useLazyLoadAllPokemonsQuery,
} from 'src/services/pokemonApi/pokemonApi';
import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';

function DataFetchByRtkQueryExamplePage() {
  const { data, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  // Загрузка списка по нажатию кнопки
  const [trigger, { data: allData, isLoading: isLoadingAllData }] = useLazyLoadAllPokemonsQuery();

  const handleLoadAllPokemons = () => {
    trigger();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Работа с api</title>
      </Helmet>
      <PageLayout>
        <CenterLayout>
          {isLoading ? (
            'Загрузка...'
          ) : (
            <>
              <p>Имя покемона: {(data as { name: string })?.name}</p>
              <button type="button" onClick={handleLoadAllPokemons}>
                Загрузить всех покемонов
              </button>
              {}
              <p>Все покемоны:</p>
              {isLoadingAllData ? (
                'Загрузка...'
              ) : (
                <ul>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  {allData?.results.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              )}
            </>
          )}
          <Link to="/">На главную</Link>
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default DataFetchByRtkQueryExamplePage;
