import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../InputField/InputField';
import DateSelector from '../DateSelector/DateSelector';
import OptionSelector from '../OptionSelector/OptionSelector';
import StateSelector from '../StateSelector/StatesSelector';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { states } from '../StateSelector/USA_States_List/USA_States_List';
import { Employee } from '../../types/Employee';
import { addEmployee } from '../../store/employeeSlice';
import useEmployeeValidation from '../../utils/hooks/EmployeeValidation';
import style from './CreateForm.module.scss';


/**
 * Initial state for the employee form.
 */
const initialEmployeeState: Employee = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: ''
};

/**
 * Form component for creating a new employee.
 * 
 * Allows the user to input employee details including personal information and address.
 * Supports validation and displays a modal upon successful submission.
 * 
 * @returns {JSX.Element} The rendered form component.
 */
const CreateForm: React.FC = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState<Employee>(initialEmployeeState);
  const { errors, validateForm } = useEmployeeValidation(employee);
  const [showModal, setShowModal] = useState(false);

  /**
   * Handles change events for form inputs.
   * 
   * Updates the corresponding field in the employee state based on the input name and value.
   * 
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - The change event from the input element.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

    /**
   * Handles form submission.
   * 
   * Prevents the default form submission behavior, validates the form, dispatches an action to add the employee,
   * shows a success modal, and resets the form fields.
   * 
   * @param {React.FormEvent} e - The form submit event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addEmployee(employee));
      setShowModal(true);
      setEmployee(initialEmployeeState); // Reset form fields
    }
  };

  return (
    <div className={style.createForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.leftForm}>
          <InputField 
            label="First Name" 
            name="firstName" 
            value={employee.firstName} 
            onChange={handleChange} 
            error={errors.firstName} 
          />
          <InputField 
            label="Last Name" 
            name="lastName" 
            value={employee.lastName} 
            onChange={handleChange} 
            error={errors.lastName} 
          />
          <DateSelector 
            label="Date of Birth" 
            name="dateOfBirth" 
            value={employee.dateOfBirth} 
            onChange={handleChange} 
            error={errors.dateOfBirth} 
          />
          <DateSelector 
            label="Start Date" 
            name="startDate" 
            value={employee.startDate} 
            onChange={handleChange} 
            error={errors.startDate} 
          />
          <OptionSelector 
            label="Department" 
            name="department" 
            options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']} 
            value={employee.department} 
            onChange={handleChange} 
            error={errors.department} 
          />
        </div>
        <fieldset>
          <legend>Address</legend>
          <InputField 
            label="Street" 
            name="street" 
            value={employee.street} 
            onChange={handleChange} 
            error={errors.street} 
          />
          <InputField 
            label="City" 
            name="city" 
            value={employee.city} 
            onChange={handleChange} 
            error={errors.city} 
          />
          <StateSelector 
            label="State" 
            name="state" 
            options={states} 
            value={employee.state} 
            onChange={handleChange} 
            error={errors.state} 
          />
          <InputField 
            label="Zip Code" 
            name="zipCode" 
            value={employee.zipCode} 
            onChange={handleChange} 
            error={errors.zipCode} 
          />
        </fieldset>
        <div className={style.buttonContainer}>
          <Button onClick={(e) => { e.preventDefault(); handleSubmit(e); }}>Save New Employee</Button>
        </div>
      </form>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Employee Created!</h2>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal>
      )}
    </div>
  );
};

export default CreateForm;
