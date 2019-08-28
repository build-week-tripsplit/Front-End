
import React from "react";
import { Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import SignUp from "./components/forms/Signup";
import Login from "./components/forms/Login";
import LandingPage from './components/LandingPage';

import Dashboard from "./components/Dashboard";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/Signup";
import IndividualTrip from "./components/IndividualTripContainer";
import LandingPage from "./components/LandingPage";
import TripListContainer from "./components/TripListContainer";


function App() {


  return (
    <div className="App">
      <Route exact path='/' render={() => <LandingPage />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <SignUp />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route exact path="/triplist" render={() => <TripListContainer />} />
      <Route path="/createTrip" render={() => <CreateTrip />} />
      <Route path="/triplist/:id" render={(props) => <IndividualTrip {...props} />} />
      <Route path="/expenseform" render={() => <CreateExpense />} />

    </div>
  );
}

export default App;







