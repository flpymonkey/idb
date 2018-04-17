/*eslint no-unused-vars: "off" */
import React from "react";
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
  NavLink } from 'reactstrap';
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <span>NatPhoto</span>
            <i className="material-icons">landscape</i>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/cameras">Cameras</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/parks">Parks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/photos">Photos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <span className="navList"><SearchBar /></span>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



// const NavBar = () => (
// 	<div>
// 		<ul className = "customNavbar">
//             <span className="navList"><SearchBar /></span>
// 			<Link to="/about" className="navList" id="navAbout">About</Link>
// 			<Link to="/cameras" className="navList" id="navCameras">Cameras</Link>
// 			<Link to="/parks" className="navList" id="navParks">Parks</Link>
// 			<Link to="/photos" className="navList" id="navPhotos">Photos</Link>
// 			<Link to="/" className="navList" id="navHome">Home</Link>
// 			<Link to="/" id="logo"><span>NatPhoto</span><i className="material-icons">landscape</i></Link>
// 		</ul>
// 	</div>
// );
