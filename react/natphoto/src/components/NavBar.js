import React, {Component} from "react";

export default class NavBar extends Component {
	render (){
		return (
			<ul class = "navbar">
		  	<a href="/about" class = "navList">About</a>
		    <a href="/cameras" class = "navList">Cameras</a>
		    <a href="/photos" class = "navList">Photos</a>
		    <a href="/parks" class = "navList">Parks</a>
		    <a href="/" class = "navList">Home</a>
		    <a id="logo" href="/"><span>NatPhoto</span><i class="material-icons">landscape</i></a>
			</ul>);
	}
}
