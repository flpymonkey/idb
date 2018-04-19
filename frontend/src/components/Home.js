import React, {Component} from "react"
import { MyCarousel } from './Carousel.js'
import { Row, Col, Container } from 'reactstrap';
import '../stylesheets/Home.css'
import '../stylesheets/general.css';

export default class Home extends Component {
	render (){
		return (
			<Container>
				<Row className="body">
						<Col sm="12" md="8">
							<MyCarousel/>
						</Col>
						<Col sm="12" md="4">
				    	<div className="desc">
			      		<div className="textWrapper">
			        		<h1 className="title">NatPhoto</h1>
			        		<p id="description">There is a lot that goes into a photograph. Natphoto.me will show off the beautiful United States National Parks while giving you an inside look at the lens that took the photo. The proposed project will connect cameras, photos taken by those cameras, and the locations of the photos (one of the national parks in the US).
			        		</p>
			        		<div className="typeicons">
											<i className="material-icons" id="photoicon">insert_photo</i>
			          			<i className="material-icons" id="mountains">landscape</i>
			          			<i className="material-icons" id="cam">photo_camera</i>
			        		</div>
				      	</div>
				    	</div>
						</Col>
				</Row>
			</Container>
			);
	}
}
