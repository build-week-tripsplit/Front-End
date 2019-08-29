import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
    display:flex;
    justify-content:space-around;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15%;
    position: fixed;
    
    h1{
        margin:1% 0%;
    }
`;

const Footer = () => {
    return (
        <StyledDiv>
            <h1>LOGO</h1>
                <div>
                <h3>Contact Us</h3>
                <p>Address: 123 Anywhere St.</p>
                <p>San Francisco, CA 94016</p>
                </div>
        </StyledDiv>
    )
}

export default Footer;