
// import TripForm from "./components/forms/TripForm";
import React from 'react';
import { Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SignUp from "./components/forms/Signup";
import Login from "./components/forms/Login";
import LandingPage from './components/LandingPage';
import Dashboard from "./components/Dashboard";
import TripListContainer from "./components/TripListContainer";
import CreateTrip from "./components/CreateTrip";
import IndividualTrip from "./components/IndividualTripContainer";
import CreateExpense from "./components/CreateExpense";
import ExpensesForm from './components/forms/ExpensesForm';
import TripsList from './components/TripsList';

function App() {
  // const submitUser = user => {

  //   axios
  //     .post('http://localhost:5000/api/login', user)
  //     .then(rez => {
  //       localStorage.setItem('token', rez.data.payload)
  //       props.history.push('/users')
  //     })
  //     .catch(rez => console.error(rez))

  // }
  // const grabExpenzeee = _ => {
  //   withAxiosos()
  //     .get("http://localhost:5000/api/")
  //     .then(res => setList(res.data))
  //     .catch(err => console.error(err));
  // };

  // const addTripz = trip => {
  //   withAxiosos()
  //     .post("http://localhost:5000/api/trips", trip)
  //     .then(rez => setList(rez.data))
  //     .catch(err => console.error(err));
  // };

  // const updateTripz = trip => {
  //   withAxiosos()
  //     .put(`http://localhost:5000/api/trips/${trip.id}`, trip)
  //     .then(res => setList(res.data))
  //     .catch(err => console.error(err));
  // };

  // const delTripz = id => {
  //   withAxiosos()
  //     .delete(`http://localhost:5000/api/trips/${id}`)
  //     .then(rez => setList(rez.data))
  //     .catch(err => console.error(err));
  // };


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
