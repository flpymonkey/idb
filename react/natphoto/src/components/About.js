import React, {Component} from 'react'
import NavBar from './NavBar.js'
import '../stylesheets/About.css'
import {GroupMember} from './GroupMember.js'

export default class About extends Component {
	render (){
		return (
			<div className="body">
				<NavBar />
		 		<p className="aboutDesc">Natphoto allows photographers to compare cameras, photos, and the locations where photos are taken so they can improve their overall trip and photography. This site allows photographers to compare specific cameras details by showing pictures taken with cameras in specific locations. Additionally, this site pulls data about national parks from NPS.gov so that people can get a better idea of weather conditions, park hours, and park alerts before they travel. This website is a one-stop-shop for picking the right camera for the best possible photos in the best national parks in the United States!</p>
 		 		<h1 className="aboutHeader" id="aboutTitle"><span>Meet the SWEet Tea Team</span></h1>
 		 		<div className="topProfiles row">
					<GroupMember name="Jeff Bell" devtype="Backend" pic="jeff.png" bio="Still thinking... about my bio."/>
					<GroupMember name="Dayanny Caballero" devtype="Frontend" pic="dayanny.png" bio= "I am a third-year computer science major interested in IOS mobile development. I enjoy being a TA for the freshman class and watching Netflix in my free time."/>
					<GroupMember name="Tony DeNapoli" devtype="Frontend" pic="tony.png" bio="I am a fourth year computer science major at UT. I have experience working with Android and iOS and my main interest is in mobile computing. I enjoy playing drums, playing video games, skating, and music!"/>
 		 		</div>
 		 		<div className="row">
 		 			<div className="col-sm-1"></div>
 		 			<GroupMember name="Ben Johnson" devtype="Backend" pic="ben.png" bio="I am a third-year computer science major who also is interested in film-making and traveling. I plan to graduate and move to a small village in South Africa."/>
 		 			<div className="col-sm-2"></div>
 		 			<GroupMember name="Bri Vargas" devtype="Frontend" pic="bri.png" bio="I am a third-year computer science major interested in full-stack web development. In my free time I enjoy playing soccer, watching movies, and hanging out with family."/>
 		 		</div>

 		 	</div>
		)
	}
}
