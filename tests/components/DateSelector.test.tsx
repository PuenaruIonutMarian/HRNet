import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DateSelector from '../../src/components/DateSelector/DateSelector';
import '@testing-library/jest-dom';

// Mocking the styles module
vi.mock('./DateSelector.module.scss', () => ({
  dateSelector: 'dateSelector',
  error: 'error',
}));

describe('DateSelector Component', () => {
  const defaultProps = {
    label: 'Select Date',
    name: 'date',
    value: '2024-08-28',
    onChange: vi.fn(),
  };

  it('renders the label correctly', () => {
    render(<DateSelector {...defaultProps} />);
    expect(screen.getByLabelText(/select date/i)).toBeInTheDocument();
  });

  it('renders the input field with the correct value', () => {
    render(<DateSelector {...defaultProps} />);
    const inputElement = screen.getByLabelText(/select date/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('2024-08-28');
  });

  it('calls onChange when the date input value changes', () => {
    const mockOnChange = vi.fn();
    render(<DateSelector {...defaultProps} onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText(/select date/i) as HTMLInputElement;

    // Simulate the change event
    fireEvent.change(inputElement, { target: { value: '2024-09-01' } });

    // Check that the onChange handler was called once
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  const errorMessage = 'Invalid date selected';

  it('displays the error message when error prop is provided', () => {
    render(<DateSelector {...defaultProps} error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
    expect(errorElement.className).toContain('error');
  });

  it('does not display an error message when error prop is not provided', () => {
    render(<DateSelector {...defaultProps} />);
    expect(screen.queryByText(/invalid date selected/i)).not.toBeInTheDocument();
  });
});
