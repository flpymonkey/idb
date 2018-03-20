import React, {Component} from "react";
import Grid from './GridPage.js';

export default class ParkGrid extends Component {
	render() {
		var park1 = {img:"https://media-cdn.tripadvisor.com/media/photo-s/07/94/2e/d6/death-valley-sign.jpg", title:"Death Valley", subtitle:"California"};
		var park2 = {img:"http://pictures.richardhealey.com/pictures/original/p227_sign.jpg", title:"Yellowstone", subtitle:"Wyoming"};
		var park3 = {img:"https://media-cdn.tripadvisor.com/media/photo-s/03/e0/7e/86/entrance-sign.jpg", title:"Yosemite", subtitle:"California"};
		var parks = [park1, park2, park3];
		
		return (
			<Grid data={parks} />
		);
	}
}