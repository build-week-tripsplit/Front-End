import axios from 'axios';

export const ADD_TRIP_START = 'ADD_TRIP_START';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';

export const addTrips = tripData => {
    return dispatch => {
        dispatch({ type: ADD_TRIP_START });
        axios
            .post('some end point', tripData)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_TRIP_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_TRIP_FAILURE, payload: err.response });
            });
    };
};
