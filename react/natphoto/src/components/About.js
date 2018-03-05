import React, {Component} from "react"
import NavBar from './NavBar.js'
import '../stylesheets/About.css'

export default class About extends Component {
	render (){
		return (
			<div className="body">
				<NavBar />
		 		<p class="aboutDesc">Natphoto allows photographers to compare cameras, photos, and the locations where photos are taken so they can improve their overall trip and photography. This site allows photographers to compare specific cameras details by showing pictures taken with cameras in specific locations. Additionally, this site pulls data about national parks from NPS.gov so that people can get a better idea of weather conditions, park hours, and park alerts before they travel. This website is a one-stop-shop for picking the right camera for the best possible photos in the best national parks in the United States!</p>
 		 		<h1 className="aboutHeader" id="aboutTitle"><span>Meet the SWEet Tea Team</span></h1>
 		 		<div class="topProfiles row">

 		 		</div>
 		 	</div>
		);
	}
}
