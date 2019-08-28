import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';
import NavBar from './header/NavBar';
import ExpenseList from "./ExpensesList";

import { getExpenses } from '../actions/getExpenses';

const Dashboard = props => {
    useEffect(() => {
        console.log('useEffect inside Dashboard was called');
        console.log('The user props are:', props);
        const theUserId = localStorage.getItem('userID');
        console.log('The user id is', theUserId);
        props.getExpenses(theUserId);
    }, []);


    return (
        <>
            <Header />
            <NavBar />
            <ExpenseList />
        </>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user.userData,
        expenses: state.expenses.allExpenses
    };
};

export default connect(
    mapStateToProps,
    { getExpenses }
)(Dashboard);
