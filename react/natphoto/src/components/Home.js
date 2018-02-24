import React, {Component} from "react"
import '../stylesheets/Home.css'

import NavBar from './NavBar.js'

export default class Home extends Component {
	render (){
		return (
			<body>
					<NavBar />
			    <div className="carousel container" id="carContainer">
			    <div id="myCarousel" className="carousel slide" data-ride="carousel">
			      {/* Indicators */}
			      <ol className="carousel-indicators">
			        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			        <li data-target="#myCarousel" data-slide-to="1"></li>
			        <li data-target="#myCarousel" data-slide-to="2"></li>
			        <li data-target="#myCarousel" data-slide-to="3"></li>
			      </ol>
						{/* Wrapper for slides */}
			      <div className="carousel-inner">
			        <div className="item active">
			          <img src="https://media.timeout.com/images/102908736/image.jpg" alt="ParkOne" />
			        </div>

			        <div className="item">
			          <img src="https://photos.smugmug.com/North-America/California/Redwood-National-Park/i-fQqHSJc/0/f5692c09/X2/_GMA7647_tonemapped-X2.jpg" alt="ParkTwo" />
			        </div>

			        <div className="item">
			          <img src="https://media.timeout.com/images/102908703/image.jpg" alt="ParkThree" />
			        </div>

			        <div className="item">
			          <img src="https://thumbs.dreamstime.com/b/bald-cypress-tree-overhaning-river-20474394.jpg" alt="ParkFour" />
			        </div>
			      </div>
						{/* Left and right controls */}
			      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
			        <span className="glyphicon glyphicon-chevron-left"></span>
			        <span className="sr-only">Previous</span>
			      </a>
			      <a className="right carousel-control" href="#myCarousel" data-slide="next">
			        <span className="glyphicon glyphicon-chevron-right"></span>
			        <span className="sr-only">Next</span>
			      </a>
			    </div>
			    <div className="desc">
			      <div className="textWrapper">
			        <h1 className="title">NatPhoto</h1>
			        <p id="description">There is a lot that goes into a photograph. Natphoto.me will show off the beautiful United States National Parks while giving you an inside look at the lens that took the photo. The proposed project will connect cameras, photos taken by those cameras, and the locations of the photos (one of the national parks in the US).
			        </p>
			        <div className="typeicons">
			          <i className="material-icons" id="mountains">landscape</i>
			          <i className="material-icons" id="photos">insert_photo</i>
			          <i className="material-icons" id="cam">photo_camera</i>
			        </div>
			      </div>
			    </div>
			  </div>
			</body>
			);
	}
}
