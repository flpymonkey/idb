import React, {Component} from "react";
import { Row, Col, Container} from 'reactstrap';

// import * as Fuse from 'fuse.js';

export default class Search extends Component {

    constructor(props){
      super(props);
      this.state = {
        all_data: []
      };
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
      })
    }

  	render() {
      return (
  			<Container>
  				<Row className="body">

  				</Row>
  			</Container>
  			);
    }

}
