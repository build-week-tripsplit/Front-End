import { GET_EXPENSES_START, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAILURE } from '../actions/getExpenses';
import { DELETE_EXPENSE_START, DELETE_EXPENSE_SUCCESS, DELETE_EXPENSE_FAILURE } from '../actions/deleteExpense';
import { ADD_EXPENSE_START, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILURE } from '../actions/addExpense';

const initialState = {
    isLoading: false,
    errorMessage: '',
    allExpenses: [],
    totalCost: 0
};

function expensesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_EXPENSES_START:
            return { ...state, isLoading: true };
        case GET_EXPENSES_SUCCESS:
            return { ...state, isLoading: false, allExpenses: action.payload.expenses, totalCost: action.payload.totalCost };
        case GET_EXPENSES_FAILURE:
            return { ...state, errorMessage: action.payload };
        case DELETE_EXPENSE_START:
            return { ...state, isLoading: true };
        case DELETE_EXPENSE_SUCCESS:
            return { ...state, isLoading: false, allExpenses: state.allExpenses.filter(expense => expense.id !== action.payload.expenseId), totalCost: state.totalCost - action.payload.amount };
        case DELETE_EXPENSE_FAILURE:
            return { ...state, errorMessage: action.payload };
        case ADD_EXPENSE_START:
            return { ...state, isLoading: true };
        case ADD_EXPENSE_SUCCESS:
            return { ...state, isLoading: false, allExpenses: [...state.allExpenses, action.payload] };
        case ADD_EXPENSE_FAILURE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default expensesReducer;
