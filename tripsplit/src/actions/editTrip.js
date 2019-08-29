import { axize } from '../utils';

export const EDIT_TRIP_START = 'EDIT_TRIP_START';
export const EDIT_TRIP_SUCCESS = 'EDIT_TRIP_SUCCESS';
export const EDIT_TRIP_FAILURE = 'EDIT_TRIP_FAILURE';

export const editTrip = (history, tripId, tripData) => {
    return dispatch => {
        dispatch({ type: EDIT_TRIP_START });
        axize()
            .post(`https://tripsplit-backend.herokuapp.com/api/trips/${tripId}`, tripData)
            .then(res => {
                console.log(res);
                dispatch({ type: EDIT_TRIP_SUCCESS, payload: { tripId: tripId, tripData: res.data } });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: EDIT_TRIP_FAILURE, payload: err.response });
            });
    };
};
