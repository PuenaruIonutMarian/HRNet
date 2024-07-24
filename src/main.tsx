import React from 'react'
import ReactDOM from 'react-dom/client'
import Error from './pages/ErrorPage/ErrorPage.tsx'
import CreateUser from './pages/CreateUser/CreateUser.tsx';
import EmployeeList from './pages/EmployeeList/EmployeeList.tsx'
import EmployeesTable from './pages/EmployeesTable/EmployeesTable.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<CreateUser/>} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/employees-table" element={<EmployeesTable />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>

  </React.StrictMode>,
)
