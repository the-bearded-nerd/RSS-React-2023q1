import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Card } from './card';

describe('Card', () => {
  const someTestUser = {
    id: 666,
    name: 'Test',
    username: 'test test',
    email: 'test@test.su',
    phone: '666-666-666',
    website: 'google.com',
  };
  it('Renders card with img', async () => {
    render(
      <MemoryRouter>
        <Card cardData={someTestUser} />
      </MemoryRouter>
    );
    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
  });
});
