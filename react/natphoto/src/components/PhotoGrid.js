import React, {Component} from "react";
import Grid from './GridPage.js';

export default class PhotoGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: []
    };

    fetch('http://api.natphoto.me/photos', {method: 'GET', dataType: 'json'})
    .then(r => r.json())
    .then(j => {
      var i = 0
      var cur_photos = []
      while (i < 9){
        var photo = {img: j[i].image_url, title:j[i].title, subtite:j[i].photographer};
        cur_photos.push(photo);
        i++;
      }
      console.log(cur_photos);
      this.setState ({
        list: cur_photos
      });
    });
  }

	render() {
    let photos = this.state.list
		return (
			<Grid data={photos} />
		);
	}
}
