import axios from 'axios';

export const DELETE_EXPENSE_START = 'DELETE_EXPENSE_START';
export const DELETE_EXPENSE_SUCCESS = 'DELETE_EXPENSE_SUCCESS';
export const DELETE_EXPENSE_FAILURE = 'DELETE_EXPENSE_FAILURE';

export const deleteExpense = expense => {
    return dispatch => {
        dispatch({ type: DELETE_EXPENSE_START });
        axios
            .delete(`https://tripsplit-backend.herokuapp.com/api/expenses/${expense.id}`)
            .then(res => {
                console.log('deleteExpense.js action', res);
                dispatch({ type: DELETE_EXPENSE_SUCCESS, payload: { expenseId: expense.id, amount: expense.amount } });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: DELETE_EXPENSE_FAILURE, payload: err.response });
            });
    };
};
