import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/photodetailpage.css';
import '../stylesheets/general.css';

export default class PhotoDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      flickr_url: "",
      image_url: "",
      title: "",
      date: "",
      photographer: "",
      likes: "",
      camera: "",
      park: "",
      description: ""
    };
	}

	componentDidMount() {
    fetch('http://api.natphoto.me/photos/' + this.props.match.params.photo_id, {
    	method: 'GET',
    	dataType: 'json'
    }).then(results => {
    	return results.json();
    }).then(data => {
    	this.setState({
    	   flickr_url: data['0'].flickr_url,
         image_url: data['0'].image_url,
         title: data['0'].title,
         date: data['0'].date,
         photographer: data['0'].photographer,
         likes: data['0'].likes,
         camera: data['0'].camera,
         park: data['0'].park,
         description: data['0'].description
    	});
    })
	}

	render () {
		return (
			<div className="body">
				<Row>
					<Col sm="12" id="title">
  						<h1>{this.state.title}</h1>
  					</Col>
				</Row>
				<Row>
					<Col sm="1"></Col>
					<Col sm="10" id="photo">
            <a href={this.state.flickr_url}>
						  <img id="picture" src={this.state.image_url} alt={this.state.title}  />
            </a>
					</Col>
					<Col sm="1"></Col>
				</Row>
				<Row>
					<Col sm="12" id="title">
  				  <h3>by</h3>
  					<h1>{this.state.photographer}</h1>
  					<h3>on</h3>
  					<h2>{this.state.date}</h2>
  					<h2>{this.state.likes} Favorites</h2>
  				</Col>
				</Row>
        <Row id="descriptionRow">
          <Col sm="12">
            <h3>Description</h3>
            <p>{this.state.description}</p>
          </Col>
        </Row>
    		<Row id="linksRow">
   				<Col sm="6" id="cameraLink">{this.state.camera}<i className="material-icons">photo_camera</i></Col>
   				<Col sm="6" id="parkLink">{this.state.park}<i className="material-icons">landscape</i></Col>
 				</Row>
        <br />
 		 	</div>
		);
	}
}
