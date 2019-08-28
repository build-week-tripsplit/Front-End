import { GET_EXPENSES_START, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAILURE } from '../actions/getExpenses';

const initialState = {
    isLoading: false,
    errorMessage: '',
    allExpenses: []
};

function expensesReducer(state = initialState, action) {
    console.log('expensesReducer was called');
    switch (action.type) {
        case GET_EXPENSES_START:
            return { ...state, isLoading: true };
        case GET_EXPENSES_SUCCESS:
            return { ...state, isLoading: false, allExpenses: action.payload };
        case GET_EXPENSES_FAILURE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default expensesReducer;
