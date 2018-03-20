import React, {Component} from "react";
import Grid from './GridPage.js';

export default class CameraGrid extends Component {
	render() {
		var camera1 = {img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5792/5792700_sd.jpg", title:"Canon", subtitle:"30 megapixels"};
		var camera2 = {img:"https://n3.sdlcdn.com/imgs/a/i/q/Nikon-Coolpix-P7700-12-2-1536150-6-f2879.jpg", title:"Nikon Cool Pix", subtitle:"12 megapixels"};
		var camera3 = {img:"https://cdnl.ritzcamera.com/media/catalog/product/1/0/10268770.jpg", title:"Nikon D7100", subtitle:"24 megapixels"};
		var cameras = [camera1, camera2, camera3];
		
		return (
			<Grid data={cameras} />
		);
	}
}