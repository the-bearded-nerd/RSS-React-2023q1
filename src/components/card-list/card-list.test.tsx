import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TEST_CARD_LIST } from '../../mocks/data';

import CardList from './card-list';

describe('CardList', () => {
  it('Renders card with img', async () => {
    render(
      <MemoryRouter>
        <CardList userData={TEST_CARD_LIST} onCardClick={() => {}} />
      </MemoryRouter>
    );
    const cards = screen.getAllByRole('listitem');
    expect(cards.length).toBe(TEST_CARD_LIST.length);
  });
});
