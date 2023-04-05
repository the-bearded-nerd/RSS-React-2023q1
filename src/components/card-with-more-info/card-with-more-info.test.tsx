import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardWithMoreInfo from './card-with-more-info';
import { TEST_CARD } from '../../mocks/data';
import server from '../../mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('CardWithMoreInfo', () => {
  it('Renders card with more info', async () => {
    render(<CardWithMoreInfo cardURL={TEST_CARD.url} />);
    const name = await screen.findByText(TEST_CARD.name);
    const gender = await screen.findByText(`Gender: ${TEST_CARD.gender}`);
    expect(name).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });

  it('Renders progress status', async () => {
    render(<CardWithMoreInfo cardURL={TEST_CARD.url} />);
    const loading = screen.getByText('Loading.....');
    expect(loading).toBeInTheDocument();
  });
});
