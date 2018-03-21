import React, {Component} from "react";
import Grid from './GridPage.js';

export default class CameraGrid extends Component {

	constructor(props){
		super(props);
    	this.state = {
      		cameras: []
		};
  	}
	
  	componentDidMount() {

    	fetch('http://api.natphoto.me/cameras', {
    		method: 'GET', 
    		dataType: 'json'
    	}).then(results => {
    		return results.json();
    	}).then(data => { 
    		var curr_cameras = data.map((elem) => ({img: elem.image_url, title: elem.name, subtitle: elem.price}));
      		this.setState({
      			cameras: curr_cameras
      		});
    	})
  	}
      	
	render () {
		return (
	  		<Grid data={this.state.cameras} /> 
		);
  	}
}