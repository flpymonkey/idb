import React, {Component} from "react";
//import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SearchItem extends Component {
  constructor(props){
    super(props);
    var link = "";
    var header = "";
    var park = "";
    var camera = "";
    var description = "";
    if (this.props.data.id) {
      header = "Photo: " + this.props.data.title;
      park = this.props.data.park;
      camera = this.props.data.camera;
      description = this.props.data.description;
      link = "/photos/" + this.props.data.id;
    } else if (this.props.data.name !== null ||
        this.props.data.name.indexOf("National Park") !== -1) {
      header = "Park: " + this.props.data.name;
      description = this.props.data.description;
      link = "/parks/" + this.props.data.name;
    } else {
      header = "Camera: " + this.props.data.name;
      link = "/cameras/" + this.props.data.name;
    }
    this.state = {
      header: header,
      park: park,
      camera: camera,
      description: description,
      link: link
    }
  }

  render(){
    return (
      <Row>
      <Col>
      <Link to={this.state.link}>
      <h2>{this.state.header}</h2>
      </Link>
      <p>{this.state.park}</p>
      <p>{this.state.camera}</p>
      <p>{this.state.description}</p>
      <hr className="separator"/>
      </Col>
      </Row>
    )
  }

}
