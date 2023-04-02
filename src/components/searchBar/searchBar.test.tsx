import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SearchBar from './searchBar';

describe('SearchBar', () => {
  it('SearchBar loads value from localstorage', async () => {
    localStorage.setItem('savedSearchString', 'blablabla');
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const searchText = screen.getByRole('textbox');
    expect(searchText).toHaveValue('blablabla');
  });
  it('SearchBar loads without localStorage value', async () => {
    localStorage.removeItem('savedSearchString');
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const searchText = screen.getByRole('textbox');
    expect(searchText).toHaveValue('');
  });
});
