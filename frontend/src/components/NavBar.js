/*eslint no-unused-vars: "off" */
import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import '../stylesheets/navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import SearchBar from './SearchBar.js';

export default class NatPhotoNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="nav-div">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            NatPhoto<i className="material-icons" id="logo">
              landscape
            </i>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navLink" href="/photos">
                  Photos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/parks">
                  Parks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/cameras">
                  Cameras
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <span className="searchBar">
                  <SearchBar />
                </span>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
