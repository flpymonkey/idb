import React, {Component} from 'react';
import DetailHeader from './DetailHeader.js';
import ScrollableTable from './ScrollableTable.js';
import '../stylesheets/general.css';
import '../stylesheets/parkdetail.css';

export default class ParkDetail extends Component {

    constructor(props){
      super(props);
    	this.state = {
        description: "",
        directions : "",
        directions_url: "",
        image_url: "",
        latlong: "",
        name: "",
        states: "",
        url: "",
        weather: ""
      };
    }

  	componentDidMount() {
      fetch('http://api.natphoto.me/parks/' + this.props.match.params.park_name, {
      	method: 'GET',
      	dataType: 'json'
      }).then(results => {
      	return results.json();
      }).then(data => {
        console.log(data["0"]);
      	this.setState({
          description: data["0"].description,
          directions : data["0"].direction,
          directions_url: data["0"].directions_url,
          image_url: data["0"].image_url,
          latlong: data["0"].latlong,
          name: data["0"].name,
          states: data["0"].states,
          url: data["0"].url,
          weather: data["0"].weather
        });
      })
  	}

	render() {
		var parkLabels = {'Location:':this.state.latlong, 'Website:':this.state.url, 'Weather:':this.state.weather, 'Directions':this.state.directions};

		return(
			<div className="body">
				<h1 className="parkHeader"><span>{this.state.name}</span></h1>
				<DetailHeader pic={this.state.image_url} name={this.state.name} infoAttributes={parkLabels}/>

				<ScrollableTable tableTitle="Photos Taken" />
				<ScrollableTable tableTitle="Cameras Used" />

			</div>
		);
	}
}
