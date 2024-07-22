import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import InputField from '../../components/InputField/InputField';
import DateSelector from '../../components/DateSelector/DateSelector';
import OptionSelector from '../../components/OptionsSelector/OptionsSelector';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { states } from '../../data/USA_States_List';
import { Employee } from '../../types/Employee';
import { addEmployee } from '../../store/employeeSlice';
import style from './Home.module.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState<Employee>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const [errors, setErrors] = useState<Partial<Employee>>({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Partial<Employee> = {};
    Object.entries(employee).forEach(([key, value]) => {
      if (!value) {
        newErrors[key as keyof Employee] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addEmployee(employee));
      setShowModal(true);
    }
  };

  return (
    <div className={style.Home}>
      <Header />
      <h2>Create Employee</h2>
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
          <OptionSelector 
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
        </Modal>
      )}
    </div>
  );
}

export default Home;

