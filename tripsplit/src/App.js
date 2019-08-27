import React from 'react';
import { Route } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import SignUp from "./components/forms/Signup";
import Login from "./components/forms/Login";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      {/* <Route path="/dashboard" component={}/>  DASHBOARD COMPONENT ROUTE */}
      {/* <Route path="/triplist" component={}  TRIPLIST COMPONENT ROUTE /> */}
      {/* <Route path="/tripform" component={}  TRIPFORM COMPONENT ROUTE /> */}
      {/* <Route path="/triplist/:id" component={}  DYNAMIC INDIVIDUAL TRIP COMPONENT ROUTE /> */}
      {/* <Route path="/expenseform" component={}  EXPENSE FORM COMPONENT ROUTE /> */}
    </div>
  );
}

export default App;
