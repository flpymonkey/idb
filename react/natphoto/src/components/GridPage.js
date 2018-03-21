import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'reactstrap';
import Pagination from 'react-js-pagination';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';



export default class Grid extends Component {

 	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
			activePage: 5,
			start: 0,
			end: 8,
			photos: []
		}

// 		console.log(`photos in constructor is ${this.state.photos}`);
	}

	componentDidMount() {
		console.log(`hello`);
		this.handlePageChange(1);
	}

	handlePageChange(pageNumber) {
    	console.log('active page is ' + pageNumber);
    	var endVal = (pageNumber * 9)
    	var startVal =  ((pageNumber-1) * 9)
    	console.log(' end val is ' + endVal + ' startval is ' + startVal);
    	this.setState({activePage: pageNumber, end: endVal, start: startVal, photos: this.props.data.slice(startVal, endVal)});
    	console.log('end is ' + this.state.end + ' and start is ' + this.state.start);
  	}

	render() {
		// console.log(`data length is ${this.props.data.length}`);

		const elems = this.state.photos.map((elem) =>
  			<GridItemCard data={elem} />
  		);

		return (
			<div className="body">
        <Container>
					<Row>
						{elems}
					</Row>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
					<Pagination
          				activePage={this.state.activePage}
          				itemsCountPerPage={9}
          				totalItemsCount={this.props.data.length}
          				pageRangeDisplayed={5}
          				onChange={this.handlePageChange.bind(this)}
          				className = "pagination"
        			/>

        </Container>
			</div>
		);
	}
}

class GridItemCard extends Component {
  render() {
      return(
        <Col sm="3">
          <div>
            <Card>
              <CardImg src={this.props.data.img} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.data.title}</CardTitle>
                <CardSubtitle>{this.props.data.subtitle}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
              </CardBody>
            </Card>
          </div>
        </Col>
      );
  }
}

class GridItem extends Component {

	render() {
		return (
			 <Col sm="3">
    			<div className="hovereffect">
					<Link to={this.props.data.detail_url}>
        				<img className="img-responsive" src={this.props.data.img} alt=""/>
						<div className="overlay">
               			 	<h1>{this.props.data.title}</h1>
               			 	<h2>{this.props.data.subtitle}</h2>
           				</div>
					</Link>
    			</div>
    		</Col>
		);
	}
}
