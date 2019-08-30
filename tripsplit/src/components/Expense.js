import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/deleteExpense';

const Expense = ({ expense, deleteExpense }) => {
    //Pass in props data from ExpenseList.

    return (
        //JSX element displaying a card for every indvidual expense.
        <div className="expense">
            <div className="expense-name-date">
            <h3>{expense.title}</h3>
            <h6>{expense.date}</h6>
            </div>

            <p>${expense.amount}</p>
            <button className="delete-expense" onClick={() => deleteExpense(expense)}>X</button>
        </div>
    );
};

export default connect(
    null,
    { deleteExpense }
)(Expense);
