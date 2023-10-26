import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import CenterLayout from 'src/shared/layouts/center-layout/center-layout';
import PageLayout from 'src/shared/layouts/page-layout/page-layout';
import { PageRoutes } from '../../shared/constants/routes';

function MainPage() {
  return (
    <HelmetProvider>
      <PageLayout
        renderFooter={() => (
          <CenterLayout>
            <h2>Контент футера</h2>
          </CenterLayout>
        )}
      >
        <Helmet>
          <title>Руководство</title>
        </Helmet>
        <CenterLayout>
          <h1>Руководство</h1>
          <ul>
            <li>
              <Link to={PageRoutes.ReduxExamplePage}>Пример с redux</Link>
            </li>
            <li>
              <Link to={PageRoutes.FontsExamplePage}>Пример с шрифтами</Link>
            </li>
            <li>
              <Link to={PageRoutes.SvgIconsExamplePage}>Пример с svg иконками</Link>
            </li>
            <li>
              <Link to={PageRoutes.DataFetchByRtkQueryExamplePage}>
                Пример работы с api (rtk-query)
              </Link>
            </li>
            <li>
              <Link to={PageRoutes.ModalExamplePage}>Пример работы модалки</Link>
            </li>
          </ul>
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
