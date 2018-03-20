import React, {Component} from "react"
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.css'

const NavBar = () => (
	<div>
		<ul className = "customNavbar">
			<Link to ="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/photos">Photos</Link>
		</ul>
	</div>
);
		
export default NavBar
