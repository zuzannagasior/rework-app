import React from 'react'
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom'



const Main = () => {

    const buttonStyle = {backgroundColor: "#FFBB10",margin: "20px 10px" }
    

        return (
        <div>
        
        <NavLink to="/register" style={{textDecoration: "none"}}><Button style={buttonStyle}>Zarejestruj</Button></NavLink>
        <NavLink to="/login" style={{textDecoration: "none"}}><Button style={buttonStyle}>Zaloguj</Button></NavLink>
        <NavLink to="/unemployee-module/job-offer-list" style={{textDecoration: "none"}}><Button style={buttonStyle}>Szukam pracy</Button></NavLink>
        <NavLink to="/search-employee" style={{textDecoration: "none"}}><Button style={buttonStyle}>Szukam Pracownika</Button></NavLink>
         
        </div>
    )
}

export default Main;
