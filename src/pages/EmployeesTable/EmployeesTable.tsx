import { EmployeeTable, DataRow } from '@ionutpuenaru/employee_table';
import style from './EmployeesTable.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const EmployeesTable: React.FC = () => {
  const employees = useSelector((state: RootState) => state.employees.employees);
  return (
    <main className={style.mainTableContainer}>
      <h1>Employees</h1>
      <EmployeeTable
        data={employees as DataRow[]}
        tableClassName={style.table}
        headerClassName={style.headerClassName}
        rowClassName={style.rowClassName}
        cellClassName={style.cellClassName}
      />
    </main>
  );
};

export default EmployeesTable;


