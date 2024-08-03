import { useState, useCallback } from 'react';
import { Employee } from '../../types/Employee';

type ValidationErrors = Partial<Record<keyof Employee, string>>;

const useEmployeeValidation = (employee: Employee) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  //validate the employee object. It checks various fields for validity and updates the errors state accordingly.
  const validateForm = useCallback(() => {
    const newErrors: ValidationErrors = {};

    //Checks if a field is empty and adds an error message if it is.
    const validateRequired = (key: keyof Employee) => {
      if (!employee[key]) {
        newErrors[key] = 'This field is required';
      }
    };

    //Checks if firstName or lastName contains only valid characters and is required.
    const validateName = (key: 'firstName' | 'lastName') => {
      validateRequired(key);
      if (employee[key] && typeof employee[key] === 'string' && !/^[A-Za-z\s-]+$/.test(employee[key])) {
        newErrors[key] = 'Only letters, spaces, and hyphens are allowed';
      }
    };

    validateName('firstName');
    validateName('lastName');

    // Date of Birth validation
    if (employee.dateOfBirth) {
      const birthDate = new Date(employee.dateOfBirth);
      const today = new Date();
      const age = calculateAge(birthDate, today);

      if (birthDate > today) {
        newErrors.dateOfBirth = 'In the future only robots will work.';
      } else if (age < 18) {
        newErrors.dateOfBirth = 'Minors are not allowed to work';
      }
    } else {
      validateRequired('dateOfBirth');
    }

    // Start Date validation
    if (employee.startDate) {
      if (new Date(employee.startDate) <= new Date()) {
        newErrors.startDate = 'Start date must be in the future';
      }
    } else {
      validateRequired('startDate');
    }

    // Zip Code validation
    if (employee.zipCode) {
      if (typeof employee.zipCode === 'string' && !/^\d+$/.test(employee.zipCode)) {
        newErrors.zipCode = 'Zip code should be a number';
      }
    } else {
      validateRequired('zipCode');
    }

    // Validate other fields
    // array of all fields to validate to ensure they are filled if not already flagged as an error.
    const knownFields: (keyof Employee)[] = ['firstName', 'lastName', 'dateOfBirth', 'startDate', 'street', 'city', 'state', 'zipCode', 'department'];
    knownFields.forEach(key => {
      if (!newErrors[key]) {
        validateRequired(key);
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [employee]);

  return { errors, validateForm };
};

//Calculates the age of the employee based on their birth date.
const calculateAge = (birthDate: Date, today: Date) => {
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default useEmployeeValidation;

