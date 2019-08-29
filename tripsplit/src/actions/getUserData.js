import { axize } from '../utils';

export const GET_USER_DATA_START = 'GET_USER_DATA_START';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

export const getUserData = userId => {
    return dispatch => {
        dispatch({ type: GET_USER_DATA_START });
        axize()
            .get(`https://tripsplit-backend.herokuapp.com/api/users/${userId}`)
            .then(res => {
                console.log('getUserData.js action:', res);
                dispatch({ type: GET_USER_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err.response);
                dispatch({ type: GET_USER_DATA_FAILURE, payload: err.response });
            });
    };
};
