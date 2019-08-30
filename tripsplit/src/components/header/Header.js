import React from "react";
import styled from "styled-components"
import { Icon } from "semantic-ui-react"

const StyledDiv = styled.div`
    display:flex;
    justify-content: space-between;
    
    h1{
        margin:1% 0%;
    }
`;

const Header = () => {
    return (
        <StyledDiv>
            <Icon name="map" className="icon-logo" size="huge" />
            <h1 className="header-h1">TripSplit</h1>
        </StyledDiv>
    )
}

export default Header;