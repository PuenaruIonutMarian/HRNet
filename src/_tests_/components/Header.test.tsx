import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; 

// Mocking the styles module
vi.mock('./header.module.scss', () => ({
  header: 'header',
  hr: 'hr',
}));

describe('Header Component', () => {
  const renderHeader = () => {
    // Use BrowserRouter to provide routing context
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it('renders the title correctly', () => {
    renderHeader();
    expect(screen.getByText('HR')).toBeInTheDocument();
    expect(screen.getByText('NET')).toBeInTheDocument();
  });

  it('renders the navigation link to "See All Employees"', () => {
    renderHeader();
    const linkElement = screen.getByText('See All Employees');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/employees-table');
  });

  it('applies the correct styles', () => {
    renderHeader();
    
    // Check the header container
    const headerContainer = screen.getByTestId('header-container');
    expect(headerContainer).toHaveClass(/_header_/);

    // Check the span inside <h1>
    const spanElement = screen.getByText('NET').closest('span');
    expect(spanElement).toHaveClass(/_hr_/);
  });
});
