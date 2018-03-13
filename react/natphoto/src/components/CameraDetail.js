import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import NavBar from './NavBar.js';
import '../stylesheets/general.css';
import '../stylesheets/cameradetail.css';

export default class CameraDetail extends Component {
	render (){
		var cameraLabels = {'Brand:':"Canon", 'Model:':"EOS 5D Mark IV", 'Max Resolution:':"6720x4480", 'Effective Pixels:':"30 megapixels", 'Continuous Drive Speed:':"7.0 fps", 'Video Enabled:':"Yes"};

		return (
			<div className="body">
				<NavBar />
				<h1 className="header"><span>Canon EOS 5D Mark IV</span></h1>
				<DetailHeader pic="https://4.img-dpreview.com/files/p/E~TS520x0~articles/9335477559/canon_16_35mm_III_5.jpeg" name="Canon" infoAttributes={cameraLabels}/>

				<Row id="table-row">
					<h1 id = "photos">Photos Taken</h1>
  					<table className = "photoTable">
    					<tr>
      						<td><img className = "photoImage" src="https://travel.usnews.com/static-travel/images/destinations/7/grand_prismatic_spring_yellowstone.jpg" alt=""/></td>
      						<td><img className = "photoImage" src="http://cdn.newsapi.com.au/image/v1/f03f880ac3fe263b0309c1987c69008b" alt=""/></td>
      						<td><img className = "photoImage" src="https://www.travelwyoming.com/sites/default/files/styles/16_9_wide/public/assets/YNP_hero1_v2.gif?itok=N0SaAXh6&timestamp=1457981209" alt=""/></td>
     		 				<td><img className = "photoImage" src="http://cdn.history.com/sites/2/2017/03/GettyImages-154931596.jpg" alt=""/></td>
      						<td><img className = "photoImage" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/medium_2x/public/1517261363/yellowstone-national-park-wyoming-YELLOWSTONE0118.jpg?itok=1ETM2GNU" alt=""/></td>
    					</tr>
  					</table>
  				</Row>
  				<h1 id = "parksListed" >Parks Used At</h1>
			</div>

		);
	}
}

class DetailHeader extends Component {
	render (){
		var keys = Object.keys(this.props.infoAttributes);

		return (
			<Row>
  				<Col sm="6">
    				<img className="image" src={this.props.pic} alt={this.props.name}/>
    			</Col>

 		  		<Col sm="3" id="info-text">
			  		<h2 id = "infoHeader">Info</h2>
      				<h3>{keys[0]}</h3>
      				<h3>{keys[1]}</h3>
      				<h3>{keys[2]}</h3>
      				<h3>{keys[3]}</h3>
      				<h3>{keys[4]}</h3>
      				<h3>{keys[5]}</h3>
      			</Col>

      			<Col sm="3" id="ans-text">
			  		<h3>{this.props.infoAttributes[keys[0]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[1]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[2]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[3]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[4]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[5]+""]}</h3>
		  		</Col>
  			</Row>
		);
	}
}
