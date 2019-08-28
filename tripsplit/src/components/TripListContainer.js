import React from "react";
import { Link } from "react-router-dom";

import Header from "./header/Header";
import NavBar from "./header/NavBar"
import TripList from "./TripsList"


const TripListContainer = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Link to="/createTrip"><button>Create Trip</button></Link>
            <TripList />
        </>
    )
}

export default TripListContainer;