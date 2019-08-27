import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExpensesForm from './components/forms/ExpensesForm';
import TripsList from './components/TripsList';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/expenses-form" component={ExpensesForm} />
                <Route path="/trips-list" component={TripsList} />
            </Router>
        </div>
    );
}

export default App;
