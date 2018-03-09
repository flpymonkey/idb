import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import NavBar from './NavBar.js';
import '../stylesheets/About.css';
import '../stylesheets/general.css';

export default class About extends Component {
	render (){
		return (
			<div className="body">
				<NavBar />
		 		<p className="aboutDesc">Natphoto allows photographers to compare cameras, photos, and the locations where photos are taken so they can improve their overall trip and photography. This site allows photographers to compare specific cameras details by showing pictures taken with cameras in specific locations. Additionally, this site pulls data about national parks from NPS.gov so that people can get a better idea of weather conditions, park hours, and park alerts before they travel. This website is a one-stop-shop for picking the right camera for the best possible photos in the best national parks in the United States!</p>
 		 		<h1 className="aboutHeader" id="aboutTitle"><span>Meet the SWEet Tea Team</span></h1>
 		 		<Row className="topProfiles">
					<GroupMember name="Jeff Bell" devtype="Backend" pic="jeff.png" bio="Still thinking... about my bio."/>
					<GroupMember name="Dayanny Caballero" devtype="Frontend" pic="dayanny.png" bio= "I am a third-year computer science major interested in IOS mobile development. I enjoy being a TA for the freshman class and watching Netflix in my free time."/>
					<GroupMember name="Tony DeNapoli" devtype="Frontend" pic="tony.png" bio="I am a fourth year computer science major at UT. I have experience working with Android and iOS and my main interest is in mobile computing. I enjoy playing drums, playing video games, skating, and music!"/>
 		 		</Row>
 		 		<Row>
 		 			<Col sm="1"></Col>
 		 			<GroupMember name="Ben Johnson" devtype="Backend" pic="ben.png" bio="I am a third-year computer science major who also is interested in film-making and traveling. I plan to graduate and move to a small village in South Africa."/>
 		 			<Col sm="2"></Col>
 		 			<GroupMember name="Bri Vargas" devtype="Frontend" pic="bri.png" bio="I am a third-year computer science major interested in full-stack web development. In my free time I enjoy playing soccer, watching movies, and hanging out with family."/>
 		 		</Row>
 		 		<TeamStats />

 		 	</div>
		);
	}
}

class GroupMember extends Component {
	render() {
		return (
			<Col sm="4" id="profile">
        		<img className="picName" src={require(`../../../../natphoto/app/static/photos/${this.props.pic}`)} alt = "hello"/>
        		<h2 className="name">{this.props.name}</h2>
        		<h3 className="resp">{this.props.devtype} Developer</h3>
        		<span id="bio">{this.props.bio}<br/></span>
        		<div id="bioLine"></div>
        		<span className="gitProfile">Commits:  <br/></span>
        		<span className="gitProfile">Issues:  <br/></span>
        		<span className="gitProfile">Unit Tests: 0</span>
      		</Col>
		);
	}
}

class TeamStats extends Component {
	render () {
		return (
			<div className="body">
				<h2 className="aboutHeader" id="teamStats">Team Stats:</h2>
 				<Row className="teamStatsWrapper">
    				<Col sm="1"></Col>
    				<Col sm="3">
      					<Row id="teamStatsBox">
       						<Col sm="6">
          						<h2 className="teamStatsInfo">Total Commits: <br/></h2>
          						<h2 className="teamStatsInfo">Total Issues: <br/></h2>
         						<h2 className="teamStatsInfo">Total Unit Tests: </h2>
        					</Col>
        					<Col sm="6">
          						<h2 className="teamStatsData">0</h2>
       						</Col>
      					</Row>
      				</Col>
    				<Col sm="4" className="data">
      					<h2 className="dataHeader">The Data:<br/></h2>
      					<p>https://www.nps.gov/subjects/digital/nps-data-api.htm<br/>
        					https://www.reddit.com/dev/api<br/>
       						https://www.flickr.com/services/api/<br/>
        					https://www.instagram.com/developer/<br/>
       						https://www.digicamdb.com/<br/>
        					https://aws.amazon.com/documentation/<br/>
        					https://www.dpreview.com/<br/>
        					https://developer.yahoo.com/weather/
      					</p>
    				</Col>
    				<Col sm="4" className="data">
      					<h2 className="dataHeader">Toolbox:</h2>
     					<span>AWS<br/>Bootstrap<br/>Docker<br/>Flask<br/>Github<br/>Postman</span>
    				</Col>
    			</Row>
    		</div>
		);
	}
}
