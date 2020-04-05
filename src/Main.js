import React from "react";
import { Button, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo2.svg";

const Main = () => {
  const buttonStyle = {
    backgroundColor: "#FFBB10",
    margin: "20px 10px",
  };
  const upperStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const logoStyle = {
    width: "100%",
  };
  const textContainer = {
    padding: "16px",
  };

  return (
    <div>
      <div style={upperStyle}>
        <NavLink
          to="/register"
          style={{
            textDecoration: "none",
          }}
        >
          <Button style={buttonStyle}> Zarejestruj </Button>
        </NavLink>
        <NavLink
          to="/login"
          style={{
            textDecoration: "none",
          }}
        >
          <Button style={buttonStyle}> Zaloguj </Button>
        </NavLink>
      </div>
      <img style={logoStyle} src={Logo} alt="logo" />
      <div style={textContainer}>
        <h3
          style={{
            color: "#30AABC",
            textAlign: "center",
          }}
        >
          Czy w wyniku epidemii COVID - 19 straciłeś pracę ?{" "}
        </h3>{" "}
        <h3
          style={{
            color: "#FFBB10",
            textAlign: "center",
          }}
        >
          A może po kwarantannie ponownie uruchamiasz swój biznes ?{" "}
        </h3>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Wiemy jak długie potrafią być procesy rekrutacyjne, dlatego
          przygotowaliśmy dla Was rozwiązanie dzięki któremu łączymy pracodawców
          i pracowników jednym kliknięciem!{" "}
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <NavLink
          to="/unemployee-module/job-offer-list"
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
            Szukam pracy
          </Button>
        </NavLink>
        <NavLink
          to="/login-as-employer"
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
            Szukam Pracownika
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
