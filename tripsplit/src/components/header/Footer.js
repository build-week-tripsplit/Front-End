import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    
    h1{
        margin:1% 0%;
    }
    .foot-left {
        margin-left: 10%;
    }

    .foot-right {
        margin-right: 10%;
    }
`;

const Footer = () => {
    return (
        <StyledDiv>
            <div className="foot-left">
                <h2>Questions?</h2>
            </div>
            <div className="foot-right">
                <h3>Contact Us</h3>
                <p>Address: 123 Anywhere St.</p>
                <p>San Francisco, CA 94016</p>
            </div>
        </StyledDiv>
    )
}

export default Footer;