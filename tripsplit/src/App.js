import React from 'react';
import { Route } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import SignUp from "./components/forms/Signup";
import Login from "./components/forms/Login";
import LandingPage from './components/LandingPage';
import Dashboard from "./components/Dashboard";
import TripListContainer from "./components/TripListContainer";
import CreateTrip from "./components/CreateTrip"
import IndividualTrip from "./components/IndividualTripContainer"
import CreateExpense from "./components/CreateExpense";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/triplist" component={TripListContainer} />
      <Route path="/createTrip" component={CreateTrip} />
      <Route path="/triplist/:id" component={IndividualTrip} />
      <Route path="/expenseform" component={CreateExpense} />
    </div>
  );
}

export default App;
