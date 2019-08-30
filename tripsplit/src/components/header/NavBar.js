import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
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
                        <Icon name="home" />  Home
                    </Menu.Item>
                </Link>

                <Link to="/triplist">
                    <Menu.Item name="trips" active={activeItem === 'trips'} onClick={this.handleItemClick}>
                        <Icon name="plane" /> Trips
                    </Menu.Item>
                </Link>

                <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick}>
                    <Icon name="group" /> Friends
                    </Menu.Item>

                <Menu.Item name="settings" active={activeItem === 'settings'} onClick={this.handleItemClick}>
                    <Icon name="settings" /> Setttings
                    </Menu.Item>
            </Menu>
        );
    }
}
