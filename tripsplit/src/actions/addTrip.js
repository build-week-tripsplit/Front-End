import { axize } from '../utils';

export const ADD_TRIP_START = 'ADD_TRIP_START';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';

export const addTrip = (history, tripData) => {
    return dispatch => {
        dispatch({ type: ADD_TRIP_START });
        axize()
            .post('https://tripsplit-backend.herokuapp.com/api/trips', tripData)
            .then(res => {
                console.log('The response from posting a trip is', res.data);
                dispatch({ type: ADD_TRIP_SUCCESS, payload: res.data });
                history.push('/triplist');
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_TRIP_FAILURE, payload: err.response });
            });
    };
};
