import React from 'react';
import Header from './header/Header';
import NavBar from './header/NavBar';
import ExpenseForm from './forms/ExpensesForm';

const CreateExpense = props => {
    const id = props.match.params.id;
    return (
        <>
            <Header />
            <NavBar />
            <ExpenseForm history={props.history} tripId={id} />
        </>
    );
};

export default CreateExpense;
