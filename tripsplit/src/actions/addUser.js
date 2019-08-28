import axios from 'axios';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const addUser = userData => {
    return dispatch => {
        dispatch({ type: ADD_USER_START });
        axios
            .post('some end point', userData)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_USER_FAILURE, payload: err.response });
            });
    };
};
