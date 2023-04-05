import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Card } from './card';

import { TEST_CARD } from '../../mocks/data';

describe('Card', () => {
  it('Renders card with img', async () => {
    render(
      <MemoryRouter>
        <Card cardData={TEST_CARD} onCardClick={() => {}} />
      </MemoryRouter>
    );
    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
  });

  it('Passed function works on click', async () => {
    let testDataFromCard;
    render(
      <MemoryRouter>
        <Card
          cardData={TEST_CARD}
          onCardClick={(data) => {
            testDataFromCard = data;
          }}
        />
      </MemoryRouter>
    );
    const cardText = screen.getByText(TEST_CARD.name);
    fireEvent.click(cardText);
    expect(testDataFromCard).toBe(TEST_CARD);
  });
});
