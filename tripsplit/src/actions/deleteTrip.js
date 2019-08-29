import axios from 'axios';

export const DELETE_TRIP_START = 'DELETE_TRIP_START';
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
export const DELETE_TRIP_FAILURE = 'DELETE_TRIP_FAILURE';

export const deleteTrip = (history, tripId) => {
    return dispatch => {
        dispatch({ type: DELETE_TRIP_START });
        axios
            .delete(`https://tripsplit2.herokuapp.com/api/trips/${tripId}`)
            .then(res => {
                console.log('deleteTrip.js action', res);
                dispatch({ type: DELETE_TRIP_SUCCESS, payload: tripId });
                history.push('/triplist');
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: DELETE_TRIP_FAILURE, payload: err.response });
            });
    };
};
