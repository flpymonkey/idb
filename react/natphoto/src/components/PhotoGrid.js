import React, { Component } from 'react';
import '../stylesheets/PhotoGrid.css';
import NavBar from './NavBar.js'

export default class PhotoGrid extends Component {
	render (){
		return (
			<body>
				<NavBar />
				<div class="fluid-container">
					<div class="row">
			  			<div class="col-sm-4">
			    			<div class="hovereffect">
										<a href="/photo/3">
			        			<img class="img-responsive" src="https://c1.staticflickr.com/5/4529/37718090005_023fa923a2_h.jpg" alt="" />
												<div class="overlay">
			               			 	<h1>Half A Sunset</h1>
			               			 	<h3>by</h3>
			               			 	<h2>Nicolas Jaud</h2>
			           				</div>
												</a>
			    			</div>
			  			</div>
			  			<div class="col-sm-4">
			    			<div class="hovereffect">
										<a href="/photo/2">
			        			<img class="img-responsive" src="https://c1.staticflickr.com/9/8406/8679159813_1f23534aed_b.jpg" alt="" />
												<div class="overlay">
			               			 	<h1>Mesquite Flat Dunes</h1>
			               			 	<h3>by</h3>
			               			 	<h2>I-Ting Chiang</h2>
			           				</div>
												</a>
			    			</div>
			  			</div>
			  			<div class="col-sm-4">
			    			<div class="hovereffect">
										<a href="/photo/1">
			        			<img class="img-responsive" src="https://c1.staticflickr.com/3/2885/9249507518_25eabef5f3_h.jpg" alt="" />

												<div class="overlay">
			               			 	<h1>Yellowstone National Park - 3</h1>
			               			 	<h3>by</h3>
			               			 	<h2>Punit Sharma</h2>
			           				</div>
										</a>
			    			</div>
			    		</div>
					</div>
				</div>
			</body>
			);
	}
}
