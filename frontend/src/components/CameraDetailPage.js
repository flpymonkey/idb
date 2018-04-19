import React, {Component} from 'react';
import DetailHeader from './DetailHeader.js';
import ScrollableTable from './ScrollableTable.js';
import EmptyPage from './EmptyPage.js'
import '../stylesheets/general.css';
import '../stylesheets/cameradetail.css';

/*
* Renders page that represents a camera model including details like
* a picture of the camera, its price, name, megapixels, etc.
* Links to related parks and photos.
*/
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
      amazon_url: "",
      photos: [],
      parks: []
    }
  }

  /*
  * Fetches all data on the given camera
  */
  componentDidMount() {
    this.getCameraInfo();
    this.getPhotosForCamera();
    this.getParksForCamera();
  }

  /*
  * Fetches camera info from our API
  */
  getCameraInfo() {
    fetch('http://api.natphoto.me/cameras/' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
      if(data[0] !== undefined) {
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
          weight: data['0'].weight,
          amazon_url: "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + data['0'].name,
        });
      } else {
          this.setState({
            name: this.props.match.params.camera_name
          });
      }
    });
  }

  /*
  * Fetches list of photos taken with this camera from our API
  */
  getPhotosForCamera() {
    fetch('http://api.natphoto.me/photos?camera=' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
      var curr_photos = data.map((elem) => ({
        img: elem.image_url, path: "/photos/" + elem.id, name: elem.title}
      ));
      if (curr_photos.length !== 0){
        this.setState({
          valid: true,
          photos: curr_photos
        });
      } else {
        this.setState({valid: false});
      }
    });
  }

  /*
  * Fetches parks at which this camera was used from our API
  */
  getParksForCamera() {
    fetch('http://api.natphoto.me/parks?camera=' + this.props.match.params.camera_name, {
      method: 'GET',
      dataType: 'json',
    }).then(results => {
      return results.json();
    }).then(data => {
      var curr_parks = data.map((elem) => ({
        img: elem.image_url, path: "/parks/" + elem.name, name: elem.name}
      ));
      if (curr_parks.length !== 0){
        this.setState({
          valid: true,
          parks: curr_parks
        });
      } else {
        this.setState({valid: false});
      }
    });
  }

  /*
  * Creates and returns CameraLabels object with info to display based on API data saved in the state
  */
  getCameraLabels() {
    return {
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
    };
  }

  /*
  * If this component was rendered by an invalid URL, display EmptyPage.
  * Otherwise, display Camera details.
  */
  render (){
    if(this.state.valid === "unknown"){
      return <div/>
    }
    else if (this.state.valid === false) {
      return <EmptyPage />
    }
    else {
      var cameraLabels = this.getCameraLabels();
      return (
        <div>
          <h1 className="cameraHeader"><span>{this.state.name}</span></h1>
          <DetailHeader pic={this.state.image_url} name={this.state.name} infoAttributes={cameraLabels}/>
          <a href={this.state.amazon_url} target="_blank">
            <h1 className="amazonHeader">Find it on Amazon!</h1>
          </a>
          <ScrollableTable tableTitle="Photos Taken" data={this.state.photos}/>
          <ScrollableTable tableTitle="Parks" data={this.state.parks}/>
        </div>

      );
    }
  }
}
