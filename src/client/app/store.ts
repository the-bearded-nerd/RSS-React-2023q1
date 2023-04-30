import { PreloadedState } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

import formCardsReducer from '../features/formCards/formCardsSlice';
import searchInputReduser from '../features/searchInput/searchInput';
import { rickAndMortyApi } from '../../services/rickAndMorty';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({
  formCards: formCardsReducer,
  searchInput: searchInputReduser,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
