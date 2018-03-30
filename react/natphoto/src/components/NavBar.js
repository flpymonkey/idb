/*eslint no-unused-vars: "off" */
import React from "react";
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import '../stylesheets/navbar.css';
import SearchBar from './SearchBar.js';

const NavBar = () => (
	<div>
		<ul className = "customNavbar">
            <span className="navList"><SearchBar /></span>
			<Link to="/about" className="navList" id="navAbout">About</Link>
			<Link to="/cameras" className="navList" id="navCameras">Cameras</Link>
			<Link to="/parks" className="navList" id="navParks">Parks</Link>
			<Link to="/photos" className="navList" id="navPhotos">Photos</Link>
			<Link to="/" className="navList" id="navHome">Home</Link>
			<Link to="/" id="logo"><span>NatPhoto</span><i className="material-icons">landscape</i></Link>
		</ul>
	</div>
);

export default NavBar
