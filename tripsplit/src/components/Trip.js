import React from 'react';

function Trip({ trip }) {
    return (
        <div className="trip">
            <h3>{trip.title}</h3>
            <p>{trip.location}</p>
            <p>{trip.description}</p>
        </div>
    );
}

export default Trip;
