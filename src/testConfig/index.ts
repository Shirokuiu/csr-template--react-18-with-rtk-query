import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store/root-reducer';
import { api } from 'src/services/api';
import { State } from 'src/store/types/state';

export const createMockStore = (preloadedState?: Partial<State>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState as State,
    middleware: (getDefault) =>
      getDefault({
        thunk: { extraArgument: api },
        serializableCheck: false,
      }),
  });
