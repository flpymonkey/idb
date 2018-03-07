import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import NavBar from './NavBar.js';
import '../stylesheets/general.css';
import '../stylesheets/cameradetail.css';

export default class CameraDetail extends Component {
	render (){
		return (
			<div className="body">
				<h1 className="cameraHeader"><span>Canon EOS 5D Mark IV</span></h1>

  				<Row>
  					<Col sm="6">
    					<img className="cameraImage" src="https://4.img-dpreview.com/files/p/E~TS520x0~articles/9335477559/canon_16_35mm_III_5.jpeg" />
    				</Col>

 		  			<Col sm="3" id="info-text">
			  			<h2 id = "infoHeader">Info</h2>
      					<h3 id = "brand">Brand:</h3>
      					<h3 id = "model">Model:</h3>
      					<h3 id = "resolution">Max Resolution:</h3>
      					<h3 id = "pixels">Effective Pixels:</h3>
      					<h3 id = "cds">Continuous Drive Speed:</h3>
      					<h3 id = "video">Video Enabled:</h3>
      				</Col>

      				<Col sm="3" id="ans-text">
			  			<h3 id = "brandAns"></h3>
      					<h3 id = "modelAns"></h3>
      					<h3 id = "resolutionAns"></h3>
      					<h3 id = "pixelsAns"></h3>
      					<h3 id = "cdsAns"></h3>
      					<h3 id = "videoAnd"></h3>
		  			</Col>
  				</Row>

  				<Row id="table-row">
					<h1 id = "cameraPhotos">Photos Taken</h1>
  					<table className = "photoTable">
    					<tr>
      						<td><img className = "photoImage" src="https://travel.usnews.com/static-travel/images/destinations/7/grand_prismatic_spring_yellowstone.jpg" /></td>
      						<td><img className = "photoImage" src="http://cdn.newsapi.com.au/image/v1/f03f880ac3fe263b0309c1987c69008b" /></td>
      						<td><img className = "photoImage" src="https://www.travelwyoming.com/sites/default/files/styles/16_9_wide/public/assets/YNP_hero1_v2.gif?itok=N0SaAXh6&timestamp=1457981209" /></td>
     		 				<td><img className = "photoImage" src="http://cdn.history.com/sites/2/2017/03/GettyImages-154931596.jpg" /></td>
      						<td><img className = "photoImage" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/medium_2x/public/1517261363/yellowstone-national-park-wyoming-YELLOWSTONE0118.jpg?itok=1ETM2GNU" /></td>
    					</tr>
  					</table>
  				</Row>
  				<h1 id = "parksListed" >Parks Used At</h1>
			</div>
		);
	}
}
