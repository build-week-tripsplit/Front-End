import axios from 'axios';

export const GET_TRIPS_START = 'GET_TRIPS_START';
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const GET_TRIPS_FAILURE = 'GET_TRIPS_FAILURE';

export const getTrips = userId => {
    return dispatch => {
        dispatch({ type: GET_TRIPS_START });
        axios
            .get(`some end point/${userId}`)
            .then(res => {
                console.log(res);
                dispatch({ type: GET_TRIPS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: GET_TRIPS_FAILURE, payload: err.response });
            });
    };
};
