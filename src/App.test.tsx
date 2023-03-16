import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('Renders RSS React Week1', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('RSS React Week1');
  });
});
