import { configureStore } from '@reduxjs/toolkit';

import formCardsReducer from '../features/formCards/formCardsSlice';
import searchInputReduser from '../features/searchInput/searchInput';

const store = configureStore({
  reducer: {
    formCards: formCardsReducer,
    searchInput: searchInputReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
