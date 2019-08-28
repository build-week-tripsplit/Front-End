import React from "react";
import Header from "./header/Header";
import NavBar from "./header/NavBar"
import TripForm from "./forms/TripForm";

const CreateTrip = () => {
    return (
        <>
            <Header />
            <NavBar />
            <TripForm />
        </>
    )
}

export default CreateTrip;