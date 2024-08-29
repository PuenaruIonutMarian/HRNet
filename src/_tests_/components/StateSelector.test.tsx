import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StateSelector from '../../components/StateSelector/StatesSelector'; 

vi.mock('./StateSelector.module.scss', () => ({
  stateSelector: 'stateSelector',
  error: 'error',
}));

describe('StateSelector Component', () => {
  const defaultProps = {
    label: 'Select State',
    name: 'state',
    options: [{ name: 'California', abbreviation: 'CA' }, { name: 'Texas', abbreviation: 'TX' }],
    value: '',
    onChange: vi.fn(),
    error: '',
    'data-testid': 'state', 
  };

  it('renders the label and select element correctly', () => {
    render(<StateSelector {...defaultProps} />);
    const labelElement = screen.getByText(defaultProps.label);
    const selectElement = screen.getByTestId('state-select');

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('name', defaultProps.name);
  });

  it('renders the default option and all provided options', () => {
    render(<StateSelector {...defaultProps} />);
    const selectElement = screen.getByTestId('state-select');
    const options = selectElement.querySelectorAll('option');

    expect(options.length).toBe(defaultProps.options.length + 1); // Default + provided options
    expect(options[0].text).toBe(`Select ${defaultProps.label}`);
    defaultProps.options.forEach((option, index) => {
      expect(options[index + 1].text).toBe(option.name);
      expect(options[index + 1].value).toBe(option.abbreviation);
    });
  });

  it('renders the error message when provided', () => {
    const errorMessage = 'Please select a state';
    render(<StateSelector {...defaultProps} error={errorMessage} />);
    const errorElement = screen.getByTestId('state-error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass(/error/); 
  });

  it('calls onChange when the selected value changes', () => {
    const onChange = vi.fn();
    render(<StateSelector {...defaultProps} onChange={onChange} />);
    const selectElement = screen.getByTestId('state-select');

    fireEvent.change(selectElement, { target: { value: 'CA' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
