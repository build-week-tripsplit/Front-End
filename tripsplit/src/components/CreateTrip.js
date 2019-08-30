import React from "react";
import Header from "./header/Header";
import NavBar from "./header/NavBar"
import TripForm from "./forms/TripForm";
import Footer from "./header/Footer";

const CreateTrip = () => {
    return (
        <>
            <Header />
            <NavBar />
            <TripForm />
            <Footer />
        </>
    )
}

export default CreateTrip;