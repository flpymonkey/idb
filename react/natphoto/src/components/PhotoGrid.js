import React, {Component} from "react";
import Grid from './GridPage.js';
import ApiHandler from '../ApiHandler.js';

export default class PhotoGrid extends Component {

	render() {
    var response = ApiHandler.getPhotos();
    console.log(response);
		return (
			<Grid data={photos} />
		);
	}
}
