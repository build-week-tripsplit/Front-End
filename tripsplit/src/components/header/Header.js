import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
    display:flex;
    justify-content:space-around;
    
    h1{
        margin:1% 0%;
    }
`;

const Header = () => {
    return (
        <StyledDiv>
            <h1>LOGO</h1>
            <h1>TripSplit</h1>
        </StyledDiv>
    )
}

export default Header;