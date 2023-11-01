import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'src/pages/main-page/main-page';
import { PageRoutes } from 'src/shared/constants/routes';
import WrappedSvgSprite from 'src/shared/hocks/wrapped-svg-sprite/wrapped-svg-sprite';

const ReduxExamplePage = lazy(() => import('src/pages/redux-example-page/redux-example-page'));
const FontsExamplePage = lazy(() => import('src/pages/fonts-example-page/fonts-example-page'));
const DataFetchByRtkQueryExamplePage = lazy(
  () =>
    import('src/pages/data-fetch-by-rtk-query-example-page/data-fetch-by-rtk-query-example-page'),
);

const SvgIconsExamplePage = lazy(() => import('src/pages/svg-example-page/svg-icons-example-page'));

const ModalExamplePage = lazy(() => import('src/pages/modal-example-page/modal-example-page'));

function App() {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.Index}>
          <Route index element={<MainPage />} />
          <Route
            path={PageRoutes.ReduxExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <ReduxExamplePage />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.SvgIconsExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <SvgIconsExamplePage />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.FontsExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <FontsExamplePage />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.DataFetchByRtkQueryExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <DataFetchByRtkQueryExamplePage />
              </Suspense>
            }
          />
          <Route
            path={PageRoutes.ModalExamplePage}
            element={
              <Suspense fallback={<>...</>}>
                <ModalExamplePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <WrappedSvgSprite />
    </>
  );
}

export default App;
