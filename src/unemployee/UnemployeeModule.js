import React from 'react'
import { Button, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import JobOfferList from './JobOfferList'

const UnemployeeModule = () => {
    return (
        <div className="em-container">
            <nav>
                <NavLink to="/add-job-offer"><Button style={{backgroundColor: "#FFBB10",margin: "20px auto"}}>Ustawienia konta</Button></NavLink>
                <NavLink to="/unemployee-module/job-offer-list"><Button style={{backgroundColor: "#FFBB10", margin: "20px auto"}}>Szukaj pracy</Button></NavLink>
            </nav>
            <Button  variant="contained" size="medium" style={{margin: "20px auto", backgroundColor: "#FFBB10"}}>Filtruj</Button>
            <JobOfferList />
        </div>
    )
}

export default UnemployeeModule;
