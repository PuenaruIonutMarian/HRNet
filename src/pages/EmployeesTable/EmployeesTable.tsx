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
        // data={employees as DataRow[]}
        data={testerData as DataRow[]}
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


//PLAY AREA
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const testerData = Array.from({ length: 120 }, () => {
    // Generate a random age between 18 and 65
    const age = Math.floor(Math.random() * 48) + 18;

    // Calculate the year of birth based on the age
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;

    // Generate a random month and day
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1; 

    // Construct the date of birth
    const dateOfBirth = new Date(birthYear, birthMonth, birthDay).toISOString().split('T')[0];

    return {
        firstName: ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Eve', 'Frank'][Math.floor(Math.random() * 7)],
        lastName: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'][Math.floor(Math.random() * 7)],
        dateOfBirth: dateOfBirth,
        startDate: new Date(birthYear, birthMonth, birthDay).toISOString().split('T')[0],
        street: ['Main St', 'Oak St', 'Maple St', 'Cedar St', 'Elm St', 'Pine St', 'Spruce St'][Math.floor(Math.random() * 7)],
        city: ['New York', 'Paris', 'London', 'Tokyo', 'Berlin', 'Los Angeles', 'Moscow'][Math.floor(Math.random() * 7)],
        state: ['NY', 'PA', 'ON', 'JP', 'DE', 'CA', 'RU'][Math.floor(Math.random() * 7)],
        zipCode: ['10001', '10002', '10003', '10004', '10005', '10006', '10007'][Math.floor(Math.random() * 7)],
        department: ['Engineering', 'Marketing', 'Sales', 'Finance', 'HR', 'Legal', 'IT'][Math.floor(Math.random() * 7)],
    };
});
