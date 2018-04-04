import React, {Component} from "react";
import { Col, Row, Container } from 'reactstrap';
import SearchItem from './SearchItem.js'
import { SyncLoader } from 'react-spinners';

import '../stylesheets/search.css';

import * as Fuse from 'fuse.js';

export default class Search extends Component {

    constructor(props){
      super(props);

      const queryString = require('query-string');
      const parsed = queryString.parse(this.props.location.search);

      this.state = {
        search_string: parsed['q'],
        search_results: [],
        loading: true
      };

      this.renderResults = this.renderResults.bind(this);
    }

    componentDidMount() {
      fetch('http://api.natphoto.me/all', {
        method: 'GET',
        dataType: 'json'
      }).then(results => {
        return results.json();
      }).then(data => {
        var fuse = new Fuse(data,
          {
            matchAllTokens: true,
            tokenize: true,
            threshold: 0.1,
            distance: 100,
            keys: [{name: 'park', weight: 0.1},
            {name: 'camera', weight: 0.1},
            {name: 'title', weight: 0.1},
            {name: 'name', weight: 0.65},
            {name: 'description', weight: 0.05}]
          })
          var search_results = fuse.search(this.state.search_string)
          search_results = search_results.map((elem, i)=>(
            <SearchItem key={i} data={elem} />
            // title: elem.title === undefined ? "" : elem.title,
            // park: elem.park === undefined ? "" : elem.park,
            // camera: elem.camera === undefined ? "" : elem.camera,
            // name: elem.name === undefined ? "" : elem.name,
            // description: elem.description === undefined ? "" : elem.description
          ))
          this.setState({
            results: search_results,
            loading: false
          });
        })
    }

    // Render the search results OR a spinner if the results are still loading.
    renderResults() {
      if (this.state.loading) {
        return (
          <Col className="loader">
          <SyncLoader color={"#009d00"} size={10} margin={"5px"} />
          <br />
          <p>Hang tight! Your search is loading...</p>
          </Col>
        );
      } else {
        if (this.state.results === undefined || 
            this.state.results.length === 0) {
          return ("No results found.");
        } else {
          return this.state.results;
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
