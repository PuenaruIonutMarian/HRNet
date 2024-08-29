import { describe, it, expect } from 'vitest';
import { testerData } from '../../utils/dataGenerator/dataGenerator'; 

describe('Data Generator', () => {
  it('should generate an array of 120 employees', () => {
    expect(testerData).toHaveLength(120);
  });

  it('should generate valid employee objects', () => {
    testerData.forEach((employee) => {
      expect(employee).toEqual(expect.objectContaining({
        firstName: expect.any(String),
        lastName: expect.any(String),
        dateOfBirth: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
        startDate: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
        street: expect.any(String),
        city: expect.any(String),
        state: expect.any(String),
        zipCode: expect.any(String),
        department: expect.any(String),
      }));
    });
  });

  it('should generate employees with ages between 18 and 65', () => {
    const currentYear = new Date().getFullYear();
    testerData.forEach((employee) => {
      const birthYear = new Date(employee.dateOfBirth).getFullYear();
      const age = currentYear - birthYear;
      expect(age).toBeGreaterThanOrEqual(18);
      expect(age).toBeLessThanOrEqual(65);
    });
  });

  it('should use valid values for each property', () => {
    const validFirstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Eve', 'Frank'];
    const validLastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];
    const validStreets = ['Main St', 'Oak St', 'Maple St', 'Cedar St', 'Elm St', 'Pine St', 'Spruce St'];
    const validCities = ['New York', 'Paris', 'London', 'Tokyo', 'Berlin', 'Los Angeles', 'Moscow'];
    const validStates = ['NY', 'PA', 'ON', 'JP', 'DE', 'CA', 'RU'];
    const validZipCodes = ['10001', '10002', '10003', '10004', '10005', '10006', '10007'];
    const validDepartments = ['Engineering', 'Marketing', 'Sales', 'Finance', 'HR', 'Legal', 'IT'];

    testerData.forEach((employee) => {
      expect(validFirstNames).toContain(employee.firstName);
      expect(validLastNames).toContain(employee.lastName);
      expect(validStreets).toContain(employee.street);
      expect(validCities).toContain(employee.city);
      expect(validStates).toContain(employee.state);
      expect(validZipCodes).toContain(employee.zipCode);
      expect(validDepartments).toContain(employee.department);
    });
  });

  it('should generate unique combinations of employee data', () => {
    const uniqueEmployees = new Set(testerData.map((employee) => JSON.stringify(employee)));
    expect(uniqueEmployees.size).toBeGreaterThan(1); 
  });

  it('should generate valid dates for dateOfBirth and startDate', () => {
    testerData.forEach((employee) => {
      const birthDate = new Date(employee.dateOfBirth);
      const startDate = new Date(employee.startDate);
      
      expect(birthDate).toBeInstanceOf(Date);
      expect(startDate).toBeInstanceOf(Date);
      expect(isNaN(birthDate.getTime())).toBe(false);
      expect(isNaN(startDate.getTime())).toBe(false);
    });
  });
});