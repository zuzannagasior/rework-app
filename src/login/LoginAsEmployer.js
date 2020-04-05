import React from "react";
import logo from "../assets/logo2.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const LoginAsEmployer = () => {
  const inputStyles = {
    width: 300,
    margin: "1rem auto",
    borderColor: "red",
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img src={logo} alt="logo" />
      <h3>
        Aby przeglądać profile kandydatów, zaloguj się na swój profil Pracodawcy
      </h3>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        id="standard-required"
        label="Email"
        placeholder="Podaj email"
        style={inputStyles}
      />
      <TextField
        id="outlined-password-input"
        label="Hasło"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        placeholder="Podaj Hasło"
        style={inputStyles}
      />
      <br />
      <NavLink
        to="/search-employee"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          style={{
            width: "80%",
            backgroundColor: "#FFBB10",
            margin: "16px",
          }}
        >
          Zaloguj
        </Button>
      </NavLink>
    </div>
  );
};

export default LoginAsEmployer;
