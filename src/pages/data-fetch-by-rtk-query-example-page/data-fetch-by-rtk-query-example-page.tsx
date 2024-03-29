import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import {
  useGetPokemonByNameQuery,
  useLazyLoadAllPokemonsQuery,
} from 'src/services/pokemon-api/pokemon-api';
import CenterLayout from 'src/shared/layouts/center-layout/center-layout';
import PageLayout from 'src/shared/layouts/page-layout/page-layout';

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
              <p>Имя покемона: {data?.name}</p>
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
