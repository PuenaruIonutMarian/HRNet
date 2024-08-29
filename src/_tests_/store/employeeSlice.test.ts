import { describe, it, expect } from 'vitest';
import employeeReducer, { 
  EmployeeState, 
  addEmployee, 
  deleteEmployee 
} from '../../store/employeeSlice'; 
import { Employee } from '../../types/Employee'; 

describe('employeeSlice', () => {
  const initialState: EmployeeState = {
    employees: [],
  };

  const sampleEmployee: Employee = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    startDate: '2023-01-01',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    department: 'Engineering',
  };

  it('should return the initial state', () => {
    expect(employeeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('addEmployee', () => {
    it('should handle adding a new employee', () => {
      const expectedState: EmployeeState = {
        employees: [sampleEmployee],
      };

      expect(employeeReducer(initialState, addEmployee(sampleEmployee))).toEqual(expectedState);
    });

    it('should add multiple employees correctly', () => {
      const state: EmployeeState = {
        employees: [sampleEmployee],
      };

      const newEmployee: Employee = {
        firstName: 'Jane',
        lastName: 'Smith',
        dateOfBirth: '1985-05-15',
        startDate: '2023-02-01',
        street: '456 Elm St',
        city: 'Othertown',
        state: 'NY',
        zipCode: '67890',
        department: 'Design',
      };

      const expectedState: EmployeeState = {
        employees: [sampleEmployee, newEmployee],
      };

      expect(employeeReducer(state, addEmployee(newEmployee))).toEqual(expectedState);
    });
  });

  describe('deleteEmployee', () => {
    const stateWithEmployees: EmployeeState = {
      employees: [
        sampleEmployee,
        {
          firstName: 'Jane',
          lastName: 'Smith',
          dateOfBirth: '1985-05-15',
          startDate: '2023-02-01',
          street: '456 Elm St',
          city: 'Othertown',
          state: 'NY',
          zipCode: '67890',
          department: 'Design',
        },
        {
          firstName: 'Bob',
          lastName: 'Johnson',
          dateOfBirth: '1978-11-30',
          startDate: '2023-03-01',
          street: '789 Oak St',
          city: 'Thirdtown',
          state: 'TX',
          zipCode: '54321',
          department: 'Management',
        },
      ],
    };

    it('should handle deleting an employee by index', () => {
      const expectedState: EmployeeState = {
        employees: [stateWithEmployees.employees[0], stateWithEmployees.employees[2]],
      };

      expect(employeeReducer(stateWithEmployees, deleteEmployee(1))).toEqual(expectedState);
    });

    it('should handle deleting all employees', () => {
      expect(employeeReducer(stateWithEmployees, deleteEmployee(-1))).toEqual(initialState);
    });

    it('should not modify state when deleting non-existent index', () => {
      expect(employeeReducer(stateWithEmployees, deleteEmployee(5))).toEqual(stateWithEmployees);
    });
  });

  it('should handle additional properties', () => {
    const employeeWithAdditionalProp: Employee = {
      ...sampleEmployee,
      customField: 'Some custom value',
    };

    const stateAfterAdd = employeeReducer(initialState, addEmployee(employeeWithAdditionalProp));
    expect(stateAfterAdd.employees[0]).toEqual(employeeWithAdditionalProp);
    expect(stateAfterAdd.employees[0].customField).toBe('Some custom value');
  });
});