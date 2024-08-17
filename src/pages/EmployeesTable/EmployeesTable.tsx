import { EmployeeTable, DataRow } from '@ionutpuenaru/employee_table';
import style from './EmployeesTable.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../store/employeeSlice';
import { Link } from 'react-router-dom';
import { testerData } from '../../utils/dataGenerator/dataGenerator';

const EmployeesTable: React.FC = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEmployee(-1));
  };

  const employees = useSelector((state: RootState) => state.employees.employees);
  console.log(employees);
  
  return (
    <main className={style.mainTableContainer}>
      <div style={{textAlign: 'center'}} className={style.title}><h2>Current Employees</h2></div>
      
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
          {employees.length > 0 ? <Button onClick={handleDelete}>Delete List of Employees</Button> : ""}
          
        </div>
      </div>

    </main>
  );
};

export default EmployeesTable;



