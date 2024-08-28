import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useEmployeeValidation from '../../src/utils/hooks/EmployeeValidation'; // Adjust the import path as needed
import { Employee } from '../../src/types/Employee'; // Adjust the import path as needed

describe('useEmployeeValidation', () => {
  const validEmployee: Employee = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    department: 'Engineering',
  };

  it('should return no errors for a valid employee', () => {
    const { result } = renderHook(() => useEmployeeValidation(validEmployee));
    
    act(() => {
      result.current.validateForm();
    });

    expect(result.current.errors).toEqual({});
  });

  it('should validate required fields', () => {
    const invalidEmployee = { ...validEmployee, firstName: '', lastName: '' };
    const { result } = renderHook(() => useEmployeeValidation(invalidEmployee));
    
    act(() => {
      result.current.validateForm();
    });

    expect(result.current.errors).toEqual({
      firstName: 'This field is required',
      lastName: 'This field is required',
    });
  });

  it('should validate name fields', () => {
    const invalidEmployee = { ...validEmployee, firstName: 'John123', lastName: 'Doe!' };
    const { result } = renderHook(() => useEmployeeValidation(invalidEmployee));
    
    act(() => {
      result.current.validateForm();
    });

    expect(result.current.errors).toEqual({
      firstName: 'Only letters, spaces, and hyphens are allowed',
      lastName: 'Only letters, spaces, and hyphens are allowed',
    });
  });

  it('should validate date of birth', () => {
    const futureDate = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const minorDate = new Date(Date.now() - (17 * 365 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    
    const futureBirthEmployee = { ...validEmployee, dateOfBirth: futureDate };
    const minorEmployee = { ...validEmployee, dateOfBirth: minorDate };

    const { result: futureResult } = renderHook(() => useEmployeeValidation(futureBirthEmployee));
    const { result: minorResult } = renderHook(() => useEmployeeValidation(minorEmployee));
    
    act(() => {
      futureResult.current.validateForm();
      minorResult.current.validateForm();
    });

    expect(futureResult.current.errors).toEqual({
      dateOfBirth: 'In the future only robots will work.',
    });

    expect(minorResult.current.errors).toEqual({
      dateOfBirth: 'Minors are not allowed to work',
    });
  });

  it('should validate start date', () => {
    const pastDate = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const invalidEmployee = { ...validEmployee, startDate: pastDate };
    const { result } = renderHook(() => useEmployeeValidation(invalidEmployee));
    
    act(() => {
      result.current.validateForm();
    });

    expect(result.current.errors).toEqual({
      startDate: 'Start date must be in the future',
    });
  });

  it('should validate zip code', () => {
    const invalidEmployee = { ...validEmployee, zipCode: 'ABC123' };
    const { result } = renderHook(() => useEmployeeValidation(invalidEmployee));
    
    act(() => {
      result.current.validateForm();
    });

    expect(result.current.errors).toEqual({
      zipCode: 'Zip code should be a number',
    });
  });

  it('should validate all fields', () => {
    const invalidEmployee = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    };
    const { result } = renderHook(() => useEmployeeValidation(invalidEmployee));
    
    act(() => {
      result.current.validateForm();
    });

    expect(Object.keys(result.current.errors)).toHaveLength(9); // All fields should have errors
    Object.values(result.current.errors).forEach(error => {
      expect(error).toBe('This field is required');
    });
  });
});