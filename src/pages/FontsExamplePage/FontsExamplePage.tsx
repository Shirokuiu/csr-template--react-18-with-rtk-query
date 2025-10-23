import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';

function FontsExamplePage() {
  return (
    <HelmetProvider>
      <PageLayout>
        <Helmet>
          <title>Пример со шрифтами</title>
        </Helmet>
        <CenterLayout>
          <p className="tp-19-23-400 tp-color-gray-8">Шрифт</p>
          <p className="tp-14-16-400 tp-color-gray-9">Шрифт</p>
          <Link to="/">На главную</Link>
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default FontsExamplePage;
