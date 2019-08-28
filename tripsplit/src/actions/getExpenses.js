import { axize } from '../utils';

export const GET_EXPENSES_START = 'GET_EXPENSES_START';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILURE = 'GET_EXPENSES_FAILURE';

export const getExpenses = userId => {
    return dispatch => {
        dispatch({ type: GET_EXPENSES_START });
        axize()
            .get(`https://tripsplit2.herokuapp.com/api/expenses/user/${userId}`)
            .then(res => {
                console.log(res);
                dispatch({ type: GET_EXPENSES_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: GET_EXPENSES_FAILURE, payload: err.response });
            });
    };
};
