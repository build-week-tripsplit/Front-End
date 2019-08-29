import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
    user: userReducer,
    expenses: expensesReducer,
    trips: tripsReducer
});

export default rootReducer;
