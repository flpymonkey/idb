import React from "react"
import { Link } from 'react-router-dom'
import MaterialIcon, {colorPallet} from 'material-icons-react'
import '../stylesheets/navbar.css'

const NavBar = () => (
	<div>
		<ul className = "customNavbar">
			<Link to="/about" className="navList">About</Link>
			<Link to="/cameras" className="navList">Cameras</Link>
			<Link to="/parks" className="navList">Parks</Link>
			<Link to="/photos" className="navList">Photos</Link>
			<Link to="/" className="navList">Home</Link>
			<Link to="/" id="logo"><span>NatPhoto</span><i className="material-icons">landscape</i></Link>
		</ul>
	</div>
);
		
export default NavBar
