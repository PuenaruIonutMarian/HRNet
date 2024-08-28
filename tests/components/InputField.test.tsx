import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputField from '../../src/components/InputField/InputField';
import '@testing-library/jest-dom';

// Mocking the styles module
vi.mock('./inputfield.module.scss', () => ({
  inputField: 'inputField',
  error: 'error',
}));

describe('InputField Component', () => {
  const defaultProps = {
    label: 'Label',
    name: 'input',
    value: '',
    onChange: vi.fn(),
  };

  it('renders the label and input field correctly', () => {
    render(<InputField {...defaultProps} />);
    const labelElement = screen.getByText('Label');
    const inputElement = screen.getByLabelText('Label');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

 it('renders the error message when provided', () => {
  const errorMessage = 'Error message';
  render(<InputField {...defaultProps} error={errorMessage} />);
  const errorElement = screen.getByText(errorMessage);

  expect(errorElement).toBeInTheDocument();
  expect(errorElement).toHaveClass(/_error_/); // Check for class existence
});

    it('calls onChange when the input value changes', () => {
    render(<InputField {...defaultProps} />);
    const inputElement = screen.getByLabelText('Label') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'New value' } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    });

  it('renders the correct input type when specified', () => {
    render(<InputField {...defaultProps} type="email" />);
    const inputElement = screen.getByLabelText('Label');

    expect(inputElement).toHaveAttribute('type', 'email');
  });
});