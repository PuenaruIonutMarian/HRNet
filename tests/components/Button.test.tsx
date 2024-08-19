import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button/Button';
import '@testing-library/jest-dom';
import { vi } from 'vitest';


describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct CSS class', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    const className = buttonElement.getAttribute('class');
    expect(className).toContain('button');
  });
});