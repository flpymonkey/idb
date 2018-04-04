import React, {Component} from 'react';
import DetailHeader from './DetailHeader.js';
import ScrollableTable from './ScrollableTable.js';
import EmptyPage from './EmptyPage.js'
import '../stylesheets/general.css';
import '../stylesheets/cameradetail.css';

export default class CameraDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid: "unknown",
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
      weight: "",
      photos: [],
      parks: []
    }
  }

  componentDidMount() {
    fetch('http://api.natphoto.me/cameras/' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
      if(data[0] === undefined) {
        this.setState({valid: false});
      }
      else {
        this.setState({
          valid: true,
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
      }
    });

    // Get photos for this camera
    fetch('http://api.natphoto.me/photos?camera=' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
        var curr_photos = data.map((elem) => ({
              img: elem.image_url, path: "/photos/" + elem.id, name: elem.title}
          ));
        this.setState({
          photos: curr_photos
        });
    });

    fetch('http://api.natphoto.me/parks?camera=' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
        var curr_parks = data.map((elem) => ({
              img: elem.image_url, path: "/parks/" + elem.name, name: elem.name}
          ));
        this.setState({
          parks: curr_parks
        });
    });
  }

	render (){
    if(this.state.valid === "unknown"){
      return <div/>
    }
    else if (this.state.valid === false) {
      return <EmptyPage />
    }
    else {
  		var cameraLabels = {
          "Price:": this.state.price,
          "Camera Type:": this.state.type,
          "Effective Megapixels:": this.state.effective_megapixels,
          "Total Megapixels:": this.state.total_megapixels,
          "Image Resolution:": this.state.image_resolution,
          "Video Resolution:": this.state.video_resolution,
          "Shutter Speeds:": this.state.shutter_speeds,
          "ISO:": this.state.iso,
          "Water Resistant:": this.state.water_resistant,
          "Weight:": this.state.weight,
          "Sensor:": this.state.sensor
      }
  		return (
  			<div className="body">
  				<h1 className="cameraHeader"><span>{this.state.name}</span></h1>
  				<DetailHeader pic={this.state.image_url} name={this.state.name} infoAttributes={cameraLabels}/>
  				<ScrollableTable tableTitle="Photos Taken" data={this.state.photos}/>
          <ScrollableTable tableTitle="Parks" data={this.state.parks}/>
  			</div>

  		);
    }
	}
}
