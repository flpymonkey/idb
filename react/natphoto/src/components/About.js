import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/About.css';
import '../stylesheets/general.css';

export default class About extends Component {
	constructor(props){
		super(props);
    	this.state = {
      		ourCommits: {},
      		ourIssues: {},
      		totalCommits: 0,
      		totalIssues: 0
		};
  	}

  	componentDidMount() {

    	fetch('http://api.natphoto.me/about', {
    		method: 'GET',
    		dataType: 'json'
    	}).then(results => {
    		return results.json();
    	}).then(data => {
    		console.log(data)
    		var curr_commits = data
      		this.setState({
				ourCommits: curr_commits['0'],
				ourIssues: curr_commits['1'],
				totalCommits: curr_commits['2'],
				totalIssues: curr_commits['3']
      		});

    	})
  	}

	render (){
		return (
			<div className="body">
		 		<p className="aboutDesc">Natphoto allows photographers to compare cameras, photos, and the locations where photos are taken so they can improve their overall trip and photography. This site allows photographers to compare specific cameras details by showing pictures taken with cameras in specific locations. Additionally, this site pulls data about national parks from NPS.gov so that people can get a better idea of weather conditions, park hours, and park alerts before they travel. This website is a one-stop-shop for picking the right camera for the best possible photos in the best national parks in the United States!</p>
 		 		<h1 className="aboutHeader" id="aboutTitle"><span>Meet the SWEet Tea Team</span></h1>
 		 		<Row className="topProfiles">
					<GroupMember name="Jeff Bell" unitTests="15" issues={this.state.ourIssues['jhbell']} commits={this.state.ourCommits['jhbell']} devtype="Backend" pic="jeff.png" bio="I am a fourth-year computer science major and the Drum Major of Longhorn Band. I am graduating in May 2018 and am looking forward to starting my career with my first job right here in Austin."/>
					<GroupMember name="Dayanny Caballero" unitTests="12" issues={this.state.ourIssues['dayannyc']} commits={this.state.ourCommits['dayannyc']} devtype="Frontend" pic="dayanny.png" bio= "I am a third-year computer science major interested in IOS mobile development. I enjoy being a TA for the freshman class and watching Netflix in my free time."/>
					<GroupMember name="Tony DeNapoli" unitTests="20" issues={this.state.ourIssues['tonydenapoli']} commits={this.state.ourCommits['tonydenapoli']} devtype="Frontend" pic="tony.png" bio="I am a fourth year computer science major at UT. I have experience working with Android and iOS and my main interest is in mobile computing. I enjoy playing drums, playing video games, skating, and music!"/>
 		 		</Row>
 		 		<Row className="bottomProfiles">
 		 			<Col sm="1"></Col>
 		 			<GroupMember name="Ben Johnson" unitTests="25" issues={this.state.ourIssues['flpymonkey']} commits={this.state.ourCommits['flpymonkey']} devtype="Backend" pic="ben.png" bio="I am a third-year computer science major who also is interested in film-making and traveling. I plan to graduate and move to a small village in South Africa."/>
 		 			<Col sm="2"></Col>
 		 			<GroupMember name="Bri Vargas" unitTests="16" issues={this.state.ourIssues['vargasbri2']} commits={this.state.ourCommits['vargasbri2']} devtype="Frontend" pic="bri.png" bio="I am a third-year computer science major interested in full-stack web development. In my free time I enjoy playing soccer, watching movies, and hanging out with family."/>
 		 		</Row>
 		 		<TeamStats totalCommits={this.state.totalCommits} totalIssues={this.state.totalIssues} totalUnitTests="88"/>

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
        		<span className="gitProfile">Commits: {this.props.commits}<br/></span>
        		<span className="gitProfile">Issues: {this.props.issues}<br/></span>
        		<span className="gitProfile">Unit Tests: {this.props.unitTests}</span>
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
       						<Col sm="7">
          						<span className="teamStatsInfo">Total Commits:<br/></span>
          						<span className="teamStatsInfo">Total Issues:<br/></span>
         						<span className="teamStatsInfo">Total Unit Tests:</span>
        					</Col>
        					<Col sm="5">
          						<span className="teamStatsInfo">{this.props.totalCommits}<br/></span>
          						<span className="teamStatsInfo">{this.props.totalIssues}<br/></span>
         						<span className="teamStatsInfo">{this.props.totalUnitTests}</span>
        					</Col>
      					</Row>
      				</Col>
    				<Col sm="4" className="data">
      					<h2 className="dataHeader">The Data:<br/></h2>
      					<p> We scraped data from <a href = "https://www.nps.gov/subjects/digital/nps-data-api.htm">https://www.nps.gov/subjects/digital/nps-data-api.htm<br/></a> using the RESTful API endpoint to retrieve all national parks. </p>
                <p>We scraped data from <a href ="https://www.flickr.com/services/api/">https://www.flickr.com/services/api/<br/></a> to retrieve a maximum of 50 photos for each national park</p>
                <p>We scraped data from <a href = "https://developer.bestbuy.com/">https://developer.bestbuy.com/<br/></a> to retrieve a camera data for each camera associated with each photo we scraped from flickr</p>
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
