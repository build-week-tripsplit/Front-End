import { axize } from '../utils';

export const GET_ALL_USERS_START = 'GET_ALL_USERS_START';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const getAllUsers = () => {
    return dispatch => {
        dispatch({ type: GET_ALL_USERS_START });
        axize()
            .get(`https://tripsplit-backend.herokuapp.com/api/users/`)
            .then(res => {
                console.log('getUserData.js action:', res);
                dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err.response);
                dispatch({ type: GET_ALL_USERS_FAILURE, payload: err.response });
            });
    };
};
