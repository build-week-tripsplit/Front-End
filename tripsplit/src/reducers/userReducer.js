import { ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAILURE } from '../actions/addUser';

function userReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER_START:
            return state;
        case ADD_USER_SUCCESS:
            return state;
        case ADD_USER_FAILURE:
            return state;
        default:
            return state;
    }
}

export default userReducer;
