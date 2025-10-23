import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/app/app';
import { SliceNameSpace } from 'src/store/constants';
import { createMockStore } from 'src/testConfig';

describe('Проверка компонента App', () => {
  describe('Проверка отрисовки', () => {
    it('Компонент корректно отрисовывается', () => {
      const store = createMockStore({
        [SliceNameSpace.MainPage]: {
          title: 'Hello',
        },
      });

      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
