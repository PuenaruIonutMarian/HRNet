import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Employee } from '../../types/Employee';
import { deleteEmployee } from '../../store/employeeSlice';
import style from './EmployeeList.module.scss';

const EmployeeList: React.FC = () => {
  const employees = useSelector((state: RootState) => state.employees.employees);
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    dispatch(deleteEmployee(index));
  };

  return (
    <div className={style.EmployeeList}>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
      <table id="employee-table" className={style.employeeTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Delete Button</th> 
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Employee, index: number) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;


