import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmptyPage from './EmptyPage.js';
import Parser from 'html-react-parser';
import '../stylesheets/photodetailpage.css';
import '../stylesheets/general.css';

export default class PhotoDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      valid: "unknown",
      flickr_url: "",
      image_url: "",
      title: "",
      date: "",
      photographer: "",
      likes: "",
      camera: "",
      park: "",
      description: "",
      park_url: "",
      camera_url: ""
    };
	}

	componentDidMount() {
    fetch('http://api.natphoto.me/photos/' + this.props.match.params.photo_id, {
    	method: 'GET',
    	dataType: 'json'
    }).then(results => {
    	return results.json();
    }).then(data => {
      if(data[0] === undefined) {
        this.setState({valid: false});
      }
      else {
        this.setState({
          valid: true,
      	   flickr_url: data['0'].flickr_url,
           image_url: data['0'].image_url,
           title: data['0'].title,
           date: data['0'].date,
           photographer: data['0'].photographer,
           likes: data['0'].likes,
           camera: data['0'].camera,
           park: data['0'].park,
           description: data['0'].description,
           park_url: "/parks/" + data['0'].park,
           camera_url: "/cameras/" + data['0'].camera
      	});
      }
    })
	}

	render () {
    if(this.state.valid === "unknown"){
      return <div/>
    }
    else if (this.state.valid === false) {
      return <EmptyPage />
    }
    else {
  		return (
  			<div>
  				<Row className="headerRow">
            <Col sm="2"/>
  					<Col sm="8" id="photoDetailTitle">
    						<h3 className="photoTitle">{this.state.title}</h3>
    				</Col>
  				</Row>
  				<Row>
            <Col sm="12" md={{ size: 8, offset: 2 }} id="photo">
              		<a href={this.state.flickr_url} target="_blank">
  						  <img id="picture" src={this.state.image_url} alt={this.state.title}  />
              		</a>
  					</Col>
  				</Row>
  				<Row>
            <Col sm="2"/>
  					<Col sm="8" id="photoDetailTitle">
    				  <h3>by</h3>
    					<h1>{this.state.photographer}</h1>
    					<h3>on</h3>
    					<h2>{this.state.date}</h2>
    					<h2>{this.state.likes} Likes</h2>
    				</Col>
  				</Row>
          <Row id="descriptionRow">

            <Col sm="12">
              <h3>Description</h3>
              <p>{Parser(this.state.description) || "N/A"}</p>
              <a href={this.state.flickr_url} target="_blank">
                <p>Check out this photo on flickr!</p>
              </a>
            </Col>
          </Row>
      		<Row id="linksRow">
     				<Col sm="6" id="cameraLink">
              <Link to={this.state.camera_url}>
                {this.state.camera}<i className="material-icons">photo_camera</i>
              </Link>
            </Col>
     				<Col sm="6" id="parkLink">
              <Link to={this.state.park_url}>
                {this.state.park}<i className="material-icons">landscape</i>
              </Link>
            </Col>
   				</Row>
          <br />
   		 	</div>
  		);
    }
	}
}
