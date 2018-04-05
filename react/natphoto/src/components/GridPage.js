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
    this.setFilter1 = this.setFilter1.bind(this);
    this.setFilter2 = this.setFilter2.bind(this);
    this.filter1Data = this.filter1Data.bind(this);
    this.filter1ConditionValue = this.filter1ConditionValue.bind(this);
    this.filter1ConditionRange = this.filter1ConditionRange.bind(this);
    this.filter2Data = this.filter2Data.bind(this);
    this.filter2ConditionValue = this.filter2ConditionValue.bind(this);
    this.filter2ConditionRange = this.filter2ConditionRange.bind(this);


		this.state = {
      activePage: 1,
      sortBy: "sort1",
      direction: "asc",
      filter1: "",
      filter2: ""
		}
	}

  filter1ConditionRange(param) {
    var condition = this.state.filter1.split(' ');
    if(condition[0] === "<") {
      return param.filter1 < parseInt(condition[1], 10);
    } else if(condition[0] === ">") {
      return param.filter1 > parseInt(condition[1], 10);
    }
    var lower = parseInt(condition[0], 10);
    var upper = parseInt(condition[2], 10);
    return param.filter1 >= lower && param.filter1 <= upper;
  }

  filter1ConditionValue(param) {
    var condition = this.state.filter1;
    if(condition === "< 2000") {
      condition.split(" ");
      condition = parseInt(condition[1], 10);
      var value = parseInt(param.filter1, 10);
      return value < condition;
    }
    return param.filter1 === condition;
  }

  filter2ConditionRange(param) {
    var condition = this.state.filter2.split(' ');
    if(condition[0] === "<") {
      return param.filter2 < parseInt(condition[1], 10);
    } else if(condition[0] === ">") {
      return param.filter2 > parseInt(condition[1], 10);
    }
    var lower = parseInt(condition[0], 10);
    var upper = parseInt(condition[2], 10);
    //change name eventually
    return param.filter2 >= lower && param.filter2 <= upper;
  }

  filter2ConditionValue(param) {
    var condition = this.state.filter2;
    if(condition === "< 2000") {
      condition.split(" ");
      condition = parseInt(condition[1], 10);
      var value = parseInt(param.filter2, 10);
      return value < condition;
    }
    return param.filter2 === condition;
  }

  filter1Data() {
    if (this.props.filter1Range) {
      return this.props.data.filter(this.filter1ConditionRange);
    } else {
      return this.props.data.filter(this.filter1ConditionValue);
    }
  }

  filter2Data() {
    if (this.props.filter2Range) {
      return this.props.data.filter(this.filter2ConditionRange);
    } else {
      return this.props.data.filter(this.filter2ConditionValue);
    }
  }

  setSortBy(sort, direction) {
    this.setState({sortBy: sort, direction: direction});
  }

  setFilter1(filter) {
    this.setState({filter1: filter});
  }

  setFilter2(filter) {
    this.setState({filter2: filter});
  }

  handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber});
  }

  getCards(data) {
    let endVal = (this.state.activePage * 16)
    let startVal = ((this.state.activePage - 1) * 16)
    const slice = data.slice(startVal, endVal)
    return slice.map((elem, i) =>
      <GridItemCard key={i} data={elem} />
    )
  }

	render() {

    const {sortBy, direction} = this.state

    var filterData = "";
    if(this.state.filter2 !== "") {
      filterData = this.filter2Data();
    } else {
      filterData = this.props.data;
    }

		return (
        <Container>
          <Row>
             <Col sm="4"></Col>
             <Col className="gridTitle" sm="4"><h1>{this.props.title}</h1></Col>
             <Col sm="4"></Col>
          </Row>
          <Row className="dropDowns">
             <Col sm="4"></Col>
             <Col sm="1">
               <SortDropdown dropTitle="Sort by"
                             items={this.props.sortAttributes}
                             types={this.props.sortTypes}
                             sortFunc={this.setSortBy}/>
             </Col>
             <Col sm="1" className="filterLabel">Filter by:</Col>
             <Col sm="1"><FilterDropdown dropTitle={this.props.filterAttributes[0]} options={this.props.filterOptions1} filterFunc={this.setFilter1}/></Col>
             <Col sm="1"><FilterDropdown dropTitle={this.props.filterAttributes[1]} options={this.props.filterOptions2} filterFunc={this.setFilter2}/></Col>
          </Row>
          <Datasort
            data={filterData}
            sortBy={sortBy}
            direction={direction}
            render={({
              data,
              setSortBy,
              sortBy,
              setDirection,
              direction
            }) => {
              return (
                <div>
                <Row>
                  {this.getCards(data)}
                </Row>
                <Row>
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={16}
                    totalItemsCount={this.props.data.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    className = "pagination"
                  />
                </Row>
                </div>

              );
            }}
          />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        </Container>
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
