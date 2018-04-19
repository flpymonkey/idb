import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import SearchItem from './SearchItem.js';
import { SyncLoader } from 'react-spinners';
import Pagination from 'react-js-pagination';

import '../stylesheets/search.css';

import * as Fuse from 'fuse.js';

export default class Search extends Component {
  constructor(props) {
    super(props);

    var queryString = require('qs');
    var parsed = queryString.parse(this.props.location.search);

    this.state = {
      search_string: parsed['?q'],
      search_results: [],
      loading: true,
      numResults: 0,
      activePage: 1
    };
    this.renderResults = this.renderResults.bind(this);
  }

  getKeys(){
    return ([
      { name: 'park', weight: 0.1 },
      { name: 'camera', weight: 0.1 },
      { name: 'title', weight: 0.05 },
      { name: 'name', weight: 0.4 },
      { name: 'description', weight: 0.01 },
      { name: 'state', weight: 0.01 },
      { name: 'directions', weight: 0.01 },
      { name: 'photographer', weight: 0.3 },
      { name: 'type', weight: 0.01 },
      { name: 'date', weight: 0.01 },
      { name: 'likes', weight: 0.01 },
      { name: 'price', weight: 0.01 },
      { name: 'weight', weight: 0.01 },
      { name: 'weather', weight: 0.01 },
      { name: 'effective_megapixels', weight: 0.01 },
      { name: 'total_megapixels', weight: 0.01 },
      { name: 'shutter_speeds', weight: 0.01 },
      { name: 'iso', weight: 0.01 },
      { name: 'water_resistant', weight: 0.01 },
      { name: 'sensor', weight: 0.01 }
      ]);
  }

  getSearchResults(search_string, fuse){
    if (search_string !== undefined){
      search_string = search_string.trim();
    }

    if (search_string === undefined || search_string === '') {
      return ([]);
    } else {
      var search_results = fuse.search(this.state.search_string);
      return (search_results.map((elem, i) => (
        <SearchItem
          key={i}
          data={elem}
          searchTerm={this.props.location.search}
          />
      )));
    }
  }

  componentDidMount() {
    fetch('http://api.natphoto.me/all', {
      method: 'GET',
      dataType: 'json'
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        var fuse = new Fuse(data, {
          matchAllTokens: true,
          tokenize: true,
          threshold: 0.1,
          distance: 100,
          keys: this.getKeys()
        });
        var search_results = this.getSearchResults(this.state.search_string, fuse);
        this.setState({
          results: search_results,
          loading: false,
          numResults: search_results.length
        });
      });
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  // Render the search results OR a spinner if the results are still loading.
  renderResults() {
    let endVal = this.state.activePage * 5;
    let startVal = (this.state.activePage - 1) * 5;
    if (this.state.loading) {
      return (
        <Col className="loader">
          <SyncLoader color={'#009d00'} size={10} margin={'5px'} />
          <br />
          <p>Hang tight! Your search is loading...</p>
        </Col>
      );
    } else {
      if (this.state.results.length === 0) {
        if (this.state.search_string === undefined) {
          return 'Type in a search term in the search bar above!';
        }
        return 'No results found for "' + this.state.search_string + '".';
      } else {
        return (
          <div className="searchResults">
            <Row>
              <Col>
                <div className="results">
                  {this.state.numResults} results found for "{this.state.search_string}"
                </div>
              </Col>
            </Row>
            <div>{this.state.results.slice(startVal, endVal)}</div>
            <Row>
              <Col className="paginationCol">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={5}
                  totalItemsCount={this.state.numResults}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange.bind(this)}
                  className="pagination"
                />
              </Col>
            </Row>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            />
          </div>
        );
      }
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 className="searchTitle">Search</h1>
          </Col>
        </Row>
        {this.renderResults()}
      </Container>
    );
  }
}
