import React, {Component} from "react";
import { Row, Col, Container} from 'reactstrap';

// import * as Fuse from 'fuse.js';

export default class Search extends Component {

    constructor(props){
      super(props);
      this.state = {
        all_data: [],
        search_options: {keys: ['title', 'author'],id: 'ISBN'}
      };
    }

    componentDidMount() {
      fetch('http://api.natphoto.me/all', {
        method: 'GET',
        dataType: 'json'
      }).then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        //var fuse = new Fuse(data, this.state.options)
        //console.log(fuse.search('old'));
        // this.setState({
        //   parks: curr_parks
        // });
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
