import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FullnameInput from './fullnameInput';

describe('FullnameInput', () => {
  const fullnameInputTest = {
    localRef: React.createRef<HTMLInputElement>(),
    message: '',
  };
  it('Renders ConsentInput', async () => {
    render(
      <MemoryRouter>
        <FullnameInput localRef={fullnameInputTest.localRef} message={fullnameInputTest.message} />
      </MemoryRouter>
    );
    const input = screen.getByLabelText(/enter full name:/i);
    expect(input).toBeInTheDocument();
  });
});
