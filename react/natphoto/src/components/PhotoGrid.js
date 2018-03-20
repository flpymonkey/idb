import React, {Component} from "react";
import Grid from './GridPage.js';

export default class PhotoGrid extends Component {

constructor() {
    super();

    this.state = {
      list: []
    };

    fetch('http://api.natphoto.me/photos', {
      method: 'GET',
      dataType: 'json'
    })
    .then(r => r.json())
    .then(j => {
      console.log("api response received");

      this.setState({
        list: j
      });
    });
  }

	render() {
		let photos = this.state.list;
		return (
			<Grid data={photos} />
		);
	}
}
