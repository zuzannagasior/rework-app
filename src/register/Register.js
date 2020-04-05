import React from "react";
import { Button, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo2.svg";

const Register = () => {
  const textContainer = {
    padding: "16px",
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src={Logo} alt="logo" />
        <NavLink
          to="/register-worker"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            style={{
              width: "80%",
              backgroundColor: "#30AABC",
              margin: "16px",
            }}
          >
            Zarejestruj się jako pracownik
          </Button>
        </NavLink>
        <NavLink
          to="/register-employer"
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
            Zarejestruj się jako pracodawca
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
