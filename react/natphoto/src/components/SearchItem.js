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
    var weather = "";
    var directions = "";
    var states = "";
    var likes = "";
    var photographer = "";
    var date = "";
    // camera search stuff
    var price = "";
    var weight = "";
    var effective_megapixels = "";
    var total_megapixels = "";
    var shutter_speeds = "";
    var iso = "";
    var water_resistant = "";
    var sensor = "";
    if (this.props.data.id) {
      header = "Photo: " + this.props.data.title;
      park = this.props.data.park;
      camera = this.props.data.camera;
      description = this.props.data.description;
      link = "/photos/" + this.props.data.id;
      likes = this.props.data.likes;
      photographer = this.props.data.photographer;
      date = this.props.data.date;
    } else if (this.props.data.name !== null &&
        this.props.data.name.indexOf("National Park") !== -1) {
      header = "Park: " + this.props.data.name;
      description = this.props.data.description;
      link = "/parks/" + this.props.data.name;
      weather = this.props.data.weather;
      directions = this.props.data.directions;
      states = this.props.data.states;
    } else {
      header = "Camera: " + this.props.data.name;
      link = "/cameras/" + this.props.data.name;
      price = this.props.data.price;
      weight = this.props.data.weight;
      effective_megapixels = this.props.data.effective_megapixels;
      total_megapixels = this.props.data.total_megapixels;
      shutter_speeds = this.props.data.shutter_speeds;
      iso = this.props.data.iso;
      water_resistant = this.props.data.water_resistant;
      sensor = this.props.data.sensor;
    }
    this.state = {
      header: header,
      park: park,
      camera: camera,
      description: description,
      link: link,
      img_url: this.props.data.image_url,
      weather: weather,
      states: states,
      directions: directions,
      photographer: photographer,
      date: date,
      likes: likes,
      price: price,
      weight: weight,
      effective_megapixels: effective_megapixels,
      total_megapixels: total_megapixels,
      shutter_speeds: shutter_speeds,
      iso: iso,
      water_resistant: water_resistant,
      sensor: sensor,
      headers: ["park", "camera", "description", "weather", "states", "directions",
                "photographer", "date", "likes", "price", "weight",
                "effective_megapixels", "total_megapixels", "shutter_speeds",
                "iso", "water_resistant", "sensor"]
    }
  }

  getModelAttributes(highlightWords){
    return this.state.headers.map(function(elem, i) {
      if(this.state[elem] !== "") {
        return (
          <div key={i}>
          <br/>
          <h3>{elem.toUpperCase()}</h3>
          <Highlighter
          highlightClassName="highlighted"
          searchWords={highlightWords}
          autoEscape={true}
          textToHighlight={this.state[elem]}
          />
          </div>
        )
      }
      else {
        return ;
      }
    }.bind(this)
  )
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
          <div>{this.getModelAttributes(highlightWords)}</div>
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
