import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormCardList from './form-card-list';

describe('FormCardList', () => {
  const someTestData = [
    {
      name: 'test',
      date: '12.10.2022',
      imgURL:
        'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
      gender: 'male',
      option: 'Russia',
      id: 1,
    },
    {
      name: 'test',
      date: '12.10.2022',
      imgURL:
        'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
      gender: 'male',
      option: 'Russia',
      id: 2,
    },
  ];
  it('Renders FormCardList with 2 Cards', () => {
    render(<FormCardList cards={someTestData} />);
    const cards = screen.getAllByRole('listitem');
    expect(cards.length).toBe(2);
  });
});
