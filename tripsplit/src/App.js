import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/forms/Login';
import SignUp from './components/forms/Signup';
import IndividualTrip from './components/IndividualTripContainer';
import LandingPage from './components/LandingPage';
import TripListContainer from './components/TripListContainer';
import CreateExpense from './components/CreateExpense';
import CreateTrip from './components/CreateTrip';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <LandingPage />} />
                <Route path="/login" render={props => <Login {...props} />} />
                <Route path="/register" render={props => <SignUp {...props} />} />
                <Route path="/dashboard" render={() => <Dashboard />} />
                <Route exact path="/triplist" render={() => <TripListContainer />} />
                <Route path="/createTrip" render={() => <CreateTrip />} />
                <Route path="/triplist/:id" render={props => <IndividualTrip {...props} />} />
                <Route path="/expenseform" render={() => <CreateExpense />} />
            </Switch>
        </div>
    );
}

export default App;
