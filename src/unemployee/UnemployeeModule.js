import React from 'react'
import { Button, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import JobOfferList from './JobOfferList'

const UnemployeeModule = () => {
    return (
        <div className="em-container">
            <nav>
                <NavLink to="/add-job-offer"><Button color="primary">Dodaj ofertę pracy</Button></NavLink>
                <NavLink to="/unemployee-module/job-offer-list"><Button color="primary">Zmień swoje ustaweienia</Button></NavLink>
            </nav>
            <Button  variant="contained" size="medium" style={{margin: "20px auto"}}>Filtruj</Button>
            <JobOfferList />
        </div>
    )
}

export default UnemployeeModule;
