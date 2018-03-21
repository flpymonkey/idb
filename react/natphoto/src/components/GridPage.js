import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';
import Pagination from 'react-js-pagination';

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

		const photos = this.state.photos.map((photo) =>
  			<GridItem data={photo} />
  		);

		return (
			<div className="body">
					<Row>
						<div>{photos}</div>
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


			</div>
		);
	}
}

class GridItem extends Component {
	render() {
		return (
			 <Col sm="4">
    			<div className="hovereffect">
					<a href="/photo/3">
        				<img className="img-responsive" src={this.props.data.img} alt=""/>
						<div className="overlay">
               			 	<h1>{this.props.data.title}</h1>
               			 	<h2>{this.props.data.subtitle}</h2>
           				</div>
					</a>
    			</div>
    		</Col>
		);
	}
}
