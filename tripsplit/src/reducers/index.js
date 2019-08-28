import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
    user: userReducer,
    trips: tripsReducer,
    expenses: expensesReducer
});

export default rootReducer;
