import { axize } from '../utils';

export const ADD_EXPENSE_START = 'ADD_EXPENSE_START';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_FAILURE = 'ADD_EXPENSE_FAILURE';

export const addExpense = expenseData => {
    return dispatch => {
        dispatch({ type: ADD_EXPENSE_START });
        axize()
            .post('https://tripsplit2.herokuapp.com/api/expenses', expenseData)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_EXPENSE_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_EXPENSE_FAILURE, payload: err.response });
            });
    };
};
