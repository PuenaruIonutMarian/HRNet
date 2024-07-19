import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormField from '../components/FormField';
import { states } from '../data/USA_States_List';
import { Employee } from '../types/Employee';
import { addEmployee } from '../store/employeeSlice';

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
    <div className="container">
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <FormField label="First Name" name="firstName" value={employee.firstName} onChange={handleChange} />
        <FormField label="Last Name" name="lastName" value={employee.lastName} onChange={handleChange} />
        <FormField label="Date of Birth" name="dateOfBirth" type="date" value={employee.dateOfBirth} onChange={handleChange} />
        <FormField label="Start Date" name="startDate" type="date" value={employee.startDate} onChange={handleChange} />
        <fieldset>
          <legend>Address</legend>
          <FormField label="Street" name="street" value={employee.street} onChange={handleChange} />
          <FormField label="City" name="city" value={employee.city} onChange={handleChange} />
          <FormField label="State" name="state" type="select" options={states} value={employee.state} onChange={handleChange} />
          <FormField label="Zip Code" name="zipCode" value={employee.zipCode} onChange={handleChange} />
        </fieldset>
        <FormField 
          label="Department" 
          name="department" 
          type="select" 
          options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']} 
          value={employee.department} 
          onChange={handleChange} 
        />
        <button type="submit">Save</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Employee Created!</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;