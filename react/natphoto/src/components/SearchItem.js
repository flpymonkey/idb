import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";

const SEARCH_RANGE = 100;

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

  truncate(searchTerm, val) {
    if(val.length <= SEARCH_RANGE * 2) {
      return val;
    }
    var indexOfTerm = val.toLowerCase().indexOf(searchTerm.toLowerCase());
    var result = "";
    if(indexOfTerm > SEARCH_RANGE) {
      result += "...";
    }
    result += val.substring(Math.max(0, indexOfTerm - SEARCH_RANGE), Math.min(val.length, indexOfTerm + SEARCH_RANGE));
    if(indexOfTerm + searchTerm.length + SEARCH_RANGE < val.length) {
      result += "...";
    }
    return result;
  }

  getModelAttributes(highlightWords){
    return this.state.headers.map(function(elem, i) {
      for (let word of highlightWords){
        var indexOfWord = this.state[elem].toLowerCase().indexOf(word.toLowerCase());
        if (indexOfWord !== -1){
            let truncatedTerm = this.truncate(word, this.state[elem])
            var htmlFreeString = truncatedTerm.replace(/<.*?>/g, "");
            return (
              <div key={i}>
              <br/>
              <h3> {elem.toUpperCase()} </h3>
              <Highlighter
              highlightClassName="highlighted"
              searchWords={highlightWords}
              autoEscape={true}
              textToHighlight={htmlFreeString}
              />
              </div>
            )
        }
      }
      return ;
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
      <Link to={this.state.link} className="searchResults">
      <Row className="singleResult">
        <Col className="searchResultDetails" sm="6">
          <h2>
          <Highlighter
            highlightClassName="highlighted"
            searchWords={highlightWords}
            autoEscape={true}
            textToHighlight={this.state.header}
          />
          </h2>
          <div>{this.getModelAttributes(highlightWords)}</div>
        </Col>
        <Col sm="6">
          <div className="imgWrapper">
            <img src={this.state.img_url} className="img-fluid" alt={this.state.header}/>
          </div>
        </Col>
      </Row>
      </Link>
    )
  }

}
