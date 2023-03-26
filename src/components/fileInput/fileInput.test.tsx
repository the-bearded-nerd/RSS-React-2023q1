import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FileInput from './fileInput';

describe('FileInput', () => {
  const fileInputTest = {
    localRef: React.createRef<HTMLInputElement>(),
    fileErrMsg: '',
  };
  it('Renders ConsentInput', async () => {
    render(
      <MemoryRouter>
        <FileInput localRef={fileInputTest.localRef} fileErrMsg={fileInputTest.fileErrMsg} />
      </MemoryRouter>
    );
    const input = screen.getByLabelText(/add picture/i);
    expect(input).toBeInTheDocument();
  });
});
