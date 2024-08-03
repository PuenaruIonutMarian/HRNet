import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../types/Employee';

export interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      if (action.payload === -1) {
        // Clear all employees
        state.employees = [];
      } else {
        state.employees = state.employees.filter((_, index) => index !== action.payload);
      }
    },
  },
});

export const { addEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
