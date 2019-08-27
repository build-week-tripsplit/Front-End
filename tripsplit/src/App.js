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

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/triplist" component={TripListContainer} />
      <Route path="/createTrip" component={CreateTrip} />
      {/* <Route path="/triplist/:id" component={}  DYNAMIC INDIVIDUAL TRIP COMPONENT ROUTE /> */}
      {/* <Route path="/expenseform" component={}  EXPENSE FORM COMPONENT ROUTE /> */}
    </div>
  );
}

export default App;
