import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import NavBar from "./header/NavBar"
import axios from "axios";
import Trip from './Trip';

const IndividualTrip = (props) => {
    const id = props.match.params.id;
    const [trip, setTrip] = useState({});
    useEffect(() => {
        axios.get(`https://tripsplit-backend.herokuapp.com/api/trips/${id}`)
            .then(response => setTrip(response.data))
            .catch(error => console.log('Error: IndividualTripContainer.js: ', error))
    }, [])
    return (
        <>
            <Header />
            <NavBar />
            <Trip key={trip.id} trip={trip} />

            {/* Expense List Component Here */}
        </>
    )
}

export default IndividualTrip;