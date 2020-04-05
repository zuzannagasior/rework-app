import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Main.js";
import Register from "./register/Register.js";
import Login from "./login/Login.js";
import LoginAsEmployer from "./login/LoginAsEmployer.js";
import EmployerModule from "./employer/EmployerModule.js";
import EmployerJobOfferList from "./employer/EmployerJobOfferList.js";
import SearchEmployee from "./employer/SearchEmployee.js";
import AddJobOffer from "./employer/AddJobOffer.js";
import UnemployeeModule from "./unemployee/UnemployeeModule.js";
import ErrorPage from "./ErrorPage.js";
import JobOfferList from "./unemployee/JobOfferList";
import RegisterAsUnemployee from "./register/RegisterAsUnemployee";
import RegisterAsEmployer from "./register/RegisterAsEmployer";
import "typeface-roboto";

function App() {
  return (
    <Router>
      {/* nav */}
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/register-employer" component={RegisterAsEmployer} />
        <Route path="/register-worker" component={RegisterAsUnemployee} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/login-as-employer" component={LoginAsEmployer} />
        <Route path="/employer-module" component={EmployerModule} />
        <Route
          path="/employer-module/employer-job-offer-list"
          component={EmployerJobOfferList}
        />
        <Route path="/search-employee" component={SearchEmployee} />
        <Route path="/add-job-offer" component={AddJobOffer} />
        <Route path="/unemployee-module" component={UnemployeeModule} />
        <Route
          path="/unemployee-module/job-offer-list"
          component={JobOfferList}
        />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
