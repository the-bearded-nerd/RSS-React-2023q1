import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardWithMoreInfo from './card-with-more-info';
import { TEST_CARD_LIST } from '../../mocks/data';
import server from '../../mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const test_card = TEST_CARD_LIST[0];

describe('CardWithMoreInfo', () => {
  it('Renders card with more info', async () => {
    render(<CardWithMoreInfo cardURL={test_card.url} />);
    const name = await screen.findByText(test_card.name);
    const gender = await screen.findByText(`Gender: ${test_card.gender}`);
    expect(name).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });

  it('Renders progress status', async () => {
    render(<CardWithMoreInfo cardURL={test_card.url} />);
    const loading = screen.getByText('Loading.....');
    expect(loading).toBeInTheDocument();
  });
});
