import React from "react";
import Header from "./header/Header";
import NavBar from "./header/NavBar";
import TripsList from "./TripsList";

const TripListContainer = () => {
    return (
        <>
            <Header />
            <NavBar />
            <button>Create Trip</button>
            <TripsList />
        </>
    )
}

export default TripListContainer;