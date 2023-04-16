import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { IFormCard } from '../../components/form-card/form-card';

interface FormCardsState {
  value: IFormCard[];
}

const initialState: FormCardsState = {
  value: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<IFormCard>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFormCard } = formCardsSlice.actions;

export const selectFormCards = (state: RootState) => state.formCards.value;

export default formCardsSlice.reducer;
