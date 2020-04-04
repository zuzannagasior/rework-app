import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import {NavLink} from 'react-router-dom'

const buttonStyle = {backgroundColor: "#FFBB10",margin: "20px 10px" }


const positions = [
  "Kosmetyczka",
  "Kucharz/Kucharka",
  "Stolarz",
  "Pielęgniarz/Pielęgniarka",
  "Kelner/Kelnerka",
  "Nauczyciel/Nauczycielka",
  "Spawacz",
];

const cities = [
  "Toruń",
  "Toruń Włościański (pow. nowodworski)",
  "Toruń Dworski (pow. nowodworski)",
  "Toruń (pow. chełmski)",
  "Stary Toruń (pow. toruński)",
  "Papowo Toruńskie (pow. toruński)",
  "Międzychód",
  "Międzychód (pow. śremski)",
  "Władysławowo",
  "Władysławowo (pow. elbląski)",
  "Władysławowo (pow. ciechanowski)",
  "Władysławowo (pow. płoński)",
  "Władysławowo (pow. żuromiński)",
  "Władysławowo (pow. żniński)",
  "Władysławowo (pow. toruński)",
  "Władysławowo (pow. brzeziński)",
  "Władysławowo (pow. nowotomyski)",
  "Władysławowo (pow. koniński)",
  "Leszno",
  "Lesznowola (pow. grójecki)",
  "Leszno Górne (pow. żagański)",
  "Leszno Dolne (pow. żagański)",
  "Leszno (pow. przemyski)",
  "Leszno (pow. kutnowski)",
  "Leszno (pow. przasnyski)",
  "Leszno (pow. olsztyński)",
  "Leszno (pow. łęczycki)",
  "Leszno (pow. warszawski zachodni)",
  "Kraków",
  "Krakówki-Zdzichy (pow. siemiatycki)",
  "Krakówki-Włodki (pow. siemiatycki)",
  "Krakówki-Dąbki (pow. siemiatycki)",
  "Krakówek (pow. świecki)",
  "Stary Kraków (pow. sławieński)",
  "Nowy Kraków (pow. sławieński)",
  "Wrocław",
  "Koszalin",
  "Lipno",
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const inputStyles = {
  width: 300,
  margin: "1rem auto",
  borderColor: "red"
};

function getSteps() {
  return ["Podaj swoje dane", "Dodaj doświadczenie", "Dodaj opis"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
        <h3>Dodaj dane kontaktowe</h3>
          <TextField
            required
            id="standard-required"
            label="Imię"
            placeholder="Wpisz swoje imię"
            style={inputStyles}
          />
          <br />
          <TextField
            label="Nazwisko"
            placeholder="Nazwisko "
            style={inputStyles}
          />{" "}
          <br />
          <br />
          <TextField
            id="standard-number"
            label="Numer telefonu"
            type="number"
            style={inputStyles}
          />{" "}
          <br />
          <TextField
            label="Adres email"
            placeholder="Email"
            style={inputStyles}
          />{" "}
          <br />
          <br />
          <Autocomplete
            id="combo-box-demo"
            options={cities.sort()}
            getOptionLabel={(option) => option}
            style={inputStyles}
            renderInput={(params) => (
              <TextField {...params} label="Miasto" variant="outlined" />
            )}
          />
        </>
      );
    case 1:
      return (
        <>
        <h3>Podaj swoje doświadczenie</h3>
          <Autocomplete
            id="combo-box-demo"
            options={positions.sort()}
            getOptionLabel={(option) => option}
            style={{
              width: 300,
              margin: "1rem auto",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Zawód" variant="outlined" />
            )}
          />
          <br />
          <TextField
            id="outlined-number"
            label="Lata doświadczenia"
            type="number"
            style={inputStyles}
            variant="outlined"
          />
        </>
      );
    case 2:
      return (
          <>
          <h3>Dodaj dodatkowy opis</h3>
        <TextField
        id="outlined-multiline-static"
        label="Napisz coś o sobie :)"
        style={inputStyles}
        multiline
        rows="10"
        defaultValue="Dodaj profil"
        variant="outlined"
      />
        <br/>
        <TextField
          style={inputStyles}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br/>
       <TextField
          style={inputStyles}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </>
      );
    default:
      return "Unknown step";
  }
}

function RegisterAsUnemployee() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"> Optional </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}> {label} </StepLabel>{" "}
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
            <h2>Dziękujemy za rejestrację</h2>
            <h2>w portalu Rework.io</h2>
            <h3>Pracodawcy już mogą Ciebie wyszukać, tymczasem zobacz jakie oferty przygotowaliśmy dla Ciebie:</h3>
            <NavLink to="/unemployee-module/job-offer-list" style={{textDecoration: "none"}}><Button style={buttonStyle}>Zobacz oferty pracy</Button></NavLink>
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Cofnij
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Zarejestruj" : "Dalej"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterAsUnemployee;
