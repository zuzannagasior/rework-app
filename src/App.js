import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Register from './register/Register.js';
import Login from './login/Login.js';
import EmployerModule from './employer/EmployerModule.js';
import EmployerJobOfferList from './employer/EmployerJobOfferList.js';
import SearchEmployee from './employer/SearchEmployee.js';
import AddJobOffer from './employer/AddJobOffer.js';
import UnemployeeModule from './unemployee/UnemployeeModule.js';
import ErrorPage from './ErrorPage.js';
import JobOfferList from './unemployee/JobOfferList';


function App() {
  return (
    <Router>
      {/* nav */}
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/employer-module" component={EmployerModule} />
        <Route path="/employer-module/employer-job-offer-list" component={EmployerJobOfferList} />
        <Route path="/employer-module/search-employee" component={SearchEmployee} />
        <Route path="/employer-module/add-job-offer" component={AddJobOffer} />
        <Route path="/unemployee-module" component={UnemployeeModule} />
        <Route path="/unemployee-module/job-offer-list" component={JobOfferList} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;