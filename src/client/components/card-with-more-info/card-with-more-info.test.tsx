import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import CardWithMoreInfo from './card-with-more-info';
import setupStore from '../../app/store';
import { TEST_CARD_LIST } from '../../../mocks/data';
import server from '../../../mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const test_card = TEST_CARD_LIST[0];

const store = setupStore();

describe('CardWithMoreInfo', () => {
  it('Renders progress status', async () => {
    render(
      <Provider store={store}>
        <CardWithMoreInfo cardId={test_card.id} />
      </Provider>
    );
    const loading = screen.getByText('Loading.....');
    expect(loading).toBeInTheDocument();
  });

  it('Renders card with more info', async () => {
    render(
      <Provider store={store}>
        <CardWithMoreInfo cardId={test_card.id} />
      </Provider>
    );

    const name = await screen.findByText(test_card.name);
    const gender = await screen.findByText(`Gender: ${test_card.gender}`);
    expect(name).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });
  it('Renders no data found when no data found', async () => {
    render(
      <Provider store={store}>
        <CardWithMoreInfo cardId={0} />
      </Provider>
    );
    const noDataFound = await screen.findByText(/No data found/);
    expect(noDataFound).toBeInTheDocument();
  });
});
