import React, {Component} from "react"
import '../stylesheets/navbar.css'

export default class NavBar extends Component {
	render (){
		return (
			<ul className = "navbar">
		  	<a href="/about" className = "navList">About</a>
		    <a href="/cameras" className = "navList">Cameras</a>
		    <a href="/photos" className = "navList">Photos</a>
		    <a href="/parks" className = "navList">Parks</a>
		    <a href="/" className = "navList">Home</a>
		    <a id="logo" href="/"><span>NatPhoto</span><i className="material-icons">landscape</i></a>
			</ul>);
	}
}
