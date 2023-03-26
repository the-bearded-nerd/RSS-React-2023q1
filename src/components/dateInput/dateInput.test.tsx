import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DateInput from './dateInput';

describe('DateInput', () => {
  const dateInputTest = {
    localRef: React.createRef<HTMLInputElement>(),
    dateErrMsg: '',
  };
  it('Renders ConsentInput', async () => {
    render(
      <MemoryRouter>
        <DateInput localRef={dateInputTest.localRef} dateErrMsg={dateInputTest.dateErrMsg} />
      </MemoryRouter>
    );
    const input = screen.getByLabelText(/birthday:/i);
    expect(input).toBeInTheDocument();
  });
});
