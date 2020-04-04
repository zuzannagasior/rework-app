import React from 'react'
import './Employer.css';
import EmployerJobOfferList from './EmployerJobOfferList.js';
import { NavLink } from 'react-router-dom';

const EmployerModule = () => {
    return (
        <div class="em-container">
            <nav>
                <NavLink to="/search-employee"><button type="button">Szukaj pracownika</button></NavLink>
                <NavLink to="/employer-module/add-job-offer"><button type="button">Dodaj ofertę pracy</button></NavLink>
               
                <EmployerJobOfferList />
            </nav>
        </div>
    )
}

export default EmployerModule;
