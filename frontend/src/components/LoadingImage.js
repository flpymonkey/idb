import React, { Component } from 'react';
import { CardImg } from 'reactstrap';
import { SyncLoader } from 'react-spinners';
import { Row } from 'reactstrap';

/*
 * Loading spinner to display while the photo still hasn't finished loading
 */
export default class LoadingImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  handleLoad(image) {
    this.setState({ loading: false });
  }

  /*
   * Wait until the image is loaded, then display it. Display a spinner in
   * its place when it is still loading.
   */
  renderImage() {
    if (this.state.loading) {
      return (
        <div>
          <Row>
            <div className="col-xs-6 col-xs-offset-3 spinner">
              <SyncLoader color={'#009d00'} size={10} margin={'5px'} />
            </div>
          </Row>
          <div className="imageContainer">
            <CardImg
              className="hidden"
              src={this.props.img}
              alt="Card image cap"
              onLoad={this.handleLoad.bind(this)}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="imageContainer">
          <CardImg
            className="card-img"
            src={this.props.img}
            alt="Card image cap"
            onLoad={this.handleLoad.bind(this)}
          />
        </div>
      );
    }
  }

  render() {
    return this.renderImage();
  }
}
