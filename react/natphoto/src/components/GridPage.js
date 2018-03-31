import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'reactstrap';
import Pagination from 'react-js-pagination';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';
import SortDropdown from './SortDropdown.js';
import FilterDropdown from './FilterDropdown.js'
import { SyncLoader } from 'react-spinners';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import Datasort from 'react-data-sort';


export default class Grid extends Component {

 	constructor(props) {
		super(props);
    this.setSortBy = this.setSortBy.bind(this);
		this.state = {
			activePage: 1,
      sortBy: "title"
		}
	}

  setSortBy(param) {
    this.setState({sortBy: param});
  }

  handlePageChange(pageNumber) {
      console.log("Active page is: " + pageNumber);
      this.setState({activePage: pageNumber});
  }

  datasort () {
    let endVal = (this.state.activePage * 16)
    let startVal = ((this.state.activePage - 1) * 16)
    const slice = this.props.data.slice(startVal, endVal);
    return (
      <Datasort
        data={slice}
        sortBy={this.state.sortBy}
        render={({
          data
        }) => {
          return (
            data.map((elem, i) =>
              <GridItemCard key={i} data={elem} />
            )
          );
        }}
      />
    );
  }

	render() {
		return (
			<div className="body" id={this.props.id}>
        <Container>
          <Row>
             <Col sm="4"></Col>
             <Col className="gridTitle" sm="4"><h1>{this.props.title}</h1></Col>
             <Col sm="4"></Col>
          </Row>
          <Row className="dropDowns">
             <Col sm="4"></Col>
             <Col sm="1" className="sortDrop">
               <SortDropdown dropTitle="Sort by"
                             items={this.props.sortAttributes}
                             types={this.props.sortTypes}
                             func={this.setSortBy}/>
             </Col>
             <Col sm="1" className="filterLabel">Filter by:</Col>
             <Col sm="1" className="sortDrop"><FilterDropdown dropTitle={this.props.sortAttributes[0]} options={["tony", "bri", "dayanny"]} /></Col>
             <Col sm="1" className="sortDrop"><FilterDropdown dropTitle={this.props.sortAttributes[1]} options={["tony", "bri", "dayanny"]} /></Col>
             <Col sm="1" className="sortDrop"><FilterDropdown dropTitle={this.props.sortAttributes[2]} options={["tony", "bri", "dayanny"]} /></Col>
          </Row>
					<Row>
            {this.datasort()}
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

  constructor(props) {
    super(props)
    this.state = { loading: true };
  }

  handleLoad(image) {
      this.setState({ loading: false });
  }

  // Wait until the image is loaded, then display it. Display a spinner in
  // its place when it is still loading.
  renderImage() {
    if (this.state.loading) {
      return (
        <div>
        <Row>
          <div className="col-xs-6 col-xs-offset-3 spinner">
            <SyncLoader color={"#009d00"} size={10} margin={"5px"} />
          </div>
        </Row>
        <CardImg className="hidden"
             src={this.props.data.img}
             alt="Card image cap" onLoad={this.handleLoad.bind(this)} />
        </div>
      );
    } else {
      return (
        <CardImg className="imgInCard"
             src={this.props.data.img}
             alt="Card image cap" onLoad={this.handleLoad.bind(this)} />
      );
    }
  }

  render() {
      return(
        <Col xl="3" lg="3" md="3" sm="3">
          <div className="cardDiv">
            <Card id={this.props.data.detail_url}>
              <Link to={this.props.data.detail_url}>
              {this.renderImage()}
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
