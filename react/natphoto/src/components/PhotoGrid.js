import React, {Component} from "react";
import Grid from './GridPage.js';

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
    	var curr_photos = data.map((elem) => ({
            img: elem.image_url,
            title: elem.title,
            subtitle: "by " + elem.photographer,
            info: elem.likes + " likes",
            detail_url: "/photos/" + elem.id,
            sort1: elem.title,
            sort2: parseInt(elem.likes, 10),
            sort3: parseInt(elem.date, 10)
        }));
      	this.setState({
      		photos: curr_photos
      	});
    })
  }

  render () {
	return (
	  <Grid data={this.state.photos} sortAttributes={["Title", "# Likes", "Date"]} sortTypes={["alpha", "numerical", "numerical"]} title="Photos" id="photoGrid"/>
	);
  }
}
