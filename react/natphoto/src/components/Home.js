import React, {Component} from "react"
import { MyCarousel } from './Carousel.js'
import '../stylesheets/Home.css'
import '../stylesheets/navbar.css'

export default class Home extends Component {
	render (){
		return (
			<div className="body">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
				<MyCarousel/>
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
			);
	}
}
