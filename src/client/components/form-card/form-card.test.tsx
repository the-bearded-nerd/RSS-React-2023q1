import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormCard from './form-card';

describe('FormCard', () => {
  const someTestData = {
    name: 'test',
    date: '12.10.2022',
    imgURL:
      'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
    gender: 'male',
    option: 'Russia',
    id: 1,
  };
  it('Renders form card with img', () => {
    render(<FormCard {...someTestData} />);
    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
  });
});
