import React, {Component} from 'react';
import { Row } from 'reactstrap';
import NavBar from './NavBar.js';
import DetailHeader from './DetailHeader.js';
import '../stylesheets/general.css';
import '../stylesheets/cameradetail.css';

export default class CameraDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      effective_megapixels: "",
      image_resolution: "",
      image_url: "",
      iso: "",
      name: "",
      price: "",
      sensor: "",
      shutter_speeds: "",
      total_megapixels: "",
      type: "",
      video_resolution: "",
      water_resistant: "",
      weight: ""
    }
  }

  componentDidMount() {
    fetch('http://api.natphoto.me/cameras/' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
      console.log(data['0'])
      this.setState({
          effective_megapixels: data['0'].effective_megapixels,
          image_resolution: data['0'].image_resolution,
          image_url: data['0'].image_url,
          iso: data['0'].iso,
          name: data['0'].name,
          price: data['0'].price,
          sensor: data['0'].sensor,
          shutter_speeds: data['0'].shutter_speeds,
          total_megapixels: data['0'].total_megapixels,
          type: data['0'].type,
          video_resolution: data['0'].video_resolution,
          water_resistant: data['0'].water_resistant,
          weight: data['0'].weight
      });
    })
  }

	render (){
		var cameraLabels = {
        "Price": this.state.price,
        "Camera Type": this.state.type,
        "Effective Megapixels": this.state.effective_megapixels,
        "Total Megapixels": this.state.total_megapixels,
        "Image Resolution": this.state.image_resolution,
        "Video Resolution": this.state.video_resolution,
        "Shutter Speeds": this.state.shutter_speeds,
        "ISO": this.state.iso,
        "Water Resistant": this.state.water_resistant,
        "Weight": this.state.weight,
        "Sensor": this.state.sensor
    }

		return (
			<div className="body">
				<NavBar />
				<h1 className="cameraHeader"><span>{this.state.name}</span></h1>
				<DetailHeader pic={this.state.image_url} name={this.state.name} infoAttributes={cameraLabels}/>

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
