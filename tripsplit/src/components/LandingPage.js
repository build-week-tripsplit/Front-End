import React from "react";
import { Link } from "react-router-dom";



const LandingPage = () => {

    const landingStyle = {
        backgroundImage: 'url(./../landing_img.jpg)',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        backgroundPosition: 'center',
        marginTop: '30px',
    };



    return (

        <div className="landing-page" style={landingStyle}>

            <div className="landing-div">
            <h1>TripSplit</h1>
            {/* <img className="landing_img" src='./../landing_img.jpg' alt="Two people using the TripSplit app."></img> */}
            <h4>Keep track of group expenses</h4>
            <p>No more IOU's</p>
            <Link to="/register"><button className="button-style-main">Sign Up</button></Link>

            <div className="sign-in-div">
            <p>Already have an account?</p>
            <Link className="sign-in-link" to="/login">Sign In</Link>
            </div>

            </div>

        </div>
    )
}

export default LandingPage;