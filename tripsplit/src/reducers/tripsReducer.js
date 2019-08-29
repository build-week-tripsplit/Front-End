import { GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE } from '../actions/getTrips';
import { DELETE_TRIP_START, DELETE_TRIP_SUCCESS, DELETE_TRIP_FAILURE } from '../actions/deleteTrip';
import { ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE } from '../actions/addTrip';
import { EDIT_TRIP_START, EDIT_TRIP_SUCCESS, EDIT_TRIP_FAILURE } from '../actions/editTrip';

const initialState = {
    isLoading: false,
    errorMessage: '',
    allTrips: []
};

function tripsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TRIPS_START:
            return { ...state, isLoading: true };
        case GET_TRIPS_SUCCESS:
            return { ...state, isLoading: false, allTrips: action.payload };
        case GET_TRIPS_FAILURE:
            return { ...state, errorMessage: action.payload };
        case DELETE_TRIP_START:
            return { ...state, isLoading: true };
        case DELETE_TRIP_SUCCESS:
            return { ...state, isLoading: false, allTrips: state.allTrips.filter(trip => trip.id !== action.payload) };
        case DELETE_TRIP_FAILURE:
            return { ...state, errorMessage: action.payload };
        case ADD_TRIP_START:
            return { ...state, isLoading: true };
        case ADD_TRIP_SUCCESS:
            return { ...state, isLoading: false, allTrips: [...state.allTrips, action.payload] };
        case ADD_TRIP_FAILURE:
            return { ...state, errorMessage: action.payload };
        case EDIT_TRIP_START:
            return { ...state, isLoading: true };
        case EDIT_TRIP_SUCCESS:
            const filteredTrips = state.allTrips.filter(trip => trip.id !== action.payload.tripId);
            const updatedTrips = [...filteredTrips, action.payload.tripData];

            updatedTrips.sort(function(a, b) {
                return parseFloat(a.id) - parseFloat(b.id);
            });

            return { ...state, isLoading: false, allTrips: updatedTrips };
        case EDIT_TRIP_FAILURE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default tripsReducer;
