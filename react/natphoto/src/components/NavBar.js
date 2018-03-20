import React from "react"
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.css'

const NavBar = () => (
	<div>
		<ul className = "customNavbar">
			<Link to ="/">Home</Link>
			<Link to="/photos">Photos</Link>
			<Link to="/parks">Parks</Link>
			<Link to="/cameras">Cameras</Link>
			<Link to="/about">About</Link>
		</ul>
	</div>
);
		
export default NavBar
