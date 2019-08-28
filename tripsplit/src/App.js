import React from "react";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import CreateExpense from "./components/CreateExpense";
import CreateTrip from "./components/CreateTrip";
import Dashboard from "./components/Dashboard";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/Signup";
import IndividualTrip from "./components/IndividualTripContainer";
import LandingPage from "./components/LandingPage";
import TripListContainer from "./components/TripListContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
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
