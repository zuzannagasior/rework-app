import React from 'react'
import './Employer.css';
import EmployerJobOfferList from './EmployerJobOfferList.js';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const EmployerModule = () => {
    return (
        <div className="em-container">
            <nav>
                <NavLink to="/search-employee"><Button color="primary">Szukaj pracownika</Button></NavLink>
                <NavLink to="/add-job-offer"><Button color="primary">Dodaj ofertę pracy</Button></NavLink>
            </nav>
            <EmployerJobOfferList />
        </div>
    )
}

export default EmployerModule;
