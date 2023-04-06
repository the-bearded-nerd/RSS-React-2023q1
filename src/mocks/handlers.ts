import { rest } from 'msw';

import { TEST_CARD_LIST } from './data';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/?', (req, res, ctx) => {
    const name = req.url.searchParams.get('name') || '';
    return res(
      ctx.status(200),
      ctx.json(TEST_CARD_LIST.filter((elem) => elem.name.includes(name)))
    );
  }),
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    const { id } = req.params;
    const cardWithId = TEST_CARD_LIST.filter((card) => card.id === Number(id));
    if (!cardWithId.length) return res(ctx.status(404));
    return res(ctx.status(200), ctx.json(cardWithId[0]));
  }),
];

export default handlers;
