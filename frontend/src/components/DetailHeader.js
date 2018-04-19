import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/detailheader.css';

export default class DetailHeader extends Component {
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
  render() {
    if (this.props.pic !== null && this.props.pic !== '') {
      return (
        <Row>
          <Col sm="6">
            <div className="detailImgWrapper">
              <img
                className="detailImage"
                src={this.props.pic}
                alt={this.props.name}
              />
            </div>
          </Col>
          <Col sm="6" id="info-text">
            <div className="infoRow">{this.getListItems()}</div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col sm="11" id="info-text">
            <div className="infoRow">{this.getListItems()}</div>
          </Col>
        </Row>
      );
    }
  }
}