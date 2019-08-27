import { GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE } from '../actions/getTrips';
import { ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE } from '../actions/addTrip';

function tripsReducer(state = [], action) {
    switch (action.type) {
        case GET_TRIPS_START:
            return state;
        case GET_TRIPS_SUCCESS:
            return state;
        case GET_TRIPS_FAILURE:
            return state;
        case ADD_TRIP_START:
            return state;
        case ADD_TRIP_SUCCESS:
            return state;
        case ADD_TRIP_FAILURE:
            return state;
        default:
            return state;
    }
}

export default tripsReducer;
