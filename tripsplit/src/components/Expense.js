import React from 'react';


const Expense = props => {
//Pass in props data from ExpenseList.

    return (
    //JSX element displaying a card for every indvidual expense.
    <div className="expense">
        <h3>You Bought: {props.title}</h3>
        <p>${props.amount}</p>
    </div>
    )
}

export default Expense;