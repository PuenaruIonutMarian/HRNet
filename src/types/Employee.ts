/**
 * Represents an employee with various personal and job-related details.
 *
 * @interface Employee
 * 
 * @property {string} firstName - The employee's first name.
 * @property {string} lastName - The employee's last name.
 * @property {string} dateOfBirth - The employee's date of birth in the format 'YYYY-MM-DD'.
 * @property {string} startDate - The date the employee started working, in the format 'YYYY-MM-DD'.
 * @property {string} street - The street address where the employee resides.
 * @property {string} city - The city where the employee resides.
 * @property {string} state - The state where the employee resides, typically represented by a two-letter abbreviation.
 * @property {string} zipCode - The postal/zip code for the employee's address.
 * @property {string} department - The department where the employee works.
 * @property {unknown} [key: string] - Any additional properties that may be added dynamically.
 */
export interface Employee {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}
