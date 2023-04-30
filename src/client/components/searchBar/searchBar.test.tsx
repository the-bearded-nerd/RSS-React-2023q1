import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchBar from './searchBar';
import setupStore from '../../app/store';
import { saveSearchInput } from '../../features/searchInput/searchInput';

const store = setupStore();
describe('SearchBar', () => {
  const dispatch = store.dispatch;
  it('SearchBar loads value from Redux store', async () => {
    dispatch(saveSearchInput('blablabla'));
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </MemoryRouter>
    );
    const searchText = screen.getByRole('textbox');
    expect(searchText).toHaveValue('blablabla');
  });
});
