import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addEmployee(employee));
    setShowModal(true);
  };

  return (
    <div className={style.Home}>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="First Name" name="firstName" value={employee.firstName} onChange={handleChange} />
        <InputField label="Last Name" name="lastName" value={employee.lastName} onChange={handleChange} />
        <DateSelector label="Date of Birth" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} />
        <DateSelector label="Start Date" name="startDate" value={employee.startDate} onChange={handleChange} />
        <fieldset>
          <legend>Address</legend>
          <InputField label="Street" name="street" value={employee.street} onChange={handleChange} />
          <InputField label="City" name="city" value={employee.city} onChange={handleChange} />
          <OptionSelector label="State" name="state" options={states} value={employee.state} onChange={handleChange} />
          <InputField label="Zip Code" name="zipCode" value={employee.zipCode} onChange={handleChange} />
        </fieldset>
        <OptionSelector 
          label="Department" 
          name="department" 
          options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']} 
          value={employee.department} 
          onChange={handleChange} 
        />
        <Button onClick={(e) => { e.preventDefault(); handleSubmit(e); }}>Save</Button>
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
