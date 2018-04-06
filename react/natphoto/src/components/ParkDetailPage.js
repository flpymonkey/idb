import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import DetailHeader from './DetailHeader.js';
import ScrollableTable from './ScrollableTable.js';
import EmptyPage from './EmptyPage.js'
import { MapsAPIKey } from '../MapsAPIKey.js'
import '../stylesheets/general.css';
import '../stylesheets/parkdetail.css';

export default class ParkDetail extends Component {

    constructor(props){
      super(props);
    	this.state = {
        valid: "unknown",
        description: "",
        directions : "",
        directions_url: "",
        image_url: "",
        latlong: "",
        name: "",
        states: "",
        url: "",
        weather: "",
        photos: [],
        cameras: []
      };
    }

  	componentDidMount() {
      fetch('http://api.natphoto.me/parks/' + this.props.match.params.park_name, {
      	method: 'GET',
      	dataType: 'json'
      }).then(results => {
      	return results.json();
      }).then(data => {
        if(data[0] === undefined) {
          this.setState({valid: false});
        }
        else {
        	this.setState({
            valid: true,
            description: data["0"].description,
            directions : data["0"].directions,
            image_url: data["0"].image_url,
            latlong: data["0"].latlong,
            name: data["0"].name,
            states: data["0"].states,
            url: data["0"].url,
            weather: data["0"].weather
          });
        }
      });

      fetch('http://api.natphoto.me/photos?park=' + this.props.match.params.park_name, {
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

      fetch('http://api.natphoto.me/cameras?park=' + this.props.match.params.park_name, {
        method: 'GET',
        dataType: 'json',
      }).then(results => {
        return results.json();
      }).then(data => {
          var curr_cameras = data.map((elem) => ({
                img: elem.image_url, path: "/cameras/" + elem.name, name: elem.name}
            ));
          this.setState({
            cameras: curr_cameras
          });
      });
  	}

	render() {
		if(this.state.valid === "unknown"){
      return <div/>
    }
    else if (this.state.valid === false) {
      return <EmptyPage />
    }
    else {
      var parkLabels = {'State:':this.state.states, 'Weather:':this.state.weather,
        'Directions:':this.state.directions, 'Description:': this.state.description};
  		return(
  			<div>
  				<h1 className="parkHeader"><span>{this.state.name}</span></h1>
          <Row>
  	  				<Col sm="5">
  							<div className="imgWrapper">
  	    					<img className="image" src={this.state.image_url} alt={this.state.name}/>
  							</div>
  	    			</Col>
              <Col sm="1"/>
              <Col sm="5">
              <iframe
                title={this.state.name}
                width="400"
                height="300"
                frameborder="0" style={{border:0}}
                src={"https://www.google.com/maps/embed/v1/place?key=" + MapsAPIKey + "&q=" + this.state.name} allowfullscreen>
              </iframe>
  	    			</Col>
  	  		</Row>
  				<DetailHeader pic={null} infoAttributes={parkLabels}/>
          <a href={this.state.url} target="_blank">
          <h1 className="npsHeader">Get more information from the National Park Service!</h1>
          </a>
  				<ScrollableTable tableTitle="Photos Taken" data={this.state.photos} />
          <ScrollableTable tableTitle="Cameras Used" data={this.state.cameras} />
  			</div>
  		);
    }
	}
}
