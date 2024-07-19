import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import EmployeeList from './pages/EmployeeList.tsx'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
    </Router>
    </PersistGate>
    </Provider>

  </React.StrictMode>,
)
