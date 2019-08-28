import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Trip from './Trip';

function TripsList({ trips }) {
    return (
        <div className="trips">
            {trips.map(trip => (
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
