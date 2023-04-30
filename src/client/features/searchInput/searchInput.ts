import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

interface SearchInputState {
  value: string;
}

const initialState: SearchInputState = { value: '' };

const searchInputSlice = createSlice({
  name: 'seatchInput',
  initialState,
  reducers: {
    saveSearchInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { saveSearchInput } = searchInputSlice.actions;

export const selectSearchInput = (state: RootState) => state.searchInput.value;

export default searchInputSlice.reducer;
