import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

const SEARCH_RANGE = 100;

  /*
   * Renders a search item to appear as a search result
   */
export default class SearchItem extends Component {
  
  /*
   * Saves relevant data based on model type (Camera, Park, or Photo)
   */
  constructor(props) {
    super(props);
    var search_item_data = {};
    var header = "";
    var link = "";
    if (this.props.data.id) {
      header = 'Photo: ' + this.props.data.title;
      link = '/photos/' + this.props.data.id;
      search_item_data["park"] = this.props.data.park;
      search_item_data["camera"] = this.props.data.camera;
      search_item_data["description"] = this.props.data.description;
      search_item_data["likes"] = this.props.data.likes;
      search_item_data["photographer"] = this.props.data.photographer;
      search_item_data["date"] = this.props.data.date;
    } else if (
      this.props.data.name !== null &&
      this.props.data.name.indexOf('National Park') !== -1
    ) {
      header = 'Park: ' + this.props.data.name;
      link = '/parks/' + this.props.data.name;
      search_item_data["description"] = this.props.data.description;
      search_item_data["weather"] = this.props.data.weather;
      search_item_data["directions"] = this.props.data.directions;
      search_item_data["states"] = this.props.data.states;
    } else {
      header = 'Camera: ' + this.props.data.name;
      link = '/cameras/' + this.props.data.name;
      search_item_data["price"] = this.props.data.price;
      search_item_data["type"] = this.props.data.type;
      search_item_data["weight"] = this.props.data.weight;
      search_item_data["effective_megapixels"] = this.props.data.effective_megapixels;
      search_item_data["total_megapixels"] = this.props.data.total_megapixels;
      search_item_data["shutter_speeds"] = this.props.data.shutter_speeds;
      search_item_data["iso"] = this.props.data.iso;
      search_item_data["water_resistant"] = this.props.data.water_resistant;
      search_item_data["sensor"] = this.props.data.sensor;
    }
    this.state = {
      header: header,
      link: link,
      img_url: this.props.data.image_url,
      data : search_item_data
    };
  }

  /* Truncates search results for better formatting */
  truncate(searchTerm, val) {
    if (val.length <= SEARCH_RANGE * 2) {
      return val;
    }
    var indexOfTerm = val.toLowerCase().indexOf(searchTerm.toLowerCase());
    var result = '';
    if (indexOfTerm > SEARCH_RANGE) {
      result += '...';
    }
    result += val.substring(
      Math.max(0, indexOfTerm - SEARCH_RANGE),
      Math.min(val.length, indexOfTerm + SEARCH_RANGE)
    );
    if (indexOfTerm + searchTerm.length + SEARCH_RANGE < val.length) {
      result += '...';
    }
    return result;
  }

  /*
   * Used to only show attributes of search items which include search terms.
   * Words that appear in the search term will be highlighted when displayed.
   */
  getModelAttributes(highlightWords) {
    return Object.keys(this.state.data).map(
      function(elem, i) {
        var searchPhrase = this.state.data[elem].replace(/<.*?>/g, '');
        for (let word of highlightWords) {
          var indexOfWord = searchPhrase
            .toLowerCase()
            .indexOf(word.toLowerCase());
          if (indexOfWord !== -1) {
            let truncatedTerm = this.truncate(word, searchPhrase);
            return (
              <div key={i}>
                <br />
                <div className="attributeHeader">
                  {' '}
                  {elem.toUpperCase().replace('_', ' ')}{' '}
                </div>
                <div className="attributeDesc">
                  <Highlighter
                    highlightClassName="highlighted"
                    searchWords={highlightWords}
                    autoEscape={true}
                    textToHighlight={truncatedTerm}
                  />
                </div>
              </div>
            );
          }
        }
        return;
      }.bind(this)
    );
  }

  render() {
    var queryString = require('qs');
    var parsed = queryString.parse(this.props.searchTerm);
    if (parsed) var highlightWords = [];
    if (parsed['?q'] !== undefined) {
      highlightWords = parsed['?q'].split(' ');
    }
    return (
      <Link to={this.state.link} className="searchResults">
        <Row className="singleResult">
          <Col className="searchResultDetails" md="6">
            <div className="searchResultHeader">
              <Highlighter
                highlightClassName="highlighted"
                searchWords={highlightWords}
                autoEscape={true}
                textToHighlight={this.state.header}
              />
            </div>
            <div>{this.getModelAttributes(highlightWords)}</div>
          </Col>
          <Col md="6">
            <div className="imgWrapper">
              <img
                src={this.state.img_url}
                className="img-fluid"
                alt={this.state.header}
              />
            </div>
          </Col>
        </Row>
      </Link>
    );
  }
}
