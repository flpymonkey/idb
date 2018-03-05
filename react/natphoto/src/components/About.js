import React, {Component} from 'react';
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
 		 		<TeamStats />

 		 	</div>
		);
	}
}

class GroupMember extends Component {
	render() {
		let picName = `/photo/ ${this.props.pic}`;
		return (
			<div id="profile" class="col-sm-4">
        		<img className="picName" src={require(`../../../../natphoto/app/static/photos/${this.props.pic}`)} alt = "hello"/>
        		<h2 class="name">{this.props.name}</h2>
        		<h3 class="resp">{this.props.devtype} Developer</h3>
        		<span id="bio">{this.props.bio}<br/></span>
        		<div id="bioLine"></div>
        		<span class="gitProfile">Commits:  <br/></span>
        		<span class="gitProfile">Issues:  <br/></span>
        		<span class="gitProfile">Unit Tests: 0</span>
      		</div>
		);
	}
}

class TeamStats extends Component {
	render () {
		return (
			<div className="body">
				<h2 class="aboutHeader" id="teamStats">Team Stats:</h2>
 				<div class="row teamStatsWrapper">
    				<span class="col-sm-1"></span>
    				<div class="col-sm-3">
      					<div class="row" id="teamStatsBox">
       						<div class="col-sm-6">
          						<h2 class="teamStatsInfo">Total Commits: <br/></h2>
          						<h2 class="teamStatsInfo">Total Issues: <br/></h2>
         						<h2 class="teamStatsInfo">Total Unit Tests: </h2>
        					</div>
        					<div class="col-sm-6">
          						<h2 class="teamStatsData">0</h2>
       						</div>
      					</div>
      				</div>
    				<div class="data col-sm-4">
      					<h2 class="dataHeader">The Data:<br/></h2>
      					<p>https://www.nps.gov/subjects/digital/nps-data-api.htm<br/>
        					https://www.reddit.com/dev/api<br/>
       						https://www.flickr.com/services/api/<br/>
        					https://www.instagram.com/developer/<br/>
       						https://www.digicamdb.com/<br/>
        					https://aws.amazon.com/documentation/<br/>
        					https://www.dpreview.com/<br/>
        					https://developer.yahoo.com/weather/
      					</p>
    				</div>
    				<div class="data col-sm-4">
      					<h2 class="dataHeader">Toolbox:</h2>
     					<span>AWS<br/>Bootstrap<br/>Docker<br/>Flask<br/>Github<br/>Postman</span>
    				</div>
    			</div>
    		</div>
		);
	}
}
