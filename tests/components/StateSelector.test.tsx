import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StateSelector from '../../src/components/StateSelector/StatesSelector';
import '@testing-library/jest-dom';

// Mocking the styles module
vi.mock('./StateSelector.module.scss', () => ({
  stateSelector: 'stateSelector',
  error: 'error',
}));

describe('StateSelector Component', () => {
  const defaultProps = {
    label: 'Select State',
    name: 'state',
    options: [
      { name: 'California', abbreviation: 'CA' },
      { name: 'Texas', abbreviation: 'TX' },
      { name: 'New York', abbreviation: 'NY' },
    ],
    value: '',
    onChange: vi.fn(),
    error: '',
  };

  it('renders the label and select element correctly', () => {
    render(<StateSelector {...defaultProps} />);
    const labelElement = screen.getByText(defaultProps.label);
    const selectElement = screen.getByTestId('select-element'); 

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('name', defaultProps.name);
  });

  it('renders the default option and all provided options', () => {
    render(<StateSelector {...defaultProps} />);
    const selectElement = screen.getByTestId('select-element');

    const options = selectElement.querySelectorAll('option');

    expect(options.length).toBe(defaultProps.options.length + 1); 
    expect(options[0].text).toBe(`Select ${defaultProps.label}`);
    defaultProps.options.forEach((option, index) => {
      expect(options[index + 1].text).toBe(option.name);
      expect(options[index + 1].value).toBe(option.abbreviation);
    });
  });

  it('renders the error message when provided', () => {
    const errorMessage = 'Please select a state';
    render(<StateSelector {...defaultProps} error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass(/_error_/); 
  });

  it('calls onChange when the selected value changes', () => {
    render(<StateSelector {...defaultProps} />);
    const selectElement = screen.getByTestId('select-element'); 

    fireEvent.change(selectElement, { target: { value: 'TX' } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });


  it('assigns a unique data-testid to the select element', () => {
    render(<StateSelector {...defaultProps} />);
    const selectElement = screen.getByTestId('select-element'); 

    expect(selectElement).toBeInTheDocument();
  });
});