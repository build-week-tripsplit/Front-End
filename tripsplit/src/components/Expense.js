import React from 'react';


const Expense = ({ expense }) => {
    //Pass in props data from ExpenseList.

    return (
        //JSX element displaying a card for every indvidual expense.
        <div className="expense">
            <h3>You Bought: {expense.title}</h3>
            <p>${expense.amount}</p>
        </div>
    )
}

export default Expense;