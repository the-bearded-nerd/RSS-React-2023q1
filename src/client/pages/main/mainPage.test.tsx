import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import MainPage from './mainPage';
import setupStore from 'client/app/store';

const store = setupStore();

describe('MainPage', () => {
  it('Modal opens after clicking on card', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const modal = screen.getByRole('dialog');
    expect(modal).not.toHaveClass('active');
    const someCard = await screen.findAllByRole('listitem');
    fireEvent.click(someCard[0]);
    expect(modal).toHaveClass('active');
  });
});
