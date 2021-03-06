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

/*
 * navbar to help navigate through website
 */
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

  /*
   * makes nav item for each page
   */
  getNavItem(pageName) {
    return (
      <NavItem>
        <NavLink className="navLink" href={"/" + pageName}>
          {pageName}
        </NavLink>
      </NavItem>
    );
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
              {this.getNavItem("Photos")}
              {this.getNavItem("Parks")}
              {this.getNavItem("Cameras")}
              {this.getNavItem("About")}
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
