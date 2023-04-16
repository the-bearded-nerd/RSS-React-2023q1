import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import FormPage from './formPage';
import store from '../../app/store';

describe('FormPage', () => {
  it('Renders FormPage with h2', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const heading = screen.getByText('Form page content');
    expect(heading).toBeInTheDocument();
  });
});
