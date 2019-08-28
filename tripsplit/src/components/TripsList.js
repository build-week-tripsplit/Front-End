import React from 'react';
import { connect } from 'react-redux';

import Trip from './Trip';

function TripsList({ trips }) {
    return (
        <div className="trips">
            {trips.map(trip => (
                <Trip key={trip.id} trip={trip} />
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
