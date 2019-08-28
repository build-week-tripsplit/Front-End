import React from "react";
import Header from "./header/Header";
import NavBar from "./header/NavBar";
import ExpenseList from "./ExpensesList";

const Dashboard = () => {
    return (
        <>
            <Header />
            <NavBar />
            <ExpenseList />
        </>
    )
}

export default Dashboard;