import { configureStore } from '@reduxjs/toolkit';

import formCardsReducer from '../features/formCards/formCardsSlice';

const store = configureStore({
  reducer: {
    formCards: formCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
