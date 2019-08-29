import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';
import NavBar from './header/NavBar';
import ExpenseList from './ExpensesList';
import Footer from './header/Footer';

// import { getExpenses } from '../actions/getExpenses';
// import { getTrips } from '../actions/getTrips';

const Dashboard = props => {
    // useEffect(() => {
    //     props.getExpenses();
    //     props.getTrips();
    // }, []);

    return (
        <>
            <Header />
            <NavBar />
            <ExpenseList />
            <Footer />
        </>
    );
};

// const mapStateToProps = state => {
//     return {
//         user: state.user.userData,
//         trips: state.trips.allTrips,
//         expenses: state.expenses.allExpenses
//     };
// };

// export default connect(
//     mapStateToProps,
//     { getExpenses, getTrips }
// )(Dashboard);

export default Dashboard;
