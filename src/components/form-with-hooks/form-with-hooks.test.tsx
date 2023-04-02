import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FormWithHooks from './form-with-hooks';

describe('FormWithHooks', () => {
  it('Renders form', () => {
    render(<FormWithHooks addCard={() => {}} />);
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
  });
  it('Renders form with inputs', () => {
    render(<FormWithHooks addCard={() => {}} />);
    const textInput = screen.getByLabelText('Enter full name:');
    const dateInput = screen.getByLabelText('Birthday:');
    const countryInput = screen.getByLabelText('Choose a country:');
    const fileInput = screen.getByLabelText('Add picture');
    const consentInput = screen.getByLabelText('I consent to my personal data:');

    expect(textInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(consentInput).toBeInTheDocument();
  });

  it('Show error messages if fullname is not provided', async () => {
    render(<FormWithHooks addCard={() => {}} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const errorMessages = await screen.findByText('Must enter name');
    expect(button).toBeInTheDocument();
    expect(errorMessages).toBeInTheDocument();
  });
  it('Show error messages if fullname in wrong format', async () => {
    render(<FormWithHooks addCard={() => {}} />);
    const button = screen.getByRole('button');
    const textInput = screen.getByLabelText('Enter full name:');
    fireEvent.change(textInput, { target: { value: 'Bob' } });
    fireEvent.click(button);
    const errorMessages = await screen.findByText(
      'Fullname should contain name and surname starting with uppercase letters'
    );
    expect(button).toBeInTheDocument();
    expect(errorMessages).toBeInTheDocument();
  });
});
