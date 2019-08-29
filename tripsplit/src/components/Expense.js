import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/deleteExpense';

const Expense = ({ expense, deleteExpense }) => {
    //Pass in props data from ExpenseList.

    return (
        //JSX element displaying a card for every indvidual expense.
        <div className="expense">
            <h3>{expense.title}</h3>
            <p>${expense.amount}</p>
            <button onClick={() => deleteExpense(expense)}>X</button>
        </div>
    );
};

export default connect(
    null,
    { deleteExpense }
)(Expense);
