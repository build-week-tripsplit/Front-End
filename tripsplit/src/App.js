import React from "react";
import "./App.css";
// import TripForm from "./components/forms/TripForm";

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
  return <div className="App">{/* <TripForm /> */}</div>;
}

export default App;
