import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TEST_CARD_LIST } from '../../../mocks/data';

import CardList from './card-list';

describe('CardList', () => {
  it('Renders test cards', async () => {
    render(
      <MemoryRouter>
        <CardList userData={TEST_CARD_LIST} onCardClick={() => {}} />
      </MemoryRouter>
    );
    const cards = screen.getAllByRole('listitem');
    expect(cards.length).toBe(TEST_CARD_LIST.length);
  });
  it('Renders No results found when no cards passed', async () => {
    render(
      <MemoryRouter>
        <CardList userData={[]} onCardClick={() => {}} />
      </MemoryRouter>
    );
    const noResults = screen.getByText('No results found');
    expect(noResults).toBeInTheDocument();
  });
});
