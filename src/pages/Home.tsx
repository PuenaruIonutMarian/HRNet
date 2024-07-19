import React from 'react';
import './Home.css';
import Form from '../components/Form/Form';

const Home: React.FC = () => {
    return (
        <div className="container">
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <Form />
        </div>
    );
};

export default Home;