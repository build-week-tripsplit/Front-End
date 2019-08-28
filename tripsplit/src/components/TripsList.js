import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Trip from './Trip';
import Axios from 'axios';

function TripsList() {
    const [tripList, setTripList] = useState([]);
    useEffect(() => {
        //this get request doesn't discriminate based on user id and it needs to
        Axios.get(`https://tripsplit-backend.herokuapp.com/api/trips`)
            .then(response => setTripList(response.data))
            .catch(error => console.log("Error: TripsList.js", error))
    }, [])
    console.log(tripList);
    return (
        <div className="trips">
            {tripList.map(trip => (
                <Link to={`/triplist/${trip.id}`}><Trip key={trip.id} trip={trip} /></Link>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        trips: state.trips
    };
};

export default connect(
    mapStateToProps,
    null
)(TripsList);
