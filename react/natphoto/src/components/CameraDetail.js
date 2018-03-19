import React, {Component} from 'react';
import { Row } from 'reactstrap';
import NavBar from './NavBar.js';
import DetailHeader from './DetailHeader.js';
import '../stylesheets/general.css';
import '../stylesheets/cameradetail.css';

export default class CameraDetail extends Component {
	render (){
		var cameraLabels = {'Brand:':"Canon", 'Model:':"EOS 5D Mark IV", 'Max Resolution:':"6720x4480", 'Effective Pixels:':"30 megapixels", 'Continuous Drive Speed:':"7.0 fps", 'Video Enabled:':"Yes"};

		return (
			<div className="body">
				<NavBar />
				<h1 className="header"><span>Canon EOS 5D Mark IV</span></h1>
				<DetailHeader pic="https://4.img-dpreview.com/files/p/E~TS520x0~articles/9335477559/canon_16_35mm_III_5.jpeg" name="Death Valley National Park" infoAttributes={cameraLabels}/>

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
