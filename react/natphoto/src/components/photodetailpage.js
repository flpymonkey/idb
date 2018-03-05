import React, { Component } from 'react';
import '../stylesheets/photodetailpage.css';
import NavBar from './NavBar.js'

export default class PhotoDetail extends Component {
	render (){
		return (
			<body>
				<NavBar />
				<div class="fluid-container">
					<div class="row">
						<div class="col-sm-12" id="title">
  							<h1>Mesquite Flat Dunes</h1>
  							<h3>by</h3>
  							<h1>I-Ting Chiang</h1>
  							<h3>on</h3>
  							<h2>April 14th, 2013</h2>
  							<h2>47 Favorites</h2>
  						</div>
					</div>
				<div class="row">
					<div class="col-sm-1"></div>
					<div class="col-sm-10" id="photo">
						<img src="https://c1.staticflickr.com/9/8406/8679159813_1f23534aed_b.jpg" alt="Beautiful Picture" style="width:100%">
					</div>
					<div class="col-sm-1"></div>
				</div>
    				<div class="row" id="linksRow">
   						<div class="col-sm-6" id="cameraLink">Nikon Coolpix P7700 <i class="material-icons">camera</i></div>
   						<div class="col-sm-6" id="parkLink">Death Valley National Park <i class="material-icons">landscape</i></div>
 					</div>
			</div>
		</body>
		);
	}
}
