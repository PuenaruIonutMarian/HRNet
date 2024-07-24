import { useState, useCallback } from 'react';
import { Employee } from '../../types/Employee';

//constructs an object type where each key is one of the keys 
//of the Employee type, and the value for each key is an optional string
// the purpose of this type is to represent the validation errors
type ValidationErrors = Partial<Record<keyof Employee, string>>;

const useEmployeeValidation = (employee: Employee) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  //useCallback to memoize the validateForm function, which will
  // only be recreated when the employee object changes.
  const validateForm = useCallback(() => {
    const newErrors: ValidationErrors = {};

    const validateRequired = (key: keyof Employee) => {
      if (!employee[key]) {
        newErrors[key] = 'This field is required';
      }
    };

    const validateName = (key: 'firstName' | 'lastName') => {
      validateRequired(key);
      if (employee[key] && !/^[A-Za-z\s-]+$/.test(employee[key] as string)) {
        newErrors[key] = 'Only letters, spaces, and hyphens are allowed';
      }
    };

    validateName('firstName');
    validateName('lastName');

    if (employee.dateOfBirth) {
      const birthDate = new Date(employee.dateOfBirth);
      const today = new Date();
      const age = calculateAge(birthDate, today);

      if (birthDate > today) {
        newErrors.dateOfBirth = 'In the future only robots will be born to work.';
      } else if (age < 18) {
        newErrors.dateOfBirth = 'Minors are not allowed to work';
      }
    } else {
      validateRequired('dateOfBirth');
    }

    if (employee.startDate) {
      if (new Date(employee.startDate) <= new Date()) {
        newErrors.startDate = 'Start date must be in the future';
      }
    } else {
      validateRequired('startDate');
    }

    if (employee.zipCode) {
      if (!/^\d+$/.test(employee.zipCode)) {
        newErrors.zipCode = 'Zip code should be a number';
      }
    } else {
      validateRequired('zipCode');
    }

    // Validate other fields
    (Object.keys(employee) as Array<keyof Employee>).forEach(key => {
      if (!['firstName', 'lastName', 'dateOfBirth', 'startDate', 'zipCode'].includes(key)) {
        validateRequired(key);
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [employee]);

  return { errors, validateForm };
};

const calculateAge = (birthDate: Date, today: Date) => {
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default useEmployeeValidation;

