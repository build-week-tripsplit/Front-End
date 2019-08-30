import { axize } from '../utils';

export const ADD_EXPENSE_START = 'ADD_EXPENSE_START';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_FAILURE = 'ADD_EXPENSE_FAILURE';

export const addExpense = (tripId, history, expenseData) => {
    return dispatch => {
        dispatch({ type: ADD_EXPENSE_START });
        axize()
            .post('https://tripsplit-backend.herokuapp.com/api/expenses', expenseData)
            .then(res => {
                console.log('Add a new expense (addExpense.js action)', res);
                dispatch({ type: ADD_EXPENSE_SUCCESS, payload: res.data });
                history.push(`/triplist/${tripId}`);
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_EXPENSE_FAILURE, payload: err.response });
            });
    };
};
