import React, {Component} from 'react';
import NavBar from './NavBar.js';
import DetailHeader from './DetailHeader.js';
import '../stylesheets/general.css';
import '../stylesheets/parkdetail.css';

export default class ParkDetail extends Component {
	render() {
		var parkLabels = {'Location:':"Death Valley National Park", 'Website:':"https://w", 'Daylight hours:':"Sometime", 'Weather:':"HOT", 'ParkHours:':"24/7", 'Other:':"Other"};

		return(
			<div className="body">
				<NavBar />
				<h1 className="parkHeader"><span>Death Valley National Park</span></h1>
				<DetailHeader pic="https://www.nps.gov/deva/planyourvisit/images/Above-Golden-Canyon-04.jpg?maxwidth=1200&maxheight=1200&autorotate=false" name="Death Valley National Park" infoAttributes={parkLabels}/>

				<h1 id = "parkPhotos" >Photos Taken</h1>
    			<table className = "photoTable">
      				<tr>
        				<td>
        					<a href="/photo/2">
        						<img className = "photoImage" src="https://c1.staticflickr.com/9/8406/8679159813_1f23534aed_b.jpg" alt=""/>
        					</a>
        				</td>
      				</tr>
   			 	</table>

    			<h1 id = "parkPhotos" >Cameras Used</h1>
    			<table className = "parkTable">
      				<tr>
        				<td>
        					<a href="/camera/1">
        						<img className = "camImage" src="https://n3.sdlcdn.com/imgs/a/i/q/Nikon-Coolpix-P7700-12-2-1536150-6-f2879.jpg"alt=""/>
        					</a>
        				</td>
      				</tr>
    			</table>
			</div>
		);
	}
}

