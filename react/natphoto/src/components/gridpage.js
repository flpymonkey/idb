import React, {Component} from "react";
import NavBar from './NavBar.js';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';

export default class PhotoGrid extends Component {
	render() {
		var photo1 = {img:"https://c1.staticflickr.com/5/4529/37718090005_023fa923a2_h.jp", title:"Half A Sunset", subtitle:"Nicolas Jaud"};
		var photo2 = {img:"https://c1.staticflickr.com/9/8406/8679159813_1f23534aed_b.jpg", title:"Mesquite Flat Dunes", subtitle:"I-Ting Chiang"};
		var photo3 = {img:"https://c1.staticflickr.com/3/2885/9249507518_25eabef5f3_h.jpg", title:"Yellowstone National Park - 3", subtitle:"Punit Sharma"};
		var photos = [photo1, photo2, photo3];
		
		return (
			<Grid data={photos} />
		);
	}
}

class Grid extends Component {
	render() {
		return (
			<div className="body">
				<NavBar />
				<div className="fluid-container">
					<div className="row">
  						<GridItem data={this.props.data[0]} />
  						<GridItem data={this.props.data[1]} />
  						<GridItem data={this.props.data[2]} />
					</div>
				</div>
			</div>
		);
	}
}

class GridItem extends Component {
	render() {

		return (
			<div className="col-sm-4">
    			<div className="hovereffect">
					<a href="/photo/3">
        				<img className="img-responsive" src={this.props.data.img} alt=""/>
						<div className="overlay">
               			 	<h1>{this.props.data.title}</h1>
               			 	<h3>by</h3>
               			 	<h2>{this.props.data.subtitle}</h2>
           				</div>
					</a>
    			</div>
    		</div>
		);
	}
}
