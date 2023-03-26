import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ConsentInput from './consentInput';

describe('ConsentInput', () => {
  const consetTest = {
    localRef: React.createRef<HTMLInputElement>(),
    checkboxErrMsg: '',
  };
  it('Renders ConsentInput with checkbox', async () => {
    render(
      <MemoryRouter>
        <ConsentInput localRef={consetTest.localRef} checkboxErrMsg={consetTest.checkboxErrMsg} />
      </MemoryRouter>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
