import React from 'react'
import { Button, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import JobOfferList from './JobOfferList'

const UnemployeeModule = () => {
    return (
        <div className="em-container">
        
            <Button  variant="contained" size="medium" style={{margin: "20px auto", backgroundColor: "#FFBB10"}}>Filtruj</Button>
            <JobOfferList />
        </div>
    )
}

export default UnemployeeModule;
