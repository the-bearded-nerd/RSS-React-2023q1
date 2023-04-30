import { describe, it } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';

import Modal from './modal';

describe('Modal', () => {
  it('Renders not active modal with proper classes', () => {
    render(
      <Modal isActive={false} onClose={() => {}}>
        <p>Test</p>
      </Modal>
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('modal');
    expect(modal).not.toHaveClass('active');
    expect(modal.firstChild).toHaveClass('modal-content');
    expect(modal.firstChild).not.toHaveClass('active');
  });
  it('Rendersactive modal with proper classes', () => {
    render(
      <Modal isActive={true} onClose={() => {}}>
        <p>Test</p>
      </Modal>
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('modal');
    expect(modal).toHaveClass('active');
    expect(modal.firstChild).toHaveClass('modal-content');
    expect(modal.firstChild).toHaveClass('active');
  });
  it('Click outside of content works', () => {
    let flag = false;
    render(
      <Modal
        isActive={true}
        onClose={() => {
          flag = true;
        }}
      >
        <p>Test</p>
      </Modal>
    );
    const modal = screen.getByRole('dialog');
    fireEvent.click(modal);
    expect(flag).toBeTruthy();
  });
  it('Click inside content works', () => {
    render(
      <Modal isActive={true} onClose={() => {}}>
        <p>Test</p>
      </Modal>
    );
    const modal_content = screen.getByRole('dialog').firstChild;
    if (modal_content) fireEvent.click(modal_content);
  });
});
