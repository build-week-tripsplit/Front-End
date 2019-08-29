import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import axios from 'axios';

import { getExpenses } from '../actions/getExpenses';

const ExpensesList = ({ expenses, totalCost, getExpenses }) => {
    // const [expenses, setExpenses] = useState([]);
    // const [totalCost, setTotalCost] = useState(0);

    // useEffect(() => {
    //     axios
    //         .get(`https://tripsplit-backend.herokuapp.com/api/expenses`) //TO DO-- change API endpoint to access user expense data.
    //         .then(res => {
    //             let filteredExpenses = res.data.filter(expense => expense.user_id === 1); //change user_id so it isn't hardcoded
    //             setExpenses(filteredExpenses);
    //             return filteredExpenses;
    //         })
    //         .then(res => {
    //             let expenseAmounts = res.map(item => item.amount);
    //             setTotalCost(expenseAmounts.reduce((acc, curr) => acc + curr, 0));
    //         })
    //         .catch(error => {
    //             console.log('Error: ExpenseList: ', error);
    //         });
    // }, []);

    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <div className="expenses-list">
            <div className="expenses-summary">
                <h2>Your Summary: ${totalCost} spent.</h2>
            </div>
            <h2>My Purchases</h2>

            {expenses.map(item => (
                <Expense key={item.id} expense={item} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        expenses: state.expenses.allExpenses,
        totalCost: state.expenses.totalCost
    };
};

export default connect(
    mapStateToProps,
    { getExpenses }
)(ExpensesList);
