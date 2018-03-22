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
			activePage: 1
		}

	}

    handlePageChange(pageNumber) {
        console.log("Active page is: " + pageNumber);
        this.setState({activePage: pageNumber});
    }

	render() {
    	let endVal = (this.state.activePage * 16)
    	let startVal = ((this.state.activePage - 1) * 16)
        const slice = this.props.data.slice(startVal, endVal);
		const grid_cards = slice.map((elem) =>
  			<GridItemCard data={elem} />
  		);

		return (
			<div className="body">
        <Container>
					<Row>
						{grid_cards}
					</Row>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
					<Pagination
          				activePage={this.state.activePage}
          				itemsCountPerPage={16}
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
        <Col xl="3" lg="3" md="3" sm="3">
          <div className="cardDiv">
            <Card>
              <Link to={this.props.data.detail_url}>
              <CardImg className="imgInCard" src={this.props.data.img} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.data.title}</CardTitle>
                <CardSubtitle>{this.props.data.subtitle}</CardSubtitle>
                <CardText>{this.props.data.info}</CardText>
              </CardBody>
              </Link>
            </Card>
          </div>
        </Col>
      );
  }
}
