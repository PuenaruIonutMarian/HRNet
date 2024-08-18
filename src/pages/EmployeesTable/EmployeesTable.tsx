import { useState } from 'react';
import { EmployeeTable, DataRow } from '@ionutpuenaru/employee_table';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal'; 
import { deleteEmployee } from '../../store/employeeSlice';
import { testerData } from '../../utils/dataGenerator/dataGenerator';
import style from './EmployeesTable.module.scss';


/**
 * `EmployeesTable` is a React functional component that displays a table of current employees.
 * 
 * This component integrates the `EmployeeTable` from an external library and manages the employee data 
 * using Redux. It also provides functionality to delete the entire list of employees and replace it 
 * with mock data, with user confirmation through a modal.
 * 
 * @component
 * @example
 * return (
 *   <EmployeesTable />
 * )
 */
const EmployeesTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false); 
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees.employees);

    /**
   * Handle the delete button click to show the confirmation modal.
   */
  const handleDelete = () => {
    setShowModal(true); 
  };

    /**
   * Confirm deletion of the employee list. 
   * This action will replace the list with mock data.
   */
  const confirmDelete = () => {
    dispatch(deleteEmployee(-1)); 
    setShowModal(false); 
  };

  /**
   * Cancel the delete operation and close the modal.
   */
  const cancelDelete = () => {
    setShowModal(false); 
  };

  return (
    <main className={style.mainTableContainer}>
      <div style={{ textAlign: 'center' }} className={style.title}><h2>Current Employees</h2></div>
      
      <EmployeeTable
        data={employees.length === 0 ? testerData as DataRow[] : employees as DataRow[] }
        tableClassName={style.tableClassName}
        headerClassName={style.headerClassName}
        rowClassName={style.rowClassName}
        cellClassName={style.cellClassName}
        tableAppClassName={style.tableAppClassName}
      />

      <div className={style.specialModule}>
        <div className={style.linkToHome}><Link to="/">Back To Home Page</Link></div>
        <div className={style.deleteButton}>
          {employees.length > 0 && (
            <Button onClick={handleDelete}>Delete List of Employees</Button>
          )}
        </div>
      </div>

      {showModal && (
        <Modal onClose={cancelDelete}>
          <p>Are you sure you want to delete the current employee list?</p>
          <p>If you click "Yes," the list will be replaced with mock data.</p>
          <div className={style.modalButtonContainer}>
            <Button onClick={confirmDelete}>Yes</Button>
            <Button onClick={cancelDelete}>No</Button>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default EmployeesTable;

