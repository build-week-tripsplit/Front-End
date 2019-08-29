import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/userLogin';
import { GET_USER_DATA_START, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE } from '../actions/getUserData';

const initialState = {
    isLoading: false,
    errorMessage: '',
    userData: {}
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, isLoading: true };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, userData: action.payload };
        case LOGIN_FAILURE:
            return { ...state, errorMessage: action.payload };
        case GET_USER_DATA_START:
            return { ...state, isLoading: true };
        case GET_USER_DATA_SUCCESS:
            return { ...state, isLoading: false, userData: action.payload };
        case GET_USER_DATA_FAILURE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default userReducer;
