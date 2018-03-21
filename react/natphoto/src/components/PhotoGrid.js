import React, {Component} from "react";
import Grid from './GridPage.js';
import ApiHandler from '../ApiHandler.js';

export default class PhotoGrid extends Component {

  constructor(props){
    super(props);

    this.state = {
      photos: []
    };
	}
	
	componentDidMount() {

    fetch('http://api.natphoto.me/photos', {
    	method: 'GET', 
    	dataType: 'json'
    }).then(results => {
    	return results.json();
    }).then(data => { 
    	console.log("hweifjkshfs" + data);
    	var curr_photos = data.map((elem) => ({img: elem.flickr_url, title: elem.title, subtitle: elem.photographer}));
      	this.setState({
      		photos: curr_photos
      	});
      	console.log(this.state.photos);
    })
	}
      	
	render () {
		var whatever = [{img: "https://media-cdn.tripadvisor.com/media/photo-s/07/94/2e/d6/death-valley-sign.jpg", title: "my title", subtitle: "whatever2"}];
		return (
			<Grid data={this.state.photos} /> 
		);
	}
}
