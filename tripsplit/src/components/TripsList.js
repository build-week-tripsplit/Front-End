import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Trip from './Trip';
import Axios from 'axios';
import Footer from "./header/Footer";

import { getTrips } from '../actions/getTrips';

function TripsList({ tripList, getTrips }) {
    // const [tripList, setTripList] = useState([]);
    // useEffect(() => {
    //     //this get request doesn't discriminate based on user id and it needs to
    //     Axios.get(`https://tripsplit-backend.herokuapp.com/api/trips`)
    //         .then(response => setTripList(response.data))
    //         .catch(error => console.log('Error: TripsList.js', error));
    // }, []);
    // console.log(tripList);
    useEffect(() => {
        getTrips();
    }, []);

    return (
        <div className="trips">
            {tripList.map(trip => (
                <Link to={`/triplist/${trip.id}`}>
                    <Trip key={trip.id} trip={trip} />
                </Link>
            ))}
            <Footer />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tripList: state.trips.allTrips
    };
};

export default connect(
    mapStateToProps,
    { getTrips }
)(TripsList);
