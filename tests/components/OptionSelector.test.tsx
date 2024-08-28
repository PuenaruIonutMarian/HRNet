import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import OptionSelector from '../../src/components/OptionSelector/OptionSelector';
import '@testing-library/jest-dom';

// Mocking the styles module
vi.mock('./OptionSelector.module.scss', () => ({
  optionSelector: 'optionSelector',
  error: 'error',
}));

describe('OptionSelector Component', () => {
  const defaultProps = {
    label: 'Select Country',
    name: 'country',
    options: ['USA', 'Canada', 'Mexico'],
    value: '',
    onChange: vi.fn(),
    error: '',
  };

  it('renders the label and select element correctly', () => {
    render(<OptionSelector {...defaultProps} />);
    const labelElement = screen.getByText(defaultProps.label);
    const selectElement = screen.getByTestId('select-element');

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('name', defaultProps.name);
  });

  it('renders the default option and all provided options', () => {
    render(<OptionSelector {...defaultProps} />);
    const selectElement = screen.getByTestId('select-element');
    const options = selectElement.querySelectorAll('option');

    expect(options.length).toBe(defaultProps.options.length + 1); // Default + provided options
    expect(options[0].text).toBe(`Select ${defaultProps.label}`);
    defaultProps.options.forEach((option, index) => {
      expect(options[index + 1].text).toBe(option);
      expect(options[index + 1].value).toBe(option);
    });
  });

  it('renders the error message when provided', () => {
    const errorMessage = 'Please select a country';
    render(<OptionSelector {...defaultProps} error={errorMessage} />);
    const errorElement = screen.getByTestId('error-message');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass(/_error_/);
  });

  it('calls onChange when the selected value changes', () => {
    const onChange = vi.fn();
    render(<OptionSelector {...defaultProps} onChange={onChange} />);
    const selectElement = screen.getByTestId('select-element');

    fireEvent.change(selectElement, { target: { value: 'USA' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});