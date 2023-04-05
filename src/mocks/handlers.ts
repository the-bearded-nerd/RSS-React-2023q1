import { rest } from 'msw';

import { TEST_CARD } from './data';

export const handlers = [
  rest.get(TEST_CARD.url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TEST_CARD));
  }),
];
