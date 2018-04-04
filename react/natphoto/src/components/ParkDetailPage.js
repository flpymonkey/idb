import React, {Component} from 'react';
import DetailHeader from './DetailHeader.js';
import ScrollableTable from './ScrollableTable.js';
import EmptyPage from './EmptyPage.js'
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
      console.log("park detail did mount");
      fetch('http://api.natphoto.me/parks/' + this.props.match.params.park_name, {
      	method: 'GET',
      	dataType: 'json'
      }).then(results => {
      	return results.json();
      }).then(data => {
        console.log(data)
        if(data[0] === undefined) {
          this.setState({valid: false});
        }
        else {
        	this.setState({
            valid: true,
            description: data["0"].description,
            directions : data["0"].directions_url,
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
    console.log(this.state.valid)
		if(this.state.valid === "unknown"){
      return <div/>
    }
    else if (this.state.valid === false) {
      return <EmptyPage />
    }
    else {
      var parkLabels = {'Location:':this.state.latlong, 'Website:':this.state.url, 'Weather:':this.state.weather, 'Directions:':this.state.directions};
  		return(
  			<div className="body">
  				<h1 className="parkHeader"><span>{this.state.name}</span></h1>
  				<DetailHeader pic={this.state.image_url} name={this.state.name} infoAttributes={parkLabels}/>
  				<ScrollableTable tableTitle="Photos Taken" data={this.state.photos} />
          <ScrollableTable tableTitle="Cameras Used" data={this.state.cameras} />
  			</div>
  		);
    }
	}
}
