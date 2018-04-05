import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";

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
    } else if (this.props.data.name !== null &&
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
      link: link,
      img_url: this.props.data.image_url
    }
  }

  render(){
    var queryString = require('qs');
    var parsed = queryString.parse(this.props.searchTerm);
    if(parsed)
    var highlightWords = [];
    if(parsed['?q'] !== undefined) {
      highlightWords = parsed['?q'].split(" ");
    }
    return (
      <Row className="singleResult">
        <Col sm="6">
          <Link to={this.state.link} className="searchResults">
          <h2>
          <Highlighter
            highlightClassName="highlighted"
            searchWords={highlightWords}
            autoEscape={true}
            textToHighlight={this.state.header}
          />
          </h2>
          </Link>
          <Highlighter
            highlightClassName="highlighted"
            searchWords={highlightWords}
            autoEscape={true}
            textToHighlight={this.state.park}
          />
          <br/>
          <Highlighter
            highlightClassName="highlighted"
            searchWords={highlightWords}
            autoEscape={true}
            textToHighlight={this.state.camera}
          />
          <br/>
          <Highlighter
            highlightClassName="highlighted"
            searchWords={highlightWords}
            autoEscape={true}
            textToHighlight={this.state.description}
          />
        </Col>
        <Col sm="6">
          <div className="imgWrapper">
            <img src={this.state.img_url} className="img-fluid" alt={this.state.header}/>
          </div>
        </Col>
      </Row>
    )
  }

}
