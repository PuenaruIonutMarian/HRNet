import { EmployeeTable, DataRow } from '@ionutpuenaru/employee_table';
import style from './EmployeesTable.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../store/employeeSlice';
import { Link } from 'react-router-dom';

const EmployeesTable: React.FC = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEmployee(-1));
  };

  const employees = useSelector((state: RootState) => state.employees.employees);
  console.log(employees);
  
  return (
    <main className={style.mainTableContainer}>
      <h1>Current Employees</h1>
      <EmployeeTable
        data={employees as DataRow[]}
        tableClassName={style.table}
        headerClassName={style.headerClassName}
        rowClassName={style.rowClassName}
        cellClassName={style.cellClassName}
      />
      <p>
        <Link to="/">Home</Link>
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </main>
  );
};

export default EmployeesTable;