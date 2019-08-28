import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';
import NavBar from './header/NavBar';

import { getExpenses } from '../actions/getExpenses';

const Dashboard = props => {
    useEffect(() => {
        console.log('useEffect inside Dashboard was called');
        props.getExpenses();
    }, []);

    return (
        <>
            <Header />
            <NavBar />
            {/* Expense List Component Here */}
        </>
    );
};

export default connect(
    null,
    { getExpenses }
)(Dashboard);
