import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/general.css';
import '../stylesheets/emptypage.css';

/*
 * Renders the page that is displayed when a 404 Error is thrown
 */
export default class EmptyPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="4" />
          <Col sm="4">
            <div className="emptyMessageSorry">Sorry!</div>
          </Col>
        </Row>
        <Row>
          <Col sm="3" />
          <Col sm="6">
            <div className="emptyMessageText">This page does not exist.</div>
          </Col>
        </Row>
      </div>
    );
  }
}
