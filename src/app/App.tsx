import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'src/pages/MainPage/MainPage';
import { PageRoutes } from 'src/shared/constants/routes';
import WrappedSvgSprite from 'src/shared/hocks/WrappedSvgSprite/WrappedSvgSprite';

const ReduxExamplePage = lazy(() => import('src/pages/ReduxExamplePage/ReduxExamplePage'));
const FontsExamplePage = lazy(() => import('src/pages/FontsExamplePage/FontsExamplePage'));
const DataFetchByRtkQueryExamplePage = lazy(
  () => import('src/pages/DataFetchByRtkQueryExamplePage/DataFetchByRtkQueryExamplePage'),
);

const SvgIconsExamplePage = lazy(() => import('src/pages/SvgExamplePage/SvgExamplePage'));

const ModalExamplePage = lazy(() => import('src/pages/ModalExamplePage/ModalExamplePage'));

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
