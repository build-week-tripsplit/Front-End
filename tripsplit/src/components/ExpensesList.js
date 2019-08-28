import React, { useState, useEffect } from 'react';
import Expense from './Expense';
import axios from 'axios';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    axios
      .get(`https://tripsplit-backend.herokuapp.com/api/expenses`)  //TO DO-- change API endpoint to access user expense data.
      .then(res => {
        let filteredExpenses = (res.data.filter(expense => expense.user_id === 1)); //change user_id so it isn't hardcoded
        setExpenses(filteredExpenses);
        return filteredExpenses;
      })
      .then(res => {
        let expenseAmounts = res.map(item => item.amount);
        setTotalCost(expenseAmounts.reduce(((acc, curr) => acc + curr), 0))
      })
      .catch(error => {
        console.log("Error: ExpenseList: ", error);
      });

  }, []);

  return (

    <div className="expenses-list">
      <div className="expenses-summary">
        <h2>Your Summary: ${totalCost} spent.</h2>
      </div>
      <h2>My Purchases</h2>

      {expenses.map(item => <Expense key={item.id} expense={item} />)}

    </div>
  )
}

export default ExpensesList;