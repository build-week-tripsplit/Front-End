import React from "react";
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </>
    )
}

export default LandingPage;