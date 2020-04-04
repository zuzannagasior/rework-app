import React from "react";
import RegisterAsUnemployee from "./RegisterAsUnemployee";
import TextField from "@material-ui/core/TextField";
import {NavLink} from 'react-router-dom'
import Logo from '../assets/logo2.svg'
import Button from "@material-ui/core/Button";

const inputStyles = {
    width: 300,
    margin: "1rem auto",
    borderColor: "red"
  };

  const textContainer = {padding: "16px",  textAlign: "center"}

const RegisterAsEmployer  = () => { 
    return (
        <div style={textContainer}>
            <img src={Logo} alt="logo" />
        <h3>Dodaj dane kontaktowe</h3>
        <TextField
          required
          id="standard-required"
          label="Nazwa firmy"
          placeholder="Wpisz nazwę firmy"
          style={inputStyles}
        />
        <br />
        <br />
        <TextField
          id="standard-number"
          label="Numer telefonu"
          type="number"
          style={inputStyles}
        />
        <br />
        <TextField
          label="Adres email"
          placeholder="Email"
          style={inputStyles}
        />
        <TextField
          style={inputStyles}
          id="outlined-password-input"
          label="Hasło"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br />
        <br />
        <NavLink to="/employer-module" style={{textDecoration: "none"}}><Button style={ {width: "80%", backgroundColor: "#FFBB10", margin:"16px"}}>Zarejestruj</Button></NavLink>
       
      </div>
    )
    
}

export default RegisterAsEmployer