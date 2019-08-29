import { axize } from '../utils';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = (history, values) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });
        axize()
            .post('https://tripsplit-backend.herokuapp.com/api/auth/login', values)
            .then(res => {
                console.log('userLogin.js action:', res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userData', JSON.stringify(res.data));
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response);
                dispatch({ type: LOGIN_FAILURE, payload: err.response });
            });
    };
};
