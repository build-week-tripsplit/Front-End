import React from "react";
import Header from "./header/Header";
import NavBar from "./header/NavBar"
import ExpenseForm from "./forms/ExpensesForm";

const CreateExpense = () => {
    return (
        <>
            <Header />
            <NavBar />
            <ExpenseForm />
        </>
    )
}

export default CreateExpense;