import { axize } from '../utils';

export const GET_EXPENSES_START = 'GET_EXPENSES_START';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILURE = 'GET_EXPENSES_FAILURE';

export const getExpenses = () => {
    const userId = JSON.parse(localStorage.getItem('userData')).user_id;
    return dispatch => {
        dispatch({ type: GET_EXPENSES_START });
        axize()
            .get(`https://tripsplit-backend.herokuapp.com/api/expenses/user/${userId}`)
            .then(res => {
                console.log('getExpenses.js action', res);
                let expenseAmounts = res.data.map(item => item.amount);
                let totalCost = expenseAmounts.reduce((acc, curr) => acc + curr, 0);
                dispatch({ type: GET_EXPENSES_SUCCESS, payload: { expenses: res.data, totalCost: totalCost } });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: GET_EXPENSES_FAILURE, payload: err.response });
            });
    };
};
