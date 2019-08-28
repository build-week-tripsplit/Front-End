import { axize } from '../utils';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = (history, values) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });
        axize()
            .post('https://tripsplit2.herokuapp.com/api/auth/login', values)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userID', res.data.user_id);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response);
                dispatch({ type: LOGIN_FAILURE, payload: err.response });
            });
    };
};
