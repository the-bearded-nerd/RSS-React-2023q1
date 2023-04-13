import { configureStore } from '@reduxjs/toolkit';

import formCardsReducer from '../features/formCards/formCardsSlice';
import searchInputReduser from '../features/searchInput/searchInput';
import { rickAndMortyApi } from '../services/rickAndMorty';

const store = configureStore({
  reducer: {
    formCards: formCardsReducer,
    searchInput: searchInputReduser,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
