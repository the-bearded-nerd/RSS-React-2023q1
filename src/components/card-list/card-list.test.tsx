import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CardList from './card-list';
import userData from '../../usersData.json';

describe('CardList', () => {
  it('Renders card with img', async () => {
    render(
      <MemoryRouter>
        <CardList userData={userData} />
      </MemoryRouter>
    );
    const cards = screen.getAllByRole('card');
    expect(cards.length).toBe(10);
  });
});
