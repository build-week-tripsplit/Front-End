import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/deleteExpense';
import { Icon } from "semantic-ui-react"
import moment from "moment";


const Expense = ({ expense, deleteExpense }) => {
    //Pass in props data from ExpenseList.

    return (
        //JSX element displaying a card for every indvidual expense.
        <div className="expense">
            <div className="expense-name-date">
            <h3>{expense.title}</h3>
            <h6>{moment(expense.date).format("MMMM Do YYYY")}</h6>
            </div>
            <p>${expense.amount}</p>
            <button className="delete-expense" onClick={() => deleteExpense(expense)}><Icon name="delete" /></button>
        </div>
    );
};

export default connect(
    null,
    { deleteExpense }
)(Expense);
