import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import NavBar from "./header/NavBar"
import axios from "axios";
import Trip from './Trip';
import Expense from "./Expense";

const IndividualTrip = (props) => {
    const id = props.match.params.id;
    const [trip, setTrip] = useState({});
    const [tripExpenses, setTripExpenses] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        axios.get(`https://tripsplit-backend.herokuapp.com/api/trips/${id}`)
            .then(response => setTrip(response.data))
            .catch(error => console.log('Error: IndividualTripContainer.js: TripGet: ', error));

        //Change endpoint to grab user specific expsenses. Or user & trip specific expenses
        axios.get(`https://tripsplit-backend.herokuapp.com/api/expenses`)
            .then(response => {
                let filteredExpenses = (response.data.filter(expense => expense.trip_id === Number(id)));
                setTripExpenses(filteredExpenses);
                return filteredExpenses;
            })
            .then(response => {
                let expenseAmounts = response.map(item => item.amount);
                setTotalCost(expenseAmounts.reduce(((acc, curr) => acc + curr), 0))
            })
            .catch(error => console.log('Error: IndividualTripContainer.js: ExpenseGet: ', error));
    }, [])
    return (
        <>
            <Header />
            <NavBar />
            <Trip key={trip.id} trip={trip} />
            <h2>Your Summary: ${totalCost} spent.</h2>
            <Link to="/expenseform"><button>Create Expense</button></Link>
            {tripExpenses.map(expense => <Expense expense={expense} />)}
        </>
    )
}

export default IndividualTrip;