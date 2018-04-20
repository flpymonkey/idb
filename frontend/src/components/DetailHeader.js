import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/detailheader.css';


/*
 * Displays detail page info for cameras and parks
 */
export default class DetailHeader extends Component {
  
  /*
   * Loops through each attribute of the camera or park and displays
   * it alongside its label (Description, Location, Megapixels, etc.).
   * If the given model does not contain information on an attribute,
   * we do not display the attribute or its label.
   */
  getListItems() {
    var keys = Object.keys(this.props.infoAttributes);
    return keys.map(
      function(key, i) {
        if (this.props.infoAttributes[key + ''] !== null) {
          return (
            <Row key={i}>
              <Col sm="3" className="descKeysCol">
                <h3 className="descKey">{key} </h3>
              </Col>
              <Col sm="9" className="descValsCol">
                <h3 className="descVal">
                  {this.props.infoAttributes[key + '']}
                </h3>
              </Col>
            </Row>
          );
        } else {
          return;
        }
      }.bind(this)
    );
  }
  
  /*
   * If there is no image given, do not create a space for it.
   * If an image is given, it is displayed alongside the text details.
   */
  render() {
    if (this.props.pic !== null && this.props.pic !== '') {
      return (
        <Row>
          <Col lg="6">
            <div className="detailImgWrapper">
              <img
                className="detailImage"
                src={this.props.pic}
                alt={this.props.name}
              />
            </div>
          </Col>
          <Col lg="6" id="info-text">
            <div className="infoRow">{this.getListItems()}</div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col lg="11" id="info-text">
            <div className="infoRow">{this.getListItems()}</div>
          </Col>
        </Row>
      );
    }
  }
}
