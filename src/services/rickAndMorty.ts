import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICard } from 'components/card/card';

interface IQueryProps {
  results: ICard[];
}

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
