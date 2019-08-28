import { GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE } from '../actions/getTrips';
import { ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE } from '../actions/addTrip';

const initialState = [
    {
        id: 0,
        title: 'Going to the beach',
        description: "What's it sound like? Going to the beach!",
        location: 'Honolulu, HI',
        startDate: 25,
        endDate: 25,
        user_id: 1,
        complete: false
    },
    {
        id: 1,
        title: 'Going hiking',
        description: 'Hiking a famous trail',
        location: 'Boulder, CO',
        startDate: 30,
        endDate: 30,
        user_id: 1,
        complete: false
    }
];

function tripsReducer(state = initialState, action) {
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
