import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import NavBar from './header/NavBar';
import axios from 'axios';
import Trip from './Trip';
import Expense from './Expense';

import { deleteTrip } from '../actions/deleteTrip';

const IndividualTrip = props => {
    const id = props.match.params.id;
    const [trip, setTrip] = useState({});
    const [tripExpenses, setTripExpenses] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [personalCost, setPersonalCost] = useState(0);
    const userId = JSON.parse(localStorage.getItem('userData')).user_id;
    useEffect(() => {
        axios
            .get(`https://tripsplit-backend.herokuapp.com/api/trips/${id}`)
            .then(response => setTrip(response.data))
            .catch(error => console.log('Error: IndividualTripContainer.js: TripGet: ', error));

        //Change endpoint to grab user specific expsenses. Or user & trip specific expenses
        axios
            .get(`https://tripsplit-backend.herokuapp.com/api/expenses`)
            .then(response => {
                let filteredExpenses = response.data.filter(expense => expense.trip_id === Number(id));
                setTripExpenses(filteredExpenses);
                return filteredExpenses;
            })
            .then(response => {
                let expenseAmounts = response.map(item => item.amount);
                setTotalCost(expenseAmounts.reduce((acc, curr) => acc + curr, 0));
            })
            .catch(error => console.log('Error: IndividualTripContainer.js: ExpenseGet: ', error));

        axios
            .get(`https://tripsplit-backend.herokuapp.com/api/expenses/user/${userId}`)
            .then(response => {
                let filteredExpenses = response.data.filter(expense => expense.trip_id === Number(id));
                let expenseAmounts = filteredExpenses.map(item => item.amount);
                setPersonalCost(expenseAmounts.reduce((acc, curr) => acc + curr, 0));
            })
            .catch(error => console.log('Error: IndividualTripContainer.js: ExpenseGet: ', error));
    }, [props.totalCost]);

    const handleClose = () => {
        axios.put(`https://tripsplit-backend.herokuapp.com/api/trips/${id}`, { "complete": true })
            .then(response => console.log(response))
            .catch(error => console.log('Error: IndividualTripContainer.js: TripPut: ', error));
        props.history.push("/triplist");
    }

    return (
        <>
            <Header />
            <NavBar />
            <Trip key={trip.id} trip={trip} />
            <h4>Trip Status: {trip.complete ? "Closed" : "Open"}</h4>
            <h2>Your Summary: ${totalCost} spent.</h2>
            <h2>You Paid: ${personalCost}</h2>
            <div className="button-div">
                <Link to="/expenseform">
                    <button className="button-style-main trip-button side-button">Create Expense</button>
                </Link>
                <button onClick={handleClose} className="button-style-main trip-button side-button">Close Trip</button>
            </div>

            {tripExpenses.map(expense => (
                <Expense expense={expense} />
            ))}
        </>
    );
};

const mapStateToProps = state => {
    return {
        totalCost: state.expenses.totalCost
    };
};

export default connect(
    mapStateToProps,
    { deleteTrip }
)(IndividualTrip);
