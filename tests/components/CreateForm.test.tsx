import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import CreateForm from '../../src/components/CreateForm/CreateForm';
import employeeReducer, { addEmployee } from '../../src/store/employeeSlice';
import '@testing-library/jest-dom';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

describe('CreateForm Component', () => {
  beforeEach(() => {
    vi.spyOn(store, 'dispatch');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Department')).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );

    const firstNameInput = screen.getByLabelText('First Name') as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');

    const lastNameInput = screen.getByLabelText('Last Name') as HTMLInputElement;
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
  });

  test('validates form and shows errors', () => {
    render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );

    fireEvent.click(screen.getByText('Save New Employee'));

    const errorMessages = screen.getAllByText(/This field is required/i);
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('submits the form and shows modal', async () => {
    render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByLabelText('Start Date'), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText('Department'), { target: { value: 'Engineering' } });
    fireEvent.change(screen.getByLabelText('Street'), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText('City'), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'NY' } });
    fireEvent.change(screen.getByLabelText('Zip Code'), { target: { value: '10001' } });

    fireEvent.click(screen.getByText('Save New Employee'));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(addEmployee(expect.anything()));
    });

    expect(screen.getByText('Employee Created!')).toBeInTheDocument();
  });

  test('closes the modal when close button is clicked', async () => {
    render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Date of Birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByLabelText('Start Date'), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText('Department'), { target: { value: 'Engineering' } });
    fireEvent.change(screen.getByLabelText('Street'), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText('City'), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'NY' } });
    fireEvent.change(screen.getByLabelText('Zip Code'), { target: { value: '10001' } });

    fireEvent.click(screen.getByText('Save New Employee'));

    await waitFor(() => {
      expect(screen.getByText('Employee Created!')).toBeInTheDocument();
    });

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Employee Created!')).not.toBeInTheDocument();
    });
  });
});
