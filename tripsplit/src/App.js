import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from './actions/getUserData';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CreateExpense from './components/CreateExpense';
import CreateTrip from './components/CreateTrip';
import Dashboard from './components/Dashboard';
import Login from './components/forms/Login';
import SignUp from './components/forms/Signup';
import IndividualTrip from './components/IndividualTripContainer';
import LandingPage from './components/LandingPage';
import TripListContainer from './components/TripListContainer';

function App(props) {
    useEffect(() => {
        const localUserData = JSON.parse(localStorage.getItem('userData'));

        if (localUserData) {
            console.log('New app thing was called!');
            props.getUserData(localUserData.user_id);
        }
    }, []);
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <LandingPage />} />
                <Route path="/login" render={props => <Login {...props} />} />
                <Route path="/register" render={props => <SignUp {...props} />} />
                <Route path="/dashboard" render={() => <Dashboard />} />
                <Route exact path="/triplist" render={() => <TripListContainer />} />
                <Route path="/createTrip" render={props => <CreateTrip {...props} />} />
                <Route path="/triplist/:id" render={props => <IndividualTrip {...props} />} />
                <Route exact path="/expenseform" render={props => <CreateExpense {...props} />} />
                <Route path="/expenseform/:id" render={props => <CreateExpense {...props} />} />
            </Switch>
        </div>
    );
}

export default connect(
    null,
    { getUserData }
)(App);
