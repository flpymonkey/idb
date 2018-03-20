import React, {Component} from "react";
import Grid from './GridPage.js';

export default class PhotoGrid extends Component {
	render() {
		var photo1 = {img:"https://c1.staticflickr.com/5/4529/37718090005_023fa923a2_h.jpg", title:"Half A Sunset", subtitle:"Nicolas Jaud"};
		var photo2 = {img:"https://c1.staticflickr.com/9/8406/8679159813_1f23534aed_b.jpg", title:"Mesquite Flat Dunes", subtitle:"I-Ting Chiang"};
		var photo3 = {img:"https://c1.staticflickr.com/3/2885/9249507518_25eabef5f3_h.jpg", title:"Yellowstone National Park - 3", subtitle:"Punit Sharma"};
		var photos = [photo1, photo2, photo3];
		
		return (
			<Grid data={photos} />
		);
	}
}