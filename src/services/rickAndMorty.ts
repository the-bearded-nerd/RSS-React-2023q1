import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';

import createApi from './createApi';

import { ICard } from '../client/components/card/card';

interface IQueryProps {
  results: ICard[];
}

type TypeRtkQuery = typeof rtkQuery & { default?: unknown };
const { fetchBaseQuery } = ((rtkQuery as TypeRtkQuery).default ?? rtkQuery) as typeof rtkQuery;

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getCardsBySearchQuery: builder.query<IQueryProps, string>({
      query: (name) => `character/?name=${name}`,
    }),
    getCardById: builder.query<ICard, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCardsBySearchQueryQuery, useGetCardByIdQuery } = rickAndMortyApi;
