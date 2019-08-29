import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Link to="/dashboard">
                    <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                </Link>

                <Link to="/triplist">
                    <Menu.Item name="trips" active={activeItem === 'trips'} onClick={this.handleItemClick}>
                        Trips
                    </Menu.Item>
                </Link>
            </Menu>
        );
    }
}
