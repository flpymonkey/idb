import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import NavBar from './NavBar.js';
import '../stylesheets/photodetailpage.css';
import '../stylesheets/general.css';

export default class PhotoDetail extends Component {
	render (){
		return (
			<div className="body">
				<NavBar />

				<Row>
					<Col sm="12" id="title">
  						<h1>Half A Sunset</h1>
  					</Col>
				</Row>
				<Row>
					<Col sm="1"></Col>
					<Col sm="10" id="photo">
						<img id="picture" src="https://c1.staticflickr.com/5/4529/37718090005_023fa923a2_h.jpg" alt="Beautiful Picture"  />
					</Col>
					<Col sm="1"></Col>
				</Row>
				<Row>
					<Col sm="12" id="title">
  						<h3>by</h3>
  						<h1>Nicolas Jaud</h1>
  						<h3>on</h3>
  						<h2>June 25th, 2017</h2>
  						<h2>3 Favorites</h2>
  					</Col>
				</Row>
    			<Row id="linksRow">
   					<Col sm="6" id="cameraLink">Canon EOS 5D Mark IV <i className="material-icons">photo_camera</i></Col>
   					<Col sm="6" id="parkLink">Yosemite National Park <i className="material-icons">landscape</i></Col>
 				</Row>
 		 	</div>
		);
	}
}